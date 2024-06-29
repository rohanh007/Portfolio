import { useState, createElement, useRef } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();
  const [step, setStep] = useState(1);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY'
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          toast.success("Email sent successfully!");
          setStep(1);
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send email.");
        }
      );
  };

  return (
    <section className="bg-gray-50 text-gray-800" id="contact">
      <Toaster />
      <div className="container mx-auto px-5 py-14 flex flex-col lg:flex-row items-center min-h-screen">
        <div className="lg:w-1/2 mb-10 lg:mb-0 flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-4" data-aos="fade-down">{Contact.title}</h2>
          <h4 className="text-xl font-medium mb-10" data-aos="fade-down">{Contact.subtitle}</h4>
          <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
            <form  onSubmit={sendEmail}>
              {step === 1 && (
                <div data-aos="fade-up">
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2" htmlFor="from_name">Name</label>
                    <input
                      type="text"
                      name="from_name"
                      id="from_name"
                      placeholder="Your Name"
                      required
                      className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
              {step === 2 && (
                <div data-aos="fade-up">
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2" htmlFor="user_email">Email</label>
                    <input
                      type="email"
                      name="user_email"
                      id="user_email"
                      pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
                      placeholder="Your Email"
                      required
                      className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-1/2 bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600 transition mr-2"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="w-1/2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
              {step === 3 && (
                <div data-aos="fade-up">
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Your Message"
                      required
                      className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                    ></textarea>
                  </div>
                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-1/2 bg-gray-500 text-blue py-3 rounded-lg hover:bg-gray-600 transition mr-2"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="w-1/2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center items-center p-8 bg-blue-600 text-white" data-aos="fade-left">
          <div className="flex flex-col items-center gap-5">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 100}
                className="flex items-center gap-4 bg-white text-dark_primary p-4 rounded-lg shadow-lg w-full mb-4"
              >
                <div className="text-blue-600">{createElement(content.icon)}</div>
                <a
                  className="text-lg font-medium"
                  href={content.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
