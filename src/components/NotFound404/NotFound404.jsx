import { Link } from "react-router-dom";

const NotFound404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
        404 Not Found
      </h1>
      <p className="text-gray-600 text-lg">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className="text-blue-500 mt-4 hover:underline">
        Go back to the Home Page
      </Link>
    </div>
  );
};

export default NotFound404;
