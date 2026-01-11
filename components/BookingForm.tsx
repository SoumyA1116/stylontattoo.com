
import React, { useState } from 'react';
import { STUDIO_DATA } from '../constants';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', style: '', placement: '', date: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi ${STUDIO_DATA.name}, I'm interested in a piece.\n\n*Name:* ${formData.name}\n*Contact:* ${formData.phone}\n*Style:* ${formData.style}\n*Placement:* ${formData.placement}\n*Date:* ${formData.date}`;
    window.open(`https://wa.me/${STUDIO_DATA.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const styles = ['Realism', 'Minimalist', 'Illustrative', 'Traditional', 'Ornamental', 'Abstract'];

  return (
    <section id="booking" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 md:gap-16">
          <div className="lg:col-span-2 space-y-6 text-center lg:text-left">
             <span className="accent-font text-[#d4af37] text-xl italic tracking-wider">Start Your Journey</span>
             <h2 className="heading-font text-5xl md:text-6xl font-light uppercase text-white leading-tight">Project Inquiry</h2>
             <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed px-4 lg:px-0">
               Share your vision, and we'll translate it into permanent form. Every great piece begins with a conversation.
             </p>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 glass-morphism p-6 md:p-10 rounded-2xl">
              <input
                type="text" required placeholder="Full Name"
                className="bg-transparent border-b border-white/10 py-3 focus:border-[#d4af37] outline-none transition-all placeholder:text-gray-700 placeholder:uppercase placeholder:text-[10px] text-sm"
                value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input
                type="tel" required placeholder="Contact Number"
                className="bg-transparent border-b border-white/10 py-3 focus:border-[#d4af37] outline-none transition-all placeholder:text-gray-700 placeholder:uppercase placeholder:text-[10px] text-sm"
                value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
              <select
                className="bg-transparent border-b border-white/10 py-3 focus:border-[#d4af37] outline-none transition-all text-gray-500 uppercase text-[10px] tracking-widest bg-black"
                value={formData.style} onChange={(e) => setFormData({...formData, style: e.target.value})} required
              >
                <option value="">Style Preference</option>
                {styles.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              <input
                type="text" placeholder="Placement Idea" required
                className="bg-transparent border-b border-white/10 py-3 focus:border-[#d4af37] outline-none transition-all placeholder:text-gray-700 placeholder:uppercase placeholder:text-[10px] text-sm"
                value={formData.placement} onChange={(e) => setFormData({...formData, placement: e.target.value})}
              />
              <div className="sm:col-span-2">
                <label className="block text-[8px] uppercase tracking-[0.4em] text-[#d4af37] mb-2">Preferred Date</label>
                <input
                  type="date" required
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:border-[#d4af37] outline-none text-gray-500 uppercase text-[10px] tracking-widest"
                  value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>
              <button
                type="submit"
                className="btn-active sm:col-span-2 py-5 bg-[#d4af37] text-black font-bold uppercase tracking-[0.3em] text-[10px] rounded-sm shadow-2xl hover:bg-white transition-all mt-6"
              >
                Book Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
