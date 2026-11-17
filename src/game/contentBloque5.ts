import type { MiniWorldDef, WorldDef } from "./types";
import { Q } from "./contentBloque1";

/* ==================== BLOQUE V: MINI-MUNDOS ==================== */

export const W5_T1: MiniWorldDef = {
  id: "rrhh-t1",
  num: 1,
  temaTitle: "Tema 1: El personal al servicio de las AAPP y grupos del EBEP",
  name: "Campus de la Función Pública",
  emoji: "👥",
  theme: "rrhh",
  color: "#e08a1e",
  enemy: "reloj",
  enemyName: "Relojes fichadores",
  npcs: [
    {
      name: "Doña Plantilla",
      role: "Clases de personal y clasificación (TREBEP RDL 5/2015)",
      look: { skin: "#f1c7a0", hair: "#e67e22", hairStyle: "bun", shirt: "#f5b041", pants: "#34495e", acc: ["glasses", "badge"], accColor: "#2980b9" },
      pages: [
        "¡Bienvenida al Campus de Recursos Humanos! El Texto Refundido del Estatuto Básico del Empleado Público (TREBEP) fue aprobado por el Real Decreto Legislativo 5/2015, de 30 de octubre.",
        "Clases de empleados públicos (art. 8): 1) Funcionarios de carrera (relación estatutaria permanente); 2) Funcionarios interinos (nombrados por razones justificadas de necesidad y urgencia; máximo 3 años en plazas vacantes ex Ley 20/2021); 3) Personal laboral (fijo, por tiempo indefinido o temporal); y 4) Personal eventual (confianza o asesoramiento especial, libre nombramiento y cese).",
        "Grupos de clasificación profesional (art. 76): Grupo A: título universitario de Grado (dividido en Subgrupo A1 y Subgrupo A2). Grupo B: título de Técnico Superior. Grupo C: Subgrupo C1 (título de Bachiller o Técnico) y Subgrupo C2 (título de Graduado en ESO). Agrupaciones Profesionales: sin requisito de titulación.",
      ],
    },
  ],
  blockQs: [
    Q("w5-t1-q1", "¿Qué titulación académica se exige para el acceso a los cuerpos y escalas clasificados en el Subgrupo A2 (art. 76 TREBEP)?", ["Título universitario de Grado", "Bachiller o Técnico", "Técnico Superior de FP", "Licenciado o Máster obligatorio"], 0, "Art. 76 TREBEP: para el acceso a los cuerpos o escalas del Grupo A se exigirá estar en posesión del título universitario de Grado (tanto en A1 como en A2; la clasificación en uno u otro responde a la responsabilidad de las funciones)."),
    Q("w5-t1-q2", "Tras la reforma de la Ley 20/2021, ¿cuál es el plazo máximo de permanencia de un funcionario interino nombrado para cubrir una plaza vacante (art. 10 TREBEP)?", ["Tres años", "Un año improrrogable", "Cinco años", "Hasta que se jubile"], 0, "Art. 10.1.a y 10.4 TREBEP: las plazas vacantes desempeñadas por personal funcionario interino deberán ser objeto de cobertura mediante el proceso selectivo correspondiente en el plazo máximo de tres años."),
    Q("w5-t1-q3", "El personal eventual se caracteriza por realizar (art. 12 TREBEP):", ["Funciones expresamente calificadas como de confianza o asesoramiento especial", "Puestos permanentes de gestión de expedientes", "Tareas directivas que exigen ser funcionario A1", "Cualquier labor administrativa ordinaria"], 0, "Art. 12.1 TREBEP: es personal eventual el que, en virtud de nombramiento y con carácter no permanente, sólo realiza funciones expresamente calificadas como de confianza o asesoramiento especial."),
  ],
  bossQs: [
    Q("w5-t1-b1", "¿Cuál de las siguientes titulaciones se exige para el acceso al Grupo B de la función pública (art. 76 TREBEP)?", ["Título de Técnico Superior", "Título de Bachiller", "Título de Grado universitario", "Título de Graduado en ESO"], 0, "Art. 76 TREBEP: para el acceso a los cuerpos o escalas del Grupo B se exigirá estar en posesión del título de Técnico Superior."),
    Q("w5-t1-b2", "El cese del personal eventual se produce legalmente (art. 12.3 TREBEP):", ["De forma libre en cualquier momento y, en todo caso, cuando se produzca el cese de la autoridad a la que se preste la función de confianza", "Mediante expediente disciplinario motivado", "A los tres años de su nombramiento", "Solo por jubilación a los 65 años"], 0, "Art. 12.3 TREBEP: el cese de este personal tendrá lugar, en todo caso, cuando se produzca el cese de la autoridad a la que se preste la función de confianza o asesoramiento."),
    Q("w5-t1-b3", "La reserva para el ejercicio exclusivo de las funciones que impliquen la participación directa o indirecta en el ejercicio de las potestades públicas corresponde a (art. 9.2 TREBEP):", ["Exclusivamente a los funcionarios públicos", "Al personal laboral fijo", "Indistintamente a laborales y funcionarios", "A los contratos mercantiles de servicios"], 0, "Art. 9.2 TREBEP: el ejercicio de las funciones que impliquen la participación directa o indirecta en el ejercicio de las potestades públicas o en la salvaguardia de los intereses generales del Estado corresponden exclusivamente a los funcionarios públicos."),
  ],
  mini: {
    type: "match",
    title: "Prueba de los Grupos de Clasificación del TREBEP",
    prompt: "Relaciona cada Grupo o Subgrupo del TREBEP con la titulación requerida para el acceso.",
    pairs: [
      ["Grupo A (Subgrupos A1 y A2)", "Título universitario de Grado"],
      ["Grupo B", "Título de Técnico Superior"],
      ["Grupo C (Subgrupo C1)", "Título de Bachiller o Técnico"],
      ["Grupo C (Subgrupo C2)", "Título de Graduado en ESO"],
    ],
  },
  boss: {
    name: "El Clasificador Errático",
    kind: "ogre",
    intro: ["¡Asignaré puestos con ejercicio de potestades públicas a contratos temporales sin titulación!"],
    defeat: ["¡El artículo 9.2 y 76 del TREBEP son inquebrantables! La función pública ha sido salvaguardada."],
  },
  summary: [
    "EBEP (TREBEP, RDL 5/2015): personal funcionario de carrera, funcionario interino (máx 3 años en vacante), personal laboral y eventual (confianza/asesoramiento).",
    "Potestades públicas (art. 9.2): exclusivas de los funcionarios públicos.",
    "Grupos de clasificación (art. 76): A1 y A2 (Grado universitario), B (Técnico Superior), C1 (Bachiller/Técnico), C2 (ESO).",
  ],
};

