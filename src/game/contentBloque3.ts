import type { MiniWorldDef, WorldDef } from "./types";
import { Q } from "./contentBloque1";

/* ==================== BLOQUE III: MINI-MUNDOS ==================== */

export const W3_T1: MiniWorldDef = {
  id: "politicas-t1",
  num: 1,
  temaTitle: "Tema 1: Concepto, ciclo y evaluación de políticas públicas",
  name: "Laboratorio de Políticas Públicas",
  emoji: "📊",
  theme: "politicas",
  color: "#2fb26a",
  enemy: "nube",
  enemyName: "Nubes de smog",
  npcs: [
    {
      name: "Dra. Evidencia",
      role: "Ciclo y evaluación de políticas (Ley 27/2022)",
      look: { skin: "#e5b48a", hair: "#2c3e50", hairStyle: "bun", shirt: "#27ae60", pants: "#196f3d", acc: ["glasses", "badge"], accColor: "#ffd84d" },
      pages: [
        "Una política pública es el conjunto de decisiones, objetivos y acciones que lleva a cabo un gobierno para solucionar problemas que la sociedad considera prioritarios.",
        "El ciclo clásico comprende: 1) Definición del problema e inclusión en la agenda pública; 2) Diseño y formulación de alternativas; 3) Decisión y adopción formal; 4) Implementación o ejecución; y 5) Evaluación de resultados e impactos.",
        "Evaluación: la Ley 27/2022, de 20 de diciembre, institucionaliza la evaluación de las políticas públicas en la AGE. Regula la evaluación ex ante (previa), de seguimiento y ex post (posterior).",
        "Crea la Agencia Estatal de Evaluación de Políticas Públicas, adscrita al Ministerio competente, para garantizar el rigor metodológico, la transparencia y el aprendizaje continuo en la toma de decisiones públicas.",
      ],
    },
  ],
  blockQs: [
    Q("w3-t1-q1", "¿Cuál es la norma reguladora de la institucionalización de la evaluación de políticas públicas en la AGE?", ["Ley 27/2022, de 20 de diciembre", "Ley 19/2013, de 9 de diciembre", "Ley 40/2015, de 1 de octubre", "Ley 39/2006, de 14 de diciembre"], 0, "La Ley 27/2022, de 20 de diciembre, institucionaliza la evaluación de políticas públicas en la AGE y promueve la cultura de la evidencia."),
    Q("w3-t1-q2", "¿Qué organismo público crea la Ley 27/2022 para supervisar y fomentar la evaluación en la AGE?", ["La Agencia Estatal de Evaluación de Políticas Públicas", "El Instituto Nacional de Administración Pública (INAP)", "El Consejo de Transparencia y Buen Gobierno", "La AIReF"], 0, "La Ley 27/2022 crea la Agencia Estatal de Evaluación de Políticas Públicas como entidad clave del sistema de evaluación."),
    Q("w3-t1-q3", "La fase del ciclo de las políticas públicas en la que se analiza si los objetivos previstos se han alcanzado y con qué efectos se denomina:", ["Evaluación", "Inclusión en la agenda", "Formulación de alternativas", "Implementación"], 0, "La fase de evaluación analiza la eficacia, eficiencia, impacto y sostenibilidad de la intervención pública para la rendición de cuentas y mejora continua."),
  ],
  bossQs: [
    Q("w3-t1-b1", "La evaluación de una política pública realizada antes de su aprobación definitiva para estimar sus posibles impactos y costes se denomina:", ["Evaluación ex ante", "Evaluación intermedia o de proceso", "Evaluación ex post", "Evaluación sumativa"], 0, "La evaluación ex ante es previa a la puesta en marcha de la política y busca valorar la pertinencia, viabilidad y alternativas de intervención."),
    Q("w3-t1-b2", "¿Cuál es el instrumento plurianual previsto en la Ley 27/2022 para programar las evaluaciones estratégicas del Gobierno?", ["El Plan de Evaluaciones Estratégicas del Gobierno", "El Programa Marco Financiero", "La Agenda Digital de la AGE", "El Plan de Estabilidad Presupuestaria"], 0, "La Ley 27/2022 prevé la aprobación del Plan de Evaluaciones Estratégicas de la Administración General del Estado por el Consejo de Ministros."),
    Q("w3-t1-b3", "En el análisis de políticas públicas, la 'agenda institucional o de gobierno' se refiere a:", ["El conjunto de asuntos explícitamente aceptados para ser considerados de forma activa y seria por los decisores públicos", "Todos los problemas que preocupan a los medios de comunicación", "El listado de leyes aprobadas en una legislatura", "El calendario de huelgas del sector público"], 0, "La agenda institucional (o de gobierno) comprende aquellos problemas que las autoridades públicas han decidido asumir activamente para su tratamiento normativo o presupuestario."),
  ],
  mini: {
    type: "order",
    title: "Prueba del Ciclo de las Políticas Públicas",
    prompt: "Ordena secuencialmente las fases clásicas del ciclo de las políticas públicas.",
    items: [
      "Identificación del problema e inclusión en la agenda pública",
      "Formulación y diseño de alternativas de actuación",
      "Decisión y adopción formal de la política",
      "Implementación y ejecución administrativa de los programas",
      "Evaluación de resultados, impacto y retroalimentación",
    ],
  },
  boss: {
    name: "El Gestor Intuición",
    kind: "cloud",
    intro: ["¡Yo gobierno a golpe de corazonadas y sin evaluar datos! ¿Podrás demostrar que la evidencia científica es superior?"],
    defeat: ["¡Los indicadores de impacto y la Ley 27/2022 me han convencido! Las decisiones deben evaluarse."],
  },
  summary: [
    "Políticas públicas: ciclo secuencial (agenda -> formulación -> decisión -> implementación -> evaluación).",
    "Ley 27/2022, de 20 de diciembre: institucionaliza la evaluación de políticas públicas en la AGE.",
    "Tipos de evaluación: ex ante (previa), intermedia/seguimiento (durante) y ex post (posterior a la ejecución).",
    "Agencia Estatal de Evaluación de Políticas Públicas: garantiza la calidad metodológica y el aprendizaje.",
  ],
};

