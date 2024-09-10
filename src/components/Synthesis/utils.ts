export interface Synthesis {
  title: string;
  isTrending: boolean;
  briefDescription: string;
  imageUrl: string;
  updatedAt: string;
  categories: string[];
  author: {
    name: string;
    profilePicture: string;
  };
}

export const categories = [
  { title: 'Featured Feed', value: 0 },
  { title: 'Significant', value: 1 },
  { title: 'Insignificant', value: 2 },
  { title: 'World', value: 3 },
  { title: 'Nation', value: 4 },
  { title: 'Business', value: 5 },
  { title: 'Technology', value: 6 },
  { title: 'Science', value: 7 },
  { title: 'Health', value: 8 },
  { title: 'Entertainment', value: 9 },
  { title: 'Sports', value: 10 },
];

export const synthesisMock: Synthesis[] = [
  {
    title: 'Groundbreaking Discovery in Quantum Physics',
    isTrending: true,
    briefDescription: `
    Researchers at the University of Cambridge have made a significant breakthrough in the field of quantum physics, 
    shedding new light on the fundamental nature of the universe.`,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/3fe1/a96d/8c4ac05213125b3a41fed36b27355e19?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bg58NbB4kHZQ98qlENeyhophTILU76dOYJILBeYZSq3XgLC3YJCz4ou~UcMEq9ZrYg7VDZM2tWy0C~xnC9fvfQmyblu1IMYp6IHGhmaFFA9tYtg2P~LEPZKfYLM0bqy7YbA6sC~ePkoIYRlow-aMBdiwhPBo~x3mP6y316luHwSyehwECXnInEZi2dpRuxMZw66DdAbI2LWZV7B8f6rviXtWEXCogUKJhHPCrEAyiDBoPIB-Mk7BI6KYl0vI4T4QejL1SsAZUgb6WVyDXkjOh9sjqn9ipcIPFX-Uk265I6aHbtqtqzZyJXCbdZ0BppLgB6M~hANveKISvUx1~lYbEw__',
    updatedAt: '2024-09-07T14:30:00Z',
    categories: ['science'],
    author: {
      name: 'John Doe',
      profilePicture:
        'https://s3-alpha-sig.figma.com/img/630c/c30e/c97c6d1854f93027ec8f0ef3747dfda7?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hOw1QgJ3rxpsqVdHW6oaI5dAMW2EgtrHT7w-Xu-lW6Qz8svelcJvmv~t4m8r~xkDVofp0F1~tMnjJV8GJwrXjLG6Zko7a~7OCh5XPjkZdtOQeFNR2S-SZ34T9AgLn3PEZ3R4wWFjZW5rBSYOm8T5INhXheN2Yff-Gw-jQ6zhytKh5PyzCPzbHxx19X6HuisLjp~N43WIZQwi-yenWrWIU0zhljbfCtCHYtAw2QJcHmWPzo6nD1KMI19rozekbCvEMGtIPWP8OQW0~U-X6yRM8P83klKmAIQJ1o81f8enJ6B3gZr4SfJRd5PLuaDvDBjwa0sXn98mB3PlT-5bKBbzPA__',
    },
  },
  {
    title: 'New Advancements in Renewable Energy Technology',
    isTrending: true,
    briefDescription: `
    Scientists have developed a revolutionary new solar panel design that promises to significantly increase energy efficiency 
    and reduce production costs, paving the way for more widespread adoption of renewable energy.`,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/d5fa/ecf2/a5e5e5527137c5c1b4a37ffdb03e7fc4?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o8HkjT-pu~NcgfVT0lzwHxiN98mACC0~U1FG4v6kCq2XQuc-IazYdJ4B80jLvxO4GPzImXHmPT7i6HZGnK1QtH7eIB4vkv~8wkjECiBF8NQDYOzNJnHwQxMcAkeiCUSN0h~00c4qBEASrBk3FkDlypt-VVSx7X4lXV3cGfjbPSVKEKuahJHIT1tiePEenc-un3suBHBzAlGq939p4i5dsD99FzhWzXqAyI6aEXn9ixSVwJBPtHHTG3~tme8-A94fRIB-lFoiGZBtCt4Li9RAJOY0bI-svu0XJEDZIYJ-MclCAjyvJY-ijelDpAQZBmRNuemmAPCDf-ndy9A3VVGeDQ__',
    updatedAt: '2024-09-02T14:30:00Z',
    categories: ['technology', 'world'],
    author: {
      name: 'Jane Smith',
      profilePicture:
        'https://s3-alpha-sig.figma.com/img/630c/c30e/c97c6d1854f93027ec8f0ef3747dfda7?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hOw1QgJ3rxpsqVdHW6oaI5dAMW2EgtrHT7w-Xu-lW6Qz8svelcJvmv~t4m8r~xkDVofp0F1~tMnjJV8GJwrXjLG6Zko7a~7OCh5XPjkZdtOQeFNR2S-SZ34T9AgLn3PEZ3R4wWFjZW5rBSYOm8T5INhXheN2Yff-Gw-jQ6zhytKh5PyzCPzbHxx19X6HuisLjp~N43WIZQwi-yenWrWIU0zhljbfCtCHYtAw2QJcHmWPzo6nD1KMI19rozekbCvEMGtIPWP8OQW0~U-X6yRM8P83klKmAIQJ1o81f8enJ6B3gZr4SfJRd5PLuaDvDBjwa0sXn98mB3PlT-5bKBbzPA__',
    },
  },
  {
    title: 'The Rise of Sustainable Fashion: Trends and Innovations',
    isTrending: false,
    briefDescription: `
    As consumers become more conscious of the environmental impact of the fashion industry, 
    designers and brands are responding with innovative sustainable materials and production methods.`,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/01eb/241e/9ce363a8196ef00b7e2d001ab2a30d0c?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HnFwmrL2moC~~XulTFcwD91OSrmEH9vxIGxNo~p2V9P022xZQcMXahIjpxdPYIWMDR4VruTMkR1liFGa2JmvP8wUEGg1AepiYVdj30WL1eZaLQLYxD74vR6Gm3UfRNqOaddMOAIsbhq91Zedm399FKPUzR0P5QjT4m5-qh~3s3NuBfmxtEwBFUgM6qXM-H51RAj97lqrM42NMCbh1Nmqm-gr5F~0sVD~JPOf0m-UiU-XG0swGnZd-TQe~pv8~DD7vcmylS0hcpG~VIXmMm1OBLOJTY9V4FmNBX39OOXLNT2ZJ5ELWPFQBvO~3vPd9YQ4MsXqpZN6MAuQfuDOudH6kw__',
    updatedAt: '2023-09-07T14:30:00Z',
    categories: ['entertainment'],
    author: {
      name: 'Jane Smith',
      profilePicture:
        'https://s3-alpha-sig.figma.com/img/630c/c30e/c97c6d1854f93027ec8f0ef3747dfda7?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hOw1QgJ3rxpsqVdHW6oaI5dAMW2EgtrHT7w-Xu-lW6Qz8svelcJvmv~t4m8r~xkDVofp0F1~tMnjJV8GJwrXjLG6Zko7a~7OCh5XPjkZdtOQeFNR2S-SZ34T9AgLn3PEZ3R4wWFjZW5rBSYOm8T5INhXheN2Yff-Gw-jQ6zhytKh5PyzCPzbHxx19X6HuisLjp~N43WIZQwi-yenWrWIU0zhljbfCtCHYtAw2QJcHmWPzo6nD1KMI19rozekbCvEMGtIPWP8OQW0~U-X6yRM8P83klKmAIQJ1o81f8enJ6B3gZr4SfJRd5PLuaDvDBjwa0sXn98mB3PlT-5bKBbzPA__',
    },
  },
];
