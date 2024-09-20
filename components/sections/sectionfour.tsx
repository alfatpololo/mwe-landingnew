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

export default function SectionFour() {
  return (
    <>
    <section id="sectionfour">
    <div className="container mx-auto justify-center px-[80] lg:py-[150px]">
      <div className="grid grid-cols-1 gap-[24px] mb-[40px]">
        <div className="w-full">
            <h2 className="text-secondary-black text-center text-[32px] font-notosans font-[600] leading-[52px]">Kisah Sukses Mereka Bersama Kami</h2>
            </div>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:w-full lg:gap-[32px] mb-[24px]">       
        <div className="">
        <div className="hidden lg:block">
        <iframe className="rounded-[12px]" width="624" height="400" src="https://www.youtube.com/embed/6WeFmf41x2w" title="MakeWebEasy Indonesia Testimonial from Jeremy Rusli (Eaton Indonesia)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
</div>
        <div className="flex justify-center px-[24px] lg:hidden">
        <iframe className="rounded-[12px]" width="624" height="300" src="https://www.youtube.com/embed/6WeFmf41x2w" title="MakeWebEasy Indonesia Testimonial from Jeremy Rusli (Eaton Indonesia)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
</div>
        </div>
        <div className="">
        <div className="lg:grid lg:gap-[16px]">
        <div className="lg:mt-0 mt-[16px] px-[24px]">
      <DropdownButton />
    </div>
    </div>
        </div>
      </div>
    </div>
    </section>
    </>
  );
}
