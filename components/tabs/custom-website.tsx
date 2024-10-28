import Image from "next/image";

export default function Customwebsite() {
    return (
        <section id="customWebsite" className="lg:h-full flex items-center justify-center">
            <div className="bg-tabs-003 lg:h-full h-[95vh] flex flex-col justify-center w-full">
            <div  className="container mx-auto flex flex-col items-center p-[24px] lg:pb-0 lg:pt-0"> {/* Adjusted pb to reduce space at the bottom */}
                    <div className="lg:grid lg:grid-cols-2 lg:gap-[24px] lg:mb-[0]">
                        <div className="w-full">
                            <div className="lg:flex lg:gap-[8px]">
                                <div>
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
                                <div>
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
                        <div className="order-2 lg:order-2 w-full text-start lg:text-left pt-[40px] pb-[40px] lg:pt-0 lg:pb-[0] lg:pt-[80px]"> {/* Adjusted pb to reduce space */}
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
