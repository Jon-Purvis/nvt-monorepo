import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const navLinks = [
  { name: "Welcome", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <>
      <DesktopNav links={navLinks} />
      <MobileNav links={navLinks} />
    </>
  );
}
