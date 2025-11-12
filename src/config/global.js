export default {
  global: {
    Name: 'Ordenamiento territorial y derechos campesinos',
    Description:
      'En este componente se abordará aspectos a partir de los derechos del campesino relacionados con el ordenamiento territorial, también la relación de la constitución política y las leyes que se vinculan con el ordenamiento territorial, los mecanismos de participación ciudadana y los riegos y amenazas en el ordenamiento territorial.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Ordenamiento territorial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Derechos del campesino relacionados con el ordenamiento territorial',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Constitución Política de Colombia y ordenamiento territorial',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Mecanismos de participación ciudadana',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Antecedentes de la tenencia de la tierra en Colombia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Historia de la reforma agraria en Colombia y dinámicas de la población campesina en el territorio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Dinámicas de la población campesina en el territorio',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Uso del suelo en la población campesina',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Riesgos y amenazas en el ordenamiento territorial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Relación entre el ser humano y los recursos naturales',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Marco legal',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Componente urbano y rural',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Política ambiental',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Técnicas de diagnóstico participativo',
        desarrolloContenidos: true,
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
      tema: 'Ordenamiento territorial',
      referencia:
        'FrenteAlEspejoCol. (2021). Capítulo 13. #ColombiaSinFiltro: La división del país en cuanto a la tenencia y el uso de la tierra. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=zve8aBzHU80',
    },
    {
      tema: 'Constitución Política de Colombia y ordenamiento territorial',
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2018). Ordenamiento de nuestro territorio. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-5PdZK1WO3s',
    },
    {
      tema: 'Uso del suelo en la población campesina',
      referencia:
        'Herrera, A. (2017). La tenencia de tierras colectivas en Colombia: Datos y tendencias. ',
      tipo: 'Documento ',
      link:
        'https://www.cifor-icraf.org/publications/pdf_files/infobrief/6704-infobrief.pdf',
    },
    {
      tema: 'Mecanismos de participación ciudadana',
      referencia: 'USPEC. (2022). Mecanismos de participación ciudadana.',
      tipo: 'Documento ',
      link:
        'https://www.uspec.gov.co/sites/default/files/2022-02/Mecanismos-de-participacion.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Amenaza',
      significado:
        'es la posibilidad de que ocurra un fenómeno o evento (natural o causado por el ser humano) que pueda causar daño o afectar a las personas, los bienes, el ambiente o la infraestructura.',
    },
    {
      termino: 'Campesino',
      significado:
        'es la persona que vive y trabaja en el campo, dedicándose principalmente a actividades agrícolas, ganaderas, forestales o de subsistencia, y que mantiene una relación directa con la tierra y los recursos naturales para asegurar su sustento y el de su familia.',
    },
    {
      termino: 'Diagnóstico',
      significado:
        'es un proceso de análisis y evaluación que permite identificar y comprender una situación, problema o realidad determinada, con el fin de tomar decisiones o proponer soluciones.',
    },
    {
      termino: 'Dinámicas',
      significado:
        'fuerza o movimiento. en general, una dinámica es un proceso de cambio, interacción o movimiento que ocurre entre personas, grupos o elementos dentro de un sistema.',
    },
    {
      termino: 'Ordenamiento territorial',
      significado:
        'es el proceso planificado mediante el cual se organiza, regula y administra el uso del suelo y los recursos naturales de un territorio, buscando un desarrollo equitativo, sostenible y equilibrado entre las personas, el ambiente y la economía.',
    },
    {
      termino: 'Participación ciudadana',
      significado:
        'es el derecho y la acción de las personas para intervenir activamente en las decisiones públicas que afectan su vida, su comunidad o su entorno.',
    },
    {
      termino: 'Reforma agraria',
      significado:
        'es un proceso político, social y económico mediante el cual el estado redistribuye la tierra rural con el fin de garantizar un acceso más justo a la propiedad y al uso del suelo, especialmente a favor de los campesinos que no tienen tierra o tienen muy poca.',
    },
    {
      termino: 'Riesgo',
      significado:
        'es la posibilidad de que ocurra un evento o situación que cause daño, pérdida o afecte negativamente a las personas, al ambiente o a los bienes.',
    },
    {
      termino: 'Técnicas',
      significado:
        'es un conjunto de procedimientos, métodos o pasos organizados que una persona utiliza para realizar una actividad de manera eficiente y obtener un resultado específico.',
    },
  ],
  referencias: [
    {
      referencia:
        'Acuerdo Final de Paz. (2016). Punto 1: Reforma rural integral.',
      link: '',
    },
    {
      referencia:
        'CEPAL. (2020). Desarrollo rural y desigualdad en América Latina.',
      link: '',
    },
    {
      referencia:
        'CEPAL. (2020). Desigualdad rural y productividad en América Latina.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2011). Ley 1454 de 2011, por la cual se dictan normas orgánicas del ordenamiento territorial y se modifican otras disposiciones (Diario Oficial 48.115, 29 de junio de 2011).',
      link:
        'https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/1681347 ',
    },
    {
      referencia:
        'DANE. (2020). Estudios sobre transformación del paisaje rural y uso del suelo en Colombia.',
      link: '',
    },
    {
      referencia:
        'DANE. (2021). Encuesta nacional agropecuaria: Caracterización socioeconómica del campesinado colombiano.',
      link: '',
    },
    {
      referencia:
        'DANE. (2021). Encuesta nacional agropecuaria: Procesos productivos rurales.',
      link: '',
    },
    {
      referencia:
        'Defensoría del Pueblo. (2010). El voto: un derecho fundamental y un deber ciudadano. ',
      link:
        'https://www.defensoria.gov.co/documents/20123/1280335/Cartilla+Derecho+al+voto.pdf',
    },
    {
      referencia:
        'Defensoría del Pueblo. (2021). Informe sobre derechos políticos de las comunidades rurales en Colombia.',
      link: '',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (2007). Bases del Plan Nacional de Desarrollo: Estado comunitario, desarrollo para todos 2006 - 2010. ',
      link: '',
    },
    {
      referencia:
        'FAO. (2011). Informes sobre dinámicas rurales y campesinado en América Latina.',
      link: '',
    },
    {
      referencia:
        'FAO. (2018). Saberes campesinos y agroecología en América Latina.',
      link: '',
    },
    {
      referencia:
        'FAO. (2019). Agricultura familiar y diversificación productiva en América Latina.',
      link: '',
    },
    {
      referencia:
        'FAO. (2019). Agricultura sostenible y prácticas agroecológicas campesinas en América Latina.',
      link: '',
    },
    {
      referencia:
        'FAO. (2019). La agricultura familiar y la seguridad alimentaria en América Latina.',
      link: '',
    },
    {
      referencia:
        'FAO. (2021). Transición agroecológica en territorios campesinos.',
      link: '',
    },
    {
      referencia:
        'FAO. (2022). Transición agroecológica y economía campesina sostenible.',
      link: '',
    },
    {
      referencia:
        'Flores, L. B. (2006, agosto). Territorio y desplazamiento. Intervención en la constitución de la Mesa de Tierras de la Procuraduría General de la Nación, Bogotá.',
      link: '',
    },
    {
      referencia:
        'Herrera, A. (2017). La tenencia de tierras colectivas en Colombia: Datos y tendencias. ',
      link:
        'https://www.cifor-icraf.org/publications/pdf_files/infobrief/6704-infobrief.pdf',
    },
    {
      referencia:
        'IDEAM. (2021). Informe sobre cambio climático y adaptación en zonas rurales de Colombia.',
      link: '',
    },
    {
      referencia:
        'IDEAM. (s. f.). Informe sobre manejo sostenible de suelos rurales en Colombia.',
      link: '',
    },
    {
      referencia:
        'Ley 99 de 1993. (1993). Por la cual se crea el Ministerio del Medio Ambiente y se organiza el Sistema Nacional Ambiental (SINA).',
      link: '',
    },
    {
      referencia:
        'Ley 134 de 1994. (1994). Por la cual se dictan normas sobre los mecanismos de participación ciudadana.',
      link: '',
    },
    {
      referencia:
        'Ley 160 de 1994. (1994). Por la cual se crea el Sistema Nacional de Reforma Agraria y Desarrollo Rural Campesino.',
      link: '',
    },
    {
      referencia:
        'Ley 388 de 1997. (1997). Por la cual se ordena incorporar los determinantes ambientales en los POT.',
      link: '',
    },
    {
      referencia:
        'Ley 454 de 1998. (1998). Por la cual se determina el marco conceptual de la economía solidaria en Colombia.',
      link: '',
    },
    {
      referencia:
        'Ley 2219 de 2022. (2022). Por medio de la cual se establece el marco jurídico para la constitución, registro y vigilancia de las asociaciones campesinas.',
      link: '',
    },
    {
      referencia:
        'Mecanismos de Participación Ciudadana en Colombia. (2012). Libro mecanismos de participación ciudadana. ',
      link:
        'https://moe.org.co/wp-content/uploads/2017/07/Libro_mecanismos_de_participaci%C3%B3n_ciudadana_2012.pdf',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2018). Red de mercados campesinos de Colombia.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2020). Política nacional de agricultura campesina, familiar y comunitaria.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2020). Política nacional de gestión integral de la biodiversidad y sus servicios ecosistémicos.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Cultura. (2021). Inventario del patrimonio cultural inmaterial de las comunidades rurales.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Cultura. (2022). Cultura viva comunitaria y arte rural.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2018). Estrategias de educación ambiental en territorios rurales.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Vivienda, Ciudad y Territorio. (2015). Decreto 1077 de 2015, por el cual se reglamentan los POT e instrumentos de planificación territorial.',
      link: '',
    },
    {
      referencia:
        'Naciones Unidas. (2018). Declaración de las Naciones Unidas sobre los derechos de los campesinos y de otras personas que trabajan en las zonas rurales.',
      link: '',
    },
    {
      referencia:
        'Procuraduría General de la Nación. (2006). Análisis a la ejecución de la reforma agraria y la gestión del Incoder.',
      link: '',
    },
    {
      referencia:
        'Unidad Coordinadora de Atención Ciudadana del Congreso. (2018). Cartilla para niños: Mecanismos de participación ciudadana. ',
      link:
        'https://www.senado.gov.co/images/participacion/Cartilla_para_Ni%C3%B1os_-_Mecanismos_de_participacion_ciudadana_1_compressed.pdf',
    },
    {
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres. (2018). Guía para la incorporación de la gestión del riesgo en los planes de ordenamiento territorial.',
      link: '',
    },
    {
      referencia: 'USPEC. (2022). Mecanismos de participación ciudadana',
      link:
        'https://www.uspec.gov.co/sites/default/files/2022-02/Mecanismos-de-participacion.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Yuly Soley Alarcón Pérez',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Geraldine Viviana Fernandez Jaramillo',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
