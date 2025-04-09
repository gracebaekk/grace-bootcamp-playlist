export type Song = {
    id: string;
    title: string;
    artist: string;
    album: string;
    duration: string;
    isEditing: boolean;
};

export type Playlist = {
    id: string;
    title: string;
    description: string;
    songs: Song[];
};

export interface PlaylistContextType {
    playlists: Playlist[];
    addPlaylist: (title: string, description: string) => void;
    deletePlaylist: (id: string) => void;
    editPlaylist: (id: string, title: string, description: string) => void;
    addSong: (playlistId: string, song: Song) => void;
    deleteSong: (playlistId: string, songId: string) => void;
}

export interface PlaylistInfoProps {
    playlist: { title: string; description: string };
    isEditing: boolean;
    setTitle: (title: string) => void;
    setDescription: (desc: string) => void;
}

export interface SongListProps {
    playlist: Playlist;
    isEditing: boolean;
}