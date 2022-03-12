import Achievements from '@/components/Achievements/Achievements';
import BlogsNews from '@/components/BlogsNews/BlogsNews';
import Cta from '@/components/Cta/Cta';
import Hero from '@/components/Hero/Hero';
import Milestones from '@/components/Milestones/Milestones';
import Mission from '@/components/Mission/Mission';
import Services from '@/components/Services/Services';
import WhatWeDo from '@/components/WhatWeDo/WhatWeDo';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <>
        <Hero />
        <Services />
        <Mission />
        <WhatWeDo />
        <Milestones />
        <Achievements />
        <BlogsNews />
        <Cta />
      </>
    </Main>
  );
};

export default Index;