export const W5_T2: MiniWorldDef = {
  id: "rrhh-t2",
  num: 2,
  temaTitle: "Tema 2: Planificación, Oferta de Empleo Público y selección de personal",
  name: "Aula Magna de las Oposiciones",
  emoji: "📝",
  theme: "rrhh",
  color: "#d37b15",
  enemy: "reloj",
  enemyName: "Relojes fichadores",
  npcs: [
    {
      name: "Tribunal Calificador",
      role: "Procesos selectivos y OEP",
      look: { skin: "#f3c9a0", hair: "#333", hairStyle: "short", shirt: "#2980b9", pants: "#1c2833", acc: ["glasses", "tie"], accColor: "#ffd84d" },
      pages: [
        "El acceso al empleo público se rige por los principios constitucionales de igualdad, mérito y capacidad (arts. 23.2 y 103.3 CE), así como publicidad, transparencia, imparcialidad y agilidad.",
        "Oferta de Empleo Público (OEP, art. 70 TREBEP): instrumento de planificación de necesidades de recursos humanos. La ejecución de la oferta de empleo público deberá desarrollarse dentro del plazo improrrogable de tres años.",
        "Sistemas selectivos de funcionarios (art. 61 TREBEP): la oposición y el concurso-oposición. La oposición es el sistema prioritario y consiste en la superación de pruebas de capacidad. El concurso (valoración exclusiva de méritos) es excepcional y exige rango de ley.",
        "Composición de los órganos de selección (art. 60): colegiados, imparciales, paridad hombre-mujer, y pertenencia a cuerpos de titulación igual o superior. ¡No pueden formar parte miembros electos ni cargos de designación política!",
      ],
    },
  ],
  blockQs: [
    Q("w5-t2-q1", "En qué plazo improrrogable debe ejecutarse la Oferta de Empleo Público aprobada anualmente (art. 70.1 TREBEP)?", ["Tres años", "Un año", "Cinco años", "Dos años improrrogables"], 0, "Art. 70.1 TREBEP: en todo caso, la ejecución de la oferta de empleo público o instrumento similar deberá desarrollarse dentro del plazo improrrogable de tres años."),
    Q("w5-t2-q2", "¿Cuáles son los sistemas selectivos ordinarios para el acceso a la condición de funcionario de carrera según el art. 61 del TREBEP?", ["La oposición y el concurso-oposición", "Exclusivamente el concurso de méritos", "La entrevista personal y recomendación", "La libre designación pública"], 0, "Art. 61.6 TREBEP: los sistemas selectivos de funcionarios de carrera serán los de oposición y concurso-oposición que deberán incluir, en todo caso, una o varias pruebas para determinar la capacidad de los aspirantes."),
    Q("w5-t2-q3", "Según el art. 60 del TREBEP, ¿quién NO puede formar parte de los tribunales u órganos de selección de personal?", ["El personal de elección o de designación política, los funcionarios interinos y el personal eventual", "Los funcionarios de carrera del mismo subgrupo", "Las mujeres en tribunales mixtos", "Los catedráticos de universidad"], 0, "Art. 60.2 TREBEP: el personal de elección o de designación política, los funcionarios interinos y el personal eventual no podrán formar parte de los órganos de selección."),
  ],
  bossQs: [
    Q("w5-t2-b1", "El sistema de concurso (valoración de méritos sin pruebas previas) para acceder a la condición de funcionario de carrera:", ["Solo podrá aplicarse en virtud de ley con carácter excepcional", "Es el sistema ordinario y preferente para todos los grupos", "Está totalmente prohibido por la Constitución", "Se aplica siempre que haya más de mil plazas"], 0, "Art. 61.7 TREBEP: sólo en virtud de ley podrá aplicarse, con carácter excepcional, el sistema de concurso que consistirá únicamente en la valoración de méritos."),
    Q("w5-t2-b2", "La promoción interna horizontal regulada en el art. 16.3 del TREBEP consiste en:", ["El acceso a cuerpos o escalas del mismo Subgrupo profesional", "El ascenso desde un Subgrupo inferior a uno superior", "El traslado voluntario de ministerio", "El aumento anual por antigüedad"], 0, "Art. 16.3.c TREBEP: promoción interna horizontal consiste en el acceso a cuerpos o escalas del mismo Subgrupo profesional de clasificación."),
    Q("w5-t2-b3", "Para participar en procesos de promoción interna vertical (art. 18 TREBEP), los funcionarios de carrera deben poseer una antigüedad mínima de:", ["Al menos dos años de servicio activo en el inferior Subgrupo", "Cinco años obligatorios", "Un año continuado", "Diez años de servicios efectivos"], 0, "Art. 18.2 TREBEP: los funcionarios deberán poseer los requisitos exigidos para el ingreso y tener una antigüedad de al menos dos años de servicio activo en el inferior Subgrupo, o Grupo de clasificación profesional."),
  ],
  mini: {
    type: "order",
    title: "Prueba del Proceso Selectivo",
    prompt: "Ordena los pasos de una convocatoria de oposiciones de la Administración General del Estado.",
    items: [
      "Aprobación y publicación de la Oferta de Empleo Público (OEP) en el BOE",
      "Publicación de la convocatoria y apertura del plazo de solicitudes (20 días hábiles)",
      "Listas provisionales y definitivas de admitidos y excluidos y nombramiento del Tribunal",
      "Celebración de los ejercicios del proceso selectivo y valoración de resultados",
      "Relación de aprobados, presentación de documentación, curso selectivo y nombramiento como funcionario de carrera",
    ],
  },
  boss: {
    name: "El Miembro Parcial del Tribunal",
    kind: "ogre",
    intro: ["¡Aprobaré a mis amigos sin examen y alteraré las listas de admitidos a mi antojo!"],
    defeat: ["¡Los principios de mérito, capacidad y la composición imparcial del art. 60 TREBEP han anulado el tribunal viciado!"],
  },
  summary: [
    "Principios rectores (art. 55): igualdad, mérito, capacidad, publicidad, transparencia, imparcialidad y agilidad.",
    "OEP (art. 70): plazo improrrogable de ejecución de 3 años.",
    "Sistemas (art. 61): oposición (preferente), concurso-oposición y concurso (excepcional, sólo por ley).",
    "Tribunales (art. 60): prohibidos miembros electos, políticos, eventuales e interinos. Principio de paridad y especialidad.",
    "Promoción interna: vertical (2 años en subgrupo inferior) y horizontal (mismo subgrupo).",
  ],
};

