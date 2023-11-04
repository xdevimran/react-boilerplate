import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";

const Login = () => {
  const { loginUser, user } = UseAuth();
  console.log(user);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const userInfo = { email, password };
    console.log(userInfo);
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
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
              className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              autoComplete="current-password"
              required
              className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Password"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <p className="text-gray-600">
                {`${
                  /* If the user doesn't have an account, show the "Sign up" link */
                  "Don't have an account? "
                }`}
                <Link
                  to="/signup"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-4">
          <p className="text-center text-sm text-gray-500">Or sign in with</p>
          <div className="mt-2 flex justify-center">
            <button
              type="button"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
