import type { MiniWorldDef, WorldDef } from "./types";
import { Q } from "./contentBloque1";

/* ==================== BLOQUE II: MINI-MUNDOS ==================== */

export const W2_T1: MiniWorldDef = {
  id: "ue-t1",
  num: 1,
  temaTitle: "Tema 1: Orígenes, Tratados y ampliaciones de la UE",
  name: "Galería de los Tratados",
  emoji: "📜",
  theme: "ue",
  color: "#2f6fe0",
  enemy: "estrella",
  enemyName: "Estrellas enfadadas",
  npcs: [
    {
      name: "Madame Tratados",
      role: "Evolución histórica y Tratados",
      look: { skin: "#f1c7a0", hair: "#8a8a99", hairStyle: "bun", shirt: "#2956b8", pants: "#1c2c5c", acc: ["glasses", "scarf"], accColor: "#f4d03f" },
      pages: [
        "¡Bienvenida a Eurolandia! El proceso de integración se inició con la CECA (Tratado de París de 1951) y con los Tratados de Roma de 1957, creadores de la CEE y EURATOM.",
        "Hitos de reforma: Acta Única Europea (1986); Maastricht (firmado en 1992, en vigor el 1 de noviembre de 1993, que creó la Unión Europea y la UEM); Ámsterdam (1997); Niza (2001); y Lisboa (firmado en 2007, en vigor el 1 de diciembre de 2009).",
        "El Tratado de Lisboa otorgó a la UE personalidad jurídica única y suprimió la estructura de pilares. La Unión se fundamenta en el TUE y el TFUE, que tienen el mismo valor jurídico.",
        "España se adhirió el 1 de enero de 1986 junto a Portugal. Actualmente la UE cuenta con 27 Estados miembros tras la retirada del Reino Unido el 31 de enero de 2020 (art. 50 TUE).",
      ],
    },
  ],
  blockQs: [
    Q("w2-t1-q1", "¿En qué fecha entró en vigor el Tratado de Maastricht, que creó formalmente la Unión Europea?", ["1 de enero de 1992", "1 de noviembre de 1993", "1 de enero de 1986", "1 de diciembre de 2009"], 1, "El Tratado de Maastricht se firmó el 7 de febrero de 1992 y entró en vigor el 1 de noviembre de 1993, creando la Unión Europea y la ciudadanía europea."),
    Q("w2-t1-q2", "¿En qué fecha se produjo la adhesión efectiva de España a las Comunidades Europeas?", ["1 de enero de 1986", "6 de diciembre de 1978", "1 de noviembre de 1993", "12 de junio de 1985"], 0, "España firmó el Tratado de Adhesión el 12 de junio de 1985 y su ingreso efectivo tuvo lugar el 1 de enero de 1986, junto con Portugal."),
    Q("w2-t1-q3", "El Tratado de Lisboa entró en vigor el:", ["1 de diciembre de 2009", "1 de enero de 2007", "1 de mayo de 2004", "1 de noviembre de 2010"], 0, "Firmado el 13 de diciembre de 2007, entró en vigor el 1 de diciembre de 2009. Dotó a la UE de personalidad jurídica propia y reformó el TUE y el TFUE."),
  ],
  bossQs: [
    Q("w2-t1-b1", "¿Cuál es el número mínimo de Estados miembros exigido para entablar una cooperación reforzada (art. 20 TUE)?", ["9 Estados miembros", "5 Estados miembros", "14 Estados miembros", "La mitad de los Estados miembros"], 0, "Art. 20.2 TUE: la decisión de autorizar una cooperación reforzada será adoptada por el Consejo como último recurso y requerirá la participación de al menos nueve Estados miembros."),
    Q("w2-t1-b2", "El procedimiento de retirada voluntaria de un Estado miembro de la Unión Europea se regula en:", ["El artículo 50 del Tratado de la Unión Europea (TUE)", "El artículo 7 del TUE", "El artículo 288 del TFUE", "La Carta de los Derechos Fundamentales"], 0, "El art. 50 TUE establece el derecho de todo Estado miembro a decidir retirarse de la Unión de conformidad con sus normas constitucionales (aplicado con el Brexit)."),
    Q("w2-t1-b3", "¿Cuáles son los tratados constitutivos de igual valor jurídico en los que se fundamenta la UE tras Lisboa?", ["El Tratado de la Unión Europea (TUE) y el Tratado de Funcionamiento de la Unión Europea (TFUE)", "El Tratado de Roma y el Tratado de Maastricht", "La Constitución Europea y el Tratado de Niza", "El Acta Única Europea y la Carta de Niza"], 0, "Art. 1 TUE: la Unión se fundamenta en el Tratado de la Unión Europea y en el Tratado de Funcionamiento de la Unión Europea. Ambos tratados tienen el mismo valor jurídico."),
  ],
  mini: {
    type: "order",
    title: "Prueba de la Cronología de los Tratados Europeos",
    prompt: "Ordena cronológicamente los tratados constitutivos y modificativos de la UE.",
    items: [
      "Tratado de París (CECA, 1951)",
      "Tratados de Roma (CEE y EURATOM, 1957)",
      "Acta Única Europea (1986)",
      "Tratado de Maastricht (TUE, 1992/1993)",
      "Tratado de Ámsterdam (1997/1999)",
      "Tratado de Niza (2001/2003)",
      "Tratado de Lisboa (2007/2009)",
    ],
  },
  boss: {
    name: "El Cronista de Roma",
    kind: "veto",
    intro: ["¡Soy la memoria histórica de Europa! Demuestra que conoces la evolución desde la CECA hasta Lisboa."],
    defeat: ["¡Impresionante! El camino hacia una unión cada vez más estrecha te pertenece."],
  },
  summary: [
    "Orígenes: CECA 1951 (París), CEE y EURATOM 1957 (Roma). España ingresa el 01/01/1986.",
    "Tratados modificativos: Acta Única 1986, Maastricht 1992/93 (crea la UE), Ámsterdam 1997, Niza 2001, Lisboa 2007/2009.",
    "Lisboa: personalidad jurídica única, suprime pilares, TUE + TFUE con idéntico rango y valor legal.",
    "Retirada art. 50 TUE (Brexit 31/01/2020; 27 Estados actuales). Cooperaciones reforzadas: mínimo 9 Estados (art. 20 TUE).",
  ],
};

export const W2_T2: MiniWorldDef = {
  id: "ue-t2",
  num: 2,
  temaTitle: "Tema 2: El Consejo Europeo y el Consejo de la UE",
  name: "Torre de la Cumbre Europea",
  emoji: "🏛️",
  theme: "ue",
  color: "#2858b8",
  enemy: "estrella",
  enemyName: "Estrellas enfadadas",
  npcs: [
    {
      name: "Presidenta de la Cumbre",
      role: "Consejo Europeo y Consejo de la UE",
      look: { skin: "#e5b48a", hair: "#2b2b2b", hairStyle: "short", shirt: "#1f4287", pants: "#112244", acc: ["badge", "glasses"], accColor: "#ffd84d" },
      pages: [
        "El Consejo Europeo (art. 15 TUE) está compuesto por los Jefes de Estado o de Gobierno de los Estados miembros, así como por su Presidente y el Presidente de la Comisión. Participa en sus trabajos el Alto Representante.",
        "Su función: define las orientaciones y prioridades políticas generales. ¡No ejerce función legislativa! Su Presidente es elegido por mayoría cualificada por 2 años y medio, renovable una sola vez.",
        "El Consejo (de la Unión Europea, art. 16 TUE) reúne a los ministros de los Estados miembros. Ejerce conjuntamente con el Parlamento las funciones legislativa y presupuestaria.",
        "Votación en el Consejo: la regla general es la Mayoría Cualificada (art. 16.4 TUE): al menos el 55% de los Estados miembros (mínimo 15) que representen como mínimo el 65% de la población de la UE.",
        "La minoría de bloqueo debe incluir al menos a 4 miembros del Consejo. La Presidencia del Consejo rota cada 6 meses entre los Estados miembros (salvo la de Asuntos Exteriores, que preside el Alto Representante).",
      ],
    },
  ],
  blockQs: [
    Q("w2-t2-q1", "¿Quién ostenta la Presidencia del Consejo Europeo y cuál es la duración de su mandato?", ["Un Presidente elegido por el propio Consejo Europeo por 2 años y medio, renovable una vez", "El Presidente de la Comisión Europea", "El Jefe de Gobierno del Estado que ostenta la presidencia semestral", "El Presidente del Parlamento Europeo"], 0, "Art. 15.5 TUE: el Consejo Europeo elegirá a su Presidente por mayoría cualificada para un mandato de dos años y medio, que podrá renovarse una sola vez."),
    Q("w2-t2-q2", "¿Qué porcentaje de Estados y de población exige la mayoría cualificada ordinaria en el Consejo de la UE?", ["55% de los Estados miembros (al menos 15) que reúnan el 65% de la población de la UE", "50% de Estados y 50% de población", "Dos tercios de Estados y tres quintos de población", "75% de Estados miembros"], 0, "Art. 16.4 TUE: a partir del 1 de noviembre de 2014, la mayoría cualificada se define como un mínimo del 55% de los miembros del Consejo que incluya al menos a quince de ellos y represente a Estados que reúnan al menos el 65% de la población de la Unión."),
    Q("w2-t2-q3", "La minoría de bloqueo para frenar una decisión por mayoría cualificada en el Consejo debe incluir como mínimo:", ["Al menos cuatro Estados miembros del Consejo", "Al menos tres Estados miembros", "Dos Estados con derecho de veto", "Cualquier Estado con más del 20% de población"], 0, "Art. 16.4 TUE: la minoría de bloqueo estará compuesta por al menos cuatro miembros del Consejo, a falta de lo cual la mayoría cualificada se considerará alcanzada."),
  ],
  bossQs: [
    Q("w2-t2-b1", "¿Cuál de las siguientes formaciones del Consejo de la UE está presidida de forma permanente por el Alto Representante?", ["El Consejo de Asuntos Exteriores", "El Consejo de Asuntos Generales", "El Consejo ECOFIN", "El Consejo de Justicia e Interior"], 0, "Art. 18.3 TUE: el Alto Representante de la Unión para Asuntos Exteriores y Política de Seguridad presidirá el Consejo de Asuntos Exteriores."),
    Q("w2-t2-b2", "¿Ejerce el Consejo Europeo funciones legislativas?", ["No, no ejerce función legislativa alguna (art. 15.1 TUE)", "Sí, aprueba los reglamentos en primera lectura", "Solo en materia penal", "Sí, conjuntamente con el TJUE"], 0, "Art. 15.1 TUE: el Consejo Europeo dará a la Unión los impulsos necesarios para su desarrollo y definirá sus orientaciones y prioridades políticas generales. No ejercerá función legislativa alguna."),
    Q("w2-t2-b3", "La periodicidad de la Presidencia rotatoria del Consejo de la Unión Europea es de:", ["6 meses", "1 año", "2 años y medio", "3 meses"], 0, "Art. 16.9 TUE: la presidencia de las formaciones del Consejo, con excepción de Asuntos Exteriores, será desempeñada por los representantes de los Estados miembros en el Consejo mediante un sistema de rotación igual por semestres."),
  ],
  mini: {
    type: "match",
    title: "Prueba de las Instituciones del Consejo",
    prompt: "Relaciona cada concepto con el Consejo Europeo o con el Consejo de la UE.",
    pairs: [
      ["Consejo Europeo", "Reúne a Jefes de Estado o de Gobierno y define prioridades sin legislar"],
      ["Presidente del Consejo Europeo", "Mandato de 2 años y medio renovable una vez"],
      ["Consejo de la UE (Ministros)", "Ejerce la función legislativa y presupuestaria con el Parlamento"],
      ["Mayoría cualificada", "55% de Estados miembros y 65% de la población"],
    ],
  },
  boss: {
    name: "El Canciller de la Minoría de Bloqueo",
    kind: "veto",
    intro: ["¡Pretendo bloquear la votación del Consejo! ¿Conoces las reglas de la mayoría cualificada para derrotarme?"],
    defeat: ["¡Alcanzaste el 55% de Estados y el 65% de la población! Tu propuesta ha sido adoptada."],
  },
  summary: [
    "Consejo Europeo (art. 15 TUE): Jefes de Estado/Gobierno + Presidente + Pte Comisión. No legisla; define impulsos y prioridades. Presidente: 2,5 años (renovable una vez).",
    "Consejo de la UE (art. 16 TUE): nivel ministerial. Legisla y aprueba presupuestos con el PE. Presidencia rotatoria semestral (excepto Exteriores: Alto Representante).",
    "Mayoría cualificada (art. 16.4 TUE): 55% de Estados (mínimo 15) que sumen el 65% de la población de la UE.",
    "Minoría de bloqueo: mínimo 4 Estados miembros.",
  ],
};

