import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function HeroSection() {
    return (
        <div className="text-center min-h-screen flex flex-col justify-center items-center py-20">
            <div className="flex flex-col items-center">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                    Simplify Your Notes
                </h1>
                <p className="text-xl mb-8 max-w-2xl text-muted-foreground">
                    Organize, access, and manage your notes from anywhere, anytime. Experience the power of seamless note-taking.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/register">
                        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
                    </Link>
                    <Button size="lg" variant="outline" className="hover:bg-secondary/90">Learn More</Button>
                </div>
            </div>
        </div>
    );
}