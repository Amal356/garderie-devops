// Liste des services proposés, fournie par l'API Express
export default function Services({ services }) {
  return (
    <section id="services" className="services">
      <h2>Nos services</h2>
      {!services ? (
        <p>Services momentanément indisponibles.</p>
      ) : (
        <div className="cartes">
          {services.map((s) => (
            <article key={s.id} className="carte">
              <span className="icone" aria-hidden="true">{s.icone}</span>
              <h3>{s.titre}</h3>
              <p>{s.description}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
