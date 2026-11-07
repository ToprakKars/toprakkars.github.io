const translations = {
  de: {
    nav_about: "Über mich",
    nav_projects: "Projekte",
    nav_skills: "Kenntnisse",
    nav_contact: "Kontakt",
    hero_eyebrow: "Student der Softwaretechnik · Berlin",
    hero_lead: "Ich erstelle klare, zweisprachige Websites für kleine Unternehmen und programmiere in Python, Java und C.",
    hero_cta: "Meine Arbeiten",
    hero_contact: "Kontakt aufnehmen",
    about_title: "Über mich",
    about_p1: "Ich studiere Softwaretechnik (B.Sc.) an der University of Europe for Applied Sciences in Berlin, voraussichtlicher Abschluss 2028.",
    about_p2: "Neben dem Studium arbeite ich als Werkstudent im Hotelservice und als freiberuflicher Transkriptor für türkische Audio-Projekte. Ich gestalte und baue Websites für lokale Unternehmen – handcodiert und mit KI-gestützten Tools.",
    lang_tr: "Türkisch – Muttersprache",
    lang_en: "Englisch – C1",
    lang_de: "Deutsch – A1",
    projects_title: "Projekte",
    p_cafe: "Zweisprachige (DE/EN) Landingpage für ein minimalistisches Berliner Café: Speisekarte, Öffnungszeiten und responsives Layout.",
    p_tools: "Python-Kommandozeilentool, das türkische Transkripte bereinigt, Zeitstempel prüft und Wörter pro Sprecher zählt.",
    p_booking: "Online-Terminbuchung mit echter Verfügbarkeit: Öffnungszeiten, freie Tage der Barber, Dauer der Leistung, Mittagspause und bestehende Termine. Terminplan, Formularprüfung, DE/EN, Google-Sheets-Backend.",
    p_gate: "Interaktives Rule-Horror-Spiel mit 5 Enden. Geschichte und Engine sind getrennt, eine Breitensuche prüft die ganze Geschichte auf Sackgassen.",
    p_breakfast: "Java-Kommandozeilentool, das Frühstücksmengen im Hotel, Bestellmengen und einen Nachfüllplan passend zum Morgenansturm berechnet.",
    p_portfolio: "Diese Seite – reines HTML, CSS und JavaScript mit Sprachumschalter Englisch/Deutsch.",
    skills_title: "Kenntnisse",
    skills_web: "Web",
    skills_prog: "Programmierung",
    skills_other: "Sonstiges",
    skills_other_list: "Türkische Transkription · Generative KI-Tools · Kundenservice",
    contact_title: "Kontakt",
    contact_p: "Offen für Remote-Tätigkeiten in Teilzeit: Webentwicklung, Sprachbewertung und KI-Trainingsdaten."
  }
};

const elements = document.querySelectorAll("[data-i18n]");
const original = {};
elements.forEach(el => { original[el.dataset.i18n] = el.textContent; });

function setLanguage(lang) {
  elements.forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = lang === "de" ? (translations.de[key] || original[key]) : original[key];
  });
  document.documentElement.lang = lang;
  document.getElementById("lang").textContent = lang === "de" ? "EN" : "DE";
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

let current = "en";
try { current = localStorage.getItem("lang") || "en"; } catch (e) {}
setLanguage(current);

document.getElementById("lang").addEventListener("click", () => {
  current = current === "en" ? "de" : "en";
  setLanguage(current);
});

document.getElementById("year").textContent = new Date().getFullYear();
