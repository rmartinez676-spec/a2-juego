import type { MiniWorldDef, WorldDef } from "./types";
import { Q } from "./contentBloque1";

/* ==================== BLOQUE VI: MINI-MUNDOS ==================== */

export const W6_T1: MiniWorldDef = {
  id: "hacienda-t1",
  num: 1,
  temaTitle: "Tema 1: El Presupuesto del Estado en España y la Ley General Presupuestaria",
  name: "Cámara de la Ley de Presupuestos",
  emoji: "💰",
  theme: "hacienda",
  color: "#d4a017",
  enemy: "moneda",
  enemyName: "Monedas falsas",
  npcs: [
    {
      name: "Contable Presupuestón",
      role: "Presupuestos del Estado (art. 134 CE y Ley 47/2003 LGP)",
      look: { skin: "#f1c7a0", hair: "#7f8c8d", hairStyle: "short", shirt: "#f4d03f", pants: "#1b2631", acc: ["tophat", "glasses", "tie"], accColor: "#7d6608" },
      pages: [
        "¡Bienvenida al Castillo del Tesoro Público! El artículo 134 de la Constitución establece que corresponde al Gobierno la elaboración de los Presupuestos Generales del Estado (PGE) y a las Cortes Generales su examen, enmienda y aprobación.",
        "Principios presupuestarios constitucionales: anualidad (coincide con el año natural), unidad y universalidad (incluyen la totalidad de gastos e ingresos del sector público estatal y el importe de beneficios fiscales). No pueden crear tributos (solo modificarlos cuando una ley sustantiva lo prevea).",
        "Plazos constitucionales: el Gobierno debe presentar los PGE al Congreso al menos tres meses antes de la expiración de los del año anterior (antes del 1 de octubre).",
        "Prórroga presupuestaria automática (art. 134.4 CE): si la Ley de Presupuestos no se aprueba antes del primer día del ejercicio económico correspondiente, se considerarán automáticamente prorrogados los del ejercicio anterior hasta la aprobación de los nuevos.",
        "Ley 47/2003, de 26 de noviembre, General Presupuestaria (LGP): es la norma de cabecera de la hacienda pública estatal.",
      ],
    },
  ],
  blockQs: [
    Q("w6-t1-q1", "¿Con qué antelación mínima respecto a la expiración del ejercicio anterior debe presentar el Gobierno los PGE al Congreso (art. 134.3 CE)?", ["Al menos tres meses antes (antes del 1 de octubre)", "Un mes antes", "Seis meses antes", "Dos meses antes"], 0, "Art. 134.3 CE: el Gobierno deberá presentar ante el Congreso de los Diputados los Presupuestos Generales del Estado al menos tres meses antes de la expiración de los del año anterior."),
    Q("w6-t1-q2", "Si la Ley de Presupuestos Generales del Estado no se aprueba antes del primer día del ejercicio económico (art. 134.4 CE):", ["Se consideran automáticamente prorrogados los Presupuestos del ejercicio anterior hasta la aprobación de los nuevos", "El Gobierno queda cesado automáticamente", "Se paralizan todos los pagos de nóminas públicas", "Se aprueba obligatoriamente un Decreto-ley"], 0, "Art. 134.4 CE: si la Ley de Presupuestos no se aprobara antes del primer día del ejercicio económico correspondiente, se considerarán automáticamente prorrogados los Presupuestos del ejercicio anterior hasta la aprobación de los nuevos."),
    Q("w6-t1-q3", "¿Puede la Ley de Presupuestos Generales del Estado crear nuevos tributos según el art. 134.7 CE?", ["No, no puede crear tributos; solo puede modificarlos cuando una ley tributaria sustantiva así lo prevea", "Sí, tiene plena libertad para crear cualquier impuesto", "Solo impuestos especiales sobre hidrocarburos", "Sí, pero solo por un año"], 0, "Art. 134.7 CE: la Ley de Presupuestos no puede crear tributos. Podrá modificarlos cuando una ley tributaria sustantiva así lo prevea."),
  ],
  bossQs: [
    Q("w6-t1-b1", "El principio presupuestario que exige que los créditos se destinen exclusivamente a la finalidad específica para la que hayan sido autorizados se denomina:", ["Principio de especialidad cualitativa", "Principio de universalidad", "Principio de no afectación", "Principio de anualidad"], 0, "Art. 42 LGP: los créditos para gastos se destinarán exclusivamente a la finalidad específica para la que hayan sido autorizados por la Ley de Presupuestos o por las modificaciones realizadas conforme a esta Ley (especialidad cualitativa)."),
    Q("w6-t1-b2", "¿Cuál es la norma de cabecera que regula el régimen presupuestario y económico-financiero del sector público estatal?", ["La Ley 47/2003, de 26 de noviembre, General Presupuestaria (LGP)", "La Ley 58/2003 General Tributaria", "La Ley 38/2003 General de Subvenciones", "La Ley Orgánica 2/2012"], 0, "La Ley 47/2003, de 26 de noviembre, General Presupuestaria (LGP), regula el presupuesto, tesorería, deuda pública y contabilidad del Estado."),
    Q("w6-t1-b3", "Toda proposición o enmienda parlamentaria que suponga aumento de los créditos o disminución de los ingresos presupuestarios (art. 134.6 CE):", ["Requerirá la conformidad del Gobierno para su tramitación", "Se aprueba automáticamente por mayoría simple", "Debe ser aprobada previamente por el TC", "Está prohibida en todo caso"], 0, "Art. 134.6 CE: toda proposición o enmienda que suponga aumento de los créditos o disminución de los ingresos presupuestarios requerirá la conformidad del Gobierno para su tramitación."),
  ],
  mini: {
    type: "match",
    title: "Prueba de los Principios Presupuestarios",
    prompt: "Relaciona cada principio presupuestario con su definición técnica.",
    pairs: [
      ["Principio de legalidad", "El presupuesto debe ser aprobado formalmente por las Cortes mediante Ley"],
      ["Principio de anualidad", "El presupuesto tiene vigencia durante un año (del 1 de enero al 31 de diciembre)"],
      ["Principio de universalidad", "Todos los ingresos y gastos deben figurar por su importe íntegro sin compensaciones"],
      ["Principio de no afectación", "Los recursos del Estado se destinan a satisfacer el conjunto de gastos sin distinción"],
    ],
  },
  boss: {
    name: "El Derrochador del Erario",
    kind: "dragon",
    intro: ["¡Crearé impuestos ilegales en los Presupuestos y gastaré sin crédito presupuestario!"],
    defeat: ["¡El artículo 134 de la Constitución y la Ley General Presupuestaria han restablecido la legalidad financiera!"],
  },
  summary: [
    "PGE (art. 134 CE y Ley 47/2003 LGP): Gobierno elabora, Cortes aprueban. Presentación al Congreso antes del 1 de octubre.",
    "Prórroga automática: si el 1 de enero no hay PGE aprobados, se prorrogan los anteriores.",
    "Límites materiales: prohibición de crear tributos en la Ley de Presupuestos (art. 134.7 CE). Veto presupuestario gubernamental a enmiendas (art. 134.6).",
    "Principios: anualidad, legalidad, unidad, universalidad, no afectación y triple especialidad (cualitativa, cuantitativa y temporal).",
  ],
};

