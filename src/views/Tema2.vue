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
                Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema2/1.mp3')")

              .col-lg-11
                p.fst-italic When expressing ourselves on a day-to-day basis, we often refer to things that other people have said. We are going to focus on the verbs that we use to introduce the words said by others: informative verbs. 
                  br
                  br
                  span.r--4.fw-bold Grammatical structures to use reporting verbs 
                  br
                  br
                  |Not all reporting verbs are used the same. Some of those verbs always have to go with a specific verb form, others allow a little more flexibility. Take a look at the following structures to see how different reporting verbs can be used: 
            div(slot="textoEspanol")
              p A la hora de expresarnos en el día a día, muchas veces hacemos referencia a cosas que han dicho otras personas. Vamos a centrarnos en los verbos que usamos para introducir las palabras dichas por otros: los reporting verbs.  
                br
                br
                |#[b Estructuras gramaticales para usar #[em reporting verbs]] 
                br
                br
                |No todos los reporting verbs se utilizan igual. Algunos de estos verbos tienen que ir siempre con una forma verbal concreta, otros permiten un poco más de flexibilidad. Observe las siguientes estructuras para ver de qué manera se pueden utilizar los distintos #[em reporting verbs.] 
    Separador 
    #t_2_1.titulo-segundo.color-primario(data-aos='fade-right')
      h2 2.1  #[em Verb + infinitive] 
    .row.justify-content-center.mb-5
      .col-lg-4(data-aos="fade-right")
        traductor.color-acento-botones
            div(slot="textoIngles")
              p.fst-italic  When reporting expressions in which there are two verbs, it is mandatory to learn the requirements the first verb has; in the following sentence, the verb to agree requires a second verb, next to it, in its infinitive form, so observe how it must be written in the following examples: 
            div(slot="textoEspanol")
              p Al reportar expresiones en las que hay dos verbos, es obligatorio aprender los requisitos que tiene el primer verbo; en la siguiente oración, el verbo a concordar requiere un segundo verbo a su lado, en su forma de infinitivo, así que observe cómo debe ser escrito en los siguientes ejemplos
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
                          Audio.color-acento-botones.mx-3.mb-3(:audio="require('@/assets/curso/audios/tema2/2.mp3')")
                      p.fw-bold.text-center.mb-4 They agreed to meet on #[br] Sunday. 
              .col-lg-5
                .tarjeta.bg-white.p-3
                  .tarjeta-avatar
                    img(src='@/assets/curso/temas/tema2/4.png' alt='AvatarTop')
                    .tarjeta.w-100(style="background-color: #DDDEFF ")
                      .d-flex.justify-content-center.mt-5
                          Audio.color-acento-botones.mx-3.mb-3(:audio="require('@/assets/curso/audios/tema2/3.mp3')")
                      p.fw-bold.text-center.mb-4 I hope to see you next #[br] Monday. 
            .row.justify-content-center.mb-5
              .col-lg-5
                .tarjeta.bg-white.p-3
                  .tarjeta-avatar
                    img(src='@/assets/curso/temas/tema2/5.png' alt='AvatarTop')
                    .tarjeta.w-100(style="background-color: #DDDEFF ")
                      .d-flex.justify-content-center.mt-5
                          Audio.color-acento-botones.mx-3.mb-3(:audio="require('@/assets/curso/audios/tema2/4.mp3')")
                      p.fw-bold.text-center.mb-4 He claimed to be an #[br] engineer. 
              .col-lg-5
                .tarjeta.bg-white.p-3
                  .tarjeta-avatar
                    img(src='@/assets/curso/temas/tema2/6.png' alt='AvatarTop')
                    .tarjeta.w-100(style="background-color: #DDDEFF ")
                      .d-flex.justify-content-center.mt-5
                          Audio.color-acento-botones.mx-3.mb-3(:audio="require('@/assets/curso/audios/tema2/5.mp3')")
                      p.fw-bold.text-center.mb-4 I managed to reach the top #[br] of the mountain.
    Separador
    #t_2_2.titulo-segundo.color-primario(data-aos='fade-right')
      h2 2.2 Verb + person + infinitive
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        traductor.color-acento-botones
          div(slot="textoIngles")
            p.fst-italic There are sentences in which it is necessary to use two verbs, the first and the one that is close to the subject requires first a person and then the particle “to”, and a second verb. Below is a list of verbs that take the object + the infinitive with “to”. 
          div(slot="textoEspanol")
            p Existen oraciones en las cuales es necesario usar dos verbos, el primero y aquel que se encuentra cerca del sujeto requiere primero de una persona y luego de la partícula #[em “to”], y un segundo verbo. Se presenta una lista de verbos que llevan el objeto + el infinitivo con #[em “to”]. 
      .col-lg-5(data-aos="fade-left")
        div(style="background-color: #ffdfe0 ").tarjeta-adorno
          img(src='@/assets/curso/temas/tema2/7.svg', alt='' style="width: 221px")
          .contenido.p-4
            h5
              span.r--4.fst-italic List of verbs that take the object + the infinitive with to
            p.mb-0  #[span.r--4.fst-italic.fw-bold Advice to] - aconsejar a
              br
              | #[span.r--4.fst-italic.fw-bold Ask to] - pedir a
              br
              | #[span.r--4.fst-italic.fw-bold Help to] - ayudar a
              br
              | #[span.r--4.fst-italic.fw-bold Invite to] - invitar a
    p.mb-5(data-aos='fade-right')  
      span.r--4.fst-italic Below are some examples using #[b verb + person + infinitive.] 
      span.r--g / A continuación, se presentan algunos ejemplos utilizando #[b verbo + persona + infinitivo.]
    //TODO preguntar a Yuly por el espacio vacio  
    .mn.mb-5(style="background-color: #d8d8f1").p-5
    Separador
    #t_2_3.titulo-segundo.color-primario(data-aos='fade-right')
      h2 2.3 #[em Verb + preposition + -ing]
    .bg-2-1.mn.p-5.mb-5
      .row.justify-content-center.mb-5
        .col-lg-4(data-aos="fade-right")
          traductor.color-acento-botones
            div(slot="textoIngles")
              p.fst-italic Initially, it is highly important to identify if the first verb used in a sentence has a structure of a preposition; then, if  it has the rule of using a second verb in -ing. Let´s see the example. 
            div(slot="textoEspanol")
              p Inicialmente, es muy importante identificar si el primer verbo usado en una oración tiene una estructura de preposición; luego, si tiene la regla de usar un segundo verbo en -ing. Veamos el ejemplo: 
        .col-lg-8(data-aos="fade-left")
          .tarjeta.p-5(style="background-color: #A6BBFF ")
            SlyderA
              .row.justify-content-center.mb-5
                .col-lg-5.mb-lg-0.mb-3
                  .tarjeta.bg-white.p-3.h-100
                    img(src='@/assets/curso/temas/tema2/8.svg', alt='' style='width: 78px').m-auto.mb-5
                    traductor.color-acento-botones
                      div(slot="textoIngles")
                        .d-flex.justify-content-center
                          Audio.color-acento-botones.mx-3.mb-3(:audio="require('@/assets/curso/audios/tema2/6.mp3')")


                        p.fst-italic.text-center I insisted on having seconds - it was delicious! 
                      div(slot="textoEspanol")
                        p.text-center
                .col-lg-5
                  .tarjeta.bg-white.p-3.h-100
                    img(src='@/assets/curso/temas/tema2/9.svg', alt='' style='width: 78px').m-auto.mb-5
                    traductor.color-acento-botones
                      div(slot="textoIngles")
                        .d-flex.justify-content-center
                          Audio.color-acento-botones.mx-3.mb-3(:audio="require('@/assets/curso/audios/tema2/7.mp3')")


                        p.fst-italic.text-center I look forward to meeting him.  
                      div(slot="textoEspanol")
                        p.text-center
              .row.justify-content-center.mb-5
                .col-lg-5.mb-lg-0.mb-3
                  .tarjeta.bg-white.p-3.h-100
                    img(src='@/assets/curso/temas/tema2/10.svg', alt='' style='width: 78px').m-auto.mb-5
                    traductor.color-acento-botones
                      div(slot="textoIngles")
                        .d-flex.justify-content-center
                          Audio.color-acento-botones.mx-3.mb-3(:audio="require('@/assets/curso/audios/tema2/8.mp3')")


                        p.fst-italic.text-center Do you feel like going out tomorrow?
                      div(slot="textoEspanol")
                        p.text-center
                .col-lg-5
                  .tarjeta.bg-white.p-3.h-100
                    img(src='@/assets/curso/temas/tema2/11.svg', alt='' style='width: 78px').m-auto.mb-5
                    traductor.color-acento-botones
                      div(slot="textoIngles")
                        .d-flex.justify-content-center
                          Audio.color-acento-botones.mx-3.mb-3(:audio="require('@/assets/curso/audios/tema2/9.mp3')")


                        p.fst-italic.text-center  They have decided against moving to the United States.
                      div(slot="textoEspanol")
                        p.text-center
              .row.justify-content-center.mb-5
                .col-lg-5.mb-lg-0.mb-3
                  .tarjeta.bg-white.p-3.h-100
                    img(src='@/assets/curso/temas/tema2/12.svg', alt='' style='width: 78px').m-auto.mb-5
                    traductor.color-acento-botones
                      div(slot="textoIngles")
                        .d-flex.justify-content-center
                          Audio.color-acento-botones.mx-3.mb-3(:audio="require('@/assets/curso/audios/tema2/10.mp3')")


                        p.fst-italic.text-center He doesn't approve of drinking wine.
                      div(slot="textoEspanol")
                        p.text-center

      .row.justify-content-center.mb-5
        .col-lg-10
          .tarjeta(style="background-color: #3c3fa7").p-5.card-cta
            img(src='@/assets/curso/temas/tema2/13.png', alt='' style="width: 187px")
            .contenido.p-2
              p.text-center.text-white Let´s see the next video in which the previous topic is explained in detail Prepositions + verb + ing, de la UNAM ( Universidad Abierta y Educación a Distancia). Ambiente virtual de idiomas.
              .d-flex.justify-content-center
                a.anexo.mb-4.mb-lg-0(href="https://avi.cuaieed.unam.mx/practica-ingles.html" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p #[b Enlace web.] Verb + preposition + -ing
      .row.justify-content-center.mb-5
        .col-lg-4.col-8(data-aos="fade-right").mb-lg-0.mb-3
          img(src='@/assets/curso/temas/tema2/14.png', alt='')
        .col-lg-8(data-aos="fade-left")
          traductor.color-acento-botones
              .row.justify-content-center(slot="textoIngles")
                .col-lg-1
                  Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema2/11.mp3')")

                .col-lg-11
                  p.fst-italic In the sentence “She agrees that it is hard work,” the verb is “agrees,” and the indicative clause that follows is “it is hard work.” From the point of view of grammar, the conjunction  “that” always introduces the clause after verbs that follow this pattern, but in actual speaking and writing, the word “that” is often omitted by English speakers, especially with the more common verbs such as “say,” “think,” and “know.” The pattern described here is one of the most common verb patterns in English. It is most typically used with verbs of stating, thinking, and believing. Let’s see an example.
              div(slot="textoEspanol")
                p En la oración " #[em She agrees that it is hard work"], el verbo es #[em "agrees"] y la cláusula indicativa que sigue es " #[em it is hard work ]". Desde el punto de vista de la gramática, la conjunción "that" siempre introduce la cláusula después de los verbos que siguen este patrón, pero al hablar y escribir, los hablantes de inglés a menudo omiten la palabra #[em "that"], especialmente con los verbos más comunes, como #[em "say"], #[em "think"] y #[em "know"]. El patrón descrito aquí es uno de los patrones verbales más comunes en inglés. Se usa más típicamente con verbos de afirmar, pensar y creer. Veamos un ejemplo. 
          .tarjeta.bg-white.p-5
            .row.justify-content-center.align-items-center
              .col-lg-4.mb-lg-0.mb-3
                p Grammatical pattern:
                  br
                  span.r--2.fw-bold.fst-italic VERB + (that) + CLAUSE
              .col-lg-7: img(src='@/assets/curso/temas/tema2/15.png', alt='')
    p.mb-2(data-aos='fade-right')
      span.r--3.fst-italic Some verbs connected with reporting can be followed by a that-clause acting as the direct object. Let’s see some examples: 
    p.mb-5(data-aos='fade-right') Algunos verbos relacionados con la presentación de informes pueden ir seguidos de una cláusula that que actúe como objeto directo. Veamos algunos ejemplos: 
    SlyderA.p-5
      .row.justify-content-center
        .col-lg-3.mb-4.mb-md-0
          .tarjeta-slyde.tarjeta.p-3(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/16.jpg')})`}" style="height: 391px; width: 245px")
            .tarjeta.p-2.w-100(style="background-color: #dddeff")
              .d-flex.justify-content-center
                Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema2/12.mp3')").mb-3
              p.fw-bold.text-center Everyone agrees that we have to act now. 
        .col-lg-3.mb-4.mb-md-0
          .tarjeta-slyde.tarjeta.p-3(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/17.jpg')})`}" style="height: 391px; width: 245px")
            .tarjeta.p-2.w-100(style="background-color: #dddeff")
              .d-flex.justify-content-center
                Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema2/13.mp3')").mb-3
              p.fw-bold.text-center It’s easy to forget that he’s just a child.
        .col-lg-3.mb-4.mb-md-0
          .tarjeta-slyde.tarjeta.p-3(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/18.jpg')})`}" style="height: 391px; width: 245px")
            .tarjeta.p-2.w-100(style="background-color: #dddeff")
              .d-flex.justify-content-center
                Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema2/14.mp3')").mb-3
              p.fw-bold.text-center Recent research proves that global warming is getting worse. 
        .col-lg-3.mb-4.mb-md-0
          .tarjeta-slyde.tarjeta.p-3(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/19.jpg')})`}" style="height: 391px; width: 245px")
            .tarjeta.p-2.w-100(style="background-color: #dddeff")
              .d-flex.justify-content-center
                Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema2/15.mp3')").mb-3
              p.fw-bold.text-center I accept that this is a drawback. 
      .row.justify-content-center
        .col-lg-3.mb-4.mb-md-0
          .tarjeta-slyde.tarjeta.p-3(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/20.jpg')})`}" style="height: 391px; width: 245px")
            .tarjeta.p-2.w-100(style="background-color: #dddeff")
              .d-flex.justify-content-center
                Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema2/16.mp3')").mb-3
              p.fw-bold.text-center She said that they would be back by Monday. 
        .col-lg-3.mb-4.mb-md-0
          .tarjeta-slyde.tarjeta.p-3(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/21.jpg')})`}" style="height: 391px; width: 245px")
            .tarjeta.p-2.w-100(style="background-color: #dddeff")
              .d-flex.justify-content-center
                Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema2/17.mp3')").mb-3
              p.fw-bold.text-center They know that this is mandatory. 
        .col-lg-3.mb-4.mb-md-0
          .tarjeta-slyde.tarjeta.p-3(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/22.jpg')})`}" style="height: 391px; width: 245px")
            .tarjeta.p-2.w-100(style="background-color: #dddeff")
              .d-flex.justify-content-center
                Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema2/18.mp3')").mb-3
              p.fw-bold.text-center I agree that it is risky to drive on this road. 
        .col-lg-3.mb-4.mb-md-0
          .tarjeta-slyde.tarjeta.p-3(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/23.jpg')})`}" style="height: 391px; width: 245px")
            .tarjeta.p-2.w-100(style="background-color: #dddeff")
              .d-flex.justify-content-center
                Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema2/19.mp3')").mb-3
              p.fw-bold.text-center We suspected that the girl was lying. 
    .mn.p-5(style="background-color: #e1e8ff ")
      p.mb-2(data-aos='fade-right')
        span.r--3.fst-italic After having seen the grammatical structures to use the report verbs. We are invited to explore the video below:  
      p.mb-5(data-aos='fade-right') Después de haber visto las estructuras gramaticales para usar los verbos de reporte, lo invitamos a explorar el siguiente video: 
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/uCLK9I_B3EY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


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

<style lang="sass">
.tarjeta-adorno
  position: relative
  display: flex
  img
    position: inherit
    left: 0
    top: 0
    margin-top: -20px
  align-items: center
.bg-2-1
  background-image: url(../assets/curso/temas/tema2/bg-2-1.svg)
  background-repeat: no-repeat
  background-size: 100%
  background-position: top
</style>
