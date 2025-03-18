// Static 
import Card from "@/components/Card"
import { playlists } from "@/example_data"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Playlists() {
    return (
        <div className="flex flex-col min-h-screen min-w-screen">
            <Header />
            <main className="flex flex-col flex-grow justify-center items-center p-4">
                <div className="p-4">
                    <h1 className="text-green-500 text-2xl font-bold mb-4">Playlists</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {playlists.map((playlist) => (
                            <Card key={playlist.id} playlist={playlist}></Card>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};