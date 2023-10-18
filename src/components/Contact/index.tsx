import SectionContainer from "../ui/atoms/SectionContainer";

export default function Contact() {
  return (
    <SectionContainer id="contact" title="Contact">
      <p className="text-center text-gray-600 mb-4">
        Please contact me directly through phuonghuu71@gmail.com or through this
        form
      </p>

      <form action="" className="w-full">
        <div className="flex flex-col gap-y-2 mb-2">
          <label
            htmlFor="email"
            className="mx-2 dark:text-slate-400 text-gray-600 font-medium"
          >
            Email
          </label>
          <input
            type="text"
            id="Email"
            placeholder="Please type your email"
            className="border px-4 py-2 rounded-md w-full focus-visible:outline-none focus-visible:border-black"
          />
        </div>

        <div className="flex flex-col gap-y-2 mb-2">
          <label
            htmlFor="subject"
            className="mx-2 text-gray-600 dark:text-slate-400 font-medium"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            placeholder="Please type your subject"
            className="border px-4 py-2 rounded-md w-full focus-visible:outline-none focus-visible:border-black"
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <label
            htmlFor="message"
            className="mx-2 dark:text-slate-400 text-gray-600 font-medium"
          >
            Message
          </label>
          <textarea
            className="border px-4 py-2 rounded-md w-full focus-visible:outline-none focus-visible:border-black"
            id="message"
            placeholder="Your message"
            rows={10}
          />
        </div>
      </form>
    </SectionContainer>
  );
}
