import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Projects from '@/components/sections/Projects';
import CallToAction from '@/components/sections/CallToAction';

export default function HomePage() {
    return (
        <>
            <Hero />
            <Services />
            <Process />
            <Projects />
            <CallToAction />
        </>
    );
}
