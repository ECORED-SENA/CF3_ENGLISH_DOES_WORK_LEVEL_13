<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 #[em Reporting in a correct way] (Informando de manera correcta)
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/1.png', alt='')
      .col-lg-8(data-aos="fade-left")
        traductor.color-acento-botones
            .row.justify-content-center(slot="textoIngles")
              .col-lg-1
                Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/1.mp3')")

              .col-lg-11
                p.fst-italic When expressing ourselves on a day-to-day basis, we often refer to things that other people have said. We are going to focus on the verbs that we use to introduce the words said by others: informative verbs. 
                  br
                  br
                  span.r--4.fw-bold Grammatical structures to use reporting verbs 
                  br
                  br
                  |Not all reporting verbs are used the same. Some of those verbs always have to go with a specific verb form, others allow a little more flexibility. Take a look at the following structures to see how different reporting verbs can be used: 
            div(slot="textoEspanol")
              p
    Separador 
    #t_2_1.titulo-segundo.color-primario(data-aos='fade-right')
      h2 2.1  #[em Verb + infinitive] 
    .row.justify-content-center.mb-5
      .col-lg-4(data-aos="fade-right")
        traductor.color-acento-botones
            div(slot="textoIngles")
              p.fst-italic  When reporting expressions in which there are two verbs, it is mandatory to learn the requirements the first verb has; in the following sentence, the verb to agree requires a second verb, next to it, in its infinitive form, so observe how it must be written in the following examples: 
            div(slot="textoEspanol")
              p
        img(src='@/assets/curso/temas/tema2/2.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        .tarjeta.p-5(style="background-color: #A6BBFF ")
          SlyderA
            .row.justify-content-center.mb-5
              .col-lg-5
                .tarjeta.bg-white.p-3
                  .tarjeta-avatar
                    img(src='@/assets/curso/temas/tema2/3.png' alt='AvatarTop')
                    .tarjeta.w-100(style="background-color: #DDDEFF ")
                      .d-flex.justify-content-center.mt-5
                          Audio.color-acento-botones.mx-3.mb-3(:audio="require('@/assets/curso/audios/1.mp3')")
                      p.fw-bold.text-center.mb-4 They agreed to meet on #[br] Sunday. 
              .col-lg-5
                .tarjeta.bg-white.p-3
                  .tarjeta-avatar
                    img(src='@/assets/curso/temas/tema2/4.png' alt='AvatarTop')
                    .tarjeta.w-100(style="background-color: #DDDEFF ")
                      .d-flex.justify-content-center.mt-5
                          Audio.color-acento-botones.mx-3.mb-3(:audio="require('@/assets/curso/audios/1.mp3')")
                      p.fw-bold.text-center.mb-4 I hope to see you next #[br] Monday. 
            .row.justify-content-center.mb-5
              .col-lg-5
                .tarjeta.bg-white.p-3
                  .tarjeta-avatar
                    img(src='@/assets/curso/temas/tema2/5.png' alt='AvatarTop')
                    .tarjeta.w-100(style="background-color: #DDDEFF ")
                      .d-flex.justify-content-center.mt-5
                          Audio.color-acento-botones.mx-3.mb-3(:audio="require('@/assets/curso/audios/1.mp3')")
                      p.fw-bold.text-center.mb-4 He claimed to be an #[br] engineer. 
              .col-lg-5
                .tarjeta.bg-white.p-3
                  .tarjeta-avatar
                    img(src='@/assets/curso/temas/tema2/6.png' alt='AvatarTop')
                    .tarjeta.w-100(style="background-color: #DDDEFF ")
                      .d-flex.justify-content-center.mt-5
                          Audio.color-acento-botones.mx-3.mb-3(:audio="require('@/assets/curso/audios/1.mp3')")
                      p.fw-bold.text-center.mb-4 I managed to reach the top #[br] of the mountain. 




</template>

<script>
import DialogoChat from '@/components/DialogoChat.vue'
import traductor from '../../src/components/tarjetaTraductor.vue'
export default {
  name: 'Tema2',
  components: {
    DialogoChat,
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

<style lang="sass"></style>
