const Comments = () => {
  // Example data array
  const data = [
    {
      name: "John Doe",
      email: "john@example.com",
      date: "2024-03-28",
      comment: "Great article!",
      newsId: "123",
    },
    // Add more objects as needed
  ];

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Comment</th>
            <th className="px-4 py-2">News ID</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.email}</td>
              <td className="border px-4 py-2">{item.date}</td>
              <td className="border px-4 py-2">{item.comment}</td>
              <td className="border px-4 py-2">{item.newsId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Comments;
