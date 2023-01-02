import "./Login.css";

const Login = () => {
  return (
    // <main className="login-container">
    //   <div className="content-container">
    //     <div className="login-header">
    //       <h3>Login Page</h3>
    //     </div>
    //     <form>
    //       <div className="input-box">
    //         <div className="email-box">
    //           <input type="text" placeholder="Email" />
    //         </div>
    //         <div className="password-box">
    //           <input type="password" placeholder="Password" />
    //         </div>
    //       </div>
    //       <div className="button-box">
    //         <button type="submit"> Login </button>
    //       </div>
    //     </form>
    //   </div>
    // </main>

      <section class="flex items-center justify-center min-h-full mt-12 w-full gradient-form">
        <div class="flex items-center justify-center w-1/2 bg-white shadow-md mb-11 rounded ">
          <div class="flex w-1/2 p-4 h-full text-white"> 
              <img src="https://cdn.dribbble.com/users/230290/screenshots/15128882/media/4175d17c66f179fea9b969bbf946820f.jpg?compress=1&resize=400x300"/>
          </div>
          <div class="flex w-1/2 p-4 h-full text-white"> 
              <form>
              <div class="mb-4 ">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                  Username
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
              </div>
              <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                  Password
                </label>
                <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                <p class="text-red-500 text-xs italic">Please choose a password.</p>
              </div>
              <div class="flex items-center justify-between">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Sign In
                </button>
                <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                  Create account
                </a>
              </div>
              </form>
          </div>  
        </div>
      </section>
  );
};

export default Login;
