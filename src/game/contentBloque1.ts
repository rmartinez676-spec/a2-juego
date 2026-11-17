import type { MiniWorldDef, Question, WorldDef } from "./types";

export const Q = (id: string, q: string, options: string[], answer: number, explain: string): Question => ({
  id,
  q,
  options,
  answer,
  explain,
});

/* ==================== BLOQUE I: MINI-MUNDOS ==================== */

export const W1_T1: MiniWorldDef = {
  id: "estado-t1",
  num: 1,
  temaTitle: "Tema 1: La Constitución Española de 1978 y su reforma",
  name: "Cámara de la Carta Magna",
  emoji: "📜",
  theme: "estado",
  color: "#e0463a",
  enemy: "urna",
  enemyName: "Urnas rebeldes",
  npcs: [
    {
      name: "Doña Carta Magna",
      role: "Estructura y reforma constitucional",
      look: { skin: "#f3c9a0", hair: "#d9d9e0", hairStyle: "bun", shirt: "#c9372c", pants: "#7a1f1a", acc: ["robe", "laurel"], accColor: "#e8b923" },
      pages: [
        "¡Bienvenida opositora! Fui aprobada en Cortes el 31 de octubre de 1978, ratificada en referéndum el 6 de diciembre, sancionada y promulgada el 27 de diciembre y publicada en el BOE el 29 de diciembre de 1978.",
        "Mi estructura: Título Preliminar, diez Títulos (I a X), 169 artículos, 4 disposiciones adicionales, 9 transitorias, 1 derogatoria y 1 final.",
        "Art. 1: Estado social y democrático de Derecho. Valores superiores: libertad, justicia, igualdad y pluralismo político. La soberanía nacional reside en el pueblo español; la forma política es la Monarquía parlamentaria.",
        "Reforma ordinaria (art. 167): 3/5 de cada Cámara. Si difieren, comisión paritaria. Referéndum facultativo si lo solicita el 10% de miembros de cualquier Cámara en 15 días.",
        "Reforma agravada (art. 168): revisión total o del Título Preliminar, Sección 1ª Cap. II Tít. I, o Título II. Requiere 2/3 de cada Cámara, disolución inmediata, ratificación por nuevas Cámaras por 2/3 y referéndum obligatorio.",
      ],
    },
  ],
  blockQs: [
    Q("w1-t1-q1", "¿Cuántos artículos y títulos tiene la Constitución Española de 1978?", ["169 artículos y 10 títulos más el Preliminar", "155 artículos y 9 títulos", "178 artículos y 11 títulos", "136 artículos y 8 títulos"], 0, "Consta de un Título Preliminar, 10 Títulos (I al X), 169 artículos, 4 adicionales, 9 transitorias, 1 derogatoria y 1 final."),
    Q("w1-t1-q2", "Según el art. 1.1 CE, los valores superiores del ordenamiento jurídico español son:", ["Libertad, justicia, igualdad y pluralismo político", "Libertad, igualdad, legalidad y solidaridad", "Democracia, igualdad, justicia y pluralismo", "Soberanía, justicia, libertad y bienestar"], 0, "Art. 1.1 CE: propugna como valores superiores de su ordenamiento jurídico la libertad, la justicia, la igualdad y el pluralismo político."),
    Q("w1-t1-q3", "¿Qué mayoría se exige para la reforma constitucional del art. 167 CE en cada Cámara?", ["Mayoría absoluta", "Tres quintos", "Dos tercios", "Mayoría simple"], 1, "Art. 167 CE: los proyectos de reforma deben ser aprobados por una mayoría de tres quintos de cada una de las Cámaras."),
  ],
  bossQs: [
    Q("w1-t1-b1", "Para someter a referéndum la reforma del art. 167 CE, ¿qué porcentaje de diputados o senadores debe solicitarlo?", ["Una décima parte dentro de los 15 días siguientes a su aprobación", "Una quinta parte dentro de 30 días", "Mayoría absoluta del Congreso", "Una tercera parte en 10 días"], 0, "Art. 167.3 CE: una décima parte de los miembros de cualquiera de las Cámaras dentro de los quince días siguientes a su aprobación definitiva."),
    Q("w1-t1-b2", "¿Cuál de las siguientes partes de la CE exige el procedimiento agravado del art. 168?", ["Título II (De la Corona)", "Título III (De las Cortes Generales)", "Título IV (Del Gobierno)", "Título VIII (Organización territorial)"], 0, "El art. 168 se reserva para la revisión total, el Título Preliminar, el Capítulo II, Sección 1ª del Título I, o el Título II."),
    Q("w1-t1-b3", "En tiempo de vigencia de estados de alarma, excepción o sitio o en tiempo de guerra (art. 169 CE):", ["No podrá iniciarse la reforma constitucional", "Solo cabe reforma por procedimiento ordinario", "Se requiere referéndum en 48 horas", "Solo cabe reforma a propuesta del Gobierno"], 0, "Art. 169 CE: no podrá iniciarse la reforma constitucional en tiempo de guerra o de vigencia de alguno de los estados previstos en el art. 116."),
  ],
  mini: {
    type: "order",
    title: "Prueba del Procedimiento Agravado",
    prompt: "Ordena los pasos de la reforma agravada del artículo 168 de la Constitución.",
    items: [
      "Aprobación del principio de reforma por mayoría de 2/3 de cada Cámara",
      "Disolución inmediata de las Cortes Generales",
      "Las nuevas Cámaras ratifican la decisión y estudian el texto",
      "Aprobación del nuevo texto por mayoría de 2/3 de ambas Cámaras",
      "Sometimiento a referéndum vinculante para su ratificación",
    ],
  },
  boss: {
    name: "Guardián de los Artículos",
    kind: "king",
    intro: ["¡Nadie modifica la Carta Magna sin demostrar un conocimiento estricto de los artículos 167 y 168!"],
    defeat: ["¡Magnífico! Dominas la rigidez constitucional y el procedimiento agravado."],
  },
  summary: [
    "CE 1978: Aprobada 31/10/1978, referéndum 06/12/1978, sancionada 27/12/1978, publicada y en vigor 29/12/1978.",
    "Estructura: Preámbulo + Título Preliminar + 10 Títulos + 169 arts + 4 DA + 9 DT + 1 DD + 1 DF.",
    "Art. 1: Estado social y democrático; valores: libertad, justicia, igualdad y pluralismo; soberanía en el pueblo.",
    "Reforma: ordinaria (art. 167: 3/5 + referéndum potestativo 1/10 en 15 d) vs agravada (art. 168: 2/3 + disolución + 2/3 + referéndum preceptivo).",
  ],
};

