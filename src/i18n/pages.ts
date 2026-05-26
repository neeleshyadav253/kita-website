import type { Lang } from './translations';

type GroupDetail = {
  slug: 'krippe' | 'kindergarten';
  hero: string;
  intro: string;
  daily: { title: string; items: string[] };
  highlights: { title: string; text: string }[];
  weekTitle: string;
  week: { day: string; activity: string }[];
};

type NewsDetail = {
  slug: 'sommerfest' | 'naschgarten' | 'plaetze-august';
  date: string;
  tag: string;
  title: string;
  lead: string;
  body: string[];
};

type TeamBio = {
  name: string;
  quote: string;
  about: string;
};

type PageBundle = {
  about: {
    story: { title: string; paragraphs: string[] };
    values: { title: string; items: { title: string; text: string }[] };
    history: { title: string; paragraphs: string[] };
    timelineTitle: string;
    timeline: { year: string; title: string; text: string }[];
    facts: { label: string; value: string }[];
    factsTitle: string;
    valuesEyebrow: string;
  };
  pedagogy: {
    intro: string;
    daily: { title: string; items: string[] };
    quote: { text: string; author: string };
    pillarsTitle: string;
    pillars: { title: string; text: string }[];
  };
  groups: {
    krippe: GroupDetail;
    kindergarten: GroupDetail;
  };
  team: {
    intro: string;
    qualifications: { title: string; items: string[] };
    bios: TeamBio[];
    statsTitle: string;
    stats: { number: string; label: string }[];
    voicesTitle: string;
  };
  enrollment: {
    fullIntro: string;
    documents: { title: string; intro: string; items: string[] };
    faq: { question: string; answer: string }[];
    feesTitle: string;
    feesIntro: string;
    fees: { label: string; price: string; sub: string }[];
    deadlinesTitle: string;
    deadlines: { date: string; title: string; text: string }[];
  };
  news: {
    sommerfest: NewsDetail;
    naschgarten: NewsDetail;
    'plaetze-august': NewsDetail;
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    visit: { title: string; address: string; transport: string };
    hoursTitle: string;
    hours: { day: string; time: string }[];
    mapAlt: string;
    formTitle: string;
    formIntro: string;
    labels: { address: string; phone: string; email: string; directions: string };
  };
  notFound: {
    title: string;
    text: string;
    cta: string;
  };
  backHome: string;
  backTo: (target: string) => string;
};

