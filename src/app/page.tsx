import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import PressStrip from '@/components/PressStrip';
import BrandMarquee from '@/components/BrandMarquee';
import Stats from '@/components/Stats';
import Story from '@/components/Story';
import NeonDivider from '@/components/NeonDivider';
import Menu from '@/components/Menu';
import Wine from '@/components/Wine';
import Sommelier from '@/components/Sommelier';
import Space from '@/components/Space';
import Events from '@/components/Events';
import Reserve from '@/components/Reserve';
import Visit from '@/components/Visit';
import Footer from '@/components/Footer';

/**
 * Charmkrung — single-page site.
 *
 * Section order (v3 — opus pass):
 *   Hero → PressStrip → BrandMarquee → Stats → Story →
 *   NeonDivider (orange CHARMKRUNG wordmark) →
 *   Menu → Wine → Sommelier (real Kiki + room photo) →
 *   Space → Private Events → Reserve → Visit → Footer (wax seal)
 *
 * NeonDivider sits between Story and Menu so the page changes register
 * from chef narrative to the actual cooking — using the venue's
 * recognisable orange neon wordmark.
 */
export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <PressStrip />
      <BrandMarquee />
      <Stats />
      <Story />
      <NeonDivider />
      <Menu />
      <Wine />
      <Sommelier />
      <Space />
      <Events />
      <Reserve />
      <Visit />
      <Footer />
    </>
  );
}
