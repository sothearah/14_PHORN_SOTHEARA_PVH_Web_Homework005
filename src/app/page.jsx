// import { Image } from "lucide-react";
import NavbarComponent from "../app/components/NavbarComponent";
import SidebarComponent from "./components/menu/SidebarComponent";
import CardComponent from "./components/card/CardComponent";
import { items } from "./data/items";
import DetailButtonComponent from "./components/button/DetailButtonComponent";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black/90">
      <NavbarComponent />
      <div className="flex mx-5">
        <SidebarComponent />
        <CardComponent items={items} />
      </div>
    </div>
  );
}
