import { Helmet } from "react-helmet-async";
import BodyBackground from "../../../../components/dashboard/themeSettings/bodyStyles/BodyBackground";
import {
  useGetBodyThemeQuery,
  useUpdateBodyBgMutation,
  useUpdateMarqueMutation,
  useUpdateMenuMutation,
  useUpdateMoreNewsMutation,
  useUpdateNewsCardMutation,
} from "../../../../redux/features/allApis/bodyThemeApi/bodyThemeApi";
import { useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const BodyStyles = () => {
  const [loading, setLoading] = useState(false);
  const [loadingNews, setLoadingNews] = useState(false);
  const [loadingMarque, setLoadingMarque] = useState(false);
  const [loadingMenu, setLoadingMenu] = useState(false);
  const [loadingMoreNews, setLoadingMoreNews] = useState(false);
  const { reset } = useForm();
  const { data: bodyThemes } = useGetBodyThemeQuery();
  const [updateBodyBg] = useUpdateBodyBgMutation();
  const [updateNewsCard] = useUpdateNewsCardMutation();
  const [updateMarque] = useUpdateMarqueMutation();
  const [updateMenu] = useUpdateMenuMutation();
  const [updateMoreNews] = useUpdateMoreNewsMutation();
  const id = bodyThemes?.[0]._id;
  const singleTheme = bodyThemes?.[0];

  const handleBodyBgSubmit = async (data) => {
    delete data.sampleColor;

    try {
      setLoading(true);

      const result = await updateBodyBg({
        id: id,
        bodyBg: data.bodyBg,
        newscardTitleFontSize: singleTheme?.newscardTitleFontSize,
        newscardTitleFontColor: singleTheme?.newscardTitleFontColor,
        marqueBg: singleTheme?.marqueBg,
        marqueTitleFontColor: singleTheme?.marqueTitleFontColor,
        marqueTitleFontSize: singleTheme?.marqueTitleFontSize,
        menuBg: singleTheme?.menuBg,
        menuTitleFontColor: singleTheme?.menuTitleFontColor,
        menuTitleFontSize: singleTheme?.menuTitleFontSize,
        moreNewsTitleFontColor: singleTheme?.moreNewsTitleFontColor,
        moreNewsTitleFontSize: singleTheme?.moreNewsTitleFontSize,
      });
      if (result.data.modifiedCount > 0) {
        setLoading(false);
        reset();
        Swal.fire({
          title: "Body Background Color Updated Successfully!",
          text: "Press OK to continue",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      setLoading(false);
      Swal.fire({
        position: "center",
        icon: "error",
        title: `Error Updating Body Background Color: ${error}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  const handleNewsCardSubmit = async (data) => {
    delete data.sampleColor;
    delete data.takenTextColor;
    try {
      setLoadingNews(true);

      const result = await updateNewsCard({
        id: id,
        newscardTitleFontSize: data.newscardTitleFontSize,
        newscardTitleFontColor: data.newscardTitleFontColor,
        marqueBg: singleTheme.marqueBg,
        marqueTitleFontColor: singleTheme.marqueTitleFontColor,
        marqueTitleFontSize: singleTheme.marqueTitleFontSize,
        menuBg: singleTheme.menuBg,
        menuTitleFontColor: singleTheme.menuTitleFontColor,
        menuTitleFontSize: singleTheme.menuTitleFontSize,
        moreNewsTitleFontColor: singleTheme.moreNewsTitleFontColor,
        moreNewsTitleFontSize: singleTheme.moreNewsTitleFontSize,
      });
      if (result.data.modifiedCount > 0) {
        setLoadingNews(false);
        reset();
        Swal.fire({
          title: "News Card content Updated Successfully!",
          text: "Press OK to continue",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      setLoadingNews(false);
      Swal.fire({
        position: "center",
        icon: "error",
        title: `Error Updating News Card content: ${error}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  const handleMarqueSubmit = async (data) => {
    delete data.sampleColor;
    delete data.takenTextColor;
    try {
      setLoadingMarque(true);

      const result = await updateMarque({
        id: id,
        newscardTitleFontSize: singleTheme.newscardTitleFontSize,
        newscardTitleFontColor: singleTheme.newscardTitleFontColor,
        marqueBg: data.marqueBg,
        marqueTitleFontColor: data.marqueTitleFontColor,
        marqueTitleFontSize: data.marqueTitleFontSize,
        menuBg: singleTheme.menuBg,
        menuTitleFontColor: singleTheme.menuTitleFontColor,
        menuTitleFontSize: singleTheme.menuTitleFontSize,
        moreNewsTitleFontColor: singleTheme.moreNewsTitleFontColor,
        moreNewsTitleFontSize: singleTheme.moreNewsTitleFontSize,
      });
      if (result.data.modifiedCount > 0) {
        setLoadingMarque(false);
        reset();
        Swal.fire({
          title: "Marque content Updated Successfully!",
          text: "Press OK to continue",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      setLoadingMarque(false);
      Swal.fire({
        position: "center",
        icon: "error",
        title: `Error Updating Marque content: ${error}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  const handleMenuSubmit = async (data) => {
    delete data.sampleColor;
    delete data.takenTextColor;
    try {
      setLoadingMenu(true);

      const result = await updateMenu({
        id: id,
        newscardTitleFontSize: singleTheme.newscardTitleFontSize,
        newscardTitleFontColor: singleTheme.newscardTitleFontColor,
        marqueBg: singleTheme.marqueBg,
        marqueTitleFontColor: singleTheme.marqueTitleFontColor,
        marqueTitleFontSize: singleTheme.marqueTitleFontSize,
        menuBg: data.menuBg,
        menuTitleFontColor: data.menuTitleFontColor,
        menuTitleFontSize: data.menuTitleFontSize,
        moreNewsTitleFontColor: singleTheme.moreNewsTitleFontColor,
        moreNewsTitleFontSize: singleTheme.moreNewsTitleFontSize,
      });
      if (result.data.modifiedCount > 0) {
        setLoadingMenu(false);
        reset();
        Swal.fire({
          title: "Menu content Updated Successfully!",
          text: "Press OK to continue",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      setLoadingMenu(false);
      Swal.fire({
        position: "center",
        icon: "error",
        title: `Error Updating Menu content: ${error}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  const handleMoreNewsSubmit = async (data) => {
    delete data.sampleColor;
    delete data.takenTextColor;
    try {
      setLoadingMoreNews(true);

      const result = await updateMoreNews({
        id: id,
        newscardTitleFontSize: singleTheme.newscardTitleFontSize,
        newscardTitleFontColor: singleTheme.newscardTitleFontColor,
        marqueBg: singleTheme.marqueBg,
        marqueTitleFontColor: singleTheme.marqueTitleFontColor,
        marqueTitleFontSize: singleTheme.marqueTitleFontSize,
        menuBg: singleTheme.menuBg,
        menuTitleFontColor: singleTheme.menuTitleFontColor,
        menuTitleFontSize: singleTheme.menuTitleFontSize,
        moreNewsTitleFontColor: data.moreNewsTitleFontColor,
        moreNewsTitleFontSize: data.moreNewsTitleFontSize,
      });
      if (result.data.modifiedCount > 0) {
        setLoadingMoreNews(false);
        reset();
        Swal.fire({
          title: "More News content Updated Successfully!",
          text: "Press OK to continue",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      setLoadingMoreNews(false);
      Swal.fire({
        position: "center",
        icon: "error",
        title: `Error Updating More News content: ${error}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div>
      <Helmet>
        <title>Sunwings | Body Styles</title>
      </Helmet>

      <div className="flex flex-col gap-4 mb-4">
        <h1 className="text-black text-2xl">Body Styles</h1>
        <div className="flex flex-col gap-8 w-full">
          <BodyBackground
            onSubmit={handleBodyBgSubmit}
            labelH1="Body Background"
            BgColor="bodyBg"
            Bglabel="BgColor"
            subLabel="Pick a Background Color for Body."
            loading={loading}
          />
          <BodyBackground
            onSubmit={handleNewsCardSubmit}
            labelH1="NewCard"
            subLabel="Please Set Font Size & Pick a Color for News Card."
            TextFontSize="newscardTitleFontSize"
            TextFontSizeLabel="Font Size"
            TextFontColor="newscardTitleFontColor"
            TextFontColorLabel="Font Color"
            loading={loadingNews}
          />
          <BodyBackground
            onSubmit={handleMarqueSubmit}
            labelH1="Marque (Scrolling Headline)"
            subLabel="Please Set Font Size & Pick Colors for Font Color and BgColor for Marque."
            TextFontSize="marqueTitleFontSize"
            TextFontSizeLabel="Font Size"
            TextFontColor="marqueTitleFontColor"
            TextFontColorLabel="Font Color"
            BgColor="marqueBg"
            Bglabel="BgColor"
            loading={loadingMarque}
          />
          <BodyBackground
            onSubmit={handleMenuSubmit}
            labelH1="Menu"
            subLabel="Please Set Font Size & Pick Colors for Font Color and BgColor for Menu."
            TextFontSize="menuTitleFontSize"
            TextFontSizeLabel="Font Size"
            TextFontColor="menuTitleFontColor"
            TextFontColorLabel="Font Color"
            BgColor="menuBg"
            Bglabel="BgColor"
            loading={loadingMenu}
          />
          <BodyBackground
            onSubmit={handleMoreNewsSubmit}
            labelH1="More News"
            subLabel="Please Set Font Size & Pick a Color for Font Color for More News."
            TextFontSize="moreNewsTitleFontSize"
            TextFontSizeLabel="Font Size"
            TextFontColor="moreNewsTitleFontColor"
            TextFontColorLabel="Font Color"
            loading={loadingMoreNews}
          />
        </div>
      </div>
    </div>
  );
};

export default BodyStyles;