export const W5_T3: MiniWorldDef = {
  id: "rrhh-t3",
  num: 3,
  temaTitle: "Tema 3: Derechos, deberes, código de conducta y permisos",
  name: "Pabellón de los Derechos y la Ética Pública",
  emoji: "📜",
  theme: "rrhh",
  color: "#c26910",
  enemy: "reloj",
  enemyName: "Relojes fichadores",
  npcs: [
    {
      name: "Inspector Ética",
      role: "Derechos, jornada, vacaciones y Código de Conducta",
      look: { skin: "#d9a577", hair: "#222", hairStyle: "bald", shirt: "#566573", pants: "#17202a", acc: ["visor", "badge", "beard"], accColor: "#e74c3c" },
      pages: [
        "El TREBEP reconoce en su Título III los derechos individuales y colectivos de los empleados públicos: estabilidad en el empleo, retribución, carrera profesional, conciliación y protección social.",
        "Vacaciones anuales retribuidas (art. 50 TREBEP): 22 días hábiles por año natural de servicio, o los que correspondan proporcionalmente si el tiempo de servicio fuese menor. Se incrementan por días adicionales por antigüedad en la AGE.",
        "Permisos retribuidos (art. 48): por fallecimiento o enfermedad grave de cónyuge o familiar de primer grado (3 días hábiles en misma localidad, 5 en distinta); por traslado de domicilio habitual (1 día); por exámenes finales en centros oficiales (los días de celebración); por deber inexcusable, etc.",
        "Código de Conducta (Capítulo VI, arts. 52-54): se divide en Principios Éticos (respeto a la CE, neutralidad, lealtad institucional, austeridad) y Principios de Conducta (trato correcto a la ciudadanía, diligencia, confidencialidad, actualización profesional).",
      ],
    },
  ],
  blockQs: [
    Q("w5-t3-q1", "¿Cuántos días hábiles de vacaciones anuales retribuidas prevé con carácter general el art. 50 del TREBEP por año natural de servicio?", ["22 días hábiles", "30 días naturales", "20 días hábiles", "25 días hábiles"], 0, "Art. 50 TREBEP: los funcionarios públicos tendrán derecho a disfrutar, como mínimo, durante cada año natural, de unas vacaciones retribuidas de veintidós días hábiles, o de los días que correspondan proporcionalmente si el tiempo de servicio durante el año fue menor."),
    Q("w5-t3-q2", "¿De cuántos días de permiso retribuido dispone un empleado público por traslado de su domicilio habitual sin cambio de residencia (art. 48.b TREBEP)?", ["Un día", "Dos días hábiles", "Tres días", "Una semana"], 0, "Art. 48.b TREBEP: por traslado de domicilio sin cambio de residencia, un día de permiso retribuido."),
    Q("w5-t3-q3", "Los principios que integran el Código de Conducta de los empleados públicos regulado en el TREBEP se dividen legalmente en:", ["Principios éticos y principios de conducta", "Principios de obediencia ciega y de mando", "Normas mercantiles y acuerdos sindicales", "Preceptos penales y civiles"], 0, "Arts. 52, 53 y 54 TREBEP: los empleados públicos deberán desempeñar con diligencia las tareas y ajustar su actuación a los principios éticos y a los principios de conducta."),
  ],
  bossQs: [
    Q("w5-t3-b1", "¿Cuál de los siguientes es un 'principio ético' recogido expresamente en el art. 53 del TREBEP?", ["Su actuación perseguirá la satisfacción de los intereses generales y se fundamentará en consideraciones objetivas sin privilegios", "Llegar puntual todos los días a la oficina", "Vestir uniforme oficial en todo momento", "Renunciar a las vacaciones anuales"], 0, "Art. 53.1 TREBEP: los empleados públicos actuarán con rectitud, persiguiendo la satisfacción de los intereses generales de la ciudadanía con base en consideraciones objetivas desprovistas de cualquier discriminación o beneficio personal."),
    Q("w5-t3-b2", "En caso de fallecimiento, accidente o enfermedad graves del cónyuge o pariente de primer grado de consanguinidad o afinidad (art. 48.a TREBEP), el permiso es de:", ["Tres días hábiles si es en la misma localidad y cinco días hábiles si es en distinta localidad", "Un día natural", "Quince días continuados", "Dos días hábiles siempre"], 0, "Art. 48.a TREBEP: tres días hábiles cuando el suceso se produzca en la misma localidad, y cinco días hábiles cuando sea en distinta localidad."),
    Q("w5-t3-b3", "El permiso por nacimiento para la madre biológica o progenitor diferente según el art. 49 del TREBEP tiene una duración de:", ["16 semanas", "12 semanas", "20 semanas", "8 semanas"], 0, "Art. 49.a y 49.c TREBEP: el permiso por nacimiento tiene una duración de 16 semanas, de las cuales las 6 semanas inmediatas posteriores al parto serán de descanso obligatorio para ambos progenitores."),
  ],
  mini: {
    type: "match",
    title: "Prueba de los Permisos del TREBEP",
    prompt: "Relaciona cada hecho causante con el permiso retribuido correspondiente.",
    pairs: [
      ["Vacaciones anuales retribuidas", "22 días hábiles mínimos por año natural"],
      ["Traslado de domicilio habitual", "1 día"],
      ["Fallecimiento de familiar de primer grado (misma localidad)", "3 días hábiles"],
      ["Fallecimiento de familiar de primer grado (distinta localidad)", "5 días hábiles"],
    ],
  },
  boss: {
    name: "El Infractor del Código Ético",
    kind: "ogre",
    intro: ["¡Aceptaré regalos de empresas licitadoras y me ausentaré de la oficina sin justificarlo!"],
    defeat: ["¡Los principios de integridad y el Código de Conducta de los arts. 52 a 54 TREBEP te han inhabilitado!"],
  },
  summary: [
    "Vacaciones (art. 50): 22 días hábiles mínimos por año natural (más días adicionales por antigüedad trienios en AGE).",
    "Permisos (art. 48): traslado domicilio (1 día), fallecimiento 1er grado (3 d misma loc / 5 d distinta loc), exámenes oficiales.",
    "Conciliación (art. 49): permiso por nacimiento 16 semanas (6 obligatorias inmediatas a jornada completa).",
    "Código de Conducta (arts. 52-54): Principios éticos (art. 53: neutralidad, eficacia, no conflicto intereses) y de conducta (art. 54: diligencia, sigilo, trato correcto).",
  ],
};

