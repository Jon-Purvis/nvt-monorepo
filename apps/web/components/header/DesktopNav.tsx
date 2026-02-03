import NavLink from "./NavLink";

interface DesktopNavProps {
  links: { name: string; href: string }[];
}

export default function DesktopNav({ links }: DesktopNavProps) {
  return (
    <nav className="hidden sm:flex gap-8">
      {links.map((link) => (
        <NavLink
          key={link.href}
          href={link.href}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          activeClassName="text-primary border-b-2 border-primary"
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
}
