import NavBar from "./Navbar";

export default function Header() {
  return (
    <header className="bg-slate-800 sm:text-lg text-gray-200 hover:text-gray-200 px-4 w-screen flex justify-between items-center fixed top-0 shadow hover:shadow-lg shadow-black hover:shadow-black bg-opacity-50 hover:bg-opacity-80 backdrop-blur-md h-8 hover:h-14 transition-all duration-500 z-50">
      <p className="text">
        Franks P<span className="bounce"></span>rtfoli
        <span className="bounce"></span>
      </p>

      <NavBar />
    </header>
  );
}
