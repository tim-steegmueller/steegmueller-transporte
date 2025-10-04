<template>
  <section id="leistungen" class="relative py-20">
    <div
      class="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-brand-50/40 dark:from-midnight-900 dark:via-midnight-900 dark:to-midnight-900/80"
    />

    <div class="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:px-8">
      <div class="max-w-3xl text-center md:mx-auto">
        <span
          class="inline-flex items-center rounded-full bg-brand-100 px-4 py-1 text-sm font-semibold text-brand-700 dark:bg-brand-500/20 dark:text-brand-200"
          >Leistungen</span
        >
        <h2 class="mt-6 text-3xl font-bold text-neutral-900 md:text-4xl dark:text-white">
          Direktfahrten, feste Touren & zuverlässige Unterstützung
        </h2>
        <p class="mt-4 text-lg leading-relaxed text-neutral-600 dark:text-neutral-200">
          Wir kombinieren die Flexibilität eines Familienbetriebs mit professioneller Planung. Ob
          spontane Sonderfahrt oder regelmäßige Werkslogistik – wir organisieren Abholung, Laufzeit
          und Übergabe punktgenau.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <ServiceCard v-for="service in services" :key="service.id" :service="service" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ServiceCard from '~/components/ServiceCard.vue'

const services = ref([
  {
    id: 'express',
    icon: 'BoltIcon',
    title: 'Direkt- & Sonderfahrten',
    description:
      'Abholung innerhalb von 90 Minuten, keine Umladung, direkte Übergabe. Ideal für Ersatzteile, sensible Waren und dringende Dokumente.',
    features: ['Tages- & Nachtfahrten', 'GPS-Tracking auf Wunsch', 'Fixe Ansprechpartner']
  },
  {
    id: 'touren',
    icon: 'ClipboardDocumentCheckIcon',
    title: 'Feste Touren & Shuttle',
    description:
      'Regelmäßige Transporte für Produktion, Lager und Filialen. Wir planen Tourenpläne, übernehmen Abstellflächen und kümmern uns um Vertretungen.',
    features: ['Planung & Disposition', 'Fester Fahrerpool', 'Proaktive Ausfälle-Absicherung']
  },
  {
    id: 'regional',
    icon: 'MapPinIcon',
    title: 'Region Stuttgart im Fokus',
    description:
      'Renningen, Böblingen, Sindelfingen, Leonberg und Stuttgart. Wir kennen die Zufahrten, Werkstore und Ansprechpartner vor Ort.',
    features: ['Kennzeichen Leonberg (LEO)', 'Werksausweise hinterlegt', '24/7 Notfallhotline']
  },
  {
    id: 'umzug',
    icon: 'HomeModernIcon',
    title: 'Firmen- & Spezialumzüge',
    description:
      'Maschinen, Büros und sensible Technik. Wir koordinieren Verpackung, Tragehelfer und termingerechte Inbetriebnahme.',
    features: ['Vor-Ort-Besichtigung', 'Versicherung inklusive', 'Wochenendumzüge möglich']
  },
  {
    id: 'lager',
    icon: 'CubeTransparentIcon',
    title: 'Lager & Kommissionierung',
    description:
      'Kurzfristige Zwischenlagerung, Etikettierung und sichere Verpackung. Auf Wunsch übernehmen wir auch Retouren.',
    features: ['Temporäre Einlagerung', 'Etikettendruck', 'Retourenmanagement']
  },
  {
    id: 'beratung',
    icon: 'ChatBubbleLeftRightIcon',
    title: 'Beratung & Abläufoptimierung',
    description:
      'Wir prüfen bestehende Transportprozesse, ermitteln Einsparpotenziale und entwickeln alternative Routen.',
    features: [
      'Audit bestehender Touren',
      'Dokumentierte Empfehlungen',
      'Workshops für Mitarbeitende'
    ]
  }
])
</script>
