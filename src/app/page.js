import NavbarComponent from "./components/button/bar/NavbarComponent";
import LabelComponent from "./components/button/menu/LabelComponent";
import SeacrchBarComponent from "./components/button/SearchBarComponent";
import CardComponent from "./components/CardComponent";
import { items } from "./data/items";

export default function Home() {
  const items = [
    {
      id: 1,
      item_name: "Wireless Mouse",
      item_description:
        "Ergonomic wireless mouse with adjustable DPI and silent clicks.",
      item_price: 19.99,
    },
    {
      id: 2,
      item_name: "Mechanical Keyboard",
      item_description:
        "Compact mechanical keyboard with tactile switches and RGB backlight.",
      item_price: 59.5,
    },
  ];

  return (
    <>
      <SeacrchBarComponent/>
      <CardComponent/>
      {/* <LabelComponent/> */}
      {/* <NavbarComponent/> */}
      {/* <DetailButtonComponent /> */}
    </>
  );
}
