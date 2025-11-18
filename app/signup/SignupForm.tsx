"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import TextInput from "@/components/inputs/TextInput";
type FormData = {
  username: string;
  birthDate: string;
  phoneNumber: string;
  gmail: string;
  password: string;
  confirmPassword: string;
};

export default function SignupForm() {
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextInput
          placehoder="Username..."
          type="text"
          name="username"
          register={register}
          required="Please enter your username"
        />
        <TextInput
          placehoder="Birth Date..."
          type="date"
          name="birthDate"
          register={register}
          required="Please choose your birth date"
        />
      </div>
      <TextInput
        placehoder="PhoneNumber..."
        type="tel"
        name="phoneNumber"
        register={register}
        required="Please enter your phone number"
      />
      <TextInput
        placehoder="Gmail..."
        type="text"
        name="gmail"
        register={register}
        required="Please enter your gmail"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextInput
          placehoder="Password..."
          type="password"
          name="password"
          register={register}
          required="Please enter your password"
        />
        <TextInput
          placehoder="Confirm Password..."
          type="password"
          name="confirmPassword"
          register={register}
          required="Please confirm your password"
        />
      </div>
      <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
        {loading ? "Loading..." : "Sign Up"}
      </button>
    </form>
  );
}
