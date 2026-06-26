import { CustomCursor } from '@/components/CustomCursor';
import { Hero } from '@/components/Hero';
import { WhoWeAre } from '@/components/WhoWeAre';
import { ServicesGrid } from '@/components/ServicesGrid';
import { Testimonials } from '@/components/Testimonials';
import { Santuario } from '@/components/Santuario';
import { BlogReadings } from '@/components/BlogReadings';
import { Location } from '@/components/Location';

export default function Home() {
  return (
    <main className="relative bg-zen-beige min-h-screen selection:bg-zen-pink selection:text-white">
      <CustomCursor />
      <Hero />
      <WhoWeAre />
      <ServicesGrid />
      <Testimonials />
      <Santuario />
      <BlogReadings />
      <Location />
    </main>
  );
}

