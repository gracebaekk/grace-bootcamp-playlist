import { createContext, useState, ReactNode } from 'react'
import { Playlist, PlaylistContextType, Song } from '../types/playlist';
import { playlists as examplePlaylists } from "@/example_data";

const PlaylistContext = createContext<PlaylistContextType | null>(null);

export function PlaylistProvider({ children }: { children: ReactNode }) {
  const [playlists, setPlaylists] = useState<Playlist[]>(examplePlaylists);
  
  const addPlaylist = (title: string, description: string) => {
    setPlaylists([...playlists, { id: Date.now().toString(), title, description, songs: [] }]);
  };
    
  const deletePlaylist = (id: string) => {
    setPlaylists(playlists.filter((playlist) => playlist.id !== id));
  }

  const editPlaylist = (id: string, newTitle: string, newDescription: string) => {
    setPlaylists(playlists.map((playlist) => {
      if (playlist.id === id) {
        return {...playlist, title: newTitle, description: newDescription};
      } else {
        return playlist;
      }
    }));
  }

  const addSong = (playlistId: string, song: Song) => {
    setPlaylists(playlists.map((playlist) => {
      if (playlist.id === playlistId) {
        return { ...playlist, songs: [...playlist.songs, song] };
      } else {
        return playlist;
      }
    }));
  }

  const deleteSong = (playlistId: string, songId: string) => {
    setPlaylists(playlists.map((playlist) => {
      if (playlist.id === playlistId) {
        return { ...playlist, songs: playlist.songs.filter((song) => song.id !== songId)};
      } else {
        return playlist;
      }
    }));
  }
    
  return (
    <PlaylistContext.Provider value={{ playlists, addPlaylist, deletePlaylist, editPlaylist, addSong, deleteSong }}>
      {children}
    </PlaylistContext.Provider>
  );
};

// export function usePlaylists() {
//   const context = useContext(PlaylistContext);
//     // if (!context) {
//     //   throw new Error("usePlaylists must be used within a PlaylistProvider");
//     // }
//   return context;
// }
  
export default PlaylistContext;