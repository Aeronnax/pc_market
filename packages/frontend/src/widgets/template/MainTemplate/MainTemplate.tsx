import { FC, ReactNode } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SectionWrap from '../../../entities/template/SectionWrap/SectionWrap';

interface MainTemplateProps {
  children?: ReactNode;
}

const MainTemplate: FC<MainTemplateProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        <SectionWrap>{children}</SectionWrap>
      </main>
      <Footer />
    </div>
  );
};

export default MainTemplate;
