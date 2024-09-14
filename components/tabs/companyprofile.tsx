import Image from "next/image";

export default function Companyprofile() {
    return (
<section id="companyProfile">
  <div className="bg-tabs-002">
    <div className="lg:container lg:mx-auto lg:justify-center lg:pt-[248px] w-full pt-[157px] pb-[77px] lg:pb-[168px]">
      <div className="lg:grid lg:grid-cols-2 lg:gap-[24px] lg:mb-[28px]">
        {/* Gambar akan tetap di atas pada mobile, dan di kanan pada desktop */}
        <div className="order-1 w-full lg:order-2">
          <div className="lg:flex lg:gap-[8px]">
            <div className="">
              <Image
                className=""
                width={444}
                height={288}
                src="/banner-company.svg"
                alt=""
              />
            </div>
            <div className="hidden lg:block">
              <Image
                className=""
                width={160}
                height={128}
                src="/file-company.svg"
                alt=""
              />
              <Image
                className="mt-[8px]"
                width={160}
                height={160}
                src="/img-company.svg"
                alt=""
              />
            </div>
          </div>
          <div className="gap-[8px] mt-[8px] hidden lg:flex">
            <div className="">
              <Image
                className=""
                width={196}
                height={120}
                src="/val-company.svg"
                alt=""
              />
            </div>
            <div className="">
              <Image
                className=""
                width={408}
                height={120}
                src="/tool-company.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* Teks akan berada di bawah pada mobile, dan di kiri pada desktop */}
        <div className="order-2 lg:order-1 w-full text-start lg:text-left pt-[40px] pb-[77px] lg:pt-0 lg:pb-0 lg:py-[80px]">
          <h2 className="text-secondary-white text-[24px] lg:text-[32px] font-notosans font-[600] leading-[40px] lg:leading-[52px]">
            Bangun Identitas Bisnismu Lebih Profesional dengan Website Andalan dari MakeWebEasy
          </h2>
          <p className="text-secondary-white text-[16px] lg:text-[18px] font-notosans font-[400] leading-[28px] lg:leading-[32px] mt-[16px]">
            Tingkatkan Branding dan Citra Perusahaan yang Apik dengan Website <br /> Intuitif dan Menarik!
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}
