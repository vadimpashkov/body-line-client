import { FC } from 'react';

import {
  InfoPanelWrapper,
  InfoPanelIcon,
  InfoPanelContent,
  InfoPanelTitle,
  InfoPanelDescription,
} from './InfoPanel.elements';

type InfoPanelProps = {
  className?: string;
  href: string;
  title: string;
  text: string;
};

export const InfoPanel: FC<InfoPanelProps> = ({ className, href, title, text }: InfoPanelProps) => {
  return (
    <InfoPanelWrapper className={className}>
      <InfoPanelIcon href={href} />
      <InfoPanelContent>
        <InfoPanelTitle>{title}</InfoPanelTitle>
        <InfoPanelDescription>{text}</InfoPanelDescription>
      </InfoPanelContent>
    </InfoPanelWrapper>
  );
};
