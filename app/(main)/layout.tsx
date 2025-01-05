import Image from "next/image";
import bgImg from "@/public/halo.png";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className="bg-gray-100 antialiased font-sans">

      <div className="isolate">
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center py-2">

          {children}

        </div>
      </div>
    </body>
  );
}
