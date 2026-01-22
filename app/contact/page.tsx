import ContactForm from "@/components/sections/ContactForm";
import CustomSVGGraphic from "@/components/ui/CustomSVGGraphic";

export default function ContactPage() {
    return (
        <main className="pt-20 min-h-screen relative bg-brand-dark overflow-hidden">
            <div className="absolute inset-0 z-0">
                <CustomSVGGraphic />
            </div>
            <div className="relative z-10">
                <ContactForm />
            </div>
        </main>
    );
}
