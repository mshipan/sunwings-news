import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useGetBodyThemeQuery } from "../../../../redux/features/allApis/bodyThemeApi/bodyThemeApi";

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
  ImageSizeLabel,
  ImageSize,
  loading,
}) => {
  const [bgColor, setBgColor] = useState("");
  const [textColorValue, setTextColorValue] = useState("");
  const [fontSizeValue, setFontSizeValue] = useState("");
  const [imageSizeValue, setImageSizeValue] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const { data: bodyThemes } = useGetBodyThemeQuery();

  useEffect(() => {
    if (bodyThemes) {
      // Set default background color
      setBgColor(bodyThemes[0]?.[BgColor] || "");

      // Set default text color
      setTextColorValue(bodyThemes[0]?.[TextFontColor] || "");

      // Set default font size
      setFontSizeValue(bodyThemes[0]?.[TextFontSize] || "");

      // Set default Image size
      setImageSizeValue(bodyThemes[0]?.[ImageSize] || "");
    }
  }, [bodyThemes, BgColor, TextFontColor, TextFontSize, ImageSize]);

  const handleBgColorChange = (color) => {
    setValue(BgColor, color);
    setBgColor(color);
  };

  const handleTextColorChange = (color) => {
    setValue(TextFontColor, color);
    setTextColorValue(color);
  };

  const handleFontSizeChange = (e) => {
    setValue(TextFontSize, e.target.value);
    setFontSizeValue(e.target.value);
  };

  const handleImageSizeChange = (e) => {
    setValue(ImageSize, e.target.value);
    setImageSizeValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="flex flex-col gap-1 w-full md:w-full lg:w-full xl:w-5/6">
        <label htmlFor="" className="flex flex-col items-start ">
          <span className="text-xl leading-3">{labelH1}:</span>
          <span className="text-sm text-orange-600 italic ">{subLabel}</span>
        </label>

        <div className="flex flex-col gap-1">
          {errors.BgColor && (
            <p className="text-red-600 text-sm italic">
              <span className="font-semibold">BgColor</span> is Required **
            </p>
          )}
          {errors[TextFontSize] && (
            <p className="text-red-600 text-sm italic">
              <span className="font-semibold">Font Size</span> is Required **
            </p>
          )}
          {errors.TextFontColor && (
            <p className="text-red-600 text-sm italic">
              <span className="font-semibold">Font Color</span> is Required **
            </p>
          )}
          {errors.ImageSize && (
            <p className="text-red-600 text-sm italic">
              <span className="font-semibold">Image Size</span> is Required **
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
                  defaultValue={bgColor}
                  onChange={handleFontSizeChange}
                  placeholder="Ex. #ffff"
                  className="px-2 py-1 bg-white border border-orange-600 w-full"
                />
              </div>
              <input
                type="color"
                name="color"
                {...register("takenBgColor")}
                onChange={(e) => handleBgColorChange(e.target.value)}
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
                  defaultValue={fontSizeValue}
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
                {...register("takenTextColor")}
                onChange={(e) => handleTextColorChange(e.target.value)}
                className="h-8"
              />
            </div>
          )}

          {ImageSize && (
            <div className="flex flex-row md:flex-row lg:flex-row xl:flex-row items-end gap-3 w-full md:w-full lg:w-4/12 xl:w-56">
              <div className="form-control w-full">
                <label htmlFor={ImageSize} className="text-lg">
                  {ImageSizeLabel}:
                </label>
                <input
                  type="number"
                  name={ImageSize}
                  {...register(ImageSize, { required: true })}
                  defaultValue={imageSizeValue}
                  onChange={handleImageSizeChange}
                  placeholder="Only Number"
                  className="px-2 py-1 bg-white border border-orange-600 w-full"
                />
              </div>
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