export const W6_T2: MiniWorldDef = {
  id: "hacienda-t2",
  num: 2,
  temaTitle: "Tema 2: Estabilidad presupuestaria y sostenibilidad financiera (LO 2/2012)",
  name: "Torre del Escudo Fiscal",
  emoji: "🛡️",
  theme: "hacienda",
  color: "#c29110",
  enemy: "moneda",
  enemyName: "Monedas falsas",
  npcs: [
    {
      name: "Comisaria Estabilidad",
      role: "Estabilidad presupuestaria (art. 135 CE y LO 2/2012)",
      look: { skin: "#e5b48a", hair: "#34495e", hairStyle: "short", shirt: "#2980b9", pants: "#17202a", acc: ["badge", "glasses"], accColor: "#ffd84d" },
      pages: [
        "El artículo 135 de la Constitución Española, reformado en septiembre de 2011, consagra el principio de estabilidad presupuestaria para todas las Administraciones Públicas.",
        "Se desarrolla en la Ley Orgánica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera (LOEPSF). Principios rectores: estabilidad presupuestaria (equilibrio o superávit estructural), sostenibilidad financiera (capacidad para financiar compromisos de deuda presentes y futuros), plurianualidad, transparencia y eficiencia.",
        "Límites de Deuda Pública: el volumen de deuda pública del conjunto de las Administraciones no podrá superar el 60% del PIB nacional (en línea con el Tratado de Maastricht): 44% para la AGE, 13% para las CCAA y 3% para las Entidades Locales.",
        "Prioridad absoluta de pago (art. 135.3 CE): los créditos para satisfacer los intereses y el capital de la deuda pública gozan de prioridad absoluta frente a cualquier otro gasto. La AIReF (Autoridad Independiente de Responsabilidad Fiscal) vela por su estricto cumplimiento.",
      ],
    },
  ],
  blockQs: [
    Q("w6-t2-q1", "¿Cuál es el valor límite de referencia para la deuda pública del conjunto de las Administraciones según el art. 135 CE y la LO 2/2012?", ["El 60% del Producto Interior Bruto (PIB)", "El 100% del PIB", "El 3% del PIB", "El 40% del PIB"], 0, "Art. 135.2 CE y art. 13 LO 2/2012: el volumen de deuda pública del conjunto de las Administraciones Públicas no podrá superar el 60 por ciento del Producto Interior Bruto nacional expresado en términos nominales."),
    Q("w6-t2-q2", "El principio por el cual los créditos presupuestarios para satisfacer intereses y capital de la deuda pública se entienden siempre incluidos y no pueden enmendarse a la baja es:", ["Prioridad absoluta de pago de la deuda pública (art. 135.3 CE)", "Regla de gasto vinculante", "Principio de caja única", "Principio de compensación de créditos"], 0, "Art. 135.3 CE: los créditos para satisfacer los intereses y el capital de la deuda pública de las Administraciones se entenderán siempre incluidos en el estado de gastos y gozarán de prioridad absoluta frente a cualquier otro gasto."),
    Q("w6-t2-q3", "¿Qué autoridad independiente fue creada para velar por el cumplimiento del principio de estabilidad presupuestaria y sostenibilidad financiera?", ["La Autoridad Independiente de Responsabilidad Fiscal (AIReF)", "La Comisión Nacional del Mercado de Valores (CNMV)", "El Tribunal Económico-Administrativo Central", "El Banco de España en solitario"], 0, "La Ley Orgánica 6/2013 creó la AIReF (Autoridad Independiente de Responsabilidad Fiscal) para garantizar el cumplimiento efectivo por las AAPP del principio de estabilidad presupuestaria mediante la evaluación continua del ciclo presupuestario."),
  ],
  bossQs: [
    Q("w6-t2-b1", "En la distribución del límite del 60% de deuda pública del PIB entre subsectores (art. 13 LO 2/2012), el límite correspondiente a las Comunidades Autónomas es de:", ["13% del PIB", "44% del PIB", "3% del PIB", "25% del PIB"], 0, "Art. 13.1 LO 2/2012: el 60% se distribuye en: 44% para la Administración central, 13% para el conjunto de Comunidades Autónomas y 3% para el conjunto de Corporaciones Locales."),
    Q("w6-t2-b2", "La 'regla de gasto' recogida en el art. 12 de la LO 2/2012 establece que la variación del gasto computable de las Administraciones Públicas:", ["No podrá superar la tasa de referencia de crecimiento del Producto Interior Bruto a medio plazo de la economía española", "Debe ser siempre igual a cero", "No puede superar la inflación del mes de diciembre", "Solo se aplica a los Ayuntamientos"], 0, "Art. 12.1 LO 2/2012: la variación del gasto computable de la Administración central, de las Comunidades Autónomas y de las Corporaciones Locales no podrá superar la tasa de referencia de crecimiento del PIB a medio plazo."),
    Q("w6-t2-b3", "Los límites de déficit estructural y de volumen de deuda pública solo pueden superarse según el art. 135.4 CE en caso de:", ["Catástrofes naturales, recesión económica grave o situaciones de emergencia extraordinaria fuera del control del Estado, apreciadas por mayoría absoluta del Congreso", "Decisión discrecional del Ministro de Hacienda", "Elecciones generales anticipadas", "Acuerdo unánime de las Comunidades Autónomas"], 0, "Art. 135.4 CE: solo podrán superarse en caso de catástrofes naturales, recesión económica grave o situaciones de emergencia extraordinaria apreciadas por la mayoría absoluta del Congreso."),
  ],
  mini: {
    type: "match",
    title: "Prueba de la Distribución de Límites de Deuda Pública",
    prompt: "Asocia cada subsector de las AAPP con su límite legal de deuda pública respecto al PIB (art. 13 LO 2/2012).",
    pairs: [
      ["Conjunto de las Administraciones Públicas", "60% del PIB nacional"],
      ["Administración Central del Estado", "44% del PIB nacional"],
      ["Comunidades Autónomas", "13% del PIB nacional"],
      ["Corporaciones Locales (Ayuntamientos y Diputaciones)", "3% del PIB nacional"],
    ],
  },
  boss: {
    name: "El Monstruo del Déficit Excesivo",
    kind: "dragon",
    intro: ["¡Dispararé el déficit y endeudaré al Estado por encima del 150% del PIB sin control!"],
    defeat: ["¡El artículo 135 CE, la Ley Orgánica 2/2012 y la AIReF han impuesto la sostenibilidad financiera!"],
  },
  summary: [
    "Art. 135 CE (reforma 2011) y LO 2/2012 (LOEPSF): equilibrio estructural, sostenibilidad, regla de gasto y transparencia.",
    "Límite deuda pública 60% PIB (44% Estado, 13% CCAA, 3% EELL).",
    "Prioridad absoluta de pago para intereses y capital de la deuda pública (art. 135.3 CE).",
    "AIReF (LO 6/2013): órgano fiscalizador independiente del cumplimiento de las reglas fiscales.",
  ],
};

