"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const callbackUrl = "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const target = e.target;
    const email = target.email.value;
    const password = target.password.value;

    try {
      const res = await signIn("credentials", {
        email: email,
        password: password,
        callbackUrl,
      });
      if (!res?.error) {
        router.push(callbackUrl);
      } else {
        alert("invalid email or password");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="relative py-6 mx-auto flex-auto">
        <form
          id="login-form"
          className="space-y-6 relative py-6 mx-auto flex-auto"
          onSubmit={handleSubmit}
        >
          <input
            id="email"
            className="w-full border border-solid border-[#919EAB52] px-2 pb-2 pt-4 rounded-lg  placeholder:text-[#919EAB]"
            placeholder="Email"
          />
          <input
            id="password"
            className="w-full border border-solid border-[#919EAB52] px-2 pb-2 pt-4 rounded-lg  placeholder:text-[#919EAB]"
            placeholder="Password"
          />
        </form>
        <div className="flex-col items-center justify-center space-y-4 mt-6">
          <button
            form="login-form"
            className="w-full text-center bg-blue-500 border-0 py-1 px-3 focus:outline-none  rounded text-base text-white mt-4 md:mt-0"
            type="submit"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
