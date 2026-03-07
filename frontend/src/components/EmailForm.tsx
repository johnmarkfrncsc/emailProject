import { useState } from "react";
import type { emailPayload } from "../services/emailService";
import { sendEmail } from "../services/emailService";
import SuccessModal from "./SuccessModal";

const payloadField = {
  to: "",
  subject: "",
  body: "",
};

const EmailForm = () => {
  const [formData, setFormData] = useState(payloadField);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e,
  ) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await sendEmail(formData);
      setFormData(payloadField);
      setShowModal(true);
    } catch (error) {
      console.log("Error sending an email", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6">
      <div className="w-full max-w-lg">
        <div className="mb-10">
          <p className="text-zinc-500 text-xs tracking-[0.3em] uppercase mb-2">
            Compose
          </p>
          <h1 className="text-white text-4xl font-light tracking-tight">
            New Message
          </h1>
          <div className="mt-4 h-px bg-linear-to-r from-violet-500 to-transparent"></div>
        </div>

        <form action="" onSubmit={handleFormSubmit} className="space-y-5">
          <div className="group">
            <label className="block text-zinc-500 text-xs tracking-widest uppercase mb-2">
              To
            </label>
            <input
              type="text"
              name="to"
              value={formData.to}
              onChange={handleInputChange}
              placeholder="recipient@example.com"
              className="w-full bg-zinc-900 border border-zinc-800 group-hover:border-zinc-600 focus:border-violet-500 text-white placeholder-zinc-600 rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200"
            />
          </div>

          <div className="group">
            <label className="block text-zinc-500 text-xs tracking-widest uppercase mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="What's this about?"
              className="w-full bg-zinc-900 border border-zinc-800 group-hover:border-zinc-600 focus:border-violet-500 text-white placeholder-zinc-600 rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200"
            />
          </div>

          <div className="group">
            <label className="block text-zinc-500 text-xs tracking-widest uppercase mb-2">
              Message
            </label>
            <textarea
              name="body"
              value={formData.body}
              onChange={handleInputChange}
              placeholder="Write your message here..."
              rows={6}
              className="w-full bg-zinc-900 border border-zinc-800 group-hover:border-zinc-600 focus:border-violet-500 text-white placeholder-zinc-600 rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200 resize-none"
            ></textarea>
          </div>

          <button
            className="w-full bg-violet-600 hover:bg-violet-500 text-white font-medium rounded-lg px-6 py-3 text-sm tracking-widest uppercase transition-all duration-200"
            disabled={isLoading}
          >
            {isLoading ? "Sending Message Now..." : "Send Message"}
          </button>
        </form>
        <SuccessModal isOpen={showModal} isClose={() => setShowModal(false)} />
      </div>
    </div>
  );
};

export default EmailForm;
