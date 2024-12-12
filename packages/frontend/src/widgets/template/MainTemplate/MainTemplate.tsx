import { FC, ReactNode } from 'react';
import Header from 'src/widgets/template/Header/Header';
import Footer from 'src/widgets/template/Footer/Footer';
import SectionWrap from 'src/entities/template/SectionWrap/SectionWrap';

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