export const W6_T3: MiniWorldDef = {
  id: "hacienda-t3",
  num: 3,
  temaTitle: "Tema 3: Estructura de los PGE y el ciclo presupuestario",
  name: "Bóveda de las Clasificaciones Contables",
  emoji: "📊",
  theme: "hacienda",
  color: "#b0820d",
  enemy: "moneda",
  enemyName: "Monedas falsas",
  npcs: [
    {
      name: "Archivero Mayor del Tesoro",
      role: "Estructura del presupuesto y ciclo",
      look: { skin: "#f3c9a0", hair: "#333", hairStyle: "short", shirt: "#27ae60", pants: "#1c2833", acc: ["glasses", "visor"], accColor: "#ffd84d" },
      pages: [
        "El estado de gastos de los PGE se clasifica con un triple criterio: 1) Orgánica: ¿quién gasta? (secciones y servicios); 2) Por programas o funcional: ¿para qué se gasta? (políticas de gasto, programas); y 3) Económica: ¿en qué se gasta? (capítulos, artículos, conceptos y subconceptos).",
        "Capítulos del presupuesto de GASTOS: Operaciones corrientes: Cap. I Gastos de personal, Cap. II Gastos corrientes en bienes y servicios, Cap. III Gastos financieros, Cap. IV Transferencias corrientes. Operaciones de capital: Cap. VI Inversiones reales, Cap. VII Transferencias de capital. Operaciones financieras: Cap. VIII Activos financieros, Cap. IX Pasivos financieros (amortización de deuda).",
        "Capítulos del presupuesto de INGRESOS: Cap. I Impuestos directos, Cap. II Impuestos indirectos, Cap. III Tasas y otros ingresos, Cap. IV Transferencias corrientes, Cap. V Ingresos patrimoniales, Cap. VI Enajenación inversiones reales, Cap. VII Transferencias de capital, Cap. VIII Activos financieros, Cap. IX Pasivos financieros (emisión de deuda).",
        "El ciclo presupuestario: 1) Elaboración por el Gobierno; 2) Examen, enmienda y aprobación por las Cortes; 3) Ejecución por la Administración; y 4) Control interno (IGAE) y externo (Tribunal de Cuentas).",
      ],
    },
  ],
  blockQs: [
    Q("w6-t3-q1", "En la clasificación económica del presupuesto de gastos de los PGE, ¿a qué corresponde el Capítulo I?", ["Gastos de personal", "Inversiones reales", "Gastos financieros", "Transferencias de capital"], 0, "La clasificación económica de gastos sitúa en el Capítulo I los Gastos de personal (retribuciones de funcionarios, laborales y cuotas a la Seguridad Social)."),
    Q("w6-t3-q2", "¿Qué clasificación del estado de gastos informa sobre la finalidad y objetivos a los que se destinan los créditos públicos ('¿para qué se gasta?')?", ["Clasificación por programas (o funcional)", "Clasificación orgánica", "Clasificación económica", "Clasificación territorial"], 0, "La clasificación por programas agrupa los créditos según los objetivos, actividades y finalidades que persigue cada política pública."),
    Q("w6-t3-q3", "En el presupuesto de ingresos de los PGE, el Capítulo IX corresponde a:", ["Pasivos financieros (ingresos por emisión de deuda pública y préstamos recibidos)", "Impuestos sobre la renta y sociedades", "Tasas consulares", "Enajenación de edificios públicos"], 0, "El Capítulo IX del presupuesto de ingresos recoge los Pasivos financieros, que son los recursos obtenidos mediante la emisión de Deuda Pública y concertación de préstamos."),
  ],
  bossQs: [
    Q("w6-t3-b1", "En la clasificación económica del estado de gastos, ¿cuál de los siguientes capítulos forma parte de las 'operaciones de capital'?", ["Capítulo VI: Inversiones reales", "Capítulo II: Gastos corrientes en bienes y servicios", "Capítulo I: Gastos de personal", "Capítulo III: Gastos financieros"], 0, "Las operaciones de capital en gastos comprenden los Capítulos VI (Inversiones reales) y VII (Transferencias de capital)."),
    Q("w6-t3-b2", "La clasificación orgánica del presupuesto del Estado se articula básicamente en:", ["Secciones (Ministerios y Órganos constitucionales) y Servicios (organismos y centros directivos)", "Capítulos y conceptos económicos", "Áreas de gasto y programas", "Provincias y municipios"], 0, "La clasificación orgánica agrupa los créditos por centros gestores: Secciones (primer nivel: ministerios, órganos constitucionales, clases pasivas) y Servicios (segundo nivel: subsecretarías, secretarías de estado, etc.)."),
    Q("w6-t3-b3", "En el ciclo presupuestario, ¿a quién corresponde constitucionalmente de forma exclusiva la función de 'elaboración' del proyecto de Presupuestos Generales del Estado?", ["Al Gobierno (art. 134.1 CE)", "Al Congreso de los Diputados", "Al Tribunal de Cuentas", "Al Banco de España"], 0, "Art. 134.1 CE: corresponde al Gobierno la elaboración de los Presupuestos Generales del Estado y a las Cortes Generales su examen, enmienda y aprobación."),
  ],
  mini: {
    type: "order",
    title: "Prueba de los Capítulos de Gastos de los PGE",
    prompt: "Ordena los primeros 7 Capítulos de la clasificación económica de gastos de los PGE.",
    items: [
      "Capítulo I: Gastos de personal",
      "Capítulo II: Gastos corrientes en bienes y servicios",
      "Capítulo III: Gastos financieros (intereses)",
      "Capítulo IV: Transferencias corrientes",
      "Capítulo VI: Inversiones reales (infraestructuras y obras)",
      "Capítulo VII: Transferencias de capital",
      "Capítulo VIII: Activos financieros",
      "Capítulo IX: Pasivos financieros (amortización de deuda)",
    ],
  },
  boss: {
    name: "El Confusor de Capítulos",
    kind: "dragon",
    intro: ["¡Mezclaré el Capítulo I con el Capítulo VI e imputaré el sueldo de los funcionarios a inversiones reales!"],
    defeat: ["¡La clasificación económica y orgánica de la LGP es inflexible! Cada euro tiene su correcta imputación contable."],
  },
  summary: [
    "Estructura gastos: Orgánica (¿quién?: Secciones y Servicios), Funcional/Programas (¿para qué?: Programas) y Económica (¿en qué?: Capítulos I a IX).",
    "Gastos: Corrientes (I Personal, II Bienes/Servicios, III Financieros, IV Transf. corrientes); Capital (VI Inversiones, VII Transf. capital); Financieros (VIII Activos, IX Pasivos).",
    "Ingresos: I Imp. directos, II Imp. indirectos, III Tasas, IV Transf. corrientes, V Patrimoniales, VI Enajenación, VII Transf. capital, VIII Activos, IX Pasivos.",
    "Ciclo: Elaboración (Gobierno antes de 1 oct), Aprobación (Cortes), Ejecución (AGE), Control (IGAE y Tribunal de Cuentas).",
  ],
};

