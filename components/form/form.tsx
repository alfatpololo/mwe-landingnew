import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import arrowIcon from "@/public/arrow.svg"; // Import the arrow icon

// Define the form data type
interface FormData {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  websiteNeeds: string;
}

// Validation schema using yup
const schema = yup.object().shape({
  name: yup.string().required("Nama harus diisi"),
  email: yup
    .string()
    .email("Email tidak valid")
    .required("Email harus diisi"),
  phone: yup.string().required("Nomor telepon harus diisi"),
  businessType: yup.string().required("Jenis bisnis harus diisi"),
  websiteNeeds: yup.string().required("Kebutuhan website harus diisi"),
});

// Custom Phone Input Component
const CustomPhoneInput: React.FC<{ value: string; onChange: (value: string) => void }> = ({ value, onChange }) => {
  const [phoneValue, setPhoneValue] = useState(value);

  const handlePhoneChange = (value: string) => {
    setPhoneValue(value);
    onChange(value);
  };

  return (
    <PhoneInput
      country={'id'} // Set default country
      value={phoneValue}
      onChange={handlePhoneChange}
      inputClass="w-full bg-transparent border-none p-2 outline-none"
      containerClass="border-b-2 border-gray-300 focus-within:border-blue-500"
      buttonClass="outline-none border-none bg-transparent"
      dropdownClass="country-list-custom"
    />
  );
};

// Main Contact Form Component
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [phone, setPhone] = useState<string>("");

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pb-[175px]">
      <div className="lg:flex lg:space-x-[32px] pt-[72px]">
        <div className="lg:flex-1">
          <input
            type="text"
            placeholder="Nama"
            {...register("name")}
            className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none p-2"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>
        <div className="lg:flex-1 lg:pt-0 pt-[20px]">
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none p-2"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="lg:flex lg:space-x-[32px] pt-[20px] lg:pt-[40px]">
        <div className="lg:flex-1 lg:pt-[5px]">
          <CustomPhoneInput
            value={phone}
            onChange={(value) => {
              setPhone(value);
              setValue("phone", value);
            }}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>
        <div className="lg:flex-1 lg:pt-0 pt-[20px]">
          <input
            type="text"
            placeholder="Jenis Bisnis Anda"
            {...register("businessType")}
            className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none p-2"
          />
          {errors.businessType && (
            <p className="text-red-500 text-sm">
              {errors.businessType.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <textarea
          placeholder="Kebutuhan Website Anda"
          {...register("websiteNeeds")}
          className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none p-2 lg:h-32 pt-[40px]"
        ></textarea>
        {errors.websiteNeeds && (
          <p className="text-red-500 text-sm">{errors.websiteNeeds.message}</p>
        )}
      </div>

      <div className="flex justify-end mt-4">
        <button
          type="submit"
          className="bg-primary-blue text-white p-3 rounded-[24px] flex items-center px-[24px]"
        >
          Hubungi kami sekarang
          <Image
            src={arrowIcon}
            alt="Arrow Icon"
            width={20}
            height={20}
            className="ml-2"
          />
        </button>
      </div>
    </form>
  );
}
