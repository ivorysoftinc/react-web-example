import _ from 'lodash';
import { useEffect, useState } from 'react';
import Lottie from 'react-lottie';

import inspire from '../../public/animations/Inspire Anim.json';
import target from '../../public/animations/Target anim.json';

import {
  MainContainer,
  TitleContainer,
  HelpContainer,
  ContentContainer,
  FirstTitle,
  SecondTitle,
  Text,
  WorkListContainer,
  WorkList,
  WorkItem,
  LottieContainer,
  TextContainer,
} from './styles';

export const HeadBlock = () => {
  const workItemsArray = ['Develop.', 'Design.'];
  const [direction, setDirection] = useState(1);

  const workItems = _.map(workItemsArray, (item) => (
    <WorkItem key={`what-we-do=${item}`}>{item}</WorkItem>
  ));

  const inspireAnimationOptions = {
    loop: false,
    autoplay: true,
    animationData: inspire,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const targetAnimationOptions = {
    loop: false,
    autoplay: true,
    animationData: target,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const onClickHandler = () => {
    if (direction < 0) return;
    if (direction > 0) {
      setDirection((state) => state * -1);
    }
  };

  const backAnimationHandler = () => {
    if (direction > 0) return;
    if (direction < 0) {
      setDirection((state) => state * -1);
    }
  };

  useEffect(() => {
    if (direction > 0) return;
    const animationFlow = setTimeout(() => {
      if (direction < 0) {
        backAnimationHandler();
      }
    }, 2000);
    return () => {
      clearTimeout(animationFlow);
    };
  }, [direction]);

  return (
    <MainContainer>
      <TitleContainer>
        <FirstTitle>Ivory</FirstTitle>
        <SecondTitle>Soft</SecondTitle>
        <HelpContainer onClick={onClickHandler}>
          <Lottie
            options={targetAnimationOptions}
            direction={direction}
            isStopped={false}
            isPaused={false}
          />
        </HelpContainer>
      </TitleContainer>
      <ContentContainer>
        <TextContainer>
          <Text>
            We are a product-oriented company that delivers excellent strategies to bring your
            business vision to life
          </Text>
        </TextContainer>
        <WorkListContainer>
          <div>
            <WorkList>{workItems}</WorkList>
            <LottieContainer>
              <Lottie options={inspireAnimationOptions} />
            </LottieContainer>
          </div>
        </WorkListContainer>
      </ContentContainer>
    </MainContainer>
  );
};
