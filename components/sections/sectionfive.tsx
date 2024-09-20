import Image from "next/image";
import Ecommerce from "@/components/tabs/ecommerce";
import Customwebsite from "@/components/tabs/custom-website";
import Copywriting from "@/components/tabs/copywriting";
import Companyprofile from "@/components/tabs/companyprofile";
import Webdesign from "@/components/tabs/webdesign";
import Tabbutton from "@/components/navigation/tabs-button/tabsbutton";
import DropdownButton from "@/components/navigation/collapsebutton/collapsebuttons";
import Navbar from "@/components/navigation/navbar";
import ScrollingImages from "@/components/scrollingimage";
import { useState } from "react";
import ServiceTagSelector from "@/components/tags/activetags";
import CompanySizeSelector from "@/components/tags/companysizetags";
import ContactForm from "@/components/form/form";
import Footer from "@/components/footer/footer";
import Features from "@/components/tabs/features";
import PortfolioSlider from "@/components/slider/portfolioslider";

export default function SectionFive() {
  return (
    <>
        <section className="lg:bg-bg-client lg:bg-auto lg:h-[800px] lg:pt-[120px] lg:bg-no-repeat pt-[125px] lg:bg-left-bottom" id="sectionfive">
    <div className="container mx-auto justify-center px-[80]">
      <div className="lg:grid lg:grid-cols-2 gap-[24px] mb-[28px]">
        <div className="lg:w-[456px] lg:px-0 px-[24px]">
            <h2 className="text-secondary-black text-[24px] lg:text-[32px] font-notosans font-[600] leading-[52px]">Telah Dipercaya Oleh Lebih dari 5000+ Bisnis</h2>
        </div>
        <div className="px-[24px] lg:px-0 mt-[32px]">
        <ScrollingImages />
        </div>
      </div>
    </div>
    </section>
    </>
  );
}
