<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 #[em Pronunciation] (Pronunciación)
    .row.justify-content-center.mb-5
      .col-lg-5(data-aos="fade-right")
        .tarjeta.rounded-3.overflow-hidden
          .slyder-faces
            SlyderA
              div.tarjeta-face(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/1.svg')})`}" style="height: 412px; width: 505px; border-radius: 20px")
                .d-flex.justify-content-center.p-5
                  Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/1.mp3')").mb-3

              div.tarjeta-face(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/2.svg')})`}" style="height: 412px; width: 505px; border-radius: 20px")
                .d-flex.justify-content-center.p-5
                  Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/1.mp3')").mb-3
              div.tarjeta-face(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/3.svg')})`}" style="height: 412px; width: 505px; border-radius: 20px")
                .d-flex.justify-content-center.p-5
                  Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/1.mp3')").mb-3
              div.tarjeta-face(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/4.svg')})`}" style="height: 412px; width: 505px; border-radius: 20px")
                .d-flex.justify-content-center.p-5
                  Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/1.mp3')").mb-3
      .col-lg-7(data-aos="fade-left")
        traductor.color-acento-botones.mb-4
              div(slot="textoIngles")
                p.fst-italic Pronunciation refers to the way in which we make the sound of words. To pronounce words, we push air from our lungs up through our throat and vocal chords, through our mouth, past our tongue and out between our teeth and lips. (Sometimes air also travels through our nose.) 
                  br
                  br
                  |To change the sound that we are making, we mainly use the muscles of our mouth, tongue and lips to control the shape of our mouth and the flow of air. If we can control the shape of our mouth and the flow of air correctly, then our pronunciation is clearer and other people understand us more easily. 
              div(slot="textoEspanol")
                p
    .bg-5-1.mn.p-5
      .row.justify-content-center.mb-5
        .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
          traductor.color-acento-botones.mb-4
            .row(slot="textoIngles")
              .col-lg-1
                Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/1.mp3')").mb-3
              .col-lg-11
                p.fst-italic As well as creating correct vowel and consonant sounds using the muscles of our mouth, tongue and lips, there are other important aspects of pronunciation, including: 
            div(slot="textoEspanol")
              p
          .row.justify-content-center.mb-3
            .col-lg-6.mb-lg-0.mb-3
              .d-flex.align-items-center
                img(src='@/assets/curso/temas/tema5/5.svg', alt='' style="width: 85px").me-3
                .contenido.fst-italic 
                  p.mb-0
                    span.r--2.fw-bold word stress
                    br
                    | emphasis on certain syllables in a word.
            .col-lg-6.mb-lg-0.mb-3
              .d-flex.align-items-center
                img(src='@/assets/curso/temas/tema5/6.svg', alt='' style="width: 85px").me-3
                .contenido.fst-italic 
                  p.mb-0
                    span.r--2.fw-bold linking
                    br
                    |  joining certain words together.
          .row.justify-content-center.mb-3
            .col-lg-6.mb-lg-0.mb-3
              .d-flex.align-items-center
                img(src='@/assets/curso/temas/tema5/7.svg', alt='' style="width: 85px").me-3
                .contenido.fst-italic 
                  p.mb-0
                    span.r--2.fw-bold sentence stress
                    br
                    | emphasis on certain words in a sentence.
            .col-lg-6.mb-lg-0.mb-3
              .d-flex.align-items-center
                img(src='@/assets/curso/temas/tema5/8.svg', alt='' style="width: 85px").me-3
                .contenido.fst-italic 
                  p.mb-0
                    span.r--2.fw-bold intonation 
                    br
                    | the rise and fall of our voice as we speak.
        .col-lg-4.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema5/9.png', alt='')
      .row.justify-content-center.mb-5
        .col-lg-10
          p.mb-3(data-aos='fade-right')
            span.r--4.fst-italic Next, we invite you to listen to the following dialogue so that you can identify the English pronunciation of the words we say with an accent that belongs to the part of the country where they come or live in. 
          p.mb-5(data-aos='fade-right') A continuación, lo invitamos a escuchar el siguiente diálogo para que pueda identificar la pronunciación en inglés de las palabras que decimos con un acento que pertenece a una parte específica del país. 
      .row.justify-content-center.mb-5
        .col-lg-7(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/13.svg', alt='')
          .bg-dialog.p-4.pt-0
            .tarjeta.bg-white.p-4
              .dialogocolores
                DialogoChat(:dialogo="dialogoChat").color-acento-botones.noname

</template>

<script>
import DialogoChat from '@/components/DialogoChat.vue'
import traductor from '../../src/components/tarjetaTraductor.vue'
export default {
  name: 'Tema5',
  components: {
    DialogoChat,
    traductor,
  },
  data: () => ({
    dialogoChat: {
      personajes: [
        {
          nombre: 'Sue',
          img: require('@/assets/curso/temas/tema1/dial1.svg'),
        },
        {
          nombre: 'Jim',
          img: require('@/assets/curso/temas/tema1/dial2.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Sue',
          textoIng:
            'How was your day? Did you work with your family for your family on behalf of your family? ',
          audio: require('@/assets/curso/audios/1.mp3'),
        },
        {
          personaje: 'Jim',
          textoIng: 'Ahh... It was ok, my job is hell.',
          audio: require('@/assets/curso/audios/1.mp3'),
        },
        {
          personaje: 'Sue',
          textoIng:
            'Oh, please, do not think like that. Job gives us money, status, life.  ',
          audio: require('@/assets/curso/audios/1.mp3'),
        },
        {
          personaje: 'Jim',
          textoIng:
            '“I have dealt with a lot of crazy jobs in my whole life.”  ',
          audio: require('@/assets/curso/audios/1.mp3'),
        },
        {
          personaje: 'Sue',
          textoIng:
            'Me too, but this job is as crazy as holding water in our hands.',
          audio: require('@/assets/curso/audios/1.mp3'),
        },
      ],
    },
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
.tarjeta-face
  background-position: 100% 100%
  background-repeat: no-repeat
.slyder-faces
  .slyder-a__tipo-a
    .slyder-a__btn--sigt
      right: 20px
    .slyder-a__btn--atrs
      left: 20px
  .slyder-a__tipo-a .slyder-a__bullets
    display: none
.bg-5-1
  background-image: url(../assets/curso/temas/tema5/bg-5-1.svg)
  background-repeat: no-repeat
  background-size: 100%
  background-position: top
</style>