export const W1_T2: MiniWorldDef = {
  id: "estado-t2",
  num: 2,
  temaTitle: "Tema 2: Derechos y deberes fundamentales · Defensor del Pueblo",
  name: "Bastión de los Derechos",
  emoji: "⚖️",
  theme: "estado",
  color: "#d93829",
  enemy: "urna",
  enemyName: "Urnas rebeldes",
  npcs: [
    {
      name: "Tribuno de los Derechos",
      role: "Garantías y Defensor del Pueblo",
      look: { skin: "#f0bf94", hair: "#4a2a18", hairStyle: "short", shirt: "#b82418", pants: "#2b2b3d", acc: ["badge", "robe"], accColor: "#ffd84d" },
      pages: [
        "El Título I de la CE es 'De los derechos y deberes fundamentales' (arts. 10 a 55). El art. 10 es el pórtico: la dignidad de la persona es fundamento del orden político y la paz social.",
        "Art. 14: principio de igualdad ante la ley sin discriminación. La Sección 1ª del Cap. II (arts. 15-29) contiene los derechos fundamentales de máxima protección.",
        "Garantías (art. 53.2): los arts. 14 a 29 más la objeción de conciencia (art. 30.2) gozan de procedimiento preferente y sumario ante tribunales ordinarios y recurso de amparo ante el Tribunal Constitucional.",
        "El Defensor del Pueblo (art. 54): alto comisionado de las Cortes Generales para la defensa de los derechos del Título I. Elegido por 5 años por mayoría de 3/5 de Congreso y Senado. Supervisa la actividad de la Administración.",
        "Suspensión individual de derechos (art. 55.2): banda armada o terrorismo (arts. 17.2 plazo de detención, 18.2 inviolabilidad del domicilio y 18.3 secreto de comunicaciones).",
      ],
    },
  ],
  blockQs: [
    Q("w1-t2-q1", "¿Qué derechos gozan de protección mediante recurso de amparo ante el Tribunal Constitucional (art. 53.2 CE)?", ["Los arts. 14 a 29 más la objeción de conciencia del art. 30", "Todos los derechos del Título I", "Solo los derechos de la Sección 1ª del Capítulo II", "Los arts. 14 a 38"], 0, "Art. 53.2 CE: cualquier ciudadano podrá recabar la tutela de las libertades y derechos reconocidos en el art. 14 y la Sección primera del Cap. II mediante recurso de amparo, aplicable también a la objeción de conciencia del art. 30."),
    Q("w1-t2-q2", "¿Por cuánto tiempo es elegido el Defensor del Pueblo y qué mayoría se exige?", ["5 años, por 3/5 del Congreso y del Senado", "4 años, por mayoría absoluta", "6 años, por 2/3 del Congreso", "5 años, a propuesta exclusiva del Gobierno"], 0, "LO 3/1981 del Defensor del Pueblo: nombrado por las Cortes Generales por un período de 5 años mediante mayoría de 3/5 en ambas Cámaras."),
    Q("w1-t2-q3", "El plazo máximo legal de detención preventiva ordinaria según el art. 17.2 CE es de:", ["72 horas", "48 horas", "24 horas", "5 días"], 0, "Art. 17.2 CE: la detención preventiva no podrá durar más del tiempo estrictamente necesario para realizar las averiguaciones, y en todo caso en un plazo máximo de 72 horas el detenido debe ser puesto en libertad o a disposición judicial."),
  ],
  bossQs: [
    Q("w1-t2-b1", "¿Cuál de estos derechos NO puede suspenderse durante el estado de excepción según el art. 55.1 CE?", ["El derecho a la vida y la integridad física (art. 15)", "La libertad y seguridad (art. 17)", "La inviolabilidad del domicilio (art. 18.2)", "La libertad de huelga (art. 28.2)"], 0, "El art. 15 (derecho a la vida y a la integridad física y moral) no se puede suspender en ningún estado de anomalía constitucional."),
    Q("w1-t2-b2", "El procedimiento de 'Habeas Corpus' (art. 17.4 CE) tiene por objeto:", ["La inmediata puesta a disposición judicial de toda persona detenida ilegalmente", "El nombramiento de abogado de oficio", "La reducción de la fianza penitenciaria", "La suspensión del juicio oral"], 0, "Art. 17.4 CE y Ley Orgánica 6/1984: persigue la inmediata puesta a disposición judicial de cualquier persona detenida ilegalmente."),
    Q("w1-t2-b3", "Los principios rectores de la política social y económica del Capítulo III del Título I:", ["Solo pueden alegarse ante la jurisdicción ordinaria de acuerdo con las leyes que los desarrollen", "Gozan de recurso de amparo directo", "Vinculan directamente a los particulares sin necesidad de ley", "Tienen reserva de ley orgánica"], 0, "Art. 53.3 CE: informarán la legislación positiva, la práctica judicial y la actuación de los poderes públicos, pero solo podrán ser alegados ante la jurisdicción ordinaria según las leyes que los desarrollen."),
  ],
  mini: {
    type: "match",
    title: "Prueba de las Garantías Constitucionales",
    prompt: "Relaciona cada artículo o bloque de la CE con su nivel de garantía.",
    pairs: [
      ["Arts. 14 a 29 + 30.2", "Amparo ante el Tribunal Constitucional"],
      ["Capítulo II (arts. 14 a 38)", "Reserva de Ley y respeto a su contenido esencial"],
      ["Capítulo III (arts. 39 a 52)", "Principios rectores informadores"],
      ["Art. 54", "Defensor del Pueblo"],
    ],
  },
  boss: {
    name: "Centinela de las Garantías",
    kind: "ghost",
    intro: ["¡Soy la sombra del abuso de poder! ¿Sabrás proteger a la ciudadanía con las garantías del Título I?"],
    defeat: ["¡El recurso de amparo y el Defensor del Pueblo han restablecido la legalidad!"],
  },
  summary: [
    "Título I: arts. 10 a 55. Art. 10: dignidad humana como fundamento. Art. 14: igualdad jurídica.",
    "Sección 1ª (arts. 15-29): derechos fundamentales (vida, ideológica, libertad, intimidad, huelga, educación...).",
    "Garantías art. 53.2: preferente y sumario + Amparo constitucional (arts. 14-29 + 30.2). Reserva Ley Orgánica (art. 81).",
    "Defensor del Pueblo (art. 54, LO 3/1981): comisionado Cortes, 5 años, mayoría 3/5.",
  ],
};

