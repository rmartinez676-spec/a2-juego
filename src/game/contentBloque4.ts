import type { MiniWorldDef, WorldDef } from "./types";
import { Q } from "./contentBloque1";

/* ==================== BLOQUE IV: MINI-MUNDOS ==================== */

export const W4_T1: MiniWorldDef = {
  id: "derecho-t1",
  num: 1,
  temaTitle: "Tema 1: Las fuentes del Derecho administrativo y la potestad reglamentaria",
  name: "Plaza de la Jerarquía Normativa",
  emoji: "📜",
  theme: "derecho",
  color: "#8e44ad",
  enemy: "sello",
  enemyName: "Sellos burocráticos",
  npcs: [
    {
      name: "Doña Jerarquía",
      role: "Fuentes del Derecho administrativo y reglamentos",
      look: { skin: "#f1c7a0", hair: "#333", hairStyle: "bun", shirt: "#6c3483", pants: "#1b1b3a", acc: ["glasses", "robe"], accColor: "#f1c40f" },
      pages: [
        "Bienvenida al Ministerio del BOE. La jerarquía normativa (art. 9.3 CE) estructura las fuentes: Constitución, Tratados internacionales, Leyes (y normas con rango de ley) y Reglamentos.",
        "Leyes: orgánicas (art. 81 CE: derechos fundamentales, Estatutos, régimen electoral; mayoría absoluta del Congreso en votación final de conjunto) y ordinarias (mayoría simple).",
        "Normas del Gobierno con rango de ley: Real Decreto-ley (art. 86 CE: caso de extraordinaria y urgente necesidad; convalidación o derogación por el Congreso en 30 días; no cabe en instituciones básicas, Título I, CCAA ni régimen electoral) y Real Decreto Legislativo (art. 82 CE: textos articulados por leyes de bases y textos refundidos por leyes ordinarias).",
        "Reglamentos: disposiciones generales de la Administración (Reales Decretos del Consejo de Ministros, Órdenes Ministeriales). Inderogabilidad singular (art. 37 Ley 39/2015): una resolución administrativa particular no puede vulnerar lo establecido en una disposición de carácter general, aunque provenga de un órgano de igual o superior jerarquía.",
      ],
    },
  ],
  blockQs: [
    Q("w4-t1-q1", "¿En qué plazo debe ser sometido a debate y votación de totalidad en el Congreso un Real Decreto-ley para su convalidación o derogación (art. 86.2 CE)?", ["En el plazo de los 30 días siguientes a su promulgación", "En 15 días hábiles", "En 2 meses", "En 10 días naturales"], 0, "Art. 86.2 CE: los Decretos-leyes deberán ser sometidos inmediatamente a debate y votación de totalidad al Congreso de los Diputados, convocado al efecto si no estuviere reunido, en el plazo de los treinta días siguientes a su promulgación."),
    Q("w4-t1-q2", "El principio de 'inderogabilidad singular de los reglamentos' (art. 37 Ley 39/2015) significa que:", ["Las resoluciones administrativas de carácter particular no podrán vulnerar lo establecido en una disposición de carácter general, aunque aquéllas procedan de un órgano de igual o superior jerarquía", "Ningún reglamento puede ser modificado por Real Decreto", "Los reglamentos solo derogan leyes anteriores", "Solo el Presidente del Gobierno puede inaplicar un reglamento"], 0, "Art. 37.1 Ley 39/2015: las resoluciones administrativas de carácter particular no podrán vulnerar lo establecido en una disposición de carácter general, aun cuando aquéllas procedan de un órgano de igual o superior jerarquía al que dictó la disposición general."),
    Q("w4-t1-q3", "¿Qué mayoría exige la aprobación de una Ley Orgánica en el Congreso de los Diputados (art. 81.2 CE)?", ["Mayoría absoluta en una votación final sobre el conjunto del proyecto", "Mayoría simple de los diputados presentes", "Dos tercios de los votos emitidos", "Tres quintos de cada Cámara"], 0, "Art. 81.2 CE: la aprobación, modificación o derogación de las leyes orgánicas exigirá mayoría absoluta del Congreso, en una votación final sobre el conjunto del proyecto."),
  ],
  bossQs: [
    Q("w4-t1-b1", "¿Cuál de las siguientes materias está expresamente vedada a la regulación mediante Decreto-ley según el art. 86.1 CE?", ["El ordenamiento de las instituciones básicas del Estado, los derechos del Título I, el régimen de las CCAA y el Derecho electoral general", "El importe de las tasas administrativas", "La regulación de los horarios de apertura comercial", "Los contratos menores de obras"], 0, "Art. 86.1 CE: los Decretos-leyes no podrán afectar al ordenamiento de las instituciones básicas del Estado, a los derechos, deberes y libertades de los ciudadanos regulados en el Título I, al régimen de las CCAA ni al Derecho electoral general."),
    Q("w4-t1-b2", "La delegación legislativa otorgada al Gobierno para elaborar un 'texto articulado' debe formalizarse necesariamente mediante:", ["Una Ley de Bases", "Una Ley ordinaria de refundición", "Un Real Decreto de urgencia", "Una moción parlamentaria"], 0, "Art. 82.2 CE: la delegación legislativa deberá otorgarse mediante una ley de bases cuando su objeto sea la formación de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno solo."),
    Q("w4-t1-b3", "Las disposiciones administrativas (reglamentos) que vulneren la Constitución, las leyes u otras disposiciones de rango superior son (art. 47.2 Ley 39/2015):", ["Nulas de pleno derecho", "Anulables con convalidación posterior", "Meramente irregulares subsanables", "Válidas hasta que transcurran 4 años"], 0, "Art. 47.2 Ley 39/2015: serán nulas de pleno derecho las disposiciones administrativas que vulneren la Constitución, las leyes u otras disposiciones administrativas de rango superior, las que regulen materias reservadas a la Ley, y las que establezcan la retroactividad de disposiciones sancionadoras no favorables."),
  ],
  mini: {
    type: "order",
    title: "Prueba de la Pirámide de Kelsen del Derecho Español",
    prompt: "Ordena las normas de mayor a menor jerarquía normativa en el ordenamiento español.",
    items: [
      "Constitución Española de 1978",
      "Tratados Internacionales válidamente celebrados y publicados en el BOE",
      "Leyes (Orgánicas y Ordinarias) y normas con fuerza de ley (Decreto-ley y Decreto legislativo)",
      "Reales Decretos aprobados por el Presidente del Gobierno o el Consejo de Ministros",
      "Órdenes Ministeriales aprobadas por los titulares de los Ministerios",
    ],
  },
  boss: {
    name: "El Redactor de Decretos Ilegales",
    kind: "ghost",
    intro: ["¡He redactado un decreto que deroga una Ley Orgánica! ¿Quién se atreve a impugnar mi reglamento?"],
    defeat: ["¡El principio de jerarquía normativa y el art. 47.2 de la Ley 39/2015 han fulminado el reglamento nulo!"],
  },
  summary: [
    "Fuentes: Constitución > Tratados > Ley (LO mayoría absoluta art. 81; ordinaria) > Normas del Gobierno (Decreto-ley en 30 d art. 86; Decreto legislativo art. 82) > Reglamentos.",
    "Límites Decreto-ley: no instituciones básicas, derechos Título I, régimen CCAA ni electoral general.",
    "Reglamentos: potestad reglamentaria (art. 97 CE). Inderogabilidad singular (art. 37 Ley 39/2015).",
    "Nulidad de pleno derecho de disposiciones reglamentarias ilegales (art. 47.2 Ley 39/2015).",
  ],
};

