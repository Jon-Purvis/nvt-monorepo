import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <Navbar />
        </div>
      </div>
    </header>
  );
}
