import { useEffect } from "react";
import { CodeBlock } from "@/components/CodeBlock";
import * as Tabs from "@radix-ui/react-tabs";
import { Terminal } from "lucide-react";

export default function HowTo() {
  useEffect(() => {
    document.title = "How To Use | Terminal Office";
  }, []);

  return (
    <div className="flex flex-col w-full pb-24">
      <section className="pt-20 pb-12 border-b border-border bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-sm text-muted-foreground mb-6 font-mono">
            <Terminal className="h-4 w-4 mr-2" />
            Documentation
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">How To Use</h1>
          <p className="text-xl text-muted-foreground">
            Everything you need to automate Office files from your terminal.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-12 flex flex-col md:flex-row gap-12">
        {/* Sidebar Nav */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-8">
            <div>
              <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Getting Started</h3>
              <ul className="space-y-2">
                <li><a href="#installation" className="text-sm text-foreground hover:text-primary transition-colors">Installation</a></li>
                <li><a href="#quick-start" className="text-sm text-foreground hover:text-primary transition-colors">Quick Start</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Reference</h3>
              <ul className="space-y-2">
                <li><a href="#commands" className="text-sm text-foreground hover:text-primary transition-colors">CLI Commands</a></li>
                <li><a href="#ai-agents" className="text-sm text-foreground hover:text-primary transition-colors">For AI Agents</a></li>
                <li><a href="#troubleshooting" className="text-sm text-foreground hover:text-primary transition-colors">Troubleshooting</a></li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Content */}
        <div className="flex-1 min-w-0 space-y-16">
          
          <section id="installation" className="scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">Installation</h2>
            <p className="text-muted-foreground mb-6">
              Terminal Office is distributed as a single binary. Pick your preferred installation method below.
            </p>
            
            <Tabs.Root defaultValue="curl" className="w-full border border-border rounded-xl bg-background overflow-hidden">
              <Tabs.List className="flex w-full border-b border-border bg-muted/30">
                <Tabs.Trigger value="curl" className="px-4 py-2 text-sm font-medium data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary outline-none transition-colors">curl/bash</Tabs.Trigger>
                <Tabs.Trigger value="powershell" className="px-4 py-2 text-sm font-medium data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary outline-none transition-colors">PowerShell</Tabs.Trigger>
                <Tabs.Trigger value="brew" className="px-4 py-2 text-sm font-medium data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary outline-none transition-colors">Homebrew</Tabs.Trigger>
                <Tabs.Trigger value="npm" className="px-4 py-2 text-sm font-medium data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary outline-none transition-colors">npm</Tabs.Trigger>
              </Tabs.List>
              
              <div className="p-4">
                <Tabs.Content value="curl" className="outline-none">
                  <CodeBlock code="$ curl -fsSL https://terminaloffice.dev/install.sh | bash" />
                </Tabs.Content>
                <Tabs.Content value="powershell" className="outline-none">
                  <CodeBlock code="iwr -useb https://terminaloffice.dev/install.ps1 | iex" language="powershell" />
                </Tabs.Content>
                <Tabs.Content value="brew" className="outline-none">
                  <CodeBlock code="$ brew install terminaloffice/tap/terminaloffice" />
                </Tabs.Content>
                <Tabs.Content value="npm" className="outline-none">
                  <CodeBlock code="$ npm install -g @terminaloffice/cli" />
                </Tabs.Content>
              </div>
            </Tabs.Root>
          </section>

          <section id="quick-start" className="scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">Quick Start</h2>
            <p className="text-muted-foreground mb-6">Create your first Word document in 5 steps.</p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold font-mono text-sm border border-primary/20">1</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Initialize a new document</h3>
                  <CodeBlock code="$ terminaloffice create doc invoice.docx" />
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold font-mono text-sm border border-primary/20">2</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Add a heading</h3>
                  <CodeBlock code="$ terminaloffice add doc invoice.docx --heading 'Invoice #0042' --level 1" />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold font-mono text-sm border border-primary/20">3</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Add a paragraph</h3>
                  <CodeBlock code="$ terminaloffice add doc invoice.docx --text 'Thank you for your business. Please see the details below.'" />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold font-mono text-sm border border-primary/20">4</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Add a table from JSON</h3>
                  <CodeBlock code={`$ cat items.json | terminaloffice add doc invoice.docx --table --stdin\n# Assumes items.json is an array of objects`} />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold font-mono text-sm border border-primary/20">5</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Export to PDF</h3>
                  <CodeBlock code="$ terminaloffice export invoice.docx --pdf" />
                </div>
              </div>
            </div>
          </section>

          <section id="commands" className="scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">Command Reference</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border rounded-lg overflow-hidden hidden sm:table">
                <thead className="bg-muted/50 border-b border-border">
                  <tr>
                    <th className="px-4 py-3 text-left font-mono text-sm font-semibold text-foreground w-1/4">Command</th>
                    <th className="px-4 py-3 text-left font-mono text-sm font-semibold text-foreground w-1/2">Description</th>
                    <th className="px-4 py-3 text-left font-mono text-sm font-semibold text-foreground w-1/4">Example Flags</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="bg-background">
                    <td className="px-4 py-3 font-mono text-sm text-primary">create [type] [file]</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">Creates a new blank document, spreadsheet, or presentation.</td>
                    <td className="px-4 py-3 font-mono text-xs">--template &lt;file&gt;</td>
                  </tr>
                  <tr className="bg-background">
                    <td className="px-4 py-3 font-mono text-sm text-primary">add doc [file]</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">Appends content to the end of a Word document.</td>
                    <td className="px-4 py-3 font-mono text-xs">--heading, --text, --table</td>
                  </tr>
                  <tr className="bg-background">
                    <td className="px-4 py-3 font-mono text-sm text-primary">set cell [file]</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">Writes data to a specific Excel cell or range.</td>
                    <td className="px-4 py-3 font-mono text-xs">--sheet, --range A1, --value</td>
                  </tr>
                  <tr className="bg-background">
                    <td className="px-4 py-3 font-mono text-sm text-primary">get cell [file]</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">Reads data from an Excel cell. Outputs to stdout.</td>
                    <td className="px-4 py-3 font-mono text-xs">--range, --format json</td>
                  </tr>
                  <tr className="bg-background">
                    <td className="px-4 py-3 font-mono text-sm text-primary">export [file]</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">Converts a file to another format via cloud API.</td>
                    <td className="px-4 py-3 font-mono text-xs">--pdf, --csv, --html</td>
                  </tr>
                </tbody>
              </table>
              
              {/* Mobile view for table */}
              <div className="sm:hidden space-y-4">
                {[
                  { cmd: "create [type] [file]", desc: "Creates a new blank file.", flags: "--template <file>" },
                  { cmd: "add doc [file]", desc: "Appends content to a Word doc.", flags: "--heading, --text, --table" },
                  { cmd: "set cell [file]", desc: "Writes data to Excel cell.", flags: "--sheet, --range A1, --value" },
                  { cmd: "get cell [file]", desc: "Reads data from Excel cell.", flags: "--range, --format json" },
                  { cmd: "export [file]", desc: "Converts format via API.", flags: "--pdf, --csv, --html" }
                ].map((item, i) => (
                  <div key={i} className="border border-border rounded-lg p-4 bg-background">
                    <div className="font-mono text-primary font-bold mb-2">{item.cmd}</div>
                    <div className="text-sm text-muted-foreground mb-3">{item.desc}</div>
                    <div className="text-xs font-mono text-accent-foreground bg-muted/30 p-2 rounded inline-block">Flags: {item.flags}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="ai-agents" className="scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">For AI Agents</h2>
            <p className="text-muted-foreground mb-6">
              Terminal Office was designed for LLMs. If you use Claude Code, Cursor, Windsurf, or GitHub Copilot, you can teach them how to use Terminal Office instantly by adding our SKILL file.
            </p>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-4 text-lg">Generate .cursorrules</h3>
              <p className="text-sm text-muted-foreground mb-4">Run this command in your project root to generate the prompt rules:</p>
              <CodeBlock code="$ terminaloffice generate-skill > .cursorrules" />
              <p className="text-sm text-muted-foreground mt-4">
                The generated file contains a compact summary of the CLI syntax. When your agent reads it, it will stop trying to write Python code and use the CLI instead.
              </p>
            </div>
          </section>

          <section id="troubleshooting" className="scroll-mt-24 border-t border-border pt-12">
            <h2 className="text-3xl font-bold mb-6">Troubleshooting</h2>
            
            <div className="space-y-6">
              <div className="border border-border rounded-lg bg-background p-5">
                <h4 className="font-semibold text-lg mb-2">Error: File is locked by another process</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  This happens if you have the document open in Microsoft Word while trying to write to it via the CLI.
                </p>
                <div className="bg-muted/50 rounded p-3 text-sm">
                  <strong>Solution:</strong> Close the file in Word, or use the <code className="text-primary">--force-copy</code> flag to write to a new copy instead.
                </div>
              </div>

              <div className="border border-border rounded-lg bg-background p-5">
                <h4 className="font-semibold text-lg mb-2">Export to PDF fails with 401</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  The local binary handles native OOXML manipulation offline, but converting formats (like PDF export) requires our cloud rendering engine.
                </p>
                <div className="bg-muted/50 rounded p-3 text-sm">
                  <strong>Solution:</strong> You need an API key. Run <code className="text-primary">terminaloffice login</code> or get a key from the Credentials dashboard.
                </div>
              </div>
              
              <div className="border border-border rounded-lg bg-background p-5">
                <h4 className="font-semibold text-lg mb-2">Excel data pipe limits</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Piping massive JSON files (100MB+) via stdin might hit memory limits depending on your machine.
                </p>
                <div className="bg-muted/50 rounded p-3 text-sm">
                  <strong>Solution:</strong> Pass the file path directly using <code className="text-primary">--file data.json</code> so the CLI can stream it.
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
