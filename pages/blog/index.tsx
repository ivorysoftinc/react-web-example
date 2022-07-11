import { useMemo, useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import _ from 'lodash';

import { BreadCrumbsNavigation, Layout } from '../../utils/exports';
import NewsBlock from '../../components/NewsBlock';
import ButtonWithBorder from '../../components/ButtonWithBorder';
import { BlogApi } from '../../api/api';
import CategoriesMenu from '../../components/CategoriesMenu';
import SkeletonBlock from '../../components/SkeletonBlock';
import { MetaTags } from '../../components/StaticInfo/MetaTags';

import {
  Container,
  ContentContainer,
  FiltersContainer,
  Industries,
  NewsContainer,
  Title,
  TitleContainer,
  SeeMore,
} from '../../styles/PagesStyles/Blog/style';

const Blog = () => {
  const [category, setCategory] = useState('');

  const {
    status,
    data: articleData,
    error,
    isFetchingMore,
    fetchMore,
    canFetchMore,
  } = useInfiniteQuery(
    category,
    async (_key, nextId: number = 0) => {
      const helpCategory = category === 'Latest' ? '' : category;
      const data = await BlogApi.getArticles(nextId, helpCategory);

      return data;
    },
    {
      getFetchMore: (lastGroup) => {
        return lastGroup.articles.nextCursor;
      },
    },
  );

  const renderArticles = useMemo(() => {
    if (status === 'loading') {
      return <SkeletonBlock />;
    }
    if (status === 'error') {
      return <div>Error: {error}</div>;
    }
    return (
      <>
        <NewsBlock
          key={
            articleData?.length
              ? `news-block-${_.map(articleData?.[0].articles.docs, (item) => item.title)}`
              : Math.floor(Math.random() * 1000)
          }
          newsBlockInfo={articleData?.length ? articleData?.[0].articles.docs : {}}
          // newsBlockInfo={articleData?.[0].articles.docs}
        />
      </>
    );
  }, [articleData]);

  return (
    <Layout
      footerButton="subscribe"
      footerTitle="Learn about business and technology from our monthly newsletter!"
      subscribePopup
      documentTitle={MetaTags.blog.title}
      documentDescription={MetaTags.blog.description}
      canonical="/blog"
    >
      <Container>
        <BreadCrumbsNavigation webBottomMargin={53} />
        <TitleContainer>
          <Title>Blog</Title>
        </TitleContainer>
        <ContentContainer>
          <FiltersContainer>
            <Industries>Industries</Industries>
            <CategoriesMenu mainCategory={category} setCategory={setCategory} />
          </FiltersContainer>
          <NewsContainer>{renderArticles}</NewsContainer>
        </ContentContainer>
        {canFetchMore && (
          <SeeMore>
            <ButtonWithBorder
              onClick={() => fetchMore()}
              text={
                isFetchingMore
                  ? 'Loading more...'
                  : canFetchMore
                  ? 'See More'
                  : 'Nothing more to load'
              }
            />
          </SeeMore>
        )}
      </Container>
    </Layout>
  );
};

export default Blog;
