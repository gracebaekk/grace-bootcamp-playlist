import {Playlist} from "@/types/playlist";
import {PlaylistInfoProps} from "@/types/playlist";
import { JSX } from "react";

export default function PlaylistInfo({ playlist, isEditing, setTitle, setDescription }: PlaylistInfoProps): JSX.Element {
    return (
        <div className="flex flex-col">
            {isEditing ? (
                <>
                    <input value={playlist.title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 mb-2 bg-gray-700 text-white rounded" />
                    <textarea value={playlist.description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 mb-2 bg-gray-700 text-white rounded" />
                </>
            ) : (
                <>
                    <h1 className="text-2xl font-bold text-white">{playlist.title}</h1>
                    <p className="text-gray-300">{playlist.description}</p>
                </>
            )}
      </div>
    );
  };
  
// export default function PlaylistInfo({playlist}: { playlist: Playlist }) {
//     return (
//         <div className="bg-gray-900 p-5 rounded">
//             <h1 className="text-green-500 text-2xl font-bold mb-3">{playlist.title}</h1>
//             <p className="text-gray-400 text-lg">{playlist.description}</p>
//         </div>
//     );
// }