export const W4_T2: MiniWorldDef = {
  id: "derecho-t2",
  num: 2,
  temaTitle: "Tema 2: El acto administrativo: eficacia, notificación y validez",
  name: "Sala de los Sellos Oficiales",
  emoji: "📑",
  theme: "derecho",
  color: "#7d3c98",
  enemy: "sello",
  enemyName: "Sellos burocráticos",
  npcs: [
    {
      name: "Maese Acto",
      role: "Eficacia, notificación y nulidad (Ley 39/2015)",
      look: { skin: "#e5b48a", hair: "#555", hairStyle: "short", shirt: "#7d3c98", pants: "#2c3e50", acc: ["tie", "tophat"], accColor: "#f1c40f" },
      pages: [
        "El acto administrativo se presume válido y produce efectos desde la fecha en que se dicte, salvo que en él se disponga otra cosa (art. 39.1 Ley 39/2015). La eficacia quedará demorada cuando lo exija el contenido del acto o esté supeditada a notificación o publicación.",
        "Notificación (art. 40): debe cursarse en el plazo de 10 días a partir de la fecha en que el acto haya sido dictado. Debe contener el texto íntegro, si es definitivo o no en vía administrativa, los recursos que procedan, órgano ante el que interponerlos y plazo para recurrir.",
        "Notificación electrónica (art. 43): se entiende producida en el momento en que se acceda a su contenido. Si transcurren 10 días naturales desde su puesta a disposición sin que se acceda, se entiende rechazada.",
        "Invalidez: Nulidad de pleno derecho (art. 47: tasada, insubsanable, imprescriptible: lesión de derechos fundamentales, incompetencia manifiesta por materia o territorio, contenido imposible, delito, prescindir total del procedimiento...). Anulabilidad (art. 48: cualquier otra infracción del ordenamiento, incluso desviación de poder; convalidable y subsanable).",
      ],
    },
  ],
  blockQs: [
    Q("w4-t2-q1", "En qué plazo legal debe cursarse la notificación de un acto administrativo a partir de la fecha en que haya sido dictado (art. 40.2 Ley 39/2015)?", ["Diez días", "Cinco días hábiles", "Un mes", "Quince días naturales"], 0, "Art. 40.2 Ley 39/2015: toda notificación deberá ser cursada dentro del plazo de diez días a partir de la fecha en que el acto haya sido dictado."),
    Q("w4-t2-q2", "En las notificaciones por medios electrónicos, transcurridos cuántos días desde la puesta a disposición sin acceder se entenderá rechazada (art. 43.2 Ley 39/2015)?", ["Diez días naturales", "Diez días hábiles", "Un mes", "Quince días hábiles"], 0, "Art. 43.2 Ley 39/2015: cuando la notificación por medios electrónicos sea de carácter obligatorio o haya sido expresamente elegida, se entenderá rechazada cuando hayan transcurrido diez días naturales desde la puesta a disposición de la notificación sin que se acceda a su contenido."),
    Q("w4-t2-q3", "¿Cuál de las siguientes causas determina la nulidad de pleno derecho de un acto administrativo según el art. 47.1 de la Ley 39/2015?", ["Los que lesionen los derechos y libertades susceptibles de amparo constitucional", "Cualquier defecto de forma que no cause indefensión", "El retraso en el envío de una copia informativa", "La falta de un informe preceptivo pero no vinculante"], 0, "Art. 47.1.a Ley 39/2015: los actos de las Administraciones Públicas son nulos de pleno derecho en los casos en que lesionen los derechos y libertades susceptibles de amparo constitucional."),
  ],
  bossQs: [
    Q("w4-t2-b1", "Un acto dictado por un órgano manifiestamente incompetente por razón de la jerarquía es:", ["Anulable (y convalidable por el superior jerárquico)", "Nulo de pleno derecho", "Inexistente de origen", "Válido y eficaz de pleno"], 0, "Art. 47.1.b vs art. 52.3 Ley 39/2015: la incompetencia manifiesta por razón de la materia o del territorio genera nulidad; la incompetencia jerárquica es causa de anulabilidad y puede ser convalidada por el órgano superior."),
    Q("w4-t2-b2", "El defecto de forma en un acto administrativo solo determinará la anulabilidad (art. 48.2 Ley 39/2015) cuando:", ["El acto carezca de los requisitos formales indispensables para alcanzar su fin o dé lugar a la indefensión de los interesados", "En todo caso de error tipográfico", "Solo si falta la fecha de emisión", "Únicamente en sanciones de tráfico"], 0, "Art. 48.2 Ley 39/2015: el defecto de forma solo determinará la anulabilidad cuando el acto carezca de los requisitos formales indispensables para alcanzar su fin o dé lugar a la indefensión de los interesados."),
    Q("w4-t2-b3", "La convalidación de los actos administrativos anulables regulada en el art. 52 de la Ley 39/2015 produce efectos:", ["Desde la fecha de la convalidación, salvo supuestos de retroactividad justificada", "Siempre con carácter retroactivo a hace 5 años", "Únicamente hacia el futuro sin excepción", "Solo si el interesado paga una fianza"], 0, "Art. 52.1 y 52.4 Ley 39/2015: el acto de convalidación producirá efecto desde su fecha, salvo lo dispuesto en el art. 39.3 para la retroactividad de los actos."),
  ],
  mini: {
    type: "match",
    title: "Prueba de la Nulidad vs Anulabilidad",
    prompt: "Clasifica cada supuesto de vicio del acto administrativo en Nulidad de pleno derecho o Anulabilidad.",
    pairs: [
      ["Lesión de derechos fundamentales susceptibles de amparo", "Nulidad de pleno derecho (art. 47)"],
      ["Incompetencia manifiesta por razón de la materia o territorio", "Nulidad de pleno derecho (art. 47)"],
      ["Incompetencia por razón de la jerarquía", "Anulabilidad subsanable (art. 48 / 52)"],
      ["Desviación de poder o infracción del ordenamiento jurídico", "Anulabilidad (art. 48)"],
    ],
  },
  boss: {
    name: "El Notificador Fantasma",
    kind: "ghost",
    intro: ["¡Nunca recibirás la notificación de tu expediente sancionador y el plazo para recurrir expirará!"],
    defeat: ["¡Las garantías del artículo 40 y 43 de la Ley 39/2015 han acreditado la indefensión y anulado el acto!"],
  },
  summary: [
    "Acto administrativo: presunción de validez y ejecutividad inmediata (art. 39).",
    "Notificación (art. 40): cursada en 10 días; requisitos esenciales (texto, fin de vía, recursos, plazos). Electrónica (art. 43): rechazo a los 10 días naturales sin acceso.",
    "Nulidad de pleno derecho (art. 47): tasada, insubsanable, imprescriptible (amparo constitucional, incompetencia materia/territorio, contenido imposible, delito, omisión total procedimiento).",
    "Anulabilidad (art. 48): regla general para infracciones; defecto de forma sólo si hay indefensión o falta requisito esencial. Convalidación (art. 52).",
  ],
};

