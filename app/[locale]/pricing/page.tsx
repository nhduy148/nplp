import { Footer } from "@/components/Footer"
import { PricingSection } from "@/components/PricingSection"
import { Header } from "@/components/Header"

export default function PricingPage() {
    return (
        <main className="bg-white min-h-screen">
            {/* Header */}
            <Header />

            <PricingSection />

            {/* Footer */}
            <Footer />
        </main>
    )
}
