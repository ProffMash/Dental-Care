import React, { useState } from 'react';
import { Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Message sent:', formData);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 flex flex-col md:flex-row bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      {/* Content */}
      <div className="md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-700 mb-4">We'd love to hear from you! Please fill out the form to get in touch with us. Whether you have a question, feedback, or need assistance, we're here to help.</p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Fill out your email address so we can get back to you.</li>
          <li>Provide a subject to help us understand the context of your message.</li>
          <li>Write your message in detail so we can assist you better.</li>
        </ul>
      </div>

      {/* Form */}
      <div className="md:w-1/2">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-gray-700 font-medium">
              <Mail size={18} />
              <span>Email Address</span>
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-gray-700 font-medium">
              <MessageSquare size={18} />
              <span>Subject</span>
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="What's this about?"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-gray-700 font-medium">
              <MessageSquare size={18} />
              <span>Message</span>
            </label>
            <textarea
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 h-32 resize-none"
              placeholder="How can we help you?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-200 font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}