export const W4_T3: MiniWorldDef = {
  id: "derecho-t3",
  num: 3,
  temaTitle: "Tema 3: El procedimiento administrativo común y el silencio",
  name: "Laberinto del Procedimiento y los Plazos",
  emoji: "⏳",
  theme: "derecho",
  color: "#6c3483",
  enemy: "sello",
  enemyName: "Sellos burocráticos",
  npcs: [
    {
      name: "Notario Recursos",
      role: "Procedimiento común, plazos y silencio (Ley 39/2015)",
      look: { skin: "#d9a577", hair: "#1c1c1c", hairStyle: "short", shirt: "#a569bd", pants: "#1c2833", acc: ["beard", "glasses"], accColor: "#f1c40f" },
      pages: [
        "El procedimiento administrativo común está regulado en el Título IV de la Ley 39/2015: iniciación (de oficio o a solicitud), ordenación (impulso de oficio y celeridad), instrucción (alegaciones, pruebas de 10 a 30 días, informes, audiencia de 10 a 15 días) y finalización.",
        "Plazo máximo para resolver y notificar (art. 21): el que fije la norma reguladora del procedimiento; no podrá exceder de 6 meses salvo ley o Derecho de la UE. Si la norma no fija plazo, será de 3 meses.",
        "Silencio administrativo (art. 24): en procedimientos iniciados a solicitud del interesado, la regla general es el silencio POSITIVO (estimatorio).",
        "Excepciones de silencio NEGATIVO: norma con rango de ley o Derecho de la UE; derecho de petición (art. 29 CE); transferencia de facultades sobre dominio o servicio público; actividades con daño medioambiental; y procedimientos de impugnación de actos o responsabilidad patrimonial.",
        "Cómputo de plazos (art. 30): por horas (hábiles, de hora en hora); por días (hábiles: excluyen sábados, domingos y festivos); por meses o años (de fecha a fecha).",
      ],
    },
  ],
  blockQs: [
    Q("w4-t3-q1", "Si la norma reguladora de un procedimiento no fija expresamente plazo máximo para resolver y notificar, éste será de (art. 21.3 Ley 39/2015):", ["Tres meses", "Un mes", "Seis meses", "Veinte días"], 0, "Art. 21.3 Ley 39/2015: cuando las normas reguladoras de los procedimientos no fijen el plazo máximo, éste será de tres meses."),
    Q("w4-t3-q2", "En los procedimientos iniciados a solicitud del interesado, ¿cuál es la regla general del silencio administrativo según el art. 24.1 de la Ley 39/2015?", ["Silencio estimatorio (positivo)", "Silencio desestimatorio (negativo)", "Caducidad inmediata del procedimiento", "Archivo sin más trámite"], 0, "Art. 24.1 Ley 39/2015: en los procedimientos iniciados a solicitud del interesado, el vencimiento del plazo máximo sin haberse notificado resolución expresa legitima al interesado para entenderla estimada por silencio administrativo, como regla general."),
    Q("w4-t3-q3", "En el cómputo de plazos por días señalado en la Ley 39/2015, se entienden por días hábiles:", ["Aquellos que excluyen los sábados, los domingos y los días declarados festivos", "Todos los días de lunes a sábado", "Únicamente los domingos quedan excluidos", "Los 365 días del año natural"], 0, "Art. 30.2 Ley 39/2015: siempre que por Ley o en el Derecho de la UE no se exprese otro cómputo, cuando los plazos se señalen por días, se entiende que éstos son hábiles, excluyéndose del cómputo los sábados, los domingos y los declarados festivos."),
  ],
  bossQs: [
    Q("w4-t3-b1", "¿Cuál de los siguientes procedimientos a solicitud del interesado tiene legalmente silencio administrativo NEGATIVO (desestimatorio)?", ["Los procedimientos de responsabilidad patrimonial de las Administraciones Públicas", "La solicitud de una licencia ordinaria de obras menores", "La inscripción en un curso de formación voluntario", "La petición de un certificado de empadronamiento"], 0, "Art. 24.1 Ley 39/2015: el silencio tendrá efecto desestimatorio en los procedimientos de responsabilidad patrimonial de las Administraciones Públicas."),
    Q("w4-t3-b2", "En el cómputo de plazos fijados por meses, si en el mes de vencimiento no hubiera día equivalente al inicial del cómputo (art. 30.4 Ley 39/2015):", ["El plazo expirará el último día del mes", "El plazo se prorroga diez días más", "El plazo vence el día 1 del mes siguiente", "El cómputo queda anulado"], 0, "Art. 30.4 Ley 39/2015: si en el mes de vencimiento no hubiera día equivalente a aquel en que comienza el cómputo, se entenderá que el plazo expira el último día del mes."),
    Q("w4-t3-b3", "La caducidad de un procedimiento iniciado a solicitud del interesado por paralización imputable al mismo requiere (art. 95 Ley 39/2015):", ["Advertencia previa de la Administración de que, transcurridos tres meses, se producirá la caducidad", "Archivo inmediato a los 10 días sin previo aviso", "Una sanción económica al interesado", "Sentencia judicial previa"], 0, "Art. 95.1 Ley 39/2015: la Administración advertirá al interesado que, transcurridos tres meses, se producirá la caducidad del procedimiento."),
  ],
  mini: {
    type: "order",
    title: "Prueba de las Fases del Procedimiento Administrativo",
    prompt: "Ordena las fases cronológicas del procedimiento administrativo común.",
    items: [
      "Iniciación del procedimiento (de oficio o a solicitud de persona interesada)",
      "Ordenación e impulso de oficio del expediente",
      "Instrucción: alegaciones, práctica de pruebas (10-30 días) e informes",
      "Trámite de audiencia y vista del expediente (10-15 días)",
      "Finalización: resolución expresa que decide todas las cuestiones planteadas",
    ],
  },
  boss: {
    name: "El Espectro del Silencio Negativo",
    kind: "ghost",
    intro: ["¡Llevo 6 meses sin dictar resolución sobre tu beca! ¿Sabrás si mi silencio es positivo o negativo?"],
    defeat: ["¡Art. 24 de la Ley 39/2015! Al no haber excepción legal, ¡el silencio era estimatorio y tengo el certificado!"],
  },
  summary: [
    "Plazo de resolución (art. 21): el de la norma reguladora (máx 6 meses salvo ley o UE); supletorio 3 meses.",
    "Silencio a solicitud (art. 24): positivo por defecto. Negativo: ley/UE, petición art. 29 CE, dominio público, medio ambiente, recursos y responsabilidad patrimonial.",
    "Cómputo (art. 30): días hábiles (excluye sábados, domingos y festivos). Meses: de fecha a fecha (si no hay día equivalente, último del mes).",
    "Fases: Iniciación, ordenación, instrucción (audiencia 10-15 d art. 82) y finalización (resolución, desistimiento, renuncia, caducidad en 3 meses art. 95).",
  ],
};

