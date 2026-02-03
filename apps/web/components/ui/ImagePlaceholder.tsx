/**
 * A placeholder component displayed when an image is not available.
 * Provides a visually appealing fallback with customizable messaging.
 */

interface ImagePlaceholderProps {
  /** Text to display in the placeholder */
  message?: string;
  /** Additional CSS classes for the container */
  className?: string;
}

export default function ImagePlaceholder({
  message = "Photo Coming Soon",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`absolute inset-0 bg-gradient-to-br from-amber-900/20 via-card to-amber-800/10 flex flex-col items-center justify-center ${className}`}
    >
      {/* Decorative diagonal pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <pattern
            id="imagePlaceholderDiagonalLines"
            patternUnits="userSpaceOnUse"
            width="10"
            height="10"
          >
            <path
              d="M0,10 L10,0"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-foreground"
            />
          </pattern>
          <rect
            width="100%"
            height="100%"
            fill="url(#imagePlaceholderDiagonalLines)"
          />
        </svg>
      </div>

      {/* Icon and message */}
      <div className="relative z-10 text-center px-4">
        <div className="w-12 h-12 mx-auto mb-3 rounded-full border-2 border-amber-600/30 flex items-center justify-center">
          <svg
            className="w-6 h-6 text-amber-600/50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
            />
          </svg>
        </div>
        <p className="text-sm font-medium text-muted-foreground/70 tracking-wide uppercase">
          {message}
        </p>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
    </div>
  );
}