export const W6_T4: MiniWorldDef = {
  id: "hacienda-t4",
  num: 4,
  temaTitle: "Tema 4: Modificaciones presupuestarias y gastos plurianuales",
  name: "Cámara de las Modificaciones de Crédito",
  emoji: "🔄",
  theme: "hacienda",
  color: "#997108",
  enemy: "moneda",
  enemyName: "Monedas falsas",
  npcs: [
    {
      name: "Don Euro",
      role: "Modificaciones presupuestarias y plurianuales (Ley 47/2003)",
      look: { skin: "#f0bf94", hair: "#1c1c1c", hairStyle: "short", shirt: "#27ae60", pants: "#17202a", acc: ["tie", "visor"], accColor: "#f1c40f" },
      pages: [
        "El presupuesto es vinculante, pero la realidad cambia: por eso la LGP regula las modificaciones presupuestarias en los artículos 50 a 59.",
        "Tipos de modificaciones: 1) Créditos extraordinarios (cuando no existe crédito presupuestario para un gasto que no puede demorarse) y Suplementos de crédito (cuando el crédito existente es insuficiente). Si afectan al presupuesto del Estado, se aprueban por Ley de las Cortes (o Real Decreto-ley si hay urgencia y necesidad ex art. 55 LGP).",
        "2) Transferencias de crédito (traspaso de dotaciones entre aplicaciones; limitaciones art. 52: no de capital a corriente, etc.); 3) Ampliaciones de crédito (en créditos tasados legalmente ampliables); 4) Generaciones de crédito (por mayores ingresos); y 5) Incorporaciones de crédito (remanentes del ejercicio anterior).",
        "Gastos plurianuales (art. 47 LGP): compromisos que se extienden a ejercicios futuros (máximo 4 años posteriores). Límites máximos sobre el crédito inicial: 70% en el año 1, 60% en el año 2, y 50% en los años 3 y 4.",
      ],
    },
  ],
  blockQs: [
    Q("w6-t4-q1", "Cuando haya de realizarse con cargo al Presupuesto del Estado algún gasto específico y determinado que no pueda demorarse y NO exista crédito presupuestario, se tramitará (art. 55 LGP):", ["Un crédito extraordinario", "Un suplemento de crédito", "Una transferencia interna", "Un anticipo de nómina"], 0, "Art. 55.1 LGP: cuando haya de realizarse con cargo al Presupuesto del Estado algún gasto que no pueda demorarse hasta el ejercicio siguiente y no exista crédito, se incoará expediente de concesión de crédito extraordinario (si el crédito es insuficiente, es suplemento de crédito)."),
    Q("w6-t4-q2", "Según el art. 47 de la LGP, ¿a cuántos ejercicios posteriores como máximo pueden extenderse con carácter general los compromisos por gastos plurianuales?", ["A un máximo de cuatro ejercicios posteriores", "A dos años", "A diez años", "A seis ejercicios"], 0, "Art. 47.2 LGP: el número de ejercicios posteriores a que pueden aplicarse los gastos no será superior a cuatro, con los porcentajes máximos fijados en la ley."),
    Q("w6-t4-q3", "¿Cuál es el porcentaje máximo sobre el crédito inicial que puede comprometerse en el año inmediatamente siguiente en un gasto plurianual (art. 47.2 LGP)?", ["El 70 por ciento", "El 50 por ciento", "El 60 por ciento", "El 100 por ciento"], 0, "Art. 47.2 LGP: el gasto que se impute a cada uno de los ejercicios posteriores no podrá exceder de la cantidad que resulte de aplicar al crédito inicial los porcentajes siguientes: en el ejercicio inmediato siguiente, el 70%; en el segundo, el 60%; y en el tercero y cuarto, el 50%."),
  ],
  bossQs: [
    Q("w6-t4-b1", "¿Cuál de las siguientes limitaciones a las transferencias de crédito está recogida expresamente en el art. 52 de la LGP?", ["No podrán minorar créditos para operaciones de capital para destinarlos a financiar créditos para operaciones corrientes", "No pueden realizarse entre distintos ministerios en ningún caso", "No pueden superar los 1.000 euros", "Están prohibidas en el mes de diciembre"], 0, "Art. 52.1.b LGP: las transferencias de crédito no podrán minorar créditos para operaciones de capital con el fin de incrementar créditos para operaciones corrientes."),
    Q("w6-t4-b2", "La modificación presupuestaria que incrementa los créditos como consecuencia de la efectiva recaudación de ingresos no previstos o superiores a los previstos se denomina:", ["Generación de crédito (art. 53 LGP)", "Incorporación de remanente", "Ampliación de crédito", "Suplemento de crédito"], 0, "Art. 53 LGP: las generaciones son modificaciones que incrementan los créditos como consecuencia de la realización de determinados ingresos no previstos o mayores a los estimados en el presupuesto."),
    Q("w6-t4-b3", "La autorización para modificar los porcentajes o el número de anualidades de los gastos plurianuales regulados en el art. 47 de la LGP corresponde a:", ["El Consejo de Ministros, a propuesta del Ministro de Hacienda", "El Congreso de los Diputados mediante ley orgánica", "El Tribunal de Cuentas", "Exclusivamente al Presidente del Gobierno"], 0, "Art. 47.3 LGP: el Consejo de Ministros, en casos especialmente justificados y previo informe del Ministerio de Hacienda, podrá acordar la modificación de los porcentajes, incrementar el número de anualidades o autorizar la adquisición de compromisos."),
  ],
  mini: {
    type: "match",
    title: "Prueba de las Modificaciones Presupuestarias",
    prompt: "Relaciona cada figura de modificación presupuestaria con su causa determinante.",
    pairs: [
      ["Crédito extraordinario", "No existe crédito para un gasto inaplazable"],
      ["Suplemento de crédito", "Existe crédito pero resulta insuficiente para la obligación"],
      ["Generación de crédito", "Obtención de mayores ingresos de los previstos"],
      ["Incorporación de crédito", "Remanentes no comprometidos procedentes del ejercicio anterior"],
    ],
  },
  boss: {
    name: "El Malversador de Partidas",
    kind: "dragon",
    intro: ["¡Transferiré fondos del Capítulo VI de inversiones a gastos de protocolo sin autorización!"],
    defeat: ["¡Las limitaciones taxativas del art. 52 de la LGP han bloqueado tus transferencias ilegales!"],
  },
  summary: [
    "Modificaciones (arts. 50-59 LGP): Crédito extraordinario (no hay crédito) vs Suplemento de crédito (crédito insuficiente). Aprueba Cortes por Ley (o RD-ley ex art. 55).",
    "Transferencias (art. 52): traspaso entre aplicaciones; límite: no de capital a corriente, ni de créditos ampliables o extraordinarios.",
    "Otras figuras: Ampliaciones (créditos tasados), Generaciones (mayores ingresos art. 53) e Incorporaciones (remanentes año anterior art. 58).",
    "Plurianuales (art. 47): máx 4 años posteriores. Techos: año 1 (70%), año 2 (60%), años 3 y 4 (50%). Modificación por Consejo de Ministros.",
  ],
};

