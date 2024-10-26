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
        className="lg:bg-bg-hero lg:w-full lg:py-[100px] bg-no-repeat lg:bg-cover bg-cover bg-bg-hero-mobile"
        style={{
          backgroundPosition: 'center bottom',
          backgroundSize: 'cover',
          minHeight: '100vh', // Ensures the hero section takes up the full viewport height
        }}
      >
        <div className="lg:container lg:mx-auto lg:justify-center relative overflow-hidden max-w-[1440px]">
          <div className="lg:grid lg:grid-cols-2 lg:gap-[24px] mt-[40px]">

            {/* Mobile Version */}
            <div className="lg:hidden w-[390px] mx-auto relative">
              <div className="flex">
                <div className="absolute">
                  <Image
                    className="ms-[40px]"
                    width={91}
                    height={157}
                    src="/s-side-seo.svg"
                    alt=""
                  />
                  <Image
                    className="ms-[35px]"
                    width={76}
                    height={100}
                    src="/s-slide.svg"
                    alt=""
                  />
                </div>
                <div className="absolute right-[-130px] mt-[10px]">
                  <Image
                    className="ms-[20px]"
                    width={128}
                    height={26}
                    src="/s-button-design.svg"
                    alt=""
                  />
                  <Image
                    className="lg:ms-[20px]"
                    width={404}
                    height={189}
                    src="/s-dashboard.svg"
                    alt=""
                  />
                  <div className="flex absolute mt-[-50px]">
                    <Image
                      className="ms-[5px]"
                      width={217}
                      height={123}
                      src="/s-chart.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="lg:w-full lg:pt-0 pt-[350px] pb-[47px] px-[24px] lg:px-0 lg:mt-0 lg:pb-[50px] xl:pb-[30px]"> {/* Adjust bottom padding for different breakpoints */}
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
            <div className="w-full lg:ms-[-70px] hidden lg:block">
              <div className="flex gap-[8px]">
                <div>
                  <Image
                    className="lg:ms-[76px]"
                    width={143}
                    height={257}
                    src="/side-seo.svg"
                    alt=""
                  />
                  <Image
                    className="lg:ms-[60px] mt-[32px]"
                    width={128}
                    height={168}
                    src="/slide.svg"
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    className="lg:ms-[40px]"
                    width={239}
                    height={58}
                    src="/button-design.svg"
                    alt=""
                  />
                  <Image
                    className="lg:ms-[20px]"
                    width={701}
                    height={337}
                    src="/dashboard.svg"
                    alt=""
                  />
                  <div className="flex absolute mt-[-50px] ms-[12px]">
                    <Image
                      className="ms-[20px]"
                      width={358}
                      height={198}
                      src="/chart.svg"
                      alt=""
                    />
                    <Image
                      className="ms-[16px]"
                      width={136}
                      height={176}
                      src="/color.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

