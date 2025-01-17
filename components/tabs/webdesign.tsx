import Image from "next/image";

export default function Webdesign() {
  return (
<section id="WebDesign" className="lg:h-full flex items-center justify-center">
            <div className="bg-tabs-004 lg:h-full h-[95vh] flex flex-col justify-center w-full">
                <div  className="container mx-auto flex flex-col items-center p-[24px] lg:pb-0 lg:pt-0">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-[24px] lg:mb-[0]">
        <div className="order-2 lg:order-2 w-full text-start lg:text-left pt-[40px] pb-[40px] lg:pt-0 lg:pb-[0] lg:pt-[80px]"> 
              <h2 className="text-secondary-white text-[24px] lg:text-[32px] font-notosans font-[600] leading-[40px] lg:leading-[52px]">
                Tingkatkan Branding Perusahaan dengan Desain Keren dan Menarik Sesuai Keinginan Kamu!
              </h2>
              <p className="text-secondary-white text-[16px] lg:text-[18px] font-notosans font-[400] leading-[28px] lg:leading-[32px] mt-[16px]">
                Tampilan Website Keren dan Profesional dengan Berbagai Fitur <br />
                yang Mudah Digunakan
              </p>
            </div>
            <div className="order-1 lg:order-2 w-full">
              <div className="lg:flex flex-col lg:flex-row gap-[8px] hidden">
                <div>
                  <Image
                    width={160}
                    height={148}
                    src="/tools-webdesign.svg"
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    width={444}
                    height={148}
                    src="/ui ux.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-[8px] mt-[8px]">
                <div>
                  <Image
                    width={444}
                    height={260}
                    src="/banner-webdesign.svg"
                    alt=""
                  />
                </div>
                <div className="lg:flex flex-col gap-[8px] hidden">
                  <Image
                    width={160}
                    height={140}
                    src="/icon.svg"
                    alt=""
                  />
                  <Image
                    width={160}
                    height={112}
                    src="/responsive.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
