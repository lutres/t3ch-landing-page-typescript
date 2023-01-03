import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { AnimatePresence, motion, useCycle } from "framer-motion";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");
  const [open, cycleOpen] = useCycle(0, 1);
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed z-30 w-full py-2`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left Side */}
            <img src={Logo} alt="logo" className="h-16" />
            {/* Right Side */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween}`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Inicio"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Sobre Nosotros"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Productos"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contáctanos"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => cycleOpen(1)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Modal */}
      <AnimatePresence>
      {!isAboveMediumScreens && open === 1 && (
          <motion.aside
            className="fixed right-0 bottom-0 z-40 h-full bg-primary-100 shadow-2xl drop-shadow-xl"
            initial={{ width: 0 }}
            animate={{ width: 250, transition: { duration: 0.3} }}
            exit={{
              width: 0,
              transition: { duration: 0.3 },
            }}
            variants={sideVariants}
          >
            <motion.div
              className="container"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {/* Close Icon */}
              <motion.div className="flex justify-end p-8">
                <motion.button onClick={() => cycleOpen(0)}>
                  <XMarkIcon className="h-6 w-6 text-gray-400" />
                </motion.button>
              </motion.div>
              {/* Menu Icons */}
              <div className="ml-4 flex flex-col gap-10 text-xl">
                <Link
                  page="Inicio"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Sobre Nosotros"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Productos"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contáctanos"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
            </motion.div>
          </motion.aside>
      )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
