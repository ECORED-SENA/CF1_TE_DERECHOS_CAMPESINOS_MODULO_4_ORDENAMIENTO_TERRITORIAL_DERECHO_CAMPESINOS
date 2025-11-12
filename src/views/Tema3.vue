<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Antecedentes de la tenencia de la tierra en Colombia
    
    .row.align-items-center.mb-5
      .col-xl
        p.mb-3 La figura de la tenencia y propiedad colectiva está consagrada en la <strong>Constitución Política de Colombia de 1991</strong>, que reconoce la titularidad colectiva de los resguardos indígenas y de las tierras de las comunidades negras o afrodescendientes. En la actualidad, se plantea la posibilidad de que las <strong>Zonas de Reserva Campesina (ZRC)</strong> sean reconocidas como una figura similar en términos de protección de derechos del campesinado, lo que representa un debate vigente y directamente relacionado con la implementación del <strong>Acuerdo de Paz</strong> entre el Estado colombiano y las Fuerzas Armadas Revolucionarias de Colombia (FARC). (Herrera, 2017, p. 1).
        .row.align-items-center.m-0.style___box_13.mb-4
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img51.png', alt="" ).m-auto
          .col-xl.style___box_13_1
            p.m-b-0 El siguiente apartado aborda distintos aspectos relacionados con la propiedad colectiva de la tierra en Colombia, con énfasis en las comunidades negras y en las medidas adoptadas tras la firma del Acuerdo de Paz. Se analizan los fundamentos legales, las cifras sobre tenencia y conflicto, las políticas de atención implementadas por el Estado y los procesos de reparación a las víctimas. Finalmente, se examinan las problemáticas de abandono y apropiación de tierras, que continúan siendo un reto estructural para la justicia social y territorial en el país.
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img52.png', alt="" ).m-auto
    
    AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in")
      .row.p-4(titulo="Tierras colectivas de comunidades negras").ajuste-cajaAcordion
        .row.align-items-center.mb-3
          .col-xl
            p.mb-3 La Ley 70 de 1993 constituye la base legal para el reconocimiento de las tierras de comunidades negras, sustentada en el principio constitucional que define a Colombia como una nación multiétnica y pluricultural. 
            p.mb-0 Según esta ley, las comunidades negras están conformadas por familias de ascendencia afrocolombiana con una cultura propia, historia común y tradiciones vinculadas con la relación campo-poblado, manteniendo una conciencia de identidad que las diferencias de otros grupos étnicos.
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img53.png', alt="" ).m-auto
            
      .row.p-4(titulo="La propiedad colectiva y el acuerdo de paz").ajuste-cajaAcordion
        .row.align-items-center.mb-3
          .col-xl
            p.mb-0 En el contexto del Acuerdo Final para la Terminación del Conflicto, se expidieron cerca de 20 decretos orientados a una reforma rural integral. El primer capítulo aborda las transformaciones en la tierra y el territorio, mientras que el capítulo étnico garantiza que no se vulneren los derechos reconocidos a los pueblos indígenas, afrocolombianos y otras comunidades en las normas nacionales e internacionales.
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img54.png', alt="" ).m-auto
        
      .row.p-4(titulo="Algunas cifras asociadas a la tenencia de la tierra y el conflicto").ajuste-cajaAcordion
        .row.align-items-center.mb-3
          .col-xl
            p.mb-0 Entidades como la Procuraduría y la Contraloría han advertido sobre las limitaciones para evaluar el impacto de la concentración de la tierra y su relación con el conflicto armado. Entre las causas destacan el desorden administrativo del antiguo INCODER, la falta de recursos en oficinas de catastro, notariado y registro, y la débil gestión en el cobro del impuesto predial.
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img55.png', alt="" ).m-auto

      .row.p-4(titulo="Política de atención: plan de desarrollo y tierras").ajuste-cajaAcordion
        .row.align-items-center.mb-3
          .col-xl
            p.mb-0 En cumplimiento de sentencias de la Corte Constitucional, el Estado ha implementado medidas como la entrega de subsidios integrales a 12.000 familias desplazadas en 120.000 hectáreas, y la dotación de tierras a 6.500 familias, de las cuales 3.250 están vinculadas a Programas de Desarrollo, mientras el resto corresponde a hogares campesinos y población reinsertada.
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img57.png', alt="" ).m-auto

      .row.p-4(titulo="Reparación de las víctimas").ajuste-cajaAcordion
        .row.align-items-center.mb-3
          .col-xl
            p.mb-0 La reparación de las víctimas del conflicto se rige por los criterios de la Comisión Nacional de Reparación, creada mediante la Ley 975 de 2005. Sin embargo, organizaciones sociales han expresado preocupación por la falta de confesiones completas, la no entrega de bienes por parte de desmovilizados y la limitada capacidad estatal para responder integralmente a las demandas de las víctimas.
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img58.png', alt="" ).m-auto

      .row.p-4(titulo="Abandono y apropiación de tierras").ajuste-cajaAcordion
        .row.align-items-center.mb-3
          .col-xl
            p.mb-3 Diversas entidades y organizaciones han denunciado la falta de claridad sobre la cantidad de hectáreas abandonadas o apropiadas ilegítimamente, lo que dificulta determinar el número de familias afectadas. 
            p.mb-0 Se estima que entre 2,8 y 6,8 millones de hectáreas fueron objeto de este fenómeno, concentrado en departamentos como Antioquia, Caquetá, Chocó, Bolívar, Cesar, Magdalena, Guaviare, Meta, Córdoba y Norte de Santander, donde la expansión minera, agroindustrial y ganadera ha generado desplazamientos rurales.
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img58.png', alt="" ).m-auto

</template>

<script>
export default {
  name: 'Tema3',
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
