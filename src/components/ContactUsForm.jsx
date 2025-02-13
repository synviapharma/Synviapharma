"use client";
import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
  PhonecodeSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Validation schema with Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^\d+$/, "Phone number must be numeric") // Ensure phone is numeric
    .required("Phone number is required"),
  country: Yup.string().required("Country is required"),
});

const ContactUsForm = () => {
  const [countryId, setCountryId] = useState(0);
  const [stateId, setStateId] = useState(0);
  const [isStateDisabled, setIsStateDisabled] = useState(true);
  const [isCityDisabled, setIsCityDisabled] = useState(true);

  const handleCountryChange = (e, setFieldValue) => {
    setCountryId(e.id);
    setStateId(0); // Reset state and city selections
    setIsStateDisabled(false);
    setIsCityDisabled(true);
    setFieldValue("country", e.name);
    setFieldValue("state", "");
    setFieldValue("city", "");
    setFieldValue("phoneCode", e.phone_code);
  };

  const handleStateChange = (e, setFieldValue) => {
    setStateId(e.id);
    setIsCityDisabled(false);
    setFieldValue("state", e.name);
    setFieldValue("city", ""); // Reset city when state changes
  };

  const handleCityChange = (e, setFieldValue) => {
    setFieldValue("city", e.name); // Update city in Formik state
  };

  const handlePhoneCodeChange = (e, setFieldValue) => {
    setFieldValue("phoneCode", e.phone_code); // Update phone code explicitly if needed
  };

  const handleSubmit = async (values, { resetForm }) => {
    // console.log("Form submitted values:", values);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      toast.success("Message sent successfully!");
      resetForm();
      setCountryId(0);
      setStateId(0);
      setIsStateDisabled(true);
      setIsCityDisabled(true);
    } catch (error) {
      toast.error("Error sending message");
      console.error(error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
     {/* <ToastContainer /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-700 mb-3">Contact</h2>
            <p className="text-gray-600">24/7 Support</p>
            <p className="text-gray-600">+91 70697 95648</p>
            <p className="text-gray-600">contact@mediimpact.com</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-700 mb-3">
              Corporate Office-India
            </h2>
            <p className="text-gray-600">
              203, Amrol Business Centre, <br />
              Vrundavan Colony, Near Navrang <br />
              School Six Roads, Navrangpura, <br />
              Ahmedabad-380009. (GUJARAT-INDIA)
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-700 mb-3">
              Manufacturing Facility-India
            </h2>
            <p className="text-gray-600">
              128/A, Phase 1 & 2, <br />
              G.I.D.C., Naroda, <br />
              Ahmedabad-382330. (GUJARAT-INDIA)
            </p>
          </div>
        </div>
        {/* Contact Form */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              country: "",
              state: "",
              city: "",
              phoneCode: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, errors, touched }) => (
              <Form className="space-y-4">
                {/* Name Field */}
                <div>
                  <label
                    className="block text-gray-700 font-medium mb-1"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-[#50a9b4] focus:outline-none"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    className="block text-gray-700 font-medium mb-1"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="name@domain.com"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-[#50a9b4] focus:outline-none"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label
                    className="block text-gray-700 font-medium mb-1"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <div className="flex items-center space-x-2">
                    <PhonecodeSelect
                      countryid={countryId}
                      onChange={(e) => handlePhoneCodeChange(e, setFieldValue)}
                      className="w-full border border-gray-300 rounded-md p-2 focus:ring-[#50a9b4] focus:outline-none"
                    />
                    <Field
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="Your phone number"
                      className="w-full border border-gray-300 rounded-md p-2 focus:ring-[#50a9b4] focus:outline-none"
                    />
                  </div>
                  {errors.phone && touched.phone && (
                    <div className="text-red-600 text-sm">{errors.phone}</div>
                  )}
                </div>

                {/* Country Select */}
                <div>
                  <label
                    className="block text-gray-700 font-medium mb-1"
                    htmlFor="country"
                  >
                    Country
                  </label>
                  <CountrySelect
                    onChange={(e) => handleCountryChange(e, setFieldValue)}
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-[#50a9b4] focus:outline-none"
                  />
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>

                {/* State Select */}
                <div>
                  <label
                    className="block text-gray-700 font-medium mb-1"
                    htmlFor="state"
                  >
                    State
                  </label>
                  <StateSelect
                    countryid={countryId}
                    onChange={(e) => handleStateChange(e, setFieldValue)}
                    placeHolder="Select State"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-[#50a9b4] focus:outline-none"
                    disabled={isStateDisabled}
                  />
                </div>

                {/* City Select */}
                <div>
                  <label
                    className="block text-gray-700 font-medium mb-1"
                    htmlFor="city"
                  >
                    City
                  </label>
                  <CitySelect
                    countryid={countryId}
                    stateid={stateId}
                    onChange={(e) => handleCityChange(e, setFieldValue)}
                    placeHolder="Select City"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-[#50a9b4] focus:outline-none"
                    disabled={isCityDisabled}
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    className="block text-gray-700 font-medium mb-1"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Message..."
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-[#50a9b4] focus:outline-none"
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#50a9b4] text-white py-2 px-4 rounded-md hover:bg-[#3ebc96] focus:outline-none focus:ring-2 focus:ring-[#50a9b4]"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
