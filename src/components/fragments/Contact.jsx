import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';



import { SlLocationPin } from "react-icons/sl";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import Subtitle from '../elements/Subtitle';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
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
      <section
        id="contact"
        className="container mx-auto px-6 md:px-12 pt-20 min-h-screen"
        data-aos="fade-up">
        <Subtitle>
          Contact Us
        </Subtitle>

        <div className="flex flex-col lg:flex-row gap-10 justify-center">
          <ul className="flex flex-row lg:flex-col gap-8 flex-wrap">
            <li className="flex items-center gap-2"
              data-aos="fade-up"
              data-aos-delay="500">

              <div className="border border-sky-400 p-2 rounded-md bg-sky-400 text-black">
                <SlLocationPin size={20} />
              </div>

              <span>Sukabumi, Jawa Barat, Indonesia</span>

            </li>
            <li className="flex items-center gap-2"
              data-aos="fade-up"
              data-aos-delay="600">

              <div className="border border-sky-400 p-2 rounded-md bg-sky-400 text-black">
                <HiOutlineMail size={20} />
              </div>

              <span>ibrahimcahya08@gmail.com</span>

            </li>

            <li className="flex items-center gap-2"
              data-aos="fade-up"
              data-aos-delay="700">

              <div className="border border-sky-400 p-2 rounded-md bg-sky-400 text-black">
                <FaGithub size={20} />
              </div>

              <span>github.com/IbrahimCahyaGumilar</span>

            </li>
          </ul>

          <form ref={form} onSubmit={sendEmail} className="w-full lg:w-1/2 pt-10 lg:pt-0"
            data-aos="fade-up"
            data-aos-delay="800">

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