export const W2_T3: MiniWorldDef = {
  id: "ue-t3",
  num: 3,
  temaTitle: "Tema 3: La Comisión Europea",
  name: "Sede del Berlaymont",
  emoji: "🇪🇺",
  theme: "ue",
  color: "#214aa0",
  enemy: "estrella",
  enemyName: "Estrellas enfadadas",
  npcs: [
    {
      name: "Comisario Berlay",
      role: "Comisión Europea",
      look: { skin: "#d9a577", hair: "#222233", hairStyle: "short", shirt: "#f0f0f5", pants: "#232b4d", acc: ["tie", "badge"], accColor: "#2f6fe0" },
      pages: [
        "La Comisión Europea (art. 17 TUE) promueve el interés general de la Unión y toma las iniciativas adecuadas con este fin.",
        "Posee el monopolio casi exclusivo de la iniciativa legislativa: salvo que los Tratados dispongan otra cosa, los actos legislativos solo podrán adoptarse a propuesta de la Comisión.",
        "Es la 'guardiana de los Tratados': vela por la aplicación de los Tratados y de las medidas adoptadas por las instituciones; supervisa la aplicación del Derecho de la UE bajo el control del TJUE (recurso por incumplimiento, art. 258 TFUE).",
        "Composición: un nacional de cada Estado miembro (27 comisarios), incluidos su Presidente y el Alto Representante (que es Vicepresidente de la Comisión). Mandato de 5 años. Colegialidad e independencia absoluta de sus miembros.",
      ],
    },
  ],
  blockQs: [
    Q("w2-t3-q1", "¿Cuál es la función institucional primordial de la Comisión Europea respecto a la legislación comunitaria?", ["Monopolio de la iniciativa legislativa en el procedimiento ordinario", "Aprobación definitiva de las directivas en solitario", "Sanción y promulgación obligatoria", "Control de constitucionalidad previo de las leyes nacionales"], 0, "Art. 17.2 TUE: los actos legislativos de la Unión solo podrán adoptarse a propuesta de la Comisión, salvo que los Tratados dispongan otra cosa."),
    Q("w2-t3-q2", "¿Cuánto dura el mandato de los miembros de la Comisión Europea?", ["5 años", "4 años", "6 años", "2 años y medio"], 0, "Art. 17.3 TUE: el mandato de la Comisión será de cinco años, coincidente con la legislatura del Parlamento Europeo."),
    Q("w2-t3-q3", "Por qué motivo se conoce comúnmente a la Comisión Europea como la 'guardiana de los Tratados'?", ["Porque vela por la aplicación de los Tratados y del Derecho de la UE bajo el control del TJUE", "Porque custodia físicamente los Tratados originales en Roma", "Porque redacta las sentencias del Tribunal de Justicia", "Porque nombra a los jueces del TJUE"], 0, "Art. 17.1 TUE: la Comisión velará por que se apliquen los Tratados y las medidas adoptadas por las instituciones en virtud de éstos, supervisando la aplicación del Derecho de la Unión."),
  ],
  bossQs: [
    Q("w2-t3-b1", "¿Cómo se elige al Presidente de la Comisión Europea según el art. 17.7 TUE?", ["Propuesto por el Consejo Europeo por mayoría cualificada y elegido por el Parlamento Europeo por mayoría de los miembros que lo componen", "Elegido por votación popular directa de los ciudadanos de la UE", "Designado por rotación entre los 27 Estados", "Nombrado directamente por el TJUE"], 0, "Art. 17.7 TUE: el Consejo Europeo propone candidato teniendo en cuenta las elecciones al PE; el candidato es elegido por el Parlamento Europeo por mayoría de los miembros que lo componen."),
    Q("w2-t3-b2", "El Parlamento Europeo puede obligar a la dimisión colectiva de la Comisión mediante la aprobación de una:", ["Moción de censura por mayoría de 2/3 de los votos emitidos que representen la mayoría de los diputados", "Cuestión prejudicial ante el TJUE", "Resolución ordinaria por mayoría simple", "Moción de reprobación individual"], 0, "Art. 234 TFUE: si la moción de censura es aprobada por mayoría de dos tercios de los votos emitidos que representen a su vez la mayoría de los diputados del Parlamento, los miembros de la Comisión deberán dimitir colectivamente."),
    Q("w2-t3-b3", "El Alto Representante de la Unión para Asuntos Exteriores y Política de Seguridad es nombrado por:", ["El Consejo Europeo con la aprobación del Presidente de la Comisión", "El Parlamento Europeo en solitario", "La Asamblea General de la ONU", "El Tribunal de Justicia de la UE"], 0, "Art. 18.1 TUE: el Consejo Europeo nombrará al Alto Representante por mayoría cualificada, con la aprobación del Presidente de la Comisión."),
  ],
  mini: {
    type: "order",
    title: "Prueba de Nombramiento de la Comisión",
    prompt: "Ordena los pasos para el nombramiento de la Comisión Europea (art. 17.7 TUE).",
    items: [
      "El Consejo Europeo propone candidato a Presidente tras las elecciones al PE",
      "El Parlamento Europeo elige al Presidente por mayoría de miembros que lo componen",
      "El Consejo y el Presidente electo adoptan la lista de los demás Comisarios propuestos",
      "Audiencias de evaluación de los comisarios designados ante las comisiones del Parlamento",
      "Votación de investidura colegiada del Parlamento y nombramiento por el Consejo Europeo",
    ],
  },
  boss: {
    name: "El Comisario Disidente",
    kind: "veto",
    intro: ["¡Quiero actuar en beneficio de mi propio país y no de la Unión! Demuestra que conoces la independencia de la Comisión."],
    defeat: ["¡El principio de colegialidad e interés general europeo ha triunfado!"],
  },
  summary: [
    "Comisión Europea (art. 17 TUE): 27 miembros (1 por Estado), mandato 5 años, sede en Bruselas (edificio Berlaymont).",
    "Funciones: monopolio de la iniciativa legislativa, guardiana de los Tratados (art. 258 TFUE recurso de incumplimiento), ejecución del presupuesto y representación exterior (salvo PESC).",
    "Elección: Consejo Europeo propone, Parlamento elige por mayoría de miembros componentes. Moción de censura del PE (art. 234 TFUE: 2/3 votos y mayoría diputados).",
    "Alto Representante (art. 18 TUE): Vicepresidente de la Comisión y presidente del Consejo de Asuntos Exteriores.",
  ],
};

export const W2_T4: MiniWorldDef = {
  id: "ue-t4",
  num: 4,
  temaTitle: "Tema 4: Parlamento Europeo, TJUE, Tribunal de Cuentas y BCE",
  name: "Corte de Estrasburgo y Luxemburgo",
  emoji: "⚖️",
  theme: "ue",
  color: "#1d3d82",
  enemy: "estrella",
  enemyName: "Estrellas enfadadas",
  npcs: [
    {
      name: "Eurodiputada Lex",
      role: "Parlamento Europeo, TJUE, Cuentas y BCE",
      look: { skin: "#f3c9a0", hair: "#c0392b", hairStyle: "curly", shirt: "#f4d03f", pants: "#2c3e8c", acc: ["headset"], accColor: "#222" },
      pages: [
        "El Parlamento Europeo (art. 14 TUE) representa a la ciudadanía europea. Elegido por sufragio universal directo cada 5 años. Máximo 750 diputados más el Presidente (criterio de proporcionalidad degresiva: min 6, max 96 por Estado). Sede oficial en Estrasburgo.",
        "Tribunal de Justicia de la UE (art. 19 TUE, sede en Luxemburgo): comprende el Tribunal de Justicia (1 juez por Estado y 11 abogados generales) y el Tribunal General (al menos 2 jueces por Estado). Garantiza el respeto del Derecho en la interpretación y aplicación de los Tratados.",
        "Cuestión prejudicial (art. 267 TFUE): mecanismo clave de cooperación con jueces nacionales sobre validez e interpretación del Derecho de la UE.",
        "Banco Central Europeo (BCE, sede en Fráncfort, art. 127 TFUE): objetivo prioritario: la estabilidad de precios. Tribunal de Cuentas Europeo (sede en Luxemburgo, art. 285 TFUE): 1 miembro por Estado, fiscaliza las cuentas y la gestión financiera.",
      ],
    },
  ],
  blockQs: [
    Q("w2-t4-q1", "¿Dónde se encuentra la sede oficial del Parlamento Europeo en la que se celebran las sesiones plenarias mensuales?", ["Estrasburgo", "Bruselas", "Luxemburgo", "Fráncfort"], 0, "Protocolo nº 6 sobre las sedes de las instituciones: el Parlamento Europeo tiene su sede oficial en Estrasburgo, donde se celebran los períodos parciales de sesiones mensuales."),
    Q("w2-t4-q2", "¿Cuál es el objetivo principal asignado al Banco Central Europeo en el art. 127.1 del TFUE?", ["Mantener la estabilidad de precios", "Financiar el déficit público de los Estados", "Emitir deuda pública para infraestructuras", "Controlar las elecciones parlamentarias"], 0, "Art. 127.1 TFUE: el objetivo principal del Sistema Europeo de Bancos Centrales (SEBC) y del BCE es mantener la estabilidad de precios."),
    Q("w2-t4-q3", "La cuestión prejudicial regulada en el art. 267 TFUE puede ser planteada ante el TJUE por:", ["Cualquier órgano jurisdiccional de un Estado miembro", "Cualquier ciudadano particular que presente una demanda", "Exclusivamente el Parlamento Europeo", "Solo la Comisión Europea"], 0, "Art. 267 TFUE: cualquier órgano judicial nacional ante el cual se plantee una duda de interpretación o validez del Derecho de la UE puede pedir al TJUE que se pronuncie."),
  ],
  bossQs: [
    Q("w2-t4-b1", "¿Qué límites fija el Tratado de Lisboa para la composición del Parlamento Europeo (art. 14.2 TUE)?", ["No excederá de setecientos cincuenta diputados más el Presidente, con un mínimo de 6 y un máximo de 96 por Estado", "Exactamente 500 diputados repartidos por igual", "Entre 300 y 600 diputados", "Un máximo de 1000 diputados"], 0, "Art. 14.2 TUE: el número no superará los setecientos cincuenta, más el Presidente. La representación será degresivamente proporcional, con un mínimo de seis y un máximo de noventa y seis escaños por Estado."),
    Q("w2-t4-b2", "¿Cuál es la función esencial de los Abogados Generales en el Tribunal de Justicia de la UE (art. 252 TFUE)?", ["Presentar públicamente, con toda imparcialidad e independencia, conclusiones motivadas sobre los asuntos que requieran su intervención", "Representar jurídicamente a los Estados miembros demandados", "Presidir las salas de deliberación", "Ejecutar las sanciones económicas a los Estados"], 0, "Art. 252 TFUE: el Abogado General presenta conclusiones jurídicas motivadas para auxiliar al Tribunal en la adopción de su sentencia."),
    Q("w2-t4-b3", "¿Por cuánto tiempo son nombrados los miembros del Tribunal de Cuentas Europeo (art. 286 TFUE)?", ["6 años, renovable", "5 años, coincidente con el PE", "4 años", "Vitalicios"], 0, "Art. 286 TFUE: los miembros del Tribunal de Cuentas serán nombrados por un período de seis años por el Consejo, previa consulta al Parlamento Europeo."),
  ],
  mini: {
    type: "match",
    title: "Prueba de las Sedes de los Organismos de la UE",
    prompt: "Empareja cada institución con la ciudad de su sede principal.",
    pairs: [
      ["Parlamento Europeo (plenos oficiales)", "Estrasburgo"],
      ["Tribunal de Justicia de la UE (TJUE)", "Luxemburgo"],
      ["Banco Central Europeo (BCE)", "Fráncfort"],
      ["Tribunal de Cuentas Europeo", "Luxemburgo"],
      ["Frontex (Guardia Europea de Fronteras)", "Varsovia"],
    ],
  },
  boss: {
    name: "El Jurisconsulto Escéptico",
    kind: "veto",
    intro: ["¡Pongo en duda la jurisdicción comunitaria y el control contable! ¿Conoces las atribuciones del TJUE y del Tribunal de Cuentas?"],
    defeat: ["¡La jurisprudencia y el rigor financiero de la Unión son incuestionables!"],
  },
  summary: [
    "Parlamento Europeo (art. 14 TUE): máx 750 + Pte; 5 años; sede en Estrasburgo (comisiones en Bruselas, Secretaría en Luxemburgo).",
    "TJUE (art. 19 TUE, Luxemburgo): Tribunal de Justicia (27 jueces + 11 abogados generales) y Tribunal General (54 jueces). Cuestión prejudicial art. 267 TFUE.",
    "BCE (art. 127 TFUE, Fráncfort): estabilidad de precios, política monetaria del euro.",
    "Tribunal de Cuentas (art. 285 TFUE, Luxemburgo): 1 miembro por Estado, mandato 6 años, informe anual sobre el presupuesto.",
  ],
};

export const W2_T5: MiniWorldDef = {
  id: "ue-t5",
  num: 5,
  temaTitle: "Tema 5: Fuentes del Derecho de la Unión Europea",
  name: "Sala de la Pirámide Comunitaria",
  emoji: "⚖️",
  theme: "ue",
  color: "#16306a",
  enemy: "estrella",
  enemyName: "Estrellas enfadadas",
  npcs: [
    {
      name: "Magistrada Ordenamiento",
      role: "Derecho originario, derivado y principios",
      look: { skin: "#f1c7a0", hair: "#333", hairStyle: "bun", shirt: "#3498db", pants: "#1a365d", acc: ["glasses", "robe"], accColor: "#ffd84d" },
      pages: [
        "El ordenamiento de la UE es un ordenamiento jurídico autónomo e integrado en el de los Estados miembros.",
        "Derecho originario: los Tratados constitutivos (TUE, TFUE, Tratado EURATOM), sus protocolos, modificaciones y la Carta de los Derechos Fundamentales (art. 6 TUE).",
        "Derecho derivado (art. 288 TFUE): los actos jurídicos de la Unión se dividen en vinculantes (Reglamento, Directiva y Decisión) y no vinculantes (Recomendaciones y Dictámenes).",
        "El Reglamento tiene alcance general, es obligatorio en todos sus elementos y directamente aplicable en cada Estado. La Directiva obliga al Estado destinatario en cuanto al resultado que deba conseguirse, dejando a las autoridades nacionales la elección de la forma y los medios (requiere transposición).",
        "Principios vertebradores: Primacía del Derecho de la UE sobre el nacional (sentencia Costa c. ENEL, 1964) y Efecto Directo (sentencia Van Gend en Loos, 1963).",
      ],
    },
  ],
  blockQs: [
    Q("w2-t5-q1", "Según el art. 288 del TFUE, ¿qué acto legislativo tiene alcance general, es obligatorio en todos sus elementos y directamente aplicable?", ["El Reglamento", "La Directiva", "La Recomendación", "El Dictamen"], 0, "Art. 288 TFUE: el reglamento tendrá un alcance general. Será obligatorio en todos sus elementos y directamente aplicable en cada Estado miembro."),
    Q("w2-t5-q2", "Una Directiva de la Unión Europea se caracteriza por:", ["Obligar al Estado en cuanto al resultado, dejando a las autoridades nacionales la elección de la forma y de los medios", "Ser directamente aplicable a los ciudadanos sin necesidad de transposición", "Carecer de efectos jurídicos vinculantes", "Aplicarse exclusivamente a las empresas públicas"], 0, "Art. 288 TFUE: la directiva obligará al Estado miembro destinatario en cuanto al resultado que deba conseguirse, dejando a las autoridades nacionales la elección de la forma y de los medios."),
    Q("w2-t5-q3", "El principio de primacía del Derecho de la Unión Europea sobre el Derecho nacional fue consagrado jurisprudencialmente en la sentencia:", ["Costa c. ENEL (1964)", "Van Gend en Loos (1963)", "Cassis de Dijon (1979)", "Francovich (1991)"], 0, "La sentencia Costa contra ENEL (asunto 6/64) sentó el principio de primacía: el Derecho comunitario no puede ser derogado por normas de Derecho interno, con independencia de su rango."),
  ],
  bossQs: [
    Q("w2-t5-b1", "El principio del 'efecto directo' consagrado en la sentencia Van Gend en Loos implica que:", ["Las normas comunitarias claras, precisas e incondicionales engendran derechos directos que los particulares pueden invocar ante los tribunales nacionales", "Las directivas no obligan a los Estados hasta pasados 10 años", "El Derecho de la UE solo vincula a los Gobiernos y no a los jueces", "Solo los reglamentos pueden ser aplicados en España"], 0, "Van Gend en Loos (asunto 26/62): las normas de la UE que cumplan los requisitos de claridad, precisión e incondicionalidad producen efectos jurídicos directos para los ciudadanos."),
    Q("w2-t5-b2", "De los siguientes actos contemplados en el art. 288 TFUE, ¿cuáles NO son jurídicamente vinculantes?", ["Las recomendaciones y los dictámenes", "Las decisiones individuales", "Los reglamentos delegados", "Las directivas comunitarias"], 0, "Art. 288 TFUE último párrafo: las recomendaciones y los dictámenes no serán vinculantes."),
    Q("w2-t5-b3", "La Decisión comunitaria (art. 288 TFUE) se distingue porque:", ["Es obligatoria en todos sus elementos; cuando designe destinatarios, solo será obligatoria para éstos", "Siempre requiere ley de transposición previa", "Nunca puede tener destinatarios individuales", "Es idéntica en todo a una recomendación"], 0, "Art. 288 TFUE: la decisión será obligatoria en todos sus elementos. Cuando designe destinatarios, solo será obligatoria para éstos."),
  ],
  mini: {
    type: "order",
    title: "Prueba de la Jerarquía de Fuentes de la UE",
    prompt: "Ordena las fuentes del Derecho de la Unión Europea de mayor a menor rango normativo.",
    items: [
      "Tratados constitutivos (TUE y TFUE) y Carta de Derechos Fundamentales (Derecho originario)",
      "Principios generales del Derecho de la UE y Acuerdos Internacionales de la Unión",
      "Actos legislativos: Reglamentos, Directivas y Decisiones legislativas",
      "Actos no legislativos: Actos delegados (art. 290 TFUE) y Actos de ejecución (art. 291 TFUE)",
      "Actos no vinculantes: Recomendaciones y Dictámenes",
    ],
  },
  boss: {
    name: "El Juez Soberanista",
    kind: "veto",
    intro: ["¡Sostengo que una ley interna posterior deroga cualquier directiva europea! Demuestra la primacía comunitaria."],
    defeat: ["¡Costa c. ENEL y Van Gend en Loos disipan toda duda! El ordenamiento de la UE prevalece."],
  },
  summary: [
    "Derecho originario: TUE, TFUE, Tratados de Adhesión, Carta de Derechos Fundamentales (mismo valor, art. 6 TUE).",
    "Derecho derivado (art. 288 TFUE): Reglamento (general, obligatorio, aplicable), Directiva (resultado, transposición), Decisión (obligatoria para destinatarios), Recomendaciones y Dictámenes (no vinculantes).",
    "Actos delegados (art. 290) y de ejecución (art. 291).",
    "Principios fundamentales: Primacía (Costa/ENEL 1964) y Efecto Directo (Van Gend en Loos 1963). Responsabilidad patrimonial del Estado por infracción del Derecho de la UE (Francovich 1991).",
  ],
};

