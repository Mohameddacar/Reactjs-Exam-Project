import React from 'react'
import { Instagram, Dribbble, Twitter, Youtube, Send } from 'lucide-react'
import footer from '../assets/footer.png'
import Container from '../components/Container'
import Image from '../components/Image'
const Footer = () => {
  return (
    <footer className="bg-[#263238] text-gray-300 py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Logo & Copyright */}
          <div>
            <img src={footer}alt="Nexcent footer" className="mb-6" />
            <p className="text-sm mb-6">
              Copyright © 2020 Nexcent ltd. <br />
              All rights reserved
            </p>

            <div className="flex gap-4">
              <span className="w-9 h-9 bg-[#3b464c] rounded-full flex items-center justify-center hover:bg-green-600 transition cursor-pointer">
                <Instagram size={18} />
              </span>
              <span className="w-9 h-9 bg-[#3b464c] rounded-full flex items-center justify-center hover:bg-green-600 transition cursor-pointer">
                <Dribbble size={18} />
              </span>
              <span className="w-9 h-9 bg-[#3b464c] rounded-full flex items-center justify-center hover:bg-green-600 transition cursor-pointer">
                <Twitter size={18} />
              </span>
              <span className="w-9 h-9 bg-[#3b464c] rounded-full flex items-center justify-center hover:bg-green-600 transition cursor-pointer">
                <Youtube size={18} />
              </span>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">About us</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Contact us</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Testimonials</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-6">Support</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">Help center</li>
              <li className="hover:text-white cursor-pointer">Terms of service</li>
              <li className="hover:text-white cursor-pointer">Legal</li>
              <li className="hover:text-white cursor-pointer">Privacy policy</li>
              <li className="hover:text-white cursor-pointer">Status</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-6">
              Stay up to date
            </h3>

            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full py-3 pl-4 pr-12 rounded-md bg-[#3b464c] text-sm text-white placeholder-gray-400 focus:outline-none"
              />
              <button className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-300 hover:text-green-500">
                <Send size={18} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
