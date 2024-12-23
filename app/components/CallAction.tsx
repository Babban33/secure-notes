import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallAction() {
    return(
        <div className="bg-primary text-primary-foreground py-20">
            <div className="max-w-4xl mx-auto text-center px-4">
                <h2 className="text-4xl font-bold mb-4">
                    Ready to Simplify Your Life?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                    Join thousands of users who are taking control of their productivity with Notes WebApp.
                </p>
                <Link href="/register">
                    <Button size="lg" className="bg-background text-foreground hover:bg-background/90">Sign Up Now</Button>
                </Link>
            </div>
        </div>
    );
}