export const W5_T4: MiniWorldDef = {
  id: "rrhh-t4",
  num: 4,
  temaTitle: "Tema 4: Situaciones administrativas y pérdida de la condición de funcionario",
  name: "Torre de las Transiciones Administrativas",
  emoji: "🏛️",
  theme: "rrhh",
  color: "#b05a0d",
  enemy: "reloj",
  enemyName: "Relojes fichadores",
  npcs: [
    {
      name: "Don Servicio",
      role: "Situaciones administrativas (arts. 85-92 TREBEP)",
      look: { skin: "#e5b48a", hair: "#3d2b1f", hairStyle: "short", shirt: "#2e86c1", pants: "#1b2631", acc: ["tie", "badge"], accColor: "#f5b041" },
      pages: [
        "Las situaciones administrativas de los funcionarios de carrera se recogen en el art. 85 del TREBEP: 1) Servicio activo; 2) Servicios especiales; 3) Servicio en otras Administraciones Públicas; 4) Excedencia; y 5) Suspensión de funciones.",
        "Servicios especiales (art. 87): cargos electos parlamentarios, miembros del Gobierno, altos cargos. Se computa el tiempo a efectos de trienios, ascensos y reserva del puesto de trabajo.",
        "Excedencias (art. 89): a) Voluntaria por interés particular (exige 5 años de servicios efectivos inmediatamente anteriores; no devenga retribuciones ni computa tiempo); b) Voluntaria por agrupación familiar (cónyuge funcionario en otra localidad); c) Por cuidado de familiares (hijos hasta 3 años, familiares hasta 2º grado); d) Por violencia de género o terrorista.",
        "Pérdida de la condición de funcionario (art. 63): renuncia expresa aceptada; pérdida de la nacionalidad; jubilación total; sanción disciplinaria de separación del servicio; e inhabilitación absoluta o especial para empleo o cargo público por sentencia judicial firme.",
      ],
    },
  ],
  blockQs: [
    Q("w5-t4-q1", "¿Cuál de las siguientes NO es una situación administrativa reconocida en el art. 85 del TREBEP para funcionarios de carrera?", ["Licencia por estudios en el extranjero", "Servicio activo", "Servicios especiales", "Suspensión de funciones"], 0, "Art. 85 TREBEP: las situaciones son exclusivamente: servicio activo, servicios especiales, servicio en otras Administraciones Públicas, excedencia y suspensión de funciones."),
    Q("w5-t4-q2", "Para solicitar la excedencia voluntaria por interés particular, ¿cuántos años de servicios efectivos inmediatamente anteriores se exigen (art. 89.2 TREBEP)?", ["Haber prestado servicios efectivos en cualquiera de las AAPP durante un periodo mínimo de cinco años", "Dos años", "Diez años", "Un año"], 0, "Art. 89.2 TREBEP: la concesión de excedencia voluntaria por interés particular quedará subordinada a las necesidades del servicio y requerirá haber prestado servicios efectivos durante un periodo mínimo de cinco años."),
    Q("w5-t4-q3", "Son causas legales de pérdida de la condición de funcionario de carrera según el art. 63 del TREBEP:", ["La renuncia, la pérdida de nacionalidad, la jubilación total, la separación del servicio y la inhabilitación por sentencia judicial firme", "El cambio de sindicato", "La excedencia por cuidado de hijos", "El traslado forzoso de residencia"], 0, "Art. 63 TREBEP: enumera tasadamente la renuncia, pérdida de nacionalidad, jubilación total, separación del servicio e inhabilitación absoluta o especial firme."),
  ],
  bossQs: [
    Q("w5-t4-b1", "Un funcionario de carrera nombrado Secretario de Estado pasa legalmente a la situación administrativa de:", ["Servicios especiales", "Excedencia forzosa", "Servicio activo con complemento", "Suspensión de funciones"], 0, "Art. 87.1.a y 87.1.c TREBEP: los funcionarios de carrera pasarán a la situación de servicios especiales cuando sean nombrados para desempeñar cargos de miembros del Gobierno o altos cargos."),
    Q("w5-t4-b2", "En la excedencia por cuidado de familiares (art. 89.4 TREBEP), ¿cuánto tiempo tiene reservado el funcionario su puesto de trabajo de origen en la AGE?", ["Dos años de reserva del mismo puesto (y el tercer año reserva de puesto en la misma localidad y retribución)", "Tres meses únicamente", "Cinco años completos sin límite", "No tiene reserva en ningún caso"], 0, "Art. 89.4 TREBEP: el periodo de permanencia en esta situación será computable a efectos de trienios, carrera y derechos en el régimen de Seguridad Social. El puesto de trabajo desempeñado se reservará, al menos, durante dos años."),
    Q("w5-t4-b3", "En caso de recuperación de la nacionalidad española tras haberla perdido, el interesado (art. 68 TREBEP):", ["Podrá solicitar la rehabilitación de su condición de funcionario de carrera", "Debe volver a opositar obligatoriamente desde cero", "Pierde para siempre los derechos adquiridos", "Pasa automáticamente a personal laboral fijo"], 0, "Art. 68.2 TREBEP: en caso de recuperación de la nacionalidad sobre cuya pérdida se fundó la extinción, el interesado podrá solicitar la rehabilitación de su condición de funcionario, que le será concedida."),
  ],
  mini: {
    type: "match",
    title: "Prueba de las Situaciones Administrativas",
    prompt: "Relaciona cada supuesto de hecho con la situación administrativa que le corresponde.",
    pairs: [
      ["Nombramiento como Ministro o Diputado", "Servicios especiales (art. 87)"],
      ["Cuidado de hijo menor de tres años", "Excedencia por cuidado de familiares (art. 89.4)"],
      ["Interés personal tras 5 años de servicio", "Excedencia voluntaria por interés particular (art. 89.2)"],
      ["Sanción penal o disciplinaria firme de suspensión", "Suspensión de funciones (art. 90)"],
    ],
  },
  boss: {
    name: "El Tránsfuga de Puestos",
    kind: "ogre",
    intro: ["¡Ocuparé puestos en dos ministerios y cobraré sueldos duplicados sin pedir excedencia!"],
    defeat: ["¡El régimen estricto del artículo 85 TREBEP ha regularizado tus situaciones ilegales!"],
  },
  summary: [
    "Situaciones (art. 85): servicio activo, servicios especiales (altos cargos, diputados; computa todo + reserva puesto), servicio en otras AAPP, excedencia, suspensión de funciones.",
    "Excedencias (art. 89): interés particular (requiere 5 años previos; no devenga ni computa), agrupación familiar, cuidado de familiares (máx 3 años, reserva puesto 2 años), violencia de género/terrorista.",
    "Pérdida de condición (art. 63): renuncia (aceptada por escrito), pérdida de nacionalidad, jubilación total, separación del servicio disciplinaria e inhabilitación judicial firme.",
    "Rehabilitación (art. 68): por recuperación de nacionalidad o superación de la causa de incapacidad.",
  ],
};

