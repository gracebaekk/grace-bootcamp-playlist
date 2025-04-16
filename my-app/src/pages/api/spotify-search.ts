import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const query = req.query.q as string;

  if (!clientId || !clientSecret) {
    return res.status(500).json({ error: 'Spotify credentials missing' });
  }

  if (!query) {
    return res.status(400).json({ error: 'Missing search query' });
  }

  try {
    const authString = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${authString}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    });

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;
    const searchResponse = await fetch(`https://api.spotify.com/v1/search?type=track&limit=10&q=${encodeURIComponent(query)}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    const searchData = await searchResponse.json();

    const tracks = searchData.tracks.items.map((track: any) => ({
      id: track.id,
      name: track.name,
      artist: track.artists.map((a: any) => a.name).join(', '),
      album: track.album.name,
      image: track.album.images?.[0]?.url || '',
      duration_ms: track.duration_ms,
    }));

    res.status(200).json({ tracks });
  } catch (err) {
    console.error('Spotify API error:', err);
    res.status(500).json({ error: 'Failed to fetch from Spotify' });
  }
}
