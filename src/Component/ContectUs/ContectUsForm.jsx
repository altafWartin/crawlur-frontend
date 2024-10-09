import React, { useState } from 'react';

const ContactUsForm = () => {
    // State for form inputs
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        message: ''
    });

    // State for errors
    const [errors, setErrors] = useState({});

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Validate email using regex
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Validate phone number using regex
    const validatePhoneNumber = (phoneNumber) => {
        const phoneRegex = /^\d{10}$/; // Simple 10-digit validation
        return phoneRegex.test(phoneNumber);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        // Check full name
        if (!formData.fullName) {
            newErrors.fullName = 'Full Name is required';
        }

        // Check email
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        // Check phone number
        if (!formData.phoneNumber) {
            newErrors.phoneNumber = 'Phone Number is required';
        } else if (!validatePhoneNumber(formData.phoneNumber)) {
            newErrors.phoneNumber = 'Invalid phone number';
        }

        // Check message
        if (!formData.message) {
            newErrors.message = 'Message is required';
        }

        // Set errors or submit the form
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Submit form (you can replace this with actual submission logic)
            alert('Form submitted successfully');
        }
    };

    return (
        <section className="self-stretch pb-10 flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full mt-[-41.688rem] text-left text-[2rem] text-dark-blue font-h5-22-bold">
            <div className=" flex flex-row items-start justify-start relative max-w-full">
                <div className="flex-1 shadow-lg rounded-t-9xl rounded-b-none bg-white-color flex flex-col items-start justify-start pt-[3.062rem] px-[5.125rem] pb-[2.5rem] box-border gap-[2.187rem] max-w-full z-[3]">
                    <div className="flex flex-col items-start justify-start gap-[0.75rem] max-w-full">
                        <h2 className="m-0 w-[31.563rem] text-[24px] relative text-inherit leading-[2.125rem] font-bold font-inherit inline-block max-w-full z-[4]">
                            Contact Us!
                        </h2>
                        <b className="relative text-[1.125rem] text-[14px] leading-[1.625rem] font-p-18-bold text-darkgray z-[4]">
                            Please fill out the form below to get in touch.
                        </b>
                    </div>

                    <form onSubmit={handleSubmit} className="self-stretch flex  text-[14px] flex-col items-start justify-start gap-[1rem] max-w-full">
                        {/* Full Name */}
                        <div className="self-stretch flex flex-col items-start justify-start gap-[0.437rem] max-w-full">
                            <b className="relative leading-[1.625rem] inline-block min-w-[5.375rem] z-[4]">Full Name</b>
                            <div
                                className={`self-stretch rounded-md box-border flex flex-row items-start justify-start py-[0.75rem] px-[1rem] max-w-full z-[4] border-[1px] border-solid ${errors.fullName ? 'border-red-500' : 'border-gainsboro-200'
                                    }`}
                            >
                                <input
                                    className="w-[14.125rem] [border:none] [outline:none] font-semibold font-p-18-bold bg-[transparent] h-[1.625rem] relative leading-[1.625rem] text-darkgray text-left inline-block p-0 z-[5]"
                                    placeholder="Please enter your full name"
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>


                        {/* Email */}
                        <div className="self-stretch flex flex-col items-start justify-start gap-[0.437rem] max-w-full">
                            <b className="relative leading-[1.625rem] inline-block min-w-[3.438rem] z-[4]">E-mail</b>
                            <div className="self-stretch rounded-md box-border flex flex-row items-start justify-start py-[0.75rem] px-[1rem] max-w-full z-[4] border-[1px] border-solid border-gainsboro-200">
                                <input
                                    className="w-[12.563rem] [border:none] [outline:none] font-semibold font-p-18-bold bg-[transparent] h-[1.625rem] relative leading-[1.625rem] text-darkgray text-left inline-block p-0 z-[5]"
                                    placeholder="Please enter your e-mail"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            {errors.email && <span className="text-red-500">{errors.email}</span>}
                        </div>

                        {/* Phone Number */}
                        <div className="self-stretch flex flex-col items-start justify-start gap-[0.437rem] max-w-full">
                            <b className="relative leading-[1.625rem] inline-block min-w-[7.875rem] z-[4]">Phone Number</b>
                            <div className="self-stretch rounded-md box-border flex flex-row items-start justify-start py-[0.75rem] px-[1rem] max-w-full z-[4] border-[1px] border-solid border-gainsboro-200">
                                <input
                                    className="w-[17rem] [border:none] [outline:none] font-semibold font-p-18-bold bg-[transparent] h-[1.625rem] relative leading-[1.625rem] text-darkgray text-left inline-block p-0 z-[5]"
                                    placeholder="Please enter your mobile number"
                                    type="text"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                />
                            </div>
                            {errors.phoneNumber && <span className="text-red-500">{errors.phoneNumber}</span>}
                        </div>

                        {/* Message */}
                        <div className="self-stretch flex flex-col items-start justify-start gap-[0.437rem] max-w-full">
                            <b className="relative leading-[1.625rem] inline-block min-w-[7.25rem] z-[4]">Your Message</b>
                            <div className="self-stretch rounded-md box-border flex flex-row items-start justify-start pt-[0.875rem] px-[1rem] pb-[1.5rem] max-w-full z-[4] text-darkgray border-[1px] border-solid border-gainsboro-200">
                                <textarea
                                    className="w-full [border:none] [outline:none] font-semibold font-p-18-bold bg-[transparent] h-[7.5rem] relative leading-[1.625rem] text-darkgray text-left inline-block p-0 z-[5]"
                                    placeholder="Please enter your message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>
                            {errors.message && <span className="text-red-500">{errors.message}</span>}
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="cursor-pointer [border:none] py-[0.75rem] px-[1.875rem] bg-dark-blue rounded overflow-hidden flex flex-row items-start justify-start z-[4] hover:bg-steelblue-100">
                            <b className="relative text-[1.313rem] leading-[1.625rem] inline-block font-h5-22-bold text-white-color text-center min-w-[4rem]">Submit</b>
                        </button>
                        {Object.keys(errors).length > 0 && <span className="text-red-500">Please fix the above errors</span>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUsForm;
