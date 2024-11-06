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

export default function HeroSection() {
  return (
    <>
      <section
        id="hero"
        className="lg:bg-bg-hero relative lg:w-full lg:py-auto lg:justify-center lg:flex lg:flex-col bg-no-repeat lg:bg-cover bg-cover bg-bg-hero-mobile"
        style={{
          backgroundPosition: 'center bottom',
          backgroundSize: 'cover',
          minHeight: '100vh', // Ensures the hero section takes up the full viewport height
        }}
      >
        <div className="lg:justify-center">
          <div className="lg:grid lg:grid-cols-2 lg:gap-[24px] lg:container lg:mx-auto">

            {/* Mobile Version */}


            {/* Text Content */}
            <div className="lg:w-full lg:pt-[180px] pt-[350px] pb-[47px] px-[24px] lg:px-0 lg:mt-0 lg:pb-[50px] xl:pb-[30px]"> {/* Adjust bottom padding for different breakpoints */}
              <h2 className="lg:text-secondary-white lg:text-[48px] font-notosans font-[600] lg:leading-[64px] text-secondary-black text-[26px] leading-[38px]">
                Jasa Pembuatan <br /> Website E-Commerce <br /> Lengkap dan Company <br /> Profile Profesional
              </h2>
              <p className="lg:text-secondary-white lg:text-[18px] font-notosans font-[400] lg:leading-[32px] mt-[32px] text-secondary-black text-[16px] leading-[24px]">
                Tingkatkan Penjualan Toko Online Dengan
                <br /> <span className="font-[700]">Platform Terintegrasi dari MakeWebEasy.</span>
              </p>
              <p className="lg:text-secondary-white lg:text-[18px] font-notosans font-[400] lg:leading-[32px] mt-[16px] text-secondary-black text-[16px] leading-[24px]">
                Tingkatkan Juga Branding Perusahaan yang Lebih <br />
                Profesional dengan
                <span className="font-[700]"> Ratusan Template Keren dan <br />
                Menarik dari MakeWebEasy.</span>
              </p>
            </div>

            {/* Desktop Version */}
            

          </div>
          <div className="relative">
            <div className="w-full hidden lg:block lg:absolute lg:top-[-600px] lg:left-0">
                <div className="float-end">
                  <div>
                    <Image
                      className=""
                      width={837}
                      height={554}
                      src="/Image Banner.svg"
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

