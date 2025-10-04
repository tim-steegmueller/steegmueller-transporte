<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Page Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Häufig gestellte Fragen
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Antworten auf die wichtigsten Fragen zu unseren Transportdienstleistungen
        </p>
      </div>

      <!-- FAQ Items -->
      <div class="space-y-6">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
        >
          <button
            class="w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-inset hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
            @click="toggleFaq(index)"
          >
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                {{ faq.question }}
              </h3>
              <div class="flex-shrink-0">
                <ChevronDownIcon
                  class="h-5 w-5 text-gray-400 transform transition-transform duration-200"
                  :class="{ 'rotate-180': openFaqs.includes(index) }"
                />
              </div>
            </div>
          </button>

          <transition name="fade-slide" @enter="onEnter" @leave="onLeave">
            <div v-show="openFaqs.includes(index)" class="px-8 pb-6">
              <div class="prose prose-gray dark:prose-invert max-w-none">
                <div class="text-gray-600 dark:text-gray-300" v-html="faq.answer" />
              </div>
            </div>
          </transition>
        </div>
      </div>

      <!-- Contact CTA -->
      <div class="mt-12 text-center">
        <div
          class="bg-brand-50 dark:bg-brand-900/20 border border-brand-200 dark:border-brand-800 rounded-2xl p-8"
        >
          <h2 class="text-2xl font-bold text-brand-900 dark:text-brand-100 mb-4">
            Weitere Fragen?
          </h2>
          <p class="text-brand-800 dark:text-brand-200 mb-6 max-w-2xl mx-auto">
            Werner Steegmüller und sein Team beraten Sie gerne persönlich zu Ihrem Transportbedarf.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+4971599396183"
              class="inline-flex items-center justify-center bg-brand-600 hover:bg-brand-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <PhoneIcon class="h-4 w-4 mr-2" />
              Jetzt anrufen
            </a>
            <NuxtLink
              to="/kontakt"
              class="inline-flex items-center justify-center bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-brand-600 border border-brand-600 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Kontaktformular
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ChevronDownIcon, PhoneIcon } from '@heroicons/vue/24/outline'

