import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  // Show error message using toast
  const showError = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000, // Close after 3 seconds
    });
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const password = data.get("password");
    const photoURL = data.get("photoURL");
    console.log(name, email, password, photoURL);

    // Check password criteria
    if (password.length < 6) {
      showError("Password must be at least 6 characters.");
    } else if (!/[A-Z]/.test(password)) {
      showError("Password must contain at least one capital letter.");
    } else if (!/[!@#$%^&*]/.test(password)) {
      showError("Password must contain at least one special character.");
    } else {
      // If password meets criteria, attempt registration
      createUser(email, password)
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
          Sign Up
        </h2>
        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Email address"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Password"
            />
          </div>
          <div>
            <label
              htmlFor="photoURL"
              className="block text-sm font-medium text-gray-700"
            >
              Photo URL
            </label>
            <input
              id="photoURL"
              name="photoURL"
              type="text"
              required
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Photo URL"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <p className="text-gray-500">
                Already have an account?{" "}
                <Link
                  to="/signin"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            >
              Sign Up
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SignUp;
