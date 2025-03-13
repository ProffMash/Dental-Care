import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, ChevronRight, CheckCircle } from 'lucide-react';

export default function Appointment() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    date: '',
    time: ''
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Appointment requested:', formData);
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      {/* Instructions */}
      <div className="md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
        <h2 className="text-2xl font-bold mb-4">Appointment Instructions</h2>
        <p className="text-gray-700 mb-4">Please fill out the form to schedule your appointment. Make sure to provide accurate information so we can contact you if needed.</p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Step 1: Enter your full name and contact number.</li>
          <li>Step 2: Select your preferred date and time.</li>
          <li>Step 3: Review your appointment details and confirm.</li>
        </ul>
      </div>

      {/* Form */}
      <div className="md:w-1/2">
        <div className="flex justify-between items-center mb-6">
          {[1, 2, 3].map((num) => (
            <div key={num} className={`flex items-center ${step >= num ? 'text-blue-600' : 'text-gray-400'}`}>
              {step > num ? <CheckCircle size={20} /> : <span className="font-medium">{num}</span>}
              {num !== 3 && <ChevronRight size={20} />}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-700 font-medium">
                  <User size={18} />
                  <span>Full Name</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-700 font-medium">
                  <Phone size={18} />
                  <span>Contact Number</span>
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  placeholder="+1 (555) 000-0000"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-700 font-medium">
                  <Calendar size={18} />
                  <span>Preferred Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-700 font-medium">
                  <Clock size={18} />
                  <span>Preferred Time</span>
                </label>
                <input
                  type="time"
                  name="time"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center">
              <p className="text-lg font-medium">Review your appointment details:</p>
              <p><strong>Name:</strong> {formData.fullName}</p>
              <p><strong>Contact:</strong> {formData.contactNumber}</p>
              <p><strong>Date:</strong> {formData.date}</p>
              <p><strong>Time:</strong> {formData.time}</p>
            </div>
          )}

          <div className="flex justify-between">
            {step > 1 && (
              <button type="button" onClick={prevStep} className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400">Back</button>
            )}
            {step < 3 ? (
              <button type="button" onClick={nextStep} className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">Next</button>
            ) : (
              <button type="submit" className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700">Confirm</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}