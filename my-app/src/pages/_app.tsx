import "@/styles/globals.css";
import { PlaylistProvider } from "../context/PlaylistContext";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  // <PlaylistProvider>
    // return <Component {...pageProps} />;
  // </PlaylistProvider>

  return (
    <PlaylistProvider>
      <Component {...pageProps} />
    </PlaylistProvider>
  );
}
