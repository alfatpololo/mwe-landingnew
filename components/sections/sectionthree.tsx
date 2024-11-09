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

export default function SectionThree() {
  return (
    <>
     <section id="sectionthree">
     <div className="container mx-auto flex flex-col justify-center"
     style={{
      backgroundSize: 'cover',
      minHeight: '100vh', // Ensures the hero section takes up the full viewport height
    }}>
      <div className="grid grid-cols-1 gap-[24px] mb-[40px]">
        <div className="w-full">
            <h2 className="text-secondary-black text-center text-[32px] font-notosans font-[600] leading-[52px]">Kami Telah Membantu Transformasi Digital <br /> Melalui Website Untuk Banyak Perusahaan!</h2>
            </div>
      </div>
      <PortfolioSlider />
      <div className="lg:grid grid-cols-3 gap-[24px] mb-[24px] hidden">       
        <div className="bg-secondary-grey-100 border-[1px] border-secondary-grey-200 p-[24px] rounded-[16px]">
          <div className="flex gap-[16px] space-x-3">
              <div className="w-full">
              <Image
                    className=""
                    width={48}
                    height={48}
                    src="/iconkebunraya.svg"
                    alt=""
                  />
                  <h2 className="text-secondary-black text-[16px] font-notosans font-[500] leading-[28px] mt-[12px]">Kebun Raya Nusantara</h2>
                  <p className="text-secondary-grey-500 text-[14px] font-notosans font-[400] leading-[24px] mt-[8px]">Holding Perkebunan</p>
              </div>
              <div className="ms-[16px] w-full">
              <Image
                    className="w-full"
                    width={239}
                    height={188}
                    src="/portfoliokebunraya.svg"
                    alt=""
                  />
              </div>
          </div>
        </div>
        <div className="bg-secondary-grey-100 border-[1px] border-secondary-grey-200 p-[24px] rounded-[16px] hidden lg:flex">
          <div className="flex gap-[16px]">
              <div className="w-full">
              <Image
                    className=""
                    width={48}
                    height={48}
                    src="/iconkebunraya.svg"
                    alt=""
                  />
                  <h2 className="text-secondary-black text-[16px] font-notosans font-[500] leading-[28px] mt-[12px]">Kebun Raya Nusantara</h2>
                  <p className="text-secondary-grey-500 text-[14px] font-notosans font-[400] leading-[24px] mt-[8px]">Holding Perkebunan</p>
              </div>
              <div className="ms-[16px] w-full">
              <Image
                    className=""
                    width={239}
                    height={188}
                    src="/portfoliokebunraya.svg"
                    alt=""
                  />
              </div>
          </div>
        </div>
        <div className="bg-secondary-grey-100 border-[1px] border-secondary-grey-200 p-[24px] rounded-[16px] hidden lg:flex">
          <div className="flex gap-[16px]">
              <div className="w-full">
              <Image
                    className=""
                    width={48}
                    height={48}
                    src="/iconkebunraya.svg"
                    alt=""
                  />
                  <h2 className="text-secondary-black text-[16px] font-notosans font-[500] leading-[28px] mt-[12px]">Kebun Raya Nusantara</h2>
                  <p className="text-secondary-grey-500 text-[14px] font-notosans font-[400] leading-[24px] mt-[8px]">Holding Perkebunan</p>
              </div>
              <div className="ms-[16px] w-full">
              <Image
                    className=""
                    width={239}
                    height={188}
                    src="/portfoliokebunraya.svg"
                    alt=""
                  />
              </div>
          </div>
        </div>
      </div>
      <div className="lg:grid grid-cols-3 gap-[24px] hidden">       
        <div className="bg-secondary-grey-100 border-[1px] border-secondary-grey-200 p-[24px] rounded-[16px] ">
          <div className="flex gap-[16px]">
              <div className="w-full">
              <Image
                    className=""
                    width={48}
                    height={48}
                    src="/iconkebunraya.svg"
                    alt=""
                  />
                  <h2 className="text-secondary-black text-[16px] font-notosans font-[500] leading-[28px] mt-[12px]">Kebun Raya Nusantara</h2>
                  <p className="text-secondary-grey-500 text-[14px] font-notosans font-[400] leading-[24px] mt-[8px]">Holding Perkebunan</p>
              </div>
              <div className="ms-[16px] w-full">
              <Image
                    className=""
                    width={239}
                    height={188}
                    src="/portfoliokebunraya.svg"
                    alt=""
                  />
              </div>
          </div>
        </div>
        <div className="bg-secondary-grey-100 border-[1px] border-secondary-grey-200 p-[24px] rounded-[16px] ">
          <div className="flex gap-[16px]">
              <div className="w-full">
              <Image
                    className=""
                    width={48}
                    height={48}
                    src="/iconkebunraya.svg"
                    alt=""
                  />
                  <h2 className="text-secondary-black text-[16px] font-notosans font-[500] leading-[28px] mt-[12px]">Kebun Raya Nusantara</h2>
                  <p className="text-secondary-grey-500 text-[14px] font-notosans font-[400] leading-[24px] mt-[8px]">Holding Perkebunan</p>
              </div>
              <div className="ms-[16px] w-full">
              <Image
                    className=""
                    width={239}
                    height={188}
                    src="/portfoliokebunraya.svg"
                    alt=""
                  />
              </div>
          </div>
        </div>
        <div className="bg-secondary-grey-100 border-[1px] border-secondary-grey-200 p-[24px] rounded-[16px] ">
          <div className="flex gap-[16px]">
              <div className="">
              <Image
                    className=""
                    width={48}
                    height={48}
                    src="/iconkebunraya.svg"
                    alt=""
                  />
                  <h2 className="text-secondary-black text-[16px] font-notosans font-[500] leading-[28px] mt-[12px]">Kebun Raya Nusantara</h2>
                  <p className="text-secondary-grey-500 text-[14px] font-notosans font-[400] leading-[24px] mt-[8px]">Holding Perkebunan</p>
              </div>
              <div className="ms-[16px] min-w-[240px]">
              <Image
                    className=""
                    width={239}
                    height={188}
                    src="/portfoliokebunraya.svg"
                    alt=""
                  />
              </div>
          </div>
        </div>
      </div>
      
    </div>
    </section>
    </>
  );
}
