<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 #[em Rhetorical functions of the speech] (Funciones retóricas del discurso)
    .bg-4-1.mn.p-5.mb-5
      .row.justify-content-center.mb-5
        .col-lg-5.col-8.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema4/1.svg', alt='')
        .col-lg-7(data-aos="fade-left")
          traductor.color-acento-botones
            div(slot="textoIngles")
              p.fst-italic According to Aristotle, the role of rhetoric in speeches is to persuade the listener of the speaker's point of view. This is not to say that the orator will be successful in doing so, but that the point of the speech is to achieve that objective. Different types of rhetoric in speeches have different aims; some speeches are aimed at persuading people to participate in politics, others are used to persuade people to change their mind, and, in extreme cases, speeches can be used to promote violence. When all is said and done, the role of the speech is to get people listening to do what the speaker says.  
            div(slot="textoEspanol")
              p
      .row.justify-content-center.mb-5
        .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
          traductor.color-acento-botones
            div(slot="textoIngles")
              h5 #[span.r--4 #[em Rhetorical devices] ]
              p.fst-italic Rhetoric, in types of writing like narrative writing and poetry, often relies on linguistic tools like figurative language and well-known figures of speech. These tools are known as rhetorical devices. Through a rhetorical device, you can make your argument feel more pressing, make it stick to listeners’ and/or readers’ minds, enable them to empathize with you on your characters, and drive them to think differently about the issue you are presenting.  
            div(slot="textoEspanol")
              p
        .col-lg-5.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema4/2.svg', alt='')
      .row.justify-content-center.mb-5
        .col-lg-10
          p.mb-5(data-aos='fade-right').text-center
            span.r--3.fst-italic Below is the following dialogue between two characters who talk   about their routine using rhetorical functions. 
            | /  A continuación, se presenta el siguiente diálogo entre dos personajes que hablan sobre su rutina usando funciones retóricas. 
      .row.justify-content-center.mb-5
        .col-lg-7(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/13.svg', alt='')
          .bg-dialog.p-4.pt-0
            .tarjeta.bg-white.p-4
              .dialogocolores
                DialogoChat(:dialogo="dialogoChat").color-acento-botones.noname
      p.mb-5(data-aos='fade-right') 
        span.r--3.fst-italic There are lots of different rhetorical devices you can employ, here are a few common ones: 
      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/h5EjpXvNOCY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5(data-aos='fade-right')
      span.r--3.fst-italic Let's see these dialogues to practice the topics seen: 
    Dialogo.color-acento-contenido(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad).fst-italic Rhetorical functions of the speech to complete 
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.

</template>

<script>
import DialogoChat from '@/components/DialogoChat.vue'
import traductor from '../../src/components/tarjetaTraductor.vue'
export default {
  name: 'Tema4',
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
          audio: require('@/assets/curso/audios/tema4/1.mp3'),
        },
        {
          personaje: 'Jim',
          textoIng: 'Ahh... It was ok, my job is hell.',
          audio: require('@/assets/curso/audios/tema4/2.mp3'),
        },
        {
          personaje: 'Sue',
          textoIng:
            'Oh, please, do not think like that. Job gives us money, status, life.  ',
          audio: require('@/assets/curso/audios/tema4/3.mp3'),
        },
        {
          personaje: 'Jim',
          textoIng:
            '“I have dealt with a lot of crazy jobs in my whole life.”  ',
          audio: require('@/assets/curso/audios/tema4/4.mp3'),
        },
        {
          personaje: 'Sue',
          textoIng:
            'Me too, but this job is as crazy as holding water in our hands.',
          audio: require('@/assets/curso/audios/tema4/5.mp3'),
        },
      ],
    },
    dialogo: {
      personajes: [
        {
          nombre: 'Eliana',
          img: require('@/assets/curso/temas/tema1/eliana.svg'),
        },
        {
          nombre: 'Tory',
          img: require('@/assets/curso/temas/tema1/tory.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Eliana',
          textoIng:
            'How was your class? Was it done for the kids or *** the kids? ',
          textoEsp: '',
          audio: require('@/assets/curso/audios/tema4/6.mp3'),
          palabra: 'by',
        },
        {
          personaje: 'Tory',
          textoIng: 'I know you deal with a lot of *** students every day! ',
          textoEsp:
            'Yo necesito el libro de *** y las diapositivas Yo necesito el libro de Yo necesito el libro de Yo necesito el libro de .',
          audio: require('@/assets/curso/audios/tema4/7.mp3'),
          palabra: 'crazy',
        },
        {
          personaje: 'Eliana',
          textoIng:
            'Compared to other students in the school, my students are ***. ',
          textoEsp: 'Yo necesito el libro de biologia y las ***.',
          audio: require('@/assets/curso/audios/tema4/8.mp3'),
          palabra: 'angels',
        },
        {
          personaje: 'Tory',
          textoIng:
            'Then you need to think how good you are with your *** instead of how good they are with you. ',
          textoEsp: 'Yo *** el libro de biologia y las diapositivas.',
          audio: require('@/assets/curso/audios/tema4/9.mp3'),
          palabra: 'students',
        },
        {
          personaje: 'Eliana',
          textoIng:
            'I see, that&#39s the clue, I *** for my students, my society, myself.   ',
          textoEsp: 'Yo necesito el libro de biologia y las ***.',
          audio: require('@/assets/curso/audios/tema4/10.mp3'),
          palabra: 'teach',
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
.bg-4-1
  background-image: url(../assets/curso/temas/tema4/bg-4-1.svg)
  background-repeat: no-repeat
  background-size: 100%
  background-position: top
</style>
