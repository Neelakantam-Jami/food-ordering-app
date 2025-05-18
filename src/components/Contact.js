const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
    <div className="bg-white shadow-xl rounded-lg p-8 max-w-xl w-full">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Us</h2>
      <form action="#" method="POST" className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 placeholder-gray-400" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 placeholder-gray-400" />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
          <input type="text" id="subject" name="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 placeholder-gray-400" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea id="message" name="message" rows={4} required className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 placeholder-gray-400 resize-none" defaultValue={""} />
        </div>
        <div>
          <button type="submit" className="w-full bg-orange-400 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-500 hover:cursor-pointer transition duration-200">
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Contact;