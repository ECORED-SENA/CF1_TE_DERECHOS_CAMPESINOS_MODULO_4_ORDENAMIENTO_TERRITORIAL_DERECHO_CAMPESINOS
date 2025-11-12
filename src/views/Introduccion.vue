<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .fondo___color_1
      .px-5

        .row.align-items-center.mb-5
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/intro/img2.png', alt='').m-auto
          .col-xl
            p.mb-3 El componente formativo ordenamiento territorial y derechos campesinos, busca desarrollar conocimientos sobre la relación entre los derechos del campesino y la organización del territorio. A partir de la Declaración de los Derechos del Campesino, se analizan los artículos que abordan aspectos vinculados con el uso de la tierra, la soberanía alimentaria, los recursos naturales y la participación social. Asimismo, se estudian las leyes incluidas en la Constitución Política de Colombia que orientan el desarrollo rural, la reforma agraria, la propiedad y las asociaciones campesinas.
            .row.align-items-center.m-0
              .col-xl.style___box_1(data-aos="zoom-in")
                p.mb-0 Además, se promueve la comprensión de los mecanismos de participación ciudadana, reconociendo su papel en la construcción democrática del territorio. Este proceso se aborda desde una mirada histórica sobre la tenencia de la tierra en Colombia, analizando las transformaciones que han afectado al campesinado, sus formas de organización y los retos que enfrenta frente a las dinámicas sociales, culturales, ambientales, económicas y productivas que caracterizan su vida en el campo.
              .col-xl-auto(data-aos="fade-left")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/intro/img3.png', alt='').m-auto
        
        .row.align-items-center.style___box_2.m-0(data-aos="zoom-in")
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/intro/img4.svg', alt='').m-auto
          .col-xl
            p.mb-0 Finalmente, se examinan los riesgos y amenazas que inciden en el ordenamiento territorial, integrando la perspectiva del manejo de los recursos naturales y la diferenciación entre los componentes urbano y rural. De esta forma, el componente orienta al estudiante hacia una comprensión integral del territorio como espacio de vida, de identidad y de derechos, en el que el campesinado desempeña un papel fundamental en la sostenibilidad, la justicia social y la preservación del entorno.

</template>

<script>
export default {
  name: 'Introduccion',
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
