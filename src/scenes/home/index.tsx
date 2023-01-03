import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import LogoPageText from "@/assets/LogoPageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.jpg";
import ClientCinesUnidos from "@/assets/ClientCinesUnidos.png"
import ClientCinex from "@/assets/ClientCinex.png"
import ClientGama from "@/assets/ClientGama.png"
import ClientLuvebras from "@/assets/ClientLuvebras.png"
import ClientQuickPress from "@/assets/ClientQuickPress.png"
import useMediaQuery from "@/hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px");

  return (
    <section id="inicio" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* Image and Main Header */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* Main Header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* Headings */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-60 before:opacity-70 before:z-[-1] md:before:content-blurredlogo">
                <img src={LogoPageText} alt="home-page-text" />
              </div>
            </div>
            <p className="mt-8 text-lg">
              Tu mejor opción en equipos fiscales, servicios POS, sistemas
              administrativos y tecnología para tu negocio.
            </p>
          </motion.div>
          {/* Actions */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Cotizar
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-gray-500"
              onClick={() => setSelectedPage(SelectedPage.AboutUs)}
              href={`#${SelectedPage.AboutUs}`}
            >
              <p>Más información</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* Image */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 mt-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="home-pageGraphic" />
        </div>
      </motion.div>
      {/* Sponsors */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6 flex align-center">
            <div className="flex w-full items-center justify-between gap-8">
              <img src={ClientCinesUnidos} alt="redbull-sponsor" className="h-16"/>
              <img src={ClientCinex} alt="forbes-sponsor" className="h-16"/>
              <img src={ClientGama} alt="fortune-sponsor" className="h-16"/>
              <img src={ClientLuvebras} alt="fortune-sponsor" className="h-16"/>
              <img src={ClientQuickPress} alt="fortune-sponsor" className="h-16"/>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
