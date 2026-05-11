/**
 * Blog Post Registry
 *
 * TO ADD A NEW POST:
 * 1. Create HTML file in posts/ folder (use any existing post as base)
 * 2. Add entry to BLOG_POSTS array below (newest first)
 * 3. Drop main image in assets/img/blog/
 *
 * Claude Code command: "Dodaj nowy post na bloga" / "New blog post"
 */
const BLOG_POSTS = [
  {
    slug: "jak-znalezc-nisze-amazon-2026",
    title: "Jak znaleźć niszę na Amazon w 2026 roku?",
    excerpt: "Sprawdzone metody wyszukiwania produktów z użyciem Helium 10 - od analizy popytu po walidację niszy. Pokażę Ci krok po kroku mój proces researchu.",
    tag: "Product Research",
    date: "2026-04-12",
    readTime: "8 min",
    image: null,
    author: "Tomasz Mickiewicz"
  },
  {
    slug: "5-bledow-ppc-amazon",
    title: "5 błędów w kampaniach PPC, które kosztują Cię pieniądze",
    excerpt: "Najczęstsze pułapki reklamowe na Amazon i jak ich unikać. Od złego targetowania po ignorowanie raportów - praktyczny przewodnik dla każdego sprzedawcy.",
    tag: "Amazon PPC",
    date: "2026-04-08",
    readTime: "6 min",
    image: null,
    author: "Tomasz Mickiewicz"
  },
  {
    slug: "anatomia-idealnego-listingu",
    title: "Anatomia idealnego listingu - co naprawdę sprzedaje na Amazon",
    excerpt: "Tytuł, bullet points, A+ Content - jak optymalizować listing, żeby konwertował. Rozkładam na części pierwsze to, co odróżnia top seller od przeciętnego produktu.",
    tag: "Listing Optimization",
    date: "2026-04-03",
    readTime: "10 min",
    image: null,
    author: "Tomasz Mickiewicz"
  },
  // Add new posts above this line (newest first)
];