export const W1_T3: MiniWorldDef = {
  id: "estado-t3",
  num: 3,
  temaTitle: "Tema 3: La Corona y el Tribunal Constitucional",
  name: "Salón del Trono y la Justicia",
  emoji: "👑",
  theme: "estado",
  color: "#c03022",
  enemy: "urna",
  enemyName: "Urnas rebeldes",
  npcs: [
    {
      name: "Capitán Corona",
      role: "La Corona y el Tribunal Constitucional",
      look: { skin: "#f0bf94", hair: "#3b2a20", hairStyle: "short", shirt: "#1f3c88", pants: "#1b2a55", acc: ["helmet", "badge", "cape"], accColor: "#e8b923" },
      pages: [
        "El Rey es el Jefe del Estado, símbolo de su unidad y permanencia; arbitra y modera el funcionamiento de las instituciones (art. 56 CE).",
        "La persona del Rey es inviolable y no está sujeta a responsabilidad. Sus actos son siempre refrendados (art. 64 CE) por el Presidente del Gobierno, los Ministros competentes o el Presidente del Congreso (en nombramiento de Presidente y disolución del art. 99). Sin refrendo carecen de validez.",
        "Sucesión (art. 57): primogenitura y representación; preferencia de la línea anterior, en la misma línea el grado más próximo, en el mismo grado el varón sobre la mujer y la persona de más edad.",
        "Tribunal Constitucional (Título IX, arts. 159-165): intérprete supremo de la Constitución. 12 magistrados nombrados por el Rey por 9 años: 4 propuestos por el Congreso (3/5), 4 por el Senado (3/5), 2 por el Gobierno y 2 por el CGPJ. Se renuevan por terceras partes cada 3 años.",
      ],
    },
  ],
  blockQs: [
    Q("w1-t3-q1", "¿Quién refrenda los actos del Rey con carácter general según el art. 64 CE?", ["El Presidente del Gobierno y, en su caso, los Ministros competentes", "El Presidente del Tribunal Supremo", "El Consejo de Estado", "El Defensor del Pueblo"], 0, "Art. 64.1 CE: los actos del Rey serán refrendados por el Presidente del Gobierno y, en su caso, por los Ministros competentes."),
    Q("w1-t3-q2", "¿Por cuánto tiempo son nombrados los miembros del Tribunal Constitucional y cómo se renuevan?", ["9 años, renovándose por terceras partes cada 3 años", "5 años, renovándose en bloque", "4 años, coincidentes con la legislatura", "Vitalicios hasta los 70 años"], 0, "Art. 159.3 CE: los miembros del Tribunal Constitucional serán designados por un período de nueve años y se renovarán por terceras partes cada tres."),
    Q("w1-t3-q3", "Están legitimados para interponer el recurso de inconstitucionalidad (art. 162.1.a CE):", ["Presidente del Gobierno, Defensor del Pueblo, 50 Diputados, 50 Senadores y órganos ejecutivos/asambleas de CCAA", "Cualquier ciudadano particular con interés directo", "Solo los Presidentes de las Cámaras legislativas", "Exclusivamente el Fiscal General del Estado"], 0, "Art. 162.1.a CE: el Presidente del Gobierno, el Defensor del Pueblo, 50 Diputados, 50 Senadores, los órganos colegiados ejecutivos y las Asambleas de las CCAA."),
  ],
  bossQs: [
    Q("w1-t3-b1", "¿En qué caso el acto del Rey es refrendado por el Presidente del Congreso de los Diputados?", ["Para proponer y nombrar al Presidente del Gobierno y disolver Cortes ex art. 99", "Para declarar la guerra", "Para nombrar a los Ministros", "Para sancionar y promulgar las leyes ordinarias"], 0, "Art. 64.2 CE: la propuesta y el nombramiento del Presidente del Gobierno y la disolución prevista en el art. 99 serán refrendados por el Presidente del Congreso."),
    Q("w1-t3-b2", "Para ser nombrado magistrado del Tribunal Constitucional se exige:", ["Jurista de reconocida competencia con más de 15 años de ejercicio profesional", "Juez de carrera con más de 10 años de servicio", "Catedrático de universidad con más de 20 años", "Abogado del Estado en activo"], 0, "Art. 159.2 CE: deberán ser nombrados entre Magistrados y Fiscales, Profesores de Universidad, Funcionarios públicos y Abogados, juristas de reconocida competencia con más de quince años de ejercicio profesional."),
    Q("w1-t3-b3", "La cuestión de inconstitucionalidad ante el TC solo puede ser planteada por:", ["Un juez o tribunal de oficio o a instancia de parte cuando considere que una norma con rango de ley aplicable al fallo pueda ser contraria a la CE", "Cualquier ciudadano mediante acción popular", "El Defensor del Pueblo", "El Ministro de Justicia"], 0, "Art. 163 CE y LOTC: solo los jueces o tribunales pueden plantearla cuando de la validez de la norma con rango de ley dependa el fallo."),
  ],
  mini: {
    type: "match",
    title: "Prueba de la Corona y el Tribunal Constitucional",
    prompt: "Asocia cada institución u órgano con su composición o competencia.",
    pairs: [
      ["Tribunal Constitucional", "12 magistrados nombrados por 9 años"],
      ["Propuesta por Congreso de los Diputados", "4 magistrados por mayoría de 3/5"],
      ["Propuesta por Senado", "4 magistrados por mayoría de 3/5"],
      ["Propuesta por Gobierno y CGPJ", "2 magistrados cada uno"],
    ],
  },
  boss: {
    name: "El Canciller Vetusto",
    kind: "king",
    intro: ["¡Soy el albacea de las prerrogativas reales y el control constitucional! Demuestra tu dominio."],
    defeat: ["¡Tu conocimiento institucional es intachable! El Estado constitucional prevalece."],
  },
  summary: [
    "Corona (Título II): Rey Jefe de Estado, inviolable, no responsable. Actos refrendados (art. 64) salvo art. 65.2.",
    "Regencia (art. 59) y Tutela (art. 60): por mandato constitucional o nombradas por las Cortes.",
    "TC (Título IX, LOTC 2/1979): 12 magistrados (4 Congreso, 4 Senado, 2 Gobierno, 2 CGPJ). Mandato: 9 años, renovación 1/3 cada 3 años.",
    "Procesos: recurso de inconstitucionalidad (50 diputados/senadores, Defensor, Pte Gob, CCAA), cuestión de inconstitucionalidad (jueces) y recurso de amparo.",
  ],
};

