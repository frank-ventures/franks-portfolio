import NavBar from "./Navbar";

export default function Header() {
  return (
    <header className="bg-slate-300 w-full flex justify-between">
      <p>I am the header</p>
      <NavBar />
    </header>
  );
}
