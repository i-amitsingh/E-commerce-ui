export default function Contact() {
  return (
    <div className=" mx-auto mt-4 bg-gray-100 h-screen w-screen">
      <h1 className="text-4xl font-bold text-gray-900 mb-4 pt-4 pl-6">
        Contact Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-4">
        <div className="bg-white rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-4">
              We'd love to hear from you. Feel free to reach out with any
              questions or feedback.
            </p>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-800 font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-800 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-800 font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <button
                onClick={() =>
                  alert(
                    "Thank you for your message. We'll get back to you as soon as possible."
                  )
                }
                type="submit"
                className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="bg-white  rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-600 mb-4 cursor-pointer">
              <strong>Email:</strong> contact@furniro.email.com
            </p>
            <p className="text-gray-600 mb-4 cursor-pointer">
              <strong>Phone:</strong> +91 9999999999
            </p>
            <p className="text-gray-600 mb-4 cursor-pointer">
              <strong>Address:</strong> A-37 Sahibabad, Civil Lines Prayagraj
              Uttar Pradesh India (211001)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
