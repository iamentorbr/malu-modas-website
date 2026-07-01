import { AnnouncementBar } from "@/components/announcement-bar"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CollectionsSection } from "@/components/collections-section"
import { NewArrivalsSection } from "@/components/new-arrivals-section"
import { PromoSection } from "@/components/promo-section"
import { LookbookSection } from "@/components/lookbook-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Header />
      <HeroSection />
      <CollectionsSection />
      <NewArrivalsSection />
      <PromoSection />
      <LookbookSection />
      <AboutSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