export const W4_T4: MiniWorldDef = {
  id: "derecho-t4",
  num: 4,
  temaTitle: "Tema 4: Revisión de oficio, recursos administrativos y vía contenciosa",
  name: "Tribunal de Recursos y Revisión",
  emoji: "⚖️",
  theme: "derecho",
  color: "#5b2c6f",
  enemy: "sello",
  enemyName: "Sellos burocráticos",
  npcs: [
    {
      name: "Letrada de Recursos",
      role: "Revisión de oficio y recursos administrativos",
      look: { skin: "#f3c9a0", hair: "#6c3483", hairStyle: "long", shirt: "#8e44ad", pants: "#2c3e50", acc: ["glasses", "scarf"], accColor: "#ffd84d" },
      pages: [
        "Revisión de oficio (arts. 106-111 Ley 39/2015): para actos nulos de pleno derecho (art. 47), en cualquier momento, de oficio o a solicitud, con dictamen favorable preceptivo y vinculante del Consejo de Estado u órgano autonómico.",
        "Declaración de lesividad (art. 107): para actos anulables favorables, en el plazo de 4 años desde que se dictaron, para su posterior impugnación ante la jurisdicción contencioso-administrativa.",
        "Recurso de alzada (arts. 121-122): contra actos que no ponen fin a la vía administrativa, ante el superior jerárquico. Plazo de interposición: 1 mes si es expreso (cualquier momento si es presunto). Plazo para resolver: 3 meses (silencio negativo, salvo alzada contra desestimación presunta: silencio positivo de doble silencio, art. 24.1 párrafo 3º).",
        "Recurso potestativo de reposición (arts. 123-124): contra actos que ponen fin a la vía, ante el mismo órgano. Plazo: 1 mes. Plazo para resolver: 1 mes. Jurisdicción Contencioso-Administrativa (LJCA 29/1998): plazo general de 2 meses contra actos expresos y 6 meses si es presunto.",
      ],
    },
  ],
  blockQs: [
    Q("w4-t4-q1", "¿Cuál es el plazo para interponer recurso de alzada contra un acto administrativo expreso (art. 122 Ley 39/2015)?", ["Un mes", "Dos meses", "Diez días hábiles", "Tres meses"], 0, "Art. 122.1 Ley 39/2015: el plazo para la interposición del recurso de alzada será de un mes, si el acto fuera expreso. Transcurrido dicho plazo sin haberse interpuesto el recurso, el acto será firme a todos los efectos."),
    Q("w4-t4-q2", "¿Cuál es el plazo máximo para dictar y notificar la resolución de un recurso potestativo de reposición (art. 124.2 Ley 39/2015)?", ["Un mes", "Tres meses", "Dos meses", "Diez días"], 0, "Art. 124.2 Ley 39/2015: el plazo máximo para dictar y notificar la resolución del recurso de reposición será de un mes."),
    Q("w4-t4-q3", "El plazo general para interponer recurso contencioso-administrativo contra un acto expreso que pone fin a la vía administrativa es de:", ["Dos meses desde el día siguiente a la notificación", "Un mes", "Tres meses", "Seis meses"], 0, "Art. 46.1 Ley 29/1998 (LJCA): el plazo para interponer el recurso contencioso-administrativo será de dos meses contados desde el día siguiente al de la notificación o publicación del acto que ponga fin a la vía administrativa."),
  ],
  bossQs: [
    Q("w4-t4-b1", "La revisión de oficio de los actos nulos de pleno derecho (art. 106 Ley 39/2015) requiere preceptivamente:", ["Dictamen favorable del Consejo de Estado u órgano consultivo equivalente de la Comunidad Autónoma", "Sentencia firme del Tribunal Supremo", "Autorización previa de las Cortes Generales", "El voto favorable de 3/5 del Congreso"], 0, "Art. 106.1 Ley 39/2015: las Administraciones Públicas, en cualquier momento, declararán de oficio la nulidad de los actos nulos de pleno derecho, previo dictamen favorable del Consejo de Estado u órgano consultivo equivalente."),
    Q("w4-t4-b2", "¿En qué plazo puede declararse la lesividad para el interés público de un acto anulable favorable a los interesados (art. 107 Ley 39/2015)?", ["En el plazo de cuatro años desde que se dictó el acto", "En cualquier momento sin límite temporal", "En el plazo de un año", "En seis meses"], 0, "Art. 107.2 Ley 39/2015: la declaración de lesividad no podrá adoptarse una vez transcurridos cuatro años desde que se dictó el acto administrativo."),
    Q("w4-t4-b3", "El fenómeno del 'doble silencio' (silencio positivo en alzada regulado en el art. 24.1 Ley 39/2015) se produce cuando:", ["Se interpone recurso de alzada contra la desestimación por silencio administrativo de una solicitud y el órgano de alzada no resuelve en plazo de 3 meses", "Se recurre dos veces el mismo acto ante el Consejo de Ministros", "El acto es anulable dos veces", "La solicitud se presenta en dos registros simultáneos"], 0, "Art. 24.1 párrafo 3º Ley 39/2015: cuando el recurso de alzada se haya interpuesto contra la desestimación por silencio de una solicitud, se entenderá estimado si llega el plazo de resolución sin notificación, salvo excepciones legales."),
  ],
  mini: {
    type: "match",
    title: "Prueba de los Recursos Administrativos",
    prompt: "Relaciona cada recurso con sus plazos y órgano de resolución.",
    pairs: [
      ["Recurso de alzada", "Ante el superior jerárquico; 1 mes para interponer, 3 meses para resolver"],
      ["Recurso potestativo de reposición", "Ante el mismo órgano; 1 mes para interponer, 1 mes para resolver"],
      ["Recurso extraordinario de revisión", "Causas tasadas del art. 125 (documentos decisivos, prevaricación...)"],
      ["Recurso contencioso-administrativo", "Sede judicial (LJCA); plazo general de 2 meses contra actos expresos"],
    ],
  },
  boss: {
    name: "El Juez de la Inadmisibilidad",
    kind: "ghost",
    intro: ["¡Tu recurso está fuera de plazo! ¡El acto ha ganado firmeza inatacable y no hay nada que hacer!"],
    defeat: ["¡Demostraste que el acto era nulo de pleno derecho ex art. 106 y no prescribe jamás!"],
  },
  summary: [
    "Revisión de oficio (art. 106): actos nulos (art. 47), en cualquier momento, dictamen favorable vinculante Consejo de Estado.",
    "Declaración de lesividad (art. 107): actos anulables favorables, límite 4 años, previa a impugnación ante el Contencioso.",
    "Alzada (arts. 121-122): actos que no ponen fin; interponer en 1 mes; resolver en 3 meses; regla de doble silencio positivo.",
    "Reposición (arts. 123-124): actos que ponen fin a la vía; interponer en 1 mes; resolver en 1 mes.",
    "Contencioso (LJCA 29/1998): 2 meses acto expreso, 6 meses acto presunto (según jurisprudencia constitucional).",
  ],
};

