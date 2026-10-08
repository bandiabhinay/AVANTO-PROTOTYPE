import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Car, CheckCircle, ArrowRight } from 'lucide-react';

export interface StepItem {
  number: number;
  badge: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
}

const steps: StepItem[] = [
  {
    number: 1,
    badge: 'Step 01',
    icon: MapPin,
    title: 'Set Your Pickup',
    description: 'Enter your location or let GPS find you automatically',
  },
  {
    number: 2,
    badge: 'Step 02',
    icon: Car,
    title: 'Choose Your Ride',
    description: 'Select from Auto, Mini, Sedan, or Premium options',
  },
  {
    number: 3,
    badge: 'Step 03',
    icon: CheckCircle,
    title: 'Enjoy the Ride',
    description: 'Track your captain in real-time and pay seamlessly',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  },
};

interface HowItWorksProps {
  className?: string;
  id?: string;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ className = '', id = 'how-it-works' }) => {
  return (
    <section id={id} className={`bg-white py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-[#111936] tracking-tight">
            How Avanto Works
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Get moving in 3 simple steps
          </p>
        </motion.div>

        {/* 3 Step Cards in Horizontal Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                <motion.div
                  variants={cardVariants}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="group bg-[#F5F7FC] rounded-2xl p-8 h-full flex flex-col border border-transparent hover:border-[#E53935]/20 hover:shadow-lg transition-all duration-300"
                >
                  {/* Top Bar with Step Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold bg-[#E53935]/10 text-[#E53935] border border-[#E53935]/20">
                      {step.badge}
                    </span>
                    <span className="text-xs font-bold text-gray-400">
                      0{step.number} / 03
                    </span>
                  </div>

                  {/* Large Icon in Circle */}
                  <div className="w-16 h-16 rounded-full bg-[#E53935]/10 text-[#E53935] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-8 h-8" strokeWidth={2.2} />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-[#111936] mb-3 group-hover:text-[#E53935] transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mt-auto">
                    {step.description}
                  </p>
                </motion.div>

                {/* Connecting dashed line with arrow (desktop only) */}
                {index < steps.length - 1 && (
                  <div
                    className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 items-center justify-center pointer-events-none"
                    aria-hidden="true"
                  >
                    <div className="w-5 border-t-2 border-dashed border-[#E53935]/40" />
                    <ArrowRight className="w-5 h-5 text-[#E53935] -ml-1 stroke-[2.5]" />
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
