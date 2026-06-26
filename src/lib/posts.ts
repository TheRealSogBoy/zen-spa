export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  readTime: number; // in minutes
  coverImage: string;
  coverAlt: string;
  category: string;
  categorySlug: string;
  serviceUrl: string; // internal link to service page
  whatsappMsg: string; // pre-filled WhatsApp message
  content: BlogSection[];
  dateISO: string;
}

export interface BlogSection {
  type: 'paragraph' | 'heading' | 'subheading' | 'list' | 'highlight' | 'cta-inline' | 'spa-image' | 'comparison-table';
  content?: string;
  items?: string[];
  imageUrl?: string;
  imageAlt?: string;
  linkText?: string;
  linkHref?: string;
}

const WA_BASE = 'https://wa.me/573156881765?text=';

export const blogPosts: BlogPost[] = [
  {
    slug: 'monotonia-en-pareja',
    title: 'El plan diferente que tu pareja te está pidiendo a gritos para este fin de semana',
    excerpt: 'En el norte del Valle, las parejas pasan el fin de semana juntas pero se sienten cada vez más distantes. La ciencia explica por qué la rutina apaga la chispa, y cómo un cambio de ambiente de pocas horas lo cambia todo.',
    readTime: 5,
    coverImage: '/images/blog/cover-pareja-spa.webp',
    coverAlt: 'Pareja disfrutando un ritual de conexión en spa privado en Roldanillo Valle',
    category: 'Parejas y Conexión',
    categorySlug: 'parejas',
    serviceUrl: '/experiencias',
    whatsappMsg: encodeURIComponent('Hola Zen Spa! Leí el artículo de la monotonía y quiero reservar un plan de parejas.'),
    dateISO: '2025-09-15',
    content: [
      { type: 'paragraph', content: 'Es viernes por la noche en Roldanillo o Zarzal. Se acerca el fin de semana y, casi sin pensarlo, surge la pregunta de siempre: "¿Qué hacemos hoy?". En la mayoría de los casos, la respuesta es la misma de todas las semanas: ir a cenar al mismo sitio de siempre, dar una vuelta por el parque principal a tomar un café o una cerveza, o pasar el domingo en una piscina o finca familiar con un grupo grande de personas.' },
      { type: 'paragraph', content: 'A simple vista, parece un buen plan para descansar. Sin embargo, hay algo raro que le pasa a muchas parejas en el norte del Valle: a pesar de pasar juntos todo el fin de semana, el lunes por la mañana se sienten igual de cansados, distantes y con la sensación de que no compartieron tiempo de verdad.' },
      { type: 'paragraph', content: 'Esto no es una idea tuya. Hay una diferencia gigante entre "estar en el mismo lugar" y "conectar de verdad". Y la ciencia explica muy fácil por qué la rutina aburre y agota a las parejas.' },
      { type: 'heading', content: '¿Por qué el cerebro se aburre de hacer siempre lo mismo?' },
      { type: 'paragraph', content: 'Cuando una relación empieza, todo es nuevo y emocionante. Tu cerebro produce una sustancia llamada dopamina ($C_8H_{11}NO_2$), que es la encargada de darnos esa sensación de felicidad, cosquilleo y emoción por lo desconocido.' },
      { type: 'paragraph', content: 'Con los años, el cerebro se acostumbra a lo repetitivo para ahorrar energía. Si todos los fines de semana hacen exactamente lo mismo, esa chispa de la emoción simplemente se apaga.' },
      { type: 'list', items: [
        'Dejan de hablar de ustedes: Al estar en el mismo ambiente de siempre, las conversaciones terminan siendo sobre el trabajo, las deudas, los niños o los problemas de la casa. Dejan de actuar como pareja y se vuelven "administradores" de la rutina.',
        'El calor y el estrés del día a día: Vivir con el calor constante del Valle, que supera los $30^\\circ\\text{C}$, sumado al cansancio de la semana, acumula en tu cuerpo una hormona llamada cortisol (la hormona del estrés). Si el fin de semana no hacen algo que de verdad relaje el cuerpo, esa tensión acumulada sale en forma de peleas tontas, mala cara o silencios incómodos.',
      ]},
      { type: 'heading', content: 'El mito de "pasar tiempo juntos"' },
      { type: 'paragraph', content: 'Muchos creen que por estar sentados al lado ya están compartiendo. Pero si miras con cuidado, ese tiempo suele estar lleno de distracciones: estar en un restaurante pero cada uno mirando la pantalla del celular; ir a una finca o reunión familiar donde tienes que atender a la gente, cuidar a los niños o preocuparte por la comida; o usar el camino en el carro para discutir los pendientes de la semana.' },
      { type: 'paragraph', content: 'Para que tu cuerpo y tu mente se relajen de verdad y sientas esa complicidad con tu pareja, el cerebro necesita dos cosas que no se encuentran en cualquier lugar: cero distracciones y absoluta privacidad.' },
      { type: 'cta-inline', content: 'Descubre nuestras experiencias de pareja en Zen Spa', linkText: 'Ver rituales de conexión', linkHref: '/experiencias' },
      { type: 'heading', content: 'Cómo romper la rutina con un "reseteo" para los dos' },
      { type: 'paragraph', content: 'Para recuperar la química de los primeros días, no necesitan planear un viaje largo de varias horas ni gastar en peajes. Lo que necesitan es un cambio de ambiente total por un par de horas: entrar a un espacio diferente, fresco donde el aire acondicionado los haga olvidar el calor de la calle, con luz suave y música que calme el ritmo del corazón. Y una relajación física real: un buen masaje con las manos y el calor de las piedras volcánicas no solo quita el dolor de espalda de la semana; hace que el cuerpo libere oxitocina (la hormona del afecto y la confianza), borrando el estrés de un solo golpe.' },
      { type: 'heading', content: 'El plan que se convertirá en su nuevo escape favorito' },
      { type: 'paragraph', content: 'En Zen Spa Bienestar creamos el concepto de Santuario Cerrado. Aquí no compartes sala con extraños ni hay ruidos molestos. Cerramos el spa exclusivamente para ustedes dos, asegurando que nadie los moleste:' },
      { type: 'list', items: [
        'Ritual de Conexión para Dos ($260.000 COP por pareja): Una pausa de $60\\text{ minutos}$ perfecta para apagar la mente. Incluye masaje relajante de cuerpo completo sincronizado para los dos, reflexología en los pies para quitar el cansancio, bambuterapia para aliviar la espalda, hidratación en el rostro, baño de vapor con hierbas y copas de vino o crema de whisky de cortesía.',
        'Paquete Romántico Premium ($295.000 COP por pareja): Una experiencia más larga de $75\\text{ minutos}$ que incluye el masaje premium con piedras volcánicas calientes para relajar los músculos a fondo, nutrición para el rostro, fresas con crema y absoluta privacidad en nuestras cabinas privadas.',
      ]},
      { type: 'spa-image', imageUrl: '/images/spa-local/camillas-pareja.webp', imageAlt: 'Camillas de masaje en pareja en el Santuario Privado de Zen Spa Bienestar en Roldanillo' },
      { type: 'paragraph', content: 'A veces, la distancia en la pareja no es falta de amor, es simplemente cansancio acumulado. Date el gusto de apagar el mundo por un momento y volver a conectar con esa persona especial.' },
    ],
  },
  {
    slug: 'limpieza-energetica-en-pareja',
    title: 'Cuando el cansancio no es físico: la necesidad de limpiar la energía y recuperar el silencio en pareja',
    excerpt: 'Hay un tipo de agotamiento que no se cura durmiendo diez horas. Es el cansancio del alma; una saturación silenciosa que contamina el espacio sagrado de la relación.',
    readTime: 5,
    coverImage: '/images/blog/cover-limpieza-energetica.webp',
    coverAlt: 'Pareja en ritual de reconexión espiritual en spa privado de Roldanillo',
    category: 'Parejas y Conexión',
    categorySlug: 'parejas',
    serviceUrl: '/experiencias',
    whatsappMsg: encodeURIComponent('Hola Zen Spa! Leí el artículo sobre el cansancio emocional y quiero reservar un plan de parejas.'),
    dateISO: '2025-10-01',
    content: [
      { type: 'paragraph', content: 'Hay un tipo de agotamiento que no se cura durmiendo diez horas, ni tomando café, ni pasando un domingo entero acostados viendo televisión. Es el cansancio del alma; una saturación silenciosa que se acumula cuando el ruido del mundo exterior, las responsabilidades diarias y las preocupaciones de la vida cotidiana terminan por ahogar la paz interior.' },
      { type: 'paragraph', content: 'En las parejas del norte del Valle, este desgaste energético es muy común. Vivimos bajo un ritmo acelerado, expuestos a tensiones constantes y a un clima cálido que exige mucho de nuestro cuerpo físico. Con el tiempo, sin darnos cuenta, esa pesadez empieza a contaminar el espacio sagrado de la relación, apagando la complicidad y la vibración alta que alguna vez los hizo fluir de manera ligera.' },
      { type: 'heading', content: 'El desgaste invisible de la energía compartida' },
      { type: 'paragraph', content: 'Cuando compartes tu vida con alguien, sus campos energéticos se vuelven uno solo. Si uno de los dos llega cargado de estrés, frustración o ansiedad, el otro absorbe esa vibración de forma inconsciente. Con el paso de los meses, la relación empieza a cargarse de una estática pesada: las conversaciones pierden su magia y se limitan a la logística diaria, y el pecho se siente oprimido ante cualquier pequeña diferencia.' },
      { type: 'heading', content: 'El silencio sagrado: sintonizar sin palabras' },
      { type: 'paragraph', content: 'La sociedad nos ha enseñado que para conectar hay que hablar, debatir o hacer planes activos. Sin embargo, la verdadera intimidad, esa que nutre el espíritu, nace en el silencio cómodo. Para que las energías de dos personas vuelvan a alinearse de manera armoniosa, el alma necesita tres condiciones que la vida cotidiana bloquea por completo: silencio acústico real, aislamiento visual y privacidad absoluta.' },
      { type: 'cta-inline', content: 'Conoce nuestros rituales de conexión para parejas', linkText: 'Ver experiencias de pareja', linkHref: '/experiencias' },
      { type: 'heading', content: 'La purificación a través de la tierra y el calor' },
      { type: 'paragraph', content: 'El cuerpo físico es el canal a través del cual el espíritu experimenta el mundo. Someter el cuerpo a estímulos nobles y naturales es la clave para descargar la electricidad estática del estrés: el calor de las piedras volcánicas sobre los centros de energía del cuerpo dilata los canales circulatorios y relaja las fibras musculares profundas. Un baño de vapor con hierbas medicinales limpia las vías respiratorias y ayuda a sudar las toxinas físicas y emocionales, dejando una sensación de ligereza absoluta en el alma.' },
      { type: 'heading', content: 'Un refugio de total privacidad en Roldanillo' },
      { type: 'paragraph', content: 'En Zen Spa Bienestar entendemos que la desconexión espiritual requiere de un entorno sumamente respetuoso. Por eso, diseñamos el concepto de Santuario Cerrado. Cuando reservas una experiencia de conexión, cerramos las puertas del spa exclusivamente para ustedes dos, asegurando un refugio libre de interrupciones externas.' },
      { type: 'list', items: [
        'Ritual de Conexión para Dos ($260.000 COP por pareja): Una pausa de 60 minutos creada para limpiar las cargas y aquietar el ruido de la mente.',
        'Paquete Romántico Premium ($295.000 COP por pareja): Una experiencia profunda de 75 minutos para consentir el cuerpo y el espíritu con piedras volcánicas calientes.',
      ]},
      { type: 'spa-image', imageUrl: '/images/spa-local/interior.webp', imageAlt: 'Interior del Santuario Privado de Zen Spa Bienestar — cabina de relajación en Roldanillo' },
      { type: 'paragraph', content: 'La distancia en una relación casi nunca es por falta de amor, sino por saturación mental. Permítanse apagar el mundo por un momento, descargar la mochila pesada que ambos cargan y volver a conectar desde la calma.' },
    ],
  },
  {
    slug: 'micro-vacaciones-sin-peajes',
    title: 'Micro-vacaciones sin peajes: por qué un plan de spa en Roldanillo supera el viaje a Cali o Pereira',
    excerpt: 'Un viaje de 3 horas que promete desconexión suele iniciar con el efecto contrario. La ciencia del estrés del viajero explica por qué el descanso premium más cerca de casa supera al escaparate lejano.',
    readTime: 6,
    coverImage: '/images/blog/cover-microvacaciones.webp',
    coverAlt: 'Santuario spa de lujo con vista a las montañas del Valle del Cauca',
    category: 'Parejas y Conexión',
    categorySlug: 'parejas',
    serviceUrl: '/experiencias',
    whatsappMsg: encodeURIComponent('Hola Zen Spa! Leí el artículo sobre micro-vacaciones y quiero reservar un plan de parejas.'),
    dateISO: '2025-10-15',
    content: [
      { type: 'paragraph', content: 'Es una creencia común en los municipios del norte del Valle del Cauca: para vivir una experiencia de bienestar verdaderamente premium o celebrar una fecha especial por todo lo alto, es obligatorio viajar a ciudades principales como Cali o Pereira. Sin embargo, cuando analizamos esta decisión bajo una perspectiva de salud física, mental y financiera, la realidad es muy diferente.' },
      { type: 'heading', content: 'La ciencia del estrés del viajero: Cortisol vs. Endorfinas' },
      { type: 'paragraph', content: 'El cuerpo humano no distingue entre el estrés laboral y el estrés generado por conducir en carretera o lidiar con el tráfico pesado. Fisiológicamente, un desplazamiento de $2\\text{ a }3\\text{ horas}$ activa el sistema nervioso simpático, induciendo una respuesta de alerta constante. Este estado de tensión estimula la liberación de catecolaminas (adrenalina y noradrenalina) y glucocorticoides como el cortisol (la hormona del estrés), con tensión muscular acumulada en los trapecios y zona lumbar.' },
      { type: 'paragraph', content: 'El dilema del retorno: El alivio físico obtenido tras un masaje relajante se pierde casi por completo en el trayecto de regreso. Someter el cuerpo recién relajado a otras $2\\text{ horas}$ de vibración del motor reactiva de inmediato la contracción protectora de las fibras musculares.' },
      { type: 'heading', content: 'Tabla comparativa: El costo real del escape' },
      { type: 'comparison-table' },
      { type: 'cta-inline', content: 'Compara los rituales premium en tu propio municipio', linkText: 'Explorar experiencias de pareja', linkHref: '/experiencias' },
      { type: 'heading', content: 'Privacidad absoluta: El valor de un Santuario Privado' },
      { type: 'paragraph', content: 'Para el consumidor exigente de Roldanillo, Zarzal, La Unión o Toro, la privacidad no es un lujo opcional; es un requisito indispensable de tranquilidad. En las ciudades intermedias, la vigilancia social suele generar incomodidad. El miedo a encontrarse con conocidos en situaciones vulnerables impide que el cliente se desconecte mentalmente por completo.' },
      { type: 'paragraph', content: 'En Zen Spa Bienestar hemos resuelto esta barrera mediante el concepto de Santuario Cerrado. Nuestros rituales de pareja están diseñados bajo estrictos protocolos de aislamiento acústico y espacial. Es la verdadera definición de desconexión absoluta en el norte del Valle.' },
      { type: 'list', items: [
        'Ritual de Conexión para Dos ($260.000 COP por pareja): Masaje de $60\\text{ minutos}$ sincronizado, reflexología podal, bambuterapia, baño de vapor con aromaterapia y copa de vino de cortesía.',
        'Paquete Romántico Premium ($295.000 COP): La experiencia definitiva de $75\\text{ minutos}$ con piedras volcánicas calientes, hidratación facial, fresas con crema y absoluta privacidad.',
      ]},
      { type: 'spa-image', imageUrl: '/images/spa-local/sala.webp', imageAlt: 'Sala de espera del Santuario Privado de Zen Spa Bienestar en Roldanillo Valle del Cauca' },
      { type: 'paragraph', content: 'No necesitas empacar maletas ni planificar un itinerario estresante para regalarte una pausa consciente al lado de tu persona favorita. El descanso que merecen está mucho más cerca de lo que imaginan.' },
    ],
  },
  {
    slug: 'efecto-de-la-pavesa-en-tu-piel',
    title: 'Por qué sientes la cara "pesada": el efecto invisible de la pavesa y el calor en tu piel',
    excerpt: 'Vivir en el norte del Valle tiene una magia única, pero para nuestra piel, el entorno es todo un desafío. La combinación del calor y la ceniza de la quema de caña crea el escenario perfecto para perder el brillo natural de tu rostro.',
    readTime: 5,
    coverImage: '/images/blog/cover-pavesa-facial.webp',
    coverAlt: 'Tratamiento facial profesional con vapor de ozono en spa de Roldanillo Valle del Cauca',
    category: 'Faciales y Dermestética',
    categorySlug: 'faciales',
    serviceUrl: '/faciales',
    whatsappMsg: encodeURIComponent('Hola Zen Spa! Leí el artículo de la pavesa y quiero agendar mi Limpieza Facial Profunda.'),
    dateISO: '2025-09-01',
    content: [
      { type: 'paragraph', content: '¿Te ha pasado que, al final de un día caluroso en Roldanillo o Zarzal, sientes que tu rostro pesa? No es solo cansancio físico. Te miras al espejo y notas la piel opaca, apagada, como si tuviera una capa gris encima que no se quita con agua y jabón corriente.' },
      { type: 'paragraph', content: 'Vivir en el norte del Valle del Cauca tiene una magia única, pero para nuestra piel, el entorno es todo un desafío. La combinación de temperaturas que superan fácilmente los $30^\\circ\\text{C}$, el viento constante y un factor que conocemos muy bien en la región —la pavesa de la quema de caña— crea el escenario perfecto para que tu rostro pierda su brillo y frescura natural.' },
      { type: 'heading', content: 'El escudo invisible que asfixia tu rostro' },
      { type: 'paragraph', content: 'Nuestra piel produce de forma natural un aceite llamado sebo, diseñado para protegernos. Sin embargo, bajo el sol extremo del Valle, el cuerpo activa el sudor para refrescarse. Es en ese momento cuando ocurre un fenómeno invisible pero muy dañino:' },
      { type: 'list', items: [
        'El imán de la pavesa: El hollín de carbono microscópico que flota en el aire (la ceniza negra de la caña) se adhiere de inmediato a esa mezcla húmeda de sudor y grasa en tu cara.',
        'El taponamiento real: Esta mezcla se introduce en tus poros, se compacta con el calor y forma un tapón duro, impermeable y oscuro (los temidos puntos negros o comedones).',
        'Falta de oxígeno: Al estar los poros completamente bloqueados, la piel no puede realizar su proceso natural de renovación, por lo que las cremas costosas que aplicas en casa no penetran y no hacen efecto.',
      ]},
      { type: 'heading', content: 'El peligro de las uñas y las "recetas milagrosas" en casa' },
      { type: 'paragraph', content: 'Cuando vemos un punto negro, la tentación de apretarlo con los dedos es casi irresistible. Pero en nuestra región, hacer esto es un boleto de ida hacia un problema peor: bajo el índice de radiación UV extremo que tenemos en Roldanillo (que casi siempre es de nivel 11 o más), cualquier micro-inflamación es una emergencia. Al pellizcarte, rompes capilares y generas una herida. Al salir al sol al día siguiente, la radiación activa los pigmentos de defensa de tu piel, convirtiendo ese barrito temporal en una mancha oscura permanente.' },
      { type: 'cta-inline', content: 'Aprende más sobre nuestros tratamientos faciales especializados para el clima del Valle', linkText: 'Ver catálogo de faciales', linkHref: '/faciales' },
      { type: 'heading', content: 'El verdadero "reset" que tu piel te está pidiendo' },
      { type: 'paragraph', content: 'Para desintoxicar tu rostro de verdad, necesitas una combinación de tecnología que limpie profundamente sin generar inflamación ni heridas. En nuestro espacio de spa y estetica, diseñamos un protocolo antipolución que actúa como un borrón y cuenta nueva para tu cara:' },
      { type: 'list', items: [
        'Punta de diamante (Microdermoabrasión): Una tecnología que realiza un barrido controlado y sumamente suave. Actúa como una micro-aspiradora que retira de forma segura las células muertas y el hollín de caña acumulado, devolviéndole de inmediato la luminosidad y suavidad a tu rostro.',
        'Pala Ultrasónica: Mediante vibraciones de alta frecuencia, emulsificamos la grasa y los puntos negros acumulados en los poros más difíciles sin necesidad de apretar ni lastimar tu dermis.',
      ]},
      { type: 'heading', content: 'Devuélvele la frescura a tu rostro hoy' },
      { type: 'paragraph', content: 'Limpieza Facial Profunda con 5 Tecnologías ($120.000 COP): Nuestro tratamiento estrella de 1 hora y 45 minutos. Diseñado especialmente para combatir el efecto de la pavesa en el norte del Valle. Incluye higienización dermoestética, vapor de ozono para dilatar los poros, extracción ultrasónica y manual estéril, microdermoabrasión con punta de diamante, hidratación molecular profunda y porcelanización para una textura de seda.' },
      { type: 'spa-image', imageUrl: '/images/spa-local/sala-foto.webp', imageAlt: 'Cabina de tratamientos faciales en Zen Spa Bienestar Roldanillo — tecnología dermoestética' },
    ],
  },
  {
    slug: 'peligro-de-apretarte-los-puntos-negros',
    title: 'El peligro de apretarte los puntos negros: por qué las extracciones caseras causan manchas permanentes',
    excerpt: 'Frente al espejo del baño, la tentación de apretar ese punto negro parece lógica y gratuita. Sin embargo, en el norte del Valle del Cauca, este hábito cotidiano es una de las causas principales de manchas oscuras difíciles de borrar.',
    readTime: 5,
    coverImage: '/images/blog/cover-puntos-negros.webp',
    coverAlt: 'Piel radiante después de tratamiento facial profesional en Roldanillo Valle',
    category: 'Faciales y Dermestética',
    categorySlug: 'faciales',
    serviceUrl: '/faciales',
    whatsappMsg: encodeURIComponent('Hola Zen Spa! Leí el artículo de los puntos negros y quiero agendar mi Limpieza Facial Profunda.'),
    dateISO: '2025-09-20',
    content: [
      { type: 'paragraph', content: 'Frente al espejo del baño, bajo una buena luz, la tentación de apretar ese pequeño punto negro o espinilla es casi irresistible. Parece una solución rápida, lógica y gratuita para limpiar el rostro antes de salir a la calle.' },
      { type: 'paragraph', content: 'Sin embargo, en el norte del Valle del Cauca, este hábito cotidiano es una de las causas principales de consulta por manchas oscuras en la piel. Vivir bajo el sol constante de nuestra región exige entender que el rostro reacciona de manera drástica a cualquier agresión física, convirtiendo una imperfección de pocos días en una marca difícil de borrar.' },
      { type: 'heading', content: 'El peligro del sol extremo: el mecanismo de defensa de tu piel' },
      { type: 'paragraph', content: 'En nuestra región, el índice de radiación ultravioleta (IUV) alcanza de forma rutinaria niveles extremos de $11\\text{ a }12$ durante casi todo el año. Esta radiación es una agresión directa y constante contra el tejido celular de tu rostro. Cuando pellizcas o presionas la piel con las uñas, generas un trauma físico inmediato en la dermis. Para defenderse, las células encargadas de producir el pigmento —los melanocitos— se activan de forma descontrolada, produciendo melanina en exceso que se traduce en una mancha oscura y localizada.' },
      { type: 'heading', content: 'La ciencia de las manchas: ¿qué es la Hiperpigmentación Post-Inflamatoria (HPI)?' },
      { type: 'list', items: [
        'Ruptura de capilares: La fuerza mecánica de las uñas rompe los pequeños vasos sanguíneos de la dermis, derramando micro-gotas de sangre bajo la piel que causan una inflamación invisible pero profunda.',
        'Pérdida de la barrera de defensa: Al levantar la piel o romper el poro, eliminas la barrera lipídica natural que mantiene la hidratación.',
        'La pigmentación de la cicatriz: Al exponer esa zona inflamada al sol extremo del Valle, la radiación penetra sin filtros y el exceso de melanina se deposita en la micro-cicatriz, fijando un tono oscuro y persistente.',
      ]},
      { type: 'paragraph', content: 'Este proceso biológico se conoce científicamente como Hiperpigmentación Post-Inflamatoria (HPI). Lo que comenzó como un punto negro temporal que se habría resuelto de forma natural, se transforma en una mancha oscura que requerirá meses de tratamientos aclarantes profesionales para poder difuminarse.' },
      { type: 'cta-inline', content: 'Conoce la extracción estéril profesional que usa Zen Spa', linkText: 'Ver tratamientos faciales seguros', linkHref: '/faciales' },
      { type: 'heading', content: 'Extracción estéril profesional: la única alternativa segura' },
      { type: 'paragraph', content: 'En nuestro espacio de spa y estetica, realizamos extracciones dermoestéticas bajo estrictos protocolos de bioseguridad: utilizamos vapor de ozono para ablandar la queratina y dilatar el poro de forma natural; empleamos la pala ultrasónica para limpiar los folículos mediante vibración de alta frecuencia; y sellamos el protocolo con alta frecuencia y principios activos descongestivos que apagan la inflamación antes de que salgas al sol.' },
      { type: 'list', items: [
        'Limpieza Facial Express ($90.000 COP): Una sesión de $45\\text{ minutos}$ enfocada en una higienización profunda, vaporización de ozono, extracción estéril ultrasónica y manual delicada.',
        'Kit de Cuidado Domiciliario de Salida: Te asesoramos en la elección del protector solar con pantalla física y los regeneradores de barrera cutánea adecuados para tu piel.',
      ]},
      { type: 'spa-image', imageUrl: '/images/spa-local/interior.webp', imageAlt: 'Cabina de estética profesional en Zen Spa Bienestar Roldanillo — extracción segura sin manchas' },
    ],
  },
  {
    slug: 'facial-express-o-profunda',
    title: '¿Express o Profunda? Cómo saber qué tipo de limpieza facial necesita tu piel de verdad',
    excerpt: 'Muchas personas eligen el tratamiento basándose solo en el precio o el tiempo libre. Pero tratar la piel con esta idea no solo frena los resultados, sino que puede terminar maltratando tu rostro.',
    readTime: 6,
    coverImage: '/images/blog/cover-facial-express.webp',
    coverAlt: 'Comparativa de limpieza facial express vs profunda con tecnología ultrasónica en Roldanillo',
    category: 'Faciales y Dermestética',
    categorySlug: 'faciales',
    serviceUrl: '/faciales',
    whatsappMsg: encodeURIComponent('Hola Zen Spa! Leí el artículo sobre limpieza Express o Profunda y quiero una valoración facial gratuita.'),
    dateISO: '2025-10-08',
    content: [
      { type: 'paragraph', content: 'A la hora de cuidar el rostro, es muy común caer en la trampa de elegir el tratamiento basándonos únicamente en el precio o en el tiempo que tenemos libre. Muchas personas piensan: "Una limpieza es una limpieza, da lo mismo una rápida que una larga". Sin embargo, tratar la piel con esta idea no solo frena los resultados que quieres ver, sino que puede terminar maltratando tu rostro.' },
      { type: 'paragraph', content: 'Nuestra piel es un órgano vivo, inteligente y dinámico. En el norte del Valle del Cauca, donde el calor supera los $30^\\circ\\text{C}$ y el viento transporta polvo y pavesa agrícola, las necesidades de la piel cambian drásticamente de una persona a otra.' },
      { type: 'heading', content: 'El ciclo de los 28 días: por qué tu piel se apaga sola' },
      { type: 'paragraph', content: 'Tu epidermis se regenera de forma constante. Las células nuevas nacen en las capas profundas y viajan hacia la superficie, donde mueren y se desprenden. Este ciclo de renovación celular tarda aproximadamente $28\\text{ días}$. Bajo el clima cálido de nuestra región, el sudor y el exceso de grasa actúan como un pegamento: en lugar de caerse, las células muertas se quedan adheridas a la superficie de tu rostro, creando una barrera opaca y dura.' },
      { type: 'heading', content: 'Limpieza Facial Express: el mantenimiento rápido para pieles sanas' },
      { type: 'paragraph', content: 'La Limpieza Facial Express tiene una inversión de $\\$90.000\\text{ COP}$ y una duración de $45\\text{ minutos}$. Es el tratamiento ideal para personas que ya tienen una piel sana, libre de acné severo, y que buscan un mantenimiento higiénico rápido para retirar la suciedad del día a día. Realiza una higienización dermoestética profesional, utiliza vapor de ozono para dilatar los poros y realiza una extracción básica de las impurezas más superficiales.' },
      { type: 'heading', content: 'Limpieza Facial Profunda con 5 Tecnologías: el "reset" reconstructivo' },
      { type: 'paragraph', content: 'Cuando la piel lleva meses sin recibir atención, o está expuesta al hollín de caña y a la deshidratación solar, una limpieza rápida no es suficiente. Aquí es donde entra nuestro protocolo estrella de Limpieza Facial Profunda con 5 Tecnologías, con una inversión de $\\$120.000\\text{ COP}$ y una duración de $1\\text{ hora y }45\\text{ minutos}$.' },
      { type: 'list', items: [
        'Higienización dermoestética: Limpieza de inicio para retirar restos de maquillaje, protector solar y polución superficial.',
        'Vapor de ozono: Abre y ablanda la queratina del poro de manera segura.',
        'Pala ultrasónica a $20.000\\text{ Hz}$: Utiliza vibración ultrasónica de alta frecuencia para emulsificar y pulverizar la grasa compactada y el hollín dentro del poro de forma suave y sin dolor.',
        'Microdermoabrasión con punta de diamante: Barre por completo la barrera de células muertas ásperas, devolviéndole la luminosidad instantánea a la piel.',
        'Porcelanización e hidratación profunda: Sella el tratamiento con nutrición celular profunda para reparar la barrera lipídica.',
      ]},
      { type: 'cta-inline', content: 'Descubre cuál tratamiento necesita tu piel con una valoración gratuita', linkText: 'Ver catálogo completo de faciales', linkHref: '/faciales' },
      { type: 'heading', content: 'Cada rostro es un universo único: la personalización' },
      { type: 'paragraph', content: 'El mayor error de la estética tradicional es aplicar el mismo procedimiento a todo el mundo. Por eso, en Zen Spa Bienestar no empezamos ningún tratamiento a ciegas. Tu rostro es analizado de forma personalizada por nuestras especialistas antes de tocar tu piel.' },
      { type: 'spa-image', imageUrl: '/images/spa-local/zona-masajes.webp', imageAlt: 'Zona de tratamientos en Zen Spa Bienestar Roldanillo — especialistas dermoestéticas' },
      { type: 'paragraph', content: 'Valoración Facial Gratuita: Agenda una cita de diagnóstico con nuestras especialistas dermoestéticas. Evaluaremos tu tipo de piel, analizaremos el estado de tus poros y te recomendaremos el camino ideal (Express o Profundo) para recuperar la frescura de tu rostro.' },
    ],
  },
  {
    slug: 'cumpleanos-spa-mini-divas',
    title: 'Cumpleaños sin estrés: el auge del spa infantil Mini Divas como alternativa a las piñatas en Roldanillo',
    excerpt: 'Para las madres modernas en Roldanillo, Zarzal o La Unión, la organización de una fiesta infantil convencional ya no se siente como una celebración, sino como una prueba de resistencia. Te presentamos la alternativa perfecta.',
    readTime: 5,
    coverImage: '/images/minidivas/celebracion-diva-vip.webp',
    coverAlt: 'Spa infantil Mini Divas para niñas — celebración de cumpleaños en Roldanillo Valle del Cauca',
    category: 'Mini Divas',
    categorySlug: 'mini-divas',
    serviceUrl: '/minidivas',
    whatsappMsg: encodeURIComponent('Hola Zen Spa! Me interesa conocer los planes del Spa de Niñas Mini Divas.'),
    dateISO: '2025-10-05',
    content: [
      { type: 'paragraph', content: 'Se acerca el cumpleaños de tu hija y la escena se repite en tu mente: alquilar un salón o finca, buscar recreacionistas que mantengan entretenidos a veinte niños hiperactivos, comprar montones de dulces y decoraciones desechables, lidiar con el ruido ensordecedor y, al final del día, enfrentarte a un desorden monumental mientras sientes un agotamiento extremo.' },
      { type: 'paragraph', content: 'Para las madres modernas en Roldanillo, Zarzal o La Unión, la organización de una fiesta infantil convencional ya no se siente como una celebración, sino como una prueba de resistencia. La acumulación de micro-decisiones logísticas genera lo que en psicología llamamos fatiga decisional.' },
      { type: 'heading', content: 'La trampa de la sobreestimulación infantil' },
      { type: 'paragraph', content: 'Vivimos en una época donde los niños están constantemente expuestos a estímulos rápidos y pantallas. Las fiestas tradicionales, llenas de luces parpadeantes, música a volumen alto y un consumo excesivo de azúcar, a menudo llevan a los pequeños a un estado de hiperestimulación. El colapso post-fiesta es bien conocido: tras horas de euforia, los niños terminan irritables o llorando. El cerebro infantil necesita espacios de desaceleración.' },
      { type: 'heading', content: 'Amor propio y conexión: mucho más que un juego de niñas' },
      { type: 'paragraph', content: 'Un día de spa para niñas no se trata de vanidad superficial; es un primer encuentro lúdico y saludable con el autocuidado y el amor propio. Desde los $4\\text{ a los }12$ años, las niñas absorben y construyen la relación que tendrán con sus propios cuerpos en el futuro. Vivir una experiencia donde se les enseña a consentir su piel con mascarillas naturales de pepino y a disfrutar de un momento de mimo consciente, siembra en ellas la semilla del autorespeto.' },
      { type: 'cta-inline', content: 'Descubre todos los planes del spa infantil Mini Divas', linkText: 'Ver planes Mini Divas', linkHref: '/minidivas' },
      { type: 'highlight', content: 'Cuando este plan se comparte con mamá o papá, la magia se multiplica. En un día lleno de afanes, regalarse un espacio exclusivo para mirarse a los ojos y compartir un masaje sincronizado fortalece el vínculo afectivo de una manera que ningún regalo material puede imitar.' },
      { type: 'heading', content: 'Delegar el 100% del estrés para disfrutar de verdad' },
      { type: 'paragraph', content: 'La verdadera diferencia de celebrar en un entorno premium es la delegación total. En Zen Spa Bienestar diseñamos un concepto donde tu único trabajo es relajarte y ver sonreír a tu hija. Nos encargamos de todo: desde la decoración personalizada según sus gustos y el catering temático con copas de helado y snacks saludables, hasta la toma de fotografías estéticas y videos profesionales.' },
      { type: 'list', items: [
        'Vínculo Premium - Plan Madre e Hija ($290.000 COP): Incluye para la niña la Experiencia Diva Premium (mascarilla facial lúdica, masaje relajante infantil con aromaterapia, exfoliación de manos, manicura y pedicura delicada, peinado y maquillaje de fantasía, snack y copa de helado). Para el adulto incluye masaje relajante profundo de $60\\text{ minutos}$ con piedras volcánicas calientes.',
        'Celebración Diva VIP ($210.000 COP por niña): El paquete de cumpleaños por excelencia con decoración temática personalizada, refrigerio especial, video de recuerdo de alta calidad y regalo sorpresa de nuestra marca.',
        'Fiestas de Cumpleaños VIP (Grupales o a Domicilio): Si deseas celebrar con sus mejores amigas o llevar la experiencia mágica de Mini Divas directamente a tu casa con montaje profesional.',
      ]},
      { type: 'spa-image', imageUrl: '/images/minidivas/minidivas-gallery-1.webp', imageAlt: 'Niñas disfrutando experiencia Mini Divas en Zen Spa Bienestar Roldanillo' },
      { type: 'spa-image', imageUrl: '/images/minidivas/vinculo-premium.webp', imageAlt: 'Plan Vínculo Premium madre e hija en Spa Mini Divas Roldanillo' },
      { type: 'paragraph', content: 'Menos ruido, menos prisa y mucho más amor. Regálale a tu hija una tarde de risas, mimos y conexión que recordará para siempre.' },
    ],
  },
  {
    slug: 'piedras-volcanicas-bambuterapia-deportistas',
    title: 'Piedras volcánicas y bambuterapia: el alivio muscular definitivo para deportistas del norte del Valle',
    excerpt: 'Los ciclistas y parapentistas de Roldanillo conocen el nivel de exigencia física de practicar deportes bajo calor extremo. Analizamos la ciencia detrás de la combinación perfecta de termoterapia volcánica y bambuterapia.',
    readTime: 5,
    coverImage: '/images/blog/cover-masajes-deportista.webp',
    coverAlt: 'Masaje con piedras volcánicas de basalto para deportistas en spa de Roldanillo Valle',
    category: 'Masajes y Bienestar Corporal',
    categorySlug: 'masajes',
    serviceUrl: '/masajes',
    whatsappMsg: encodeURIComponent('Hola Zen Spa! Leí el artículo de piedras volcánicas para deportistas y quiero agendar mi masaje de recuperación.'),
    dateISO: '2025-09-10',
    content: [
      { type: 'paragraph', content: 'Quienes practican ciclismo de ruta por las exigentes vías entre Zarzal, Roldanillo y La Unión, o quienes dominan los cielos de la región en parapente, conocen muy bien el nivel de exigencia física que esto requiere. El deporte en nuestra región se vive bajo condiciones extremas: temperaturas que superan los $30^\\circ\\text{C}$, vientos fuertes en montaña y un esfuerzo muscular prolongado que satura el organismo.' },
      { type: 'paragraph', content: 'A menudo, los deportistas asumen que el dolor y la rigidez del lunes por la mañana son simplemente "parte del entrenamiento". Sin embargo, ignorar la acumulación de fatiga en el cuerpo no solo disminuye el rendimiento en la siguiente jornada; cronifica contracturas que limitan la movilidad.' },
      { type: 'heading', content: 'La cadena posterior: el mapa de la fatiga en el deportista' },
      { type: 'list', items: [
        'Isquiotibiales y lumbares (Ciclismo): La postura encorvada sobre la bicicleta obliga a las lumbares y a los flexores de la cadera a realizar una contracción isométrica constante. Esto reduce el flujo sanguíneo local y acumula detritos metabólicos.',
        'Trapecio y cuello (Parapentismo): Sostener la cabeza erguida contra el viento y controlar los comandos de vuelo tensiona severamente el cuello y los hombros, generando puntos de gatillo dolorosos (nudos).',
      ]},
      { type: 'paragraph', content: 'Cuando un músculo trabaja sin descanso, las fibras musculares sufren micro-lesiones y acumulan ácido láctico. Sin una intervención que active la circulación profunda, el músculo se cura de forma desordenada, perdiendo elasticidad y volviéndose más propenso a desgarros.' },
      { type: 'heading', content: 'Termoterapia volcánica: conducción de calor a $3\\text{ cm}$ de profundidad' },
      { type: 'paragraph', content: 'Un masaje con las manos es excelente, pero la recuperación de un deportista requiere llegar a las fibras más profundas del tejido. El basalto retiene el calor de forma prolongada y lo transmite al cuerpo mediante conducción directa. Este calor térmico controlado penetra hasta $3\\text{ cm}$ dentro del tejido muscular, generando vasodilatación local profunda que dilata los vasos sanguíneos, aumentando el flujo de oxígeno y nutrientes hacia las células musculares. Esto acelera de forma drástica la evacuación del ácido láctico y reduce la inflamación post-esfuerzo.' },
      { type: 'heading', content: 'Bambuterapia: liberación miofascial y estiramiento no invasivo' },
      { type: 'paragraph', content: 'Mientras las piedras volcánicas preparan y ablandan el tejido mediante el calor, las varas de bambú realizan el trabajo mecánico de precisión. Esta técnica actúa como un rodillo de liberación miofascial: la presión cilíndrica y uniforme del bambú drena el sistema linfático y estira las fibras musculares tensas de manera longitudinal. Al deslizarse sobre la cadena posterior, el bambú envía una señal mecánica al sistema nervioso para que disminuya el tono protector del músculo, permitiendo que la espalda y las piernas recuperen su rango de movimiento original.' },
      { type: 'cta-inline', content: 'Consulta los detalles del protocolo de recuperación deportiva', linkText: 'Ver catálogo de masajes', linkHref: '/masajes' },
      { type: 'heading', content: 'Tu estrategia de recuperación para el fin de semana' },
      { type: 'paragraph', content: 'En Zen Spa Bienestar entendemos que el descanso es una parte fundamental de tu entrenamiento. Hemos diseñado un espacio insonorizado de absoluta privacidad donde puedes descargar toda la fatiga acumulada de la semana: Masaje Relajante Completo (Piedras Volcánicas + Bambuterapia) con termoterapia volcánica en la espalda, bambuterapia para distensión de piernas y lumbares, reflexología podal para alivio sistémico y una copa de vino de cortesía.' },
      { type: 'paragraph', content: 'Aprovecha nuestra Promoción Permanente de Fin de Semana (Sábados y Domingos), días en los que este protocolo completo de recuperación muscular tiene una tarifa especial de $89.000 COP (incluyendo copa de vino de cortesía).' },
      { type: 'spa-image', imageUrl: '/images/spa-local/camillas-pareja.webp', imageAlt: 'Camillas de masaje con piedras volcánicas en Zen Spa Bienestar Roldanillo — recuperación deportiva' },
    ],
  },
  {
    slug: 'quimica-detras-de-tu-marquinha',
    title: 'La química detrás de tu marquinha: por qué el calor de la tarde en el Valle puede arruinar tu bronceado',
    excerpt: 'Conseguir un bronceado uniforme, saludable y de larga duración no es cuestión de azar, sino de química aplicada y control ambiental. La DHA y la temperatura del Valle determinan si tu marquinha queda perfecta o llena de parches.',
    readTime: 5,
    coverImage: '/images/blog/cover-bronceo-marquinha.webp',
    coverAlt: 'Bronceado brasilero con marquinha perfecta en solárium privado de Roldanillo Valle del Cauca',
    category: 'Bronceo Brasilero',
    categorySlug: 'bronceo',
    serviceUrl: '/bronceado',
    whatsappMsg: encodeURIComponent('Hola Zen Spa! Leí el artículo sobre la química del bronceado y quiero agendar mi sesión de bronceo brasilero.'),
    dateISO: '2025-09-25',
    content: [
      { type: 'paragraph', content: 'Para muchas mujeres en Roldanillo, Zarzal y La Unión, lucir un tono dorado impecable y una marquinha perfectamente definida es el complemento estético ideal. Sin embargo, conseguir un bronceado uniforme, saludable y de larga duración no es una cuestión de azar, sino de química aplicada y control ambiental.' },
      { type: 'paragraph', content: 'En nuestra región, es común pensar que cualquier momento del día es óptimo para exponerse al sol o aplicar un sistema de bronceado. Pero existe una razón científica de peso por la cual el sol de la tarde y las altas temperaturas del norte del Valle del Cauca pueden convertirse en los peores enemigos de tu piel, arruinando el color y dejando parches asimétricos o manchas difíciles de corregir.' },
      { type: 'heading', content: 'La reacción de Maillard: la ciencia de tu tono dorado' },
      { type: 'paragraph', content: 'A diferencia del bronceado tradicional por radiación solar profunda (que daña el ADN celular y acelera el envejecimiento), el bronceado brasilero moderno utiliza un compuesto activo natural derivado de la caña de azúcar: la dihidroxiacetona (DHA). Al entrar en contacto con la piel, la DHA reacciona de forma segura con los aminoácidos libres presentes en las proteínas de queratina del estrato córneo. Esta interacción molecular se conoce científicamente como la reacción de Maillard, y produce polímeros llamados melanoidinas, los cuales aportan ese tono dorado y brillante sin necesidad de activar los melanocitos ni dañar las capas profundas de la dermis.' },
      { type: 'heading', content: 'El sudor: el enemigo número uno de la polimerización' },
      { type: 'paragraph', content: 'Para que esta reacción química ocurra de manera uniforme, la DHA necesita un periodo de reposo y estabilización sobre la piel completamente seca. Es en esta fase crítica donde el clima del Valle del Cauca entra en juego. La DHA, en sus primeras horas de aplicación, es altamente soluble en agua. El sudor producido por las glándulas sudoríparas actúa como un solvente directo sobre el compuesto activo antes de que este termine de reaccionar con la queratina. Si sudas durante el proceso de fijación, la loción se barre, se diluye de manera irregular o se escurre por los pliegues naturales del cuerpo, dejando líneas asimétricas, parches oscuros antiestéticos o marcas de goteo.' },
      { type: 'cta-inline', content: 'Conoce los protocolos de bronceado brasilero seguro de Zen Spa', linkText: 'Ver planes de bronceo', linkHref: '/bronceado' },
      { type: 'heading', content: 'Por qué el límite de las $11:00\\text{ AM}$ es una regla científica' },
      { type: 'paragraph', content: 'En nuestra región, las temperaturas superan rutinariamente los $30^\\circ\\text{C}$ a partir del mediodía, elevando la transpiración de forma automática, incluso si estás bajo la sombra. Por esta razón, en Zen Spa Bienestar aplicamos una restricción operativa estricta y transparente: nuestras sesiones de bronceado brasilero se realizan exclusivamente antes de las $11:00\\text{ AM}$. No es una limitación caprichosa de agenda; es una medida de control de calidad técnica.' },
      { type: 'list', items: [
        'Aprovechar la frescura matutina: Realizar el protocolo en las primeras horas de la mañana asegura que tu cuerpo se mantenga fresco, libre de sudoración activa y en un estado de reposo ideal para la absorción homogénea del producto.',
        'Exclusividad para un secado perfecto: Mantener un límite estricto de máximo 3 camillas simultáneas al día garantiza que nuestras especialistas dermoestéticas puedan supervisar de forma personalizada cada minuto de tu sesión.',
      ]},
      { type: 'spa-image', imageUrl: '/images/spa-local/sala.webp', imageAlt: 'Solárium privado de Zen Spa Bienestar Roldanillo — bronceado brasilero con DHA orgánica' },
      { type: 'paragraph', content: 'Si estás lista para lucir un tono dorado espectacular, uniforme y diseñado bajo los más altos estándares de cuidado cutáneo, te invitamos a dar el paso de forma segura. Recuerda que debido a las condiciones climáticas del Valle y a nuestro compromiso con la perfección del color, solo habilitamos tres espacios por día en la mañana.' },
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

// Featured posts for home page (most strategic)
export function getFeaturedPosts(): BlogPost[] {
  const featuredSlugs = ['monotonia-en-pareja', 'efecto-de-la-pavesa-en-tu-piel', 'cumpleanos-spa-mini-divas'];
  return featuredSlugs.map((slug) => getPostBySlug(slug)!).filter(Boolean);
}
