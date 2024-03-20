import { useForm } from "react-hook-form";

const CustomizeFooter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row gap-3">
        <h1 className="text-black text-2xl">Footer Customize</h1>
      </div>
      <div className="flex flex-col gap-4 w-1/2">
        <div className="form-control text-black flex flex-col ">
          <label htmlFor="about" className="text-lg">
            Footer about :
          </label>
          <textarea
            name="about"
            id=""
            cols="30"
            rows="5"
            {...register("about", { required: true })}
            className="bg-white border border-gray-400 "
          ></textarea>
        </div>
        <div className="form-control text-black flex flex-col gap-2 ">
          <label
            htmlFor="sompadok"
            className="text-lg underline underline-offset-4"
          >
            সম্পাদকীয়
          </label>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1 ">
              <label htmlFor="sompadokAndProkashok">সম্পাদক ও প্রকাশক :</label>
              <input
                type="text"
                name="sompadokAndProkashok"
                className="bg-white border border-gray-400 px-2 py-1"
                placeholder="আব্দুল হাসিম চৌধুরী"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="nirbahiSompadok">নির্বাহী সম্পাদক :</label>
              <input
                type="text"
                name="nirbahiSompadok"
                className="bg-white border border-gray-400 px-2 py-1"
                placeholder="আবু রায়হান"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="bartaSompadok">বার্তা সম্পাদক :</label>
              <input
                type="text"
                name="bartaSompadok"
                className="bg-white border border-gray-400 px-2 py-1"
                placeholder="আবু হুরায়রা চৌধুরী"
              />
            </div>
          </div>
        </div>

        <div className="form-control text-black flex flex-col gap-2 ">
          <label
            htmlFor="office"
            className="text-lg underline underline-offset-4"
          >
            অফিস
          </label>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1 ">
              <label htmlFor="officeAddress">অফিস Address:</label>
              <input
                type="text"
                name="officeAddress"
                className="bg-white border border-gray-400 px-2 py-1"
                placeholder="মিরপুর, ঢাকা, বাংলাদেশ-১২১৬"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="officeEmail">অফিস Email :</label>
              <input
                type="text"
                name="officeEmail"
                className="bg-white border border-gray-400 px-2 py-1"
                placeholder="vismodeb2000@gamil.com"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="officeMobile">অফিস Mobile :</label>
              <input
                type="text"
                name="officeMobile"
                className="bg-white border border-gray-400 px-2 py-1"
                placeholder="01737351549"
              />
            </div>
          </div>
        </div>

        <div className="form-control text-black flex flex-col gap-1 ">
          <label htmlFor="copyrightLink">Copyright link :</label>
          <input
            type="text"
            name="copyrightLink"
            className="bg-white border border-gray-400 px-2 py-1"
            placeholder="www.example.com"
          />
        </div>
        <button
          type="submit"
          className="py-1 bg-blue-600 text-white font-semibold "
        >
          Update Footer
        </button>
      </div>
    </form>
  );
};

export default CustomizeFooter;
