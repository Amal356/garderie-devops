// Section d'accueil : image, titre de bienvenue et description
export default function Hero({ garderie }) {
  return (
    <section id="accueil" className="hero">
      <div className="hero-texte">
        <h1>Bienvenue à {garderie?.nom ?? "Ma Garderie"}</h1>
        <p className="slogan">{garderie?.slogan}</p>
        <p>{garderie?.description ?? "Informations momentanément indisponibles."}</p>
        {garderie && <p className="horaires">🕖 {garderie.horaires}</p>}
      </div>
      <img src="/garderie.svg" alt="Enfants qui jouent dans la garderie" className="hero-image" />
    </section>
  );
}
