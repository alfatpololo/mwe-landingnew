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

export default function Home() {
  const [selectedCompanySize, setSelectedCompanySize] = useState<string | null>(
    null
  );

  const companySizes = [
    "1-10 Employees",
    "11-50 Employees",
    "51-200 Employees",
    "201-500 Employees",
    "501-1000 Employees",
    "1001+ Employees",
  ];

  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const services = ["Website E-Commerce", "Web Design", "Website Company Profile", "Website Custom"];
  return (
    <>
    <Navbar />

    <section id="hero" className="lg:bg-bg-hero lg:w-full bg-no-repeat lg:bg-cover bg-contain bg-bg-hero-mobile">
  <div className="lg:container lg:mx-auto lg:justify-center lg:py-[248px] pt-[78px] relative overflow-hidden">
    <div className="lg:grid lg:grid-cols-2 lg:gap-[24px] lg:mb-[28px] mt-[40px]">

      {/* Mobile Version - Locking size to match iPhone 12 dimensions */}
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
      <div className="lg:w-full lg:pt-0 pt-[350px] pb-[47px] px-[24px] lg:mt-0">
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



    <section id="sectionone">
      <div className="lg:mt-[192px]">
      <Tabbutton />
      </div>
    </section>

    <section id="sectiontwo">
    <div className="container mx-auto justify-center px-[80] pt-[182px]">
      <div className="lg:grid lg:grid-cols-3 lg:gap-[24px] mb-[28px]">
        <div className="lg:w-[456px] px-[24px] lg:px-0">
            <h2 className="text-secondary-black text-[24px] lg:text-[32px] font-notosans font-[600] leading-[52px]">Dilengkapi Semua Fitur yang Dibutuhkan Pada Website</h2>
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

    <section id="sectionthree">
    <div className="container mx-auto justify-center px-[80] py-[182px]">
      <div className="grid grid-cols-1 gap-[24px] mb-[40px]">
        <div className="w-full">
            <h2 className="text-secondary-black text-center text-[32px] font-notosans font-[600] leading-[52px]">Kami Telah Membantu Transformasi Digital <br /> Melalui Website Untuk Banyak Perusahaan!</h2>
            </div>
      </div>
      <div className="grid grid-cols-3 gap-[24px] mb-[24px]">       
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
        <div className="bg-secondary-grey-100 border-[1px] border-secondary-grey-200 p-[24px] rounded-[16px]">
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
      </div>
      <div className="grid grid-cols-3 gap-[24px]">       
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

    {/* <section id="sectionthree">
    <div className="container mx-auto justify-center px-[80] py-[182px]">
      <div className="grid grid-cols-1 gap-[24px] mb-[40px]">
        <div className="w-full">
            <h2 className="text-secondary-black text-center text-[32px] font-notosans font-[600] leading-[52px]">Kisah Sukses Mereka Bersama Kami</h2>
            </div>
      </div>
      <div className="grid grid-cols-2 w-full gap-[32px] mb-[24px]">       
        <div className="">
        <div className="">
        <iframe className="rounded-[16px]" width="624" height="400" src="https://www.youtube.com/embed/6WeFmf41x2w" title="MakeWebEasy Indonesia Testimonial from Jeremy Rusli (Eaton Indonesia)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
</div>
        </div>
        <div className="">
        <div className="grid gap-[16px]">
        <div className="">
      <DropdownButton />
    </div>
    </div>
        </div>
      </div>
    </div>
    </section> */}

    {/* <section className="bg-bg-client bg-auto h-[800px] bg-no-repeat bg-left-bottom" id="sectionfour">
    <div className="container mx-auto justify-center px-[80] pt-[52px]">
      <div className="grid grid-cols-2 gap-[24px] mb-[28px]">
        <div className="w-[456px]">
            <h2 className="text-secondary-black text-[32px] font-notosans font-[600] leading-[52px]">Telah Dipercaya Oleh <br /> Lebih dari 5000+ Bisnis</h2>
        </div>
        <ScrollingImages />
      </div>
    </div>
    </section> */}

    {/* <section className="pt-[175px]" id="sectionfour">
    <div className="container mx-auto justify-center px-[80] pt-[52px]">
      <div className="flex mb-[56px]">
        <div className="w-full">
            <h2 className="text-secondary-black text-[32px] font-notosans font-[600] leading-[52px]">Hubungi MakeWebEasy Untuk Konsultasi Selengkapnya!</h2>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[32px]">
      <div className="flex flex-col">
      <h1 className="font-notosans text-[16px] font-[400] text-secondary-grey-500 mb-[16px]">Layanan</h1>
      <ServiceTagSelector
        options={services}
        selectedOptions={selectedServices}
        onChange={setSelectedServices}
      />
    </div>
    <div className="flex flex-col">
      <h1 className="font-notosans text-[16px] font-[400] text-secondary-grey-500 mb-[16px]">Ukuran perusahaan</h1>
      <CompanySizeSelector
        options={companySizes}
        selectedOption={selectedCompanySize}
        onChange={setSelectedCompanySize}
      />
    </div>
      </div>
      <ContactForm />
    </div>
    </section> */}

    {/* <Footer /> */}

    </>
  );
}
