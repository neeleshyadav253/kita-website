export type Lang = 'de' | 'en';

export const translations = {
  de: {
    brand: {
      name: 'AWO Kita Sonnenschein',
      tagline: 'Arbeiterwohlfahrt · Berlin-Mitte',
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
      subtitle: 'Ein Ort zum Entdecken, Wachsen und Wohlfühlen — mitten in Berlin.',
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
      trustLine: 'Träger: AWO Kreisverband Berlin · Anerkannt nach SGB VIII',
      foodLabel: 'Mittagessen',
      foodValue: '90 % Bio · frisch',
      ratingLabel: 'Eltern-Bewertung',
      ratingValue: '4,9 / 5 · 56 Stimmen',
    },
    about: {
      eyebrow: 'Über uns',
      title: 'Eine Kita mit Herz und Haltung.',
      description:
        'Unsere Kita ist eine Einrichtung der Arbeiterwohlfahrt (AWO). Seit über 100 Jahren steht die AWO für soziale Gerechtigkeit, Toleranz, Freiheit, Gleichheit und Solidarität — Werte, die wir täglich mit den Kindern und Familien leben.',
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
          text: 'Sonnenstraße 12\n10115 Berlin-Mitte',
          sub: '2 Min. zum Rosenthaler Platz · U8',
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
          text: 'Bei jedem Wetter: ein ganzer Tag im Volkspark Humboldthain. Bewegung, Natur, freies Spiel.',
          pill: '52 Wochen',
        },
        {
          title: 'Berliner Sprach-Kita',
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
        'Im Atelier',
        'Garten im Sommer',
        'Frühstücksbuffet',
        'Bauecke',
        'Waldtag',
        'Lese-Ecke',
      ],
      cta: 'Lust auf einen Rundgang? Wir zeigen Ihnen gerne alles persönlich.',
      locationsTag: 'Garten · Werkstatt · Wald',
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
        'AWO Berlin',
        'Sprach-Kita',
        'Berliner Bildungsprogramm',
        'Bio-zertifiziert',
        'Frühförderzentrum',
        'Familienzentrum Mitte',
        'KitaApp',
        'Bezirksamt Mitte',
      ],
    },
    pedagogy: {
      eyebrow: 'Unsere Pädagogik',
      title: 'Innovative Lehrmethoden.',
      description:
        'Unser pädagogisches Handeln orientiert sich an den Bedürfnissen, Interessen und Lebenswelten der Kinder — basierend auf dem Berliner Bildungsprogramm.',
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
        { name: 'Anna Schneider', role: 'Kita-Leitung', tag: '18 Jahre Erfahrung' },
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
        { value: '0 €', label: 'Beiträge in Berlin' },
        { value: '14 Tg', label: 'bis zum Erstgespräch' },
        { value: '4,9 ★', label: 'Eltern-Bewertung' },
      ],
    },
    footer: {
      about:
        'AWO Kita Sonnenschein — Träger ist der AWO Kreisverband Berlin. Wir bieten Bildung, Erziehung und Betreuung für Kinder von 0 bis 6 Jahren in Berlin-Mitte.',
      contact: 'Kontakt',
      address: 'Sonnenstraße 12, 10115 Berlin',
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
      name: 'AWO Kita Sunshine',
      tagline: 'Workers’ Welfare · Berlin-Mitte',
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
      subtitle: 'A place to discover, grow and feel at home — right in the heart of Berlin.',
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
      trustLine: 'Operated by AWO Kreisverband Berlin · Recognized under SGB VIII',
      foodLabel: 'Lunch',
      foodValue: '90% organic · fresh',
      ratingLabel: 'Parent rating',
      ratingValue: '4.9 / 5 · 56 reviews',
    },
    about: {
      eyebrow: 'About us',
      title: 'A nursery with heart and values.',
      description:
        'Our nursery is run by the Arbeiterwohlfahrt (AWO). For more than 100 years the AWO has stood for social justice, tolerance, freedom, equality and solidarity — values we live every day with our children and families.',
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
          text: 'Sonnenstraße 12\n10115 Berlin-Mitte',
          sub: '2 min from Rosenthaler Platz · U8',
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
          text: 'In any weather: a full day at Volkspark Humboldthain. Movement, nature and free play.',
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
        'In the atelier',
        'Summer garden',
        'Breakfast buffet',
        'Building corner',
        'Forest day',
        'Reading nook',
      ],
      cta: 'Want to see it in person? We’d love to show you around.',
      locationsTag: 'Garden · Workshop · Forest',
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
        'AWO Berlin',
        'Language Kita',
        'Berlin Education Program',
        'Organic certified',
        'Early Intervention',
        'Family Center Mitte',
        'KitaApp',
        'District Office Mitte',
      ],
    },
    pedagogy: {
      eyebrow: 'Our pedagogy',
      title: 'Innovative Approaches to Teaching.',
      description:
        'Our pedagogical work is oriented to the needs, interests and life worlds of the children — based on the Berlin Education Program.',
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
        { name: 'Anna Schneider', role: 'Director', tag: '18 years of experience' },
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
        { value: '€0', label: 'Fees in Berlin' },
        { value: '14 days', label: 'to first meeting' },
        { value: '4.9 ★', label: 'Parent rating' },
      ],
    },
    footer: {
      about:
        'AWO Kita Sunshine — operated by the AWO district association Berlin. We offer education, upbringing and care for children aged 0 to 6 in Berlin-Mitte.',
      contact: 'Contact',
      address: 'Sonnenstraße 12, 10115 Berlin',
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
