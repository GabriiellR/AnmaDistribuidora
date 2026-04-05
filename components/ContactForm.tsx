"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { COMPANY } from "@/lib/constants";


export function ContactForm() {

  const inputClass =
    "w-full rounded-lg border border-surface-border bg-white px-4 py-3 text-text transition-all duration-200 placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <h2 className="text-xl font-bold text-primary md:text-2xl">
        Preencha o formulário para entrar em contato
      </h2>
      <div className="p-5" data-aos="fade-right" data-aos-duration="1500">

       
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1910581.2908260615!2d-46.051708758627626!3d-20.72629580853821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa693871c22c475%3A0xf03faac3a713c584!2sANMA%20DISTRIBUIDORA!5e0!3m2!1spt-BR!2sbr!4v1775418516310!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
      ></iframe>


      </div >
    </motion.div>
  );
}
