import type { MiniWorldDef, Question, WorldDef } from "./types";

export const Q = (id: string, q: string, options: string[], answer: number, explain: string): Question => ({
  id,
  q,
  options,
  answer,
  explain,
});

/* ==================== BLOQUE III: POLÍTICAS PÚBLICAS (10 TEMAS BOE) ==================== */

export const W3_T1: MiniWorldDef = {
  "id": "politicas-t1",
  "num": 1,
  "temaTitle": "Tema 1: Políticas de modernización de la Administración General del Estado. La Administración electrónica. Acceso electrónico de los ciudadanos a los servicios públicos. La Agenda Digital para España. La calidad de los servicios públicos y de atención al ciudadano. Mejora Regulatoria y Análisis de Impacto Normativo.",
  "name": "Valle de la Administración Digital",
  "emoji": "💻",
  "theme": "politicas",
  "color": "#10b981",
  "enemy": "nube",
  "enemyName": "Brechas digitales",
  "npcs": [
    {
      "name": "Ingeniera de Modernización",
      "role": "Administración electrónica y calidad de servicios",
      "look": {
        "skin": "#f3c9a0",
        "hair": "#2e2e2e",
        "hairStyle": "curly",
        "shirt": "#059669",
        "pants": "#065f46",
        "acc": [
          "headset",
          "glasses"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "La modernización de la AGE descansa en la Ley 39/2015 (arts. 13 y 14) y la Ley 40/2015 (Esquema Nacional de Interoperabilidad ENI y Esquema Nacional de Seguridad ENS, RD 311/2022).",
        "Sujetos obligados a relacionarse electrónicamente con la Administración (art. 14.2 Ley 39/2015): personas jurídicas, entidades sin personalidad, profesionales de colegiación obligatoria, empleados públicos y quienes reglamentariamente se determine.",
        "Punto de Acceso General electrónico (PAGe) y Carpeta Ciudadana: ventanilla única virtual para consultar expedientes, notificaciones y citas.",
        "Mejora regulatoria: Ley 50/1997 (art. 26) y RD 931/2017: Memoria del Análisis de Impacto Normativo (MAIN), consulta pública previa y evaluación ex post."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w3-t1-q1",
      "q": "¿Cuál de los siguientes sujetos NO está obligado a relacionarse electrónicamente con la Administración según el art. 14.2 Ley 39/2015?",
      "options": [
        "Una persona física particular para solicitar una beca general",
        "Una sociedad de responsabilidad limitada (persona jurídica)",
        "Un notario o procurador en el ejercicio de su profesión",
        "Una comunidad de bienes sin personalidad jurídica"
      ],
      "answer": 0,
      "explain": "Art. 14.1 y 14.2 Ley 39/2015: Las personas físicas pueden elegir si se relacionan por medios electrónicos o no, salvo que reglamentariamente se les obligue por su capacidad económica o técnica. Las personas jurídicas y colectivos profesionales sí están obligados ex lege."
    },
    {
      "id": "w3-t1-q2",
      "q": "¿Qué documento preceptivo debe acompañar a todo anteproyecto de ley o proyecto de reglamento estatal según el art. 26 Ley 50/1997?",
      "options": [
        "La Memoria del Análisis de Impacto Normativo (MAIN)",
        "El acta de comparecencia del Defensor del Pueblo",
        "El certificado de conformidad del Tribunal de Cuentas",
        "El plan de contingencia económica municipal"
      ],
      "answer": 0,
      "explain": "Art. 26.3 Ley 50/1997: Todo proyecto normativo debe ir acompañado de la Memoria del Análisis de Impacto Normativo (MAIN) que justifica la oportunidad, impacto económico y presupuestario y de género."
    },
    {
      "id": "w3-t1-q3",
      "q": "¿Qué norma actual regula el Esquema Nacional de Seguridad (ENS) en el ámbito de la Administración electrónica?",
      "options": [
        "El Real Decreto 311/2022, de 3 de mayo",
        "El Real Decreto 3/2010, de 8 de enero",
        "La Ley 11/2007, de 22 de junio",
        "La Orden HAP/547/2013"
      ],
      "answer": 0,
      "explain": "El Real Decreto 311/2022, de 3 de mayo, aprobó y actualizó el Esquema Nacional de Seguridad (ENS) adaptándolo a los nuevos retos de ciberseguridad."
    }
  ],
  "bossQs": [
    {
      "id": "w3-t1-b1",
      "q": "¿En qué plataforma se concentran las notificaciones electrónicas de la Administración General del Estado?",
      "options": [
        "Dirección Electrónica Habilitada única (DEHú) / Notifica",
        "En el Registro Mercantil Central",
        "En el buzón físico postal",
        "En la red social institucional oficial"
      ],
      "answer": 0,
      "explain": "La Dirección Electrónica Habilitada única (DEHú) y la plataforma Notifica centralizan el envío y comparecencia de notificaciones electrónicas en la AGE."
    },
    {
      "id": "w3-t1-b2",
      "q": "¿A través de qué portal oficial se tramita la consulta pública previa y la audiencia de proyectos normativos de la AGE?",
      "options": [
        "El Punto de Acceso General (PAGe) / sección de Participación Pública",
        "El portal privado del Congreso",
        "El Boletín Oficial del Registro Mercantil",
        "La página web del Tribunal Supremo"
      ],
      "answer": 0,
      "explain": "Las consultas públicas previas y audiencias se publican en el portal web del departamento competente y en el Punto de Acceso General electrónico."
    },
    {
      "id": "w3-t1-b3",
      "q": "¿Qué instrumento garantiza la interoperabilidad de datos y sistemas entre distintas Administraciones públicas en España?",
      "options": [
        "El Esquema Nacional de Interoperabilidad (ENI, RD 4/2010)",
        "El Registro Civil Central",
        "La Ley General Tributaria",
        "El Código Civil"
      ],
      "answer": 0,
      "explain": "El Esquema Nacional de Interoperabilidad (ENI), regulado por RD 4/2010 en el marco del art. 156 Ley 40/2015, garantiza el intercambio homogéneo de información y documentos entre AAPP."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Sujetos y Medios de la Administración Electrónica",
    "prompt": "Empareja cada concepto de la Ley 39/2015 con su régimen jurídico aplicable.",
    "pairs": [
      [
        "Personas jurídicas",
        "Obligación de relación electrónica en todo caso (art. 14.2)"
      ],
      [
        "Personas físicas (regla general)",
        "Derecho de opción entre medio electrónico o papel (art. 14.1)"
      ],
      [
        "MAIN",
        "Memoria obligatoria que acompaña a anteproyectos de ley y reglamentos"
      ],
      [
        "ENS (RD 311/2022)",
        "Esquema que garantiza la seguridad y confianza en servicios digitales"
      ]
    ]
  },
  "boss": {
    "name": "El Bloqueador Analógico",
    "kind": "cloud",
    "intro": [
      "¡Obligaré a presentar 10 copias en papel y fotocopia del DNI físico!"
    ],
    "defeat": [
      "¡Art. 28 Ley 39/2015! Los ciudadanos tienen derecho a no aportar documentos ya elaborados por cualquier Administración pública."
    ]
  },
  "summary": [
    "Obligados a relacionarse electrónicamente (art. 14.2 Ley 39/2015): personas jurídicas, entidades sin personalidad, colegiados obligatorios, empleados públicos.",
    "Personas físicas: regla general de derecho de opción (art. 14.1).",
    "Derecho a no aportar documentos en poder de la Administración (art. 28 Ley 39/2015).",
    "Seguridad e interoperabilidad: ENS (RD 311/2022) y ENI (RD 4/2010).",
    "Mejora regulatoria: MAIN preceptiva (art. 26 Ley 50/1997) y consulta pública previa."
  ]
};

export const W3_T2: MiniWorldDef = {
  "id": "politicas-t2",
  "num": 2,
  "temaTitle": "Tema 2: Política económica actual. Política presupuestaria. Evolución y distribución actual del gasto público. Política fiscal. La unidad de mercado.",
  "name": "Mercado y Política Fiscal",
  "emoji": "📈",
  "theme": "politicas",
  "color": "#059669",
  "enemy": "moneda",
  "enemyName": "Fragmentadores de mercado",
  "npcs": [
    {
      "name": "Analista Económico",
      "role": "Política presupuestaria, fiscal y unidad de mercado",
      "look": {
        "skin": "#fcd5b5",
        "hair": "#4b5563",
        "hairStyle": "short",
        "shirt": "#047857",
        "pants": "#1f2937",
        "acc": [
          "tie",
          "glasses"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "La política económica y fiscal busca el crecimiento sostenible, la creación de empleo y la estabilidad macroeconómica en el marco de la UEM.",
        "Ley Orgánica 2/2012 de Estabilidad Presupuestaria y Sostenibilidad Financiera (desarrollo del art. 135 CE): principios de estabilidad presupuestaria (equilibrio o superávit estructural), sostenibilidad financiera, regla de gasto y transparencia.",
        "Política fiscal: progresividad y equidad (art. 31 CE: sistema tributario justo inspirado en los principios de igualdad y progresividad que en ningún caso tendrá alcance confiscatorio).",
        "Ley 20/2013 de Garantía de la Unidad de Mercado (LGUM): principio de eficacia en todo el territorio nacional, no discriminación y libre circulación y establecimiento."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w3-t2-q1",
      "q": "¿Qué principios consagra el artículo 31.1 de la Constitución para el sistema tributario?",
      "options": [
        "Igualdad y progresividad, sin que en ningún caso tenga alcance confiscatorio",
        "Tipo único proporcional sin deducciones",
        "Recaudación regresiva y libertad de exenciones",
        "Soberanía plena de cada ayuntamiento para fijar IRPF"
      ],
      "answer": 0,
      "explain": "Art. 31.1 CE: Todos contribuirán al sostenimiento de los gastos públicos de acuerdo con su capacidad económica mediante un sistema tributario justo inspirado en los principios de igualdad y progresividad que, en ningún caso, tendrá alcance confiscatorio."
    },
    {
      "id": "w3-t2-q2",
      "q": "¿Cuál es el principio rector de la Ley 20/2013 de Garantía de la Unidad de Mercado?",
      "options": [
        "Principio de eficacia en todo el territorio nacional de las licencias y cualificaciones",
        "Obligación de solicitar autorización en cada municipio de destino",
        "Restricción absoluta de empresas comunitarias",
        "Aranceles interautonómicos de compensación"
      ],
      "answer": 0,
      "explain": "Art. 6 Ley 20/2013: Cualquier operador legalmente establecido en una parte del territorio español podrá ejercer su actividad en todo el territorio nacional (principio de eficacia nacional)."
    },
    {
      "id": "w3-t2-q3",
      "q": "¿Qué instrumento fija el límite máximo de gasto no financiero en los Presupuestos Generales del Estado (techo de gasto)?",
      "options": [
        "Acuerdo del Consejo de Ministros remitido a las Cortes Generales según la LO 2/2012",
        "Decreto unilateral del Banco de España",
        "Orden del Tribunal de Cuentas",
        "Resolución de la Comisión Europea sin debate parlamentario"
      ],
      "answer": 0,
      "explain": "Art. 30 LO 2/2012: El Gobierno fijará el límite de gasto no financiero del presupuesto del Estado (techo de gasto) con el que debe cuadrar el proyecto de PGE."
    }
  ],
  "bossQs": [
    {
      "id": "w3-t2-b1",
      "q": "¿Qué exige el artículo 135 de la Constitución respecto al pago de la deuda pública y sus intereses?",
      "options": [
        "Gozará siempre de prioridad absoluta sobre cualquier otro gasto en los presupuestos",
        "Puede suspenderse por acuerdo del Consejo de Ministros",
        "Sólo se abona si existe superávit primario",
        "Se supedita al gasto en sanidad y educación"
      ],
      "answer": 0,
      "explain": "Art. 135.3 CE: Los créditos para satisfacer los intereses y el capital de la deuda pública de las Administraciones se entenderán siempre incluidos en el estado de gastos de sus presupuestos y su pago gozará de prioridad absoluta."
    },
    {
      "id": "w3-t2-b2",
      "q": "¿Qué institución independiente vela en España por el cumplimiento de la disciplina fiscal y la sostenibilidad de las finanzas?",
      "options": [
        "La Autoridad Independiente de Responsabilidad Fiscal (AIReF, LO 6/2013)",
        "La Comisión Nacional de los Mercados y la Competencia",
        "El Consejo Económico y Social",
        "La Fábrica Nacional de Moneda y Timbre"
      ],
      "answer": 0,
      "explain": "La AIReF, creada por LO 6/2013, tiene por objeto garantizar el cumplimiento efectivo por las Administraciones públicas del principio de estabilidad presupuestaria mediante la evaluación continua del ciclo presupuestario."
    },
    {
      "id": "w3-t2-b3",
      "q": "¿Qué principio de la LO 2/2012 limita el crecimiento del gasto computable a la tasa de referencia de crecimiento del PIB a medio plazo?",
      "options": [
        "La regla de gasto (art. 12 LO 2/2012)",
        "El principio de caja única",
        "El principio de no afectación de ingresos",
        "El principio de devengo contable"
      ],
      "answer": 0,
      "explain": "Art. 12 LO 2/2012: La variación del gasto computable de las Administraciones públicas no podrá superar la tasa de referencia de crecimiento del Producto Interior Bruto a medio plazo (regla de gasto)."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Pilares de la Política Económica y Fiscal",
    "prompt": "Empareja cada norma o principio con su contenido sustantivo.",
    "pairs": [
      [
        "Art. 135 CE",
        "Prioridad absoluta del pago de la deuda pública e intereses"
      ],
      [
        "LO 2/2012 (Estabilidad)",
        "Equilibrio estructural, regla de gasto y sostenibilidad de la deuda"
      ],
      [
        "Ley 20/2013 (Unidad Mercado)",
        "Eficacia en todo el territorio nacional de autorizaciones y títulos"
      ],
      [
        "AIReF (LO 6/2013)",
        "Supervisión fiscal independiente del ciclo presupuestario"
      ]
    ]
  },
  "boss": {
    "name": "El Fragmentador de Mercado",
    "kind": "veto",
    "intro": [
      "¡Exigiré una licencia distinta en cada pueblo para impedir el comercio nacional!"
    ],
    "defeat": [
      "¡Ley 20/2013 de Unidad de Mercado! Principio de eficacia nacional y libre circulación económica restaurados."
    ]
  },
  "summary": [
    "Constitución económica: art. 31 (capacidad, igualdad, progresividad, no confiscatoriedad), art. 38 (libertad de empresa) y art. 135 (estabilidad y prioridad absoluta de deuda).",
    "LO 2/2012: estabilidad presupuestaria, sostenibilidad financiera, regla de gasto y transparencia.",
    "AIReF (LO 6/2013): evaluación fiscal independiente del ciclo presupuestario de todas las AAPP.",
    "Unidad de Mercado (Ley 20/2013): eficacia en todo el territorio nacional de autorizaciones y cualificaciones."
  ]
};

export const W3_T3: MiniWorldDef = {
  "id": "politicas-t3",
  "num": 3,
  "temaTitle": "Tema 3: Política ambiental. Distribución de competencias. Conservación de la biodiversidad. Prevención de la contaminación y el cambio climático.",
  "name": "Santuario Ecológico",
  "emoji": "🌿",
  "theme": "politicas",
  "color": "#047857",
  "enemy": "nube",
  "enemyName": "Emisiones contaminantes",
  "npcs": [
    {
      "name": "Bióloga Ambiental",
      "role": "Biodiversidad, clima y transición ecológica",
      "look": {
        "skin": "#f5c6a5",
        "hair": "#2e2e2e",
        "hairStyle": "long",
        "shirt": "#065f46",
        "pants": "#064e3b",
        "acc": [
          "visor",
          "badge"
        ],
        "accColor": "#a7f3d0"
      },
      "pages": [
        "El art. 45 CE consagra el derecho a disfrutar de un medio ambiente adecuado para el desarrollo de la persona, así como el deber de conservarlo. Los poderes públicos velarán por la utilización racional de los recursos naturales.",
        "Distribución de competencias (art. 149.1.23ª CE): el Estado tiene competencia exclusiva sobre 'legislación básica sobre protección del medio ambiente, sin perjuicio de las facultades de las CCAA de establecer normas adicionales de protección'. Las CCAA ostentan la gestión y desarrollo normativo.",
        "Ley 7/2021 de cambio climático y transición energética: objetivo de neutralidad climática a más tardar en 2050, fomento de energías renovables y zonas de bajas emisiones (ZBE) en municipios de más de 50.000 habitantes.",
        "Ley 42/2007 del Patrimonio Natural y de la Biodiversidad: Catálogo Español de Especies Amenazadas y Red Natura 2000.",
        "Ley 21/2013 de evaluación ambiental: evaluación ambiental estratégica (planes y programas) y evaluación de impacto ambiental (proyectos)."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w3-t3-q1",
      "q": "¿Cómo se distribuyen las competencias ambientales según el artículo 149.1.23ª de la Constitución?",
      "options": [
        "Legislación básica el Estado, pudiendo las CCAA dictar normas adicionales de protección y la gestión",
        "Competencia exclusiva y excluyente del Estado en todas las facetas",
        "Competencia íntegra y exclusiva de los municipios",
        "El Estado solo gestiona los parques zoológicos"
      ],
      "answer": 0,
      "explain": "Art. 149.1.23ª CE: El Estado tiene competencia exclusiva sobre legislación básica sobre protección del medio ambiente, sin perjuicio de las facultades de las Comunidades Autónomas de establecer normas adicionales de protección."
    },
    {
      "id": "w3-t3-q2",
      "q": "Según la Ley 7/2021 de cambio climático, ¿qué municipios están obligados a establecer zonas de bajas emisiones (ZBE)?",
      "options": [
        "Los municipios de más de 50.000 habitantes (y los de más de 20.000 con superación de límites de contaminantes)",
        "Todos los municipios de más de 5.000 habitantes",
        "Únicamente las capitales autonómicas",
        "Sólo Madrid y Barcelona"
      ],
      "answer": 0,
      "explain": "Art. 14.3 Ley 7/2021: Los municipios de más de 50.000 habitantes y los de más de 20.000 habitantes cuando se superen los valores límite de contaminantes deberán adoptar planes de movilidad sostenible y zonas de bajas emisiones."
    },
    {
      "id": "w3-t3-q3",
      "q": "¿Cuál es el objetivo temporal fijado en la Ley 7/2021 para alcanzar la neutralidad climática en España?",
      "options": [
        "A más tardar en el año 2050",
        "En el año 2030",
        "En el año 2040",
        "En el año 2060"
      ],
      "answer": 0,
      "explain": "Art. 3.1 Ley 7/2021: Antes de 2050 España deberá alcanzar la neutralidad climática y el sistema eléctrico deberá estar basado exclusivamente en fuentes de energía de origen renovable."
    }
  ],
  "bossQs": [
    {
      "id": "w3-t3-b1",
      "q": "¿Qué instrumento regulado en la Ley 21/2013 se aplica a planes y programas públicos con efectos ambientales significativos?",
      "options": [
        "La evaluación ambiental estratégica (EAE)",
        "La evaluación de impacto ambiental ordinaria de proyectos",
        "La inspección técnica de vehículos",
        "La licencia de obras municipal"
      ],
      "answer": 0,
      "explain": "Ley 21/2013: La Evaluación Ambiental Estratégica (ordinaria o simplificada) es el proceso aplicable a planes y programas públicos; la Evaluación de Impacto Ambiental se aplica a proyectos de ejecución."
    },
    {
      "id": "w3-t3-b2",
      "q": "¿Qué red europea de espacios protegidos regula la Ley 42/2007 de Patrimonio Natural y Biodiversidad?",
      "options": [
        "La Red Natura 2000 (LIC, ZEC y ZEPA)",
        "El Convenio CITES",
        "La red de Geoparques de la UNESCO",
        "La reserva de la biosfera polar"
      ],
      "answer": 0,
      "explain": "Ley 42/2007: La Red Natura 2000 está formada por Lugares de Importancia Comunitaria (LIC), Zonas Especiales de Conservación (ZEC) y Zonas de Especial Protección para las Aves (ZEPA)."
    },
    {
      "id": "w3-t3-b3",
      "q": "¿Qué principio rector en materia de costes ambientales impone la legislación europea y nacional?",
      "options": [
        "Principio de 'quien contamina paga'",
        "Principio de gratuidad de los vertidos",
        "Principio de absorción estatal del daño sin culpa",
        "Principio de prescripción anual de los delitos ecológicos"
      ],
      "answer": 0,
      "explain": "Directiva de responsabilidad ambiental y Ley 26/2007: El principio de quien contamina paga obliga al operador causante del daño a sufragar los costes de prevención y reparación íntegra."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Instrumentos de Protección Ambiental",
    "prompt": "Empareja cada instrumento con su ámbito de aplicación normativo.",
    "pairs": [
      [
        "Evaluación Ambiental Estratégica",
        "Planes y programas de las Administraciones públicas"
      ],
      [
        "Evaluación de Impacto Ambiental",
        "Proyectos de obras y actividades concretas"
      ],
      [
        "Red Natura 2000",
        "ZEC, LIC y ZEPA para la conservación de hábitats y aves"
      ],
      [
        "Zonas de Bajas Emisiones (ZBE)",
        "Obligatorias en municipios de >50.000 habitantes (Ley 7/2021)"
      ]
    ]
  },
  "boss": {
    "name": "El Depredador Ecológico",
    "kind": "cloud",
    "intro": [
      "¡Verteré residuos en un espacio protegido sin evaluación ambiental!"
    ],
    "defeat": [
      "¡Art. 45 CE y Ley 21/2013! Principio de prevención y clausura cautelar por delito contra los recursos naturales."
    ]
  },
  "summary": [
    "Art. 45 CE: derecho al medio ambiente adecuado y deber de conservarlo. Restauración y sanciones.",
    "Competencias (art. 149.1.23ª): legislación básica el Estado; normas adicionales y ejecución las CCAA.",
    "Ley 7/2021 de Cambio Climático: neutralidad climática a más tardar en 2050, sistema eléctrico 100% renovable, ZBE obligatorias en municipios de >50.000 hab.",
    "Evaluación Ambiental (Ley 21/2013): estratégica (planes/programas) y de impacto (proyectos).",
    "Ley 42/2007: Biodiversidad y Red Natura 2000 (LIC, ZEC, ZEPA). Principio de quien contamina paga."
  ]
};

export const W3_T4: MiniWorldDef = {
  "id": "politicas-t4",
  "num": 4,
  "temaTitle": "Tema 4: La Seguridad Social: estructura y financiación. Problemas actuales y líneas de actuación. El régimen general y los regímenes especiales. La acción protectora de la Seguridad Social. Tipos y características de las prestaciones.",
  "name": "Bastión de la Seguridad Social",
  "emoji": "🛡️",
  "theme": "politicas",
  "color": "#0284c7",
  "enemy": "reloj",
  "enemyName": "Fraude contributivo",
  "npcs": [
    {
      "name": "Gestor de Prestaciones",
      "role": "Estructura, financiación y acción protectora del sistema de Seguridad Social",
      "look": {
        "skin": "#f3c9a0",
        "hair": "#374151",
        "hairStyle": "short",
        "shirt": "#0369a1",
        "pants": "#0c4a6e",
        "acc": [
          "tie",
          "badge"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "El art. 41 CE encomienda a los poderes públicos mantener un régimen público de Seguridad Social para todos los ciudadanos que garantice asistencia y prestaciones sociales suficientes ante situaciones de necesidad, especialmente en desempleo.",
        "Texto Refundido de la Ley General de la Seguridad Social (TRLGSS, RDL 8/2015).",
        "Estructura: Nivel contributivo (basado en el trabajo y cotización: Régimen General y Regímenes Especiales: RETA para autónomos, Trabajadores del Mar y Minería del Carbón) y Nivel no contributivo (universal para residentes sin recursos suficientes: jubilación e invalidez no contributivas, Ingreso Mínimo Vital).",
        "Financiación: cuotas de empresas y trabajadores (cotizaciones para contingencias comunes, profesionales y desempleo) y transferencias del Estado para prestaciones no contributivas (separación de fuentes del Pacto de Toledo).",
        "Gestión: Entidades Gestoras (INSS: prestaciones económicas contributivas; IMSERSO: servicios sociales y pensiones no contributivas; ISM: sector marítimo-pesquero) y Servicios Comunes (TGSS: titular del patrimonio único, encuadramiento, inscripción de empresas, afiliación, altas/bajas y recaudación ejecutiva)."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w3-t4-q1",
      "q": "¿Cuál es la función legal de la Tesorería General de la Seguridad Social (TGSS) en el sistema español?",
      "options": [
        "Es un servicio común titular del patrimonio único, competente en inscripción de empresas, afiliación y recaudación",
        "Gestiona el pago de las pensiones contributivas de jubilación e incapacidad",
        "Se encarga del reconocimiento del desempleo en exclusiva",
        "Es un tribunal que juzga despidos improcedentes"
      ],
      "answer": 0,
      "explain": "Art. 74 TRLGSS: La TGSS es un servicio común con personalidad jurídica propia que tiene a su cargo la gestión unificada de los recursos financieros y del sistema de recaudación, afiliación, altas y bajas, y titularidad del patrimonio único de la Seguridad Social."
    },
    {
      "id": "w3-t4-q2",
      "q": "¿Qué entidad gestora reconoce y gestiona las pensiones contributivas de jubilación, incapacidad permanente, viudedad y orfandad?",
      "options": [
        "El Instituto Nacional de la Seguridad Social (INSS)",
        "El Instituto de Mayores y Servicios Sociales (IMSERSO)",
        "La Tesorería General de la Seguridad Social (TGSS)",
        "El Servicio Público de Empleo Estatal (SEPE)"
      ],
      "answer": 0,
      "explain": "Art. 71 TRLGSS: El Instituto Nacional de la Seguridad Social (INSS) tiene a su cargo la gestión y administración de las prestaciones económicas del sistema de la Seguridad Social en su modalidad contributiva."
    },
    {
      "id": "w3-t4-q3",
      "q": "¿Cuáles son los regímenes especiales integrados actualmente en el sistema de la Seguridad Social?",
      "options": [
        "Trabajadores por Cuenta Propia o Autónomos (RETA), Trabajadores del Mar y Minería del Carbón",
        "Exclusivamente el de funcionarios de la Unión Europea",
        "El régimen de deportistas de élite y el de artistas independientes",
        "El régimen mercantil y el régimen militar voluntario"
      ],
      "answer": 0,
      "explain": "Art. 10 TRLGSS: Son regímenes especiales: el Régimen Especial de Trabajadores Autónomos (RETA), el Régimen de los Trabajadores del Mar y el Régimen de la Minería del Carbón (los regímenes agrario y de empleados de hogar quedaron integrados en el Régimen General como sistemas especiales)."
    }
  ],
  "bossQs": [
    {
      "id": "w3-t4-b1",
      "q": "¿A qué principio responde la financiación separada entre prestaciones contributivas y no contributivas pactada en el Pacto de Toledo?",
      "options": [
        "Principio de separación de fuentes de financiación (cotizaciones financian contributivas; impuestos financian universales/no contributivas)",
        "Principio de capitalización individual privada obligatoria",
        "Principio de autofinanciación municipal del desempleo",
        "Principio de endeudamiento ilimitado del fondo de reserva"
      ],
      "answer": 0,
      "explain": "Art. 109 TRLGSS y recomendaciones del Pacto de Toledo: Las prestaciones contributivas se financian prioritariamente con cotizaciones sociales; las prestaciones no contributivas y universales se financian con transferencias de los Presupuestos Generales del Estado."
    },
    {
      "id": "w3-t4-b2",
      "q": "¿Qué prestación pública no contributiva garantiza un nivel mínimo de renta a los hogares en situación de vulnerabilidad económica?",
      "options": [
        "El Ingreso Mínimo Vital (Ley 19/2021)",
        "La prestación por desempleo contributiva",
        "El subsidio para mayores de 52 años",
        "La pensión de incapacidad temporal"
      ],
      "answer": 0,
      "explain": "La Ley 19/2021 establece el Ingreso Mínimo Vital como prestación no contributiva de la Seguridad Social para prevenir el riesgo de pobreza y exclusión social."
    },
    {
      "id": "w3-t4-b3",
      "q": "¿En qué plazo de incapacidad temporal se extingue la situación ordinaria y se inicia el expediente de incapacidad permanente?",
      "options": [
        "Agotado el plazo de 545 días naturales (365 días + 180 días de prórroga)",
        "A los 90 días naturales",
        "A los 180 días improrrogables",
        "A los 3 años de baja continuada"
      ],
      "answer": 0,
      "explain": "Art. 169 TRLGSS: La incapacidad temporal tiene una duración máxima de 365 días, prorrogables por otros 180 días (total 545 días), transcurridos los cuales se examina la incapacidad permanente."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Entidades Gestoras y Servicios Comunes de la Seguridad Social",
    "prompt": "Empareja cada organismo con su competencia exclusiva en el sistema.",
    "pairs": [
      [
        "INSS",
        "Gestión y reconocimiento de prestaciones económicas contributivas"
      ],
      [
        "TGSS",
        "Caja única, patrimonio, afiliación, altas, bajas y recaudación de cuotas"
      ],
      [
        "IMSERSO",
        "Servicios sociales complementarios y pensiones no contributivas"
      ],
      [
        "ISM",
        "Gestión de prestaciones y formación del sector marítimo y pesquero"
      ]
    ]
  },
  "boss": {
    "name": "El Defraudador de Cuotas",
    "kind": "ogre",
    "intro": [
      "¡Contrataré trabajadores sin alta previa en la Seguridad Social ni cotizaciones!"
    ],
    "defeat": [
      "¡Inspección de Trabajo y Seguridad Social! Acta de liquidación de oficio y sanción por falta muy grave (LISOS)."
    ]
  },
  "summary": [
    "Art. 41 CE: régimen público de Seguridad Social para todos los ciudadanos ante situaciones de necesidad.",
    "TRLGSS (RDL 8/2015): Régimen General y Regímenes Especiales (RETA, Mar, Carbón).",
    "Nivel contributivo (cotizaciones) vs Nivel no contributivo (impuestos del Estado, Pacto de Toledo art. 109).",
    "Entidades: INSS (prestaciones contributivas), TGSS (patrimonio único, caja única, afiliación y recaudación), IMSERSO e ISM.",
    "Ingreso Mínimo Vital (Ley 19/2021) como suelo estatal contra la pobreza."
  ]
};

export const W3_T5: MiniWorldDef = {
  "id": "politicas-t5",
  "num": 5,
  "temaTitle": "Tema 5: La evolución del empleo en España. Los servicios públicos de empleo: régimen de prestaciones y políticas de empleo.",
  "name": "Ágora del Empleo",
  "emoji": "👷",
  "theme": "politicas",
  "color": "#0284c7",
  "enemy": "reloj",
  "enemyName": "Precariedad laboral",
  "npcs": [
    {
      "name": "Orientador Laboral del SEPE",
      "role": "Políticas activas y pasivas de empleo y servicios públicos",
      "look": {
        "skin": "#fcd5b5",
        "hair": "#4b5563",
        "hairStyle": "short",
        "shirt": "#0284c7",
        "pants": "#075985",
        "acc": [
          "headset",
          "badge"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "El art. 40.1 CE encomienda a los poderes públicos realizar de manera prioritaria una política orientada al pleno empleo.",
        "Ley 3/2023 de Empleo: moderniza el Sistema Nacional de Empleo, integrado por el Servicio Público de Empleo Estatal (SEPE) y los servicios públicos de empleo de las CCAA.",
        "Políticas de empleo:",
        "1. Políticas activas: intermediación, formación para el empleo, orientación personalizada, fomento de la contratación y emprendimiento.",
        "2. Políticas pasivas (protección por desempleo, Título III TRLGSS):",
        "• Nivel contributivo: cotización mínima de 360 días en los 6 años anteriores. Duración de 120 días a 720 días. Cuantía: 70% de la base reguladora los primeros 180 días y 60% a partir del día 181.",
        "• Nivel asistencial (subsidios por desempleo): carencia de rentas individuales (<75% SMI), subsidio con cargas familiares, subsidio para mayores de 52 años (cotiza para jubilación)."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w3-t5-q1",
      "q": "¿Cuál es el período mínimo de cotización para tener derecho a la prestación contributiva por desempleo en España?",
      "options": [
        "Al menos 360 días dentro de los 6 años anteriores a la situación legal de desempleo",
        "180 días en los últimos 2 años",
        "720 días continuados",
        "90 días en el año en curso"
      ],
      "answer": 0,
      "explain": "Art. 269.1 TRLGSS: Se requiere haber cotizado por desempleo un mínimo de trescientos sesenta días dentro de los seis años anteriores a la situación legal de desempleo."
    },
    {
      "id": "w3-t5-q2",
      "q": "¿Qué porcentaje de la base reguladora se percibe durante los primeros 180 días de prestación contributiva de desempleo?",
      "options": [
        "El 70 por ciento de la base reguladora",
        "El 60 por ciento",
        "El 80 por ciento",
        "El 50 por ciento"
      ],
      "answer": 0,
      "explain": "Art. 270.1 TRLGSS: La cuantía de la prestación será el 70% de la base reguladora durante los primeros 180 días y el 60% a partir del día 181."
    },
    {
      "id": "w3-t5-q3",
      "q": "¿Qué norma vigente aprueba el marco general de la Ley de Empleo y el Sistema Nacional de Empleo?",
      "options": [
        "La Ley 3/2023, de 28 de febrero, de Empleo",
        "El Real Decreto Legislativo 3/2015",
        "La Ley 56/2003 de Empleo",
        "La Ley Orgánica 11/1985"
      ],
      "answer": 0,
      "explain": "La Ley 3/2023, de 28 de febrero, de Empleo, es la norma vigente que reordenó el Sistema Nacional de Empleo y las políticas activas de empleo."
    }
  ],
  "bossQs": [
    {
      "id": "w3-t5-b1",
      "q": "¿Qué característica esencial tiene el subsidio por desempleo para mayores de 52 años?",
      "options": [
        "Cotiza para la pensión de jubilación y se percibe hasta alcanzar la edad ordinaria de jubilación",
        "Es una ayuda temporal de solo 6 meses improrrogables",
        "No exige carencia de rentas",
        "Se abona exclusivamente a tiempo parcial"
      ],
      "answer": 0,
      "explain": "Art. 274 y 280 TRLGSS: El subsidio para trabajadores mayores de 52 años cotiza por la contingencia de jubilación y se mantiene hasta el cumplimiento de la edad ordinaria de jubilación."
    },
    {
      "id": "w3-t5-b2",
      "q": "¿Qué requisito de rentas se exige con carácter general para acceder a los subsidios por desempleo asistenciales?",
      "options": [
        "Carecer de rentas de cualquier naturaleza superiores, en cómputo mensual, al 75% del Salario Mínimo Interprofesional",
        "Tener rentas inferiores al doble del IPREM",
        "Carecer de bienes inmuebles en propiedad",
        "Estar en situación de concurso de acreedores"
      ],
      "answer": 0,
      "explain": "Art. 274 TRLGSS: Carencia de rentas propias superiores al 75 por ciento del salario mínimo interprofesional, excluida la parte proporcional de dos pagas extraordinarias."
    },
    {
      "id": "w3-t5-b3",
      "q": "¿Qué organismo estatal gestiona las prestaciones por desempleo y coordina el Sistema Nacional de Empleo?",
      "options": [
        "El Servicio Público de Empleo Estatal (SEPE)",
        "El Instituto de la Juventud",
        "La Dirección General de Tributos",
        "El Fondo de Garantía Salarial (FOGASA) exclusivamente"
      ],
      "answer": 0,
      "explain": "El SEPE (antiguo INEM), organismo autónomo adscrito al Ministerio de Trabajo, gestiona las prestaciones por desempleo y la intermediación laboral en el ámbito estatal."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Niveles de Protección por Desempleo",
    "prompt": "Empareja cada modalidad de protección con sus requisitos de acceso.",
    "pairs": [
      [
        "Contributiva (desempleo)",
        "Mínimo 360 días cotizados en los 6 años previos (70% luego 60%)"
      ],
      [
        "Subsidio asistencial general",
        "Carencia de rentas (<75% SMI) tras agotar contributiva"
      ],
      [
        "Subsidio mayores de 52 años",
        "Cotiza para jubilación y dura hasta la edad ordinaria de retiro"
      ],
      [
        "Políticas Activas de Empleo",
        "Formación, intermediación y orientación laboral (SEPE y CCAA)"
      ]
    ]
  },
  "boss": {
    "name": "El Explotador Clandestino",
    "kind": "ogre",
    "intro": [
      "¡Contrataré en la economía sumergida sin derecho a desempleo!"
    ],
    "defeat": [
      "¡Inspección de Trabajo y Ley 3/2023 de Empleo! Alta forzosa y reconocimiento íntegro de derechos prestacionales."
    ]
  },
  "summary": [
    "Art. 40.1 CE: mandato de orientación hacia el pleno empleo.",
    "Ley 3/2023 de Empleo: Sistema Nacional de Empleo (SEPE y servicios autonómicos).",
    "Desempleo contributivo (art. 269 TRLGSS): 360 días en 6 años. 70% base (180 días) y 60% resto. Máx. 720 días.",
    "Subsidios asistenciales: carencia de rentas (<75% SMI).",
    "Subsidio mayores de 52 años: cotiza para jubilación hasta alcanzar la edad ordinaria."
  ]
};

export const W3_T6: MiniWorldDef = {
  "id": "politicas-t6",
  "num": 6,
  "temaTitle": "Tema 6: Política de inmigración. Régimen de los extranjeros en España. Derecho de asilo y condición de refugiado.",
  "name": "Frontera y Refugio",
  "emoji": "🛂",
  "theme": "politicas",
  "color": "#0ea5e9",
  "enemy": "urna",
  "enemyName": "Tráfico de personas",
  "npcs": [
    {
      "name": "Oficial de Extranjería y Asilo",
      "role": "Régimen de extranjeros, derecho de asilo y protección internacional",
      "look": {
        "skin": "#f3c9a0",
        "hair": "#1e293b",
        "hairStyle": "short",
        "shirt": "#0284c7",
        "pants": "#0f172a",
        "acc": [
          "badge",
          "glasses"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "Art. 13 CE: los extranjeros gozan en España de las libertades públicas garantizadas por el Título I en los términos establecidos por los tratados y la ley.",
        "Ley Orgánica 4/2000 sobre derechos y libertades de los extranjeros en España y su integración social (Ley de Extranjería):",
        "• Situaciones: estancia (corta duración, máx. 90 días) y residencia (temporal de más de 90 días hasta 5 años; de larga duración: continuada de 5 años).",
        "• Vías de regularización: autorizaciones por arraigo (laboral, social, familiar, para la formación).",
        "• Régimen sancionador: infracciones leves, graves (ej. estancia irregular) y muy graves; sanción de multa o expulsión del territorio nacional (con prohibición de entrada de hasta 5 años).",
        "Ley 12/2009 reguladora del derecho de asilo y de la protección internacional: derecho al reconocimiento del estatuto de refugiado (Convención de Ginebra de 1951) y protección subsidiaria. Principio de 'no devolución' (non-refoulement)."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w3-t6-q1",
      "q": "¿Cuántos años de residencia continuada en España se exigen con carácter general para obtener la residencia de larga duración?",
      "options": [
        "Cinco años de residencia legal y continuada",
        "Dos años",
        "Diez años",
        "Tres años ininterrumpidos"
      ],
      "answer": 0,
      "explain": "Art. 32 LO 4/2000: Tendrán derecho a la residencia de larga duración las personas que hayan residido legalmente y de forma continuada en el territorio español durante cinco años."
    },
    {
      "id": "w3-t6-q2",
      "q": "¿Qué principio fundamental del Derecho Internacional de refugiados prohíbe devolver a una persona a un país donde su vida o libertad peligren?",
      "options": [
        "Principio de no devolución (non-refoulement)",
        "Principio de reciprocidad consular",
        "Principio de soberanía de frontera estricta",
        "Principio de expulsión expedita"
      ],
      "answer": 0,
      "explain": "Art. 19 Ley 12/2009 y Convención de Ginebra de 1951: El principio de no devolución impide retornar a una persona solicitante de asilo a un país donde sufra persecución o riesgo de tortura."
    },
    {
      "id": "w3-t6-q3",
      "q": "¿Cuál es el período máximo ordinario de la situación de estancia en España para extranjeros no comunitarios?",
      "options": [
        "Hasta un máximo de 90 días por período de 180 días",
        "Un año renovable",
        "30 días improrrogables",
        "6 meses consecutivos"
      ],
      "answer": 0,
      "explain": "Art. 30 LO 4/2000 y Código de Fronteras Schengen: La estancia es la permanencia en territorio español por un período no superior a 90 días por semestre."
    }
  ],
  "bossQs": [
    {
      "id": "w3-t6-b1",
      "q": "¿Cuál es la duración máxima general de la prohibición de entrada aparejada a una orden de expulsión (art. 58 LO 4/2000)?",
      "options": [
        "Hasta cinco años, prorrogable a diez en supuestos graves de seguridad",
        "Diez años en todo caso",
        "Un año máximo",
        "Prohibición perpetua irrevocable"
      ],
      "answer": 0,
      "explain": "Art. 58.2 LO 4/2000: La expulsión conllevará en todo caso la prohibición de entrada en territorio español, cuya duración no podrá exceder de cinco años salvo amenaza grave a la seguridad pública (hasta 10 años)."
    },
    {
      "id": "w3-t6-b2",
      "q": "¿A qué órgano colegiado le corresponde elevar propuestas sobre concesión o denegación de asilo en España?",
      "options": [
        "A la Comisión Interministerial de Asilo y Refugio (CIAR)",
        "Al Tribunal Constitucional",
        "Al Consejo de Seguridad Nacional",
        "A la Dirección General de Aduanas"
      ],
      "answer": 0,
      "explain": "Art. 23 Ley 12/2009: La Comisión Interministerial de Asilo y Refugio (CIAR) examina las solicitudes y formula la propuesta de resolución al Ministro del Interior."
    },
    {
      "id": "w3-t6-b3",
      "q": "¿Qué derecho de sufragio pueden ejercer los extranjeros residentes en España según el art. 13.2 CE?",
      "options": [
        "Solamente el sufragio activo y pasivo en las elecciones municipales, atendiendo a criterios de reciprocidad",
        "Sufragio universal en elecciones generales y autonómicas",
        "Ningún derecho de voto en ningún comicio",
        "Voto en elecciones al Senado exclusivamente"
      ],
      "answer": 0,
      "explain": "Art. 13.2 CE: Solamente los españoles serán titulares de los derechos reconocidos en el art. 23, salvo lo que por tratados o ley pueda establecerse para el derecho de sufragio activo y pasivo en las elecciones municipales atendiendo a criterios de reciprocidad."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Situaciones de los Extranjeros y Protección Internacional",
    "prompt": "Empareja cada categoría legal con su régimen específico en España.",
    "pairs": [
      [
        "Estancia",
        "Permanencia no superior a 90 días por semestre sin finalidad laboral"
      ],
      [
        "Residencia temporal",
        "Autorización superior a 90 días e inferior a 5 años"
      ],
      [
        "Residencia de larga duración",
        "Residencia legal y continuada durante al menos 5 años"
      ],
      [
        "Protección subsidiaria",
        "Para quien no es refugiado pero sufriría daños graves si regresa"
      ]
    ]
  },
  "boss": {
    "name": "El Traficante de Fronteras",
    "kind": "ghost",
    "intro": [
      "¡Vulneraré las garantías de asilo y expulsaré sin asistencia letrada!"
    ],
    "defeat": [
      "¡Art. 13 CE y Ley 12/2009! Asistencia jurídica gratuita a solicitantes de asilo y tutela judicial efectiva garantizadas."
    ]
  },
  "summary": [
    "Art. 13 CE: derechos de los extranjeros según tratados y leyes. Sufragio municipal por reciprocidad (art. 13.2).",
    "LO 4/2000 (Ley Extranjería): Estancia (máx. 90 días) y Residencia (temporal < 5 años; larga duración continuada 5 años).",
    "Arraigo: laboral, social, familiar y formativo.",
    "Expulsión (art. 58): prohibición de entrada general de hasta 5 años (10 si hay amenaza a seguridad).",
    "Asilo (Ley 12/2009): estatuto de refugiado y protección subsidiaria. Principio de no devolución (non-refoulement) y propuesta por la CIAR."
  ]
};

export const W3_T7: MiniWorldDef = {
  "id": "politicas-t7",
  "num": 7,
  "temaTitle": "Tema 7: El Gobierno Abierto: concepto, principios informadores y planes de acción de España. La Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno.",
  "name": "Plaza del Gobierno Abierto",
  "emoji": "🔍",
  "theme": "politicas",
  "color": "#06b6d4",
  "enemy": "sello",
  "enemyName": "Opacidad burocrática",
  "npcs": [
    {
      "name": "Comisionada de Transparencia",
      "role": "Gobierno abierto, transparencia y buen gobierno (Ley 19/2013)",
      "look": {
        "skin": "#fcd5b5",
        "hair": "#374151",
        "hairStyle": "bun",
        "shirt": "#0891b2",
        "pants": "#164e63",
        "acc": [
          "glasses",
          "badge"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "El Gobierno Abierto es un modelo de gobernanza basado en tres pilares: transparencia, participación ciudadana y rendición de cuentas (colaboración).",
        "España forma parte de la Alianza para el Gobierno Abierto (OGP) desde 2011, ejecutando Planes de Acción periódicos.",
        "Ley 19/2013 de transparencia, acceso a la información pública y buen gobierno:",
        "1. Publicidad activa (Título I, Cap. II): publicar sin necesidad de solicitud previa información institucional, organizativa, jurídica (planes, anteproyectos), de relevancia económica, presupuestaria y patrimonial (contratos, convenios, subvenciones, retribuciones de altos cargos). Portal de la Transparencia.",
        "2. Derecho de acceso a la información pública (arts. 12 a 24): universal (todas las personas). Sin necesidad de motivar. Límites tasados (art. 14: seguridad nacional, defensa, privacidad). Silencio administrativo desestimatorio tras 1 mes (art. 20.4).",
        "3. Consejo de Transparencia y Buen Gobierno (CTBG): autoridad administrativa independiente que resuelve las reclamaciones previas a la vía contencioso-administrativa."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w3-t7-q1",
      "q": "¿Quién es el titular del derecho de acceso a la información pública según el art. 12 de la Ley 19/2013?",
      "options": [
        "Todas las personas, sin necesidad de motivar su solicitud",
        "Solo los ciudadanos españoles mayores de edad",
        "Exclusivamente los interesados en un procedimiento administrativo abierto",
        "Solo los periodistas y medios de comunicación acreditados"
      ],
      "answer": 0,
      "explain": "Art. 12 Ley 19/2013: Todas las personas tienen derecho a acceder a la información pública en los términos previstos en el art. 105.b) de la Constitución y en esta Ley, sin que se exija motivar la petición."
    },
    {
      "id": "w3-t7-q2",
      "q": "¿En qué plazo debe resolver y notificar la Administración una solicitud de acceso a la información pública (art. 20 Ley 19/2013)?",
      "options": [
        "En el plazo máximo de un mes desde la recepción de la solicitud en el órgano competente",
        "En el plazo de tres meses",
        "En el plazo de quince días improrrogables",
        "En el plazo de diez días hábiles"
      ],
      "answer": 0,
      "explain": "Art. 20.1 Ley 19/2013: La resolución en la que se conceda o deniegue el acceso deberá notificarse al solicitante en el plazo máximo de un mes desde la recepción de la solicitud."
    },
    {
      "id": "w3-t7-q3",
      "q": "¿Qué sentido tiene el silencio administrativo transcurrido el plazo máximo para resolver sobre acceso a la información pública?",
      "options": [
        "Efecto desestimatorio (se entiende denegada la solicitud)",
        "Efecto estimatorio positivo",
        "Caducidad automática del procedimiento",
        "Imposición de una multa al solicitante"
      ],
      "answer": 0,
      "explain": "Art. 20.4 Ley 19/2013: Transcurrido el plazo máximo para resolver sin que se haya dictado y notificado resolución expresa, se entenderá que la solicitud ha sido desestimada."
    }
  ],
  "bossQs": [
    {
      "id": "w3-t7-b1",
      "q": "¿Qué órgano independiente tutela el cumplimiento de la publicidad activa y resuelve las reclamaciones en materia de acceso estatal?",
      "options": [
        "El Consejo de Transparencia y Buen Gobierno (CTBG)",
        "El Defensor del Pueblo",
        "El Consejo de Estado",
        "La Comisión Nacional de los Mercados y la Competencia"
      ],
      "answer": 0,
      "explain": "Art. 33 Ley 19/2013: El Consejo de Transparencia y Buen Gobierno (CTBG) tiene como fines promover la transparencia y garantizar el cumplimiento de las obligaciones de publicidad activa y el derecho de acceso."
    },
    {
      "id": "w3-t7-b2",
      "q": "¿Qué naturaleza tiene la reclamación ante el Consejo de Transparencia y Buen Gobierno según el art. 24 de la Ley 19/2013?",
      "options": [
        "Es potestativa y previa a la impugnación ante la Jurisdicción Contencioso-Administrativa",
        "Es un recurso obligatorio de alzada ante el Ministro",
        "Es una demanda penal directa",
        "Es una queja no vinculante"
      ],
      "answer": 0,
      "explain": "Art. 24.1 Ley 19/2013: Frente a toda resolución expresa o presunta en materia de acceso podrá interponerse una reclamación ante el CTBG, con carácter potestativo y previo a su impugnación judicial contencioso-administrativa."
    },
    {
      "id": "w3-t7-b3",
      "q": "¿Cuál de los siguientes contratos de la Administración debe publicarse obligatoriamente por publicidad activa en el Portal de Transparencia?",
      "options": [
        "Todos los contratos, con indicación de objeto, duración, importe de licitación y adjudicación",
        "Solo los contratos de cuantía superior a 10 millones de euros",
        "Únicamente los contratos de personal laboral temporal",
        "Ninguno, pues están protegidos por secreto comercial"
      ],
      "answer": 0,
      "explain": "Art. 8.1.a Ley 19/2013: Los sujetos obligados deberán publicar todos los contratos, con indicación del objeto, duración, importe de licitación y adjudicación, procedimiento utilizado e instrumentos de modificación."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Pilares de la Ley 19/2013 de Transparencia",
    "prompt": "Empareja cada institución de la ley con su rasgo característico.",
    "pairs": [
      [
        "Publicidad Activa",
        "Obligación de difundir de oficio contratos, convenios y presupuestos"
      ],
      [
        "Derecho de Acceso",
        "Universal, sin motivación obligatoria; plazo de 1 mes (silencio negativo)"
      ],
      [
        "Límites de acceso (art. 14)",
        "Seguridad nacional, defensa, relaciones exteriores y privacidad"
      ],
      [
        "Reclamación ante el CTBG",
        "Vía potestativa y gratuita previa al recurso contencioso-administrativo"
      ]
    ]
  },
  "boss": {
    "name": "El Archivero Opaco",
    "kind": "ghost",
    "intro": [
      "¡Exijo que justifiques para qué quieres los presupuestos y no te contestaré jamás!"
    ],
    "defeat": [
      "¡Ley 19/2013! El derecho de acceso no exige motivación. Resolución estimatoria del Consejo de Transparencia."
    ]
  },
  "summary": [
    "Gobierno Abierto: transparencia, participación ciudadana y colaboración/rendición de cuentas.",
    "Ley 19/2013: Publicidad Activa (Portal de la Transparencia, contratos, retribuciones, subvenciones).",
    "Derecho de acceso: todas las personas, sin motivación, plazo de 1 mes (silencio desestimatorio art. 20.4).",
    "Límites (art. 14): aplicación proporcionada y justificada.",
    "Consejo de Transparencia y Buen Gobierno (CTBG): autoridad independiente; reclamación potestativa previa a lo contencioso (art. 24)."
  ]
};

export const W3_T8: MiniWorldDef = {
  "id": "politicas-t8",
  "num": 8,
  "temaTitle": "Tema 8: La protección de datos personales y su régimen jurídico: principios, derechos, responsable y encargado del tratamiento, delegado y autoridades de protección de datos. Derechos digitales.",
  "name": "Cripta de los Datos",
  "emoji": "🔒",
  "theme": "politicas",
  "color": "#0284c7",
  "enemy": "reloj",
  "enemyName": "Vulneradores de privacidad",
  "npcs": [
    {
      "name": "Delegada de Protección de Datos",
      "role": "RGPD, LOPDGDD y Garantía de Derechos Digitales",
      "look": {
        "skin": "#f3c9a0",
        "hair": "#2e2e2e",
        "hairStyle": "short",
        "shirt": "#0369a1",
        "pants": "#0c4a6e",
        "acc": [
          "glasses",
          "badge"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "El art. 18.4 CE limita el uso de la informática para garantizar el honor y la intimidad familiar de los ciudadanos y el pleno ejercicio de sus derechos.",
        "Marco vigente: Reglamento General de Protección de Datos (RGPD UE 2016/679) y Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).",
        "Principios relativos al tratamiento (art. 5 RGPD): licitud, lealtad, transparencia, limitación de la finalidad, minimización de datos, exactitud, limitación del plazo de conservación, integridad y confidencialidad, y responsabilidad proactiva (accountability).",
        "Derechos de los ciudadanos: Acceso, Rectificación, Supresión ('olvido'), Limitación, Portabilidad y Oposición (derechos ARSULPO).",
        "Delegado de Protección de Datos (DPD): obligatorio en todas las Administraciones públicas (art. 34 LOPDGDD). Actúa con independencia.",
        "Autoridades de control: Agencia Española de Protección de Datos (AEPD, autoridad estatal independiente). Derechos digitales (Título X LOPDGDD: desconexión digital, testamento digital, neutralidad de la red)."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w3-t8-q1",
      "q": "¿En qué consiste el principio de 'responsabilidad proactiva' (accountability) consagrado en el artículo 5.2 del RGPD?",
      "options": [
        "El responsable del tratamiento debe aplicar medidas técnicas y organizativas apropiadas y ser capaz de demostrar que el tratamiento cumple el RGPD",
        "La obligación de responder únicamente cuando exista denuncia formal",
        "La presunción de culpabilidad automática de la empresa",
        "La designación obligatoria de un juez instructor en cada tratamiento"
      ],
      "answer": 0,
      "explain": "Art. 5.2 RGPD: El responsable del tratamiento será responsable del cumplimiento de lo dispuesto en el apartado 1 y capaz de demostrarlo (responsabilidad proactiva)."
    },
    {
      "id": "w3-t8-q2",
      "q": "¿Es obligatoria la designación de un Delegado de Protección de Datos (DPD) en las Administraciones públicas según la LOPDGDD?",
      "options": [
        "Sí, es obligatorio en todas las Administraciones públicas y sus organismos vinculados o dependientes",
        "No, en la Administración pública es totalmente voluntario",
        "Solo en el Ministerio del Interior",
        "Solo en ayuntamientos de más de un millón de habitantes"
      ],
      "answer": 0,
      "explain": "Art. 37.1.a RGPD y art. 34.1.a LOPDGDD: Los responsables y encargados deberán designar un Delegado de Protección de Datos cuando el tratamiento sea realizado por una autoridad u organismo público."
    },
    {
      "id": "w3-t8-q3",
      "q": "¿En qué plazo máximo debe notificar el responsable una brecha de seguridad a la AEPD si reviste riesgo para los derechos y libertades (art. 33 RGPD)?",
      "options": [
        "A más tardar en el plazo de 72 horas tras haber tenido constancia de ella",
        "En un plazo máximo de 24 horas",
        "En el plazo de 15 días hábiles",
        "En un plazo de un mes"
      ],
      "answer": 0,
      "explain": "Art. 33.1 RGPD: En caso de violación de la seguridad de los datos personales, el responsable notificará a la autoridad de control competente sin dilación indebida y, de ser posible, a más tardar 72 horas después de que haya tenido constancia de ella."
    }
  ],
  "bossQs": [
    {
      "id": "w3-t8-b1",
      "q": "¿Qué derecho digital consagra expresamente el artículo 88 de la LOPDGDD para las personas trabajadoras?",
      "options": [
        "El derecho a la desconexión digital en el ámbito laboral fuera del tiempo de trabajo",
        "El derecho a instalar cualquier software en equipos de trabajo",
        "El derecho a negarse a cobrar por transferencia",
        "El derecho a destruir historiales médicos"
      ],
      "answer": 0,
      "explain": "Art. 88 LOPDGDD: Los trabajadores y los empleados públicos tendrán derecho a la desconexión digital a fin de garantizar, fuera del tiempo de trabajo legal o convencionalmente establecido, el respeto de su tiempo de descanso y vacaciones."
    },
    {
      "id": "w3-t8-b2",
      "q": "¿A partir de qué edad se considera lícito el consentimiento del menor para el tratamiento de sus datos personales en España (art. 7 LOPDGDD)?",
      "options": [
        "Catorce años",
        "Dieciséis años",
        "Dieciocho años",
        "Doce años"
      ],
      "answer": 0,
      "explain": "Art. 7 LOPDGDD: El tratamiento de los datos personales de un menor de edad únicamente podrá fundarse en su consentimiento cuando sea mayor de catorce años. Los menores de 14 requieren consentimiento de padres o tutores."
    },
    {
      "id": "w3-t8-b3",
      "q": "¿En qué plazo debe responder con carácter general el responsable del tratamiento ante una solicitud de ejercicio de derechos ARSULPO (art. 12.3 RGPD)?",
      "options": [
        "En el plazo máximo de un mes a partir de la recepción de la solicitud",
        "En el plazo improrrogable de 10 días",
        "En tres meses de oficio",
        "En un año natural"
      ],
      "answer": 0,
      "explain": "Art. 12.3 RGPD: El responsable facilitará la información solicitada en el plazo de un mes a partir de la recepción de la solicitud (prorrogable dos meses más si reviste especial complejidad)."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Derechos y Principios de Protección de Datos",
    "prompt": "Empareja cada concepto con su precepto legal o definición en el RGPD / LOPDGDD.",
    "pairs": [
      [
        "Minimización de datos",
        "Datos adecuados, pertinentes y limitados a lo necesario"
      ],
      [
        "Derecho de supresión",
        "Derecho al 'olvido' cuando los datos ya no sean necesarios"
      ],
      [
        "Notificación de brecha",
        "A la AEPD en máx. 72 horas si entraña riesgo (art. 33 RGPD)"
      ],
      [
        "Desconexión digital",
        "Garantía de descanso laboral fuera de la jornada (art. 88 LOPDGDD)"
      ]
    ]
  },
  "boss": {
    "name": "El Espía de la Red",
    "kind": "cloud",
    "intro": [
      "¡He filtrado una base de datos pública y comercializaré con datos sensibles!"
    ],
    "defeat": [
      "¡Sanción ejemplar de la AEPD y obligación de medidas técnicas de cifrado y anonimización de datos!"
    ]
  },
  "summary": [
    "Art. 18.4 CE: limitación de la informática para proteger intimidad y derechos.",
    "RGPD y LOPDGDD (LO 3/2018): Principios de minimización, limitación, exactitud y responsabilidad proactiva.",
    "Derechos ARSULPO: acceso, rectificación, supresión, limitación, portabilidad y oposición (plazo 1 mes).",
    "Notificación de brechas de seguridad: en un máximo de 72 horas a la AEPD.",
    "DPD obligatorio en el sector público (art. 34 LOPDGDD). Consentimiento válido a partir de los 14 años (art. 7 LOPDGDD).",
    "Derechos digitales (Título X LOPDGDD): desconexión digital, intimidad ante dispositivos y cámaras, testamento digital."
  ]
};

export const W3_T9: MiniWorldDef = {
  "id": "politicas-t9",
  "num": 9,
  "temaTitle": "Tema 9: Políticas de igualdad y contra la violencia de género: régimen jurídico. Políticas de igualdad de trato y no discriminación de las personas LGTBI. Discapacidad y dependencia: régimen jurídico.",
  "name": "Templo de la Igualdad",
  "emoji": "⚖️",
  "theme": "politicas",
  "color": "#7c3aed",
  "enemy": "urna",
  "enemyName": "Prejuicios y discriminación",
  "npcs": [
    {
      "name": "Directora del Instituto de las Mujeres",
      "role": "Igualdad efectiva, violencia de género, LGTBI y dependencia",
      "look": {
        "skin": "#fcd5b5",
        "hair": "#6b21a8",
        "hairStyle": "long",
        "shirt": "#6d28d9",
        "pants": "#4c1d95",
        "acc": [
          "scarf",
          "badge"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "Art. 9.2 CE: corresponde a los poderes públicos promover las condiciones para que la libertad y la igualdad sean reales y efectivas.",
        "Ley Orgánica 3/2007 para la igualdad efectiva de mujeres y hombres: transversalidad (mainstreaming de género), planes de igualdad obligatorios en empresas de 50 o más trabajadores, principio de presencia equilibrada (40%-60%).",
        "Ley Orgánica 1/2004 de Medidas de Protección Integral contra la Violencia de Género: violencia ejercida sobre las mujeres por quienes sean o hayan sido sus cónyuges o parejas; Juzgados de Violencia sobre la Mujer, orden de protección y derechos laborales específicos.",
        "Ley 4/2023 para la igualdad real y efectiva de las personas trans y para la garantía de los derechos de las personas LGTBI: prohibición de terapias de conversión, autodeterminación de género y medidas contra la discriminación.",
        "Ley 39/2006 de Promoción de la Autonomía Personal y Atención a las personas en situación de dependencia (LAPAD): Sistema para la Autonomía y Atención a la Dependencia (SAAD). Tres grados: I (moderada), II (severa) y III (gran dependencia)."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w3-t9-q1",
      "q": "¿A partir de qué número de personas trabajadoras es obligatorio contar con un Plan de Igualdad en las empresas (LO 3/2007)?",
      "options": [
        "Empresas de 50 o más personas trabajadoras",
        "Empresas de más de 100 trabajadores",
        "Empresas de más de 250 trabajadores exclusivamente",
        "En todas las empresas sin importar plantilla"
      ],
      "answer": 0,
      "explain": "Art. 45.2 LO 3/2007 (tras reforma por RDL 6/2019): Las empresas de cincuenta o más personas trabajadoras deberán elaborar y aplicar un plan de igualdad."
    },
    {
      "id": "w3-t9-q2",
      "q": "¿Qué ámbito de agresión define la violencia de género según el artículo 1.1 de la Ley Orgánica 1/2004?",
      "options": [
        "La violencia que ejercen sobre las mujeres quienes sean o hayan sido sus cónyuges o quienes estén o hayan estado ligados a ellas por relaciones similares de afectividad",
        "Toda violencia ejercida en el entorno laboral",
        "Cualquier delito patrimonial contra una mujer",
        "Los conflictos entre vecinos"
      ],
      "answer": 0,
      "explain": "Art. 1.1 LO 1/2004: La violencia que, como manifestación de la discriminación y las relaciones de poder, se ejerce sobre las mujeres por parte de quienes sean o hayan sido sus cónyuges o estén o hayan estado ligados por análoga relación de afectividad, aun sin convivencia."
    },
    {
      "id": "w3-t9-q3",
      "q": "¿Cuáles son los tres grados de dependencia tipificados en el artículo 26 de la Ley 39/2006 (LAPAD)?",
      "options": [
        "Grado I (dependencia moderada), Grado II (dependencia severa) y Grado III (gran dependencia)",
        "Grado leve, grado medio y grado total",
        "Discapacidad del 33%, 65% y 75%",
        "Fase inicial, fase intermedia y fase asistida"
      ],
      "answer": 0,
      "explain": "Art. 26 Ley 39/2006: La situación de dependencia se clasifica en Grado I (dependencia moderada), Grado II (dependencia severa) y Grado III (gran dependencia)."
    }
  ],
  "bossQs": [
    {
      "id": "w3-t9-b1",
      "q": "¿Qué porcentaje define la composición o presencia equilibrada entre mujeres y hombres en listas electorales y órganos públicos?",
      "options": [
        "Ningún sexo debe tener una presencia inferior al 40% ni superior al 60%",
        "Paridad matemática exacta del 50% en todo caso",
        "Un mínimo del 25% para el sexo menos representado",
        "Un mínimo del 30% fijado por la LOREG"
      ],
      "answer": 0,
      "explain": "Disposición Adicional Primera LO 3/2007 y art. 44 bis LOREG: Presencia equilibrada de mujeres y hombres de forma que ningún sexo supere el 60 por 100 ni sea inferior al 40 por 100."
    },
    {
      "id": "w3-t9-b2",
      "q": "¿Qué prohíbe expresamente el artículo 17 de la Ley 4/2023 (Ley LGTBI y Trans)?",
      "options": [
        "La práctica de métodos, programas y terapias de aversión o conversión de la orientación sexual o identidad de género",
        "El matrimonio entre personas del mismo sexo",
        "La adopción por parejas de mujeres",
        "La colegiación profesional obligatoria"
      ],
      "answer": 0,
      "explain": "Art. 17 Ley 4/2023: Se prohíbe expresamente la práctica de métodos, programas y terapias de aversión o conversión destinadas a modificar la orientación o identidad sexual de las personas, incluso con consentimiento."
    },
    {
      "id": "w3-t9-b3",
      "q": "¿Qué instrumento individualizado establece los servicios y prestaciones idóneas para una persona dependiente según la Ley 39/2006?",
      "options": [
        "El Programa Individual de Atención (PIA)",
        "El catálogo de enfermedades raras",
        "El padrón de beneficiarios del SEPE",
        "La tarjeta sanitaria europea"
      ],
      "answer": 0,
      "explain": "Art. 29 Ley 39/2006: El Programa Individual de Atención (PIA) determinará las modalidades de intervención y los servicios o prestaciones más adecuados para la persona en situación de dependencia."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Leyes de Igualdad y Derechos Sociales",
    "prompt": "Empareja cada norma básica con su objeto principal de regulación.",
    "pairs": [
      [
        "LO 3/2007",
        "Igualdad efectiva, planes en empresas >50 y presencia equilibrada (40-60%)"
      ],
      [
        "LO 1/2004",
        "Protección integral contra la violencia ejercida por parejas o exparejas"
      ],
      [
        "Ley 4/2023",
        "Igualdad efectiva LGTBI y prohibición de terapias de aversión/conversión"
      ],
      [
        "Ley 39/2006",
        "Autonomía personal y atención a la dependencia en 3 grados mediante el PIA"
      ]
    ]
  },
  "boss": {
    "name": "El Patriarcal Discriminador",
    "kind": "king",
    "intro": [
      "¡Pagaré un 30% menos a las mujeres e ignoraré la brecha de género!"
    ],
    "defeat": [
      "¡Art. 14 CE y LO 3/2007! Registro retributivo obligatorio y principio de igual retribución por trabajo de igual valor."
    ]
  },
  "summary": [
    "Art. 9.2 y art. 14 CE: igualdad real y efectiva y no discriminación.",
    "LO 3/2007: transversalidad de género, presencia equilibrada (40-60%) y planes de igualdad obligatorios en empresas de 50 o más trabajadores.",
    "LO 1/2004 (Violencia de Género): cónyuge o análoga afectividad; Juzgados de Violencia sobre la Mujer.",
    "Ley 4/2023 (LGTBI y Trans): prohibición taxativa de terapias de aversión o conversión y autodeterminación.",
    "Ley 39/2006 (Dependencia): SAAD, 3 grados (I moderada, II severa, III gran dependencia) y Programa Individual de Atención (PIA)."
  ]
};

export const W3_T10: MiniWorldDef = {
  "id": "politicas-t10",
  "num": 10,
  "temaTitle": "Tema 10: Otras políticas públicas. El sistema sanitario: distribución de competencias, gestión y financiación. Política exterior y de cooperación al desarrollo. Régimen de telecomunicaciones y desarrollo de la sociedad de la información. La Agenda 2030 y los Objetivos de Desarrollo Sostenible.",
  "name": "Cúpula de la Salud y los ODS",
  "emoji": "🏥",
  "theme": "politicas",
  "color": "#0d9488",
  "enemy": "nube",
  "enemyName": "Desigualdades sanitarias",
  "npcs": [
    {
      "name": "Epidemióloga y Coordinadora ODS",
      "role": "Sistema Sanitario, Cooperación al Desarrollo y Agenda 2030",
      "look": {
        "skin": "#f5d0a9",
        "hair": "#2e2e2e",
        "hairStyle": "curly",
        "shirt": "#0f766e",
        "pants": "#134e4a",
        "acc": [
          "badge",
          "glasses"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "Art. 43 CE: se reconoce el derecho a la protección de la salud. Compete a los poderes públicos organizar y tutelar la salud pública.",
        "Ley 14/1986 General de Sanidad y Ley 16/2003 de cohesión y calidad del Sistema Nacional de Salud (SNS):",
        "• Competencias: sanidad exterior y bases y coordinación general de la sanidad (art. 149.1.16ª CE) corresponden al Estado; la gestión y ejecución de la asistencia sanitaria está transferida a las Comunidades Autónomas.",
        "• Consejo Interterritorial del SNS: órgano permanente de coordinación, cooperación y enlace entre el Ministerio de Sanidad y las CCAA.",
        "Cooperación Internacional para el Desarrollo: Ley 1/2023 de Cooperación para el Desarrollo Sostenible y la Solidaridad Global (compromiso de destinar el 0,7% de la RNB a AOD para 2030, AECID).",
        "Telecomunicaciones (Ley 11/2022 General de Telecomunicaciones): conectividad ultrarrápida, espectro radioeléctrico y despliegue 5G.",
        "Agenda 2030 y los 17 Objetivos de Desarrollo Sostenible (ODS): adoptados por la ONU en 2015 para poner fin a la pobreza, proteger el planeta y garantizar paz y prosperidad."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w3-t10-q1",
      "q": "¿Cómo se distribuyen las competencias en materia sanitaria según el art. 149.1.16ª de la Constitución?",
      "options": [
        "Sanidad exterior y bases y coordinación general de la sanidad corresponden al Estado; la gestión y asistencia sanitaria corresponde a las CCAA",
        "Toda la sanidad y gestión de hospitales corresponde en exclusiva al Estado",
        "Es una competencia exclusivamente local de los municipios",
        "No está prevista en la Constitución Española"
      ],
      "answer": 0,
      "explain": "Art. 149.1.16ª CE: El Estado tiene competencia exclusiva sobre sanidad exterior y sobre las bases y coordinación general de la sanidad. La asistencia y gestión de los servicios de salud está transferida a las CCAA."
    },
    {
      "id": "w3-t10-q2",
      "q": "¿Cuál es el órgano permanente de coordinación y enlace entre el Estado y las CCAA en el Sistema Nacional de Salud?",
      "options": [
        "El Consejo Interterritorial del Sistema Nacional de Salud",
        "La Conferencia Episcopal",
        "El Consejo de Seguridad Nacional",
        "La Comisión Mixta de Transferencias"
      ],
      "answer": 0,
      "explain": "Ley 16/2003: El Consejo Interterritorial del SNS, compuesto por la persona titular del Ministerio de Sanidad y los consejeros autonómicos de salud, es el órgano de cooperación y gobernanza del sistema sanitario."
    },
    {
      "id": "w3-t10-q3",
      "q": "¿Cuántos Objetivos de Desarrollo Sostenible (ODS) integran la Agenda 2030 aprobada por Naciones Unidas?",
      "options": [
        "17 Objetivos de Desarrollo Sostenible (ODS)",
        "10 Objetivos",
        "25 Objetivos",
        "12 Objetivos"
      ],
      "answer": 0,
      "explain": "La Agenda 2030 para el Desarrollo Sostenible, aprobada por la Asamblea General de la ONU en septiembre de 2015, consta de 17 ODS y 169 metas."
    }
  ],
  "bossQs": [
    {
      "id": "w3-t10-b1",
      "q": "¿Qué meta presupuestaria fija la Ley 1/2023 de Cooperación para el Desarrollo Sostenible respecto a la Ayuda Oficial al Desarrollo (AOD)?",
      "options": [
        "Destinar el 0,7% de la Renta Nacional Bruta a la AOD en el horizonte del año 2030",
        "El 1% del PIB inmediatamente",
        "El 0,2% sin fecha fija",
        "Un importe fijo de 10.000 millones de euros"
      ],
      "answer": 0,
      "explain": "Art. 4.1 Ley 1/2023: España asume el compromiso de destinar el 0,7% de la RNB a la Ayuda Oficial al Desarrollo (AOD) en el año 2030."
    },
    {
      "id": "w3-t10-b2",
      "q": "¿A qué agencia estatal le corresponde la gestión y fomento de las políticas de cooperación internacional para el desarrollo en España?",
      "options": [
        "A la Agencia Española de Cooperación Internacional para el Desarrollo (AECID)",
        "Al Instituto Cervantes exclusivamente",
        "A la Sociedad Estatal de Participaciones Industriales",
        "A la Dirección General de Protección Civil"
      ],
      "answer": 0,
      "explain": "La AECID es el principal órgano de gestión de la cooperación española, adscrita al Ministerio de Asuntos Exteriores, Unión Europea y Cooperación."
    },
    {
      "id": "w3-t10-b3",
      "q": "¿Cuál de las siguientes prestaciones sanitarias forma parte de la cartera común básica de servicios asistenciales del SNS (Ley 16/2003)?",
      "options": [
        "Atención primaria y especializada, urgencias, farmacia hospitalaria y transporte sanitario urgente",
        "Cirugía estética meramente embellecedora",
        "Tratamientos en balnearios privados sin prescripción médica",
        "Suministro gratuito de cosméticos"
      ],
      "answer": 0,
      "explain": "Art. 8 bis Ley 16/2003: La cartera común básica de servicios asistenciales comprende las actividades asistenciales de prevención, diagnóstico, tratamiento y rehabilitación cubiertas de forma completa."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Políticas Sanitarias, Cooperación y Agenda 2030",
    "prompt": "Empareja cada ámbito público con su mecanismo de gobernanza o meta legal.",
    "pairs": [
      [
        "Consejo Interterritorial SNS",
        "Coordinación y consenso entre Ministerio de Sanidad y CCAA"
      ],
      [
        "Agenda 2030",
        "17 Objetivos de Desarrollo Sostenible (ODS) adoptados por la ONU"
      ],
      [
        "Ley 1/2023 de Cooperación",
        "Meta de alcanzar el 0,7% de la RNB en AOD para el año 2030"
      ],
      [
        "Competencia sanitaria (149.1.16ª)",
        "Bases y sanidad exterior (Estado); gestión asistencial (CCAA)"
      ]
    ]
  },
  "boss": {
    "name": "El Contaminador Global",
    "kind": "cloud",
    "intro": [
      "¡Destruiré la cohesión sanitaria y bloquearé las metas de desarrollo sostenible!"
    ],
    "defeat": [
      "¡Art. 43 CE y Agenda 2030! Cohesión y universalidad del Sistema Nacional de Salud consolidadas."
    ]
  },
  "summary": [
    "Art. 43 CE: derecho a la protección de la salud.",
    "Sanidad (art. 149.1.16ª): bases y coordinación el Estado; gestión de la asistencia las CCAA. Consejo Interterritorial del SNS.",
    "Ley 1/2023 de Cooperación Internacional: compromiso vinculante del 0,7% de la RNB en AOD para 2030. AECID.",
    "Telecomunicaciones (Ley 11/2022): redes ultrarrápidas y conectividad inclusiva.",
    "Agenda 2030: 17 ODS y 169 metas para la sostenibilidad económica, social y ambiental."
  ]
};

export const W3: WorldDef = {
  id: "politicas",
  num: 3,
  bloque: "Bloque III",
  title: "III. Políticas Públicas",
  name: "Metrópolis Pública",
  emoji: "🌳",
  theme: "politicas",
  color: "#10b981",
  enemy: "nube",
  enemyName: "Nubes contaminantes",
  temas: [
    "Tema 1: Políticas de modernización de la Administración General del Estado. La Administración electrónica. Acceso electrónico de los ciudadanos a los servicios públicos. La Agenda Digital para España. La calidad de los servicios públicos y de atención al ciudadano. Mejora Regulatoria y Análisis de Impacto Normativo.",
    "Tema 2: Política económica actual. Política presupuestaria. Evolución y distribución actual del gasto público. Política fiscal. La unidad de mercado.",
    "Tema 3: Política ambiental. Distribución de competencias. Conservación de la biodiversidad. Prevención de la contaminación y el cambio climático.",
    "Tema 4: La Seguridad Social: estructura y financiación. Problemas actuales y líneas de actuación. El régimen general y los regímenes especiales. La acción protectora de la Seguridad Social. Tipos y características de las prestaciones.",
    "Tema 5: La evolución del empleo en España. Los servicios públicos de empleo: régimen de prestaciones y políticas de empleo.",
    "Tema 6: Política de inmigración. Régimen de los extranjeros en España. Derecho de asilo y condición de refugiado.",
    "Tema 7: El Gobierno Abierto: concepto, principios informadores y planes de acción de España. La Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno.",
    "Tema 8: La protección de datos personales y su régimen jurídico: principios, derechos, responsable y encargado del tratamiento, delegado y autoridades de protección de datos. Derechos digitales.",
    "Tema 9: Políticas de igualdad y contra la violencia de género: régimen jurídico. Políticas de igualdad de trato y no discriminación de las personas LGTBI. Discapacidad y dependencia: régimen jurídico.",
    "Tema 10: Otras políticas públicas. El sistema sanitario: distribución de competencias, gestión y financiación. Política exterior y de cooperación al desarrollo. Régimen de telecomunicaciones y desarrollo de la sociedad de la información. La Agenda 2030 y los Objetivos de Desarrollo Sostenible."
],
  miniWorlds: [W3_T1, W3_T2, W3_T3, W3_T4, W3_T5, W3_T6, W3_T7, W3_T8, W3_T9, W3_T10],
  npcs: [
    W3_T1.npcs[0],
    W3_T2.npcs[0],
    W3_T3.npcs[0],
    W3_T4.npcs[0]
  ],
  blockQs: [
    W3_T1.blockQs[0],
    W3_T2.blockQs[0],
    W3_T3.blockQs[0],
    W3_T4.blockQs[0],
    W3_T5.blockQs[0],
    W3_T6.blockQs[0],
    W3_T7.blockQs[0],
    W3_T8.blockQs[0],
    W3_T9.blockQs[0],
    W3_T10.blockQs[0]
  ],
  bossQs: [
    W3_T1.bossQs[0],
    W3_T2.bossQs[0],
    W3_T3.bossQs[0],
    W3_T4.bossQs[0],
    W3_T5.bossQs[0],
    W3_T6.bossQs[0],
    W3_T7.bossQs[0],
    W3_T8.bossQs[0]
  ],
  mini: {
  "type": "order",
  "title": "Gran Desafío del Bloque III: Fases del Ciclo de las Políticas Públicas",
  "prompt": "Ordena las fases teóricas y metodológicas del ciclo de una política pública.",
  "items": [
    "Identificación del problema público y definición del reto social",
    "Entrada en la agenda política e institucional",
    "Formulación de alternativas y análisis de impacto previo (MAIN)",
    "Toma de decisión y aprobación normativa o presupuestaria",
    "Implementación y despliegue organizativo por las Administraciones públicas",
    "Evaluación ex post de resultados, eficacia y rendición de cuentas"
  ]
},
  boss: {
  "name": "El Gran Burócrata Gris",
  "kind": "cloud",
  "intro": [
    "¡JA, JA, JA! ¡La Administración electrónica fallará, la brecha de género continuará y los datos serán expuestos!",
    "Para derrotarme deberás responder preguntas sobre todos los 10 temas oficiales del Bloque III. ¡Acepta el reto!"
  ],
  "defeat": [
    "¡Increíble! La modernización digital, la transparencia, la igualdad y el Estado del Bienestar han prevalecido."
  ]
},
  summary: [
  "Modernización: Ley 39/2015 (relación electrónica obligatoria para personas jurídicas y colectivos art. 14.2), ENS (RD 311/2022) y ENI.",
  "Economía y fiscalidad: art. 31 (progresividad), art. 135 (estabilidad y deuda), LO 2/2012, AIReF y Ley 20/2013 de Unidad de Mercado.",
  "Medio ambiente: art. 49.1.23ª (bases Estado, gestión CCAA). Ley 7/2021 (neutralidad 2050, ZBE en >50.000 hab). EAE y EIA.",
  "Seguridad Social: TRLGSS, separación de fuentes, INSS (económicas) y TGSS (patrimonio, caja única, recaudación). IMV (Ley 19/2021).",
  "Empleo: Ley 3/2023. Desempleo contributivo (360 días en 6 años; 70% y 60%) y asistencial (<75% SMI; mayores 52 cotiza).",
  "Extranjería: LO 4/2000 (estancia, residencia temporal y larga duración 5 años). Asilo (Ley 12/2009, CIAR, non-refoulement).",
  "Transparencia: Ley 19/2013 (publicidad activa, acceso universal en 1 mes silencio negativo, CTBG).",
  "Protección de datos: RGPD y LOPDGDD. DPD obligatorio en AAPP. Brechas en 72h. Derechos ARSULPO y derechos digitales.",
  "Igualdad: LO 3/2007 (planes >50 trabajadores, presencia equilibrada 40-60%), LO 1/2004 (violencia de género), Ley 4/2023 (LGTBI) y Ley 39/2006 (dependencia).",
  "Sanidad y ODS: art. 149.1.16ª (bases Estado, gestión CCAA), Consejo Interterritorial del SNS. Ley 1/2023 Cooperación (0,7% RNB en 2030) y 17 ODS."
],
};
