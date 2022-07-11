import { useEffect, useState } from 'react';
import { ourMissionMockData } from './mockData';
import sizes from '../../utils/sizes';
import useWindowWidth from '../../utils/helpers/useWindowWidth';
import { BusinessBlock } from './components/BusinessBlock';
import { ArrowWrapper, ArrowImage, ArrowImageMobile, Container, Title } from './styles';

export const OurMission = () => {
  const [isTablet, setIsTablet] = useState(false);
  const resizeCount = useWindowWidth();

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${sizes.M})`);
    if (media.matches) {
      setIsTablet(true);
    } else {
      setIsTablet(false);
    }
  }, [resizeCount]);

  return (
    <Container>
      <Title>Our mission</Title>
      <ArrowWrapper>
        Break the boundaries between IT professionals and life-changing products. We strive to
        enhance the business growth of our clients by delivering market-defining, high-quality
        solutions that make them lead the pack
        {isTablet ? (
          <ArrowImage src="./icons/ourMissionArrow.svg" alt="arrow" />
        ) : (
          <ArrowImageMobile src="./icons/ourMissionArrowMobile.svg" alt="arrow" />
        )}
      </ArrowWrapper>
      <BusinessBlock info={ourMissionMockData} isTablet={isTablet} />
    </Container>
  );
};
