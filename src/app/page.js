import Home_V1 from "./(home)/home-v1/page";
import Wrapper from "./layout-wrapper/wrapper";
import "../style/global.css"
import Footer from "@/components/common/default-footer";
import Header from "@/components/home/home-v1/Header";
import MobileMenu from "@/components/common/mobile-menu";

export const metadata = {
  title: "Home v1 || Homez - Real Estate NextJS Template",
};

export default function MainRoot() {
  return (
    <Wrapper>

      <Home_V1 />
  
    </Wrapper>
  );
}
