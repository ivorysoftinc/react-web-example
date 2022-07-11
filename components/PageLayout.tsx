import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import ProjectRequestPopup from './ProjectRequestPopup';
import BlogSubscribePopup from './BlogSubscribePopup';

type PropsType = {
  children: React.ReactElement | React.ReactElement[];
  footerTitle?: string;
  footerButton?: string;
  whiteNavbar?: boolean;
  footerBgColor?: string;
  subscribePopup?: boolean;
  documentTitle?: string;
  documentDescription?: string;
  canonical?: string;
  showBanner?: boolean;
};

const Content = styled.div`
  min-height: calc(100vh - 197px);
`;

export const Layout = ({
  children,
  footerTitle,
  footerButton,
  whiteNavbar,
  footerBgColor,
  subscribePopup,
  documentTitle = 'IvorySoft',
  documentDescription,
  canonical,
  showBanner,
}: PropsType) => {
  const [isPopup, setIsPopup] = useState(false);

  return (
    <div>
      <Head>
        <title>{documentTitle}</title>
        <meta name="description" content={documentDescription}></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href={`https://ivorysoft.co${canonical}`} />
      </Head>
      <Navbar whiteNavbar={whiteNavbar} showBanner={showBanner} />
      <Content>{children}</Content>
      {isPopup && subscribePopup ? (
        <BlogSubscribePopup closeModal={() => setIsPopup(false)} />
      ) : (
        isPopup && <ProjectRequestPopup closeModal={() => setIsPopup(false)} />
      )}
      <Footer
        footerTitle={footerTitle}
        footerButton={footerButton}
        footerBgColor={footerBgColor}
        setIsPopup={setIsPopup}
      />
    </div>
  );
};
