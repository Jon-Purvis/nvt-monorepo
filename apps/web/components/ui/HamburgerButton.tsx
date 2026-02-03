"use client";

interface HamburgerButtonProps {
  open: boolean;
  onClick: () => void;
}

export default function HamburgerButton({ open, onClick }: HamburgerButtonProps): React.JSX.Element {
  return (
    <button
      aria-label="Toggle menu"
      onClick={onClick}
      className="p-3 focus:outline-none"
    >
      <div className="flex flex-col justify-between w-6 h-6">
        <span
          className={`block h-0.5 w-full bg-foreground transform transition duration-300 ease-in-out ${
            open ? "rotate-45 translate-y-[11px]" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-full bg-foreground transition duration-300 ease-in-out ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-full bg-foreground transform transition duration-300 ease-in-out ${
            open ? "-rotate-45 -translate-y-[11px]" : ""
          }`}
        />
      </div>
    </button>
  );
}
