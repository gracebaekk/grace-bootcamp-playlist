// Dynamic
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlaylistInfo from "@/components/PlaylistInfo";
import SongList from "@/components/SongList";
import Link from "next/link";
import PlaylistContext from "@/context/PlaylistContext";
import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";

export default function PlaylistPage() {
    const router = useRouter();
    const { id } = router.query;
    const { playlists } = useContext(PlaylistContext)!;
    const { deletePlaylist } = useContext(PlaylistContext)!;
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const playlist = playlists.find((p) => p.id === id);

    useEffect(() => {
        if (playlist) {
            setTitle(playlist.title);
            setDescription(playlist.description);
        }
    }, [playlist]);

    if (!playlist) {
        return <h1>Playlist Not Found</h1>;
    }

    const handleSave = () => {
        // integrate with context editPlaylist() once ready
        setIsEditing(false);
    };

    const handleDelete = () => {
        deletePlaylist(id as string);
        router.push("/playlists");
    };

    return (
        <div className="flex flex-col min-h-screen min-w-screen">
            <Header />
            <main className="flex flex-col flex-1 ml-30 mr-30 mt-10 gap-5">
                <Link href="/playlists" className="text-green-500 text-lg">← Back to Playlists</Link>

                {isEditing ? (
                    <div className="flex gap-3">
                        <button onClick={handleSave} className="bg-green-500 w-32 text-white p-2 rounded text-lg">Save Changes</button>
                        <button onClick={() => setIsEditing(false)} className="bg-gray-500 w-32 text-white p-2 rounded text-lg">Exit</button>
                    </div>
                ) : (
                    <button onClick={() => setIsEditing(true)} className="bg-green-500 w-32 text-white p-2 rounded text-lg">Edit Playlist</button>
                )}

                <PlaylistInfo playlist={{ ...playlist, title, description }} isEditing={isEditing} setTitle={setTitle} setDescription={setDescription} />
                <SongList playlist={playlist} isEditing={isEditing} />
            </main>
            <Footer />
        </div>
    );
}
