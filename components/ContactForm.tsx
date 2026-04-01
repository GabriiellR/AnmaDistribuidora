"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { COMPANY } from "@/lib/constants";

type FormData = {
  name: string;
  email: string;
  whatsapp: string;
  message: string;
};

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const body = encodeURIComponent(
      `Nome: ${data.name}\nEmail: ${data.email}\nWhatsApp: ${data.whatsapp}\n\n${data.message}`
    );
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(`Contato site — ${COMPANY.name}`)}&body=${body}`;
    reset();
  };

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
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-text">
            Nome
          </label>
          <input
            id="name"
            type="text"
            className={inputClass}
            placeholder="Seu nome"
            {...register("name", { required: "Informe seu nome" })}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-text">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={inputClass}
            placeholder="seu@email.com"
            {...register("email", {
              required: "Informe seu email",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email inválido",
              },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="whatsapp"
            className="mb-1 block text-sm font-medium text-text"
          >
            WhatsApp
          </label>
          <input
            id="whatsapp"
            type="tel"
            className={inputClass}
            placeholder="(31) 99999-0000"
            {...register("whatsapp", { required: "Informe seu WhatsApp" })}
          />
          {errors.whatsapp && (
            <p className="mt-1 text-sm text-red-600">{errors.whatsapp.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="message"
            className="mb-1 block text-sm font-medium text-text"
          >
            Mensagem
          </label>
          <textarea
            id="message"
            rows={4}
            className={inputClass}
            placeholder="Como podemos ajudar?"
            {...register("message", { required: "Escreva uma mensagem" })}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-primary py-3 font-semibold text-white transition-all duration-200 hover:bg-primary-dark"
        >
          Enviar
        </button>
      </form>
    </motion.div>
  );
}