// FAQ Data
const faqs = [
  {
    question: 'Was kostet ein Transport mit S. Steegmüller?',
    answer: `<p>Unsere Transportpreise sind individuell und richten sich nach verschiedenen Faktoren:</p>
             <ul>
               <li><strong>Entfernung und Route</strong> - Direktfahrten oder Teilladungen</li>
               <li><strong>Art und Umfang der Ladung</strong> - Gewicht, Volumen, besondere Anforderungen</li>
               <li><strong>Zeitfaktor</strong> - Eilaufträge oder Standardlieferung</li>
               <li><strong>Zusatzleistungen</strong> - Be- und Entladung, Verpackung</li>
             </ul>
             <p>Unser Fokus liegt auf <strong>Geschäftskunden</strong>, aber wir führen auch ausgewählte Privataufträge durch. Angebote erhalten Sie normalerweise <strong>innerhalb von 2-4 Stunden</strong>, in Ausnahmefällen kann es auch mal länger dauern.</p>`
  },
  {
    question: 'Welche Transportleistungen bieten Sie an?',
    answer: `<p>S. Steegmüller bietet ein breites Spektrum an Transportdienstleistungen:</p>
             <ul>
               <li><strong>Direktfahrten</strong> - Exklusive Transporte für Ihre Ladung</li>
               <li><strong>Regionale Transporte</strong> - Schwerpunkt Region Stuttgart/Baden-Württemberg</li>
               <li><strong>Umzüge</strong> - Firmen- und Privatumzüge</li>
               <li><strong>Notfall-Transporte</strong> - Auch außerhalb der Geschäftszeiten</li>
               <li><strong>Regelmäßige Routen</strong> - Für wiederkehrende Transportbedürfnisse</li>
               <li><strong>Schwertransporte</strong> - Mit entsprechender Ausrüstung</li>
             </ul>
             <p>Unser Schwerpunkt liegt auf <strong>zuverlässigen B2B-Transporten</strong> für Geschäftskunden.</p>`
  },
  {
    question: 'In welchen Gebieten sind Sie tätig?',
    answer: `<p>Unser Hauptgebiet ist die <strong>Region Stuttgart</strong> und <strong>Baden-Württemberg</strong>:</p>
             <ul>
               <li><strong>Stammgebiet:</strong> Stuttgart, Renningen, Böblingen, Leonberg, Sindelfingen</li>
               <li><strong>Erweiterte Region:</strong> Calw, Pforzheim, Karlsruhe, Heilbronn, Tübingen</li>
               <li><strong>Deutschland-weit:</strong> Auf Anfrage für größere Aufträge</li>
               <li><strong>Europaweite Transporte:</strong> In Kooperation mit Partnerunternehmen</li>
             </ul>
             <p>Für Transporte außerhalb unseres Stammgebiets erstellen wir gerne ein individuelles Angebot.</p>`
  },
  {
    question: 'Wie schnell erhalte ich ein Angebot?',
    answer: `<p>Wir legen großen Wert auf <strong>schnelle Reaktionszeiten</strong>:</p>
             <ul>
               <li><strong>Standardangebote:</strong> Innerhalb von 2-4 Stunden</li>
               <li><strong>Eilaufträge:</strong> Sofortige Rückmeldung per Telefon</li>
               <li><strong>Komplexe Anfragen:</strong> Spätestens am nächsten Werktag</li>
               <li><strong>Notfälle:</strong> 24/7 Erreichbarkeit über Werner Steegmüller</li>
             </ul>
             <p>In Ausnahmefällen kann es auch mal länger dauern, zum Beispiel bei sehr spezifischen Anforderungen oder am Wochenende.</p>`
  },
  {
    question: 'Sind Sie auch außerhalb der Geschäftszeiten erreichbar?',
    answer: `<p>Ja, für <strong>Notfälle und eilige Aufträge</strong> sind wir auch außerhalb der regulären Zeiten da:</p>
             <ul>
               <li><strong>Reguläre Zeiten:</strong> Mo-Fr 08:00-18:00 Uhr</li>
               <li><strong>Wochenende:</strong> Nach Vereinbarung</li>
               <li><strong>Notfall-Hotline:</strong> Werner Steegmüller mobil 0172 755 20 23</li>
               <li><strong>WhatsApp:</strong> Für schnelle Kommunikation verfügbar</li>
             </ul>
             <p>🚨 <strong>Notfall-Transporte</strong> führen wir auch außerhalb der Geschäftszeiten durch - sprechen Sie uns einfach an!</p>`
  },
  {
    question: 'Welche Fahrzeuge stehen zur Verfügung?',
    answer: `<p>Unser Fuhrpark ist optimal auf verschiedene Transportbedürfnisse abgestimmt:</p>
             <ul>
               <li><strong>3,5t LKW</strong> - Für kleinere und mittlere Transporte</li>
               <li><strong>7,5t LKW</strong> - Standard-Transporte mit mehr Ladevolumen</li>
               <li><strong>Anhänger-Gespanne</strong> - Für größere Ladungen</li>
               <li><strong>Pritschenwagen</strong> - Für Baumaterialien und sperrige Güter</li>
               <li><strong>Plane/Koffer</strong> - Wettergeschützte Transporte</li>
             </ul>
             <p>Alle Fahrzeuge werden <strong>regelmäßig gewartet</strong> und entsprechen den aktuellen Sicherheitsstandards.</p>`
  },
  {
    question: 'Führen Sie auch Privatumzüge durch?',
    answer: `<p>Ja, neben unserem Hauptgeschäft mit <strong>Geschäftskunden</strong> führen wir auch <strong>ausgewählte Privataufträge</strong> durch:</p>
             <ul>
               <li><strong>Privatumzüge</strong> - Besonders in der Region Stuttgart</li>
               <li><strong>Möbeltransporte</strong> - Einzelstücke oder komplette Einrichtungen</li>
               <li><strong>Entsorgungsfahrten</strong> - Sperrmüll und Altmöbel</li>
               <li><strong>Garten-/Bautransporte</strong> - Materialien und Ausstattung</li>
             </ul>
             <p>Kontaktieren Sie Werner Steegmüller direkt für Ihre private Transportanfrage - wir prüfen gerne die Möglichkeiten!</p>`
  },
  {
    question: 'Wie ist die Ladung versichert?',
    answer: `<p>Ihre Ladung ist bei uns <strong>umfassend abgesichert</strong>:</p>
             <ul>
               <li><strong>Transportversicherung</strong> - Deckung gegen Transportschäden</li>
               <li><strong>Haftpflichtversicherung</strong> - Für Schäden an Dritten</li>
               <li><strong>Güterschädenversicherung</strong> - Je nach Warenwert und Vereinbarung</li>
               <li><strong>Ladungssicherung</strong> - Nach aktuellen Vorschriften (VDI 2700)</li>
             </ul>
             <p>Details zur Versicherung klären wir gerne individuell bei Ihrer Anfrage. Bei wertvollen Gütern können zusätzliche Versicherungen vereinbart werden.</p>`
  },
  {
    question: 'Wann erhalte ich die Rechnung?',
    answer: `<p>Die <strong>Rechnungsstellung</strong> erfolgt zeitnah nach Transportabschluss:</p>
             <ul>
               <li><strong>Normalfall:</strong> Rechnung erfolgt ein paar Tage nach dem Transport</li>
               <li><strong>Spätestens:</strong> Eine Woche nach Leistungserbringung</li>
               <li><strong>Geschäftskunden:</strong> Nach vereinbarten Zahlungszielen</li>
               <li><strong>Privataufträge:</strong> Meist Barzahlung oder kurzfristige Überweisung</li>
             </ul>
             <p>Bei regelmäßigen Transporten können auch <strong>Sammelrechnungen</strong> vereinbart werden.</p>`
  },
  {
    question: 'Was mache ich bei sehr dringenden Transporten?',
    answer: `<p>Bei <strong>sehr dringenden und zeitkritischen</strong> Transporten:</p>
             <ul>
               <li><strong>Sofort anrufen:</strong> 0172 755 20 23 (Werner Steegmüller direkt)</li>
               <li><strong>Auch außerhalb der Geschäftszeiten</strong> - Notfall-Hotline</li>
               <li><strong>WhatsApp:</strong> Für schnelle Bilder und Details</li>
               <li><strong>Express-Bearbeitung:</strong> Sofortige Prüfung der Machbarkeit</li>
             </ul>
             <p>🚨 Bei <strong>sehr dringenden Fällen</strong> sollten Sie direkt unter der Mobilnummer anrufen - so erreichen Sie Werner Steegmüller am schnellsten!</p>`
  },
  {
    question: 'Wie plane ich am besten eine Direktfahrt?',
    answer: `<p>Für eine <strong>stressfreie Direktfahrt</strong> empfehlen wir unsere <a href="/blog/direktfahrten-tipps" class="text-brand-600 hover:text-brand-500 underline">5 Tipps für Direktfahrten</a>:</p>
             <ul>
               <li><strong>Frühzeitige Planung</strong> - Verkehrszeiten und Route beachten</li>
               <li><strong>Klare Kommunikation</strong> - Ankunftszeit und Zugang abstimmen</li>
               <li><strong>Ladungssicherung</strong> - Sicherheitsvorschriften einhalten</li>
               <li><strong>Flexible Routen</strong> - Alternative Wege bei Stau</li>
               <li><strong>Dokumentation</strong> - Lieferscheine und Feedback</li>
             </ul>
             <p>Mehr Details finden Sie in unserem <strong>Blog-Artikel</strong> mit praktischen Tipps aus über 20 Jahren Erfahrung.</p>`
  },
  {
    question: 'Welche Trends gibt es in der Logistik?',
    answer: `<p>Die <strong>Logistikbranche 2025</strong> wird von mehreren Trends geprägt (Details in unserem <a href="/blog/logistik-trends-2025" class="text-brand-600 hover:text-brand-500 underline">Blog-Artikel</a>):</p>
             <ul>
               <li><strong>Nachhaltigkeit</strong> - CO₂-Reduktion und umweltfreundliche Lösungen</li>
               <li><strong>Digitalisierung</strong> - Smart Tracking und automatisierte Prozesse</li>
               <li><strong>Flexibilität</strong> - Anpassung an sich ändernde Kundenbedürfnisse</li>
               <li><strong>Regionale Stärke</strong> - Kurze Wege und lokale Kompetenz</li>
             </ul>
             <p>S. Steegmüller setzt auf diese Trends mit <strong>modernem Equipment</strong> und <strong>regionaler Expertise</strong>.</p>`
  },
  {
    question: 'Warum regionale Transporte wählen?',
    answer: `<p><strong>Regionale Transportdienstleister</strong> bieten entscheidende Vorteile (mehr dazu in unserem <a href="/blog/regionale-transporte" class="text-brand-600 hover:text-brand-500 underline">Blog-Artikel</a>):</p>
             <ul>
               <li><strong>Lokale Expertise</strong> - Kenntnis der Region Stuttgart</li>
               <li><strong>Kurze Reaktionszeiten</strong> - Schnell vor Ort</li>
               <li><strong>Persönlicher Service</strong> - Direkter Kontakt zu Werner Steegmüller</li>
               <li><strong>Umweltfreundlich</strong> - Kurze Anfahrtswege</li>
               <li><strong>Flexibilität</strong> - Anpassung an lokale Gegebenheiten</li>
             </ul>
             <p>Als <strong>Familienunternehmen aus Renningen</strong> kennen wir die Region wie unsere Westentasche!</p>`
  }
]

