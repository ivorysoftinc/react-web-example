import styled from 'styled-components';

import sizes from '../../utils/sizes';
import colors from '../../utils/colors';

export const MainContainer = styled.div`
  margin: 0 0 80px;
  padding: 54px 0 0;

  @media (min-width: ${sizes.M}) {
    margin: 0 0 120px;
    padding: 60px 0 0;
  }

  @media (min-width: ${sizes.XL}) {
    margin: 0 0 200px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${sizes.M}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const TitleContainer = styled.div`
  position: relative;
  margin: 0 0 40px;
  padding: 60px 0 0;
  height: 110px;

  font-family: Gilroy-Bold;
  text-transform: uppercase;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${sizes.M}) {
    margin: 0 0 150px;
    padding: 100px 0 0;
    height: 160px;
  }

  @media (min-width: ${sizes.XL}) {
    margin: 0 0 60px;
    padding: 110px 0 0;
    height: 370px;
  }
`;

export const FirstTitle = styled.h1`
  margin: 0;
  transform: translateX(-5%);

  font-size: 60px;
  line-height: 74px;
  color: ${colors.black};

  @media (min-width: ${sizes.M}) {
    font-size: 80px;
    line-height: 99px;
  }

  @media (min-width: ${sizes.XL}) {
    transform: translateX(5%);
    font-size: 180px;
    line-height: 223px;
  }

  @media (min-width: ${sizes.XXL}) {
    transform: translateX(0);
  }
`;

export const SecondTitle = styled.h2`
  margin: 0;
  transform: translateX(85%);

  font-size: 30px;
  line-height: 37px;
  color: ${colors.burntSienna};

  @media (min-width: ${sizes.M}) {
    font-size: 50px;
    line-height: 62px;
  }

  @media (min-width: ${sizes.XL}) {
    font-size: 120px;
    line-height: 149px;
  }

  @media (min-width: ${sizes.XXL}) {
    transform: translateX(75%);
  }
`;

export const HelpContainer = styled.div`
  display: none;

  @media (min-width: ${sizes.XL}) {
    display: initial;

    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media (min-width: ${sizes.M}) {
    width: max-content;
    order: 1;
  }
`;

export const Text = styled.div`
  max-width: 276px;

  font-family: Gilroy;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
  color: ${colors.black};

  @media (min-width: ${sizes.XL}) {
    max-width: 530px;
    font-size: 24px;
    line-height: 29px;
  }
`;

export const WorkListContainer = styled.div`
  width: 66px;
  margin: 0;

  @media (min-width: ${sizes.M}) {
    width: 95px;
  }

  @media (min-width: ${sizes.XL}) {
    width: 165px;
  }
`;

export const WorkList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const WorkItem = styled.li`
  font-family: Gilroy-SemiBold;
  font-size: 16px;
  line-height: 20px;

  @media (min-width: ${sizes.M}) {
    font-size: 24px;
    line-height: 30px;
  }

  @media (min-width: ${sizes.XL}) {
    font-size: 40px;
    line-height: 50px;
  }
`;

export const LottieContainer = styled.div`
  width: 90%;
`;
