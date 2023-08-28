import React from 'react';
import Header from './header';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import axios from "axios";
import { toast } from 'react-toastify';
import Footer from './Footer';


interface FormData {
    name: string;
    email: string;
    password: string;
}

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().required('Email is required').email('Invalid email format'),
    password: yup.string().required('password is required')
});

const signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const router = useRouter();
    const onSubmit = async (data: FormData) => {
        try {
            const signData = await axios.post("http://localhost:3000/auth/login", data)
            if (signData.data) {
                router.push("/components/login");
            }
        } catch (error) {
            console.error(error);
            toast.error("User Email Already Created")
        }
    };
    return (
        <>
            <Header />
            <section className="text-gray-600 body-font relative justify-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="px-5 flex sm:flex-nowrap flex-wrap justify-center">
                        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col w-full md:py-8 mt-8 md:mt-0">
                            <h1 className="text-3xl font-bold text-orange-500 mb-2 ">
                                Sign Up
                            </h1>
                            <div className="relative mb-4">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                                    Username
                                </label>
                                <input
                                    {...register('name')}
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="username"
                                    autoComplete="off"
                                    className="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded"
                                />
                                {errors.name && <span>{errors.name.message}</span>}
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                                    UserEmail
                                </label>
                                <input
                                    {...register('email')}
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="useremail"
                                    autoComplete="off"
                                    className="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded"
                                />
                                {errors.email && <span>{errors.email.message}</span>}
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="password" className="leading-7 text-sm text-gray-600">
                                    Password
                                </label>
                                <input
                                    {...register('password')}
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="userpassword"
                                    autoComplete="off"
                                    className="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded"
                                />
                                {errors.password && <span>{errors.password.message}</span>}
                            </div>
                            <button type='submit' className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-lg focus:outline-none shadow">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </section>
            <Footer />
        </>
    )
}

export default signup;