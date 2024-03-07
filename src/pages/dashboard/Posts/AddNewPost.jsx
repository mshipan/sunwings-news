import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link } from "react-router-dom";

const AddNewPost = () => {
  const [quillValue, setQuillValue] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [publishAccordionOpen, setPublishAccordionOpen] = useState(true);
  const [categoryAccordionOpen, setCategoryAccordionOpen] = useState(false);

  const handleQuillChange = (content, _, __, editor) => {
    setQuillValue(content);
    const text = editor.getText().trim();
    const words = text.split(/\s+/);
    const count = words.filter((word) => word !== "").length;
    setWordCount(count);
  };

  const togglePublishAccordion = () => {
    setPublishAccordionOpen(!publishAccordionOpen);
  };

  const toggleCategoryAccordion = () => {
    setCategoryAccordionOpen(!categoryAccordionOpen);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-3">
        <h1 className="text-black text-2xl mb-4">Add New Post</h1>
        <div>
          <form className="flex flex-col md:flex-row gap-9">
            {/* Add Title & React Quill */}
            <div className="flex flex-col gap-6 md:w-2/3">
              <div className="form-control">
                <input
                  type="text"
                  name="postTitle"
                  className="py-3 bg-white border border-gray-300 px-2 placeholder:text-2xl text-2xl placeholder:text-gray-500 text-black rounded-sm"
                  placeholder="Add title"
                />
              </div>

              <div>
                <ReactQuill
                  theme="snow"
                  value={quillValue}
                  onChange={handleQuillChange}
                  className="h-96 bg-white"
                  modules={{
                    toolbar: [
                      [{ header: [1, 2, 3, 4, false] }],
                      ["bold", "italic", "underline", "strike", "blockquote"],
                      [{ color: [] }],
                      [{ align: [] }],
                      [
                        { list: "ordered" },
                        { list: "bullet" },
                        { indent: "-1" },
                        { indent: "+1" },
                      ],
                      ["link", "image"],
                      ["clean"],
                    ],
                  }}
                  formats={[
                    "header",
                    "bold",
                    "italic",
                    "underline",
                    "strike",
                    "blockquote",
                    "list",
                    "bullet",
                    "indent",
                    "link",
                    "image",
                  ]}
                />
                <div className="text-red-600 flex items-center gap-1 pl-2">
                  <p className="text-black">Word Count:</p> {wordCount}
                </div>
              </div>
            </div>

            <div className="md:w-1/3 flex flex-col gap-3">
              <div
                className={`collapse-arrow w-full rounded-none select-none ${
                  publishAccordionOpen ? "collapse-open" : "collapse-close"
                }`}
              >
                <div
                  onClick={togglePublishAccordion}
                  className="collapse-title text-xl font-medium bg-white border border-gray-400"
                >
                  <h1 className="text-black">Publish</h1>
                </div>
                <div
                  className={`collapse-content border border-gray-400 ${
                    publishAccordionOpen ? "open" : ""
                  }`}
                >
                  <div className="flex flex-row justify-between mt-4">
                    <button className="px-4 py-1 border border-green-600 bg-transparent hover:bg-green-600 text-green-600 hover:text-white font-medium">
                      Save Draft
                    </button>

                    <button className="px-4 py-1 border border-blue-600 bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white font-medium">
                      Publish
                    </button>

                    <button className="px-4 py-1 border border-red-600 bg-transparent hover:bg-red-600 text-red-600 hover:text-white font-medium">
                      Move to Trash
                    </button>
                  </div>
                </div>
              </div>

              <div
                className={`collapse-arrow w-full rounded-none select-none ${
                  categoryAccordionOpen ? "collapse-open" : "collapse-close"
                }`}
              >
                <div
                  onClick={toggleCategoryAccordion}
                  className="collapse-title text-xl font-medium bg-white border border-gray-400"
                >
                  <h1 className="text-black">Categories</h1>
                </div>
                <div
                  className={`collapse-content border border-gray-400 ${
                    categoryAccordionOpen ? "open" : ""
                  }`}
                >
                  <div className="mt-4">
                    <div className="mb-2">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className="checkbox checkbox-success"
                        />
                        <p className="text-black text-lg font-medium">
                          Category 1
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className="checkbox checkbox-success"
                        />
                        <p className="text-black text-lg font-medium">
                          Category 2
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className="checkbox checkbox-success"
                        />
                        <p className="text-black text-lg font-medium">
                          Category 3
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className="checkbox checkbox-success"
                        />
                        <p className="text-black text-lg font-medium">
                          Category 4
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className="checkbox checkbox-success"
                        />
                        <p className="text-black text-lg font-medium">
                          Category 5
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className="checkbox checkbox-success"
                        />
                        <p className="text-black text-lg font-medium">
                          Category 6
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className="checkbox checkbox-success"
                        />
                        <p className="text-black text-lg font-medium">
                          Category 7
                        </p>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-200">
                      <Link
                        to="/dashboard/categories"
                        className="hover:underline underline-offset-4"
                      >
                        <h1 className="text-blue-500 text-lg">
                          All Categories
                        </h1>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewPost;