export const W5_T5: MiniWorldDef = {
  id: "rrhh-t5",
  num: 5,
  temaTitle: "Tema 5: Régimen disciplinario e incompatibilidades",
  name: "Corte Disciplinaria y de Ética",
  emoji: "⚖️",
  theme: "rrhh",
  color: "#9c460a",
  enemy: "reloj",
  enemyName: "Relojes fichadores",
  npcs: [
    {
      name: "Fiscal Administrativo",
      role: "Régimen disciplinario (TREBEP) e Incompatibilidades (Ley 53/1984)",
      look: { skin: "#f1c7a0", hair: "#1c1c1c", hairStyle: "short", shirt: "#34495e", pants: "#17202a", acc: ["robe", "glasses"], accColor: "#e74c3c" },
      pages: [
        "El Título VII del TREBEP regula el régimen disciplinario. Las faltas se clasifican en: Muy graves (art. 95.2), Graves y Leves (las que determine la ley aplicable).",
        "Faltas muy graves del art. 95.2: incumplimiento del deber de fidelidad a la CE; abandono del servicio; adopción de acuerdos manifiestamente ilegales; acoso sexual o por razón de sexo; prevalencia de la condición de empleado público para obtener beneficio propio; etc.",
        "Sanciones (art. 96): separación del servicio (para funcionarios) o despido disciplinario (para laborales); suspensión firme de funciones (hasta un máximo de 6 años); traslado forzoso; demérito; y apercibimiento.",
        "Prescripción (art. 97): Las faltas muy graves prescriben a los 3 años, las graves a los 2 años y las leves a los 6 meses. Las sanciones muy graves prescriben a los 3 años, las graves a los 2 años y las leves al año.",
        "Incompatibilidades: Ley 53/1984: dedicación a un solo puesto en el sector público salvo excepciones docentes o sanitarias tasadas por ley, y previa autorización formal de compatibilidad.",
      ],
    },
  ],
  blockQs: [
    Q("w5-t5-q1", "¿En qué plazo prescriben las faltas disciplinarias muy graves de los funcionarios públicos (art. 97.1 TREBEP)?", ["A los tres años", "A los dos años", "A los seis meses", "A los cinco años"], 0, "Art. 97.1 TREBEP: las infracciones muy graves prescribirán a los tres años, las graves a los dos años y las leves a los seis meses."),
    Q("w5-t5-q2", "¿Cuál es la sanción disciplinaria más grave que puede imponerse a un funcionario de carrera y que conlleva la pérdida definitiva de su condición?", ["La separación del servicio", "La suspensión de funciones de seis meses", "El traslado forzoso con cambio de residencia", "El apercibimiento por escrito"], 0, "Art. 96.1.a TREBEP: la separación del servicio de los funcionarios, que en el caso de los funcionarios interinos comportará la revocación de su nombramiento, y que sólo podrá sancionar la comisión de faltas muy graves."),
    Q("w5-t5-q3", "Según la Ley 53/1984 de incompatibilidades del personal de las AAPP, como regla general un empleado público:", ["No podrá compatibilizar sus funciones con el desempeño de un segundo puesto de trabajo, cargo o actividad en el sector público", "Puede tener dos puestos a tiempo completo si es en distinto ministerio", "Puede trabajar en cualquier empresa privada sin pedir compatibilidad", "Solo tiene incompatibilidad si gana más de 100.000 euros"], 0, "Art. 1.1 Ley 53/1984: el personal comprendido en el ámbito de aplicación de esta Ley no podrá compatibilizar sus actividades con el desempeño de un segundo puesto de trabajo, cargo o actividad en el sector público, salvo las excepciones tasadas (docencia universitaria o sanitaria)."),
  ],
  bossQs: [
    Q("w5-t5-b1", "¿Cuál es el tiempo máximo de duración que puede alcanzar la sanción de suspensión firme de funciones impuesta a un funcionario (art. 96.1.c TREBEP)?", ["No podrá exceder de seis años", "Tres años como máximo", "Diez años", "Dos años"], 0, "Art. 96.1.c TREBEP: la suspensión firme de funciones, o de empleo y sueldo en el caso del personal laboral, tendrá una duración máxima de seis años."),
    Q("w5-t5-b2", "Las sanciones disciplinarias impuestas por faltas graves prescriben en el plazo de (art. 97.2 TREBEP):", ["Dos años", "Tres años", "Un año", "Seis meses"], 0, "Art. 97.2 TREBEP: las sanciones impuestas por faltas muy graves prescribirán a los tres años, las impuestas por faltas graves a los dos años y las impuestas por faltas leves al año."),
    Q("w5-t5-b3", "La realización de actividades privadas que se relacionen directamente con los asuntos en los que interviene el empleado público en su departamento (Ley 53/1984):", ["Está expresamente prohibida y no es susceptible de autorización de compatibilidad", "Es legal si se realiza fuera de horario", "Se autoriza automáticamente si se cobra menos del salario mínimo", "Depende del visto bueno del sindicato"], 0, "Art. 12.1.a Ley 53/1984: no se podrá autorizar o reconocer compatibilidad alguna para actividades privadas que se relacionen directamente con los asuntos en que intervenga el departamento o entidad de adscripción del empleado."),
  ],
  mini: {
    type: "match",
    title: "Prueba de la Prescripción Disciplinaria",
    prompt: "Relaciona la gravedad de la falta y la sanción con su plazo legal de prescripción (art. 97 TREBEP).",
    pairs: [
      ["Faltas muy graves", "Prescriben a los 3 años"],
      ["Faltas graves", "Prescriben a los 2 años"],
      ["Faltas leves", "Prescriben a los 6 meses"],
      ["Sanciones leves", "Prescriben al año (1 año)"],
    ],
  },
  boss: {
    name: "El Ogro de la Incompatibilidad",
    kind: "ogre",
    intro: ["¡GRRR! ¡Cobro de dos puestos públicos al 100% y asesoro en privado a licitadores del ministerio! ¡Nadie me sanciona!"],
    defeat: ["¡Maldita Ley 53/1984 y artículo 95.2 del TREBEP! ¡Separación del servicio inmediata!"],
  },
  summary: [
    "Faltas (art. 95): muy graves (tasadas: fidelidad a la CE, abandono servicio, acoso, prevaricación), graves y leves.",
    "Sanciones (art. 96): separación del servicio (sólo muy graves), suspensión firme (máx 6 años), traslado forzoso, demérito, apercibimiento.",
    "Prescripción infracciones (art. 97.1): muy graves 3 años, graves 2 años, leves 6 meses.",
    "Prescripción sanciones (art. 97.2): muy graves 3 años, graves 2 años, leves 1 año.",
    "Incompatibilidades (Ley 53/1984): dedicación a un solo puesto en sector público (salvo excepciones docentes/sanitarias). Prohibición actividades privadas con conflicto de interés.",
  ],
};

