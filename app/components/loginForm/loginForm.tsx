"use client";

import React, { useEffect } from "react";
import { Stack, TextInput, PasswordInput, Button, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { z } from "zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("loginData")) {
      router.replace("/");
    }
  }, [router]);

  // Zod schema
  const loginSchema = z.object({
    email: z.string().email("Please enter a valid email"),
    password: z.string().min(6, "Passwords do not match. Please try again."),
  });

  type LoginSchemaType = z.infer<typeof loginSchema>;

  const form = useForm<LoginSchemaType>({
    initialValues: { email: "", password: "" },
    validate: (values) => {
      const result = loginSchema.safeParse(values);

      if (!result.success) {
        const errors = {
          email: result.error.flatten().fieldErrors.email?.[0],
          password: result.error.flatten().fieldErrors.password?.[0],
        };

        if (errors.email) toast.error(errors.email);
        else if (errors.password) toast.error(errors.password);

        return errors;
      }

      return {};
    },
  });

  const handleLogin = (values: LoginSchemaType) => {
    console.log("Login Values:", values);
    localStorage.setItem("loginData", JSON.stringify(values));
    toast.success("Login successful!");

    setTimeout(() => {
      router.replace("/");
    }, 2000);
  };

  return (
    <>
      <Stack mx="auto" className="w-full">
        <form onSubmit={form.onSubmit(handleLogin)}>
          <Stack>
            <TextInput
              label="Email"
              placeholder="Enter Email Address"
              {...form.getInputProps("email")}
              style={{ color: "#364152", fontWeight: "500" }}
            />
            <PasswordInput
              label="Password"
              placeholder="Enter Password"
              {...form.getInputProps("password")}
              style={{ color: "#364152", fontWeight: "500" }}
            />
            <Button
              type="submit"
              fullWidth
              className="manrope-font"
              style={{
                backgroundColor: "#FF8A3D",
                color: "black",
                borderRadius: "8px",
              }}
            >
              Login
            </Button>
          </Stack>

          {/* Already have account */}
          <div className="flex justify-center mt-4">
            <Text size="sm" c="#697586">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-[#FF8A3D] font-semibold">
                Signup
              </Link>
            </Text>
          </div>
        </form>
      </Stack>

      {/* Toast notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
        aria-label="Toast notifications"
      />
    </>
  );
};

export default LoginForm;
