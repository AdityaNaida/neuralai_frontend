import { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const [viewPassword, setViewPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (formData.password.length > 6 || formData.password.length === 6) {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/user/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        const data = await res.json();
        console.log("Server Response:", data);

        if (res.ok && data && data.token) {
          localStorage.setItem("UserSession", data.token);
          toast.success("Login successful!", {
            autoClose: 600,
            position: "bottom-right",
          });

          setIsSubmitting(false);
          window.location.reload();

          setFormData({
            email: "",
            password: "",
          });
        } else {
          toast.error(`${data.message}`, {
            autoClose: 1000,
            position: "bottom-right",
          });
          setIsSubmitting(false);
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("Error connecting to server.", {
          autoClose: 1000,
          position: "bottom-right",
        });
      }
    } else {
      toast.error("Password min 6 characters.", {
        autoClose: 600,
        position: "bottom-right",
      });
      setIsSubmitting(false);
    }
  };
  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] px-3 py-20 flex md:justify-center text-left flex-col gap-2">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 px-3  max-w-md mx-auto w-full"
      >
        <h1 className="text-3xl font-semibold">Sign In</h1>
        <p className=" md:text-base text-gray-600">
          Welcome back you've been missed
        </p>

        <div className="flex flex-col gap-1 mt-4">
          <label htmlFor="email" className="font-medium">
            Email ID<span className="text-red-500">*</span>
          </label>
          <input
            className="text-sm border border-gray-300 h-12 px-3 focus:outline-blue-400"
            placeholder="you@example.com"
            type="email"
            required
            name="email"
            id="email"
            style={{ borderRadius: `8px` }}
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div className="flex flex-col gap-1 relative">
          <label htmlFor="password" className="font-medium">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            className="text-sm border border-gray-300 h-12 px-3 focus:outline-blue-400"
            placeholder="min 6 characters"
            type={viewPassword ? "text" : "password"}
            required
            style={{ borderRadius: `8px` }}
            name="password"
            id="password"
            onChange={handleChange}
            value={formData.password}
          />

          {viewPassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 absolute top-[55%] text-gray-500 right-2 cursor-pointer"
              onClick={() => {
                setViewPassword((prev) => !prev);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 absolute top-[55%] text-gray-500 right-2 cursor-pointer"
              onClick={() => {
                setViewPassword((prev) => !prev);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          )}
        </div>

        <button
          style={{ borderRadius: `10px` }}
          disabled={isSubmitting}
          className="bg-gradient-to-br from-purple-500 to-blue-500 py-3 text-white mt-4 cursor-pointer"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              {" "}
              Login{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                className="animate-spin text-white"
              >
                <path
                  fill="currentColor"
                  d="M12 2.25c-5.384 0-9.75 4.366-9.75 9.75s4.366 9.75 9.75 9.75v-2.437A7.312 7.312 0 1 1 19.313 12h2.437c0-5.384-4.366-9.75-9.75-9.75"
                ></path>
              </svg>
            </div>
          ) : (
            <>Login</>
          )}
        </button>
        <p className="text-sm mt-4">
          Don&apos;t have an account?{" "}
          <NavLink
            to={"/signup"}
            className={`text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 font-medium`}
          >
            Signup
          </NavLink>{" "}
        </p>
      </form>
    </div>
  );
}
