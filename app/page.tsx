import { AnnouncementBar } from "@/components/announcement-bar"
import { Header } from "@/components/header"
import { StorefrontHero } from "@/components/storefront-hero"
import { HomeDestinations } from "@/components/home-destinations"
import { HomeShopHighlight } from "@/components/home-shop-highlight"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Header />
      <StorefrontHero />
      <HomeShopHighlight />
      <HomeDestinations />
      <Footer />
    </main>
  )
}