export const W1_T4: MiniWorldDef = {
  id: "estado-t4",
  num: 4,
  temaTitle: "Tema 4: Cortes Generales, Gobierno y Poder Judicial",
  name: "Hemiciclo del Poder",
  emoji: "🏛️",
  theme: "estado",
  color: "#b02a1c",
  enemy: "urna",
  enemyName: "Urnas rebeldes",
  npcs: [
    {
      name: "Diputada Escaño",
      role: "Poder Legislativo, Ejecutivo y Judicial",
      look: { skin: "#e9b88c", hair: "#5a2e1c", hairStyle: "long", shirt: "#2d7d5b", pants: "#243447", acc: ["glasses", "badge"], accColor: "#e8b923" },
      pages: [
        "Las Cortes Generales (Título III, arts. 66-96) representan al pueblo español y son bicamerales: Congreso y Senado. Congreso: mínimo 300, máximo 400 (LOREG: 350). Senado: cámara de representación territorial (4 senadores por provincia peninsular más autonómicos).",
        "Investidura (art. 99): el candidato propuesto por el Rey expone su programa. 1ª votación: mayoría absoluta. 2ª votación (48h después): mayoría simple. Si en 2 meses nadie lo logra, disolución automática.",
        "Gobierno (Título IV, arts. 97-107): dirige la política interior y exterior, la Administración civil y militar y la defensa. Potestad reglamentaria. Moción de censura (art. 113): constructiva (incluye candidato alternativo), firmada por 1/10 diputados, mayoría absoluta para prosperar.",
        "Poder Judicial (Título VI, arts. 117-127): jueces y magistrados independientes, inamovibles, responsables y sometidos únicamente al imperio de la ley. El CGPJ es el órgano de gobierno: Presidente del TS + 20 vocales nombrados por 5 años.",
      ],
    },
  ],
  blockQs: [
    Q("w1-t4-q1", "¿Cuántos diputados componen el Congreso según el art. 68.1 CE?", ["Un mínimo de 300 y un máximo de 400", "Exactamente 350 fijados en la Constitución", "Entre 250 y 350", "Entre 350 y 450"], 0, "Art. 68.1 CE: el Congreso se compone de un mínimo de 300 y un máximo de 400 Diputados. La LOREG fijó el número en 350."),
    Q("w1-t4-q2", "La moción de censura al Gobierno (art. 113 CE) requiere para ser aprobada:", ["Mayoría absoluta del Congreso de los Diputados", "Mayoría simple del Congreso", "Tres quintos de las Cortes Generales en sesión conjunta", "Dos tercios del Congreso"], 0, "Art. 113.2 y 113.3 CE: debe incluir un candidato a la Presidencia (constructiva) y ser aprobada por mayoría absoluta del Congreso de los Diputados."),
    Q("w1-t4-q3", "¿Cuántos vocales integran el Consejo General del Poder Judicial (art. 122.3 CE)?", ["20 vocales más el Presidente del Tribunal Supremo", "12 vocales", "15 vocales", "25 vocales"], 0, "Art. 122.3 CE: estará integrado por el Presidente del Tribunal Supremo, que lo presidirá, y por veinte miembros nombrados por el Rey por un período de cinco años."),
  ],
  bossQs: [
    Q("w1-t4-b1", "En la sesión de investidura (art. 99 CE), si no se alcanza mayoría absoluta en primera votación:", ["Se somete a nueva votación 48 horas después, bastando la mayoría simple", "Se convoca a elecciones inmediatamente", "El Rey propone otro candidato al día siguiente", "Se somete a votación en el Senado"], 0, "Art. 99.3 CE: si no se obtuviere dicha mayoría, se someterá la misma propuesta a nueva votación cuarenta y ocho horas después, y la confianza se entenderá otorgada si obtuviere mayoría simple."),
    Q("w1-t4-b2", "La cuestión de confianza (art. 112 CE) solo puede ser planteada por:", ["El Presidente del Gobierno, previa deliberación del Consejo de Ministros", "El Consejo de Ministros colegiadamente por decreto", "Una décima parte de los Diputados", "El Rey a propuesta de las Cortes"], 0, "Art. 112 CE: el Presidente del Gobierno, previa deliberación del Consejo de Ministros, puede plantear ante el Congreso de los Diputados la cuestión de confianza sobre su programa o una declaración de política general."),
    Q("w1-t4-b3", "El Consejo de Estado es definido en el art. 107 CE como:", ["El supremo órgano consultivo del Gobierno", "El órgano de control contable del Estado", "El órgano superior de gobierno de los jueces", "El tribunal de conflictos de jurisdicción"], 0, "Art. 107 CE: el Consejo de Estado es el supremo órgano consultivo del Gobierno. Una ley orgánica regulará su composición y competencia (LO 3/1980)."),
  ],
  mini: {
    type: "order",
    title: "Prueba del Procedimiento Legislativo Ordinario",
    prompt: "Ordena cronológicamente las fases de tramitación de un proyecto de ley ordinaria.",
    items: [
      "Aprobación del Proyecto de Ley por el Consejo de Ministros y remisión al Congreso",
      "Publicación en el BOCG, enmiendas a la totalidad o al articulado y dictamen de Comisión",
      "Debate y votación en el Pleno del Congreso de los Diputados",
      "Remisión al Senado (enmiendas o veto en plazo de 2 meses)",
      "Levantamiento del veto o aceptación de enmiendas por el Congreso y sanción regia en 15 días",
    ],
  },
  boss: {
    name: "El Tribuno del Veto",
    kind: "king",
    intro: ["¡Aquí chocan las ramas del poder! Solo quien conozca la interacción legislativa y ejecutiva podrá pasar."],
    defeat: ["¡El equilibrio y la separación de poderes han triunfado sobre el absolutismo!"],
  },
  summary: [
    "Cortes Generales: Congreso (350 diputados, D'Hondt, circunscripción provincial) y Senado (4 por provincia peninsular + autonómicos).",
    "Investidura (art. 99): absoluta en 1ª o simple a las 48h. Moción de censura (art. 113): constructiva, 1/10 propuesta, mayoría absoluta.",
    "Cuestión de confianza (art. 112): mayoría simple del Congreso.",
    "Poder Judicial (Título VI): CGPJ (20 vocales: 12 judiciales + 8 juristas nombrados por 3/5 Cortes por 5 años; preside el Pte del TS).",
  ],
};

