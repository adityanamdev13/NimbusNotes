import React from "react";
import { FaCloud, FaLock, FaMobileAlt } from "react-icons/fa";
import Feature from "../Components/Feature";
import Hero from "../Components/Hero";
import Step from "../Components/Step";
import FAQItem from "../Components/FAQItem";
import Testimonial from "../Components/Testimonial";
import { Helmet } from 'react-helmet';

const HomePage = () => {
  return (
    <div className="bg-[#0b0b0b] min-h-screen text-white">
       <Helmet>
       <title>NimbusNotes | Home</title>
      </Helmet>
      <main className="container mx-auto ">
        <Hero />
        <section className="py-16  bg-[#141414] mx-10 rounded-xl">
          <div className="px-8">
            <h3 className="text-3xl font-bold text-center mb-12">
              Why Choose Nimbus Notes?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Feature
                icon={<FaCloud className="text-5xl mb-4 " />}
                title="Cloud Sync"
                description="Access your notes from any device, anytime."
              />
              <Feature
                icon={<FaLock className="text-5xl mb-4" />}
                title="Secure"
                description="Your notes are encrypted and safe with us."
              />
              <Feature
                icon={<FaMobileAlt className="text-5xl mb-4" />}
                title="Mobile Friendly"
                description="Take notes on the go with our web-app."
              />
            </div>
          </div>
        </section>
        <section className="py-16">
          <h3 className="text-3xl font-bold text-center mb-12">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Step
              number="1"
              title="Sign Up"
              description="Create your free account in seconds."
            />
            <Step
              number="2"
              title="Create Notes"
              description="Start writing and organizing your thoughts."
            />
            <Step
              number="3"
              title="Access Anywhere"
              description="Sync and access your notes from any device."
            />
          </div>
        </section>

        <section className="py-16 mx-8 border-t border-gray-800 ">
          <h3 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Testimonial
              quote="Nimbus Notes has revolutionized the way I organize my thoughts. It's simply amazing!"
              author="Jane Doe, Writer"
            />
            <Testimonial
              quote="I love how I can access my notes from anywhere. It's perfect for my busy lifestyle."
              author="John Smith, Entrepreneur"
            />
          </div>
        </section>

        <section className="py-16 md:mx-72">
          <h3 className="text-3xl font-bold text-center mb-1 border-b border-gray-800 pb-4">
            Frequently Asked Questions
          </h3>
          <div>
            <FAQItem
              question="Is my data secure?"
              answer="Yes, we use industry-standard encryption to keep your notes safe and secure."
            />
            <FAQItem
              question="Can I access my notes offline?"
              answer="No, you cann't access  your notes offline."
            />
            <FAQItem
              question="Is there a limit to how many notes I can create?"
              answer="No, you can create as many notes as you want, even on our free plan."
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
