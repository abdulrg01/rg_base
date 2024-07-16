import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { IBM_Plex_Sans } from "next/font/google";
// import Topbar from "./shared/Topbar";
// import LeftSidebar from "./shared/LeftSidebar";
// import RightSidebar from "./shared/RightSidebar";
// import Bottombar from "./shared/Bottombar";
// import { useRefreshMutation } from "@/redux/auth/authApiSlice";
// import { selectCurrentToken } from "@/redux/auth/authSlice";

const IBM_Plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

const PersistLogin = ({ children }) => {
  // const token = useSelector(selectCurrentToken);
  const effectRan = useRef(false);

  const [trueSuccess, setTrueSuccess] = useState(false);

  // const [refresh, { isUninitialized, isLoading, isSuccess, isError, error }] =
  //   useRefreshMutation();

  useEffect(() => {
    if (effectRan.current === true || process.env.NODE_ENV !== "development") {
      // React 18 Strict Mode

      const verifyRefreshToken = async () => {
        console.log("verifying refresh token");
        try {
          //const response =
          await refresh();
          //const { accessToken } = response.data
          setTrueSuccess(true);
        } catch (err) {
          console.error(err);
        }
      };

      if (!token) verifyRefreshToken();
    }

    return () => (effectRan.current = true);

    // eslint-disable-next-line
  }, []);

  let content;

  if (isLoading) {
    //token: no
    console.log("loading");
    content = <p className="text-light-1">Loading...</p>;
  } else if (isError) {
    //token: no
    console.log("error");
    content = (
      <p className="">
        {`${error?.data?.message} - `}
        <Link href="/login" className="text-white">
          Please login again
        </Link>
        .
      </p>
    );
  } else if (isSuccess && trueSuccess) {
    //token: yes
    console.log("success");

    content = (
      <div className={cn("font-IBMPlex antialiased", IBM_Plex.variable)}>
        {/* <Topbar /> */}

        <main className="flex flex-row max-w-[1100px] mx-auto mt-10">
          {/* <LeftSidebar /> */}

          <section className="main-container">
              {children}
          </section>

          {/* <RightSidebar /> */}
        </main>

        {/* <Bottombar /> */}
      </div>
    );
  } else if (token && isUninitialized) {
    //token: yes
    console.log("token and uninit");
    console.log(isUninitialized);

    content = (
      <div className={cn("font-IBMPlex antialiased", IBM_Plex.variable)}>
      {/* <Topbar /> */}

      <main className="flex flex-row max-w-[1100px] mx-auto mt-10">
        {/* <LeftSidebar /> */}

        <section className="main-container">
            {children}
        </section>

        {/* <RightSidebar /> */}
      </main>

      {/* <Bottombar /> */}
    </div>
    );
  }

  return content;
};
export default PersistLogin;
