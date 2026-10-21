// Barre de navigation : logo, nom de la garderie et menu
export default function Navbar({ nom = "Ma Garderie" }) {
  return (
    <header className="navbar">
      <a href="#accueil" className="logo">
        <span className="logo-icone" aria-hidden="true">🧸</span>
        <span className="logo-nom">{nom}</span>
      </a>
      <nav>
        <a href="#accueil">Accueil</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
