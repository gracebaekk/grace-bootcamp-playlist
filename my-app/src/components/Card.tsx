import {Playlist} from "@/types/playlist";
import Link from "next/link";

export default function Card({playlist}: { playlist: Playlist }) {
    return (
        <Link href={`/playlists/${playlist.id}`} passHref>
            <div className="border border-gray-400 rounded-md p-5 h-36 w-70">
                <h1 className="text-white text-2xl font-semibold">{playlist.title}</h1>
                <p className="text-gray-400">{playlist.description}</p>
                <p className="text-gray-500">{playlist.songs.length} songs</p>
            </div>
        </Link>
        
    );
}