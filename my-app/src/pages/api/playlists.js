export default function handler(req, res) {
  if (req.method === 'GET') {
    const playlists = [
      { id: "1", title: "Chill Vibes", description: "Relaxing tracks for a calm day." },
      { id: "2", title: "Workout Hits", description: "High energy tracks to power your workout." },
      { id: "3", title: "Indie Mix", description: "Discover new indie artists and hidden gems." }
    ];
    res.status(200).json({ playlists });
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
