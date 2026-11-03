import { useOutletContext } from "react-router-dom";
import React from "react";
import { useForm } from "react-hook-form";
import "./Register.css";
import { useNavigate } from "react-router-dom";

function Register() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const password = watch("password");

  
const onSubmit = async (data) => {
  try {
    if (data.password === data.confirmPassword) {
      if (setUserName) {
        setUserName(data.username);
      }

      console.log("Registration Details:", {
        fullName: data.fullName,
        username: data.username,
        email: data.email,
      });

      alert("Registration successful!");
      navigate("/");
    } else {
      alert("Passwords do not match");
    }
  } catch (error) {
    console.error("Registration failed:", error);
    alert("Something went wrong. Please try again.");
  }
};


  const navigate = useNavigate();
const { setUserName } = useOutletContext();



  return (
    <div className="register-page">
      <div className="register-container">

        <div className="register-logo">
          <img src="/images/logo.png" alt="ShopKart" />
        </div>

        <h2>Create Your Account</h2>

        <p className="register-subtitle">
          Register to start shopping with ShopKart
        </p>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>

          {/* Full Name */}
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>

            <input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              autoComplete="name"
              {...register("fullName", {
                required: "Full name is required",
                minLength: {
                  value: 2,
                  message: "Name must contain at least 2 characters",
                },
              })}
            />

            {errors.fullName && (
              <p className="form-error">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Username */}
          <div className="form-group">
            <label htmlFor="username">Username</label>

            <input
              id="username"
              type="text"
              placeholder="Choose a username"
              autoComplete="username"
              {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username must contain at least 3 characters",
                },
              })}
            />

            {errors.username && (
              <p className="form-error">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
            />

            {errors.email && (
              <p className="form-error">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">Password</label>

            <input
              id="password"
              type="password"
              placeholder="Create a password"
              autoComplete="new-password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />

            {errors.password && (
              <p className="form-error">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label htmlFor="confirmPassword">
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              type="password"
              placeholder="Re-enter your password"
              autoComplete="new-password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />

            {errors.confirmPassword && (
              <p className="form-error">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Registering..." : "Create Account"}
          </button>

        </form>

        <p className="login-text">
          Already have an account?{" "}
          <a href="/login">Login</a>
        </p>

      </div>
    </div>
  );
}

export default Register; 