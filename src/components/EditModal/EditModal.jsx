export const EditModal = ({ author }) => {
  if (author) {
    return (
      <div className="flex items-center justify-center mt-14">
        <form className="border p-6 border-gray-700 rounded-lg ">
          <h3 className="font-bold text-lg">Edit Post</h3>
          <div className="mt-2 space-y-2">
            {/* input to take author */}
            <input
              name="author"
              type="text"
              value={author.author}
              className="input w-full"
            />
            {/* input to take description */}
            <input
              name="description"
              type="text"
              value={author.description}
              className="input w-full"
            />
          </div>

          <button className="btn btn-info mt-2">Edit</button>
        </form>
      </div>
    );
  }
};
