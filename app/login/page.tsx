import LoginForm from "./LoginForm";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  return (
    <div className="bg-login flex min-h-screen items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full md:w-2/7 ">
        <h1 className="font-semibold text-4xl text-center mb-3">Wellcome</h1>
        <LoginForm />
        <div className="login-with">
          <p className="text-center mt-4 text-gray-500">Or login with</p>
          <div className="flex flex-row mt-2">
            <div className="flex justify-center gap-4 basis-1/2 mr-3">
              <button className="cursor-pointer flex items-center justify-center w-full space-x-2 hover:bg-blue-700 text-blue-700 hover:text-white p-2 rounded border border-gray-300">
                <FaFacebook size={20} />
                <span>Facebook</span>
              </button>
            </div>
            <div className="flex justify-center gap-4 basis-1/2">
              <button className="cursor-pointer flex items-center justify-center w-full space-x-2  p-2 rounded border border-gray-300">
                <FcGoogle size={20} />
                <span>Google</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex text-center justify-center text-gray-500 hover:text-gray-700 pt-4">Don't have an account? 
            <a href="#" className="underline">Sign up</a>
        </div>
      </div>
    </div>
  );
}
