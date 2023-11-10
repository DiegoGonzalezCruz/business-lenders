import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-green w-full">
      <div className="md:w-1/2 w-5/6  mx-auto py-10 flex md:flex-row flex-col gap-10 text-black text-small font-medium">
        <div className="flex flex-col gap-4 w-2/3  ">
          <p>P.O. Box 370127 | West Hartford, CT 06137-0127 </p>
          <p>Copyright © 2023 Business Lenders, LLC </p>
          <p>All Image & Photographs All Right Reserved </p>
        </div>
        <div className=" w-fit flex flex-col gap-5">
          <div className="flex flex-row gap-5 h-5  items-center ">
            <Image
              src={"/phone-icon.svg"}
              width={20}
              height={20}
              className="h-full"
              alt="phone icon"
            />
            <p>1-860-244-9202</p>
          </div>
          <div className="flex flex-row gap-5 h-5  items-center ">
            <Image
              src={"/mail-icon.svg"}
              width={20}
              height={20}
              className="h-full"
              alt="mail icon"
            />

            <p>
              <a href="mailto:jhart@businesslenders.com">
                jhart@businesslenders.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
