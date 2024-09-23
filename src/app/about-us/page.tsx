import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import CTAForm from '@/components/Common/CTA/CTAForm';
import { Box, Typography, Container, List, ListItem } from '@mui/material';

const SECTION_MARGIN = 5;
const P_MARGIN = 3;

const listItemStyle = {
  marginBottom: '20px',
  fontWeight: '400',
  display: 'inline-block',
};

const About = () => {
  return (
    <>
      <Header disableSearch />
      <Box sx={{ height: '1px' }} />
      <Container maxWidth="md" sx={{ marginTop: '170px' }}>
        <Box my={5}>
          <Typography variant="h3" component="h1" mb={P_MARGIN}>
            Revolutionizing Knowledge for the Digital Age
          </Typography>

          <Typography variant="body1" component="p" mb={SECTION_MARGIN}>
            In the 18th century, Denis Diderot and his collaborators embarked on
            the ambitious Encyclopédie project, aiming to compile all human
            knowledge into a single, accessible work. Their goal was to
            democratize information and “change the way people think.” Today, we
            at Dediro proudly carry forward this tradition, reimagining the
            encyclopedia for the AI age.
          </Typography>

          <Typography variant="h4" component="h2" mb={P_MARGIN}>
            Our Story
          </Typography>
          <Typography variant="body1" component="p" mb={SECTION_MARGIN}>
            Dediro was born from a deeply personal journey. As a child in Iran
            and later as the son of a struggling single mother in Kentucky, I
            faced environments with limited perspectives. The internet became my
            gateway to the world&apos;s brightest minds, from Carl Sagan to
            Richard Feynman, from Daniel Kahneman to countless unsung heroes on
            forums. These virtual mentors opened my eyes to the vastness of
            human knowledge and the power of critical thinking. This experience
            is the heart of Dediro. Sadly, the internet has not had the same
            effect on everyone.
          </Typography>

          <Typography variant="h4" component="h2" mb={P_MARGIN}>
            Humanity&apos;s Challenge and Our Mission
          </Typography>
          <Typography variant="body1" component="p" mb={P_MARGIN}>
            In the 21st century, humanity faces a “metacrisis” — a confluence of
            existential challenges including climate change, geopolitical
            instability, wealth inequality, and rapid technological advancement.
            At the core of our struggle lies our collective inability to make
            sense of an increasingly complex world. While the digital age has
            given us unprecedented access to information, it has also
            contributed to overload, algorithmic bias, and the spread of
            misinformation.
          </Typography>
          <Typography variant="body1" component="p" mb={P_MARGIN}>
            At Dediro, we recognize that addressing these challenges requires a
            fundamental shift in how we engage with knowledge. Our platform aims
            to cut through the noise, expand perspectives, and foster critical
            thinking — serving as a catalyst for a new Enlightenment. We believe
            that true understanding goes beyond facts, requiring context,
            nuance, and diverse perspectives.
          </Typography>

          <Typography variant="body1" component="p" mb={P_MARGIN}>
            Our mission is to revolutionize how people consume information by
            redefining the encyclopedia. We provide personalized and in-depth
            understanding of any subject, in the style and format you prefer. In
            an age where tribal thinking fosters division and echo chambers
            reinforce preconceived notions, we aim to be a bridge of
            enlightenment, fostering understanding across ideological divides.
          </Typography>

          <Typography variant="body1" component="p" mb={SECTION_MARGIN}>
            Like the Encyclopédie, Dediro&apos;s goal is to transform how we
            approach knowledge acquisition, equipping us with the sensemaking
            tools necessary to navigate and address the complex challenges of
            our time.
          </Typography>

          <Typography variant="h4" component="h2" mb={P_MARGIN}>
            What We Offer
          </Typography>

          <List
            sx={{ marginBottom: '32px', fontFamily: 'Montserrat' }}
            component="ol"
          >
            <ListItem sx={listItemStyle}>
              <strong>Nuanced Understanding:</strong> We break down complex
              topics into digestible, interconnected insights, providing a
              comprehensive view that goes beyond surface-level facts.
            </ListItem>
            <ListItem sx={listItemStyle}>
              <strong>Expert-Backed Content:</strong> Our AI curates and
              synthesizes information from world-leading experts across various
              media, including academic journals, podcasts, videos, and
              reputable online sources.
            </ListItem>
            <ListItem sx={listItemStyle}>
              <strong>Bias Detection and Quality Control:</strong> Every piece
              of content undergoes rigorous analysis for accuracy, objectivity,
              and potential biases, ensuring a balanced perspective.
            </ListItem>
            <ListItem sx={listItemStyle}>
              <strong>Complete Transparency:</strong> You will see all the
              sources our AI consumed, which ones it used, which it didn&apos;t,
              and why it made those choices. Everything is explained.
            </ListItem>
            <ListItem sx={listItemStyle}>
              <strong>Adaptive Learning Pathways:</strong> Our system
              continuously learns from user interactions, tailoring the depth
              and style of content to match individual learning curves and
              preferences.
            </ListItem>
            <ListItem sx={listItemStyle}>
              <strong>Multi-Modal Content Delivery:</strong> While we currently
              focus on text-based interactions, we&apos;re developing
              capabilities to deliver personalized podcasts, videos, and
              interactive learning experiences adapted to your preferred style.
            </ListItem>
          </List>

          <Typography variant="h4" component="h2" mb={P_MARGIN}>
            Our Commitment to Transparency and Addressing Bias
          </Typography>
          <Typography variant="body1" component="p" mb={P_MARGIN}>
            Our commitment is to always prioritize quality over quantity.
            We&apos;ll display all the sources and content we reviewed, how we
            rated them, and whether or not we used them. Transparency is at the
            heart of truth and trust building.
          </Typography>
          <Typography variant="body1" component="p" mb={SECTION_MARGIN}>
            While personalization enhances learning, we&apos;re acutely aware of
            the risk of reinforcing existing beliefs. To counter this, we
            deliberately introduce diverse viewpoints and encourage users to
            explore perspectives different from their own. Our “Accountability
            AI” will call you out when you&apos;re putting yourself in an echo
            chamber and will regularly suggest content that might broaden your
            understanding.
          </Typography>

          <Typography variant="h4" component="h2" mb={P_MARGIN}>
            Our Vision
          </Typography>
          <Typography variant="body1" component="p" mb={P_MARGIN}>
            We envision a world where every individual has access to an AI
            knowledge curator that adapts to their unique learning style,
            educational background, and interests. This companion will not only
            provide facts but will foster critical thinking.
          </Typography>
          <Typography variant="body1" component="p" mb={SECTION_MARGIN}>
            Today, we&apos;re starting with AI-written articles on the hottest
            topics, constantly updated with the latest knowledge. Tomorrow,
            Dediro will evolve into a multi-modal platform, creating
            personalized podcasts, videos, and blogs tailored to each
            user&apos;s preferred communication style and depth of
            understanding.
          </Typography>

          <Typography variant="h4" component="h2" mb={P_MARGIN}>
            AI Capabilities and Expert Curation
          </Typography>
          <Typography variant="body1" component="p" mb={P_MARGIN}>
            Our AI systems are designed to aggregate and synthesize information
            from various sources, but they are not infallible. Our team of human
            editors works alongside our AI to verify sources, ensure diversity
            of perspectives, and maintain high standards of accuracy. We
            regularly publish updates on our methodology and welcome feedback
            from our user community.
          </Typography>
          <Typography variant="body1" component="p" mb={SECTION_MARGIN}>
            We encourage our users to approach the content critically and to use
            Dediro as a starting point for further exploration, not as an
            ultimate authority, much like they would when consulting Wikipedia.
            We cite all sources and encourage you to visit and support the
            content creators behind them.
          </Typography>

          <Typography variant="h4" component="h2" mb={P_MARGIN}>
            Empowering Human Knowledge Creation: A New Model for the Digital Age
          </Typography>
          <Typography variant="body1" component="p" mb={P_MARGIN}>
            At Dediro, we recognize that the foundation of our platform —
            indeed, of all human progress — is the invaluable contributions of
            thinkers, researchers, and content creators. Unlike some tech giants
            that use AI to aggregate content without proper attribution or
            compensation, we&apos;re committed to a model that respects and
            rewards human expertise.
          </Typography>
          <Typography variant="body1" component="p" mb={P_MARGIN}>
            We&apos;re developing a profit-sharing system that ensures fair
            compensation for the human knowledge that forms the bedrock of our
            platform. This system will:
          </Typography>

          <List
            sx={{ marginBottom: '24px', fontFamily: 'Montserrat' }}
            component="ol"
          >
            <ListItem sx={listItemStyle}>
              <strong>Attribute Sources:</strong> Every piece of synthesized
              content will clearly attribute its sources, giving credit where
              it&apos;s due.
            </ListItem>
            <ListItem sx={listItemStyle}>
              <strong>Fair Compensation:</strong> We&apos;re implementing a
              revenue-sharing model that compensates content creators based on
              the usage and impact of their work within our platform.
            </ListItem>
            <ListItem sx={listItemStyle}>
              <strong>Transparent Tracking:</strong> We aim to develop a
              blockchain-based system that will allow creators to track how
              their content is used and the revenue it generates.
            </ListItem>
            <ListItem sx={listItemStyle}>
              <strong>Encouraging New Content:</strong> We aim to start a
              creators&apos; fund that will incentivize leading thinkers to
              create high-quality, in-depth content across all fields of
              knowledge.
            </ListItem>
          </List>

          <Typography variant="body1" component="p" mb={SECTION_MARGIN}>
            By implementing this ethical approach to content aggregation and
            synthesis, we&apos;re nurturing a sustainable knowledge economy that
            benefits creators, users, and society as a whole. We believe that
            for human knowledge to thrive and continue evolving, we must create
            an ecosystem that supports and rewards those who dedicate their
            lives to expanding our understanding of the world. This approach
            fosters a symbiotic relationship between AI technology and human
            expertise, ensuring that the democratization of knowledge
            doesn&apos;t come at the cost of devaluing intellectual labor, and
            creates new opportunities for experts and content creators in the
            digital age.
          </Typography>

          <Typography variant="h4" component="h2" mb={P_MARGIN}>
            Join Us in Shaping the Future of Learning
          </Typography>
          <Typography variant="body1" component="p" mb={P_MARGIN}>
            We see Dediro not just as a product, but as a collaborative journey
            towards better understanding. We invite our users to be active
            participants in this process — to provide feedback, challenge our
            assumptions, and help us continuously improve.
          </Typography>
          <Typography variant="body1" component="p" mb={P_MARGIN}>
            As we grow, we commit to regular updates on our progress, including
            both our successes and the challenges we face. We believe that by
            being open about our journey, including the obstacles we encounter,
            we can build a community of informed, engaged learners who are
            partners in our mission.
          </Typography>
          <Typography variant="body1" component="p" mb={P_MARGIN}>
            Almost 300 years ago, Denis Diderot and his compatriots
            revolutionized knowledge with the first attempt to democratize
            knowledge. We follow in their footsteps.
          </Typography>
          <Typography variant="body1" component="p">
            Dediro is a promise of what&apos;s possible when we combine
            technology with human curiosity and critical thinking. We&apos;re
            excited to embark on this journey with you, and we welcome your
            questions, feedback, and ideas as we work together to shape the
            future of learning.
          </Typography>
        </Box>
      </Container>
      <Box
        sx={{ padding: '50px', paddingTop: '20px', margin: 'auto' }}
        maxWidth="md"
      >
        <CTAForm flexDirection="column" />
      </Box>
      <Footer />
    </>
  );
};

export default About;
