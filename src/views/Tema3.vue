<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 #[em Expressing cause and effect] (Expresando causa y efecto)
    .mn.p-5.mb-5(style="background-color: #d5d6f0")
      h3.text-center
        span.r--4.fst-italic Cause and Effect
      p.mb-5(data-aos='fade-right').text-center
        span.r--4.fw-bold.fst-italic Shows relationship between #[span.r--2 cause] (event) and
          br
          |#[span.r--2 Effect] (what happened because of the event)
      .row.justify-content-center.mb-5
        .col-lg-3.mb-lg-0.mb-3
          .tarjeta-titulo.color-primario.h-100
            .tarjeta-titulo__titulo
              .titulo.rounded-pill.p-3.px-5.d-inline
                  h4.mb-0 Cause
            img(src='@/assets/curso/temas/tema3/1.svg', alt='' style="width: 126px").m-auto
        .col-lg-6.mb-lg-0.mb-3
          .tarjeta-titulo.color-secundario.h-100
            .tarjeta-titulo__titulo
              .titulo.rounded-pill.p-3.px-5.d-inline
                  h4.mb-0.text-white Effect
            img(src='@/assets/curso/temas/tema3/2.svg', alt='')
            
        .col-lg-3.mb-lg-0.mb-3
          .tarjeta-titulo.color-acento-contenido.h-100
            .tarjeta-titulo__titulo
              .titulo.rounded-pill.p-3.px-5.d-inline
                  h4.mb-0.text-white Signal  Words
            p.fst-italic.fw-bold.text-center 
              span.r--2 consequently
                br
                |because of
                br
                |therefore
                br
                |as a result
                br
                |reason why
                br
                |thus..
                br
                |hence
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3(data-aos="fade-right")
        traductor.color-acento-botones
          div(slot="textoIngles")
            p.fst-italic When we talk about a situation that makes another situation happen, we talk about cause and effect. 
              br
              br
              |In English, we use certain expressions, such as because, due to, since, and as, to talk about causes and effects. Let´s check the meanings of cause, effect, and affect. Learn how to express cause and effect in English. 
              br
              br
              |To begin, you should know the definitions of cause, effect (noun), and affect (verb). Let’s see some examples. 
          div(slot="textoEspanol")
            p Cuando hablamos de una situación que hace que suceda otra situación, hablamos de causa y efecto. 
              br
              br
              |En inglés, usamos ciertas expresiones, como because, due to, since, y as, para hablar de causas y efectos. 
              br
              br
              |Veamos los significados de “causa”, “efecto” y “afectar”. Aprenda a expresar causa y efecto en inglés. 
              br
              br
              |Para comenzar, debe conocer las definiciones de “causa”, “efecto” (sustantivo) y “afectar” (verbo).
        img(src='@/assets/curso/temas/tema3/3.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta-azul")
          div(titulo="<em>Cause</em>")
            .tarjeta.bg-white.p-5
              .row.justify-content-center
                .col-lg-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema3/4.png', alt='')
                .col-lg-8
                  traductor.color-acento-botones.mb-4
                    div(slot="textoIngles")
                      p.fst-italic #[span.r--2 (noun)] a person or thing that makes something happen. 
                        br
                        br
                        |#[span.r--4.fw-bold The cause of the accident was a slippery tire. ] 
                        br
                        br
                        |#[span.r--2 (verb)] an action that makes something happen. 
                        br
                        br
                        |#[span.r--4.fw-bold The slippery tire caused the car to crash. ]
                    div(slot="textoEspanol")
                      p Causa 

                        br
                        br
                        |(sustantivo) una persona o cosa que hace que algo suceda.  
                        br
                        br
                        |La causa del accidente fue una llanta resbalosa. 
                        br
                        br
                        |(verbo) una acción que hace que algo suceda. 
                        br
                        br
                        |La llanta resbalosa hizo que el auto chocara. 
                  TarjetaAudio.color-acento-contenido.mb-3(
                    texto=""
                    :audio="require('@/assets/curso/audios/tema3/1.mp3')"
                    style='background-color: #c4d1ff'
                  )
              
          div(titulo="<em>Effect </em>")
            .tarjeta.bg-white.p-5
              .row.justify-content-center
                .col-lg-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema3/5.png', alt='')
                .col-lg-8
                  traductor.color-acento-botones.mb-4
                    div(slot="textoIngles")
                      p.fst-italic #[span.r--2 (noun)] a change that is a result of an action or cause. 
                        br
                        br
                        |#[span.r--4.fw-bold The snow had an effect on his mood.] 
                    div(slot="textoEspanol")
                      p Efecto 
                        br
                        br
                        |(sustantivo) un cambio que es el resultado de una acción o causa. 
                        br
                        br
                        |La nieve tuvo un efecto en su estado de ánimo. 
                  TarjetaAudio.color-acento-contenido.mb-3(
                    texto=""
                    :audio="require('@/assets/curso/audios/tema3/2.mp3')"
                    style='background-color: #c4d1ff'
                  )
              
          div(titulo="<em>Affect </em>")
            .tarjeta.bg-white.p-5
              .row.justify-content-center
                .col-lg-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema3/6.png', alt='')
                .col-lg-8
                  traductor.color-acento-botones.mb-4
                    div(slot="textoIngles")
                      p.fst-italic When effect is used as a verb, it is usually spelled with an #[span.r--2 a = affect.]  
                        br
                        br
                        |#[span.r--2 (verb)] to produce an effect; to cause a change in something.  
                        br
                        br
                        |#[span.r--4.fw-bold The snow affected his mood.] 
                    div(slot="textoEspanol")
                      p Afectar 
                        br
                        br
                        |Cuando “efecto” se usa como verbo, generalmente se escribe con a = afectar. 
                        br
                        br
                        |(verbo) producir un efecto; provocar un cambio en algo. 
                        br
                        br
                        |La nieve afectó su estado de ánimo. 
                  TarjetaAudio.color-acento-contenido.mb-3(
                    texto=""
                    :audio="require('@/assets/curso/audios/tema3/3.mp3')"
                    style='background-color: #c4d1ff'
                  )
    .bg-3-1.mn.p-5.mb-5
      .row.justify-content-center.mb-5
        .col-lg-8
          .tarjeta.bg-3-2.p-4.mb-5
            p #[span.r--3.fst-italic Below is the following dialogue between two characters who talk about their routine using cause and effect expressions.]  #[span.r--gris / A continuación, se presenta el siguiente diálogo entre dos personajes que hablan sobre su rutina usando expresiones de causa y efecto. ]
            .row.justify-content-center.mb-5
              .col-lg-8
                img(src='@/assets/curso/temas/tema3/7.svg', alt='')
                .bg-dialog.pt-0
                  .bg-white.p-4(style='border-radius: 0px 0px 20px 20px')
                    DialogoChat(:dialogo="dialogoChat").color-acento-botones.noname.dialogocolores
      .row.justify-content-center.mb-5
        .col-lg-4.col-8.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/8.png', alt='')
        .col-lg-8(data-aos="fade-left")
          TarjetaAudio.color-acento-contenido.mb-3(
              texto=""
              :audio="require('@/assets/curso/audios/tema3/4.mp3')"
              style='background-color: #c4d1ff'
            )
          traductor.color-acento-botones.mb-4
            div(slot="textoIngles")
              p.fst-italic Talking about causes and Effects in English
                br
                br
                |To express cause and effect in English, we use certain words or phrases: depending on the expression, we need to créate the sentence. For Example: We want to use expression BECAUSE OF, so we need to write down or think about the noun. Let´s see the Example:
                br
                br
                |#[span.r--4.fw-bold Because of the weather, we could not fly.]
            div(slot="textoEspanol")
              p Hablando de causas y efectos en inglés.
                br
                br
                |Para expresar causa y efecto en inglés, usamos ciertas palabras y frases. Dependiendo de la expresión.necesitamos crear la oración. Por ejemplo:Queremos usar la expresión PORQUE necesitamos escribiro pensar en el sustantivo, veamos el ejemplos
      .row.justify-content-center.mb-5
        .col-lg-4.col-8.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/9.svg', alt='')
        .col-lg-8(data-aos="fade-left")
          TarjetaAudio.color-acento-contenido.mb-3(
              texto=""
              :audio="require('@/assets/curso/audios/tema3/5.mp3')"
              style='background-color: #c4d1ff'
            )
          traductor.color-acento-botones.mb-4
            div(slot="textoIngles")
              p.fst-italic If we want to use the expression BECAUSE, we need to plan two sentences independently. For instance:

                br
                br
                |#[span.r--4.fw-bold I could not go to the party because i had to do homework.]

                br
                br
                |#[span.r--4.fw-bold First sentence:] I could not go the party.
                br
                |#[span.r--4.fw-bold Second sentence:] I had to do homework.
            div(slot="textoEspanol")
              p No se encuentra traduccion
    p.mb-5(data-aos='fade-right')
      span.r--3.fst-italic Let's see this dialogue to practice the topics seen: 
    Dialogo.color-acento-contenido(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad).fst-italic Expressing cause and effect to complete
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.
          
              
            

</template>

<script>
import DialogoChat from '@/components/DialogoChat.vue'
import traductor from '../../src/components/tarjetaTraductor.vue'
export default {
  name: 'Tema3',
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
          textoIng: 'How was your day today? ',
          audio: require('@/assets/curso/audios/tema3/lucas1.mp3'),
        },
        {
          personaje: 'Jim',
          textoIng:
            'Well, I had to go to the school because there was a rehearsal. ',
          audio: require('@/assets/curso/audios/tema3/sophia1.mp3'),
        },
        {
          personaje: 'Sue',
          textoIng: 'Oh, really? So, did you have any lunch? ',
          audio: require('@/assets/curso/audios/tema3/lucas2.mp3'),
        },
        {
          personaje: 'Jim',
          textoIng:
            'Yes, I did. Because of my levels of sugar, I need to eat well. ',
          audio: require('@/assets/curso/audios/tema3/sophia2.mp3'),
        },
        {
          personaje: 'Sue',
          textoIng:
            'I see. Since my mom has the same issue, I understand what you must do',
          audio: require('@/assets/curso/audios/tema3/lucas3.mp3'),
        },
        {
          personaje: 'Jim',
          textoIng: 'Yes.',
          audio: require('@/assets/curso/audios/tema3/sophia2.mp3'),
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
            'What happened with your son´s test? You said you needed to study with him, *** did you study with him? ',
          textoEsp: '',
          audio: require('@/assets/curso/audios/tema3/eliana1.mp3'),
          palabra: 'so (1)',
        },
        {
          personaje: 'Tory',
          textoIng:
            '*** John&#39s laziness, he did not pass the English test. ',
          textoEsp:
            'Yo necesito el libro de *** y las diapositivas Yo necesito el libro de Yo necesito el libro de Yo necesito el libro de .',
          audio: require('@/assets/curso/audios/tema3/tory1.mp3'),
          palabra: 'Due to',
        },
        {
          personaje: 'Eliana',
          textoIng: 'He failed the test *** his bad study habits. ',
          textoEsp: 'Yo necesito el libro de biologia y las ***.',
          audio: require('@/assets/curso/audios/tema3/eliana2.mp3'),
          palabra: 'because of',
        },
        {
          personaje: 'Tory',
          textoIng:
            'But I guess he can have a second chance, *** will you talk to his teacher? ',
          textoEsp: 'Yo *** el libro de biologia y las diapositivas.',
          audio: require('@/assets/curso/audios/tema3/tory2.mp3'),
          palabra: 'so (2)',
        },
        {
          personaje: 'Eliana',
          textoIng:
            'I will talk to him *** he had planned a meeting on Friday.  ',
          textoEsp: 'Yo necesito el libro de biologia y las ***.',
          audio: require('@/assets/curso/audios/tema3/eliana3.mp3'),
          palabra: 'since',
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
.bg-3-1
  background-image: url(../assets/curso/temas/tema3/bg-3-1.svg)
  background-repeat: no-repeat
  background-size: 100%
  background-position: top
.bg-3-2
  background-image: url(../assets/curso/temas/tema3/bg-3-2.svg)
  background-repeat: no-repeat
  background-size: 100%
  background-position: top
</style>
