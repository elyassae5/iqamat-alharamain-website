// Arch mark used in the navbar and footer; matches the favicon.
export default function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <rect width="32" height="32" rx="9" fill="currentColor" />
      <path d="M9.5 27V16.5C9.5 10.5 12.4 6.5 16 6.5s6.5 4 6.5 10V27Z" fill="var(--logo-arch, #F3EDE3)" />
      <path d="M12.5 27V17c0-4.4 1.5-7 3.5-7s3.5 2.6 3.5 7v10Z" fill="currentColor" />
      <circle cx="16" cy="6.6" r="1.8" fill="#C9763F" />
    </svg>
  );
}
