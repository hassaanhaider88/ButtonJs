import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Contact() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');
  var naviate = useNavigate()
  const handleFormSubmit = (e) => {
    e.preventDefault();
    toast.success('form Submit Sucessfully')
    setName('');
    setEmail('');
    setMessage('');
    naviate('/')
  }
  return (
    <div className="min-h-screen flex items-center py-10 justify-center px-4">
      <div className="w-full max-w-lg bg-[#000000a4]  rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-200 text-center">
          Contact Us
        </h1>
        <p className="text-gray-300 text-center mt-2">
          Got a question about ButtonJS? Want to suggest a new button design?
          Let’s talk!
        </p>

        <form className="mt-6 space-y-4" onSubmit={(e)=>handleFormSubmit(e)}>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              value={Name}
              onChange={(e)=>setName(e.target.value)}
              className="w-full text-white px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#48CAE4]"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={Email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full px-4 py-2 border text-white border-gray-300 rounded-lg focus:outline-none focus:border-[#48CAE4]"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Message
            </label>
            <textarea
              placeholder="Tell us more..."
              rows="4"
              value={Message}
              onChange={(e)=>setMessage(e.target.value)}
              className="w-full px-4 py-2 border text-white border-gray-300 rounded-lg focus:outline-none focus:border-[#48CAE4] resize-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-lg px-4 py-2 font-semibold text-white bg-[#48CAE4] hover:bg-indigo-600 shadow-[0_2px_10px_rgba(0,0,0,0.2)] transition duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          Or contact us directly at 
          <span
          onClick={()=>window.open('https://hassaan-haider.netlify.app')}
            className="text-[#48CAE4] ml-1 font-medium cursor-pointer hover:underline"
          >
            hassaanhaider.dev@proton.me
          </span>
        </div>
      </div>
    </div>
  );
}
