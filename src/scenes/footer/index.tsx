import { SelectedPage } from "@/shared/types";
import Logo from "@/assets/Logo.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({ setSelectedPage }: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" className="h-16" />
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
          <p>© All Rights Reserved.</p>
        </div>
        <div className="my-16 flex basis-1/4 flex-col gap-4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <a href="https://wa.me/+584125666802" target="_blank">
            Whatsapp
          </a>
          <a
            href="https://www.instagram.com/t3ch.sistemas/?hl=es-la"
            target="_blank"
          >
            Instagram
          </a>
          <a href="https://www.facebook.com/T3chSistemasCa" target="_blank">
            Facebook
          </a>
        </div>
        <div className=" flex basis-1/4 flex-col gap-4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <a href="mailto:ventas@t3chsistemas.com" target="_blank">ventas@t3chsistemas.com</a>
          <a href="tel:+582123184051">(0212) 318 40 51</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
