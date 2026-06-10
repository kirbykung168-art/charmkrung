import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Menu from '@/components/Menu';
import Wine from '@/components/Wine';
import Space from '@/components/Space';
import Reserve from '@/components/Reserve';
import Visit from '@/components/Visit';
import Footer from '@/components/Footer';

/**
 * Charmkrung — single-page site.
 *
 * Section order:
 *   Hero → Story → Menu → Wine → Space → Reserve → Visit → Footer
 */
export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <Story />
      <Menu />
      <Wine />
      <Space />
      <Reserve />
      <Visit />
      <Footer />
    </>
  );
}
