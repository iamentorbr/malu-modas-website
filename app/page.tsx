import { AnnouncementBar } from "@/components/announcement-bar"
import { Header } from "@/components/header"
import { StorefrontHero } from "@/components/storefront-hero"
import { HomeDestinations } from "@/components/home-destinations"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Header />
      <StorefrontHero />
      <HomeDestinations />
      <Footer />
    </main>
  )
}
