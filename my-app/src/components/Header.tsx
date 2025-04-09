import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-gray-900 text-white/60 flex justify-between p-5 border-b border-gray-600">
            <ul className="text-green-500 font-bold text-2xl">Playlist Creator</ul>
            <div className="flex justify-between items-center w-33 text-lg">
                <Link href="/">Home</Link>
                <Link href="/playlists">Playlists</Link>
            </div>
        </header>
    );
}
