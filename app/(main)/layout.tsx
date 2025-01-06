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
    <body className="overflow-hidden bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">

      <div className="isolate">
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center py-2">

          {children}

        </div>
      </div>
    </body>
  );
}
