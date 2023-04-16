import "./global.css";
import Link from "next/link";

export default function HomeLayout() {
  return (
    <html>
      <body>
        <nav className="navbar">
          <div className=" ">
            <Link href={"/"}>Game</Link>
          </div>
          <div className="">
            <Link href={"/about"}>About Us</Link>
          </div>
          <div className="">
            <Link
              href={
                "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              }
            >
              External Links
            </Link>
          </div>
        </nav>
      </body>
    </html>
  );
}
