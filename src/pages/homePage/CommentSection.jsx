import toast from "react-hot-toast";
import { useAddCommentMutation } from "../../redux/features/allApis/commentApi/commentApi";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const CommentSection = ({ newsId }) => {
  const { user } = useContext(AuthContext);
  const [addComment] = useAddCommentMutation();
  //   console.log(user);

//   add comment to server 
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    const commentInfo = {
      newsId: newsId,
      name: user?.displayName || "anonymous",
      image: user?.photoURL || "",
      email: user?.email || "",
      comment: comment,
      date: new Date(),
    };
    addComment(commentInfo)
      .then((result) => {
        if (result.data.insertedId) {
          toast.success("Comment added");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

//   
  return (
    <div>
      <p className="py-4 text-xl">কমেন্ট বক্স </p>
      <hr />
      <div className="flex flex-row justify-between items-center py-4">
        <p className="text-lg">0 comments</p>
        <div className="text-lg">
          <label className="pe-2">Sort by:</label>
          <select>
            <option value="">Oldest</option>
            <option value="">Newest</option>
          </select>
        </div>
      </div>
      <hr />
      <div className="flex flex-row justify-between items-start gap-3 py-2">
        <img src="https://placehold.co/80x75" alt="" className="w-1/12" />
        <form
          onSubmit={handleCommentSubmit}
          className="w-11/12 flex flex-col gap-2 items-end justify-center"
        >
          <textarea
            name="comment"
            id=""
            className="w-full  px-3 py-4 border border-gray-400"
            placeholder="Add a comment"
          />
          <button
            type="submit"
            className="bg-orange-400 text-white inline-block py-2 px-4"
          >
            Add comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentSection;
