
"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBookOpen, FaEye, FaEyeSlash } from "react-icons/fa";
import { Button, Description, FieldError, Input, Label, TextField } from "@heroui/react";
import { GrGoogle } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { authClient, signUp } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


const RegisterPage = () => {

    const router = useRouter()

    const handleRegister = async (e) => {
        e.preventDefault();
        console.log(e.currentTarget)


        const formData = new FormData(e.currentTarget)
        // console.log(formData)

        const registerData = Object.fromEntries(formData.entries())
        console.log(registerData)


        const { data, error } = await signUp.email({
            ...registerData,
        })

        console.log({data, error})

        if(data?.user){
            toast.success("Registration successful! Please login")
            router.push("/login")
        }
        else{
            toast.error(error?.message)
        }

        
    }




    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50 flex items-center justify-center py-20">
            <div className="w-full max-w-md">



                <div className="flex items-center justify-center mb-5">
                    <h1 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">Register</h1>
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/80 border border-slate-100 p-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-1">Create your account</h1>
                    <p className="text-sm text-gray-500 mb-6">
                        Register to get started and access your account
                    </p>

                    <form className="flex flex-col gap-4" onSubmit={handleRegister}>
                        {/* Name */}
                        <TextField
                            isRequired
                            name="name"
                            type="text"
                        >
                            <Label>Name</Label>
                            <Input placeholder="John Doe" />
                            <FieldError />
                        </TextField>

                        {/* Photo URL */}
                        <TextField
                            isRequired
                            name="image"
                            type="url"
                        >
                            <Label>Photo URL</Label>
                            <Input placeholder="https://example.com/photo.jpg" />
                            <FieldError />
                        </TextField>


                        {/* Email */}
                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Please enter a valid email address";
                                }
                                return null;
                            }}
                        >
                            <Label>Email</Label>
                            <Input placeholder="john@example.com" />
                            <FieldError />
                        </TextField>

                        {/* Password */}
                        <TextField
                            isRequired
                            minLength={6}
                            name="password"
                            type="password"
                            validate={(value) => {
                                if (value.length < 8) {
                                    return "Password must be at least 6 characters";
                                }
                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }
                                if (!/[0-9]/.test(value)) {
                                    return "Password must contain at least one number";
                                }
                                return null;
                            }}
                        >
                            <Label>Password</Label>
                            <Input placeholder="Enter your password" />
                            <Description>Must be at least 6 characters with 1 uppercase and 1 number</Description>
                            <FieldError />
                        </TextField>

                        {/* register */}
                        <button
                            id="register"
                            type="submit"
                            className="mt-1 w-full py-2.5 rounded-xl font-semibold text-sm text-white
                        bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98]
                        shadow-md shadow-indigo-200 hover:shadow-lg hover:shadow-indigo-300
                        transition-all duration-200 disabled:opacity-60 flex items-center justify-center gap-2"
                        >
                            Register
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-5">
                        <div className="flex-1 h-px bg-gray-100" />
                        <span className="text-xs text-gray-400">or continue with</span>
                        <div className="flex-1 h-px bg-gray-100" />
                    </div>

                    {/* Social */}
                    <Button
                        variant="outline"
                        className="w-full h-11 flex items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 hover:text-black transition-all duration-200 shadow-sm"
                    >
                        <FcGoogle className="text-lg" />
                        <span className="font-medium">Continue with Google</span>
                    </Button>

                </div>

                {/* Login link */}
                <p className="text-center text-sm text-gray-500 mt-6">
                    Already have an account?{" "}
                    <Link href="/login" className="font-semibold text-indigo-600 hover:underline">
                        Login
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default RegisterPage;