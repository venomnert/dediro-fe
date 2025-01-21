export interface DiscoverContent {
  title: string;
  text: string;
  ctaText?: string;
}

export interface EmpoweringCard {
  title: string;
  text: string;
  imageUrl: string;
}

export interface EmpoweringContent {
  sectionTitle: string;
  sectionSubtitle: string;
  cardsData: EmpoweringCard[];
}

export interface FAQsCard {
  question: string;
  response: string;
}

export interface FAQsContent {
  questionsList: FAQsCard[];
  title: string;
  showSection: boolean;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  heroCTA: string;
}

export interface ReviewCard {
  number: number;
  title: string;
}

export interface ReviewContent {
  reviewData: ReviewCard[];
  ctaHeader: string;
  ctaButtonText: string;
}

export interface StayInformedContent {
  title: string;
  showSection: boolean;
  text: string;
  ctaText: string;
}

export interface TestimonialCard {
  text: string;
  photoUrl: string;
  name: string;
}

export interface TestimonialsContent {
  title: string;
  subtitle: string;
  showSection: boolean;
  cardsData: TestimonialCard[];
}

export interface WhyUsCard {
  title: string;
  text: string;
  iconUrl: string;
}

export interface WhyUsContent {
  title: string;
  subtitle: string;
  showSection: boolean;
  ctaText: string;
  cardsData: WhyUsCard[];
}

interface IQuote {
  text: string;
  expertName: string;
  profession: string;
  image: string;
}

export interface IThemeSection {
  content: {
    id: number;
    title: string;
    description: string;
    quote?: IQuote;
    content: {
      id: number;
      subtitle: string;
      description: string;
      quote?: IQuote;
    }[];
  }[];
}
