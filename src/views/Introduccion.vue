<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .mn.bg-intro.p-5
      .tarjeta-intro.d-flex.mb-5
        img(src='@/assets/curso/temas/intro/1.svg', alt='')
        .tarjeta.bg-white.p-5.d-block.tarjeta-adornos.mb-5
          traductor.color-acento-botones.ms-5
            div(slot="textoIngles")
              p.fst-italic  To help you as a student to interact in English orally and in writing within social contexts and according to the labor criteria established by the common European framework of reference for languages, in this component, we are going to learn about collocations, verbs to report, and linkers to say cause and effect, intonation, stress, rhythm and pronunciation of vowels, consonants, and blends.
            div(slot="textoEspanol")
              p
      figure.mt-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/3yqa3rp0qSU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
import traductor from '../../src/components/tarjetaTraductor.vue'
export default {
  name: 'Introduccion',
  components: {
    traductor,
  },
  data: () => ({
    // variables de vue
  }),
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
  img
    position: inherit
    width: 290px
    margin-right: -5rem
    z-index: 1
</style>
