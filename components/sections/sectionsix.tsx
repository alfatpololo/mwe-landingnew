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

export default function SectionSix() {
    const [selectedCompanySize, setSelectedCompanySize] = useState<string | null>(
        null
      );
    
      const companySizes = [
        "5-11 Karyawan",
        "11-29 Karyawan",
        "20-50 Karyawan",
        "50-100 Karyawan",
        "100 lebih Karyawan",
      ];
    
      const [selectedServices, setSelectedServices] = useState<string[]>([]);
    
      const services = ["Website E-Commerce", "Web Design", "Website Company Profile", "Website Custom"];
  return (
    <>
        <section id="sectionsix">
        <div className="container mx-auto flex flex-col lg:pt-[200px] justify-center"
     style={{
      backgroundSize: 'cover',
      minHeight: '100vh', // Ensures the hero section takes up the full viewport height
    }}>
      <div className="flex mb-[56px]">
        <div className="lg:w-full lg:px-0 px-[24px]">
            <h2 className="text-secondary-black text-[24px] lg:text-[32px] font-notosans font-[600] leading-[52px]">Hubungi MakeWebEasy Untuk Konsultasi Selengkapnya!</h2>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-[32px] lg:px-0 px-[24px]">
      <div className="lg:flex lg:flex-col">
      <h1 className="font-notosans text-[16px] font-[400] text-secondary-grey-500 mb-[16px]">Layanan</h1>
      <ServiceTagSelector
        options={services}
        selectedOptions={selectedServices}
        onChange={setSelectedServices}
      />
    </div>
    <div className="lg:flex lg:flex-col lg:mt-0 mt-[24px]">
      <h1 className="font-notosans text-[16px] font-[400] text-secondary-grey-500 mb-[16px]">Ukuran perusahaan</h1>
      <CompanySizeSelector
        options={companySizes}
        selectedOption={selectedCompanySize}
        onChange={setSelectedCompanySize}
      />
    </div>
      </div>
      <div className="lg:px-0 px-[24px]">
      <ContactForm />
      </div>
    </div>
    </section>
    </>
  );
}