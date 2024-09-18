import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PortfolioSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="lg:hidden px-[32px]">
      <Slider {...settings}>
        {/* Add margin to the slide wrapper div to create spacing between slides */}
        <div className="px-[6px]"> {/* 6px on each side creates a total of 12px gap */}
          <div className="bg-secondary-grey-100 border-[1px] border-secondary-grey-200 p-[24px] rounded-[16px]">
            <div className="w-full">
              <Image
                className="w-full"
                width={239}
                height={188}
                src="/portfoliokebunraya.svg"
                alt=""
              />
              <div className="w-full flex gap-[12px] mt-[8px] justify-center">
                <Image
                  className=""
                  width={48}
                  height={48}
                  src="/iconkebunraya.svg"
                  alt=""
                />
                <div>
                  <h2 className="text-secondary-black text-[16px] font-notosans font-[500] leading-[28px]">
                    Kebun Raya Nusantara
                  </h2>
                  <p className="text-secondary-grey-500 text-[14px] font-notosans font-[400] leading-[24px] mt-[2px]">
                    Holding Perkebunan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-[6px]">
          <div className="bg-secondary-grey-100 border-[1px] border-secondary-grey-200 p-[24px] rounded-[16px]">
            <div className="w-full">
              <Image
                className="w-full"
                width={239}
                height={188}
                src="/portfoliokebunraya.svg"
                alt=""
              />
              <div className="w-full flex gap-[12px] mt-[8px] justify-center">
                <Image
                  className=""
                  width={48}
                  height={48}
                  src="/iconkebunraya.svg"
                  alt=""
                />
                <div>
                  <h2 className="text-secondary-black text-[16px] font-notosans font-[500] leading-[28px]">
                    Kebun Raya Nusantara
                  </h2>
                  <p className="text-secondary-grey-500 text-[14px] font-notosans font-[400] leading-[24px] mt-[2px]">
                    Holding Perkebunan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-[6px]">
          <div className="bg-secondary-grey-100 border-[1px] border-secondary-grey-200 p-[24px] rounded-[16px]">
            <div className="w-full">
              <Image
                className="w-full"
                width={239}
                height={188}
                src="/portfoliokebunraya.svg"
                alt=""
              />
              <div className="w-full flex gap-[12px] mt-[8px] justify-center">
                <Image
                  className=""
                  width={48}
                  height={48}
                  src="/iconkebunraya.svg"
                  alt=""
                />
                <div>
                  <h2 className="text-secondary-black text-[16px] font-notosans font-[500] leading-[28px]">
                    Kebun Raya Nusantara
                  </h2>
                  <p className="text-secondary-grey-500 text-[14px] font-notosans font-[400] leading-[24px] mt-[2px]">
                    Holding Perkebunan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
