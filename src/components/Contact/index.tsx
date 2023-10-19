"use client";

import React from "react";
import SectionContainer from "../ui/atoms/SectionContainer";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { validateEmail } from "@/helpers/EmailValidate";
import DynamicIcon from "../DynamicIcon";

export default function Contact() {
  const email_template = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const email_service = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const email_public_key = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const form = React.useRef<HTMLFormElement>(null);
  const [email, setEmail] = React.useState<string>("");
  const [subject, setSubject] = React.useState<string>("");
  const [text, setText] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (error !== "") toast.error(error);
  }, [error]);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === "" || !validateEmail(email)) {
      setError("Email is invalid.");
      return;
    }

    if (subject === "") {
      setError("Subject is invalid.");
      return;
    }

    if (text === "") {
      setError("Message is invalid.");
      return;
    }

    if (form.current) {
      setLoading(true);

      emailjs
        .sendForm(email_service, email_template, form.current, email_public_key)
        .then(
          () => {
            toast.success("You've successfully sent the email.");
            setLoading(false);
          },
          (err) => {
            setError(err.text);
          }
        );
    }
  };

  return (
    <SectionContainer id="contact" title="Contact">
      <p className="text-center text-gray-600 mb-4">
        Please contact me directly through phuonghuu71@gmail.com or through this
        form
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full flex flex-col items-end gap-y-2"
      >
        <div className="flex flex-col gap-y-2 w-full">
          <label
            htmlFor="user_email"
            className="mx-2 dark:text-slate-400 text-gray-600 font-medium"
          >
            Email
          </label>
          <input
            type="text"
            id="user_email"
            name="user_email"
            placeholder="Please type your email"
            className="border px-4 py-2 rounded-md w-full focus-visible:outline-none focus-visible:border-black"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-y-2 w-full">
          <label
            htmlFor="user_subject"
            className="mx-2 text-gray-600 dark:text-slate-400 font-medium"
          >
            Subject
          </label>
          <input
            type="text"
            id="user_subject"
            name="user_subject"
            placeholder="Please type your subject"
            className="border px-4 py-2 rounded-md w-full focus-visible:outline-none focus-visible:border-black"
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-y-2 w-full">
          <label
            htmlFor="message"
            className="mx-2 dark:text-slate-400 text-gray-600 font-medium"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your message"
            name="message"
            rows={10}
            className="border px-4 py-2 rounded-md w-full focus-visible:outline-none focus-visible:border-black"
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-black hover:bg-white hover:text-black border transition-colors uppercase font-medium text-white px-4 py-2 rounded-md w-36 flex justify-center"
        >
          {loading ? (
            <DynamicIcon
              icon="PlusCircleIcon"
              className="w-6 h-6 animate-spin"
            />
          ) : (
            "send"
          )}
        </button>
      </form>
    </SectionContainer>
  );
}
