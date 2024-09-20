import Image from "next/image";

export default function Copywriting() {
    return (
        <section id="copyWriting">
            <div className="bg-tabs-005">
                <div className="container mx-auto justify-center pt-[92px] lg:h-full lg:py-[120px] mt-[40px] lg:pt-[92px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] mb-[28px]">
                        <div className="order-2 lg:order-1 flex flex-col gap-[8px]">
                            <div className="flex flex-col lg:flex-row gap-[8px]">
                                <div className="flex-shrink-0">
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
                        <div className="w-full py-[60px] lg:py-0 lg:pl-[24px] order-1 lg:order-2">
                            <h2 className="text-secondary-white text-[24px] lg:text-[32px] font-notosans font-[600] leading-[40px] lg:leading-[52px]">
                                Buat Website Lebih Hidup dan Menarik dengan Artikel dan Copywriting yang Berkualitas
                            </h2>
                            <p className="text-secondary-white text-[16px] lg:text-[18px] font-notosans font-[400] leading-[28px] lg:leading-[32px] mt-[40px]">
                                Jadikan Website Lebih Profesional dengan Penjadwalan Konten yang <br />
                                Baik & Terjadwal dengan Pilihan Artikel Berkualitas Sesuai Standar EEAT <br />
                                dan Bebas Plagiarisme!
                            </p>
                        </div>
                        <div className="flex-shrink-0 lg:hidden block`">
                                    <Image
                                        className=""
                                        width={444}
                                        height={288}
                                        src="/banner-copywriting.svg"
                                        alt=""
                                    />
                                </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
