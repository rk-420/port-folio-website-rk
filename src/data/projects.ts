import type { Localized } from "@/i18n/config";

export type Project = {
  title: Localized;
  description: Localized;
  image: string;
  tech: string[];
  repo?: string;
};

export const projects: Project[] = [
  {
    title: { en: "German Energy Market Data Pipeline", de: "Datenpipeline für den deutschen Strommarkt" },
    description: {
      en: "Automated ETL pipeline for hourly German electricity data from the SMARD API: cleans and validates prices and solar/wind generation, upserts into PostgreSQL and an S3 data lake queryable with Glue and Athena, runs daily on AWS Lambda, and feeds a Streamlit dashboard with an LLM-generated market summary.",
      de: "Automatisierte ETL-Pipeline für stündliche deutsche Strommarktdaten aus der SMARD-API: bereinigt und validiert Preise sowie Solar- und Winderzeugung, speichert sie per Upsert in PostgreSQL und einem S3-Data-Lake (abfragbar mit Glue und Athena), läuft täglich auf AWS Lambda und speist ein Streamlit-Dashboard mit einer LLM-generierten Marktzusammenfassung.",
    },
    image: "/images/projects/energy-data-pipeline.svg",
    tech: ["Python", "pandas", "PostgreSQL", "AWS Lambda", "S3", "Athena", "Streamlit", "pytest"],
    repo: "https://github.com/rk-420/data-pipeline",
  },
  {
    title: { en: "EduMed — Medical Dashboard", de: "EduMed — Medizinisches Dashboard" },
    description: {
      en: "Full-stack dashboard for general practitioners: patient management, an interactive 2D body model for clinical annotations, a live BMI calculator, and an appointment schedule, backed by serverless API functions and JWT auth.",
      de: "Full-Stack-Dashboard für Hausärzte: Patientenverwaltung, ein interaktives 2D-Körpermodell für klinische Annotationen, ein Live-BMI-Rechner und ein Terminplan — mit Serverless-API-Funktionen und JWT-Authentifizierung.",
    },
    image: "/images/projects/edumed-dashboard.jpg",
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "PostgreSQL (Neon)", "Vercel Functions", "JWT"],
  },
  {
    title: { en: "Pizza Order Webapp", de: "Pizza-Bestell-Webapp" },
    description: {
      en: "Independent extension of a university project: role-based auth (customer, baker, driver) with bcrypt hashing and session-based login, a custom requireRole() access guard, and hardening against session fixation and SQL injection.",
      de: "Eigenständige Erweiterung eines Hochschulprojekts: rollenbasierte Authentifizierung (Kunde, Bäcker, Fahrer) mit bcrypt-Hashing und sessionbasiertem Login, ein eigener requireRole()-Zugriffsschutz sowie Absicherung gegen Session Fixation und SQL-Injection.",
    },
    image: "/images/projects/pizza-order-webapp.jpg",
    tech: ["PHP 8", "MariaDB/MySQL", "Docker", "Apache", "Vanilla JavaScript"],
  },
  {
    title: { en: "AI Finance Analysis Platform", de: "KI-Plattform für Finanzanalysen" },
    description: {
      en: "Python full-stack web app for automated financial market analysis, with real-time stock API integration, NLP-based sentiment analysis, interactive visualizations, and a short-term forecasting module built with Scikit-learn.",
      de: "Python-Full-Stack-Webanwendung zur automatisierten Finanzmarktanalyse mit Echtzeit-Anbindung an Aktien-APIs, NLP-basierter Sentiment-Analyse, interaktiven Visualisierungen und einem Modul für kurzfristige Prognosen mit Scikit-learn.",
    },
    image: "/images/projects/ai-finance-platform.svg",
    tech: ["Python", "Flask", "REST API", "NLTK", "Scikit-learn", "SQLite/PostgreSQL"],
  },
  {
    title: { en: "ProRunVis — Debugging & Visualization Tool", de: "ProRunVis — Debugging- & Visualisierungstool" },
    description: {
      en: "Contributed to an open-source debugging and visualization tool that renders program traces directly in source code, integrating JBMC for symbolic execution and runtime variable inspection, developed with Scrum/Kanban.",
      de: "Mitarbeit an einem Open-Source-Tool für Debugging und Visualisierung, das Programm-Traces direkt im Quellcode darstellt — mit JBMC-Integration für symbolische Ausführung und Inspektion von Laufzeitvariablen, entwickelt nach Scrum/Kanban.",
    },
    image: "/images/projects/prorunvis-debugger.svg",
    tech: ["Java", "JBMC", "Git", "Scrum/Kanban"],
  },
];
