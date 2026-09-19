import { Box, Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout>
      <Container maxWidth="md" sx={{ pt: { xs: 16, md: 22 }, pb: { xs: 8, md: 12 } }}>
        <Typography variant="h2" component="h1" sx={{ mb: 2 }}>
          {slug}
        </Typography>
        <Box sx={{ maxWidth: '62ch' }}>
          <Typography sx={{ color: 'var(--haze)' }}>
            This post hasn't been written yet.
          </Typography>
        </Box>
      </Container>
      <Footer />
    </Layout>
  );
};

export default BlogPost;
