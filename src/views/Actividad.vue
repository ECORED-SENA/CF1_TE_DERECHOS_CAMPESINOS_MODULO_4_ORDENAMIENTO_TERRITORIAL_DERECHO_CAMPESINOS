<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Ordenamiento territorial y derechos campesinos',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> comprender los fundamentos prácticos relacionados con el ordenamiento territorial y dos derechos campesinos, mecanismos de participación ciudadana, dinámicas de la población campesina en el territorio riesgos y amenazas en el ordenamiento territorial y técnicas de diagnóstico participativo.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: 'Qué es el ordenamiento territorial?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Grupo de personas que viven en el campo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Es un proceso de construcción colectiva del país y de sus diversos territorios, para lograr un desarrollo ambientalmente sostenible.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El significado se relaciona con “gente de tierra”, agricultores relacionándolo con gente que trabaja la tierra, se constituyen de acuerdo con su ubicación territorial  rural.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El campesino, tiene que ver con las necesidades del campo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿A qué se refiere el artículo 1 de la declaración de los derechos del campesino?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El campesinado es sujeto de derechos y de especial protección, tiene un particular relacionamiento con la tierra basado en la producción de alimentos en garantía de la soberanía alimentaria y sus formas de territorialidad. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Se entiende por “campesino” toda persona que se dedique o pretenda dedicarse, ya sea de manera individual o en asociación con otras o como comunidad, a la producción agrícola en pequeña escala para subsistir o comerciar.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Los campesinos y otras personas que trabajan en las zonas rurales tienen derecho a una alimentación adecuada y el derecho fundamental a no padecer hambre.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Todas las anteriores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿A qué se refiere el artículo 11 de la declaración de los derechos del campesino?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Es el principio del bien común y la necesidad de extender a sectores más numerosos de la población rural.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Los campesinos y otras personas que trabajan en las zonas rurales tienen derecho a buscar, recibir, preparar y difundir información.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Derecho a conservar, utilizar, intercambiar y vender sus semillas o material de propagación tradicional, y a mantener, controlar, proteger y desarrollar sus propios conocimientos tradicionales relacionados con las semillas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Derecho a la información sobre insumos, ciclos de cosecha, comercializadores, distribuidores, que permitan tomar mejores decisiones productivas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿A qué se refiere el artículo 15 de la declaración de los derechos del campesino?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Derecho a la información sobre insumos, ciclos de cosecha, comercializadores, distribuidores, que permitan tomar mejores decisiones productivas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Derecho a conservar, utilizar, intercambiar y vender sus semillas o material de propagación tradicional, y a mantener, controlar, proteger y desarrollar sus propios conocimientos tradicionales relacionados con las semillas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Los campesinos y la personas que trabajan en las zonas rurales tienen derecho a determinar sus propios sistemas alimentarios y agrícolas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Los campesinos y otras personas que trabajan en las zonas rurales tienen derecho a una alimentación adecuada.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿A qué se refiere la ley 1801 de 2016? ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Esta ley es una norma colombiana que busca mantener la convivencia pacífica, la seguridad y el orden público en el país, Garantizar que las personas vivan en armonía y respeten las reglas básicas de convivencia en los espacios públicos y privados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Por la cual se crea el Sistema Nacional de Reforma Agraria y Desarrollo Rural Campesino, se establece el subsidio para la adquisición de tierras, y se reforman otras disposiciones. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Ley sobre el acceso a la propiedad rural, Se crean para proteger los territorios campesinos, promover la producción sostenible y evitar el avance de grandes latifundios o cultivos ilegales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ninguna de las anteriores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuáles son algunos de los mecanismos de participación ciudadana?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El voto, revocatoria del mandato, iniciativa legislativa popular, cabildo abierto, consulta popular, plebiscito y el referendo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El voto, revocatoria del mandato, iniciativa legislativa popular y la soberanía alimentaria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La soberanía alimentaria, la información, el voto, el plebiscito. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Todas las anteriores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué es el voto?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El acto por el cual los ciudadanos eligen a sus representantes (presidente, alcaldes, gobernadores, concejales, etc.).',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Es una gran votación en la que los ciudadanos mayores de 18 años que tienen cédula de ciudadanía y que hagan parte del censo electoral.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una decisión política importante del gobierno, el plebiscito es un mecanismo mediante el cual el Presidente de la República consulta al pueblo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Todas las anteriores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿A que hace referencia la reforma agraria?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Información sobre insumos, ciclos de cosecha, comercializadores, distribuidores, que permitan tomar mejores decisiones productivas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Contar con un sistema de crédito y financiamiento diferenciado para el sector rural.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Determinar el valor de su producción y a quién quiere vender su cosecha.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El mandato constitucional de asegurar el derecho a la propiedad de los trabajadores agrarios, puesto que se supeditan a criterios de empresarización y competitividad en las que no se garantizan los derechos a la igualdad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Cuáles son algunas de las dinámicas sociales?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Producción y a quién quiere vender su cosecha.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Organización comunitaria, economía solidaria, migración rural, defensa del territorio, cambio cultural y participación ciudadana.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Personas y comunidades para acceder, usar, habitar, controlar y proteger la tierra y el territorio donde viven, trabajan y desarrollan su cultura, de manera segura y sostenible.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Insumos, ciclos de cosecha, comercializadores, distribuidores, que permitan tomar mejores decisiones productivas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Cuáles son algunas de las dinámicas ambientales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Defensa del territorio y el agua, adaptación al cambio climático, transformación del paisaje rural y educación ambiental comunitaria. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Participar en los espacios de política pública para la formulación de planes, programas y proyectos para la agricultura local y nacional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Conocer las propuestas de las entidades estatales que les puedan afectar de alguna forma, e intervenir, informarse y comunicar sus intereses frente a ellas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Todas las anteriores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Las amenazas Son fenómenos naturales o provocados por el ser humano que pueden generar daños (inundaciones, deslizamientos, incendios, sismos, contaminación, entre otros).',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Los riesgos buscan planificar el uso del suelo y los recursos naturales de manera equilibrada para garantizar un desarrollo sostenible, de manera que esto también puede desencadenar riesgos y amenazas tanto en el entorno natural como humano.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'El ordenamiento territorial el componente urbano y rural busca planificar el uso del suelo y de los recursos naturales de forma equilibrada, teniendo en cuenta las características urbanas y rurales del territorio.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'El ordenamiento territorial (OT) y la política ambiental están estrechamente vinculados, ya que ambos buscan garantizar un uso sostenible del territorio y la protección de los recursos naturales.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'El diagnóstico participativo es un proceso mediante el cual la comunidad analiza, identifica y prioriza sus problemas, para asi contribuir a un conocimiento colectivo del territorio o grupo social.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
