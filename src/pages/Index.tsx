import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Hours from "@/components/Hours";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DisclaimerModal from "@/components/DisclaimerModal";
import { useLanguage } from "@/hooks/useLanguage";

const Index = () => {
  const { lang } = useLanguage();

  const languageName = {
    fr: "fr",
    de: "de",
    en: "en",
  };

  return (
    <>
      <Helmet>
        <html lang={languageName[lang]} />
        <title>Cabinet Vétérinaire des Promenades - Carouge</title>
        <meta
          name="description"
          content="Cabinet vétérinaire professionnel à Carouge depuis 1974. Soins complets pour chiens, chats et petits rongeurs. Ostéopathie et toilettage disponibles."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Cabinet Vétérinaire des Promenades" />
        <meta
          property="og:description"
          content="Votre cabinet vétérinaire de confiance à Carouge depuis 1974"
        />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content={lang === "fr" ? "fr_CH" : lang === "de" ? "de_CH" : "en_CH"} />
      </Helmet>

      <DisclaimerModal />
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Hours />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
