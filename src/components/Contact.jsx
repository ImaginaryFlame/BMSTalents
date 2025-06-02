import React, { useState } from 'react';
import { client } from '../lib/sanity';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const doc = {
        _type: 'contact',
        ...formData,
        date: new Date().toISOString(),
        status: 'unread'
      };

      await client.create(doc);
      setStatus({ loading: false, success: true, error: null });
      setFormData({ nom: '', email: '', message: '' });
    } catch (error) {
      setStatus({ loading: false, success: false, error: error.message });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto ">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">

              Contactez-nous
            </h2>
            <p className="text-xl text-gray-600">
              Nous sommes là pour répondre à toutes vos questions
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {status.success && (
              <div className="mb-8 p-4 bg-green-50 text-green-700 rounded-lg">
                Votre message a été envoyé avec succès !
              </div>
            )}
            {status.error && (
              <div className="mb-8 p-4 bg-red-50 text-red-700 rounded-lg">
                Une erreur est survenue : {status.error}
              </div>
            )}
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
                    Votre nom
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Votre email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Votre message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Comment pouvons-nous vous aider ?"
                />
              </div>

              <button 
                type="submit"
                disabled={status.loading}
                className={`w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 px-8 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${status.loading ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {status.loading ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 