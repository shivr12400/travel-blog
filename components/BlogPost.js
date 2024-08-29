import { Card, CardContent, Typography } from '@mui/material';

const BlogPost = ({ title, date, excerpt }) => {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {date}
        </Typography>
        <Typography variant="body2">{excerpt}</Typography>
      </CardContent>
    </Card>
  );
};

export default BlogPost;