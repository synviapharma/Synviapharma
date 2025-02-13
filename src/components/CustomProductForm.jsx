"use client";
import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CountrySelect, PhonecodeSelect } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import { toast } from "react-toastify";

// Validation schema
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  phone: Yup.string()
    .matches(/^\d+$/, "Phone number must be numeric")
    .required("Phone number is required"),
  country: Yup.string().required("Country is required"),
  productDescription: Yup.string().required("Product description is required"),
});

const CustomProductForm = () => {
  const [countryId, setCountryId] = useState(0);

  const handleCountryChange = (e, setFieldValue) => {
    setCountryId(e.id);
    setFieldValue("country", e.name);
    setFieldValue("phoneCode", e.phone_code);
  };

  const handlePhoneCodeChange = (e, setFieldValue) => {
    setFieldValue("phoneCode", e.phone_code);
  };

  const handleSubmit = async (values, { resetForm }) => {
  console.log("🚀 ~ handleSubmit ~ values:", values)

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        phone: values.phone,
        country: values.country,
        phoneCode: values.phoneCode,
        productDescription: values.productDescription,
      }),
    });

    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    toast.success("Message sent successfully!");

    resetForm();
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold text-[#051a11] mb-4">
        Get Customized Product
      </h2>
      <Formik
        initialValues={{
          name: "",
          phone: "",
          country: "",
          phoneCode: "",
          productDescription: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className="space-y-6">
            {/* Row for Name, Phone Code & Phone, and Country */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                  className="w-full border border-gray-300 rounded-md p-[0.675rem] focus:ring-[#50a9b4] focus:outline-none"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-600 text-sm"
                />
              </div>

              {/* Phone Code & Phone Field */}
              <div>
                <label
                  className="block text-gray-700 font-medium mb-1"
                  htmlFor="name"
                >
                  Phone
                </label>
                <div className="grid grid-cols-6 gap-3">
                  <div className="col-span-2">
                    <PhonecodeSelect
                      countryid={countryId}
                      onChange={(e) => handlePhoneCodeChange(e, setFieldValue)}
                      className="w-full border border-gray-300 rounded-md p-[0.675rem] focus:ring-[#50a9b4] focus:outline-none"
                    />
                  </div>
                  <div className="col-span-4">
                    <Field
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="Your phone"
                      className="w-full border border-gray-300 rounded-md p-[0.675rem] focus:ring-[#50a9b4] focus:outline-none"
                    />
                  </div>
                </div>
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-600 text-sm"
                />
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
                  className="w-full border border-gray-300 rounded-md p-[0.675rem] focus:ring-[#50a9b4] focus:outline-none"
                />
                <ErrorMessage
                  name="country"
                  component="div"
                  className="text-red-600 text-sm"
                />
              </div>
            </div>

            {/* Product Description Field */}
            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="productDescription"
              >
                Product Description
              </label>
              <Field
                as="textarea"
                id="productDescription"
                name="productDescription"
                rows="4"
                placeholder="Enter customized product details"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-[#50a9b4] focus:outline-none"
              />
              <ErrorMessage
                name="productDescription"
                component="div"
                className="text-red-600 text-sm"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#50a9b4] text-white py-2 px-4 rounded-md hover:bg-[#307983] transition focus:outline-none focus:ring-2 focus:ring-[#50a9b4]"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CustomProductForm;
