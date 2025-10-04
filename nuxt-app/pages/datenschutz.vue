<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Datenschutzerklärung
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Transparent über den Umgang mit Ihren Daten bei S. Steegmüller Transportdienstleistungen
        </p>
        <div class="mt-6 text-sm text-gray-500 dark:text-gray-400">
          Letzte Aktualisierung: 22. September 2025
        </div>
      </div>

      <!-- Content -->
      <div
        class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
      >
        <!-- Table of Contents -->
        <div class="p-8 border-b border-gray-100 dark:border-gray-700">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Inhaltsverzeichnis</h2>
          <nav class="grid md:grid-cols-2 gap-4">
            <a
              v-for="section in tableOfContents"
              :key="section.id"
              :href="`#${section.id}`"
              class="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <span class="text-brand-600 dark:text-brand-400 font-semibold mr-3">{{
                section.number
              }}</span>
              <span class="text-gray-700 dark:text-gray-300">{{ section.title }}</span>
            </a>
          </nav>
        </div>

        <!-- Main Content -->
        <div class="p-8">
          <div class="prose prose-gray dark:prose-invert max-w-none space-y-8">
            <!-- Section 1 -->
            <section id="ueberblick">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                1. Datenschutz auf einen Blick
              </h2>

              <div
                class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-6"
              >
                <h3 class="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                  📋 Wichtigste Punkte
                </h3>
                <ul class="text-blue-800 dark:text-blue-200 space-y-2">
                  <li>• Wir erheben nur notwendige Daten für unsere Transportdienstleistungen</li>
                  <li>• Ihre Daten werden ausschließlich in Deutschland verarbeitet</li>
                  <li>• Externe Dienste (Google Maps) nur mit Ihrer Einwilligung</li>
                  <li>• Sie haben jederzeit Auskunfts- und Löschungsrechte</li>
                </ul>
              </div>

              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Allgemeine Hinweise
              </h3>
              <p class="text-gray-700 dark:text-gray-300 mb-6">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>

              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Datenerfassung auf dieser Website
              </h3>
              <div class="space-y-4">
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">
                    Wer ist verantwortlich für die Datenerfassung?
                  </h4>
                  <p class="text-gray-700 dark:text-gray-300">
                    Die Datenverarbeitung erfolgt durch Werner Steegmüller, S. Steegmüller
                    Transportdienstleistungen. Kontaktdaten finden Sie im Impressum.
                  </p>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">
                    Wie erfassen wir Ihre Daten?
                  </h4>
                  <p class="text-gray-700 dark:text-gray-300">
                    Ihre Daten werden erhoben, wenn Sie uns diese über Kontaktformulare mitteilen
                    oder automatisch beim Besuch der Website durch unsere IT-Systeme (z.B.
                    IP-Adresse, Browser-Typ).
                  </p>
                </div>
              </div>
            </section>

            <!-- Section 2 -->
            <section id="verantwortlicher">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                2. Verantwortlicher
              </h2>
              <div class="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <p class="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Verantwortlicher im Sinne der DSGVO:</strong>
                </p>
                <address class="text-gray-700 dark:text-gray-300 not-italic">
                  <strong>S. Steegmüller Transportdienstleistungen</strong><br />
                  Werner Steegmüller<br />
                  Kornblumenweg 13<br />
                  71272 Renningen<br />
                  Deutschland<br /><br />
                  <strong>Telefon:</strong>
                  <a href="tel:+4971599396183" class="text-brand-600 hover:text-brand-500"
                    >07159 939 61 83</a
                  ><br />
                  <strong>Mobil:</strong>
                  <a href="tel:+491727552023" class="text-brand-600 hover:text-brand-500"
                    >0172 755 20 23</a
                  ><br />
                  <strong>E-Mail:</strong>
                  <a
                    href="mailto:wswsteegmueller@gmail.com"
                    class="text-brand-600 hover:text-brand-500"
                    >wswsteegmueller@gmail.com</a
                  >
                </address>
              </div>
            </section>

            <!-- Section 3 -->
            <section id="hosting">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                3. Hosting und Server
              </h2>
              <p class="text-gray-700 dark:text-gray-300 mb-4">Unsere Website wird gehostet bei:</p>
              <div class="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 mb-4">
                <address class="text-gray-700 dark:text-gray-300 not-italic">
                  <strong>IONOS SE</strong><br />
                  Elgendorfer Str. 57<br />
                  56410 Montabaur<br />
                  Deutschland
                </address>
              </div>
              <p class="text-gray-700 dark:text-gray-300">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
                an zuverlässigem Hosting)<br />
                <strong>Speicherdauer:</strong> Server-Logs werden nach 7 Tagen automatisch
                gelöscht<br />
                <strong>Ort der Verarbeitung:</strong> Deutschland (DSGVO-konform)
              </p>
            </section>

            <!-- Section 4 -->
            <section id="kontaktaufnahme">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                4. Kontaktaufnahme
              </h2>

              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Kontaktformular
              </h3>
              <p class="text-gray-700 dark:text-gray-300 mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben zur
                Bearbeitung der Anfrage und für Rückfragen bei uns gespeichert.
              </p>
              <div class="grid md:grid-cols-3 gap-4 mb-6">
                <div class="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div class="text-green-600 dark:text-green-400 font-semibold">
                    Rechtsgrundlage
                  </div>
                  <div class="text-sm text-gray-600 dark:text-gray-300">
                    Art. 6 Abs. 1 lit. b DSGVO
                  </div>
                </div>
                <div class="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div class="text-blue-600 dark:text-blue-400 font-semibold">Speicherdauer</div>
                  <div class="text-sm text-gray-600 dark:text-gray-300">Bis Löschungsantrag</div>
                </div>
                <div class="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div class="text-purple-600 dark:text-purple-400 font-semibold">Weitergabe</div>
                  <div class="text-sm text-gray-600 dark:text-gray-300">Keine</div>
                </div>
              </div>

              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Telefon & E-Mail
              </h3>
              <p class="text-gray-700 dark:text-gray-300 mb-4">
                Bei telefonischem oder E-Mail-Kontakt speichern wir Ihre Daten zur Bearbeitung Ihrer
                Transportanfrage. Die Daten werden gelöscht, sobald sie nicht mehr erforderlich
                sind.
              </p>
            </section>

            <!-- Section 5 -->
            <section id="externe-dienste">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                5. Externe Dienste
              </h2>

              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Google Maps</h3>
              <div
                class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6 mb-4"
              >
                <h4 class="font-semibold text-amber-900 dark:text-amber-100 mb-2">
                  🗺️ Nur mit Ihrer Einwilligung
                </h4>
                <p class="text-amber-800 dark:text-amber-200">
                  Google Maps wird nur geladen, wenn Sie dies explizit über unser Cookie-Banner
                  erlauben. Ohne Ihre Zustimmung findet keine Datenübertragung statt.
                </p>
              </div>

              <div class="space-y-4">
                <div>
                  <strong class="text-gray-900 dark:text-white">Anbieter:</strong>
                  <span class="text-gray-700 dark:text-gray-300"
                    >Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland</span
                  >
                </div>
                <div>
                  <strong class="text-gray-900 dark:text-white">Zweck:</strong>
                  <span class="text-gray-700 dark:text-gray-300"
                    >Anzeige unseres Firmenstandorts</span
                  >
                </div>
                <div>
                  <strong class="text-gray-900 dark:text-white">Rechtsgrundlage:</strong>
                  <span class="text-gray-700 dark:text-gray-300"
                    >Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</span
                  >
                </div>
                <div>
                  <strong class="text-gray-900 dark:text-white">Datenschutz:</strong>
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-brand-600 hover:text-brand-500 underline"
                    >Google Datenschutzerklärung</a
                  >
                </div>
              </div>
            </section>

            <!-- Section 6 -->
            <section id="cookies">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                6. Cookies und lokale Speicherung
              </h2>

              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Technisch notwendige Cookies
              </h3>
              <p class="text-gray-700 dark:text-gray-300 mb-4">
                Unsere Website verwendet nur technisch notwendige lokale Speicherung:
              </p>

              <div class="overflow-x-auto">
                <table class="w-full border border-gray-200 dark:border-gray-700 rounded-lg">
                  <thead class="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th
                        class="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white"
                      >
                        Name
                      </th>
                      <th
                        class="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white"
                      >
                        Zweck
                      </th>
                      <th
                        class="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white"
                      >
                        Speicherdauer
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 font-mono">
                        theme
                      </td>
                      <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                        Dark/Light Mode Einstellung
                      </td>
                      <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Permanent</td>
                    </tr>
                    <tr>
                      <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 font-mono">
                        consent_maps
                      </td>
                      <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                        Google Maps Einwilligung
                      </td>
                      <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Permanent</td>
                    </tr>
                    <tr>
                      <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 font-mono">
                        buildBanner:dismissed
                      </td>
                      <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                        Website-Hinweisbanner Status
                      </td>
                      <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Permanent</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <!-- Section 7 -->
            <section id="ihre-rechte">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">7. Ihre Rechte</h2>

              <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-4">
                  <div class="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                    <h4 class="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                      📄 Auskunftsrecht
                    </h4>
                    <p class="text-blue-800 dark:text-blue-200 text-sm">
                      Sie haben das Recht, Auskunft über Ihre bei uns gespeicherten Daten zu
                      erhalten.
                    </p>
                  </div>

                  <div class="bg-green-50 dark:bg-green-900/20 rounded-xl p-4">
                    <h4 class="font-semibold text-green-900 dark:text-green-100 mb-2">
                      ✏️ Berichtigungsrecht
                    </h4>
                    <p class="text-green-800 dark:text-green-200 text-sm">
                      Sie können die Berichtigung unrichtiger Daten verlangen.
                    </p>
                  </div>

                  <div class="bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                    <h4 class="font-semibold text-red-900 dark:text-red-100 mb-2">
                      🗑️ Löschungsrecht
                    </h4>
                    <p class="text-red-800 dark:text-red-200 text-sm">
                      Sie können die Löschung Ihrer Daten verlangen, soweit keine gesetzlichen
                      Aufbewahrungsfristen bestehen.
                    </p>
                  </div>
                </div>

                <div class="space-y-4">
                  <div class="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4">
                    <h4 class="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                      🔒 Einschränkungsrecht
                    </h4>
                    <p class="text-purple-800 dark:text-purple-200 text-sm">
                      Sie können die Einschränkung der Verarbeitung verlangen.
                    </p>
                  </div>

                  <div class="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4">
                    <h4 class="font-semibold text-orange-900 dark:text-orange-100 mb-2">
                      📦 Datenportabilität
                    </h4>
                    <p class="text-orange-800 dark:text-orange-200 text-sm">
                      Sie haben das Recht auf Datenübertragbarkeit.
                    </p>
                  </div>

                  <div class="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                    <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      ⚖️ Widerspruchsrecht
                    </h4>
                    <p class="text-gray-700 dark:text-gray-300 text-sm">
                      Sie können der Verarbeitung Ihrer Daten widersprechen.
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="mt-6 bg-brand-50 dark:bg-brand-900/20 border border-brand-200 dark:border-brand-800 rounded-xl p-6"
              >
                <h4 class="font-semibold text-brand-900 dark:text-brand-100 mb-3">
                  📞 Kontakt für Datenschutzanfragen
                </h4>
                <p class="text-brand-800 dark:text-brand-200 mb-3">
                  Für alle Datenschutzanfragen wenden Sie sich direkt an Werner Steegmüller:
                </p>
                <div class="space-y-1 text-brand-700 dark:text-brand-300">
                  <div>
                    📞 <a href="tel:+491727552023" class="hover:underline">0172 755 20 23</a>
                  </div>
                  <div>
                    ✉️
                    <a href="mailto:wswsteegmueller@gmail.com" class="hover:underline"
                      >wswsteegmueller@gmail.com</a
                    >
                  </div>
                </div>
              </div>
            </section>

            <!-- Section 8 -->
            <section id="beschwerderecht">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                8. Beschwerderecht
              </h2>
              <p class="text-gray-700 dark:text-gray-300 mb-4">
                Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über unsere
                Verarbeitung personenbezogener Daten zu beschweren.
              </p>
              <div class="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Zuständige Aufsichtsbehörde:
                </h4>
                <address class="text-gray-700 dark:text-gray-300 not-italic">
                  Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit
                  Baden-Württemberg<br />
                  Königstraße 10a<br />
                  70173 Stuttgart<br />
                  <a
                    href="https://www.baden-wuerttemberg.datenschutz.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-brand-600 hover:text-brand-500 underline"
                  >
                    www.baden-wuerttemberg.datenschutz.de
                  </a>
                </address>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Unused import removed

useHead({
  title: 'Datenschutzerklärung - S. Steegmüller Transportdienstleistungen',
  meta: [
    {
      name: 'description',
      content:
        'Transparent über den Umgang mit Ihren Daten bei S. Steegmüller. DSGVO-konforme Datenschutzerklärung für unsere Transportdienstleistungen.'
    },
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

const tableOfContents = [
  { id: 'ueberblick', number: '1.', title: 'Datenschutz auf einen Blick' },
  { id: 'verantwortlicher', number: '2.', title: 'Verantwortlicher' },
  { id: 'hosting', number: '3.', title: 'Hosting und Server' },
  { id: 'kontaktaufnahme', number: '4.', title: 'Kontaktaufnahme' },
  { id: 'externe-dienste', number: '5.', title: 'Externe Dienste' },
  { id: 'cookies', number: '6.', title: 'Cookies und lokale Speicherung' },
  { id: 'ihre-rechte', number: '7.', title: 'Ihre Rechte' },
  { id: 'beschwerderecht', number: '8.', title: 'Beschwerderecht' }
]
</script>

<style scoped>
/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}

/* Table styling */
table {
  @apply text-sm;
}

/* Address styling */
address {
  @apply not-italic;
}
</style>
