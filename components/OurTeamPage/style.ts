import styled from 'styled-components';
import sizes from '../../utils/sizes';

interface IMottoWrapper {
  isEven: boolean;
  isMirroredView?: boolean;
}
interface INameBlock {
  isMirroredView: boolean;
}

export const Container = styled.div`
  padding: 76px 0 0;

  @media (min-width: ${sizes.M}) {
    padding: 84px 0 0;
  }

  @media (min-width: ${sizes.XL}) {
    padding: 170px 0 0;
  }
`;

export const OurTeamTitle = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Gilroy-Bold;
  font-size: 34px;
  line-height: 42px;

  text-align: center;

  @media (min-width: ${sizes.XL}) {
    font-size: 54px;
    line-height: 67px;
  }
`;

export const OurTeamWrapper = styled.div`
  box-sizing: border-box;
  // margin: 0;
  padding: 0;
  // width: 1200px;
  // margin: 0 120px;
  // margin-top: 130px;
  margin: 130px 120px 0px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 970px) {
    margin: 0 70px;
    margin-top: 80px;
  }

  @media (max-width: ${sizes.M}) {
    margin: 0 40px;
    margin-top: 70px;
  }

  @media (max-width: 740px) {
    margin: 0 15px;
    margin-top: 70px;
  }

  @media (max-width: 704px) {
    margin: 0 60px;
    margin-top: 80px;
  }
`;

export const EmployeeWrapper = styled.div`
  box-sizing: border-box;
  width: 575px;
  display: flex;
  position: relative;
  margin-bottom: 75px;

  &:nth-child(2) {
    flex-direction: row-reverse;
  }

  @media (max-width: 1420px) {
    width: 100%;
    &:nth-child(2) {
      flex-direction: row;
    }
    &:nth-child(even) {
      justify-content: flex-end;
    }
  }

  @media (max-width: ${sizes.M}) {
    // margin: 0 40px;
    margin-bottom: 30px;
    &:nth-child(even) {
      justify-content: flex-start;
      flex-direction: row-reverse;
    }
  }

  // @media (max-width: ${sizes.S}) {
  @media (max-width: 704px) {
    flex-wrap: wrap;
    justify-content: center;
    &:nth-child(even) {
      justify-content: center;
    }
    &:nth-child(odd) {
      justify-content: center;
    }

    margin-bottom: 55px;
  }
`;

export const EmployeePicWrapper = styled.div`
  z-index: 2;
  position: relative;
`;

export const EmployeePic = styled.img`
  width: 310px;
  height: 370px;
  z-index: 2;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 200px;
    height: 260px;
  }
`;

export const EmployeePicMailBlock = styled.a`
  box-sizing: border-box;
  background-color: #ee6e45;
  padding: 5px 8px 1px;
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const MottoWrapper = styled.div<IMottoWrapper>`
  display: flex;
  flex-direction: column;
  margin-left: -35px;

  ${({ isMirroredView = false }) => (isMirroredView ? 'margin-top: -65px;' : '')}

  @media (max-width: 1430px) {
    margin-top: 0px;
  }

  @media (max-width: 768px) {
    flex-direction: ${({ isEven }) => (isEven ? 'row' : 'row-reverse')};
    align-items: center;
    ${({ isEven }) => (isEven ? 'margin-right: -50px;' : 'margin-left: -50px;')}
  }

  @media (max-width: 704px) {
    flex-direction: column;
    margin: 0;
  }
`;

export const NameBlock = styled.div<INameBlock>`
  box-sizing: border-box;
  text-align: center;
  z-index: 1;
  font-family: Gilroy;
  font-weight: 700;
  font-size: 100px;
  color: #f8f8f8;

  @media (max-width: 768px) {
    font-size: 80px;
    margin-left: -5px;
    ${({ isMirroredView = false }) => (isMirroredView ? 'margin-right: -35px;' : '')}
  }

  @media (max-width: ${sizes.M}) {
    margin-left: 0;
    margin-top: -25px;
  }

  @media (max-width: ${sizes.S}) {
    // @media (max-width: 704px) {
    ${({ isMirroredView = false }) => (isMirroredView ? 'margin-left: -30px' : '')}
  }
`;

export const MottoBlock = styled.div`
  box-sizing: border-box;
  padding: 30px 40px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 3;
  width: 300px;
  // height: 240px;
  box-shadow: 0px 4px 55px rgba(0, 0, 0, 0.18);
  margin-top: -15px;

  @media (max-width: 768px) {
    // padding: 16px 45px 16px 16px;
    padding: 16px;
    overflow: hidden;
    width: 282px;
    margin: 0px;
  }

  @media (max-width: ${sizes.S}) {
    // @media (max-width: 704px) {
    box-shadow: none;
    margin-top: -65px;
    background: none;
    text-align: center;
  }
`;

export const EmployeeName = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: #ee6e45;
  margin-bottom: 10px;
  font-family: Gilroy;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 5px;
  }
`;

export const EmployeePosition = styled.div`
  font-family: Gilroy;
  font-size: 16px;
  font-weight: 400;
  width: 80%;

  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    width: 100%;
  }
`;

export const EmployeeMotto = styled.div`
  margin-top: 40px;
  text-align: center;
  font-weight: 500;
  font-size: 28px;
  font-family: Reenie Beanie;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  // @media (max-width: ${sizes.S}) {
  @media (max-width: 704px) {
    padding: 0px 14px;
    margin-top: 16px;
  }
`;

export const MottoWord = styled.div`
  position: absolute;
  top: 90px;
  right: 45px;
  font-family: Gilroy;
  font-size: 14px;
  color: #EE6E45;

  @media (max-width: 768px) {
    top: 70px;
  }

  // @media (max-width: ${sizes.S}) {
  @media (max-width: 704px) {
    display: none;
  }
`;

export const Arrow = styled.img`
  position: absolute;
  top: 0px;
  right: 62px;

  @media (max-width: 768px) {
    top: -20px;
  }

  // @media (max-width: ${sizes.S}) {
  @media (max-width: 704px) {
    display: none;
  }
`;

export const MailBlock = styled.a`
  box-sizing: border-box;
  background-color: #ee6e45;
  padding: 5px 8px 1px;
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: ${sizes.S}) {
    // @media (max-width: 704px) {
    display: none;
  }
`;

export const ScrollToTopButton = styled.div`
  width: 136px;
  background-color: #ea6d45;
  border-radius: 100px;
  text-align: center;
  height: 32px;
  position: fixed;
  bottom: 46px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  line-height: 33px;
  color: white;
`;