export const W6_T5: MiniWorldDef = {
  id: "hacienda-t5",
  num: 5,
  temaTitle: "Tema 5: Ejecución del gasto (A-D-O-P), pagos y subvenciones",
  name: "Cámara de la Contabilidad y la Ordenación de Pagos",
  emoji: "💳",
  theme: "hacienda",
  color: "#805e04",
  enemy: "moneda",
  enemyName: "Monedas falsas",
  npcs: [
    {
      name: "Tesorero Mayor",
      role: "Fases del gasto (A-D-O-P) y Ley General de Subvenciones (Ley 38/2003)",
      look: { skin: "#f3c9a0", hair: "#333", hairStyle: "short", shirt: "#3498db", pants: "#1a252f", acc: ["glasses", "badge"], accColor: "#ffd84d" },
      pages: [
        "La gestión del gasto público se desarrolla en cuatro fases sucesivas regladas en el art. 73 de la LGP:",
        "1) Aprobación o Autorización del gasto (A): acto por el que se acuerda la realización de un gasto, calculado de forma cierta o aproximada, reservando el crédito.",
        "2) Compromiso o Disposición del gasto (D): acto por el que se acuerda formalmente con un tercero la realización del gasto por un importe y condiciones exactamente determinadas.",
        "3) Reconocimiento de la obligación (O): acto por el que se declara la existencia de un crédito exigible contra la Hacienda Pública derivado del cumplimiento de la prestación (albarán conforme, factura). Da paso a la propuesta de pago.",
        "4) Ordenación del pago (P): acto por el que el ordenador general de pagos expide la orden de pago material contra la Tesorería.",
        "Acumulación: un mismo acto puede acumular varias fases: AD, ADO o ADOP.",
        "Subvenciones: Ley 38/2003 General de Subvenciones: principios de publicidad, concurrencia, transparencia, objetividad, igualdad y no discriminación. Exige Plan Estratégico de Subvenciones y bases reguladoras.",
      ],
    },
  ],
  blockQs: [
    Q("w6-t5-q1", "¿Cuál es el orden cronológico estricto de las fases de ejecución del gasto público según el art. 73 de la LGP?", ["Aprobación (A), Compromiso (D), Reconocimiento de la obligación (O) y Ordenación del pago (P)", "Disposición, Autorización, Pago y Reconocimiento", "Reconocimiento, Disposición, Autorización y Pago", "Pago, Ordenación, Compromiso y Aprobación"], 0, "Art. 73.1 LGP: la gestión del gasto público se realizará a través de las siguientes fases: a) Aprobación del gasto (A); b) Compromiso del gasto (D); c) Reconocimiento de la obligación (O); d) Ordenación del pago (P)."),
    Q("w6-t5-q2", "El acto administrativo mediante el cual se declara formalmente la existencia de un crédito exigible contra la Hacienda Pública derivado de la realización de la prestación debida se denomina:", ["Reconocimiento de la obligación (O)", "Aprobación del gasto (A)", "Disposición del gasto (D)", "Compromiso de crédito"], 0, "Art. 73.4 LGP: el reconocimiento de la obligación es el acto mediante el que se declara la existencia de un crédito exigible contra la Hacienda Pública estatal, derivado de un gasto aprobado y comprometido y que comporta la propuesta de pago."),
    Q("w6-t5-q3", "Los fondos librados a justificar regulados en el art. 79 de la LGP tienen carácter excepcional y se aplican cuando:", ["No pueda aportarse la documentación justificativa de las órdenes de pago en el momento de su expedición", "Para pagar nóminas ordinarias fijas", "Para adjudicar contratos de obras mayores", "Para financiar a partidos políticos"], 0, "Art. 79.1 LGP: tendrán el carácter de 'a justificar' las órdenes de pago cuyos documentos justificativos no puedan aportarse en el momento de su expedición, debiendo justificarse en el plazo máximo legal."),
  ],
  bossQs: [
    Q("w6-t5-b1", "¿Cuál de los siguientes principios rectores de la concesión de subvenciones está consagrado en el art. 8 de la Ley 38/2003 General de Subvenciones?", ["Publicidad, transparencia, concurrencia, objetividad, igualdad y no discriminación", "Adjudicación discrecional sin convocatoria", "Silencio positivo en la concesión", "Exención permanente de justificación"], 0, "Art. 8.3 Ley 38/2003: la gestión de las subvenciones se realizará de acuerdo con los principios de publicidad, transparencia, concurrencia, objetividad, igualdad y no discriminación, eficacia y eficiencia."),
    Q("w6-t5-b2", "Los 'anticipos de caja fija' regulados en el art. 78 de la LGP se definen como:", ["Provisiones de fondos extrapresupuestarias de carácter permanente que se hacen a habilitaciones para gastos periódicos o repetitivos", "Préstamos bancarios a devolver al día siguiente", "Adelantos de sueldo a cuenta sin justificar", "Fondos reservados para misiones secretas"], 0, "Art. 78.1 LGP: se entienden por anticipos de caja fija las provisiones de fondos de carácter permanente que se realicen a pagadurías o habilitaciones para la atención inmediata de gastos periódicos o repetitivos."),
    Q("w6-t5-b3", "En la tramitación de subvenciones, las entidades que pretendan otorgarlas deben elaborar previamente de forma preceptiva (art. 8.1 Ley 38/2003):", ["Un Plan Estratégico de Subvenciones", "Una Ley Orgánica específica", "Un informe favorable del Tribunal de Cuentas", "Una consulta vinculante al Defensor del Pueblo"], 0, "Art. 8.1 Ley 38/2003: los órganos de las Administraciones públicas o cualesquiera entes que propongan el establecimiento de subvenciones deberán concretar previamente en un plan estratégico de subvenciones los objetivos y plazos necesarios."),
  ],
  mini: {
    type: "order",
    title: "Prueba de las Fases del Gasto (A-D-O-P)",
    prompt: "Ordena las fases del procedimiento de ejecución del gasto público.",
    items: [
      "Aprobación o Autorización del gasto (A): reserva del crédito presupuestario",
      "Compromiso o Disposición del gasto (D): acuerdo vinculante con el tercero licitador",
      "Reconocimiento de la Obligación (O): verificación de factura y prestación realizada",
      "Ordenación del Pago (P): expedición formal de la orden de pago al Tesoro",
      "Pago material efectivo por transferencia bancaria de la Tesorería General",
    ],
  },
  boss: {
    name: "El Ordenador Irregular",
    kind: "dragon",
    intro: ["¡Pagaré facturas sin comprobar que las obras se hayan realizado ni reconocer la obligación!"],
    defeat: ["¡El procedimiento A-D-O-P de la LGP y la fiscalización previa han interceptado el pago fraudulento!"],
  },
  summary: [
    "Fases del gasto (art. 73 LGP): Aprobación (A) -> Disposición (D) -> Reconocimiento de la obligación (O) -> Ordenación del pago (P).",
    "Acumulaciones: AD, ADO, ADOP en expedientes de tramitación unificada.",
    "Pagos especiales: 'A justificar' (art. 79, justificación a posteriori) y 'Anticipos de caja fija' (art. 78, fondos permanentes gastos repetitivos).",
    "Subvenciones (Ley 38/2003): Plan Estratégico obligatorio, bases reguladoras, concurrencia competitiva como regla general y reintegro por incumplimiento.",
  ],
};

