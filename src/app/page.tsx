'use client'
import React from 'react';
import dynamic from 'next/dynamic';
const BookingButton = dynamic(() => import('@/components/BookingModal'), { ssr: false });
import { motion } from 'framer-motion';
import { CheckCircle, MessageCircle, Calendar, Shield, Award, MapPin, Phone } from 'lucide-react';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Ivyon Muthoni Wangari Therapy",
  "image": "https://www.ivyonwangare.com/photo.jpg",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Nairobi",
    "addressCountry": "KE"
  },
  "description": "Professional therapy and counseling services in Nairobi by Ivyon Muthoni Wangare.",
  "openingHours": "Mo-Fr 08:00-18:00",
  "telephone": "+254716319859"
};

// Inside your component return:
// JSON-LD will be injected inside the component return to avoid top-level JSX

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.2 } }
};

export default function TherapistPage() {
  
  const whatsappUrl = "https://wa.me/254716319859?text=Hello%20Ivyon,%20I%20would%20like%20to%20book%20a%20therapy%20session.";

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D3E33] selection:bg-[#2D3E33] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* --- FLOATING WHATSAPP --- */}
      <motion.a 
        href={whatsappUrl}
        target="_blank"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center gap-2"
      >
        <MessageCircle size={24} />
        <span className="hidden md:inline font-medium">Chat with Ivyon</span>
      </motion.a>

      {/* --- NAVIGATION --- */}
      <nav className="fixed w-full z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-serif font-bold tracking-tight">IVYON M. WANGARI</span>
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
            <a href="#about" className="hover:text-gray-500 transition">About</a>
            <a href="#credentials" className="hover:text-gray-500 transition">Credentials</a>
            <a href="#booking" className="hover:text-gray-500 transition">Book Now</a>
          </div>
        </div>
      </nav>

     

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex flex-col justify-center items-center px-6 text-center">
        {/* <motion.div {...fadeInUp}> */}
          <span className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6 block">Nairobi, Kenya</span>
          <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-tight">
            Empathy Starts <br /> <span className="italic font-light">With Being Heard.</span>
          </h1>
          <p className="max-w-2xl text-lg text-gray-600 mb-10 leading-relaxed">
            I am Ivyon Muthoni Wangari, a dedicated professional helping individuals navigate life's complexities through compassionate, evidence-based therapy.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#booking" className="bg-[#2D3E33] text-white px-10 py-5 rounded-full text-lg hover:bg-black transition-all shadow-lg shadow-green-900/10">
              Schedule a Consultation
            </a>
            <a href={whatsappUrl} className="border border-[#2D3E33] px-10 py-5 rounded-full text-lg hover:bg-[#2D3E33] hover:text-white transition-all">
              Direct WhatsApp
            </a>
          </div>
        {/* </motion.div> */}
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 bg-white px-6">
        <motion.div {...fadeInUp}>
  <h2 className="text-4xl text-center font-serif mb-6 text-[#2D3E33]">
    Healing is a Journey,  
    <span className="italic font-light"> Not a Destination.</span>
  </h2>
  
  <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
    <p>
      I am <strong>Ivyon Muthoni Wangari</strong>, a compassionate therapist based in Nairobi, 
      dedicated to helping you navigate the complexities of life with clarity and resilience. 
      In a world that often demands we "just keep going," I provide a rare space to pause, 
      breathe, and be truly heard.
    </p>

    <p>
      My practice is built on the foundation of <strong>unconditional positive regard</strong>. 
      Whether you are dealing with the weight of anxiety, navigating relationship transitions, 
      or seeking to heal from past trauma, my approach is tailored to your unique rhythm. 
      I combine evidence-based Cognitive Behavioral Therapy (CBT) with person-centered 
      techniques to ensure that our work is both practical and deeply transformative.
    </p>

    <p className="font-medium text-[#2D3E33]">
      "My mission is to walk alongside you as you rediscover your inner strength and 
      reclaim your narrative."
    </p>
  </div>

  {/* Localized Trust Markers */}
  <div className="mt-10 grid grid-cols-2 gap-6 border-t border-gray-100 pt-8">
    <div>
      <h4 className="font-bold text-[#2D3E33] mb-1">Cultural Competence</h4>
      <p className="text-sm text-gray-500">Deep understanding of the Kenyan social and family landscape.</p>
    </div>
    <div>
      <h4 className="font-bold text-[#2D3E33] mb-1">Flexible Sessions</h4>
      <p className="text-sm text-gray-500">Offering both in-person sessions in Nairobi and secure online therapy.</p>
    </div>
  </div>
</motion.div>
      </section>

      {/* --- CREDENTIALS SECTION --- */}
      <section id="credentials" className="py-24 bg-[#F4F1ED] px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Professional Accreditation</h2>
          <p className="text-gray-500">Expertise backed by global and local certifications.</p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8"
        >
          {[
            { title: "Clinical Psychology", body: " Degree in Clinical Psychology", icon: <Award /> },
            { title: "KCPA Accredited", body: "Proud member of the Kenya Counseling and Psychological Association.", icon: <Shield /> },
            { title: "Therapist", body: "Certified Specialist in Trauma-Informed Care and PTSD recovery.", icon: <Award /> },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-[#FDFBF7] rounded-full flex items-center justify-center mb-6 text-green-800">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="services" className="py-20 px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-serif mb-12 text-center text-[#2D3E33]">Specialized Services</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        "Individual Counseling",
        "Trauma Recovery (PTSD)",
        "Anxiety & Depression",
        "Couples & Marriage Therapy",
        "Grief & Loss Support",
        "Stress Management",
        "Adolescent Therapy",
        "Workplace Wellness"
      ].map((service, i) => (
        <div key={i} className="p-6 border border-gray-100 rounded-xl hover:bg-[#FDFBF7] transition">
          <CheckCircle className="text-green-700 mb-4" size={20} />
          <h3 className="font-bold text-[#2D3E33]">{service}</h3>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* --- BOOKING SECTION --- */}
      <section id="booking" className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-[#2D3E33] rounded-[3rem] p-12 md:p-20 text-center text-white">
          <motion.div {...fadeInUp}>
            <Calendar className="mx-auto mb-8 opacity-50" size={48} />
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Ready to begin?</h2>
            <p className="text-green-100 text-lg mb-10 opacity-80">
              Booking your first session is a brave step. Select a time that works for you or message me directly to discuss your needs.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
             
              <BookingButton />
              <a href="mailto:contact@ivyonwangaeri.com" className="border border-white/30 px-10 py-5 rounded-full font-bold hover:bg-white/10 transition-all">
                Send an Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-gray-100 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-serif font-bold text-xl">Ivyon Muthoni Wangari</h3>
            <p className="text-gray-400 text-sm mt-2">© 2026 Professional Therapy Services. All rights reserved.</p>
          </div>
          <div className="flex gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin size={16} /> <span className="text-sm">Nairobi, Kenya</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} /> <span className="text-sm">+254 716 319 859</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}