export const W3_T2: MiniWorldDef = {
  id: "politicas-t2",
  num: 2,
  temaTitle: "Tema 2: Administración electrónica y modernización de la AGE",
  name: "Ciber-Sede de la AGE",
  emoji: "💻",
  theme: "politicas",
  color: "#27ae60",
  enemy: "nube",
  enemyName: "Nubes de smog",
  npcs: [
    {
      name: "Ada Digital",
      role: "Administración electrónica (Leyes 39 y 40/2015, RD 203/2021)",
      look: { skin: "#e5b48a", hair: "#7b3fa0", hairStyle: "long", shirt: "#1abc9c", pants: "#2c3e50", acc: ["visor", "headset"], accColor: "#00e5ff" },
      pages: [
        "La Administración electrónica no es una opción, ¡es el modo habitual de funcionamiento! Sus bases están en la Ley 39/2015, Ley 40/2015 y en el Real Decreto 203/2021 (Reglamento de actuación y funcionamiento del sector público por medios electrónicos).",
        "Obligados a relacionarse electrónicamente (art. 14.2 Ley 39/2015): personas jurídicas, entidades sin personalidad jurídica, profesionales de colegiación obligatoria y empleados públicos para trámites profesionales.",
        "Sede electrónica (art. 38 Ley 40/2015): dirección electrónica disponible para la ciudadanía cuya titularidad corresponde a una Administración. Cuenta con certificado electrónico de sede y garantiza identificación, seguridad y disponibilidad.",
        "Punto de Acceso General electrónico (PAGe): portal de entrada único que facilita el acceso a la información y servicios electrónicos de la AGE. Carpeta Ciudadana: área personalizada de consulta de expedientes, notificaciones y datos.",
      ],
    },
  ],
  blockQs: [
    Q("w3-t2-q1", "¿Cuál de los siguientes sujetos está obligado en todo caso a relacionarse electrónicamente con las AAPP (art. 14.2 Ley 39/2015)?", ["Las personas jurídicas", "Todas las personas físicas jubiladas", "Los turistas extranjeros en tránsito", "Los menores de 18 años"], 0, "Art. 14.2 Ley 39/2015: están obligadas las personas jurídicas, entidades sin personalidad, quienes ejerzan actividad profesional con colegiación obligatoria y los empleados públicos."),
    Q("w3-t2-q2", "¿Qué Real Decreto aprueba el Reglamento de actuación y funcionamiento del sector público por medios electrónicos?", ["Real Decreto 203/2021, de 30 de marzo", "Real Decreto 4/2010 (Esquema Nacional de Interoperabilidad)", "Real Decreto 311/2022 (Esquema Nacional de Seguridad)", "Real Decreto 140/2024"], 0, "El Real Decreto 203/2021, de 30 de marzo, aprueba el Reglamento de actuación y funcionamiento del sector público por medios electrónicos."),
    Q("w3-t2-q3", "La sede electrónica se define en el art. 38 de la Ley 40/2015 como:", ["Aquella dirección electrónica disponible para los ciudadanos a través de redes de telecomunicaciones cuya titularidad corresponde a una Administración Pública", "Cualquier página web no oficial de un partido político", "El correo electrónico personal de los funcionarios", "Un tablón de anuncios en papel en la entrada del ministerio"], 0, "Art. 38.1 Ley 40/2015: la sede electrónica es aquella dirección electrónica, disponible para los ciudadanos a través de redes de telecomunicaciones, cuya titularidad corresponde a una Administración Pública."),
  ],
  bossQs: [
    Q("w3-t2-b1", "Las personas físicas que no estén obligadas a relacionarse por medios electrónicos según el art. 14.1 de la Ley 39/2015:", ["Podrán elegir en todo momento si se comunican con las AAPP por medios electrónicos o no", "Están obligadas a presentar escritos siempre por internet", "Tienen prohibido el uso de la sede electrónica", "Deben pagar una tasa por acudir al registro presencial"], 0, "Art. 14.1 Ley 39/2015: las personas físicas podrán elegir en todo momento si se comunican con las Administraciones Públicas a través de medios electrónicos o no, salvo que reglamentariamente se establezca la obligación para ciertos colectivos."),
    Q("w3-t2-b2", "El portal único de entrada a la información y trámites de la Administración General del Estado es el:", ["Punto de Acceso General electrónico (PAGe) y la Carpeta Ciudadana", "BOE Digital", "Tribunal Constitucional Online", "Portal Europeo Eur-Lex"], 0, "El PAGe (administracion.gob.es) es la puerta de acceso digital a los servicios y procedimientos de la AGE, complementado por la Carpeta Ciudadana."),
    Q("w3-t2-b3", "En materia de seguridad en la administración electrónica, el marco regulador de principios básicos y requisitos mínimos de seguridad en los sistemas públicos es el:", ["Esquema Nacional de Seguridad (ENS, RD 311/2022)", "Esquema Nacional de Interoperabilidad (ENI)", "Reglamento Notarial", "Código de Comercio"], 0, "El RD 311/2022 regula el Esquema Nacional de Seguridad (ENS), garantizando la protección de los datos y servicios frente a incidentes cibernéticos."),
  ],
  mini: {
    type: "match",
    title: "Prueba de la Administración Digital",
    prompt: "Relaciona cada herramienta o concepto con su función en la administración electrónica.",
    pairs: [
      ["Sede Electrónica (art. 38)", "Dirección oficial bajo titularidad y responsabilidad de la Administración"],
      ["PAGe (Punto de Acceso General)", "Portal único de entrada a los servicios y sedes de la AGE"],
      ["Carpeta Ciudadana", "Espacio privado para consultar expedientes, notificaciones y citas"],
      ["Cl@ve", "Plataforma de identificación, autenticación y firma para la ciudadanía"],
    ],
  },
  boss: {
    name: "El Hacker de Papel",
    kind: "cloud",
    intro: ["¡Obligaré a todo el mundo a imprimir en papel por duplicado! ¡Abajo la firma electrónica!"],
    defeat: ["¡Tu certificado digital y el RD 203/2021 han blindado la sede electrónica!"],
  },
  summary: [
    "Marco normativo: Ley 39/2015 (arts. 14 y 41), Ley 40/2015 (arts. 38-46), RD 203/2021 (Reglamento medios electrónicos), ENS (RD 311/2022) y ENI (RD 4/2010).",
    "Obligados art. 14.2: personas jurídicas, entidades sin personalidad, colegiados obligatorios y empleados públicos.",
    "Personas físicas (art. 14.1): derecho de elección libre de canal.",
    "Conceptos clave: Sede electrónica (garantía de titularidad y disponibilidad), PAGe (punto único), Carpeta Ciudadana y Cl@ve.",
  ],
};

