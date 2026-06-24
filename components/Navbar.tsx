export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-gray-800 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <span className="text-2xl font-bold text-blue-500">Boniwe.dev</span>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}