<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Técnicas de diagnóstico participativo
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5(data-aos="zoom-in").mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img94.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El diagnóstico participativo es un proceso mediante el cual la comunidad analiza, identifica y prioriza sus problemas, contribuyendo así a la construcción de un conocimiento colectivo del territorio o grupo social. Este enfoque fortalece la participación ciudadana, promueve el reconocimiento de saberes locales y permite diseñar estrategias más ajustadas a la realidad del contexto. A continuación, se presentan diversas técnicas de diagnóstico participativo que pueden aplicarse en diferentes espacios comunitarios:

    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
      h5 Tabla 4.
      span Técnicas de diagnóstico participativo
    .tabla-a(data-aos="zoom-in")
      table
        caption Nota.  Elaborado con base en Organización de las Naciones Unidas para la Alimentación y la Agricultura – FAO (2011).
        thead
          tr
            th.ajuste-border-tabla Técnica
            th.ajuste-border-tabla Descripción
            th.ajuste-border-tabla Objetivo general
            th Aplicación
        tbody
          tr
            td.ajuste-border-tabla.texto-left <strong>Asamblea comunitaria</strong>
            td.ajuste-border-tabla.texto-left Reunión abierta donde la comunidad expresa opiniones, propone y prioriza.
            td.ajuste-border-tabla.texto-left Promover la participación y el consenso.
            td.texto-left Espacios de diálogo, planeación y acuerdos colectivos.
          tr.ajuste-color-tabla
            td.ajuste-border-tabla.texto-left <strong>Entrevista semiestructurada</strong>
            td.ajuste-border-tabla.texto-left Conversación guiada con líderes o grupos específicos.
            td.ajuste-border-tabla.texto-left Obtener información cualitativa sobre percepciones.
            td.texto-left Entrevistas a líderes campesinos o actores sociales.
          tr
            td.ajuste-border-tabla.texto-left <strong>Grupo focal</strong>
            td.ajuste-border-tabla.texto-left Reunión de 6 a 10 personas para debatir un tema.
            td.ajuste-border-tabla.texto-left Profundizar en temas sensibles o complejos.
            td.texto-left Identificación de conflictos o análisis de proyectos.
          tr.ajuste-color-tabla
            td.ajuste-border-tabla.texto-left <strong>Lluvia de ideas</strong>
            td.ajuste-border-tabla.texto-left Técnica colectiva para generar ideas rápidamente.
            td.ajuste-border-tabla.texto-left Identificar problemas, soluciones o propuestas.
            td.texto-left Talleres comunitarios o educativos.
          tr
            td.ajuste-border-tabla.texto-left <strong>Cartografía social</strong>
            td.ajuste-border-tabla.texto-left Mapas elaborados por la comunidad desde su percepción territorial.
            td.ajuste-border-tabla.texto-left Visualizar recursos, conflictos, riesgos y usos del suelo.
            td.texto-left Mapas participativos rurales o urbanos.
          tr.ajuste-color-tabla
            td.ajuste-border-tabla.texto-left <strong>Línea de tiempo</strong>
            td.ajuste-border-tabla.texto-left Representación cronológica de hechos importantes en la comunidad.
            td.ajuste-border-tabla.texto-left Analizar cambios, procesos y evolución del territorio.
            td.texto-left Historia de conflictos o transformaciones ambientales.
          tr
            td.ajuste-border-tabla.texto-left <strong>Recorrido de campo</strong>
            td.ajuste-border-tabla.texto-left Caminata guiada por el territorio con observación directa.
            td.ajuste-border-tabla.texto-left Identificar problemas in situ (ambientales, productivos).
            td.texto-left Recorridos rurales, urbanos o ecológicos.
          tr.ajuste-color-tabla
            td.ajuste-border-tabla.texto-left <strong>Árbol de problemas y objetivos</strong>
            td.ajuste-border-tabla.texto-left Diagrama que muestra causas, efectos y posibles soluciones.
            td.ajuste-border-tabla.texto-left Analizar la raíz de los problemas y formular estrategias.
            td.texto-left Planeación de proyectos o programas comunitarios.
          tr
            td.ajuste-border-tabla.texto-left <strong>Matriz de priorización</strong>
            td.ajuste-border-tabla.texto-left Herramienta para jerarquizar problemas o proyectos.
            td.ajuste-border-tabla.texto-left Facilitar la toma de decisiones colectivas.
            td.texto-left Priorización de necesidades en talleres o asambleas.
          tr.ajuste-color-tabla
            td.ajuste-border-tabla.texto-left <strong>Observación participante</strong>
            td.ajuste-border-tabla.texto-left El facilitador convive y observa la vida cotidiana de la comunidad.
            td.ajuste-border-tabla.texto-left Comprender dinámicas sociales, culturales y productivas.
            td.texto-left Diagnóstico rural o urbano con enfoque social.

</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
