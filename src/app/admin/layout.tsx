import { HeroHighlight } from "@/components/ui/hero-highlight";
import AsideAdmin from "./components/AsideAdmin";
import AdminHeader from "./layouts/AdminHeader";
export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <HeroHighlight className="flex h-screen w-screen flex-col overflow-hidden">
      <div className="flex-grow w-full flex min-[1400px]:w-[1500px] mx-auto ">
        <AsideAdmin />
        <main className="bg-background/10 flex-grow flex flex-col h-screen w-[80%]">
          <AdminHeader />
          <section className="p-5 h-[calc(100%_-_65px)] flex-grow overflow-y-scroll hide-scroll">{children}</section>
        </main>
      </div>
    </HeroHighlight>
  );
}
