import HeroSection from '@/components/home/HeroSection';
import ClientsMarquee from '@/components/home/ClientsMarquee';
import BrandStatement from '@/components/home/BrandStatement';
import CapabilitySection from '@/components/home/CapabilitySection';
import DeliveryGrid from '@/components/home/DeliveryGrid';
import ProcessSection from '@/components/home/ProcessSection';
import CapabilitySummary from '@/components/home/CapabilitySummary';
import FeaturedWork from '@/components/home/FeaturedWork';
import FAQSection from '@/components/home/FAQSection';
import FinalCTA from '@/components/home/FinalCTA';
import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({
    title: 'DotQ | Custom Software Development Company',
    description: 'DotQ builds custom software, ecommerce platforms, web and mobile apps, Go backends, and business automation solutions for growing businesses.',
    path: '/',
});

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <ClientsMarquee />
            <BrandStatement />
            <CapabilitySection />
            <DeliveryGrid />
            <ProcessSection />
            <CapabilitySummary />
            <FeaturedWork />
            <FAQSection />
            <FinalCTA />
        </>
    );
}


