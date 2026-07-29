import { Link } from "wouter";
import { SiGithub } from "react-icons/si";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="md:col-span-1 space-y-4">
            <Logo className="scale-90 origin-left" />
            <p className="text-sm text-muted-foreground mt-4 max-w-xs">
              Giving AI agents full, programmatic control over Word, Excel, and PowerPoint files without the bloat.
            </p>
          </div>
          
          <div>
            <h3 className="font-mono text-sm font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/how-to" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  How To
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-mono text-sm font-semibold text-foreground mb-4">Developer</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/credentials" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Credentials
                </Link>
              </li>
              <li>
                <a 
                  href="https://github.com/yusufsafary" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <SiGithub className="w-4 h-4" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-mono text-sm font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2025 Terminal Office. Apache 2.0 License.
          </p>
          <div className="font-mono text-xs text-muted-foreground">
            v1.0.0 (stable)
          </div>
        </div>
      </div>
    </footer>
  );
}