export const W5_T6: MiniWorldDef = {
  id: "rrhh-t6",
  num: 6,
  temaTitle: "Tema 6: Retribuciones, negociación colectiva y mutualismo (MUFACE)",
  name: "Cámara de la Nómina y la Protección Social",
  emoji: "💶",
  theme: "rrhh",
  color: "#803504",
  enemy: "reloj",
  enemyName: "Relojes fichadores",
  npcs: [
    {
      name: "Habilitada Nómina",
      role: "Retribuciones, negociación y MUFACE",
      look: { skin: "#f3c9a0", hair: "#2c3e50", hairStyle: "long", shirt: "#27ae60", pants: "#273746", acc: ["glasses", "scarf"], accColor: "#f4d03f" },
      pages: [
        "Retribuciones de los funcionarios (arts. 22-24 TREBEP):",
        "1) Retribuciones básicas: Sueldo (fijado anualmente por Ley de Presupuestos según Grupo/Subgrupo), Trienios (cantidad fija por cada 3 años de servicio para cada Subgrupo) y Pagas extraordinarias (dos al año, junio y diciembre, con sueldo, trienios y parte de complementos).",
        "2) Retribuciones complementarias: Complemento de destino (vinculado al nivel del puesto de trabajo, del nivel 14 al 30); Complemento específico (dificultad técnica, dedicación, responsabilidad, peligrosidad); Complemento de productividad (especial rendimiento); y Gratificaciones (por servicios extraordinarios fuera de la jornada, no fijas).",
        "Negociación colectiva y representación (arts. 31-46): Juntas de Personal (en unidades con 50 o más funcionarios) y Delegados de Personal (en unidades con entre 6 y 49 funcionarios). Mesas Generales de Negociación.",
        "Seguridad Social: los funcionarios civiles del Estado se integran en el Régimen del Mutualismo Administrativo (MUFACE, RDL 4/2004). El Régimen de Clases Pasivas del Estado protege a los ingresados antes del 1 de enero de 2011; los funcionarios ingresados con posterioridad se encuadran en el Régimen General de la Seguridad Social.",
      ],
    },
  ],
  blockQs: [
    Q("w5-t6-q1", "Cuáles de los siguientes conceptos retributivos tienen la consideración legal de retribuciones básicas según el art. 23 del TREBEP?", ["El sueldo, los trienios y las pagas extraordinarias", "El complemento de destino y el complemento específico", "La productividad y las dietas por desplazamiento", "El sueldo y el complemento de productividad"], 0, "Art. 23 TREBEP: son retribuciones básicas las que retribuyen al funcionario según la adscripción de su cuerpo o escala: el sueldo asignado a cada Subgrupo, los trienios y las pagas extraordinarias."),
    Q("w5-t6-q2", "El complemento que retribuye la dificultad técnica, dedicación, incompatibilidad, responsabilidad, peligrosidad o penosidad del puesto es:", ["El complemento específico", "El complemento de destino", "El trienio", "La gratificación extraordinaria"], 0, "Art. 24.b TREBEP: el complemento específico retribuye las condiciones particulares de algunos puestos de trabajo en atención a su especial dificultad técnica, dedicación, responsabilidad, incompatibilidad, peligrosidad o penosidad."),
    Q("w5-t6-q3", "Los funcionarios civiles de la AGE que ingresaron en la función pública a partir del 1 de enero de 2011 quedan obligatoriamente integrados a efectos de pensiones en:", ["El Régimen General de la Seguridad Social", "El Régimen de Clases Pasivas del Estado exclusivamente", "El Régimen Especial de Trabajadores Autónomos (RETA)", "Planes de pensiones privados obligatorios"], 0, "RDL 13/2010: el personal que ingrese a partir del 1 de enero de 2011 en los cuerpos de la Administración del Estado quedará integrado en el Régimen General de la Seguridad Social a efectos de pensiones de jubilación."),
  ],
  bossQs: [
    Q("w5-t6-b1", "¿A partir de cuántos funcionarios en una unidad electoral se constituye legalmente una Junta de Personal (art. 39 TREBEP)?", ["A partir de 50 funcionarios", "A partir de 10 funcionarios", "A partir de 100 funcionarios", "A partir de 25 funcionarios"], 0, "Art. 39.1 TREBEP: las Juntas de Personal se constituirán en unidades electorales que cuenten con un censo mínimo de 50 funcionarios. Para censos de 6 a 49 se eligen Delegados de Personal."),
    Q("w5-t6-b2", "¿El complemento de productividad puede tener carácter fijo en su cuantía o periódico en su asignación?", ["En ningún caso podrá tener carácter fijo en la cuantía ni periódico en su asignación", "Sí, es un concepto idéntico al sueldo base", "Solo para funcionarios del Subgrupo A1", "Sí, mediante acuerdo de la Junta de Personal"], 0, "Art. 24.c TREBEP: la productividad está destinada a retribuir el especial rendimiento, la actividad y dedicación extraordinaria y el interés con que se desempeña el trabajo, sin que en ningún caso pueda originar derecho adquirido ni tener cuantía fija periódica."),
    Q("w5-t6-b3", "La mutualidad administrativa que gestiona la asistencia sanitaria y prestaciones sociales de los funcionarios civiles del Estado es:", ["MUFACE (Mutualidad General de Funcionarios Civiles del Estado)", "ISFAS", "MUGEJU", "El IMSERSO"], 0, "MUFACE es el organismo público que gestiona el Régimen Especial de la Seguridad Social de los Funcionarios Civiles del Estado (ISFAS es para militares y MUGEJU para justicia)."),
  ],
  mini: {
    type: "match",
    title: "Prueba de la Estructura Salarial del Funcionario",
    prompt: "Clasifica cada concepto retributivo según su naturaleza básica o complementaria.",
    pairs: [
      ["Sueldo base según Subgrupo", "Retribución básica (art. 23)"],
      ["Trienio (por cada 3 años de servicio)", "Retribución básica (art. 23)"],
      ["Complemento de destino (nivel 14 a 30)", "Retribución complementaria (art. 24)"],
      ["Complemento específico (dificultad/penosidad)", "Retribución complementaria (art. 24)"],
    ],
  },
  boss: {
    name: "El Pagador Fraudulento",
    kind: "ogre",
    intro: ["¡Consolidaré el complemento de productividad como fijo y eliminaré los trienios de la nómina!"],
    defeat: ["¡La legalidad retributiva de los artículos 23 y 24 del TREBEP ha blindado la nómina funcionarial!"],
  },
  summary: [
    "Retribuciones básicas (art. 23): sueldo (por Subgrupo), trienios (cada 3 años) y dos pagas extra (junio y diciembre).",
    "Retribuciones complementarias (art. 24): complemento de destino (nivel puesto), complemento específico (dificultad, penosidad, dedicación), productividad (no fija, especial rendimiento) y gratificaciones (fuera de jornada).",
    "Representación (art. 39): Delegados de Personal (6 a 49 funcionarios) y Juntas de Personal (50 o más). Mesas Generales de Negociación.",
    "Protección social: Mutualismo (MUFACE). Clases Pasivas (ingresados antes 01/01/2011); Régimen General de la Seguridad Social (ingresados desde 2011).",
  ],
};