export const W3_T3: MiniWorldDef = {
  id: "politicas-t3",
  num: 3,
  temaTitle: "Tema 3: Gobierno Abierto, Transparencia y Ley 19/2013",
  name: "Torre de Cristal de la Transparencia",
  emoji: "🏛️",
  theme: "politicas",
  color: "#229954",
  enemy: "nube",
  enemyName: "Nubes de smog",
  npcs: [
    {
      name: "Comisionada Cristal",
      role: "Ley 19/2013 y Gobierno Abierto",
      look: { skin: "#f3c9a0", hair: "#34495e", hairStyle: "short", shirt: "#2ecc71", pants: "#145a32", acc: ["badge", "glasses"], accColor: "#ffd84d" },
      pages: [
        "El Gobierno Abierto se basa en tres pilares: transparencia, participación ciudadana y colaboración.",
        "La Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno tiene un triple objeto: publicidad activa (obligación de publicar sin esperar solicitud), derecho de acceso a la información pública y código de buen gobierno con sanciones.",
        "Derecho de acceso (arts. 12-22): cualquier persona puede solicitar información pública sin necesidad de motivar la solicitud. Plazo máximo de resolución: un mes desde la recepción por el órgano competente (ampliable por otro mes si hay volumen o complejidad).",
        "Silencio administrativo: el transcurso del plazo sin resolver se entiende como desestimación (silencio negativo).",
        "Garantía: reclamación potestativa y gratuita ante el Consejo de Transparencia y Buen Gobierno (CTBG) en el plazo de 1 mes, previa a la vía contencioso-administrativa.",
      ],
    },
  ],
  blockQs: [
    Q("w3-t3-q1", "¿Cuál es el plazo máximo para resolver y notificar una solicitud de acceso a la información pública según la Ley 19/2013?", ["Un mes desde la recepción de la solicitud por el órgano competente", "Tres meses", "Diez días hábiles", "Quince días prorrogables por cinco"], 0, "Art. 20.1 Ley 19/2013: la resolución en la que se conceda o deniegue el acceso deberá notificarse al solicitante en el plazo máximo de un mes desde la recepción de la solicitud por el órgano competente para resolver."),
    Q("w3-t3-q2", "Si transcurre el plazo legal de un mes sin que la Administración resuelva una solicitud de acceso a la información pública, ésta se entenderá:", ["Desestimada por silencio negativo", "Estimada por silencio positivo", "Caducada automáticamente", "Admitida con derecho a indemnización"], 0, "Art. 20.4 Ley 19/2013: transcurrido el plazo máximo para resolver sin que se haya dictado y notificado resolución expresa se entenderá que la solicitud ha sido desestimada."),
    Q("w3-t3-q3", "La reclamación ante el Consejo de Transparencia y Buen Gobierno (art. 24 Ley 19/2013) tiene carácter:", ["Potestativo y previo a la impugnación en vía contencioso-administrativa, en el plazo de un mes", "Obligatorio en todo caso ante el Tribunal Supremo", "Exclusivo de los funcionarios públicos", "Preceptivo solo para empresas privadas"], 0, "Art. 24.1 Ley 19/2013: frente a toda resolución expresa o presunta en materia de acceso podrá interponerse reclamación potestativa ante el Consejo de Transparencia y Buen Gobierno con carácter previo a su impugnación judicial."),
  ],
  bossQs: [
    Q("w3-t3-b1", "¿Exige la Ley 19/2013 que el solicitante de información pública motive las razones de su petición?", ["No, el solicitante no está obligado a motivar su solicitud", "Sí, es causa de inadmisión obligatoria no motivarla", "Solo si solicita datos de carácter económico", "Solo cuando se trate de extranjeros"], 0, "Art. 17.3 Ley 19/2013: el solicitante no está obligado a motivar su solicitud de acceso a la información, si bien podrá exponer los motivos por los que la solicita."),
    Q("w3-t3-b2", "¿Cuál de los siguientes es un límite al derecho de acceso a la información pública tasado en el art. 14 de la Ley 19/2013?", ["La seguridad nacional, la defensa y las relaciones exteriores", "El simple interés periodístico", "Cualquier crítica a la gestión de un cargo público", "La petición reiterada de resoluciones del BOE"], 0, "Art. 14.1 Ley 19/2013: el derecho de acceso podrá ser limitado cuando acceder a la información suponga un perjuicio para la seguridad nacional, defensa, relaciones exteriores, seguridad pública, etc."),
    Q("w3-t3-b3", "¿Qué comprende la obligación de 'publicidad activa' recogida en el Título I de la Ley 19/2013?", ["La difusión periódica y actualizada por los sujetos obligados de información institucional, organizativa, de planificación, presupuestaria y contractual", "La publicación de multas de tráfico con nombres y apellidos en prensa", "La publicidad de campañas electorales en televisión", "La contestación individual a cartas al director"], 0, "Arts. 5 a 8 Ley 19/2013: los sujetos obligados publicarán de forma veraz y accesible en sus sedes y portales de transparencia la información institucional, jurídica, económica y presupuestaria relevante."),
  ],
  mini: {
    type: "order",
    title: "Prueba del Procedimiento de Acceso a Información Pública",
    prompt: "Ordena los pasos del procedimiento de acceso a la información pública (Ley 19/2013).",
    items: [
      "Presentación de la solicitud por cualquier medio (sin necesidad de motivación)",
      "Revisión de admisión y trámite de alegaciones a terceros afectados si procede (15 días)",
      "Resolución y notificación al solicitante en el plazo máximo de 1 mes (ampliable 1 mes)",
      "Si hay silencio desestimatorio o denegación, reclamación potestativa ante el CTBG (1 mes)",
      "Recurso contencioso-administrativo ante los Juzgados o Tribunales (2 meses)",
    ],
  },
  boss: {
    name: "El Burócrata Opaco",
    kind: "cloud",
    intro: ["¡Toda información oficial es secreta! ¡No entregaré ni una sola cifra de los contratos!"],
    defeat: ["¡La Ley 19/2013 y el Portal de Transparencia han abierto de par en par los archivos públicos!"],
  },
  summary: [
    "Ley 19/2013, de 9 de diciembre: Transparencia (publicidad activa y acceso) + Buen Gobierno (infracciones y sanciones).",
    "Publicidad activa (arts. 5-8): Portal de Transparencia, información institucional, normativa y presupuestaria.",
    "Derecho de acceso (arts. 12-22): universal, sin motivación requerida. Plazo: 1 mes (+1 mes prórroga). Silencio negativo.",
    "Garantías: Reclamación potestativa ante el CTBG en plazo de 1 mes previa al contencioso.",
  ],
};

