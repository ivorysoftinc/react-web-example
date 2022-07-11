import { IOurMissionMockData } from '../mockData';
import { ContentContainer } from '../styles';
import { BlockElement } from './BusinessBlockElement';

type Props = {
  info: IOurMissionMockData[];
  isTablet: boolean;
};

export const BusinessBlock = ({ info, isTablet }: Props) => {
  return (
    <ContentContainer>
      {info.map((item, index) => (
        <BlockElement
          key={index}
          businessItem={item}
          isFirstChild={index === 0}
          isTablet={isTablet}
        />
      ))}
    </ContentContainer>
  );
};
