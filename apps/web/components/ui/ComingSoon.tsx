"use client";

import Button from "@/components/ui/Button";

interface ComingSoonProps {
  title?: string;
  message?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function ComingSoon({
  title = "Coming Soon",
  message = "This page is under construction.",
  buttonText = "Return Home",
  buttonHref = "/",
}: ComingSoonProps): React.JSX.Element {
  return (
    <div className="flex flex-1 items-center justify-center min-h-[calc(100vh-80px)] px-6">
      <div className="text-center max-w-lg mx-auto">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">{title}</h1>

        <p className="mb-6 text-lg text-muted-foreground md:text-xl">
          {message}
        </p>

        <Button href={buttonHref}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