export const W3_T4: MiniWorldDef = {
  id: "politicas-t4",
  num: 4,
  temaTitle: "Tema 4: Protección de datos personales y garantía de derechos digitales",
  name: "Búnker de la Privacidad",
  emoji: "🛡️",
  theme: "politicas",
  color: "#1e8449",
  enemy: "nube",
  enemyName: "Nubes de smog",
  npcs: [
    {
      name: "Dr. Datos",
      role: "RGPD (UE 2016/679) y LO 3/2018 (LOPDGDD)",
      look: { skin: "#f1c7a0", hair: "#2b2b2b", hairStyle: "short", shirt: "#ecf0f1", pants: "#34495e", acc: ["glasses", "badge"], accColor: "#e74c3c" },
      pages: [
        "La protección de datos se apoya en el Reglamento General de Protección de Datos (RGPD, Reglamento UE 2016/679) y en la Ley Orgánica 3/2018 (LOPDGDD), que añade la garantía de los derechos digitales.",
        "Principios del art. 5 RGPD: licitud, lealtad y transparencia; limitación de la finalidad; minimización de datos; exactitud; limitación del plazo de conservación; integridad y confidencialidad; y responsabilidad proactiva (accountability).",
        "Derechos del interesado: Acceso, Rectificación, Supresión ('derecho al olvido'), Oposición, Limitación del tratamiento, Portabilidad de los datos, y no ser objeto de decisiones individuales automatizadas.",
        "Actores clave: Responsable del tratamiento (determina fines y medios), Encargado del tratamiento (trata por cuenta del responsable) y Delegado de Protección de Datos (DPD, obligatorio en autoridades y organismos públicos).",
        "En España, el menor puede consentir válidamente el tratamiento de sus datos a partir de los 14 años (art. 7 LOPDGDD). Autoridad estatal de control: la Agencia Española de Protección de Datos (AEPD).",
      ],
    },
  ],
  blockQs: [
    Q("w3-t4-q1", "¿A partir de qué edad puede un menor de edad prestar válidamente su consentimiento para el tratamiento de datos en España (art. 7 LOPDGDD)?", ["14 años", "16 años", "18 años", "12 años"], 0, "Art. 7.1 LO 3/2018: el tratamiento de los datos personales de un menor de edad únicamente podrá fundarse en su consentimiento cuando sea mayor de catorce años."),
    Q("w3-t4-q2", "¿En cuál de los siguientes supuestos es preceptivo y obligatorio designar un Delegado de Protección de Datos (DPD)?", ["En todas las autoridades y organismos públicos del sector público", "Únicamente en empresas con más de 5.000 trabajadores", "Solo en clínicas veterinarias", "En ningún caso, es siempre voluntario"], 0, "Art. 37.1.a RGPD y art. 34 LOPDGDD: el nombramiento de DPD es obligatorio cuando el tratamiento lo lleve a cabo una autoridad u organismo público."),
    Q("w3-t4-q3", "El principio de 'minimización de datos' recogido en el art. 5.1.c del RGPD exige que los datos personales sean:", ["Adecuados, pertinentes y limitados a lo necesario en relación con los fines para los que son tratados", "Almacenados indefinidamente por si fueran útiles en el futuro", "Compartidos libremente con cualquier entidad", "Exclusivamente números y cifras"], 0, "Art. 5.1.c RGPD: los datos deben ser adecuados, pertinentes y estrictamente limitados a lo necesario en relación con los fines para los que son tratados."),
  ],
  bossQs: [
    Q("w3-t4-b1", "El principio de 'responsabilidad proactiva' (accountability) del RGPD impone al responsable del tratamiento la obligación de:", ["Aplicar medidas técnicas y organizativas apropiadas y ser capaz de demostrar que el tratamiento es conforme con el RGPD", "Esperar a recibir una denuncia ciudadana para tomar medidas", "Pagar un seguro a todo riesgo contra multas", "Subcontratar obligatoriamente el tratamiento en el extranjero"], 0, "Art. 5.2 RGPD: el responsable del tratamiento será responsable del cumplimiento de los principios y capaz de demostrarlo (responsabilidad proactiva)."),
    Q("w3-t4-b2", "¿Cuál es la autoridad administrativa independiente de ámbito estatal encargada de velar por el cumplimiento de la normativa de protección de datos?", ["La Agencia Española de Protección de Datos (AEPD)", "El Defensor del Pueblo", "El Consejo de Seguridad Nuclear", "El Centro Criptológico Nacional"], 0, "Art. 42 LOPDGDD: la AEPD es una autoridad administrativa independiente de ámbito estatal con personalidad jurídica propia y plena independencia."),
    Q("w3-t4-b3", "Entre los derechos digitales garantizados en el Título X de la Ley Orgánica 3/2018 se incluye expresamente:", ["El derecho a la desconexión digital en el ámbito laboral y el derecho a la intimidad frente a dispositivos de videovigilancia y geolocalización", "El derecho a piratear software educativo", "La prohibición de usar ordenadores en el trabajo", "El derecho a cobrar sin fichar"], 0, "Arts. 87 a 90 LO 3/2018: regula la intimidad de los trabajadores frente al uso de dispositivos digitales, videovigilancia, geolocalización y el derecho a la desconexión digital."),
  ],
  mini: {
    type: "match",
    title: "Prueba de los Derechos ARCO-POL",
    prompt: "Relaciona cada derecho de protección de datos con su contenido.",
    pairs: [
      ["Derecho de Acceso", "Conocer si se están tratando los datos y obtener copia gratuita"],
      ["Derecho de Supresión ('olvido')", "Eliminación de los datos cuando ya no sean necesarios para el fin"],
      ["Derecho a la Portabilidad", "Recibir los datos en formato estructurado y transmitirlos a otro responsable"],
      ["Derecho de Oposición", "Oponerse al tratamiento por motivos relacionados con su situación particular"],
    ],
  },
  boss: {
    name: "El Rastreador Ilegal",
    kind: "cloud",
    intro: ["¡Trafico con bases de datos públicas y rastreo a los ciudadanos sin consentimiento! ¡Nadie me frenará!"],
    defeat: ["¡El RGPD y la AEPD han impuesto sanciones demoledoras! La privacidad está a salvo."],
  },
  summary: [
    "Marco: RGPD (Reglamento UE 2016/679) y LO 3/2018 (LOPDGDD). Menores: consentimiento válido a partir de 14 años en España.",
    "Principios art. 5 RGPD: licitud, lealtad, transparencia, limitación finalidad, minimización, exactitud, plazo limitado, confidencialidad y responsabilidad proactiva.",
    "Derechos: acceso, rectificación, supresión, limitación, portabilidad, oposición (ARCO-POL). Derechos digitales: desconexión laboral, intimidad videovigilancia.",
    "Figuras: Responsable, Encargado, DPD (obligatorio en sector público). Autoridad de control: AEPD.",
  ],
};

