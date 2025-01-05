import React from "react";

export default function Input() {
  return (
    <div className="min-h-screen flex items-center">
      <div className="[--clr:#1f1f1f] dark:[--clr:#999999] relative flex flex-row items-center">
        <input
          name="email"
          aria-invalid="false"
          placeholder=""
          id="email"
          type="email"
          className="peer text-black dark:text-white pl-2 h-[40px] min-h-[40px] pr-[40px] leading-normal appearance-none resize-none box-border text-base w-full text-inherit block text-left border border-solid bg-transparent rounded-lg m-0 p-0 outline-0 focus-visible:outline-0 focus-visible:border-blue-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#71717a2e] dark:focus-visible:ring-[#14b8a61a]"
        />
        <label
          className="cursor-text text-[--clr] inline-block z-0 text-sm mb-px font-normal text-start select-none absolute duration-300 transform origin-[0] translate-x-[10px] peer-focus-visible:text-blue-600 peer-focus-visible:translate-x-[8px] peer-[:not(:placeholder-shown)]:translate-x-[8px] peer-focus-visible:translate-y-[-36px] peer-[:not(:placeholder-shown)]:translate-y-[-36px] peer-[:not(:placeholder-shown)]:text-[-36px]"
          for="email"
        >
          Email
        </label>
      </div>
    </div>
  );
}
