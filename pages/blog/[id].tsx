import { useCallback } from 'react';
import Axios from 'axios';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';
import _ from 'lodash';

import { BreadCrumbsNavigation, Layout } from '../../utils/exports';
import { BlogApi } from '../../api/api';
import ArticleHeader from '../../components/TextField/ArticlePage/ArticleHeader';
import CodeBlock from '../../components/TextField/ArticlePage/CodeBlock';
import SkeletonHeader from '../../components/TextField/ArticlePage/SkeletonHeader';
import NewsBlock from '../../components/NewsBlock';
import { ScrollToTop } from '../../components/ScrollToTop';
import {
  Container,
  MainContentContainer,
  HeadlinesContainer,
  HeadlinesTitle,
  AllHeadlines,
  OneHeadline,
  BlogTextContainer,
  Content,
  ContentContainer,
  PageName,
  StyledMarkdown,
} from '../../styles/PagesStyles/Blog/components';
import { SolutionsBlock } from '../../utils/exports';
import { IArticleProps, ArticleType, IBlogId, NewsType } from '../../services/Types';
import { getShortPathName } from '../../utils/helpers/getShortPathName';

const Article = ({ blog, news }: IArticleProps) => {
  const router = useRouter();
  const id = router.query.id;

  const { metaTitle, metaDescription, url, fullText }: ArticleType = blog;

  const { isLoading: dataLoading } = useQuery(id, BlogApi.getArticlesById);

  const getArticle = useCallback(() => Axios.get(fullText || ''), [blog]);
  const { isLoading: textLoading, data: articleText } = useQuery(fullText, getArticle);

  const getRandomNews = () => {
    let randomArr: NewsType[] = [];
    for (let i in news) {
      let randomIndex = Math.floor(Math.random() * news.length);
      while (randomArr.includes(news[randomIndex])) {
        randomIndex = Math.floor(Math.random() * news.length);
      }
      if (randomArr.length < 3) {
        randomArr[i] = news[randomIndex];
      }
    }
    return randomArr;
  };

  return (
    <Layout
      footerButton="subscribe"
      footerTitle="Learn about business and technology from our monthly newsletter!"
      subscribePopup
      documentTitle={metaTitle}
      documentDescription={metaDescription}
      canonical={`/blog/${url}`}
    >
      <Container>
        <ContentContainer>
          <BreadCrumbsNavigation
            webBottomMargin={53}
            replaceCharacterList={[{ from: `${id}`, to: `${getShortPathName(blog.title)}` }]}
          />
          <PageName>Blog</PageName>
          <MainContentContainer>
            <HeadlinesContainer>
              <HeadlinesTitle>Headlines</HeadlinesTitle>
              <AllHeadlines>
                {_.map(articleText?.data, (headline) => (
                  <OneHeadline key={`headline-${headline}`}>
                    <StyledMarkdown source={headline} />
                  </OneHeadline>
                ))}
              </AllHeadlines>
            </HeadlinesContainer>
            <BlogTextContainer>
              {dataLoading ? <SkeletonHeader /> : <ArticleHeader articleInfo={blog} />}
              {textLoading ? (
                <Skeleton count={10} />
              ) : (
                <Content>
                  <StyledMarkdown
                    source={articleText?.data}
                    renderers={{ code: CodeBlock }}
                    escapeHtml={false}
                  />
                </Content>
              )}
              <NewsBlock newsBlockInfo={getRandomNews()} isInsideBlog={true} />
              <ScrollToTop />
            </BlogTextContainer>
          </MainContentContainer>
          <SolutionsBlock isMainPage={false} />
        </ContentContainer>
      </Container>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}articles/info`);
  const blogs = await res.json();
  const paths = blogs.info.map((blog: IBlogId) => ({
    params: { id: blog.params.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: IBlogId) => {
  const blog = await BlogApi.getArticlesById(params.id);
  const news = await BlogApi.getArticles(0, '');
  return { props: { blog: blog.article, news: news.articles.docs } };
};

export default Article;
