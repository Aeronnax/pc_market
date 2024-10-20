import { FC, ReactNode } from 'react';
import Style from './SectionWrap.module.scss';

interface SectionWrapProps {
  children?: ReactNode;
}

const SectionWrap: FC<SectionWrapProps> = ({ children }) => {
  return <section className={Style.informationSection}>{children}</section>;
};

export default SectionWrap;
