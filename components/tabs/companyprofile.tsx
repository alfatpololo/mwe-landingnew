import Image from "next/image";

export default function Companyprofile() {
    return (
<section id="companyProfile">
  <div className="bg-tabs-002">
    <div className="container mx-auto justify-center pt-[92px] lg:h-full lg:py-[120px] mt-[40px] lg:pt-[92px]">
      <div className="lg:grid lg:grid-cols-2 lg:gap-[24px] lg:mb-[28px]">
        
        {/* Teks berada di sebelah kiri pada desktop dan di bawah gambar pada mobile */}
        <div className="order-2 lg:order-1 w-full text-start lg:text-left pt-[40px] pb-[77px] lg:pt-0 lg:pb-0 lg:py-[80px]">
          <h2 className="text-secondary-white text-[24px] lg:text-[32px] font-notosans font-[600] leading-[40px] lg:leading-[52px]">
            Bangun Identitas Bisnismu Lebih Profesional dengan Website Andalan dari MakeWebEasy
          </h2>
          <p className="text-secondary-white text-[16px] lg:text-[18px] font-notosans font-[400] leading-[28px] lg:leading-[32px] mt-[16px]">
            Tingkatkan Branding dan Citra Perusahaan yang Apik dengan Website <br /> Intuitif dan Menarik!
          </p>
        </div>

        {/* Gambar berada di sebelah kanan pada desktop dan di atas teks pada mobile */}
        <div className="order-1 lg:order-2 w-full">
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

      </div>
    </div>
  </div>
</section>
    )
}
