import Image from "next/image";


export default function Footer() {
    return (
        <footer className="bg-secondary-dark-blue">
        <div className="container mx-auto pt-[72px] lg:pb-[56px] pb-[32px]">
          <div className="lg:grid lg:grid-cols-3 lg:gap-[32px] lg:px-0 px-[24px]">
            <div>
            <Image
                    className="mb-[24px]"
                    width={210}
                    height={48}
                    src="/Style=Light.svg"
                    alt=""
                  />
              <h4 className="text-white text-[32px] font-notosans font-[600] leading-[56px]">Boost Your Business Now!</h4>
              <p className="text-white font-[400] mt-[180px] hidden lg:block">
              © Copyright MakeWebEasy. All rights reserved.
              </p>
            </div>
            <div>
              <h4 className="text-white text-[20px] font-notosans font-[500] mt-[32px] lg:mt-0">Indonesia</h4>
              <p className="text-white font-[400] mt-[16px]">
              GoWork, Central Park, Letjen S.Parman <br />
              Level LG, Unit L109-114, Kec. Grogol <br />
               Petamburan, Kota Jakarta Barat <br />
              Ibu Kota Jakarta 11470
              </p>
              <ul className="text-secondary-white font-notosans mt-[32px] space-y-[15px]">
                <li className="flex gap-[8px]"> <span><Image
                    className=""
                    width={22}
                    height={22}
                    src="/instagram.svg"
                    alt=""
                  /></span>makewebeasy_id</li>
              </ul>
              <ul className="text-secondary-white font-notosans mt-[32px] space-y-[15px]">
                <li className="flex gap-[8px]"> <span><Image
                    className=""
                    width={22}
                    height={22}
                    src="/tiktok.svg"
                    alt=""
                  /></span>makewebeasy.id</li>
              </ul>
              <ul className="text-secondary-white font-notosans mt-[32px] space-y-[15px]">
                <li className="flex gap-[8px]"> <span><Image
                    className=""
                    width={22}
                    height={22}
                    src="/youtube.svg"
                    alt=""
                  /></span>MakeWebEasy ID</li>
              </ul>
              <ul className="text-secondary-white font-notosans mt-[32px] space-y-[15px]">
                <li className="flex gap-[8px]"> <span><Image
                    className=""
                    width={22}
                    height={22}
                    src="/fb.svg"
                    alt=""
                  /></span>MakeWebEasy Indonesia </li>
              </ul>
            </div>
            <div>
            <h4 className="text-white text-[20px] font-notosans font-[500] mt-[32px] lg:mt-0">Thailand</h4>
              <p className="text-white font-[400] mt-[16px]">
              128 / 323 30th FI. Phayathai Plaza, <br />
              Thung Phayathai, Ratchathewi, Bangkok<br />
              Thailand 10400 <br />
              </p>
              <ul className="text-secondary-white font-notosans mt-[32px] space-y-[15px]">
                <li className="flex gap-[8px]"> <span><Image
                    className=""
                    width={22}
                    height={22}
                    src="/fb.svg"
                    alt=""
                  /></span>MakeWebEasy</li>
              </ul>
              <ul className="text-secondary-white font-notosans mt-[32px] space-y-[15px]">
                <li className="flex gap-[8px]"> <span><Image
                    className=""
                    width={22}
                    height={22}
                    src="/instagram.svg"
                    alt=""
                  /></span>makewebeasy</li>
              </ul>
              <ul className="text-secondary-white font-notosans mt-[32px] space-y-[15px]">
                <li className="flex gap-[8px]"> <span><Image
                    className=""
                    width={22}
                    height={22}
                    src="/youtube.svg"
                    alt=""
                  /></span>MakeWebEasy</li>
              </ul>
              <p className="text-white font-[400] mt-[32px] lg:hidden block">
              © Copyright MakeWebEasy. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
      
    );
  }
  