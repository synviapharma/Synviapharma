"use client";
import ContactHeading from "@/components/ContactHeading";
import ContactHero from "@/components/ContactHero";
import ContactUsForm from "@/components/ContactUsForm";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <section>
        <ContactHero />
      </section>
      <section>
        <ContactHeading />
      </section>
      <section>
        <ContactUsForm />
      </section>
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24610.420379903877!2d72.53346029363804!3d23.09272098135621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9cb250f37723%3A0x27de8effab4879ed!2sMarengo%20CIMS%20Hospital!5e0!3m2!1sen!2sin!4v1734764725158!5m2!1sen!2sin"
          width="100%"
          height="500"
          // style="border:0;"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* <Map address="1600 Amphitheatre Parkway, Mountain View, CA" /> */}
      </section>
    </>
  );
};

export default ContactPage;