export const pages: Record<Lang, PageBundle> = {
  de: {
    about: {
      story: {
        title: 'Unsere Geschichte',
        paragraphs: [
          'Die AWO Kita Sonnenschein wurde 1998 gegründet — als Antwort auf den wachsenden Bedarf an liebevoller, professioneller Kinderbetreuung in Eisenach.',
          'Seitdem haben mehr als 800 Kinder bei uns ihre ersten Schritte ins Leben gemacht. Wir sind stolz darauf, ein verlässlicher Ort für Familien zu sein — über Generationen hinweg.',
          'Heute betreuen wir 32 Kinder in zwei altersgerechten Gruppen, mit einem festen Team aus 12 erfahrenen pädagogischen Fachkräften — und einer hauseigenen Bio-Küche.',
        ],
      },
      values: {
        title: 'Unsere Werte',
        items: [
          { title: 'Solidarität', text: 'Wir stehen füreinander ein und schaffen ein starkes Miteinander von Kindern, Familien und Team.' },
          { title: 'Toleranz', text: 'Vielfalt ist unsere Stärke. Bei uns ist jedes Kind willkommen — unabhängig von Herkunft, Religion oder Lebenssituation.' },
          { title: 'Gerechtigkeit', text: 'Wir geben jedem Kind die gleichen Chancen auf Bildung, Entwicklung und Wohlbefinden.' },
          { title: 'Freiheit', text: 'Kinder dürfen bei uns ihre eigene Persönlichkeit entdecken und entfalten — in einem sicheren Rahmen.' },
        ],
      },
      history: {
        title: 'Über die AWO',
        paragraphs: [
          'Die Arbeiterwohlfahrt (AWO) wurde 1919 von Marie Juchacz gegründet und ist heute einer der sechs Spitzenverbände der freien Wohlfahrtspflege in Deutschland.',
          'Mit rund 14.000 Einrichtungen — von Kitas über Pflegeheime bis zu Beratungsstellen — steht die AWO seit über 100 Jahren für eine solidarische und gerechte Gesellschaft.',
        ],
      },
      timelineTitle: 'Unser Weg seit 1998',
      timeline: [
        { year: '1998', title: 'Gründung', text: 'Eröffnung der AWO Kita Sonnenschein mit 18 Kindern und 4 Erzieher:innen.' },
        { year: '2006', title: 'Erweiterung', text: 'Anbau des Krippenbereichs und Eröffnung des naturnahen Gartens.' },
        { year: '2014', title: 'Sprach-Kita', text: 'Auszeichnung als „Sprach-Kita" im Bundesprogramm — bis heute zertifiziert.' },
        { year: '2019', title: 'Inklusion', text: 'Erweiterung um inklusive Plätze, enge Kooperation mit Frühförderzentren.' },
        { year: '2023', title: 'Bio-Küche', text: 'Eigene Bio-Küche mit Selma Akmann als Köchin — 90 % der Zutaten in Bio-Qualität.' },
        { year: '2026', title: 'Heute', text: '32 Kinder, 12 Fachkräfte, ein fester Ort für Familien aus Eisenach.' },
      ],
      facts: [
        { label: 'Gegründet', value: '1998' },
        { label: 'Betreute Kinder', value: '32 + 800 Alumni' },
        { label: 'Team', value: '12 Fachkräfte' },
        { label: 'Träger', value: 'AWO Kreisverband' },
      ],
      factsTitle: 'Kita in Zahlen',
      valuesEyebrow: 'AWO',
    },
    pedagogy: {
      intro:
        'Unser pädagogisches Konzept basiert auf dem Thüringer Bildungsplan und wird kontinuierlich weiterentwickelt. Im Zentrum steht das Kind als kompetenter Mitgestalter seiner Welt.',
      daily: {
        title: 'Ein Tag bei uns',
        items: [
          '7:00 – 9:00 Uhr — Ankommen, freies Frühstück, Morgenkreis',
          '9:00 – 11:30 Uhr — Bildungsangebote, freies Spiel, Garten',
          '11:30 – 12:30 Uhr — Gemeinsames Mittagessen',
          '12:30 – 14:30 Uhr — Ruhezeit / Schlafenszeit für die Kleinen',
          '14:30 – 17:00 Uhr — Snack, Projektzeit, Abholzeit',
        ],
      },
      quote: {
        text: 'Hilf mir, es selbst zu tun.',
        author: 'Maria Montessori',
      },
      pillarsTitle: 'Sechs pädagogische Säulen',
      pillars: [
        { title: 'Bindung & Beziehung', text: 'Vertrauensvolle Beziehungen sind die Basis allen Lernens. Feste Bezugspersonen, kleine Gruppen.' },
        { title: 'Sprache von Anfang an', text: 'Alltagsintegrierte Sprachbildung, zertifizierte Sprachfachkraft, mehrsprachiges Vorlesen.' },
        { title: 'Bewegung & Natur', text: 'Tägliche Bewegung, wöchentlicher Waldtag, naturnaher Garten mit echten Werkzeugen.' },
        { title: 'Kunst & Musik', text: 'Eigenes Atelier, Musikraum, regelmäßige Theater- und Tanzangebote.' },
        { title: 'Partizipation', text: 'Kinder entscheiden über Speiseplan, Raumgestaltung und Projekte mit — Demokratie im Kleinen.' },
        { title: 'Gesundheit & Ernährung', text: 'Bio-Küche im Haus, ausgewogene Mahlzeiten, Hygiene- und Gesundheitskonzept.' },
      ],
    },
    groups: {
      krippe: {
        slug: 'krippe',
        hero: 'Krippe Sonnenkäfer — die ersten Jahre',
        intro:
          'In der Krippe begleiten wir Kinder von 0 bis 3 Jahren auf ihren ersten Schritten in die Welt außerhalb der Familie. Geborgenheit, feste Bezugspersonen und eine sanfte Eingewöhnung nach dem Berliner Modell sind uns besonders wichtig.',
        daily: {
          title: 'Was uns in der Krippe wichtig ist',
          items: [
            'Behutsame Eingewöhnung gemeinsam mit den Eltern',
            'Feste Tagesrituale geben Sicherheit',
            'Bewegungsraum, Snoezelen-Ecke und vielfältiges Sinnesmaterial',
            'Gesundes, frisch gekochtes Essen — auf Kleinkinder abgestimmt',
            'Enge, vertrauensvolle Zusammenarbeit mit den Familien',
          ],
        },
        highlights: [
          { title: 'Bezugspersonenarbeit', text: 'Jedes Kind hat eine feste pädagogische Bezugsperson — für vertrauensvolle Beziehungen vom ersten Tag an.' },
          { title: 'Sinnliches Lernen', text: 'Greifen, Tasten, Schmecken — wir gestalten Räume, die alle Sinne ansprechen und zum Entdecken einladen.' },
          { title: 'Sprachentwicklung', text: 'Wir sprechen viel mit den Kindern, singen, reimen und lesen vor — von Anfang an.' },
        ],
        weekTitle: 'Unsere Woche im Überblick',
        week: [
          { day: 'Montag', activity: 'Sinnesmorgen — Materialien zum Tasten & Hören' },
          { day: 'Dienstag', activity: 'Garten & Bewegungsraum' },
          { day: 'Mittwoch', activity: 'Musikkreis mit Lena' },
          { day: 'Donnerstag', activity: 'Buchstart — Bilderbuchzeit' },
          { day: 'Freitag', activity: 'Familien-Freitag mit Tür-und-Angel' },
        ],
      },
      kindergarten: {
        slug: 'kindergarten',
        hero: 'Kindergarten Regenbogen — wachsen und entdecken',
        intro:
          'Im Kindergartenalter werden Kinder zunehmend selbstständiger. Wir bieten ihnen einen Rahmen, in dem sie ihre Interessen vertiefen, mit anderen kooperieren und schrittweise auf die Schule vorbereitet werden.',
        daily: {
          title: 'Schwerpunkte im Kindergarten',
          items: [
            'Freies Spiel als zentraler Bildungsraum',
            'Projektarbeit zu Themen, die die Kinder mitbestimmen',
            'Wöchentlicher Waldtag und Bewegungstag',
            'Vorschulgruppe für die ältesten Kinder',
            'Musik, Tanz, Kunst und Theater',
          ],
        },
        highlights: [
          { title: 'Vorschulgruppe', text: 'Die „Schlaufüchse" treffen sich wöchentlich und bereiten sich spielerisch auf den Schulstart vor.' },
          { title: 'Partizipation', text: 'Kinder entscheiden über Projekte, Regeln und den Gruppenalltag mit — Demokratie zum Anfassen.' },
          { title: 'Übergänge gestalten', text: 'Wir kooperieren eng mit den Grundschulen im Stadtteil, um Kindern den Übergang zu erleichtern.' },
        ],
        weekTitle: 'Unsere Woche im Überblick',
        week: [
          { day: 'Montag', activity: 'Projekttag — laufendes Gruppenprojekt' },
          { day: 'Dienstag', activity: 'Waldtag im Hainich' },
          { day: 'Mittwoch', activity: 'Atelier & Werkstatt' },
          { day: 'Donnerstag', activity: 'Vorschulgruppe „Schlaufüchse"' },
          { day: 'Freitag', activity: 'Musik, Tanz & Kinderkonferenz' },
        ],
      },
    },
    team: {
      intro:
        'Unser Team besteht aus staatlich anerkannten Erzieher:innen, Sozialpädagog:innen, Heilpädagog:innen sowie Auszubildenden. Regelmäßige Fortbildungen, Supervision und Teamsitzungen sichern die Qualität unserer Arbeit.',
      qualifications: {
        title: 'Was unser Team auszeichnet',
        items: [
          'Mindestens staatlich anerkannte pädagogische Ausbildung',
          'Jährliche Fortbildungen zu Sprache, Inklusion und Kinderschutz',
          'Regelmäßige Fachberatung und Supervision',
          'Erste-Hilfe-Kurs am Kind alle zwei Jahre',
          'Erweitertes Führungszeugnis aller Mitarbeiter:innen',
        ],
      },
      bios: [
        {
          name: 'Anna Töpfer',
          quote: 'Ein guter Kindergarten ist ein Ort der Begegnung — für Kinder, Eltern und das gesamte Stadtteil­leben.',
          about: 'Anna leitet das Thüringer Eltern-Kind-Zentrum (ThEKiZ) im Haus Sonnenschein. Schwerpunkt: Begegnungsarbeit mit Familien, Beratung bei Alltags- und Lebensfragen und die enge Vernetzung mit dem Stadtteil.',
        },
        {
          name: 'Markus Weber',
          quote: 'Lernen passiert dort, wo Kinder mitbestimmen dürfen.',
          about: 'Sozialpädagoge B.A., zuständig für die pädagogische Konzeptarbeit und die Vorschulgruppe „Schlaufüchse".',
        },
        {
          name: 'Lena Hoffmann',
          quote: 'Sprache ist ein Geschenk — und wir wickeln es jeden Tag neu aus.',
          about: 'Zertifizierte Sprachfachkraft im Bundesprogramm „Sprach-Kitas". Lena begleitet Familien mit mehrsprachigem Alltag besonders intensiv.',
        },
        {
          name: 'Tobias Krüger',
          quote: 'Inklusion ist keine Aufgabe — sie ist eine Haltung.',
          about: 'Heilpädagoge mit Schwerpunkt frühe Förderung und Autismusspektrum. Kooperationspartner unserer Frühförderstelle.',
        },
      ],
      statsTitle: 'Team in Zahlen',
      stats: [
        { number: '12', label: 'Pädagog:innen' },
        { number: '95 %', label: 'Fachkraft-Quote' },
        { number: '14', label: 'Fortbildungen pro Jahr' },
        { number: '7 Jahre', label: 'Ø Betriebszugehörigkeit' },
      ],
      voicesTitle: 'Stimmen aus dem Team',
    },
    enrollment: {
      fullIntro:
        'Sie überlegen, Ihr Kind bei uns anzumelden? Wir freuen uns sehr! Hier finden Sie alle Informationen, die Sie für eine Anmeldung benötigen.',
      documents: {
        title: 'Was Sie für die Anmeldung benötigen',
        intro:
          'Bringen Sie diese Unterlagen zum Anmeldegespräch mit — gerne als Original, Kopie oder digitaler Scan. Fehlen Dokumente, melden Sie sich einfach: Wir finden gemeinsam eine Lösung.',
        items: [
          'Ausgefülltes Anmeldeformular',
          'Geburtsurkunde des Kindes',
          'Personalausweis der Sorgeberechtigten',
          'Bescheid des Jugendamtes Eisenach (falls vorhanden)',
          'Impfnachweis (Masernschutz) gemäß § 20 IfSG',
          'Bei Bedarf: Nachweis Berufstätigkeit / Studium',
        ],
      },
      faq: [
        { question: 'Ab welchem Alter können Kinder aufgenommen werden?', answer: 'Wir nehmen Kinder ab 8 Wochen in der Krippe und bis zum Schuleintritt im Kindergarten auf.' },
        { question: 'Wie lange dauert die Eingewöhnung?', answer: 'In der Regel zwei bis vier Wochen. Wir orientieren uns am Berliner Eingewöhnungsmodell und am Tempo Ihres Kindes.' },
        { question: 'Bieten Sie Plätze für Kinder mit Förderbedarf?', answer: 'Ja. Wir arbeiten integrativ und kooperieren eng mit Frühförderstellen, Therapeut:innen und der Sozialpädiatrie.' },
        { question: 'Wie sieht es mit dem Essen aus?', answer: 'Wir bieten ein frisch gekochtes Mittagessen, Snacks und Getränke. 90 % der Zutaten stammen aus biologischem Anbau. Sonderkostformen nach Absprache.' },
        { question: 'Was kostet ein Platz?', answer: 'In Eisenach sind Kita-Plätze ab dem ersten Lebensjahr kostenfrei. Es fällt lediglich der gesetzliche Verpflegungsanteil von 23 € im Monat an.' },
        { question: 'Wie sind die Schließzeiten?', answer: '25 Tage im Jahr, meist 3 Wochen im Sommer und zwischen Weihnachten und Neujahr. Sie erhalten den Plan jeweils im Januar für das laufende Jahr.' },
      ],
      feesTitle: 'Kosten & Verpflegung',
      feesIntro:
        'Die Betreuung in Eisenach ist seit 2018 für Eltern beitragsfrei. Lediglich der gesetzliche Verpflegungsanteil wird erhoben.',
      fees: [
        { label: 'Betreuungsbeitrag', price: '0 €', sub: 'Beitragsfrei in Eisenach (ab Geburt)' },
        { label: 'Verpflegung', price: '23 € / Monat', sub: 'Frühstück, Mittagessen, Snack' },
        { label: 'Ausflüge & Materialien', price: 'inklusive', sub: 'Keine versteckten Kosten' },
      ],
      deadlinesTitle: 'Wichtige Termine',
      deadlines: [
        { date: 'Februar', title: 'Anmeldegespräche', text: 'Wir laden zu Erstgesprächen für das kommende Kita-Jahr ein.' },
        { date: 'April', title: 'Platzbestätigung', text: 'Sie erhalten eine schriftliche Zu- oder Absage.' },
        { date: 'August', title: 'Eingewöhnung', text: 'Start der sanften Eingewöhnung in kleinen Etappen.' },
      ],
    },
    news: {
      sommerfest: {
        slug: 'sommerfest',
        date: '15. Mai 2026',
        tag: 'Veranstaltung',
        title: 'Sommerfest mit der ganzen Familie',
        lead: 'Am 22. Juni feiern wir unser jährliches Sommerfest — ein Tag voller Musik, Spiel und Begegnung.',
        body: [
          'Wie jedes Jahr öffnen wir unsere Türen für die ganze Familie: Eltern, Großeltern, Geschwister, Freund:innen — alle sind herzlich willkommen.',
          'Es erwartet Sie ein buntes Programm mit Bastelangeboten, einem Mitmach-Konzert, einem großen Buffet und vielen Überraschungen für die Kinder. Das Fest beginnt um 14:00 Uhr und endet gegen 18:00 Uhr.',
          'Wir freuen uns auf einen schönen Tag mit Ihnen!',
        ],
      },
      naschgarten: {
        slug: 'naschgarten',
        date: '02. Mai 2026',
        tag: 'Projekt',
        title: 'Unser neuer Naschgarten',
        lead: 'Gemeinsam mit den Kindern haben wir Erdbeeren, Kräuter und Tomaten gepflanzt — bald wird geerntet!',
        body: [
          'In den letzten Wochen haben die Kinder unseres Kindergartens mit großem Eifer einen eigenen kleinen Garten angelegt. Sie haben die Erde gelockert, Pflanzen gesetzt, gegossen und beobachten nun täglich, wie alles wächst.',
          'Im Sommer werden wir gemeinsam ernten, schnippeln und probieren. Der Naschgarten ist Teil unseres pädagogischen Schwerpunkts „Natur & Bewegung".',
          'Ein großes Dankeschön an die Eltern, die uns mit Pflanzen, Werkzeugen und tatkräftiger Unterstützung geholfen haben!',
        ],
      },
      'plaetze-august': {
        slug: 'plaetze-august',
        date: '20. April 2026',
        tag: 'Information',
        title: 'Neue Plätze ab August verfügbar',
        lead: 'Für das Kita-Jahr 2026/27 sind noch einige Plätze in Krippe und Kindergarten frei.',
        body: [
          'Sie suchen einen Kita-Platz für Ihr Kind? Für das kommende Kita-Jahr (Start August 2026) haben wir noch Kapazitäten in beiden Gruppen.',
          'Vereinbaren Sie gerne einen Termin für ein persönliches Kennenlernen — wir zeigen Ihnen unsere Räume, stellen das Team vor und beantworten Ihre Fragen.',
          'Nutzen Sie dafür unser Kontaktformular oder rufen Sie uns einfach an.',
        ],
      },
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'So erreichen Sie uns.',
      intro:
        'Wir freuen uns auf Ihre Nachricht — ob telefonisch, per E-Mail oder bei einem persönlichen Besuch.',
      visit: {
        title: 'Besuchen Sie uns',
        address: 'AWO Kita Sonnenschein\nAm Amrichen Rasen 1\n99817 Eisenach',
        transport:
          'Bus: Linien zur Innenstadt\nBahnhof Eisenach: 10 Min.\nFahrradabstellplätze direkt vor dem Haus',
      },
      hoursTitle: 'Öffnungszeiten',
      hours: [
        { day: 'Montag – Donnerstag', time: '7:00 – 17:00 Uhr' },
        { day: 'Freitag', time: '7:00 – 16:00 Uhr' },
        { day: 'Samstag & Sonntag', time: 'Geschlossen' },
      ],
      mapAlt: 'Karte zum Standort der Kita',
      formTitle: 'Schreiben Sie uns',
      formIntro: 'Antwort innerhalb von 48 Stunden — versprochen.',
      labels: {
        address: 'Adresse',
        phone: 'Telefon',
        email: 'E-Mail',
        directions: 'Anfahrt',
      },
    },
    notFound: {
      title: 'Seite nicht gefunden',
      text: 'Die von Ihnen gesuchte Seite existiert leider nicht oder wurde verschoben.',
      cta: 'Zurück zur Startseite',
    },
    backHome: 'Zur Startseite',
    backTo: (target: string) => `Zurück zu ${target}`,
  },
  en: {
    about: {
      story: {
        title: 'Our story',
        paragraphs: [
          'AWO Kita Sunshine was founded in 1998 — as a response to the growing need for loving, professional childcare in Eisenach.',
          'Since then, more than 800 children have taken their first steps into life with us. We are proud to be a reliable place for families — across generations.',
          'Today we care for 32 children in two age-appropriate groups, with a stable team of 12 experienced educators — and an on-site organic kitchen.',
        ],
      },
      values: {
        title: 'Our values',
        items: [
          { title: 'Solidarity', text: 'We stand up for each other and create a strong community between children, families and team.' },
          { title: 'Tolerance', text: 'Diversity is our strength. Every child is welcome — regardless of origin, religion or background.' },
          { title: 'Justice', text: 'We give every child the same opportunities for education, development and well-being.' },
          { title: 'Freedom', text: 'Children may discover and unfold their own personality here — in a safe environment.' },
        ],
      },
      history: {
        title: 'About AWO',
        paragraphs: [
          'Arbeiterwohlfahrt (AWO) was founded in 1919 by Marie Juchacz and is today one of the six leading welfare associations in Germany.',
          'With around 14,000 facilities — from nurseries and care homes to counseling centers — AWO has stood for a solidary and just society for over 100 years.',
        ],
      },
      timelineTitle: 'Our journey since 1998',
      timeline: [
        { year: '1998', title: 'Founded', text: 'AWO Kita Sunshine opens with 18 children and 4 educators.' },
        { year: '2006', title: 'Expansion', text: 'New nursery wing and opening of our natural garden.' },
        { year: '2014', title: 'Language Nursery', text: 'Awarded as a “Sprach-Kita” by the federal program — certified ever since.' },
        { year: '2019', title: 'Inclusion', text: 'Added inclusive places, closer cooperation with early intervention centers.' },
        { year: '2023', title: 'Organic kitchen', text: 'Our own kitchen led by chef Selma Akmann — 90 % organic ingredients.' },
        { year: '2026', title: 'Today', text: '32 children, 12 staff, a stable place for families across Eisenach.' },
      ],
      facts: [
        { label: 'Founded', value: '1998' },
        { label: 'Children cared for', value: '32 + 800 alumni' },
        { label: 'Team', value: '12 professionals' },
        { label: 'Operator', value: 'AWO Kreisverband' },
      ],
      factsTitle: 'Nursery in numbers',
      valuesEyebrow: 'AWO',
    },
    pedagogy: {
      intro:
        'Our pedagogical concept is based on the Thüringer Bildungsplan and is continuously developed further. At the center is the child as a competent co-designer of their world.',
      daily: {
        title: 'A day with us',
        items: [
          '7:00 – 9:00 am — Arrival, free breakfast, morning circle',
          '9:00 – 11:30 am — Learning activities, free play, garden',
          '11:30 am – 12:30 pm — Shared lunch',
          '12:30 – 2:30 pm — Rest / nap time for the youngest',
          '2:30 – 5:00 pm — Snack, project time, pick-up',
        ],
      },
      quote: {
        text: 'Help me to do it myself.',
        author: 'Maria Montessori',
      },
      pillarsTitle: 'Six pedagogical pillars',
      pillars: [
        { title: 'Bonding & relationship', text: 'Trusting relationships are the basis of all learning. Consistent caregivers, small groups.' },
        { title: 'Language from day one', text: 'Everyday-integrated language education, a certified language specialist, multilingual reading aloud.' },
        { title: 'Movement & nature', text: 'Daily exercise, weekly forest day, a natural garden with real tools.' },
        { title: 'Art & music', text: 'Our own atelier, music room, regular theater and dance offerings.' },
        { title: 'Participation', text: 'Children co-decide menus, room design and projects — democracy on a small scale.' },
        { title: 'Health & nutrition', text: 'On-site organic kitchen, balanced meals, a thorough hygiene and health concept.' },
      ],
    },
    groups: {
      krippe: {
        slug: 'krippe',
        hero: 'Nursery Sunbeetle — the earliest years',
        intro:
          'In the nursery we accompany children from 0 to 3 years on their first steps into the world outside the family. Security, consistent caregivers and a gentle settling-in following the Berlin Model are particularly important to us.',
        daily: {
          title: 'What matters to us in the nursery',
          items: [
            'Gentle settling-in together with parents',
            'Consistent daily rituals provide security',
            'Movement room, snoezelen corner and diverse sensory material',
            'Healthy, freshly cooked meals — adapted to small children',
            'Close, trusting cooperation with families',
          ],
        },
        highlights: [
          { title: 'Key person approach', text: 'Each child has a dedicated educator — for trusting relationships from day one.' },
          { title: 'Sensory learning', text: 'Grasping, touching, tasting — we design rooms that engage all senses and invite exploration.' },
          { title: 'Language development', text: 'We talk a lot with the children, sing, rhyme and read aloud — right from the start.' },
        ],
        weekTitle: 'Our week at a glance',
        week: [
          { day: 'Monday', activity: 'Sense morning — touch & sound materials' },
          { day: 'Tuesday', activity: 'Garden & movement room' },
          { day: 'Wednesday', activity: 'Music circle with Lena' },
          { day: 'Thursday', activity: 'Buchstart — picture book time' },
          { day: 'Friday', activity: 'Family Friday with door chats' },
        ],
      },
      kindergarten: {
        slug: 'kindergarten',
        hero: 'Kindergarten Rainbow — growing and discovering',
        intro:
          'At kindergarten age, children become increasingly independent. We provide a framework in which they can deepen their interests, cooperate with others and gradually prepare for school.',
        daily: {
          title: 'Our kindergarten focus',
          items: [
            'Free play as the central learning space',
            'Project work on topics the children co-decide',
            'Weekly forest day and movement day',
            'Pre-school group for the oldest children',
            'Music, dance, art and theater',
          ],
        },
        highlights: [
          { title: 'Pre-school group', text: 'The "Schlaufüchse" meet weekly and playfully prepare for the start of school.' },
          { title: 'Participation', text: 'Children co-decide projects, rules and daily life — hands-on democracy.' },
          { title: 'Transitions', text: 'We cooperate closely with local primary schools to ease the transition for children.' },
        ],
        weekTitle: 'Our week at a glance',
        week: [
          { day: 'Monday', activity: 'Project day — ongoing group project' },
          { day: 'Tuesday', activity: 'Forest day at the Hainich' },
          { day: 'Wednesday', activity: 'Atelier & workshop' },
          { day: 'Thursday', activity: 'Pre-school group “Schlaufüchse”' },
          { day: 'Friday', activity: 'Music, dance & children’s conference' },
        ],
      },
    },
    team: {
      intro:
        'Our team consists of state-recognized educators, social pedagogues, special needs educators and trainees. Regular training, supervision and team meetings ensure the quality of our work.',
      qualifications: {
        title: 'What sets our team apart',
        items: [
          'At least state-recognized pedagogical training',
          'Annual training in language, inclusion and child protection',
          'Regular expert consultation and supervision',
          'Pediatric first-aid course every two years',
          'Extended certificate of good conduct for all staff',
        ],
      },
      bios: [
        {
          name: 'Anna Töpfer',
          quote: 'A good kindergarten is a place of encounter — for children, parents and the whole neighbourhood.',
          about: 'Anna leads the Thüringer Eltern-Kind-Zentrum (ThEKiZ) at Haus Sonnenschein. Focus: encounter work with families, counseling on everyday and life questions, and close ties with the neighbourhood.',
        },
        {
          name: 'Markus Weber',
          quote: 'Learning happens where children are allowed to co-decide.',
          about: 'Social pedagogue B.A., responsible for pedagogical concept work and the pre-school group “Schlaufüchse”.',
        },
        {
          name: 'Lena Hoffmann',
          quote: 'Language is a gift — we unwrap it anew every single day.',
          about: 'Certified language specialist within the federal “Sprach-Kitas” program. Lena especially supports multilingual families.',
        },
        {
          name: 'Tobias Krüger',
          quote: 'Inclusion is not a task — it is a stance.',
          about: 'Special needs educator focused on early intervention and the autism spectrum. Partner of our local early-support center.',
        },
      ],
      statsTitle: 'Team in numbers',
      stats: [
        { number: '12', label: 'Educators' },
        { number: '95 %', label: 'Qualified staff rate' },
        { number: '14', label: 'Trainings per year' },
        { number: '7 years', label: 'Avg. tenure' },
      ],
      voicesTitle: 'Voices from the team',
    },
    enrollment: {
      fullIntro:
        'Are you thinking about enrolling your child with us? We would love that! Here you will find all the information you need for enrollment.',
      documents: {
        title: 'What you need for enrollment',
        intro:
          'Please bring these documents to the enrollment interview — original, copy or digital scan all work. If something is missing, just get in touch and we will find a solution together.',
        items: [
          'Completed enrollment form',
          'Birth certificate of the child',
          'ID of the legal guardians',
          'Notice from Jugendamt Eisenach (if available)',
          'Proof of measles vaccination according to § 20 IfSG',
          'If needed: proof of employment / studies',
        ],
      },
      faq: [
        { question: 'From what age can children be admitted?', answer: 'We accept children from 8 weeks in the nursery and up to school entry in the kindergarten.' },
        { question: 'How long does settling-in take?', answer: 'Usually two to four weeks. We follow the Berlin settling-in model and the pace of your child.' },
        { question: 'Do you offer places for children with special needs?', answer: 'Yes. We work inclusively and cooperate closely with early intervention centers, therapists and pediatric specialists.' },
        { question: 'What about meals?', answer: 'We offer a freshly cooked lunch, snacks and drinks. 90 % of ingredients are certified organic. Special diets possible by arrangement.' },
        { question: 'What does a place cost?', answer: 'In Eisenach nursery places are free from the first year of life. Only the statutory meal contribution of €23 per month applies.' },
        { question: 'What are the closure days?', answer: '25 days per year, mostly 3 weeks in summer and between Christmas and New Year. You receive the plan each January for the running year.' },
      ],
      feesTitle: 'Fees & meals',
      feesIntro:
        'Childcare in Eisenach has been free of charge for parents since 2018. Only the statutory meal contribution is collected.',
      fees: [
        { label: 'Care contribution', price: '€0', sub: 'Free from birth (Eisenach)' },
        { label: 'Meals', price: '€23 / month', sub: 'Breakfast, lunch, snack' },
        { label: 'Excursions & materials', price: 'included', sub: 'No hidden costs' },
      ],
      deadlinesTitle: 'Key dates',
      deadlines: [
        { date: 'February', title: 'First conversations', text: 'We invite you for first conversations for the upcoming nursery year.' },
        { date: 'April', title: 'Place confirmation', text: 'You receive a written acceptance or polite refusal.' },
        { date: 'August', title: 'Settling-in starts', text: 'Start of the gentle settling-in in small steps.' },
      ],
    },
    news: {
      sommerfest: {
        slug: 'sommerfest',
        date: 'May 15, 2026',
        tag: 'Event',
        title: 'Summer festival with the whole family',
        lead: 'On June 22 we celebrate our annual summer festival — a day full of music, games and encounters.',
        body: [
          'As every year, we open our doors to the whole family: parents, grandparents, siblings, friends — everyone is warmly welcome.',
          'A colorful program awaits you with craft activities, a participatory concert, a large buffet and many surprises for the children. The festival starts at 2:00 pm and ends around 6:00 pm.',
          'We look forward to a wonderful day with you!',
        ],
      },
      naschgarten: {
        slug: 'naschgarten',
        date: 'May 2, 2026',
        tag: 'Project',
        title: 'Our new edible garden',
        lead: 'Together with the children we planted strawberries, herbs and tomatoes — harvest time is coming soon!',
        body: [
          'Over the past weeks, the children of our kindergarten have eagerly created their own little garden. They loosened the soil, planted, watered and now watch every day how everything grows.',
          'In summer we will harvest, chop and taste together. The edible garden is part of our pedagogical focus "Nature & Movement".',
          'A big thank you to the parents who helped us with plants, tools and hands-on support!',
        ],
      },
      'plaetze-august': {
        slug: 'plaetze-august',
        date: 'April 20, 2026',
        tag: 'Info',
        title: 'New places available from August',
        lead: 'A few places are still available in nursery and kindergarten for the 2026/27 nursery year.',
        body: [
          'Are you looking for a nursery place for your child? For the coming nursery year (starting August 2026) we still have capacity in both groups.',
          'Feel free to arrange an appointment for a personal meeting — we will show you our rooms, introduce the team and answer your questions.',
          'Use our contact form or simply give us a call.',
        ],
      },
    },
    contact: {
      eyebrow: 'Contact',
      title: 'How to reach us.',
      intro:
        'We look forward to your message — by phone, by email, or with a personal visit.',
      visit: {
        title: 'Visit us',
        address: 'AWO Kita Sunshine\nAm Amrichen Rasen 1\n99817 Eisenach',
        transport:
          'Bus: lines to the city center\nEisenach main station: 10 min.\nBike parking right in front of the building',
      },
      hoursTitle: 'Opening hours',
      hours: [
        { day: 'Monday – Thursday', time: '7:00 am – 5:00 pm' },
        { day: 'Friday', time: '7:00 am – 4:00 pm' },
        { day: 'Saturday & Sunday', time: 'Closed' },
      ],
      mapAlt: 'Map of the nursery location',
      formTitle: 'Write to us',
      formIntro: 'A response within 48 hours — we promise.',
      labels: {
        address: 'Address',
        phone: 'Phone',
        email: 'Email',
        directions: 'Directions',
      },
    },
    notFound: {
      title: 'Page not found',
      text: 'The page you are looking for does not exist or has been moved.',
      cta: 'Back to home',
    },
    backHome: 'Back to home',
    backTo: (target: string) => `Back to ${target}`,
  },
};
