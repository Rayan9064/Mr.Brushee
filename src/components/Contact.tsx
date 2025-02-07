import React from 'react';

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl mb-8">Tell us what's on your mind!</h2>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gray-400 focus:ring-0 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gray-400 focus:ring-0 transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gray-400 focus:ring-0 transition-colors"
                ></textarea>
              </div>
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-colors">
                Send
              </button>
            </form>
          </div>
          <div>
            <h2 className="text-2xl mb-8">FAQs</h2>
            <div className="space-y-4">
              {[
                'How to use the product?',
                'How can I add detergents safely?',
                'How does the system process work?',
                'What do I do to fill up detergent?',
                'What\'s our return policy'
              ].map((question, index) => (
                <div
                  key={index}
                  className="p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  {question}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;