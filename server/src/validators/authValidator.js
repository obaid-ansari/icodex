const { z } = require("zod");

// Signup Schema
const signupSchema = z.object({
  username: z
    .string({ required_error: "Username is required" })
    .trim()
    .min(3, { message: "Username must be at least 3 characters." })
    .max(50, { message: "Username must not be more than 50 characters." }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email format" }),

  phone: z
    .string({ required_error: "Phone number is required" })
    .regex(/^[0-9]{10}$/, { message: "Phone number must be 10 digits" }),

  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(100, { message: "Password must not exceed 100 characters" }),
});

// Login Schema
const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email format" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(100, { message: "Password must not exceed 100 characters" }),
});

module.exports = { signupSchema, loginSchema };