export const W1_T5: MiniWorldDef = {
  id: "estado-t5",
  num: 5,
  temaTitle: "Tema 5: Administración General del Estado y sector público institucional",
  name: "Palacio de la Gobernanza AGE",
  emoji: "🏛️",
  theme: "estado",
  color: "#9a2014",
  enemy: "urna",
  enemyName: "Urnas rebeldes",
  npcs: [
    {
      name: "Secretario Mayor",
      role: "Estructura AGE (Ley 40/2015)",
      look: { skin: "#f3c9a0", hair: "#333", hairStyle: "short", shirt: "#2980b9", pants: "#1f3c88", acc: ["tie", "badge"], accColor: "#ffd84d" },
      pages: [
        "La Ley 40/2015 de Régimen Jurídico del Sector Público clasifica los órganos centrales de la AGE en órganos superiores y directivos.",
        "Órganos superiores: Ministros y Secretarios de Estado. Son nombrados por Real Decreto del Consejo de Ministros (o del Presidente).",
        "Órganos directivos: Subsecretarios y Secretarios Generales (rango de Subsecretario); Secretarios Generales Técnicos y Directores Generales (rango de Director General); y Subdirectores Generales.",
        "Nombramiento: los Subsecretarios y Secretarios Generales Técnicos deben ser funcionarios de carrera del Subgrupo A1. Los Directores Generales también con carácter general (salvo excepciones por RD motivado).",
        "Administración periférica: Delegados del Gobierno en las CCAA (rango de Subsecretario) y Subdelegados del Gobierno en las provincias (rango de Subdirector General, funcionario A1). Sector institucional: organismos autónomos, EPEs y agencias estatales.",
      ],
    },
  ],
  blockQs: [
    Q("w1-t5-q1", "Según el art. 55 de la Ley 40/2015, son órganos superiores de los Ministerios:", ["Los Ministros y los Secretarios de Estado", "Los Ministros y los Subsecretarios", "Los Secretarios de Estado y los Directores Generales", "Los Subsecretarios y los Secretarios Generales"], 0, "Art. 55.2 Ley 40/2015: son órganos superiores los Ministros y los Secretarios de Estado. Todos los demás tienen la consideración de órganos directivos."),
    Q("w1-t5-q2", "¿Qué rango administrativo ostenta un Delegado del Gobierno en una Comunidad Autónoma?", ["Subsecretario", "Secretario de Estado", "Director General", "Ministro"], 0, "Art. 72.2 Ley 40/2015: los Delegados del Gobierno tendrán rango de Subsecretario y serán nombrados y separados por Real Decreto del Consejo de Ministros, a propuesta del Presidente del Gobierno."),
    Q("w1-t5-q3", "¿Qué requisito se exige preceptivamente para ser nombrado Subdelegado del Gobierno en una provincia?", ["Ser funcionario de carrera del Estado, de las CCAA o de las EELL, perteneciente al Subgrupo A1", "Haber sido diputado o senador", "Cualquier ciudadano con título universitario", "Tener categoría de Secretario de Estado"], 0, "Art. 74.2 Ley 40/2015: los Subdelegados del Gobierno serán nombrados por el Delegado del Gobierno mediante libre designación entre funcionarios de carrera del Estado, de las CCAA o de las EELL del Subgrupo A1."),
  ],
  bossQs: [
    Q("w1-t5-b1", "El nombramiento de los Subsecretarios y de los Secretarios Generales Técnicos exige:", ["Ser funcionario de carrera del Estado, de las CCAA o de las Entidades Locales del Subgrupo A1", "No ser funcionario público", "Aprobación por 3/5 del Congreso", "Propuesta vinculante del Consejo de Estado"], 0, "Arts. 63 y 65 Ley 40/2015: habrán de ser nombrados entre funcionarios de carrera pertenecientes al Subgrupo A1."),
    Q("w1-t5-b2", "¿Cuál de las siguientes entidades forma parte del sector público institucional estatal (art. 84 Ley 40/2015)?", ["Los organismos autónomos y las entidades públicas empresariales", "Solo las sociedades mercantiles privadas", "Las empresas sin participación pública", "Los Colegios Profesionales"], 0, "Art. 84.1 Ley 40/2015: integra los organismos públicos (organismos autónomos y entidades públicas empresariales), autoridades administrativas independientes, sociedades mercantiles estatales, consorcios, fundaciones del sector público y fondos sin personalidad jurídica."),
    Q("w1-t5-b3", "¿Qué diferencia principal existe entre un Organismo Autónomo y una Entidad Pública Empresarial (EPE)?", ["El OA se rige íntegramente por el Derecho administrativo; la EPE se rige por el Derecho privado con carácter general, salvo en el ejercicio de potestades públicas", "El OA tiene ánimo de lucro y la EPE no", "La EPE no puede tener personal laboral", "El OA depende directamente de las Cortes Generales"], 0, "Arts. 98 y 103 Ley 40/2015: los organismos autónomos realizan actividades administrativas bajo Derecho público; las EPEs realizan actividades prestacionales o comerciales rigiéndose por Derecho privado en general."),
  ],
  mini: {
    type: "order",
    title: "Prueba de la Jerarquía de Órganos AGE",
    prompt: "Ordena los órganos centrales ministeriales de mayor a menor rango (Ley 40/2015).",
    items: [
      "Ministro (Órgano superior)",
      "Secretario de Estado (Órgano superior)",
      "Subsecretario / Secretario General (Órgano directivo)",
      "Director General / Secretario General Técnico (Órgano directivo)",
      "Subdirector General (Órgano directivo)",
    ],
  },
  boss: {
    name: "El Gran Burócrata Departamental",
    kind: "king",
    intro: ["¡Soy el arquitecto de la Administración General del Estado! Comprueba que conoces la Ley 40/2015."],
    defeat: ["¡Tu conocimiento de la organización central, periférica e institucional es impecable!"],
  },
  summary: [
    "Ley 40/2015: Órganos superiores (Ministros y Secretarios de Estado) y directivos (Subsecretarios, SG, SGT, DG, Subdirectores).",
    "Requisito funcionario A1: obligatorio para Subsecretarios, SGT y Subdelegados del Gobierno. Directores Generales en principio también (excepciones RD).",
    "Periférica: Delegado del Gobierno (rango Subsecretario, nombrado por RD de Consejo de Ministros) y Subdelegado (rango Subdirector, A1, nombrado por Delegado).",
    "Sector público institucional: Organismos Autónomos (Derecho administrativo) vs EPEs (Derecho privado salvo potestad pública) vs Agencias Estatales.",
  ],
};

