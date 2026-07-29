import { useEffect } from "react";

export default function Cookies() {
  useEffect(() => {
    document.title = "Cookie Policy | Terminal Office";
  }, []);

  return (
    <div className="flex flex-col w-full pb-24">
      <section className="pt-20 pb-12 border-b border-border bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Cookie Policy</h1>
          <p className="text-lg text-muted-foreground">
            Last updated: July 2025
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="prose prose-invert prose-lg max-w-none prose-headings:text-foreground prose-a:text-primary">
            <p>
              This Cookie Policy explains how Terminal Office ("we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our website at terminaloffice.dev ("Website"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>

            <h2>What are cookies?</h2>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>
            <p>
              Cookies set by the website owner (in this case, Terminal Office) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., interactive content and analytics).
            </p>

            <h2>Why do we use cookies?</h2>
            <p>
              We use first and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Website.
            </p>

            <h3>Essential Cookies</h3>
            <p>
              These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas (like the developer credentials dashboard).
            </p>
            <ul>
              <li><strong>Session Tokens:</strong> Used to maintain your authentication state when managing your API keys.</li>
              <li><strong>Security Cookies:</strong> Used to detect and prevent malicious activity.</li>
            </ul>

            <h3>Analytics and Performance Cookies</h3>
            <p>
              These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are, or to help us customize our Website for you.
            </p>
            <ul>
              <li><strong>Visitor Statistics:</strong> We track anonymous page views to understand which command documentation is most popular.</li>
            </ul>

            <h3>Preference Cookies</h3>
            <p>
              These cookies allow our Website to remember choices you make when you use the Website, such as remembering your preferred installation method (macOS vs Windows) in the documentation tabs.
            </p>

            <h2>How can I control cookies?</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.
            </p>
            <p>
              You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
            </p>

            <h2>Where can I get further information?</h2>
            <p>
              If you have any questions about our use of cookies or other technologies, please email us at:
              <br />
              <a href="mailto:privacy@terminaloffice.dev">privacy@terminaloffice.dev</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
