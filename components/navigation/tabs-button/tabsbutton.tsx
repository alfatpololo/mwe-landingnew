import { useState } from "react";
import Ecommerce from "@/components/tabs/ecommerce";
import Companyprofile from "@/components/tabs/companyprofile";
import Customwebsite from "@/components/tabs/custom-website";
import Webdesign from "@/components/tabs/webdesign";
import Copywriting from "@/components/tabs/copywriting";

type TabName = "Ecommerce" | "Company Profile" | "Custom Website" | "Web Design" | "Copywriting";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState<TabName>("Ecommerce");

  const renderComponent = () => {
    switch (activeTab) {
      case "Ecommerce":
        return <Ecommerce />;
      case "Company Profile":
        return <Companyprofile />;
      case "Custom Website":
        return <Customwebsite />;
      case "Web Design":
        return <Webdesign />;
      case "Copywriting":
        return <Copywriting />;
      default:
        return <Ecommerce />;
    }
  };

  const getTabClass = (tabName: TabName) => {
    const baseClasses = "lg:py-[24px] py-[12px] px-[] lg:px-[16px] lg:flex-1 lg:text-center lg:text-[18px] lg:font-[400] w-full lg:font-notosans";

    const tabClasses = {
      "Ecommerce": activeTab === "Ecommerce"
        ? "rounded-br-[8px] lg:rounded-br-[50px] rounded-bl-[0px]"
        : activeTab === "Copywriting"
        ? "rounded-tr-none"
        : activeTab === "Custom Website"
        ? "rounded-tr-none"
        : activeTab === "Web Design"
        ? "rounded-tr-none"
        : "rounded-tl-[0px] rounded-tr-[8px] lg:rounded-tr-[50px]",
      
      "Company Profile": activeTab === "Company Profile"
        ? "rounded-br-[8px] lg:rounded-br-[50px] rounded-bl-[8px] lg:rounded-bl-[50px]"
        : activeTab === "Copywriting"
        ? "rounded-tr-none"
        : activeTab === "Web Design"
        ? "rounded-tr-none"
        : activeTab === "Ecommerce"
        ? "rounded-tl-[8px] lg:rounded-tl-[50px] rounded-bl-none"
        : "rounded-tr-[8px] lg:rounded-tr-[50px]",
      
      "Custom Website": activeTab === "Custom Website"
        ? "rounded-br-[8px] lg:rounded-br-[50px] rounded-bl-[8px] lg:rounded-bl-[50px]"
        : activeTab === "Copywriting"
        ? "rounded-tr-none"
        : activeTab === "Ecommerce"
        ? "rounded-tl-[0px]"
        : activeTab === "Company Profile"
        ? "rounded-tl-[8px] lg:rounded-tl-[50px] rounded-bl-none"
        : "rounded-tr-[8px] lg:rounded-tr-[50px]",
      
      "Web Design": activeTab === "Web Design"
        ? "rounded-br-[8px] lg:rounded-br-[50px] rounded-bl-[8px] lg:rounded-bl-[50px]"
        : activeTab === "Company Profile"
        ? "rounded-tl-[0px]"
        : activeTab === "Ecommerce"
        ? "rounded-tl-[0px]"
        : activeTab === "Custom Website"
        ? "rounded-tl-[8px] lg:rounded-tl-[50px] rounded-bl-none"
        : "rounded-tr-[8px] lg:rounded-tr-[50px]",
      
      "Copywriting": activeTab === "Copywriting"
        ? "rounded-bl-[8px] lg:rounded-bl-[50px]"
        : activeTab === "Company Profile"
        ? "rounded-tl-[0px]"
        : activeTab === "Ecommerce"
        ? "rounded-tl-[0px]"
        : activeTab === "Custom Website"
        ? "rounded-tr-none"
        : activeTab === "Web Design"
        ? "rounded-tr-none lg:rounded-tr-none rounded-tl-[8px] lg:rounded-tl-[50px]"
        : "rounded-tr-[8px] lg:rounded-tr-[50px]"
    };
    

    return `${baseClasses} ${tabClasses[tabName]} ${activeTab === tabName ? getBackgroundClass() : 'bg-white pb-[20px] text-secondary-grey-500'}`;
  };

  const getIconClass = (tabName: TabName) =>
    activeTab === tabName ? "text-white" : "text-secondary-grey-500";

  const getTextClass = (tabName: TabName) =>
    activeTab === tabName ? "text-white" : "text-secondary-grey-500";

  const getBackgroundClass = () => {
    switch (activeTab) {
      case "Ecommerce":
        return "bg-tabs-001";
      case "Company Profile":
        return "bg-tabs-002";
      case "Custom Website":
        return "bg-tabs-003";
      case "Web Design":
        return "bg-tabs-004";
      case "Copywriting":
        return "bg-tabs-005";
      default:
        return "bg-tabs-001";
    }
  };

  return (
    <div className="lg:relative">
      <div className={`p-4 ${getBackgroundClass()}`}>{renderComponent()}</div>
      <div className="flex lg:space-x-0 lg:justify-center mt-[-70px] bottom-0 w-full">
        <button
          className={`${getTabClass("Ecommerce")} ${getTextClass("Ecommerce")}`}
          onClick={() => setActiveTab("Ecommerce")}
        >
          <span className="flex flex-wrap justify-center">
            <svg
              className={`mb-[8px] h-[40px] w-[40px] ${getIconClass("Ecommerce")}`}
              viewBox="0 0 40 40"
              fill="currentColor"
            >
              <path d="M35.0627 13.8151H30.3752V11.862H32.5562C33.1127 11.862 33.5653 11.4093 33.5653 10.8528V4.34243C33.5653 3.78598 33.1127 3.33331 32.5562 3.33331H11.5009C10.8553 3.3533 10.8558 4.29008 11.5009 4.30988H32.5562C32.5742 4.30988 32.5888 4.32446 32.5888 4.34243V10.8528C32.5888 10.8708 32.5742 10.8854 32.5562 10.8854H8.07706C8.05909 10.8854 8.04451 10.8708 8.04451 10.8528V4.34243C8.04451 4.32446 8.05909 4.30988 8.07706 4.30988H9.24393C9.8895 4.28989 9.88904 3.3531 9.24393 3.33331H8.07706C7.52062 3.33331 7.06795 3.78598 7.06795 4.34243V10.8528C7.06795 11.4093 7.52062 11.862 8.07706 11.862H10.2581V13.8151H5.57055C4.51157 13.8151 3.64998 14.6767 3.64998 15.7357V20.8463C3.63741 22.5168 5.15337 23.8489 6.80753 23.6221V33.737H5.11482C3.17368 33.8108 3.17518 36.5935 5.11482 36.6666H35.5185C37.4596 36.5928 37.4581 33.8101 35.5185 33.737H33.8258V32.7955C33.8058 32.1499 32.869 32.1504 32.8492 32.7955V33.737H30.831V25.5664C30.831 25.2967 30.6124 25.0781 30.3427 25.0781H20.7724C20.5027 25.0781 20.2841 25.2967 20.2841 25.5664V33.737H18.5914V25.5664C18.5914 25.2967 18.3728 25.0781 18.1031 25.0781H10.551C10.2814 25.0781 10.0627 25.2967 10.0627 25.5664V33.737H7.78409V23.3067C8.17531 23.0936 8.51014 22.7898 8.76066 22.4239C9.83475 24.0424 12.3096 24.0417 13.3831 22.4239C14.4571 24.0424 16.932 24.0417 18.0055 22.4239C19.0795 24.0424 21.5544 24.0417 22.6278 22.4239C23.7019 24.0424 26.1768 24.0417 27.2502 22.4239C28.3243 24.0424 30.7992 24.0417 31.8726 22.4239C32.1232 22.7898 32.458 23.0936 32.8492 23.3067V30.4918C32.8692 31.1374 33.806 31.1369 33.8258 30.4918V23.6221C35.4801 23.8489 36.9958 22.5168 36.9833 20.8463V15.7357C36.9833 14.6767 36.1217 13.8151 35.0627 13.8151ZM29.8544 33.737H27.7385V26.0547H29.8544V33.737ZM26.762 26.0547V33.737H24.3531V26.0547H26.762ZM21.2607 26.0547H23.3765V33.737H21.2607V26.0547ZM11.0393 26.0547H17.6148V33.737H11.0393V26.0547ZM35.5185 34.7135C36.1639 34.7341 36.1635 35.6697 35.5185 35.6901H5.11482C4.46938 35.6695 4.46984 34.7339 5.11482 34.7135H35.5185ZM29.3987 11.862V13.8151H28.4221V11.862H29.3987ZM13.1877 13.8151V11.862H27.4456V13.8151H13.1877ZM11.2346 11.862H12.2112V13.8151H11.2346V11.862ZM4.62654 15.7357C4.62654 15.2152 5.05005 14.7916 5.57055 14.7916H35.0627C35.5833 14.7916 36.0068 15.2152 36.0068 15.7357V17.3307H4.62654V15.7357ZM6.44946 22.6693C5.44432 22.6693 4.62654 21.8515 4.62654 20.8463V18.3073H8.27238V20.8463C8.27238 21.8515 7.45467 22.6693 6.44946 22.6693ZM11.0719 22.6693C10.0667 22.6693 9.24894 21.8515 9.24894 20.8463V18.3073H12.8948V20.8463C12.8948 21.8515 12.0771 22.6693 11.0719 22.6693ZM15.6943 22.6693C14.6891 22.6693 13.8713 21.8515 13.8713 20.8463V18.3073H17.5172V20.8463C17.5172 21.8515 16.6995 22.6693 15.6943 22.6693ZM20.3166 22.6693C19.3115 22.6693 18.4937 21.8515 18.4937 20.8463V18.3073H22.1396V20.8463C22.1396 21.8515 21.3219 22.6693 20.3166 22.6693ZM24.939 22.6693C23.9339 22.6693 23.1161 21.8515 23.1161 20.8463V18.3073H26.762V20.8463C26.762 21.8515 25.9443 22.6693 24.939 22.6693ZM29.5614 22.6693C28.5563 22.6693 27.7385 21.8515 27.7385 20.8463V18.3073H31.3844V20.8463C31.3844 21.8515 30.5666 22.6693 29.5614 22.6693ZM36.0068 20.8463C35.9148 23.262 32.452 23.2601 32.3609 20.8463V18.3073H36.0068V20.8463Z" />
              <path d="M16.4068 5.235C16.1372 5.235 15.9185 5.45362 15.9185 5.72329V9.472C15.9385 10.1176 16.8753 10.1171 16.8951 9.472V8.02167H18.5127V9.472C18.5327 10.1176 19.4695 10.1171 19.4893 9.472V5.72329C19.4693 5.07771 18.5325 5.07817 18.5127 5.72329V7.0451H16.8951V5.72329C16.8951 5.45362 16.6765 5.235 16.4068 5.235Z" />
              <path d="M13.4776 8.98372C13.1104 8.98372 12.7573 8.83593 12.5331 8.58847C12.352 8.38866 12.0432 8.37349 11.8433 8.55455C11.6435 8.7356 11.6283 9.0444 11.8094 9.24427C12.2218 9.69935 12.8298 9.96035 13.4776 9.96035C15.1283 9.95781 15.8705 7.86744 13.9721 7.16913C13.515 7.00051 13.0892 6.81691 12.9549 6.75819C12.8628 6.68241 12.866 6.57778 12.8723 6.53403C12.8812 6.4716 12.9269 6.31893 13.1566 6.24972C13.6743 6.0938 14.1562 6.47355 14.1702 6.48462C14.3765 6.65571 14.6827 6.62837 14.8555 6.42284C15.029 6.21639 15.0023 5.90838 14.7959 5.73488C14.7601 5.70486 13.909 5.0031 12.875 5.31463C12.35 5.47277 11.9786 5.88683 11.9056 6.39523C11.8371 6.87271 12.0441 7.33208 12.4459 7.594C12.4674 7.60806 12.4901 7.62037 12.5136 7.63085C12.5353 7.64055 13.0521 7.87063 13.6342 8.08528C13.7588 8.13124 14.1616 8.30227 14.1131 8.57362C14.0771 8.77525 13.8296 8.98372 13.4776 8.98372Z" />
              <path d="M24.9965 7.59764C24.9965 6.2949 23.9366 5.235 22.6338 5.235C19.5038 5.35382 19.5047 9.84199 22.6338 9.96028C23.9367 9.96028 24.9965 8.90038 24.9965 7.59764ZM21.2478 7.59764C21.2478 6.83338 21.8696 6.21157 22.6339 6.21157C24.4702 6.28123 24.4697 8.91431 22.6339 8.98372C21.8696 8.98372 21.2478 8.3619 21.2478 7.59764Z" />
              <path d="M25.8538 9.472C25.8738 10.1176 26.8106 10.1171 26.8304 9.472V8.32935C27.0344 8.32831 27.2544 8.3274 27.3835 8.3274C29.4596 8.24934 29.4587 5.31261 27.3835 5.235H26.3396C26.2098 5.235 26.0854 5.2867 25.9938 5.37862C25.9022 5.47055 25.851 5.59523 25.8514 5.72498L25.8558 7.04745C25.8547 7.06099 25.8538 7.07466 25.8538 7.08853V9.472H25.8538ZM27.3835 6.21157C28.1643 6.24822 28.1638 7.31437 27.3835 7.35083C27.2549 7.35083 27.0368 7.35174 26.8335 7.35279L26.8296 6.21163H27.3835V6.21157Z" />
            </svg>
          </span>
          <span className="lg:flex hidden justify-center">
          E-commerce
          </span>
        </button>
        <button
          className={`${getTabClass("Company Profile")} ${getTextClass("Company Profile")}`}
          onClick={() => setActiveTab("Company Profile")}
        >
          <span className="flex flex-wrap justify-center">
            <svg
              className={`mb-[8px] h-[40px] w-[40px] ${getIconClass("Company Profile")}`}
              viewBox="0 0 40 40"
              fill="currentColor"
            >
              <path d="M34.948 3.33331H5.68512C4.56286 3.33331 3.6499 4.24627 3.6499 5.36853V36.6666H28.6173C28.887 36.6666 29.1056 36.448 29.1056 36.1784C29.1056 35.9087 28.887 35.6901 28.6173 35.6901H14.4572V23.2769C14.4572 23.0928 14.308 22.9435 14.1239 22.9435H6.97803C6.79393 22.9435 6.64469 23.0928 6.64469 23.2769V35.6901H4.62646V8.2785H13.9689C14.2386 8.2785 14.4572 8.05988 14.4572 7.79021C14.4572 7.52054 14.2386 7.30193 13.9689 7.30193H4.62646V5.36853C4.62646 4.78475 5.10133 4.30988 5.68512 4.30988H34.9481C35.5317 4.30988 36.0067 4.78475 36.0067 5.36853V7.30193H15.922C15.6524 7.30193 15.4338 7.52054 15.4338 7.79021C15.4338 8.05988 15.6524 8.2785 15.922 8.2785H36.0067V35.6901H30.5705C30.3008 35.6901 30.0822 35.9087 30.0822 36.1784C30.0822 36.448 30.3008 36.6666 30.5705 36.6666H36.9832V5.36853C36.9832 4.24627 36.0703 3.33331 34.948 3.33331ZM13.1473 23.9201C13.3314 23.9201 13.4806 24.0693 13.4806 24.2534V24.555C13.4806 24.7391 13.3314 24.8883 13.1473 24.8883H7.95459C7.77049 24.8883 7.62126 24.7391 7.62126 24.555V24.2534C7.62126 24.0693 7.77049 23.9201 7.95459 23.9201H13.1473ZM7.62126 26.1982C7.62126 26.0141 7.77049 25.8649 7.95459 25.8649H13.1473C13.3314 25.8649 13.4806 26.0141 13.4806 26.1982V35.6901H7.62126V26.1982Z" />
              <path d="M5.66813 5.83718C5.66813 5.56751 5.88674 5.3489 6.15641 5.3489C6.42608 5.3489 6.64469 5.56751 6.64469 5.83718C6.64469 6.10685 6.42608 6.32546 6.15641 6.32546C5.88674 6.32546 5.66813 6.10685 5.66813 5.83718Z" />
              <path d="M7.62126 5.83718C7.62126 5.56751 7.83987 5.3489 8.10954 5.3489C8.37921 5.3489 8.59782 5.56751 8.59782 5.83718C8.59782 6.10685 8.37921 6.32546 8.10954 6.32546C7.83987 6.32546 7.62126 6.10685 7.62126 5.83718Z" />
              <path d="M9.57418 5.83718C9.57418 5.56751 9.79279 5.3489 10.0625 5.3489C10.3321 5.3489 10.5507 5.56751 10.5507 5.83718C10.5507 6.10685 10.3321 6.32546 10.0625 6.32546C9.79279 6.32546 9.57418 6.10685 9.57418 5.83718Z" />
              <path d="M20.3166 23.4796C23.8167 23.4796 26.6642 20.6321 26.6642 17.1319C26.6642 13.6318 23.8167 10.7843 20.3166 10.7843C16.8164 10.7843 13.9689 13.6318 13.9689 17.1319C13.9689 20.6321 16.8164 23.4796 20.3166 23.4796ZM18.3343 22.1223C18.9091 21.7139 19.6032 21.4877 20.3166 21.4877C21.031 21.4877 21.7244 21.7137 22.2989 22.1222C21.6851 22.367 21.0166 22.503 20.3166 22.503C19.6166 22.503 18.9481 22.367 18.3343 22.1223ZM20.3166 11.7608C23.2782 11.7608 25.6877 14.1703 25.6877 17.1319C25.6877 19.0134 24.7144 20.6709 23.2457 21.6305C22.4442 20.9148 21.3993 20.5111 20.3166 20.5111C19.2355 20.5111 18.1893 20.9155 17.3879 21.6308C15.9189 20.6713 14.9455 19.0136 14.9455 17.1319C14.9455 14.1703 17.3549 11.7608 20.3166 11.7608Z" />
              <path d="M20.3139 19.5289C21.6616 19.5289 22.758 18.4325 22.758 17.0848V13.2055H19.8533C18.7595 13.2055 17.8697 14.0954 17.8697 15.1892V17.0848C17.8697 18.4324 18.9661 19.5289 20.3139 19.5289ZM20.3139 18.5524C19.5046 18.5524 18.8463 17.894 18.8463 17.0848V16.1255H21.7815V17.0847C21.7815 17.894 21.1231 18.5524 20.3139 18.5524ZM19.8533 14.182H21.7815V15.149H18.8483C18.8695 14.6124 19.3115 14.182 19.8533 14.182Z" />
              <path d="M8.59782 28.302C8.59782 28.0323 8.81643 27.8137 9.0861 27.8137H12.0158C12.2855 27.8137 12.5041 28.0323 12.5041 28.302C12.5041 28.5717 12.2855 28.7903 12.0158 28.7903H9.0861C8.81643 28.7903 8.59782 28.5717 8.59782 28.302Z" />
              <path d="M8.59782 30.7387C8.59782 30.469 8.81643 30.2504 9.0861 30.2504H12.0158C12.2855 30.2504 12.5041 30.469 12.5041 30.7387C12.5041 31.0084 12.2855 31.227 12.0158 31.227H9.0861C8.81643 31.227 8.59782 31.0084 8.59782 30.7387Z" />
              <path d="M8.59782 33.1752C8.59782 32.9056 8.81643 32.687 9.0861 32.687H12.0158C12.2855 32.687 12.5041 32.9056 12.5041 33.1752C12.5041 33.4449 12.2855 33.6635 12.0158 33.6635H9.0861C8.81643 33.6635 8.59782 33.4449 8.59782 33.1752Z" />
              <path d="M25.2028 26.1939C25.2028 26.0098 25.0535 25.8606 24.8694 25.8606H15.783C15.5989 25.8606 15.4496 26.0098 15.4496 26.1939V28.4569C15.4496 28.641 15.5989 28.7903 15.783 28.7903H24.8694C25.0535 28.7903 25.2028 28.641 25.2028 28.4569V26.1939ZM24.2262 27.4804C24.2262 27.6645 24.077 27.8137 23.8929 27.8137H16.7595C16.5754 27.8137 16.4262 27.6645 16.4262 27.4804V27.1705C16.4262 26.9864 16.5754 26.8371 16.7595 26.8371H23.8929C24.077 26.8371 24.2262 26.9864 24.2262 27.1705V27.4804Z" />
              <path d="M15.4338 30.251C15.4338 29.9814 15.6524 29.7628 15.922 29.7628H17.8696C18.1393 29.7628 18.3579 29.9814 18.3579 30.251C18.3579 30.5207 18.1393 30.7393 17.8696 30.7393H15.922C15.6524 30.7393 15.4338 30.5207 15.4338 30.251Z" />
              <path d="M19.3455 30.251C19.3455 29.9814 19.5641 29.7628 19.8338 29.7628H33.9884V30.7393H19.8338C19.5641 30.7393 19.3455 30.5207 19.3455 30.251Z" />
              <path d="M15.4338 32.2042C15.4338 31.9345 15.6524 31.7159 15.922 31.7159H17.8696C18.1393 31.7159 18.3579 31.9345 18.3579 32.2042C18.3579 32.4738 18.1393 32.6924 17.8696 32.6924H15.922C15.6524 32.6924 15.4338 32.4738 15.4338 32.2042Z" />
              <path d="M19.3455 32.2042C19.3455 31.9345 19.5641 31.7159 19.8338 31.7159H33.9884V32.6924H19.8338C19.5641 32.6924 19.3455 32.4738 19.3455 32.2042Z" />
            </svg>
          </span>
          <span className="lg:flex hidden justify-center">
          Company Profile
          </span>
        </button>
        <button
          className={`${getTabClass("Custom Website")} ${getTextClass("Custom Website")}`}
          onClick={() => setActiveTab("Custom Website")}
        >
          <span className="flex flex-wrap justify-center">
            <svg
              className={`mb-[8px] h-[40px] w-[40px] ${getIconClass("Custom Website")}`}
              viewBox="0 0 40 40"
              fill="currentColor"
            >
              <path d="M36.5066 26.1166L34.4627 25.8244C34.3387 25.421 34.1765 25.0303 33.9782 24.6578L35.2171 23.0066C35.2973 22.8997 35.3363 22.7673 35.3268 22.6339C35.3173 22.5006 35.26 22.3751 35.1655 22.2805L33.5943 20.7066C33.4998 20.6121 33.3743 20.5548 33.2409 20.5453C33.1075 20.5358 32.9752 20.5748 32.8682 20.655L31.2171 21.8939C30.8446 21.6956 30.4539 21.5334 30.0505 21.4094L29.7582 19.3655C29.7392 19.2327 29.6727 19.1113 29.5711 19.0237C29.4695 18.9361 29.3396 18.8882 29.2055 18.8889H26.9832C26.8495 18.8888 26.7203 18.937 26.6193 19.0246C26.5183 19.1121 26.4522 19.2332 26.4332 19.3655L26.141 21.4094C25.7376 21.5334 25.3469 21.6956 24.9743 21.8939L23.3232 20.655C23.2162 20.5748 23.0839 20.5358 22.9505 20.5453C22.8172 20.5548 22.6917 20.6121 22.5971 20.7066L21.0232 22.2778C20.9287 22.3723 20.8714 22.4978 20.8619 22.6312C20.8524 22.7645 20.8914 22.8969 20.9716 23.0039L22.2105 24.655C22.0122 25.0275 21.85 25.4182 21.726 25.8216L19.6821 26.1139C19.5493 26.1329 19.4279 26.1994 19.3403 26.301C19.2527 26.4026 19.2048 26.5325 19.2055 26.6666V28.8889C19.2054 29.0226 19.2536 29.1518 19.3412 29.2528C19.4287 29.3538 19.5498 29.4199 19.6821 29.4389L21.726 29.7311C21.85 30.1345 22.0122 30.5252 22.2105 30.8978L20.9716 32.5489C20.8914 32.6558 20.8524 32.7882 20.8619 32.9216C20.8714 33.0549 20.9287 33.1804 21.0232 33.275L22.5943 34.8489C22.6889 34.9434 22.8144 35.0007 22.9478 35.0102C23.0811 35.0197 23.2135 34.9807 23.3205 34.9005L24.9716 33.6616C25.3441 33.8599 25.7348 34.0222 26.1382 34.1461L26.4305 36.19C26.4495 36.3228 26.516 36.4442 26.6176 36.5318C26.7192 36.6194 26.8491 36.6673 26.9832 36.6666H29.2055C29.3391 36.6667 29.4684 36.6185 29.5694 36.5309C29.6704 36.4434 29.7365 36.3223 29.7555 36.19L30.0477 34.1461C30.4511 34.0222 30.8418 33.8599 31.2143 33.6616L32.8655 34.9005C32.9724 34.9807 33.1048 35.0197 33.2382 35.0102C33.3715 35.0007 33.497 34.9434 33.5916 34.8489L35.1655 33.2778C35.26 33.1832 35.3173 33.0577 35.3268 32.9243C35.3363 32.791 35.2973 32.6586 35.2171 32.5516L33.9782 30.9005C34.1765 30.528 34.3387 30.1373 34.4627 29.7339L36.5066 29.4416C36.6394 29.4226 36.7608 29.3561 36.8484 29.2545C36.936 29.1529 36.9839 29.023 36.9832 28.8889V26.6666C36.9832 26.533 36.9351 26.4037 36.8475 26.3027C36.7599 26.2017 36.6389 26.1356 36.5066 26.1166ZM35.8721 28.4072L33.9455 28.6822C33.8356 28.6979 33.733 28.7461 33.6508 28.8207C33.5686 28.8953 33.5106 28.9927 33.4843 29.1005C33.3508 29.649 33.1336 30.1737 32.8405 30.6561C32.7831 30.751 32.7554 30.861 32.761 30.9718C32.7667 31.0826 32.8054 31.1891 32.8721 31.2778L34.0388 32.8333L33.1499 33.7222L31.5943 32.5555C31.5056 32.489 31.399 32.4505 31.2882 32.445C31.1774 32.4396 31.0675 32.4674 30.9727 32.525C30.4903 32.8182 29.9656 33.0353 29.4171 33.1689C29.3093 33.1952 29.2119 33.2531 29.1373 33.3353C29.0627 33.4175 29.0145 33.5201 28.9988 33.63L28.7238 35.5555H27.4649L27.1899 33.6289C27.1742 33.519 27.126 33.4164 27.0514 33.3342C26.9768 33.252 26.8794 33.194 26.7716 33.1677C26.2231 33.0342 25.6984 32.817 25.216 32.5239C25.1212 32.4663 25.0113 32.4385 24.9005 32.4439C24.7897 32.4494 24.6831 32.4878 24.5943 32.5544L23.0388 33.7211L22.1499 32.8322L23.3166 31.2766C23.3831 31.1879 23.4216 31.0813 23.4271 30.9705C23.4325 30.8597 23.4047 30.7498 23.3471 30.655C23.0539 30.1726 22.8368 29.6479 22.7032 29.0994C22.6769 28.9916 22.619 28.8942 22.5368 28.8196C22.4546 28.745 22.352 28.6968 22.2421 28.6811L20.3166 28.4072V27.1483L22.2432 26.8733C22.3531 26.8576 22.4557 26.8094 22.5379 26.7348C22.6201 26.6602 22.6781 26.5628 22.7043 26.455C22.8379 25.9065 23.0551 25.3818 23.3482 24.8994C23.4058 24.8046 23.4336 24.6947 23.4282 24.5839C23.4227 24.4731 23.3843 24.3665 23.3177 24.2778L22.151 22.7222L23.0399 21.8333L24.5955 23C24.6842 23.0666 24.7908 23.105 24.9016 23.1105C25.0124 23.1159 25.1223 23.0881 25.2171 23.0305C25.6995 22.7373 26.2242 22.5202 26.7727 22.3866C26.8805 22.3604 26.978 22.3024 27.0525 22.2202C27.1271 22.138 27.1753 22.0354 27.191 21.9255L27.4649 20H28.7238L28.9988 21.9266C29.0145 22.0365 29.0627 22.1391 29.1373 22.2213C29.2119 22.3035 29.3093 22.3615 29.4171 22.3878C29.9656 22.5213 30.4903 22.7385 30.9727 23.0316C31.0676 23.089 31.1776 23.1167 31.2884 23.1111C31.3992 23.1054 31.5057 23.0667 31.5943 23L33.1499 21.8333L34.0388 22.7222L32.8721 24.2778C32.8055 24.3665 32.7671 24.4731 32.7616 24.5839C32.7562 24.6947 32.784 24.8046 32.8416 24.8994C33.1348 25.3818 33.3519 25.9065 33.4855 26.455C33.5117 26.5628 33.5697 26.6602 33.6519 26.7348C33.7341 26.8094 33.8367 26.8576 33.9466 26.8733L35.8721 27.1483V28.4072Z"/>
              <path d="M28.0943 23.8889C27.3252 23.8889 26.5733 24.1169 25.9338 24.5443C25.2943 24.9716 24.7958 25.5789 24.5015 26.2895C24.2071 27.0001 24.1301 27.7821 24.2802 28.5364C24.4302 29.2908 24.8006 29.9837 25.3445 30.5276C25.8884 31.0715 26.5813 31.4419 27.3357 31.5919C28.09 31.742 28.872 31.665 29.5826 31.3706C30.2932 31.0763 30.9005 30.5778 31.3278 29.9383C31.7551 29.2988 31.9832 28.5469 31.9832 27.7778C31.9821 26.7467 31.572 25.7582 30.8429 25.0292C30.1138 24.3001 29.1254 23.89 28.0943 23.8889ZM28.0943 30.5555C27.545 30.5555 27.0079 30.3926 26.5511 30.0874C26.0943 29.7822 25.7383 29.3483 25.528 28.8408C25.3178 28.3332 25.2628 27.7747 25.3699 27.2358C25.4771 26.697 25.7417 26.202 26.1302 25.8136C26.5186 25.4251 27.0136 25.1605 27.5524 25.0533C28.0913 24.9462 28.6498 25.0012 29.1574 25.2114C29.6649 25.4217 30.0988 25.7777 30.404 26.2345C30.7092 26.6913 30.8721 27.2284 30.8721 27.7778C30.8712 28.5142 30.5783 29.2202 30.0576 29.741C29.5368 30.2617 28.8308 30.5546 28.0943 30.5555Z"/>
              <path d="M4.76101 29.4444V8.88887H31.4277V19.4444C31.4277 19.7512 31.6764 20 31.9832 20C32.2901 20 32.5388 19.7512 32.5388 19.4444V6.11109C32.5379 5.37465 32.245 4.66862 31.7242 4.14788C31.2035 3.62714 30.4974 3.3342 29.761 3.33331H6.42768C5.69124 3.3342 4.98521 3.62714 4.46447 4.14788C3.94373 4.66862 3.65078 5.37465 3.6499 6.11109V29.4444C3.65078 30.1809 3.94373 30.8869 4.46447 31.4076C4.98521 31.9284 5.69124 32.2213 6.42768 32.2222H19.761V31.1111H6.42768C5.98565 31.1111 5.56173 30.9355 5.24917 30.6229C4.93661 30.3104 4.76101 29.8864 4.76101 29.4444ZM6.42768 4.44442H29.761C30.203 4.44442 30.627 4.62002 30.9395 4.93258C31.2521 5.24514 31.4277 5.66906 31.4277 6.11109V7.77776H4.76101V6.11109C4.76101 5.66906 4.93661 5.24514 5.24917 4.93258C5.56173 4.62002 5.98565 4.44442 6.42768 4.44442Z"/>
              <path d="M6.98323 6.11109C6.98323 6.41791 7.23197 6.66665 7.53879 6.66665C7.84561 6.66665 8.09435 6.41791 8.09435 6.11109C8.09435 5.80427 7.84561 5.55553 7.53879 5.55553C7.23197 5.55553 6.98323 5.80427 6.98323 6.11109Z"/>
              <path d="M9.20546 6.11109C9.20546 6.41791 9.45419 6.66665 9.76101 6.66665C10.0678 6.66665 10.3166 6.41791 10.3166 6.11109C10.3166 5.80427 10.0678 5.55553 9.76101 5.55553C9.45419 5.55553 9.20546 5.80427 9.20546 6.11109Z"/>
              <path d="M11.4277 6.11109C11.4277 6.41791 11.6764 6.66665 11.9832 6.66665C12.2901 6.66665 12.5388 6.41791 12.5388 6.11109C12.5388 5.80427 12.2901 5.55553 11.9832 5.55553C11.6764 5.55553 11.4277 5.80427 11.4277 6.11109Z"/>
              <path d="M26.4277 5.55553H15.3166C15.0097 5.55553 14.761 5.80427 14.761 6.11109C14.761 6.41791 15.0097 6.66665 15.3166 6.66665H26.4277C26.7345 6.66665 26.9832 6.41791 26.9832 6.11109C26.9832 5.80427 26.7345 5.55553 26.4277 5.55553Z"/>
              <path d="M28.6499 17.7778C28.9567 17.7778 29.2055 17.529 29.2055 17.2222V12.2222C29.2055 11.9275 29.0884 11.6449 28.88 11.4365C28.6716 11.2282 28.389 11.1111 28.0943 11.1111H8.09435C7.79966 11.1111 7.51705 11.2282 7.30867 11.4365C7.1003 11.6449 6.98323 11.9275 6.98323 12.2222V22.2222C6.98323 22.5169 7.1003 22.7995 7.30867 23.0079C7.51705 23.2162 7.79966 23.3333 8.09435 23.3333H19.2055C19.5123 23.3333 19.761 23.0846 19.761 22.7778C19.761 22.4709 19.5123 22.2222 19.2055 22.2222H8.09435V12.2222H28.0943V17.2222C28.0943 17.529 28.3431 17.7778 28.6499 17.7778Z"/>
              <path d="M15.8721 25.5555H8.09435C7.78752 25.5555 7.53879 25.8043 7.53879 26.1111C7.53879 26.4179 7.78752 26.6666 8.09435 26.6666H15.8721C16.1789 26.6666 16.4277 26.4179 16.4277 26.1111C16.4277 25.8043 16.1789 25.5555 15.8721 25.5555Z"/>
              <path d="M15.8721 27.7778H8.09435C7.78752 27.7778 7.53879 28.0265 7.53879 28.3333C7.53879 28.6401 7.78752 28.8889 8.09435 28.8889H15.8721C16.1789 28.8889 16.4277 28.6401 16.4277 28.3333C16.4277 28.0265 16.1789 27.7778 15.8721 27.7778Z"/>
              <path d="M17.5388 17.2222C17.5388 17.529 17.7875 17.7778 18.0943 17.7778C18.4012 17.7778 18.6499 17.529 18.6499 17.2222C18.6499 16.9154 18.4012 16.6666 18.0943 16.6666C17.7875 16.6666 17.5388 16.9154 17.5388 17.2222Z"/>
              <path d="M21.4277 16.6666H20.3166C20.0097 16.6666 19.761 16.9154 19.761 17.2222C19.761 17.529 20.0097 17.7778 20.3166 17.7778H21.4277C21.7345 17.7778 21.9832 17.529 21.9832 17.2222C21.9832 16.9154 21.7345 16.6666 21.4277 16.6666Z"/>
              <path d="M15.8721 16.6666H14.761C14.4542 16.6666 14.2055 16.9154 14.2055 17.2222C14.2055 17.529 14.4542 17.7778 14.761 17.7778H15.8721C16.1789 17.7778 16.4277 17.529 16.4277 17.2222C16.4277 16.9154 16.1789 16.6666 15.8721 16.6666Z"/>
              <path d="M28.3166 21.6666H27.8721C27.688 21.6666 27.5388 21.8159 27.5388 22V22.4444C27.5388 22.6285 27.688 22.7778 27.8721 22.7778H28.3166C28.5007 22.7778 28.6499 22.6285 28.6499 22.4444V22C28.6499 21.8159 28.5007 21.6666 28.3166 21.6666Z"/>
              <path d="M23.9303 23.2994L23.616 23.6137C23.4858 23.7439 23.4858 23.9549 23.616 24.0851L23.9303 24.3994C24.0604 24.5296 24.2715 24.5296 24.4017 24.3994L24.7159 24.0851C24.8461 23.9549 24.8461 23.7439 24.7159 23.6137L24.4017 23.2994C24.2715 23.1693 24.0604 23.1693 23.9303 23.2994Z"/>
              <path d="M22.761 27.2222H22.3166C22.1325 27.2222 21.9832 27.3714 21.9832 27.5555V28C21.9832 28.1841 22.1325 28.3333 22.3166 28.3333H22.761C22.9451 28.3333 23.0943 28.1841 23.0943 28V27.5555C23.0943 27.3714 22.9451 27.2222 22.761 27.2222Z"/>
              <path d="M23.9302 31.1561L23.6159 31.4703C23.4858 31.6005 23.4858 31.8116 23.6159 31.9417L23.9302 32.256C24.0604 32.3862 24.2714 32.3862 24.4016 32.256L24.7159 31.9417C24.8461 31.8116 24.8461 31.6005 24.7159 31.4703L24.4016 31.1561C24.2714 31.0259 24.0604 31.0259 23.9302 31.1561Z"/>
              <path d="M28.3166 32.7778H27.8721C27.688 32.7778 27.5388 32.927 27.5388 33.1111V33.5555C27.5388 33.7396 27.688 33.8889 27.8721 33.8889H28.3166C28.5007 33.8889 28.6499 33.7396 28.6499 33.5555V33.1111C28.6499 32.927 28.5007 32.7778 28.3166 32.7778Z"/>
              <path d="M31.7868 31.1561L31.4726 31.4704C31.3424 31.6006 31.3424 31.8116 31.4726 31.9418L31.7868 32.2561C31.917 32.3862 32.1281 32.3862 32.2582 32.2561L32.5725 31.9418C32.7027 31.8116 32.7027 31.6006 32.5725 31.4704L32.2582 31.1561C32.1281 31.0259 31.917 31.0259 31.7868 31.1561Z"/>
              <path d="M33.8721 27.2222H33.4277C33.2436 27.2222 33.0943 27.3714 33.0943 27.5555V28C33.0943 28.1841 33.2436 28.3333 33.4277 28.3333H33.8721C34.0562 28.3333 34.2054 28.1841 34.2054 28V27.5555C34.2054 27.3714 34.0562 27.2222 33.8721 27.2222Z"/>
              <path d="M31.7869 23.2995L31.4726 23.6138C31.3424 23.7439 31.3424 23.955 31.4726 24.0852L31.7869 24.3994C31.917 24.5296 32.1281 24.5296 32.2583 24.3994L32.5725 24.0852C32.7027 23.955 32.7027 23.7439 32.5725 23.6138L32.2583 23.2995C32.1281 23.1693 31.917 23.1693 31.7869 23.2995Z"/>
            </svg>
          </span>
          <span className="lg:flex hidden justify-center">
          Custom Website
          </span>
        </button>
        <button
          className={`${getTabClass("Web Design")} ${getTextClass("Web Design")}`}
          onClick={() => setActiveTab("Web Design")}
        >
          <span className="flex flex-wrap justify-center">
            <svg
              className={`mb-[8px] h-[40px] w-[40px] ${getIconClass("Web Design")}`}
              viewBox="0 0 40 40"
              fill="currentColor"
            >
              <path d="M20.389 6.97915H28.0932C28.4528 6.97915 28.7442 6.6877 28.7442 6.3281C28.7442 5.96851 28.4528 5.67706 28.0932 5.67706H20.389C20.0294 5.67706 19.738 5.96851 19.738 6.3281C19.738 6.6877 20.0294 6.97915 20.389 6.97915Z"/>
<path d="M14.3901 6.97915C14.5612 6.97915 14.7286 6.90946 14.8504 6.78841C14.9715 6.66736 15.0411 6.49926 15.0411 6.3281C15.0411 6.15695 14.9715 5.98885 14.8504 5.8678C14.7286 5.74674 14.5612 5.67706 14.3901 5.67706C14.2182 5.67706 14.0508 5.74674 13.9298 5.8678C13.808 5.98885 13.7391 6.15695 13.7391 6.3281C13.7391 6.49926 13.808 6.66736 13.9298 6.78841C14.0508 6.90946 14.2182 6.97915 14.3901 6.97915Z"/>
<path d="M12.3572 6.97915C12.5286 6.97915 12.6965 6.90946 12.8175 6.78841C12.9386 6.66736 13.0083 6.49926 13.0083 6.3281C13.0083 6.15695 12.9386 5.98885 12.8175 5.8678C12.6965 5.74674 12.5286 5.67706 12.3572 5.67706C12.1861 5.67706 12.0182 5.74674 11.8964 5.8678C11.7754 5.98885 11.7062 6.15695 11.7062 6.3281C11.7062 6.49926 11.7754 6.66736 11.8964 6.78841C12.0182 6.90946 12.1861 6.97915 12.3572 6.97915Z"/>
<path d="M16.4218 6.97915C16.5937 6.97915 16.7611 6.90946 16.8829 6.78841C17.0039 6.66736 17.0736 6.49926 17.0736 6.3281C17.0736 6.15695 17.0039 5.98885 16.8829 5.8678C16.7611 5.74674 16.5937 5.67706 16.4218 5.67706C16.2507 5.67706 16.0833 5.74674 15.9618 5.8678C15.8404 5.98885 15.7715 6.15695 15.7715 6.3281C15.7715 6.49926 15.8404 6.66736 15.9618 6.78841C16.0833 6.90946 16.2507 6.97915 16.4218 6.97915Z"/>
<path d="M31.8789 8.28098H31.4883V5.15623C31.4883 4.15118 30.6704 3.33331 29.6654 3.33331H10.7852C9.78011 3.33331 8.96224 4.15118 8.96224 5.15623V8.28098H8.57161C6.77667 8.28098 5.31641 9.7415 5.31641 11.5362V16.4844C5.31641 16.844 5.60785 17.1354 5.96745 17.1354C6.32705 17.1354 6.61849 16.844 6.61849 16.4844V11.5362C6.61849 10.4594 7.4946 9.58306 8.57161 9.58306H8.96224V25.4685H6.61849V21.4262C6.61849 21.0666 6.32705 20.7751 5.96745 20.7751C5.60785 20.7751 5.31641 21.0666 5.31641 21.4262V27.9424C5.31641 29.7374 6.77667 31.1976 8.57161 31.1976H16.9723V35.3646H14.4318C14.0722 35.3646 13.7807 35.656 13.7807 36.0156C13.7807 36.3752 14.0722 36.6666 14.4318 36.6666H26.0236C26.3832 36.6666 26.6746 36.3752 26.6746 36.0156C26.6746 35.656 26.3832 35.3646 26.0236 35.3646H23.4828V31.1976H31.8789C33.6738 31.1976 35.1341 29.7374 35.1341 27.9424V11.5362C35.1341 9.7415 33.6738 8.28098 31.8789 8.28098ZM31.8789 9.58306C32.9559 9.58306 33.832 10.4594 33.832 11.5362V25.4685H31.4883V9.58306H31.8789ZM10.2643 9.3229H19.5742V13.3471L17.3653 11.1382C17.2432 11.0161 17.0776 10.9474 16.9049 10.9474C16.7323 10.9474 16.5667 11.0161 16.4446 11.1382L14.0729 13.5099L12.6615 12.0985C12.4072 11.8442 11.9952 11.8442 11.7409 12.0985L10.2643 13.575V9.3229ZM10.2643 15.4165L12.2012 13.4796L14.5548 15.8333H10.2643V15.4165ZM16.3963 15.8333L14.9935 14.4305L16.9049 12.5194L19.5742 15.1886V15.8333H16.3963ZM20.8763 9.3229H30.1862V15.8333H20.8763V9.3229ZM10.7852 4.6354H29.6654C29.9525 4.6354 30.1862 4.86911 30.1862 5.15623V8.02081H10.2643V5.15623C10.2643 4.86911 10.498 4.6354 10.7852 4.6354ZM10.2643 17.1354H30.1862V25.4685H10.2643V17.1354ZM22.1807 35.3646H18.2744V31.1976H22.1807V35.3646ZM31.8789 29.8956H8.57161C7.4946 29.8956 6.61849 29.0195 6.61849 27.9424V26.7706H33.832V27.9424C33.832 29.0195 32.9559 29.8956 31.8789 29.8956Z"/>
<path d="M26.4537 18.4263C25.1254 18.4263 24.0448 19.5069 24.0448 20.8351C24.0448 22.1634 25.1254 23.244 26.4537 23.244C27.782 23.244 28.8626 22.1634 28.8626 20.8351C28.8626 19.5069 27.7817 18.4263 26.4537 18.4263ZM26.4537 21.9419C25.8433 21.9419 25.3469 21.4452 25.3469 20.8351C25.3469 20.2248 25.8433 19.7284 26.4537 19.7284C27.0638 19.7284 27.5605 20.2248 27.5605 20.8351C27.5605 21.4455 27.0638 21.9419 26.4537 21.9419Z"/>
<path d="M20.1817 18.4263C18.8534 18.4263 17.7729 19.5069 17.7729 20.8351C17.7729 22.1634 18.8534 23.244 20.1817 23.244C21.51 23.244 22.5906 22.1634 22.5906 20.8351C22.5906 19.5069 21.51 18.4263 20.1817 18.4263ZM20.1817 21.9419C19.5716 21.9419 19.075 21.4452 19.075 20.8351C19.075 20.2248 19.5716 19.7284 20.1817 19.7284C20.7921 19.7284 21.2885 20.2248 21.2885 20.8351C21.2885 21.4455 20.7921 21.9419 20.1817 21.9419Z"/>
<path d="M14.0729 18.4263C12.7446 18.4263 11.6641 19.5069 11.6641 20.8351C11.6641 22.1634 12.7446 23.244 14.0729 23.244C15.4012 23.244 16.4818 22.1634 16.4818 20.8351C16.4818 19.5069 15.4012 18.4263 14.0729 18.4263ZM14.0729 21.9419C13.4626 21.9419 12.9661 21.4452 12.9661 20.8351C12.9661 20.2248 13.4626 19.7284 14.0729 19.7284C14.6833 19.7284 15.1797 20.2248 15.1797 20.8351C15.1797 21.4455 14.6833 21.9419 14.0729 21.9419Z"/>
<path d="M23.3287 11.9271H28.0935C28.4531 11.9271 28.7445 11.6356 28.7445 11.276C28.7445 10.9164 28.4531 10.625 28.0935 10.625H23.3287C22.9691 10.625 22.6777 10.9164 22.6777 11.276C22.6777 11.6356 22.9691 11.9271 23.3287 11.9271Z"/>
<path d="M28.0935 13.2291H23.3287C22.9691 13.2291 22.6777 13.5206 22.6777 13.8802C22.6777 14.2398 22.9691 14.5312 23.3287 14.5312H28.0935C28.4531 14.5312 28.7445 14.2398 28.7445 13.8802C28.7445 13.5206 28.4529 13.2291 28.0935 13.2291Z"/>
<path d="M5.96745 19.7284C6.1386 19.7284 6.3067 19.6589 6.42775 19.5376C6.54881 19.4166 6.61849 19.2487 6.61849 19.0773C6.61849 18.9057 6.54881 18.7383 6.42775 18.6173C6.3067 18.4955 6.1386 18.4263 5.96745 18.4263C5.7963 18.4263 5.62819 18.4955 5.50714 18.6173C5.38609 18.7383 5.31641 18.9057 5.31641 19.0773C5.31641 19.2487 5.38609 19.4166 5.50714 19.5376C5.62819 19.6589 5.7963 19.7284 5.96745 19.7284Z"/>
<path d="M20.2253 27.6823C20.0541 27.6823 19.886 27.752 19.765 27.873C19.6439 27.9941 19.5742 28.1622 19.5742 28.3333C19.5742 28.5045 19.6439 28.6726 19.765 28.7936C19.886 28.9147 20.0541 28.9844 20.2253 28.9844C20.3964 28.9844 20.5645 28.9147 20.6856 28.7936C20.8066 28.6726 20.8763 28.5045 20.8763 28.3333C20.8763 28.1614 20.8066 27.9941 20.6856 27.873C20.5645 27.752 20.3964 27.6823 20.2253 27.6823Z"/>
            </svg>
          </span>
          <span className="lg:flex hidden justify-center">
          Web Design
          </span>
        </button>
        <button
          className={`${getTabClass("Copywriting")} ${getTextClass("Copywriting")}`}
          onClick={() => setActiveTab("Copywriting")}
        >
          <span className="flex flex-wrap justify-center">
            <svg
              className={`mb-[8px] h-[40px] w-[40px] ${getIconClass("Copywriting")}`}
              viewBox="0 0 40 40"
              fill="currentColor"
            >
              <path d="M26.0644 14.5001C26.3258 14.5001 26.5377 14.2882 26.5377 14.0268C26.5377 13.7654 26.3258 13.5534 26.0644 13.5534C25.803 13.5534 25.5911 13.7654 25.5911 14.0268C25.5911 14.2882 25.803 14.5001 26.0644 14.5001Z"/>
<path d="M28.1926 14.5001C28.454 14.5001 28.6659 14.2882 28.6659 14.0268C28.6659 13.7654 28.454 13.5534 28.1926 13.5534C27.9312 13.5534 27.7193 13.7654 27.7193 14.0268C27.7193 14.2882 27.9312 14.5001 28.1926 14.5001Z"/>
<path d="M30.3208 14.5001C30.5822 14.5001 30.7941 14.2882 30.7941 14.0268C30.7941 13.7654 30.5822 13.5534 30.3208 13.5534C30.0594 13.5534 29.8474 13.7654 29.8474 14.0268C29.8474 14.2882 30.0594 14.5001 30.3208 14.5001Z"/>
<path d="M24.151 20.128H31.5626C31.8324 20.128 32.0512 19.9093 32.0512 19.6394C32.0512 19.3696 31.8324 19.1509 31.5626 19.1509H24.151C23.8813 19.1509 23.6625 19.3696 23.6625 19.6394C23.6625 19.9093 23.8813 20.128 24.151 20.128Z"/>
<path d="M21.5253 22.5349H31.5627C31.8325 22.5349 32.0512 22.3163 32.0512 22.0464C32.0512 21.7765 31.8325 21.5579 31.5627 21.5579H21.5253C21.2555 21.5579 21.0367 21.7765 21.0367 22.0464C21.0367 22.3163 21.2554 22.5349 21.5253 22.5349Z"/>
<path d="M21.5253 24.942H31.5627C31.8325 24.942 32.0512 24.7233 32.0512 24.4534C32.0512 24.1836 31.8325 23.9649 31.5627 23.9649H21.5253C21.2555 23.9649 21.0367 24.1836 21.0367 24.4534C21.0367 24.7232 21.2554 24.942 21.5253 24.942Z"/>
<path d="M21.5253 27.3489H28.6659C28.9357 27.3489 29.1544 27.1303 29.1544 26.8604C29.1544 26.5905 28.9357 26.3719 28.6659 26.3719H21.5253C21.2555 26.3719 21.0367 26.5905 21.0367 26.8604C21.0367 27.1303 21.2554 27.3489 21.5253 27.3489Z"/>
<path d="M32.898 11.591H19.2458C19.1604 10.2724 18.061 9.22557 16.7212 9.22557C15.3814 9.22557 14.282 10.2724 14.1966 11.591H12.2327C11.2246 11.591 10.4044 12.4112 10.4044 13.4193V29.7952C10.4044 30.8034 11.2247 31.6236 12.2328 31.6236H14.1907V32.2793C14.1907 32.7033 14.2979 33.1242 14.5007 33.4966L15.3021 34.9683H7.8651C6.9985 34.9683 6.29349 34.2633 6.29349 33.3967C6.30182 8.99288 6.27337 10.4281 6.31569 10.2026H10.75C11.5417 10.2026 12.1858 9.55857 12.1858 8.76684V4.3326C12.2622 4.31827 12.3402 4.3104 12.4196 4.3104H28.5846C29.4512 4.3104 30.1563 5.01541 30.1563 5.88201V9.79555C30.1563 10.0654 30.375 10.2841 30.6448 10.2841C30.9146 10.2841 31.1333 10.0654 31.1333 9.79555V5.88201C31.1333 4.47667 29.99 3.33331 28.5846 3.33331H12.4195C11.8232 3.33331 11.2626 3.56547 10.841 3.98715L5.97025 8.85786C5.54863 9.27954 5.31641 9.84015 5.31641 10.4364V33.3967C5.31641 34.8021 6.45977 35.9454 7.8651 35.9454H15.8342L15.9906 36.2326C16.1364 36.5004 16.4163 36.6666 16.7212 36.6666C17.0261 36.6666 17.3061 36.5004 17.4519 36.2326L17.6083 35.9454H28.5846C29.9751 35.9454 31.1184 34.8145 31.1332 33.4243C31.1361 33.1545 30.9197 32.9335 30.6499 32.9306H30.6445C30.3772 32.9306 30.159 33.1459 30.1561 33.4139C30.147 34.2711 29.442 34.9683 28.5846 34.9683H18.1404L18.9419 33.4967C19.1447 33.1244 19.2519 32.7034 19.2519 32.2793V31.6237H32.898C33.9061 31.6237 34.7264 30.8034 34.7264 29.7953V13.4194C34.7263 12.4112 33.9061 11.591 32.898 11.591ZM11.2086 5.00141V8.76691C11.2086 9.01984 11.0029 9.22557 10.7499 9.22557H6.98444L11.2086 5.00141ZM11.3814 13.4194C11.3814 12.95 11.7633 12.5681 12.2327 12.5681H14.1906V15.4852H11.3814V13.4194ZM14.6792 20.2929C14.4094 20.2929 14.1906 20.5116 14.1906 20.7814V30.6465H12.2327C11.7633 30.6465 11.3815 30.2646 11.3815 29.7952V16.4623H14.1906V18.4974C14.1906 18.7672 14.4094 18.9859 14.6792 18.9859C14.949 18.9859 15.1677 18.7672 15.1677 18.4974V14.1986H16.2327V31.7907H15.1677V20.7814C15.1677 20.5116 14.949 20.2929 14.6792 20.2929ZM18.0837 33.0293L17.0277 34.9683H16.4146L15.3586 33.0293C15.3156 32.9502 15.2718 32.8467 15.246 32.7679H18.1962C18.1699 32.8484 18.1265 32.9508 18.0837 33.0293ZM18.2747 31.7908H17.2098V14.1986H18.2747V31.7908ZM18.2747 13.2215H15.1677V11.7562C15.1677 10.8996 15.8646 10.2027 16.7212 10.2027C17.5778 10.2027 18.2747 10.8996 18.2747 11.7562V13.2215ZM33.7492 29.7952C33.7492 30.2646 33.3673 30.6465 32.898 30.6465H19.2518V16.4623H33.7492V29.7952ZM33.7492 15.4852H19.2518V12.5681H32.898C33.3674 12.5681 33.7492 12.95 33.7492 13.4194V15.4852Z"/>
            </svg>
          </span>
          <span className="lg:flex hidden justify-center">
          Copywriting
          </span>
        </button>
      </div>
    </div>
  );
}