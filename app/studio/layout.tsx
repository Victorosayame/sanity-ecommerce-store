import React from "react";

export const metadata = {
  title: "Next-Js",
  description: "Generate by Next.Js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}