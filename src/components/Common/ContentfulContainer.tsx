import React, { Suspense } from 'react';
import Hero from '@/components/Hero/Hero';
import Review from '@/components/Review/Review';
import Synthesis from '@/components/Synthesis/Synthesis';
import Empowering from '@/components/Empowering/Empowering';
import StayInformed from '@/components/StayInformed/StayInformed';
import Testimonials from '@/components/Testimonials/Testimonials';
import FAQs from '@/components/FAQs/FAQs';
import Discover from '@/components/Discover/Discover';
import WhyUs from '@/components/WhyUs/WhyUs';

function ContentfulContainer() {
  return (
    <Suspense fallback={<></>}>
      <Hero />
      <Review />
      <Synthesis />
      <Empowering />
      <StayInformed />
      <WhyUs />
      <Testimonials />
      <FAQs />
      <Discover />
    </Suspense>
  );
}

export default ContentfulContainer;
