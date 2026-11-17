import type { MiniWorldDef, Question, WorldDef } from "./types";

export const Q = (id: string, q: string, options: string[], answer: number, explain: string): Question => ({
  id,
  q,
  options,
  answer,
  explain,
});

/* ==================== BLOQUE V: ADMINISTRACIÓN DE RECURSOS HUMANOS (10 TEMAS BOE) ==================== */

export const W5_T1: MiniWorldDef = {
  "id": "rrhh-t1",
  "num": 1,
  "temaTitle": "Tema 1: El personal al servicio de las Administraciones públicas: concepto y clases. Adquisición y pérdida de la relación de servicio. Régimen jurídico.",
  "name": "Academia de la Función Pública",
  "emoji": "👔",
  "theme": "rrhh",
  "color": "#7c3aed",
  "enemy": "reloj",
  "enemyName": "Nombramientos irregulares",
  "npcs": [
    {
      "name": "Directora General de Función Pública",
      "role": "Clases de empleados públicos y adquisición/pérdida de la condición",
      "look": {
        "skin": "#f3c9a0",
        "hair": "#2e2e2e",
        "hairStyle": "bun",
        "shirt": "#6d28d9",
        "pants": "#4c1d95",
        "acc": [
          "badge",
          "glasses"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "El Texto Refundido de la Ley del Estatuto Básico del Empleado Público (TREBEP, RDL 5/2015) es la norma cabecera.",
        "Clases de empleados públicos (art. 8 TREBEP):",
        "1. Funcionarios de carrera: vinculados por relación estatutaria de derecho administrativo para el desempeño de servicios profesionales retribuidos de carácter permanente. Reserva de funciones con ejercicio de potestades públicas (art. 9.2).",
        "2. Funcionarios interinos (art. 10): nombrados por razones expresamente justificadas de necesidad y urgencia (máximo 3 años en vacante).",
        "3. Personal laboral: en virtud de contrato de trabajo (fijo, por tiempo indefinido o temporal).",
        "4. Personal eventual: confianza o asesoramiento especial; cese libre o cuando cese la autoridad.",
        "Adquisición de la condición (art. 62): superación del proceso selectivo, nombramiento publicado en diario oficial, acatamiento de la CE y toma de posesión en plazo.",
        "Pérdida de la condición (art. 63): renuncia expresa aceptada, pérdida de la nacionalidad, jubilación total, separación del servicio por sanción disciplinaria firme o inhabilitación absoluta o especial para cargo público por sentencia penal firme."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w5-t1-q1",
      "q": "¿A qué clase de empleados públicos está reservado con carácter exclusivo el ejercicio de las funciones que impliquen la participación directa o indirecta en el ejercicio de las potestades públicas (art. 9.2 TREBEP)?",
      "options": [
        "Exclusivamente a los funcionarios de carrera",
        "Al personal laboral fijo",
        "Al personal eventual de confianza",
        "A los asesores externos contratados"
      ],
      "answer": 0,
      "explain": "Art. 9.2 TREBEP: En todo caso, el ejercicio de las funciones que impliquen la participación directa o indirecta en el ejercicio de las potestades públicas o en la salvaguardia de los intereses generales del Estado y de las Administraciones Públicas corresponden exclusivamente a los funcionarios públicos."
    },
    {
      "id": "w5-t1-q2",
      "q": "¿Cuál es el plazo máximo que puede ocupar un funcionario interino una plaza vacante según la reforma del art. 10 del TREBEP?",
      "options": [
        "No superior a tres años, debiendo ofertarse la plaza en la convocatoria correspondiente",
        "Hasta cinco años prorrogables",
        "Un año improrrogable",
        "Indefinidamente hasta que el titular renuncie"
      ],
      "answer": 0,
      "explain": "Art. 10.1.a y 10.4 TREBEP: Las plazas vacantes desempeñadas por personal funcionario interino deberán ser objeto de cobertura mediante cualquiera de los mecanismos de provisión o movilidad previstos en la normativa. Transcurridos tres años desde el nombramiento del personal funcionario interino se producirá el fin de la relación de interinidad."
    },
    {
      "id": "w5-t1-q3",
      "q": "¿Cuáles son los cuatro requisitos sucesivos obligatorios para adquirir la condición de funcionario de carrera (art. 62.1 TREBEP)?",
      "options": [
        "Superación del proceso selectivo, nombramiento en diario oficial, acatamiento de la Constitución/Estatutos y toma de posesión en plazo",
        "Firma del contrato de trabajo y alta en la Seguridad Social",
        "Aprobación de la oposición y examen médico",
        "Certificado de la empresa y aval del tribunal"
      ],
      "answer": 0,
      "explain": "Art. 62.1 TREBEP: Son requisitos indispensables: 1º Superación del proceso selectivo; 2º Nombramiento por la autoridad competente publicado en el Diario Oficial; 3º Acatamiento de la Constitución; y 4º Toma de posesión dentro del plazo establecido."
    }
  ],
  "bossQs": [
    {
      "id": "w5-t1-b1",
      "q": "¿Cuál de las siguientes causas extingue la condición de funcionario de carrera según el artículo 63 del TREBEP?",
      "options": [
        "Separación del servicio por sanción disciplinaria firme",
        "Excedencia voluntaria por interés particular",
        "Suspensión provisional de funciones",
        "Baja por incapacidad temporal de más de 365 días"
      ],
      "answer": 0,
      "explain": "Art. 63 TREBEP: Son causas de pérdida de la condición de funcionario: la renuncia aceptada, pérdida de la nacionalidad, jubilación total, sanción disciplinaria de separación del servicio con carácter firme e inhabilitación penal firme."
    },
    {
      "id": "w5-t1-b2",
      "q": "¿Qué titulación académica se exige para el acceso a los Cuerpos clasificados en el Subgrupo A2 según el artículo 76 del TREBEP?",
      "options": [
        "Título universitario de Grado (o Diplomado Universitario / Ingeniero Técnico)",
        "Título de Bachiller o Técnico",
        "Título de Máster o Doctorado exclusivamente",
        "Graduado en Educación Secundaria Obligatoria"
      ],
      "answer": 0,
      "explain": "Art. 76 TREBEP: Para el acceso a los cuerpos o escalas del Grupo A se exigirá estar en posesión del título universitario de Grado. Para el Subgrupo A2 corresponde a los puestos cuyas funciones tienen carácter de gestión técnica especializada."
    },
    {
      "id": "w5-t1-b3",
      "q": "¿Cuándo cesa el personal eventual según el artículo 12 del TREBEP?",
      "options": [
        "En todo caso cuando se produzca el cese de la autoridad a la que se preste la función de confianza o asesoramiento",
        "Al cabo de cuatro años improrrogables por ley",
        "Únicamente por renuncia manuscrita",
        "Pasa a adquirir fijeza como funcionario de carrera"
      ],
      "answer": 0,
      "explain": "Art. 12.3 TREBEP: El cese del personal eventual tendrá lugar por decisión de la autoridad que lo nombró y, en todo caso, cuando se produzca el cese de la autoridad a la que preste su función de confianza o asesoramiento."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Clases de Empleados Públicos y Grupos de Clasificación",
    "prompt": "Empareja cada categoría estatutaria con su rasgo o titulación legal (TREBEP).",
    "pairs": [
      [
        "Funcionario de Carrera",
        "Potestades públicas y carácter permanente estatutario (art. 9.2)"
      ],
      [
        "Funcionario Interino",
        "Necesidad y urgencia; máximo 3 años en vacante (art. 10)"
      ],
      [
        "Personal Eventual",
        "Confianza y asesoramiento especial; cese automático con la autoridad"
      ],
      [
        "Subgrupo A2 (GACE)",
        "Título universitario de Grado o Diplomado (art. 76 TREBEP)"
      ]
    ]
  },
  "boss": {
    "name": "El Intruso Estatutario",
    "kind": "ghost",
    "intro": [
      "¡He nombrado a un amigo personal funcionario de carrera sin oposición ni BOE!"
    ],
    "defeat": [
      "¡Art. 62 TREBEP y art. 47.1.f Ley 39/2015! Nulidad radical de pleno derecho del nombramiento carente de proceso selectivo."
    ]
  },
  "summary": [
    "TREBEP (RDL 5/2015): Funcionarios de carrera (potestades públicas art. 9.2), interinos (máx. 3 años), laborales y eventuales.",
    "Adquisición (art. 62): proceso selectivo + nombramiento en BOE + acatamiento CE + toma de posesión en plazo.",
    "Pérdida (art. 63): renuncia aceptada, pérdida nacionalidad, jubilación, separación del servicio o inhabilitación penal.",
    "Grupos (art. 76): A (Subgrupos A1 y A2: Grado), B (Técnico Superior), C (C1: Bachiller; C2: ESO).",
    "Personal eventual (art. 12): confianza y asesoramiento; cese libre y con la autoridad."
  ]
};

export const W5_T2: MiniWorldDef = {
  "id": "rrhh-t2",
  "num": 2,
  "temaTitle": "Tema 2: Derechos y deberes del personal al servicio de las Administraciones Públicas. Régimen disciplinario.",
  "name": "Tribunal Disciplinario y Deberes",
  "emoji": "⚖️",
  "theme": "rrhh",
  "color": "#6d28d9",
  "enemy": "reloj",
  "enemyName": "Faltas muy graves",
  "npcs": [
    {
      "name": "Inspector General de Servicios",
      "role": "Código de conducta, principios éticos y régimen disciplinario",
      "look": {
        "skin": "#fcd5b5",
        "hair": "#374151",
        "hairStyle": "short",
        "shirt": "#5b21b6",
        "pants": "#2e1065",
        "acc": [
          "badge",
          "tie"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "Código de Conducta (arts. 52 a 54 TREBEP): principios éticos (respeto a la CE, neutralidad, lealtad, integridad) y principios de conducta (diligencia, dedicación al servicio público, confidencialidad, trato esmerado).",
        "Régimen disciplinario (Título VII TREBEP, arts. 93 a 98 y RD 33/1986):",
        "• Infracciones: Muy graves (art. 95 TREBEP: abandono del servicio, acoso sexual/laboral, violación de secreto, notoria falta de rendimiento, quebranto de neutralidad), Graves y Leves.",
        "• Sanciones: separación del servicio (solo para funcionarios de carrera, priva de la condición); despido disciplinario (laborales); suspensión firme de funciones (máximo 6 años); traslado forzoso; demérito; apercibimiento.",
        "• Prescripción de infracciones: muy graves prescriben a los 3 años; graves a los 2 años; leves a los 6 meses.",
        "• Prescripción de sanciones: muy graves a los 3 años; graves a los 2 años; leves al año."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w5-t2-q1",
      "q": "¿En qué plazo prescriben las faltas disciplinarias MUY GRAVES cometidas por los empleados públicos (art. 97.1 TREBEP)?",
      "options": [
        "A los tres años",
        "A los dos años",
        "A los seis meses",
        "A los cinco años"
      ],
      "answer": 0,
      "explain": "Art. 97.1 TREBEP: Las infracciones muy graves prescribirán a los tres años, las graves a los dos años y las leves a los seis meses."
    },
    {
      "id": "w5-t2-q2",
      "q": "¿Cuál es la sanción disciplinaria más grave que puede imponerse exclusivamente a un funcionario de carrera?",
      "options": [
        "La separación del servicio (que comporta la pérdida definitiva de la condición de funcionario)",
        "El despido disciplinario",
        "La multa coercitiva mensual",
        "El traslado forzoso de localidad"
      ],
      "answer": 0,
      "explain": "Art. 96.1.a TREBEP: La separación del servicio de los funcionarios de carrera, que en el caso de los funcionarios interinos comportará la revocación de su nombramiento, priva de la condición de funcionario."
    },
    {
      "id": "w5-t2-q3",
      "q": "¿Cuál es el período máximo por el que se puede imponer la sanción de suspensión firme de funciones según el art. 96.1.c TREBEP?",
      "options": [
        "No podrá exceder de seis años",
        "No podrá exceder de dos años",
        "Hasta diez años",
        "Un máximo de tres años"
      ],
      "answer": 0,
      "explain": "Art. 96.1.c TREBEP: La suspensión firme de funciones, o de empleo y sueldo en el personal laboral, no podrá exceder de seis años."
    }
  ],
  "bossQs": [
    {
      "id": "w5-t2-b1",
      "q": "¿Cuál de las siguientes conductas está tipificada taxativamente como falta MUY GRAVE en el artículo 95.2 del TREBEP?",
      "options": [
        "El abandono del servicio, así como no hacerse cargo voluntariamente de las tareas encomendadas",
        "El retraso injustificado de quince minutos en dos ocasiones",
        "La falta de asistencia de un solo día no justificada",
        "La discrepancia técnica de criterio con un superior"
      ],
      "answer": 0,
      "explain": "Art. 95.2.c TREBEP: El abandono del servicio, así como no hacerse cargo voluntariamente de las tareas o funciones que tienen encomendadas, es falta muy grave."
    },
    {
      "id": "w5-t2-b2",
      "q": "¿Qué plazo de prescripción se aplica a las faltas disciplinarias LEVES según el art. 97.1 TREBEP?",
      "options": [
        "Seis meses",
        "Un año",
        "Tres meses",
        "Diez días"
      ],
      "answer": 0,
      "explain": "Art. 97.1 TREBEP: Las faltas leves prescriben a los seis meses (las sanciones impuestas por faltas leves prescriben al año)."
    },
    {
      "id": "w5-t2-b3",
      "q": "¿Qué garantía procedimental exige la imposición de sanciones por faltas graves o muy graves (art. 98.2 TREBEP)?",
      "options": [
        "Instrucción de expediente disciplinario previo, con audiencia obligatoria del inculpado y pliego de cargos",
        "Resolución inmediata sin trámite en 24 horas",
        "Audiencia al cónyuge del empleado",
        "Sentencia civil de conformidad"
      ],
      "answer": 0,
      "explain": "Art. 98.2 TREBEP: Para la imposición de sanciones por faltas graves o muy graves será preceptiva la tramitación de expediente contradictorio con nombramiento de instructor y pliego de cargos y descargo."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Prescripción de Infracciones y Sanciones Disciplinarias (TREBEP)",
    "prompt": "Empareja la gravedad de la falta con su plazo legal de prescripción.",
    "pairs": [
      [
        "Infracción Muy Grave",
        "Prescribe a los 3 años (art. 97.1 TREBEP)"
      ],
      [
        "Infracción Grave",
        "Prescribe a los 2 años (art. 97.1 TREBEP)"
      ],
      [
        "Infracción Leve",
        "Prescribe a los 6 meses (art. 97.1 TREBEP)"
      ],
      [
        "Suspensión firme de funciones",
        "Duración máxima de hasta 6 años (art. 96.1.c TREBEP)"
      ]
    ]
  },
  "boss": {
    "name": "El Infractor Impune",
    "kind": "ogre",
    "intro": [
      "¡He abandonado el puesto 6 meses y violado el deber de secreto laboral!"
    ],
    "defeat": [
      "¡Expediente disciplinario por falta muy grave (art. 95 TREBEP)! Sanción firme de separación del servicio."
    ]
  },
  "summary": [
    "Código de Conducta (arts. 52-54): principios éticos y principios de conducta.",
    "Faltas muy graves (art. 95.2): abandono de servicio, acoso, violación de secreto, quebranto de neutralidad.",
    "Sanciones (art. 96): separación del servicio (exclusiva carrera), despido (laboral), suspensión firme (máx. 6 años), traslado forzoso, apercibimiento.",
    "Prescripción de faltas: muy graves 3 años, graves 2 años, leves 6 meses.",
    "Prescripción de sanciones: muy graves 3 años, graves 2 años, leves 1 año."
  ]
};

export const W5_T3: MiniWorldDef = {
  "id": "rrhh-t3",
  "num": 3,
  "temaTitle": "Tema 3: Planificación de recursos humanos. Ofertas de empleo público. Selección de personal. Las competencias en materia de personal.",
  "name": "Gabinete de Planificación y Selección",
  "emoji": "📋",
  "theme": "rrhh",
  "color": "#7c3aed",
  "enemy": "reloj",
  "enemyName": "Procesos discriminatorios",
  "npcs": [
    {
      "name": "Presidente de la Comisión Permanente de Selección",
      "role": "Planificación, OEP y selección de personal (TREBEP)",
      "look": {
        "skin": "#f3c9a0",
        "hair": "#4b5563",
        "hairStyle": "short",
        "shirt": "#4c1d95",
        "pants": "#2e1065",
        "acc": [
          "tie",
          "glasses"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "Planificación de recursos humanos (arts. 69 y 70 TREBEP): planes para optimizar los recursos humanos en función de necesidades estratégicas.",
        "Oferta de Empleo Público (OEP, art. 70): instrumento de gestión de las necesidades de personal con asignación presupuestaria que deben proveerse. Publicada en diario oficial; ejecución improrrogable en el plazo máximo de 3 años.",
        "Sistemas selectivos (arts. 55 y 61 TREBEP):",
        "• Principios constitucionales: igualdad, mérito, capacidad y publicidad (art. 23 y 103.3 CE).",
        "• Sistemas ordinarios de funcionarios de carrera: Oposición (regla preferente) y Concurso-oposición. El Concurso solo con carácter excepcional en virtud de ley.",
        "• Órganos de selección (art. 60): colegiados, imparciales y de profesionalidad. Prohibición expresa de órganos de elección o asignación política; no pueden formar parte el personal de elección o designación política, los funcionarios interinos ni el personal eventual."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w5-t3-q1",
      "q": "¿En qué plazo máximo debe ejecutarse obligatoriamente la Oferta de Empleo Público según el art. 70.1 TREBEP?",
      "options": [
        "En el plazo improrrogable de tres años",
        "En el plazo de un año natural",
        "En dos años prorrogables a cuatro",
        "En seis meses desde su publicación"
      ],
      "answer": 0,
      "explain": "Art. 70.1 TREBEP: En todo caso, la ejecución de la oferta de empleo público o instrumento similar deberá desarrollarse dentro del plazo improrrogable de tres años."
    },
    {
      "id": "w5-t3-q2",
      "q": "¿Quiénes tienen prohibido formar parte de los tribunales y órganos de selección según el artículo 60.2 del TREBEP?",
      "options": [
        "El personal de elección o designación política, los funcionarios interinos y el personal eventual",
        "Los funcionarios del mismo o superior grupo",
        "Los profesores de universidad",
        "Los miembros con más de 10 años de antigüedad"
      ],
      "answer": 0,
      "explain": "Art. 60.2 TREBEP: El personal de elección o de designación política, los funcionarios interinos y el personal eventual no podrán formar parte de los órganos de selección."
    },
    {
      "id": "w5-t3-q3",
      "q": "¿Cuáles son los sistemas selectivos ordinarios para funcionarios de carrera según el artículo 61.6 del TREBEP?",
      "options": [
        "La oposición y el concurso-oposición, siendo la oposición el sistema preferente",
        "El concurso de méritos puro como regla general",
        "La libre designación directa por el ministro",
        "La entrevista personal eliminatoria única"
      ],
      "answer": 0,
      "explain": "Art. 61.6 TREBEP: Los sistemas selectivos de funcionarios de carrera serán los de oposición y concurso-oposición que deberán incluir, en todo caso, una o varias pruebas para determinar la capacidad de los aspirantes y establecer el orden de prelación. Sólo en virtud de ley podrá aplicarse el concurso con carácter excepcional."
    }
  ],
  "bossQs": [
    {
      "id": "w5-t3-b1",
      "q": "¿Qué reserva de plazas en las Ofertas de Empleo Público es obligatoria para personas con discapacidad (art. 59 TREBEP)?",
      "options": [
        "Un cupo no inferior al 7 por ciento de las vacantes (con al menos el 2 por ciento para personas con discapacidad intelectual)",
        "Un cupo del 5 por ciento",
        "Un 10 por ciento sin reserva intelectual",
        "Un 3 por ciento voluntario"
      ],
      "answer": 0,
      "explain": "Art. 59.1 TREBEP: En las ofertas de empleo público se reservará un cupo no inferior al siete por ciento de las vacantes convocadas para ser cubiertas entre personas con discapacidad, reservando al menos el dos por ciento para personas con discapacidad intelectual."
    },
    {
      "id": "w5-t3-b2",
      "q": "¿Qué valor o peso máximo pueden tener los méritos en la fase de concurso dentro de un concurso-oposición?",
      "options": [
        "No podrán superar una puntuación proporcionada que impida por sí misma la posibilidad de superar el proceso a quienes no tengan méritos previos",
        "El 90 por ciento de la puntuación total",
        "Pueden ser el 100 por ciento y prescindir del examen",
        "Puntúan con el doble que la oposición"
      ],
      "answer": 0,
      "explain": "Jurisprudencia constitucional consolidada y TREBEP: Los méritos en la fase de concurso no pueden tener un peso desproporcionado que convierta la prueba en un mero trámite y vulnere el principio de igualdad y libre concurrencia."
    },
    {
      "id": "w5-t3-b3",
      "q": "¿Qué cualidad técnica deben reunir todos los miembros de un tribunal de selección de personal (art. 60.1 TREBEP)?",
      "options": [
        "Poseer titulación de nivel igual o superior al exigido para el acceso al cuerpo convocado y en la misma área de conocimiento",
        "Haber sido concejales o diputados",
        "Pertenecer al cuerpo diplomático",
        "Tener dedicación exclusiva política"
      ],
      "answer": 0,
      "explain": "Art. 60.1 TREBEP: Los miembros de los órganos de selección deberán pertenecer a cuerpos o escalas de un subgrupo profesional igual o superior al exigido para los aspirantes."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Principios y Reglas de la Selección Pública (TREBEP)",
    "prompt": "Empareja cada regla con su contenido estatutario.",
    "pairs": [
      [
        "OEP (ejecución)",
        "Plazo improrrogable de 3 años para convocar y ejecutar (art. 70)"
      ],
      [
        "Cupo discapacidad",
        "Mínimo 7% de las plazas (al menos 2% para discapacidad intelectual)"
      ],
      [
        "Prohibición en tribunales",
        "No pueden formar parte cargos políticos, interinos ni eventuales"
      ],
      [
        "Nivel de titulación de tribunal",
        "Igual o superior al cuerpo convocado (art. 60 TREBEP)"
      ]
    ]
  },
  "boss": {
    "name": "El Comisionado Arbitrario",
    "kind": "veto",
    "intro": [
      "¡He colocado a un cargo político en el tribunal y eliminado la prueba objetiva!"
    ],
    "defeat": [
      "¡Art. 60 TREBEP y art. 23 CE! Vulneración de mérito y capacidad. Proceso anulado y repetición obligatoria."
    ]
  },
  "summary": [
    "OEP (art. 70 TREBEP): necesidades con dotación presupuestaria. Ejecución improrrogable en 3 años.",
    "Sistemas (art. 61): oposición (preferente) y concurso-oposición. Concurso solo excepcional por ley.",
    "Tribunales (art. 60): imparcialidad, profesionalidad (titulación igual o superior). Prohibidos: políticos, interinos, eventuales.",
    "Cupo de discapacidad (art. 59): mínimo 7% (al menos 2% discapacidad intelectual)."
  ]
};

export const W5_T4: MiniWorldDef = {
  "id": "rrhh-t4",
  "num": 4,
  "temaTitle": "Tema 4: Formas de provisión de puestos de trabajo y movilidad en la Administración del Estado. Promoción interna y carrera profesional.",
  "name": "Torre de Provisión y Carrera",
  "emoji": "📈",
  "theme": "rrhh",
  "color": "#8b5cf6",
  "enemy": "reloj",
  "enemyName": "Adscripciones provisionales eternas",
  "npcs": [
    {
      "name": "Subdirector de Carrera Administrativa",
      "role": "Provisión de puestos, movilidad, promoción interna y carrera profesional",
      "look": {
        "skin": "#fcd5b5",
        "hair": "#2e2e2e",
        "hairStyle": "short",
        "shirt": "#7c3aed",
        "pants": "#4c1d95",
        "acc": [
          "tie",
          "badge"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "Carrera profesional (arts. 16 y 17 TREBEP): carrera horizontal (reconocimiento de tramos sin cambio de puesto), carrera vertical (ascenso en la estructura de puestos), promoción interna vertical (ascenso de un subgrupo a otro superior) y horizontal.",
        "Promoción interna (art. 18 TREBEP): requiere al menos dos años de servicio en el subgrupo inferior, superación de pruebas específicas y poseer la titulación exigida.",
        "Formas de provisión de puestos en la AGE (arts. 78 a 84 TREBEP y RD 364/1995):",
        "1. Concurso (procedimiento ordinario): concurso general o específico (con fase de valoración de méritos específicos). Plazo posesorio: 3 días si no hay cambio de residencia, 1 mes si hay cambio de residencia o reingreso.",
        "2. Libre designación (excepcional): puestos de especial responsabilidad o confianza (subdirectores generales, delegados, secretarías de altos cargos). Cese discrecional.",
        "Otras formas de provisión: comisión de servicios (urgencia, máx. 1 año prorrogable por otro), adscripción provisional y reasignación de efectivos."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w5-t4-q1",
      "q": "¿Cuáles son los dos procedimientos ordinarios de provisión de puestos de trabajo de los funcionarios (art. 78 TREBEP)?",
      "options": [
        "El concurso (ordinario general) y la libre designación con convocatoria pública (excepcional)",
        "La asignación secreta y el sorteo",
        "El nombramiento ministerial verbal",
        "La subasta de plazas entre los aspirantes"
      ],
      "answer": 0,
      "explain": "Art. 78 y 79 TREBEP: El concurso constituye el procedimiento normal de provisión de puestos de trabajo; la libre designación se reserva con carácter excepcional a puestos de especial responsabilidad."
    },
    {
      "id": "w5-t4-q2",
      "q": "¿Cuántos años de servicio en el Subgrupo inferior se exigen como mínimo para participar en la promoción interna vertical (art. 18.2 TREBEP)?",
      "options": [
        "Al menos dos años de servicio activo en el Subgrupo inferior",
        "Tres años continuados",
        "Un año",
        "Cinco años"
      ],
      "answer": 0,
      "explain": "Art. 18.2 TREBEP: Los funcionarios deberán poseer los requisitos exigidos para el ingreso y tener una antigüedad de al menos dos años de servicio activo en el subgrupo o grupo de clasificación inferior."
    },
    {
      "id": "w5-t4-q3",
      "q": "¿Cuál es la duración máxima ordinaria de una 'comisión de servicios' según el RD 364/1995?",
      "options": [
        "Un año, prorrogable por otro en caso de no haberse cubierto el puesto con carácter definitivo",
        "Seis meses improrrogables",
        "Dos años sin prórroga",
        "Tres años consecutivos"
      ],
      "answer": 0,
      "explain": "Art. 64 RD 364/1995: La comisión de servicios tendrá una duración máxima de un año, prorrogable por otro en caso de no haberse cubierto el puesto con carácter definitivo."
    }
  ],
  "bossQs": [
    {
      "id": "w5-t4-b1",
      "q": "¿Cuál es el plazo de toma de posesión tras obtener un puesto por concurso si no implica cambio de residencia?",
      "options": [
        "Tres días hábiles",
        "Diez días naturales",
        "Un mes",
        "Quince días hábiles"
      ],
      "answer": 0,
      "explain": "Art. 48 RD 364/1995: El plazo de toma de posesión será de tres días hábiles si no implica cambio de residencia del funcionario."
    },
    {
      "id": "w5-t4-b2",
      "q": "¿Cuál es el plazo de toma de posesión tras obtener puesto por concurso si comporta cambio de residencia o reingreso al servicio?",
      "options": [
        "Un mes",
        "Veinte días hábiles",
        "Quince días naturales",
        "Dos meses"
      ],
      "answer": 0,
      "explain": "Art. 48 RD 364/1995: Si comporta cambio de residencia o reingreso al servicio activo, el plazo de toma de posesión será de un mes."
    },
    {
      "id": "w5-t4-b3",
      "q": "¿Qué caracteriza el cese de un puesto provisto por el sistema de 'libre designación'?",
      "options": [
        "Es de carácter discrecional por el órgano competente, debiendo ser motivado con las razones de idoneidad",
        "Exige expediente disciplinario previo con pliego de cargos",
        "Solo puede cesar si el funcionario solicita la excedencia",
        "El cese está prohibido durante 5 años"
      ],
      "answer": 0,
      "explain": "Art. 80.4 TREBEP: Los titulares de los puestos provistos por el procedimiento de libre designación podrán ser cesados con carácter discrecional. La motivación del cese se referirá a la competencia para adoptarlo y a la valoración de la idoneidad."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Modalidades de Provisión y Plazos Posesorios (RD 364/1995)",
    "prompt": "Empareja cada concepto de provisión con su régimen jurídico aplicable.",
    "pairs": [
      [
        "Concurso",
        "Procedimiento normal y ordinario de provisión basado en méritos (art. 79)"
      ],
      [
        "Libre designación",
        "Excepcional para puestos de especial responsabilidad; cese discrecional"
      ],
      [
        "Comisión de servicios",
        "Por razones de urgencia; duración máx. 1 año + 1 prórroga (art. 64)"
      ],
      [
        "Plazo posesorio sin mudanza",
        "3 días hábiles desde el cese en el puesto anterior (art. 48)"
      ]
    ]
  },
  "boss": {
    "name": "El Ocupante Discrecional",
    "kind": "king",
    "intro": [
      "¡He provisto todos los puestos técnicos por libre designación a dedo!"
    ],
    "defeat": [
      "¡Art. 79 TREBEP! El concurso es el procedimiento normal de provisión. Actos de libre designación indebida anulados."
    ]
  },
  "summary": [
    "Carrera: horizontal (tramos sin cambiar de puesto) y vertical (ascenso de puesto). Promoción interna vertical: mín. 2 años en subgrupo inferior.",
    "Provisión: concurso (procedimiento ordinario) vs libre designación (excepcional, especial responsabilidad, cese discrecional motivado).",
    "Comisión de servicios: máx. 1 año prorrogable por otro (urgencia).",
    "Plazos posesorios concurso (RD 364/1995): 3 días hábiles (sin cambio residencia); 1 mes (con cambio de residencia o reingreso)."
  ]
};

export const W5_T5: MiniWorldDef = {
  "id": "rrhh-t5",
  "num": 5,
  "temaTitle": "Tema 5: Situaciones administrativas del personal al servicio de las administraciones públicas. Incompatibilidades.",
  "name": "Laberinto de Situaciones e Incompatibilidades",
  "emoji": "🚪",
  "theme": "rrhh",
  "color": "#6d28d9",
  "enemy": "reloj",
  "enemyName": "Puertas giratorias",
  "npcs": [
    {
      "name": "Inspectora del Registro de Incompatibilidades",
      "role": "Situaciones administrativas (TREBEP) y Ley 53/1984",
      "look": {
        "skin": "#f3c9a0",
        "hair": "#4b5563",
        "hairStyle": "bun",
        "shirt": "#5b21b6",
        "pants": "#2e1065",
        "acc": [
          "glasses",
          "badge"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "Situaciones administrativas de los funcionarios (arts. 85 a 92 TREBEP):",
        "1. Servicio activo (art. 86): desempeñan puesto o en disponibilidad.",
        "2. Servicios especiales (art. 87): cargos políticos (ministros, diputados, miembros de órganos constitucionales, etc.). Cómputo de trienios, reserva de puesto en la misma localidad y cómputo de carrera.",
        "3. Servicio en otras Administraciones públicas (art. 88): transferencia o concurso en CCAA/EELL.",
        "4. Excedencia (art. 89):",
        "• Voluntaria por interés particular: exige haber prestado servicios efectivos durante un mínimo de 5 años previos. Sin reserva de puesto ni devengo de retribuciones.",
        "• Voluntaria por agrupación familiar: sin cómputo de tiempo previo.",
        "• Por cuidado de familiares (hijos o familiares hasta 2º grado): cómputo de trienios y carrera. Reserva de puesto de trabajo de al menos 2 años (luego en la misma localidad y retribución).",
        "• Por razón de violencia de género / violencia terrorista.",
        "5. Suspensión de funciones (art. 90): provisional (máx. 6 meses salvo proceso penal) o firme.",
        "Ley 53/1984 de Incompatibilidades: dedicación a un solo puesto público, prohibición de compatibilidad con actividades privadas directamente relacionadas con el puesto."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w5-t5-q1",
      "q": "¿Cuántos años de servicios efectivos previos se exigen para solicitar la excedencia voluntaria por interés particular (art. 89.2 TREBEP)?",
      "options": [
        "Un mínimo de cinco años inmediatamente anteriores en cualquiera de las AAPP",
        "Tres años",
        "Dos años",
        "No se exige período previo alguno"
      ],
      "answer": 0,
      "explain": "Art. 89.2 TREBEP: La concesión de excedencia voluntaria por interés particular quedará subordinada a las necesidades del servicio. Para solicitarla se requiere haber prestado servicios efectivos en cualquiera de las Administraciones Públicas durante un período mínimo de cinco años inmediatamente anteriores."
    },
    {
      "id": "w5-t5-q2",
      "q": "¿Qué derechos conserva el funcionario declarado en situación de 'servicios especiales' (art. 87.2 TREBEP)?",
      "options": [
        "Perciben retribuciones del cargo desempeñado, pero computan el tiempo a efectos de trienios, carrera y tienen reserva del puesto de trabajo en la misma localidad",
        "Pierden la condición de funcionario para siempre",
        "Solo tienen derecho a la mitad del sueldo base",
        "No computan trienios bajo ninguna circunstancia"
      ],
      "answer": 0,
      "explain": "Art. 87.2 TREBEP: Quienes se encuentren en servicios especiales percibirán las retribuciones del puesto o cargo que desempeñen. El tiempo se les computará a efectos de ascensos, reconocimiento de trienios y promoción interna, teniendo reserva del puesto de trabajo en la misma localidad y en condiciones equivalentes."
    },
    {
      "id": "w5-t5-q3",
      "q": "¿Cuál es el principio cardinal de la Ley 53/1984 de Incompatibilidades del Personal al Servicio de las AAPP?",
      "options": [
        "Dedicación del personal a un solo puesto de trabajo público, prohibiendo un segundo puesto salvo excepciones docentes o sanitarias tasadas",
        "Libertad absoluta de pluriempleo en todo el sector privado",
        "Posibilidad de cobrar dos nóminas completas del Estado",
        "Incompatibilidad de votar en elecciones sindicales"
      ],
      "answer": 0,
      "explain": "Art. 1 Ley 53/1984: El personal comprendido en su ámbito de aplicación no podrá compatibilizar sus actividades con el desempeño de un segundo puesto de trabajo, cargo o actividad en el sector público, salvo las excepciones legales tasadas (docencia universitaria o sanidad con límites)."
    }
  ],
  "bossQs": [
    {
      "id": "w5-t5-b1",
      "q": "¿Cuánto dura la reserva de puesto de trabajo en la excedencia por cuidado de familiares según el art. 89.4 del TREBEP?",
      "options": [
        "Al menos dos años, transcurrido el cual la reserva será a un puesto en la misma localidad y de igual retribución",
        "Seis meses únicamente",
        "Cinco años continuados con reserva de puesto exacto",
        "No hay reserva de puesto en ningún caso"
      ],
      "answer": 0,
      "explain": "Art. 89.4 TREBEP: Los funcionarios tendrán derecho a un período de excedencia para cuidado de familiares. El puesto desempeñado se reservará al menos durante dos años. Transcurrido este período, dicha reserva lo será a un puesto en la misma localidad y de igual retribución."
    },
    {
      "id": "w5-t5-b2",
      "q": "¿Cuál es la duración máxima general de la suspensión provisional de funciones en un expediente disciplinario (art. 90.3 TREBEP)?",
      "options": [
        "No podrá exceder de seis meses, salvo en caso de paralización del procedimiento imputable al interesado",
        "Un año máximo",
        "Tres meses improrrogables",
        "Treinta días"
      ],
      "answer": 0,
      "explain": "Art. 90.3 TREBEP: La suspensión provisional no podrá exceder de seis meses, salvo en caso de paralización del procedimiento imputable al interesado."
    },
    {
      "id": "w5-t5-b3",
      "q": "¿Qué retribuciones percibe un funcionario durante la suspensión provisional de funciones (art. 90 TREBEP)?",
      "options": [
        "Las retribuciones básicas (sueldo y trienios) y, en su caso, las prestaciones familiares por hijo a cargo",
        "No percibe absolutamente ninguna retribución",
        "Percibe el 100% de básicas y complementarias",
        "Solo percibe el complemento de destino"
      ],
      "answer": 0,
      "explain": "Art. 90.3 TREBEP y RD 33/1986: El funcionario suspenso provisional tendrá derecho a percibir durante la suspensión sus retribuciones básicas y las prestaciones familiares por hijo a cargo."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Situaciones Administrativas del Funcionario (TREBEP)",
    "prompt": "Empareja cada situación con sus efectos sobre trienios y reserva de puesto.",
    "pairs": [
      [
        "Servicio Activo",
        "Desempeño efectivo de puesto con plenos derechos y retribuciones"
      ],
      [
        "Servicios Especiales",
        "Cargos públicos; computa trienios y carrera con reserva de puesto (art. 87)"
      ],
      [
        "Excedencia por Interés Particular",
        "Exige 5 años de servicios previos; no computa trienios ni hay reserva"
      ],
      [
        "Excedencia Cuidado Familiares",
        "Computa trienios y carrera; reserva del puesto al menos 2 años (art. 89.4)"
      ]
    ]
  },
  "boss": {
    "name": "El Pluriempleado Oculto",
    "kind": "ghost",
    "intro": [
      "¡Ejerzo de asesor privado en una empresa contratista de mi ministerio sin solicitar compatibilidad!"
    ],
    "defeat": [
      "¡Ley 53/1984 y falta muy grave del art. 95.2 TREBEP! Cese forzoso e inhabilitación por conflicto de intereses."
    ]
  },
  "summary": [
    "Servicio activo (art. 86): plenitud de derechos y deberes.",
    "Servicios especiales (art. 87): cargos políticos/constitucionales; reserva de puesto en localidad y cómputo de trienios y ascensos.",
    "Excedencia voluntaria por interés particular (art. 89.2): mín. 5 años previos. Sin reserva ni trienios.",
    "Excedencia por cuidado familiar (art. 89.4): computa trienios; reserva del puesto mín. 2 años.",
    "Suspensión provisional (art. 90): máx. 6 meses (percibe sueldo y trienios).",
    "Incompatibilidades (Ley 53/1984): principio de un solo puesto público; autorización preceptiva para actividades privadas compatibles."
  ]
};

export const W5_T6: MiniWorldDef = {
  "id": "rrhh-t6",
  "num": 6,
  "temaTitle": "Tema 6: El sistema de retribuciones de los funcionarios. Retribuciones básicas y retribuciones complementarias. Las indemnizaciones por razón del servicio.",
  "name": "Tesoro de las Retribuciones y Nóminas",
  "emoji": "💰",
  "theme": "rrhh",
  "color": "#7c3aed",
  "enemy": "moneda",
  "enemyName": "Retribuciones indebidas",
  "npcs": [
    {
      "name": "Habilitada Pagadora de Nóminas",
      "role": "Retribuciones básicas, complementarias e indemnizaciones (RD 462/2002)",
      "look": {
        "skin": "#fcd5b5",
        "hair": "#2e2e2e",
        "hairStyle": "short",
        "shirt": "#6d28d9",
        "pants": "#3b0764",
        "acc": [
          "glasses",
          "badge"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "Estructura retributiva de los funcionarios (arts. 22 a 24 TREBEP y leyes anuales de Presupuestos Generales del Estado):",
        "1. Retribuciones básicas: fijadas de forma idéntica en los PGE para cada Grupo o Subgrupo.",
        "• Sueldo: asignado a cada subgrupo de clasificación profesional.",
        "• Trienios: cantidad igual para cada grupo por cada 3 años de servicios prestados.",
        "• Pagas extraordinarias: dos al año (junio y diciembre), con sueldo, trienios y complemento de destino íntegro.",
        "2. Retribuciones complementarias (art. 24 TREBEP):",
        "• Complemento de destino: nivel del puesto de trabajo (en la AGE del nivel 14 al nivel 30).",
        "• Complemento específico: dificultad técnica, dedicación, responsabilidad, incompatibilidad o peligrosidad.",
        "• Complemento de productividad: especial rendimiento, actividad o interés en el desempeño.",
        "• Gratificaciones por servicios extraordinarios: prestados fuera de la jornada ordinaria (nunca fijas ni periódicas).",
        "Indemnizaciones por razón del servicio (RD 462/2002): dietas (manutención y alojamiento), gastos de viaje e indemnización por traslado de residencia."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w5-t6-q1",
      "q": "¿Cuáles son los componentes de las 'retribuciones básicas' de los funcionarios públicos según el art. 23 TREBEP?",
      "options": [
        "El sueldo asignado a cada Subgrupo, los trienios y las pagas extraordinarias",
        "El sueldo base y el complemento de destino exclusivamente",
        "El complemento específico y la productividad",
        "La nómina fija y los atrasos de IPC"
      ],
      "answer": 0,
      "explain": "Art. 23 TREBEP: Son retribuciones básicas las que retribuyen al funcionario según la adscripción de su cuerpo a un determinado Subgrupo y por su antigüedad: el sueldo, los trienios y las pagas extraordinarias."
    },
    {
      "id": "w5-t6-q2",
      "q": "¿Qué retribuye el 'complemento específico' en el sueldo del funcionario según el artículo 24.b del TREBEP?",
      "options": [
        "La especial dificultad técnica, dedicación, responsabilidad, incompatibilidad o penosidad del puesto",
        "El nivel jerárquico del puesto de trabajo del 14 al 30",
        "La antigüedad acumulada por cada tres años de servicio",
        "El buen comportamiento en el trato al ciudadano"
      ],
      "answer": 0,
      "explain": "Art. 24.b TREBEP: El complemento específico retribuye las condiciones particulares de algunos puestos de trabajo en atención a su especial dificultad técnica, dedicación, responsabilidad, incompatibilidad o peligrosidad o penosidad."
    },
    {
      "id": "w5-t6-q3",
      "q": "¿Qué regla prohíbe taxativamente la Ley respecto a las gratificaciones por servicios extraordinarios (horas extra)?",
      "options": [
        "No podrán ser en ningún caso fijas en su cuantía ni periódicas en su devengo",
        "No pueden superar el 10% del sueldo base",
        "Solo se abonan si el funcionario tiene más de 50 años",
        "Deben cobrarse todos los meses en nómina"
      ],
      "answer": 0,
      "explain": "Art. 24.d TREBEP: Las gratificaciones por servicios extraordinarios se devengan por servicios prestados fuera de la jornada normal y en ningún caso podrán ser fijas en su cuantía ni periódicas en su devengo."
    }
  ],
  "bossQs": [
    {
      "id": "w5-t6-b1",
      "q": "¿Qué retribuciones integran las pagas extraordinarias de los funcionarios públicos (art. 22.4 TREBEP)?",
      "options": [
        "Una mensualidad de retribuciones básicas (sueldo y trienios) y de la totalidad del complemento de destino mensual",
        "Solo el sueldo base sin trienios",
        "El total íntegro de la nómina con complemento específico incluido",
        "El sueldo base más un 20 por ciento fijo"
      ],
      "answer": 0,
      "explain": "Art. 22.4 TREBEP y leyes de PGE: Las pagas extraordinarias serán dos al año y se devengarán con una mensualidad de sueldo y trienios y la totalidad del complemento de destino correspondiente al puesto desempeñado."
    },
    {
      "id": "w5-t6-b2",
      "q": "¿Cuáles son los niveles mínimo y máximo de puestos de trabajo clasificados en la Administración General del Estado?",
      "options": [
        "El nivel 14 es el mínimo y el nivel 30 es el máximo",
        "Nivel 1 al nivel 10",
        "Nivel 10 al nivel 25",
        "Nivel 18 al nivel 32"
      ],
      "answer": 0,
      "explain": "RD 364/1995: Los puestos de trabajo de la AGE están clasificados en 30 niveles, correspondiendo el nivel 14 al mínimo y el nivel 30 al máximo (reservado a subdirectores generales y directores de gabinete). Para el Subgrupo A2 el intervalo de niveles habitual es del nivel 18 al nivel 26."
    },
    {
      "id": "w5-t6-b3",
      "q": "¿Qué norma regula las indemnizaciones por razón del servicio (dietas y gastos de viaje) en la AGE?",
      "options": [
        "El Real Decreto 462/2002, de 24 de mayo",
        "La Ley 30/1984 de medidas de reforma",
        "La Orden ministerial de 1982",
        "El Real Decreto 311/2022"
      ],
      "answer": 0,
      "explain": "El Real Decreto 462/2002, de 24 de mayo, es la norma reguladora de las indemnizaciones por razón del servicio (comisiones de servicio con derecho a indemnización, dietas de alojamiento y manutención, gastos de desplazamiento y traslados)."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Conceptos Retributivos de los Funcionarios",
    "prompt": "Empareja cada concepto de nómina con su fundamento legal en el TREBEP.",
    "pairs": [
      [
        "Sueldo y Trienios",
        "Retribuciones básicas fijadas por Subgrupo y antigüedad (art. 23)"
      ],
      [
        "Complemento de Destino",
        "Retribución complementaria según el nivel del puesto (14 a 30)"
      ],
      [
        "Complemento Específico",
        "Retribuye dificultad técnica, responsabilidad o penosidad"
      ],
      [
        "Dietas (RD 462/2002)",
        "Indemnización compensatoria de gastos de manutención y alojamiento"
      ]
    ]
  },
  "boss": {
    "name": "El Pagador Fraudulento",
    "kind": "moneda",
    "intro": [
      "¡He asignado una gratificación extraordinaria fija y periódica a mi jefe!"
    ],
    "defeat": [
      "¡Art. 24.d TREBEP e Intervención General! Prohibición legal de gratificaciones fijas. Reparo suspensivo contable."
    ]
  },
  "summary": [
    "Retribuciones básicas (art. 23 TREBEP): Sueldo (por Subgrupo), Trienios (por cada 3 años) y Pagas extraordinarias (2 al año: básicas + comp. destino).",
    "Retribuciones complementarias (art. 24): Complemento de Destino (nivel 14 al 30), Complemento Específico (dificultad/penosidad), Productividad y Gratificaciones extraordinarias (no periódicas).",
    "Intervalo de niveles en la AGE: 14 a 30 (Subgrupo A2: habitualmente niveles 18 a 26).",
    "Indemnizaciones por razón del servicio: RD 462/2002 (dietas, viajes y traslados)."
  ]
};

export const W5_T7: MiniWorldDef = {
  "id": "rrhh-t7",
  "num": 7,
  "temaTitle": "Tema 7: El personal laboral al servicio de las Administraciones públicas: su régimen jurídico. El IV Convenio Único para el personal laboral al servicio de la Administración General del Estado: ámbito de aplicación y sistema de clasificación.",
  "name": "Taller del Personal Laboral",
  "emoji": "🛠️",
  "theme": "rrhh",
  "color": "#6d28d9",
  "enemy": "reloj",
  "enemyName": "Fraude de temporalidad laboral",
  "npcs": [
    {
      "name": "Negociador del Convenio Único",
      "role": "Personal laboral y IV Convenio Único de la AGE",
      "look": {
        "skin": "#f3c9a0",
        "hair": "#4b5563",
        "hairStyle": "short",
        "shirt": "#4c1d95",
        "pants": "#1f2937",
        "acc": [
          "tie",
          "glasses"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "El personal laboral en las AAPP se rige por el TREBEP (arts. 7, 11 y concordantes), la legislación laboral común (Estatuto de los Trabajadores, ET) y los convenios colectivos.",
        "Tipos de personal laboral (art. 11 TREBEP): fijo, por tiempo indefinido o temporal. Selección bajo principios de igualdad, mérito, capacidad y publicidad.",
        "IV Convenio Único para el personal laboral al servicio de la Administración General del Estado (publicado en BOE de 17 de mayo de 2019):",
        "• Ámbito: personal laboral de la AGE y sus organismos públicos vinculados o dependientes.",
        "• Sistema de clasificación profesional (art. 14): encuadrado en 5 Grupos Profesionales (del Grupo M3/G1 superior hasta el Grupo E1/E2 operativo), vinculados al Marco Español de Cualificaciones para la Educación Superior (MECES) y al Catálogo Nacional de Cualificaciones Profesionales (CNCP).",
        "• Modalidades retributivas: salario base por grupo, complementos de puesto y antigüedad.",
        "• Jornada laboral ordinaria de 37,5 horas semanales de promedio en cómputo anual."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w5-t7-q1",
      "q": "¿Por qué fuentes normativas se rige el personal laboral al servicio de las Administraciones públicas según el art. 7 TREBEP?",
      "options": [
        "Por el TREBEP en lo que resulte de aplicación, la legislación laboral común (Estatuto de los Trabajadores) y los convenios colectivos",
        "Exclusivamente por las leyes militares",
        "Por las leyes mercantiles de sociedades anónimas",
        "Solo por instrucciones verbales del ministro"
      ],
      "answer": 0,
      "explain": "Art. 7 TREBEP: El personal laboral al servicio de las Administraciones públicas se rige por la legislación laboral y por las demás normas convencionalmente aplicables, así como por los preceptos de este Estatuto que así lo dispongan."
    },
    {
      "id": "w5-t7-q2",
      "q": "¿En cuántos grupos profesionales clasifica al personal laboral el IV Convenio Único de la AGE?",
      "options": [
        "Cinco grupos profesionales vinculados al Catálogo Nacional de Cualificaciones (M3/G1 a E1)",
        "En tres grupos sin subgrupos",
        "En diez categorías fijas",
        "En dos únicas divisiones salariales"
      ],
      "answer": 0,
      "explain": "El IV Convenio Único de la AGE (BOE 17/05/2019) estructuró el personal en 5 grupos profesionales adaptados a las cualificaciones formativas y al sistema educativo nacional (M3/1 a E1)."
    },
    {
      "id": "w5-t7-q3",
      "q": "¿Cuál es la jornada laboral general establecida para el personal del IV Convenio Único de la AGE?",
      "options": [
        "37 horas y media semanales de promedio en cómputo anual",
        "40 horas semanales estrictas",
        "35 horas semanales en todo caso",
        "30 horas semanales"
      ],
      "answer": 0,
      "explain": "Art. 43 del IV Convenio Único de la AGE: La jornada ordinaria de trabajo es de 37 horas y media semanales en cómputo anual."
    }
  ],
  "bossQs": [
    {
      "id": "w5-t7-b1",
      "q": "¿Qué figura jurídica laboral surge cuando un contrato temporal de la Administración se celebra en fraude de ley o supera el plazo legal?",
      "options": [
        "Trabajador laboral indefinido no fijo (conforme a jurisprudencia de la Sala de lo Social del TS)",
        "Funcionario de carrera automático",
        "Trabajador despedido sin indemnización",
        "Personal eventual de libre designación"
      ],
      "answer": 0,
      "explain": "Jurisprudencia de la Sala IV del Tribunal Supremo: La contratación laboral temporal irregular o abusiva en las AAPP determina la condición de 'personal laboral indefinido no fijo', manteniendo la plaza hasta su cobertura reglamentaria por proceso selectivo legal."
    },
    {
      "id": "w5-t7-b2",
      "q": "¿Qué órgano paritario interpreta y vela por la aplicación del IV Convenio Único de la AGE?",
      "options": [
        "La Comisión Paritaria del IV Convenio Único (COPACON)",
        "El Tribunal Supremo en Sala de Gobierno",
        "La Comisión General de Secretarios de Estado",
        "El Consejo Económico y Social"
      ],
      "answer": 0,
      "explain": "La Comisión Paritaria del Convenio Único (COPACON), integrada por representantes de la Administración y de las organizaciones sindicales firmantes, interpreta y vigila el cumplimiento del convenio."
    },
    {
      "id": "w5-t7-b3",
      "q": "¿Qué principio del artículo 55 TREBEP rige inexcusablemente para la selección del personal laboral de la Administración?",
      "options": [
        "Publicidad de las convocatorias e igualdad, mérito y capacidad en las pruebas",
        "Libre contratación verbal privada",
        "Designación directa sin prueba alguna",
        "Preferencia de los familiares del personal activo"
      ],
      "answer": 0,
      "explain": "Art. 55 TREBEP: Todos los ciudadanos tienen derecho al acceso al empleo público, incluido el personal laboral, de acuerdo con los principios constitucionales de igualdad, mérito y capacidad, y mediante convocatoria pública."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Régimen del Personal Laboral e IV Convenio Único",
    "prompt": "Empareja cada concepto con su régimen en el empleo público.",
    "pairs": [
      [
        "Fuentes reguladoras (art. 7)",
        "TREBEP, Estatuto de los Trabajadores y Convenio Colectivo aplicable"
      ],
      [
        "IV Convenio Único AGE",
        "Aprobado en 2019, 5 grupos profesionales y jornada de 37,5 horas"
      ],
      [
        "Indefinido no fijo",
        "Condición jurídica derivada del fraude de ley temporal en el sector público"
      ],
      [
        "COPACON",
        "Comisión Paritaria de interpretación y seguimiento del Convenio Único"
      ]
    ]
  },
  "boss": {
    "name": "El Contratista Irregular",
    "kind": "ogre",
    "intro": [
      "¡He encadenado 10 contratos temporales ilegales para eludir la OEP!"
    ],
    "defeat": [
      "¡Sentencia de la Sala de lo Social del Tribunal Supremo! Declaración de condición indefinida no fija e inclusión en la OEP de estabilización."
    ]
  },
  "summary": [
    "Personal laboral (art. 11 TREBEP): fijo, indefinido y temporal. Principios de igualdad, mérito y capacidad.",
    "Régimen jurídico (art. 7): TREBEP, Estatuto de los Trabajadores y convenios colectivos.",
    "IV Convenio Único de la AGE (2019): clasificación en 5 grupos profesionales según cualificación (MECES/CNCP).",
    "Jornada: 37,5 horas semanales de promedio anual.",
    "Jurisprudencia: personal laboral indefinido no fijo ante abuso de temporalidad.",
    "Órgano paritario: Comisión Paritaria del Convenio Único (COPACON)."
  ]
};

export const W5_T8: MiniWorldDef = {
  "id": "rrhh-t8",
  "num": 8,
  "temaTitle": "Tema 8: Negociación colectiva, representación y participación institucional de los empleados públicos. El derecho de huelga y su ejercicio.",
  "name": "Asamblea de Negociación y Huelga",
  "emoji": "📢",
  "theme": "rrhh",
  "color": "#7c3aed",
  "enemy": "reloj",
  "enemyName": "Pactos vulnerados",
  "npcs": [
    {
      "name": "Portavoz Sindical",
      "role": "Mesas de negociación, órganos de representación y derecho de huelga",
      "look": {
        "skin": "#f3c9a0",
        "hair": "#2e2e2e",
        "hairStyle": "short",
        "shirt": "#6d28d9",
        "pants": "#1f2937",
        "acc": [
          "scarf",
          "badge"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "Negociación colectiva en la función pública (Título III, Capítulo IV TREBEP, arts. 31 a 46):",
        "• Mesas de Negociación: Mesa General de Negociación de las Administraciones Públicas (materias comunes funcionarios y laborales), Mesas Generales de cada Administración y Mesas Sectoriales.",
        "• Criterio de representatividad: sindicatos que hayan obtenido al menos el 10% de los representantes en las elecciones de órganos de representación.",
        "• Instrumentos: Pactos (asuntos de competencia del órgano que los firma) y Acuerdos (asuntos de competencia del órgano colegiado de gobierno: Consejo de Ministros/Consejos autonómicos; precisan aprobación expresa).",
        "Órganos de representación unitaria:",
        "• Junta de Personal: para funcionarios en unidades electorales de 50 o más funcionarios.",
        "• Delegados de Personal: hasta 49 funcionarios (de 6 a 30 funcionarios, 1 delegado; de 31 a 49, 3 delegados).",
        "• Para personal laboral: Comités de Empresa y Delegados de Personal (según el Estatuto de los Trabajadores).",
        "Derecho de huelga (art. 28.2 CE y art. 15.c TREBEP): garantizando siempre los servicios mínimos esenciales de la comunidad. Descuento retributivo proporcional estricto durante la huelga (no computa como sanción)."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w5-t8-q1",
      "q": "¿En qué unidades electorales de funcionarios se constituye obligatoriamente una Junta de Personal según el art. 39 TREBEP?",
      "options": [
        "En los centros o unidades que cuenten con un censo de 50 o más funcionarios",
        "En cualquier unidad con al menos 10 funcionarios",
        "Solo en ministerios con más de 1.000 funcionarios",
        "Únicamente a nivel autonómico global"
      ],
      "answer": 0,
      "explain": "Art. 39.1 TREBEP: Las Juntas de Personal se constituirán en unidades electorales que cuenten con un censo de, al menos, 50 funcionarios."
    },
    {
      "id": "w5-t8-q2",
      "q": "¿Qué porcentaje mínimo de representantes en elecciones sindicales otorga la legitimación para estar en las Mesas de Negociación (art. 33 TREBEP)?",
      "options": [
        "Haber obtenido al menos el 10 por ciento de los representantes en las elecciones a Juntas y Delegados de Personal",
        "Haber obtenido al menos el 5 por ciento",
        "Un mínimo del 25 por ciento",
        "No se exige porcentaje mínimo"
      ],
      "answer": 0,
      "explain": "Art. 33.1 TREBEP: Estarán legitimados en la Mesa General los sindicatos más representativos a nivel estatal o autonómico y los que hayan obtenido el 10 por 100 o más de los representantes en las elecciones."
    },
    {
      "id": "w5-t8-q3",
      "q": "¿Qué diferencia existe entre un 'Pacto' y un 'Acuerdo' en la negociación colectiva pública (art. 38 TREBEP)?",
      "options": [
        "Los Pactos versan sobre materias de competencia del órgano emisor y son válidos de forma directa; los Acuerdos versan sobre materias de competencia del Consejo de Ministros/órgano de gobierno y exigen su aprobación expresa y formal",
        "Los Pactos no vinculan y los Acuerdos son leyes",
        "No hay diferencia legal",
        "Los Pactos se aprueban en referéndum"
      ],
      "answer": 0,
      "explain": "Art. 38.3 TREBEP: Los Pactos se celebrarán sobre materias que se correspondan estrictamente con la competencia del órgano administrativo y vincularán directamente; los Acuerdos versarán sobre materias de la competencia del órgano de gobierno (Consejo de Ministros) y requerirán su aprobación expresa para ser eficaces."
    }
  ],
  "bossQs": [
    {
      "id": "w5-t8-b1",
      "q": "¿Qué descuento económico se practica en las retribuciones del empleado público que ejerce su derecho a la huelga?",
      "options": [
        "La deducción proporcional exacta de haberes correspondiente a la jornada no trabajada (que no tiene carácter de sanción disciplinaria)",
        "La pérdida íntegra del sueldo de todo el mes",
        "Ningún descuento por ser un derecho constitucional fundamental",
        "Una sanción económica fija impuesta por el instructor"
      ],
      "answer": 0,
      "explain": "Art. 15.c TREBEP y RDL 17/1977: Quienes ejerciten el derecho de huelga no devengarán ni percibirán las retribuciones correspondientes al tiempo en que hayan permanecido en la misma, sin que dicha deducción tenga carácter de sanción."
    },
    {
      "id": "w5-t8-b2",
      "q": "¿Cuántos delegados de personal corresponden a una unidad electoral de entre 31 y 49 funcionarios (art. 39.2 TREBEP)?",
      "options": [
        "Tres delegados de personal",
        "Un delegado de personal",
        "Cinco delegados",
        "Se constituye una Junta de Personal"
      ],
      "answer": 0,
      "explain": "Art. 39.2 TREBEP: En unidades electorales de hasta 30 funcionarios, 1 delegado de personal; de 31 a 49 funcionarios, 3 delegados de personal."
    },
    {
      "id": "w5-t8-b3",
      "q": "¿Qué garantía esencial debe asegurar la autoridad administrativa gubernativa al convocarse una huelga en servicios públicos (art. 28.2 CE)?",
      "options": [
        "El establecimiento y mantenimiento de los servicios mínimos indispensables para la comunidad",
        "La prohibición judicial de manifestaciones",
        "El pago anticipado de las nóminas",
        "La disolución de los sindicatos convocantes"
      ],
      "answer": 0,
      "explain": "Art. 28.2 CE: La ley que regule el ejercicio del derecho de huelga establecerá las garantías precisas para asegurar el mantenimiento de los servicios esenciales de la comunidad (servicios mínimos)."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Órganos de Representación y Negociación Colectiva",
    "prompt": "Empareja cada institución con sus reglas de constitución y representatividad.",
    "pairs": [
      [
        "Junta de Personal",
        "Órgano colegiado de representación para unidades de 50 o más funcionarios"
      ],
      [
        "Delegados de Personal",
        "1 delegado (hasta 30 funcionarios) o 3 delegados (de 31 a 49 funcionarios)"
      ],
      [
        "Pactos (art. 38 TREBEP)",
        "Competencia directa del órgano firmante (vinculan de inmediato)"
      ],
      [
        "Acuerdos (art. 38 TREBEP)",
        "Materias de competencia del Consejo de Ministros (exigen aprobación formal)"
      ]
    ]
  },
  "boss": {
    "name": "El Antihuelga Coercitivo",
    "kind": "veto",
    "intro": [
      "¡Sancionaré con falta grave y despido a quienes secundaron la huelga legal!"
    ],
    "defeat": [
      "¡Art. 28.2 CE y art. 15.c TREBEP! El ejercicio de huelga es un derecho fundamental; solo procede la deducción de haberes."
    ]
  },
  "summary": [
    "Negociación colectiva (arts. 31-38): Mesas Generales y Sectoriales. Mínimo 10% representatividad electoral.",
    "Pactos (competencia directa del órgano) vs Acuerdos (competencia de Consejo de Ministros/órgano de gobierno, exigen aprobación formal).",
    "Representación: Juntas de Personal (censo de 50 o más funcionarios); Delegados de Personal (1 en censo 6-30, 3 en 31-49).",
    "Huelga (art. 28.2 CE y art. 15.c TREBEP): servicios mínimos obligatorios. Deducción proporcional de haberes sin carácter de sanción."
  ]
};

export const W5_T9: MiniWorldDef = {
  "id": "rrhh-t9",
  "num": 9,
  "temaTitle": "Tema 9: El régimen especial de la Seguridad Social de los funcionarios civiles del Estado. MUFACE y las clases pasivas: acción protectora. Concepto y clases de prestaciones. Derechos pasivos.",
  "name": "Santuario de MUFACE y Clases Pasivas",
  "emoji": "🛡️",
  "theme": "rrhh",
  "color": "#6d28d9",
  "enemy": "reloj",
  "enemyName": "Lagunas pasivas",
  "npcs": [
    {
      "name": "Directora Provincial de MUFACE",
      "role": "Mutualismo administrativo, acción protectora y Régimen de Clases Pasivas",
      "look": {
        "skin": "#fcd5b5",
        "hair": "#4b5563",
        "hairStyle": "bun",
        "shirt": "#5b21b6",
        "pants": "#3b0764",
        "acc": [
          "badge",
          "glasses"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "Régimen especial de Seguridad Social de los Funcionarios Civiles del Estado:",
        "1. Mutualismo administrativo (MUFACE, RDL 4/2000):",
        "• Campo de aplicación: funcionarios de carrera de la AGE y funcionarios en prácticas.",
        "• Financiación: cotizaciones de los mutualistas (cuota de MUFACE) y aportación del Estado.",
        "• Acción protectora: asistencia sanitaria (elección anual entre el Sistema Nacional de Salud público o entidades de seguro privado concertadas), subsidio por incapacidad temporal (complementa la retribución a partir del día 91), indemnizaciones y prestaciones familiares.",
        "2. Régimen de Clases Pasivas del Estado (RDL 670/1987):",
        "• Cobertura de riesgos de jubilación o retiro, incapacidad permanente para el servicio, viudedad, orfandad y a favor de familiares.",
        "• Colectivo: funcionarios que ingresaron en la Administración antes del 1 de enero de 2011.",
        "• Importante: los funcionarios ingresados a partir del 1 de enero de 2011 quedan encuadrados obligatoriamente a efectos de pensiones de jubilación en el Régimen General de la Seguridad Social (RDL 13/2010), manteniendo MUFACE para asistencia sanitaria y subsidios."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w5-t9-q1",
      "q": "¿En qué régimen de pensiones de jubilación quedan obligatoriamente integrados los funcionarios de carrera que hayan ingresado a partir del 1 de enero de 2011?",
      "options": [
        "En el Régimen General de la Seguridad Social a efectos pasivos (RDL 13/2010)",
        "En el Régimen de Clases Pasivas del Estado exclusivamente",
        "En un fondo de pensiones privado obligatorio",
        "En el régimen especial de trabajadores autónomos"
      ],
      "answer": 0,
      "explain": "RDL 13/2010: El personal funcionario que ingrese a partir del 1 de enero de 2011 en la Administración quedará encuadrado a efectos de jubilación en el Régimen General de la Seguridad Social, manteniéndose en MUFACE a efectos de asistencia sanitaria y mutualismo."
    },
    {
      "id": "w5-t9-q2",
      "q": "¿Qué derecho de opción asistencial sanitario tienen reconocido los mutualistas de MUFACE?",
      "options": [
        "Optar anualmente entre la asistencia sanitaria pública (Servicio de Salud de su CA) o a través de entidades aseguradoras concertadas privadas",
        "Obligación de acudir siempre y exclusivamente a clínicas privadas de pago",
        "Asistencia sanitaria solo fuera del territorio nacional",
        "No tienen derecho a cobertura sanitaria en MUFACE"
      ],
      "answer": 0,
      "explain": "RDL 4/2000: Los mutualistas de MUFACE eligen en los periodos ordinarios de cambio de entidad entre la red sanitaria pública (SNS) o las entidades aseguradoras concertadas que prestan la asistencia sanitaria."
    },
    {
      "id": "w5-t9-q3",
      "q": "¿A partir de qué día de baja médica asume MUFACE el abono del subsidio por incapacidad temporal del funcionario?",
      "options": [
        "A partir del día 91 de incapacidad temporal (los primeros 90 días los abona el órgano con cargo al presupuesto)",
        "Desde el primer día de la baja médica",
        "A partir del día 15 de la baja",
        "A los 365 días continuados"
      ],
      "answer": 0,
      "explain": "Art. 21 RDL 4/2000: Durante los primeros noventa días de baja por IT el funcionario percibe la totalidad de sus retribuciones con cargo a la Administración. A partir del día 91 percibe el subsidio por IT a cargo de MUFACE complementado por la Administración."
    }
  ],
  "bossQs": [
    {
      "id": "w5-t9-b1",
      "q": "¿Cómo se financia el mutualismo administrativo gestionado por MUFACE (art. 10 RDL 4/2000)?",
      "options": [
        "Con las cotizaciones de los mutualistas y la aportación del Estado en los PGE",
        "Exclusivamente con donaciones privadas",
        "Mediante aranceles notariales",
        "Con los beneficios de la Lotería Nacional"
      ],
      "answer": 0,
      "explain": "Art. 10 RDL 4/2000: Los recursos de MUFACE proceden de las cuotas de los mutualistas, las aportaciones del Estado consignadas en los Presupuestos Generales del Estado y los rendimientos de su patrimonio."
    },
    {
      "id": "w5-t9-b2",
      "q": "¿Qué norma aprobó el Texto Refundido de la Ley de Clases Pasivas del Estado?",
      "options": [
        "El Real Decreto Legislativo 670/1987, de 30 de abril",
        "La Ley General Presupuestaria de 2003",
        "El Real Decreto Legislativo 5/2015",
        "La Ley Orgánica 2/1986"
      ],
      "answer": 0,
      "explain": "El Real Decreto Legislativo 670/1987, de 30 de abril, es la norma cabecera que aprueba el Texto Refundido de la Ley de Clases Pasivas del Estado."
    },
    {
      "id": "w5-t9-b3",
      "q": "¿Qué edad ordinaria de jubilación forzosa rige para los funcionarios de clases pasivas (salvo excepciones como docentes o magistrados)?",
      "options": [
        "Los sesenta y cinco años de edad, pudiendo solicitar la prolongación de la permanencia en el servicio activo hasta los setenta años",
        "Los sesenta y siete años sin prórroga posible",
        "Los sesenta años en todo caso",
        "Los setenta y dos años de edad"
      ],
      "answer": 0,
      "explain": "Art. 67.3 TREBEP y legislación de Clases Pasivas: La jubilación forzosa se declara al cumplir los 65 años, pudiendo el funcionario solicitar prolongar su permanencia en el servicio activo hasta como máximo los 70 años de edad."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Mutualismo Administrativo y Clases Pasivas",
    "prompt": "Empareja cada figura con su norma y ámbito de aplicación.",
    "pairs": [
      [
        "MUFACE (RDL 4/2000)",
        "Asistencia sanitaria, prestaciones complementarias y subsidio IT (día 91)"
      ],
      [
        "Clases Pasivas (RDL 670/1987)",
        "Régimen de pensiones de jubilación para ingresados antes de 2011"
      ],
      [
        "Ingresados desde 01/01/2011",
        "Pensiones en Régimen General Seguridad Social (mantienen MUFACE)"
      ],
      [
        "Jubilación forzosa",
        "A los 65 años, prorrogable a solicitud hasta los 70 años (art. 67 TREBEP)"
      ]
    ]
  },
  "boss": {
    "name": "El Retenedor de Prestaciones",
    "kind": "ghost",
    "intro": [
      "¡He denegado el subsidio de incapacidad temporal a partir del día 91!"
    ],
    "defeat": [
      "¡Art. 21 RDL 4/2000! Reconocimiento de oficio del subsidio por MUFACE y abono retroactivo íntegro."
    ]
  },
  "summary": [
    "MUFACE (RDL 4/2000): funcionarios civiles de carrera y en prácticas. Asistencia sanitaria (opción pública/privada) y subsidios.",
    "Subsidio IT MUFACE: a partir del día 91 (los primeros 90 días a cargo del órgano de destino).",
    "Clases Pasivas (RDL 670/1987): pensiones de funcionarios ingresados antes del 1 de enero de 2011.",
    "Corte 2011 (RDL 13/2010): funcionarios ingresados desde 01/01/2011 van al Régimen General a efectos de pensiones de jubilación, manteniendo MUFACE para asistencia sanitaria.",
    "Jubilación ordinaria forzosa: 65 años (prolongable a petición hasta los 70 años art. 67 TREBEP)."
  ]
};

export const W5_T10: MiniWorldDef = {
  "id": "rrhh-t10",
  "num": 10,
  "temaTitle": "Tema 10: Acceso al empleo público y provisión de puestos de trabajo de las personas con discapacidad.",
  "name": "Plaza de la Inclusión y Discapacidad",
  "emoji": "♿",
  "theme": "rrhh",
  "color": "#7c3aed",
  "enemy": "reloj",
  "enemyName": "Barreras arquitectónicas",
  "npcs": [
    {
      "name": "Comisionada de Inclusión en la Función Pública",
      "role": "Acceso al empleo público, adaptación de puestos y personas con discapacidad",
      "look": {
        "skin": "#f3c9a0",
        "hair": "#2e2e2e",
        "hairStyle": "curly",
        "shirt": "#6d28d9",
        "pants": "#4c1d95",
        "acc": [
          "glasses",
          "badge"
        ],
        "accColor": "#ffd700"
      },
      "pages": [
        "Art. 49 CE: los poderes públicos realizarán una política de previsión, tratamiento, rehabilitación e integración de las personas con discapacidad, prestándoles la atención especializada que requieran.",
        "Art. 59 TREBEP y Real Decreto 2271/2004 por el que se regula el acceso al empleo público y la provisión de puestos de trabajo de las personas con discapacidad:",
        "• Reserva mínima en la OEP: al menos un 7 por ciento de las plazas vacantes ofertadas, reservando al menos el 2 por ciento para ser cubiertas por personas con discapacidad intelectual.",
        "• Adaptaciones de tiempo y medios en los procesos selectivos (pruebas adaptadas, braille, tiempo adicional de examen, intérprete de lengua de signos).",
        "• Conservación de nota: quienes superen ejercicios con nota superior al 50% pueden conservar la calificación en la convocatoria inmediata siguiente.",
        "• Adaptación del puesto de trabajo asignado: adaptación de medios técnicos, accesibilidad física y mobiliario ergonómico.",
        "• Desempate: prioridad de las personas con discapacidad sobre el resto en igualdad de méritos y notas finales."
      ]
    }
  ],
  "blockQs": [
    {
      "id": "w5-t10-q1",
      "q": "¿Cómo se distribuye el porcentaje de reserva del 7% en las Ofertas de Empleo Público según el art. 59.1 TREBEP?",
      "options": [
        "Al menos el 2% para personas que acrediten discapacidad intelectual y el resto para otras discapacidades",
        "Un 5% para discapacidad intelectual y 2% física",
        "El 7% exclusivamente para discapacidades sensoriales",
        "No existe reparto interno de porcentaje"
      ],
      "answer": 0,
      "explain": "Art. 59.1 TREBEP: En las ofertas de empleo público se reservará un cupo no inferior al siete por ciento de las vacantes convocadas para ser cubiertas entre personas con discapacidad, reservando al menos el dos por ciento para personas con discapacidad intelectual."
    },
    {
      "id": "w5-t10-q2",
      "q": "¿Qué derecho asiste a los aspirantes del turno de discapacidad en las pruebas selectivas según el RD 2271/2004?",
      "options": [
        "A la adaptación razonable de medios materiales y concesión de tiempos adicionales de examen",
        "A no realizar ninguna prueba escrita",
        "Al aprobado general automático sin examen",
        "A elegir el tribunal calificador"
      ],
      "answer": 0,
      "explain": "Art. 8 RD 2271/2004: Los órganos de selección concederán las adaptaciones de tiempo y medios materiales que sean necesarias para asegurar que las personas con discapacidad participen en condiciones de igualdad efectiva."
    },
    {
      "id": "w5-t10-q3",
      "q": "¿Qué ocurre si las plazas del cupo de reserva para personas con discapacidad de turno libre no se cubren?",
      "options": [
        "No podrán acumularse al turno general en las convocatorias de acceso libre, debiendo acumularse a la oferta del año siguiente",
        "Se pierden definitivamente sin poder volver a convocarse",
        "Se adjudican a los aprobados sin plaza de mayor edad",
        "Se transforman en plazas eventuales"
      ],
      "answer": 0,
      "explain": "Art. 59.2 TREBEP y RD 2271/2004: En los procesos de acceso libre, las plazas reservadas para personas con discapacidad que queden desiertas no se acumularán al turno general, sino que se acumularán al cupo del 7% de la oferta siguiente (hasta un máximo del 10%)."
    }
  ],
  "bossQs": [
    {
      "id": "w5-t10-b1",
      "q": "¿Qué porcentaje mínimo de grado de discapacidad reconocido administrativamente se exige para acceder al cupo de reserva?",
      "options": [
        "Un grado de discapacidad igual o superior al 33 por ciento",
        "Un grado de discapacidad de al menos el 50 por ciento",
        "Un grado de discapacidad de al menos el 65 por ciento",
        "Cualquier dolencia médica temporal"
      ],
      "answer": 0,
      "explain": "Texto Refundido de la Ley General de Derechos de las Personas con Discapacidad (RDL 1/2013) y TREBEP: Tendrán la consideración de personas con discapacidad aquellas a quienes se les haya reconocido un grado de discapacidad igual o superior al 33 por ciento."
    },
    {
      "id": "w5-t10-b2",
      "q": "¿A qué tiene derecho un funcionario con discapacidad una vez toma posesión de su puesto de trabajo (art. 10 RD 2271/2004)?",
      "options": [
        "A la adaptación del puesto de trabajo, eliminación de barreras arquitectónicas y medios técnicos necesarios",
        "A trabajar exclusivamente 10 horas al mes cobrando nómina completa",
        "A exención total de subordinación jerárquica",
        "A no acudir al centro de trabajo sin justificación"
      ],
      "answer": 0,
      "explain": "Art. 10 RD 2271/2004: Los departamentos ministeriales y organismos públicos procederán a la adaptación del puesto de trabajo que haya de ocupar el funcionario con discapacidad a sus necesidades físicas y sensoriales."
    },
    {
      "id": "w5-t10-b3",
      "q": "¿Qué derecho de conservación de calificación tienen los aspirantes con discapacidad que hayan superado un ejercicio (RD 2271/2004)?",
      "options": [
        "Conservar la calificación en la convocatoria inmediata siguiente si superaron la prueba con más del 50% de la nota máxima",
        "Aprobado vitalicio de todas las fases",
        "Subida automática de 5 puntos en la siguiente convocatoria",
        "No existe derecho de conservación de notas"
      ],
      "answer": 0,
      "explain": "Bases generales y RD 2271/2004: A los aspirantes del cupo de personas con discapacidad se les conserva la nota del ejercicio superado con más del 50% para la convocatoria inmediata siguiente siempre que el programa sea análogo."
    }
  ],
  "mini": {
    "type": "match",
    "title": "Garantías de Acceso e Integración de la Discapacidad",
    "prompt": "Empareja cada garantía con su base normativa en el empleo público.",
    "pairs": [
      [
        "Cupo OEP (art. 59)",
        "Mínimo 7% de las plazas (al menos 2% para discapacidad intelectual)"
      ],
      [
        "Grado exigido (RDL 1/2013)",
        "Grado de discapacidad reconocido igual o superior al 33%"
      ],
      [
        "Adaptación de examen",
        "Adaptaciones de medios y tiempos adicionales en pruebas selectivas"
      ],
      [
        "Adaptación del puesto",
        "Eliminación de barreras y dotación de medios ergonómicos y técnicos"
      ]
    ]
  },
  "boss": {
    "name": "El Discriminador Excluyente",
    "kind": "dragon",
    "intro": [
      "¡He rechazado adaptar los medios de examen y denegado la rampa de acceso!"
    ],
    "defeat": [
      "¡Art. 49 y art. 14 CE, y RD 2271/2004! Adaptación inmediata del examen y adecuación ergonómica y física del puesto de trabajo."
    ]
  },
  "summary": [
    "Art. 49 CE: atención, inclusión y accesibilidad de personas con discapacidad.",
    "Art. 59 TREBEP y RD 2271/2004: cupo mínimo del 7% en OEP (mínimo 2% discapacidad intelectual).",
    "Requisito: grado de discapacidad reconocido igual o superior al 33%.",
    "Adaptación de pruebas selectivas: tiempos adicionales y medios materiales específicos.",
    "No acumulación al turno general de plazas desiertas en acceso libre (se acumulan a la siguiente oferta).",
    "Adaptación obligatoria del puesto de trabajo (art. 10 RD 2271/2004)."
  ]
};

export const W5: WorldDef = {
  id: "rrhh",
  num: 5,
  bloque: "Bloque V",
  title: "V. Administración de Recursos Humanos",
  name: "Campus de la Función Pública",
  emoji: "👥",
  theme: "rrhh",
  color: "#7c3aed",
  enemy: "reloj",
  enemyName: "Relojes de jornada",
  temas: [
    "Tema 1: El personal al servicio de las Administraciones públicas: concepto y clases. Adquisición y pérdida de la relación de servicio. Régimen jurídico.",
    "Tema 2: Derechos y deberes del personal al servicio de las Administraciones Públicas. Régimen disciplinario.",
    "Tema 3: Planificación de recursos humanos. Ofertas de empleo público. Selección de personal. Las competencias en materia de personal.",
    "Tema 4: Formas de provisión de puestos de trabajo y movilidad en la Administración del Estado. Promoción interna y carrera profesional.",
    "Tema 5: Situaciones administrativas del personal al servicio de las administraciones públicas. Incompatibilidades.",
    "Tema 6: El sistema de retribuciones de los funcionarios. Retribuciones básicas y retribuciones complementarias. Las indemnizaciones por razón del servicio.",
    "Tema 7: El personal laboral al servicio de las Administraciones públicas: su régimen jurídico. El IV Convenio Único para el personal laboral al servicio de la Administración General del Estado: ámbito de aplicación y sistema de clasificación.",
    "Tema 8: Negociación colectiva, representación y participación institucional de los empleados públicos. El derecho de huelga y su ejercicio.",
    "Tema 9: El régimen especial de la Seguridad Social de los funcionarios civiles del Estado. MUFACE y las clases pasivas: acción protectora. Concepto y clases de prestaciones. Derechos pasivos.",
    "Tema 10: Acceso al empleo público y provisión de puestos de trabajo de las personas con discapacidad."
],
  miniWorlds: [W5_T1, W5_T2, W5_T3, W5_T4, W5_T5, W5_T6, W5_T7, W5_T8, W5_T9, W5_T10],
  npcs: [
    W5_T1.npcs[0],
    W5_T2.npcs[0],
    W5_T3.npcs[0],
    W5_T4.npcs[0]
  ],
  blockQs: [
    W5_T1.blockQs[0],
    W5_T2.blockQs[0],
    W5_T3.blockQs[0],
    W5_T4.blockQs[0],
    W5_T5.blockQs[0],
    W5_T6.blockQs[0],
    W5_T7.blockQs[0],
    W5_T8.blockQs[0],
    W5_T9.blockQs[0],
    W5_T10.blockQs[0]
  ],
  bossQs: [
    W5_T1.bossQs[0],
    W5_T2.bossQs[0],
    W5_T3.bossQs[0],
    W5_T4.bossQs[0],
    W5_T5.bossQs[0],
    W5_T6.bossQs[0],
    W5_T7.bossQs[0],
    W5_T8.bossQs[0]
  ],
  mini: {
  "type": "order",
  "title": "Gran Desafío del Bloque V: Ciclo de Vida del Funcionario Público",
  "prompt": "Ordena cronológicamente las fases de la trayectoria profesional estatutaria de un funcionario.",
  "items": [
    "Inclusión de plazas en la Oferta de Empleo Público (OEP con cupo 7% discapacidad)",
    "Superación del proceso selectivo bajo principios de igualdad, mérito y capacidad",
    "Nombramiento en BOE, juramento/promesa de la CE y toma de posesión reglamentaria",
    "Provisión definitiva de puesto por Concurso de méritos o Libre Designación",
    "Consolidación de carrera, trienios, evaluación del desempeño y situaciones administrativas",
    "Jubilación ordinaria (forzosa a los 65 años con prórroga voluntaria a los 70) o derechos pasivos"
  ]
},
  boss: {
  "name": "El Gran Cronometrador Corrupto",
  "kind": "reloj",
  "intro": [
    "¡JA, JA, JA! ¡He colocado a dedo a mis afines, vulnerado el régimen disciplinario y suprimido la compatibilidad!",
    "Para derrotarme deberás demostrar tu dominio de los 10 temas oficiales del temario de Recursos Humanos. ¡Acepta el desafío!"
  ],
  "defeat": [
    "¡Imposible! Los principios constitucionales del TREBEP, el mérito y la profesionalidad de la función pública han vencido."
  ]
},
  summary: [
  "Clases de empleados (TREBEP): funcionarios carrera (potestades públicas art. 9.2), interinos (máx. 3 años vacante), laborales y eventuales.",
  "Adquisición condición (art. 62) y pérdida (art. 63: renuncia, pérdida nacionalidad, jubilación, separación del servicio, inhabilitación penal).",
  "Régimen disciplinario: Faltas muy graves (3 años prescripción), graves (2 años) y leves (6 meses). Separación del servicio, suspensión máx. 6 años.",
  "OEP (art. 70): ejecución máx. 3 años. Sistemas: oposición (preferente), concurso-oposición. Prohibido políticos/interinos en tribunales (art. 60).",
  "Provisión: concurso (ordinario) y libre designación (especial responsabilidad, cese discrecional). Posesión: 3 días hábiles (misma localidad) o 1 mes (con mudanza).",
  "Situaciones (art. 85): activo, servicios especiales (cargos políticos, reserva puesto y trienios), excedencia interés particular (5 años previos, sin reserva), cuidado familiares (reserva 2 años). Incompatibilidades: Ley 53/1984.",
  "Retribuciones: básicas (sueldo, trienios, pagas extras) y complementarias (destino niv. 14-30, específico, productividad). Dietas: RD 462/2002.",
  "Personal laboral: TREBEP, ET y Convenio Colectivo. IV Convenio Único AGE (5 grupos, jornada 37,5h). Indefinidos no fijos ante fraude temporal.",
  "Negociación y huelga: Mesas (mín. 10% representatividad). Juntas de Personal (>50 funcionarios). Huelga: servicios mínimos y deducción retributiva proporcional.",
  "MUFACE (RDL 4/2000): asistencia sanitaria pública o privada, subsidio IT día 91. Clases Pasivas (RDL 670/1987, ingresos anteriores a 2011; posteriores van a R. General).",
  "Discapacidad: cupo mínimo 7% en OEP (mínimo 2% discapacidad intelectual, art. 59 TREBEP). Adaptación de tiempos y pruebas. Adaptación del puesto (RD 2271/2004)."
],
};
