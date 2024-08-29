import Layout from '../../components/Layout';
import { Typography } from '@mui/material';
import { useRouter } from 'next/router';

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout>
      <Typography variant="h4" component="h1" gutterBottom>
        {slug}
      </Typography>
      <Typography variant="body1">
        This is a placeholder for the blog post content. In a real application, you would fetch the content based on the slug.
      </Typography>
    </Layout>
  );
};

export default BlogPost;