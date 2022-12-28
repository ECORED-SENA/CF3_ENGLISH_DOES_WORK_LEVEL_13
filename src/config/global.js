export default {
  global: {
    componenteFormativo:
      '<span class= r--4> <em>Using our speech to convince others</em></span> <br> Usando nuestro discurso para convencer a otros',

    descripcionCurso:
      'Este componente tendrá como objetivo ayudarle como estudiante a interactuar en inglés de forma oral y escrita dentro de contextos sociales y de acuerdo con los criterios laborales establecidos por el marco común europeo de referencia para las lenguas.',

    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: '<em> Collocations</em> (Colocaciones)',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          '<em> Reporting in a correct way</em> (Informando de manera correcta)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '<em> Verb + infinitive</em> ',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: '<em> Verb + person + infinitive</em>',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: '<em> Verb + preposition + -ing</em>',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: '<em> Verb + that + clause</em> ',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          '<em> Expressing cause and effect</em> (Expresando causa y efecto)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          '<em> Rhetorical functions of the speech</em> (Funciones retóricas del discurso)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: '<em> Pronunciation</em> (Pronunciación)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: '<em> Mixed sounds</em> (Sonidos combinados)',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: '<em> Stress words</em> (Golpe de palabra)',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo:
              '<em> Rhythm in the sentence and intonation</em> (Ritmo en la frase y entonación)',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '<em>Collocations</em> (Colocaciones) ',
      referencia:
        'Mel’čuk, I. (1998). <em> Collocations and lexical functions</em>. En A. Cowie, Phraseology. Theory, analysis, and applications, p. 23-53.',
      tipo: 'Artículo ',
      link: 'http://olst.ling.umontreal.ca/pdf/CowieLFs.pdf ',
    },
    {
      tema:
        '<em>Reporting in a correct way</em> (Informando de manera correcta) ',
      referencia:
        'Thompson, G. y Yiyun, Y. (1991). <em> Evaluation in the reporting verbs used in academic papers. Applied linguistics</em>, 12(4), p. 365-382.',
      tipo: 'Artículo ',
      link:
        'https://academic.oup.com/applij/article-abstract/12/4/365/242313?login=false ',
    },
    {
      tema: '<em>Expressing cause and effect</em> (Expresando causa y efecto) ',
      referencia:
        'Xuelan, F. y Kennedy, G. (1992). <em> Expressing causation in written English.</em> RELC Journal, 23(1), p. 62-80.',
      tipo: 'Artículo ',
      link: 'https://journals.sagepub.com/doi/abs/10.1177/003368829202300105 ',
    },
    {
      tema:
        '<em> Rhetorical functions of the speech</em> (Funciones retóricas del discurso) ',
      referencia:
        'Frank, J. (1990). <em> You call that a rhetorical question?: Forms and functions of rhetorical questions in conversation</em>. Journal of Pragmatics, 14(5), p. 723-738.',
      tipo: 'Libro',
      link:
        'https://www.sciencedirect.com/science/article/abs/pii/037821669090003V ',
    },
    {
      tema: '<em> Pronunciation</em> (Pronunciación) ',
      referencia:
        'Moulton, W. (1962). Toward a classification of pronunciation errors. The Modern Language Journal, 46(3), p. 101-109.',
      tipo: 'Artículo ',
      link: 'https://www.jstor.org/stable/320931',
    },
  ],
  glosario: [
    {
      termino: '<em>Collocations</em>',
      significado:
        'una colocación son dos o más palabras que a menudo van juntas. Estas combinaciones simplemente suenan "bien" para los hablantes nativos de inglés, quienes las usan todo el tiempo. ',
    },
    {
      termino: '<em>Reporting verbs</em>',
      significado:
        'un verbo que pertenece a una clase de verbos que transmiten la acción de hablar y se usa tanto con el estilo directo como indirecto. Los verbos informativos también se pueden usar con un objeto directo y con una construcción de infinitivo. ',
    },
    {
      termino: '<em>Linkers</em>',
      significado:
        'son palabras o grupos de palabras que conectan frases o ideas del texto. Se sitúan al principio de la oración. Aseguran que el texto tenga una conexión lógica y guían al lector a través de él. ',
    },
    {
      termino: '<em>Connectors</em>',
      significado:
        'son conjunciones que unen palabras o proposiciones (partes de la oración) entre sí. Es decir, normalmente se utilizan dentro de una misma frase. ',
    },
    {
      termino: '<em>Pronunciation</em>',
      significado:
        'la pronunciación significa cómo decimos las palabras. La mayoría de las personas hablan el dialecto del inglés estándar con un acento que pertenece a la parte del país de donde provienen o en el que viven. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Hashemi, L. y Murphy, R. (2004a). <em> English Grammar in Use Supplementary Exercises with Answers.</em> Cambridge University Press. ',
      link: '',
    },
    {
      referencia:
        'Hashemi, L. y Murphy, R. (2004b). <em> English Grammar in Use.</em> Supplementary exercises. Cambridge. ',
      link: '',
    },
    {
      referencia:
        'Hewings, M. (2013). <em> Advanced grammar in use with answers: A self-study reference and practice book for advanced learners of English.</em> Cambridge University Press. ',
      link: '',
    },
    {
      referencia:
        'Murphy, R. (2008). <em> Grammar in use.</em> Cambridge University Press. ',
      link: '',
    },
    {
      referencia:
        'Murphy, R., Viney, B. y Craven, M. (2004). <em> English Grammar In Use with Answers and CD ROM: A Self-study Reference and Practice Book for Intermediate Students of English</em> (Vol. 1). Cambridge University Press. ',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de diseño instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edith Grande Triviño ',
        cargo: 'Experta Temática ',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital-CENIGRAF',
      },
      {
        nombre: 'Gloria Lida Alzate Suárez ',
        cargo: 'Diseñadora Instruccional ',
        centro: 'Centro de Gestión Industrial  - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus ',
        cargo: 'Asesora Metodológica ',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital  ',
      },
      {
        nombre: 'Darío González ',
        cargo: 'Corrector de Estilo ',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuly Andrea Rey Quiñonez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres ',
        cargo: 'Revisión de guion audiovisual ',
        centro: 'Centro de Comercio y Servicios  - Regional Tolima ',
      },
      {
        nombre: 'Yicelly Estefania Mesa Silva ',
        cargo: 'Ilustración ',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González ',
        cargo: 'Producción audiovisual ',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres ',
        cargo: 'Producción audiovisual ',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego ',
        cargo: 'Validación audiovisual ',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego ',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
