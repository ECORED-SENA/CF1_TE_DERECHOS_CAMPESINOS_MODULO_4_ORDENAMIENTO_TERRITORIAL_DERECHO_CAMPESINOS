<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Riesgos y amenazas en el ordenamiento territorial

    p.mb-5 A continuación, se presenta un pódcast que aborda los riesgos y amenazas en el ordenamiento territorial, destacando su importancia en la construcción de territorios seguros, sostenibles y resilientes frente a fenómenos naturales y antrópicos.

    .row.align-items-center.m-0.mb-5
      .col-xl
        .row.align-items-center.style___box_15(data-aos="zoom-in")
          .col-auto
            figure.d-none.d-xl-block(data-aos="fade-right")
              img(src="@/assets/curso/temas/img89.svg" style="max-width: 220px").m-auto
          .col
            h4.mb-4 Lo invitamos a escuchar el siguiente pódcast:
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="Riesgos y amenazas en el ordenamiento territorial"
              :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
      .col-xl-auto
        figure(data-aos="fade-left").d-none.d-xl-block
          img(src="@/assets/curso/temas/img90.png" style="max-width: 400px").m-auto

    <!-- BLOQUE 1 -->
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Relación entre el ser humano y los recursos naturales
    
    p.mb-5 El ordenamiento territorial tiene como objetivo planificar el uso del suelo y los recursos naturales de manera equilibrada para garantizar un desarrollo sostenible. No obstante, cuando esta planificación es deficiente o se ignoran criterios ambientales, se pueden desencadenar riesgos y amenazas tanto en el entorno natural como en el humano.

    .row.justify-content-center
      .col-lg-10
        .row.align-items-center.style___box_2.m-0(data-aos="zoom-in")
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img91.svg', alt='').m-auto
          .col-xl
            p.mb-0 El uso inadecuado del suelo, como la deforestación, la ocupación de zonas de riesgo o la expansión urbana descontrolada, incrementa la vulnerabilidad de las comunidades frente a fenómenos naturales.

    <!-- BLOQUE 2 -->
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2 Marco legal

    p.mb-5 Existen diversas normas que establecen la inclusión obligatoria de medidas de gestión del riesgo en los Planes de Ordenamiento Territorial (POT), como parte del marco legal colombiano. A continuación, se presenta un resumen:

    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
      h5 Tabla 1.
      span Marco legal, amenazas y riesgos en torno al ordenamiento territorial
    .tabla-a(data-aos="zoom-in")
      table
        caption Nota. Elaborado con base en Unidad Nacional para la Gestión del Riesgo de Desastres – UNGRD (2018), Guía metodológica para incorporar la gestión del riesgo en los POT.
        thead
          tr
            th.ajuste-border-tabla Norma
            th.ajuste-border-tabla Contenido
            th Relación con el ordenamiento territorial
        tbody
          tr
            td.ajuste-border-tabla.texto-left <strong>Ley 388 de 1997</strong>
            td.ajuste-border-tabla.texto-left Ley de Ordenamiento Territorial.
            td.texto-left Obliga a incluir la gestión del riesgo y la protección ambiental en los POT. (Art. 10 y 12).
          tr.ajuste-color-tabla
            td.ajuste-border-tabla.texto-left <strong>Ley 1523 de 2012</strong>
            td.ajuste-border-tabla.texto-left Política Nacional de Gestión del Riesgo de Desastres (PNGRD).
            td.texto-left Define el Sistema Nacional de Gestión del Riesgo e integra la gestión del riesgo en planes de desarrollo y POT.
          tr
            td.ajuste-border-tabla.texto-left <strong>Decreto 1807 de 2014</strong>
            td.ajuste-border-tabla.texto-left Reglamenta la Ley 1523.
            td.texto-left Establece lineamientos técnicos para incorporar el riesgo en la planificación territorial y sectorial.
          tr.ajuste-color-tabla
            td.ajuste-border-tabla.texto-left <strong>Ley 99 de 1993</strong>
            td.ajuste-border-tabla.texto-left Crea el Ministerio de Ambiente y el SINA.
            td.texto-left Regula la protección de recursos naturales e impone criterios ambientales en el uso del suelo.
          tr
            td.ajuste-border-tabla.texto-left <strong>Decreto 1077 de 2015</strong>
            td.ajuste-border-tabla.texto-left Decreto Único Reglamentario del Sector Vivienda, Ciudad y Territorio.
            td.texto-left Establece cómo los POT deben integrar amenazas naturales, ambientales y tecnológicas en el diagnóstico y zonificación.
          tr.ajuste-color-tabla
            td.ajuste-border-tabla.texto-left <strong>Ley 152 de 1994</strong>
            td.ajuste-border-tabla.texto-left Ley Orgánica del Plan de Desarrollo.
            td.texto-left Ordena que los planes de desarrollo incluyan estrategias de prevención y reducción del riesgo.
          tr
            td.ajuste-border-tabla.texto-left <strong>CONPES 3700 de 2011</strong>
            td.ajuste-border-tabla.texto-left Política Nacional para la Gestión del Riesgo de Desastres.
            td.texto-left Promueve la incorporación del riesgo en la planificación territorial y la inversión pública.

    <!-- BLOQUE 3 -->
    Separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.3 Componente urbano y rural

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0
          .col-xl.style___box_16(data-aos="fade-right")
            p.mb-0 El ordenamiento territorial debe considerar tanto las zonas urbanas como las rurales, ya que cada una presenta características específicas que determinan el tipo de amenazas, causas y riesgos a los que están expuestas. Planificar con enfoque diferencial permite reducir la vulnerabilidad y mejorar la resiliencia territorial.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img92.png", alt="" ).m-auto
    
    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
      h5 Tabla 2.
      span Amenazas y riesgos en el ordenamiento territorial según el componente urbano y rural
    .tabla-a(data-aos="zoom-in")
      table
        caption Fuente: Elaborado con base en el Ministerio de Vivienda, Ciudad y Territorio (Decreto 1077 de 2015) y el Ministerio de Ambiente y Desarrollo Sostenible (2020).
        thead
          tr
            th.ajuste-border-tabla Componente
            th.ajuste-border-tabla Amenazas
            th.ajuste-border-tabla Causas
            th Riesgos
        tbody
          tr
            td.ajuste-border-tabla.texto-left Urbano
            td.ajuste-border-tabla.texto-left Inundaciones.
            td.ajuste-border-tabla.texto-left Ocupación de rondas de ríos y quebradas.
            td.texto-left Vulnerabilidad de la población asentada en zonas de riesgo.
          tr.ajuste-color-tabla
            td.ajuste-border-tabla.texto-left Urbano
            td.ajuste-border-tabla.texto-left Déficit de servicios públicos.
            td.ajuste-border-tabla.texto-left Expansión urbana descontrolada.
            td.texto-left Deterioro en la calidad de vida urbana.
          tr
            td.ajuste-border-tabla.texto-left Urbano
            td.ajuste-border-tabla.texto-left Pérdida de suelo fértil y ecosistemas.
            td.ajuste-border-tabla.texto-left Urbanización no planificada.
            td.texto-left Reducción de áreas verdes y servicios ecosistémicos.
          tr.ajuste-color-tabla
            td.ajuste-border-tabla.texto-left Urbano
            td.ajuste-border-tabla.texto-left Deslizamientos.
            td.ajuste-border-tabla.texto-left Construcción en zonas inestables.
            td.texto-left Daños a infraestructura y pérdida de vidas humanas.
          tr
            td.ajuste-border-tabla.texto-left Urbano
            td.ajuste-border-tabla.texto-left Contaminación del aire.
            td.ajuste-border-tabla.texto-left Actividades industriales y residuos urbanos.
            td.texto-left Aumento de enfermedades respiratorias y deterioro ambiental.
          tr.ajuste-color-tabla
            td.ajuste-border-tabla.texto-left Urbano
            td.ajuste-border-tabla.texto-left Colapso de infraestructura.
            td.ajuste-border-tabla.texto-left Crecimiento urbano sin planificación.
            td.texto-left Riesgo de fallas estructurales y saturación de servicios.
          tr
            td.ajuste-border-tabla.texto-left Rural
            td.ajuste-border-tabla.texto-left Deforestación.
            td.ajuste-border-tabla.texto-left Pérdida de cobertura vegetal.
            td.texto-left Disminución de la productividad del suelo y pérdida de biodiversidad.
          tr.ajuste-color-tabla
            td.ajuste-border-tabla.texto-left Rural
            td.ajuste-border-tabla.texto-left Migración rural-urbana.
            td.ajuste-border-tabla.texto-left Pérdida de medios de vida.
            td.texto-left Despoblamiento rural y presión sobre zonas urbanas.
          tr
            td.ajuste-border-tabla.texto-left Rural
            td.ajuste-border-tabla.texto-left Vulnerabilidad climática.
            td.ajuste-border-tabla.texto-left Eventos extremos (sequías, lluvias intensas).
            td.texto-left Impacto en la seguridad alimentaria y medios de subsistencia.
          tr.ajuste-color-tabla
            td.ajuste-border-tabla.texto-left Rural
            td.ajuste-border-tabla.texto-left Erosión y degradación del suelo.
            td.ajuste-border-tabla.texto-left Prácticas agrícolas inadecuadas.
            td.texto-left Disminución de la fertilidad del suelo y mayor exposición a desastres.
          tr
            td.ajuste-border-tabla.texto-left Rural
            td.ajuste-border-tabla.texto-left Sequías.
            td.ajuste-border-tabla.texto-left Cambio climático.
            td.texto-left Escasez de agua para consumo y producción.
          tr.ajuste-color-tabla
            td.ajuste-border-tabla.texto-left Rural
            td.ajuste-border-tabla.texto-left Contaminación de fuentes hídricas.
            td.ajuste-border-tabla.texto-left Uso de agroquímicos y minería ilegal.
            td.texto-left Afectación a la salud humana y pérdida de fauna acuática.
          tr
            td.ajuste-border-tabla.texto-left Conflictos por el uso del suelo
            td.ajuste-border-tabla.texto-left Conflictos por el uso del suelo.
            td.ajuste-border-tabla.texto-left Expansión agrícola, ganadera o urbana.
            td.texto-left Disputas territoriales y desequilibrios en el uso de los recursos naturales.

    <!-- BLOQUE 4 -->
    Separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.4 Política ambiental
    
    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0
          .col-xl.style___box_1(data-aos="fade-right")
            p.mb-0 La <strong>política ambiental</strong> establece las directrices para la <strong>protección, conservación y uso sostenible de los recursos naturales</strong>. Esta política está vinculada directamente con el ordenamiento territorial, el cual debe integrar criterios ambientales en su planificación para garantizar un desarrollo equilibrado.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img93.png", alt="" ).m-auto
    
    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
      h5 Tabla 3.
      span Relación entre política ambiental y ordenamiento territorial
    .tabla-a(data-aos="zoom-in")
      table
        caption Nota. Elaborado con base en la Ley 99 de 1993 y la Ley 388 de 1997.
        thead
          tr
            th.ajuste-border-tabla Aspecto
            th.ajuste-border-tabla Ordenamiento territorial
            th.ajuste-border-tabla Política ambiental
            th Relación
        tbody
          tr
            td.ajuste-border-tabla.texto-left <strong>Objetivo</strong>
            td.ajuste-border-tabla.texto-left Organizar el uso del suelo y los asentamientos humanos.
            td.ajuste-border-tabla.texto-left Proteger ecosistemas y garantizar un ambiente sano.
            td.texto-left El OT debe incluir <strong>lineamientos ambientales</strong> para lograr un desarrollo sostenible.
          tr.ajuste-color-tabla
            td.ajuste-border-tabla.texto-left <strong>Enfoque</strong>
            td.ajuste-border-tabla.texto-left Planificación física, económica y social del territorio.
            td.ajuste-border-tabla.texto-left Conservación, restauración y uso sostenible de los recursos naturales.
            td.texto-left Ambas buscan <strong>armonizar el desarrollo humano con la protección ambiental</strong>.
          tr
            td.ajuste-border-tabla.texto-left <strong>Instrumento principal</strong>
            td.ajuste-border-tabla.texto-left Plan de Ordenamiento Territorial (POT).
            td.ajuste-border-tabla.texto-left Política Nacional Ambiental de Desarrollo y el SINA.
            td.texto-left El POT debe incorporar los <strong>determinantes ambientales</strong> definidos por las autoridades ambientales.









</template>

<script>
export default {
  name: 'Tema5',
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
