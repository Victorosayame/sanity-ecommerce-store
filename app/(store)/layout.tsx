import type { Metadata } from "next";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";
import { SanityLive } from "@/sanity/lib/live";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import { DisableDraftMode } from "@/components/ui/disable-draftmode";

export const metadata: Metadata = {
  title: "Bishop Store",
  description: "Shop Online",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>
      <html lang="en">
        <body>
          {(await draftMode()).isEnabled && (
            <>
             <DisableDraftMode />
             <VisualEditing />
            </>
          )}
          <main>
            <Header />
           {children} 
          </main>

          <SanityLive />
        </body>
      </html>
    </ClerkProvider>
  );
}
