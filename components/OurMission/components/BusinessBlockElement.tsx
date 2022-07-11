import { IOurMissionMockData } from '../mockData';
import { Image, ListItem, Description, Text, ItemTitle, List, ItemWrapper } from '../styles';

interface IBlockElement {
  businessItem: IOurMissionMockData;
  isFirstChild: boolean;
  isTablet: boolean;
}

export const BlockElement = ({ businessItem, isFirstChild, isTablet }: IBlockElement) => {
  const getArrowSrc = (isTablet: boolean) => {
    return isTablet ? './icons/ourMissionArrowBusiness.svg' : './icons/short-orange-arrow.svg';
  };

  return (
    <ItemWrapper isFirstChild={isFirstChild}>
      <ItemTitle>
        <Image src={getArrowSrc(isTablet)} alt="arrow" />
        {businessItem.title}
      </ItemTitle>
      <Description isFirstChild={isFirstChild}>{businessItem.subTitle}</Description>
      <List>
        {businessItem.list.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
      <Text>{businessItem.text}</Text>
    </ItemWrapper>
  );
};
