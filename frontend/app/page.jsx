import { connection } from "next/server";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";

// Appel au backend Express. Son adresse vient de la variable API_URL
// (http://localhost:4000 en local, http://backend:4000 dans Docker Compose)
async function getApi(chemin) {
  try {
    const res = await fetch(`${process.env.API_URL}${chemin}`, {
      cache: "no-store",
      signal: AbortSignal.timeout(3000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (erreur) {
    console.error(`API indisponible (${chemin}) : ${erreur.message}`);
    return null;
  }
}

export default async function Home() {
  await connection(); // données lues à chaque visite, pas au moment du build
  const [garderie, services] = await Promise.all([
    getApi("/api/garderie"),
    getApi("/api/services"),
  ]);

  return (
    <>
      <Navbar nom={garderie?.nom} />
      <main>
        <Hero garderie={garderie} />
        <Services services={services} />
      </main>
      <footer id="contact">
        {garderie ? `${garderie.adresse} · ${garderie.telephone}` : "Ma Garderie"}
      </footer>
    </>
  );
}
