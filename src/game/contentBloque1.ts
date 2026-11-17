import type { MiniWorldDef, Question, WorldDef } from "./types";

export const Q = (id: string, q: string, options: string[], answer: number, explain: string): Question => ({
  id,
  q,
  options,
  answer,
  explain,
});

/* ==================== BLOQUE I: ORGANIZACIÓN DEL ESTADO Y DE LA ADMINISTRACIÓN PÚBLICA (11 TEMAS BOE) ==================== */

export const W1_T1: MiniWorldDef = {
  "id": "estado-t1",
  "num": 1,
  "temaTitle": "Tema 1: La Constitución Española de 1978: estructura y contenido. La reforma de la Constitución.",
  "name": "Cámara de la Carta Magna",
  "emoji": "📜",
  "theme": "estado",
  "color": "#e0463a",
  "enemy": "urna",
  "enemyName": "Urnas rebeldes",
  "npcs": [
    {
      "name": "Doña Carta Magna",
      "role": "Estructura y reforma constitucional",
      "look": {
        "skin": "#f3c9a0",
        "hair": "#d9d9e0",
        "hairStyle": "bun",
        "shirt": "#c9372c",
        "pants": "#7a1f1a",
        "acc": [
          "robe",
          "laurel"
        ],
        "accColor": "#e8b923"
      },
      "pages": [
        "¡Bienvenida! Fui aprobada el 31 de octubre de 1978, ratificada el 6 de diciembre, sancionada el 27 y publicada en el BOE el 29 de diciembre de 1978.",
        "Estructura: Título Preliminar, 10 Títulos (I a X), 169 artículos, 4 disposiciones adicionales, 9 transitorias, 1 derogatoria y 1 final.",
        "Art. 167: Reforma ordinaria (3/5 de cada Cámara). Si no hay acuerdo, comisión paritaria. Referéndum potestativo si lo pide el 10% de miembros de cualquier Cámara en 15 días.",
        "Art. 168: Reforma agravada (revisión total, Título Preliminar, Cap. II Sec. 1ª Tít. I, o Título II). 2/3 de cada Cámara, disolución, ratificación nuevas Cortes por 2/3 y referéndum obligatorio."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w1-t1-q1",
      "q": "¿Cuántos artículos y títulos componen la Constitución Española de 1978?",
      "options": [
        "169 artículos y 10 títulos más el Preliminar",
        "155 artículos y 9 títulos",
        "178 artículos y 11 títulos",
        "165 artículos y 10 títulos"
      ],
      "answer": 0,
      "explain": "La CE 1978 consta de un Título Preliminar, 10 Títulos numerados (I a X), 169 artículos, 4 adicionales, 9 transitorias, 1 derogatoria y 1 final."
    },
    {
      "id": "w1-t1-q2",
      "q": "Según el art. 1.1 CE, los valores superiores del ordenamiento jurídico español son:",
      "options": [
        "Libertad, justicia, igualdad y pluralismo político",
        "Libertad, igualdad, legalidad y solidaridad",
        "Democracia, igualdad, justicia y pluralismo",
        "Soberanía, justicia, libertad y bienestar"
      ],
      "answer": 0,
      "explain": "Art. 1.1 CE: Propugna como valores superiores de su ordenamiento jurídico la libertad, la justicia, la igualdad y el pluralismo político."
    },
    {
      "id": "w1-t1-q3",
      "q": "Para la reforma del art. 167 CE, ¿qué mayoría inicial se exige en cada Cámara?",
      "options": [
        "Mayoría de tres quintos",
        "Mayoría absoluta",
        "Mayoría de dos tercios",
        "Mayoría simple"
      ],
      "answer": 0,
      "explain": "Art. 167.1 CE: Los proyectos de reforma constitucional deberán ser aprobados por una mayoría de tres quintos de cada una de las Cámaras."
    }
  ],
  "bossQs": [
    {
      "id": "w1-t1-b1",
      "q": "¿En qué plazo y qué porcentaje de parlamentarios puede solicitar referéndum tras la reforma del art. 167?",
      "options": [
        "Una décima parte en los 15 días siguientes a su aprobación",
        "Una quinta parte en 30 días",
        "Mayoría absoluta en 10 días",
        "Una tercera parte en 20 días"
      ],
      "answer": 0,
      "explain": "Art. 167.3 CE: Una décima parte de los miembros de cualquiera de las Cámaras dentro de los quince días siguientes a su aprobación."
    },
    {
      "id": "w1-t1-b2",
      "q": "¿Qué partes de la Constitución exigen el procedimiento agravado del art. 168?",
      "options": [
        "Revisión total, Título Preliminar, Cap. II Sec. 1ª Tít. I, o Título II",
        "Título III y Título IV",
        "Título Preliminar y Título VIII",
        "Cualquier reforma que afecte al Senado"
      ],
      "answer": 0,
      "explain": "Art. 168.1 CE: Revisión total o parcial que afecte al Título Preliminar, al Capítulo II, Sección 1ª del Título I, o al Título II."
    },
    {
      "id": "w1-t1-b3",
      "q": "En estados de alarma, excepción o sitio o en tiempo de guerra (art. 169 CE):",
      "options": [
        "No podrá iniciarse la reforma constitucional",
        "Solo cabe reforma ordinaria",
        "Se requiere ratificación en 48 horas",
        "Solo cabe a propuesta del Gobierno"
      ],
      "answer": 0,
      "explain": "Art. 169 CE: No podrá iniciarse la reforma constitucional en tiempo de guerra o de vigencia de alguno de los estados previstos en el art. 116."
    }
  ],
  "mini": {
    "type": "order",
    "title": "Procedimiento de Reforma Agravada (Art. 168 CE)",
    "prompt": "Ordena los pasos del procedimiento agravado de reforma constitucional.",
    "items": [
      "Aprobación del principio de reforma por mayoría de 2/3 de cada Cámara",
      "Disolución inmediata de las Cortes Generales",
      "Las nuevas Cámaras ratifican la decisión y estudian el nuevo texto",
      "Aprobación del texto constitucional por mayoría de 2/3 de ambas Cámaras",
      "Sometimiento a referéndum obligatorio para su ratificación"
    ]
  },
  "boss": {
    "name": "Guardián de la Rigidez",
    "kind": "king",
    "intro": [
      "¡Alto ahí! La Constitución no se modifica sin respetar los trámites reforzados. ¡Demuestra que conoces el art. 168!"
    ],
    "defeat": [
      "¡Correcto! Has protegido la supremacía formal de la norma suprema."
    ]
  },
  "summary": [
    "Estructura: Preámbulo, Preliminar, 10 Títulos, 169 arts, 4 disp. adicionales, 9 transitorias, 1 derogatoria, 1 final.",
    "Valores superiores (art. 1.1): libertad, justicia, igualdad y pluralismo político.",
    "Reforma ordinaria (art. 167): 3/5 de cada Cámara. Referéndum facultativo (1/10 miembros en 15 días).",
    "Reforma agravada (art. 168): 2/3 cada Cámara + disolución + 2/3 nuevas Cámaras + referéndum obligatorio."
  ]
};

export const W1_T2: MiniWorldDef = {
  "id": "estado-t2",
  "num": 2,
  "temaTitle": "Tema 2: Derechos y deberes fundamentales. Su garantía y suspensión. El Defensor del Pueblo.",
  "name": "Santuario de los Derechos",
  "emoji": "⚖️",
  "theme": "estado",
  "color": "#d9483b",
  "enemy": "urna",
  "enemyName": "Vulneradores de derechos",
  "npcs": [
    {
      "name": "Procuradora de Libertades",
      "role": "Garantías y Defensor del Pueblo",
      "look": {
        "skin": "#e8b288",
        "hair": "#4a2d18",
        "hairStyle": "long",
        "shirt": "#2d3748",
        "pants": "#1a202c",
        "acc": [
          "glasses",
          "badge"
        ],
        "accColor": "#ffd84d"
      },
      "pages": [
        "El Título I (arts. 10 a 55) es el corazón de los derechos humanos en España. Su art. 10 fundamenta el orden político en la dignidad y el libre desarrollo de la personalidad.",
        "Clasificación y garantías: Sección 1ª (arts. 15 a 29) goza de tutela preferente y sumaria ordinaria y recurso de amparo ante el TC (art. 53.2), más reserva de Ley Orgánica (art. 81).",
        "El art. 14 (igualdad) también goza de amparo constitucional.",
        "El Defensor del Pueblo (art. 54 y LO 3/1981) es el alto comisionado de las Cortes. Elegido por 5 años por mayoría de 3/5 del Congreso y 3/5 del Senado."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w1-t2-q1",
      "q": "¿Qué derechos gozan de protección mediante recurso de amparo ante el Tribunal Constitucional?",
      "options": [
        "Art. 14 más Sección 1ª del Cap. II del Título I (arts. 15 al 29) y objeción de conciencia (art. 30.2)",
        "Todos los artículos del Título I",
        "Únicamente los artículos 15 al 20",
        "Los Capítulos I y II íntegros del Título I"
      ],
      "answer": 0,
      "explain": "Art. 53.2 CE: Cualquier ciudadano podrá recabar la tutela ante el TC por recurso de amparo respecto al art. 14 y la Sección 1ª del Capítulo II, más la objeción de conciencia del art. 30.2."
    },
    {
      "id": "w1-t2-q2",
      "q": "¿Por qué mayoría es elegido el Defensor del Pueblo por las Cortes Generales?",
      "options": [
        "Mayoría de tres quintos del Congreso y tres quintos del Senado",
        "Mayoría absoluta de cada Cámara",
        "Mayoría de dos tercios del Congreso",
        "Mayoría simple en segunda votación"
      ],
      "answer": 0,
      "explain": "Art. 2 LO 3/1981: El Defensor del Pueblo es designado por las Cortes Generales para un período de cinco años por mayoría de tres quintos en el Congreso y Senado."
    },
    {
      "id": "w1-t2-q3",
      "q": "¿Qué derechos NO pueden ser suspendidos en el estado de excepción según el art. 55.1 CE?",
      "options": [
        "Derecho a la vida y a la integridad física (art. 15)",
        "Inviolabilidad del domicilio (art. 18.2)",
        "Secreto de las comunicaciones (art. 18.3)",
        "Libertad de circulación (art. 19)"
      ],
      "answer": 0,
      "explain": "Art. 55.1 CE: El art. 15 (derecho a la vida y a la integridad física y moral) nunca puede ser suspendido."
    }
  ],
  "bossQs": [
    {
      "id": "w1-t2-b1",
      "q": "¿Cuánto dura el mandato del Defensor del Pueblo?",
      "options": [
        "5 años",
        "4 años",
        "6 años",
        "9 años"
      ],
      "answer": 0,
      "explain": "Art. 54 CE y art. 2 LO 3/1981: Es elegido por un período de cinco años y podrá ser reelegido."
    },
    {
      "id": "w1-t2-b2",
      "q": "¿Qué tipo de ley se requiere para el desarrollo directo de los derechos fundamentales y libertades públicas?",
      "options": [
        "Ley Orgánica",
        "Ley Ordinaria",
        "Decreto Legislativo",
        "Real Decreto-ley"
      ],
      "answer": 0,
      "explain": "Art. 81.1 CE: Son leyes orgánicas las relativas al desarrollo de los derechos fundamentales y de las libertades públicas."
    },
    {
      "id": "w1-t2-b3",
      "q": "¿Qué plazo máximo tiene la detención preventiva sin puesta a disposición judicial (art. 17.2 CE)?",
      "options": [
        "72 horas",
        "48 horas",
        "24 horas",
        "5 días"
      ],
      "answer": 0,
      "explain": "Art. 17.2 CE: En el plazo máximo de 72 horas, el detenido deberá ser puesto en libertad o a disposición de la autoridad judicial."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Niveles de Garantía de los Derechos",
    "prompt": "Empareja cada precepto con su nivel de protección constitucional.",
    "pairs": [
      [
        "Arts. 15 a 29 CE",
        "Ley Orgánica + Procedimiento preferente/sumario + Amparo TC"
      ],
      [
        "Art. 14 (Igualdad)",
        "Tutela judicial + Amparo TC (sin exigir Ley Orgánica)"
      ],
      [
        "Arts. 39 a 52 (Principios rectores)",
        "Informan la legislación y la práctica judicial"
      ],
      [
        "Art. 30.2 (Objeción conciencia)",
        "Protegido por Recurso de Amparo ante el TC"
      ]
    ]
  },
  "boss": {
    "name": "Fiscalizador Autoritario",
    "kind": "veto",
    "intro": [
      "¡Pretendo vulnerar la correspondencia y detener sin plazo! ¿Quién me lo impedirá?"
    ],
    "defeat": [
      "¡El art. 17 y el procedimiento de Habeas Corpus te frenaron!"
    ]
  },
  "summary": [
    "Nivel máximo: Arts. 15-29 (reserva LO, tutela judicial preferente y sumaria, amparo TC).",
    "Art. 14 e igualdad: amparo TC.",
    "Defensor del Pueblo: alto comisionado de las Cortes (art. 54), mandato de 5 años, mayoría de 3/5.",
    "Suspensión de derechos (art. 55): estados de excepción y sitio. Art. 15 nunca se suspende."
  ]
};

export const W1_T3: MiniWorldDef = {
  "id": "estado-t3",
  "num": 3,
  "temaTitle": "Tema 3: El Tribunal Constitucional. Organización, composición y atribuciones.",
  "name": "Tribunal de Garantías",
  "emoji": "🏛️",
  "theme": "estado",
  "color": "#bf392b",
  "enemy": "urna",
  "enemyName": "Leyes inconstitucionales",
  "npcs": [
    {
      "name": "Magistrada Constitucional",
      "role": "Organización y competencias del TC",
      "look": {
        "skin": "#fcd5b5",
        "hair": "#333333",
        "hairStyle": "curly",
        "shirt": "#1f2937",
        "pants": "#111827",
        "acc": [
          "robe",
          "tie"
        ],
        "accColor": "#e5e7eb"
      },
      "pages": [
        "El Tribunal Constitucional es el intérprete supremo de la Constitución e independiente de los demás órganos (art. 123 y LOTC 2/1979).",
        "Composición: 12 magistrados nombrados por el Rey por un periodo de 9 años: 4 a propuesta del Congreso (3/5), 4 del Senado (3/5), 2 del Gobierno y 2 del CGPJ (3/5).",
        "Se renuevan por terceras partes (4 miembros) cada tres años.",
        "El Presidente del TC es nombrado por el Rey entre sus miembros a propuesta del Pleno, por 3 años (reelegible una vez).",
        "Competencias: Recurso y cuestión de inconstitucionalidad, recurso de amparo, conflictos constitucionales de competencias e impugnación del Título V LOTC (art. 161.2 CE)."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w1-t3-q1",
      "q": "¿Cómo se compone el Tribunal Constitucional y cuál es la duración del mandato de sus miembros?",
      "options": [
        "12 miembros por 9 años, renovados por tercios cada 3 años",
        "12 miembros por 5 años no renovables",
        "20 miembros por 9 años",
        "10 miembros por 6 años renovados por mitades"
      ],
      "answer": 0,
      "explain": "Art. 159 CE: Consta de 12 miembros nombrados por el Rey por un período de 9 años y se renuevan por terceras partes cada tres años."
    },
    {
      "id": "w1-t3-q2",
      "q": "¿Quiénes están legitimados para interponer el recurso de inconstitucionalidad según el art. 162.1.a CE?",
      "options": [
        "Presidente del Gobierno, Defensor del Pueblo, 50 diputados, 50 senadores y Gobiernos/Asambleas autonómicas",
        "Cualquier ciudadano particular con interés directo",
        "El Consejo General del Poder Judicial y el Fiscal General",
        "Los Tribunales Superiores de Justicia"
      ],
      "answer": 0,
      "explain": "Art. 162.1.a CE: Están legitimados el Presidente del Gobierno, el Defensor del Pueblo, 50 Diputados, 50 Senadores, los órganos colegiados ejecutivos y las Asambleas de las CCAA."
    },
    {
      "id": "w1-t3-q3",
      "q": "¿Quién puede plantear la 'cuestión de inconstitucionalidad' ante el Tribunal Constitucional?",
      "options": [
        "Solo los jueces o tribunales, de oficio o a instancia de parte",
        "El Defensor del Pueblo exclusivamente",
        "Cualquier persona que alegue vulneración de un derecho fundamental",
        "El Fiscal General del Estado"
      ],
      "answer": 0,
      "explain": "Art. 163 CE y art. 35 LOTC: Sólo el órgano judicial que conoce de un proceso puede plantear la cuestión de inconstitucionalidad cuando una norma con rango de ley aplicable resulte decisiva."
    }
  ],
  "bossQs": [
    {
      "id": "w1-t3-b1",
      "q": "¿Por qué mayoría elige el Pleno del Tribunal Constitucional a su Presidente?",
      "options": [
        "Mayoría absoluta en primera votación y simple en segunda",
        "Tres quintos de los magistrados",
        "Dos tercios del Pleno",
        "Por sorteo entre los magistrados más antiguos"
      ],
      "answer": 0,
      "explain": "Art. 9 LOTC: El Pleno elige a su Presidente en primera votación por mayoría absoluta; si no se alcanzase, en segunda por el mayor número de votos."
    },
    {
      "id": "w1-t3-b2",
      "q": "Si el Gobierno impugna ante el TC resoluciones de las CCAA invocando el art. 161.2 CE:",
      "options": [
        "Produce la suspensión automática de la disposición por un plazo máximo de 5 meses",
        "La disposición autonómica queda anulada de forma irrevocable",
        "No produce efecto suspensivo hasta la sentencia",
        "Requiere autorización previa del Senado"
      ],
      "answer": 0,
      "explain": "Art. 161.2 CE: La impugnación producirá la suspensión de la disposición impugnada, debiendo el TC ratificarla o levantarla en un plazo no superior a cinco meses."
    },
    {
      "id": "w1-t3-b3",
      "q": "¿Qué condición profesional mínima se exige para ser nombrado magistrado del TC?",
      "options": [
        "Jurista de reconocida competencia con más de 15 años de ejercicio profesional",
        "Magistrado de carrera con más de 10 años",
        "Catedrático de universidad con 5 años de antigüedad",
        "Abogado del Estado con 20 años de servicio"
      ],
      "answer": 0,
      "explain": "Art. 159.2 CE: Juristas de reconocida competencia con más de quince años de ejercicio profesional."
    }
  ],
  "mini": {
    "type": "order",
    "title": "Origen de las Propuestas de Magistrados del TC",
    "prompt": "Ordena las instituciones según el número de magistrados del TC que proponen.",
    "items": [
      "Congreso de los Diputados (4 magistrados por 3/5)",
      "Senado (4 magistrados por 3/5)",
      "Gobierno de la Nación (2 magistrados)",
      "Consejo General del Poder Judicial (2 magistrados por 3/5)"
    ]
  },
  "boss": {
    "name": "El Infraconstitucional",
    "kind": "ghost",
    "intro": [
      "¡Dictaré leyes contrarias a la Constitución y nadie podrá anularlas!"
    ],
    "defeat": [
      "¡Sentencia estimatoria del Tribunal Constitucional! La ley queda expulsada del ordenamiento con efectos erga omnes."
    ]
  },
  "summary": [
    "Composición: 12 miembros por 9 años (4 Congreso 3/5, 4 Senado 3/5, 2 Gobierno, 2 CGPJ 3/5). Renovación por tercios cada 3 años.",
    "Requisitos: juristas de reconocida competencia con más de 15 años de ejercicio.",
    "Recurso de inconstitucionalidad: Presidente del Gobierno, Defensor del Pueblo, 50 diputados, 50 senadores, CCAA.",
    "Cuestión de inconstitucionalidad: exclusivamente órganos judiciales aplicadores de la norma.",
    "Suspensión art. 161.2: impugnación del Gobierno suspende automáticamente hasta 5 meses."
  ]
};

export const W1_T4: MiniWorldDef = {
  "id": "estado-t4",
  "num": 4,
  "temaTitle": "Tema 4: La Corona. Funciones constitucionales del Rey. Sucesión y regencia. El refrendo.",
  "name": "Palacio de la Corona",
  "emoji": "👑",
  "theme": "estado",
  "color": "#e65100",
  "enemy": "urna",
  "enemyName": "Regentes ilegítimos",
  "npcs": [
    {
      "name": "Heraldo Real",
      "role": "Funciones del Rey, sucesión y refrendo",
      "look": {
        "skin": "#f5c6a5",
        "hair": "#8d5b4c",
        "hairStyle": "short",
        "shirt": "#b71c1c",
        "pants": "#424242",
        "acc": [
          "crown",
          "cape"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "El Título II de la Constitución (arts. 56 a 65) regula la Corona. El Rey es el Jefe del Estado, símbolo de su unidad y permanencia, arbitra y modera el funcionamiento regular de las instituciones.",
        "La persona del Rey es inviolable y no está sujeta a responsabilidad. Sus actos estarán siempre refrendados (art. 56.3 y 64).",
        "¿Quién refrenda? El Presidente del Gobierno y, en su caso, los Ministros competentes. Excepción: la propuesta y nombramiento del Presidente del Gobierno y la disolución del art. 99.5 los refrenda el Presidente del Congreso.",
        "Actos exentos de refrendo: nombramiento y relevo de los miembros civiles y militares de su Casa y la distribución libre de la dotación presupuestaria (art. 65)."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w1-t4-q1",
      "q": "¿Quién refrenda los actos del Rey con carácter general según el artículo 64.1 de la Constitución?",
      "options": [
        "El Presidente del Gobierno y, en su caso, los Ministros competentes",
        "El Presidente del Tribunal Supremo y el Fiscal General",
        "El Presidente del Congreso de los Diputados en todos los casos",
        "El Consejo de Estado en pleno"
      ],
      "answer": 0,
      "explain": "Art. 64.1 CE: Los actos del Rey serán refrendados por el Presidente del Gobierno y, en su caso, por los Ministros competentes."
    },
    {
      "id": "w1-t4-q2",
      "q": "¿En qué caso el refrendo de los actos del Rey corresponde al Presidente del Congreso de los Diputados?",
      "options": [
        "Propuesta y nombramiento del Presidente del Gobierno y disolución de Cortes del art. 99",
        "Promulgación de leyes orgánicas",
        "Nombramiento de los embajadores de España",
        "Concesión de indultos particulares"
      ],
      "answer": 0,
      "explain": "Art. 64.1 CE in fine: La propuesta y el nombramiento del Presidente del Gobierno, y la disolución prevista en el artículo 99, serán refrendados por el Presidente del Congreso."
    },
    {
      "id": "w1-t4-q3",
      "q": "¿Qué actos del Rey NO precisan refrendo ministerial según el artículo 65 CE?",
      "options": [
        "El nombramiento y relevo de los miembros de su Casa y la distribución de la cantidad global de los Presupuestos",
        "La sanción y promulgación de las leyes",
        "El mando supremo de las Fuerzas Armadas",
        "La declaración de la guerra y la paz"
      ],
      "answer": 0,
      "explain": "Art. 65 CE: El Rey distribuye libremente la dotación asignada en los PGE y nombra y releva libremente a los miembros civiles y militares de su Casa."
    }
  ],
  "bossQs": [
    {
      "id": "w1-t4-b1",
      "q": "¿Cuál es el orden sucesorio a la Corona de España según el artículo 57.1 CE?",
      "options": [
        "Línea anterior a las posteriores; grado más próximo al más remoto; varón a la mujer; mayor edad a la menor",
        "Edad pura y estricta sin distinción de sexo ni línea",
        "Elección por las Cortes Generales entre los hijos del Rey",
        "Prioridad siempre de la mujer según la reforma de 2011"
      ],
      "answer": 0,
      "explain": "Art. 57.1 CE: La sucesión en el trono seguirá el orden regular de primogenitura y representación, siendo preferida siempre la línea anterior a las posteriores; en la misma línea, el grado más próximo al más remoto; en el mismo grado, el varón a la mujer, y en el mismo sexo, la persona de más edad a la de menos."
    },
    {
      "id": "w1-t4-b2",
      "q": "Para ejercer la Regencia en España se requiere indispensablemente:",
      "options": [
        "Ser español y mayor de edad",
        "Haber sido Ministro de la Corona al menos 2 años",
        "Tener más de 35 años de edad",
        "Ser miembro del Consejo de Estado"
      ],
      "answer": 0,
      "explain": "Art. 59.4 CE: Para ejercer la Regencia es preciso ser español y mayor de edad."
    },
    {
      "id": "w1-t4-b3",
      "q": "¿Quién debe inhabilitar al Rey para el ejercicio de su autoridad si se imposibilitare y dicha imposibilidad fuere reconocida?",
      "options": [
        "Las Cortes Generales",
        "El Consejo de Ministros exclusivamente",
        "El Tribunal Constitucional",
        "El Tribunal Supremo en Sala de Gobierno"
      ],
      "answer": 0,
      "explain": "Art. 59.2 CE: Si el Rey se inhabilitare y la imposibilidad fuere reconocida por las Cortes Generales, entrará a ejercer la Regencia el Príncipe heredero si fuere mayor de edad."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Actos del Rey y Refrendo",
    "prompt": "Relaciona cada acto con la autoridad constitucional que lo refrenda o su régimen.",
    "pairs": [
      [
        "Nombramiento del Presidente del Gobierno",
        "Presidente del Congreso de los Diputados"
      ],
      [
        "Nombramiento de Ministros del Gobierno",
        "Presidente del Gobierno"
      ],
      [
        "Nombramiento de miembros de su Casa",
        "Exento de refrendo (libre designación real)"
      ],
      [
        "Distribución de la dotación global PGE",
        "Exento de refrendo (gestión libre del Rey)"
      ]
    ]
  },
  "boss": {
    "name": "El Usurpador Sin Refrendo",
    "kind": "king",
    "intro": [
      "¡He firmado un decreto real sin firma ministerial! ¡Es válido porque lo ordeno yo!"
    ],
    "defeat": [
      "¡Art. 56.3 CE! De los actos del Rey serán responsables las personas que los refrenden. Sin refrendo carecen de toda validez."
    ]
  },
  "summary": [
    "Estatuto: El Rey es inviolable y no está sujeto a responsabilidad (art. 56.3).",
    "Refrendo general: Presidente del Gobierno y Ministros competentes (art. 64.1).",
    "Refrendo especial (Presidente del Congreso): investidura y disolución del art. 99.",
    "Exentos de refrendo (art. 65): Casa Real y reparto de dotación presupuestaria.",
    "Regencia: español y mayor de edad (art. 59.4). Tutela incompatible con cargo político (art. 60)."
  ]
};

export const W1_T5: MiniWorldDef = {
  "id": "estado-t5",
  "num": 5,
  "temaTitle": "Tema 5: El poder legislativo. Las Cortes Generales. Composición y atribuciones del Congreso de los Diputados y del Senado.",
  "name": "Hemiciclo de las Cortes",
  "emoji": "🏛️",
  "theme": "estado",
  "color": "#c0392b",
  "enemy": "urna",
  "enemyName": "Filibusteros parlamentarios",
  "npcs": [
    {
      "name": "Letrado Mayor de Cortes",
      "role": "Organización de Congreso y Senado",
      "look": {
        "skin": "#f2c199",
        "hair": "#5a5a5a",
        "hairStyle": "short",
        "shirt": "#0d47a1",
        "pants": "#212121",
        "acc": [
          "tie",
          "glasses"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "Las Cortes Generales representan al pueblo español y están formadas por el Congreso de los Diputados y el Senado (bicameralismo imperfecto, art. 66).",
        "Congreso: entre 300 y 400 diputados (actualmente 350 fijados por LOREG), elegidos por sufragio universal mediante sistema D'Hondt provincial.",
        "Senado: Cámara de representación territorial. Senadores provinciales (4 por provincia peninsular) más los designados por las Asambleas de las CCAA (1 fijo + 1 por cada millón de habitantes).",
        "Funcionamiento: Pleno y Comisiones. Diputación Permanente en cada Cámara (mínimo 21 miembros presididos por el Presidente de la Cámara) vela por los poderes de las Cámaras cuando no están reunidas o disueltas."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w1-t5-q1",
      "q": "¿Cuántos diputados componen actualmente el Congreso según la LOREG y cuál es la circunscripción electoral?",
      "options": [
        "350 diputados, siendo la circunscripción electoral la provincia",
        "400 diputados, siendo la circunscripción la Comunidad Autónoma",
        "300 diputados a nivel nacional único",
        "350 diputados por circunscripción de comarca"
      ],
      "answer": 0,
      "explain": "Art. 68 CE y art. 162 LOREG: El Congreso está compuesto por 350 diputados y la circunscripción electoral es la provincia (Ceuta y Melilla 1 cada una)."
    },
    {
      "id": "w1-t5-q2",
      "q": "¿Cuántos senadores se eligen directamente en cada provincia peninsular en elecciones generales?",
      "options": [
        "4 senadores",
        "3 senadores",
        "2 senadores",
        "5 senadores"
      ],
      "answer": 0,
      "explain": "Art. 69.2 CE: En cada provincia peninsular se elegirán cuatro Senadores por sufragio universal, libre, igual, directo y secreto."
    },
    {
      "id": "w1-t5-q3",
      "q": "¿Qué número mínimo de miembros compone la Diputación Permanente de cada Cámara parlamentaria?",
      "options": [
        "Un mínimo de 21 miembros",
        "15 miembros",
        "30 miembros",
        "El 10% de la Cámara"
      ],
      "answer": 0,
      "explain": "Art. 73 y 78.1 CE: En cada Cámara habrá una Diputación Permanente presidida por el Presidente de la Cámara y compuesta por un mínimo de veintiún miembros."
    }
  ],
  "bossQs": [
    {
      "id": "w1-t5-b1",
      "q": "¿Cuáles son los períodos ordinarios de sesiones de las Cortes Generales según el artículo 73.1 CE?",
      "options": [
        "De septiembre a diciembre y de febrero a junio",
        "De octubre a enero y de marzo a julio",
        "De septiembre a enero y de febrero a julio",
        "Sesión continua todo el año sin interrupción"
      ],
      "answer": 0,
      "explain": "Art. 73.1 CE: Las Cámaras se reunirán anualmente en dos períodos ordinarios de sesiones: el primero, de septiembre a diciembre; y el segundo, de febrero a junio."
    },
    {
      "id": "w1-t5-b2",
      "q": "¿Qué prerrogativas protegen a los Diputados y Senadores según el artículo 71 de la CE?",
      "options": [
        "Inviolabilidad por opiniones manifestadas e inmunidad salvo flagrante delito (requiere suplicatorio)",
        "Inmunidad total frente a cualquier delito civil y penal sin límite",
        "Aforamiento ante el Tribunal Constitucional",
        "Exención total del pago de tributos"
      ],
      "answer": 0,
      "explain": "Art. 71 CE: Gozan de inviolabilidad por las opiniones manifestadas en el ejercicio de sus funciones y de inmunidad durante su mandato (sólo detenidos en caso de flagrante delito y procesados previa autorización de la Cámara: suplicatorio). Competente: Sala de lo Penal del Tribunal Supremo."
    },
    {
      "id": "w1-t5-b3",
      "q": "¿En qué plazo debe pronunciarse el Senado sobre un proyecto de ley aprobado por el Congreso?",
      "options": [
        "Dos meses con carácter general, o veinte días naturales si se declara urgente",
        "Treinta días con carácter general y quince si es urgente",
        "Tres meses improrrogables",
        "Quince días hábiles"
      ],
      "answer": 0,
      "explain": "Art. 90.2 y 90.3 CE: El Senado dispone de dos meses para vetar o enmendar el proyecto, reduciéndose a veinte días naturales en los proyectos declarados urgentes."
    }
  ],
  "mini": {
    "type": "order",
    "title": "Tramitación Parlamentaria de una Ley Ordinaria",
    "prompt": "Ordena las fases de tramitación de un proyecto de ley en las Cortes Generales.",
    "items": [
      "Aprobación del Proyecto de Ley por el Consejo de Ministros y remisión al Congreso",
      "Publicación en el BOCG, presentación de enmiendas y debate de totalidad",
      "Dictamen de la Comisión y debate y votación en el Pleno del Congreso",
      "Remisión al Senado: enmiendas, veto o aprobación en plazo de 2 meses",
      "Levantamiento del veto en el Congreso por mayoría absoluta (o simple a los 2 meses)",
      "Sanción y promulgación por el Rey y publicación oficial en el BOE"
    ]
  },
  "boss": {
    "name": "El Bloqueador Legislativo",
    "kind": "veto",
    "intro": [
      "¡El Senado ha vetado tu ley! ¡Tu proyecto jamás verá la luz!"
    ],
    "defeat": [
      "¡El Congreso ha levantado el veto por mayoría absoluta (art. 90.2 CE)! Prevalece la voluntad popular."
    ]
  },
  "summary": [
    "Bicameralismo imperfecto: Congreso (350 diputados, proporcional D'Hondt provincial) y Senado (territorial, 4 peninsulares + designados CCAA).",
    "Períodos de sesiones: 1º sept-dic, 2º feb-jun (art. 73 CE).",
    "Diputación Permanente: mínimo 21 miembros, presidida por el Presidente de la Cámara.",
    "Estatuto parlamentario (art. 71): inviolabilidad por votos/opiniones e inmunidad (suplicatorio, aforamiento TS).",
    "Veto del Senado (art. 90.2): superable por mayoría absoluta del Congreso o simple tras 2 meses."
  ]
};

export const W1_T6: MiniWorldDef = {
  "id": "estado-t6",
  "num": 6,
  "temaTitle": "Tema 6: El poder ejecutivo. El Presidente del Gobierno y el Consejo de Ministros. Relaciones entre el Gobierno y las Cortes Generales. Designación, causas de cese y responsabilidad del Gobierno. El Consejo de Estado.",
  "name": "Gabinete del Ejecutivo",
  "emoji": "🏛️",
  "theme": "estado",
  "color": "#b71c1c",
  "enemy": "urna",
  "enemyName": "Mociones destructivas",
  "npcs": [
    {
      "name": "Secretario del Consejo",
      "role": "Gobierno y relaciones con las Cortes",
      "look": {
        "skin": "#f7d6bf",
        "hair": "#2e2e2e",
        "hairStyle": "short",
        "shirt": "#1565c0",
        "pants": "#263238",
        "acc": [
          "tie",
          "badge"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "El Título IV (arts. 97 a 107 CE) y la Ley 50/1997 del Gobierno regulan el Poder Ejecutivo. El Gobierno dirige la política interior y exterior, la administración civil y militar y la defensa del Estado.",
        "Composición: Presidente, Vicepresidentes en su caso, Ministros y demás miembros que establezca la ley.",
        "Investidura (art. 99 CE): el candidato expone su programa. Mayoría absoluta en 1ª votación; simple a las 48 horas. Si en 2 meses no se inviste a nadie, disolución automática.",
        "Moción de censura (art. 113 CE): constructiva (incluye candidato alternativo). Propuesta por 1/10 de los diputados; 5 días de enfriamiento; requiere mayoría absoluta.",
        "Cuestión de confianza (art. 112 CE): la plantea el Presidente previa deliberación del Consejo de Ministros sobre su programa o declaración de política. Se gana por mayoría simple del Congreso.",
        "El Consejo de Estado (art. 107 CE y LO 3/1980) es el supremo órgano consultivo del Gobierno."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w1-t6-q1",
      "q": "¿Qué mayoría se exige para otorgar la investidura al Presidente del Gobierno en primera votación según el art. 99.3 CE?",
      "options": [
        "Mayoría absoluta de los miembros del Congreso de los Diputados",
        "Mayoría simple de los presentes",
        "Dos tercios de los miembros del Congreso",
        "Mayoría absoluta conjunta de Congreso y Senado"
      ],
      "answer": 0,
      "explain": "Art. 99.3 CE: Si el Congreso de los Diputados, por el voto de la mayoría absoluta de sus miembros, otorgare su confianza a dicho candidato, el Rey le nombrará Presidente."
    },
    {
      "id": "w1-t6-q2",
      "q": "¿Cuántos diputados deben firmar al menos la propuesta de una moción de censura según el art. 113.2 CE?",
      "options": [
        "Al menos una décima parte de los Diputados (35)",
        "Una quinta parte de los Diputados (70)",
        "Mayoría absoluta del Congreso",
        "Cincuenta Diputados"
      ],
      "answer": 0,
      "explain": "Art. 113.2 CE: La moción de censura deberá ser propuesta al menos por la décima parte de los Diputados y habrá de incluir un candidato a la Presidencia del Gobierno."
    },
    {
      "id": "w1-t6-q3",
      "q": "¿Qué mayoría requiere el Presidente del Gobierno para superar una cuestión de confianza (art. 112 y 114 CE)?",
      "options": [
        "Mayoría simple de los Diputados",
        "Mayoría absoluta del Congreso",
        "Tres quintos de la Cámara",
        "Mayoría simple en Congreso y Senado"
      ],
      "answer": 0,
      "explain": "Art. 112 y 114.1 CE: La confianza se entenderá otorgada cuando vote a favor de la misma la mayoría simple de los Diputados."
    }
  ],
  "bossQs": [
    {
      "id": "w1-t6-b1",
      "q": "¿En qué plazo desde la primera votación de investidura fallida se disuelven las Cortes si ningún candidato obtiene la confianza?",
      "options": [
        "Dos meses",
        "Tres meses",
        "Un mes",
        "Cuarenta y cinco días"
      ],
      "answer": 0,
      "explain": "Art. 99.5 CE: Si transcurrido el plazo de dos meses, a partir de la primera votación de investidura, ningún candidato hubiere obtenido la confianza del Congreso, el Rey disolverá ambas Cámaras."
    },
    {
      "id": "w1-t6-b2",
      "q": "¿Cuál es la naturaleza constitucional del Consejo de Estado según el artículo 107 CE?",
      "options": [
        "Supremo órgano consultivo del Gobierno",
        "Órgano de control contable del Ejecutivo",
        "Tribunal superior en materia de decretos-leyes",
        "Comisión delegada del Consejo de Ministros"
      ],
      "answer": 0,
      "explain": "Art. 107 CE: El Consejo de Estado es el supremo órgano consultivo del Gobierno. Una ley orgánica regulará su composición y competencia."
    },
    {
      "id": "w1-t6-b3",
      "q": "¿Qué órgano del Gobierno prepara las sesiones del Consejo de Ministros resolviendo asuntos administrativos?",
      "options": [
        "La Comisión General de Secretarios de Estado y Subsecretarios",
        "El Gabinete de la Presidencia del Gobierno",
        "La Comisión Delegada para Asuntos Económicos",
        "La Secretaría General Técnica del Ministerio de la Presidencia"
      ],
      "answer": 0,
      "explain": "Art. 8 Ley 50/1997: La Comisión General de Secretarios de Estado y Subsecretarios prepara las sesiones del Consejo de Ministros."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Mecanismos de Control Parlamentario",
    "prompt": "Empareja cada instrumento constitucional con su regla de mayoría.",
    "pairs": [
      [
        "Investidura (1ª votación)",
        "Mayoría absoluta del Congreso"
      ],
      [
        "Investidura (2ª votación, 48h)",
        "Mayoría simple del Congreso"
      ],
      [
        "Moción de censura (constructiva)",
        "Mayoría absoluta del Congreso"
      ],
      [
        "Cuestión de confianza",
        "Mayoría simple del Congreso"
      ]
    ]
  },
  "boss": {
    "name": "El Primer Ministro Ilegítimo",
    "kind": "king",
    "intro": [
      "¡Gobernaré por decreto sin responder ante las Cortes Generales!"
    ],
    "defeat": [
      "¡Moción de censura constructiva aprobada por mayoría absoluta (art. 113 CE)! Cese inmediato del Ejecutivo."
    ]
  },
  "summary": [
    "Investidura (art. 99): 1ª absoluta, 2ª simple (48h). 2 meses hasta disolución.",
    "Moción de censura (art. 113): constructiva (candidato), 1/10 proponentes, 5 días de plazo, mayoría absoluta.",
    "Cuestión de confianza (art. 112): mayoría simple del Congreso.",
    "Ley 50/1997: Presidente, Vicepresidentes, Ministros. Comisión General de Secretarios de Estado y Subsecretarios prepara el Consejo.",
    "Consejo de Estado (art. 107 CE): supremo órgano consultivo del Gobierno."
  ]
};

export const W1_T7: MiniWorldDef = {
  "id": "estado-t7",
  "num": 7,
  "temaTitle": "Tema 7: El Poder Judicial. El principio de unidad jurisdiccional. El Consejo General del Poder Judicial. La organización judicial española.",
  "name": "Palacio de la Magistratura",
  "emoji": "⚖️",
  "theme": "estado",
  "color": "#8e24aa",
  "enemy": "urna",
  "enemyName": "Sentencias arbitrarias",
  "npcs": [
    {
      "name": "Vocal Judicial",
      "role": "Poder Judicial, CGPJ y Ministerio Fiscal",
      "look": {
        "skin": "#f1c27d",
        "hair": "#ffffff",
        "hairStyle": "bald",
        "shirt": "#212121",
        "pants": "#000000",
        "acc": [
          "robe",
          "glasses"
        ],
        "accColor": "#ffffff"
      },
      "pages": [
        "El Título VI de la CE (arts. 117 a 127) y la LOPJ 6/1985 regulan el Poder Judicial. La justicia emana del pueblo y se administra en nombre del Rey por Jueces y Magistrados independientes, inamovibles, responsables y sometidos únicamente al imperio de la ley.",
        "Principio de unidad jurisdiccional: base de la organización de los tribunales. Prohibición de tribunales de excepción y de honor.",
        "El Consejo General del Poder Judicial (CGPJ, art. 122 CE) es el órgano de gobierno del Poder Judicial: Presidente del Tribunal Supremo + 20 vocales por 5 años (12 entre jueces y 8 juristas de reconocida competencia, elegidos por las Cortes por mayoría de 3/5).",
        "El Ministerio Fiscal (art. 124 CE y EOMF) promueve la acción de la justicia en defensa de la legalidad. Principios: unidad de actuación y dependencia jerárquica, con sujeción a la legalidad e imparcialidad. Fiscal General del Estado: nombrado por el Rey a propuesta del Gobierno, oído el CGPJ, por 4 años."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w1-t7-q1",
      "q": "¿Cuáles son los cuatro rasgos constitucionales del estatuto de Jueces y Magistrados (art. 117.1 CE)?",
      "options": [
        "Independientes, inamovibles, responsables y sometidos únicamente al imperio de la ley",
        "Inviolables, aforados, colegiados y soberanos",
        "Dependientes del Ministerio de Justicia, inamovibles y colegiados",
        "Elegidos por sufragio, inamovibles y revocables por el Parlamento"
      ],
      "answer": 0,
      "explain": "Art. 117.1 CE: La justicia se administra por Jueces y Magistrados integrantes del poder judicial, independientes, inamovibles, responsables y sometidos únicamente al imperio de la ley."
    },
    {
      "id": "w1-t7-q2",
      "q": "¿Cómo está compuesto el Consejo General del Poder Judicial según el artículo 122.3 CE?",
      "options": [
        "Por el Presidente del Tribunal Supremo, que lo preside, y por 20 miembros nombrados por el Rey por un período de 5 años",
        "Por 12 magistrados elegidos por el Congreso",
        "Por el Ministro de Justicia y 15 vocales",
        "Por 25 miembros vitalicios"
      ],
      "answer": 0,
      "explain": "Art. 122.3 CE: El CGPJ estará integrado por el Presidente del Tribunal Supremo, que lo presidirá, y por veinte miembros nombrados por el Rey por un período de cinco años."
    },
    {
      "id": "w1-t7-q3",
      "q": "¿Cuáles son los principios informadores del Ministerio Fiscal según el art. 124.2 CE?",
      "options": [
        "Unidad de actuación y dependencia jerárquica, con sujeción a la legalidad e imparcialidad",
        "Independencia orgánica y dispersión territorial",
        "Inamovilidad absoluta y colegiación judicial",
        "Subordinación plena al Tribunal Constitucional"
      ],
      "answer": 0,
      "explain": "Art. 124.2 CE: El Ministerio Fiscal ejerce sus funciones conforme a los principios de unidad de actuación y dependencia jerárquica y con sujeción, en todo caso, a los de legalidad e imparcialidad."
    }
  ],
  "bossQs": [
    {
      "id": "w1-t7-b1",
      "q": "¿Por qué mayoría de las Cámaras se eligen los 20 Vocales del Consejo General del Poder Judicial?",
      "options": [
        "Mayoría de tres quintos del Congreso y del Senado",
        "Mayoría absoluta de ambas Cámaras",
        "Dos tercios del Congreso exclusivamente",
        "Mayoría simple en segunda votación"
      ],
      "answer": 0,
      "explain": "Art. 122.3 CE y LOPJ: Los 20 vocales del CGPJ son nombrados por el Rey a propuesta del Congreso (10) y del Senado (10) por mayoría de tres quintos."
    },
    {
      "id": "w1-t7-b2",
      "q": "¿Cuál es el órgano jurisdiccional superior en todos los órdenes, salvo lo dispuesto en materia de garantías constitucionales?",
      "options": [
        "El Tribunal Supremo (art. 123 CE)",
        "La Audiencia Nacional",
        "El Tribunal Constitucional",
        "Los Tribunales Superiores de Justicia"
      ],
      "answer": 0,
      "explain": "Art. 123.1 CE: El Tribunal Supremo, con jurisdicción en toda España, es el órgano jurisdiccional superior en todos los órdenes, salvo lo dispuesto en materia de garantías constitucionales."
    },
    {
      "id": "w1-t7-b3",
      "q": "¿Cómo se nombra al Fiscal General del Estado según el art. 124.4 CE?",
      "options": [
        "Nombrado por el Rey, a propuesta del Gobierno, oído el CGPJ",
        "Elegido por las Cortes Generales por mayoría de 3/5",
        "Nombrado por el Pleno del Tribunal Supremo",
        "Designado directamente por el Presidente del Congreso"
      ],
      "answer": 0,
      "explain": "Art. 124.4 CE: El Fiscal General del Estado será nombrado por el Rey, a propuesta del Gobierno, oído el Consejo General del Poder Judicial."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Estatutos y Órganos de la Justicia",
    "prompt": "Empareja cada institución u operador jurídico con su principio rector esencial.",
    "pairs": [
      [
        "Jueces y Magistrados",
        "Independencia e inamovilidad"
      ],
      [
        "Ministerio Fiscal",
        "Unidad de actuación y dependencia jerárquica"
      ],
      [
        "CGPJ",
        "Órgano de gobierno del Poder Judicial (20 vocales, 5 años)"
      ],
      [
        "Tribunal Supremo",
        "Superior en todos los órdenes salvo materia constitucional"
      ]
    ]
  },
  "boss": {
    "name": "El Juez de Excepción",
    "kind": "ghost",
    "intro": [
      "¡He creado un tribunal especial ad hoc para juzgarte sin garantías!"
    ],
    "defeat": [
      "¡Art. 117.6 CE! Se prohíben expresamente los tribunales de excepción. Unidad jurisdiccional restaurada."
    ]
  },
  "summary": [
    "Poder Judicial: Independientes, inamovibles, responsables y sometidos únicamente a la ley (art. 117.1).",
    "CGPJ (art. 122): Presidente TS + 20 vocales elegidos por 5 años por mayoría de 3/5 de Congreso (10) y Senado (10).",
    "Tribunal Supremo (art. 123): cúspide judicial salvo garantías constitucionales (TC).",
    "Ministerio Fiscal (art. 124): legalidad e imparcialidad; unidad de actuación y dependencia jerárquica.",
    "Fiscal General: nombrado por el Rey a propuesta del Gobierno, oído el CGPJ (mandato 4 años)."
  ]
};

export const W1_T8: MiniWorldDef = {
  "id": "estado-t8",
  "num": 8,
  "temaTitle": "Tema 8: La Administración General del Estado. Principios de organización y funcionamiento. Órganos centrales. Órganos superiores y órganos directivos: creación, nombramiento, cese y funciones. Los servicios comunes de los ministerios. Órganos territoriales. La Administración del Estado en el Exterior.",
  "name": "Sede de los Ministerios",
  "emoji": "🏢",
  "theme": "estado",
  "color": "#1565c0",
  "enemy": "sello",
  "enemyName": "Trámites paralizantes",
  "npcs": [
    {
      "name": "Subdirector General",
      "role": "Estructura central y territorial de la AGE",
      "look": {
        "skin": "#f5d0a9",
        "hair": "#424242",
        "hairStyle": "short",
        "shirt": "#0277bd",
        "pants": "#37474f",
        "acc": [
          "tie",
          "glasses"
        ],
        "accColor": "#ffc107"
      },
      "pages": [
        "La Ley 40/2015 de Régimen Jurídico del Sector Público (LRJSP) regula la estructura organizativa de la Administración General del Estado (AGE).",
        "Clasificación jerárquica (art. 55 Ley 40/2015):",
        "1. Órganos superiores: Ministros y Secretarios de Estado. Establecen los planes de actuación.",
        "2. Órganos directivos: Subsecretarios y Secretarios Generales Técnicos (rango Subsecretario); Secretarios Generales (rango Subsecretario); Directores Generales; Subdirectores Generales (órgano directivo pero NO alto cargo).",
        "Nombramientos: Ministros por el Rey a propuesta del Presidente. Secretarios de Estado, Subsecretarios y Directores Generales por Real Decreto en Consejo de Ministros. Subdirectores Generales nombrados por el Ministro o Secretario de Estado entre funcionarios A1.",
        "Organización territorial: Delegados del Gobierno en las CCAA (rango de Subsecretario, nombrados por RD) y Subdelegados del Gobierno en las provincias (rango de Subdirector General, funcionarios A1 nombrados por el Delegado por libre designación)."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w1-t8-q1",
      "q": "¿Cuáles son los 'órganos superiores' de la Administración General del Estado según el art. 55.2 de la Ley 40/2015?",
      "options": [
        "Los Ministros y los Secretarios de Estado",
        "Los Ministros y los Subsecretarios",
        "Los Secretarios de Estado y los Directores Generales",
        "El Presidente y los Vicepresidentes exclusivamente"
      ],
      "answer": 0,
      "explain": "Art. 55.2 Ley 40/2015: Son órganos superiores los Ministros y los Secretarios de Estado."
    },
    {
      "id": "w1-t8-q2",
      "q": "¿Qué rango administrativo ostenta el Delegado del Gobierno en una Comunidad Autónoma?",
      "options": [
        "Rango de Subsecretario",
        "Rango de Secretario de Estado",
        "Rango de Director General",
        "Rango de Subdirector General"
      ],
      "answer": 0,
      "explain": "Art. 72.2 Ley 40/2015: Los Delegados del Gobierno en las CCAA tienen rango de Subsecretario y son nombrados por Real Decreto en Consejo de Ministros."
    },
    {
      "id": "w1-t8-q3",
      "q": "¿Quién nombra a los Subdelegados del Gobierno en las provincias y qué requisito profesional se exige?",
      "options": [
        "El Delegado del Gobierno en la Comunidad Autónoma por libre designación, entre funcionarios de carrera del Subgrupo A1",
        "El Consejo de Ministros por Real Decreto",
        "El Ministro de Política Territorial libremente",
        "El Presidente de la Diputación Provincial"
      ],
      "answer": 0,
      "explain": "Art. 74 Ley 40/2015: Los Subdelegados del Gobierno son nombrados por el Delegado del Gobierno por el procedimiento de libre designación entre funcionarios de carrera del Estado, de las CCAA o de las EELL, pertenecientes a Cuerpos clasificados en el Subgrupo A1."
    }
  ],
  "bossQs": [
    {
      "id": "w1-t8-b1",
      "q": "¿Cuál de los siguientes órganos directivos de la AGE NO tiene la consideración de 'alto cargo'?",
      "options": [
        "El Subdirector General",
        "El Director General",
        "El Secretario General Técnico",
        "El Subsecretario"
      ],
      "answer": 0,
      "explain": "Ley 3/2015 reguladora del ejercicio del alto cargo: Los Subdirectores Generales son órganos directivos pero NO tienen la consideración legal de alto cargo."
    },
    {
      "id": "w1-t8-b2",
      "q": "¿A qué órgano directivo ministerial le corresponde asesorar jurídicamente y coordinar las publicaciones y servicios comunes?",
      "options": [
        "A la Secretaría General Técnica",
        "A la Dirección General del Presupuesto",
        "Al Gabinete del Secretario de Estado",
        "A la Subdirección General de Recursos"
      ],
      "answer": 0,
      "explain": "Art. 65 Ley 40/2015: Los Secretarios Generales Técnicos tienen las competencias relativas a servicios comunes, producción normativa, asistencia jurídica y publicaciones."
    },
    {
      "id": "w1-t8-b3",
      "q": "¿Cómo se crean los Ministerios y Secretarías de Estado según el art. 57.1 de la Ley 40/2015?",
      "options": [
        "Por Real Decreto del Presidente del Gobierno",
        "Por Ley de Cortes Generales",
        "Por Real Decreto acordado en Consejo de Ministros",
        "Por Orden ministerial conjunta"
      ],
      "answer": 0,
      "explain": "Art. 57.1 Ley 40/2015: El número, denominación y ámbito de competencia de los Ministerios y Secretarías de Estado se establecen mediante Real Decreto del Presidente del Gobierno."
    }
  ],
  "mini": {
    "type": "order",
    "title": "Jerarquía Central de los Ministerios (Ley 40/2015)",
    "prompt": "Ordena los órganos ministeriales de mayor a menor jerarquía.",
    "items": [
      "Ministro (Órgano Superior)",
      "Secretario de Estado (Órgano Superior)",
      "Subsecretario / Secretario General (Órgano Directivo)",
      "Director General / Secretario General Técnico (Órgano Directivo)",
      "Subdirector General (Órgano Directivo, funcionario A1)"
    ]
  },
  "boss": {
    "name": "El Burocrático Sombrío",
    "kind": "veto",
    "intro": [
      "¡He nombrado a un Subdirector General sin oposición ni grupo A1!"
    ],
    "defeat": [
      "¡Art. 67 Ley 40/2015! Los Subdirectores Generales deben ser funcionarios de carrera del Subgrupo A1."
    ]
  },
  "summary": [
    "Órganos superiores: Ministros y Secretarios de Estado (art. 55.2 Ley 40/2015).",
    "Órganos directivos: Subsecretarios, Secretarios Generales, SGT, Directores Generales y Subdirectores Generales.",
    "Subdirector General: órgano directivo pero no alto cargo; funcionario A1.",
    "Creación de Ministerios y Secretarías de Estado: Real Decreto del Presidente del Gobierno (art. 57.1).",
    "Organización territorial: Delegado del Gobierno (rango Subsecretario, RD Consejo Ministros) y Subdelegado (rango Subdirector, A1, nombrado por Delegado)."
  ]
};

export const W1_T9: MiniWorldDef = {
  "id": "estado-t9",
  "num": 9,
  "temaTitle": "Tema 9: El sector público institucional: entidades que lo integran y régimen jurídico.",
  "name": "Fortaleza Institucional",
  "emoji": "⚙️",
  "theme": "estado",
  "color": "#0288d1",
  "enemy": "sello",
  "enemyName": "Entes fantasma",
  "npcs": [
    {
      "name": "Interventor Institucional",
      "role": "Sector público institucional y entes instrumentales",
      "look": {
        "skin": "#f2c199",
        "hair": "#2e2e2e",
        "hairStyle": "short",
        "shirt": "#00838f",
        "pants": "#1a237e",
        "acc": [
          "glasses",
          "tie"
        ],
        "accColor": "#ffffff"
      },
      "pages": [
        "El Título II de la Ley 40/2015 regula el Sector Público Institucional estatal (arts. 81 a 139).",
        "Tipología estatal:",
        "1. Organismos públicos: Organismos Autónomos (actividades administrativas, dependen de ministerio, régimen administrativo público, ej. SEPE o INAP) y Entidades Públicas Empresariales (EPE, actividades prestacionales o comerciales, régimen mercantil salvo ejercicio de potestades públicas, ej. ADIF o ENAIRE).",
        "2. Autoridades administrativas independientes (AAI): entidades de derecho público con independencia funcional (ej. CNMC, AEPD, CSN).",
        "3. Sociedades mercantiles estatales (SME): capital público >50% (ej. Correos, Navantia, RTVE). Régimen societario privado.",
        "4. Consorcios, Fundaciones del sector público estatal y Fondos carentes de personalidad jurídica."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w1-t9-q1",
      "q": "¿Cuál es la diferencia principal de régimen de personal entre un Organismo Autónomo y una EPE según la Ley 40/2015?",
      "options": [
        "En los Organismos Autónomos el personal es funcionario o laboral en los términos de la AGE; en las EPE se rige por Derecho laboral con excepciones",
        "En las EPE todo el personal debe ser funcionario del subgrupo A1",
        "Los Organismos Autónomos no pueden tener personal laboral",
        "No hay ninguna diferencia de régimen"
      ],
      "answer": 0,
      "explain": "Arts. 99 y 104 Ley 40/2015: En los Organismos Autónomos el personal es funcionario o laboral público; en las Entidades Públicas Empresariales se rige por el Derecho laboral, salvo los puestos con potestades públicas reservadas a funcionarios."
    },
    {
      "id": "w1-t9-q2",
      "q": "¿Cómo se crean los organismos públicos estatales según el artículo 91 de la Ley 40/2015?",
      "options": [
        "Por Ley de Cortes Generales",
        "Por Real Decreto del Presidente",
        "Por Orden ministerial",
        "Por acuerdo del Consejo de Ministros sin rango de ley"
      ],
      "answer": 0,
      "explain": "Art. 91 Ley 40/2015: La creación de los organismos públicos se efectuará por Ley, que establecerá sus fines generales, ministerio de adscripción y recursos económicos."
    },
    {
      "id": "w1-t9-q3",
      "q": "¿Qué porcentaje de participación estatal define a una sociedad mercantil estatal según la Ley 40/2015?",
      "options": [
        "Participación directa o indirecta del sector público estatal superior al 50 por 100",
        "Participación mayor al 25 por 100",
        "Propiedad del 100 por 100 indispensablemente",
        "Mayoría de miembros en el consejo sin importar el capital"
      ],
      "answer": 0,
      "explain": "Art. 111 Ley 40/2015: Aquella sobre la que se ejerce control estatal bien porque la participación directa o indirecta del sector público estatal sea superior al 50% o bien por control de la mayoría de votos."
    }
  ],
  "bossQs": [
    {
      "id": "w1-t9-b1",
      "q": "¿Qué instrumento es preceptivo para el seguimiento periódico y control de eficacia de los organismos públicos estatales?",
      "options": [
        "El plan de actuación plurianual y el control de eficacia por el ministerio de adscripción",
        "Una auditoría trimestral del Congreso de los Diputados",
        "La autorización anual del Defensor del Pueblo",
        "Un informe semestral del Tribunal Constitucional"
      ],
      "answer": 0,
      "explain": "Art. 85 y 92 Ley 40/2015: Los organismos públicos están sometidos a un control de eficacia y supervisión continua ejercido por el ministerio de adscripción a través de planes de actuación plurianuales."
    },
    {
      "id": "w1-t9-b2",
      "q": "¿Qué caracteriza a las Autoridades Administrativas Independientes (art. 109 Ley 40/2015)?",
      "options": [
        "Personalidad jurídica propia, independencia funcional y desvinculación de instrucciones del Gobierno",
        "Dependencia jerárquica directa del Ministro de Hacienda",
        "Ausencia absoluta de personalidad jurídica",
        "Estar integradas exclusivamente por personal militar"
      ],
      "answer": 0,
      "explain": "Art. 109 Ley 40/2015: Tienen personalidad jurídica propia, plena independencia funcional y actúan sin sujeción a instrucciones jerárquicas (ej. CNMC, AEPD)."
    },
    {
      "id": "w1-t9-b3",
      "q": "Las Fundaciones del sector público estatal (art. 128 Ley 40/2015):",
      "options": [
        "No podrán en ningún caso ejercer potestades públicas",
        "Pueden dictar actos administrativos sancionadores",
        "Están presididas obligatoriamente por el Presidente del Gobierno",
        "Se rigen exclusivamente por el Código Penal"
      ],
      "answer": 0,
      "explain": "Art. 128.3 Ley 40/2015: En ningún caso las fundaciones del sector público estatal podrán ejercer potestades públicas."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Entidades del Sector Público Institucional",
    "prompt": "Asocia cada tipo de entidad con su régimen jurídico definitorio.",
    "pairs": [
      [
        "Organismo Autónomo (ej. INAP)",
        "Derecho administrativo íntegro y personal funcionario/laboral"
      ],
      [
        "Entidad Pública Empresarial (ej. ADIF)",
        "Derecho privado con régimen de personal predominantemente laboral"
      ],
      [
        "Autoridad Administrativa Independiente",
        "Independencia funcional y sin instrucciones jerárquicas"
      ],
      [
        "Sociedad Mercantil Estatal",
        "Derecho mercantil privado societario (>50% capital público)"
      ]
    ]
  },
  "boss": {
    "name": "El Ente Fantasma",
    "kind": "ghost",
    "intro": [
      "¡He creado una entidad pública sin ley ni control presupuestario!"
    ],
    "defeat": [
      "¡Art. 91 Ley 40/2015! La creación exige ley formal y registro en el INVENTARIO de Entidades del Sector Público."
    ]
  },
  "summary": [
    "Organismos públicos: Organismos Autónomos (derecho administrativo público) y EPE (derecho privado, personal laboral). Creación por LEY (art. 91).",
    "Autoridades Administrativas Independientes (art. 109): independencia funcional (CNMC, AEPD).",
    "Sociedades Mercantiles Estatales (art. 111): capital público >50%, derecho privado.",
    "Fundaciones públicas (art. 128): jamás pueden ejercer potestades públicas.",
    "Supervisión continua e inventario estatal (INVENTARIO / REGEPA)."
  ]
};

export const W1_T10: MiniWorldDef = {
  "id": "estado-t10",
  "num": 10,
  "temaTitle": "Tema 10: Organización territorial (I): las Comunidades Autónomas. Los Estatutos de Autonomía. Organización política y administrativa. La delimitación de competencias entre el Estado y las Comunidades Autónomas en la Constitución y en los Estatutos de Autonomía.",
  "name": "Torre de las Autonomías",
  "emoji": "🗺️",
  "theme": "estado",
  "color": "#00897b",
  "enemy": "urna",
  "enemyName": "Conflictos competenciales",
  "npcs": [
    {
      "name": "Consejero de Autonomías",
      "role": "Organización de las CCAA y competencias",
      "look": {
        "skin": "#f3c9a0",
        "hair": "#4a2d18",
        "hairStyle": "bun",
        "shirt": "#00695c",
        "pants": "#004d40",
        "acc": [
          "scarf",
          "badge"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "El Título VIII de la CE diseña el Estado de las Autonomías. Principios: unidad de la Nación española, autonomía de nacionalidades y regiones, y solidaridad (art. 2).",
        "Estatutos de Autonomía: norma institucional básica de cada Comunidad (art. 147 CE). Forman parte del ordenamiento jurídico del Estado y se aprueban por Ley Orgánica.",
        "Distribución competencial:",
        "Art. 148 CE: materias que pueden ser asumidas por las CCAA.",
        "Art. 149.1 CE: competencias exclusivas del Estado (32 materias: relaciones internacionales, defensa, justicia, legislación mercantil y penal, etc.).",
        "Cláusula residual (art. 149.3): lo no atribuido expresamente al Estado podrá corresponder a las CCAA; la competencia sobre materias no asumidas por los Estatutos corresponderá al Estado.",
        "Cláusula de prevalencia y supletoriedad (art. 149.3): las normas del Estado prevalecerán en caso de conflicto; el derecho estatal será supletorio.",
        "Art. 155 CE: mecanismo de coerción estatal si una CA no cumple la CE o atenta gravemente al interés general (aprobación por mayoría absoluta del Senado)."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w1-t10-q1",
      "q": "¿Cuál es la naturaleza jurídica de los Estatutos de Autonomía según el art. 147.1 CE?",
      "options": [
        "Norma institucional básica de cada Comunidad Autónoma que el Estado reconoce y ampara como parte integrante de su ordenamiento",
        "Leyes ordinarias dictadas por el Parlamento autonómico",
        "Tratados internacionales bilaterales entre el Estado y la región",
        "Reglamentos administrativos coordinados"
      ],
      "answer": 0,
      "explain": "Art. 147.1 CE: Dentro de los términos de la presente Constitución, los Estatutos serán la norma institucional básica de cada Comunidad Autónoma y el Estado los reconocerá y amparará como parte integrante de su ordenamiento jurídico."
    },
    {
      "id": "w1-t10-q2",
      "q": "¿Qué regla establece la cláusula residual del artículo 149.3 de la Constitución?",
      "options": [
        "Las materias no atribuidas expresamente al Estado por la CE podrán corresponder a las CCAA en virtud de sus Estatutos",
        "Todas las materias no citadas corresponden siempre y de forma irreversible a los Ayuntamientos",
        "El Tribunal Supremo decide discrecionalmente a quién pertenece cada materia",
        "Las CCAA asumen de forma automática todas las competencias no penales"
      ],
      "answer": 0,
      "explain": "Art. 149.3 CE: Las materias no atribuidas expresamente al Estado por esta Constitución podrán corresponder a las Comunidades Autónomas, en virtud de sus respectivos Estatutos."
    },
    {
      "id": "w1-t10-q3",
      "q": "¿Qué mayoría parlamentaria y de qué Cámara se exige para aprobar las medidas de coerción del artículo 155 CE?",
      "options": [
        "Mayoría absoluta del Senado",
        "Mayoría de dos tercios del Congreso de los Diputados",
        "Mayoría simple del Congreso de los Diputados",
        "Mayoría absoluta de Congreso y Senado en sesión conjunta"
      ],
      "answer": 0,
      "explain": "Art. 155.1 CE: El Gobierno, previo requerimiento al Presidente de la Comunidad Autónoma y, en el caso de no ser atendido, con la aprobación por mayoría absoluta del Senado, podrá adoptar las medidas necesarias."
    }
  ],
  "bossQs": [
    {
      "id": "w1-t10-b1",
      "q": "¿Cuál de las siguientes materias es competencia exclusiva e indelegable del Estado según el art. 149.1 CE?",
      "options": [
        "Nacionalidad, inmigración, emigración, extranjería y derecho de asilo (149.1.2ª)",
        "Asistencia social y bienestar comunitario",
        "Artesanía, ferias interiores y folklore",
        "Promoción y ordenación del turismo regional"
      ],
      "answer": 0,
      "explain": "Art. 149.1.2ª CE: Nacionalidad, inmigración, emigración, extranjería y derecho de asilo es competencia exclusiva del Estado."
    },
    {
      "id": "w1-t10-b2",
      "q": "¿A través de qué tipo de ley pueden las Cortes atribuir a las CCAA la facultad de dictar normas legislativas en materias estatales fijando principios y bases?",
      "options": [
        "Ley marco (art. 150.1 CE)",
        "Ley de armonización (art. 150.3 CE)",
        "Ley de transferencia (art. 150.2 CE)",
        "Ley ordinaria de bases"
      ],
      "answer": 0,
      "explain": "Art. 150.1 CE: Las Cortes Generales, en materias de competencia estatal, podrán atribuir a todas o a alguna de las Comunidades Autónomas la facultad de dictar, para sí mismas, normas legislativas en el marco de los principios fijados por una ley marco."
    },
    {
      "id": "w1-t10-b3",
      "q": "¿Qué mayoría se exige a las Cámaras para apreciar el interés general y dictar leyes de armonización (art. 150.3 CE)?",
      "options": [
        "Mayoría absoluta de cada Cámara",
        "Tres quintos de cada Cámara",
        "Mayoría simple en el Congreso",
        "Unanimidad en el Senado"
      ],
      "answer": 0,
      "explain": "Art. 150.3 CE: Corresponde a las Cortes Generales, por mayoría absoluta de cada Cámara, la apreciación de la necesidad de armonizar disposiciones autonómicas por motivos de interés general."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Técnicas de Coordinación y Competencias Estatales (Art. 150 CE)",
    "prompt": "Relaciona cada precepto del art. 150 con su instrumento legal correspondiente.",
    "pairs": [
      [
        "Art. 150.1 CE (Facultad de dictar leyes autonómicas en marco estatal)",
        "Leyes marco"
      ],
      [
        "Art. 150.2 CE (Transferencia o delegación de facultades estatales)",
        "Ley Orgánica de transferencia o delegación"
      ],
      [
        "Art. 150.3 CE (Armonización de normas autonómicas por interés general)",
        "Leyes de armonización (mayoría absoluta cada Cámara)"
      ],
      [
        "Art. 155 CE (Coerción estatal por incumplimiento grave)",
        "Acuerdo por mayoría absoluta del Senado"
      ]
    ]
  },
  "boss": {
    "name": "El Insurrecto Competencial",
    "kind": "ogre",
    "intro": [
      "¡Desobedeceré la Constitución y el Estado no tiene herramientas para impedirlo!"
    ],
    "defeat": [
      "¡Art. 155 CE! El Senado ha otorgado la mayoría absoluta al Gobierno para restaurar el cumplimiento constitucional."
    ]
  },
  "summary": [
    "Estatutos de Autonomía (art. 147): norma institucional básica de la CA; se aprueban por Ley Orgánica.",
    "Competencias: art. 148 (materias asumibles CCAA); art. 149.1 (competencias exclusivas Estado, 32 materias).",
    "Cláusula residual, prevalencia y supletoriedad (art. 149.3).",
    "Técnicas de alteración competencial (art. 150): leyes marco (150.1), LO de transferencia/delegación (150.2), leyes de armonización (150.3).",
    "Coerción estatal (art. 155): requerimiento previo + mayoría absoluta del Senado."
  ]
};

export const W1_T11: MiniWorldDef = {
  "id": "estado-t11",
  "num": 11,
  "temaTitle": "Tema 11: Organización territorial (II): la Administración local: entidades que la integran. La autonomía local. El municipio: organización y competencias. La provincia: organización y competencias.",
  "name": "Plaza Consistorial y Local",
  "emoji": "🏘️",
  "theme": "estado",
  "color": "#2e7d32",
  "enemy": "urna",
  "enemyName": "Tránsfugas municipales",
  "npcs": [
    {
      "name": "Secretaria Municipal",
      "role": "Administración Local: Municipio y Provincia",
      "look": {
        "skin": "#f5d0a9",
        "hair": "#3e2723",
        "hairStyle": "bun",
        "shirt": "#1b5e20",
        "pants": "#2e7d32",
        "acc": [
          "glasses",
          "badge"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "El Título VIII de la CE (arts. 140 a 142) y la Ley 7/1985 reguladora de las Bases del Régimen Local (LRBRL) consagran la autonomía local.",
        "El Municipio: entidad local básica. Elementos: territorio (término municipal), población (padrón municipal) y organización.",
        "Gobierno municipal: Alcalde y Concejales (elegidos por sufragio universal). Los Concejales eligen al Alcalde por mayoría absoluta.",
        "Órganos básicos: Alcalde, Tenientes de Alcalde y Pleno (en todos los ayuntamientos); Junta de Gobierno Local obligatoria en municipios de más de 5.000 habitantes o en los de régimen de gran población (Título X LRBRL).",
        "La Provincia: entidad local determinada por la agrupación de municipios y división territorial para el cumplimiento de actividades del Estado (art. 141 CE). Gobierno: Diputación u otras Corporaciones de carácter representativo (en islas, Cabildos o Consejos)."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w1-t11-q1",
      "q": "¿Cuáles son los tres elementos esenciales constitutivos del municipio según la LRBRL?",
      "options": [
        "El término municipal, la población y la organización",
        "El Alcalde, el Pleno y el Secretario",
        "El presupuesto, el patrimonio y la policía local",
        "La provincia, la comarca y la mancomunidad"
      ],
      "answer": 0,
      "explain": "Art. 11.2 LRBRL: Son elementos del Municipio el término municipal, la población y la organización."
    },
    {
      "id": "w1-t11-q2",
      "q": "¿En qué municipios es preceptiva la existencia de la Junta de Gobierno Local según la Ley 7/1985?",
      "options": [
        "En los municipios con población superior a 5.000 habitantes y en los de menor si así lo dispone su reglamento o lo acuerda el Pleno",
        "En todos los municipios sin excepción",
        "Únicamente en las capitales de provincia",
        "Sólo en municipios de más de 50.000 habitantes"
      ],
      "answer": 0,
      "explain": "Art. 20.1.b LRBRL: La Junta de Gobierno Local existe en todos los municipios con población superior a 5.000 habitantes y en los de menos cuando así lo disponga su reglamento orgánico o lo acuerde el Pleno."
    },
    {
      "id": "w1-t11-q3",
      "q": "¿Cómo se elige al Alcalde según la legislación electoral de régimen local (LOREG art. 196)?",
      "options": [
        "Los Concejales eligen entre los candidatos que encabezan sus listas; si uno obtiene mayoría absoluta es proclamado; si no, es Alcalde el que encabeza la lista más votada",
        "Por votación popular directa en urna separada en todos los casos",
        "Es nombrado por el Delegado del Gobierno",
        "Por sorteo entre los tres concejales de más edad"
      ],
      "answer": 0,
      "explain": "Art. 196 LOREG: Pueden ser candidatos los concejales cabezas de lista. Si alguno obtiene la mayoría absoluta es proclamado Alcalde; si ninguno la obtiene, es proclamado el concejal que encabece la lista con más votos populares."
    }
  ],
  "bossQs": [
    {
      "id": "w1-t11-b1",
      "q": "¿Cómo se garantiza la autonomía de los municipios según el artículo 140 de la Constitución Española?",
      "options": [
        "Tienen personalidad jurídica plena y su gobierno y administración corresponde a sus respectivos Ayuntamientos",
        "Dependen jerárquicamente de la Consejería de Interior autonómica",
        "Pueden dictar leyes orgánicas municipales",
        "No gozan de autonomía financiera ni de gestión"
      ],
      "answer": 0,
      "explain": "Art. 140 CE: La Constitución garantiza la autonomía de los municipios. Estos gozarán de personalidad jurídica plena. Su gobierno y administración corresponde a sus respectivos Ayuntamientos."
    },
    {
      "id": "w1-t11-b2",
      "q": "¿Qué órgano de gobierno corresponde a las islas en los archipiélagos canario y balear según el art. 141.4 CE?",
      "options": [
        "Cabildos en Canarias y Consejos Insulares en Baleares",
        "Diputaciones Provinciales insulares",
        "Subdelegaciones insulares exclusivamente",
        "Juntas comarcales dependientes del Estado"
      ],
      "answer": 0,
      "explain": "Art. 141.4 CE: En los archipiélagos, las islas tendrán además su administración propia en forma de Cabildos o Consejos."
    },
    {
      "id": "w1-t11-b3",
      "q": "¿Qué título de la Ley 7/1985 regula el régimen de los municipios de gran población?",
      "options": [
        "El Título X",
        "El Título V",
        "El Título II",
        "El Título VIII"
      ],
      "answer": 0,
      "explain": "El Título X de la LRBRL (añadido por Ley 57/2003 de medidas para la modernización del gobierno local) regula el régimen de los municipios de gran población."
    }
  ],
  "mini": {
    "type": "order",
    "title": "Competencias Mínimas según Población (Art. 26 LRBRL)",
    "prompt": "Ordena los servicios públicos obligatorios según el umbral de población que los exige.",
    "items": [
      "Todos los municipios: Alumbrado público, cementerio, recogida de residuos, limpieza viaria, agua potable, alcantarillado, accesos y pavimentación",
      "Población > 5.000 habitantes: Parque público, biblioteca pública y tratamiento de residuos",
      "Población > 20.000 habitantes: Protección civil, evaluación y atención a necesidades sociales, prevención/extinción de incendios e instalaciones deportivas",
      "Población > 50.000 habitantes: Transporte colectivo urbano y medio ambiente urbano"
    ]
  },
  "boss": {
    "name": "El Cacique Territorial",
    "kind": "king",
    "intro": [
      "¡En este municipio no habrá plenos ni padrón público! ¡Gobierno a mi antojo!"
    ],
    "defeat": [
      "¡Art. 140 CE y LRBRL! La soberanía municipal y la transparencia legal han disuelto el caciquismo."
    ]
  },
  "summary": [
    "Municipio (arts. 140 CE y 11 LRBRL): término municipal, población y organización. Personalidad jurídica plena.",
    "Órganos necesarios: Alcalde, Tenientes de Alcalde, Pleno. Junta de Gobierno obligatoria en >5.000 habitantes.",
    "Elección de Alcalde (art. 196 LOREG): mayoría absoluta de concejales o lista más votada.",
    "Provincia (art. 141 CE): entidad local y división territorial del Estado. Diputaciones Provinciales (Cabildos en Canarias, Consejos en Baleares).",
    "Servicios mínimos municipales graduados por tramos de población (art. 26 LRBRL: todos, >5.000, >20.000, >50.000)."
  ]
};

export const W1: WorldDef = {
  id: "estado",
  num: 1,
  bloque: "Bloque I",
  title: "I. Organización del Estado y de la Administración Pública",
  name: "Reino Constitucional",
  emoji: "📜",
  theme: "estado",
  color: "#e0463a",
  enemy: "urna",
  enemyName: "Urnas rebeldes",
  temas: [
    "Tema 1: La Constitución Española de 1978: estructura y contenido. La reforma de la Constitución.",
    "Tema 2: Derechos y deberes fundamentales. Su garantía y suspensión. El Defensor del Pueblo.",
    "Tema 3: El Tribunal Constitucional. Organización, composición y atribuciones.",
    "Tema 4: La Corona. Funciones constitucionales del Rey. Sucesión y regencia. El refrendo.",
    "Tema 5: El poder legislativo. Las Cortes Generales. Composición y atribuciones del Congreso de los Diputados y del Senado.",
    "Tema 6: El poder ejecutivo. El Presidente del Gobierno y el Consejo de Ministros. Relaciones entre el Gobierno y las Cortes Generales. Designación, causas de cese y responsabilidad del Gobierno. El Consejo de Estado.",
    "Tema 7: El Poder Judicial. El principio de unidad jurisdiccional. El Consejo General del Poder Judicial. La organización judicial española.",
    "Tema 8: La Administración General del Estado. Principios de organización y funcionamiento. Órganos centrales. Órganos superiores y órganos directivos: creación, nombramiento, cese y funciones. Los servicios comunes de los ministerios. Órganos territoriales. La Administración del Estado en el Exterior.",
    "Tema 9: El sector público institucional: entidades que lo integran y régimen jurídico.",
    "Tema 10: Organización territorial (I): las Comunidades Autónomas. Los Estatutos de Autonomía. Organización política y administrativa. La delimitación de competencias entre el Estado y las Comunidades Autónomas en la Constitución y en los Estatutos de Autonomía.",
    "Tema 11: Organización territorial (II): la Administración local: entidades que la integran. La autonomía local. El municipio: organización y competencias. La provincia: organización y competencias."
],
  miniWorlds: [W1_T1, W1_T2, W1_T3, W1_T4, W1_T5, W1_T6, W1_T7, W1_T8, W1_T9, W1_T10, W1_T11],
  npcs: [
    W1_T1.npcs[0],
    W1_T2.npcs[0],
    W1_T3.npcs[0],
    W1_T4.npcs[0]
  ],
  blockQs: [
    W1_T1.blockQs[0],
    W1_T2.blockQs[0],
    W1_T3.blockQs[0],
    W1_T4.blockQs[0],
    W1_T5.blockQs[0],
    W1_T6.blockQs[0],
    W1_T7.blockQs[0],
    W1_T8.blockQs[0],
    W1_T9.blockQs[0],
    W1_T10.blockQs[0],
    W1_T11.blockQs[0]
  ],
  bossQs: [
    W1_T1.bossQs[0],
    W1_T2.bossQs[0],
    W1_T3.bossQs[0],
    W1_T4.bossQs[0],
    W1_T5.bossQs[0],
    W1_T6.bossQs[0],
    W1_T7.bossQs[0],
    W1_T8.bossQs[0]
  ],
  mini: {
  "type": "order",
  "title": "Gran Desafío del Bloque I: La Pirámide Constitucional",
  "prompt": "Ordena los Títulos clave de la Constitución Española de 1978.",
  "items": [
    "Título Preliminar (Principios generales)",
    "Título I (Derechos y deberes fundamentales)",
    "Título II (De la Corona)",
    "Título III (De las Cortes Generales)",
    "Título IV (Del Gobierno y la Administración)",
    "Título VIII (Organización territorial del Estado)",
    "Título IX (Del Tribunal Constitucional)",
    "Título X (De la reforma constitucional)"
  ]
},
  boss: {
  "name": "Absolutus, el Rey Absoluto",
  "kind": "king",
  "intro": [
    "¡JA, JA, JA! ¡Yo soy el Estado! ¡Aquí no hay Constitución ni división de poderes que valga!",
    "Para destronarme tendrás que demostrar tu dominio de los 11 temas del Bloque I. ¡Acepta el desafío!"
  ],
  "defeat": [
    "¡Imposible! La soberanía nacional reside en el pueblo español (art. 1.2 CE)... ¡El Estado de Derecho prevalece!"
  ]
},
  summary: [
  "CE 1978: Aprobada 31/10/78, referéndum 06/12/78, en vigor 29/12/78. Reforma arts. 167 (3/5) y 168 (2/3 + disolución + referéndum).",
  "Derechos fundamentales: art. 14 igualdad; arts. 15-29 máxima protección (preferente y sumario + amparo TC). Defensor del Pueblo: 5 años, 3/5 Cortes.",
  "Tribunal Constitucional: 12 magistrados, 9 años, renovados por tercios cada 3 años (art. 159).",
  "Corona (art. 56): inviolable, actos refrendados salvo Casa Real y dotación libre.",
  "Cortes Generales: Congreso (350 diputados) y Senado. Períodos art. 73. Inviolabilidad e inmunidad.",
  "Gobierno (art. 98): Presidente, Vicepresidentes, Ministros. Investidura art. 99, Moción de censura art. 113 (constructiva, mayoría absoluta).",
  "Poder Judicial: Independientes, inamovibles, responsables y sometidos a la ley. CGPJ: 20 miembros por 3/5 de las Cámaras.",
  "AGE (Ley 40/2015): Órganos superiores (Ministros, Secretarios de Estado) y directivos (Subsecretarios, DG, Subdirectores A1). Delegados (Subsecretario) y Subdelegados (Subdirector, A1).",
  "Sector público institucional: Organismos Autónomos (admon pública), EPE (privado/laboral), AAI (independientes) y SME (>50%).",
  "CCAA: Estatutos LO. Competencias arts. 148 y 149.1. Cláusula residual 149.3. Coerción art. 155 (Senado absoluta).",
  "Administración Local (Ley 7/1985): Municipio (término, población, organización) y Provincia (Diputación/Cabildo/Consejo). Elección de Alcalde art. 196 LOREG."
],
};
