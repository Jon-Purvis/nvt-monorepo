import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground px-6">
      <div className="text-center max-w-md">
        {/* Large 404 Number */}
        <h1 className="text-6xl font-serif font-bold mb-4">404</h1>

        {/* Description */}
        <p className="text-lg text-muted-foreground mb-6">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>

        {/* Button-like link */}
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-md bg-primary text-primary-foreground 
          font-medium shadow-sm transition hover:bg-primary/90"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
