import {Playlist} from "@/types/playlist";

export default function PlaylistInfo({playlist}: { playlist: Playlist }) {
    return (
        <div className="bg-gray-900 p-5 rounded">
            <h1 className="text-green-500 text-2xl font-bold mb-3">{playlist.title}</h1>
            <p className="text-gray-400 text-lg">{playlist.description}</p>
        </div>
    );
}