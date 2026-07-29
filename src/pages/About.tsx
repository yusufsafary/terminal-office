import { useEffect } from "react";
import { Link } from "wouter";
import { Terminal, Code, Cpu } from "lucide-react";

import dev1Img from "../assets/dev-1.png";
import dev2Img from "../assets/dev-2.png";
import dev3Img from "../assets/dev-3.png";

export default function About() {
  useEffect(() => {
    document.title = "About | Terminal Office";
  }, []);

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Header */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 border-b border-border bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">The Story of Terminal Office</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We built the tool we needed to make our own AI agents actually useful in the corporate world.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="prose prose-invert prose-lg max-w-none">
            <h2 className="text-3xl font-bold mt-12 mb-6">The Problem</h2>
            <p>
              In late 2024, our team was building an autonomous research agent. It could scrape the web, read financial reports, and summarize massive amounts of data perfectly. But when we asked it to "export the findings to a Word document," everything fell apart.
            </p>
            <p>
              The LLM would try to write Python code using python-docx. It would forget dependencies. It would hallucinate APIs. It would crash on complex table structures. We realized that <strong>AI agents don't need a programming language to write files; they need a CLI.</strong>
            </p>
            
            <h2 className="text-3xl font-bold mt-16 mb-6">The Solution</h2>
            <p>
              We built Terminal Office in Rust. A single, dependency-free binary that provides a clean, deterministic command-line interface for manipulating Office Open XML formats.
            </p>
            <p>
              Now, instead of writing an unreliable Python script, our agent just executes <code>terminaloffice add doc report.docx --heading "Results"</code>. It works every single time.
            </p>

            <div className="my-16 grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
              <div className="p-6 bg-card border border-border rounded-xl">
                <Terminal className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Deterministic</h3>
                <p className="text-muted-foreground text-sm">Commands either succeed or fail with clear error messages agents can read.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-xl">
                <Code className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">No Dependencies</h3>
                <p className="text-muted-foreground text-sm">No Python environments. No COM interop. No Microsoft Office required.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-xl">
                <Cpu className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Built for AI</h3>
                <p className="text-muted-foreground text-sm">Shipped with a SKILL.md file that teaches any LLM how to use it instantly.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-16 mb-8">The Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 not-prose mb-16">
              <div className="text-center">
                <div className="mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-card mb-4 bg-muted">
                  <img src={dev1Img} alt="Sarah Chen" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-semibold text-lg">Sarah Chen</h4>
                <p className="text-primary text-sm font-mono mb-2">CEO & Systems Eng</p>
                <p className="text-xs text-muted-foreground">Obsessed with fast binaries and zero-copy parsers.</p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-card mb-4 bg-muted">
                  <img src={dev2Img} alt="Marcus Johnson" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-semibold text-lg">Marcus Johnson</h4>
                <p className="text-primary text-sm font-mono mb-2">CTO & OOXML Expert</p>
                <p className="text-xs text-muted-foreground">Read the entire 6,000 page OOXML spec so you don't have to.</p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-card mb-4 bg-muted">
                  <img src={dev3Img} alt="Unit-7" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-semibold text-lg">Unit-7</h4>
                <p className="text-primary text-sm font-mono mb-2">AI QA Agent</p>
                <p className="text-xs text-muted-foreground">Tries to break our APIs 24/7. Wrote this website.</p>
              </div>
            </div>

            <hr className="my-16 border-border" />

            <div className="text-center not-prose">
              <h2 className="text-2xl font-bold mb-6">Join the community</h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Terminal Office is open source. We're building a massive library of templates and macros. Come help us out.
              </p>
              <a 
                href="https://github.com/yusufsafary" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-md bg-foreground px-8 text-base font-medium text-background shadow transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Contribute on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
