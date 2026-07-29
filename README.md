# Terminal Office

**Terminal Office** is the world's first CLI tool that gives AI agents full, programmatic control over Word (.docx), Excel (.xlsx), and PowerPoint (.pptx) files.

No Office installation required. Single binary. Works everywhere.

## Install

```bash
# macOS / Linux
curl -fsSL https://terminaloffice.dev/install.sh | bash

# Windows (PowerShell)
irm https://terminaloffice.dev/install.ps1 | iex

# Homebrew
brew install terminal-office

# npm
npm install -g @terminaloffice/cli
```

## Quick Start

```bash
terminaloffice create report.docx
terminaloffice add doc report.docx --heading "Q3 Financials"
terminaloffice export report.docx --pdf
```

## License

Apache 2.0