export const W4_T5: MiniWorldDef = {
  id: "derecho-t5",
  num: 5,
  temaTitle: "Tema 5: Contratos del sector público (Ley 9/2017 - LCSP)",
  name: "Bolsa de Contratación Pública",
  emoji: "📑",
  theme: "derecho",
  color: "#4a235a",
  enemy: "sello",
  enemyName: "Sellos burocráticos",
  npcs: [
    {
      name: "Señor Licitador",
      role: "Contratos del sector público (LCSP)",
      look: { skin: "#f0bf94", hair: "#6e2c00", hairStyle: "short", shirt: "#d4ac0d", pants: "#2e4053", acc: ["hardhat", "tie"], accColor: "#e67e22" },
      pages: [
        "La Ley 9/2017 de Contratos del Sector Público (LCSP) transpira las directivas europeas bajo los principios de libertad de acceso, publicidad, transparencia, no discriminación e integridad.",
        "Tipos de contratos típicos: Obras, Concesión de obras, Concesión de servicios, Suministro y Servicios.",
        "Contratos menores (art. 118 LCSP): obras de valor estimado inferior a 40.000 euros; suministros y servicios de valor estimado inferior a 15.000 euros (IVA excluido). Duración máxima de 1 año sin posibilidad de prórroga.",
        "Procedimientos de adjudicación: Abierto (ordinario y simplificado), Restringido, Licitación con negociación, Diálogo competitivo, Asociación para la innovación y Negociado sin publicidad (supuestos excepcionales y tasados).",
        "Garantías: Recurso especial en materia de contratación (ante el Tribunal Administrativo Central de Recursos Contractuales - TACRC) gratuito y con suspensión automática de la formalización.",
      ],
    },
  ],
  blockQs: [
    Q("w4-t5-q1", "¿Cuál es el importe máximo del valor estimado (IVA excluido) para un contrato menor de servicios o suministros (art. 118 LCSP)?", ["15.000 euros", "40.000 euros", "18.000 euros", "50.000 euros"], 0, "Art. 118.1 LCSP: se consideran contratos menores los contratos de valor estimado inferior a 40.000 euros, cuando se trate de contratos de obras, o a 15.000 euros, cuando se trate de contratos de suministro o de servicios."),
    Q("w4-t5-q2", "¿Cuál es la duración máxima que puede tener un contrato menor según la Ley de Contratos del Sector Público?", ["Un año, sin que puedan ser objeto de prórroga", "Dos años con prórroga de un año", "Seis meses renovables", "Cuatro años"], 0, "Art. 29.8 LCSP: los contratos menores regulados en el art. 118 no podrán tener una duración superior a un año ni ser objeto de prórroga."),
    Q("w4-t5-q3", "¿Cuál de los siguientes es el procedimiento ordinario de adjudicación de contratos en el que cualquier empresario interesado puede presentar una proposición?", ["Procedimiento abierto", "Procedimiento negociado sin publicidad", "Diálogo competitivo", "Asociación para la innovación"], 0, "Art. 156 LCSP: en el procedimiento abierto todo empresario interesado podrá presentar una proposición, quedando excluida toda negociación de los términos del contrato."),
  ],
  bossQs: [
    Q("w4-t5-b1", "En los contratos del sector público, el órgano especializado e independiente adscrito al Ministerio de Hacienda que resuelve el recurso especial en el ámbito estatal es:", ["El Tribunal Administrativo Central de Recursos Contractuales (TACRC)", "La Comisión Nacional de los Mercados y la Competencia (CNMC)", "La Junta Consultiva de Contratación Pública del Estado", "El Consejo de Estado"], 0, "Art. 45 LCSP: el Tribunal Administrativo Central de Recursos Contractuales es el órgano especializado que resuelve los recursos especiales en materia de contratación en el sector público estatal."),
    Q("w4-t5-b2", "La interposición del recurso especial en materia de contratación contra el acto de adjudicación produce:", ["La suspensión automática de la formalización del contrato", "La indemnización inmediata al licitador perdedor", "La anulación definitiva de los pliegos", "La repetición obligatoria de todo el concurso"], 0, "Art. 53 LCSP: cuando el recurso se interponga contra el acto de adjudicación, la formalización del contrato quedará suspendida automáticamente hasta la resolución del recurso."),
    Q("w4-t5-b3", "La alteración de las condiciones de un contrato público durante su ejecución (modificación contractual) solo es admisible según la LCSP cuando:", ["Esté prevista expresamente en los pliegos (hasta máx 20%) o concurran causas imprevistas tasadas en la ley", "El contratista lo pida por escrito unilateralmente", "El precio del mercado baje", "Siempre que no supere el 50% sin justificación"], 0, "Arts. 204 y 205 LCSP: la modificación del contrato exige que esté prevista en los pliegos (máx 20%) o responda a circunstancias sobrevenidas e imprevisibles con estricto límite legal."),
  ],
  mini: {
    type: "match",
    title: "Prueba de la Contratación Pública",
    prompt: "Empareja cada figura contractual con sus umbrales o rasgos característicos.",
    pairs: [
      ["Contrato menor de obras", "Inferior a 40.000 € y duración máxima 1 año"],
      ["Contrato menor de servicios / suministros", "Inferior a 15.000 € y duración máxima 1 año"],
      ["Procedimiento abierto", "Cualquier empresario puede licitar sin negociación"],
      ["TACRC", "Órgano independiente que resuelve el recurso especial en contratación"],
    ],
  },
  boss: {
    name: "El Adjudicatario a Dedo",
    kind: "ghost",
    intro: ["¡Trocearé los contratos de obras de 200.000 € en contratos menores para no licitar! ¡Nadie me audita!"],
    defeat: ["¡La prohibición legal de fraccionamiento del art. 99 LCSP y el TACRC han anulado tus adjudicaciones!"],
  },
  summary: [
    "Ley 9/2017 (LCSP): principios de concurrencia, publicidad, transparencia, integridad e igualdad.",
    "Tipos: obras, concesión obras, concesión servicios, suministro y servicios. Prohibición de fraccionamiento indebido.",
    "Contrato menor (art. 118): obras < 40.000 €; suministros y servicios < 15.000 €. Máximo 1 año, sin prórrogas.",
    "Procedimientos: abierto (ordinario y simplificado), restringido, licitación con negociación, diálogo competitivo, negociado sin publicidad.",
    "Garantías: Recurso especial en materia de contratación (TACRC, suspensión automática de formalización).",
  ],
};

