import { Link } from "react-router-dom";
import footerLogo from "../../assets/logo1.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const FooterArea = () => {
  return (
    <footer className="container mx-auto py-4 px-2 bg-slate-700 text-center text-surface/75 dark:bg-neutral-700 text-white lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-between">
        <div className="me-12 hidden lg:block text-white">
          <span className="text-lg">
            Get connected with us on social networks:
          </span>
        </div>
        {/* <!-- Social network icons container --> */}
        <div className="flex justify-center">
          <Link to="/" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
            <FaFacebookF />
          </Link>
          <Link to="/" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
            <FaTwitter />
          </Link>
          <Link to="/" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
            <FaYoutube />
          </Link>
          <Link to="/" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
            <FaInstagram />
          </Link>
        </div>
      </div>

      {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* <!-- TW Elements section --> */}
          <div className="flex flex-col gap-4">
            <img src={footerLogo} alt="footer logo" />
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          {/* সম্পাদকীয় section */}
          <div className="flex flex-col gap-4">
            <h1 className=" font-semibold underline underline-offset-8">
              সম্পাদকীয়
            </h1>
            <div>
              <p>সম্পাদক ও প্রকাশক : আব্দুল হাসিম চৌধুরী</p>
              <p>নির্বাহী সম্পাদক : আবু রায়হান</p>
              <p>বার্তা সম্পাদক : আবু হুরায়রা চৌধুরী</p>
            </div>
          </div>
          {/* <!-- Useful links section --> */}
          <div className="flex flex-col gap-4">
            <h1 className=" font-semibold underline underline-offset-8">
              Useful links
            </h1>
            <ul className="flex flex-col gap-2">
              <li>
                <Link to="/" className="hover:underline">
                  আমাদের সম্পর্কে
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline ">
                  সাইটম্যাপ
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline ">
                  ভিডিও গ্যালারী
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline ">
                  ফটোগ্যালারী
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline ">
                  আমাদের পরিবার
                </Link>
              </li>
            </ul>
          </div>
          {/* <!-- Contact section --> */}
          <div className="flex flex-col gap-4">
            <h1 className=" font-semibold underline underline-offset-8">
              অফিস
            </h1>
            <div>
              <p>অফিস : মিরপুর, ঢাকা, বাংলাদেশ-১২১৬</p>
              <p>ইমেইল : vismodeb2000@gamil.com</p>
              <p>মোবাইল : 01737351549</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterArea;
