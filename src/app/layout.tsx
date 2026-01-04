import type { Metadata } from "next";
import { Saira, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/hooks/useTheme";

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ParchMate - Linux App Installer Command Generator",
  description: "ParchMate helps you generate terminal commands to install your favorite apps on ParchLinux distribution. Pick your apps, and get your install command.",
  openGraph: {
    title: "ParchMate - Linux App Installer",
    description: "Generate install commands for 180+ apps on ParchLinux.",
    type: "website",
    url: "https://mate.parchlinux.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "ParchMate - Linux App Installer",
    description: "Generate install commands for 180+ apps on ParchLinux distro.",
  },
};

// Script to run before React hydrates to prevent theme flash
const themeScript = `
  (function() {
    try {
      var theme = localStorage.getItem('theme');
      if (theme === 'light' || !theme) {
        document.documentElement.classList.add('light');
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const umamiId = process.env.NEXT_PUBLIC_UMAMI_ID;
  const cfBeacon = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script>{themeScript}</script>
        {/* {umamiId && (
          <script defer src="https://cloud.umami.is/script.js" data-website-id={umamiId} />
        )}
        {cfBeacon && (
          <script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon={`{"token": "${cfBeacon}"}`} />
        )} */}
      </head>
      <body
        className={`${saira.variable} ${firaCode.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
