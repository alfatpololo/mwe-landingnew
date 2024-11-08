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

export default function SectionTwo() {
  return (
    <>
     <section id="sectiontwo">
    <div className="container mx-auto h-full py-[200px] justify-center">
      <div className="lg:grid lg:grid-cols-3 lg:gap-[24px] mb-[28px]">
        <div className="lg:w-[456px] px-[35px] lg:px-0">
            <h2 className="text-secondary-black text-[24px] lg:text-[32px] font-notosans font-[600] leading-[36px] lg:leading-[52px]">Dilengkapi Semua Fitur yang Dibutuhkan Pada Website</h2>
            <p className="text-secondary-grey-500 text-[16px] font-notosans font-[400] leading-[24px] mt-[16px] hidden lg:flex">Buat Website E-Commerce dan Company Profilemu dengan Lebih Mudah bersama Berbagai Fitur Unggulan </p>
        </div>
        <div className="bg-gray-200 p-4 invisible"></div>
        <div className="px-[24px] lg:hidden">
  <div className="mb-[12px]">
    <Features
      title="Fitur E-Commerce Lengkap"
      content="Secara efektif mendukung kegiatan marketing dengan beragam fitur bawaan yang mampu diintegrasikan."
      iconSrc="/integration.svg"
    />
  </div>
  <div className="mb-[12px]">
    <Features
      title="Fitur E-Commerce Lengkap"
      content="Secara efektif mendukung kegiatan marketing dengan beragam fitur bawaan yang mampu diintegrasikan."
      iconSrc="/integration.svg"
    />
  </div>
  <div className="mb-[12px]">
    <Features
      title="Fitur E-Commerce Lengkap"
      content="Secara efektif mendukung kegiatan marketing dengan beragam fitur bawaan yang mampu diintegrasikan."
      iconSrc="/integration.svg"
    />
  </div>
  <div className="mb-[12px]">
    <Features
      title="Fitur E-Commerce Lengkap"
      content="Secara efektif mendukung kegiatan marketing dengan beragam fitur bawaan yang mampu diintegrasikan."
      iconSrc="/integration.svg"
    />
  </div>
  <div className="mb-[12px]">
    <Features
      title="Fitur E-Commerce Lengkap"
      content="Secara efektif mendukung kegiatan marketing dengan beragam fitur bawaan yang mampu diintegrasikan."
      iconSrc="/integration.svg"
    />
  </div>
  <div className="mb-[12px]">
    <Features
      title="Fitur E-Commerce Lengkap"
      content="Secara efektif mendukung kegiatan marketing dengan beragam fitur bawaan yang mampu diintegrasikan."
      iconSrc="/integration.svg"
    />
  </div>
</div>
        
        <div className="bg-secondary-grey-100 p-[24px] rounded-[16px] hidden lg:block">
          <div className="flex gap-[20px]">
              <div className="">
              <Image
                    className=""
                    width={65}
                    height={64}
                    src="/integration.svg"
                    alt=""
                  />
              </div>
              <div className="w-full">
              <h2 className="text-secondary-black text-[18px] font-notosans font-[600] leading-[28px]">Fitur E-Commerce Lengkap</h2>
              <p className="text-secondary-grey-500 text-[16px] font-notosans font-[400] leading-[24px] mt-[16px]">Secara efektif mendukung kegiatan marketing dengan  beragam fitur bawaan yang mampu diintegrasikan.</p>
              </div>
          </div>
        </div>
      </div>
      <div className="grid-cols-3 gap-[24px] mb-[28px] hidden lg:grid">
        <div className="bg-gray-200 p-4 invisible"></div>
        <div className="bg-secondary-grey-100 p-[24px] rounded-[16px]  ">
          <div className="flex gap-[20px]">
              <div className="">
              <Image
                    className=""
                    width={65}
                    height={64}
                    src="/integration.svg"
                    alt=""
                  />
              </div>
              <div className="w-full">
              <h2 className="text-secondary-black text-[18px] font-notosans font-[600] leading-[28px]">Fitur E-Commerce Lengkap</h2>
              <p className="text-secondary-grey-500 text-[16px] font-notosans font-[400] leading-[24px] mt-[16px]">Secara efektif mendukung kegiatan marketing dengan  beragam fitur bawaan yang mampu diintegrasikan.</p>
              </div>
          </div>
        </div>
        <div className="bg-secondary-grey-100 p-[24px] rounded-[16px]  ">
          <div className="flex gap-[20px]">
              <div className="">
              <Image
                    className=""
                    width={65}
                    height={64}
                    src="/integration.svg"
                    alt=""
                  />
              </div>
              <div className="w-full">
              <h2 className="text-secondary-black text-[18px] font-notosans font-[600] leading-[28px]">Fitur E-Commerce Lengkap</h2>
              <p className="text-secondary-grey-500 text-[16px] font-notosans font-[400] leading-[24px] mt-[16px]">Secara efektif mendukung kegiatan marketing dengan  beragam fitur bawaan yang mampu diintegrasikan.</p>
              </div>
          </div>
        </div>
      </div>
      <div className="grid-cols-3 gap-[24px] hidden lg:grid">       
        <div className="bg-secondary-grey-100 p-[24px] rounded-[16px]  ">
          <div className="flex gap-[20px]">
              <div className="">
              <Image
                    className=""
                    width={65}
                    height={64}
                    src="/integration.svg"
                    alt=""
                  />
              </div>
              <div className="w-full">
              <h2 className="text-secondary-black text-[18px] font-notosans font-[600] leading-[28px]">Fitur E-Commerce Lengkap</h2>
              <p className="text-secondary-grey-500 text-[16px] font-notosans font-[400] leading-[24px] mt-[16px]">Secara efektif mendukung kegiatan marketing dengan  beragam fitur bawaan yang mampu diintegrasikan.</p>
              </div>
          </div>
        </div>
        <div className="bg-secondary-grey-100 p-[24px] rounded-[16px]  ">
          <div className="flex gap-[20px]">
              <div className="">
              <Image
                    className=""
                    width={65}
                    height={64}
                    src="/integration.svg"
                    alt=""
                  />
              </div>
              <div className="w-full">
              <h2 className="text-secondary-black text-[18px] font-notosans font-[600] leading-[28px]">Fitur E-Commerce Lengkap</h2>
              <p className="text-secondary-grey-500 text-[16px] font-notosans font-[400] leading-[24px] mt-[16px]">Secara efektif mendukung kegiatan marketing dengan  beragam fitur bawaan yang mampu diintegrasikan.</p>
              </div>
          </div>
        </div>
        <div className="bg-secondary-grey-100 p-[24px] rounded-[16px]  ">
          <div className="flex gap-[20px]">
              <div className="">
              <Image
                    className=""
                    width={65}
                    height={64}
                    src="/integration.svg"
                    alt=""
                  />
              </div>
              <div className="w-full">
              <h2 className="text-secondary-black text-[18px] font-notosans font-[600] leading-[28px]">Fitur E-Commerce Lengkap</h2>
              <p className="text-secondary-grey-500 text-[16px] font-notosans font-[400] leading-[24px] mt-[16px]">Secara efektif mendukung kegiatan marketing dengan  beragam fitur bawaan yang mampu diintegrasikan.</p>
              </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    </>
  );
}
