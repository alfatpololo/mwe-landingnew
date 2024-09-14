import Image from "next/image";

export default function Customwebsite() {
    return (
        <section id="customWebsite">
            <div className="bg-tabs-003">
                <div className="container mx-auto justify-center py-[64px] lg:py-[248px] mt-[192px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[56px] mb-[28px]">

                        {/* Images Section */}
                        <div className="">
          <div className="flex gap-[8px]">
              <div className="">
              <Image
                    className="hidden lg:flex"
                    width={160}
                    height={160}
                    src="/icon-coding.svg"
                    alt=""
                  />
              <Image
                    className="mt-[8px] hidden lg:flex"
                    width={160}
                    height={80}
                    src="/list-domain.svg"
                    alt=""
                  />
              </div>
              <div className="">
              <Image
                    className="hidden lg:flex"
                    width={444}
                    height={416}
                    src="/banner-coding.svg"
                    alt=""
                  />
              <Image
                    className="lg:hidden flex"
                    width={327}
                    height={182}
                    src="/banner-coding-mobile.svg"
                    alt=""
                  />
              </div>
          </div>
          <div className="flex gap-[8px] mt-[8px]">
              <div className="hidden lg:flex">
              <Image
                    className="mt-[-170px]"
                    width={320}
                    height={160}
                    src="/teknologi.svg"
                    alt=""
                  />
              </div>
          </div>
        </div>

                        {/* Text Section */}
                        <div className="order-2 lg:order-2 w-full text-start lg:text-left pt-[40px] pb-[77px] lg:pt-0 lg:pb-0 lg:py-[80px]">
                            <h2 className="text-secondary-white text-[24px] lg:text-[32px] font-notosans font-[600] leading-[40px] lg:leading-[52px]">
                                Jadikan Customer Experience Semakin Berkesan dengan Kustomisasi Sesuai Keinginan
                            </h2>
                            <p className="text-secondary-white text-[16px] lg:text-[18px] font-notosans font-[400] leading-[28px] lg:leading-[32px] mt-[16px]">
                                Buat Kustomisasi Desain dan Fitur Website Apapun Sesuai Keinginan <br /> Tanpa Batasan.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
