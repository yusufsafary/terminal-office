import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({ code, language = "bash", showLineNumbers = false }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Ultra-simple pseudo syntax highlighter for our specific needs
  const highlightCode = (text: string) => {
    // If it's a CLI command, color the prompt and command
    if (text.trim().startsWith("$")) {
      const lines = text.split("\n");
      return lines.map((line, i) => {
        if (line.trim().startsWith("$")) {
          const parts = line.split(" ");
          return (
            <span key={i} className="block">
              <span className="text-primary select-none">$ </span>
              <span className="text-accent-foreground">{parts[1]}</span>
              <span className="text-foreground"> {parts.slice(2).join(" ")}</span>
            </span>
          );
        }
        return <span key={i} className="block text-muted-foreground">{line}</span>;
      });
    }
    
    // For json or anything else, just return as is
    return text;
  };

  return (
    <div className="relative group rounded-lg overflow-hidden border border-border bg-[#0d1117]">
      <div className="flex items-center justify-between px-4 py-2 bg-muted/30 border-b border-border">
        <span className="text-xs font-mono text-muted-foreground lowercase">{language}</span>
        <button
          onClick={copyToClipboard}
          className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-md"
          aria-label="Copy code"
        >
          {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="!bg-transparent !p-0 !border-0 !m-0">
          <code className="font-mono text-sm leading-relaxed text-[#e6edf3]">
            {highlightCode(code)}
          </code>
        </pre>
      </div>
    </div>
  );
}
