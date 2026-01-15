import Footer from "./layout/footer";
import WhatsAppWidget from "./layout/whatsapp-widget";
import HeroPage from "./module/home/page/hero.page";
import OurWorkPage from "./module/our work/page/our-work.page";
import WhatOurClientSaysPage from "./module/what our clients says/page/what-our-client-says.page";
import WhatWeDoPage from "./module/what we do/page/what-we-do.page";
import WhatWeArePage from "./module/who we are/page/what-we-are.page";
import WhyChooseUsPage from "./module/why-choose-us.tsx/page/why-choose-us.page";

const App = () => {
  return (
    <div className="">
      <HeroPage />
      <WhatWeArePage />
      <WhatWeDoPage />
      <WhyChooseUsPage />
      <OurWorkPage />
      <WhatOurClientSaysPage />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default App;
