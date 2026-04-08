function Contact() {
  return (
      <section id="contact" className="bg-slate-900 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-100">Contact</h2>
          <p className="mt-4 text-slate-400">
            Send me a message and I will reply soon.
          </p>

          <form className="mt-10 space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
            />
            <textarea
              rows="5"
              placeholder="Your message"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-violet-500 focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="rounded-full bg-blue-500 px-6 py-3 font-medium text-white transition hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
  );
}

export default Contact;