export const W3_T5: MiniWorldDef = {
  id: "politicas-t5",
  num: 5,
  temaTitle: "Tema 5: Políticas de igualdad, contra la violencia de género, discapacidad y dependencia",
  name: "Foro de la Igualdad y la Inclusión",
  emoji: "🤝",
  theme: "politicas",
  color: "#196f3d",
  enemy: "nube",
  enemyName: "Nubes de smog",
  npcs: [
    {
      name: "Doctora Igualdad",
      role: "Igualdad (LO 3/2007), Violencia (LO 1/2004) y Dependencia (Ley 39/2006)",
      look: { skin: "#d6a074", hair: "#a23bd1", hairStyle: "curly", shirt: "#9b59b6", pants: "#2c2c54", acc: ["badge", "scarf"], accColor: "#f1c40f" },
      pages: [
        "Ley Orgánica 3/2007 para la igualdad efectiva de mujeres y hombres: transversalidad del principio de igualdad en todas las políticas públicas.",
        "Planes de igualdad: obligatorios en empresas de 50 o más personas trabajadoras (tras el RDL 6/2019). Principio de presencia equilibrada: ningún sexo tendrá una presencia inferior al 40% ni superior al 60% en órganos directivos y comités.",
        "Ley Orgánica 1/2004 de Medidas de Protección Integral contra la Violencia de Género: protege a las mujeres frente a la violencia ejercida por quienes sean o hayan sido sus cónyuges o parejas. Creó los Juzgados de Violencia sobre la Mujer y la Delegación del Gobierno.",
        "Discapacidad: Texto Refundido RDL 1/2013 (igualdad de oportunidades y accesibilidad universal).",
        "Dependencia: Ley 39/2006 (SAAD): tres grados: Grado I (dependencia moderada), Grado II (dependencia severa) y Grado III (gran dependencia).",
      ],
    },
  ],
  blockQs: [
    Q("w3-t5-q1", "A partir de cuántas personas trabajadoras es legalmente obligatorio que una empresa elabore y aplique un plan de igualdad (LO 3/2007)?", ["50 o más personas trabajadoras", "100 o más personas", "250 o más personas", "25 o más personas"], 0, "Tras la reforma introducida por el Real Decreto-ley 6/2019 en el art. 45 de la LO 3/2007, las empresas de 50 o más trabajadores están obligadas a contar con un plan de igualdad."),
    Q("w3-t5-q2", "El principio de 'composición o presencia equilibrada' recogido en la LO 3/2007 se define como aquella presencia en la que:", ["Las personas de cada sexo no superen el 60% ni sean menos del 40%", "Haya exactamente el 50% de cada sexo sin excepción", "Haya al menos un 25% de mujeres", "La dirección esté ocupada por un 80% de mujeres"], 0, "Disposición adicional 1ª LO 3/2007: presencia equilibrada de mujeres y hombres es la situación en que las personas de cada sexo no superen el sesenta por ciento ni sean menos del cuarenta por ciento."),
    Q("w3-t5-q3", "¿Cuántos grados de dependencia establece la Ley 39/2006 (SAAD)?", ["Tres grados (I: moderada, II: severa, III: gran dependencia)", "Dos grados (leve y grave)", "Cuatro grados con niveles subalternos", "Cinco grados fijados médicamente"], 0, "Art. 26 Ley 39/2006: la situación de dependencia se clasifica en tres grados: Grado I (dependencia moderada), Grado II (dependencia severa) y Grado III (gran dependencia)."),
  ],
  bossQs: [
    Q("w3-t5-b1", "La Ley Orgánica 1/2004 de violencia de género circunscribe su ámbito de protección penal e integral a la violencia ejercida sobre:", ["La mujer por parte de quien sea o haya sido su cónyuge o de quien esté o haya estado ligado a ella por relaciones similares de afectividad", "Cualquier miembro de la familia sin distinción de sexo", "Exclusivamente a los menores de edad", "Los empleados de hogar"], 0, "Art. 1.1 LO 1/2004: la presente Ley tiene por objeto actuar contra la violencia que se ejerce sobre las mujeres por parte de quienes sean o hayan sido sus cónyuges o de quienes estén o hayan estado ligados a ellas por relaciones similares de afectividad, aun sin convivencia."),
    Q("w3-t5-b2", "¿Qué juzgados especializados del orden penal y civil fueron creados por la Ley Orgánica 1/2004?", ["Los Juzgados de Violencia sobre la Mujer", "Los Juzgados de lo Social de Emergencia", "Las Salas de Amparo del Tribunal Supremo", "Los Tribunales Tutelares de Menores"], 0, "La LO 1/2004 modificó la LOPJ creando los Juzgados de Violencia sobre la Mujer con competencias penales y civiles conexas."),
    Q("w3-t5-b3", "En las ofertas de empleo público de la AGE, ¿qué porcentaje de plazas se reserva legalmente para ser cubiertas por personas con discapacidad?", ["Un cupo no inferior al 7% (con al menos el 2% para discapacidad intelectual)", "Un cupo del 3%", "Un 10% sin distinción", "Un 5% voluntario"], 0, "Art. 59 EBEP: en las ofertas de empleo público se reservará un cupo no inferior al siete por ciento de las vacantes para ser cubiertas entre personas con discapacidad, reservando al menos el dos por ciento para personas con discapacidad intelectual."),
  ],
  mini: {
    type: "match",
    title: "Prueba de la Legislación Social y de Igualdad",
    prompt: "Asocia cada ley fundamental con su objeto prioritario de protección.",
    pairs: [
      ["Ley Orgánica 3/2007", "Igualdad efectiva de mujeres y hombres y planes de igualdad"],
      ["Ley Orgánica 1/2004", "Protección integral contra la violencia de género"],
      ["Ley 39/2006 (SAAD)", "Autonomía personal y tres grados de dependencia"],
      ["RDL 1/2013", "Derechos de las personas con discapacidad e inclusión social"],
    ],
  },
  boss: {
    name: "El Tirano de la Brecha",
    kind: "cloud",
    intro: ["¡Promuevo la discriminación salarial y el desamparo de la dependencia! ¡Jamás lograrás la igualdad real!"],
    defeat: ["¡La LO 3/2007 y el Sistema de Dependencia han quebrado la brecha! La justicia social se impone."],
  },
  summary: [
    "LO 3/2007 (Igualdad): transversalidad, presencia equilibrada (40%-60%), planes de igualdad obligatorios en empresas de 50 o más trabajadores.",
    "LO 1/2004 (Violencia de género): protección integral a mujeres frente a parejas o exparejas; creación de Juzgados de Violencia sobre la Mujer y Delegación del Gobierno.",
    "Ley 39/2006 (SAAD): Grado I (moderada), Grado II (severa), Grado III (gran dependencia).",
    "Discapacidad (RDL 1/2013 y art. 59 EBEP): reserva mínima del 7% en Ofertas de Empleo Público (mínimo 2% discapacidad intelectual).",
  ],
};