export const W4_T6: MiniWorldDef = {
  id: "derecho-t6",
  num: 6,
  temaTitle: "Tema 6: Expropiación forzosa, patrimonio público y responsabilidad patrimonial",
  name: "Cámara del Justiprecio y la Indemnización",
  emoji: "🏛️",
  theme: "derecho",
  color: "#3e1c4a",
  enemy: "sello",
  enemyName: "Sellos burocráticos",
  npcs: [
    {
      name: "Interventora Patrimonial",
      role: "Expropiación, Patrimonio y Responsabilidad (Leyes 40/2015 y 33/2003)",
      look: { skin: "#f1c7a0", hair: "#4a235a", hairStyle: "short", shirt: "#5b2c6f", pants: "#1a0c20", acc: ["glasses", "badge"], accColor: "#ffd84d" },
      pages: [
        "Expropiación forzosa (art. 33.3 CE y Ley de 16 de diciembre de 1954): privación singular de bienes y derechos por causa justificada de utilidad pública o interés social, mediante la correspondiente indemnización (justiprecio) y de conformidad con las leyes. Fases: declaración de utilidad pública, necesidad de ocupación, determinación del justiprecio (Jurado Provincial de Expropiación) y pago y ocupación.",
        "Procedimiento de urgencia (art. 52 LEF): permite la ocupación inmediata de los bienes antes de fijar el justiprecio, previo depósito previo.",
        "Patrimonio de las AAPP (Ley 33/2003): Bienes de dominio público o demaniales (afectos al uso general o servicio público: inalienables, imprescriptibles e inembargables ex art. 132 CE) y Bienes patrimoniales o de propios (de titularidad pública pero no demaniales; régimen de Derecho privado).",
        "Responsabilidad patrimonial (arts. 32-35 Ley 40/2015 y art. 67 Ley 39/2015): los particulares tienen derecho a ser indemnizados por toda lesión en sus bienes y derechos consecuencia del funcionamiento normal o anormal de los servicios públicos. Daño antijurídico, efectivo, evaluable e individualizado. Plazo para reclamar: 1 año.",
      ],
    },
  ],
  blockQs: [
    Q("w4-t6-q1", "Según el art. 132.1 de la CE y la Ley 33/2003, los bienes de dominio público se inspiran en los principios de:", ["Inalienabilidad, imprescriptibilidad e inembargabilidad", "Rentabilidad económica y libre venta", "Libre enajenación mediante subasta", "Transmisibilidad mercantil obligatoria"], 0, "Art. 132.1 CE: la ley regulará el régimen jurídico de los bienes de dominio público y de los comunales, inspirándose en los principios de inalienabilidad, imprescriptibilidad e inembargabilidad, así como su desafectación."),
    Q("w4-t6-q2", "¿Cuál es el plazo legal que tienen los particulares para reclamar la responsabilidad patrimonial a la Administración (art. 67.1 Ley 39/2015)?", ["Un año desde que se produjo el hecho lesivo o se manifestó su efecto", "Tres meses", "Dos años", "Seis meses"], 0, "Art. 67.1 Ley 39/2015: el derecho a reclamar prescribirá al año de producido el hecho o el acto que motive la indemnización o de manifestarse su efecto lesivo (en daños físicos o psíquicos, desde la curación o determinación del alcance de las secuelas)."),
    Q("w4-t6-q3", "En el procedimiento de expropiación forzosa, ¿qué órgano colegiado fija el justiprecio cuando no hay mutuo acuerdo entre Administración y expropiado?", ["El Jurado Provincial de Expropiación", "El Tribunal de Cuentas", "El Defensor del Pueblo", "El Consejo de Ministros"], 0, "Arts. 31 y siguientes LEF: el Jurado Provincial de Expropiación es el órgano administrativo colegiado competente para fijar el justiprecio de los bienes y derechos expropiados a falta de mutuo acuerdo."),
  ],
  bossQs: [
    Q("w4-t6-b1", "Para que proceda la responsabilidad patrimonial de la Administración, el daño alegado por el particular debe ser:", ["Efectivo, evaluable económicamente e individualizado con relación a una persona o grupo de personas", "Cualquier molestia hipotética o futura", "Siempre derivado de una falta penal de un funcionario", "Exclusivamente un daño físico"], 0, "Art. 32.2 Ley 40/2015: el daño alegado habrá de ser efectivo, evaluable económicamente e individualizado con relación a una persona o grupo de personas."),
    Q("w4-t6-b2", "En el procedimiento expropiatorio urgente del art. 52 de la Ley de Expropiación Forzosa, la ocupación del bien:", ["Se produce con carácter previo a la fijación y pago del justiprecio definitivo", "Solo puede realizarse diez años después de pagar", "Requiere sentencia judicial de la Sala de lo Contencioso", "No da derecho a indemnización por perjuicios de rápida ocupación"], 0, "Art. 52 LEF: declarada la urgente ocupación, se efectúa el depósito previo e indemnización por perjuicios de rápida ocupación y la Administración procede a la ocupación inmediata del bien sin esperar al justiprecio definitivo."),
    Q("w4-t6-b3", "La afectación en el Derecho patrimonial público es el acto formal por el cual:", ["Un bien de titularidad pública patrimonial pasa a integrarse en el dominio público por vincularse a un uso o servicio público", "Un bien privado es donado a una ONG", "Se subasta un edificio ministerial para pagar deudas", "Se inmatricula un inmueble en el Registro Mercantil"], 0, "Art. 65 Ley 33/2003: la afectación determina la vinculación de los bienes y derechos patrimoniales a un uso general o a un servicio público, y su consiguiente integración en el dominio público."),
  ],
  mini: {
    type: "match",
    title: "Prueba del Régimen Patrimonial y de Responsabilidad",
    prompt: "Relaciona cada concepto patrimonial o expropiatorio con su régimen jurídico.",
    pairs: [
      ["Bienes demaniales", "Inalienables, imprescriptibles e inembargables (uso o servicio público)"],
      ["Bienes patrimoniales", "Bienes de la Administración regidos por el Derecho privado en su tráfico"],
      ["Responsabilidad patrimonial", "Plazo de 1 año; daño antijurídico, efectivo, evaluable e individualizado"],
      ["Expropiación urgente (art. 52)", "Ocupación inmediata previa a la fijación del justiprecio"],
    ],
  },
  boss: {
    name: "El Expropiador Ilegal",
    kind: "ghost",
    intro: ["¡Ocuparé tus terrenos sin declarar utilidad pública ni pagarte justiprecio alguno!"],
    defeat: ["¡La garantía expropiatoria del art. 33.3 CE y la vía de hecho han sido fulminadas por los tribunales!"],
  },
  summary: [
    "Expropiación (art. 33.3 CE y LEF de 1954): causa de utilidad pública/interés social, necesidad ocupación, justiprecio (Jurado Provincial) y pago. Procedimiento de urgencia (art. 52 LEF ocupación previa).",
    "Bienes públicos (Ley 33/2003): Demaniales (afectos a uso/servicio público; inalienables, imprescriptibles, inembargables) vs Patrimoniales.",
    "Afectación, desafectación y mutación demanial.",
    "Responsabilidad patrimonial (arts. 32-35 Ley 40/2015): funcionamiento normal o anormal, daño antijurídico (no deber de soportarlo), evaluable, efectivo, individualizado. Plazo prescripción: 1 año.",
  ],
};

