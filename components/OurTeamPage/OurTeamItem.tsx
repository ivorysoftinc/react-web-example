import React from 'react';
import { IOurTeam } from '../../utils/ourTeamMock';
import {
  Arrow,
  EmployeeMotto,
  EmployeeName,
  EmployeePic,
  EmployeePicMailBlock,
  EmployeePicWrapper,
  EmployeePosition,
  EmployeeWrapper,
  MailBlock,
  MottoBlock,
  MottoWord,
  MottoWrapper,
  NameBlock,
} from './style';

interface IOurTeamItem {
  ourTeamItem: IOurTeam;
  isMobile: boolean;
  ourTeamIndex: number;
}

const OurTeamItem = ({ ourTeamItem, isMobile, ourTeamIndex }: IOurTeamItem) => {
  return (
    <EmployeeWrapper key={ourTeamItem.id}>
      <EmployeePicWrapper>
        <EmployeePic src={ourTeamItem.img} />
        {isMobile && ourTeamItem.hasEmail && (
          <EmployeePicMailBlock href={`mailto:${ourTeamItem.email}`}>
            <img src="/icons/email.svg" />
          </EmployeePicMailBlock>
        )}
      </EmployeePicWrapper>
      <MottoWrapper isMirroredView={ourTeamItem?.isMirroredView} isEven={ourTeamIndex % 2 !== 0}>
        <NameBlock isMirroredView={ourTeamItem?.isMirroredView || false}>
          {ourTeamItem.shortName ? ourTeamItem.shortName : ourTeamItem.name.split(' ')[0]}
        </NameBlock>
        <MottoBlock>
          <EmployeeName>{ourTeamItem.name}</EmployeeName>
          <EmployeePosition>{ourTeamItem.position}</EmployeePosition>
          <EmployeeMotto>{ourTeamItem.motto}</EmployeeMotto>
          <MottoWord>motto</MottoWord>
          <Arrow src="/ourTeam/Arrow.svg" />
          {!isMobile && ourTeamItem.hasEmail && (
            <MailBlock href={`mailto:${ourTeamItem.email}`}>
              <img src="/icons/email.svg" />
            </MailBlock>
          )}
        </MottoBlock>
      </MottoWrapper>
    </EmployeeWrapper>
  );
};

export default OurTeamItem;
