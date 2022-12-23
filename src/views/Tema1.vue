<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 #[em Collocations] (Colocaciones)
    .row.justify-content-center.mb-5
      .col-lg-4.col-8(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema1/1.png', alt='')
      .col-lg-8(data-aos="fade-left")
        traductor.color-acento-botones
          .row.justify-content-center(slot="textoIngles")
            .col-lg-1
              Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema1/1.mp3')")
            .col-lg-11
              p.fst-italic  Collocations in English serve to understand the cultural context of English-speaking countries, sometimes they are related to using similar words and/or synonyms to say something. The foregoing does not imply that the listener does not understand, maybe it just sounds funny. Here we have a couple of examples:
          div(slot="textoEspanol")
            p Las colocaciones en inglés sirven para entender el contexto cultural de los países de habla inglesa, en ocasiones están relacionadas con usar palabras similares y/o sinónimos para decir algo. Lo anterior no implica que quien escucha no comprenda, de pronto solo le suena divertido. Aquí encontrará un par de ejemplos: 
    .mn.bg-1-1.p-5
      .row.justify-content-center.align-items-end.mb-5
        .col-lg-8(data-aos="fade-right").mb-lg-0.mb-3
          .tarjeta.p-4(style="background-color: #FFBFC1 ")
            .row.justify-content-center
              .col-lg-4.mb-lg-0.mb-3
                .text-center
                  p.fw-bold
                    span.r--4.fst-italic What we want to say
                    br
                    span que queremos #[br] decir
                .tarjeta.bg-white-p.mb-4.p-3
                  p.text-center.mb-0 Hacer un viaje. 
                .tarjeta.bg-white-p.mb-4.p-3
                  p.text-center.mb-0 Hacer un examen. 
              .col-lg-4.mb-lg-0.mb-3
                .text-center
                  p.fw-bold 
                    span.r--4.fst-italic The way we think it is
                    br
                    span Cómo creemos que se dice en inglés 
                .tarjeta.bg-white-p.mb-4.p-3
                  p.text-center.fst-italic.mb-0 Make a travel. 
                .tarjeta.bg-white-p.mb-4.p-3
                  p.text-center.fst-italic.mb-0 Make an exam. 
              .col-lg-4.mb-lg-0.mb-3
                .text-center
                  p.fw-bold 
                    span.r--4.fst-italic The right way of saying it
                    br
                    span Cómo debe decirse usando collocations
                .tarjeta.bg-white-p.mb-4.p-3
                  p.text-center.fst-italic.mb-0 Take a trip. 
                .tarjeta.bg-white-p.mb-4.p-3
                  p.text-center.fst-italic.mb-0 Sit a test. 
        .col-lg-4.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/2.svg', alt='')
      .row.justify-content-center.mb-5
        .col-lg-7.mb-lg-0.mb-3
          traductor.tarjeta-white
            div(slot="textoIngles")
              p.fst-italic  An interesting aspect about collocations in English is that their use does not respond to grammatical rules. They are learned among the English-speaking population through everyday conversations and the sociocultural context. So technically, there are no rules for how to use them. Let’s see some examples: 
            div(slot="textoEspanol")
              p Un aspecto interesante sobre las colocaciones en inglés es que su uso no responde a reglas gramaticales. Son aprendidas entre la población angloparlante a través de las conversaciones cotidianas y el contexto sociocultural. Así que, técnicamente, no existen reglas para saber cómo usarlas.  Veamos algunos ejemplos: 
          img(src='@/assets/curso/temas/tema1/3.png', alt='')
        .col-lg-5(data-aos="fade-left")
          .tarjeta.bg-white.p-4
            .tarjeta.p-4(style="background-color: #FFF0F1").mb-3
              .row.justify-content-between.align-items-center
                .col-lg-2.mb-lg-0.mb-3
                  h4.text-center.mb-0.fst-italic DO
                .col-lg-9
                  p.fw-bold.fst-italic.mb-0 
                    span.r--4 someone a favor, your hair, homework, the dishes, your taxes.
            .tarjeta.p-4(style="background-color: #FFF0F1").mb-3
              .row.justify-content-between.align-items-center
                .col-lg-2.mb-lg-0.mb-3
                  h4.text-center.mb-0.fst-italic MAKE
                .col-lg-9
                  p.fw-bold.fst-italic.mb-0 
                    span.r--4 sense, a cake, a mess, money, lunch, a difference, time.
            .tarjeta.p-4(style="background-color: #FFF0F1").mb-3
              .row.justify-content-between.align-items-center
                .col-lg-2.mb-lg-0.mb-3
                  h4.text-center.mb-0.fst-italic HAVE
                .col-lg-9
                  p.fw-bold.fst-italic.mb-0 
                    span.r--4 a baby, fun,  a rest, a shower, dinner, a party, a relationship.
            .tarjeta.p-4(style="background-color: #FFF0F1").mb-3
              .row.justify-content-between.align-items-center
                .col-lg-2.mb-lg-0.mb-3
                  h4.text-center.mb-0.fst-italic TAKE
                .col-lg-9
                  p.fw-bold.fst-italic.mb-0 
                    span.r--4 a photo, a break, a chance, a taxi, your time, notes, a risk, a vote.
    .mn.bg-1-2.p-5
      h4 
        span.r--4.fst-italic The most common collocations 
      traductor.color-acento-botones
          div(slot="textoIngles")
            p.fst-italic  A collocation is two or more words that often go together. These combinations just sound "right" to native English speakers, who use them all the time. Look at these examples: 
          div(slot="textoEspanol")
            p Una colocación es dos o más palabras que a menudo van juntas. Estas combinaciones simplemente suenan "correctas" para los hablantes nativos de inglés, que las usan todo el tiempo. Miremos estos ejemplos: 
      .row.justify-content-center.mb-5
        .col-lg-4.col-8(data-aos="fade-right").mb-lg-0.mb-3
          img(src='@/assets/curso/temas/tema1/4.png', alt='')
        .col-lg-8(data-aos="fade-left")
          .tarjeta(style="background-color: #A6BBFF").px-5.py-3
            SlyderA.p-5
              .row.justify-content-center
                .col-lg-6.mb-4.mb-md-0
                  .tarjeta-slyde.tarjeta.p-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/5.jpg')})`}" style="height: 500px; width: 300px")
                    .tarjeta.bg-white.p-4.w-100
                      .d-flex.justify-content-center
                        Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema1/1.mp3')")
                      p.fw-bold.text-center
                        span.r--4.fst-italic Do someone a favor. 
                        br
                        span Hacerle un favor a alguien. 
                .col-lg-6.mb-4.mb-md-0
                  .tarjeta-slyde.tarjeta.p-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/6.jpg')})`}" style="height: 500px; width: 300px")
                    .tarjeta.bg-white.p-4.w-100
                      .d-flex.justify-content-center
                        Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema1/2.mp3')")
                      p.fw-bold.text-center
                        span.r--4.fst-italic Do your hair. 
                        br
                        span Arreglar tu cabello. 
              .row.justify-content-center
                .col-lg-6.mb-4.mb-md-0
                  .tarjeta-slyde.tarjeta.p-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/7.jpg')})`}" style="height: 500px; width: 300px")
                    .tarjeta.bg-white.p-4.w-100
                      .d-flex.justify-content-center
                        Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema1/3.mp3')")
                      p.fw-bold.text-center
                        span.r--4.fst-italic Make sense.
                        br
                        span Tener sentido. 
                .col-lg-6.mb-4.mb-md-0
                  .tarjeta-slyde.tarjeta.p-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/8.jpg')})`}" style="height: 500px; width: 300px")
                    .tarjeta.bg-white.p-4.w-100
                      .d-flex.justify-content-center
                        Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema1/4.mp3')")
                      p.fw-bold.text-center
                        span.r--4.fst-italic Make money. 
                        br
                        span Ganar dinero. 
              .row.justify-content-center
                .col-lg-6.mb-4.mb-md-0
                  .tarjeta-slyde.tarjeta.p-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/9.jpg')})`}" style="height: 500px; width: 300px")
                    .tarjeta.bg-white.p-4.w-100
                      .d-flex.justify-content-center
                        Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema1/5.mp3')")
                      p.fw-bold.text-center
                        span.r--4.fst-italic Have a party.
                        br
                        span Tener una fiesta.
                .col-lg-6.mb-4.mb-md-0
                  .tarjeta-slyde.tarjeta.p-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/10.jpg')})`}" style="height: 500px; width: 300px")
                    .tarjeta.bg-white.p-4.w-100
                      .d-flex.justify-content-center
                        Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema1/6.mp3')")
                      p.fw-bold.text-center
                        span.r--4.fst-italic Have a shower. 
                        br
                        span Darse una ducha. 
              .row.justify-content-center
                .col-lg-6.mb-4.mb-md-0
                  .tarjeta-slyde.tarjeta.p-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/11.jpg')})`}" style="height: 500px; width: 300px")
                    .tarjeta.bg-white.p-4.w-100
                      .d-flex.justify-content-center
                        Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema1/7.mp3')")
                      p.fw-bold.text-center
                        span.r--4.fst-italic Take a photo. 
                        br
                        span Tomar una foto.
                .col-lg-6.mb-4.mb-md-0
                  .tarjeta-slyde.tarjeta.p-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/12.jpg')})`}" style="height: 500px; width: 300px")
                    .tarjeta.bg-white.p-4.w-100
                      .d-flex.justify-content-center
                        Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema1/8.mp3')")
                      p.fw-bold.text-center
                        span.r--4.fst-italic Take a taxi.
                        br
                        span Tomar un taxi.
      p.mb-3(data-aos='fade-right') 
        span.r--3.fst-italic Here we are going to listen to a conversation between Lukas and Sophia, in which they will talk about routines using the typical collocations. Please, listen and catch the expressions learnt.  
      p.mb-5(data-aos='fade-right')
        span.r--g Aquí vamos a escuchar una conversación entre Lucas y Sophia, en la que hablarán de rutinas utilizando las típicas colocaciones. Por favor, escuche y capte las expresiones aprendidas. 
      .row.justify-content-center.mb-5
        .col-lg-7(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/13.svg', alt='')
          .bg-dialog.p-4.pt-0
            .tarjeta.bg-white.p-4
              DialogoChat(:dialogo="dialogoChat").color-acento-botones.noname.dialogocolores
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right").mb-lg-0.mb-3
        traductor.color-acento-botones
            div(slot="textoIngles")
              p.fst-italic  English collocations are defined as a combination of words that always go together in language and, depending on the order in which they are placed, have a different meaning than they would have been separated. If the importance of English collocations is still not clear to us, let's see how they work by putting them within a context. For example, in a conversation between two students. We invite you to practice with the following dialogue. 
            div(slot="textoEspanol")
              p Las colocaciones en inglés se definen como una combinación de palabras que siempre van juntas en el lenguaje y, dependiendo del orden en que están ubicadas, tienen un significado diferente al que tendrían estando separadas. Si aún no nos queda clara la importancia de las colocaciones en inglés, veamos cómo funcionan poniéndolas dentro de un contexto. Por ejemplo, en una conversación entre dos estudiantes. Lo invitamos a practicar con el siguiente diálogo. 
      .col-lg-4.col-8(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema1/14.svg', alt='')
    Dialogo.color-acento-contenido(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad).fst-italic Friend's talk
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.

      
</template>

<script>
import DialogoChat from '@/components/DialogoChat.vue'
import traductor from '../../src/components/tarjetaTraductor.vue'
export default {
  name: 'Tema1',
  components: {
    traductor,
    DialogoChat,
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
          audio: require('@/assets/curso/audios/tema1/lucas1.mp3'),
        },
        {
          personaje: 'Jim',
          textoIng: 'Well, I had a shower around 6, then I had breakfast.',
          audio: require('@/assets/curso/audios/tema1/sophia1.mp3'),
        },
        {
          personaje: 'Sue',
          textoIng:
            'Oh, I had fun with my nephew, we played before going to work ',
          audio: require('@/assets/curso/audios/tema1/lucas2.mp3'),
        },
        {
          personaje: 'Jim',
          textoIng: 'Did you do his hair? ',
          audio: require('@/assets/curso/audios/tema1/sophia2.mp3'),
        },
        {
          personaje: 'Sue',
          textoIng: 'Yes, I did my best.',
          audio: require('@/assets/curso/audios/tema1/lucas3.mp3'),
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
          textoIng: 'Peter told me you *** yesterday, didn´t  you? ',
          textoEsp: '',
          audio: require('@/assets/curso/audios/tema1/eliana1.mp3'),
          palabra: 'had fun',
        },
        {
          personaje: 'Tory',
          textoIng:
            'Yes, I did. I ***, I did my mom a favor, and I had a word with my ex-girlfriend. ',
          textoEsp:
            'Yo necesito el libro de *** y las diapositivas Yo necesito el libro de Yo necesito el libro de Yo necesito el libro de .',
          audio: require('@/assets/curso/audios/tema1/tory1.mp3'),
          palabra: 'did homework',
        },
        {
          personaje: 'Eliana',
          textoIng: 'Wow! Did she understand the situation? *** your best? ',
          textoEsp: 'Yo necesito el libro de biologia y las ***.',
          audio: require('@/assets/curso/audios/tema1/eliana2.mp3'),
          palabra: 'Did you do',
        },
        {
          personaje: 'Tory',
          textoIng: 'Yes, she did. She ***. ',
          textoEsp: 'Yo *** el libro de biologia y las diapositivas.',
          audio: require('@/assets/curso/audios/tema1/tory2.mp3'),
          palabra: 'made a decision',
        },
        {
          personaje: 'Eliana',
          textoIng: 'I am glad you *** with her. ',
          textoEsp: 'Yo necesito el libro de biologia y las ***.',
          audio: require('@/assets/curso/audios/tema1/eliana3.mp3'),
          palabra: 'had a word',
        },
      ],
    },
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
.bg-1-1
  background-image: url(../assets/curso/temas/tema1/bg-1-1.svg)
  background-repeat: no-repeat
  background-position: center
  background-size: cover

.bg-1-2
  background-image: url(../assets/curso/temas/tema1/bg-1-2.svg)
  background-repeat: no-repeat
  background-position: top
  background-size: 100%
</style>
