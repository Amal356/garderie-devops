import { describe, it, expect } from "vitest";
import { renderToString } from "react-dom/server";
import Navbar from "../components/Navbar.jsx";

describe("Navbar", () => {
  it("affiche le titre « Ma Garderie »", () => {
    const html = renderToString(<Navbar />);
    expect(html).toContain("Ma Garderie");
  });
});
