import { FeatureCard } from "./FeatureCard";
import { Cloud, Folder, Lock } from 'lucide-react';

export default function FeatureSection() {
    return(
        <section className="py-20 bg-secondary/10">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Powerful Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard
                        title="Cloud Sync"
                        description="Sync your notes across all your devices effortlessly. Access your thoughts anywhere, anytime."
                        icon={<Cloud size={50} className="text-primary" />}
                    />
                    <FeatureCard
                        title="Secure Storage"
                        description="Keep your notes safe with end-to-end encryption. Your privacy is our top priority."
                        icon={<Lock size={50} className="text-primary" />}
                    />
                    <FeatureCard
                        title="Easy Organization"
                        description="Tag and categorize your notes for quick access. Find what you need when you need it."
                        icon={<Folder size={50} className="text-primary" />}
                    />
                </div>
            </div>
        </section>
    );
}