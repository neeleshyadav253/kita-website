export type Lang = 'de' | 'en';

export const translations = {
  de: {
    brand: {
      name: 'AWO Kindergarten Haus Sonnenschein',
      tagline: 'Thüringer Eltern-Kind-Zentrum · Eisenach',
    },
    common: {
      learnMore: 'Mehr erfahren',
      readMore: 'Weiterlesen',
      viewAll: 'Alle anzeigen',
      backToHome: 'Zur Startseite',
      bookTour: 'Besichtigung buchen',
    },
    nav: {
      welcome: 'Willkommen',
      about: 'Über uns',
      pedagogy: 'Pädagogik',
      groups: 'Gruppen',
      team: 'Team',
      enrollment: 'Anmeldung',
      contact: 'Kontakt',
      cta: 'Platz anfragen',
      langToggle: 'EN',
    },
    hero: {
      eyebrow: 'AWO Kindertagesstätte · seit 1998',
      title: 'Hier wachsen kleine Persönlichkeiten.',
      titleAccent: 'Mit Herz.',
      subtitle: 'Ein Ort zum Entdecken, Wachsen und Wohlfühlen — mitten in Eisenach.',
      description:
        'Krippe und Kindergarten unter einem Dach. Wir begleiten 32 Kinder im Alter von 0 bis 6 Jahren — mit einem festen, qualifizierten Team, frisch gekochter Bio-Küche und wöchentlichen Waldtagen.',
      primaryCta: 'Kita kennenlernen',
      secondaryCta: 'Kontakt aufnehmen',
      stat1: 'Jahre Erfahrung',
      stat2: 'Glückliche Kinder',
      stat3: 'Pädagog:innen',
      badges: {
        bio: 'Bio-Küche',
        wald: 'Waldtag',
        sprache: 'Sprach-Kita',
        inklusion: 'Inklusiv',
      },
      microQuoteAuthor: 'Familie Becker',
      microQuote: '„Unsere Tochter rennt jeden Morgen in die Kita.“',
      trustLine: 'Träger: AWO Landesverband Thüringen · ThEKiZ · Anerkannt nach SGB VIII',
      foodLabel: 'Mittagessen',
      foodValue: '90 % Bio · frisch',
      ratingLabel: 'Eltern-Bewertung',
      ratingValue: '4,9 / 5 · 56 Stimmen',
    },
    about: {
      eyebrow: 'Über uns',
      title: 'Ein Ort der Begegnung — für Kinder und Familien.',
      description:
        'Das AWO Haus Sonnenschein ist Kindergarten und Thüringer Eltern-Kind-Zentrum (ThEKiZ) in einem. Wir betreuen Kinder ab dem ersten Lebensjahr nach modernsten Standards und sind zugleich ein Ort der Begegnung mit Unterstützung, Begleitung und Beratung bei Alltags- und Lebensfragen. Träger ist die Arbeiterwohlfahrt — seit 1919 stehen wir für Freiheit, Gleichheit, Gerechtigkeit, Solidarität, Emanzipation und Toleranz.',
      cards: [
        {
          title: 'Öffnungszeiten',
          text: 'Montag – Freitag\n7:00 – 17:00 Uhr',
          sub: 'Flexible Bring- und Abholzeiten',
        },
        {
          title: 'Altersgruppen',
          text: 'Krippe: 0 – 3 Jahre\nKindergarten: 3 – 6 Jahre',
          sub: 'Liebevolle Betreuung in kleinen Gruppen',
        },
        {
          title: 'Standort',
          text: 'Am Amrichen Rasen 1\n99817 Eisenach',
          sub: '5 Min. zum Stadtzentrum · Bushaltestelle',
        },
      ],
      imageCaptions: ['Unser Haus · Eingang', 'Eingang & Garten', 'Wandkunst · seit 1978'],
    },
    whyUs: {
      eyebrow: 'Warum Eltern uns wählen',
      title: 'Was uns ausmacht.',
      description:
        'Sechs Dinge, die unsere Kita besonders machen — und auf die wir jeden Tag wieder stolz sind.',
      items: [
        {
          title: 'Kleine, feste Gruppen',
          text: '12 Kinder in der Krippe, 20 im Kindergarten — mit jeweils drei Bezugspersonen für echte Nähe.',
          pill: '1:4 Betreuung',
        },
        {
          title: 'Bio-Küche im Haus',
          text: 'Unsere Köchin Selma kocht täglich frisch — saisonal, regional und zu 90 % aus Bio-Zutaten.',
          pill: '90 % Bio',
        },
        {
          title: 'Waldtag jede Woche',
          text: 'Bei jedem Wetter: ein ganzer Tag im Hainich-Nationalpark. Bewegung, Natur, freies Spiel.',
          pill: '52 Wochen',
        },
        {
          title: 'Sprach-Kita',
          text: 'Zertifizierte Sprachfachkraft, alltagsintegrierte Sprachbildung und Mehrsprachigkeit auf Augenhöhe.',
          pill: 'Zertifiziert',
        },
        {
          title: 'Sanfte Eingewöhnung',
          text: 'Wir folgen dem Berliner Eingewöhnungsmodell — gemeinsam mit Ihnen, im Tempo Ihres Kindes.',
          pill: '2–4 Wochen',
        },
        {
          title: 'Inklusiv & vielfältig',
          text: 'Jedes Kind ist willkommen — wir kooperieren eng mit Frühförderstellen und Therapeut:innen.',
          pill: 'Inklusion',
        },
      ],
    },
    schedule: {
      eyebrow: 'Ein Tag in der Kita',
      title: 'So sieht unser Tag aus.',
      description:
        'Verlässliche Rituale geben den Kindern Sicherheit — und uns die Freiheit, spontan auf das einzugehen, was die Kinder gerade beschäftigt.',
      items: [
        { time: '07:00', title: 'Ankommen & Frühstück', text: 'Sanfter Start mit offenem Frühstück und Zeit zum Ankommen.', accent: 'sun' },
        { time: '09:00', title: 'Morgenkreis', text: 'Lieder, Erzählrunde, Plan für den Tag — alle Stimmen werden gehört.', accent: 'red' },
        { time: '09:30', title: 'Bildungsangebote', text: 'Projektarbeit, freies Spiel, Garten — drinnen wie draußen.', accent: 'grass' },
        { time: '11:45', title: 'Mittagessen', text: 'Frisch gekocht, in Familienatmosphäre, mit Sprachimpulsen am Tisch.', accent: 'blush' },
        { time: '12:30', title: 'Ruhezeit', text: 'Schlafenszeit für die Kleinen, leise Angebote für die Großen.', accent: 'lavender' },
        { time: '14:30', title: 'Snack & Projektzeit', text: 'Vorschule, Musik, Werkstatt — die Großen vertiefen Interessen.', accent: 'sun' },
        { time: '16:00 – 17:00', title: 'Abholzeit', text: 'Im Garten, mit kurzen Tür-und-Angel-Gesprächen mit Ihnen.', accent: 'red' },
      ],
      weekdays: 'Mo–Fr',
      openingHours: '07:00 – 17:00',
      openingNote: 'Flexible Bring- und Abholzeiten. Freitags bis 16 Uhr.',
    },
    gallery: {
      eyebrow: 'Einblicke',
      title: 'Bilder aus unserem Alltag.',
      description:
        'Ein paar Eindrücke aus dem Garten, der Werkstatt und unseren hellen Gruppenräumen.',
      captions: [
        'Spielen im Atelier',
        'Garten im Sommer',
        'Frühstücksbuffet',
        'Bauecke',
        'Waldtag',
        'Lese-Ecke',
      ],
      cta: 'Lust auf einen Rundgang? Wir zeigen Ihnen gerne alles persönlich.',
      locationsTag: 'Garten · Werkstatt · Wald',
      videoBadge: 'Video',
    },
    lifeAtKita: {
      eyebrow: 'Ein Tag bei uns',
      title: 'Sehen Sie selbst, wie unser Kita-Alltag aussieht.',
      description:
        'Ein kurzer Einblick in unsere Gruppenräume, das freie Spiel im Garten und ruhige Momente im Atelier — gezeigt mit Einwilligung der Familien.',
      bullets: [
        'Freies Spiel und entdeckendes Lernen in kleinen Gruppen',
        'Garten, Werkstatt und Bewegungsraum täglich nutzbar',
        'Behutsame Eingewöhnung mit festen Bezugspersonen',
      ],
      durationLabel: '1:24 Min',
      playCta: 'Video abspielen',
    },
    awoValues: {
      eyebrow: 'Unsere Werte',
      title: 'Die sechs Grundwerte der AWO.',
      description:
        'Seit 1919 sind die Grundwerte der Arbeiterwohlfahrt unser Kompass — in der Bildungsarbeit ebenso wie im Miteinander mit Familien und Stadtteil.',
      items: [
        { name: 'Freiheit', text: 'Jedes Kind darf eigene Wege gehen und Meinungen entwickeln.' },
        { name: 'Gleichheit', text: 'Wir begegnen jedem Menschen mit gleichem Respekt — unabhängig von Herkunft, Sprache oder Religion.' },
        { name: 'Gerechtigkeit', text: 'Wir schaffen faire Bildungschancen — von Anfang an.' },
        { name: 'Solidarität', text: 'Wir stehen füreinander ein — als Team, als Familien, als Nachbarschaft.' },
        { name: 'Emanzipation', text: 'Wir stärken Kinder und Familien darin, ihr Leben selbstbestimmt zu gestalten.' },
        { name: 'Toleranz', text: 'Vielfalt ist unsere Normalität. „Anderssein" ist hier kein Thema, sondern Alltag.' },
      ],
    },
    careers: {
      eyebrow: 'Bei uns arbeiten',
      title: 'Werden Sie Teil unseres Teams.',
      description:
        'Die AWO Thüringen ist mit über 13.000 Beschäftigten einer der größten sozialen Träger im Land. Bei uns in Eisenach suchen wir engagierte Menschen für die Arbeit mit Kindern und Familien.',
      bullets: [
        'Erzieher:innen, Heilerziehungspfleger:innen und Sozialpädagog:innen (m/w/d)',
        'Praktikum, FSJ und Bundesfreiwilligendienst — Quereinstieg willkommen',
        'Ausbildung über das Institut für Berufsbildung und Sozialmanagement (IBS)',
      ],
      primary: 'Offene Stellen ansehen',
      primaryHref: 'https://awothueringen.de/arbeiten-bei-der-awo/stellenangebote/',
      secondary: 'Initiativ bewerben',
    },
    thekiz: {
      eyebrow: 'ThEKiZ Haus Sonnenschein',
      title: 'Thüringer Eltern-Kind-Zentrum.',
      description:
        'Neben dem Kindergarten sind wir ein Ort der Begegnung. Im ThEKiZ finden Familien Unterstützung, Begleitung und Beratung bei Alltags- und Lebensfragen — offen, kostenfrei und in Eisenach gut erreichbar.',
      offers: [
        {
          title: 'Begegnung',
          text: 'Offene Eltern-Treffen, Frühstücks- und Spielgruppen für Familien aus dem Stadtteil.',
        },
        {
          title: 'Beratung',
          text: 'Vertrauliche Beratung zu Erziehung, Familie, Alltag — auf Wunsch auch in mehreren Sprachen.',
        },
        {
          title: 'Begleitung',
          text: 'Kurse, Workshops und Veranstaltungen zu Eingewöhnung, Sprache, Ernährung und kindlicher Entwicklung.',
        },
        {
          title: 'Vernetzung',
          text: 'Wir vernetzen Familien mit Hebammen, Frühförderung, Familienbildung und Behörden in Eisenach.',
        },
      ],
      programs: [
        'Bundesprogramm „Sprach-Kitas: Weil Sprache der Schlüssel zur Welt ist"',
        'Landesprogramm „Vielfalt vor Ort begegnen — Professioneller Umgang mit Heterogenität"',
        'Thüringer Bildungsplan bis 18 Jahre',
      ],
      cta: 'ThEKiZ kennenlernen',
    },
    testimonials: {
      eyebrow: 'Stimmen von Eltern',
      title: 'Was Familien über uns sagen.',
      description:
        'Drei Stimmen aus über 60 Familien, die ihr Kind aktuell oder in den letzten Jahren bei uns betreut wissen.',
      items: [
        {
          quote:
            'Wir hatten Angst vor der Eingewöhnung — und waren nach zwei Wochen ehrlich erstaunt, wie liebevoll und professionell hier alles begleitet wird. Mira fühlt sich rundum wohl.',
          name: 'Lena & Tom Becker',
          role: 'Eltern von Mira (2)',
          rating: 5,
        },
        {
          quote:
            'Die Mischung aus festen Strukturen und echter Mitbestimmung der Kinder ist genau das, was wir uns gewünscht haben. Unser Sohn kommt jeden Tag stolz mit einer neuen Geschichte nach Hause.',
          name: 'Aylin Demir',
          role: 'Mutter von Emir (5)',
          rating: 5,
        },
        {
          quote:
            'Als Familie mit zwei Müttern war uns ein Ort wichtig, an dem unsere Tochter Vielfalt selbstverständlich erlebt. Das spüren wir hier vom ersten Gespräch an.',
          name: 'Sophie & Jana Krüger',
          role: 'Eltern von Lia (3)',
          rating: 5,
        },
      ],
      ratingValue: '4,9 / 5',
      ratingSubtitle: 'aus 56 Eltern-Bewertungen',
    },
    partners: {
      eyebrow: 'Anerkennung & Kooperationen',
      title: 'Mit starken Partnern an unserer Seite.',
      description:
        'Wir sind anerkannte Sprach-Kita, Mitglied im AWO-Verbund und kooperieren eng mit Schulen, Beratungsstellen und Therapeut:innen im Stadtteil.',
      logos: [
        'AWO Eisenach',
        'Sprach-Kita',
        'Thüringer Bildungsplan',
        'Bio-zertifiziert',
        'Frühförderzentrum',
        'Familienzentrum Eisenach',
        'KitaApp',
        'Stadtverwaltung Eisenach',
      ],
    },
    pedagogy: {
      eyebrow: 'Unsere Pädagogik',
      title: 'Innovative Lehrmethoden.',
      description:
        'Unser pädagogisches Handeln orientiert sich an den Bedürfnissen, Interessen und Lebenswelten der Kinder — basierend auf dem Thüringer Bildungsplan.',
      cards: [
        {
          title: 'Situationsansatz',
          text: 'Wir greifen Themen und Erlebnisse der Kinder auf und gestalten daraus gemeinsame Lernprozesse.',
        },
        {
          title: 'Natur & Bewegung',
          text: 'Tägliche Bewegung an der frischen Luft, Waldtage und unser naturnaher Garten fördern Gesundheit und Selbstvertrauen.',
        },
        {
          title: 'Sprache & Literacy',
          text: 'Vorlesen, Singen, Erzählen — als anerkannte Sprach-Kita begleiten wir Kinder bewusst beim Erwerb sprachlicher Kompetenzen.',
        },
        {
          title: 'Partizipation',
          text: 'Kinder treffen bei uns echte Entscheidungen. Demokratie wird im Kita-Alltag erlebbar — vom Speiseplan bis zur Raumgestaltung.',
        },
      ],
    },
    groups: {
      eyebrow: 'Unsere Gruppen',
      title: 'Krippe & Kindergarten unter einem Dach.',
      description:
        'Wir betreuen Kinder in zwei alters­gerecht gestalteten Bereichen mit erfahrenen pädagogischen Fachkräften — und mit einem fließenden, sanften Übergang.',
      items: [
        {
          name: 'Krippe Sonnenkäfer',
          age: '0 – 3 Jahre',
          size: '12 Kinder',
          ratio: '3 Fachkräfte',
          features: ['Berliner Eingewöhnung', 'Bezugspersonenarbeit', 'Snoezelen-Raum'],
          text: 'Ein geschützter Raum für die Allerkleinsten — mit viel Geborgenheit, festen Bezugspersonen und einer behutsamen Eingewöhnung nach dem Berliner Modell.',
        },
        {
          name: 'Kindergarten Regenbogen',
          age: '3 – 6 Jahre',
          size: '20 Kinder',
          ratio: '3 Fachkräfte',
          features: ['Vorschule "Schlaufüchse"', 'Waldtag wöchentlich', 'Projektarbeit'],
          text: 'Freies Spiel, gezielte Lernangebote und gemeinsame Projekte bereiten die Kinder spielerisch auf die Schule und das Leben vor.',
        },
      ],
      sizeLabel: 'Gruppengröße',
      staffLabel: 'Betreuung',
    },
    team: {
      eyebrow: 'Unser Team',
      title: 'Junge Köpfe für eine bessere Zukunft.',
      description:
        'Unser engagiertes, multiprofessionelles Team begleitet Ihr Kind mit Herz, Erfahrung und stetiger Weiterbildung. Alle Fachkräfte mit erweitertem Führungszeugnis.',
      members: [
        { name: 'Anna Töpfer', role: 'ThEKiZ-Leitung', tag: 'Thüringer Eltern-Kind-Zentrum' },
        { name: 'Markus Weber', role: 'Stellv. Leitung', tag: 'Erzieher (B.A.)' },
        { name: 'Fatma Yilmaz', role: 'Erzieherin Krippe', tag: 'Eingewöhnungs-Profi' },
        { name: 'Jonas Becker', role: 'Erzieher Kindergarten', tag: 'Wald- & Naturpädagogik' },
        { name: 'Lena Hoffmann', role: 'Sprachfachkraft', tag: 'Sprach-Kita zertifiziert' },
        { name: 'Tobias Krüger', role: 'Heilpädagoge', tag: 'Inklusion & Frühförderung' },
        { name: 'Sara Akmann', role: 'Hauswirtschaft', tag: 'Bio-Küche & Hygiene' },
        { name: 'Mia Lehmann', role: 'Auszubildende', tag: '3. Ausbildungsjahr' },
      ],
    },
    enrollment: {
      eyebrow: 'Anmeldung',
      title: 'In 3 Schritten zum Kita-Platz.',
      description:
        'Wir freuen uns auf Ihre Anfrage. So einfach läuft die Anmeldung bei uns ab — meist innerhalb von 14 Tagen mit einem persönlichen Kennenlernen.',
      steps: [
        {
          title: 'Kontakt aufnehmen',
          text: 'Senden Sie uns das Formular oder rufen Sie uns an — wir antworten innerhalb von 48 Stunden.',
        },
        {
          title: 'Kennenlernen',
          text: 'Wir vereinbaren einen persönlichen Termin und zeigen Ihnen die Räume, das Team und beantworten alle Fragen.',
        },
        {
          title: 'Vertrag & Eingewöhnung',
          text: 'Nach der Zusage starten wir mit einer sanften Eingewöhnung nach dem Berliner Modell.',
        },
      ],
      form: {
        title: 'Schreiben Sie uns.',
        intro: 'Wir melden uns innerhalb von 48 Stunden bei Ihnen zurück.',
        name: 'Ihr Name',
        email: 'E-Mail-Adresse',
        phone: 'Telefon (optional)',
        birthdate: 'Geburtsdatum des Kindes',
        startDate: 'Gewünschter Start',
        group: 'Wunsch-Gruppe',
        groupKrippe: 'Krippe (0–3)',
        groupKindergarten: 'Kindergarten (3–6)',
        message: 'Ihre Nachricht',
        send: 'Anfrage senden',
        consent: 'Ich stimme der Verarbeitung meiner Daten gemäß Datenschutzerklärung zu.',
        success: 'Vielen Dank! Wir melden uns innerhalb von 48 Stunden.',
        requiredNote: '* Pflichtfelder · Antwortzeit ca. 48 h',
      },
    },
    news: {
      eyebrow: 'Aktuelles',
      title: 'Neuigkeiten aus der Kita.',
      description: 'Veranstaltungen, Projekte und Geschichten aus unserem Alltag.',
      items: [
        {
          date: '15. Mai 2026',
          tag: 'Veranstaltung',
          title: 'Sommerfest mit der ganzen Familie',
          text: 'Am 22. Juni feiern wir unser jährliches Sommerfest. Eltern, Großeltern und Geschwister sind herzlich eingeladen.',
        },
        {
          date: '02. Mai 2026',
          tag: 'Projekt',
          title: 'Unser neuer Naschgarten',
          text: 'Gemeinsam mit den Kindern haben wir Erdbeeren, Kräuter und Tomaten gepflanzt. Bald wird geerntet!',
        },
        {
          date: '20. April 2026',
          tag: 'Information',
          title: 'Neue Plätze ab August verfügbar',
          text: 'Für das Kita-Jahr 2026/27 sind noch einige Plätze frei. Melden Sie sich gerne für ein Erstgespräch.',
        },
      ],
      readMore: 'Weiterlesen',
    },
    cta: {
      eyebrow: 'Werden Sie Teil unserer Kita',
      title: 'Lust auf einen Rundgang?',
      description:
        'Vereinbaren Sie ein unverbindliches Kennenlernen — wir zeigen Ihnen alles persönlich und beantworten Ihre Fragen.',
      primary: 'Platz anfragen',
      secondary: 'Anrufen: +49 30 1234 5678',
      stats: [
        { value: '48 h', label: 'Antwortzeit' },
        { value: '0 €', label: 'Beiträge in Eisenach' },
        { value: '14 Tg', label: 'bis zum Erstgespräch' },
        { value: '4,9 ★', label: 'Eltern-Bewertung' },
      ],
    },
    footer: {
      about:
        'AWO Kindergarten Haus Sonnenschein — Kindergarten und Thüringer Eltern-Kind-Zentrum (ThEKiZ). Träger ist der AWO Landesverband Thüringen. Wir begleiten Kinder ab dem ersten Lebensjahr in Eisenach.',
      contact: 'Kontakt',
      address: 'Am Amrichen Rasen 1, 99817 Eisenach',
      phone: '+49 30 1234 5678',
      email: 'kontakt@awo-kita-sonnenschein.de',
      links: 'Rechtliches',
      sitemap: 'Sitemap',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      accessibility: 'Barrierefreiheit',
      follow: 'Folgen Sie uns',
      rights: 'Alle Rechte vorbehalten.',
      newsletter: {
        title: 'Eltern-Newsletter',
        text: 'Einmal im Monat: Tipps, Termine und Geschichten aus der Kita.',
        placeholder: 'Ihre E-Mail-Adresse',
        cta: 'Abonnieren',
        success: 'Danke! Bitte bestätigen Sie Ihre Anmeldung per E-Mail.',
      },
      badges: ['Anerkannter Träger', 'Sprach-Kita', 'Inklusion', 'Bio-zertifiziert'],
    },
  },
  en: {
    brand: {
      name: 'AWO Kindergarten Haus Sonnenschein',
      tagline: 'Thüringer Eltern-Kind-Zentrum · Eisenach',
    },
    common: {
      learnMore: 'Learn more',
      readMore: 'Read more',
      viewAll: 'View all',
      backToHome: 'Back to home',
      bookTour: 'Book a tour',
    },
    nav: {
      welcome: 'Welcome',
      about: 'About us',
      pedagogy: 'Pedagogy',
      groups: 'Groups',
      team: 'Team',
      enrollment: 'Enrollment',
      contact: 'Contact',
      cta: 'Request a place',
      langToggle: 'DE',
    },
    hero: {
      eyebrow: 'AWO Day Care Center · since 1998',
      title: 'Where little personalities grow.',
      titleAccent: 'With heart.',
      subtitle: 'A place to discover, grow and feel at home — right in the heart of Eisenach.',
      description:
        'Nursery and kindergarten under one roof. We care for 32 children aged 0 to 6 — with a stable, qualified team, freshly cooked organic meals and weekly forest days.',
      primaryCta: 'Get to know us',
      secondaryCta: 'Get in touch',
      stat1: 'Years of experience',
      stat2: 'Happy children',
      stat3: 'Educators',
      badges: {
        bio: 'Organic kitchen',
        wald: 'Forest day',
        sprache: 'Language Kita',
        inklusion: 'Inclusive',
      },
      microQuoteAuthor: 'The Becker family',
      microQuote: '“Our daughter literally runs into the nursery every morning.”',
      trustLine: 'Operated by AWO Landesverband Thüringen · ThEKiZ · Recognized under SGB VIII',
      foodLabel: 'Lunch',
      foodValue: '90% organic · fresh',
      ratingLabel: 'Parent rating',
      ratingValue: '4.9 / 5 · 56 reviews',
    },
    about: {
      eyebrow: 'About us',
      title: 'A place of encounter — for children and families.',
      description:
        'AWO Haus Sonnenschein is both a kindergarten and a Thüringer Eltern-Kind-Zentrum (ThEKiZ — Thuringian Parent-Child Center). We care for children from their first year of life to modern standards and are at the same time a place of encounter offering support, guidance and counseling for everyday and life questions. Operated by the Arbeiterwohlfahrt — since 1919 standing for freedom, equality, justice, solidarity, emancipation and tolerance.',
      cards: [
        {
          title: 'Opening hours',
          text: 'Monday – Friday\n7:00 am – 5:00 pm',
          sub: 'Flexible drop-off and pick-up',
        },
        {
          title: 'Age groups',
          text: 'Nursery: 0 – 3 years\nKindergarten: 3 – 6 years',
          sub: 'Loving care in small groups',
        },
        {
          title: 'Location',
          text: 'Am Amrichen Rasen 1\n99817 Eisenach',
          sub: '5 min to the city center · bus stop',
        },
      ],
      imageCaptions: ['Our building · entrance', 'Entrance & garden', 'Wall art · since 1978'],
    },
    whyUs: {
      eyebrow: 'Why parents choose us',
      title: 'What makes us different.',
      description:
        'Six things that make our nursery special — and that we are proud of every single day.',
      items: [
        {
          title: 'Small, stable groups',
          text: '12 children in the nursery, 20 in the kindergarten — with three caregivers each, for genuine closeness.',
          pill: '1:4 ratio',
        },
        {
          title: 'On-site organic kitchen',
          text: 'Our chef Selma cooks fresh every day — seasonal, regional and 90 % organic ingredients.',
          pill: '90 % organic',
        },
        {
          title: 'Forest day every week',
          text: 'In any weather: a full day at the Hainich National Park. Movement, nature and free play.',
          pill: '52 weeks',
        },
        {
          title: 'Certified language nursery',
          text: 'A certified language specialist, everyday language education and multilingualism at eye level.',
          pill: 'Certified',
        },
        {
          title: 'Gentle settling-in',
          text: 'We follow the Berlin settling-in model — together with you, at your child’s pace.',
          pill: '2–4 weeks',
        },
        {
          title: 'Inclusive & diverse',
          text: 'Every child is welcome — we cooperate closely with early intervention centers and therapists.',
          pill: 'Inclusion',
        },
      ],
    },
    schedule: {
      eyebrow: 'A day at the nursery',
      title: 'What our day looks like.',
      description:
        'Reliable rituals give children security — and us the freedom to respond spontaneously to whatever the children are interested in right now.',
      items: [
        { time: '7:00 AM', title: 'Arrival & breakfast', text: 'A soft start with open breakfast and time to settle in.', accent: 'sun' },
        { time: '9:00 AM', title: 'Morning circle', text: 'Songs, story round, plan for the day — every voice heard.', accent: 'red' },
        { time: '9:30 AM', title: 'Learning activities', text: 'Project work, free play, garden time — indoors and out.', accent: 'grass' },
        { time: '11:45 AM', title: 'Lunch', text: 'Freshly cooked, in a family atmosphere, with language impulses at the table.', accent: 'blush' },
        { time: '12:30 PM', title: 'Rest time', text: 'Nap for the youngest, quiet activities for the older children.', accent: 'lavender' },
        { time: '2:30 PM', title: 'Snack & project time', text: 'Pre-school group, music, workshops — older kids dive deeper.', accent: 'sun' },
        { time: '4:00 – 5:00 PM', title: 'Pick-up', text: 'In the garden, with short door-and-hinge chats with you.', accent: 'red' },
      ],
      weekdays: 'Mon–Fri',
      openingHours: '7:00 AM – 5:00 PM',
      openingNote: 'Flexible drop-off and pickup. Until 4 PM on Fridays.',
    },
    gallery: {
      eyebrow: 'Inside our nursery',
      title: 'A glimpse of daily life.',
      description:
        'A few impressions from our garden, atelier and bright, sunlit group rooms.',
      captions: [
        'Play in the atelier',
        'Summer garden',
        'Breakfast buffet',
        'Building corner',
        'Forest day',
        'Reading nook',
      ],
      cta: 'Want to see it in person? We’d love to show you around.',
      locationsTag: 'Garden · Workshop · Forest',
      videoBadge: 'Video',
    },
    lifeAtKita: {
      eyebrow: 'A day at our Kita',
      title: 'See for yourself what daily life with us looks like.',
      description:
        'A short look at our group rooms, free play in the garden and quiet moments in the atelier — filmed with the consent of our families.',
      bullets: [
        'Free play and discovery learning in small groups',
        'Garden, workshop and movement room available every day',
        'Gentle settling-in with consistent key caregivers',
      ],
      durationLabel: '1:24 min',
      playCta: 'Watch video',
    },
    awoValues: {
      eyebrow: 'Our values',
      title: 'The six core values of the AWO.',
      description:
        'Since 1919 the values of the Arbeiterwohlfahrt have been our compass — in our educational work as much as in our daily life with families and the neighbourhood.',
      items: [
        { name: 'Freedom', text: 'Every child may walk their own path and develop their own opinions.' },
        { name: 'Equality', text: 'We meet every person with equal respect — regardless of origin, language or religion.' },
        { name: 'Justice', text: 'We create fair educational opportunities — right from the start.' },
        { name: 'Solidarity', text: 'We stand up for one another — as a team, as families, as a neighbourhood.' },
        { name: 'Emancipation', text: 'We empower children and families to shape their lives in a self-determined way.' },
        { name: 'Tolerance', text: 'Diversity is our normal. “Being different” is not a topic here — it is everyday life.' },
      ],
    },
    careers: {
      eyebrow: 'Work with us',
      title: 'Become part of our team.',
      description:
        'With more than 13,000 employees, AWO Thüringen is one of the largest social providers in the state. Here in Eisenach we are looking for committed people to work with children and families.',
      bullets: [
        'Educators, special-needs teachers and social pedagogues (m/f/d)',
        'Internships, FSJ and federal voluntary service — career changers welcome',
        'Apprenticeships via the Institute for Vocational Training and Social Management (IBS)',
      ],
      primary: 'View open positions',
      primaryHref: 'https://awothueringen.de/arbeiten-bei-der-awo/stellenangebote/',
      secondary: 'Send a speculative application',
    },
    thekiz: {
      eyebrow: 'ThEKiZ Haus Sonnenschein',
      title: 'Thuringian Parent-Child Center.',
      description:
        'Beyond being a kindergarten, we are a place of encounter. At our ThEKiZ, families find support, guidance and counseling for everyday and life questions — open, free of charge and easy to reach in Eisenach.',
      offers: [
        {
          title: 'Encounter',
          text: 'Open parent meetups, breakfast and play groups for families from the neighbourhood.',
        },
        {
          title: 'Counseling',
          text: 'Confidential advice on parenting, family and everyday life — on request in several languages.',
        },
        {
          title: 'Guidance',
          text: 'Courses, workshops and events on settling-in, language, nutrition and child development.',
        },
        {
          title: 'Network',
          text: 'We connect families with midwives, early support, family education and authorities in Eisenach.',
        },
      ],
      programs: [
        'Federal program “Sprach-Kitas: Because language is the key to the world”',
        'State pilot “Vielfalt vor Ort begegnen — Professional handling of heterogeneity”',
        'Thüringer Bildungsplan up to age 18',
      ],
      cta: 'Discover the ThEKiZ',
    },
    testimonials: {
      eyebrow: 'Parent voices',
      title: 'What families say about us.',
      description:
        'Three voices from over 60 families who currently — or recently — entrust their child to us.',
      items: [
        {
          quote:
            'We were nervous about the settling-in — and after two weeks we were honestly amazed how lovingly and professionally everything is handled. Mira feels completely at home.',
          name: 'Lena & Tom Becker',
          role: 'Parents of Mira (2)',
          rating: 5,
        },
        {
          quote:
            'The mix of solid structure and real participation by the children is exactly what we hoped for. Our son comes home proudly with a new story every day.',
          name: 'Aylin Demir',
          role: 'Mother of Emir (5)',
          rating: 5,
        },
        {
          quote:
            'As a family with two moms it was important to us that our daughter experiences diversity as something natural. We felt that here from the very first conversation.',
          name: 'Sophie & Jana Krüger',
          role: 'Parents of Lia (3)',
          rating: 5,
        },
      ],
      ratingValue: '4.9 / 5',
      ratingSubtitle: 'from 56 parent reviews',
    },
    partners: {
      eyebrow: 'Recognition & partners',
      title: 'Backed by strong partners.',
      description:
        'We are a recognized Sprach-Kita, member of the AWO network, and cooperate closely with schools, counseling centers and therapists in our district.',
      logos: [
        'AWO Eisenach',
        'Language Kita',
        'Thüringer Bildungsplan',
        'Organic certified',
        'Early Intervention',
        'Family Center Eisenach',
        'KitaApp',
        'Eisenach City Office',
      ],
    },
    pedagogy: {
      eyebrow: 'Our pedagogy',
      title: 'Innovative Approaches to Teaching.',
      description:
        'Our pedagogical work is oriented to the needs, interests and life worlds of the children — based on the Thüringer Bildungsplan.',
      cards: [
        {
          title: 'Situational approach',
          text: 'We take up the children’s themes and experiences and turn them into shared learning processes.',
        },
        {
          title: 'Nature & movement',
          text: 'Daily exercise outdoors, forest days and our natural garden strengthen health and self-confidence.',
        },
        {
          title: 'Language & literacy',
          text: 'Reading aloud, singing and storytelling — as a recognized language nursery we consciously support language development.',
        },
        {
          title: 'Participation',
          text: 'Children make real decisions here. Democracy becomes tangible in daily nursery life — from menus to room design.',
        },
      ],
    },
    groups: {
      eyebrow: 'Our groups',
      title: 'Nursery & kindergarten under one roof.',
      description:
        'We care for children in two age-appropriate areas, led by experienced educators — with a smooth, gentle transition between them.',
      items: [
        {
          name: 'Nursery Sunbeetle',
          age: '0 – 3 years',
          size: '12 children',
          ratio: '3 educators',
          features: ['Berlin settling-in', 'Key-person approach', 'Snoezelen room'],
          text: 'A protected space for the youngest — with closeness, consistent caregivers and a gentle settling-in following the Berlin Model.',
        },
        {
          name: 'Kindergarten Rainbow',
          age: '3 – 6 years',
          size: '20 children',
          ratio: '3 educators',
          features: ['Pre-school "Schlaufüchse"', 'Weekly forest day', 'Project work'],
          text: 'Free play, focused learning activities and joint projects playfully prepare the children for school and life.',
        },
      ],
      sizeLabel: 'Group size',
      staffLabel: 'Caregivers',
    },
    team: {
      eyebrow: 'Our team',
      title: 'Nurturing young minds for a brighter future.',
      description:
        'Our dedicated, multi-professional team supports your child with heart, experience and continuous training. All staff hold an extended certificate of good conduct.',
      members: [
        { name: 'Anna Töpfer', role: 'ThEKiZ Director', tag: 'Thuringian Parent-Child Center' },
        { name: 'Markus Weber', role: 'Deputy Director', tag: 'Educator (B.A.)' },
        { name: 'Fatma Yilmaz', role: 'Nursery Educator', tag: 'Settling-in expert' },
        { name: 'Jonas Becker', role: 'Kindergarten Educator', tag: 'Forest & nature pedagogy' },
        { name: 'Lena Hoffmann', role: 'Language Specialist', tag: 'Sprach-Kita certified' },
        { name: 'Tobias Krüger', role: 'Special Needs Educator', tag: 'Inclusion & early support' },
        { name: 'Sara Akmann', role: 'Housekeeping', tag: 'Organic kitchen & hygiene' },
        { name: 'Mia Lehmann', role: 'Trainee', tag: '3rd year of training' },
      ],
    },
    enrollment: {
      eyebrow: 'Enrollment',
      title: 'A nursery place in 3 steps.',
      description:
        'We look forward to your inquiry. This is how easy enrollment works — usually with a personal meeting within 14 days.',
      steps: [
        {
          title: 'Get in touch',
          text: 'Send us the form or simply give us a call — we respond within 48 hours.',
        },
        {
          title: 'Meet us',
          text: 'We arrange a personal appointment, show you the rooms, the team and answer all your questions.',
        },
        {
          title: 'Contract & settling-in',
          text: 'After confirmation we start with a gentle settling-in following the Berlin Model.',
        },
      ],
      form: {
        title: 'Write to us.',
        intro: 'We’ll respond within 48 hours.',
        name: 'Your name',
        email: 'Email address',
        phone: 'Phone (optional)',
        birthdate: 'Child’s date of birth',
        startDate: 'Preferred start',
        group: 'Preferred group',
        groupKrippe: 'Nursery (0–3)',
        groupKindergarten: 'Kindergarten (3–6)',
        message: 'Your message',
        send: 'Send inquiry',
        consent: 'I agree to the processing of my data per the privacy policy.',
        success: 'Thank you! We will get back to you within 48 hours.',
        requiredNote: '* Required · Response within ~48 h',
      },
    },
    news: {
      eyebrow: 'News',
      title: 'Latest from the nursery.',
      description: 'Events, projects and stories from our daily life.',
      items: [
        {
          date: 'May 15, 2026',
          tag: 'Event',
          title: 'Summer festival with the whole family',
          text: 'On June 22 we celebrate our annual summer festival. Parents, grandparents and siblings are warmly invited.',
        },
        {
          date: 'May 2, 2026',
          tag: 'Project',
          title: 'Our new edible garden',
          text: 'Together with the children we planted strawberries, herbs and tomatoes. Harvest time is coming soon!',
        },
        {
          date: 'April 20, 2026',
          tag: 'Info',
          title: 'New places available from August',
          text: 'A few places are still available for the 2026/27 nursery year. Feel free to arrange a first conversation.',
        },
      ],
      readMore: 'Read more',
    },
    cta: {
      eyebrow: 'Become part of our nursery',
      title: 'Want a personal tour?',
      description:
        'Arrange a no-obligation visit — we’ll show you around personally and answer all your questions.',
      primary: 'Request a place',
      secondary: 'Call: +49 30 1234 5678',
      stats: [
        { value: '48 h', label: 'Response time' },
        { value: '€0', label: 'Fees in Eisenach' },
        { value: '14 days', label: 'to first meeting' },
        { value: '4.9 ★', label: 'Parent rating' },
      ],
    },
    footer: {
      about:
        'AWO Kindergarten Haus Sonnenschein — kindergarten and Thüringer Eltern-Kind-Zentrum (ThEKiZ). Operated by the AWO Landesverband Thüringen. We care for children from their first year of life in Eisenach.',
      contact: 'Contact',
      address: 'Am Amrichen Rasen 1, 99817 Eisenach',
      phone: '+49 30 1234 5678',
      email: 'contact@awo-kita-sunshine.de',
      links: 'Legal',
      sitemap: 'Sitemap',
      imprint: 'Imprint',
      privacy: 'Privacy',
      accessibility: 'Accessibility',
      follow: 'Follow us',
      rights: 'All rights reserved.',
      newsletter: {
        title: 'Parent newsletter',
        text: 'Once a month: tips, dates and stories from our nursery.',
        placeholder: 'Your email address',
        cta: 'Subscribe',
        success: 'Thanks! Please confirm your subscription by email.',
      },
      badges: ['Recognized provider', 'Sprach-Kita', 'Inclusion', 'Organic certified'],
    },
  },
} as const;

export type Dictionary = (typeof translations)[Lang];