export const W6_T6: MiniWorldDef = {
  id: "hacienda-t6",
  num: 6,
  temaTitle: "Tema 6: Control del gasto (IGAE y Tribunal de Cuentas) y Seguridad Social",
  name: "Corte de Fiscalización y Seguridad Social",
  emoji: "🏛️",
  theme: "hacienda",
  color: "#6b4e02",
  enemy: "moneda",
  enemyName: "Monedas falsas",
  npcs: [
    {
      name: "Interventora Cuentas",
      role: "Control interno (IGAE), externo (Tribunal de Cuentas) y Seguridad Social (TRLGSS)",
      look: { skin: "#e5b48a", hair: "#34495e", hairStyle: "bun", shirt: "#ecf0f1", pants: "#512e5f", acc: ["glasses", "badge"], accColor: "#c0392b" },
      pages: [
        "El control del sector público estatal se divide en control interno y control externo.",
        "Control interno: ejercido por la Intervención General de la Administración del Estado (IGAE, arts. 140-175 LGP) a través de tres modalidades: 1) Función interventora (control previo de legalidad de los actos que originan derechos y gastos); 2) Control financiero permanente; y 3) Auditoría pública.",
        "Control externo: atribuido constitucionalmente al Tribunal de Cuentas (art. 136 CE y LO 2/1982): supremo órgano fiscalizador de las cuentas y la gestión económica del Estado y del sector público. Depende directamente de las Cortes Generales. Ejerce doble función: fiscalizadora (informe anual sobre la Cuenta General del Estado) y jurisdiccional (enjuiciamiento contable de los responsables de menoscabo de caudales públicos). Integrado por 12 Consejeros de Cuentas nombrados por 9 años por las Cortes (3/5 de cada Cámara).",
        "Seguridad Social: TRLGSS (RDL 8/2015, de 30 de octubre). Niveles contributivo y no contributivo. Estructura: Régimen General y regímenes especiales (autónomos - RETA, trabajadores del mar, minería). Entidades gestoras (INSS para prestaciones económicas, IMSERSO, ISM, INGESA) y servicio común: Tesorería General de la Seguridad Social (TGSS: caja única, afiliación, altas, bajas, recaudación y cotización).",
      ],
    },
  ],
  blockQs: [
    Q("w6-t6-q1", "¿A qué órgano directivo del Ministerio de Hacienda corresponde el ejercicio del control interno del sector público estatal?", ["A la Intervención General de la Administración del Estado (IGAE)", "Al Tribunal de Cuentas", "A la Dirección General del Tesoro", "Al Consejo de Estado"], 0, "Art. 140 LGP: la IGAE es el órgano directivo encargado del control interno de la gestión económico-financiera del sector público estatal."),
    Q("w6-t6-q2", "El Tribunal de Cuentas es definido en el art. 136 de la Constitución como el supremo órgano fiscalizador que depende directamente de:", ["Las Cortes Generales", "El Presidente del Gobierno", "El Tribunal Supremo", "El Ministerio de Hacienda"], 0, "Art. 136.1 CE: el Tribunal de Cuentas es el supremo órgano fiscalizador de las cuentas y de la gestión económica del Estado, así como del sector público. Depende directamente de las Cortes Generales."),
    Q("w6-t6-q3", "¿Qué servicio común de la Seguridad Social tiene atribuida la titularidad de los recursos, la gestión de la caja única, la afiliación y la recaudación de cuotas?", ["La Tesorería General de la Seguridad Social (TGSS)", "El Instituto Nacional de la Seguridad Social (INSS)", "El Servicio Público de Empleo Estatal (SEPE)", "El IMSERSO"], 0, "La TGSS es el servicio común de la Seguridad Social dotado de personalidad jurídica propia que unifica la caja única, la afiliación, altas y bajas, y la recaudación de los recursos del sistema."),
  ],
  bossQs: [
    Q("w6-t6-b1", "¿Cuáles son las tres modalidades del control interno ejercido por la IGAE según el art. 143 de la LGP?", ["La función interventora, el control financiero permanente y la auditoría pública", "La inspección de hacienda, la vigilancia aduanera y el embargo", "El control parlamentario, la moción contable y el visto bueno", "El control previo, el recurso contencioso y la tasación"], 0, "Art. 143.1 LGP: el control interno se ejercerá mediante la función interventora, el control financiero permanente y la auditoría pública."),
    Q("w6-t6-b2", "¿Cuántos Consejeros de Cuentas componen el Tribunal de Cuentas y por qué mandato y mayoría son elegidos (LO 2/1982)?", ["12 Consejeros elegidos por 9 años por mayoría de 3/5 de las Cámaras (6 por el Congreso y 6 por el Senado)", "15 Consejeros elegidos por 5 años por mayoría absoluta", "20 Consejeros por 4 años", "10 Consejeros vitalicios"], 0, "Art. 29 LO 2/1982: el Tribunal de Cuentas se compone de doce Consejeros elegidos por las Cortes Generales (seis por el Congreso y seis por el Senado) por mayoría de tres quintos de cada Cámara para un mandato de nueve años."),
    Q("w6-t6-b3", "La entidad gestora de la Seguridad Social competente para la gestión y administración de las prestaciones económicas del sistema (jubilación, incapacidad, viudedad) es:", ["El Instituto Nacional de la Seguridad Social (INSS)", "La Tesorería General de la Seguridad Social", "La Agencia Tributaria (AEAT)", "El Instituto Geográfico Nacional"], 0, "El INSS es la entidad gestora con personalidad jurídica propia que tiene encomendada la gestión y administración de las prestaciones económicas del sistema de la Seguridad Social."),
  ],
  mini: {
    type: "match",
    title: "Prueba de las Instituciones de Control y Seguridad Social",
    prompt: "Relaciona cada institución u organismo con su función exclusiva.",
    pairs: [
      ["IGAE", "Control interno del sector público estatal (función interventora, control permanente y auditoría)"],
      ["Tribunal de Cuentas (art. 136 CE)", "Control externo (fiscalización de la Cuenta General y enjuiciamiento contable)"],
      ["TGSS (Tesorería General)", "Caja única, afiliación, altas y recaudación de la Seguridad Social"],
      ["INSS", "Entidad gestora de prestaciones económicas (jubilación, incapacidad, orfandad)"],
    ],
  },
  boss: {
    name: "El Defraudador de Cuentas",
    kind: "dragon",
    intro: ["¡Ocultaré el menoscabo de fondos públicos y eludiré el control de la IGAE y del Tribunal de Cuentas!"],
    defeat: ["¡La fiscalización previa y la jurisdicción contable del Tribunal de Cuentas han exigido la responsabilidad patrimonial y el reintegro total!"],
  },
  summary: [
    "Control interno (IGAE, arts. 140-175 LGP): Función interventora (previa y formal), Control financiero permanente y Auditoría pública.",
    "Control externo (Tribunal de Cuentas, art. 136 CE y LO 2/1982): supremo fiscalizador dependiente de las Cortes. 12 Consejeros por 9 años por 3/5. Función fiscalizadora (Cuenta General) y jurisdiccional (alcances).",
    "Seguridad Social (TRLGSS, RDL 8/2015): Régimen General y Especiales (autónomos RETA, mar, carbón).",
    "Gestión SS: Entidades Gestoras (INSS prestaciones económicas, IMSERSO, ISM, INGESA) y Servicio Común (TGSS caja única, afiliación y recaudación).",
  ],
};

