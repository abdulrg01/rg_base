import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Heading from "../components/Heading";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Heading title={"abubakar"} description="main" keywords="" />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
