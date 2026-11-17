import type { MiniWorldDef, Question, WorldDef } from "./types";

export const Q = (id: string, q: string, options: string[], answer: number, explain: string): Question => ({
  id,
  q,
  options,
  answer,
  explain,
});

/* ==================== BLOQUE II: UNIÓN EUROPEA (6 TEMAS BOE) ==================== */

export const W2_T1: MiniWorldDef = {
  "id": "ue-t1",
  "num": 1,
  "temaTitle": "Tema 1: La Unión Europea: Antecedentes. Objetivos y naturaleza jurídica. Los Tratados originarios y modificativos. El Tratado de la Unión Europea y el Tratado de Funcionamiento de la Unión Europea. El proceso de ampliación. Las cooperaciones reforzadas.",
  "name": "Plaza de los Tratados",
  "emoji": "🇪🇺",
  "theme": "ue",
  "color": "#2f6fe0",
  "enemy": "estrella",
  "enemyName": "Estrellas euroescépticas",
  "npcs": [
    {
      "name": "Jean Monnet Jr.",
      "role": "Historia y Tratados constitutivos",
      "look": {
        "skin": "#f3c9a0",
        "hair": "#d9d9e0",
        "hairStyle": "short",
        "shirt": "#1a468d",
        "pants": "#0f2752",
        "acc": [
          "tie",
          "glasses"
        ],
        "accColor": "#ffd84d"
      },
      "pages": [
        "¡Bienvenida a las instituciones comunitarias! La integración europea comenzó con la Declaración Schuman (9 de mayo de 1950) y el Tratado de París de 1951 (CECA).",
        "Tratados de Roma (1957): CEE y Euratom. Acta Única Europea (1986): mercado interior.",
        "Tratado de Maastricht (1992): nace la Unión Europea, estructura en tres pilares y ciudadanía europea.",
        "Tratado de Lisboa (firmado 2007, en vigor 1 de diciembre de 2009): suprime los pilares, dota a la UE de personalidad jurídica única y estructura el Derecho originario en dos tratados: TUE y TFUE.",
        "Cooperaciones reforzadas (art. 20 TUE): mínimo de 9 Estados miembros para avanzar cuando no haya acuerdo unánime."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w2-t1-q1",
      "q": "¿En qué fecha entró en vigor el Tratado de Lisboa que dotó a la UE de personalidad jurídica única?",
      "options": [
        "1 de diciembre de 2009",
        "1 de enero de 2007",
        "1 de enero de 2010",
        "1 de mayo de 2004"
      ],
      "answer": 0,
      "explain": "El Tratado de Lisboa fue firmado el 13 de diciembre de 2007 y entró en vigor el 1 de diciembre de 2009."
    },
    {
      "id": "w2-t1-q2",
      "q": "¿Cuál es el número mínimo de Estados miembros requerido para iniciar una cooperación reforzada (art. 20 TUE)?",
      "options": [
        "Nueve Estados miembros",
        "Un tercio de los Estados miembros",
        "Siete Estados miembros",
        "La mayoría absoluta de Estados miembros"
      ],
      "answer": 0,
      "explain": "Art. 20.2 TUE: La decisión de autorizar una cooperación reforzada se adoptará como último recurso y participarán en ella al menos nueve Estados miembros."
    },
    {
      "id": "w2-t1-q3",
      "q": "¿Qué tratado originario creó la Comunidad Económica Europea (CEE) en 1957?",
      "options": [
        "El Tratado de Roma",
        "El Tratado de París",
        "El Tratado de Maastricht",
        "El Tratado de Ámsterdam"
      ],
      "answer": 0,
      "explain": "Los Tratados de Roma, firmados el 25 de marzo de 1957, crearon la Comunidad Económica Europea (CEE) y el Euratom."
    }
  ],
  "bossQs": [
    {
      "id": "w2-t1-b1",
      "q": "¿Qué artículo del Tratado de la Unión Europea regula la retirada voluntaria y unilateral de un Estado miembro (Brexit)?",
      "options": [
        "Artículo 50 del TUE",
        "Artículo 7 del TUE",
        "Artículo 48 del TUE",
        "Artículo 122 del TFUE"
      ],
      "answer": 0,
      "explain": "El art. 50 TUE establece el procedimiento formal para la retirada de un Estado miembro de la Unión Europea."
    },
    {
      "id": "w2-t1-b2",
      "q": "¿Cuáles son los dos tratados fundamentales sobre los que se fundamenta la Unión Europea tras Lisboa?",
      "options": [
        "El Tratado de la Unión Europea (TUE) y el Tratado de Funcionamiento de la Unión Europea (TFUE)",
        "La Constitución Europea y el Tratado de Niza",
        "El Acta Única Europea y el Tratado de París",
        "El Estatuto de Bruselas y la Carta de Niza"
      ],
      "answer": 0,
      "explain": "Art. 1 TUE: La Unión se fundamenta en el presente Tratado y en el Tratado de Funcionamiento de la Unión Europea (TFUE), ambos con el mismo valor jurídico."
    },
    {
      "id": "w2-t1-b3",
      "q": "¿Qué mayoría se exige para la adhesión de un nuevo Estado miembro según el artículo 49 TUE?",
      "options": [
        "Unanimidad del Consejo previa consulta a la Comisión y aprobación por mayoría de miembros del Parlamento Europeo",
        "Mayoría cualificada del Consejo y del Parlamento",
        "Tres cuartas partes de los Estados miembros",
        "Decisión exclusiva de la Comisión Europea"
      ],
      "answer": 0,
      "explain": "Art. 49 TUE: El Consejo se pronunciará por unanimidad, previa consulta a la Comisión y previa aprobación del Parlamento Europeo (mayoría de los miembros que lo componen)."
    }
  ],
  "mini": {
    "type": "order",
    "title": "Hitos y Tratados de la Integración Europea",
    "prompt": "Ordena cronológicamente los tratados constitutivos de la Unión Europea.",
    "items": [
      "Tratado de París (CECA, 1951)",
      "Tratados de Roma (CEE y Euratom, 1957)",
      "Acta Única Europea (Mercado interior, 1986)",
      "Tratado de Maastricht (Unión Europea y tres pilares, 1992)",
      "Tratado de Lisboa (Personalidad jurídica única, TUE y TFUE, 2007/2009)"
    ]
  },
  "boss": {
    "name": "Guardián de la Soberanía",
    "kind": "veto",
    "intro": [
      "¡El Derecho de la Unión no rige aquí sin ratificación unánime constante!"
    ],
    "defeat": [
      "¡Principio de primacía establecido desde la sentencia Costa c. ENEL (1964)!"
    ]
  },
  "summary": [
    "Tratados originarios: París (1951, CECA), Roma (1957, CEE y Euratom).",
    "Tratados modificativos clave: Acta Única (1986), Maastricht (1992, crea la UE), Ámsterdam (1997), Niza (2001).",
    "Tratado de Lisboa (2007/2009): TUE y TFUE con igual valor. Suprime pilares, dota de personalidad jurídica.",
    "Retirada de la UE: art. 50 TUE.",
    "Cooperación reforzada (art. 20 TUE): mínimo de 9 Estados miembros."
  ]
};

export const W2_T2: MiniWorldDef = {
  "id": "ue-t2",
  "num": 2,
  "temaTitle": "Tema 2: La organización de la Unión Europea (I): el Consejo Europeo, el Consejo y la Comisión Europea. Composición y funciones. El procedimiento decisorio. La participación de los Estados miembros en las diferentes fases del proceso.",
  "name": "Consejo y Comisión",
  "emoji": "🏛️",
  "theme": "ue",
  "color": "#1e52b5",
  "enemy": "estrella",
  "enemyName": "Comisarios rebeldes",
  "npcs": [
    {
      "name": "Euroburócrata",
      "role": "Consejo Europeo, Consejo y Comisión Europea",
      "look": {
        "skin": "#fcd5b5",
        "hair": "#2e2e2e",
        "hairStyle": "short",
        "shirt": "#1565c0",
        "pants": "#0d47a1",
        "acc": [
          "tie",
          "headset"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "El triángulo institucional de la UE: Consejo Europeo, Consejo de la UE y Comisión Europea.",
        "Consejo Europeo (art. 15 TUE): define las orientaciones y prioridades políticas generales, sin función legislativa. Reúne a los Jefes de Estado o de Gobierno, a su Presidente (mandato 2 años y medio, renovable una vez) y al Presidente de la Comisión.",
        "El Consejo (de Ministros) (art. 16 TUE): ejerce junto con el Parlamento la función legislativa y presupuestaria. Compuesto por un representante ministerial por Estado. Sistema de doble mayoría cualificada (55% Estados, mínimo 15, que representen el 65% de la población). Minoría de bloqueo: al menos 4 Estados.",
        "Comisión Europea (art. 17 TUE): colegiada, independiente, guardiana de los Tratados. Monopolio de la iniciativa legislativa. Mandato de 5 años. 1 comisario por Estado miembro.",
        "Alto Representante de la Unión para Asuntos Exteriores y Política de Seguridad: vicepresidente de la Comisión y preside el Consejo de Asuntos Exteriores."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w2-t2-q1",
      "q": "¿Cómo se define la mayoría cualificada ordinaria en el Consejo de la Unión Europea (art. 16.4 TUE)?",
      "options": [
        "Al menos el 55% de los Estados miembros (mínimo 15) que representen al menos el 65% de la población de la UE",
        "Mayoría de dos tercios de los Estados miembros",
        "El 60% de los Estados y el 60% de la población",
        "Mayoría simple de Estados"
      ],
      "answer": 0,
      "explain": "Art. 16.4 TUE: Mayoría cualificada: al menos el 55% de los miembros del Consejo que incluya al menos a quince de ellos y represente a Estados que sumen al menos el 65% de la población de la Unión."
    },
    {
      "id": "w2-t2-q2",
      "q": "¿Cuántos Estados miembros se requieren como mínimo para constituir una minoría de bloqueo en el Consejo?",
      "options": [
        "Al menos cuatro miembros del Consejo",
        "Al menos tres miembros",
        "Al menos cinco miembros",
        "El 35% de los Estados miembros"
      ],
      "answer": 0,
      "explain": "Art. 16.4 TUE in fine: La minoría de bloqueo deberá incluir al menos a cuatro miembros del Consejo; en caso contrario, la mayoría cualificada se considerará alcanzada."
    },
    {
      "id": "w2-t2-q3",
      "q": "¿A qué institución corresponde con carácter general el monopolio de la iniciativa legislativa en la Unión Europea?",
      "options": [
        "A la Comisión Europea",
        "Al Consejo Europeo",
        "Al Parlamento Europeo en exclusiva",
        "Al Tribunal de Justicia de la UE"
      ],
      "answer": 0,
      "explain": "Art. 17.2 TUE: Los actos legislativos de la Unión sólo podrán adoptarse a propuesta de la Comisión, salvo que los Tratados dispongan otra cosa."
    }
  ],
  "bossQs": [
    {
      "id": "w2-t2-b1",
      "q": "¿Cuánto dura el mandato del Presidente del Consejo Europeo y por qué mayoría es elegido?",
      "options": [
        "Dos años y medio, reelegible una vez, elegido por mayoría cualificada",
        "Cinco años no renovables, elegido por unanimidad",
        "Tres años, elegido por el Parlamento",
        "Un año por turno rotatorio"
      ],
      "answer": 0,
      "explain": "Art. 15.5 TUE: El Consejo Europeo elegirá a su Presidente por mayoría cualificada para un mandato de dos años y medio, que podrá renovarse una sola vez."
    },
    {
      "id": "w2-t2-b2",
      "q": "¿Quién preside el Consejo de Asuntos Exteriores de la Unión Europea?",
      "options": [
        "El Alto Representante de la Unión para Asuntos Exteriores y Política de Seguridad",
        "El Ministro de Asuntos Exteriores del Estado que ostenta la Presidencia rotatoria",
        "El Presidente de la Comisión Europea",
        "El Presidente del Consejo Europeo"
      ],
      "answer": 0,
      "explain": "Art. 18.3 TUE: El Alto Representante presidirá el Consejo de Asuntos Exteriores y es a su vez uno de los vicepresidentes de la Comisión."
    },
    {
      "id": "w2-t2-b3",
      "q": "¿Qué instrumento político tiene el Parlamento Europeo para exigir la dimisión colectiva de la Comisión Europea?",
      "options": [
        "Moción de censura aprobada por mayoría de dos tercios de los votos emitidos que represente la mayoría de los diputados",
        "Cuestión prejudicial de inhabilitación ante el TJUE",
        "Veto presupuestario",
        "Moción de reprobación por mayoría simple"
      ],
      "answer": 0,
      "explain": "Art. 17.8 TUE y art. 234 TFUE: Si se aprueba la moción de censura por mayoría de 2/3 de los votos emitidos que represente a su vez la mayoría de los miembros del Parlamento Europeo, los miembros de la Comisión deberán dimitir colectivamente."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Instituciones y Funciones Comunitarias",
    "prompt": "Empareja cada institución europea con su función principal según los Tratados.",
    "pairs": [
      [
        "Consejo Europeo",
        "Define las orientaciones y prioridades políticas generales (sin función legislativa)"
      ],
      [
        "Comisión Europea",
        "Iniciativa legislativa y guardiana de los Tratados (independiente)"
      ],
      [
        "Consejo de la UE",
        "Poder colegislador y presupuestario (representa a los Estados)"
      ],
      [
        "Alto Representante",
        "Dirige la PESC y preside el Consejo de Asuntos Exteriores"
      ]
    ]
  },
  "boss": {
    "name": "El Gran Bloqueador",
    "kind": "veto",
    "intro": [
      "¡Represento al 34% de la población en solitario y bloquearé la directiva!"
    ],
    "defeat": [
      "¡Art. 16.4 TUE! La minoría de bloqueo exige al menos 4 Estados miembros. ¡Directiva aprobada por mayoría cualificada!"
    ]
  },
  "summary": [
    "Consejo Europeo (art. 15 TUE): impulsos políticos, sin legislar. Presidente por 2,5 años (reelegible una vez).",
    "Consejo (art. 16 TUE): colegislador con PE. Mayoría cualificada: 55% Estados (mín. 15) + 65% población. Minoría de bloqueo: mín. 4 Estados.",
    "Comisión Europea (art. 17 TUE): iniciativa legislativa, ejecutiva y guardiana. 1 comisario por Estado. Mandato de 5 años.",
    "Alto Representante (art. 18 TUE): preside Asuntos Exteriores y es Vicepresidente de la Comisión.",
    "Moción de censura del PE a la Comisión: 2/3 de votos que sumen mayoría de diputados (art. 234 TFUE)."
  ]
};

export const W2_T3: MiniWorldDef = {
  "id": "ue-t3",
  "num": 3,
  "temaTitle": "Tema 3: La organización de la Unión Europea (II): el Parlamento Europeo. El Tribunal de Justicia de la Unión Europea. El Tribunal de Cuentas. El Banco Central Europeo.",
  "name": "Estrasburgo y Luxemburgo",
  "emoji": "⚖️",
  "theme": "ue",
  "color": "#1565c0",
  "enemy": "estrella",
  "enemyName": "Cuentas oscuras",
  "npcs": [
    {
      "name": "Eurodiputada Ponente",
      "role": "Parlamento, TJUE, Tribunal de Cuentas y BCE",
      "look": {
        "skin": "#f3c9a0",
        "hair": "#8d5b4c",
        "hairStyle": "long",
        "shirt": "#1976d2",
        "pants": "#0d47a1",
        "acc": [
          "headset",
          "badge"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "Parlamento Europeo (art. 14 TUE): elegido por sufragio universal directo cada 5 años. Máximo 750 diputados más el Presidente (criterio de proporcionalidad decreciente, mín. 6 y máx. 96 por Estado). Co-legislador con el Consejo.",
        "Tribunal de Justicia de la Unión Europea (TJUE, art. 19 TUE): garantiza el respeto del Derecho en la interpretación y aplicación de los Tratados. Sede en Luxemburgo. Integrado por el Tribunal de Justicia (1 juez por Estado + 11 abogados generales) y el Tribunal General (2 jueces por Estado). Mandato 6 años, renovación trienal por mitades.",
        "Tribunal de Cuentas Europeo (art. 285 TFUE): fiscaliza las cuentas y la legalidad de ingresos y gastos de la UE. 1 miembro por Estado por 6 años.",
        "Banco Central Europeo (BCE, art. 282 TFUE): personalidad jurídica propia, gobierna el Eurosistema y emite el euro. Objetivo prioritario: estabilidad de precios."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w2-t3-q1",
      "q": "¿Cuál es el número máximo de diputados que puede tener el Parlamento Europeo según el Tratado de Lisboa?",
      "options": [
        "750 diputados más el Presidente (751)",
        "700 diputados",
        "800 diputados",
        "650 diputados"
      ],
      "answer": 0,
      "explain": "Art. 14.2 TUE: La composición del Parlamento Europeo no excederá de setecientos cincuenta diputados, más el Presidente."
    },
    {
      "id": "w2-t3-q2",
      "q": "¿Qué instrumento procesal permite a los jueces nacionales consultar al TJUE sobre la interpretación o validez del Derecho de la UE?",
      "options": [
        "La cuestión prejudicial (art. 267 TFUE)",
        "El recurso por omisión",
        "El recurso de anulación",
        "El dictamen consultivo de urgencia"
      ],
      "answer": 0,
      "explain": "Art. 267 TFUE: El TJUE es competente para pronunciarse, con carácter prejudicial, sobre la interpretación de los Tratados y la validez e interpretación de los actos de las instituciones."
    },
    {
      "id": "w2-t3-q3",
      "q": "¿Cuál es el objetivo primordial del Sistema Europeo de Bancos Centrales (SEBC) y del BCE según el art. 127 TFUE?",
      "options": [
        "Mantener la estabilidad de precios",
        "Financiar directamente el déficit de los Estados miembros",
        "Maximizar el crecimiento económico a corto plazo",
        "Fijar el tipo de cambio fijo frente al dólar"
      ],
      "answer": 0,
      "explain": "Art. 127.1 TFUE: El objetivo principal del SEBC será mantener la estabilidad de precios."
    }
  ],
  "bossQs": [
    {
      "id": "w2-t3-b1",
      "q": "¿Cuánto dura el mandato de los jueces y abogados generales del Tribunal de Justicia de la UE (art. 253 TFUE)?",
      "options": [
        "Seis años, con renovaciones parciales cada tres años",
        "Nueve años no renovables",
        "Cinco años coincidentes con la Comisión",
        "Vitalicio hasta los 70 años"
      ],
      "answer": 0,
      "explain": "Art. 253 TFUE: Los Jueces y Abogados Generales del TJUE son designados para un período de seis años. Cada tres años tiene lugar una renovación parcial."
    },
    {
      "id": "w2-t3-b2",
      "q": "¿En qué plazo debe interponerse el recurso de anulación contra actos legislativos comunitarios (art. 263 TFUE)?",
      "options": [
        "En un plazo de dos meses a partir de su publicación o notificación",
        "En el plazo de un mes",
        "En un plazo de tres meses",
        "En el plazo de seis meses"
      ],
      "answer": 0,
      "explain": "Art. 263 TFUE in fine: Los recursos deberán interponerse en el plazo de dos meses a partir de la publicación de la medida, o de su notificación al recurrente."
    },
    {
      "id": "w2-t3-b3",
      "q": "¿Cómo se compone el Tribunal de Cuentas Europeo según el art. 286 TFUE?",
      "options": [
        "Un nacional de cada Estado miembro, nombrados por el Consejo por seis años tras consulta al Parlamento",
        "Quince miembros elegidos por el Parlamento Europeo",
        "Doce auditores nombrados por el BCE",
        "Veinte miembros rotatorios por cuatro años"
      ],
      "answer": 0,
      "explain": "Art. 285 y 286 TFUE: El Tribunal de Cuentas estará compuesto por un nacional de cada Estado miembro, nombrados para un período de seis años por el Consejo tras consultar al Parlamento Europeo."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Vías Procesales ante el TJUE",
    "prompt": "Empareja cada recurso jurisdiccional con su finalidad esencial.",
    "pairs": [
      [
        "Cuestión prejudicial (art. 267 TFUE)",
        "Juez nacional consulta interpretación o validez del Derecho UE"
      ],
      [
        "Recurso de anulación (art. 263 TFUE)",
        "Controlar la legalidad de los actos comunitarios (plazo 2 meses)"
      ],
      [
        "Recurso por incumplimiento (arts. 258-260)",
        "Comisión o Estado demanda a Estado miembro infractor"
      ],
      [
        "Recurso por omisión (art. 265 TFUE)",
        "Sancionar la abstención ilegal de actuar de una institución"
      ]
    ]
  },
  "boss": {
    "name": "El Auditor Rebelde",
    "kind": "cloud",
    "intro": [
      "¡He ocultado irregularidades contables en los fondos comunitarios!"
    ],
    "defeat": [
      "¡Informe anual del Tribunal de Cuentas remitido al Parlamento Europeo y a la OLAF!"
    ]
  },
  "summary": [
    "Parlamento Europeo (art. 14 TUE): 750 + 1 Presidente. Elegido por sufragio cada 5 años. Colegislador.",
    "TJUE (art. 19 TUE): Sede Luxemburgo. Tribunal de Justicia (1 juez/Estado + 11 abogados generales) y Tribunal General (2 jueces/Estado). Mandato 6 años (renovación cada 3).",
    "Cuestión prejudicial (art. 267 TFUE): clave de la uniformidad del Derecho comunitario.",
    "Tribunal de Cuentas (art. 285 TFUE): 1 miembro por Estado por 6 años. Fiscalización externa.",
    "BCE (art. 282 TFUE): personalidad jurídica, gobierna el euro. Objetivo supremo: estabilidad de precios."
  ]
};

export const W2_T4: MiniWorldDef = {
  "id": "ue-t4",
  "num": 4,
  "temaTitle": "Tema 4: Las fuentes del derecho de la Unión Europea. Derecho originario. Derecho derivado: Reglamentos, directivas y decisiones. Otras fuentes. Las relaciones entre el Derecho de la Unión Europea y el ordenamiento jurídico de los Estados miembros.",
  "name": "Fuentes del Derecho UE",
  "emoji": "📜",
  "theme": "ue",
  "color": "#0d47a1",
  "enemy": "estrella",
  "enemyName": "Transposiciones nulas",
  "npcs": [
    {
      "name": "Jurisconsulto Europeo",
      "role": "Fuentes y relación con el Derecho interno",
      "look": {
        "skin": "#f5c6a5",
        "hair": "#37474f",
        "hairStyle": "short",
        "shirt": "#0d47a1",
        "pants": "#263238",
        "acc": [
          "robe",
          "glasses"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "El ordenamiento jurídico de la UE es un ordenamiento propio e integrado en el de los Estados miembros.",
        "Derecho originario: Tratados constitutivos (TUE, TFUE, Tratado Euratom) y sus modificaciones, Protocolos y la Carta de los Derechos Fundamentales de la UE (art. 6.1 TUE, mismo valor que los Tratados).",
        "Derecho derivado (art. 288 TFUE):",
        "• Reglamento: alcance general, obligatorio en todos sus elementos y directamente aplicable en cada Estado miembro.",
        "• Directiva: obligará al Estado miembro destinatario en cuanto al resultado que deba conseguirse, dejando a las autoridades nacionales la elección de la forma y de los medios (requiere transposición).",
        "• Decisión: obligatoria en todos sus elementos; si designa destinatarios sólo será obligatoria para éstos.",
        "• Recomendaciones y dictámenes: no son vinculantes.",
        "Principios de relación: Primacía (Costa c. ENEL, 1964), Efecto directo (Van Gend en Loos, 1963) y Responsabilidad del Estado por daños derivados del incumplimiento del Derecho de la UE (Francovich, 1991)."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w2-t4-q1",
      "q": "¿Cuáles son las características definitorias del Reglamento de la UE según el art. 288 TFUE?",
      "options": [
        "Alcance general, obligatorio en todos sus elementos y directamente aplicable en cada Estado miembro",
        "Obliga en el resultado dejando a los Estados los medios y formas",
        "Sólo es vinculante para las instituciones comunitarias",
        "Carece de efecto vinculante hasta su ratificación parlamentaria"
      ],
      "answer": 0,
      "explain": "Art. 288 TFUE: El reglamento tendrá un alcance general. Será obligatorio en todos sus elementos y directamente aplicable en cada Estado miembro."
    },
    {
      "id": "w2-t4-q2",
      "q": "¿Qué caracteriza a la Directiva comunitaria según el artículo 288 TFUE?",
      "options": [
        "Obliga al Estado destinatario en el resultado que deba conseguirse, dejando a las autoridades nacionales la elección de la forma y de los medios",
        "Es directamente aplicable sin necesidad de norma interna de transposición",
        "No vincula a los Estados miembros y sólo tiene carácter de recomendación",
        "Se aplica de forma idéntica y simultánea a todos los particulares"
      ],
      "answer": 0,
      "explain": "Art. 288 TFUE: La directiva obligará al Estado miembro destinatario en cuanto al resultado que deba conseguirse, dejando a las autoridades nacionales la elección de la forma y de los medios."
    },
    {
      "id": "w2-t4-q3",
      "q": "¿Qué valor jurídico tiene la Carta de los Derechos Fundamentales de la UE según el artículo 6.1 TUE?",
      "options": [
        "El mismo valor jurídico que los Tratados constitutivos (Derecho originario)",
        "El valor de un reglamento general",
        "Mera declaración política sin valor vinculante",
        "Valor subordinado a las directivas comunitarias"
      ],
      "answer": 0,
      "explain": "Art. 6.1 TUE: La Unión reconoce los derechos, libertades y principios enunciados en la Carta de los Derechos Fundamentales de la Unión Europea, la cual tendrá el mismo valor jurídico que los Tratados."
    }
  ],
  "bossQs": [
    {
      "id": "w2-t4-b1",
      "q": "¿Qué consagró la histórica sentencia del TJUE 'Van Gend en Loos' (1963)?",
      "options": [
        "El principio de efecto directo del Derecho comunitario sobre los ciudadanos",
        "El principio de primacía absoluta de los reglamentos",
        "La responsabilidad extracontractual de los Estados",
        "La creación de la moneda única europea"
      ],
      "answer": 0,
      "explain": "La sentencia Van Gend en Loos (1963) sentó el principio del efecto directo: las normas comunitarias claras e incondicionales engendran derechos individuales directamente invocables ante los tribunales nacionales."
    },
    {
      "id": "w2-t4-b2",
      "q": "¿Qué estableció la sentencia 'Costa contra ENEL' (1964) del Tribunal de Justicia de la UE?",
      "options": [
        "El principio de primacía del Derecho de la Unión sobre el derecho interno de los Estados miembros",
        "La prohibición de monopolios públicos",
        "La libre circulación de capitales",
        "La nulidad de las aduanas interiores"
      ],
      "answer": 0,
      "explain": "Costa c. ENEL (1964) proclamó la primacía del Derecho comunitario sobre las normas de derecho interno, incluso posteriores o de rango constitucional interno."
    },
    {
      "id": "w2-t4-b3",
      "q": "¿Qué actos del Derecho derivado de la UE NO tienen carácter vinculante según el art. 288 TFUE?",
      "options": [
        "Las recomendaciones y los dictámenes",
        "Las decisiones individuales",
        "Las directivas marco",
        "Los reglamentos de ejecución"
      ],
      "answer": 0,
      "explain": "Art. 288 TFUE in fine: Las recomendaciones y los dictámenes no serán vinculantes."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Actos Jurídicos de la UE (Art. 288 TFUE)",
    "prompt": "Empareja cada instrumento con su régimen vinculante y alcance.",
    "pairs": [
      [
        "Reglamento",
        "Alcance general, obligatorio en todos sus elementos y directamente aplicable"
      ],
      [
        "Directiva",
        "Obliga en el resultado a los Estados, exigiendo transposición nacional"
      ],
      [
        "Decisión",
        "Obligatoria en todos sus elementos para sus destinatarios específicos"
      ],
      [
        "Recomendación y Dictamen",
        "Actos no vinculantes para orientar o emitir juicios"
      ]
    ]
  },
  "boss": {
    "name": "El Infractor Comunitario",
    "kind": "veto",
    "intro": [
      "¡No he transpuesto la directiva en plazo y nadie podrá exigirme nada!"
    ],
    "defeat": [
      "¡Doctrina del efecto directo vertical y principio de responsabilidad patrimonial del Estado infractor (sentencia Francovich)!"
    ]
  },
  "summary": [
    "Derecho originario: Tratados (TUE, TFUE, Euratom), Protocolos y Carta de Derechos Fundamentales (art. 6.1 TUE).",
    "Derecho derivado vinculante (art. 288 TFUE): Reglamento (general y directo), Directiva (resultado, transposición), Decisión (obligatoria para destinatarios).",
    "Derecho no vinculante: Recomendaciones y Dictámenes.",
    "Primacía: Costa c. ENEL (1964).",
    "Efecto directo: Van Gend en Loos (1963). Responsabilidad del Estado: Francovich (1991)."
  ]
};

export const W2_T5: MiniWorldDef = {
  "id": "ue-t5",
  "num": 5,
  "temaTitle": "Tema 5: El presupuesto comunitario. Los fondos europeos. La cohesión económica y social.",
  "name": "Erario Comunitario",
  "emoji": "💶",
  "theme": "ue",
  "color": "#1976d2",
  "enemy": "moneda",
  "enemyName": "Fraude presupuestario",
  "npcs": [
    {
      "name": "Comisario de Presupuestos",
      "role": "MFP, Fondos Estructurales y Cohesión",
      "look": {
        "skin": "#f3c9a0",
        "hair": "#424242",
        "hairStyle": "short",
        "shirt": "#0288d1",
        "pants": "#01579b",
        "acc": [
          "tie",
          "glasses"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "El presupuesto de la UE se rige por el Marco Financiero Plurianual (MFP, mínimo 5 años, habitualmente 7 años, art. 312 TFUE). Aprobado por el Consejo por unanimidad, previa aprobación del Parlamento Europeo.",
        "Principios presupuestarios: unidad y veracidad, anualidad, equilibrio (ingresos = gastos, no cabe déficit presupuestario comunitario), unidad de cuenta (euro), universalidad y especialidad.",
        "Recursos propios (art. 311 TFUE): recursos propios tradicionales (aranceles aduaneros), recurso IVA, recurso RNB (Renta Nacional Bruta, principal fuente de ingresos) y recurso sobre residuos de envases de plástico no reciclados.",
        "Fondos Europeos: Fondos Estructurales y de Inversión (FEDER, FSE+, Fondo de Cohesión, FEADER, FEMPA).",
        "Fondo de Cohesión: apoya a Estados miembros cuya RNB per cápita sea inferior al 90% de la media de la UE en medio ambiente y redes transeuropeas de transporte."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w2-t5-q1",
      "q": "¿Cuál es la principal fuente de ingresos del presupuesto de la Unión Europea dentro de sus recursos propios?",
      "options": [
        "El recurso basado en la Renta Nacional Bruta (RNB) de los Estados miembros",
        "Los aranceles de aduanas exteriores exclusivamente",
        "El impuesto europeo sobre la renta de las personas físicas",
        "Las multas a empresas por competencia"
      ],
      "answer": 0,
      "explain": "El recurso basado en la Renta Nacional Bruta (RNB) es la principal fuente de ingresos del presupuesto comunitario, aportando más del 65% del total de recursos de la UE."
    },
    {
      "id": "w2-t5-q2",
      "q": "¿Qué principio presupuestario prohíbe el déficit en el presupuesto de la Unión Europea (art. 310.1 TFUE)?",
      "options": [
        "Principio de equilibrio presupuestario",
        "Principio de anualidad",
        "Principio de especialidad",
        "Principio de no afectación"
      ],
      "answer": 0,
      "explain": "Art. 310.1 TFUE: Los ingresos y los gastos consignados en el presupuesto deberán estar equilibrados. La UE no puede endeudarse para financiar déficit ordinario."
    },
    {
      "id": "w2-t5-q3",
      "q": "¿Para qué países está reservado el acceso a las ayudas del Fondo de Cohesión de la UE?",
      "options": [
        "Para Estados miembros cuya RNB per cápita sea inferior al 90% de la media de la UE",
        "Para todos los países que tengan frontera exterior",
        "Exclusivamente para países con tasa de paro superior al 20%",
        "Para los países de la zona euro exclusivamente"
      ],
      "answer": 0,
      "explain": "Art. 177 TFUE: El Fondo de Cohesión financia proyectos de medio ambiente y redes transeuropeas en Estados miembros cuya RNB per cápita sea inferior al 90% de la media comunitaria."
    }
  ],
  "bossQs": [
    {
      "id": "w2-t5-b1",
      "q": "¿Por qué procedimiento y mayoría se aprueba el Marco Financiero Plurianual (MFP) según el art. 312 TFUE?",
      "options": [
        "Por el Consejo por unanimidad, previa aprobación del Parlamento Europeo por mayoría de los miembros que lo componen",
        "Por mayoría cualificada del Consejo sin intervención del Parlamento",
        "Por el Parlamento Europeo en exclusiva",
        "Por la Comisión Europea mediante reglamento de ejecución"
      ],
      "answer": 0,
      "explain": "Art. 312.2 TFUE: El Consejo adoptará un reglamento que fije el marco financiero plurianual por unanimidad, previa aprobación del Parlamento Europeo por mayoría de los miembros que lo componen."
    },
    {
      "id": "w2-t5-b2",
      "q": "¿Cuál es el fondo estructural europeo centrado en promover el empleo, la educación y la inclusión social?",
      "options": [
        "El Fondo Social Europeo Plus (FSE+)",
        "El Fondo Europeo de Desarrollo Regional (FEDER)",
        "El Fondo de Cohesión",
        "El FEAGA"
      ],
      "answer": 0,
      "explain": "El Fondo Social Europeo Plus (FSE+) es el principal instrumento financiero de la UE para invertir en capital humano, empleo, formación y lucha contra la pobreza."
    },
    {
      "id": "w2-t5-b3",
      "q": "¿Qué institución europea ostenta la competencia exclusiva para conceder la 'aprobación de la gestión' del presupuesto (discharge)?",
      "options": [
        "El Parlamento Europeo, a recomendación del Consejo",
        "El Tribunal de Cuentas Europeo",
        "La Comisión Europea",
        "El Banco Europeo de Inversiones"
      ],
      "answer": 0,
      "explain": "Art. 319 TFUE: El Parlamento Europeo, a recomendación del Consejo, aprobará la gestión de la Comisión en la ejecución del presupuesto."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Fondos Estructurales y de Cohesión de la UE",
    "prompt": "Empareja cada fondo europeo con su finalidad de gasto específica.",
    "pairs": [
      [
        "FEDER",
        "Inversión productiva, infraestructuras, digitalización e innovación regional"
      ],
      [
        "FSE+",
        "Empleo, formación continua, educación e inclusión social"
      ],
      [
        "Fondo de Cohesión",
        "Medio ambiente y redes transeuropeas en Estados con RNB < 90%"
      ],
      [
        "FEADER",
        "Desarrollo rural y sostenibilidad del sector agrícola"
      ]
    ]
  },
  "boss": {
    "name": "El Deficitario Comunitario",
    "kind": "ghost",
    "intro": [
      "¡Aprobaré un presupuesto comunitario deficitario con deuda estructural no autorizada!"
    ],
    "defeat": [
      "¡Art. 310 TFUE! Principio de equilibrio presupuestario. ¡Ingresos y gastos deben cuadrar al céntimo!"
    ]
  },
  "summary": [
    "MFP (art. 312 TFUE): marco de 7 años. Aprobado por el Consejo por unanimidad con aprobación del PE.",
    "Principios: equilibrio (no cabe déficit, art. 310), unidad, universalidad, anualidad, especialidad.",
    "Recursos propios (art. 311): RNB (principal fuente), IVA, recursos tradicionales (aranceles) y plásticos no reciclados.",
    "Fondos estructurales: FEDER (desarrollo regional), FSE+ (empleo/formación), Fondo de Cohesión (países RNB < 90%).",
    "Aprobación de la gestión presupuestaria (art. 319): Parlamento Europeo a recomendación del Consejo."
  ]
};

export const W2_T6: MiniWorldDef = {
  "id": "ue-t6",
  "num": 6,
  "temaTitle": "Tema 6: Políticas de la Unión Europea: mercado interior. Política económica y monetaria. Política exterior y de seguridad común. El espacio de seguridad, libertad y justicia. Defensa de la competencia. Política agrícola y pesquera.",
  "name": "Mercado y Políticas Comunes",
  "emoji": "🌐",
  "theme": "ue",
  "color": "#005cb2",
  "enemy": "estrella",
  "enemyName": "Aranceles encubiertos",
  "npcs": [
    {
      "name": "Comisario de Mercado Interior",
      "role": "Las 4 libertades, UEM, PESC y PAC",
      "look": {
        "skin": "#fcd5b5",
        "hair": "#212121",
        "hairStyle": "short",
        "shirt": "#0d47a1",
        "pants": "#1565c0",
        "acc": [
          "tie",
          "badge"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "Mercado Interior (art. 26 TFUE): espacio sin fronteras interiores en el que la libre circulación de mercancías, personas, servicios y capitales está garantizada (las 4 libertades).",
        "Política de Competencia (arts. 101 a 109 TFUE): prohibición de acuerdos colusorios/cárteles (art. 101), prohibición del abuso de posición dominante (art. 102) y control estricto de las ayudas de Estado (art. 107).",
        "Unión Económica y Monetaria (UEM): moneda única (euro), Banco Central Europeo, Pacto de Estabilidad y Crecimiento (límites déficit 3% y deuda 60% PIB).",
        "Espacio de Libertad, Seguridad y Justicia (ELSJ, arts. 67 a 89 TFUE): Espacio Schengen (supresión de controles interiores), política común de asilo e inmigración, Eurojust y Europol.",
        "Política Agrícola Común (PAC): financiada por FEAGA (pagos directos) y FEADER (desarrollo rural).",
        "Política Exterior y de Seguridad Común (PESC, Título V TUE): regida por normas y procedimientos específicos intergubernamentales, dirigida por el Alto Representante."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w2-t6-q1",
      "q": "¿Cuáles son las cuatro libertades fundamentales del mercado interior europeo consagradas en el art. 26 TFUE?",
      "options": [
        "Libre circulación de mercancías, personas, servicios y capitales",
        "Libre circulación de mercancías, armas, divisas y patentes",
        "Libre establecimiento de aranceles, subsidios, cuotas y visas",
        "Libre comercio, doble nacionalidad, impuestos fijos y banca única"
      ],
      "answer": 0,
      "explain": "Art. 26.2 TFUE: El mercado interior implicará un espacio sin fronteras interiores, en el que la libre circulación de mercancías, personas, servicios y capitales estará garantizada."
    },
    {
      "id": "w2-t6-q2",
      "q": "¿Qué prohíbe taxativamente el artículo 102 del Tratado de Funcionamiento de la Unión Europea?",
      "options": [
        "La explotación abusiva de una posición dominante en el mercado común",
        "Cualquier fusión entre empresas europeas",
        "La inversión de capitales de terceros países",
        "La publicidad comparativa de productos"
      ],
      "answer": 0,
      "explain": "Art. 102 TFUE: Será incompatible con el mercado interior y quedará prohibida la explotación abusiva, por parte de una o más empresas, de una posición dominante."
    },
    {
      "id": "w2-t6-q3",
      "q": "¿Qué regla general rige para las ayudas otorgadas por los Estados miembros según el art. 107.1 TFUE?",
      "options": [
        "Son incompatibles con el mercado interior en la medida en que falseen o amenacen falsear la competencia",
        "Están plenamente autorizadas si las concede un gobierno autonómico",
        "No están sujetas a supervisión comunitaria",
        "Se autorizan libremente siempre que no superen el 10% del PIB"
      ],
      "answer": 0,
      "explain": "Art. 107.1 TFUE: Salvo que los Tratados dispongan otra cosa, serán incompatibles con el mercado interior las ayudas otorgadas por los Estados que falseen o amenacen falsear la competencia."
    }
  ],
  "bossQs": [
    {
      "id": "w2-t6-b1",
      "q": "¿Cuáles son los dos fondos comunitarios a través de los cuales se financia la Política Agrícola Común (PAC)?",
      "options": [
        "El FEAGA (garantía/pagos directos) y el FEADER (desarrollo rural)",
        "El FEDER y el Fondo de Cohesión",
        "El FSE+ y el Mecanismo Conectar Europa",
        "El BEI y el Fondo Next Generation"
      ],
      "answer": 0,
      "explain": "La PAC se financia mediante el FEAGA (Fondo Europeo Agrícola de Garantía) y el FEADER (Fondo Europeo Agrícola de Desarrollo Rural)."
    },
    {
      "id": "w2-t6-b2",
      "q": "¿Cuáles son los valores de referencia del Tratado de Maastricht para el déficit y la deuda pública en el Pacto de Estabilidad?",
      "options": [
        "Déficit máximo del 3% del PIB y deuda pública máxima del 60% del PIB",
        "Déficit del 0% y deuda del 50%",
        "Déficit del 5% y deuda del 100%",
        "Déficit del 1% y deuda del 80%"
      ],
      "answer": 0,
      "explain": "Protocolo sobre el procedimiento aplicable en caso de déficit excesivo (anexo al TFUE): 3% para la relación entre el déficit público y el PIB, y 60% para la relación entre la deuda pública y el PIB."
    },
    {
      "id": "w2-t6-b3",
      "q": "¿Qué regla de adopción de acuerdos predomina en la Política Exterior y de Seguridad Común (PESC)?",
      "options": [
        "La regla de la unanimidad en el Consejo Europeo y Consejo (art. 31 TUE)",
        "La mayoría simple del Parlamento Europeo",
        "La mayoría cualificada automática de la Comisión",
        "El veto exclusivo del Tribunal de Justicia"
      ],
      "answer": 0,
      "explain": "Art. 31.1 TUE: Las decisiones en el marco de la PESC serán adoptadas por el Consejo Europeo y por el Consejo por unanimidad, salvo excepciones tasadas."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Pilares del Mercado y Políticas Comunitarias",
    "prompt": "Asocia cada política común con su principio o instrumento rector.",
    "pairs": [
      [
        "Las 4 libertades (art. 26 TFUE)",
        "Mercancías, personas, servicios y capitales sin fronteras"
      ],
      [
        "Competencia (arts. 101-102)",
        "Prohibición de cárteles y abuso de posición dominante"
      ],
      [
        "PAC (FEAGA y FEADER)",
        "Pagos directos, mercados agrarios y desarrollo rural sostenible"
      ],
      [
        "PESC (Título V TUE)",
        "Regla general de unanimidad dirigida por el Alto Representante"
      ]
    ]
  },
  "boss": {
    "name": "El Cartel Antitrust",
    "kind": "dragon",
    "intro": [
      "¡Hemos pactado precios y cuotas secretas para distorsionar el mercado interior!"
    ],
    "defeat": [
      "¡Multa sancionadora de la Comisión Europea con arreglo al artículo 101 TFUE! Libre competencia restablecida."
    ]
  },
  "summary": [
    "Mercado interior (art. 26 TFUE): 4 libertades (mercancías, personas, servicios y capitales).",
    "Competencia: art. 101 (prohíbe cárteles/acuerdos), art. 102 (abuso de posición dominante), art. 107 (control ayudas de Estado).",
    "UEM: euro, BCE, estabilidad de precios. Límites Maastricht: 3% déficit y 60% deuda/PIB.",
    "PAC: FEAGA (mercados/pagos) y FEADER (desarrollo rural).",
    "PESC: carácter intergubernamental, regla de unanimidad (art. 31 TUE), dirigida por el Alto Representante."
  ]
};

export const W2: WorldDef = {
  id: "ue",
  num: 2,
  bloque: "Bloque II",
  title: "II. Unión Europea",
  name: "Imperio Comunitario",
  emoji: "🇪🇺",
  theme: "ue",
  color: "#2f6fe0",
  enemy: "estrella",
  enemyName: "Estrellas euroescépticas",
  temas: [
    "Tema 1: La Unión Europea: Antecedentes. Objetivos y naturaleza jurídica. Los Tratados originarios y modificativos. El Tratado de la Unión Europea y el Tratado de Funcionamiento de la Unión Europea. El proceso de ampliación. Las cooperaciones reforzadas.",
    "Tema 2: La organización de la Unión Europea (I): el Consejo Europeo, el Consejo y la Comisión Europea. Composición y funciones. El procedimiento decisorio. La participación de los Estados miembros en las diferentes fases del proceso.",
    "Tema 3: La organización de la Unión Europea (II): el Parlamento Europeo. El Tribunal de Justicia de la Unión Europea. El Tribunal de Cuentas. El Banco Central Europeo.",
    "Tema 4: Las fuentes del derecho de la Unión Europea. Derecho originario. Derecho derivado: Reglamentos, directivas y decisiones. Otras fuentes. Las relaciones entre el Derecho de la Unión Europea y el ordenamiento jurídico de los Estados miembros.",
    "Tema 5: El presupuesto comunitario. Los fondos europeos. La cohesión económica y social.",
    "Tema 6: Políticas de la Unión Europea: mercado interior. Política económica y monetaria. Política exterior y de seguridad común. El espacio de seguridad, libertad y justicia. Defensa de la competencia. Política agrícola y pesquera."
],
  miniWorlds: [W2_T1, W2_T2, W2_T3, W2_T4, W2_T5, W2_T6],
  npcs: [
    W2_T1.npcs[0],
    W2_T2.npcs[0],
    W2_T3.npcs[0],
    W2_T4.npcs[0]
  ],
  blockQs: [
    W2_T1.blockQs[0],
    W2_T2.blockQs[0],
    W2_T3.blockQs[0],
    W2_T4.blockQs[0],
    W2_T5.blockQs[0],
    W2_T6.blockQs[0]
  ],
  bossQs: [
    W2_T1.bossQs[0],
    W2_T2.bossQs[0],
    W2_T3.bossQs[0],
    W2_T4.bossQs[0],
    W2_T5.bossQs[0],
    W2_T6.bossQs[0]
  ],
  mini: {
  "type": "order",
  "title": "Gran Desafío del Bloque II: Pirámide Jurídica e Institucional de la UE",
  "prompt": "Ordena las fuentes e hitos del Derecho de la Unión Europea por jerarquía normativa.",
  "items": [
    "Derecho Originario: Tratados constitutivos (TUE y TFUE) y Carta de Derechos Fundamentales",
    "Principios Generales del Derecho de la Unión (Primacía y Efecto Directo)",
    "Acuerdos Internacionales celebrados por la Unión Europea",
    "Derecho Derivado Vinculante: Reglamentos, Directivas y Decisiones (art. 288 TFUE)",
    "Derecho Derivado No Vinculante: Recomendaciones y Dictámenes"
  ]
},
  boss: {
  "name": "Lord Veto, el Euroescéptico",
  "kind": "veto",
  "intro": [
    "¡JA, JA, JA! ¡Pretendo bloquear la integración europea y vulnerar los Tratados!",
    "Para vencerme deberás superar las preguntas de todos los temas del Bloque II. ¡Adelante!"
  ],
  "defeat": [
    "¡Imposible! La primacía y el efecto directo del acervo comunitario han triunfado."
  ]
},
  summary: [
  "Tratados: Roma 1957, Maastricht 1992, Lisboa 2007 (TUE y TFUE). Retirada: art. 50 TUE.",
  "Instituciones: Consejo Europeo (directrices, presidente 2,5 años); Consejo (colegislador, mayoría cualificada 55% Estados + 65% pob); Comisión (iniciativa y guardiana); Parlamento (750+1, sufragio 5 años).",
  "TJUE (Luxemburgo): 1 juez/Estado en TJ + 11 AG. Cuestión prejudicial art. 267 TFUE. Tribunal de Cuentas: 1/Estado por 6 años.",
  "Fuentes: art. 288 TFUE (Reglamento general/directo; Directiva resultado; Decisión). Principios: Primacía (Costa/ENEL) y Efecto directo (Van Gend en Loos).",
  "Presupuesto: MFP (7 años, Consejo unanimidad + PE). Principio de equilibrio. RNB recurso principal.",
  "Mercado Interior: 4 libertades (art. 26 TFUE). Competencia arts. 101-102. PAC (FEAGA/FEADER). PESC (unanimidad)."
],
};
