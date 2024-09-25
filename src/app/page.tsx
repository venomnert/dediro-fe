import { Box } from '@mui/material';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ContentfulContainer from '@/components/Common/ContentfulContainer';

export default async function Home() {
  return (
    <Box>
      <Header />
      <ContentfulContainer />
      <Footer />
    </Box>
  );
}
