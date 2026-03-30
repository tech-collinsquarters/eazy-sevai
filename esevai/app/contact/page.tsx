'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    try {
      // Send to Zendesk API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      const data = await response.json()
      
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
      
    } catch (error) {
      console.error('Contact form error:', error)
      setStatus('error')
      setErrorMessage('Failed to send message. Please try calling us directly.')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1e3a5f' }}>
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We're here to help you with all your government documentation needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Email Card */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#0066b3' }}>
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-2" style={{ color: '#1e3a5f' }}>Email Us</h3>
                  <a 
                    href="mailto:esevaiservices11@vysegroup.com" 
                    className="text-gray-600 hover:text-[#0066b3] transition break-all"
                  >
                    esevaiservices11@vysegroup.com
                  </a>
                  <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#14b8a6' }}>
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-2" style={{ color: '#1e3a5f' }}>Call Us</h3>
                  <a 
                    href="tel:+919944633029" 
                    className="text-gray-600 hover:text-[#0066b3] transition text-lg font-semibold"
                  >
                    +91 99446 33029
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Mon-Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#f0b42f' }}>
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-2" style={{ color: '#1e3a5f' }}>Visit Us</h3>
                  <address className="text-gray-600 not-italic text-sm leading-relaxed">
                    Villa 246, SNP Signature Villas,<br />
                    Nedugundram, New Perungalathur,<br />
                    Chennai - 600127
                  </address>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 border-2 border-[#0066b3]/20">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 flex-shrink-0" style={{ color: '#0066b3' }} />
                <div>
                  <h3 className="font-bold mb-3" style={{ color: '#1e3a5f' }}>Business Hours</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <span className="font-medium">Monday - Friday:&nbsp;</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Saturday:</span>
                      <span>9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sunday:</span>
                      <span className="text-red-600">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6" style={{ color: '#0066b3' }} />
                <h2 className="text-2xl font-bold" style={{ color: '#1e3a5f' }}>
                  Send Us a Message
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0066b3] focus:outline-none transition"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email and Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0066b3] focus:outline-none transition"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0066b3] focus:outline-none transition"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0066b3] focus:outline-none transition"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="service">Service Information</option>
                    <option value="pricing">Pricing Question</option>
                    <option value="support">Technical Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0066b3] focus:outline-none transition resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full px-8 py-4 text-white rounded-lg font-semibold text-lg hover:opacity-90 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    style={{ background: 'linear-gradient(135deg, #0066b3 0%, #14b8a6 100%)' }}
                  >
                    {status === 'sending' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : status === 'success' ? (
                      <>
                        ✓ Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>

                {/* Success Message */}
                {status === 'success' && (
                  <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg">
                    <p className="text-green-800 text-sm font-medium">
                      ✓ Thank you for contacting us! We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {/* Error Message */}
                {status === 'error' && (
                  <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                    <p className="text-red-800 text-sm font-medium">
                      ✗ {errorMessage}
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Additional Info */}
            <div className="mt-6 p-6 bg-blue-50 rounded-lg border-2 border-[#0066b3]/20">
              <p className="text-sm text-gray-700">
                <strong className="text-[#1e3a5f]">Need immediate assistance?</strong> Call us directly at{' '}
                <a href="tel:+919944633029" className="font-semibold text-[#0066b3] hover:underline">
                  +91 99446 33029
                </a>{' '}
                or email{' '}
                <a href="mailto:sevai@vysegroup.com" className="font-semibold text-[#0066b3] hover:underline">
                  sevai@vysegroup.com
                </a>
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}