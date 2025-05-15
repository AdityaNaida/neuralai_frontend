import { useState } from "react";
import { toast } from "react-toastify";

export default function Signup() {
  const [viewPassword, setViewPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
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

    if (formData.password.length > 6) {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/user/register`,
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

        if (res.ok) {
          // alert("Registration successful!");
          localStorage.setItem("UserSession", data.token);
          toast.success("Registration successful!", {
            autoClose: 600,
            position: "bottom-right",
          });

          setIsSubmitting(false);
          console.log(data);

          setFormData({
            name: "",
            email: "",
            password: "",
          });
        } else {
          // alert(data.message || "Something went wrong.");
          toast.error("Something went wrong.", {
            autoClose: 600,
            position: "bottom-right",
          });
          setIsSubmitting(false);
        }
      } catch (error) {
        console.error("Error:", error);
        // alert("Error connecting to server");
        toast.error("Error connecting to server.", {
          autoClose: 600,
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
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] px-3 flex justify-center text-left flex-col gap-2">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2.5  max-w-md mx-auto w-full"
      >
        <h1 className="text-2xl font-medium">Get Started now</h1>
        <p className="text-sm md:text-base text-gray-600">
          Enter your credentials to access your account
        </p>
        <div className="flex flex-col gap-1 mt-4">
          <label htmlFor="name">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            className="text-sm border border-gray-300 h-10 px-2 focus:outline-blue-400"
            placeholder="John Doe"
            type="text"
            required
            style={{ borderRadius: `8px` }}
            name="name"
            id="name"
            onChange={handleChange}
            value={formData.name}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            className="text-sm border border-gray-300 h-10 px-2 focus:outline-blue-400"
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
          <label htmlFor="password">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            className="text-sm border border-gray-300 h-10 px-2 focus:outline-blue-400"
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
              className="size-5 absolute top-[55%] text-gray-500 right-2"
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
              className="size-5 absolute top-[55%] text-gray-500 right-2"
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
          className="bg-gradient-to-br from-purple-500 to-blue-500 py-2 text-white mt-4"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              {" "}
              Signup{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 animate-spin"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </div>
          ) : (
            <>Signup</>
          )}
        </button>
      </form>
    </div>
  );
}
