import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import PressStrip from '@/components/PressStrip';
import BrandMarquee from '@/components/BrandMarquee';
import Stats from '@/components/Stats';
import Story from '@/components/Story';
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
 * Section order (v2 — sales-closing pass):
 *   Hero → PressStrip → BrandMarquee → Stats → Story → Menu → Wine →
 *   Sommelier credit + SWL '26 badge → Space → Private Events →
 *   Reserve → Visit → Footer
 *
 * Sommelier sits directly after Wine (so the wine list reads as
 * curated, not decorative). Events sits before Reserve so corporate
 * planners see private-event capacity before they're funneled to
 * the consumer reservation flow.
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
