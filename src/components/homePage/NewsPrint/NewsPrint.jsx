import { useRef } from "react";
import { useGetFooterQuery } from "../../../redux/features/allApis/footerApi/footerApi";

const NewsPrint = () => {
  const { data: allFooters, isLoading } = useGetFooterQuery();
  const printableAreaRef = useRef(null);

  if (isLoading) {
    return <div>Loading</div>;
  }

  const footerInfo = allFooters[0];

  const handlePrint = () => {
    const printableContent = document.getElementById("printableArea").innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printableContent;

    window.print();

    document.body.innerHTML = originalContent;
  };

  return (
    <div>
      <button onClick={handlePrint}>Print</button>
      <div
        ref={printableAreaRef}
        className="flex flex-col justify-center items-center w-1/2 mx-auto border-2  border-green-700"
        id="printableArea"
      >
        <img
          className=""
          src="http://ruposidesh.com/wp-content/uploads/2023/06/Untitled-1ww.jpg"
          alt=""
        />
        <div className="bg-[#106634] text-white text-center w-full py-[5px] text-[18px]">
          <span>প্রিন্ট এর তারিখঃ এপ্রিল ৪, ২০২৪, ৩:৫২ পি.এম </span>||
          <span> প্রকাশের তারিখঃ এপ্রিল ৪, ২০২৪, ৫:৩০ এ.এম</span>
        </div>
        <h1 className="text-center font-bold text-[34px] my-[30px] px-[4px]">
          শাহজাদপুরে একসাথে ৪ কন্যার জন্ম দিয়েছেন রিক্সা চালকের স্ত্রী!
        </h1>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
          earum. Quis praesentium, quasi atque delectus neque repudiandae esse
          nisi aliquam modi provident laboriosam. Dignissimos, id quibusdam esse
          quod perspiciatis voluptatum? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Minus, earum. Quis praesentium, quasi atque delectus
          neque repudiandae esse nisi aliquam modi provident laboriosam.
          Dignissimos, id quibusdam esse quod perspiciatis voluptatum?
        </div>
        <img
          className="w-[300px]"
          src="http://ruposidesh.com/wp-content/uploads/2023/03/282182418_1011643292808564_4897351549083796763_n.png"
          alt=""
        />
        <div className="bg-white text-center text-black text-[18px] m-[10px] font-semibold">
          <p>
            <span>সম্পাদক ও প্রকাশক: {footerInfo?.sompadokAndProkashok}</span>,
            <span> নির্বাহী সম্পাদক : {footerInfo?.nirbahiSompadok}</span>,
            <span> বার্তা সম্পাদক : {footerInfo?.bartaSompadok}</span>
          </p>
          <p>
            <span>মোবাইল : {footerInfo?.officeMobile}</span>,
            <span> ইমেইল : {footerInfo?.officeEmail}</span>,
            <span> web : https://sunwingsnews.com</span>
          </p>
        </div>
        <div className="container py-6 px-2 mx-auto">
          <div className="text-center flex flex-row gap-1 justify-center">
            <span>© 2024 Copyright:</span>
            <p className="font-semibold">{footerInfo?.copyrightText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPrint;
