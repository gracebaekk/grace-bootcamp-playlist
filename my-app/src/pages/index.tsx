import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="container">
      <Header />
      <div className="main-content">
        <button className="playlist-button">Go to playlists</button>
      </div>
      <Footer />
    </div>
  );
}