/* ==================== MUNDO 4 (BLOQUE IV COMPLETO) ==================== */

export const W4: WorldDef = {
  id: "derecho",
  num: 4,
  bloque: "Bloque IV",
  title: "Derecho administrativo general",
  name: "Ministerio del BOE",
  emoji: "⚖️",
  theme: "derecho",
  color: "#8e44ad",
  enemy: "sello",
  enemyName: "Sellos burocráticos",
  temas: [
    "Tema 1: Fuentes del Derecho administrativo y la potestad reglamentaria",
    "Tema 2: El acto administrativo: eficacia, notificación y validez",
    "Tema 3: El procedimiento administrativo común y el silencio",
    "Tema 4: Revisión de oficio, recursos administrativos y vía contenciosa",
    "Tema 5: Contratos del sector público (Ley 9/2017 - LCSP)",
    "Tema 6: Expropiación forzosa, patrimonio público y responsabilidad patrimonial",
  ],
  miniWorlds: [W4_T1, W4_T2, W4_T3, W4_T4, W4_T5, W4_T6],
  npcs: [
    W4_T1.npcs[0],
    W4_T2.npcs[0],
    W4_T3.npcs[0],
    W4_T5.npcs[0],
  ],
  blockQs: [
    W4_T1.blockQs[0],
    W4_T2.blockQs[0],
    W4_T3.blockQs[0],
    W4_T4.blockQs[0],
    W4_T5.blockQs[0],
    W4_T6.blockQs[1],
  ],
  bossQs: [
    W4_T1.bossQs[0],
    W4_T2.bossQs[0],
    W4_T3.bossQs[0],
    W4_T4.bossQs[0],
    W4_T5.bossQs[0],
    W4_T6.bossQs[0],
  ],
  mini: {
    type: "order",
    title: "Gran Desafío del Bloque IV: La Jerarquía de Fuentes del Derecho",
    prompt: "Ordena las fuentes del Derecho administrativo de mayor a menor rango normativo.",
    items: [
      "Constitución Española de 1978",
      "Tratados internacionales válidamente celebrados",
      "Leyes orgánicas, leyes ordinarias y normas del Gobierno con fuerza de ley",
      "Reales Decretos aprobados por el Consejo de Ministros",
      "Órdenes Ministeriales",
      "Resoluciones administrativas particulares (sometidas a inderogabilidad singular)",
    ],
  },
  boss: {
    name: "El Silencio Administrativo",
    kind: "ghost",
    intro: [
      "............ (El fantasma del silencio paraliza tu expediente administrativo desde hace meses.)",
      "¿Positivo o negativo? ¿Nulo o anulable? ¡Solo quien domine los 6 temas del Derecho Administrativo podrá obtener resolución favorable!",
    ],
    defeat: ["... ... (por fin una resolución expresa motivada) ...¡Has demostrado un dominio insuperable de las Leyes 39 y 40/2015!"],
  },
  summary: [
    "Fuentes: CE > Tratados > Ley (LO mayoría absoluta; ordinaria; Decreto-ley en 30 d; Decreto legislativo) > Reglamentos. Inderogabilidad singular art. 37.",
    "Acto (Leyes 39/2015): notificación en 10 días; electrónica rechazada a los 10 días naturales. Nulidad (art. 47) vs Anulabilidad (art. 48).",
    "Procedimiento: plazos resolución máx 6 meses (supletorio 3 meses). Silencio: positivo regla general; excepciones de negativo (art. 24). Cómputo días hábiles.",
    "Revisión y recursos: Revisión de oficio nulos (art. 106 en cualquier momento). Alzada (1 mes interponer, 3 meses resolver), Reposición (1 mes interponer, 1 mes resolver), Contencioso (2 meses).",
    "Contratos (LCSP 9/2017): abierto, restringido; menores: obras <40.000 €, servicios <15.000 € (máx 1 año sin prórroga). TACRC.",
    "Patrimonio y responsabilidad: demaniales (inalienables, imprescriptibles, inembargables). Expropiación (LEF 1954, justiprecio). Responsabilidad (art. 32 Ley 40/2015, prescripción 1 año).",
  ],
};
