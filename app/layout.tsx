import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import ConvexClientProvider from "./ConvexClientProvider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MindSketch",
  description: "Seamlessly Blend Whiteboarding and Digital Organization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <ConvexClientProvider>
          <body className={inter.className}>{children}</body>
          <Toaster />
        </ConvexClientProvider>
      </UserProvider>
    </html>
  );
}
