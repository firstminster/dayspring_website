import React from 'react'
// import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { FaArrowRight } from 'react-icons/fa';

const ContactForm = () => {
    // const dispatch = useDispatch();
    // const { isLoading, status, isSuccess, message } = useSelector(
    //   (state) => state.contact
    // );

    // useForm
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm();

    // submit handler
    const onSubmit = (data: any) => {
        //   dispatch(sendMessage(data));
        reset();
    };

    // if (isLoading) {
    //   return <Loader />;
    // }

    return (
        <section className="w-[500px] flex flex-col items-center xl:items-start xl:mr-[100px]">
            <div className="flex flex-col items-center xl:items-start">
                <h2 className="text-[32px] font-bold tracking-tight text-gray-900">
                    Contact Us
                </h2>
                <p className="text-lg mt-[17px]">Reach out to us here!</p>
            </div>
            {/* Form section */}
            <div className="mt-8">
                {/* <div className="App"> */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="">
                        <label className="block text-[15px] lg:text-base font-normal text-jet">
                            Your Name
                        </label>
                        <input
                            type="text"
                            // name="name"
                            placeholder="Your Name"
                            {...register("name", {
                                required: "Please name is required.",
                            })}
                            className={`block w-[320px] md:w-[495px] h-[50px] appearance-none rounded-[10px] border border-quick-silver px-3 py-2 placeholder-quick-silver shadow-sm focus:border-blue-primary focus:outline-none focus:ring-blue-primary sm:text-sm ${errors.name ? "border-red-500" : null
                                }`}
                        />
                        {/* {errors.name && <p className="errorMsg">{errors.name.message}</p>} */}
                    </div>
                    <div className="">
                        <label className="block text-[15px] lg:text-base font-normal text-jet">
                            Email Address
                        </label>
                        <input
                            type="email"
                            // name="email"
                            placeholder="username@domain.com"
                            {...register("email", {
                                required: "Please email is required.",
                                pattern: {
                                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                    message: "Email is not valid",
                                },
                            })}
                            className={`block w-[320px] md:w-[495px] h-[50px] appearance-none rounded-[10px] border border-quick-silver px-3 py-2 placeholder-quick-silver shadow-sm focus:border-blue-primary focus:outline-none focus:ring-blue-primary sm:text-sm ${errors.email ? "border-red-500" : null
                                }`}
                        />
                        {/* {errors.email && <p className="errorMsg">{errors.email.message}</p>} */}
                    </div>

                    <div className="">
                        <label className="block text-[15px] lg:text-base font-normal text-jet">
                            Phone number
                        </label>
                        <input
                            type="tel"
                            // name="phoneNumber"
                            placeholder="Phone number"
                            {...register("phoneNumber", {
                                required: "Please phone number is required.",
                                pattern: {
                                    value:
                                        // eslint-disable-next-line no-useless-escape
                                        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                                    message:
                                        "Phone number is not valid (i.e add a dail code eg: +234, +1, +46)",
                                },
                            })}
                            className={`block w-[320px] md:w-[495px] h-[50px] appearance-none rounded-[10px] border border-quick-silver px-3 py-2 placeholder-quick-silver shadow-sm focus:border-blue-primary focus:outline-none focus:ring-blue-primary sm:text-sm ${errors.phoneNumber ? "border-red-500" : null
                                }`}
                        />
                        {errors.phoneNumber && (
                            <p className="errorMsg w-[320px] lg:w-full">
                                {/* {errors.phoneNumber.message} */}
                            </p>
                        )}
                    </div>

                    <div className="">
                        <label className="block w-[320px] lg:w-full text-[15px] lg:text-base font-normal text-jet">
                            How did you discover about Dayspring Academy?
                        </label>
                        <input
                            type="text"
                            // name="discoverMedium"
                            placeholder="I heard about Dayspring from"
                            {...register("discoverMedium", {
                                required: "Please field is required.",
                            })}
                            className={`block w-[320px] md:w-[495px] h-[50px] appearance-none rounded-[10px] border border-quick-silver px-3 py-2 placeholder-quick-silver shadow-sm focus:border-blue-primary focus:outline-none focus:ring-blue-primary sm:text-sm ${errors.discoverMedium ? "border-red-500" : null
                                }`}
                        />
                        {/* {errors.discoverMedium && (
                            <p className="errorMsg">{errors.discoverMedium.message}</p>
                        )} */}
                    </div>
                    <div className="">
                        <label className="block text-[15px] lg:text-base font-normal text-jet">
                            What enquiries would you like to make?
                        </label>
                        <textarea
                            // type="text"
                            // rows="7"
                            // cols="33"
                            // name="message"
                            placeholder="Enter message here"
                            {...register("message", {
                                required: "Please field is required.",
                            })}
                            className={`block w-[320px] md:w-[495px] h-auto appearance-none rounded-[10px] border border-quick-silver px-3 py-2 placeholder-quick-silver shadow-sm focus:border-blue-primary focus:outline-none focus:ring-blue-primary sm:text-sm ${errors.message ? "border-red-500" : null
                                }`}
                        />
                        {/* {errors.message && (
                            <p className="errorMsg">{errors.message.message}</p>
                        )} */}
                    </div>

                    <button
                        // disabled={isLoading}
                        type="submit"
                        className="flex items-center w-[320px] md:w-[495px] h-[49px] justify-center rounded-[70px] border border-transparent bg-blue-primary py-2 px-4 text-lg font-normal text-white shadow-sm hover:bg-medium-orchid focus:outline-none focus:ring-0 focus:ring-blue-primary focus:ring-offset-2 transition-all duration-300 ease-out"
                    >
                        <span className="mr-[11px]">Submit</span>
                        <FaArrowRight className="w-[13.54px] h-[11.89px]" />
                    </button>
                </form>
                {/* </div> */}
            </div>
        </section>
    )
}

export default ContactForm