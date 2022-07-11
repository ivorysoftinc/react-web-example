import styled from 'styled-components';

import {
  Layout,
  HeadBlock,
  OurTeam,
  WhatWeDoBlock,
  HelpBlock,
  OurValues,
  PortfolioSlider,
  ClientsMap,
  FeedbackBlock,
  ReviewsWidget,
  Services,
  SolutionsBlock,
  OurMission,
} from '../utils/exports';
import sizes from '../utils/sizes';
import { MetaTags } from '../components/StaticInfo/MetaTags';

const Container = styled.div`
  padding: 0 16px;
  overflow-x: hidden;
  box-sizing: border-box;

  @media (min-width: ${sizes.M}) {
    padding: 0 20px;
  }

  @media (min-width: ${sizes.XL}) {
    padding: 0 120px;
  }

  @media (min-width: ${sizes.XXL}) {
    padding: 0 calc((100% - 1200px) / 2);
  }

  @media (min-width: 2000px) {
    overflow-x: visible;
  }
`;

const MainApp = () => {
  return (
    <Layout
      footerTitle="Don’t be shy!"
      footerButton="say hi"
      documentTitle={MetaTags.mainPage.title}
      documentDescription={MetaTags.mainPage.description}
      canonical={''}
      showBanner
    >
      <Container>
        <HeadBlock />
        <ReviewsWidget />
        <WhatWeDoBlock />
        <Services />
        <OurValues />
        <OurMission />
        <ClientsMap />
        <HelpBlock />
        <PortfolioSlider />
        <OurTeam />
        <FeedbackBlock />
        <SolutionsBlock isMainPage={true} />
      </Container>
    </Layout>
  );
};

export default MainApp;
