import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import CallAction from './components/CallAction';

export default function LandingPage() {
  return (
    <div className="bg-background text-foreground">
      <HeroSection/>
      <FeatureSection/>
      <CallAction/>
    </div>
  );
}