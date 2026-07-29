import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { CodeBlock } from "@/components/CodeBlock";
import { Terminal, FileText, LayoutGrid, Presentation, Zap, Lock, Globe } from "lucide-react";
import * as Tabs from "@radix-ui/react-tabs";

import heroImg from "../assets/hero.png";
import demo1Img from "../assets/demo-1.png";
import demo2Img from "../assets/demo-2.png";
import demo3Img from "../assets/demo-3.png";

export default function Home() {
  useEffect(() => {
    document.title = "Terminal Office | AI Agent Document Control";
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                v1.0.0 is live
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
                Give AI a terminal for <span className="text-primary">Office</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                The world's first CLI tool that gives AI agents full, programmatic control over Word, Excel, and PowerPoint files. No Office installation required. Single binary. Works everywhere.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/how-to" 
                  className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <Terminal className="mr-2 h-5 w-5" />
                  Read the Docs
                </Link>
                <Link 
                  href="/credentials" 
                  className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-base font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Get API Key
                </Link>
              </div>
              
              <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground font-mono">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="h-8 w-8 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span>Used by 1,000+ AI engineers</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative lg:ml-auto w-full max-w-lg"
            >
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-primary/20 to-primary/0 blur-xl"></div>
              <div className="relative rounded-xl border border-border bg-[#0d1117] shadow-2xl overflow-hidden">
                <div className="flex items-center border-b border-border bg-muted/30 px-4 py-3">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-destructive/80"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                    <div className="h-3 w-3 rounded-full bg-primary/80"></div>
                  </div>
                  <div className="mx-auto text-xs font-mono text-muted-foreground">terminaloffice</div>
                </div>
                <div className="p-6 font-mono text-sm leading-relaxed text-[#e6edf3] min-h-[320px]">
                  <div className="text-primary font-bold mb-2"># Agent workflow execution started</div>
                  <div className="mb-2">
                    <span className="text-primary">$</span> <span className="typing-effect inline-block">terminaloffice create doc report.docx</span>
                  </div>
                  <div className="text-muted-foreground mb-4">Created empty document report.docx</div>
                  
                  <div className="mb-2">
                    <span className="text-primary">$</span> terminaloffice add doc report.docx --heading "Q3 Financials"
                  </div>
                  <div className="text-muted-foreground mb-4">Added heading 1 to document</div>
                  
                  <div className="mb-2">
                    <span className="text-primary">$</span> terminaloffice add doc report.docx --text "Revenue up 45%."
                  </div>
                  <div className="text-muted-foreground mb-4">Added paragraph to document</div>
                  
                  <div className="mb-2">
                    <span className="text-primary">$</span> terminaloffice export report.docx --pdf
                  </div>
                  <div className="text-primary">Success! Exported report.pdf</div>
                  <div className="mt-4 flex animate-pulse">
                    <span className="text-primary">$</span> <span className="w-2 h-4 bg-primary ml-1 block"></span>
                  </div>
                </div>
              </div>
              
              {/* Decorative Hero Illustration floating behind */}
              <div className="absolute -right-20 -bottom-20 -z-10 opacity-40 mix-blend-screen w-80 h-80 pointer-events-none">
                <img src={heroImg} alt="Decorative doodle" className="w-full h-full object-cover rounded-full blur-[2px]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES ROW */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">The missing link for AI agents</h2>
            <p className="text-muted-foreground">
              Large language models struggle to write binary file formats natively. Terminal Office bridges the gap with a clean, programmatic interface.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-xl p-8 border border-border hover:border-primary/50 transition-colors">
              <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20">
                <FileText className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Word Automation</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Generate reports, inject variables into templates, compile legal documents, and append content sequentially.
              </p>
              <div className="text-xs font-mono text-primary bg-primary/5 p-2 rounded border border-primary/10">
                terminaloffice create doc
              </div>
            </div>
            
            <div className="bg-background rounded-xl p-8 border border-border hover:border-primary/50 transition-colors">
              <div className="h-12 w-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-6 border border-green-500/20">
                <LayoutGrid className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excel Data Ops</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Read cells, write massive datasets without memory crashes, update formulas, and format tables directly from CLI.
              </p>
              <div className="text-xs font-mono text-primary bg-primary/5 p-2 rounded border border-primary/10">
                terminaloffice set cell
              </div>
            </div>
            
            <div className="bg-background rounded-xl p-8 border border-border hover:border-primary/50 transition-colors">
              <div className="h-12 w-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 border border-orange-500/20">
                <Presentation className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">PowerPoint Decks</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Let your agents assemble pitch decks, insert charts, modify slides, and apply themes without Python boilerplate.
              </p>
              <div className="text-xs font-mono text-primary bg-primary/5 p-2 rounded border border-primary/10">
                terminaloffice add slide
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
            <div className="w-full lg:w-1/2">
              <div className="rounded-xl overflow-hidden border border-border shadow-xl">
                <img src={demo1Img} alt="Word generation demo" className="w-full h-auto object-cover aspect-video" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary mb-2">
                1
              </div>
              <h2 className="text-3xl font-bold">Write documents sequentially</h2>
              <p className="text-muted-foreground text-lg">
                Instead of forcing an LLM to output a base64 encoded docx file (which usually fails), agents can stream commands to build the document piece by piece. It's stable, deterministic, and easily debuggable.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center mb-24">
            <div className="w-full lg:w-1/2">
              <div className="rounded-xl overflow-hidden border border-border shadow-xl">
                <img src={demo2Img} alt="Excel parsing demo" className="w-full h-auto object-cover aspect-video" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary mb-2">
                2
              </div>
              <h2 className="text-3xl font-bold">Pipe data straight to cells</h2>
              <p className="text-muted-foreground text-lg">
                Process logs, JSON, or CSV data from stdin directly into specific sheets and cells. Perfect for cron jobs and automated reporting pipelines that need to output formatted Excel files.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <div className="rounded-xl overflow-hidden border border-border shadow-xl">
                <img src={demo3Img} alt="PowerPoint demo" className="w-full h-auto object-cover aspect-video" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary mb-2">
                3
              </div>
              <h2 className="text-3xl font-bold">Assemble decks programmatically</h2>
              <p className="text-muted-foreground text-lg">
                Create templates with placeholder text, then have your agent clone the template and swap the placeholders with real insights generated from your backend data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK START */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Install anywhere. Run everywhere.</h2>
          
          <Tabs.Root defaultValue="macos" className="w-full border border-border rounded-xl bg-background overflow-hidden">
            <Tabs.List className="flex w-full border-b border-border bg-muted/30 overflow-x-auto">
              <Tabs.Trigger 
                value="macos" 
                className="px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary outline-none transition-colors whitespace-nowrap"
              >
                macOS
              </Tabs.Trigger>
              <Tabs.Trigger 
                value="linux" 
                className="px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary outline-none transition-colors whitespace-nowrap"
              >
                Linux
              </Tabs.Trigger>
              <Tabs.Trigger 
                value="windows" 
                className="px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary outline-none transition-colors whitespace-nowrap"
              >
                Windows
              </Tabs.Trigger>
              <Tabs.Trigger 
                value="npm" 
                className="px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary outline-none transition-colors whitespace-nowrap"
              >
                npm
              </Tabs.Trigger>
            </Tabs.List>
            
            <div className="p-6">
              <Tabs.Content value="macos" className="outline-none">
                <CodeBlock code="$ brew install terminaloffice/tap/terminaloffice" />
              </Tabs.Content>
              <Tabs.Content value="linux" className="outline-none">
                <CodeBlock code="$ curl -fsSL https://terminaloffice.dev/install.sh | bash" />
              </Tabs.Content>
              <Tabs.Content value="windows" className="outline-none">
                <CodeBlock code="iwr -useb https://terminaloffice.dev/install.ps1 | iex" language="powershell" />
              </Tabs.Content>
              <Tabs.Content value="npm" className="outline-none">
                <CodeBlock code="$ npm install -g @terminaloffice/cli" />
              </Tabs.Content>
            </div>
            
            <div className="bg-muted/10 p-6 border-t border-border">
              <h4 className="text-sm font-semibold mb-3">Next, give it to your agent:</h4>
              <CodeBlock 
                code={`$ terminaloffice generate-skill > .cursorrules\n$ echo "Now you can write Office documents."`} 
              />
            </div>
          </Tabs.Root>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center justify-center p-4">
              <Zap className="h-8 w-8 text-primary mb-3" />
              <h4 className="font-semibold mb-1">Blazing Fast</h4>
              <p className="text-sm text-muted-foreground">Written in Rust. Sub-millisecond startup times.</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <Lock className="h-8 w-8 text-primary mb-3" />
              <h4 className="font-semibold mb-1">Fully Local</h4>
              <p className="text-sm text-muted-foreground">No cloud dependencies required for base functionality.</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <Globe className="h-8 w-8 text-primary mb-3" />
              <h4 className="font-semibold mb-1">Open Source</h4>
              <p className="text-sm text-muted-foreground">Core engine is Apache 2.0. Inspect the code yourself.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Ready to empower your agents?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Stop dealing with messy Python scripts and failed file generations. Use the tool built for the AI era.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/credentials" 
              className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-md bg-primary px-10 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Get Free API Key
            </Link>
            <a 
              href="https://github.com/yusufsafary" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-md border border-input bg-background px-10 text-lg font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Star on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