/* ==================== MUNDO 6 (BLOQUE VI COMPLETO) ==================== */

export const W6: WorldDef = {
  id: "hacienda",
  num: 6,
  bloque: "Bloque VI",
  title: "Gestión financiera y Seguridad Social",
  name: "Castillo del Tesoro",
  emoji: "💰",
  theme: "hacienda",
  color: "#d4a017",
  enemy: "moneda",
  enemyName: "Monedas falsas",
  temas: [
    "Tema 1: El Presupuesto del Estado y la Ley General Presupuestaria",
    "Tema 2: Estabilidad presupuestaria y sostenibilidad financiera (LO 2/2012)",
    "Tema 3: Estructura de los PGE y el ciclo presupuestario",
    "Tema 4: Modificaciones presupuestarias y gastos plurianuales",
    "Tema 5: Ejecución del gasto (A-D-O-P), pagos y subvenciones",
    "Tema 6: Control del gasto (IGAE y Tribunal de Cuentas) y Seguridad Social",
  ],
  miniWorlds: [W6_T1, W6_T2, W6_T3, W6_T4, W6_T5, W6_T6],
  npcs: [
    W6_T1.npcs[0],
    W6_T2.npcs[0],
    W6_T3.npcs[0],
    W6_T4.npcs[0],
    W6_T6.npcs[0],
  ],
  blockQs: [
    W6_T1.blockQs[0],
    W6_T2.blockQs[0],
    W6_T3.blockQs[0],
    W6_T4.blockQs[0],
    W6_T5.blockQs[0],
    W6_T6.blockQs[0],
  ],
  bossQs: [
    W6_T1.bossQs[0],
    W6_T2.bossQs[0],
    W6_T3.bossQs[0],
    W6_T4.bossQs[0],
    W6_T5.bossQs[0],
    W6_T6.bossQs[1],
  ],
  mini: {
    type: "order",
    title: "Gran Desafío del Bloque VI: El Ciclo Presupuestario Integral",
    prompt: "Ordena las fases cardinales del ciclo presupuestario y de control financiero del Estado.",
    items: [
      "Elaboración del Proyecto de PGE por el Gobierno y remisión antes del 1 de octubre",
      "Examen, enmiendas y aprobación por las Cortes Generales",
      "Ejecución del gasto por los centros gestores mediante las fases A-D-O-P",
      "Control interno continuo a cargo de la Intervención General de la AGE (IGAE)",
      "Rendición de la Cuenta General del Estado y control externo por el Tribunal de Cuentas",
    ],
  },
  boss: {
    name: "Déficit, el Dragón del Tesoro",
    kind: "dragon",
    intro: [
      "¡RUAAAR! ¡Devoro cada euro de los Presupuestos Generales del Estado y desbordo la deuda pública!",
      "Solo dominando los 6 temas de la gestión financiera, el control contable y la Seguridad Social podrás extinguir mi fuego. ¡Acepta el combate!",
    ],
    defeat: ["¡Aaaaargh! Estabilidad presupuestaria... ¡sostenibilidad financiera...! ¡La IGAE y el Tribunal de Cuentas me han auditado y extinguido mi llama!"],
  },
  summary: [
    "PGE (art. 134 CE y LGP 47/2003): anuales, presentados antes del 1 de octubre; prórroga automática el 1 de enero si no hay ley aprobada. No crean tributos.",
    "Estabilidad y sostenibilidad (art. 135 CE y LO 2/2012): techo de deuda 60% PIB (44% Estado, 13% CCAA, 3% EELL). Prioridad absoluta deuda. AIReF.",
    "Estructura gastos: Orgánica (Secciones/Servicios), Programas y Económica (Cap. I a IX: I Personal, II Bienes/servicios, VI Inversiones). Ingresos Cap. I a IX.",
    "Modificaciones LGP: Créditos extraordinarios (no hay) vs suplementos (insuficiente). Transferencias (art. 52). Generaciones e incorporaciones. Plurianuales (art. 47 máx 4 años).",
    "Ejecución gasto (art. 73 LGP): Aprobación (A) -> Disposición (D) -> Reconocimiento de la obligación (O) -> Ordenación del pago (P). Subvenciones (Ley 38/2003).",
    "Control: Interno (IGAE: intervención, control financiero permanente, auditoría) y Externo (Tribunal de Cuentas, 12 consejeros, 9 años, 3/5).",
    "Seguridad Social (TRLGSS RDL 8/2015): Régimen General y Especiales (RETA, mar). TGSS (servicio común, caja única) e INSS (gestora prestaciones).",
  ],
};