export const W3_T6: MiniWorldDef = {
  id: "politicas-t6",
  num: 6,
  temaTitle: "Tema 6: Agenda 2030, Cambio Climático y Políticas Migratorias",
  name: "Pabellón de la Sostenibilidad Global",
  emoji: "🌱",
  theme: "politicas",
  color: "#145a32",
  enemy: "nube",
  enemyName: "Nubes de smog",
  npcs: [
    {
      name: "Capitán Agenda",
      role: "Agenda 2030, Cambio Climático y Asilo",
      look: { skin: "#f0bf94", hair: "#27ae60", hairStyle: "short", shirt: "#27ae60", pants: "#145a32", acc: ["hardhat", "badge"], accColor: "#f1c40f" },
      pages: [
        "La Agenda 2030 para el Desarrollo Sostenible fue aprobada por la Asamblea General de la ONU en septiembre de 2015: contiene 17 Objetivos de Desarrollo Sostenible (ODS) y 169 metas, bajo el lema universal de 'no dejar a nadie atrás'.",
        "Medio ambiente y clima: la Ley 7/2021, de 20 de mayo, de cambio climático y transición energética marca el compromiso vinculante de alcanzar la neutralidad climática a más tardar en el año 2050, en línea con el Acuerdo de París y el Pacto Verde Europeo.",
        "Política migratoria y extranjería: Ley Orgánica 4/2000, sobre derechos y libertades de los extranjeros en España y su integración social (vías de estancia, residencia temporal, residencia de larga duración y reagrupación familiar).",
        "Asilo y protección internacional: Ley 12/2009, de 30 de octubre, reguladora del derecho de asilo y de la protección subsidiaria, dictada al amparo de la Convención de Ginebra de 1951.",
      ],
    },
  ],
  blockQs: [
    Q("w3-t6-q1", "¿Cuántos Objetivos de Desarrollo Sostenible (ODS) y metas integran la Agenda 2030 de la ONU?", ["17 ODS y 169 metas", "10 ODS y 100 metas", "20 ODS y 200 metas", "8 ODS y 50 metas"], 0, "Aprobada por la ONU en septiembre de 2015, la Agenda 2030 comprende 17 Objetivos de Desarrollo Sostenible y 169 metas conexas."),
    Q("w3-t6-q2", "La Ley 7/2021 de cambio climático y transición energética fija como objetivo que España alcance la neutralidad climática a más tardar en el año:", ["2050", "2030", "2040", "2060"], 0, "Art. 3 Ley 7/2021: antes de 2050 el sistema eléctrico español deberá estar basado exclusivamente en fuentes de energía de origen renovable y se alcanzará la neutralidad climática."),
    Q("w3-t6-q3", "¿Qué norma legal regula en España el estatuto de refugiado y la protección subsidiaria?", ["La Ley 12/2009, de 30 de octubre", "La Ley Orgánica 4/2000", "La Ley 19/2013", "El Real Decreto 203/2021"], 0, "La Ley 12/2009, de 30 de octubre, regula el derecho de asilo y de la protección subsidiaria en cumplimiento de las directivas europeas y el Convenio de Ginebra."),
  ],
  bossQs: [
    Q("w3-t6-b1", "¿Cuál de los siguientes ODS corresponde al Objetivo 5 de la Agenda 2030?", ["Igualdad de género", "Fin de la pobreza", "Agua limpia y saneamiento", "Acción por el clima"], 0, "ODS 1: Fin de la pobreza; ODS 3: Salud y bienestar; ODS 5: Lograr la igualdad de género y empoderar a todas las mujeres y las niñas; ODS 13: Acción por el clima."),
    Q("w3-t6-b2", "Según la Ley Orgánica 4/2000 de extranjería, la situación que autoriza a residir y trabajar en España indefinidamente en las mismas condiciones que los españoles se denomina:", ["Residencia de larga duración", "Estancia por estudios", "Residencia temporal", "Asilo provisional"], 0, "Art. 32 LO 4/2000: la residencia de larga duración autoriza a residir y trabajar en España indefinidamente en las mismas condiciones que los españoles (obtenida tras 5 años continuados)."),
    Q("w3-t6-b3", "La protección subsidiaria regulada en la Ley 12/2009 se concede a quien, no reuniendo los requisitos para ser refugiado:", ["Se dan motivos fundados para creer que si regresara a su país enfrentaría un riesgo real de sufrir daños graves (pena de muerte, tortura o violencia indiscriminada)", "Pide trabajo temporal en la vendimia", "Cometió delitos contra la paz", "Desea realizar estudios universitarios"], 0, "Art. 4 Ley 12/2009: protege a quien afrontaría daños graves como condena a muerte, torturas o amenazas graves en situaciones de conflicto armado."),
  ],
  mini: {
    type: "match",
    title: "Prueba de la Agenda 2030 y el Medio Ambiente",
    prompt: "Empareja cada número de ODS con su denominación oficial.",
    pairs: [
      ["ODS 1", "Fin de la pobreza"],
      ["ODS 5", "Igualdad de género"],
      ["ODS 8", "Trabajo decente y crecimiento económico"],
      ["ODS 13", "Acción por el clima"],
      ["ODS 16", "Paz, justicia e instituciones sólidas"],
    ],
  },
  boss: {
    name: "El Emisor Contaminante",
    kind: "cloud",
    intro: ["¡Inundaré la atmósfera con gases de efecto invernadero y destruiré los ODS! ¡El planeta no importa!"],
    defeat: ["¡La Ley 7/2021 y la Agenda 2030 han impuesto la transición ecológica! El futuro es verde y sostenible."],
  },
  summary: [
    "Agenda 2030: 17 ODS y 169 metas aprobados por la ONU en 2015 ('no dejar a nadie atrás').",
    "Cambio climático (Ley 7/2021): neutralidad climática vinculante antes de 2050.",
    "Extranjería (LO 4/2000): estancia, residencia temporal y residencia de larga duración (5 años).",
    "Asilo y refugio (Ley 12/2009): estatuto de refugiado y protección subsidiaria conforme al Convenio de Ginebra de 1951.",
  ],
};

