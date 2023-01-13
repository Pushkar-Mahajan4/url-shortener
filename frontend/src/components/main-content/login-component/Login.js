import "./Login.css";
import { Form, redirect } from "react-router-dom";
import { createUser } from "../../firebase-util/Firebase";

const Login = () => {
  return (
    <section className="flex items-center justify-center min-h-full mt-12 w-full gradient-form">
      <div className="flex items-center justify-center w-1/2 bg-white shadow-md mb-11 rounded ">
        <div className="flex w-1/2 p-4 h-full text-white">
          <img
            src="https://cdn.dribbble.com/users/230290/screenshots/15128882/media/4175d17c66f179fea9b969bbf946820f.jpg?compress=1&resize=400x300"
            alt="Logo Here"
          />
        </div>
        <div className="flex w-1/2 p-4 h-full text-white">
          <Form method="post" action="login/check-user">
            <div className="mb-4 ">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                name="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                name="username"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                name="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                name="password"
                id="password"
                type="password"
                placeholder="******************"
                required
              />
              <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Create account
              </a>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Login;

export const loginAction = async ({ request }) => {
  const data = await request.formData();
  const signupUser = await createUser(
    data.get("username"),
    data.get("password")
  );

  console.log(signupUser);

  return redirect("/user/dashboard");
};
