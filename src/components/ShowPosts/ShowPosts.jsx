export const ShowPosts = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {posts.map((p, i) => (
          <div key={i} className="card bg-base-100 card-md border border-gray-600">
            <div className="card-body">
              <h2 className="card-title">
                Author: {p?.author} {i}
              </h2>
              <p>Description: {p?.description}</p>
              <div className="card-actions">
                <button className="btn btn-info">Edit</button>
                <button
                  className="btn btn-error"
                  onClick={() => {
                    posts.splice(i, 1);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
