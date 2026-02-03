"use client";

import { useState, useEffect } from "react";
import NavLink from "./NavLink";
import HamburgerButton from "../ui/HamburgerButton";

interface MobileNavProps {
  links: { name: string; href: string }[];
}

export default function MobileNav({ links }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open]);

  return (
    <div className="sm:hidden relative z-50">
      <div className="relative z-50">
        <HamburgerButton open={open} onClick={() => setOpen(!open)} />
      </div>

      {open && (
        <>
          {/* blurs backdrop and handles close when clicking something other than route option */}
          <div 
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            onClick={handleClose} 
          />

          {/* route option menu */}
          <div className="absolute top-full right-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg flex flex-col z-50">
            {links.map((link) => (
              <div key={link.href} onClick={handleClose}>
                <NavLink
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary block"
                  activeClassName="text-primary underline decoration-2 underline-offset-4"
                >
                  {link.name}
                </NavLink>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
