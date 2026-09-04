"use client";

import { FormEvent, useState } from "react";

const services = [
  { code: "01", title: "Informática & acessórios", text: "Equipamentos, periféricos, cartuchos, toners e soluções para casa e empresa." },
  { code: "02", title: "Assistência técnica", text: "Diagnóstico, manutenção e suporte para manter sua operação em movimento." },
  { code: "03", title: "IA & automação", text: "Agentes inteligentes, consultoria e automações pensadas para negócios reais." },
  { code: "04", title: "Segurança & redes", text: "Infraestrutura, conectividade e proteção para ambientes comerciais." },
];

export default function Home() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true); setError(""); setSent(false);
    const form = event.currentTarget;
    try {
      const response = await fetch("/api/orcamentos", { method: "POST", body: new FormData(form) });
      if (!response.ok) throw new Error();
      form.reset(); setSent(true);
    } catch { setError("Não foi possível enviar agora. Fale com a Hexa pelo WhatsApp."); }
    finally { setSubmitting(false); }
  }

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Hexa — início"><span className="brand-mark">H</span><span>HEXA<small>tecnologia & inteligência</small></span></a>
        <nav aria-label="Navegação principal"><a href="#solucoes">Soluções</a><a href="#sobre">Sobre</a><a href="#contato">Contato</a></nav>
        <a className="button button-small" href="#contato">Falar com a Hexa <span>↗</span></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Tecnologia sem complicação</p>
          <h1>Mais inteligência.<br/><em>Mais resultado.</em></h1>
          <p className="hero-text">Da escolha do equipamento à automação do seu negócio, a Hexa transforma tecnologia em soluções simples, próximas e eficientes.</p>
          <div className="hero-actions"><a className="button" href="#contato">Quero uma solução <span>↗</span></a><a className="text-link" href="#solucoes">Conheça a Hexa <span>↓</span></a></div>
          <div className="trust-row"><strong>4,9</strong><span className="stars">★★★★★</span><span>249 avaliações no Google</span></div>
        </div>
        <div className="hero-visual" aria-label="Painel visual de soluções Hexa">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="core"><span>H</span><small>HEXA</small></div>
          <div className="float-card card-ai"><span>IA</span><p>Agentes inteligentes</p><b>ativos 24/7</b></div><div className="float-card card-tech"><span>TECH</span><p>Soluções completas</p><b>para você</b></div>
          <div className="signal"><i/><i/><i/><i/><i/></div>
        </div>
      </section>

      <section className="service-strip" id="solucoes">
        <div className="section-heading"><p className="eyebrow"><span/> O que resolvemos</p><h2>Tecnologia que trabalha <em>por você.</em></h2></div>
        <div className="services">{services.map((service) => <article key={service.code}><span>{service.code}</span><h3>{service.title}</h3><p>{service.text}</p><a href="#contato" aria-label={`Solicitar ${service.title}`}>Explorar <b>↗</b></a></article>)}</div>
      </section>

      <section className="about" id="sobre">
        <div className="about-number"><strong>2021</strong><span>início da jornada<br/>em Itapeva, SP</span></div>
        <div><p className="eyebrow"><span/> Hexa em Itapeva</p><h2>Atendimento próximo.<br/><em>Visão de futuro.</em></h2><p>A Hexa reúne loja, assistência e consultoria em um único lugar. Um parceiro local para quem precisa comprar melhor, resolver rápido e crescer com tecnologia.</p><a className="map-link" href="https://www.google.com/maps/search/?api=1&query=Hexa+Tecnologia+e+Inform%C3%A1tica+Pra%C3%A7a+Anchieta+128+Itapeva" target="_blank" rel="noreferrer">Ver localização no mapa ↗</a></div>
      </section>

      <section className="contact" id="contato">
        <div className="contact-copy"><p className="eyebrow light"><span/> Vamos conversar</p><h2>Qual desafio podemos<br/><em>resolver hoje?</em></h2><p>Conte o que você precisa. A equipe Hexa entra em contato para entender o cenário e indicar o melhor caminho.</p><div className="contact-details"><a href="https://wa.me/5515997574433?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Hexa%20e%20gostaria%20de%20atendimento." target="_blank" rel="noreferrer">WhatsApp<br/>(15) 99757-4433 ↗</a><span>Praça Anchieta, 128 — Centro<br/>Itapeva — SP · 18400-450</span></div></div>
        <form className="lead-form" onSubmit={submitLead}>
          <label>Seu nome<input name="name" required placeholder="Como podemos te chamar?"/></label><label>WhatsApp<input name="phone" required inputMode="tel" placeholder="(15) 99999-9999"/></label>
          <label>O que você procura?<select name="interest" defaultValue=""><option value="" disabled>Selecione uma solução</option>{services.map(s=><option key={s.code}>{s.title}</option>)}</select></label>
          <label>Conte um pouco<textarea name="message" rows={3} placeholder="Descreva sua necessidade"/></label><input className="website-field" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"/><button className="button" type="submit" disabled={submitting}>{submitting ? "Enviando..." : "Solicitar atendimento"} <span>↗</span></button>
          <p className={`form-note ${error ? "error" : ""}`} role="status">{error || (sent ? "Recebemos sua solicitação. A equipe entra em contato em breve." : "Seus dados serão usados apenas para este atendimento.")}</p>
        </form>
      </section>

      <footer><div className="brand"><span className="brand-mark">H</span><span>HEXA<small>tecnologia & inteligência</small></span></div><p>© 2026 Hexa Tecnologia e Informática</p><div className="footer-links"><a href="/privacidade">Privacidade</a><a href="https://www.instagram.com/hexaitapeva/" target="_blank" rel="noreferrer">Instagram ↗</a></div></footer>
    </main>
  );
}
