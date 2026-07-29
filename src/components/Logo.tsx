export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary flex-shrink-0">
        {/* Terminal Window Box */}
        <path d="M12 25C13 22 16 20 22 19C38 17 78 18 83 20C88 21 91 24 92 29C94 40 93 72 90 82C88 88 85 90 78 91C62 93 22 92 16 90C11 88 8 85 7 79C5 68 8 36 12 25Z" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Window Header Line */}
        <path d="M8 38C28 39 72 37 93 39" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
        {/* Window Buttons */}
        <path d="M18 29C18.5 29 19 29.5 19 30" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
        <path d="M28 29C28.5 29 29 29.5 29 30" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
        <path d="M38 29C38.5 29 39 29.5 39 30" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
        
        {/* CLI Prompt Arrow */}
        <path d="M22 55L34 65L22 75" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* CLI Cursor */}
        <path d="M40 75H52" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
        
        {/* Tiny Document Icon floating */}
        <path d="M68 50H82V70H68V50Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M72 56H78M72 60H78M72 64H75" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      </svg>
      <span className="font-mono font-bold text-xl tracking-tight text-foreground hidden sm:block">
        Terminal Office
      </span>
    </div>
  );
}
