<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Historia de la reforma agraria en Colombia y dinámicas de la población campesina en el territorio
    
    .fondo___color_1
      .px-5

        .row.align-items-center
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img61.png', alt='').m-auto
          .col-xl
            p.mb-3 La reforma agraria en Colombia ha sido históricamente un tema complejo, atravesado por intereses económicos, conflictos sociales y tensiones políticas. Diversas organizaciones sociales han manifestado que el proyecto de ley actualmente en trámite en el Congreso no responde a una <strong>reforma agraria integral</strong>, necesaria para una redistribución justa y equitativa de la tierra.
            .row.align-items-center.m-0
              .col-xl.style___box_1(data-aos="zoom-in")
                p.mb-0 Estas organizaciones han alertado sobre las limitaciones de las modalidades propuestas para la entrega de tierras, como el arrendamiento, el comodato o el subsidio integral. Según denuncian, estas fórmulas no garantizan el <strong>derecho constitucional a la propiedad</strong> para los trabajadores agrarios, ya que priorizan criterios de empresarización y competitividad por encima de los derechos a la igualdad, la diversidad cultural y ambiental, y la seguridad alimentaria. Asimismo, se advierte que permitir la compra de mejoras y propiedades a través del subsidio puede derivar en la legalización de ocupaciones sobre territorios étnicos, generando conflictos y afectaciones a los derechos colectivos.
              .col-xl-auto(data-aos="fade-left")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img62.png', alt='' style="max-width: 350px").m-auto

        <!-- BLOQUE 1 -->
        Separador
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.1 Dinámicas de la población campesina en el territorio

        p.mb-5 Comprender las dinámicas de la población campesina es esencial para interpretar cómo viven, resisten, se adaptan y transforman los territorios rurales. Estas dinámicas no solo reflejan aspectos productivos, sino también sociales, culturales y políticos que influyen en la configuración del espacio y en las relaciones comunitarias.
    
    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
      h5 Figura 4.
      span Ruleta de las dinámicas de la población campesina
    figure(data-aos="zoom-in").mb-5
      img(src='@/assets/curso/temas/img63.png', alt='Rueda dividida en seis secciones con categorías de análisis territorial: dinámica social, dinámica cultural, dinámica ambiental, dinámica económica, dinámica política y dinámica productiva.')
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img5.svg" style="max-width: 60px").m-auto
      .col
        h3 Dinámicas sociales 
    
    .row.align-items-center.mb-5
      .col-xl
        .row.align-items-center.mb-3.m-0.style___box_12(data-aos="zoom-in")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img64.png', alt='').m-auto
          .col-xl
            p.mb-0 Conocer las dinámicas sociales y culturales de la población campesina es fundamental para generar una comprensión profunda de los procesos que configuran la vida rural. Estas dinámicas reflejan los cambios en la organización interna de las comunidades, sus formas de producción, los vínculos familiares, el acceso a servicios, la relación con el entorno natural y su participación en la vida política del país.
        p.mb-0 La <strong>dinámica social</strong> de las comunidades campesinas implica la construcción colectiva de relaciones familiares, redes de cooperación y formas de gobierno local. Estas relaciones evolucionan a medida que las condiciones del entorno cambian; por ejemplo, debido al conflicto armado, los procesos migratorios o la implementación de nuevas políticas agrarias. La estructura social campesina, aunque históricamente basada en la solidaridad y el trabajo colectivo, se ve constantemente tensionada por las dinámicas del mercado, las disputas territoriales y los cambios generacionales. A continuación, se sintetizan las principales dinámicas sociales y culturales identificadas:
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img65.png', alt='').m-auto
    
    TabsA.color-acento-botones.mb-5(data-aos="zoom-in")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Organización comunitaria")
        h4 Organización comunitaria
        .row.align-items-center
          .col-lg
            p.mb-0 Los campesinos se agrupan en <strong>juntas de acción comunal</strong>, asociaciones y cooperativas para gestionar proyectos, defender sus tierras y mejorar la producción. Estas organizaciones son clave en la construcción de autonomía territorial.
          .col-lg-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img66.png", alt="" style="max-width: 350px").m-auto
      
      .tarjeta.color-acento-botones--borde.p-4(titulo="Economía solidaria")
        h4 Economía solidaria
        .row.align-items-center
          .col-lg
            p.mb-0 Basada en el <strong>trabajo familiar y colectivo</strong>, el intercambio de productos y la comercialización en mercados locales. Fortalece la autosuficiencia y el tejido comunitario.
          .col-lg-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img67.png", alt="" style="max-width: 350px").m-auto
      
      .tarjeta.color-acento-botones--borde.p-4(titulo="Migración rural")
        h4 Migración rural
        .row.align-items-center
          .col-lg
            p.mb-0 Muchos hogares enfrentan procesos de migración por factores como la violencia, el desempleo o la falta de servicios básicos, lo que genera cambios culturales, pérdida de arraigo y desarticulación social.
          .col-lg-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img68.png", alt="" style="max-width: 350px").m-auto
      
      .tarjeta.color-acento-botones--borde.p-4(titulo="Defensa del territorio")
        h4 Defensa del territorio
        .row.align-items-center
          .col-lg
            p.mb-0 Las comunidades campesinas se movilizan para proteger su territorio, exigir derechos sobre la tierra y promover la <strong>soberanía alimentaria</strong>, oponiéndose a megaproyectos que amenazan sus medios de vida.
          .col-lg-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img69.png", alt="" style="max-width: 350px").m-auto
      
      .tarjeta.color-acento-botones--borde.p-4(titulo="Cambio cultural")
        h4 Cambio cultural
        .row.align-items-center
          .col-lg
            p.mb-0 Las nuevas generaciones incorporan <strong>tecnologías digitales, educación formal y medios de comunicación</strong>, sin abandonar del todo las tradiciones agrícolas heredadas. Esto genera tensiones y oportunidades en la transmisión de saberes.
          .col-lg-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img70.png", alt="" style="max-width: 350px").m-auto
      
      .tarjeta.color-acento-botones--borde.p-4(titulo="Participación ciudadana")
        h4 Participación ciudadana
        .row.align-items-center
          .col-lg
            p.mb-0 La población campesina interviene activamente en <strong>espacios de planeación local, cabildos, consultas previas y procesos de paz</strong>, buscando incidir en decisiones estatales que afectan sus territorios y condiciones de vida.
          .col-lg-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img71.png", alt="" style="max-width: 350px").m-auto
    
    p.mb-5 Estas dinámicas demuestran que el campesinado colombiano es un sujeto colectivo activo, que transforma su entorno desde la cotidianidad y que participa en la construcción de un modelo de desarrollo rural con identidad propia. Su reconocimiento dentro de las políticas de ordenamiento territorial, reforma agraria y planificación del desarrollo es clave para garantizar justicia social, sostenibilidad y paz territorial.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img5.svg" style="max-width: 60px").m-auto
      .col
        h3 Dinámicas culturales 

    p.mb-5 Las dinámicas culturales en la población campesina reflejan los procesos de cambio, conservación y transmisión de costumbres, valores y saberes tradicionales dentro de las comunidades rurales. Estas dinámicas permiten que los campesinos mantengan su identidad cultural mientras se adaptan a los cambios sociales, económicos y tecnológicos del entorno. A continuación, se presentan los principales ejes de estas dinámicas:

    .fondo___img
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img73.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img74.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Transmisión de saberes tradicionales
                p.mb-0 Incluye los conocimientos sobre agricultura, uso de la tierra, medicina natural y costumbres que se transmiten de generación en generación.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img75.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Tradiciones y fiestas populares
                p.mb-0 Las comunidades celebran fiestas patronales, religiosas y festivales agrícolas, fortaleciendo el sentido de pertenencia y unión comunitaria.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img76.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Relación con la naturaleza y cosmovisión
                p.mb-0 La cultura campesina se basa en una relación respetuosa con la naturaleza, considerando la tierra como fuente de vida e identidad.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img77.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Expresiones artísticas y comunicativas
                p.mb-0 Se destacan la música popular, la copla, el teatro campesino, los tejidos y la pintura artesanal, que reflejan su vida cotidiana y sus luchas.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img78.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Identidad y pertenencia territorial
                p.mb-0 La cultura campesina refuerza un fuerte sentido de identidad vinculado a la tierra, la comunidad y la producción agrícola, reafirmando la defensa del territorio y la soberanía alimentaria.

        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img5.svg" style="max-width: 60px").m-auto
          .col
            h3 Dinámicas ambientales

        p.mb-5 A continuación, se presenta un video  que analiza las dinámicas ambientales de la población campesina, explorando las prácticas sostenibles, los saberes tradicionales y las estrategias comunitarias que configuran su relación con el entorno natural.

    figure(data-aos="zoom-in").mb-5
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption(data-aos="zoom-in") <strong>Video</strong>: TEXTO

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img5.svg" style="max-width: 60px").m-auto
      .col
        h3 Dinámicas económicas 

    p.mb-5 Las dinámicas económicas de la población campesina comprenden los procesos y actividades productivas, comerciales y de subsistencia que las comunidades rurales desarrollan para garantizar su bienestar y preservar su modo de vida. Estas dinámicas se fundamentan en el trabajo familiar, la producción agropecuaria, el intercambio local y la economía solidaria.

    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Producción agropecuaria familiar
                p.mb-0 Constituye la base económica: agricultura y ganadería a pequeña escala, con trabajo familiar orientado al autoconsumo y la venta local.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img79.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Economía de subsistencia y autoconsumo
                p.mb-0 Gran parte de la producción se destina al consumo familiar, lo que garantiza la seguridad alimentaria y reduce la dependencia del mercado externo.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img80.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Comercialización local y mercados campesinos
                p.mb-0 Se vende en plazas de mercado, ferias y circuitos cortos de comercialización, generando ingresos sin recurrir a intermediarios.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img81.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Cooperativismo y economía solidaria
                p.mb-0 Las comunidades forman asociaciones, cooperativas y redes de trueque para compartir recursos, obtener créditos y acceder a mercados.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img82.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Diversificación económica
                p.mb-0 Además de la agricultura, se desarrollan actividades como la artesanía, apicultura, ecoturismo o el trabajo temporal urbano.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img83.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Desigualdad y acceso limitado a recursos
                p.mb-0 La falta de tierra, crédito, tecnología y apoyo estatal limita el desarrollo económico, promoviendo la migración hacia las ciudades.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img84.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Transición hacia economías sostenibles
                p.mb-0 Se implementan modelos agroecológicos y sostenibles que buscan equilibrar la rentabilidad con la protección ambiental.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img85.png', alt='' style="max-width: 500px").m-auto

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img5.svg" style="max-width: 60px").m-auto
      .col
        h3 Dinámicas políticas  

    p.mb-5 Las dinámicas políticas de la población campesina comprenden los procesos de organización, participación y representación mediante los cuales las comunidades rurales defienden sus derechos, acceden a la tierra y participan en las decisiones del Estado. Estas dinámicas están motivadas por el reconocimiento político, la justicia social y la inclusión en las políticas públicas rurales.

    .bg--img_03.mb-5
      .row.h-100.align-items-center
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/temas/img86.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row.p-4(titulo="Organización social y política del campesinado").ajuste-cajaAcordion
              p.mb-0 Los campesinos se agrupan en asociaciones, ligas agrarias, sindicatos y movimientos campesinos para defender derechos y representar intereses.
            .row.p-4(titulo="Participación ciudadana en espacios de decisión").ajuste-cajaAcordion
              p.mb-0  Ejercen sus derechos mediante cabildos abiertos, consultas populares, juntas de acción comunal y consejos de desarrollo rural.
            .row.p-4(titulo="Lucha por el acceso a la tierra y reforma agraria").ajuste-cajaAcordion
              p.mb-0 Reivindican la redistribución equitativa de la tierra mediante políticas de reforma agraria y desarrollo rural integral.
            .row.p-4(titulo="Participación en procesos de paz y justicia social").ajuste-cajaAcordion
              p.mb-0 Han sido actores clave en procesos de paz, exigiendo reparación a víctimas, restitución de tierras y garantías de no repetición.
            .row.p-4(titulo="Incidencia en políticas públicas rurales").ajuste-cajaAcordion
              p.mb-0  Promueven la inclusión de sus necesidades en planes de desarrollo, políticas de seguridad alimentaria y leyes de protección del campesinado.
            .row.p-4(titulo="Reconocimiento de derechos campesinos").ajuste-cajaAcordion
              p.mb-0 Buscan el reconocimiento como sujetos políticos y de derechos, impulsando la aprobación de leyes y tratados internacionales que los respalden.
            .row.p-4(titulo="Desigualdad y exclusión política").ajuste-cajaAcordion
              p.mb-0 A pesar de los avances, persiste la falta de representación, discriminación y el escaso acceso a información política, limitando su participación efectiva.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img5.svg" style="max-width: 60px").m-auto
      .col
        h3 Dinámicas productivas 

    p.mb-5 Las dinámicas productivas de la población campesina comprenden los procesos, formas de trabajo y estrategias mediante los cuales las comunidades rurales producen bienes especialmente alimentos para su subsistencia y para el mercado local. Estas dinámicas combinan saberes tradicionales, trabajo familiar y prácticas agroecológicas, con el objetivo de mantener la sostenibilidad del territorio y fortalecer la economía rural.

    .fondo___slider
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Producción agrícola tradicional
                p.mb-0 Se cultivan productos como maíz, fríjol, café, yuca, papa y hortalizas, principalmente para el autoconsumo y la venta en mercados locales.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img98.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Diversificación de la producción
                p.mb-0 Se combinan actividades como agricultura, ganadería, avicultura, apicultura y pesca artesanal para asegurar la seguridad alimentaria y generar ingresos adicionales.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img99.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Trabajo familiar y comunitario
                p.mb-0 La producción se basa en el trabajo colectivo de la familia y la comunidad, lo cual fortalece la solidaridad, el intercambio de saberes y la economía local.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img100.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Agroecología y sostenibilidad
                p.mb-0 Se implementan prácticas agroecológicas que evitan el uso de agroquímicos y protegen la biodiversidad del suelo, el agua y los cultivos.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img101.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Transformación y valor agregado
                p.mb-0 Se incorporan procesos artesanales de transformación (como mermeladas, quesos, café tostado) para aumentar el valor de los productos e incrementar los ingresos.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img102.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Comercialización en circuitos locales
                p.mb-0 La venta directa en mercados campesinos, ferias y tiendas rurales permite reducir intermediarios y fortalecer la economía local.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img103.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Uso limitado de tecnología y financiamiento
                p.mb-0 Muchas familias enfrentan dificultades de acceso a maquinaria, crédito, asistencia técnica e infraestructura, lo cual limita la productividad.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img104.png', alt='' style="max-width: 500px").m-auto
    
    <!-- BLOQUE 2 -->
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Uso del suelo en la población campesina
    
    .row.align-items-center
      .col-xl
        .row.align-items-center.style___box_1.m-0.mb-3(data-aos="zoom-in")
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img87.svg', alt='').m-auto
          .col-xl
            p.mb-0 El uso del suelo en la población campesina hace referencia a las formas de aprovechamiento, cultivo y manejo de la tierra por parte de las comunidades rurales para desarrollar sus actividades productivas, económicas y culturales. Este uso está íntimamente ligado a factores como la propiedad y el acceso a la tierra, las prácticas agrícolas tradicionales y el compromiso con la sostenibilidad ambiental.
        p.mb-0 El suelo no solo representa un recurso productivo, sino también un elemento esencial de la identidad campesina, ya que en él se expresa su relación con la naturaleza, su modo de vida y su derecho al territorio.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img88.png', alt='').m-auto

</template>

<script>
export default {
  name: 'Tema4',
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
