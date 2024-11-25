export default function Contact() {
    return (
      <div className="bg-[#383636] h-[90vh] flex justify-center items-center animate-fadeIn">
        <div className="bg-[#131212] rounded-lg p-14 weight-16px animate-fadeInUp [box-shadow:0px_0px_20px_wheat] max-w-[90%] mx-auto">
          <h1 className="text-center mb-5 font-bold text-3xl text-white">Get in Touch</h1>
          <form className="flex flex-col">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1 font-bold text-white">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 font-bold text-white">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-1 font-bold text-white">Message:</label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full p-2 border border-gray-300 rounded resize-y"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded transition duration-300 hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
          <div className="flex justify-center mt-5">
            <a
              href="https://github.com/TayyabAli92"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <img src="/github.png" alt="github" className="w-10" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-tayyab-ali-121133339/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <img src="/linkedin.png" alt="linkedin" className="w-10" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=6155675898995"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <img src="/facebook.png" alt="facebook" className="w-10" />
            </a>
            <a
              href="mailto:tayyabali.personal@gmail.com"
              className="mx-2"
            >
              <img src="/gmail.png" alt="gmail" className="w-10" />
            </a>
          </div>
        </div>
      </div>
    );
  }
