import Image from "next/image";


export default function Ecommerce() {
    return (
        <section id="eCommerce">
      <div className="bg-tabs-001">
    <div className="lg:container lg:mx-auto lg:justify-center lg:pt-[248px] w-full pt-[157px] pb-[77px] lg:pb-[168px]">
      <div className="lg:grid lg:grid-cols-2 lg:gap-[24px] lg:mb-[28px]">
        <div className="w-full">
          <div className="lg:flex lg:gap-[8px]">
              <div className="">
              <Image
                    className=""
                    width={444}
                    height={252}
                    src="/banner.svg"
                    alt=""
                  />
              </div>
              <div className="hidden lg:block">
              <Image
                    className=""
                    width={160}
                    height={160}
                    src="/marketing.svg"
                    alt=""
                  />
              <Image
                    className="mt-[8px]"
                    width={160}
                    height={84}
                    src="/chart-tabs1.svg"
                    alt=""
                  />
              </div>
          </div>
          <div className="gap-[8px] mt-[8px] hidden lg:flex">
              <div className="">
              <Image
                    className=""
                    width={284}
                    height={156}
                    src="/payment-tabs1.svg"
                    alt=""
                  />
              </div>
              <div className="">
              <Image
                    className=""
                    width={320}
                    height={156}
                    src="/shipping-tabs1.svg"
                    alt=""
                  />
              </div>
          </div>
        </div>
        <div className="order-2 lg:order-2 w-full text-start lg:text-left pt-[40px] pb-[77px] lg:pt-0 lg:pb-0 lg:py-[80px]">
            <h2 className="text-secondary-white text-[24px] lg:text-[32px] font-notosans font-[600] leading-[40px] lg:leading-[52px]">Buat Website E-Commerce Siap Jualan dengan Berbagai Fitur Terintegrasi</h2>
            <p className="text-secondary-white text-[16px] lg:text-[18px] font-notosans font-[400] leading-[28px] lg:leading-[32px] mt-[16px]">Tingkatkan Penjualan Toko Online Kamu dengan <span className="font-[700]">Platform Terintegrasi dari MakeWebEasy.</span> <span className="block mt-[16px]"> Nikmati 100% Keuntungan Tanpa Ada Potongan Komisi Tambahan. Siap <br /> Jualan Makin Cuan? Yuk, Cobain MakeWebEasy Sekarang!  </span></p>
        </div>
      </div>
    </div>
      </div>
    </section>
    )
}