/* ==================== MUNDO 3 (BLOQUE III COMPLETO) ==================== */

export const W3: WorldDef = {
  id: "politicas",
  num: 3,
  bloque: "Bloque III",
  title: "Políticas públicas",
  name: "Ciudad Futuro 2030",
  emoji: "🌱",
  theme: "politicas",
  color: "#2fb26a",
  enemy: "nube",
  enemyName: "Nubes de smog",
  temas: [
    "Tema 1: Concepto, ciclo y evaluación de políticas públicas",
    "Tema 2: Administración electrónica y modernización de la AGE",
    "Tema 3: Gobierno Abierto, Transparencia y Ley 19/2013",
    "Tema 4: Protección de datos personales y garantía de derechos digitales",
    "Tema 5: Políticas de igualdad, violencia de género, discapacidad y dependencia",
    "Tema 6: Agenda 2030, Cambio Climático y Políticas Migratorias",
  ],
  miniWorlds: [W3_T1, W3_T2, W3_T3, W3_T4, W3_T5, W3_T6],
  npcs: [
    W3_T1.npcs[0],
    W3_T2.npcs[0],
    W3_T3.npcs[0],
    W3_T4.npcs[0],
    W3_T5.npcs[0],
  ],
  blockQs: [
    W3_T1.blockQs[0],
    W3_T2.blockQs[0],
    W3_T3.blockQs[0],
    W3_T4.blockQs[0],
    W3_T5.blockQs[0],
    W3_T6.blockQs[0],
  ],
  bossQs: [
    W3_T1.bossQs[0],
    W3_T2.bossQs[0],
    W3_T3.bossQs[0],
    W3_T4.bossQs[1],
    W3_T5.bossQs[0],
    W3_T6.bossQs[1],
  ],
  mini: {
    type: "match",
    title: "Gran Desafío del Bloque III: Los ODS y la Gobernanza",
    prompt: "Une cada política pública esencial con su norma legal de cabecera.",
    pairs: [
      ["Evaluación de políticas públicas", "Ley 27/2022"],
      ["Transparencia y acceso a la información", "Ley 19/2013"],
      ["Protección de datos personales", "RGPD y LO 3/2018"],
      ["Igualdad efectiva de mujeres y hombres", "Ley Orgánica 3/2007"],
      ["Cambio climático y transición energética", "Ley 7/2021"],
    ],
  },
  boss: {
    name: "La Nube Gris de la Desigualdad",
    kind: "cloud",
    intro: [
      "Brrrr... ¡Soy la Desigualdad y el Oscurantismo! Cubro la sociedad con la niebla de la opacidad y los prejuicios.",
      "Solo dominando las políticas públicas, la transparencia y los derechos sociales lograrás disiparme. ¡Lucha!",
    ],
    defeat: ["Nooo... las políticas basadas en evidencia, la transparencia y la Agenda 2030... ¡me disipan por completo!"],
  },
  summary: [
    "Evaluación de políticas: Ley 27/2022, ciclo (agenda, diseño, adopción, ejecución, evaluación ex ante y ex post).",
    "Admin electrónica: Leyes 39 y 40/2015, RD 203/2021. Obligados art. 14.2 (jurídicas, colegiados, empleados). Sede y PAGe.",
    "Transparencia Ley 19/2013: publicidad activa, acceso sin motivación en plazo 1 mes (+1 mes), silencio negativo, CTBG en 1 mes.",
    "Datos: RGPD 2016/679 + LO 3/2018 (menores 14 años, DPD obligatorio en sector público, principios art. 5, AEPD).",
    "Igualdad: LO 3/2007 (planes empresas 50+, presencia 40/60). Violencia LO 1/2004. SAAD Ley 39/2006 (3 grados). OEP 7% discapacidad.",
    "Agenda 2030: 17 ODS, Ley 7/2021 cambio climático (neutralidad 2050), LO 4/2000 extranjería y Ley 12/2009 asilo.",
  ],
};
