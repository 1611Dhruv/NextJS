import "./global.css";

export default function RootLayout({ children }) {
  return <html className="bg-black text-white">{children}</html>;
}
