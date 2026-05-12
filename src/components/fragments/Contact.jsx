import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

// Pastikan kamu menginstal react-icons: npm install react-icons
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_z8zew2b', // Ganti dengan Service ID Anda
      'template_7lfvgp5', // Ganti dengan Template ID Anda
      form.current,
      '7ZPlAECf_qSGFZKH7' // Ganti dengan Public Key Anda
    )
      .then((result) => {
        console.log(result);
        Swal.fire({
          icon: 'success',
          title: 'Berhasil!',
          text: 'Pesan Anda telah terkirim.',
        });
        e.target.reset();
      }, (error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Gagal...',
          text: 'Terjadi kesalahan, silakan coba lagi.',
        });
      });
  };
  return (
    <>
      <section className="container mx-auto px-6 md:px-32 pt-20 md:pt-32">
        <div className="relative flex justify-center mb-8">
          <h2
            className="text-center text-4xl font-semibold text-sky-400 mb-2 relative after:content-[''] after:absolute after:left-0 after:bottom-[-10px] after:w-1/2 after:h-[3px] after:bg-sky-400"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Contact Us
          </h2>
        </div>

        <div className="flex justify-between">
          <ul className="flex flex-col gap-8 w-2/5">
            <li className="flex items-center gap-2">
              <div className="border border-sky-400 p-2 rounded-md bg-sky-400 text-black">
                <SlLocationPin size={20} />
              </div>
              <span>Sukabumi, Jawa Barat, Indonesia</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="border border-sky-400 p-2 rounded-md bg-sky-400 text-black">
                <HiOutlineMail size={20} />
              </div>
              <span>ibrahimcahya08@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="border border-sky-400 p-2 rounded-md bg-sky-400 text-black">
                <FaGithub size={20} />
              </div>
              <span>github.com/IbrahimCahyaGumilar</span>
            </li>
          </ul>

          <form ref={form} onSubmit={sendEmail} className="w-3/5">
            <div className="flex flex-col gap-4">
              <input name='name' type="text" placeholder="Name" className="bg-slate-900 text-white px-4 py-2 rounded-md" />
              <input name='email' type="email" placeholder="Email" className="bg-slate-900 text-white px-4 py-2 rounded-md" />
              <input name='subject' type="text" placeholder="Subject" className="bg-slate-900 text-white px-4 py-2 rounded-md" />
              <textarea name='message' placeholder="Message" className="bg-slate-900 text-white px-4 py-2 rounded-md" rows="5"></textarea>

              <div className="flex justify-end pt-4">
                <button type="submit" className="border border-sky-400 hover:bg-sky-400 hover:text-black duration-700 text-white font-bold px-4 py-2 rounded-md cursor-pointer">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact