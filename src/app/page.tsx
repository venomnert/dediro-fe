import { Box } from '@mui/material';
import Hero from '@/components/Hero/Hero';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Review from '@/components/Review/Review';
import Synthesis from '@/components/Synthesis/Synthesis';
import Empowering from '@/components/Empowering/Empowering';
import StayInformed from '@/components/StayInformed/StayInformed';
import Testimonials from '@/components/Testimonials/Testimonials';
import FAQs from '@/components/FAQs/FAQs';
import Discover from '@/components/Discover/Discover';
import WhyUs from '@/components/WhyUs/WhyUs';

export default async function Home() {
  return (
    <Box>
      <Header />
      <Hero />
      <Review />
      <Synthesis />
      <Empowering />
      <StayInformed />
      <WhyUs />
      <Testimonials />
      <FAQs />
      <Discover />
      <Footer />
    </Box>
  );
}
