import styled from 'styled-components';
import colors from '../../utils/colors';
import sizes from '../../utils/sizes';

interface IBusinessBlockElementWrapper {
  isFirstChild: boolean;
}

export const Container = styled.div`
  box-sizing: border-box;
  margin: 0 0 100px;

  @media (min-width: ${sizes.M}) {
    margin: 0 0 150px;
  }

  @media (min-width: ${sizes.XL}) {
    margin: 0 0 220px;
  }
`;

export const Title = styled.h1`
  margin: 0 0 40px;

  font-family: Gilroy-Bold;
  font-size: 34px;
  line-height: 42px;
  text-align: center;

  @media (min-width: ${sizes.M}) {
    margin: 0 0 60px;
  }

  @media (min-width: ${sizes.XL}) {
    margin: 0 0 80px;

    font-size: 54px;
    line-height: 67px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: ${sizes.XL}) {
    flex-direction: row;
  }
`;

export const ArrowWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  padding: 30px;
  margin: 0 0 15px;

  font-family: Gilroy-Regular;
  font-size: 20px;
  line-height: 24px;

  background: linear-gradient(to right, white, white),
    linear-gradient(270deg, #ee6e45 0%, rgba(238, 110, 69, 0) 100%);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;

  border-style: solid;
  border-color: transparent;
  border-width: 3px 3px 0 0;
  border-top-right-radius: 80px;
  border-bottom-right-radius: 0;

  &::after {
    content: '';
    position: absolute;
    top: 75%;
    left: 100%;
    height: 25%;
    width: 6px;

    background: ${colors.white};
  }

  @media (min-width: ${sizes.M}) {
    margin: 0 0 50px 30px;
    padding: 40px;
    border-width: 6px 6px 6px 0;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;

    &::after {
      top: 98%;
      left: 0px;
      height: 10px;
      width: 72%;
    }
  }

  @media (min-width: ${sizes.XL}) {
    max-width: 1050px;
    margin: 0 auto 40px;
    padding: 35px;
  }
`;

export const ArrowImage = styled.img`
  position: absolute;
  z-index: 10;
  top: 100%;
  right: 27.5%;
  transform: translateY(-35%);
`;

export const ArrowImageMobile = styled.img`
  position: absolute;
  z-index: 10;
  left: 100%;
  top: 74.5%;
  transform: translateX(-42.5%);
`;

export const ItemWrapper = styled.div<IBusinessBlockElementWrapper>`
  flex-grow: 1;
  box-sizing: border-box;
  padding: 0 29px;
  position: relative;
  padding: 24px 8px;

  @media (min-width: ${sizes.M}) {
    margin: 0 40px;
    padding: 24px 8px 40px;
  }

  @media (min-width: ${sizes.XL}) {
    margin: 0;
    padding: 40px 29px;
    border-right: ${({ isFirstChild }) =>
      isFirstChild ? `0.5px dashed ${colors.burntSienna}` : ''};
  }
`;

export const ItemTitle = styled.div`
  position: relative;
  margin: 0 0 24px;

  font-family: Gilroy-Bold;
  font-size: 20px;
  line-height: 25px;
  text-align: center;

  @media (min-width: ${sizes.M}) {
    margin: 0 0 32px;
  }

  @media (min-width: ${sizes.XL}) {
    margin: 0 0 40px;

    font-size: 34px;
    line-height: 42px;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-20%, -50%);
  width: 20px;

  @media (min-width: ${sizes.M}) {
    width: 40px;
  }
`;

export const Description = styled.div<IBusinessBlockElementWrapper>`
  margin: 0 0 24px;

  font-family: Gilroy;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  @media (min-width: ${sizes.M}) {
    margin: 0 0 40px;
    padding: ${({ isFirstChild }) => (isFirstChild ? '0 27px' : '0 92px')};
  }

  @media (min-width: ${sizes.XL}) {
    font-family: Gilroy-Bold;
    line-height: 20px;
    padding: ${({ isFirstChild }) => (isFirstChild ? '0' : '0 50px')};
  }
`;

export const List = styled.ul`
  padding: 0;
  margin: 0 0 24px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: ${sizes.M}) {
    padding: 0 20px;
    margin: 0 0 30px;
  }

  @media (min-width: ${sizes.XL}) {
    height: 263px;
    justify-content: space-between;
  }
`;

export const ListItem = styled.li`
  font-family: Gilroy;
  font-weight: 400;
  font-size: 16px;
  position: relative;
  padding: 0 0 0 28px;

  &:before {
    content: url('./icons/BussinessBlockFlagSmall.svg');
    position: absolute;
    left: 0;
  }
`;

export const Text = styled.div`
  box-sizing: border-box;
  font-family: Gilroy-Medium;
  font-size: 16px;
  text-align: left;

  @media (min-width: ${sizes.XL}) {
    padding: 0 10px;
  }
`;
