import { CheckCircle2, ShieldCheck, Award, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../config';

export default function About() {
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
            src="https://picsum.photos/seed/plumbingabout/1920/600"
            alt="About Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">About Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Your trusted local plumbing experts with over {BUSINESS_INFO.yearsOfExperience} years of dedicated service.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative"
            >
              <div className="absolute -inset-4 bg-slate-100 rounded-3xl transform -rotate-3 z-0"></div>
              <img
                src="https://picsum.photos/seed/plumbingteam/800/1000"
                alt="Our Team"
                className="relative z-10 rounded-2xl shadow-xl object-cover w-full h-[500px]"
                referrerPolicy="no-referrer"
              />
              {/* Badge */}
              <div className="absolute -bottom-6 -right-6 z-20 bg-blue-600 text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="text-4xl font-black mb-1">{BUSINESS_INFO.yearsOfExperience}</div>
                <div className="text-sm font-medium text-blue-100 uppercase tracking-wider">Years Experience</div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Setting the Standard in Plumbing Excellence
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Founded over {BUSINESS_INFO.yearsOfExperience} years ago, {BUSINESS_INFO.name} started with a simple mission: to provide honest, reliable, and high-quality plumbing services to our local community.
                </p>
                <p>
                  We understand that plumbing issues can be stressful and disruptive. That's why our team is committed to arriving promptly, diagnosing the problem accurately, and providing transparent solutions without hidden costs.
                </p>
                <p>
                  Every technician on our team is fully licensed, insured, and undergoes continuous training to stay updated with the latest plumbing technologies and techniques.
                </p>
              </div>
              
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-blue-600 shrink-0" />
                  <span className="font-bold text-slate-900">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-blue-600 shrink-0" />
                  <span className="font-bold text-slate-900">Satisfaction Guaranteed</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-blue-600 shrink-0" />
                  <span className="font-bold text-slate-900">Expert Technicians</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-8 h-8 text-blue-600 shrink-0" />
                  <span className="font-bold text-slate-900">Upfront Pricing</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-16 tracking-tight"
          >
            Our Core Values
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Integrity</h3>
              <p className="text-slate-600">We believe in honest work, transparent pricing, and never recommending services you don't need.</p>
            </motion.div>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Quality</h3>
              <p className="text-slate-600">We use premium materials and proven techniques to ensure our repairs and installations last.</p>
            </motion.div>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Community</h3>
              <p className="text-slate-600">As a local business, we treat every customer like a neighbor, because that's exactly what you are.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
