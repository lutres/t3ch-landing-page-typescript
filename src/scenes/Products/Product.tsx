import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  image: string;
  title: string;
  description: string;
};

const Product = ({ title, description, image }: Props) => {
  return (
    <li>
      <div className="bg-white rounded-md">
        <div className="pt-10 pb-5 px-3">
          <img src={image} alt={`${title}`} className="shadow-cardshadow hover:shadow-cardshadowhover hover:-mt-2 hover:mb-2 ease-in-out duration-300 h-[195px] mx-auto"/>
        </div>
        <div className="px-3 pb-5">
          <h3 className="my-4 font-bold text-xl">{title}</h3>
          <p className="text-sm mb-3">{description}</p>
          <AnchorLink
            className="text-sm font-bold text-primary-500 underline hover:text-gray-500"
          >
            Más Información
          </AnchorLink>
        </div>
      </div>
    </li>
  );
};

export default Product;