export const W2_T6: MiniWorldDef = {
  id: "ue-t6",
  num: 6,
  temaTitle: "Tema 6: Presupuesto, Fondos y Políticas Comunes de la UE",
  name: "Cámara de la Cohesión Europea",
  emoji: "💶",
  theme: "ue",
  color: "#102350",
  enemy: "estrella",
  enemyName: "Estrellas enfadadas",
  npcs: [
    {
      name: "Tesorero Comunitario",
      role: "Presupuesto, Fondos y Políticas",
      look: { skin: "#f0bf94", hair: "#6e2c00", hairStyle: "short", shirt: "#27ae60", pants: "#1c2c5c", acc: ["badge", "tie"], accColor: "#f4d03f" },
      pages: [
        "El Presupuesto de la Unión Europea se rige por el principio de equilibrio presupuestario obligatorio (ingresos = gastos; ¡no puede haber déficit presupuestario!).",
        "El Marco Financiero Plurianual (MFP, art. 312 TFUE) fija los techos de gasto por categorías para un período de al menos 5 años (el actual abarca 2021-2027). Es aprobado por el Consejo por unanimidad, previa aprobación del Parlamento.",
        "Recursos propios: derechos de aduana (recursos tradicionales), porcentaje sobre el IVA, porcentaje sobre la Renta Nacional Bruta (RNB, principal fuente) y la contribución sobre residuos de plástico no reciclados.",
        "Fondos de cohesión y estructurales: FEDER (desarrollo regional e infraestructuras), FSE+ (empleo e inclusión social), Fondo de Cohesión (para Estados con RNB <90% de la media), FEADER y FEMPA. A ellos se suma NextGenerationEU con el Mecanismo de Recuperación y Resiliencia (MRR).",
      ],
    },
  ],
  blockQs: [
    Q("w2-t6-q1", "El principio presupuestario que prohíbe que el presupuesto anual de la UE presente déficit o endeudamiento es el:", ["Principio de equilibrio presupuestario", "Principio de anualidad", "Principio de especialidad de crédito", "Principio de universalidad"], 0, "Art. 310.1 TFUE: en el presupuesto los ingresos y los gastos deberán estar equilibrados; la UE no puede emitir deuda para financiar déficits de gasto operativo ordinario."),
    Q("w2-t6-q2", "¿Por cuántos años está fijado el Marco Financiero Plurianual (MFP) vigente en la Unión Europea?", ["7 años (2021-2027)", "5 años (2020-2025)", "10 años (2020-2030)", "3 años renovables"], 0, "El MFP actual cubre un período de 7 años, desde 2021 hasta 2027, con un límite máximo de compromisos de gasto fijado por categorías."),
    Q("w2-t6-q3", "¿Cuál de los siguientes fondos europeos tiene por objeto exclusivo financiar proyectos de infraestructuras y medio ambiente en Estados con una RNB per cápita inferior al 90% de la media de la UE?", ["Fondo de Cohesión", "Fondo Social Europeo Plus (FSE+)", "Fondo Europeo Agrícola de Garantía (FEAGA)", "Fondo Europeo de Adaptación a la Globalización"], 0, "El Fondo de Cohesión se destina específicamente a Estados miembros cuya renta nacional bruta (RNB) por habitante sea inferior al 90% de la media de la UE."),
  ],
  bossQs: [
    Q("w2-t6-b1", "¿Cuál es la principal fuente de ingresos del sistema de recursos propios de la Unión Europea en la actualidad?", ["El recurso basado en la Renta Nacional Bruta (RNB) de los Estados miembros", "Los aranceles de aduanas exteriores", "El impuesto sobre transacciones financieras", "Las multas a empresas impuestas por la Comisión"], 0, "El recurso basado en la RNB es la mayor fuente de ingresos de la UE, aportando en torno al 70% de la totalidad de los recursos presupuestarios."),
    Q("w2-t6-b2", "El Fondo Europeo de Desarrollo Regional (FEDER) tiene como finalidad prioritaria:", ["Corregir los principales desequilibrios regionales y promover la cohesión económica, social y territorial", "Subvencionar directamente el precio de los cereales", "Pagar las pensiones de jubilación en zonas rurales", "Financiar misiones militares en el extranjero"], 0, "Art. 176 TFUE: el FEDER está destinado a contribuir a la corrección de los principales desequilibrios regionales dentro de la Unión."),
    Q("w2-t6-b3", "El instrumento extraordinario de recuperación creado por la UE para afrontar el impacto socioeconómico de la pandemia de COVID-19 se denomina:", ["NextGenerationEU (y el Mecanismo de Recuperación y Resiliencia - MRR)", "Plan Marshall Comunitario", "Tratado de Estabilidad Financiera", "Fondo Monetario Europeo"], 0, "NextGenerationEU, dotado con más de 750.000 millones de euros, canaliza ayudas no reembolsables y préstamos mediante el MRR vinculado a los Planes Nacionales de Recuperación."),
  ],
  mini: {
    type: "match",
    title: "Prueba de los Fondos Estructurales Europeos",
    prompt: "Relaciona cada fondo europeo con su objetivo principal.",
    pairs: [
      ["FEDER", "Desarrollo regional, innovación e infraestructuras"],
      ["FSE+ (Fondo Social Europeo Plus)", "Empleo, formación profesional e inclusión social"],
      ["Fondo de Cohesión", "Estados con RNB per cápita <90% de la media de la UE"],
      ["NextGenerationEU / MRR", "Recuperación, transformación digital y transición verde"],
    ],
  },
  boss: {
    name: "El Defraudador de Fondos",
    kind: "veto",
    intro: ["¡Desviaré las subvenciones del FEDER y el FSE! ¿Sabrás aplicar las reglas del presupuesto europeo para protegerme?"],
    defeat: ["¡La fiscalización de la OLAF y el Tribunal de Cuentas han recuperado hasta el último euro!"],
  },
  summary: [
    "Presupuesto de la UE (arts. 310-324 TFUE): equilibrio estricto (ingresos = gastos, sin déficit).",
    "MFP (art. 312 TFUE): mínimo 5 años; actual 2021-2027 (7 años). Aprobado por el Consejo por unanimidad con aprobación del PE.",
    "Recursos propios: aranceles aduaneros, IVA, recurso basado en la RNB (principal fuente) y tasa sobre plástico no reciclado.",
    "Fondos: FEDER (desequilibrios regionales), FSE+ (empleo y políticas sociales), Fondo de Cohesión (RNB <90%), FEADER, FEMPA y NextGenerationEU (MRR).",
  ],
};

