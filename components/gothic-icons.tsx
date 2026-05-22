type IconProps = {
  className?: string;
  title?: string;
};

export function CrescentMoon({ className, title = "Crescent moon" }: IconProps) {
  return (
    <svg
      aria-label={title}
      className={className}
      fill="none"
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M69.6 76.2C46.8 80.3 25.1 64.8 21 42.1 18 25.5 25.2 9.4 38 0.3c-2.1 7.1-2.6 14.9-1.2 22.7 4.2 23.4 25.6 39.5 48.3 37.6-3.9 7.8-9.2 13.4-15.5 15.6Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        d="M34.2 31.4c4.6 14 14.3 23.6 29.1 28.8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        opacity="0.45"
      />
    </svg>
  );
}

export function RavenSigil({ className, title = "Raven sigil" }: IconProps) {
  return (
    <svg
      aria-label={title}
      className={className}
      fill="none"
      viewBox="0 0 132 92"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 61.6c19.1-8.9 34.1-24.7 45.5-43.8 7.9 18 23.1 29.5 43.7 34.2l24.8 5.6-24 5.9c-24 5.9-47.3 14.4-69.3 25.5 7.7-9 15.1-17.8 22.2-26.4-13.3 2.1-26.9 1.7-42.9-1Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        d="M56.3 18.8c-4.4 17.6-2 31.7 7.3 42.3M72 43.9c8 3.1 16.1 4.8 24.4 5.3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
        opacity="0.55"
      />
      <path d="M91 45.8h.1" stroke="currentColor" strokeLinecap="round" strokeWidth="5" />
    </svg>
  );
}

export function SkeletonKey({ className, title = "Skeleton key" }: IconProps) {
  return (
    <svg
      aria-label={title}
      className={className}
      fill="none"
      viewBox="0 0 128 42"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="21" cy="21" r="13" stroke="currentColor" strokeWidth="3" />
      <circle cx="21" cy="21" r="5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M34 21h82M95 21v11M106 21v8M74 21v-9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        d="M48 15c9.8 3.9 19.8 3.8 30 0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        opacity="0.55"
      />
    </svg>
  );
}

export function OrnateCross({ className, title = "Ornate cross" }: IconProps) {
  return (
    <svg
      aria-label={title}
      className={className}
      fill="none"
      viewBox="0 0 74 112"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37 5v102M16 33h42M24 53h26"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="4"
      />
      <path
        d="M37 5c7.2 7.2 7.2 14.4 0 21.6C29.8 19.4 29.8 12.2 37 5ZM16 33c5.8-5 11.6-5 17.4 0-5.8 5-11.6 5-17.4 0ZM58 33c-5.8-5-11.6-5-17.4 0 5.8 5 11.6 5 17.4 0ZM37 107c-8.4-8.1-8.4-16.2 0-24.3 8.4 8.1 8.4 16.2 0 24.3Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
