import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES, BUSINESS_INFO } from '../config';

export default function Services() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="flex flex-col w-full"
    >
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://picsum.photos/seed/plumbingservices/1920/600"
            alt="Services Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Comprehensive, professional plumbing solutions for residential and commercial properties.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  key={service.id} 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 hover:border-blue-600 transition-all duration-300 group flex flex-col h-full"
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-md">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[1, 2, 3].map((i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span>Professional {service.title.toLowerCase()} solution {i}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9+]/g, '')}`}
                    className="mt-auto inline-flex items-center justify-center gap-2 w-full bg-slate-100 hover:bg-blue-600 text-slate-900 hover:text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Request Service
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white border-t border-slate-200">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Don't see what you're looking for?</h2>
          <p className="text-lg text-slate-600 mb-10">
            We handle all types of plumbing issues. Contact us today to discuss your specific needs and get a free estimate.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-blue-600/20"
            >
              <Phone className="w-5 h-5" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
