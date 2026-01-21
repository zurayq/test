import { Navbar } from "@/components/layout/navbar";
import dynamic from "next/dynamic";

const BackgroundCanvas = dynamic(
    () => import("@/components/ui/BackgroundCanvas").then((mod) => mod.BackgroundCanvas),
    { ssr: false }
);

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="relative flex min-h-screen flex-col">
            <BackgroundCanvas />
            <Navbar />
            <main className="flex-1 pt-14 container mx-auto px-4 md:px-8">
                {children}
            </main>
            <footer className="border-t py-6 md:px-8 md:py-0">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        Built by <span className="font-medium text-foreground">Abdul</span>.
                        The source code is available on <a href="#" className="font-medium underline underline-offset-4">GitHub</a>.
                    </p>
                </div>
            </footer>
        </div>
    );
}
