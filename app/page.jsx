'use client';

import React, { useState } from 'react';
import { Check, ChevronDown, ChevronUp, Zap, Users, Menu, X, BrainCircuit, Workflow, Waypoints } from 'lucide-react';
import Button from '@/components/Button';
import FeatureCard from '@/components/FeatureCard';
import PricingCard from '@/components/PricingCard';

export default function SyncoraLandingPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: <BrainCircuit className="w-7 h-7" />,
      title: "AI-Driven Execution Engine",
      description: "Automate complex, multi-step workflows across your entire toolchain. Syncora's AI acts as your operational co-pilot, driving tasks to completion."
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Centralized Operational Intelligence",
      description: "Break down data silos. Syncora provides a real-time, unified view of cross-functional team progress, dependencies, and performance."
    },
    {
      icon: <Workflow className="w-7 h-7" />,
      title: "Real-time Orchestration Layer",
      description: "Coordinate dependencies and align teams with an always-on system that tracks goals, resources, and outcomes across the organization."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Integrate Your Stack",
      description: "Connect to hundreds of data sources and tools with our robust API and pre-built integrations. No code required."
    },
    {
      number: "02",
      title: "Define Your Architecture",
      description: "Map your operational processes and define execution logic using our intuitive, low-code interface."
    },
    {
      number: "03",
      title: "Automate & Orchestrate",
      description: "Deploy your workflows and let Syncora's AI engine handle the orchestration, execution, and monitoring."
    }
  ];

  const testimonials = [
    {
      quote: "Syncora transformed how our distributed team works. We've cut meeting time by 60% and shipped faster than ever.",
      author: "Sarah Chen",
      role: "VP of Engineering, TechFlow",
      avatar: "SC"
    },
    {
      quote: "The AI orchestration feels like having an extra team member. It's honestly magical how much time we've saved.",
      author: "Marcus Johnson",
      role: "Product Manager, Innovate Labs",
      avatar: "MJ"
    },
    {
      quote: "Finally, a tool that actually understands complex workflows. Our team productivity metrics are through the roof.",
      author: "Elena Rodriguez",
      role: "CEO, CloudSync",
      avatar: "ER"
    }
  ];

  const pricingPlans = [
    {
      name: "Core",
      price: "$49",
      period: "/seat/month",
      description: "For teams establishing their operational framework.",
      features: [
        "Up to 20 seats",
        "Core AI Workflows",
        "10 tool integrations",
        "Standard email support",
        "30-day history"
      ],
      cta: "Start with Core",
      highlighted: false
    },
    {
      name: "Growth",
      price: "$99",
      period: "/seat/month",
      description: "For growing companies scaling cross-functional operations.",
      features: [
        "Up to 100 seats",
        "Advanced AI Orchestration",
        "Unlimited integrations",
        "Priority support (4-hr SLA)",
        "Unlimited history",
        "Custom workflow builder",
        "Advanced analytics & reporting"
      ],
      cta: "Start with Growth",
      highlighted: true
    },
    {
      name: "Scale",
      price: "Custom",
      period: "",
      description: "For organizations requiring enterprise-grade security, support, and control.",
      features: [
        "Unlimited seats",
        "Enterprise AI Engine",
        "Dedicated Account Manager",
        "24/7 phone support & 1-hr SLA",
        "SAML/SSO & advanced security",
        "Bespoke integrations",
        "On-premise or private cloud",
        "Full audit logs"
      ],
      cta: "Contact Sales",
      highlighted: false
    }
  ];

  const faqs = [
    {
      question: "How does Syncora integrate with my existing tools?",
      answer: "Syncora connects seamlessly with over 200 popular tools including Slack, Asana, Jira, GitHub, Salesforce, and Google Workspace. Our one-click integrations take less than 2 minutes to set up, and our AI automatically maps your workflows."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use bank-level encryption (AES-256) for all data at rest and in transit. We're SOC 2 Type II certified and GDPR compliant. Your data is never used to train our AI models without explicit permission."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes. Our Core and Growth plans are billed monthly or annually, and you can cancel at any time. Your plan will remain active until the end of the current billing period."
    },
    {
      question: "What kind of support do you offer?",
      answer: "Core plans include standard email support. Growth plans get priority email support with a 4-hour SLA. Scale customers receive a dedicated account manager and 24/7 phone support with a 1-hour critical response SLA."
    },
    {
      question: "What is the implementation process?",
      answer: "Most teams are up and running in under an hour. Our AI handles the heavy lifting of understanding your workflows, and our dedicated onboarding team provides personalized guidance to ensure your success and immediate ROI."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Waypoints className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Syncora
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">How it Works</a>
              <a href="#pricing" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">Pricing</a>
              <a href="#faq" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">FAQ</a>
              <div className="w-px h-5 bg-slate-200"></div>
              <Button variant="ghost" size="sm" className="rounded-lg">
                Sign In
              </Button>
              <Button variant="primary" size="sm" className="rounded-lg">
                Request a Demo
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3 border-t border-slate-200">
              <a href="#features" className="block text-slate-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#how-it-works" className="block text-slate-700 hover:text-blue-600 transition-colors">How it Works</a>
              <a href="#pricing" className="block text-slate-700 hover:text-blue-600 transition-colors">Pricing</a>
              <a href="#faq" className="block text-slate-700 hover:text-blue-600 transition-colors">FAQ</a>
              <Button variant="ghost" size="sm" className="w-full rounded-lg">
                Sign In
              </Button>
              <Button variant="primary" size="sm" className="w-full rounded-lg">
                Request a Demo
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 sm:pt-40 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
              <Zap className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-bold text-blue-700 tracking-wide">The AI Operating Layer for Teams</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tighter">
              Orchestrate Your Operations
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> with AI</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Syncora is the intelligent control plane that centralizes workflows, automates execution, and provides real-time operational intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 group">
              <Button variant="primary" size="lg" icon>
                Request a Demo
              </Button>
              <Button variant="secondary" size="lg">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              A Control Plane for Your Entire Operation
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Syncora integrates with your existing tools to provide a single source of truth for planning, execution, and analysis.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              Deploy in Minutes, Scale Infinitely
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our streamlined onboarding gets your operational architecture live immediately.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/3 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-200 to-indigo-200"></div>
            
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                  <div className="text-6xl font-bold bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4 opacity-20">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              The Engine Behind High-Performance Teams
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Leaders at top companies trust Syncora to orchestrate their most critical work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{testimonial.author}</p>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              Pricing that Scales with You
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Choose the plan that fits your team's operational maturity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} highlighted={plan.highlighted} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Everything you need to know about Syncora
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-slate-200 rounded-xl overflow-hidden bg-white hover:shadow-lg transition-shadow"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-lg text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Build Your Operational Backbone
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Integrate, automate, and orchestrate your way to operational excellence. See how Syncora can transform your business.
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            Request a Demo
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Waypoints className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Syncora</span>
              </div>
              <p className="text-sm text-slate-400">
                The AI Operating Layer for Teams.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">DPA</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-400 mb-4 md:mb-0">
              © 2024 Syncora, Inc. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