/* ==================== MUNDO 5 (BLOQUE V COMPLETO) ==================== */

export const W5: WorldDef = {
  id: "rrhh",
  num: 5,
  bloque: "Bloque V",
  title: "Administración de recursos humanos",
  name: "Campus de la Función Pública",
  emoji: "👥",
  theme: "rrhh",
  color: "#e08a1e",
  enemy: "reloj",
  enemyName: "Relojes fichadores",
  temas: [
    "Tema 1: El personal al servicio de las AAPP y grupos del EBEP",
    "Tema 2: Planificación, Oferta de Empleo Público y selección de personal",
    "Tema 3: Derechos, deberes, código de conducta y permisos",
    "Tema 4: Situaciones administrativas y pérdida de la condición de funcionario",
    "Tema 5: Régimen disciplinario e incompatibilidades",
    "Tema 6: Retribuciones, negociación colectiva y mutualismo (MUFACE)",
  ],
  miniWorlds: [W5_T1, W5_T2, W5_T3, W5_T4, W5_T5, W5_T6],
  npcs: [
    W5_T1.npcs[0],
    W5_T2.npcs[0],
    W5_T3.npcs[0],
    W5_T4.npcs[0],
    W5_T6.npcs[0],
  ],
  blockQs: [
    W5_T1.blockQs[0],
    W5_T2.blockQs[0],
    W5_T3.blockQs[0],
    W5_T4.blockQs[1],
    W5_T5.blockQs[0],
    W5_T6.blockQs[0],
  ],
  bossQs: [
    W5_T1.bossQs[0],
    W5_T2.bossQs[0],
    W5_T3.bossQs[0],
    W5_T4.bossQs[0],
    W5_T5.bossQs[0],
    W5_T6.bossQs[0],
  ],
  mini: {
    type: "match",
    title: "Gran Desafío del Bloque V: El Estatuto Básico del Empleado Público",
    prompt: "Empareja cada concepto central del TREBEP con su contenido normativo.",
    pairs: [
      ["Grupo A (Subgrupos A1 y A2)", "Título universitario de Grado"],
      ["Oferta de Empleo Público", "Ejecución improrrogable en 3 años"],
      ["Vacaciones retribuidas", "22 días hábiles por año natural"],
      ["Faltas muy graves", "Prescriben a los 3 años (art. 97)"],
      ["Retribuciones básicas", "Sueldo, trienios y pagas extraordinarias"],
    ],
  },
  boss: {
    name: "El Ogro de la Incompatibilidad",
    kind: "ogre",
    intro: [
      "¡GRRR! ¡Yo cobro de DOS puestos públicos simultáneos y tengo negocios privados incompatibles!",
      "Solo dominando los 6 temas del TREBEP y la Ley 53/1984 podrás obligarme a cumplir la ley. ¡A luchar!",
    ],
    defeat: ["¡Maldita Ley 53/1984 y TREBEP! ¡Tendré que optar por un solo puesto y devolver lo indebido...!"],
  },
  summary: [
    "TREBEP (RDL 5/2015): personal funcionario carrera, interino (máx 3 años vacante), laboral, eventual (confianza).",
    "Grupos (art. 76): A1 y A2 (Grado), B (Técnico Superior), C1 (Bachiller), C2 (ESO).",
    "OEP (art. 70): ejecución en 3 años. Selección (art. 61): oposición (preferente), concurso-oposición y concurso excepcional por ley.",
    "Jornada y permisos (art. 48 y 50): 22 días hábiles de vacaciones; código ético y conducta (arts. 52-54).",
    "Situaciones (art. 85): servicio activo, servicios especiales (altos cargos), excedencias (particular 5 años; cuidado familiares), suspensión.",
    "Régimen disciplinario: faltas muy graves (3 años prescripción), graves (2 años), leves (6 meses). Incompatibilidades: Ley 53/1984.",
    "Retribuciones: básicas (sueldo, trienios, pagas extra) y complementarias (destino, específico, productividad, gratificaciones). MUFACE y Clases Pasivas.",
  ],
};
