# Inspiration · Steegmüller Transporte

Ziel: Eine ruhige, vertrauenswürdige Einseiter-Site, die auf dem Handy in 10 Sekunden überzeugt. Fokus auf Anruf oder Anfrage. Keine Effekte, klare Typo, starke CTAs.

## Brand und Look
Grundstimmung: helles Layout, dunkles Grün als Akzent, kühle Grautöne für Text und Linien. H1 klar, ohne Schlagworte wie „Premium“. Bildsprache: reale Fahrzeugfotos, keine generischen Stockbilder. Ton: nüchtern, zuverlässig, pünktlich.

Farben: brand-600 `#1f8a6e`, brand-500 `#2fae8b`, gray-900 `#333333`, gray-700 `#667085`, gray-100 `#f5f5f5`.

## Startbotschaft (Hero, Varianten)
Variante kurz: „S. Steegmüller Transportdienstleistungen. Direktfahrten aus Renningen in den Raum Böblingen, Sindelfingen, Leonberg und Stuttgart. Pünktlich, zuverlässig, kurzfristig verfügbar.“  
Variante mit Nutzen: „Direktfahrt ohne Umladen. Feste Touren für Betriebe. Schnelle Terminabstimmung.“  
CTA immer sichtbar: „Jetzt anrufen“ und „Anfrage senden“.

## Seitenfluss
Oben: Logo, H1, zwei Sätze Nutzen, CTA-Buttons.  
Darunter: drei Mikroabschnitte als Beweise. Beispiel: „Direktfahrt“, „Feste Touren“, „Kurze Wege“. Je Abschnitt zwei Sätze, keine Romane.  
Dann: kompaktes Formular. Pflicht: Name, Telefon. Optional: Start, Ziel, Termin, Nachricht.  
Zum Schluss: mini „Über uns“ mit einem echten Foto, Adresse, Öffnungszeiten, Kartenlink, Impressum, Datenschutz.

## Mikrotexte (ready to paste)
Telefon-CTA: „07159 9396183 anrufen“ oder „Jetzt anrufen“.  
Formular-Headline: „Anfrage senden“.  
Feldplatzhalter: „Startort“, „Zielort“, „Terminwunsch“, „Kurzbeschreibung“.  
Vertrauenssatz: „Familienbetrieb aus Renningen, eingespielte regionale Strecken, direkte Erreichbarkeit.“

## Rezensionen
Kurze Zitate, nicht zu werblich. Beispiel: „Zuverlässig, freundlich, flexibel. Auftrag in Böblingen pünktlich erledigt. – M. H., Leonberg, 2024.“ Zwei bis drei echte Stimmen genügen. Keine Sternewunder, eher bodenständig.

## WhatsApp und Kontakt
Optionaler Button „Direkt per WhatsApp schreiben“ mit deeplink. Nur, wenn die Nummer dafür bereitsteht. Mailadresse im Footer, nicht prominent.

## SEO-Kerne
Title lokal formulieren, nicht generisch. Description mit Nutzen und Regionen. Eine H1 pro Seite. Structured Data als LocalBusiness. Bilder mit Ortsbezug im Dateinamen und Alt-Text. Google Business Profil pflegen, Öffnungszeiten und Fotos aktuell halten.

## Nuxt 4 Umsetzung (Kurzgerüst)
- `@nuxt/image` für Bilder, `@nuxtjs/sitemap` und `@nuxtjs/robots` für Indexierung.
- Statischer Export, Deployment auf IONOS Webspace, Cloudflare Full strict.

Beispiel Hero und CTAs (Tailwind, kompakt):
```vue
<section class="bg-gray-100">
  <div class="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
    <div>
      <h1 class="text-3xl md:text-5xl font-extrabold text-gray-900">
        S. Steegmüller Transportdienstleistungen
      </h1>
      <p class="mt-4 text-lg text-gray-700">
        Direktfahrten aus Renningen in den Raum Böblingen, Sindelfingen, Leonberg und Stuttgart. Pünktlich, zuverlässig, kurzfristig verfügbar.
      </p>
      <div class="mt-6 flex gap-3">
        <a href="tel:+4971599396183" class="bg-brand-600 text-white px-6 py-3 rounded font-semibold">Jetzt anrufen</a>
        <a href="#kontakt" class="px-6 py-3 rounded border border-gray-300 text-gray-900">Anfrage senden</a>
      </div>
    </div>
    <NuxtImg src="/images/transporter.jpg" alt="Direktfahrt in Renningen" class="rounded-lg shadow" />
  </div>
</section>
