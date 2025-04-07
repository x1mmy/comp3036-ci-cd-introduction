import { ReactNode } from "react";

// /Users/30031005/Github/WSU/FSD/ci-cd-example/app/layout.tsx

export const metadata = {
  title: "My Next.js App",
  description: "A sample Next.js application",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
