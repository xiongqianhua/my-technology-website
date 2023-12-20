import { GetStaticPaths, GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';
import {remark} from 'remark';
import remarkHtml from 'remark-html';
import { ParsedUrlQuery } from 'querystring';
import BlogPost from '../../component/blogPost';

interface PostProps {
  data: { [key: string]: any };
  content: string;
}

interface PostParams extends ParsedUrlQuery {
  slug: string;
}

const BlogSlugPage = ({ post }: { post: PostProps }) => {
  return (
    <div>
      <BlogPost post={post} />
    </div>
  );
};

export default BlogSlugPage;

export const getStaticPaths: GetStaticPaths<PostParams> = async () => {
  const postsDirectory = path.join(process.cwd(), 'markdownFile');
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.md$/, '') },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<PostProps, PostParams> = async ({ params }) => {
  const postFilePath = path.join(process.cwd(), 'markdownFile', `${params?.slug}.md`);
  const fileContents = fs.readFileSync(postFilePath, 'utf8');

  const { data, content } = grayMatter(fileContents);

  const processedContent = await remark().use(remarkHtml).process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      post: {
        data,
        content: contentHtml,
      },
    },
  };
};
