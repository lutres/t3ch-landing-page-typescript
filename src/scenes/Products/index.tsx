import { ProductType, SelectedPage } from "@/shared/types";
import FiscalPrinters from "@/assets/FiscalPrinters.jpeg";
import AdministrativeSoftware from "@/assets/AdministrativeSoftware.jpg";
import Hardware from "@/assets/Hardware.jpg";
import Periferics from "@/assets/Periferics.jpg";
import TechnicalService from "@/assets/TechnicalService.jpg";
import Assesory from "@/assets/Assesory.jpg";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Product from "./Product";

const products: Array<ProductType> = [
    {
        title: "Impresoras Fiscales",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: FiscalPrinters
    },
    {
        title: "Software Administrativo",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: AdministrativeSoftware
    },
    {
        title: "Hardware",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: Hardware
    },
    {
        title: "Periféricos",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: Periferics
    },
    {
        title: "Servicio Técnico",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: TechnicalService
    },
    {
        title: "Inducciones",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: Assesory
    },
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Products = ({ setSelectedPage }: Props) => {
  return (
    <section id="productos" className="w-full bg-primary-100 py-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Products)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>NUESTROS PRODUCTOS</HText>
            <p className="py-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 mx-auto w-5/6">
          <ul className="grid gap-8 md:grid-cols-3">
            {products.map((item: ProductType, index) => (
                <Product
                key={`${item.title}-${index}`} title={item.title} description={item.description} image={item.image}/>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Products;
