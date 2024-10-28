import Image from "next/image";

export default function Copywriting() {
    return (
        <section id="Copywriting" className="lg:h-full flex items-center justify-center">
            <div className="bg-tabs-005 lg:h-full h-[95vh] flex flex-col justify-center w-full">
                <div  className="container mx-auto flex flex-col items-center p-[24px] lg:pb-0 lg:pt-0"> {/* Adjusted pb to reduce space at the bottom */}
                    <div className="lg:grid lg:grid-cols-2 lg:gap-[24px] lg:mb-[0]">
                        <div className="w-full">
                            <div className="lg:flex lg:gap-[8px]">
                                <div className="">
                                    <Image
                                        className="hidden lg:flex"
                                        width={444}
                                        height={288}
                                        src="/banner-copywriting.svg"
                                        alt=""
                                    />
                                </div>
                                <div className="flex flex-col gap-[8px]">
                                    <Image
                                        className="hidden lg:block"
                                        width={160}
                                        height={128}
                                        src="/file.svg"
                                        alt=""
                                    />
                                    <Image
                                        className="hidden lg:block"
                                        width={160}
                                        height={160}
                                        src="/img.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-[8px] mt-[8px]">
                                <div className="hidden lg:block">
                                    <Image
                                        className=""
                                        width={310}
                                        height={120}
                                        src="/val.svg"
                                        alt=""
                                    />
                                </div>
                                <div className="hidden lg:block">
                                    <Image
                                        className=""
                                        width={294}
                                        height={120}
                                        src="/tools.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Text Section */}
                        <div className="order-2 lg:order-2 w-full text-start lg:text-left pt-[40px] pb-[40px] lg:pt-0 lg:pb-[0] lg:pt-[80px]"> 
                            <h2 className="text-secondary-white text-[24px] lg:text-[32px] font-notosans font-[600] leading-[40px] lg:leading-[52px]">
                                Buat Website Lebih Hidup dan Menarik dengan Artikel dan Copywriting yang Berkualitas
                            </h2>
                            <p className="text-secondary-white text-[16px] lg:text-[18px] font-notosans font-[400] leading-[28px] lg:leading-[32px] mt-[40px]">
                                Jadikan Website Lebih Profesional dengan Penjadwalan Konten yang <br />
                                Baik & Terjadwal dengan Pilihan Artikel Berkualitas Sesuai Standar EEAT <br />
                                dan Bebas Plagiarisme!
                            </p>
                        </div>
                        
                        {/* Mobile Image Section */}
                        {/* <div className="flex-shrink-0 lg:hidden block">
                            <Image
                                className=""
                                width={444}
                                height={288}
                                src="/banner-copywriting.svg"
                                alt=""
                            />
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
