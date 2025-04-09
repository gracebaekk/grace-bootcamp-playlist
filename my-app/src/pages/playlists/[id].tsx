// Dynamic
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import PlaylistInfo from "@/components/PlaylistInfo"
import SongList from "@/components/SongList"
import { playlists } from "@/example_data"
import Link from "next/link";
import { useRouter } from "next/router";

export default function PlaylistPage() {
    const router = useRouter();
    const { id } = router.query;
    const playlist = playlists.find((p) => p.id === id);
    if (!playlist) {
        return <h1>Playlist Not Found</h1>; // Handle missing playlist
    }

    return (
        <div className="flex flex-col min-h-screen min-w-screen">
            <Header />
            <main className="flex flex-col flex-1 ml-30 mr-30 mt-10 gap-5">
                <Link href="/playlists" className="text-green-500 text-lg">Back to Playlists</Link>
                <button className="bg-green-500 w-32 text-white p-2 rounded text-lg">Edit Playlist</button>
                <PlaylistInfo playlist={playlist} />
                <SongList playlist={playlist} />
            </main>
            <Footer />
        </div>
        
    );
}