// State
const openFaqs = ref([])

// Methods
const toggleFaq = index => {
  const isOpen = openFaqs.value.includes(index)
  if (isOpen) {
    openFaqs.value = openFaqs.value.filter(i => i !== index)
  } else {
    openFaqs.value.push(index)
  }
}

// Animation methods
const onEnter = el => {
  el.style.height = '0'
  void el.offsetHeight // trigger reflow
  el.style.height = el.scrollHeight + 'px'
}

const onLeave = el => {
  el.style.height = el.scrollHeight + 'px'
  void el.offsetHeight // trigger reflow
  el.style.height = '0'
}

// SEO and structured data
useHead({
  title: 'FAQ - Häufig gestellte Fragen | S. Steegmüller Transportdienstleistungen',
  meta: [
    {
      name: 'description',
      content:
        'Antworten auf häufig gestellte Fragen zu Transportkosten, Leistungen und Service von S. Steegmüller. Schnelle Angebote, regionale Transporte, Notfall-Service.'
    },
    {
      name: 'keywords',
      content:
        'Transport FAQ, Transportkosten, Preise Spedition, Werner Steegmüller, Geschäftskunden Transport, Privatumzug, Stuttgart Transport'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer.replace(/<[^>]*>/g, '') // Remove HTML tags for structured data
          }
        }))
      })
    }
  ]
})
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
