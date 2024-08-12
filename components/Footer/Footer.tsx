import Image from "next/image"

const Footer = () => {
  return (
    <footer className="max-w-[1440px] mx-auto flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image src='/logo.svg' alt="logo" width={118} height={118} className="object-contain"/>
          <p className="text-base text-gray-700">
            Carhub 2023 <br />
            All rights reserved &copy;
            </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer