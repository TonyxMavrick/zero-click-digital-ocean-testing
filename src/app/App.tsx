import { useState, FormEvent } from 'react';
import { Check, ShieldCheck, Sparkles, ChevronDown, ShoppingCart, CreditCard } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import heroProductImage from 'figma:asset/155ecfa2f1223ffeb158938da77bd33f0bb5922f.png';
import bonus1Image from 'figma:asset/be3886568e312fb8e0ee791dd356799dc75b6189.png';
import bonus2Image from 'figma:asset/46c0c32e60540a5434460018a33c90c02f0e48ba.png';
import bonus3Image from 'figma:asset/be422d9cfd61dd8f26c6ae097dba4e70484e1203.png';
import pricing2BottlesImage from 'figma:asset/7fcb2cd12c8b28b7b41a93e41ffc6b50a73db33b.png';
import pricing6BottlesImage from 'figma:asset/96e8424d987c4313475dedf0f1d2cc592b6ba377.png';
import pricing3BottlesImage from 'figma:asset/f0f9032406d8dbb6364cc76d816360d80ee3cabc.png';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/components/ui/accordion';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';

const ORDER_URL = 'https://thesynadentix.com/text.php';

export default function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setShowSuccessMessage(true);
    
    // Redirect after showing the message for 3 seconds
    setTimeout(() => {
      window.location.href = ORDER_URL;
    }, 3000);
  };

  const handleCtaClick = () => {
    window.location.href = ORDER_URL;
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-teal-600" />
              <span className="text-xl font-bold text-gray-900">Synadentix</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('ingredients')}
                className="text-gray-600 hover:text-teal-600 transition-colors"
              >
                Ingredients
              </button>
              <button
                onClick={() => scrollToSection('bonuses')}
                className="text-gray-600 hover:text-teal-600 transition-colors"
              >
                FREE Bonuses
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-gray-600 hover:text-teal-600 transition-colors"
              >
                FAQ
              </button>
              <Button
                onClick={handleCtaClick}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full shadow-lg"
              >
                Order Now
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-teal-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your Smile with{' '}
                <span className="text-teal-600">Synadentix</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                The revolutionary oral health solution that supports strong teeth, healthy
                gums, and fresh breath through advanced dental microbiome technology
              </p>
              <Button
                onClick={handleCtaClick}
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                Order Synadentix Now
              </Button>

              {/* Trust Badges */}
              <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-6">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-teal-600" />
                  <span className="text-sm text-gray-600">60-Day Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-6 h-6 text-teal-600" />
                  <span className="text-sm text-gray-600">Clinically Tested</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-6 h-6 text-teal-600" />
                  <span className="text-sm text-gray-600">Made in USA</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <ImageWithFallback
                src={heroProductImage}
                alt="Synadentix Product"
                className="w-full max-w-md rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section id="ingredients" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Natural Ingredients
            </h2>
            <p className="text-xl text-gray-600">
              Scientifically formulated with premium ingredients for optimal oral health
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Ingredient 1 - Guava Fruit Powder */}
            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mb-4 overflow-hidden rounded-xl bg-white p-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1693399991519-bef70bed19a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWF2YSUyMGZydWl0fGVufDF8fHx8MTc2OTQwODM2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Guava Fruit Powder"
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Guava Fruit Powder
              </h3>
            </div>

            {/* Ingredient 2 - Microcrystalline Hydroxyapatite Complex */}
            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mb-4 overflow-hidden rounded-xl bg-white p-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1653032949231-59b9f0bdb330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxjaXVtJTIwbWluZXJhbCUyMGNyeXN0YWx8ZW58MXx8fHwxNzY5NDEzNDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Microcrystalline Hydroxyapatite Complex"
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Microcrystalline Hydroxyapatite Complex
              </h3>
            </div>

            {/* Ingredient 3 - Beta-Glucanase */}
            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mb-4 overflow-hidden rounded-xl bg-white p-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1743338960176-02107775b73d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnp5bWUlMjBtb2xlY3VsYXJ8ZW58MXx8fHwxNzY5NDEzNDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Beta-Glucanase"
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Beta-Glucanase
              </h3>
            </div>

            {/* Ingredient 4 - Dextranase */}
            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mb-4 overflow-hidden rounded-xl bg-white p-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1743338960176-02107775b73d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnp5bWUlMjBzY2llbmNlfGVufDF8fHx8MTc2OTQxMzQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Dextranase"
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Dextranase
              </h3>
            </div>

            {/* Ingredient 5 - Amylase */}
            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mb-4 overflow-hidden rounded-xl bg-white p-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dkZXIlMjBzdXBwbGVtZW50fGVufDF8fHx8MTc2OTQxMzQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Amylase"
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Amylase
              </h3>
            </div>

            {/* Ingredient 6 - Lactoperoxidase */}
            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mb-4 overflow-hidden rounded-xl bg-white p-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1689682659750-197bbead0b27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwZXh0cmFjdHxlbnwxfHx8fDE3Njk0MTM0ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Lactoperoxidase"
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Lactoperoxidase
              </h3>
            </div>

            {/* Ingredient 7 - Glucose Oxidase */}
            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mb-4 overflow-hidden rounded-xl bg-white p-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1657244358898-d9e110504fd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbHVjb3NlJTIwbW9sZWN1bGV8ZW58MXx8fHwxNzY5NDEzNDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Glucose Oxidase"
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Glucose Oxidase
              </h3>
            </div>

            {/* Ingredient 8 - Amyloglucosidase */}
            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mb-4 overflow-hidden rounded-xl bg-white p-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1761489023810-aee4def97a5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwbGVtZW50JTIwaW5ncmVkaWVudHxlbnwxfHx8fDE3Njk0MTM0ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Amyloglucosidase"
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Amyloglucosidase
              </h3>
            </div>

            {/* Ingredient 9 - Lysozyme */}
            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mb-4 overflow-hidden rounded-xl bg-white p-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1707863080685-177f4f6e850d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZWluJTIwZW56eW1lfGVufDF8fHx8MTc2OTQxMzQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Lysozyme"
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Lysozyme
              </h3>
            </div>

            {/* Ingredient 10 - Lactoferrin */}
            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mb-4 overflow-hidden rounded-xl bg-white p-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1735550157716-faf23bf75bb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcm9uJTIwbWluZXJhbHxlbnwxfHx8fDE3Njk0MTM0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Lactoferrin"
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Lactoferrin
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* FREE Bonuses Section */}
      <section id="bonuses" className="py-16 md:py-24 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Order Today & Get These Bonuses{' '}
              <span className="text-teal-600">FREE</span>
            </h2>
            <p className="text-xl text-gray-600">
              Limited time offer - Claim your exclusive bonuses now!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Bonus 1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <ImageWithFallback
                  src={bonus1Image}
                  alt="Bonus 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  BONUS #1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  The Complete Dental Health Guide
                </h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive guide to maintaining optimal oral health with proven
                  techniques and expert tips
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-gray-400 line-through text-sm">
                      Retail Value: $49
                    </div>
                    <div className="text-2xl font-bold text-teal-600">Today: FREE</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bonus 2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <ImageWithFallback
                  src={bonus2Image}
                  alt="Bonus 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  BONUS #2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Fresh Breath Secrets
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover natural remedies and daily habits for long-lasting fresh breath
                  and confidence
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-gray-400 line-through text-sm">
                      Retail Value: $39
                    </div>
                    <div className="text-2xl font-bold text-teal-600">Today: FREE</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bonus 3 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <ImageWithFallback
                  src={bonus3Image}
                  alt="Bonus 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  BONUS #3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  21-Day Smile Transformation Plan
                </h3>
                <p className="text-gray-600 mb-4">
                  Step-by-step action plan to transform your smile in just 3 weeks with
                  Synadentix
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-gray-400 line-through text-sm">
                      Retail Value: $29
                    </div>
                    <div className="text-2xl font-bold text-teal-600">Today: FREE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              <span className="font-bold text-teal-600">Total Bonus Value: $117</span> -
              Yours FREE with your order today!
            </p>
            <Button
              onClick={handleCtaClick}
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 rounded-full text-lg shadow-xl"
            >
              Claim Your FREE Bonuses Now
            </Button>
          </div>
        </div>
      </section>

      {/* Demo Order Form Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-teal-50 to-white border-2 border-teal-200 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Secure Your Order Today
              </h2>
              <p className="text-lg text-gray-600">
                Fill in your details below to continue to our secure checkout
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="fullName" className="text-gray-700 font-medium">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="mt-2 h-12"
                  placeholder="Enter your full name"
                  disabled={showSuccessMessage}
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-2 h-12"
                  placeholder="Enter your email"
                  disabled={showSuccessMessage}
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-gray-700 font-medium">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-2 h-12"
                  placeholder="Enter your phone number"
                  disabled={showSuccessMessage}
                />
              </div>

              <div>
                <Label htmlFor="country" className="text-gray-700 font-medium">
                  Country
                </Label>
                <Input
                  id="country"
                  type="text"
                  required
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="mt-2 h-12"
                  placeholder="Enter your country"
                  disabled={showSuccessMessage}
                />
              </div>

              {showSuccessMessage && (
                <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 text-center">
                  <Check className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <p className="text-lg font-semibold text-green-800 mb-2">
                    Success!
                  </p>
                  <p className="text-green-700">
                    Your discount code is sent to your Gmail. Thank you!
                  </p>
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={showSuccessMessage}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6 text-lg font-semibold rounded-full shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {showSuccessMessage ? 'Redirecting...' : 'Continue to Secure Order'}
              </Button>

              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <ShieldCheck className="w-5 h-5 text-teal-600" />
                <span>Secure SSL Encrypted Checkout</span>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Package
            </h2>
            <p className="text-xl text-gray-600">
              Select the best option for your oral health journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Card 1 - Basic */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden hover:shadow-xl transition-all">
              <div className="bg-gray-100 px-6 py-3 text-center">
                <span className="text-sm font-semibold text-gray-700">Basic</span>
              </div>
              
              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">2 Bottles</h3>
                  <p className="text-gray-600">60 Day Supply</p>
                </div>

                <div className="mb-6 flex justify-center">
                  <ImageWithFallback
                    src={pricing2BottlesImage}
                    alt="2 Bottles"
                    className="w-48 h-48 object-contain"
                  />
                </div>

                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    $79<span className="text-lg font-normal text-gray-600">/Bottle</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2 text-center">
                    <span className="text-green-700 font-semibold">YOU SAVE $200</span>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 text-center">
                    <span className="text-blue-700 font-semibold">90 DAYS GUARANTEE</span>
                  </div>
                </div>

                <Button
                  onClick={handleCtaClick}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6 text-lg font-bold rounded-xl shadow-lg flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  BUY NOW
                </Button>

                <p className="text-center text-sm text-gray-600 mt-4">
                  + $9.99 Shipping
                </p>

                <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
                  <CreditCard className="w-8 h-8 text-gray-400" />
                  <span className="text-xs text-gray-500">Visa • PayPal • Mastercard • Discover • AmEx</span>
                </div>
              </div>
            </div>

            {/* Card 2 - Best Value (Highlighted) */}
            <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl shadow-2xl border-4 border-teal-500 overflow-hidden transform md:scale-105 relative">
              <div className="absolute top-0 right-0 bg-red-500 text-white px-6 py-2 font-bold text-sm shadow-lg" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 15% 100%)' }}>
                BEST VALUE
              </div>
              
              <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-6 py-3 text-center">
                <span className="text-sm font-semibold text-white">Most Popular Choice</span>
              </div>
              
              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">3 + 3 Bottles</h3>
                  <p className="text-gray-600 font-medium">180 Day Supply</p>
                </div>

                <div className="mb-6 flex justify-center">
                  <ImageWithFallback
                    src={pricing6BottlesImage}
                    alt="6 Bottles Bundle"
                    className="w-56 h-48 object-contain"
                  />
                </div>

                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-teal-600 mb-2">
                    $49<span className="text-xl font-normal text-gray-600">/Bottle</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg px-4 py-2 text-center">
                    <span className="text-white font-bold text-lg">YOU SAVE $780</span>
                  </div>
                  <div className="bg-orange-50 border-2 border-orange-400 rounded-lg px-4 py-2 text-center">
                    <span className="text-orange-700 font-bold">BIGGEST DISCOUNT</span>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 text-center">
                    <span className="text-blue-700 font-semibold">90 DAYS GUARANTEE</span>
                  </div>
                  <div className="bg-purple-50 border-2 border-purple-400 rounded-lg px-4 py-2 text-center">
                    <span className="text-purple-700 font-bold">3 FREE EBOOKS!</span>
                  </div>
                </div>

                <Button
                  onClick={handleCtaClick}
                  className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white py-7 text-xl font-bold rounded-xl shadow-2xl flex items-center justify-center gap-2 transform hover:scale-105 transition-transform"
                >
                  <ShoppingCart className="w-6 h-6" />
                  BUY NOW
                </Button>

                <p className="text-center text-sm font-semibold text-green-600 mt-4">
                  ✓ Free Shipping
                </p>

                <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
                  <CreditCard className="w-8 h-8 text-teal-600" />
                  <span className="text-xs text-gray-600 font-medium">Visa • PayPal • Mastercard • Discover • AmEx</span>
                </div>
              </div>
            </div>

            {/* Card 3 - Most Popular */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden hover:shadow-xl transition-all">
              <div className="bg-teal-100 px-6 py-3 text-center">
                <span className="text-sm font-semibold text-teal-700">Most Popular</span>
              </div>
              
              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">2 + 1 Bottles</h3>
                  <p className="text-gray-600">90 Day Supply</p>
                </div>

                <div className="mb-6 flex justify-center">
                  <ImageWithFallback
                    src={pricing3BottlesImage}
                    alt="3 Bottles"
                    className="w-48 h-48 object-contain"
                  />
                </div>

                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    $69<span className="text-lg font-normal text-gray-600">/Bottle</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2 text-center">
                    <span className="text-green-700 font-semibold">YOU SAVE $330</span>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 text-center">
                    <span className="text-blue-700 font-semibold">90 DAYS GUARANTEE</span>
                  </div>
                </div>

                <Button
                  onClick={handleCtaClick}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6 text-lg font-bold rounded-xl shadow-lg flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  BUY NOW
                </Button>

                <p className="text-center text-sm font-semibold text-green-600 mt-4">
                  ✓ Free Shipping
                </p>

                <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
                  <CreditCard className="w-8 h-8 text-gray-400" />
                  <span className="text-xs text-gray-500">Visa • PayPal • Mastercard • Discover • AmEx</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-2">
              <ShieldCheck className="w-5 h-5 inline-block text-teal-600 mr-2" />
              All packages include our 90-day money-back guarantee
            </p>
            <p className="text-sm text-gray-500">
              *Prices shown are for a limited time only. Regular prices may apply after this promotion ends.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about Synadentix
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="bg-white rounded-xl shadow-md border border-gray-200 px-6"
            >
              <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-teal-600">
                What is Synadentix?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Synadentix is an advanced oral health supplement formulated with probiotics
                and natural ingredients to support your dental microbiome. It helps promote
                strong teeth, healthy gums, and fresh breath by balancing the beneficial
                bacteria in your mouth.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-white rounded-xl shadow-md border border-gray-200 px-6"
            >
              <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-teal-600">
                How do I use Synadentix?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Simply take one capsule daily with water, preferably in the morning after
                brushing your teeth. For best results, allow the tablet to dissolve slowly
                in your mouth or chew it thoroughly before swallowing. Consistent daily use
                is recommended for optimal benefits.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-white rounded-xl shadow-md border border-gray-200 px-6"
            >
              <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-teal-600">
                Is Synadentix safe?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yes! Synadentix is manufactured in the USA in an FDA-registered, GMP-certified
                facility. All ingredients are natural, clinically tested, and safe for daily
                use. However, if you have any medical conditions or are taking medications,
                we recommend consulting with your healthcare provider before use.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="bg-white rounded-xl shadow-md border border-gray-200 px-6"
            >
              <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-teal-600">
                When will I see results?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Many users report fresher breath within the first few days. For optimal
                results including stronger teeth and healthier gums, we recommend consistent
                use for at least 60-90 days. Individual results may vary based on your
                current oral health and lifestyle factors.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="bg-white rounded-xl shadow-md border border-gray-200 px-6"
            >
              <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-teal-600">
                Is there a guarantee?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Absolutely! We offer a 60-day money-back guarantee. If you're not completely
                satisfied with Synadentix for any reason, simply contact our customer support
                team within 60 days of purchase for a full refund - no questions asked.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="bg-white rounded-xl shadow-md border border-gray-200 px-6"
            >
              <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-teal-600">
                How many bottles should I order?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                For best results, we recommend ordering the 3 or 6 bottle package. This
                ensures you have enough supply for the recommended 90-day period, and you'll
                receive our best pricing and all the FREE bonuses. Plus, many customers
                continue using Synadentix long-term for ongoing oral health maintenance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-7"
              className="bg-white rounded-xl shadow-md border border-gray-200 px-6"
            >
              <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-teal-600">
                Is shipping discreet?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yes, all orders are shipped in plain, unmarked packaging to protect your
                privacy. Your credit card statement will show a discreet billing descriptor.
                We offer fast, secure shipping to the USA, Canada, UK, Australia, and many
                other countries worldwide.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-teal-600 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-full font-bold mb-6 animate-pulse">
            ⚠️ LIMITED STOCK AVAILABLE
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Don't Miss Out on This Exclusive Offer!
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Join thousands of satisfied customers who have transformed their oral health
            with Synadentix
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">$117</div>
                <div className="text-sm opacity-90">Worth of FREE Bonuses</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">60 Days</div>
                <div className="text-sm opacity-90">Money-Back Guarantee</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-90">Customer Support</div>
              </div>
            </div>
          </div>
          <Button
            onClick={handleCtaClick}
            size="lg"
            className="bg-white text-teal-600 hover:bg-gray-100 px-12 py-8 rounded-full text-xl font-bold shadow-2xl hover:scale-105 transition-transform"
          >
            Yes! I Want Synadentix
          </Button>
          <p className="mt-6 text-sm opacity-75">
            *Stock is limited. Order now to secure your supply and FREE bonuses
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-800 pt-8">
            <div className="text-sm leading-relaxed mb-6">
              <p className="mb-4">
                <strong className="text-gray-300">DISCLAIMER:</strong> The statements made
                on this website have not been evaluated by the Food and Drug Administration.
                This product is not intended to diagnose, treat, cure, or prevent any
                disease. Results may vary from person to person. Synadentix is a dietary
                supplement and should be used in conjunction with a healthy diet and regular
                dental care routine.
              </p>
              <p className="mb-4">
                Individual results may vary. The testimonials and examples used are
                exceptional results and are not intended to guarantee that anyone will
                achieve the same or similar results. This product is not for everyone.
                Consult your physician before use if you have any medical conditions or are
                taking any medications.
              </p>
              <p>
                By ordering Synadentix, you agree to our terms and conditions. All orders
                are processed through a secure, encrypted checkout system. Your privacy and
                security are our top priorities.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-800">
              <div className="flex gap-6 text-sm">
                <a
                  href="#"
                  className="hover:text-teal-400 transition-colors"
                  onClick={(e) => e.preventDefault()}
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="hover:text-teal-400 transition-colors"
                  onClick={(e) => e.preventDefault()}
                >
                  Terms & Conditions
                </a>
              </div>
              <div className="text-sm">
                © 2026 Synadentix. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}