export const W1_T6: MiniWorldDef = {
  id: "estado-t6",
  num: 6,
  temaTitle: "Tema 6: Organización territorial: CCAA y Administración local",
  name: "Ágora Territorial",
  emoji: "🗺️",
  theme: "estado",
  color: "#8a1b10",
  enemy: "urna",
  enemyName: "Urnas rebeldes",
  npcs: [
    {
      name: "Alcaldesa Municipal",
      role: "Régimen local y autonómico",
      look: { skin: "#e5b48a", hair: "#6e2c00", hairStyle: "bun", shirt: "#e67e22", pants: "#2c3e50", acc: ["badge", "scarf"], accColor: "#ffd84d" },
      pages: [
        "El Título VIII de la CE regula la organización territorial: el Estado se organiza territorialmente en municipios, provincias y Comunidades Autónomas (art. 137). Gozan de autonomía para la gestión de sus intereses.",
        "CCAA: vías de acceso a la autonomía: ordinaria (art. 143) y especial o rápida (art. 151: referéndum por mayoría absoluta de electores de cada provincia). Competencias: art. 148 (asumibles por CCAA) y art. 149.1 (exclusivas del Estado).",
        "Control sobre las CCAA (art. 153): Tribunal Constitucional (leyes), Gobierno con dictamen de Consejo de Estado (delegadas art. 150.2), Contencioso-Administrativo (reglamentos) y Tribunal de Cuentas (económico). Art. 155: medidas de cumplimiento forzoso aprobadas por mayoría absoluta del Senado.",
        "Administración local: Municipio (Alcalde, Concejales, Pleno y Comisión de Gobierno/Junta de Gobierno Local) y Provincia (Diputación Provincial). Ley 7/1985 reguladora de las Bases del Régimen Local (LBRL).",
      ],
    },
  ],
  blockQs: [
    Q("w1-t6-q1", "Según el art. 137 CE, el Estado se organiza territorialmente en:", ["Municipios, provincias y en las Comunidades Autónomas que se constituyan", "Regiones y provincias exclusivamente", "Departamentos, cantones y federaciones", "Municipios, comarcas y veguerías"], 0, "Art. 137 CE: el Estado se organiza territorialmente en municipios, en provincias y en las Comunidades Autónomas que se constituyan. Todas estas entidades gozan de autonomía para la gestión de sus respectivos intereses."),
    Q("w1-t6-q2", "¿Qué mayoría de qué Cámara se exige para aprobar las medidas de coerción estatal del art. 155 CE sobre una CCAA?", ["Mayoría absoluta del Senado", "Mayoría simple del Congreso", "Tres quintos de ambas Cámaras", "Dos tercios del Congreso"], 0, "Art. 155.1 CE: el Gobierno podrá, previo requerimiento al Presidente de la CCAA y con la aprobación por mayoría absoluta del Senado, adoptar las medidas necesarias para obligar a aquélla al cumplimiento forzoso de sus obligaciones."),
    Q("w1-t6-q3", "Según la Ley 7/1985 (LBRL), el gobierno y la administración del Municipio corresponden a:", ["El Ayuntamiento, integrado por el Alcalde y los Concejales", "Exclusivamente al Alcalde con rango unipersonal", "A la Diputación Provincial correspondiente", "A la Delegación del Gobierno"], 0, "Art. 19 y 20 LBRL: el Ayuntamiento está integrado por el Alcalde y los Concejales, elegidos por sufragio universal, directo, igual y secreto."),
  ],
  bossQs: [
    Q("w1-t6-b1", "¿Cuál de las siguientes materias es competencia exclusiva del Estado según el art. 149.1 CE?", ["Nacionalidad, inmigración, emigración, extranjería y derecho de asilo", "Fomento del turismo comarcal", "Artesanía local", "Promoción del deporte en edad escolar"], 0, "Art. 149.1.2ª CE: nacionalidad, inmigración, emigración, extranjería y derecho de asilo es competencia exclusiva del Estado."),
    Q("w1-t6-b2", "La Junta de Gobierno Local en los municipios de régimen común es obligatoria en:", ["Municipios con población superior a 5.000 habitantes y en los de menor si lo dispone su reglamento o el Pleno", "Todos los municipios sin excepción", "Solo en capitales de provincia", "Municipios con más de 20.000 habitantes exclusivamente"], 0, "Art. 20.1.b LBRL: la Junta de Gobierno Local existe en todos los municipios con población superior a 5.000 habitantes y en los de menos cuando así lo disponga su reglamento orgánico o así lo acuerde el Pleno."),
    Q("w1-t6-b3", "La moción de censura al Alcalde según la LOREG requiere:", ["Ser suscrita al menos por la mayoría absoluta del número legal de miembros de la corporación e incluir un candidato a la Alcaldía", "Ser propuesta por un concejal y votada por mayoría simple", "Aprobación por referéndum municipal", "Autorización previa del Delegado del Gobierno"], 0, "Art. 197 LOREG: exige propuesta suscrita al menos por la mayoría absoluta del número legal de miembros de la corporación e inclusión de candidato."),
  ],
  mini: {
    type: "match",
    title: "Prueba de la Organización Territorial",
    prompt: "Empareja cada concepto autonómico o local con su definición normativa.",
    pairs: [
      ["Artículo 143 CE", "Vía ordinaria de acceso a la autonomía"],
      ["Artículo 151 CE", "Vía especial con referéndum previo"],
      ["Artículo 155 CE", "Cumplimiento forzoso aprobado por el Senado"],
      ["Ley 7/1985 (LBRL)", "Bases del Régimen Local: Municipio y Provincia"],
    ],
  },
  boss: {
    name: "El Prefecto Separatista",
    kind: "king",
    intro: ["¡Pretendo romper la solidaridad interterritorial del artículo 138 CE! Demuestra tu conocimiento del Título VIII."],
    defeat: ["¡La unidad indisoluble y la autonomía territorial han sido defendidas con éxito!"],
  },
  summary: [
    "Título VIII CE: Art. 137 (municipios, provincias, CCAA). Art. 138 (solidaridad) y 139 (igualdad de derechos en todo el territorio).",
    "CCAA: Vía 143 (ordinaria) vs 151 (especial con referéndum). Competencias: 148 (autonómicas) vs 149.1 (exclusivas del Estado). Cláusula residual 149.3.",
    "Control autonómico: TC, Gobierno, Contencioso, Cuentas (art. 153). Coerción estatal: art. 155 (mayoría absoluta Senado).",
    "Régimen Local (Ley 7/1985): Municipio (Pleno, Alcalde, Tte Alcalde, Junta de Gobierno >5000 hab). Provincia: Diputación Provincial.",
  ],
};

