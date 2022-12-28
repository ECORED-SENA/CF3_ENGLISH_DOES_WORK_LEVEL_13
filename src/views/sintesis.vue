<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .tarjeta-intro.d-flex.mb-5
      img.imagen(src='@/assets/curso/temas/intro/sin.png', alt='')
      .tarjeta.p-5.d-block.mb-5(style="background-color: #6B8DFC ")

        traductor.color-acento-botones.ms-5
          .row(slot="textoIngles")
            .col-lg-11
              p.fst-italic In this component, #[span.r--2.fw-bold collocations and verbs to report] were used considering the #[span.r--4.fw-bold four] rules: #[span.r--2.fw-bold first], verb + infinitive. 
                br
                br
                | #[span.r--2.fw-bold Secondly], verb + person + infinitive; #[span.r--2.fw-bold thirdly], verb + preposition + -ing; and #[span.r--2.fw-bold finally], verb + that + clause. Then, the expressions to present cause and effect were reviewed as well as the rhetorical functions of the speech, and the right way to pronounce considering mixed sounds, stressed words and the rhythm in a sentence. 
            .col-lg-1
              Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/introduccion.mp3')")

          div(slot="textoEspanol")
            p En este componente se utilizaron colocaciones y verbos para informar considerando las cuatro reglas: primero, verbo + infinitivo. 
              br
              br
              |En segundo lugar, verbo + persona + infinitivo; en tercer lugar, verbo + preposición + -ing; y finalmente, verbo + that + cláusula. Luego, se revisaron las expresiones para presentar causa y efecto, así como las funciones retóricas del discurso, y la forma correcta de pronunciar considerando: los sonidos combinados, las palabras acentuadas y el ritmo en la oración. 
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
import traductor from '../../src/components/tarjetaTraductor.vue'
export default {
  name: 'Sintesis',
  components: {
    traductor,
  },
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

<style lang="sass">
.bg-intro
  background-image: url(../assets/curso/temas/intro/bg-intro.svg)
  background-repeat: no-repeat
  background-position: top
  background-size: 100%
.tarjeta-intro
  position: relative
  .imagen
    position: inherit
    width: 309px
    height: 346px
    margin-right: -5rem
    z-index: 1
</style>