/* ==================== MUNDO 2 (BLOQUE II COMPLETO) ==================== */

export const W2: WorldDef = {
  id: "ue",
  num: 2,
  bloque: "Bloque II",
  title: "Unión Europea",
  name: "Eurolandia",
  emoji: "🇪🇺",
  theme: "ue",
  color: "#2f6fe0",
  enemy: "estrella",
  enemyName: "Estrellas enfadadas",
  temas: [
    "Tema 1: Orígenes, Tratados y ampliaciones de la UE",
    "Tema 2: Consejo Europeo y Consejo de la UE",
    "Tema 3: La Comisión Europea",
    "Tema 4: Parlamento Europeo, TJUE, Tribunal de Cuentas y BCE",
    "Tema 5: Fuentes del Derecho de la UE",
    "Tema 6: Presupuesto, Fondos y Políticas Comunes",
  ],
  miniWorlds: [W2_T1, W2_T2, W2_T3, W2_T4, W2_T5, W2_T6],
  npcs: [
    W2_T1.npcs[0],
    W2_T2.npcs[0],
    W2_T3.npcs[0],
    W2_T4.npcs[0],
  ],
  blockQs: [
    W2_T1.blockQs[0],
    W2_T2.blockQs[1],
    W2_T3.blockQs[0],
    W2_T4.blockQs[0],
    W2_T5.blockQs[0],
    W2_T6.blockQs[1],
  ],
  bossQs: [
    W2_T1.bossQs[0],
    W2_T2.bossQs[0],
    W2_T3.bossQs[0],
    W2_T4.bossQs[2],
    W2_T5.bossQs[0],
    W2_T6.bossQs[0],
  ],
  mini: {
    type: "match",
    title: "Gran Desafío del Bloque II: Las Sedes de la Unión",
    prompt: "Empareja cada institución europea con su sede oficial.",
    pairs: [
      ["Parlamento Europeo (plenos oficiales)", "Estrasburgo"],
      ["Comisión Europea y Consejo de la UE", "Bruselas"],
      ["Tribunal de Justicia de la UE y Tribunal de Cuentas", "Luxemburgo"],
      ["Banco Central Europeo", "Fráncfort"],
      ["Frontex", "Varsovia"],
    ],
  },
  boss: {
    name: "Lord Veto",
    kind: "veto",
    intro: [
      "¡Exijo UNANIMIDAD absoluta en todas las políticas! ¡Vetaré cada iniciativa de integración comunitaria!",
      "Solo quien domine los 6 temas de la Unión Europea podrá derribar mi bloqueo. ¡Adelante!",
    ],
    defeat: ["¡Imposible! ¡Me han superado por mayoría cualificada! Uniti in diversitate... ¡Europa avanza!"],
  },
  summary: [
    "Tratados: CECA 1951, Roma 1957, AUE 1986, Maastricht 1992/93, Ámsterdam 1997, Niza 2001, Lisboa 2007/09 (TUE + TFUE). España 1986. 27 Estados.",
    "Consejo Europeo (prioridades, no legisla, Pte 2,5 años) vs Consejo de la UE (ministros, colegisla con PE, mayoría cualificada: 55% Estados y 65% población).",
    "Comisión (27 comisarios, 5 años, monopolio legislativo, guardiana tratados ex art. 258 TFUE).",
    "PE (Estrasburgo, máx 750+1), TJUE (Luxemburgo, prejudicial art. 267), BCE (Fráncfort, estabilidad precios) y Cuentas (6 años).",
    "Derecho derivado (art. 288): reglamento (aplicable), directiva (resultado), decisión. Principios de primacía (Costa/ENEL) y efecto directo (Van Gend en Loos).",
    "Finanzas: equilibrio obligatorio, MFP 2021-2027 (7 años), RNB recurso principal. Fondos: FEDER, FSE+, Cohesión y NextGenEU.",
  ],
};
