import type { MiniWorldDef, Question, WorldDef } from "./types";

export const Q = (id: string, q: string, options: string[], answer: number, explain: string): Question => ({
  id,
  q,
  options,
  answer,
  explain,
});

/* ==================== BLOQUE IV: DERECHO ADMINISTRATIVO GENERAL (13 TEMAS BOE) ==================== */

export const W4_T1: MiniWorldDef = {
  "id": "derecho-t1",
  "num": 1,
  "temaTitle": "Tema 1: Las fuentes del derecho administrativo: concepto y clases. La jerarquía de las fuentes.",
  "name": "Templo de las Fuentes",
  "emoji": "📜",
  "theme": "derecho",
  "color": "#d97706",
  "enemy": "sello",
  "enemyName": "Antinomias normativas",
  "npcs": [
    {
      "name": "Catedrático de Derecho Administrativo",
      "role": "Fuentes del Derecho y jerarquía normativa",
      "look": {
        "skin": "#f3c9a0",
        "hair": "#52525b",
        "hairStyle": "short",
        "shirt": "#b45309",
        "pants": "#78350f",
        "acc": [
          "robe",
          "glasses"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "Art. 1.1 Código Civil: las fuentes del ordenamiento jurídico español son la ley, la costumbre y los principios generales del derecho.",
        "La Constitución Española es la norma suprema del ordenamiento (art. 9.1 CE). Principios informadores del art. 9.3: jerarquía normativa, legalidad, publicidad de las normas, irretroactividad de disposiciones sancionadoras no favorables y seguridad jurídica.",
        "El Derecho de la Unión Europea goza de primacía sobre el derecho interno.",
        "El principio de jerarquía normativa (art. 128 Ley 39/2015): las disposiciones administrativas no podrán vulnerar la Constitución ni las leyes, ni regular aquellas materias que la Constitución o los Estatutos reservan a la ley."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w4-t1-q1",
      "q": "¿Cuáles son las fuentes del ordenamiento jurídico español según el artículo 1.1 del Código Civil?",
      "options": [
        "La ley, la costumbre y los principios generales del derecho",
        "La ley, los decretos y la jurisprudencia",
        "La Constitución, las órdenes ministeriales y las circulares",
        "Los tratados internacionales y los convenios colectivos exclusivamente"
      ],
      "answer": 0,
      "explain": "Art. 1.1 Código Civil: Las fuentes del ordenamiento jurídico español son la ley, la costumbre y los principios generales del derecho."
    },
    {
      "id": "w4-t1-q2",
      "q": "¿Qué principios constitucionales garantiza el artículo 9.3 de la Constitución Española?",
      "options": [
        "Legalidad, jerarquía normativa, publicidad de las normas, irretroactividad de disposiciones sancionadoras no favorables o restrictivas de derechos, seguridad jurídica, responsabilidad y la interdicción de la arbitrariedad",
        "Soberanía parlamentaria absoluta y secreto de deliberaciones",
        "Retroactividad universal y discrecionalidad técnica sin límites",
        "Inmunidad jurisdiccional de los actos de gobierno"
      ],
      "answer": 0,
      "explain": "Art. 9.3 CE: Garantiza el principio de legalidad, la jerarquía normativa, la publicidad de las normas, la irretroactividad de las disposiciones sancionadoras no favorables o restrictivas de derechos individuales, la seguridad jurídica, la responsabilidad y la interdicción de la arbitrariedad de los poderes públicos."
    },
    {
      "id": "w4-t1-q3",
      "q": "¿Qué valor complementario atribuye el Código Civil a la jurisprudencia del Tribunal Supremo?",
      "options": [
        "Complementará el ordenamiento jurídico con la doctrina que de modo reiterado establezca al interpretar la ley, la costumbre y los principios generales",
        "Es una fuente directa superior a la ley ordinaria",
        "Carece de cualquier valor o relevancia jurídica",
        "Vincula solo si es ratificada por las Cortes Generales"
      ],
      "answer": 0,
      "explain": "Art. 1.6 Código Civil: La jurisprudencia complementará el ordenamiento jurídico con la doctrina que, de modo reiterado, establezca el Tribunal Supremo al interpretar y aplicar la ley, la costumbre y los principios generales del derecho."
    }
  ],
  "bossQs": [
    {
      "id": "w4-t1-b1",
      "q": "¿Qué consecuencia acarrea la vulneración del principio de jerarquía normativa por un reglamento que contradiga una ley?",
      "options": [
        "Nulidad de pleno derecho del reglamento (art. 47.2 Ley 39/2015)",
        "Anulabilidad subsanable en el plazo de 3 meses",
        "Eficacia provisional con multa al redactor",
        "Suspensión temporal hasta dictamen del Consejo de Estado"
      ],
      "answer": 0,
      "explain": "Art. 47.2 Ley 39/2015: Serán nulas de pleno derecho las disposiciones administrativas que vulneren la Constitución, las leyes u otras disposiciones administrativas de rango superior."
    },
    {
      "id": "w4-t1-b2",
      "q": "¿Qué principio impide que un reglamento de rango inferior derogue o modifique lo establecido por otro de rango superior?",
      "options": [
        "Principio de jerarquía reglamentaria (art. 128.3 Ley 39/2015)",
        "Principio de proporcionalidad",
        "Principio de inderogabilidad singular",
        "Principio de confianza legítima"
      ],
      "answer": 0,
      "explain": "Art. 128.3 Ley 39/2015: Las disposiciones administrativas se ajustarán al orden de jerarquía que establezcan las leyes. Ninguna disposición administrativa podrá vulnerar los preceptos de otra de rango superior."
    },
    {
      "id": "w4-t1-b3",
      "q": "¿Cuándo entran en vigor las leyes con carácter general según el artículo 2.1 del Código Civil?",
      "options": [
        "A los 20 días de su completa publicación en el BOE, si en ellas no se dispone otra cosa (vacatio legis)",
        "Al día siguiente de su publicación en todo caso",
        "En el mismo instante de la firma por el Rey",
        "A los tres meses de su aprobación parlamentaria"
      ],
      "answer": 0,
      "explain": "Art. 2.1 Código Civil: Las leyes entrarán en vigor a los veinte días de su completa publicación en el «Boletín Oficial del Estado», si en ellas no se dispone otra cosa."
    }
  ],
  "mini": {
    "type": "order",
    "title": "Pirámide de Jerarquía Normativa Española",
    "prompt": "Ordena las siguientes normas de mayor a menor rango jerárquico.",
    "items": [
      "Constitución Española de 1978 y Derecho Originario UE",
      "Leyes Orgánicas y Leyes Ordinarias / Decretos-Leyes / Decretos Legislativos",
      "Reales Decretos del Consejo de Ministros y del Presidente",
      "Órdenes Ministeriales (aprobadas por titulares de departamentos)",
      "Resoluciones y Circulares de órganos directivos inferiores"
    ]
  },
  "boss": {
    "name": "El Disconforme Jerárquico",
    "kind": "ghost",
    "intro": [
      "¡He redactado una Orden Ministerial que deroga una Ley Orgánica!"
    ],
    "defeat": [
      "¡Art. 9.3 CE y art. 47.2 Ley 39/2015! Nulidad radical de pleno derecho por vulneración frontal de la jerarquía normativa."
    ]
  },
  "summary": [
    "Fuentes (art. 1 CC): ley, costumbre y principios generales del derecho.",
    "Principios del art. 9.3 CE: legalidad, jerarquía normativa, publicidad, irretroactividad in peius, seguridad jurídica e interdicción de arbitrariedad.",
    "Reglamentos contra ley: nulos de pleno derecho (art. 47.2 Ley 39/2015).",
    "Vacatio legis (art. 2.1 CC): 20 días si la norma no fija otra fecha.",
    "Jurisprudencia: complementa el ordenamiento (reiterada doctrina del TS)."
  ]
};

export const W4_T2: MiniWorldDef = {
  "id": "derecho-t2",
  "num": 2,
  "temaTitle": "Tema 2: La ley. Tipos de leyes. Reserva de ley. Disposiciones del Gobierno con fuerza de ley: decreto-ley y decreto legislativo.",
  "name": "Cámara de la Ley y el Decreto",
  "emoji": "🏛️",
  "theme": "derecho",
  "color": "#b45309",
  "enemy": "sello",
  "enemyName": "Decretos ultra vires",
  "npcs": [
    {
      "name": "Letrada de Cortes",
      "role": "Leyes orgánicas, decretos-leyes y decretos legislativos",
      "look": {
        "skin": "#fcd5b5",
        "hair": "#2e2e2e",
        "hairStyle": "long",
        "shirt": "#78350f",
        "pants": "#451a03",
        "acc": [
          "glasses",
          "badge"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "La Ley: expresión de la voluntad popular aprobada por las Cortes Generales.",
        "Ley Orgánica (art. 81 CE): desarrollo de los derechos fundamentales y libertades públicas, Estatutos de Autonomía y régimen electoral general. Aprobación por mayoría absoluta del Congreso en votación final sobre el conjunto del proyecto.",
        "Normas del Gobierno con fuerza de ley:",
        "1. Real Decreto-ley (art. 86 CE): caso de extraordinaria y urgente necesidad. Límites materiales: no puede afectar al ordenamiento de las instituciones básicas del Estado, derechos del Título I, régimen de las CCAA ni derecho electoral general. Convalidación por el Congreso en 30 días.",
        "2. Real Decreto Legislativo (arts. 82 a 85 CE): delegación de las Cortes. Dos formas: Ley de Bases (para texto articulado, prohibido regular con carácter retroactivo o facultar para modificar la propia ley de bases) y Ley Ordinaria (para refundir textos legales)."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w4-t2-q1",
      "q": "¿Qué mayoría se exige para la aprobación de una Ley Orgánica según el artículo 81.2 CE?",
      "options": [
        "Mayoría absoluta del Congreso de los Diputados, en una votación final sobre el conjunto del proyecto",
        "Mayoría absoluta de Congreso y Senado",
        "Dos tercios del Congreso de los Diputados",
        "Mayoría simple en ambas Cámaras"
      ],
      "answer": 0,
      "explain": "Art. 81.2 CE: La aprobación, modificación o derogación de las leyes orgánicas exigirá mayoría absoluta del Congreso, en una votación final sobre el conjunto del proyecto."
    },
    {
      "id": "w4-t2-q2",
      "q": "¿Qué materias tiene vedadas taxativamente el Real Decreto-ley según el artículo 86.1 de la Constitución?",
      "options": [
        "El ordenamiento de las instituciones básicas del Estado, los derechos, deberes y libertades del Título I, el régimen de las CCAA y el Derecho electoral general",
        "La contratación del sector público y las obras",
        "Las subvenciones agrícolas exclusivamente",
        "Los planes de urbanismo municipal"
      ],
      "answer": 0,
      "explain": "Art. 86.1 CE: No podrán afectar al ordenamiento de las instituciones básicas del Estado, a los derechos, deberes y libertades de los ciudadanos regulados en el Título I, al régimen de las Comunidades Autónomas ni al Derecho electoral general."
    },
    {
      "id": "w4-t2-q3",
      "q": "¿En qué plazo debe ser sometido a debate y votación de convalidación un Real Decreto-ley ante el Congreso (art. 86.2 CE)?",
      "options": [
        "En el plazo de los treinta días siguientes a su promulgación",
        "En el plazo de quince días",
        "En el plazo de dos meses",
        "En el plazo de sesenta días hábiles"
      ],
      "answer": 0,
      "explain": "Art. 86.2 CE: Los Decretos-leyes deberán ser inmediatamente sometidos a debate y votación de totalidad al Congreso de los Diputados, dentro del plazo de los treinta días siguientes a su promulgación."
    }
  ],
  "bossQs": [
    {
      "id": "w4-t2-b1",
      "q": "¿A través de qué instrumento parlamentario delegan las Cortes la potestad de dictar un texto articulado?",
      "options": [
        "Mediante una Ley de Bases (art. 82.2 CE)",
        "Mediante una Ley Ordinaria de refundición",
        "Mediante una Proposición no de ley",
        "Mediante una Orden de la Mesa del Congreso"
      ],
      "answer": 0,
      "explain": "Art. 82.2 CE: La delegación legislativa deberá otorgarse mediante una ley de bases cuando su objeto sea la formación de textos articulados, o por una ley ordinaria cuando se trate de refundir varios textos legales en uno solo."
    },
    {
      "id": "w4-t2-b2",
      "q": "¿Qué prohíbe expresamente el artículo 83 de la CE a las Leyes de Bases?",
      "options": [
        "Autorizar la modificación de la propia ley de bases y facultar para dictar normas con carácter retroactivo",
        "Delegar en el Consejo de Ministros",
        "Fijar plazos para la elaboración del texto",
        "Establecer directrices para el Gobierno"
      ],
      "answer": 0,
      "explain": "Art. 83 CE: Las leyes de bases no podrán en ningún caso autorizar la modificación de la propia ley de bases ni facultar para dictar normas con carácter retroactivo."
    },
    {
      "id": "w4-t2-b3",
      "q": "¿Qué control jurisdiccional se aplica si un Decreto Legislativo incurre en exceso de delegación (ultra vires)?",
      "options": [
        "Control tanto por el Tribunal Constitucional como por los Tribunales Ordinarios Contencioso-Administrativos",
        "Exclusivamente por el Tribunal Constitucional",
        "Solo mediante recurso administrativo de alzada",
        "No existe control jurisdiccional posible"
      ],
      "answer": 0,
      "explain": "Art. 82.6 CE y jurisprudencia del TS/TC: En lo que exceda de la delegación legislativa (ultra vires), el decreto legislativo carece de fuerza de ley y los tribunales contencioso-administrativos pueden inaplicarlo o anularlo."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Modalidades Normativas con Fuerza de Ley",
    "prompt": "Empareja cada norma con su requisito constitucional definitorio.",
    "pairs": [
      [
        "Ley Orgánica (art. 81 CE)",
        "Mayoría absoluta del Congreso en votación final sobre el conjunto"
      ],
      [
        "Decreto-ley (art. 86 CE)",
        "Extraordinaria y urgente necesidad; convalidación en 30 días"
      ],
      [
        "Texto Articulado (art. 82)",
        "Decreto Legislativo emanado de una Ley de Bases"
      ],
      [
        "Texto Refundido (art. 82)",
        "Decreto Legislativo emanado de una Ley Ordinaria de refundición"
      ]
    ]
  },
  "boss": {
    "name": "El Legislador de Urgencia",
    "kind": "veto",
    "intro": [
      "¡He regulado el régimen electoral general mediante Decreto-ley!"
    ],
    "defeat": [
      "¡Art. 86.1 CE! Límite material insoslayable. El Tribunal Constitucional declara la inconstitucionalidad y nulidad."
    ]
  },
  "summary": [
    "Ley Orgánica (art. 81 CE): materias tasadas (DDFF, Estatutos, LOREG) + mayoría absoluta del Congreso en votación final de conjunto.",
    "Decreto-ley (art. 86 CE): presupuesto habilitante (extraordinaria y urgente necesidad). Convalidación en 30 días. Vedado: Título I, CCAA, LOREG, instituciones básicas.",
    "Decreto Legislativo (art. 82 CE): delegación expresa con plazo. Ley de bases (textos articulados; no retroactivo ni modificar bases art. 83) o ley ordinaria (textos refundidos).",
    "Control ultra vires: jurisdicción contencioso-administrativa y Tribunal Constitucional."
  ]
};

export const W4_T3: MiniWorldDef = {
  "id": "derecho-t3",
  "num": 3,
  "temaTitle": "Tema 3: El reglamento: concepto, clases y límites. Los principios generales del Derecho. Los tratados internacionales.",
  "name": "Palacio del Reglamento",
  "emoji": "📜",
  "theme": "derecho",
  "color": "#92400e",
  "enemy": "sello",
  "enemyName": "Reglamentos ultra vires",
  "npcs": [
    {
      "name": "Vocal del Consejo de Estado",
      "role": "Potestad reglamentaria, límites y tratados internacionales",
      "look": {
        "skin": "#f3c9a0",
        "hair": "#71717a",
        "hairStyle": "short",
        "shirt": "#78350f",
        "pants": "#1c1917",
        "acc": [
          "robe",
          "glasses"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "El Reglamento es toda disposición administrativa de carácter general y rango inferior a la ley dictada por la Administración (art. 97 CE y arts. 128 a 133 Ley 39/2015).",
        "Clases: ejecutivos (desarrollan una ley previa, dictamen preceptivo del Consejo de Estado), independientes (autoorganización en materias no reservadas a la ley) y de necesidad (situaciones catastróficas excepcionales).",
        "Límites de los reglamentos:",
        "1. Principio de reserva de ley (absoluta y relativa): el reglamento no puede tipificar delitos, penas ni infracciones muy graves sin base legal.",
        "2. Principio de jerarquía normativa: subordinación absoluta a la ley.",
        "3. Principio de inderogabilidad singular (art. 37 Ley 39/2015): las resoluciones administrativas de carácter particular no podrán vulnerar lo establecido en una disposición de carácter general, aunque aquéllas procedan de un órgano de igual o superior jerarquía al que dictó la disposición general.",
        "Tratados internacionales (arts. 93 a 96 CE): una vez publicados en el BOE forman parte del ordenamiento interno y sólo pueden ser derogados según las normas de Derecho Internacional."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w4-t3-q1",
      "q": "¿En qué consiste el principio de 'inderogabilidad singular de los reglamentos' (art. 37 Ley 39/2015)?",
      "options": [
        "Una resolución administrativa particular no puede vulnerar un reglamento general, aunque emane de un órgano superior al que dictó el reglamento",
        "Un reglamento nunca puede ser derogado por otra norma general",
        "Los ministros pueden dispensar individualmente del cumplimiento de la ley",
        "Solo los jueces pueden aplicar reglamentos"
      ],
      "answer": 0,
      "explain": "Art. 37.1 Ley 39/2015: Las resoluciones administrativas de carácter particular no podrán vulnerar lo establecido en una disposición de carácter general, aunque aquéllas procedan de un órgano de igual o superior jerarquía al que dictó la disposición general."
    },
    {
      "id": "w4-t3-q2",
      "q": "¿Qué trámite consultivo es preceptivo para los reglamentos ejecutivos que desarrollan leyes estatales?",
      "options": [
        "Dictamen del Consejo de Estado en Comisión Permanente",
        "Autorización previa del Tribunal Supremo",
        "Audiencia del Defensor del Pueblo",
        "Aprobación de la Mesa del Senado"
      ],
      "answer": 0,
      "explain": "Art. 22.3 LO 3/1980 del Consejo de Estado: La Comisión Permanente del Consejo de Estado deberá ser consultada preceptivamente sobre los reglamentos o disposiciones de carácter general que se dicten en ejecución de las leyes y sus modificaciones."
    },
    {
      "id": "w4-t3-q3",
      "q": "¿Cómo se incorporan válidamente los Tratados Internacionales al ordenamiento jurídico español (art. 96.1 CE)?",
      "options": [
        "Mediante su válida celebración y completa publicación oficial en el Boletín Oficial del Estado",
        "Requieren en todo caso la promulgación de una ley ordinaria posterior",
        "Entran en vigor automáticamente sin necesidad de publicación en el BOE",
        "Por simple acuerdo verbal en el Consejo de Ministros"
      ],
      "answer": 0,
      "explain": "Art. 96.1 CE: Los tratados internacionales válidamente celebrados, una vez publicados oficialmente en España, formarán parte del ordenamiento interno."
    }
  ],
  "bossQs": [
    {
      "id": "w4-t3-b1",
      "q": "¿A través de qué procedimiento se autoriza la celebración de tratados que transfieren a una organización internacional competencias constitucionales (art. 93 CE)?",
      "options": [
        "Mediante Ley Orgánica",
        "Mediante Ley Ordinaria",
        "Por Real Decreto del Presidente",
        "Por simple comunicación al Congreso"
      ],
      "answer": 0,
      "explain": "Art. 93 CE: Mediante ley orgánica se podrá autorizar la celebración de tratados por los que se atribuya a una organización o institución internacional el ejercicio de competencias derivadas de la Constitución (vía de entrada en la UE)."
    },
    {
      "id": "w4-t3-b2",
      "q": "¿Pueden los tribunales ordinarios inaplicar de oficio un reglamento administrativo que vulnere la ley (art. 6 LOPJ)?",
      "options": [
        "Sí, los jueces y tribunales no aplicarán los reglamentos contrarios a la Constitución, a la ley o al principio de jerarquía normativa",
        "No, deben plantear siempre cuestión de inconstitucionalidad al TC",
        "Solo si lo autoriza el Ministerio de Justicia",
        "Solo pueden inaplicarlo si es de rango municipal"
      ],
      "answer": 0,
      "explain": "Art. 6 LOPJ: Los Jueces y Tribunales no aplicarán los reglamentos o cualquier otra disposición contrarios a la Constitución, a la ley o al principio de jerarquía normativa."
    },
    {
      "id": "w4-t3-b3",
      "q": "¿Qué recurso procede contra una disposición administrativa de carácter general en vía administrativa según el art. 112.3 Ley 39/2015?",
      "options": [
        "No cabrá recurso en vía administrativa contra las disposiciones generales (solo impugnación directa ante la jurisdicción contencioso-administrativa)",
        "Recurso potestativo de reposición",
        "Recurso de alzada ordinario",
        "Recurso extraordinario de revisión"
      ],
      "answer": 0,
      "explain": "Art. 112.3 Ley 39/2015: Contra las disposiciones administrativas de carácter general no cabrá recurso en vía administrativa (salvo recursos indirectos contra los actos dictados en su aplicación)."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Régimen Jurídico del Reglamento",
    "prompt": "Empareja cada regla con su contenido según la Ley 39/2015 y la LOPJ.",
    "pairs": [
      [
        "Inderogabilidad singular",
        "Resolución particular no puede vulnerar norma general ni con órgano superior"
      ],
      [
        "Reglamento ejecutivo",
        "Requiere dictamen preceptivo del Consejo de Estado"
      ],
      [
        "Inaplicación judicial (art. 6 LOPJ)",
        "Jueces y tribunales no aplican reglamentos contrarios a la ley"
      ],
      [
        "Vía de impugnación directa",
        "Jurisdicción Contencioso-Administrativa (no cabe recurso administrativo)"
      ]
    ]
  },
  "boss": {
    "name": "El Dispensador Ilegal",
    "kind": "veto",
    "intro": [
      "¡He dictado una resolución particular que exime a mi amigo de cumplir el reglamento!"
    ],
    "defeat": [
      "¡Art. 37 Ley 39/2015! Principio de inderogabilidad singular. La dispensa individual es radicalmente nula."
    ]
  },
  "summary": [
    "Reglamento: norma subordinada a la ley (art. 97 CE y Ley 39/2015).",
    "Clases: ejecutivos (dictamen preceptivo Consejo de Estado), independientes y de necesidad.",
    "Límites: reserva de ley y jerarquía normativa.",
    "Inderogabilidad singular (art. 37 Ley 39/2015): actos individuales jamás pueden vulnerar reglamentos.",
    "Impugnación: no cabe recurso administrativo directo contra reglamentos (art. 112.3); impugnación judicial contencioso-administrativa.",
    "Tratados internacionales (art. 93 LO, arts. 94-96 publicación en BOE)."
  ]
};

export const W4_T4: MiniWorldDef = {
  "id": "derecho-t4",
  "num": 4,
  "temaTitle": "Tema 4: El acto administrativo: concepto, clases y elementos. Eficacia y validez de los actos administrativos. Su motivación y notificación.",
  "name": "Torre del Acto Administrativo",
  "emoji": "📋",
  "theme": "derecho",
  "color": "#b45309",
  "enemy": "sello",
  "enemyName": "Actos nulos",
  "npcs": [
    {
      "name": "Oficial Instructor",
      "role": "Acto administrativo, eficacia, motivación, nulidad y anulabilidad",
      "look": {
        "skin": "#fcd5b5",
        "hair": "#374151",
        "hairStyle": "short",
        "shirt": "#9a3412",
        "pants": "#431407",
        "acc": [
          "badge",
          "tie"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "El Acto Administrativo: declaración de voluntad, juicio, conocimiento o deseo realizada por una Administración pública en el ejercicio de una potestad administrativa (Zanobini).",
        "Eficacia (art. 39 Ley 39/2015): los actos se presumirán válidos y producirán efectos desde la fecha en que se dicten, salvo que en ellos se disponga otra cosa o su eficacia esté demorada por notificación, publicación o aprobación superior.",
        "Motivación obligatoria (art. 35 Ley 39/2015): actos que limiten derechos o intereses legítimos, resuelvan recursos, se separen del criterio del órgano o de dictámenes, o suspendan actos.",
        "Notificación (art. 40 Ley 39/2015): debe cursarse en el plazo de diez días desde que el acto fue dictado. Contendrá texto íntegro, si pone fin o no a la vía administrativa, recursos que procedan, órgano y plazo.",
        "Invalidez:",
        "• Nulidad de pleno derecho (art. 47 Ley 39/2015): causas tasadas (lesionen derechos fundamentales, dictados por órgano manifiestamente incompetente por razón de materia o territorio, contenido imposible, delito, prescindan total y absolutamente del procedimiento legalmente establecido). No subsanable e imprescriptible.",
        "• Anulabilidad (art. 48 Ley 39/2015): cualquier otra infracción del ordenamiento. El defecto de forma sólo determina anulabilidad cuando el acto carezca de los requisitos indispensables o dé lugar a indefensión."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w4-t4-q1",
      "q": "¿Cuál es la regla general sobre la presunción y eficacia de los actos administrativos según el art. 39.1 Ley 39/2015?",
      "options": [
        "Se presumirán válidos y producirán efectos desde la fecha en que se dicten, salvo que en ellos se disponga otra cosa",
        "Solo producen efectos tras el visto bueno judicial previo",
        "Carecen de eficacia hasta transcurridos tres meses",
        "Se presumen nulos hasta que se demuestre lo contrario"
      ],
      "answer": 0,
      "explain": "Art. 39.1 Ley 39/2015: Los actos de las Administraciones Públicas sujetos al Derecho Administrativo se presumirán válidos y producirán efectos desde la fecha en que se dicten, salvo que en ellos se disponga otra cosa."
    },
    {
      "id": "w4-t4-q2",
      "q": "¿Cuál de las siguientes causas determina la NULIDAD DE PLENO DERECHO de un acto administrativo (art. 47.1 Ley 39/2015)?",
      "options": [
        "Los que lesionen los derechos y libertades susceptibles de amparo constitucional",
        "Cualquier defecto de redacción formal no invalidante",
        "La incompetencia puramente jerárquica del órgano emisor",
        "La falta de indicación del recurso procedente en la notificación"
      ],
      "answer": 0,
      "explain": "Art. 47.1.a Ley 39/2015: Los actos que lesionen los derechos y libertades susceptibles de amparo constitucional son nulos de pleno derecho."
    },
    {
      "id": "w4-t4-q3",
      "q": "¿En qué plazo debe cursarse toda notificación administrativa a partir de la fecha en que el acto haya sido dictado (art. 40.2 Ley 39/2015)?",
      "options": [
        "En el plazo de diez días",
        "En el plazo de quince días",
        "En el plazo de tres días hábiles",
        "En el plazo de un mes"
      ],
      "answer": 0,
      "explain": "Art. 40.2 Ley 39/2015: Toda notificación deberá ser cursada dentro del plazo de diez días a partir de la fecha en que el acto haya sido dictado."
    }
  ],
  "bossQs": [
    {
      "id": "w4-t4-b1",
      "q": "¿Cuándo determina un defecto de forma la anulabilidad de un acto administrativo según el art. 48.2 Ley 39/2015?",
      "options": [
        "Sólo cuando el acto carezca de los requisitos formales indispensables para alcanzar su fin o dé lugar a la indefensión de los interesados",
        "En todos los supuestos de error mecanográfico",
        "Cuando falte el membrete oficial del ministerio",
        "Siempre que no lleve firma manuscrita"
      ],
      "answer": 0,
      "explain": "Art. 48.2 Ley 39/2015: El defecto de forma sólo determinará la anulabilidad cuando el acto carezca de los requisitos formales indispensables para alcanzar su fin o dé lugar a la indefensión de los interesados."
    },
    {
      "id": "w4-t4-b2",
      "q": "¿Qué actos administrativos están obligados a ser motivados con sucinta referencia de hechos y fundamentos (art. 35 Ley 39/2015)?",
      "options": [
        "Los actos que limiten derechos subjetivos o intereses legítimos, los que resuelvan recursos y los que se separen del precedente",
        "Todos los actos sin excepción alguna",
        "Únicamente los nombramientos de altos cargos",
        "Ninguno, pues rige la discrecionalidad pura"
      ],
      "answer": 0,
      "explain": "Art. 35.1 Ley 39/2015: Serán motivados con sucinta referencia de hechos y fundamentos de derecho los actos que limiten derechos o intereses legítimos, los que resuelvan recursos, los que se separen del criterio seguido en actuaciones precedentes, entre otros."
    },
    {
      "id": "w4-t4-b3",
      "q": "¿En qué casos produce efectos retroactivos un acto administrativo según el art. 39.3 Ley 39/2015?",
      "options": [
        "Cuando se dicten en sustitución de actos anulados, o produzcan efectos favorables al interesado y los supuestos de hecho existieran ya en la fecha a que se retrotraiga",
        "Cuando impongan una sanción tributaria más grave",
        "En todo caso de resolución presunta",
        "Jamás cabe la retroactividad de ningún acto"
      ],
      "answer": 0,
      "explain": "Art. 39.3 Ley 39/2015: Excepcionalmente, podrá otorgarse eficacia retroactiva a los actos cuando se dicten en sustitución de actos anulados, así como cuando produzcan efectos favorables al interesado, siempre que los supuestos de hecho necesarios existieran ya en la fecha a que se retrotraiga la eficacia y no lesione derechos o intereses legítimos de otras personas."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Causas de Nulidad de Pleno Derecho (Art. 47 Ley 39/2015)",
    "prompt": "Empareja cada supuesto fáctico con su tipificación en el art. 47.1 Ley 39/2015.",
    "pairs": [
      [
        "Vulneración del art. 18 CE (intimidad)",
        "Lesión de derechos susceptibles de amparo (art. 47.1.a)"
      ],
      [
        "Alcalde expropia fuera de su término",
        "Incompetencia manifiesta por razón de territorio (art. 47.1.b)"
      ],
      [
        "Demoler un edificio inexistente",
        "Contenido imposible (art. 47.1.c)"
      ],
      [
        "Sancionar sin expediente ni audiencia",
        "Prescindir total y absolutamente del procedimiento (art. 47.1.e)"
      ]
    ]
  },
  "boss": {
    "name": "El Inquisidor Nulo",
    "kind": "ghost",
    "intro": [
      "¡He embargado tus cuentas prescindiendo de todo procedimiento legal y sin notificación!"
    ],
    "defeat": [
      "¡Art. 47.1.e Ley 39/2015! Nulidad radical de pleno derecho por prescindencia absoluta del procedimiento legal."
    ]
  },
  "summary": [
    "Eficacia y validez (art. 39 Ley 39/2015): presunción iuris tantum de validez desde la fecha en que se dictan.",
    "Notificación (art. 40): cursada en 10 días; requisitos obligatorios (texto íntegro, fin de vía, recursos y plazos).",
    "Motivación obligatoria (art. 35): actos desfavorables, recursos, desviación de precedentes.",
    "Nulidad de pleno derecho (art. 47): tasada, insubsanable, imprescriptible (derechos fundamentales, incompetencia material/territorial, contenido imposible, delito, falta total de procedimiento).",
    "Anulabilidad (art. 48): regla general residual. Defecto de forma solo anula si genera indefensión o falta de fin."
  ]
};

export const W4_T5: MiniWorldDef = {
  "id": "derecho-t5",
  "num": 5,
  "temaTitle": "Tema 5: Los contratos del sector público (I): concepto, clases y elementos. Preparación, adjudicación, efectos, cumplimiento y extinción. La revisión de precios y otras alteraciones contractuales. Régimen de invalidez y recursos.",
  "name": "Palacio de la Contratación Pública",
  "emoji": "📑",
  "theme": "derecho",
  "color": "#78350f",
  "enemy": "sello",
  "enemyName": "Licitaciones amañadas",
  "npcs": [
    {
      "name": "Vocal del Tribunal de Recursos Contractuales",
      "role": "LCSP 9/2017: preparación, adjudicación, modificación e invalidez",
      "look": {
        "skin": "#f3c9a0",
        "hair": "#2e2e2e",
        "hairStyle": "short",
        "shirt": "#451a03",
        "pants": "#1c1917",
        "acc": [
          "tie",
          "glasses"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "Ley 9/2017 de Contratos del Sector Público (LCSP): principios de libertad de acceso, no discriminación, transparencia, proporcionalidad y eficiencia del gasto público.",
        "Elementos del contrato: órgano de contratación, contratista (capacidad de obrar, no prohibición de contratar del art. 71, solvencia económica y técnica o clasificación), objeto determinado y precio cierto.",
        "Preparación del contrato: expediente de contratación, pliegos de cláusulas administrativas particulares (PCAP) y prescripciones técnicas (PPT), aprobación del gasto y fiscalización previa.",
        "Procedimientos de adjudicación: abierto (todos pueden licitar), restringido (tras selección de candidatos), licitación con negociación, diálogo competitivo y asociación para la innovación.",
        "Modificación de contratos (art. 204 y 205 LCSP): previstas en pliegos (hasta máx. 20%) o imprevistas tasadas (máx. 50%).",
        "Recurso especial en materia de contratación (REMC, arts. 44 y ss.): potestativo y gratuito ante el TACRC u órganos autonómicos. Produce suspensión automática del acto de adjudicación."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w4-t5-q1",
      "q": "¿Qué efecto cautelar automático produce la interposición del Recurso Especial en Materia de Contratación (REMC) contra la adjudicación?",
      "options": [
        "La suspensión automática de la tramitación del expediente de contratación o de la formalización",
        "La resolución inmediata del contrato con indemnización",
        "La desestimación automática por silencio administrativo",
        "La remisión obligatoria al Tribunal Penal Internacional"
      ],
      "answer": 0,
      "explain": "Art. 53 LCSP: En el caso de que el recurso especial se interponga contra el acto de adjudicación, la tramitación del expediente quedará en suspenso de forma automática hasta que se resuelva el recurso."
    },
    {
      "id": "w4-t5-q2",
      "q": "¿Cuál es el órgano administrativo estatal independiente competente para resolver los recursos especiales de contratación?",
      "options": [
        "El Tribunal Administrativo Central de Recursos Contractuales (TACRC)",
        "El Consejo de Ministros",
        "El Consejo de Estado en pleno",
        "La Intervención General del Estado exclusivamente"
      ],
      "answer": 0,
      "explain": "Art. 45 LCSP: El Tribunal Administrativo Central de Recursos Contractuales (TACRC) está adscrito al Ministerio de Hacienda y goza de independencia funcional para resolver los recursos especiales en el ámbito estatal."
    },
    {
      "id": "w4-t5-q3",
      "q": "¿Cuál es el límite máximo general para las modificaciones contractuales imprevistas contempladas en el art. 205 LCSP?",
      "options": [
        "No podrán superar aislada o conjuntamente el 50 por ciento del precio inicial del contrato",
        "Hasta el 100 por ciento del contrato",
        "Hasta el 20 por ciento en todo caso",
        "No cabe modificación alguna bajo ningún concepto"
      ],
      "answer": 0,
      "explain": "Art. 205.2 LCSP: La modificación no podrá alterar la naturaleza global del contrato y su cuantía no podrá exceder, aislada o conjuntamente, del 50 por ciento de su precio inicial."
    }
  ],
  "bossQs": [
    {
      "id": "w4-t5-b1",
      "q": "¿En qué plazo debe interponerse el recurso especial en materia de contratación según el artículo 50 LCSP?",
      "options": [
        "Quince días hábiles",
        "Diez días naturales",
        "Un mes natural",
        "Veinte días hábiles"
      ],
      "answer": 0,
      "explain": "Art. 50.1 LCSP: El plazo de interposición será de quince días hábiles, computados según el tipo de acto impugnado (notificación de la adjudicación, publicación del pliego, etc.)."
    },
    {
      "id": "w4-t5-b2",
      "q": "¿Qué documento contractual define los derechos y obligaciones de las partes y tiene carácter de 'ley del contrato'?",
      "options": [
        "El Pliego de Cláusulas Administrativas Particulares (PCAP)",
        "El documento contable AD",
        "La factura proforma del licitador",
        "El acta de recepción provisoria"
      ],
      "answer": 0,
      "explain": "Art. 122 LCSP: El Pliego de Cláusulas Administrativas Particulares (PCAP) regula los derechos y obligaciones de las partes contratantes y constituye la auténtica ley del contrato."
    },
    {
      "id": "w4-t5-b3",
      "q": "¿Qué garantía definitiva se exige con carácter general al adjudicatario de un contrato según el art. 107 LCSP?",
      "options": [
        "Un 5 por ciento del precio final ofertado, excluido el IVA",
        "Un 10 por ciento del presupuesto base",
        "Un 2 por ciento del valor estimado",
        "Un aval bancario por el 50 por ciento"
      ],
      "answer": 0,
      "explain": "Art. 107.1 LCSP: Los que presenten las mejores ofertas deberán constituir a disposición del órgano de contratación una garantía de un 5 por 100 del precio final ofertado, excluido el IVA."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Procedimientos y Garantías de la Contratación Pública",
    "prompt": "Empareja cada figura contractual con su característica según la Ley 9/2017.",
    "pairs": [
      [
        "Procedimiento Abierto",
        "Todo empresario interesado puede presentar proposición (sin negociación)"
      ],
      [
        "Garantía definitiva",
        "5% del precio final ofertado excluido el IVA (art. 107 LCSP)"
      ],
      [
        "REMC (plazo)",
        "15 días hábiles ante el TACRC con suspensión automática de la adjudicación"
      ],
      [
        "PCAP",
        "Pliego que establece las cláusulas jurídicas y es la ley del contrato"
      ]
    ]
  },
  "boss": {
    "name": "El Licitador Colusorio",
    "kind": "veto",
    "intro": [
      "¡Hemos pactado ofertas artificiales para repartirnos la licitación pública!"
    ],
    "defeat": [
      "¡Art. 150.1 LCSP y CNMC! Indicios fundados de colusión. Exclusión inmediata de los licitadores y traslado a la Fiscalía."
    ]
  },
  "summary": [
    "Ley 9/2017 (LCSP): libertad de concurrencia, transparencia, igualdad y eficiente uso de fondos públicos.",
    "Expediente: PCAP (ley del contrato), PPT (prescripciones técnicas), aprobación del gasto.",
    "Procedimientos: abierto, restringido, licitación con negociación, diálogo competitivo.",
    "Garantía definitiva: 5% del importe de adjudicación sin IVA (art. 107).",
    "Modificación: previstas en pliego (máx. 20%) e imprevistas tasadas (máx. 50%, art. 205).",
    "REMC: 15 días hábiles, suspensión automática contra adjudicación, resuelto por el TACRC."
  ]
};

export const W4_T6: MiniWorldDef = {
  "id": "derecho-t6",
  "num": 6,
  "temaTitle": "Tema 6: Los contratos regulados por la Ley de Contratos del Sector Público (II). Tipos. Características generales.",
  "name": "Galería de Tipos Contractuales",
  "emoji": "🏗️",
  "theme": "derecho",
  "color": "#b45309",
  "enemy": "sello",
  "enemyName": "Fraccionamiento de contratos",
  "npcs": [
    {
      "name": "Jefa de Contratación Administrativa",
      "role": "Obras, suministros, servicios, concesiones y contratos menores",
      "look": {
        "skin": "#fcd5b5",
        "hair": "#2e2e2e",
        "hairStyle": "bun",
        "shirt": "#b45309",
        "pants": "#451a03",
        "acc": [
          "hardhat",
          "glasses"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "Tipología de contratos del sector público (arts. 12 a 18 LCSP):",
        "• Contrato de obras: ejecución o proyecto y ejecución de trabajos de construcción, reforma o conservación de un bien inmueble.",
        "• Concesión de obras: ejecución y explotación de obras públicas con transferencia del riesgo operacional.",
        "• Concesión de servicios: gestión de un servicio público con transferencia del riesgo operacional.",
        "• Contrato de suministro: adquisición, arrendamiento financiero o locación de bienes muebles o productos.",
        "• Contrato de servicios: prestaciones de hacer consistentes en el desarrollo de una actividad o dirigidas a un resultado distinto de una obra o suministro.",
        "Contratos menores (art. 118 LCSP): valor estimado inferior a 40.000 euros para obras, o inferior a 15.000 euros para servicios y suministros. Exigen informe del órgano de contratación justificando la necesidad y que no se está fraccionando el objeto del contrato para eludir los límites de licitación."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w4-t6-q1",
      "q": "¿Cuáles son los umbrales económicos cuantitativos de los 'contratos menores' según el art. 118.1 LCSP?",
      "options": [
        "Valor estimado inferior a 40.000 euros en obras e inferior a 15.000 euros en suministros y servicios",
        "Inferior a 50.000 euros en obras e inferior a 25.000 en servicios",
        "Inferior a 100.000 euros en todo caso",
        "Inferior a 18.000 euros sin distinción de objeto"
      ],
      "answer": 0,
      "explain": "Art. 118.1 LCSP: Se consideran contratos menores los contratos de valor estimado inferior a 40.000 euros cuando se trate de contratos de obras, o a 15.000 euros cuando se trate de contratos de suministro o de servicios."
    },
    {
      "id": "w4-t6-q2",
      "q": "¿Cuál es el elemento definitorio sustantivo que distingue a una 'concesión' de un contrato ordinario de servicios u obras?",
      "options": [
        "La transferencia del riesgo operacional al concesionario",
        "Que el contratista cobre exclusivamente del Estado una renta fija",
        "Que no se exija fianza definitiva",
        "Que no intervenga la mesa de contratación"
      ],
      "answer": 0,
      "explain": "Arts. 14 y 15 LCSP: En las concesiones de obras y servicios el concesionario asume el riesgo operacional en la explotación de las obras o en la prestación de los servicios."
    },
    {
      "id": "w4-t6-q3",
      "q": "¿Qué prohíbe taxativamente el artículo 99.2 de la LCSP respecto al objeto del contrato?",
      "options": [
        "El fraccionamiento del contrato con la finalidad de disminuir la cuantía y eludir los requisitos de publicidad o procedimiento",
        "La división del contrato en lotes independientes",
        "La subcontratación de trabajos auxiliares",
        "La presentación de ofertas con variantes"
      ],
      "answer": 0,
      "explain": "Art. 99.2 LCSP: No podrá fraccionarse un contrato con la finalidad de disminuir la cuantía del mismo y eludir así los requisitos de publicidad o los relativos al procedimiento de adjudicación que correspondan."
    }
  ],
  "bossQs": [
    {
      "id": "w4-t6-b1",
      "q": "¿Qué trámite mínimo exige el expediente de un contrato menor en servicios o suministros (art. 118.2 LCSP)?",
      "options": [
        "Informe del órgano justificando la necesidad y la no alteración del objeto, aprobación del gasto y factura",
        "Publicación preceptiva en el DOUE durante 30 días",
        "Mesa de contratación y subasta electrónica",
        "Comisión paritaria sindical y dictamen del Consejo de Estado"
      ],
      "answer": 0,
      "explain": "Art. 118.2 LCSP: La tramitación del expediente exigirá la emisión de un informe del órgano de contratación motivando la necesidad, la aprobación del gasto y la incorporación de la factura."
    },
    {
      "id": "w4-t6-b2",
      "q": "¿Cuál es la duración máxima general de los contratos de suministros y servicios de prestación sucesiva (art. 29.4 LCSP)?",
      "options": [
        "Cinco años incluyendo las posibles prórrogas",
        "Diez años",
        "Dos años improrrogables",
        "Veinticinco años"
      ],
      "answer": 0,
      "explain": "Art. 29.4 LCSP: Los contratos de suministros y de servicios de prestación sucesiva tendrán un plazo máximo de duración de cinco años, incluyendo las posibles prórrogas."
    },
    {
      "id": "w4-t6-b3",
      "q": "¿Cuál es la regla general sobre la división en lotes del objeto de los contratos públicos en la LCSP (art. 99.3)?",
      "options": [
        "La regla general es la división en lotes, debiendo justificarse en el expediente la decisión de no dividir",
        "Está terminantemente prohibido dividir en lotes",
        "Solo se permite en contratos de obras de más de 100 millones",
        "Solo si lo autoriza el Consejo de Ministros"
      ],
      "answer": 0,
      "explain": "Art. 99.3 LCSP: Siempre que la naturaleza o el objeto del contrato lo permitan, deberá preverse la realización independiente de cada una de sus partes mediante su división en lotes, para favorecer el acceso de las PYMES."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Tipología Contractual y Umbrales LCSP",
    "prompt": "Empareja cada tipo de contrato o figura con su rasgo cuantitativo o cualitativo.",
    "pairs": [
      [
        "Contrato menor de obras",
        "Valor estimado inferior a 40.000 € (art. 118 LCSP)"
      ],
      [
        "Contrato menor de servicios/suministros",
        "Valor estimado inferior a 15.000 € (art. 118 LCSP)"
      ],
      [
        "Concesión de servicios",
        "Transferencia real del riesgo operacional a la empresa concesionaria"
      ],
      [
        "División en lotes",
        "Regla general para facilitar la participación de pequeñas y medianas empresas"
      ]
    ]
  },
  "boss": {
    "name": "El Fraccionador en Serie",
    "kind": "ogre",
    "intro": [
      "¡He dividido una obra de 200.000 € en 6 contratos menores para adjudicarlos a dedo!"
    ],
    "defeat": [
      "¡Art. 99.2 LCSP y Tribunal de Cuentas! Nulidad de pleno derecho por fraude de ley y fraccionamiento ilegal del contrato."
    ]
  },
  "summary": [
    "Tipos de contratos: Obras, concesión de obras, concesión de servicios (riesgo operacional), suministros y servicios.",
    "Contratos menores (art. 118): Obras < 40.000 €; Servicios y suministros < 15.000 €. Exige informe de necesidad, no fraccionamiento y factura.",
    "Prohibición de fraccionamiento fraudulento (art. 99.2).",
    "División en lotes como principio general promotor de PYMES (art. 99.3).",
    "Duración servicios y suministros: máx. 5 años incluidas prórrogas (art. 29.4)."
  ]
};

export const W4_T7: MiniWorldDef = {
  "id": "derecho-t7",
  "num": 7,
  "temaTitle": "Tema 7: Procedimientos y formas de la actividad administrativa. La actividad de intervención, arbitral, de servicio público y de fomento. Formas de gestión de los servicios públicos. Ayudas y subvenciones públicas: régimen jurídico.",
  "name": "Foro de la Actividad y Fomento",
  "emoji": "🤝",
  "theme": "derecho",
  "color": "#d97706",
  "enemy": "moneda",
  "enemyName": "Subvenciones opacas",
  "npcs": [
    {
      "name": "Interventora Delegada de Subvenciones",
      "role": "Policía administrativa, fomento, servicios públicos y Ley 38/2003",
      "look": {
        "skin": "#f3c9a0",
        "hair": "#4b5563",
        "hairStyle": "short",
        "shirt": "#ca8a04",
        "pants": "#854d0e",
        "acc": [
          "badge",
          "glasses"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "Formas tradicionales de la actividad administrativa (Jordana de Pozas):",
        "1. Policía o intervención: limitación de derechos individuales por razones de interés público (autorizaciones, licencias, declaraciones responsables y comunicaciones previas, órdenes y sanciones).",
        "2. Fomento: estímulo de la actividad de los particulares hacia fines de interés general (subvenciones, premios, desgravaciones).",
        "3. Servicio público: asunción prestacional directa o indirecta por la Administración.",
        "Ley 38/2003 General de Subvenciones (LGS):",
        "• Principios: publicidad, transparencia, concurrencia, objetividad, igualdad y no discriminación, eficacia y eficiencia.",
        "• Procedimiento ordinario: concurrencia competitiva.",
        "• Concesión directa (art. 22.2 LGS): supuestos tasados (nominativas en PGE, impuestas por norma de rango legal, razones de interés público acreditadas por Real Decreto).",
        "• Base de Datos Nacional de Subvenciones (BDNS): sistema público de publicidad de todas las convocatorias y concesiones de ayudas públicas."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w4-t7-q1",
      "q": "¿Cuál es el procedimiento ordinario de concesión de subvenciones según el artículo 22.1 de la Ley 38/2003 (LGS)?",
      "options": [
        "El procedimiento de concurrencia competitiva",
        "La adjudicación directa discrecional por el Ministro",
        "El sorteo público ante notario",
        "La subasta inversa de precios"
      ],
      "answer": 0,
      "explain": "Art. 22.1 Ley 38/2003: El procedimiento ordinario de concesión de subvenciones se tramitará en régimen de concurrencia competitiva."
    },
    {
      "id": "w4-t7-q2",
      "q": "¿En qué instrumento público centralizado es obligatorio registrar y publicar todas las convocatorias y concesiones de subvenciones?",
      "options": [
        "En la Base de Datos Nacional de Subvenciones (BDNS)",
        "En el Registro de la Propiedad",
        "En el tablón de edictos del ayuntamiento exclusivamente",
        "En el Libro de Actas del Consejo de Ministros"
      ],
      "answer": 0,
      "explain": "Art. 20 Ley 38/2003: La Base de Datos Nacional de Subvenciones (BDNS) opera como sistema nacional de publicidad de subvenciones para garantizar la transparencia y la libre concurrencia."
    },
    {
      "id": "w4-t7-q3",
      "q": "¿Qué instrumento previo deben aprobar obligatoriamente los ministerios para otorgar subvenciones según el art. 8.1 LGS?",
      "options": [
        "Un Plan Estratégico de Subvenciones",
        "Un tratado de cooperación bilateral",
        "Una auditoría del Tribunal Constitucional",
        "Una autorización firmada por todos los beneficiarios"
      ],
      "answer": 0,
      "explain": "Art. 8.1 Ley 38/2003: Los órganos de las Administraciones públicas o cualesquiera entes que propongan el establecimiento de subvenciones deberán concretar previamente en un Plan Estratégico de Subvenciones los objetivos y plazos."
    }
  ],
  "bossQs": [
    {
      "id": "w4-t7-b1",
      "q": "¿En qué plazo prescribe el derecho de la Administración a reconocer o liquidar el reintegro de una subvención (art. 39 LGS)?",
      "options": [
        "A los cuatro años",
        "Al año",
        "A los cinco años",
        "A los diez años"
      ],
      "answer": 0,
      "explain": "Art. 39.1 Ley 38/2003: Prescribirá a los cuatro años el derecho de la Administración a reconocer o liquidar el reintegro."
    },
    {
      "id": "w4-t7-b2",
      "q": "¿Qué diferencia sustancial existe entre una 'autorización' y una 'declaración responsable' en la actividad de policía?",
      "options": [
        "La autorización exige control previo y acto administrativo formal; la declaración responsable habilita el ejercicio desde el día de su presentación",
        "La declaración responsable solo sirve para obras mayores",
        "La autorización nunca puede ser revocada",
        "No hay diferencia legal"
      ],
      "answer": 0,
      "explain": "Art. 69 Ley 39/2015: La declaración responsable permite el inicio de la actividad desde el día de su presentación sin esperar acto administrativo previo de autorización."
    },
    {
      "id": "w4-t7-b3",
      "q": "¿Cuál de las siguientes causas obliga al beneficiario al REINTEGRO TOTAL de la subvención pública percibida?",
      "options": [
        "Obtención de la subvención falseando las condiciones requeridas o incumplimiento total de los fines o actividad",
        "Cambio de domicilio social comunicado a tiempo",
        "Atraso de dos días en el envío de una copia informática",
        "Generar un beneficio empresarial imprevisto conforme a las bases"
      ],
      "answer": 0,
      "explain": "Art. 37.1 Ley 38/2003: La obtención de la subvención falseando u ocultando datos y el incumplimiento total de la actividad determinan el reintegro íntegro de las cantidades y el interés de demora."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Actividad Administrativa y Régimen de Subvenciones",
    "prompt": "Empareja cada concepto con su régimen legal según la Ley 38/2003 y la Ley 39/2015.",
    "pairs": [
      [
        "Concurrencia competitiva",
        "Procedimiento ordinario de concesión de subvenciones (art. 22 LGS)"
      ],
      [
        "Plan Estratégico de Subvenciones",
        "Requisito previo obligatorio que vincula objetivos y recursos (art. 8)"
      ],
      [
        "Declaración Responsable (art. 69)",
        "Permite iniciar la actividad desde el día de su presentación"
      ],
      [
        "Reintegro (prescripción)",
        "Prescribe a los 4 años computados desde el fin de justificación (art. 39)"
      ]
    ]
  },
  "boss": {
    "name": "El Clientelista de Fondos",
    "kind": "dragon",
    "intro": [
      "¡He otorgado 5 millones de euros a dedo sin plan estratégico ni convocatoria pública!"
    ],
    "defeat": [
      "¡Ley 38/2003 General de Subvenciones! Expediente de reintegro de oficio, intereses de demora y traslado al Tribunal de Cuentas."
    ]
  },
  "summary": [
    "Actividad administrativa: Policía/intervención (autorizaciones, declaraciones responsables art. 69), fomento y servicio público.",
    "Ley 38/2003 General de Subvenciones: principios de publicidad, transparencia, concurrencia y objetividad.",
    "Plan Estratégico de Subvenciones preceptivo (art. 8).",
    "Procedimiento ordinario: concurrencia competitiva (art. 22.1). Concesión directa restringida a supuestos legales tasados.",
    "Publicidad: Base de Datos Nacional de Subvenciones (BDNS).",
    "Reintegro: prescribe a los 4 años (art. 39)."
  ]
};

export const W4_T8: MiniWorldDef = {
  "id": "derecho-t8",
  "num": 8,
  "temaTitle": "Tema 8: La expropiación forzosa: concepto, naturaleza y elementos. Procedimientos de expropiación. Garantías jurisdiccionales.",
  "name": "Colina de la Expropiación Forzosa",
  "emoji": "🚜",
  "theme": "derecho",
  "color": "#b45309",
  "enemy": "sello",
  "enemyName": "Ocupaciones de hecho",
  "npcs": [
    {
      "name": "Presidente del Jurado de Expropiación",
      "role": "Ley de Expropiación Forzosa: fases, justiprecio y reversión",
      "look": {
        "skin": "#f3c9a0",
        "hair": "#2e2e2e",
        "hairStyle": "short",
        "shirt": "#854d0e",
        "pants": "#3f2c06",
        "acc": [
          "badge",
          "glasses"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "Art. 33.3 CE: 'Nadie podrá ser privado de sus bienes y derechos sino por causa justificada de utilidad pública o interés social, mediante la correspondiente indemnización y de conformidad con lo dispuesto por las leyes'.",
        "Ley de Expropiación Forzosa de 16 de diciembre de 1954 (LEF):",
        "Sujetos: expropiante (Administración territorial), expropiado (titular de cosas, derechos o intereses) y beneficiario (sujeto que representa el interés público o social).",
        "Procedimiento ordinario de expropiación (fases):",
        "1. Declaración de utilidad pública o interés social (por ley con carácter general o implícita en planes de obras).",
        "2. Declaración de necesidad de ocupación.",
        "3. Determinación del justiprecio (acuerdo mutuo en 15 días; hojas de aprecio de las partes; fijación por el Jurado Provincial de Expropiación).",
        "4. Pago y ocupación.",
        "Procedimiento de urgencia (art. 52 LEF): la ocupación de los bienes se produce ANTES de la fijación y abono del justiprecio, previo depósito previo y acta previa de ocupación.",
        "Derecho de reversión (arts. 54 y 55 LEF): recuperación del bien si no se ejecuta la obra, sobra parte o desaparece la afectación."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w4-t8-q1",
      "q": "¿Cuáles son las fases sucesivas del procedimiento ordinario de expropiación forzosa según la Ley de 1954?",
      "options": [
        "Declaración de utilidad pública o interés social, necesidad de ocupación, determinación del justiprecio, pago y ocupación",
        "Ocupación inmediata, tasación pericial privada y juicio civil ordinario",
        "Inmatriculación registral, derribo de inmueble y liquidación fiscal",
        "Oferta comercial libre, subasta pública e indemnización potestativa"
      ],
      "answer": 0,
      "explain": "La LEF de 1954 estructura el procedimiento ordinario en: 1) Declaración de utilidad pública/interés social, 2) Necesidad de ocupación, 3) Justiprecio, y 4) Pago y ocupación."
    },
    {
      "id": "w4-t8-q2",
      "q": "¿Cuál es la particularidad esencial del procedimiento de expropiación de urgencia regulado en el art. 52 LEF?",
      "options": [
        "La ocupación del bien expropiado tiene lugar ANTES de la determinación y pago definitivo del justiprecio",
        "No existe derecho a percibir indemnización alguna",
        "Prescinde del trámite de información pública",
        "No cabe el derecho de reversión bajo ninguna circunstancia"
      ],
      "answer": 0,
      "explain": "Art. 52 LEF: El procedimiento de urgencia permite ocupar de forma inmediata el bien previa acta de ocupación y depósito previo, posponiendo la fijación y pago del justiprecio a una fase posterior."
    },
    {
      "id": "w4-t8-q3",
      "q": "¿Qué órgano administrativo fija de forma vinculante el justiprecio cuando no hay acuerdo mutuo entre expropiante y expropiado?",
      "options": [
        "El Jurado Provincial de Expropiación Forzosa",
        "El Defensor del Pueblo",
        "El Notario mayor del distrito",
        "El Alcalde del municipio afectado"
      ],
      "answer": 0,
      "explain": "Arts. 31 y 32 LEF: Si transcurren los plazos sin acuerdo, el expediente se remite al Jurado Provincial de Expropiación, órgano colegiado que fija el justiprecio mediante resolución administrativa motivada."
    }
  ],
  "bossQs": [
    {
      "id": "w4-t8-b1",
      "q": "¿En qué consiste el 'premio de afección' que se suma a la valoración en la expropiación forzosa ordinaria (art. 47 LEF)?",
      "options": [
        "Un incremento legal del 5 por ciento sobre el valor fijado en concepto de apego sentimental",
        "Una indemnización por lucro cesante del 20 por ciento",
        "La entrega de otro inmueble de sustitución",
        "El abono del doble del IBI municipal"
      ],
      "answer": 0,
      "explain": "Art. 47 LEF: En todos los casos de expropiación forzosa se añadirá al justiprecio fijado un 5 por ciento como premio de afección."
    },
    {
      "id": "w4-t8-b2",
      "q": "¿En qué plazo nace el derecho a intereses de demora por retraso en la fijación del justiprecio según la LEF?",
      "options": [
        "Si transcurren seis meses desde la iniciación del expediente de justiprecio sin haberse determinado",
        "A los doce meses",
        "A los tres meses",
        "A los dos años"
      ],
      "answer": 0,
      "explain": "Art. 56 LEF: Si transcurren seis meses desde la iniciación del expediente expropiatorio sin que se haya fijado el justiprecio definitivo, la Administración deberá abonar el interés legal de demora."
    },
    {
      "id": "w4-t8-b3",
      "q": "¿Qué derecho asiste al expropiado si no se ejecuta la obra que motivó la expropiación o sobra parte del bien (art. 54 LEF)?",
      "options": [
        "El derecho de reversión para recuperar el bien indemnizando su valor actualizado",
        "El derecho a una pensión vitalicia estatal",
        "El derecho de retención judicial automática",
        "No tiene ningún derecho porque la expropiación es irreversible"
      ],
      "answer": 0,
      "explain": "Art. 54 LEF: En el caso de no ejecutarse la obra o no establecerse el servicio que motivó la expropiación, o si hubiera alguna parte sobrante, el primitivo dueño tendrá derecho a recobrar la totalidad o la parte sobrante (derecho de reversión)."
    }
  ],
  "mini": {
    "type": "order",
    "title": "Fases del Procedimiento Expropiatorio Ordinario",
    "prompt": "Ordena cronológicamente las fases legales de la expropiación forzosa ordinaria.",
    "items": [
      "Declaración de utilidad pública o interés social del fin",
      "Acuerdo de necesidad de ocupación y período de información pública",
      "Apertura de la pieza separada de fijación de justiprecio (hojas de aprecio)",
      "Resolución motivada del Jurado Provincial de Expropiación",
      "Abono de la indemnización fijada (justiprecio más 5% premio de afección)",
      "Ocupación material del bien y levantamiento del acta de ocupación"
    ]
  },
  "boss": {
    "name": "El Ocupante de Hecho",
    "kind": "ogre",
    "intro": [
      "¡He entrado con excavadoras en tu finca privada sin declarar utilidad pública ni pagar nada!"
    ],
    "defeat": [
      "¡Vía de hecho proscrita por el art. 125 LEF! Interdicto de retener y recobrar la posesión ante los tribunales civiles."
    ]
  },
  "summary": [
    "Art. 33.3 CE: causa de utilidad pública o interés social, indemnización (justiprecio) y procedimiento legal.",
    "LEF de 1954: Sujetos (expropiante, expropiado, beneficiario).",
    "Fases ordinarias: Utilidad pública -> Necesidad de ocupación -> Justiprecio (hojas de aprecio, Jurado Provincial) -> Pago y ocupación.",
    "Premio de afección: 5% añadido legalmente (art. 47 LEF). Demora a partir de los 6 meses (art. 56).",
    "Urgencia (art. 52 LEF): ocupación ANTES del justiprecio, previo depósito.",
    "Derecho de reversión (art. 54): inejecución de obra, partes sobrantes o desafectación."
  ]
};

export const W4_T9: MiniWorldDef = {
  "id": "derecho-t9",
  "num": 9,
  "temaTitle": "Tema 9: El régimen patrimonial de las Administraciones públicas. El dominio público. Los bienes patrimoniales del Estado. El Patrimonio Nacional. Los bienes comunales.",
  "name": "Cámara del Patrimonio Público",
  "emoji": "🏛️",
  "theme": "derecho",
  "color": "#78350f",
  "enemy": "sello",
  "enemyName": "Usurpaciones dominiales",
  "npcs": [
    {
      "name": "Conservador del Patrimonio del Estado",
      "role": "Bienes demaniales, patrimoniales, afectación y Ley 33/2003",
      "look": {
        "skin": "#fcd5b5",
        "hair": "#52525b",
        "hairStyle": "short",
        "shirt": "#78350f",
        "pants": "#27272a",
        "acc": [
          "glasses",
          "badge"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "Art. 132 CE: la ley regulará el régimen jurídico de los bienes de dominio público y de los comunales, inspirándose en los principios de inalienabilidad, imprescriptibilidad e inembargabilidad, así como su desafectación.",
        "Ley 33/2003 del Patrimonio de las Administraciones Públicas (LPAP):",
        "Clasificación de bienes públicos:",
        "1. Bienes de dominio público (demaniales): afectos al uso general (playas, caminos, plazas) o a un servicio público (edificios de ministerios, hospitales, colegios públicos). Características: inalienables, inembargables e imprescriptibles (las 3 'i').",
        "2. Bienes patrimoniales o de propios: pertenecen a la Administración pero no están afectos directamente al uso general ni al servicio público (ej. acciones, fincas rústicas, edificios en desuso). Régimen: derecho privado con potestades administrativas.",
        "Afectación: acto por el que un bien pasa a integrarse en el dominio público por quedar destinado a un uso o servicio público.",
        "Desafectación: desvinculación formal del destino público, transformando el bien demanial en patrimonial.",
        "Patrimonio Nacional (Ley 19/1982): bienes de titularidad estatal afectados al uso y servicio del Rey y de los miembros de la Real Familia para el ejercicio de la alta representación."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w4-t9-q1",
      "q": "¿Cuáles son las tres características constitucionales esenciales del dominio público (art. 132.1 CE)?",
      "options": [
        "Inalienabilidad, imprescriptibilidad e inembargabilidad",
        "Eficacia mercantil, transferibilidad y caducidad",
        "Hipotecabilidad, libre venta y transmisibilidad",
        "Gratuidad absoluta, discrecionalidad y fungibilidad"
      ],
      "answer": 0,
      "explain": "Art. 132.1 CE: La ley regulará el régimen jurídico de los bienes de dominio público y de los comunales, inspirándose en los principios de inalienabilidad, imprescriptibilidad e inembargabilidad, así como su desafectación."
    },
    {
      "id": "w4-t9-q2",
      "q": "¿Qué distingue a los bienes patrimoniales del Estado de los bienes de dominio público según la Ley 33/2003?",
      "options": [
        "Los patrimoniales no están destinados directamente al uso general ni afectos a un servicio público",
        "Los patrimoniales pueden ser ocupados gratuitamente por cualquiera",
        "Los bienes patrimoniales no tienen valor contable",
        "Los patrimoniales pertenecen a personas físicas privadas"
      ],
      "answer": 0,
      "explain": "Art. 7.1 Ley 33/2003: Son bienes y derechos de dominio privado o patrimoniales los que, siendo de titularidad de las Administraciones públicas, no tengan el carácter de demaniales por no estar afectos a un uso o servicio público."
    },
    {
      "id": "w4-t9-q3",
      "q": "¿Cómo se denomina la operación administrativa que desvincula un bien del uso o servicio público, pasando a ser patrimonial?",
      "options": [
        "Desafectación",
        "Mutación demanial",
        "Adscripción orgánica",
        "Enajenación forzosa"
      ],
      "answer": 0,
      "explain": "Art. 69 Ley 33/2003: La desafectación de los bienes y derechos demaniales del Estado precisa de acto expreso dictado por el Ministro de Hacienda, pasando los bienes a tener la condición de patrimoniales."
    }
  ],
  "bossQs": [
    {
      "id": "w4-t9-b1",
      "q": "¿Qué potestad permite a la Administración recuperar por sí misma la posesión indebidamente perdida de sus bienes demaniales?",
      "options": [
        "La potestad de recuperación de oficio (interdictum propium) en cualquier momento sin plazo",
        "Solo mediante demanda en el juzgado de primera instancia",
        "Exclusivamente por acuerdo plenario municipal",
        "A través de un arbitraje privado"
      ],
      "answer": 0,
      "explain": "Art. 55 Ley 33/2003: Las Administraciones públicas podrán recuperar por sí mismas la posesión indebidamente perdida sobre sus bienes demaniales en cualquier tiempo (imprescriptible). En bienes patrimoniales tienen el plazo de un año."
    },
    {
      "id": "w4-t9-b2",
      "q": "¿Qué figura jurídica supone el cambio de destino de un bien demanial a otro fin público sin salir del dominio público?",
      "options": [
        "Mutación demanial (art. 71 Ley 33/2003)",
        "Desahucio administrativo",
        "Expropiación de retorno",
        "Enajenación por subasta"
      ],
      "answer": 0,
      "explain": "Art. 71 Ley 33/2003: La mutación demanial es el acto en virtud del cual se efectúa la desafectación de un bien o derecho demanial con simultánea afectación a otro uso general o servicio público."
    },
    {
      "id": "w4-t9-b3",
      "q": "¿Cuál es el procedimiento ordinario para la enajenación onerosa de bienes patrimoniales del Estado según la Ley 33/2003?",
      "options": [
        "La subasta pública, salvo autorización legal para la adjudicación directa",
        "La venta secreta en lonja",
        "El concurso público sin precio mínimo",
        "El trueque directo con entidades mercantiles"
      ],
      "answer": 0,
      "explain": "Art. 137.1 Ley 33/2003: La enajenación de bienes inmuebles patrimoniales se realizará de forma ordinaria por subasta pública, salvo supuestos tasados de adjudicación directa."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Categorías y Potestades del Patrimonio Público",
    "prompt": "Empareja cada institución patrimonial con su regla jurídica definitoria.",
    "pairs": [
      [
        "Bienes demaniales",
        "Afectos a uso o servicio público (inalienables, inembargables, imprescriptibles)"
      ],
      [
        "Bienes patrimoniales",
        "Bienes de titularidad pública no afectos a un uso o servicio público"
      ],
      [
        "Mutación demanial",
        "Cambio de afectación de un fin público a otro sin perder carácter demanial"
      ],
      [
        "Recuperación de oficio demanial",
        "Potestad administrativa ejercitable en cualquier tiempo sin plazo de prescripción"
      ]
    ]
  },
  "boss": {
    "name": "El Usurpador de Ribera",
    "kind": "dragon",
    "intro": [
      "¡He vallado una playa pública y construido un complejo privado!"
    ],
    "defeat": [
      "¡Art. 132 CE y Ley 33/2003! El dominio público marítimo-terrestre es imprescriptible e inalienable. Demolición y recuperación inmediata."
    ]
  },
  "summary": [
    "Art. 132 CE: demanio público y bienes comunales. Principios: inalienabilidad, imprescriptibilidad e inembargabilidad (las 3 'i').",
    "Ley 33/2003 (LPAP): Bienes demaniales (uso general o servicio público) vs Bienes patrimoniales (titularidad pública sin afectación).",
    "Afectación (demanialización) y Desafectación (pasa a patrimonial por acto expreso).",
    "Mutación demanial: cambio de un fin demanial a otro fin público.",
    "Potestades exorbitantes: investigación, deslinde, recuperación de oficio (en cualquier momento en demaniales; 1 año en patrimoniales) y desahucio administrativo.",
    "Enajenación patrimonial ordinaria: subasta pública (art. 137)."
  ]
};

export const W4_T10: MiniWorldDef = {
  "id": "derecho-t10",
  "num": 10,
  "temaTitle": "Tema 10: La responsabilidad patrimonial de las Administraciones públicas. Procedimiento de responsabilidad patrimonial.",
  "name": "Tribunal de la Responsabilidad Patrimonial",
  "emoji": "⚖️",
  "theme": "derecho",
  "color": "#d97706",
  "enemy": "sello",
  "enemyName": "Daños antijurídicos",
  "npcs": [
    {
      "name": "Magistrada de Responsabilidad",
      "role": "Responsabilidad patrimonial de las AAPP (Ley 40/2015)",
      "look": {
        "skin": "#f3c9a0",
        "hair": "#2e2e2e",
        "hairStyle": "bun",
        "shirt": "#92400e",
        "pants": "#451a03",
        "acc": [
          "robe",
          "glasses"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "Art. 106.2 CE: 'Los particulares, en los términos establecidos por la ley, tendrán derecho a ser indemnizados por toda lesión que sufran en cualquiera de sus bienes y derechos, salvo en los casos de fuerza mayor, siempre que la lesión sea consecuencia del funcionamiento de los servicios públicos'.",
        "Régimen sustantivo: arts. 32 a 37 Ley 40/2015. Régimen procedimental: Ley 39/2015.",
        "Requisitos concurrentes:",
        "1. Daño efectivo, evaluable económicamente e individualizado respecto a una persona o grupo.",
        "2. Antijuridicidad del daño (el particular no tenga el deber jurídico de soportarlo de acuerdo con la ley).",
        "3. Relación de causalidad directa e inmediata entre el funcionamiento del servicio público (normal o anormal) y la lesión.",
        "4. Ausencia de fuerza mayor (la fuerza mayor exime de responsabilidad; el caso fortuito no exime a la Administración).",
        "Prescripción (art. 67 Ley 39/2015): el derecho a reclamar prescribe al año de producido el hecho o acto que motive la indemnización, o de manifestarse su efecto lesivo (en daños físicos/psíquicos, desde la curación o determinación de secuelas).",
        "Dictamen preceptivo del Consejo de Estado o consultivo autonómico en reclamaciones superiores a 50.000 euros."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w4-t10-q1",
      "q": "¿En qué plazo prescribe el derecho a reclamar indemnización por responsabilidad patrimonial a la Administración (art. 67.1 Ley 39/2015)?",
      "options": [
        "Al año de producido el hecho o de manifestarse su efecto lesivo (en daños personales, desde la curación o secuelas)",
        "A los cuatro años",
        "A los seis meses",
        "A los cinco años de prescripción ordinaria"
      ],
      "answer": 0,
      "explain": "Art. 67.1 Ley 39/2015: El derecho a reclamar prescribirá al año de producido el hecho o el acto que motive la indemnización o de manifestarse su efecto lesivo. En caso de daños personales, el plazo computará desde la curación o determinación del alcance de las secuelas."
    },
    {
      "id": "w4-t10-q2",
      "q": "¿Cuál es la causa legal que exime de responsabilidad patrimonial a la Administración según el art. 106.2 CE y art. 32.1 Ley 40/2015?",
      "options": [
        "La fuerza mayor",
        "El caso fortuito imprevisible",
        "La huelga de empleados públicos",
        "La falta de consignación presupuestaria"
      ],
      "answer": 0,
      "explain": "Art. 106.2 CE y art. 32.1 Ley 40/2015: Los particulares tienen derecho a indemnización salvo en los casos de fuerza mayor. El caso fortuito no exonera a la Administración."
    },
    {
      "id": "w4-t10-q3",
      "q": "¿Qué carácter tiene el sistema de responsabilidad patrimonial de la Administración pública en España?",
      "options": [
        "Objetivo y directo, indemnizando tanto por el funcionamiento anormal como normal del servicio público",
        "Subjetivo, exigiendo dolo o culpa personal demostrada del funcionario",
        "Mancomunado con los colegios profesionales",
        "Subsidiario tras agotar la vía penal"
      ],
      "answer": 0,
      "explain": "Art. 32 Ley 40/2015: Es un sistema de responsabilidad directa y objetiva, que no exige culpa individual del agente y cubre tanto el funcionamiento normal como el anormal de los servicios públicos."
    }
  ],
  "bossQs": [
    {
      "id": "w4-t10-b1",
      "q": "¿A partir de qué cuantía de reclamación patrimonial es preceptivo el dictamen del Consejo de Estado en el ámbito estatal?",
      "options": [
        "Reclamaciones de cuantía superior a 50.000 euros (o de cuantía indeterminada)",
        "Reclamaciones de más de 6.000 euros",
        "Reclamaciones superiores a 500.000 euros",
        "En todas las reclamaciones sin límite mínimo"
      ],
      "answer": 0,
      "explain": "Art. 22.13 LO 3/1980 del Consejo de Estado: El dictamen del Consejo de Estado es preceptivo en las reclamaciones de responsabilidad patrimonial por cuantía superior a 50.000 euros o indeterminada."
    },
    {
      "id": "w4-t10-b2",
      "q": "¿En qué plazo máximo debe resolverse y notificarse el procedimiento de responsabilidad patrimonial según la Ley 39/2015?",
      "options": [
        "En el plazo de seis meses (silencio desestimatorio)",
        "En tres meses",
        "En un año",
        "En cuarenta y cinco días hábiles"
      ],
      "answer": 0,
      "explain": "Art. 91.3 Ley 39/2015: Transcurridos seis meses desde que se inició el procedimiento sin que haya recaído y se notifique resolución expresa, el interesado podrá entender desestimada su solicitud por silencio administrativo."
    },
    {
      "id": "w4-t10-b3",
      "q": "Si el daño se debe a dolo, culpa o negligencia grave del empleado público, ¿cómo actúa la Administración (art. 36 Ley 40/2015)?",
      "options": [
        "La Administración indemniza directamente a la víctima y después ejercerá la acción de regreso contra el empleado culpable",
        "La víctima debe demandar exclusivamente al empleado por lo civil",
        "El empleado ingresa en prisión preventiva sin indemnizar el Estado",
        "La víctima pierde el derecho a cobrar indemnización"
      ],
      "answer": 0,
      "explain": "Art. 36.2 Ley 40/2015: La Administración indemnizará directamente a los lesionados y exigirá de oficio en vía administrativa a sus autoridades y demás personal la responsabilidad en que hubieren incurrido por dolo, o culpa o negligencia graves (acción de regreso)."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Pilares de la Responsabilidad Patrimonial",
    "prompt": "Empareja cada concepto con su exigencia legal según la Ley 40/2015.",
    "pairs": [
      [
        "Daño antijurídico",
        "Lesión que el particular no tiene el deber jurídico de soportar según la ley"
      ],
      [
        "Plazo de prescripción",
        "1 año desde el hecho o curación/determinación de secuelas (art. 67)"
      ],
      [
        "Fuerza Mayor",
        "Única causa legal de exoneración de la Administración (art. 106.2 CE)"
      ],
      [
        "Acción de regreso (art. 36)",
        "La Administración repite de oficio contra el funcionario si hubo dolo o culpa grave"
      ]
    ]
  },
  "boss": {
    "name": "El Servidor Negligente",
    "kind": "ghost",
    "intro": [
      "¡He causado daños graves a un administrado y alego que no hay presupuesto para pagar!"
    ],
    "defeat": [
      "¡Art. 106.2 CE y Ley 40/2015! Responsabilidad directa y objetiva del Estado. Indemnización fijada y acción de regreso ejecutada."
    ]
  },
  "summary": [
    "Art. 106.2 CE y arts. 32-37 Ley 40/2015: sistema objetivo y directo por funcionamiento normal o anormal.",
    "Requisitos: daño efectivo, evaluable e individualizado; antijuridicidad; nexo causal.",
    "Eximente exclusiva: fuerza mayor (el caso fortuito no exonera).",
    "Prescripción: 1 año desde el hecho o consolidación de secuelas (art. 67 Ley 39/2015).",
    "Procedimiento: plazo de 6 meses (silencio negativo). Dictamen preceptivo Consejo de Estado en > 50.000 €.",
    "Acción de regreso (art. 36 Ley 40/2015): de oficio contra personal culpable por dolo o culpa grave."
  ]
};

export const W4_T11: MiniWorldDef = {
  "id": "derecho-t11",
  "num": 11,
  "temaTitle": "Tema 11: Las Leyes del Procedimiento Administrativo Común de las Administraciones Públicas y del Régimen Jurídico del Sector Público. Procedimiento administrativo común y su alcance: iniciación, ordenación, instrucción y terminación. La obligación de resolver. El silencio administrativo.",
  "name": "Laberinto del Procedimiento Común",
  "emoji": "⚖️",
  "theme": "derecho",
  "color": "#ea580c",
  "enemy": "sello",
  "enemyName": "Silencios administrativos",
  "npcs": [
    {
      "name": "Jefe de Servicio de Procedimiento",
      "role": "Ley 39/2015: iniciación, instrucción, plazos, terminación y silencio",
      "look": {
        "skin": "#f3c9a0",
        "hair": "#2e2e2e",
        "hairStyle": "short",
        "shirt": "#c2410c",
        "pants": "#7c2d12",
        "acc": [
          "tie",
          "glasses"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "La Ley 39/2015 del Procedimiento Administrativo Común de las Administraciones Públicas (LPAC) es el eje vertebrador de las relaciones entre ciudadanos y Administración.",
        "Fases del procedimiento común:",
        "1. Iniciación (arts. 54 a 69): de oficio (acuerdo de órgano competente por iniciativa propia, orden superior, petición razonada o denuncia) o a solicitud del interesado (art. 66). Subsanación y mejora: 10 días (art. 68).",
        "2. Ordenación (arts. 70 a 74): impulso de oficio, celeridad y no suspensión por cuestiones incidentales.",
        "3. Instrucción (arts. 75 a 83): alegaciones, prueba (plazo de 10 a 30 días), informes (facultativos y no vinculantes como regla general, plazo 10 días art. 80), información pública y audiencia al interesado (de 10 a 15 días tras instruir y antes de la propuesta de resolución, art. 82).",
        "4. Terminación (arts. 84 a 95): resolución expresa, desistimiento, renuncia, caducidad o terminación convencional.",
        "Obligación de resolver (art. 21): plazo máximo fijado por norma (máx. 6 meses salvo ley). Plazo supletorio general: 3 meses.",
        "Silencio administrativo (art. 24): estimatorio como regla general en solicitudes de interesados; excepciones de silencio negativo (derecho de petición art. 29 CE, transferencia de dominio o servicio público, actividades perjudiciales para medio ambiente, procedimientos de responsabilidad patrimonial y recursos administrativos)."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w4-t11-q1",
      "q": "¿Cuál es el plazo supletorio general para dictar y notificar resolución expresa si la norma reguladora no fija ninguno (art. 21.3 Ley 39/2015)?",
      "options": [
        "Tres meses",
        "Seis meses",
        "Un mes",
        "Cuarenta y cinco días"
      ],
      "answer": 0,
      "explain": "Art. 21.3 Ley 39/2015: Cuando las normas reguladoras de los procedimientos no fijen el plazo máximo, éste será de tres meses."
    },
    {
      "id": "w4-t11-q2",
      "q": "¿En cuál de los siguientes supuestos el silencio administrativo tiene carácter DESESTIMATORIO (art. 24.1 Ley 39/2015)?",
      "options": [
        "Procedimientos de responsabilidad patrimonial, facultades sobre dominio o servicio público y recursos administrativos",
        "Solicitud de beca de estudio universitaria ordinaria",
        "Inscripción en un registro de asociaciones",
        "Solicitud de una licencia de vado en suelo urbano"
      ],
      "answer": 0,
      "explain": "Art. 24.1 Ley 39/2015: El silencio tendrá efecto desestimatorio en los procedimientos relativos al derecho de petición (art. 29 CE), aquellos cuya estimación transfiera al solicitante facultades relativas al dominio público o al servicio público, los de responsabilidad patrimonial y los de impugnación de actos y disposiciones (recursos)."
    },
    {
      "id": "w4-t11-q3",
      "q": "¿Cuál es el plazo del trámite de audiencia a los interesados previo a la redacción de la propuesta de resolución (art. 82.2 Ley 39/2015)?",
      "options": [
        "Un plazo no inferior a diez días ni superior a quince días",
        "Un plazo fijo de tres días hábiles",
        "Un mes improrrogable",
        "Cinco días naturales"
      ],
      "answer": 0,
      "explain": "Art. 82.2 Ley 39/2015: Los interesados, en un plazo no inferior a diez días ni superior a quince, podrán alegar y presentar los documentos y justificaciones que estimen pertinentes."
    }
  ],
  "bossQs": [
    {
      "id": "w4-t11-b1",
      "q": "¿Cómo se computan los plazos señalados por días hábiles según el artículo 30.2 de la Ley 39/2015?",
      "options": [
        "Se entienden que son días hábiles, excluyéndose del cómputo los sábados, los domingos y los declarados festivos",
        "Se excluyen solo los domingos",
        "Incluyen todos los días del año naturales",
        "Se cuentan de fecha a fecha"
      ],
      "answer": 0,
      "explain": "Art. 30.2 Ley 39/2015: Siempre que por Ley o en el Derecho de la Unión Europea no se exprese otro cómputo, cuando los plazos se señalen por días, se entiende que éstos son hábiles, excluyéndose del cómputo los sábados, los domingos y los declarados festivos."
    },
    {
      "id": "w4-t11-b2",
      "q": "¿En qué plazo caducan los procedimientos iniciados a solicitud del interesado paralizados por su culpa (art. 95 Ley 39/2015)?",
      "options": [
        "Transcurridos tres meses tras advertir la Administración de la caducidad",
        "A los quince días",
        "Al año continuado",
        "En un mes natural"
      ],
      "answer": 0,
      "explain": "Art. 95.1 Ley 39/2015: En los procedimientos iniciados a solicitud del interesado, cuando se produzca su paralización por causa imputable al mismo, la Administración le advertirá que, transcurridos tres meses, se producirá la caducidad del procedimiento."
    },
    {
      "id": "w4-t11-b3",
      "q": "¿Qué regla especial de silencio positivo rige en el recurso de alzada interpuesto contra la desestimación por silencio de una solicitud (art. 24.1 in fine)?",
      "options": [
        "Se produce la estimación por silencio administrativo positivo si el órgano superior no resuelve el recurso en plazo ('doble silencio')",
        "Produce un segundo silencio negativo irrevocable",
        "Caduca el recurso con sanción al recurrente",
        "Pasa de oficio a los juzgados de lo penal"
      ],
      "answer": 0,
      "explain": "Art. 24.1 in fine Ley 39/2015: Cuando el recurso de alzada se haya interpuesto contra la desestimación por silencio administrativo de una solicitud por el transcurso del plazo, se entenderá estimado el recurso si, llegado el plazo de resolución, el órgano competente no la hubiese dictado (excepción de doble silencio positivo)."
    }
  ],
  "mini": {
    "type": "order",
    "title": "Fases del Procedimiento Administrativo Común",
    "prompt": "Ordena cronológicamente las fases ordinarias del procedimiento administrativo (Ley 39/2015).",
    "items": [
      "Iniciación: solicitud de interesado o acuerdo de oficio",
      "Subsanación y mejora de solicitud si fuera incompleta (10 días)",
      "Instrucción: alegaciones, período de prueba e informes",
      "Trámite preceptivo de audiencia a los interesados (10 a 15 días)",
      "Propuesta de resolución formulada por el órgano instructor",
      "Terminación mediante resolución expresa motivada y notificación legal"
    ]
  },
  "boss": {
    "name": "El Silencioso Opaco",
    "kind": "ghost",
    "intro": [
      "¡No resolveré tu solicitud ni notificaré nada, esperando que te canses y abandones!"
    ],
    "defeat": [
      "¡Art. 21 y 24 Ley 39/2015! Certificado de acto presunto y estimación por silencio administrativo positivo."
    ]
  },
  "summary": [
    "Ley 39/2015 (LPAC): Fases: Iniciación (oficio / solicitud), Ordenación, Instrucción (prueba 10-30 días, informes 10 días, audiencia 10-15 días) y Terminación.",
    "Obligación de resolver (art. 21): plazo supletorio de 3 meses. Máximo legal 6 meses.",
    "Cómputo de plazos (art. 30): días hábiles excluyen sábados, domingos y festivos.",
    "Silencio positivo como regla general en solicitudes (art. 24.1).",
    "Silencio negativo tasado: derecho de petición, facultades sobre demanio/servicio público, responsabilidad patrimonial, medio ambiente y recursos.",
    "Doble silencio: recurso de alzada contra silencio negativo produce silencio positivo."
  ]
};

export const W4_T12: MiniWorldDef = {
  "id": "derecho-t12",
  "num": 12,
  "temaTitle": "Tema 12: Los derechos de los ciudadanos en el procedimiento administrativo. Las garantías en el desarrollo del procedimiento. La revisión de los actos en vía administrativa: revisión de oficio y recursos administrativos.",
  "name": "Santuario de los Recursos Administrativos",
  "emoji": "🛡️",
  "theme": "derecho",
  "color": "#c2410c",
  "enemy": "sello",
  "enemyName": "Recursos extemporáneos",
  "npcs": [
    {
      "name": "Vocal de la Comisión de Recursos",
      "role": "Revisión de oficio, recurso de alzada, reposición y extraordinario de revisión",
      "look": {
        "skin": "#fcd5b5",
        "hair": "#4b5563",
        "hairStyle": "short",
        "shirt": "#9a3412",
        "pants": "#431407",
        "acc": [
          "tie",
          "glasses"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "Revisión de actos en vía administrativa (Título V Ley 39/2015):",
        "1. Revisión de oficio de actos nulos (art. 106): en cualquier momento, de oficio o a solicitud del interesado, previo dictamen favorable del Consejo de Estado o consultivo autonómico.",
        "2. Declaración de lesividad de actos anulables (art. 107): actos favorables anulables para el interés público; plazo de 4 años; exige declaración previa para posterior impugnación judicial contencioso-administrativa.",
        "3. Revocación de actos de gravamen (art. 109.1) y rectificación de errores materiales o de hecho (art. 109.2, en cualquier momento).",
        "Recursos administrativos ordinarios:",
        "• Recurso de alzada (arts. 121 y 122): contra actos que NO ponen fin a la vía administrativa, ante el superior jerárquico. Plazo de interposición: 1 mes si es expreso; en cualquier momento si es presunto. Plazo para resolver: 3 meses (silencio negativo, salvo el doble silencio). Agota la vía administrativa.",
        "• Recurso potestativo de reposición (arts. 123 y 124): contra actos que SÍ ponen fin a la vía administrativa, ante el mismo órgano que los dictó. Plazo: 1 mes si es expreso. Plazo para resolver: 1 mes (silencio negativo). Potestativo previo a lo contencioso.",
        "• Recurso extraordinario de revisión (art. 125): contra actos firmes en vía administrativa, por motivos tasados (error de hecho documental, documentos recobrados, documentos falsos declarados por sentencia firme, prevaricación/cohecho). Plazos: 4 años en error de hecho; 3 meses en los demás."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w4-t12-q1",
      "q": "¿Ante qué órgano y en qué plazo se interpone el recurso potestativo de reposición según los arts. 123 y 124 Ley 39/2015?",
      "options": [
        "Ante el mismo órgano que dictó el acto, en el plazo de un mes si el acto fuera expreso",
        "Ante el superior jerárquico en dos meses",
        "Ante el Defensor del Pueblo en diez días",
        "Ante el Tribunal Supremo en quince días"
      ],
      "answer": 0,
      "explain": "Arts. 123 y 124 Ley 39/2015: El recurso potestativo de reposición se interpone ante el mismo órgano que hubiera dictado el acto que pone fin a la vía administrativa, en el plazo de un mes si el acto es expreso."
    },
    {
      "id": "w4-t12-q2",
      "q": "¿En qué plazo debe resolver y notificar la Administración el recurso de alzada según el art. 122.2 Ley 39/2015?",
      "options": [
        "En el plazo máximo de tres meses (transcurrido el cual se entenderá desestimado)",
        "En el plazo de un mes",
        "En el plazo de seis meses",
        "En el plazo de veinte días hábiles"
      ],
      "answer": 0,
      "explain": "Art. 122.2 Ley 39/2015: El plazo máximo para dictar y notificar la resolución será de tres meses. Transcurrido este plazo sin que recaiga resolución, se entenderá desestimado el recurso."
    },
    {
      "id": "w4-t12-q3",
      "q": "¿Qué requisito formal es indispensable para que la Administración declare de oficio la nulidad de un acto propio (art. 106.1)?",
      "options": [
        "Previo dictamen favorable preceptivo del Consejo de Estado u órgano consultivo autonómico equivalente",
        "Autorización previa del Juzgado Central",
        "Aprobación del Pleno del Congreso",
        "Sentencia penal condenatoria previa"
      ],
      "answer": 0,
      "explain": "Art. 106.1 Ley 39/2015: Las Administraciones Públicas, en cualquier momento, previo dictamen favorable del Consejo de Estado u órgano consultivo equivalente de la Comunidad Autónoma si lo hubiere, declararán de oficio la nulidad de los actos nulos de pleno derecho."
    }
  ],
  "bossQs": [
    {
      "id": "w4-t12-b1",
      "q": "¿Cuál es el plazo máximo para declarar la lesividad para el interés público de un acto favorable anulable (art. 107.2 Ley 39/2015)?",
      "options": [
        "Cuatro años desde que fue dictado el acto administrativo",
        "Un año",
        "Cinco años",
        "En cualquier momento sin límite temporal"
      ],
      "answer": 0,
      "explain": "Art. 107.2 Ley 39/2015: La declaración de lesividad no podrá adoptarse una vez transcurridos cuatro años desde que se dictó el acto administrativo."
    },
    {
      "id": "w4-t12-b2",
      "q": "¿Cuál es el plazo de resolución del recurso potestativo de reposición según el art. 124.2 Ley 39/2015?",
      "options": [
        "Un mes",
        "Tres meses",
        "Quince días",
        "Seis meses"
      ],
      "answer": 0,
      "explain": "Art. 124.2 Ley 39/2015: El plazo máximo para dictar y notificar la resolución del recurso de reposición será de un mes. Transcurrido dicho plazo, se entiende desestimado por silencio."
    },
    {
      "id": "w4-t12-b3",
      "q": "¿Por qué motivo tasado puede interponerse el recurso extraordinario de revisión en el plazo de cuatro años (art. 125.1.a)?",
      "options": [
        "Que al dictar el acto se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente",
        "Por cambio sobrevenido de gobierno",
        "Por desacuerdo con la interpretación jurisprudencial",
        "Por no haber aportado pruebas a tiempo voluntariamente"
      ],
      "answer": 0,
      "explain": "Art. 125.1.a y 125.2 Ley 39/2015: El recurso extraordinario de revisión cabe en el plazo de cuatro años siguientes a la notificación cuando al dictarlo se hubiera incurrido en error de hecho que resulte de los propios documentos del expediente."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Recursos Administrativos y Plazos Clave",
    "prompt": "Empareja cada recurso con su plazo de resolución y órgano competente.",
    "pairs": [
      [
        "Recurso de alzada",
        "Ante superior jerárquico; plazo resolución 3 meses (pone fin a vía adm.)"
      ],
      [
        "Recurso de reposición",
        "Ante el mismo órgano; potestativo; plazo resolución 1 mes"
      ],
      [
        "Revisión de oficio (art. 106)",
        "Actos nulos; en cualquier momento con dictamen FAVORABLE del Consejo de Estado"
      ],
      [
        "Declaración de lesividad",
        "Actos anulables favorables; plazo máx. 4 años previo a juicio contencioso"
      ]
    ]
  },
  "boss": {
    "name": "El Inimpugnable Arbitrario",
    "kind": "ghost",
    "intro": [
      "¡He dictado un acto con error de hecho flagrante y afirmo que es inatacable!"
    ],
    "defeat": [
      "¡Art. 109.2 y art. 125 Ley 39/2015! Rectificación inmediata del error de hecho material en cualquier momento."
    ]
  },
  "summary": [
    "Revisión de oficio (art. 106): actos nulos; en cualquier momento; requiere dictamen FAVORABLE del Consejo de Estado.",
    "Declaración de lesividad (art. 107): actos anulables favorables; plazo de 4 años; paso previo a demandar en lo contencioso.",
    "Rectificación de errores materiales (art. 109.2): en cualquier momento.",
    "Recurso de alzada (art. 121-122): actos que NO ponen fin a vía adm; ante superior; interposición 1 mes (expreso); resuelve en 3 meses.",
    "Recurso de reposición (art. 123-124): actos que SÍ ponen fin a vía adm; ante mismo órgano; interposición 1 mes; resuelve en 1 mes.",
    "Recurso extraordinario de revisión (art. 125): actos firmes; motivos tasados; 4 años (error de hecho) o 3 meses (falsedad/sentencia)."
  ]
};

export const W4_T13: MiniWorldDef = {
  "id": "derecho-t13",
  "num": 13,
  "temaTitle": "Tema 13: La jurisdicción contencioso-administrativa: funciones, órganos y competencias. El recurso contencioso-administrativo. Actividad administrativa impugnable. Las partes: capacidad, legitimación, representación y defensa.",
  "name": "Estrado Contencioso-Administrativo",
  "emoji": "🏛️",
  "theme": "derecho",
  "color": "#b45309",
  "enemy": "sello",
  "enemyName": "Vías de hecho",
  "npcs": [
    {
      "name": "Magistrada de Sala de lo Contencioso",
      "role": "LJCA 29/1998: orden jurisdiccional, legitimación, plazos y sentencias",
      "look": {
        "skin": "#f3c9a0",
        "hair": "#2e2e2e",
        "hairStyle": "long",
        "shirt": "#451a03",
        "pants": "#1c1917",
        "acc": [
          "robe",
          "badge"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "Art. 106.1 CE: los Tribunales controlan la potestad reglamentaria y la legalidad de la actuación administrativa, así como el sometimiento de ésta a los fines que la justifican.",
        "Ley 29/1998 reguladora de la Jurisdicción Contencioso-Administrativa (LJCA).",
        "Órganos de la jurisdicción: Juzgados de lo Contencioso-Administrativo, Juzgados Centrales, Salas de lo Contencioso-Administrativo de los Tribunales Superiores de Justicia (TSJ), Sala de lo Contencioso-Administrativo de la Audiencia Nacional y Sala Tercera (de lo Contencioso-Administrativo) del Tribunal Supremo.",
        "Actividad administrativa impugnable (art. 25 a 30 LJCA): disposiciones de carácter general, actos expresos o presuntos que pongan fin a la vía administrativa, inactividad de la Administración y vías de hecho.",
        "Partes: legitimación activa (titulares de derecho o interés legítimo). Representación y defensa (art. 23 LJCA): ante órganos colegiados (TSJ, AN, TS) es preceptivo Abogado y Procurador; ante órganos unipersonales (Juzgados) basta la representación por Abogado.",
        "Plazos de interposición (art. 46 LJCA): 2 meses con carácter general contra actos expresos o disposiciones generales; y 6 meses si es presunto (declarado inconstitucional el cómputo automático por STC 52/2014, pudiendo recurrirse mientras no haya resolución expresa)."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w4-t13-q1",
      "q": "¿Cuál es el plazo ordinario de interposición del recurso contencioso-administrativo contra un acto expreso (art. 46.1 LJCA)?",
      "options": [
        "Dos meses contados desde el día siguiente a la publicación o notificación del acto",
        "Un mes natural",
        "Tres meses",
        "Quince días hábiles"
      ],
      "answer": 0,
      "explain": "Art. 46.1 LJCA: El plazo para interponer el recurso contencioso-administrativo será de dos meses contados desde el día siguiente al de la publicación de la disposición impugnada o al de la notificación o publicación del acto que ponga fin a la vía administrativa."
    },
    {
      "id": "w4-t13-q2",
      "q": "¿Ante qué órganos judiciales de lo contencioso-administrativo es obligatoria la intervención de Procurador además de Abogado (art. 23 LJCA)?",
      "options": [
        "Ante los órganos colegiados (Salas de los TSJ, Audiencia Nacional y Tribunal Supremo)",
        "Ante todos los juzgados unipersonales sin excepción",
        "En ningún tribunal se necesita procurador",
        "Solo ante el Tribunal Constitucional"
      ],
      "answer": 0,
      "explain": "Art. 23 LJCA: Ante órganos colegiados las partes deberán conferir su representación a un Procurador y ser asistidas por Abogado. Ante órganos unipersonales (Juzgados) las partes pueden ser representadas directamente por el Abogado."
    },
    {
      "id": "w4-t13-q3",
      "q": "¿Cuál es la Sala del Tribunal Supremo competente para conocer del orden contencioso-administrativo?",
      "options": [
        "La Sala Tercera (de lo Contencioso-Administrativo)",
        "La Sala Primera (de lo Civil)",
        "La Sala Segunda (de lo Penal)",
        "La Sala Cuarta (de lo Social)"
      ],
      "answer": 0,
      "explain": "La Sala Tercera del Tribunal Supremo es la Sala de lo Contencioso-Administrativo, cúspide del control judicial de los actos del Gobierno y de la Administración."
    }
  ],
  "bossQs": [
    {
      "id": "w4-t13-b1",
      "q": "¿Qué actividad administrativa es susceptible de impugnación directa ante la jurisdicción contencioso-administrativa (art. 25 LJCA)?",
      "options": [
        "Disposiciones generales, actos definitivos y de trámite cualificados que pongan fin a la vía administrativa, inactividad y vía de hecho",
        "Cualquier acto de trámite no cualificado",
        "Las opiniones políticas de los directores generales",
        "Los acuerdos internos de sindicatos privados"
      ],
      "answer": 0,
      "explain": "Art. 25 LJCA: Es admisible el recurso en relación con las disposiciones de carácter general, actos expresos y presuntos que pongan fin a la vía administrativa (definitivos o de trámite cualificados), inactividad y vía de hecho."
    },
    {
      "id": "w4-t13-b2",
      "q": "¿Qué trámite previo exige el recurso contencioso-administrativo contra la 'inactividad de la Administración' (art. 29 LJCA)?",
      "options": [
        "Requerimiento previo a la Administración reclamando el cumplimiento; transcurridos tres meses cabe el recurso judicial",
        "Demanda civil de desahucio",
        "Recurso de reposición obligatorio en diez días",
        "Acta notarial de protesta internacional"
      ],
      "answer": 0,
      "explain": "Art. 29.1 LJCA: Cuando la Administración esté obligada a realizar una prestación concreta, los afectados pueden reclamar el cumplimiento. Si en tres meses no se realiza, pueden deducir recurso contencioso-administrativo en el plazo de dos meses."
    },
    {
      "id": "w4-t13-b3",
      "q": "¿Qué exige el recurso de casación contencioso-administrativo ante el Tribunal Supremo desde la reforma de 2015 (art. 88 LJCA)?",
      "options": [
        "Acreditar la concurrencia de 'interés casacional objetivo para la formación de jurisprudencia'",
        "Una cuantía económica superior a un millón de euros exclusivamente",
        "Haber sido autorizado por el Ministro de Justicia",
        "La unanimidad del tribunal sentenciador previo"
      ],
      "answer": 0,
      "explain": "Art. 88 LJCA: El recurso de casación ante el Tribunal Supremo exige justificar que el asunto reviste 'interés casacional objetivo para la formación de jurisprudencia'."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Reglas de la Jurisdicción Contencioso-Administrativa",
    "prompt": "Empareja cada figura procesal con su regla legal según la Ley 29/1998.",
    "pairs": [
      [
        "Plazo de interposición general",
        "2 meses desde la notificación o publicación del acto expreso (art. 46)"
      ],
      [
        "Representación ante órganos colegiados",
        "Preceptivo Procurador y Abogado (art. 23 LJCA)"
      ],
      [
        "Sala Tercera del Tribunal Supremo",
        "Órgano supremo del orden contencioso-administrativo"
      ],
      [
        "Recurso de casación (art. 88)",
        "Exige demostrar interés casacional objetivo para crear jurisprudencia"
      ]
    ]
  },
  "boss": {
    "name": "El Intocable Gubernativo",
    "kind": "king",
    "intro": [
      "¡El Gobierno ha actuado por vía de hecho y ningún tribunal tiene potestad de juzgarme!"
    ],
    "defeat": [
      "¡Art. 106.1 CE y LJCA! Pleno control judicial de la legalidad administrativa y tutela judicial efectiva garantizada."
    ]
  },
  "summary": [
    "Art. 106.1 CE y Ley 29/1998 (LJCA): control de la legalidad de la potestad reglamentaria y de los actos administrativos.",
    "Órganos: Juzgados de lo Contencioso, Juzgados Centrales, Salas de los TSJ, Sala de la AN y Sala Tercera del Tribunal Supremo.",
    "Objeto impugnable (art. 25): disposiciones generales, actos definitivos/trámite cualificados que finiquitan vía adm, inactividad (art. 29) y vías de hecho (art. 30).",
    "Postulación (art. 23): ante órganos unipersonales basta Abogado; ante órganos colegiados es preceptivo Procurador y Abogado.",
    "Plazo de recurso (art. 46): 2 meses contra actos expresos y disposiciones.",
    "Casación (art. 88 LJCA): interés casacional objetivo para la formación de jurisprudencia."
  ]
};

export const W4: WorldDef = {
  id: "derecho",
  num: 4,
  bloque: "Bloque IV",
  title: "IV. Derecho Administrativo General",
  name: "Fortaleza Jurídica",
  emoji: "⚖️",
  theme: "derecho",
  color: "#b45309",
  enemy: "sello",
  enemyName: "Sellos paralizantes",
  temas: [
    "Tema 1: Las fuentes del derecho administrativo: concepto y clases. La jerarquía de las fuentes.",
    "Tema 2: La ley. Tipos de leyes. Reserva de ley. Disposiciones del Gobierno con fuerza de ley: decreto-ley y decreto legislativo.",
    "Tema 3: El reglamento: concepto, clases y límites. Los principios generales del Derecho. Los tratados internacionales.",
    "Tema 4: El acto administrativo: concepto, clases y elementos. Eficacia y validez de los actos administrativos. Su motivación y notificación.",
    "Tema 5: Los contratos del sector público (I): concepto, clases y elementos. Preparación, adjudicación, efectos, cumplimiento y extinción. La revisión de precios y otras alteraciones contractuales. Régimen de invalidez y recursos.",
    "Tema 6: Los contratos regulados por la Ley de Contratos del Sector Público (II). Tipos. Características generales.",
    "Tema 7: Procedimientos y formas de la actividad administrativa. La actividad de intervención, arbitral, de servicio público y de fomento. Formas de gestión de los servicios públicos. Ayudas y subvenciones públicas: régimen jurídico.",
    "Tema 8: La expropiación forzosa: concepto, naturaleza y elementos. Procedimientos de expropiación. Garantías jurisdiccionales.",
    "Tema 9: El régimen patrimonial de las Administraciones públicas. El dominio público. Los bienes patrimoniales del Estado. El Patrimonio Nacional. Los bienes comunales.",
    "Tema 10: La responsabilidad patrimonial de las Administraciones públicas. Procedimiento de responsabilidad patrimonial.",
    "Tema 11: Las Leyes del Procedimiento Administrativo Común de las Administraciones Públicas y del Régimen Jurídico del Sector Público. Procedimiento administrativo común y su alcance: iniciación, ordenación, instrucción y terminación. La obligación de resolver. El silencio administrativo.",
    "Tema 12: Los derechos de los ciudadanos en el procedimiento administrativo. Las garantías en el desarrollo del procedimiento. La revisión de los actos en vía administrativa: revisión de oficio y recursos administrativos.",
    "Tema 13: La jurisdicción contencioso-administrativa: funciones, órganos y competencias. El recurso contencioso-administrativo. Actividad administrativa impugnable. Las partes: capacidad, legitimación, representación y defensa."
],
  miniWorlds: [W4_T1, W4_T2, W4_T3, W4_T4, W4_T5, W4_T6, W4_T7, W4_T8, W4_T9, W4_T10, W4_T11, W4_T12, W4_T13],
  npcs: [
    W4_T1.npcs[0],
    W4_T2.npcs[0],
    W4_T3.npcs[0],
    W4_T4.npcs[0]
  ],
  blockQs: [
    W4_T1.blockQs[0],
    W4_T2.blockQs[0],
    W4_T3.blockQs[0],
    W4_T4.blockQs[0],
    W4_T5.blockQs[0],
    W4_T6.blockQs[0],
    W4_T7.blockQs[0],
    W4_T8.blockQs[0],
    W4_T9.blockQs[0],
    W4_T10.blockQs[0],
    W4_T11.blockQs[0],
    W4_T12.blockQs[0],
    W4_T13.blockQs[0]
  ],
  bossQs: [
    W4_T1.bossQs[0],
    W4_T2.bossQs[0],
    W4_T3.bossQs[0],
    W4_T4.bossQs[0],
    W4_T5.bossQs[0],
    W4_T6.bossQs[0],
    W4_T7.bossQs[0],
    W4_T8.bossQs[0]
  ],
  mini: {
  "type": "order",
  "title": "Gran Desafío del Bloque IV: Esquema General de la Actuación Administrativa",
  "prompt": "Ordena lógicamente la secuencia completa de una actuación administrativa sujeta a Derecho.",
  "items": [
    "Publicación de la Ley reguladora en el BOE y entrada en vigor tras vacatio legis",
    "Incoación del procedimiento administrativo común (iniciación formal)",
    "Trámite de instrucción, prueba, informes y audiencia preceptiva de interesados",
    "Emisión de la resolución formal (acto administrativo eficaz con presunción de validez)",
    "Reclamación en vía administrativa (recurso de alzada o reposición previa)",
    "Impugnación ante la Jurisdicción Contencioso-Administrativa y sentencia firme"
  ]
},
  boss: {
  "name": "El Gran Anulador Burocrático",
  "kind": "ghost",
  "intro": [
    "¡JA, JA, JA! ¡He dictado un acto con nulidad radical, fraccionado contratos y omitido el trámite de audiencia!",
    "Para derrotarme deberás responder a las preguntas de los 13 temas del temario de Derecho Administrativo. ¡Adelante!"
  ],
  "defeat": [
    "¡Imposible! La legalidad administrativa, la Ley 39/2015, la LCSP y la tutela judicial han restaurado el Estado de Derecho."
  ]
},
  summary: [
  "Fuentes: jerarquía (art. 9.3 CE), ley, costumbre y principios generales. Reglamentos contra ley son nulos de pleno derecho (art. 47.2 Ley 39/2015).",
  "Leyes: Ley Orgánica (art. 81, mayoría absoluta del Congreso) vs Ley Ordinaria. Decretos-leyes (art. 86) y Decretos Legislativos (art. 82).",
  "Reglamentos: ejecutivos (dictamen Consejo de Estado). Inderogabilidad singular (art. 37). Inaplicación judicial (art. 6 LOPJ).",
  "Actos: presunción de validez (art. 39). Notificación en 10 días (art. 40). Nulidad absoluta (art. 47) vs anulabilidad (art. 48).",
  "Contratación (LCSP 9/2017): PCAP ley del contrato. Abierto, restringido, licitación negociada. Modificaciones máx. 20% o 50% (art. 205). REMC 15 días ante el TACRC con suspensión automática.",
  "Tipos de contratos: obras, servicios, suministros, concesión (riesgo operacional). Menores: <40.000 € obras, <15.000 € otros.",
  "Actividad y fomento: licencias y declaraciones responsables (art. 69). Ley 38/2003 de Subvenciones: concurrencia competitiva, BDNS, plan estratégico.",
  "Expropiación (LEF 1954): utilidad pública, necesidad de ocupación, justiprecio (premio de afección 5%), pago y ocupación. Urgencia (art. 52). Reversión.",
  "Patrimonio (Ley 33/2003): demaniales (afectos a uso/servicio, 3 'i') vs patrimoniales. Afectación, desafectación y mutación demanial.",
  "Responsabilidad (Ley 40/2015): objetiva y directa. Prescribe al año (art. 67). Fuerza mayor única eximente. Acción de regreso art. 36.",
  "Procedimiento (Ley 39/2015): iniciación, ordenación, instrucción (prueba, informes, audiencia 10-15 días) y terminación. Silencio positivo ordinario; negativo tasado.",
  "Recursos (Ley 39/2015): alzada (no fin de vía, 1 mes, resuelve 3 meses); reposición (fin de vía, potestativo, 1 mes, resuelve 1 mes); revisión de oficio (nulos, Consejo de Estado).",
  "Contencioso (LJCA 29/1998): control de legalidad. Plazo de 2 meses. Sala Tercera del Tribunal Supremo. Casación por interés casacional objetivo."
],
};
