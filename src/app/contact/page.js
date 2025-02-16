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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d421.79288774696795!2d72.82141610913816!3d23.171699585797153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e78a4abc1e805%3A0xfece82c1b2f5f458!2z4KqP4KquLuCqnOCrgC4g4KqF4Kqu4KuA4KqoIOCqleCri-CqruCrjeCqquCqsuCrh-CqleCrjeCqtw!5e0!3m2!1sen!2sin!4v1739689183174!5m2!1sen!2sin"
          width="100%"
          height="500"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default ContactPage;
