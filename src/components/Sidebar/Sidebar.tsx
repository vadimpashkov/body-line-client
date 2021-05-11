import { FC } from 'react';
import { Link } from 'react-router-dom';

import {
  SidebarWrapper,
  SidebarContainer,
  LogotypeLink,
  SidebarLogotype,
  SidebarQuote,
  SidebarArt,
  SidebarLinks,
} from './Sidebar.elements';

import Art from '../../assets/images/banner.png';

type SidebarProps = {
  className?: string;
};

export const Sidebar: FC<SidebarProps> = ({ className }: SidebarProps) => {
  return (
    <SidebarWrapper className={className}>
      <SidebarContainer>
        <LogotypeLink as={Link} to="/">
          <SidebarLogotype />
        </LogotypeLink>
        <SidebarQuote invert>Откройте для себя новые ощущения от массажа.</SidebarQuote>
      </SidebarContainer>
      <SidebarArt src={Art} alt="Body-Line - Арт" />
      <SidebarContainer none>
        <SidebarLinks />
      </SidebarContainer>
    </SidebarWrapper>
  );
};
