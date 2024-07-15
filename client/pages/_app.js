import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Heading from "./Heading";

export default function App({ Component, pageProps }) {
  return (
      <ThemeProvider attribute="class">
      <Heading
        title={"abubakar"}
        description="portfolio"
        keywords=""
      />
        <Component {...pageProps} />
      </ThemeProvider>
  );
}
