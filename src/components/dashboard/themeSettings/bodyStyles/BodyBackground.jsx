import { useState } from "react";
import { useForm } from "react-hook-form";

const BodyBackground = ({
  onSubmit,
  labelH1,
  subLabel,
  BgColor,
  Bglabel,
  TextFontSize,
  TextFontColor,
  TextFontSizeLabel,
  TextFontColorLabel,
  loading,
}) => {
  const [bgColorValue, setBgColorValue] = useState("");
  const [textColorValue, setTextColorValue] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="flex flex-col gap-1 w-full md:w-full lg:w-full xl:w-5/6">
        <label htmlFor="" className="flex flex-col items-start ">
          <span className="text-xl leading-3">{labelH1}:</span>
          <span className="text-lg text-orange-600 italic ">{subLabel}</span>
        </label>

        <div className="flex flex-col gap-1">
          {errors[BgColor] && (
            <p className="text-red-600 text-sm italic">
              <span className="font-semibold">BgColor</span> is Required **
            </p>
          )}
          {errors[TextFontSize] && (
            <p className="text-red-600 text-sm italic">
              <span className="font-semibold">Font Size</span> is Required **
            </p>
          )}
          {errors[TextFontColor] && (
            <p className="text-red-600 text-sm italic">
              <span className="font-semibold">Font Color</span> is Required **
            </p>
          )}
        </div>

        <div className="flex flex-col md:flex-col lg:flex-col xl:flex-row items-start md:items-start lg:items-start xl:items-end 2xl:items-end gap-3 w-full md:w-full lg:w-full xl:w-2/3">
          {BgColor && (
            <div className="flex flex-row md:flex-row lg:flex-row xl:flex-row items-end gap-3 w-full md:w-full lg:w-4/12 xl:w-56">
              <div className="form-control w-full">
                <label htmlFor={BgColor} className="text-lg">
                  {Bglabel} :
                </label>
                <input
                  type="text"
                  name={BgColor}
                  {...register(BgColor, {
                    required: true,
                  })}
                  defaultValue={bgColorValue}
                  placeholder="Ex. #ffff"
                  className="px-2 py-1 bg-white border border-orange-600 w-full"
                />
              </div>
              <input
                type="color"
                name="color"
                onChange={(e) => setBgColorValue(e.target.value)}
                className="h-8 "
              />
            </div>
          )}
          {TextFontSize && (
            <div className="flex flex-row md:flex-row lg:flex-row xl:flex-row items-end gap-3 w-full md:w-full lg:w-4/12 xl:w-56">
              <div className="form-control w-full">
                <label htmlFor={TextFontSize} className="text-lg">
                  {TextFontSizeLabel}:
                </label>
                <input
                  type="number"
                  name={TextFontSize}
                  {...register(TextFontSize, { required: true })}
                  placeholder="Only Number"
                  className="px-2 py-1 bg-white border border-orange-600 w-full"
                />
              </div>
            </div>
          )}
          {TextFontColor && (
            <div className="flex flex-row md:flex-row lg:flex-row xl:flex-row items-end gap-3 w-full md:w-full lg:w-4/12 xl:w-56">
              <div className="form-control w-full">
                <label htmlFor={TextFontColor} className="text-lg">
                  {TextFontColorLabel}:
                </label>
                <input
                  type="text"
                  name={TextFontColor}
                  {...register(TextFontColor, { required: true })}
                  defaultValue={textColorValue}
                  placeholder="Ex. #ffff"
                  className="px-2 py-1 bg-white border border-orange-600 w-full"
                />
              </div>
              <input
                type="color"
                onChange={(e) => setTextColorValue(e.target.value)}
                className="h-8"
              />
            </div>
          )}

          <div>
            <button type="submit" className="px-4 py-1 bg-orange-600">
              {loading ? "Updating..." : "Update"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BodyBackground;
