import type { MiniWorldDef, Question, WorldDef } from "./types";

export const Q = (id: string, q: string, options: string[], answer: number, explain: string): Question => ({
  id,
  q,
  options,
  answer,
  explain,
});

/* ==================== BLOQUE VI: GESTIÓN FINANCIERA Y SEGURIDAD SOCIAL (8 TEMAS BOE) ==================== */

export const W6_T1: MiniWorldDef = {
  "id": "hacienda-t1",
  "num": 1,
  "temaTitle": "Tema 1: El presupuesto. Concepto y clases. La Ley General Presupuestaria: principios generales y estructura. Las leyes de estabilidad presupuestaria.",
  "name": "Bóveda de la Ley Presupuestaria",
  "emoji": "🏦",
  "theme": "hacienda",
  "color": "#eab308",
  "enemy": "moneda",
  "enemyName": "Déficits descontrolados",
  "npcs": [
    {
      "name": "Director General de Presupuestos",
      "role": "Concepto presupuestario, LGP 47/2003 y estabilidad presupuestaria (LO 2/2012)",
      "look": {
        "skin": "#f3c9a0",
        "hair": "#4b5563",
        "hairStyle": "short",
        "shirt": "#ca8a04",
        "pants": "#713f12",
        "acc": [
          "tie",
          "glasses"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "El presupuesto es la expresión cifrada, conjunta y sistemática de los derechos y obligaciones a liquidar durante el ejercicio por cada uno de los órganos del sector público estatal (art. 32 Ley 47/2003 General Presupuestaria, LGP).",
        "Principios presupuestarios clásicos:",
        "1. Principio de legalidad presupuestaria (art. 134.1 CE): corresponde a las Cortes Generales examinar, enmendar y aprobar los PGE.",
        "2. Principio de anualidad (art. 134.2 CE): coinciden con el año natural (1 de enero al 31 de diciembre).",
        "3. Principio de unidad y universalidad (art. 27 LGP): presupuesto único que contiene la totalidad de los ingresos y gastos sin compensaciones entre sí (presupuesto bruto).",
        "4. Principio de especialidad de los créditos: cualitativa (gastarse en el fin legal art. 42), cuantitativa (no rebasar el límite fijado art. 43) y temporal (ejercicio anual art. 49).",
        "Leyes de estabilidad presupuestaria (art. 135 CE y LO 2/2012): equilibrio estructural, sostenibilidad de la deuda pública y prioridad absoluta del pago del servicio de la deuda."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w6-t1-q1",
      "q": "¿En qué consiste la triple vertiente del principio de especialidad presupuestaria según los artículos 42, 43 y 49 de la LGP?",
      "options": [
        "Especialidad cualitativa (destino del crédito), cuantitativa (importe máximo) y temporal (ejercicio corriente)",
        "Especialidad territorial, funcional y bancaria",
        "Especialidad en nóminas, inversiones y deuda",
        "Especialidad contable, fiscal y mercantil"
      ],
      "answer": 0,
      "explain": "Arts. 42, 43 y 49 Ley 47/2003 (LGP): Los créditos para gastos se destinarán exclusivamente a la finalidad específica para la que hayan sido autorizados (cualitativa), no podrán adquirirse compromisos de gasto por cuantía superior a su importe (cuantitativa) y con cargo a los créditos de un ejercicio sólo podrán contraerse obligaciones de ese año (temporal)."
    },
    {
      "id": "w6-t1-q2",
      "q": "¿Qué exige el principio presupuestario de universalidad según el artículo 27.2 de la Ley 47/2003?",
      "options": [
        "Los derechos y obligaciones se consignarán por su importe íntegro, sin que puedan atenderse gastos mediante minoración de derechos",
        "Que el presupuesto sea universalmente traducido a todas las lenguas",
        "Que todos los ciudadanos reciban una subvención",
        "Que no existan límites de gasto para ningún ministerio"
      ],
      "answer": 0,
      "explain": "Art. 27.2 LGP: Los derechos liquidados y las obligaciones reconocidas se aplicarán a los presupuestos por su importe íntegro, quedando terminantemente prohibido atender gastos mediante una minoración en la recaudación (presupuesto bruto)."
    },
    {
      "id": "w6-t1-q3",
      "q": "¿Qué fecha límite fija el artículo 134.3 de la Constitución para que el Gobierno presente el proyecto de PGE ante el Congreso?",
      "options": [
        "Al menos tres meses antes de la expiración de los del año anterior (antes del 1 de octubre)",
        "Antes del 31 de diciembre",
        "Antes del 1 de julio",
        "Antes del 15 de noviembre"
      ],
      "answer": 0,
      "explain": "Art. 134.3 CE: El Gobierno deberá presentar ante el Congreso de los Diputados los Presupuestos Generales del Estado al menos tres meses antes de la expiración de los del año anterior (es decir, antes del 1 de octubre)."
    }
  ],
  "bossQs": [
    {
      "id": "w6-t1-b1",
      "q": "¿Qué ocurre automáticamente si la Ley de Presupuestos Generales del Estado no se aprueba antes del primer día del ejercicio económico (art. 134.4 CE)?",
      "options": [
        "Se consideran automáticamente prorrogados los presupuestos del ejercicio anterior hasta la aprobación de los nuevos",
        "El Estado paraliza todos los pagos y se cierra la Administración",
        "Se convocan inmediatamente elecciones generales",
        "Se aprueba el presupuesto provisional por decreto del Rey"
      ],
      "answer": 0,
      "explain": "Art. 134.4 CE: Si la Ley de Presupuestos no se aprobara antes del primer día del ejercicio económico correspondiente, se considerarán automáticamente prorrogados los Presupuestos del ejercicio anterior hasta la aprobación de los nuevos."
    },
    {
      "id": "w6-t1-b2",
      "q": "¿Qué principio presupuestario consagra la Ley Orgánica 2/2012 definiéndolo como la capacidad para financiar los compromisos de gasto presentes y futuros dentro de los límites de déficit y deuda?",
      "options": [
        "Principio de sostenibilidad financiera (art. 4 LO 2/2012)",
        "Principio de anualidad de caja",
        "Principio de no afectación de ingresos",
        "Principio de neutralidad impositiva"
      ],
      "answer": 0,
      "explain": "Art. 4 LO 2/2012: Se entenderá por sostenibilidad financiera la capacidad para financiar los compromisos de gasto presentes y futuros dentro de los límites de déficit y de deuda pública fijados en la ley y en la normativa europea."
    },
    {
      "id": "w6-t1-b3",
      "q": "¿Puede la Ley de Presupuestos Generales del Estado crear nuevos tributos según el artículo 134.7 de la Constitución?",
      "options": [
        "No puede crear tributos; solo puede modificarlos cuando una ley tributaria sustantiva así lo prevea",
        "Sí, puede crear cualquier impuesto libremente",
        "Puede crear tributos siempre que lo autorice el Senado",
        "Solo puede crear impuestos especiales sobre el tabaco y alcohol"
      ],
      "answer": 0,
      "explain": "Art. 134.7 CE: La Ley de Presupuestos no puede crear tributos. Podrá modificarlos cuando una ley tributaria sustantiva así lo prevea."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Principios Presupuestarios Básicos",
    "prompt": "Empareja cada principio con su definición legal en la CE y la LGP.",
    "pairs": [
      [
        "Legalidad presupuestaria",
        "Aprobación exclusiva de los PGE por las Cortes Generales (art. 134 CE)"
      ],
      [
        "Universalidad / Presupuesto bruto",
        "Prohibición de minorar ingresos para atender gastos (art. 27 LGP)"
      ],
      [
        "Especialidad cualitativa",
        "Créditos destinados exclusivamente al fin para el que se aprobaron (art. 42)"
      ],
      [
        "Prórroga automática",
        "Si no hay ley aprobada el 1 de enero, prorrogan los anteriores (art. 134.4)"
      ]
    ]
  },
  "boss": {
    "name": "El Derrochador Ilegal",
    "kind": "moneda",
    "intro": [
      "¡Comprometeré gastos por encima del crédito aprobado sin cobertura presupuestaria!"
    ],
    "defeat": [
      "¡Art. 46 LGP! Los compromisos de gastos que excedan del límite del crédito presupuestario son nulos de pleno derecho."
    ]
  },
  "summary": [
    "Presupuesto (art. 32 LGP): expresión cifrada, conjunta y sistemática de derechos y obligaciones.",
    "Principios: legalidad (Cortes aprueban art. 134 CE), anualidad (año natural), universalidad (bruto, sin compensaciones art. 27 LGP), especialidad (cualitativa, cuantitativa y temporal).",
    "Plazo de presentación (art. 134.3 CE): antes del 1 de octubre. Prórroga automática si no se aprueba el 1 de enero.",
    "Tributos en PGE (art. 134.7 CE): no pueden crearse; solo modificarse si lo prevé ley sustantiva.",
    "LO 2/2012: estabilidad presupuestaria, sostenibilidad financiera y regla de gasto."
  ]
};

export const W6_T2: MiniWorldDef = {
  "id": "hacienda-t2",
  "num": 2,
  "temaTitle": "Tema 2: Las leyes anuales de presupuestos. Su contenido. El presupuesto del Estado. Principios de programación y de gestión. Contenido, elaboración y estructura. Desglose de aplicaciones presupuestarias.",
  "name": "Taller de la Estructura Presupuestaria",
  "emoji": "📊",
  "theme": "hacienda",
  "color": "#ca8a04",
  "enemy": "moneda",
  "enemyName": "Partidas desviadas",
  "npcs": [
    {
      "name": "Jefe de Servicio de Estructura Presupuestaria",
      "role": "Clasificación orgánica, funcional y económica de los créditos",
      "look": {
        "skin": "#fcd5b5",
        "hair": "#2e2e2e",
        "hairStyle": "short",
        "shirt": "#a16207",
        "pants": "#713f12",
        "acc": [
          "glasses",
          "tie"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "Estructura del presupuesto de gastos en la AGE (art. 39 a 41 LGP):",
        "Toda aplicación presupuestaria de gasto se define por tres clasificaciones:",
        "1. Clasificación orgánica (¿Quién gasta?): identifica la sección (departamento ministerial u órgano constitucional: Secciones 01 a 37) y el servicio presupuestario (dirección general o centro directivo).",
        "2. Clasificación funcional por programas (¿Para qué se gasta?): clasifica los créditos según los objetivos públicos a alcanzar (Área de gasto, Política de gasto, Grupo de programas y Programa de gasto).",
        "3. Clasificación económica (¿En qué se gasta?): naturaleza económica del gasto agrupada en capítulos:",
        "• Operaciones corrientes: Cap. 1 (Gastos de personal), Cap. 2 (Gastos corrientes en bienes y servicios), Cap. 3 (Gastos financieros) y Cap. 4 (Transferencias corrientes).",
        "• Operaciones de capital: Cap. 6 (Inversiones reales) y Cap. 7 (Transferencias de capital).",
        "• Operaciones financieras: Cap. 8 (Activos financieros) y Cap. 9 (Pasivos financieros: amortización de deuda).",
        "Presupuesto de ingresos: clasificado orgánicamente y económicamente (Capítulos 1 a 9)."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w6-t2-q1",
      "q": "¿A qué capítulo de la clasificación económica de gastos de los PGE corresponden los 'Gastos de personal'?",
      "options": [
        "Capítulo 1",
        "Capítulo 2",
        "Capítulo 4",
        "Capítulo 6"
      ],
      "answer": 0,
      "explain": "En la clasificación económica de los PGE, el Capítulo 1 recoge todos los gastos de personal (retribuciones básicas, complementarias, cuotas a la Seguridad Social, etc.)."
    },
    {
      "id": "w6-t2-q2",
      "q": "¿Cuáles son los capítulos del estado de gastos de los PGE que constituyen las 'operaciones corrientes'?",
      "options": [
        "Capítulos 1 (Personal), 2 (Bienes y servicios), 3 (Financieros) y 4 (Transferencias corrientes)",
        "Capítulos 6 y 7 exclusivamente",
        "Capítulos 8 y 9 exclusivamente",
        "Capítulos 1 a 9 íntegramente"
      ],
      "answer": 0,
      "explain": "La estructura económica de gastos clasifica como operaciones corrientes los Capítulos 1 a 4; como operaciones de capital los Capítulos 6 y 7; y como operaciones financieras los Capítulos 8 y 9."
    },
    {
      "id": "w6-t2-q3",
      "q": "¿Qué información proporciona la 'clasificación orgánica' en una aplicación presupuestaria de los PGE?",
      "options": [
        "Indica el órgano gestor responsable del gasto (Sección ministerial y Servicio presupuestario)",
        "La naturaleza del bien adquirido",
        "El objetivo social del programa público",
        "El banco donde está depositado el dinero"
      ],
      "answer": 0,
      "explain": "La clasificación orgánica responde a la pregunta de '¿quién gasta?', agrupando los créditos por secciones presupuestarias (Ministerios u órganos constitucionales) y servicios (centros directivos)."
    }
  ],
  "bossQs": [
    {
      "id": "w6-t2-b1",
      "q": "¿A qué capítulo de la clasificación económica corresponden las 'Inversiones reales' según la LGP?",
      "options": [
        "Capítulo 6",
        "Capítulo 2",
        "Capítulo 7",
        "Capítulo 9"
      ],
      "answer": 0,
      "explain": "El Capítulo 6 de la estructura económica de gastos agrupa los créditos destinados a inversiones reales directas de la Administración (obras, edificios, maquinaria, infraestructuras)."
    },
    {
      "id": "w6-t2-b2",
      "q": "¿A qué capítulo del presupuesto de gastos corresponde la amortización de la deuda pública (pasivos financieros)?",
      "options": [
        "Capítulo 9",
        "Capítulo 3",
        "Capítulo 8",
        "Capítulo 5"
      ],
      "answer": 0,
      "explain": "El Capítulo 9 agrupa los pasivos financieros (amortización y devolución del principal de la deuda pública); mientras que los intereses de la deuda se imputan al Capítulo 3 (gastos financieros)."
    },
    {
      "id": "w6-t2-b3",
      "q": "¿Cuál es la unidad básica presupuestaria a efectos de la asignación y seguimiento de objetivos en los PGE?",
      "options": [
        "El programa de gasto",
        "El capítulo contable",
        "La partida provincial",
        "La subcuenta bancaria"
      ],
      "answer": 0,
      "explain": "Art. 35 LGP: Los créditos presupuestarios se estructuran a través de programas de gasto, que constituyen la unidad básica para la presupuestación por objetivos y la rendición de cuentas."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Capítulos de la Clasificación Económica de Gastos",
    "prompt": "Empareja cada Capítulo económico de gasto con su contenido sustantivo.",
    "pairs": [
      [
        "Capítulo 1",
        "Gastos de personal (nóminas, trienios y cotizaciones)"
      ],
      [
        "Capítulo 2",
        "Gastos corrientes en bienes y servicios (suministros, alquileres)"
      ],
      [
        "Capítulo 3",
        "Gastos financieros (intereses de la deuda pública y préstamos)"
      ],
      [
        "Capítulo 6",
        "Inversiones reales (infraestructuras, obras y equipamientos)"
      ]
    ]
  },
  "boss": {
    "name": "El Imputador Indebido",
    "kind": "moneda",
    "intro": [
      "¡He pagado la compra de un edificio de 20 millones con cargo al Capítulo 2 de material de oficina!"
    ],
    "defeat": [
      "¡Vulneración de la especialidad cualitativa (art. 42 LGP)! Reparo contable e imputación obligatoria al Capítulo 6 de Inversiones Reales."
    ]
  },
  "summary": [
    "Estructura presupuestaria de gastos: Orgánica (¿quién gasta? Secciones y Servicios), Funcional por programas (¿para qué se gasta? Programas) y Económica (¿en qué se gasta? Capítulos 1 a 9).",
    "Operaciones corrientes (Cap. 1 a 4): 1 Personal, 2 Bienes y servicios, 3 Financieros (intereses), 4 Transferencias corrientes.",
    "Operaciones de capital (Cap. 6 y 7): 6 Inversiones reales, 7 Transferencias de capital.",
    "Operaciones financieras (Cap. 8 y 9): 8 Activos financieros, 9 Pasivos financieros (amortización de deuda).",
    "Presupuesto por programas (art. 35 LGP): asignación eficiente de recursos vinculada a objetivos medibles."
  ]
};

export const W6_T3: MiniWorldDef = {
  "id": "hacienda-t3",
  "num": 3,
  "temaTitle": "Tema 3: Gastos plurianuales. Modificaciones de los créditos iniciales. Transferencias de crédito. Créditos extraordinarios. Suplementos de crédito. Ampliaciones de créditos. Incorporaciones de créditos. Generaciones de créditos.",
  "name": "Laboratorio de Modificaciones Presupuestarias",
  "emoji": "🔄",
  "theme": "hacienda",
  "color": "#a16207",
  "enemy": "moneda",
  "enemyName": "Créditos inflados",
  "npcs": [
    {
      "name": "Jefe de Modificaciones de Crédito",
      "role": "Gastos plurianuales y modificaciones presupuestarias (LGP)",
      "look": {
        "skin": "#f3c9a0",
        "hair": "#4b5563",
        "hairStyle": "short",
        "shirt": "#854d0e",
        "pants": "#543007",
        "acc": [
          "glasses",
          "tie"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "Gastos plurianuales (art. 47 LGP): compromisos de gasto que hayan de extenderse a ejercicios posteriores (contratos, convenios, subvenciones). Límites temporales: no podrán exceder de 4 ejercicios posteriores. Límites porcentuales: año 1 (70%), año 2 (60%), año 3 (50%) y año 4 (50%) calculados sobre el crédito inicial a nivel de vinculación.",
        "Modificaciones de crédito (arts. 51 a 60 LGP):",
        "1. Transferencias de crédito (art. 52): trasvasan crédito de una aplicación a otra sin alterar la cuantía total. Limitaciones: no entre distintas secciones, no de operaciones de capital a corrientes, ni minorar créditos ampliables o extraordinarios.",
        "2. Créditos extraordinarios y suplementos de crédito (arts. 55 y 56): para gastos inaplazables sin crédito (extraordinario) o con crédito insuficiente (suplemento). Competencia: Ley de Cortes si afecta a PGE y se financia con deuda pública, o Acuerdo de Consejo de Ministros si se financia con el Fondo de Contingencia.",
        "3. Ampliaciones de crédito (art. 54): créditos tasados en el anexo de la Ley de PGE (pensiones de clases pasivas, deuda pública, cuotas de Seguridad Social).",
        "4. Generaciones de crédito (art. 53): por ingresos no previstos o superiores (reintegros, venta de bienes, prestación de servicios).",
        "5. Incorporaciones de crédito (art. 58): remanentes de crédito del ejercicio anterior en supuestos tasados."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w6-t3-q1",
      "q": "¿Cuáles son los límites temporales y porcentuales ordinarios de los gastos plurianuales según el artículo 47 de la LGP?",
      "options": [
        "Máximo de 4 ejercicios posteriores; porcentajes: 70% (año 1), 60% (año 2), 50% (año 3 y 4)",
        "Máximo de 2 años al 100%",
        "Hasta 10 años sin límite de porcentaje",
        "Máximo de 3 años al 30% anual"
      ],
      "answer": 0,
      "explain": "Art. 47.2 LGP: El número de ejercicios a los que pueden aplicarse los gastos no será superior a cuatro, con los siguientes límites máximos: 70% en el ejercicio inmediato siguiente, 60% en el segundo ejercicio, y 50% en los ejercicios tercero y cuarto."
    },
    {
      "id": "w6-t3-q2",
      "q": "¿Cuál es la modificación de crédito que traslada importes entre aplicaciones presupuestarias sin alterar el importe global del presupuesto?",
      "options": [
        "La transferencia de crédito (art. 52 LGP)",
        "El suplemento de crédito",
        "La generación de crédito",
        "La incorporación de crédito"
      ],
      "answer": 0,
      "explain": "Art. 52.1 LGP: Las transferencias son modificaciones del presupuesto de gastos que trasladan el importe total o parcial de un crédito entre distintas partidas presupuestarias sin alterar la cuantía total del presupuesto."
    },
    {
      "id": "w6-t3-q3",
      "q": "¿En qué se diferencia un 'crédito extraordinario' de un 'suplemento de crédito' en la LGP?",
      "options": [
        "El crédito extraordinario se aplica cuando no existe consignación presupuestaria; el suplemento cuando el crédito existente es insuficiente",
        "El crédito extraordinario solo es para desastres naturales",
        "El suplemento de crédito no necesita financiación",
        "Son términos exactamente sinónimos sin diferencia"
      ],
      "answer": 0,
      "explain": "Art. 55.1 LGP: Cuando haya de realizarse con cargo al presupuesto un gasto específico y urgente que no pueda demorarse y no exista crédito (crédito extraordinario) o sea insuficiente (suplemento de crédito)."
    }
  ],
  "bossQs": [
    {
      "id": "w6-t3-b1",
      "q": "¿Qué fondo presupuestario consignado en el Capítulo 5 financia las necesidades imprevistas y no discrecionales a lo largo del año?",
      "options": [
        "El Fondo de Contingencia de ejecución presupuestaria (art. 50 LGP)",
        "La caja de ahorros postal",
        "El Fondo de Reserva de pensiones",
        "La cuenta de depósitos judiciales"
      ],
      "answer": 0,
      "explain": "Art. 50 LGP: La Ley de Presupuestos incluirá en la Sección 36 un crédito denominado 'Fondo de Contingencia de ejecución presupuestaria', por importe del dos por ciento del límite de gasto no financiero, para atender necesidades imprevistas no discrecionales."
    },
    {
      "id": "w6-t3-b2",
      "q": "¿Qué limitación expresa impone el art. 52.1 de la LGP a las transferencias de crédito?",
      "options": [
        "No podrán realizarse entre créditos de distintas secciones presupuestarias, ni minorar créditos de capital para destinarlos a operaciones corrientes",
        "Solo pueden hacerse en el mes de diciembre",
        "Requieren siempre ley formal de las Cortes",
        "No pueden realizarse dentro del mismo ministerio"
      ],
      "answer": 0,
      "explain": "Art. 52.1 LGP: Las transferencias de crédito no podrán minorar créditos extraordinarios o ampliados, ni transferirse entre distintas secciones, ni minorar operaciones de capital para aumentar créditos de operaciones corrientes."
    },
    {
      "id": "w6-t3-b3",
      "q": "¿Qué órgano es competente para autorizar gastos plurianuales que superen los límites de porcentaje o número de ejercicios (art. 47.3 LGP)?",
      "options": [
        "El Consejo de Ministros, a propuesta del Ministro de Hacienda",
        "El Director General del Presupuesto",
        "El Defensor del Pueblo",
        "El Presidente del Tribunal de Cuentas"
      ],
      "answer": 0,
      "explain": "Art. 47.3 LGP: El Consejo de Ministros, a propuesta del Ministro de Hacienda y previo informe de la Dirección General de Presupuestos, podrá acordar la modificación de los porcentajes, incrementar el número de anualidades o autorizar compromisos adicionales."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Tipología de Modificaciones de Crédito (LGP)",
    "prompt": "Empareja cada modificación presupuestaria con su causa habilitante.",
    "pairs": [
      [
        "Transferencia de crédito",
        "Trasvase de crédito entre partidas sin variar el gasto total (art. 52)"
      ],
      [
        "Crédito extraordinario",
        "Gasto específico, urgente e inaplazable para el que no existe consignación"
      ],
      [
        "Suplemento de crédito",
        "Gasto urgente e inaplazable para el que el crédito existente resulta insuficiente"
      ],
      [
        "Generación de crédito",
        "Incremento de crédito derivado de ingresos no previstos o superiores (art. 53)"
      ]
    ]
  },
  "boss": {
    "name": "El Trasvasador Ilegal",
    "kind": "moneda",
    "intro": [
      "¡He transferido 50 millones de inversiones reales a dietas de altos cargos entre ministerios distintos!"
    ],
    "defeat": [
      "¡Art. 52 LGP! Prohibición legal taxativa de transferir de capital a corriente y entre secciones distintas. Modificación nula."
    ]
  },
  "summary": [
    "Gastos plurianuales (art. 47 LGP): máx. 4 ejercicios. Porcentajes: 70% (año 1), 60% (año 2), 50% (año 3 y 4). Superación por Acuerdo de Consejo de Ministros.",
    "Modificaciones presupuestarias: transferencias (no entre secciones, no de capital a corriente), generaciones (por mayores ingresos art. 53), ampliaciones (tasadas art. 54).",
    "Créditos extraordinarios (no hay crédito) y Suplementos (insuficiente). Financiados por el Fondo de Contingencia (Sección 36, 2% del límite de gasto).",
    "Incorporación de remanentes (art. 58): supuestos tasados de créditos del ejercicio anterior."
  ]
};

export const W6_T4: MiniWorldDef = {
  "id": "hacienda-t4",
  "num": 4,
  "temaTitle": "Tema 4: Control del gasto público en España. La Intervención General de la Administración del Estado. Función interventora, control financiero permanente y auditoría pública. El Tribunal de Cuentas.",
  "name": "Corte del Control Financiero e IGAE",
  "emoji": "🛡️",
  "theme": "hacienda",
  "color": "#ca8a04",
  "enemy": "reloj",
  "enemyName": "Reparos desatendidos",
  "npcs": [
    {
      "name": "Interventor General del Estado",
      "role": "Función interventora, control permanente, auditoría pública y Tribunal de Cuentas",
      "look": {
        "skin": "#f3c9a0",
        "hair": "#2e2e2e",
        "hairStyle": "short",
        "shirt": "#854d0e",
        "pants": "#3f2c06",
        "acc": [
          "tie",
          "glasses"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "Control del gasto público en España: interno (IGAE) y externo (Tribunal de Cuentas).",
        "1. Control interno: Intervención General de la Administración del Estado (IGAE, Título VI LGP, arts. 140 a 175):",
        "• Función interventora (control de legalidad previa): fiscalización previa de actos que reconozcan derechos o gastos. Si el interventor encuentra disconformidad emite un REPARO. Si es reparo suspensivo, paraliza el expediente hasta su subsanación o resolución de discrepancia por el Consejo de Ministros.",
        "• Control financiero permanente: verificación continua de la legalidad, eficacia, eficiencia y economía de la gestión económico-financiera.",
        "• Auditoría pública: revisión ex post de cuentas anuales y sistemas de gestión de entidades públicas.",
        "2. Control externo: Tribunal de Cuentas (art. 136 CE y LO 2/1982):",
        "• Supremo órgano fiscalizador de las cuentas y de la gestión económica del Estado y del sector público.",
        "• Depende directamente de las Cortes Generales. Ejerce dos funciones: fiscalizadora (informe o Declaración de la Cuenta General del Estado) y jurisdiccional (enjuiciamiento contable de la responsabilidad contable de quienes manejen caudales públicos)."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w6-t4-q1",
      "q": "¿Cuáles son las tres modalidades que integran el control interno de la gestión económico-financiera ejercido por la IGAE (art. 141 LGP)?",
      "options": [
        "La función interventora, el control financiero permanente y la auditoría pública",
        "La inspección de policía, el arbitraje y la mediación",
        "El control civil, el penal y el mercantil",
        "La fiscalización parlamentaria, la prensa libre y el defensor del pueblo"
      ],
      "answer": 0,
      "explain": "Art. 141 LGP: El control interno de la gestión económico-financiera del sector público estatal se ejercerá por la Intervención General de la Administración del Estado mediante la función interventora, el control financiero permanente y la auditoría pública."
    },
    {
      "id": "w6-t4-q2",
      "q": "¿Qué efecto inmediato produce la formalización de un reparo en el ejercicio de la función interventora según el art. 154 LGP?",
      "options": [
        "Suspende la tramitación del expediente hasta que sea subsanada la falta o resuelta la discrepancia",
        "El archivo definitivo y destrucción del expediente",
        "La dimisión automática del subsecretario",
        "La derivación obligatoria al juzgado de guardia en 24 horas"
      ],
      "answer": 0,
      "explain": "Art. 154.1 LGP: Si la Intervención se manifiesta en desacuerdo con el contenido de los actos examinados formulará sus reparos por escrito. La formulación del reparo suspenderá la tramitación del expediente."
    },
    {
      "id": "w6-t4-q3",
      "q": "¿Cuáles son las dos funciones constitucionales esenciales del Tribunal de Cuentas (art. 136 CE y LO 2/1982)?",
      "options": [
        "La función fiscalizadora del sector público y la función de enjuiciamiento contable de la responsabilidad contable",
        "La función legislativa y la ejecutiva presupuestaria",
        "La función de emitir moneda y recaudar tributos",
        "La fijación del IPC y la inspección laboral"
      ],
      "answer": 0,
      "explain": "Art. 136 CE y LO 2/1982: El Tribunal de Cuentas ejerce la función fiscalizadora de las cuentas del sector público y la función jurisdiccional de enjuiciamiento de la responsabilidad contable en que incurran quienes manejen caudales públicos."
    }
  ],
  "bossQs": [
    {
      "id": "w6-t4-b1",
      "q": "Si el órgano gestor discrepa de un reparo de la Intervención Delegada ministerial, ¿quién resuelve en última instancia la discrepancia (art. 155 LGP)?",
      "options": [
        "El Consejo de Ministros, si se mantiene la discrepancia tras el informe de la IGAE",
        "El Ministro de Justicia en exclusiva",
        "El Tribunal Supremo en Sala Plena",
        "El Delegado del Gobierno territorial"
      ],
      "answer": 0,
      "explain": "Art. 155.2 LGP: Cuando se mantenga la discrepancia frente al criterio de la Intervención General, corresponderá al Consejo de Ministros adoptar la resolución definitiva."
    },
    {
      "id": "w6-t4-b2",
      "q": "¿A través de qué documento anual remite el Tribunal de Cuentas a las Cortes Generales el resultado de su fiscalización de las cuentas públicas?",
      "options": [
        "La Declaración sobre la Cuenta General del Estado (informe o memoria anual)",
        "El anteproyecto de presupuestos generales",
        "El boletín de liquidación tributaria",
        "El certificado de caja única"
      ],
      "answer": 0,
      "explain": "Art. 136.2 CE: Las cuentas del Estado y del sector público estatal se rendirán al Tribunal de Cuentas y serán censuradas por éste. El Tribunal de Cuentas remitirá a las Cortes Generales un informe anual sobre la Cuenta General del Estado."
    },
    {
      "id": "w6-t4-b3",
      "q": "¿Qué carácter tiene la responsabilidad contable exigible por el Tribunal de Cuentas?",
      "options": [
        "Eminentemente reparatoria o indemnizatoria de los daños y perjuicios económicos causados a los caudales públicos",
        "Sancionadora privativa de libertad",
        "Moral y sin consecuencias pecuniarias",
        "Exclusivamente penal de prisión"
      ],
      "answer": 0,
      "explain": "Art. 38 LO 2/1982: El enjuiciamiento contable tiene por objeto la reparación del menoscabo patrimonial producido a los caudales o efectos públicos, teniendo carácter resarcitorio o indemnizatorio."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Órganos y Modalidades del Control del Gasto",
    "prompt": "Empareja cada organismo o instrumento con su régimen jurídico definitorio.",
    "pairs": [
      [
        "Función interventora (IGAE)",
        "Control previo de legalidad formal con efecto suspensivo ante reparos (art. 154)"
      ],
      [
        "Control financiero permanente",
        "Comprobación continua de la eficacia y legalidad en entidades públicas"
      ],
      [
        "Tribunal de Cuentas (fiscalizador)",
        "Examen externo anual y remisión de la Cuenta General a las Cortes"
      ],
      [
        "Tribunal de Cuentas (jurisdiccional)",
        "Enjuiciamiento y resarcimiento de la responsabilidad contable"
      ]
    ]
  },
  "boss": {
    "name": "El Malversador de Fondos",
    "kind": "ogre",
    "intro": [
      "¡He levantado el reparo suspensivo verbalmente y desviado caudales a un paraíso fiscal!"
    ],
    "defeat": [
      "¡Art. 155 LGP y Sección de Enjuiciamiento del Tribunal de Cuentas! Reclamación íntegra del alcance contable con embargo preventivo."
    ]
  },
  "summary": [
    "Control interno: IGAE (adscrita a Hacienda con autonomía funcional).",
    "Modalidades IGAE: Función interventora (previa y suspensiva ante reparo; discrepancias al Consejo de Ministros art. 155), Control financiero permanente y Auditoría pública.",
    "Control externo: Tribunal de Cuentas (art. 136 CE y LO 2/1982). Depende de las Cortes Generales.",
    "Funciones TCu: Fiscalizadora (Cuenta General del Estado) y Jurisdiccional (responsabilidad contable resarcitoria o indemnizatoria)."
  ]
};

export const W6_T5: MiniWorldDef = {
  "id": "hacienda-t5",
  "num": 5,
  "temaTitle": "Tema 5: El procedimiento administrativo de ejecución del presupuesto de gasto. Órganos competentes. Fases del procedimiento y su relación con la actuación administrativa. Especial referencia a la contratación administrativa y la gestión de subvenciones. Documentos contables que intervienen en la ejecución de los gastos y de los pagos. Gestión de la tesorería del Estado.",
  "name": "Cámara del Procedimiento de Gasto (A-D-O-P)",
  "emoji": "💳",
  "theme": "hacienda",
  "color": "#a16207",
  "enemy": "moneda",
  "enemyName": "Órdenes de pago irregulares",
  "npcs": [
    {
      "name": "Jefe de Contabilidad Presupuestaria",
      "role": "Fases de ejecución del gasto (A-D-O-P), documentos contables y Tesorería",
      "look": {
        "skin": "#f3c9a0",
        "hair": "#4b5563",
        "hairStyle": "short",
        "shirt": "#713f12",
        "pants": "#451a03",
        "acc": [
          "tie",
          "glasses"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "Procedimiento de ejecución del gasto público en la AGE (arts. 73 a 79 LGP):",
        "Cuatro fases sucesivas y regladas:",
        "1. Aprobación del gasto (Fase A): acto que autoriza la realización de un gasto determinado por una cuantía estimada, reservando crédito presupuestario. Documento contable: A.",
        "2. Compromiso o disposición del gasto (Fase D): acto con relevancia jurídica frente a terceros por el que se formaliza la relación (contrato firmado, resolución de subvención). Documento contable: D. (Cabe fase mixta AD).",
        "3. Reconocimiento de la obligación (Fase O): acto administrativo mediante el cual se declara la existencia de un crédito exigible contra la Hacienda Pública derivado del cumplimiento de la prestación (factura conformada, obra recibida). Documento contable: OK (Obligación) o ADOK.",
        "4. Ordenación del pago (Fase P): el ordenador de pagos (Director General del Tesoro) expide la orden formal de pago frente al Banco de España o entidad financiera. Documento contable: P.",
        "Pago material: entrega efectiva de los fondos al acreedor mediante transferencia bancaria.",
        "Gestión de la Tesorería del Estado (art. 90 LGP): principio de unidad de caja en el Banco de España."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w6-t5-q1",
      "q": "¿Cuáles son las cuatro fases sucesivas del procedimiento administrativo de ejecución del gasto público (art. 73 LGP)?",
      "options": [
        "Aprobación del gasto (A), Compromiso del gasto (D), Reconocimiento de la obligación (O) y Ordenación del pago (P)",
        "Petición, examen, votación y entrega de fondos",
        "Iniciación contable, auditoría previa, giro bancario y liquidación",
        "Presupuestación, adjudicación, retención y amortización"
      ],
      "answer": 0,
      "explain": "Art. 73.1 LGP: La gestión del presupuesto de gastos del Estado y de sus organismos autónomos se realizará a través de las siguientes fases: a) Aprobación del gasto; b) Compromiso del gasto; c) Reconocimiento de la obligación; d) Ordenación del pago."
    },
    {
      "id": "w6-t5-q2",
      "q": "¿Qué documento contable se expide cuando en un solo acto administrativo se autoriza, compromete, reconoce la obligación y se propone el pago?",
      "options": [
        "Documento mixto ADOK",
        "Documento A simple",
        "Documento D provisional",
        "Documento P exclusivo"
      ],
      "answer": 0,
      "explain": "En contabilidad pública, el documento ADOK acumula simultáneamente las cuatro fases: Autorización (A), Disposición (D), Obligación (O) y propuesta de pago (K) en un único expediente."
    },
    {
      "id": "w6-t5-q3",
      "q": "¿Qué acto de la gestión presupuestaria acredita la realización de la prestación por el contratista y hace la deuda líquida y exigible (art. 73.4 LGP)?",
      "options": [
        "El reconocimiento de la obligación (fase O)",
        "La aprobación previa del gasto (fase A)",
        "El compromiso inicial (fase D)",
        "La ordenación abstracta de fondos"
      ],
      "answer": 0,
      "explain": "Art. 73.4 LGP: El reconocimiento de la obligación es el acto mediante el que se declara la existencia de un crédito exigible contra la Hacienda Pública derivado de la realización de la prestación de acuerdo con la ley."
    }
  ],
  "bossQs": [
    {
      "id": "w6-t5-b1",
      "q": "¿A qué autoridad le corresponde con carácter general la función de Ordenador General de Pagos del Estado según el art. 75 de la LGP?",
      "options": [
        "Al Director General del Tesoro y Política Financiera",
        "Al Ministro de Hacienda en exclusiva",
        "Al Presidente del Gobierno",
        "Al Interventor General del Estado"
      ],
      "answer": 0,
      "explain": "Art. 75.1 LGP: Bajo la superior autoridad del Ministro de Hacienda, las funciones de ordenador general de pagos del Estado corresponden al Director General del Tesoro y Política Financiera."
    },
    {
      "id": "w6-t5-b2",
      "q": "¿Qué principio financiero rige la Tesorería General del Estado según el artículo 90 de la LGP?",
      "options": [
        "Principio de unidad de caja",
        "Principio de dispersión de fondos en bancos comerciales",
        "Principio de caja cerrada provincial",
        "Principio de custodia en metálico"
      ],
      "answer": 0,
      "explain": "Art. 90 LGP: Todos los recursos financieros del sector público estatal se gestionarán conforme al principio de unidad de caja a través de las cuentas en el Banco de España."
    },
    {
      "id": "w6-t5-b3",
      "q": "¿En qué plazo prescriben los derechos a percibir pagos de la Hacienda Pública estatal según el art. 25 de la LGP?",
      "options": [
        "A los cuatro años, computados desde la fecha en que concluyó el servicio o prestación",
        "Al año",
        "A los cinco años",
        "A los diez años"
      ],
      "answer": 0,
      "explain": "Art. 25.1 LGP: Salvo lo establecido por las leyes especiales, prescribirá a los cuatro años el derecho al reconocimiento o liquidación por la Hacienda Pública estatal de toda obligación, y el derecho a exigir el pago de las ya reconocidas."
    }
  ],
  "mini": {
    "type": "order",
    "title": "Secuencia Contable de Ejecución del Gasto (A-D-O-P)",
    "prompt": "Ordena cronológicamente las fases de ejecución del gasto presupuestario.",
    "items": [
      "Aprobación del gasto (Fase A): reserva de crédito previa",
      "Compromiso del gasto (Fase D): relación vinculante con tercero (contrato/adjudicación)",
      "Reconocimiento de la obligación (Fase O): comprobación material y crédito exigible",
      "Ordenación del pago (Fase P): orden librada por el Director General del Tesoro",
      "Pago material y transferencia efectiva al acreedor a través del Banco de España"
    ]
  },
  "boss": {
    "name": "El Ordenador Arbitrario",
    "kind": "moneda",
    "intro": [
      "¡He pagado una factura millonaria sin certificar que la obra se ha realizado!"
    ],
    "defeat": [
      "¡Art. 73.4 LGP! El reconocimiento de la obligación exige certificación formal de prestación conforme. Pago suspendido."
    ]
  },
  "summary": [
    "Fases del gasto (art. 73 LGP): A (aprobación) -> D (compromiso) -> O (reconocimiento obligación) -> P (ordenación pago).",
    "Documentos contables: A, D, OK, ADOK, P.",
    "Reconocimiento obligación (O): deuda líquida, vencida y exigible tras comprobar la prestación.",
    "Ordenador General de Pagos: Director General del Tesoro y Política Financiera (art. 75).",
    "Tesorería: principio de unidad de caja (Banco de España art. 90 LGP).",
    "Prescripción de obligaciones (art. 25 LGP): 4 años."
  ]
};

export const W6_T6: MiniWorldDef = {
  "id": "hacienda-t6",
  "num": 6,
  "temaTitle": "Tema 6: Gastos para la compra de bienes y servicios. Gastos de inversión. Gastos de transferencias: corrientes y de capital. Anticipos de caja fija. Pagos «a justificar». Justificación de libramientos.",
  "name": "Bóveda de Pagos a Justificar y Caja Fija",
  "emoji": "🗄️",
  "theme": "hacienda",
  "color": "#a16207",
  "enemy": "moneda",
  "enemyName": "Libramientos no justificados",
  "npcs": [
    {
      "name": "Cajera Pagadora de Anticipos",
      "role": "Anticipos de caja fija, pagos a justificar y transferencias corrientes y de capital",
      "look": {
        "skin": "#f3c9a0",
        "hair": "#4b5563",
        "hairStyle": "bun",
        "shirt": "#854d0e",
        "pants": "#3f2c06",
        "acc": [
          "glasses",
          "badge"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "Excepciones al principio de pago tras previa justificación documental:",
        "1. Anticipos de Caja Fija (ACF, art. 78 LGP y RD 640/1987):",
        "• Provisión de fondos extrapresupuestaria permanente a cajas pagadoras para gastos periódicos o repetitivos (material de oficina, suministros menores, dietas y locomoción).",
        "• Cuantía máxima global del anticipo: no podrá exceder del 7 por ciento del total de los créditos del capítulo del presupuesto en que se apliquen.",
        "• Límite por gasto individual: no puede superar los límites del contrato menor.",
        "• Reposición periódica de fondos a medida que se justifican los gastos realizados con facturas.",
        "2. Pagos 'a justificar' (art. 79 LGP):",
        "• Libramientos presupuestarios excepcionales cuando no se pueda aportar la documentación justificativa previamente al pago (urgencia, servicios en el extranjero).",
        "• Plazo de justificación estricto: tres meses con carácter general (seis meses si son gastos en el extranjero). Prohibido librar nuevos fondos a justificar a perceptores que tengan fondos pendientes de justificar transcurrido el plazo.",
        "3. Gastos de transferencias: corrientes (Capítulo 4, financian gastos ordinarios del beneficiario) vs de capital (Capítulo 7, financian inversiones o activos fijos)."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w6-t6-q1",
      "q": "¿Cuál es el plazo general en el que deben rendir cuenta justificativa los perceptores de libramientos 'a justificar' (art. 79.4 LGP)?",
      "options": [
        "Tres meses con carácter general (seis meses para servicios en el extranjero)",
        "Un mes en todo caso",
        "Un año",
        "Quince días hábiles"
      ],
      "answer": 0,
      "explain": "Art. 79.4 LGP: Los perceptores de las órdenes de pago a justificar deberán rendir cuenta de la aplicación de las cantidades percibidas en el plazo de tres meses, excepto las destinadas a pagos en el extranjero que podrán ser de seis meses."
    },
    {
      "id": "w6-t6-q2",
      "q": "¿Cuál es el límite cuantitativo global máximo autorizado para los Anticipos de Caja Fija según el artículo 78 de la LGP?",
      "options": [
        "No podrá superar el 7 por ciento del total de créditos del capítulo presupuestario destinado al anticipo",
        "Hasta el 25 por ciento",
        "Un límite fijo de un millón de euros por ministerio",
        "Hasta el 50 por ciento de las operaciones de capital"
      ],
      "answer": 0,
      "explain": "Art. 78.1 LGP: La cuantía global de los anticipos de caja fija no podrá superar para cada ministerio el siete por ciento del total de créditos del capítulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente."
    },
    {
      "id": "w6-t6-q3",
      "q": "¿Qué distingue a una transferencia corriente (Cap. 4) de una transferencia de capital (Cap. 7)?",
      "options": [
        "La transferencia corriente financia gastos corrientes u operativos del perceptor; la de capital financia inversiones o adquisición de activos fijos",
        "La corriente solo la reciben particulares y la de capital empresas públicas",
        "La corriente nunca se justifica",
        "No existe diferencia presupuestaria"
      ],
      "answer": 0,
      "explain": "Criterio de clasificación económica: Las transferencias corrientes (Cap. 4) financian operaciones corrientes y de funcionamiento del beneficiario; las transferencias de capital (Cap. 7) condicionan los fondos a la financiación de inversiones reales o formación bruta de capital."
    }
  ],
  "bossQs": [
    {
      "id": "w6-t6-b1",
      "q": "¿Puede librarse una nueva orden de pago a justificar a un perceptor que mantenga fondos pendientes de rendir fuera de plazo?",
      "options": [
        "No, está prohibido expedir nuevas órdenes de pago a justificar a perceptores con fondos pendientes transcurrido el plazo",
        "Sí, siempre que lo solicite por escrito",
        "Sí, si se aumenta el plazo un año",
        "Solo si es un alto cargo"
      ],
      "answer": 0,
      "explain": "Art. 79.5 LGP: No podrán expedirse órdenes de pago a justificar por los mismos conceptos a perceptores de fondos que no hayan justificado las órdenes anteriores una vez transcurrido el plazo correspondiente."
    },
    {
      "id": "w6-t6-b2",
      "q": "¿Qué naturaleza jurídica contable tiene la entrega inicial de fondos para la constitución de un Anticipo de Caja Fija?",
      "options": [
        "Es una operación extrapresupuestaria (no presupuestaria) de tesorería",
        "Una orden de gasto en firme con cargo al Capítulo 6",
        "Un ingreso tributario definitivo",
        "Un préstamo bancario a largo plazo"
      ],
      "answer": 0,
      "explain": "RD 640/1987: La provisión de fondos inicial de los anticipos de caja fija tiene carácter extrapresupuestario, pasando a imputarse al presupuesto de gastos solo cuando se reponen los fondos mediante la presentación de las facturas justificativas."
    },
    {
      "id": "w6-t6-b3",
      "q": "¿A qué cuentas bancarias se abonan los Anticipos de Caja Fija en las cajas pagadoras de los ministerios?",
      "options": [
        "A cuentas corrientes restringidas de pagos autorizadas por la Dirección General del Tesoro",
        "A la cuenta personal particular del cajero pagador",
        "A cuentas en bancos de inversión extranjeros",
        "Se custodian exclusivamente en billetes físicos en la caja fuerte"
      ],
      "answer": 0,
      "explain": "Los fondos de los ACF y pagos a justificar se sitúan en cuentas corrientes bancarias restringidas de pagos expresamente autorizadas por el Tesoro Público en entidades de crédito colaboradoras."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Mecanismos Especiales de Pagos (LGP)",
    "prompt": "Empareja cada figura de pago especial con sus reglas y plazos.",
    "pairs": [
      [
        "Anticipos de Caja Fija (ACF)",
        "Fondo extrapresupuestario permanente con límite global del 7% del capítulo (art. 78)"
      ],
      [
        "Pagos a justificar (plazo)",
        "Rendición de cuentas en 3 meses ordinarios o 6 meses en el extranjero (art. 79)"
      ],
      [
        "Transferencia corriente (Cap. 4)",
        "Fondos sin contraprestación destinados a financiar gastos corrientes"
      ],
      [
        "Transferencia de capital (Cap. 7)",
        "Fondos destinados a financiar inversiones o infraestructuras del beneficiario"
      ]
    ]
  },
  "boss": {
    "name": "El Cajero Moroso",
    "kind": "moneda",
    "intro": [
      "¡He retenido fondos a justificar durante 2 años sin aportar facturas ni justificación!"
    ],
    "defeat": [
      "¡Art. 79.5 LGP y reintegro forzoso! Bloqueo de nuevos libramientos y apertura de expediente de responsabilidad contable."
    ]
  },
  "summary": [
    "Anticipos de Caja Fija (art. 78 LGP y RD 640/1987): fondo permanente extrapresupuestario para gastos menores/periódicos. Límite máx. 7% del capítulo.",
    "Pagos a justificar (art. 79 LGP): excepcional cuando no cabe justificación previa. Plazo de justificación: 3 meses (6 en el extranjero).",
    "Prohibición de nuevos libramientos a justificar a perceptores que mantengan pagos vencidos sin justificar.",
    "Transferencias corrientes (Capítulo 4) vs Transferencias de capital (Capítulo 7: inversiones).",
    "Cuentas bancarias restringidas autorizadas por la D.G. del Tesoro."
  ]
};

export const W6_T7: MiniWorldDef = {
  "id": "hacienda-t7",
  "num": 7,
  "temaTitle": "Tema 7: Los ingresos públicos: concepto y clasificación. El sistema tributario español: régimen actual. Especial referencia al régimen de tasas y precios públicos.",
  "name": "Santuario de los Ingresos Públicos y Tributos",
  "emoji": "🪙",
  "theme": "hacienda",
  "color": "#eab308",
  "enemy": "moneda",
  "enemyName": "Evasión fiscal",
  "npcs": [
    {
      "name": "Inspectora de Hacienda del Estado",
      "role": "Ingresos públicos, sistema tributario (LGT 58/2003) y tasas y precios públicos",
      "look": {
        "skin": "#f3c9a0",
        "hair": "#2e2e2e",
        "hairStyle": "short",
        "shirt": "#ca8a04",
        "pants": "#713f12",
        "acc": [
          "glasses",
          "badge"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "Los ingresos públicos: recursos que obtiene la Administración para financiar los gastos públicos (art. 31 CE y Ley 58/2003 General Tributaria, LGT).",
        "Clasificación de los tributos (art. 2.2 LGT):",
        "1. Impuestos: tributos exigidos sin contraprestación cuyo hecho imponible está constituido por negocios, actos o hechos que ponen de manifiesto la capacidad económica del contribuyente (directos: IRPF, Sociedades, Sucesiones; indirectos: IVA, ITP/AJD, Impuestos Especiales).",
        "2. Tasas: tributos cuyo hecho imponible consiste en la utilización privativa o aprovechamiento especial del dominio público, o la prestación de servicios públicos o realización de actividades en régimen de derecho público que se refieran, afecten o beneficien de modo particular al obligado tributario, cuando no sean de solicitud voluntaria o no se presten por el sector privado.",
        "3. Contribuciones especiales: tributos cuyo hecho imponible consiste en la obtención por el obligado de un beneficio o aumento de valor de sus bienes como consecuencia de la realización de obras públicas o establecimiento de servicios.",
        "Precios públicos (Ley 8/1989): contraprestaciones por servicios o actividades prestadas por la Administración en régimen de derecho público cuando sean de solicitud voluntaria para los administrados y se presten también por el sector privado."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w6-t7-q1",
      "q": "¿Cómo se clasifican los tributos según el artículo 2.2 de la Ley 58/2003 General Tributaria (LGT)?",
      "options": [
        "Tasas, contribuciones especiales e impuestos",
        "Impuestos directos, indirectos y multas",
        "Precios públicos, tarifas y tasas",
        "Aranceles, cotizaciones y subvenciones"
      ],
      "answer": 0,
      "explain": "Art. 2.2 Ley 58/2003 (LGT): Los tributos, cualquiera que sea su denominación, se clasifican en: a) Tasas; b) Contribuciones especiales; c) Impuestos."
    },
    {
      "id": "w6-t7-q2",
      "q": "¿Cuál es la diferencia definitoria esencial entre una 'tasa' y un 'precio público' según la Ley 8/1989 y la LGT?",
      "options": [
        "La tasa es un tributo coactivo por servicios indispensables o sin competencia privada (exige reserva de ley); el precio público es voluntario y concurre con el sector privado",
        "La tasa solo se cobra en aduanas y el precio público en ayuntamientos",
        "No hay diferencia sustancial, son términos sinónimos",
        "El precio público lo aprueba siempre el Congreso por ley orgánica"
      ],
      "answer": 0,
      "explain": "Art. 2.2.a LGT y Ley 8/1989: Las tasas son tributos que gravan servicios no voluntarios o prestados en régimen de monopolio público (principio de reserva de ley, art. 31.3 CE). Los precios públicos son contraprestaciones por servicios voluntarios prestados también por el sector privado (fijados reglamentariamente cubriendo costes)."
    },
    {
      "id": "w6-t7-q3",
      "q": "¿Cuál es el hecho imponible que define a las 'contribuciones especiales' según el art. 2.2.b de la LGT?",
      "options": [
        "La obtención por el obligado tributario de un beneficio o de un aumento de valor de sus bienes por obras públicas o servicios",
        "La mera titularidad de un patrimonio mobiliario",
        "La realización de una compraventa mercantil",
        "La percepción de una herencia o donación"
      ],
      "answer": 0,
      "explain": "Art. 2.2.b LGT: Contribuciones especiales son los tributos cuyo hecho imponible consiste en la obtención por el obligado tributario de un beneficio o de un aumento de valor de sus bienes como consecuencia de la realización de obras públicas o del establecimiento o ampliación de servicios públicos."
    }
  ],
  "bossQs": [
    {
      "id": "w6-t7-b1",
      "q": "¿En qué plazo prescribe el derecho de la Administración tributaria para determinar la deuda tributaria y exigir el pago (art. 66 LGT)?",
      "options": [
        "A los cuatro años",
        "Al año",
        "A los cinco años",
        "A los diez años"
      ],
      "answer": 0,
      "explain": "Art. 66 LGT: Prescribirán a los cuatro años: a) El derecho de la Administración para determinar la deuda tributaria mediante liquidación; b) El derecho de la Administración para exigir el pago de las deudas tributarias liquidadas y autoliquidadas."
    },
    {
      "id": "w6-t7-b2",
      "q": "¿Cuál de los siguientes impuestos del sistema tributario español es un impuesto INDIRECTO?",
      "options": [
        "El Impuesto sobre el Valor Añadido (IVA)",
        "El Impuesto sobre la Renta de las Personas Físicas (IRPF)",
        "El Impuesto sobre Sociedades (IS)",
        "El Impuesto sobre el Patrimonio"
      ],
      "answer": 0,
      "explain": "El IVA y los Impuestos Especiales son impuestos indirectos (gravan el consumo y la circulación de bienes); mientras que IRPF, Sociedades y Patrimonio son impuestos directos (gravan la renta o patrimonio directo del titular)."
    },
    {
      "id": "w6-t7-b3",
      "q": "¿A qué nivel tarifario deben fijarse con carácter general los precios públicos según el artículo 25 de la Ley 8/1989?",
      "options": [
        "A un nivel que cubra, como mínimo, los costes económicos originados por la prestación del servicio o actividad",
        "Siempre por debajo del 50% del coste con subvención fija",
        "A precio libre fijado por subasta",
        "Al doble del coste para obtener beneficio industrial"
      ],
      "answer": 0,
      "explain": "Art. 25 Ley 8/1989: Los precios públicos se establecerán a un nivel que cubra, como mínimo, los costes económicos del servicio o actividad o que sea equivalente a la utilidad derivada de los mismos."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Categorías de Ingresos Públicos y Tributos",
    "prompt": "Empareja cada categoría tributaria o ingreso con su hecho generador.",
    "pairs": [
      [
        "Impuesto",
        "Tributo sin contraprestación directa basado en capacidad económica (IRPF, IVA)"
      ],
      [
        "Tasa",
        "Tributo por servicio público obligatorio o aprovechamiento de dominio público"
      ],
      [
        "Contribución Especial",
        "Tributo por aumento de valor de bienes derivado de obras públicas"
      ],
      [
        "Precio Público",
        "Ingreso por servicios voluntarios prestados en régimen de concurrencia privada"
      ]
    ]
  },
  "boss": {
    "name": "El Defraudador Fiscal",
    "kind": "dragon",
    "intro": [
      "¡He ocultado mis beneficios económicos y falsificado facturas de IVA!"
    ],
    "defeat": [
      "¡Inspección de los Tributos y Agencia Tributaria (AEAT)! Acta de disconformidad, liquidación tributaria y sanción por infracción muy grave."
    ]
  },
  "summary": [
    "Tributos (art. 2.2 LGT): Impuestos (directos como IRPF/IS, indirectos como IVA), Tasas (coactivas/dominio público) y Contribuciones especiales (beneficio por obras).",
    "Tasas vs Precios públicos (Ley 8/1989): tasas coactivas bajo reserva de ley (art. 31.3 CE); precios públicos voluntarios que cubren costes.",
    "Prescripción tributaria: 4 años (art. 66 LGT).",
    "AEAT: entidad de derecho público que gestiona y recauda los tributos estatales y aduaneros.",
    "Principios constitucionales tributarios (art. 31 CE): igualdad, progresividad, capacidad económica y no confiscatoriedad."
  ]
};

export const W6_T8: MiniWorldDef = {
  "id": "hacienda-t8",
  "num": 8,
  "temaTitle": "Tema 8: Retribuciones de los funcionarios públicos. Nóminas: estructura y normas de confección. Altas y bajas, su justificación. Ingresos en formalización. Devengo y liquidación de derechos económicos.",
  "name": "Cámara de Nóminas y Seguridad Social",
  "emoji": "🧾",
  "theme": "hacienda",
  "color": "#ca8a04",
  "enemy": "reloj",
  "enemyName": "Nóminas desajustadas",
  "npcs": [
    {
      "name": "Jefa de Habilitación y Seguridad Social",
      "role": "Confección de nóminas, altas/bajas, cotizaciones a SS y devengo económico",
      "look": {
        "skin": "#f3c9a0",
        "hair": "#4b5563",
        "hairStyle": "short",
        "shirt": "#713f12",
        "pants": "#451a03",
        "acc": [
          "glasses",
          "badge"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "Confección y liquidación de nóminas de los empleados públicos:",
        "Estructura del recibo individual de haberes (nómina):",
        "1. Devengos (total íntegro bruto):",
        "• Retribuciones básicas: Sueldo (Subgrupo A2), Trienios devengados y Pagas extraordinarias (en junio y diciembre).",
        "• Retribuciones complementarias: Complemento de Destino (nivel 14 a 30) y Complemento Específico (general y singular). En su caso, Productividad o Servicios Extraordinarios.",
        "2. Deducciones (minoraciones obligatorias del líquido):",
        "• Cuota de Derechos Pasivos (para personal de Clases Pasivas anterior a 2011) o Cotización a la Seguridad Social (Régimen General para ingresados tras 01/01/2011: contingencias comunes, desempleo, formación profesional).",
        "• Cuota de MUFACE (mutualismo administrativo obligatorio para funcionarios civiles).",
        "• Retención a cuenta del IRPF: calculada conforme a tablas y circunstancias familiares (modelo 145).",
        "• Cuota sindical voluntaria, embargos judiciales o descuentos por huelga/jornada.",
        "Líquido a percibir = Total Devengado - Total Deducciones.",
        "Ingresos en formalización: operaciones contables donde se compensan o formalizan cuotas y retenciones sin movimiento físico de dinero."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w6-t8-q1",
      "q": "¿Cuáles son las dos grandes masas que componen la estructura de una nómina pública?",
      "options": [
        "Los devengos (retribuciones brutas) y las deducciones (retenciones fiscales y cotizaciones sociales)",
        "El activo circulante y el pasivo exigible",
        "Las ventas netas y los costes de explotación",
        "Los ingresos patrimoniales y las dietas"
      ],
      "answer": 0,
      "explain": "La nómina se estructura formalmente en Devengos (suma de retribuciones básicas y complementarias que integran el sueldo bruto) y Deducciones (retención IRPF, cotización a la Seguridad Social, cuota MUFACE/Derechos Pasivos, etc.), resultando el líquido a percibir."
    },
    {
      "id": "w6-t8-q2",
      "q": "¿En qué meses del año se devengan y liquidan con carácter general las dos pagas extraordinarias de los funcionarios?",
      "options": [
        "En los meses de junio y diciembre",
        "En los meses de julio y enero",
        "En los meses de mayo y noviembre",
        "En agosto y febrero"
      ],
      "answer": 0,
      "explain": "LGP y leyes de PGE: Las pagas extraordinarias se devengan en los meses de junio y diciembre, liquidándose conjuntamente con la nómina ordinaria de dichos meses."
    },
    {
      "id": "w6-t8-q3",
      "q": "¿Qué documento contable se utiliza para pagar nóminas cuando las retenciones de IRPF y cuotas sociales no conllevan salida material de dinero en efectivo?",
      "options": [
        "Operaciones o ingresos en formalización",
        "Pagos a justificar extraordinarios",
        "Letras de cambio públicas",
        "Anticipos de caja fija"
      ],
      "answer": 0,
      "explain": "LGP: Los ingresos en formalización son operaciones contables internas mediante las que se formalizan en el presupuesto de ingresos las retenciones de IRPF y cuotas sociales aplicadas a la nómina sin generar movimientos físicos de tesorería."
    }
  ],
  "bossQs": [
    {
      "id": "w6-t8-b1",
      "q": "¿Cómo se liquida la nómina en caso de que un funcionario cause baja en el puesto a mediados de mes (art. 33 Ley 31/1990)?",
      "options": [
        "Se liquidan los días efectivamente trabajados en el mes a razón de 1/30 parte del importe mensual por día",
        "Pierde el sueldo de todo el mes completo",
        "Percibe el mes íntegro como indemnización de despido",
        "Cobra el doble de sueldo base"
      ],
      "answer": 0,
      "explain": "Art. 33 Ley 31/1990 de PGE y normativas de nóminas: Cuando el tiempo de servicios no comprenda la totalidad de un mes, la cuantía de la retribución se determinará liquidando el importe mensual dividido por treinta por los días efectivamente prestados."
    },
    {
      "id": "w6-t8-b2",
      "q": "¿Qué cuota obligatoria de asistencia sanitaria abonan los funcionarios civiles del Estado integrados en MUFACE en su nómina?",
      "options": [
        "La cuota de derechos de cotización a la mutualidad de MUFACE",
        "Una prima comercial de póliza privada",
        "Un arancel de copago hospitalario fijo",
        "El impuesto sobre bienes inmuebles del ministerio"
      ],
      "answer": 0,
      "explain": "RDL 4/2000: La cuota de cotización a MUFACE se deduce mensualmente en la nómina de todos los funcionarios mutualistas para la financiación del régimen del mutualismo administrativo."
    },
    {
      "id": "w6-t8-b3",
      "q": "¿Cuál es la consecuencia contable si se detecta un error de pago en nómina que generó un cobro indebido a favor del funcionario?",
      "options": [
        "Incoación de expediente de reintegro de pagos indebidos para compensar o devolver las cantidades en nóminas siguientes",
        "Pérdida inmediata de la condición de funcionario",
        "No se puede reclamar transcurridos diez días",
        "La Administración asume la pérdida sin trámite"
      ],
      "answer": 0,
      "explain": "Art. 77 LGP: Los perceptores de pagos indebidos están obligados a restituir su importe. La Administración inicia de oficio el expediente de reintegro de pagos indebidos mediante deducciones regladas en las nóminas siguientes."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Estructura de la Nómina y Deducciones Sociales",
    "prompt": "Empareja cada concepto de nómina con su naturaleza contable.",
    "pairs": [
      [
        "Devengos",
        "Suma de sueldo, trienios, complemento de destino y específico"
      ],
      [
        "Deducciones",
        "Retención IRPF, cuota Seguridad Social y cuota MUFACE"
      ],
      [
        "Ingresos en formalización",
        "Compensación contable de retenciones sin salida física de dinero"
      ],
      [
        "Reintegro de pagos indebidos",
        "Obligación de restituir cantidades cobradas por error contable (art. 77 LGP)"
      ]
    ]
  },
  "boss": {
    "name": "El Habilitado Fantasma",
    "kind": "moneda",
    "intro": [
      "¡He generado nóminas con trienios multiplicados y sin retención de IRPF!"
    ],
    "defeat": [
      "¡Intervención Delegada de Nóminas! Fiscalización informática, revocación contable y expediente de reintegro de pagos indebidos."
    ]
  },
  "summary": [
    "Nómina de los empleados públicos: Devengos (retribuciones básicas + complementarias) menos Deducciones (IRPF, SS/Derechos Pasivos, MUFACE).",
    "Pagas extraordinarias: devengo y pago en junio y diciembre.",
    "Liquidación de periodos incompletos: treintava parte (1/30) por cada día de servicio.",
    "Ingresos en formalización: retenciones que no suponen salida material de tesorería.",
    "Reintegro de pagos indebidos (art. 77 LGP): compensación de cobros erróneos con audiencias al interesado."
  ]
};

export const W6: WorldDef = {
  id: "hacienda",
  num: 6,
  bloque: "Bloque VI",
  title: "VI. Gestión Financiera y Seguridad Social",
  name: "Tesorería del Reino",
  emoji: "🏦",
  theme: "hacienda",
  color: "#eab308",
  enemy: "moneda",
  enemyName: "Monedas rebeldes",
  temas: [
    "Tema 1: El presupuesto. Concepto y clases. La Ley General Presupuestaria: principios generales y estructura. Las leyes de estabilidad presupuestaria.",
    "Tema 2: Las leyes anuales de presupuestos. Su contenido. El presupuesto del Estado. Principios de programación y de gestión. Contenido, elaboración y estructura. Desglose de aplicaciones presupuestarias.",
    "Tema 3: Gastos plurianuales. Modificaciones de los créditos iniciales. Transferencias de crédito. Créditos extraordinarios. Suplementos de crédito. Ampliaciones de créditos. Incorporaciones de créditos. Generaciones de créditos.",
    "Tema 4: Control del gasto público en España. La Intervención General de la Administración del Estado. Función interventora, control financiero permanente y auditoría pública. El Tribunal de Cuentas.",
    "Tema 5: El procedimiento administrativo de ejecución del presupuesto de gasto. Órganos competentes. Fases del procedimiento y su relación con la actuación administrativa. Especial referencia a la contratación administrativa y la gestión de subvenciones. Documentos contables que intervienen en la ejecución de los gastos y de los pagos. Gestión de la tesorería del Estado.",
    "Tema 6: Gastos para la compra de bienes y servicios. Gastos de inversión. Gastos de transferencias: corrientes y de capital. Anticipos de caja fija. Pagos «a justificar». Justificación de libramientos.",
    "Tema 7: Los ingresos públicos: concepto y clasificación. El sistema tributario español: régimen actual. Especial referencia al régimen de tasas y precios públicos.",
    "Tema 8: Retribuciones de los funcionarios públicos. Nóminas: estructura y normas de confección. Altas y bajas, su justificación. Ingresos en formalización. Devengo y liquidación de derechos económicos."
],
  miniWorlds: [W6_T1, W6_T2, W6_T3, W6_T4, W6_T5, W6_T6, W6_T7, W6_T8],
  npcs: [
    W6_T1.npcs[0],
    W6_T2.npcs[0],
    W6_T3.npcs[0],
    W6_T4.npcs[0]
  ],
  blockQs: [
    W6_T1.blockQs[0],
    W6_T2.blockQs[0],
    W6_T3.blockQs[0],
    W6_T4.blockQs[0],
    W6_T5.blockQs[0],
    W6_T6.blockQs[0],
    W6_T7.blockQs[0],
    W6_T8.blockQs[0]
  ],
  bossQs: [
    W6_T1.bossQs[0],
    W6_T2.bossQs[0],
    W6_T3.bossQs[0],
    W6_T4.bossQs[0],
    W6_T5.bossQs[0],
    W6_T6.bossQs[0],
    W6_T7.bossQs[0],
    W6_T8.bossQs[0]
  ],
  mini: {
  "type": "order",
  "title": "Gran Desafío del Bloque VI: Ciclo Presupuestario Integral del Estado",
  "prompt": "Ordena cronológicamente las fases maestras del ciclo financiero y presupuestario del Estado.",
  "items": [
    "Fijación del techo de gasto no financiero y marco presupuestario plurianual (LO 2/2012)",
    "Elaboración por el Gobierno y presentación del Proyecto de PGE antes del 1 de octubre (art. 134 CE)",
    "Examen, enmienda y aprobación de la Ley de Presupuestos Generales del Estado por las Cortes",
    "Ejecución del gasto público en cuatro fases regladas: Aprobación, Disposición, Obligación y Ordenación de pago",
    "Control interno continuo e intervención previa por la IGAE",
    "Control externo posterior y Declaración de la Cuenta General del Estado por el Tribunal de Cuentas"
  ]
},
  boss: {
  "name": "El Dragón del Déficit Desbocado",
  "kind": "dragon",
  "intro": [
    "¡JA, JA, JA! ¡He arruinado la hacienda pública, desviado créditos y quebrado la estabilidad presupuestaria!",
    "Para conquistar la plaza definitiva de funcionario deberás superar los 8 temas oficiales del temario de Gestión Financiera. ¡Demuestra tu maestría!"
  ],
  "defeat": [
    "¡Enhorabuena, futuro Gestor Civil del Estado! Has demostrado un dominio absoluto de la gestión presupuestaria, el control contable y el Derecho Público. ¡La plaza en el INAP es tuya!"
  ]
},
  summary: [
  "Presupuesto y LGP (Ley 47/2003): principios de legalidad (art. 134 CE), anualidad, universalidad (bruto art. 27 LGP) y especialidad (cualitativa art. 42, cuantitativa art. 43, temporal art. 49). Prórroga automática.",
  "Estructura presupuestaria: Orgánica (secciones/servicios), Funcional por programas y Económica (Capítulos 1 a 9: 1 personal, 2 bienes y servicios, 3 financieros, 4 transferencias corrientes, 6 inversiones reales, 7 transferencias capital, 9 pasivos).",
  "Gastos plurianuales (art. 47 LGP): máx. 4 ejercicios (70%, 60%, 50%, 50%). Modificaciones: transferencias, créditos extraordinarios y suplementos (Fondo de Contingencia Sección 36), ampliaciones, generaciones.",
  "Control del gasto: IGAE interno (función interventora previa con reparo suspensivo art. 154, control financiero permanente y auditoría). Tribunal de Cuentas externo (art. 136 CE: fiscalizadora y enjuiciamiento contable resarcitorio).",
  "Ejecución de gasto (A-D-O-P): Aprobación -> Disposición -> Obligación (crédito exigible) -> Ordenación del pago (D.G. del Tesoro). Unidad de caja (art. 90 LGP). Prescripción a los 4 años.",
  "Anticipos de Caja Fija (máx. 7% del capítulo art. 78) y Pagos a justificar (plazo 3 meses art. 79). Transferencias corrientes vs capital.",
  "Ingresos y tributos (LGT 58/2003): impuestos (directos e indirectos), tasas (coactivas/dominio público) y contribuciones especiales. Precios públicos (Ley 8/1989). Prescripción a los 4 años.",
  "Nóminas: Devengos (básicas y complementarias) menos Deducciones (IRPF, SS/Clases Pasivas, MUFACE). Liquidación 1/30. Ingresos en formalización y reintegro de pagos indebidos (art. 77 LGP)."
],
};
