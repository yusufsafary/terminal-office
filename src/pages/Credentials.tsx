import { useEffect, useState } from "react";
import { Key, Copy, Check, Plus, BarChart3, ShieldAlert, Github } from "lucide-react";

export default function Credentials() {
  const [copied, setCopied] = useState(false);
  
  useEffect(() => {
    document.title = "API Credentials | Terminal Office";
  }, []);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col w-full pb-24 bg-background min-h-[calc(100vh-64px)]">
      {/* Dashboard Header */}
      <section className="pt-12 pb-8 border-b border-border bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-2">Developer Dashboard</h1>
              <p className="text-muted-foreground">Manage your API keys and usage limits.</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="inline-flex h-10 items-center justify-center rounded-md bg-[#24292f] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#24292f]/90 focus:outline-none focus:ring-2 focus:ring-[#24292f] focus:ring-offset-2 transition-colors">
                <Github className="mr-2 h-4 w-4" />
                Sign in with GitHub
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-12">
        
        {/* Banner Alert */}
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-10 flex items-start gap-4">
          <ShieldAlert className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-primary mb-1">Local operations do not require API keys</h4>
            <p className="text-sm text-muted-foreground">
              You only need an API key for cloud-dependent features like PDF exporting and OCR parsing. Native OOXML document creation runs 100% locally and is completely free forever.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Keys Section */}
            <div className="border border-border rounded-xl bg-card overflow-hidden">
              <div className="p-6 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Key className="w-5 h-5 text-primary" />
                  <h2 className="text-lg font-semibold">Your API Keys</h2>
                </div>
                <button className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                  <Plus className="w-4 h-4 mr-1" /> Generate New Key
                </button>
              </div>
              
              <div className="p-6">
                <div className="border border-border rounded-lg p-4 bg-background group">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-medium text-foreground">Production Key</h3>
                      <p className="text-xs text-muted-foreground mt-1">Created on Jul 14, 2025</p>
                    </div>
                    <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                      Active
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-muted/30 border border-border rounded-md px-3 py-2 font-mono text-sm text-muted-foreground flex items-center tracking-widest">
                      <span className="text-foreground">sk-to-</span>
                      <span className="opacity-40 ml-1">••••••••••••••••</span>
                      <span className="text-foreground ml-1">1234</span>
                    </div>
                    <button 
                      onClick={handleCopy}
                      className="p-2 border border-border rounded-md hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground"
                      title="Copy to clipboard"
                    >
                      {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Code Snippet Example */}
            <div className="border border-border rounded-xl bg-card overflow-hidden">
              <div className="p-6 border-b border-border">
                <h2 className="text-lg font-semibold">Authentication Example</h2>
              </div>
              <div className="p-6 bg-background">
                <p className="text-sm text-muted-foreground mb-4">
                  Pass your API key as an environment variable or via the CLI flag when running cloud-dependent commands.
                </p>
                <div className="bg-[#0d1117] rounded-lg border border-border p-4 font-mono text-sm overflow-x-auto text-[#e6edf3]">
                  <div className="mb-2"><span className="text-[#8b949e]"># Export as environment variable</span></div>
                  <div className="mb-4">
                    <span className="text-primary">$</span> export TERMINAL_OFFICE_KEY="sk-to-..."
                  </div>
                  <div className="mb-2"><span className="text-[#8b949e]"># Or pass it inline</span></div>
                  <div>
                    <span className="text-primary">$</span> terminaloffice export report.docx --pdf --api-key="sk-to-..."
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar Column */}
          <div className="space-y-8">
            
            {/* Usage Stats */}
            <div className="border border-border rounded-xl bg-card overflow-hidden">
              <div className="p-6 border-b border-border">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <h2 className="text-lg font-semibold">Usage (This Month)</h2>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-sm text-muted-foreground">API Requests</span>
                  <span className="text-sm font-medium">12,450 <span className="text-muted-foreground font-normal">/ 50,000</span></span>
                </div>
                {/* Progress Bar */}
                <div className="w-full h-3 bg-muted rounded-full overflow-hidden mb-4 border border-border/50">
                  <div className="h-full bg-primary rounded-full w-[25%]"></div>
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  Resets in 16 days
                </p>
              </div>
            </div>

            {/* Rate Limits Table */}
            <div className="border border-border rounded-xl bg-card overflow-hidden">
              <div className="p-6 border-b border-border">
                <h2 className="text-lg font-semibold">Plan Limits</h2>
              </div>
              <div className="p-0">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-border">
                    <tr className="bg-primary/5">
                      <td className="p-4 font-medium text-primary">Free</td>
                      <td className="p-4 text-right">1k req/day</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-muted-foreground">Pro</td>
                      <td className="p-4 text-right">50k req/day</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-muted-foreground">Enterprise</td>
                      <td className="p-4 text-right">Unlimited</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 border-t border-border bg-muted/10 text-center">
                <a href="#" className="text-sm text-primary hover:underline">Upgrade Plan</a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
