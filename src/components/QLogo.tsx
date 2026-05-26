export default function QLogo({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14.5" cy="15" r="11" stroke="currentColor" strokeWidth="2.5" />
      <path d="M22 22.5L28.5 29" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M24 29L29 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}