/* ==================== MUNDO 1 (BLOQUE I COMPLETO) ==================== */

export const W1: WorldDef = {
  id: "estado",
  num: 1,
  bloque: "Bloque I",
  title: "Organización del Estado y de la Administración Pública",
  name: "Reino de la Constitución",
  emoji: "🏛️",
  theme: "estado",
  color: "#e0463a",
  enemy: "urna",
  enemyName: "Urnas rebeldes",
  temas: [
    "Tema 1: La Constitución de 1978 y su reforma",
    "Tema 2: Derechos y deberes fundamentales · Defensor del Pueblo",
    "Tema 3: Corona y Tribunal Constitucional",
    "Tema 4: Cortes Generales, Gobierno y Poder Judicial",
    "Tema 5: AGE y sector público institucional",
    "Tema 6: CCAA y Administración local",
  ],
  miniWorlds: [W1_T1, W1_T2, W1_T3, W1_T4, W1_T5, W1_T6],
  npcs: [
    W1_T1.npcs[0],
    W1_T3.npcs[0],
    W1_T4.npcs[0],
    W1_T5.npcs[0],
  ],
  blockQs: [
    W1_T1.blockQs[0],
    W1_T2.blockQs[0],
    W1_T3.blockQs[1],
    W1_T4.blockQs[0],
    W1_T5.blockQs[0],
    W1_T6.blockQs[1],
  ],
  bossQs: [
    W1_T1.bossQs[0],
    W1_T2.bossQs[0],
    W1_T3.bossQs[0],
    W1_T4.bossQs[0],
    W1_T5.bossQs[1],
    W1_T6.bossQs[1],
  ],
  mini: {
    type: "order",
    title: "Gran Desafío del Bloque I: La Pirámide Constitucional",
    prompt: "Ordena los Títulos clave de la Constitución Española de 1978.",
    items: [
      "Título Preliminar (Principios generales)",
      "Título I (Derechos y deberes fundamentales)",
      "Título II (De la Corona)",
      "Título III (De las Cortes Generales)",
      "Título IV (Del Gobierno y la Administración)",
      "Título VIII (Organización territorial del Estado)",
      "Título IX (Del Tribunal Constitucional)",
      "Título X (De la reforma constitucional)",
    ],
  },
  boss: {
    name: "Absolutus, el Rey Absoluto",
    kind: "king",
    intro: [
      "¡JA, JA, JA! ¡Yo soy el Estado! ¡Aquí no hay Constitución ni división de poderes que valga!",
      "Para destronarme tendrás que demostrar tu dominio de TODOS los 6 temas del Bloque I. ¡Acepta el desafío!",
    ],
    defeat: ["¡Imposible! La soberanía nacional reside en el pueblo español (art. 1.2 CE)... ¡El Estado de Derecho prevalece!"],
  },
  summary: [
    "CE 1978: Aprobada 31/10/78, referéndum 06/12/78, en vigor 29/12/78. Reforma arts. 167 (3/5) y 168 (2/3 + disolución + referéndum).",
    "Derechos fundamentales: art. 14 igualdad; arts. 15-29 máxima protección (preferente y sumario + amparo TC). Defensor del Pueblo: 5 años, 3/5 Cortes.",
    "Corona (art. 56): inviolable, actos refrendados. Tribunal Constitucional: 12 magistrados, 9 años, renovados por tercios cada 3 años.",
    "Cortes Generales: Congreso (350 diputados) y Senado. Investidura art. 99 (absoluta / simple a 48h). Moción de censura art. 113 (constructiva, mayoría absoluta).",
    "AGE (Ley 40/2015): Órganos superiores (Ministros, Secretarios de Estado) y directivos (Subsecretarios, SG, SGT, DG, Subdirectores). Delegados CCAA (Subsecretario) y Subdelegados (Subdirector, A1).",
    "Territorial: municipios, provincias y CCAA. Vías 143 y 151. Competencias 148 y 149.1. Coerción estatal art. 155 con mayoría absoluta del Senado.",
  ],
};
