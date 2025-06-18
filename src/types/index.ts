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
  themesSection: IThemes[];
  experts: IExpertsHighlights[];
}
export interface IThemes {
  id: number;
  title: string;
  quote?: IQuote;
  content: {
    id: number;
    subtitle: string;
    quote?: IQuote;
  }[];
}

export interface IExpertQuote {
  name: string;
  image: string;
  profession: string;
  text: string;
}

interface ISources {
  quote: string;
  link: string;
  sourceName: string;
  sourceDescription: string;
}

export interface IModalCard {
  id: number;
  name: string;
  profession: string;
  sources?: ISources[];
  image: {
    src: string;
    alt: string;
  };
}

export interface IMainContent {
  title: string;
  image: {
    src: string;
    alt: string;
  };
}
export interface IMainContentInfo {
  date: string;
  summary: string;
}

export interface ISubscribeToNewsletter {
  synthesisSlug: string;
}

export interface IRelatedContentCard {
  title: string;
  briefDescription: string;
}

export interface IExpertCard {
  name: string;
  profession: string;
  image: { src: string; alt: string };
}

export interface IWeeklyUpdatesCard {
  articleTitle: string;
  image: string;
  link: string;
}

interface IExpertsHighlights {
  id: number;
  name: string;
  profession: string;
  image: {
    src: string;
    alt: string;
  };
  sources?: ISources[];
}

export interface IExpertsHighlightsArray {
  experts: IExpertsHighlights[];
}

export interface IThemesArray {
  themesSection: IThemes[];
}

interface IRelatedContent {
  title: string;
  briefDescription: string;
}
export interface IRelatedContentArray {
  relatedContent: IRelatedContent[];
}
