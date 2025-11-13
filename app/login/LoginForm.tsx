"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";

type FormData = {
  gmail: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [loading, setLoading] = useState(false);
  const [errorsMessage, setErrorsMessage] = useState("");

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setErrorsMessage("");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <input
          type="email"
          className="w-full rounded-lg p-2 border border-gray-300 shadow-md focus:outline-none"
          placeholder="Email..."
          {...register("gmail", { required: "Please enter your gmail" })}
        />
        {errors.gmail && (
          <p className="text-red-500 text-sm">{errors.gmail.message}</p>
        )}
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="w-full rounded-lg p-2 border border-gray-300 shadow-md focus:outline-none"
          placeholder="Password..."
          {...register("password", { required: "Please enter your password" })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>
        <div className="text-right mt-1">
        <a href="#" className="text-gray-500 hover:text-gray-700">
          Forgot password?
        </a>
      </div>
      <div className="flex justify-center">
        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          {loading ? "Loading..." : "Login"}
        </button>
      </div>
    </form>
  );
}
