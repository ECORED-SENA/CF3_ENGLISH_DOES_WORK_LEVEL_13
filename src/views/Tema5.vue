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
                  Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/c/h47_1.mp3')").mb-3

              div.tarjeta-face(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/2.svg')})`}" style="height: 412px; width: 505px; border-radius: 20px")
                .d-flex.justify-content-center.p-5
                  Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/c/h47_3.mp3')").mb-3
              div.tarjeta-face(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/3.svg')})`}" style="height: 412px; width: 505px; border-radius: 20px")
                .d-flex.justify-content-center.p-5
                  Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/c/h47_2.mp3')").mb-3
              div.tarjeta-face(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/4.svg')})`}" style="height: 412px; width: 505px; border-radius: 20px")
                .d-flex.justify-content-center.p-5
                  Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/c/h47_4.mp3')").mb-3
      .col-lg-7(data-aos="fade-left")
        traductor.color-acento-botones.mb-4.no-translate
              div(slot="textoIngles")
                p.fst-italic Pronunciation refers to the way in which we make the sound of words. To pronounce words, we push air from our lungs up through our throat and vocal chords, through our mouth, pht our tongue and out between our teeth and lips. (Sometimes air also travels through our nose.) 
                  br
                  br
                  |To change the sound that we are making, we mainly use the muscles of our mouth, tongue and lips to control the shape of our mouth and the flow of air. If we can control the shape of our mouth and the flow of air correctly, then our pronunciation is clearer and other people understand us more easily. 
              div(slot="textoEspanol")
                p To change the sound that we are making, we mainly use the muscles of our mouth, tongue and lips to control the shape of our mouth and the flow of air. If we can control the shape of our mouth and the flow of air correctly, then our pronunciation is clearer and other people understand us more easily. 
    .bg-5-1.mn.p-5
      .row.justify-content-center.mb-5
        .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
          traductor.color-acento-botones.mb-4
            .row(slot="textoIngles")
              .col-lg-1
                Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/c/h48.mp3')").mb-3
              .col-lg-11
                p.fst-italic As well as creating correct vowel and consonant sounds using the muscles of our mouth, tongue and lips, there are other important aspects of pronunciation, including: 
            div(slot="textoEspanol")
              p Además de crear sonidos correctos de vocales y consonantes utilizando los músculos de la boca, la lengua y los labios, existen otros aspectos importantes de la pronunciación, que incluyen: 
          .row.justify-content-center.mb-3
            .col-lg-6.mb-lg-0.mb-3
              .d-flex.align-items-center
                img(src='@/assets/curso/temas/tema5/5.svg', alt='' style="width: 85px").me-3
                .contenido.fst-italic 
                  p.mb-0
                    span.r--2.fw-bold Word stress
                    br
                    | Emphasis on certain syllables in a word.
            .col-lg-6.mb-lg-0.mb-3
              .d-flex.align-items-center
                img(src='@/assets/curso/temas/tema5/6.svg', alt='' style="width: 85px").me-3
                .contenido.fst-italic 
                  p.mb-0
                    span.r--2.fw-bold Linking
                    br
                    |  Joining certain words together.
          .row.justify-content-center.mb-3
            .col-lg-6.mb-lg-0.mb-3
              .d-flex.align-items-center
                img(src='@/assets/curso/temas/tema5/7.svg', alt='' style="width: 85px").me-3
                .contenido.fst-italic 
                  p.mb-0
                    span.r--2.fw-bold Sentence stress
                    br
                    | Emphasis on certain words in a sentence.
            .col-lg-6.mb-lg-0.mb-3
              .d-flex.align-items-center
                img(src='@/assets/curso/temas/tema5/8.svg', alt='' style="width: 85px").me-3
                .contenido.fst-italic 
                  p.mb-0
                    span.r--2.fw-bold Intonation 
                    br
                    | The rise and fall of our voice as we speak.
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
    Separador
    #t_5_1.titulo-segundo.color-primario(data-aos='fade-right')
      h2 5.1  #[em Mixed sounds] (Sonidos combinados)
    .row.justify-content-center.mb-5
      .col-lg-5.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema5/10.png', alt='')
      .col-lg-7
        traductor.color-acento-botones.mb-4
              div(slot="textoIngles")
                p.fst-italic There are 44 sounds in what is called “blends”, they are two or three consonants combined to form a different sound. They would be: #[span.r--2.fw-bold bl, cl, fl, gl, pl, br, cr, dr, fr, gr, pr, tr, sk, sl, sp, st, sw, spr, cr, str.] 
                  br
                  br
                  |We are going to review some of the most common blends in here: 
              div(slot="textoEspanol")
                p
                  span.r--gris Hay 44 sonidos en lo que se llama “mezclas”, son dos o tres consonantes combinadas para formar un sonido diferente. Serían: #[b bl, cl, fl, gl, pl, br, cr, dr, fr, gr, pr, tr, sk, sl, sp, st, sw, spr, cr, str. #[br]#[br]Vamos a revisar algunas de las mezclas más comunes:] 
    SlyderA.p-5.mb-5
      .row.justify-content-center
        .col-lg-3.mb-4.mb-md-0
          .tarjeta-slyde.tarjeta.p-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/11.png')})`}" style="height: 391px; width: 245px")
            .tarjeta.p-4.w-100(style='background-color: #d8d8f1')
              .d-flex.justify-content-center.mb-2
                Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema5/s1.mp3')")
              p.fw-bold.text-center
                span.r--4.fst-italic Blow
        .col-lg-3.mb-4.mb-md-0
          .tarjeta-slyde.tarjeta.p-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/12.png')})`}" style="height: 391px; width: 245px")
            .tarjeta.p-4.w-100(style='background-color: #d8d8f1')
              .d-flex.justify-content-center.mb-2
                Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema5/s2.mp3')")
              p.fw-bold.text-center
                span.r--4.fst-italic Blew 
        .col-lg-3.mb-4.mb-md-0
          .tarjeta-slyde.tarjeta.p-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/13.png')})`}" style="height: 391px; width: 245px")
            .tarjeta.p-4.w-100(style='background-color: #d8d8f1')
              .d-flex.justify-content-center.mb-2
                Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema5/s3.mp3')")
              p.fw-bold.text-center
                span.r--4.fst-italic Bloom
        .col-lg-3.mb-4.mb-md-0
          .tarjeta-slyde.tarjeta.p-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/14.png')})`}" style="height: 391px; width: 245px")
            .tarjeta.p-4.w-100(style='background-color: #d8d8f1')
              .d-flex.justify-content-center.mb-2
                Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema5/s4.mp3')")
              p.fw-bold.text-center
                span.r--4.fst-italic Blond
      .row.justify-content-center
        .col-lg-3.mb-4.mb-md-0
          .tarjeta-slyde.tarjeta.p-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/15.png')})`}" style="height: 391px; width: 245px")
            .tarjeta.p-4.w-100(style='background-color: #d8d8f1')
              .d-flex.justify-content-center.mb-2
                Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema5/s5.mp3')")
              p.fw-bold.text-center
                span.r--4.fst-italic Clown
        .col-lg-3.mb-4.mb-md-0
          .tarjeta-slyde.tarjeta.p-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/16.png')})`}" style="height: 391px; width: 245px")
            .tarjeta.p-4.w-100(style='background-color: #d8d8f1')
              .d-flex.justify-content-center.mb-2
                Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema5/s6.mp3')")
              p.fw-bold.text-center
                span.r--4.fst-italic Clean
        .col-lg-3.mb-4.mb-md-0
          .tarjeta-slyde.tarjeta.p-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/17.png')})`}" style="height: 391px; width: 245px")
            .tarjeta.p-4.w-100(style='background-color: #d8d8f1')
              .d-flex.justify-content-center.mb-2
                Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema5/s7.mp3')")
              p.fw-bold.text-center
                span.r--4.fst-italic Clap
        .col-lg-3.mb-4.mb-md-0
          .tarjeta-slyde.tarjeta.p-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/18.png')})`}" style="height: 391px; width: 245px")
            .tarjeta.p-4.w-100(style='background-color: #d8d8f1')
              .d-flex.justify-content-center.mb-2
                Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema5/s8.mp3')")
              p.fw-bold.text-center
                span.r--4.fst-italic Click 
      .row.justify-content-center
        .col-lg-3.mb-4.mb-md-0
          .tarjeta-slyde.tarjeta.p-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/19.png')})`}" style="height: 391px; width: 245px")
            .tarjeta.p-4.w-100(style='background-color: #d8d8f1')
              .d-flex.justify-content-center.mb-2
                Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema5/s9.mp3')")
              p.fw-bold.text-center
                span.r--4.fst-italic Flower 
        .col-lg-3.mb-4.mb-md-0
          .tarjeta-slyde.tarjeta.p-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/20.png')})`}" style="height: 391px; width: 245px")
            .tarjeta.p-4.w-100(style='background-color: #d8d8f1')
              .d-flex.justify-content-center.mb-2
                Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema5/s10.mp3')")
              p.fw-bold.text-center
                span.r--4.fst-italic Float 
        .col-lg-3.mb-4.mb-md-0
          .tarjeta-slyde.tarjeta.p-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/21.png')})`}" style="height: 391px; width: 245px")
            .tarjeta.p-4.w-100(style='background-color: #d8d8f1')
              .d-flex.justify-content-center.mb-2
                Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema5/s11.mp3')")
              p.fw-bold.text-center
                span.r--4.fst-italic Fly 
        .col-lg-3.mb-4.mb-md-0
          .tarjeta-slyde.tarjeta.p-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/22.png')})`}" style="height: 391px; width: 245px")
            .tarjeta.p-4.w-100(style='background-color: #d8d8f1')
              .d-flex.justify-content-center.mb-2
                Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema5/s12.mp3')")
              p.fw-bold.text-center
                span.r--4.fst-italic Flag 
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
        traductor.color-acento-botones.mb-4
          div(slot="textoIngles")
              p.fst-italic In English, words interact with each other, modifying each other. We reduce the words when we speak, we contract them, we mix them, we modify them. That is connected speech: it is a spoken language, fluid and continuous, like that of an everyday conversation; and it is called connected speech because the words are linked to each other. 
          div(slot="textoEspanol")
            p
              span.r--gris En inglés, las palabras interactúan entre sí, modificándose entre ellas mismas. Reducimos las palabras cuando hablamos, las contraemos, las mezclamos, las modificamos. Eso es el habla conectada: es un lenguaje hablado, fluido y continuo, como el de una conversación cotidiana; y se llama discurso conectado porque las palabras están enlazadas entre sí.
      .col-lg-4.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema5/23.svg', alt='')
    Separador
    #t_5_2.titulo-segundo.color-primario(data-aos='fade-right')
      h2 5.2 #[em Stress words] (Golpe de palabra)
    .row.justify-content-center.mb-5
      .col-lg-5.col-8.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema5/24.svg', alt='')
      .col-lg-7(data-aos="fade-left")
        traductor.color-acento-botones.mb-4
            div(slot="textoIngles")
              .row.justify-content-center.mb-3
                .col-lg-1
                  Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/c/h56.mp3')").mb-3.me-5
                .col-lg-11
                  .ms-5
                    h4
                      span.r--4.fst-italic Word Stress Rules 
                    p.fst-italic There are two very simple rules about word stress:  
              .row.justify-content-center.mb-3
                .col-lg-2: img(src='@/assets/curso/temas/tema5/25.svg', alt='')
                .col-lg-10
                  p.fst-italic #[span.r--2.fw-bold One word has only one stress.] One word cannot have two stresses. If you hear two stresses, you hear two words. Two stresses cannot be a word. It is true that there can be a "secondary" stress in some words. But a secondary stress is much smaller than the main (primary) stress and is only used in long words. 
              .row.justify-content-center.mb-3
                .col-lg-2: img(src='@/assets/curso/temas/tema5/25.svg', alt='')
                .col-lg-10
                  p.fst-italic #[span.r--2.fw-bold We can only stress vowels, not consonants.] Here are some more, rather complicated, rules that can help you understand where to put the stress. But do not rely on them too much, because there are many exceptions. It is better to try to "feel" the music of the language and to add the stress naturally. 
            div(slot="textoEspanol")
              p
                span.r--gris Reglas de acentuación de palabras 
                  br
                  br
                  |Hay dos reglas muy simples sobre la acentuación de las palabras: 
                  br
                  br
                  |Una palabra tiene un solo acento. Una palabra no puede tener dos acentos. Si escucha dos acentos, escucha dos palabras. Dos acentos no pueden ser una sola palabra. Es cierto que puede haber un acento "secundario" en algunas palabras. Pero un acento secundario es mucho más pequeño que el acento principal (primario), y solo se usa en palabras largas. 
                  br
                  br
                  |Solo podemos acentuar las vocales, no las consonantes. Aquí hay algunas reglas, bastante complicadas, que pueden ayudarlo a comprender dónde poner el estrés. Pero no confíe demasiado en ellas, porque hay muchas excepciones. Es mejor tratar de "sentir" la música del idioma y añadir el acento de forma natural. 
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        traductor.color-acento-botones.mb-5
              div(slot="textoIngles")
                p.fst-italic There are two very simple rules about word stress: One word has only one stress, and stress vowels. Let’s see some examples: 
              div(slot="textoEspanol")
                p Hay dos reglas muy simples sobre la acentuación de las palabras: una palabra tiene solo una acentuación y las vocales acentuadas. Veamos algunos ejemplos:
        img(src='@/assets/curso/temas/tema5/31.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta-azul")
          div(titulo="<em>Stress on first syllable </em>")
            img(src='@/assets/curso/temas/tema5/26.svg', alt='')
          div(titulo="<em>Stress on last syllable </em>")
            img(src='@/assets/curso/temas/tema5/27.svg', alt='')
          div(titulo="<em>Stress on penultimate syllable (penultimate = second from end) </em>")
            img(src='@/assets/curso/temas/tema5/28.svg', alt='')
          div(titulo="<em>Stress on ante-penultimate syllable (ante-penultimate = third from end) </em>")
            img(src='@/assets/curso/temas/tema5/29.svg', alt='')
          div(titulo="<em>Compound words (words with two parts) </em>")
            img(src='@/assets/curso/temas/tema5/30.svg', alt='')
    Separador
    #t_5_3.titulo-segundo.color-primario(data-aos='fade-right')
      h2 5.3 #[em Rhythm in the sentence and intonation] (Ritmo en la frase y entonación)
    .bg-5-2.mn.p-5.mb-5
      .row.justify-content-center.mb-5
        .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
          traductor.color-acento-botones.mb-4
            .row(slot="textoIngles")
              .col-lg-1
                Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/c/h57_1.mp3')").mb-3
              .col-lg-11
                p.fst-italic When we speak, the way that we sound out the words and sentences is known as pronunciation. Depending on what your native language is, when you speak in English, you will have an accent. Someone’s accent depends on from where in their anglophone country they come and, indeed, which country.  
            div(slot="textoEspanol")
              p
                span.r--gris Cuando hablamos, la forma en que pronunciamos las palabras y las oraciones se conoce como pronunciación. Dependiendo cuál sea su idioma nativo, cuando hable inglés, tendrá un acento. El acento de una persona depende del lugar de su país anglófono de procedencia y, de hecho, de qué país. 
          traductor.color-acento-botones.mb-4
            .row(slot="textoIngles")
              .col-lg-1
                Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/c/h57_2.mp3')").mb-3
              .col-lg-11
                p.fst-italic Stress is about which sounds we emphasize in words and sentences. For example, in the word ‘banana’ the stress is on the second syllable; in the word ‘orange’, the stress is on the first syllable. In sentences, we usually stress the most important ‘content’ words. 
            div(slot="textoEspanol")
              p
                span.r--gris El énfasis es sobre qué sonidos enfatizamos en palabras y oraciones. Por ejemplo, en la palabra #[em 'banana'] el acento está en la segunda sílaba; en la palabra #[em orange'] el acento está en la primera sílaba. En las oraciones, generalmente, enfatizamos las palabras de “contenido” más importantes. 
            
        .col-lg-5.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema5/32.png', alt='')
      .row.justify-content-center.mb-5
        .col-lg-10
          .tarjeta(style="background-color: #3c3fa7").p-5.card-cta
            img(src='@/assets/curso/temas/tema2/13.png', alt='' style="width: 187px")
            .contenido.p-2
              p.text-center.text-white Si es de su interés ampliar la información sobre: #[span.r--2.fw-bold.fst-italic Stress and Rhythm in English Pronunciation], puede visitar el siguiente enlace: 
              .d-flex.justify-content-center
                a.anexo.mb-4.mb-lg-0(href="https://tfcs.baruch.cuny.edu/nouns-and-verbs/" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p #[b Enlace web.]  Noun - and - verbs   
      p.mb-5(data-aos='fade-right').fst-italic As well as creating correct vowel and consonant sounds using the muscles of our mouth, tongue and lips, there are other important aspects of pronunciation, including: rhythm, word stress, sentence stress, linking, and intonation. 
      .row.justify-content-center.mb-5
        .col-lg-6.col-8(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema5/33.svg', alt='') 
        .col-lg-6(data-aos="fade-left")
          traductor.color-acento-botones.mb-4
              div(slot="textoIngles")
                .row.justify-content-center.mb-5
                  .col-lg-1
                    Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/c/h59_1.mp3')").mb-3.me-4
                  .col-lg-11
                    p.fst-italic #[span.r--4.fw-bold Rhythm:]  is about how we use a combination of stressed and unstressed words in sentences. 
                      br
                      br
                      |Sentences have strong beats (the stressed words) and weak beats (the unstressed words). 
                .row.justify-content-center.mb-5
                  .col-lg-1
                    Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/c/h59_2.mp3')").mb-3.me-4
                  .col-lg-11
                    p.fst-italic 
                      |#[span.r--4.fw-bold Intonation:] intonation is the way a speaker’s voice pitches up or down as they speak. We use intonation to help you get our message across. Intonation is the ‘music’ of the language. Let’s see some types of intonation: 
              div(slot='textoEspanol')
                p
                  span.r--gris El ritmo se trata sobre cómo usamos una combinación de palabras acentuadas y no acentuadas en las oraciones. 
                    br
                    |Las oraciones tienen tiempos fuertes (las palabras acentuadas) y tiempos débiles (las palabras sin estrés).
                    br 
                    br
                    | La entonación es la forma en que el tono de la voz de un hablante sube o baja mientras habla. Usamos entonación para ayudar a transmitir nuestro mensaje. La entonación es la “música” de la lengua. Vamos a ver algunos tipos de entonación:  
      .row.justify-content-center.mb-5
        .col-lg-4.mb-lg-0.mb-3
          .card-adorno.p-4.tarjeta.h-100
            .bg-white.tarjeta.p-3
              .d-flex.justify-content-center.mb-4
                Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/c/h61_1.mp3')").mb-3
              p.text-center.fw-bold.fst-italic Falling intonation 
              traductor.color-acento-botones.mb-4.no-translate
                div(slot="textoIngles")
                  p.fst-italic 
                    span.r--4 A falling intonation describes how the voice falls on the last syllable of the last word. This intonation is usually used in –wh questions- what, where, when, why, and how. 
                    br
                    br
                    span.r--4 Example: 
                    br
                    span.r--2 Why are you tired? 
                    br
                    br
                    span.r--4 In addition, we also use falling intonation if we want to emphasize things or if we want to be definite or clear with our words and intentions. 
                  p
                    span.r--gris No se encuentra traduccion 
        .col-lg-4.mb-lg-0.mb-3
          .card-adorno.p-4.tarjeta.h-100
            .bg-white.tarjeta.p-3
              .d-flex.justify-content-center.mb-4
                Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/c/h61_2.mp3')").mb-3
              p.text-center.fw-bold.fst-italic Rising Intonation 
              traductor.color-acento-botones.mb-4.no-translate
                div(slot="textoIngles")
                  p.fst-italic  
                    span.r--4 The rising intonations can be placed at the end or at the last syllable of the word in a sentence. Yes - No questions use rising intonation. 
                    br
                    br
                    span.r--2 Example:
                    br
                    span.r--4 Are you sure about it? 
                div(slot="textoEspanol")
                
                  p
                    span.r--gris No se encuentra traduccion 
        .col-lg-4.mb-lg-0.mb-3
          .card-adorno.p-4.tarjeta.h-100
            .bg-white.tarjeta.p-3
              .d-flex.justify-content-center.mb-4
                Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/c/h61_3.mp3')").mb-3
              p.text-center.fw-bold.fst-italic Fall-rise Intonation
              traductor.color-acento-botones.mb-4.no-translate
                div(slot="textoIngles")
                  p.fst-italic 
                    span.r--4 This intonation is used if we are doing questions that intend to ask permission, request, or an invitation to someone.  

                    br
                    br
                    span.r--4 Example: 
                    br
                    span.r--2 Would you like another glass of wine? 
                div(slot="textoEspanol")
                  p
                    span.r--gris No se encuentra traduccion 
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right").mb-lg-0.mb-3
        traductor.color-acento-botones.mb-4
          .row(slot="textoIngles")
            .col-lg-1
              Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/c/h63.mp3')").mb-3
            .col-lg-11
              p.fst-italic After having studied the rhythm in the phrase and intonation, we can conclude that the pronunciation of words in English does not only have to do with the pronunciation of letters, words, union of words and transformation of some. Now, we invite you to listen to the BBC Learning English podcast, where you will understand a theme of “English for dating online” and be able to identify the intonation and rhythm of each speaker. 
          div(slot="textoEspanol")
            p
              span.r--gris Después de haber estudiado el #[b ritmo en la frase y la entonación], podemos concluir que la pronunciación de palabras en inglés no solo tiene que ver con la pronunciación de letras, palabras, unión de palabras y transformación de algunas. Ahora, le invitamos a escuchar el podcast de la #[em #[b BBC Learning English]], donde se comprenderá una temática del #[b “Inglés para citas en línea] “y podrá identificar la entonación y el ritmo de cada hablante. 
      .col-lg-5.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema5/34.png', alt='')
    .mn.p-5.mb-5(style="background-color: #fff0b5")
      .row.justify-content-center.mb-5
        .col-lg-5.mb-lg-0.mb-3.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema5/35.svg', alt='')
        .col-lg-7(data-aos="fade-left")
          .tarjeta.bg-white.p-5
            SlyderA(tipo='b')
              div
                TarjetaAudio.color-acento-contenido.mb-3(
                    texto=""
                    :audio="require('@/assets/curso/audios/tema5/bbc1.mp3')"
                    style='background-color: #c4d1ff'
                  ) 
                h5.text-center
                  span.r--4.fw-bold.fst-italic BBC Learning English podcast
                p.fst-italic #[span.r--2.fw-bold Sam]
                  br
                  |Hello. This is 6 Minute English from BBC Learning English. I’m Sam. 
                  br
                  br
                  |#[span.r--2.fw-bold Roy]        
                  br
                  |And I’m Roy. 
                  br
                  br
                  |#[span.r--2.fw-bold Sam]         
                  br
                  |Nowadays, many people use online dating apps to find love and romance. This involves writing a dating profile – a short description of yourself which you hope makes you appear attractive to other people looking for love online.
              div
                TarjetaAudio.color-acento-contenido.mb-3(
                    texto=""
                    :audio="require('@/assets/curso/audios/tema5/bbc2.mp3')"
                    style='background-color: #c4d1ff'
                  ) 
                h5.text-center
                  span.r--4.fw-bold.fst-italic BBC Learning English podcast
                p.fst-italic #[span.r--2.fw-bold Roy]        
                  br
                  |Online dating started with the Internet, but the idea is not new. In the days before the Internet, people put dating adverts in newspapers. Because they paid a price per word, people described themselves in as few words as possible, using abbreviations like GSOH, which meant a Good Sense Of Humour. Eventually, GSOH became a part of everyday English. 

                  br
                  br
                  |#[span.r--2.fw-bold Sam]         
                  br
                  |Amazingly, the same thing is now happening in the world of online dating. In this programme, we’ll be learning some of the newly invented words and phrases being used by people who are looking for love on the Internet.
              div
                TarjetaAudio.color-acento-contenido.mb-3(
                    texto=""
                    :audio="require('@/assets/curso/audios/tema5/bbc3.mp3')"
                    style='background-color: #c4d1ff'
                  ) 
                h5.text-center
                  span.r--4.fw-bold.fst-italic BBC Learning English podcast
                p.fst-italic #[span.r--2.fw-bold Roy]        
                  br
                  |Every year, thousands of romantic relationships start through online dating apps. But as always with information found on the Internet, there’s a danger that someone’s dating profile doesn’t tell the whole truth. 

                  br
                  br
                  |#[span.r--2.fw-bold Sam]         
                  br
                  |That’s right, Roy, so my question is this: According to research, what do men tend to lie about in their dating profile?  

                  br
                  br
                  |Is it: a) their hair? b) their height? or, c) their age?.

                  br
                  br
                  |#[span.r--2.fw-bold Roy]
                  br
                  |Well, most people want to appear younger, so I’ll say it’s c). 
              div
                TarjetaAudio.color-acento-contenido.mb-3(
                    texto=""
                    :audio="require('@/assets/curso/audios/tema5/bbc4.mp3')"
                    style='background-color: #c4d1ff'
                  ) 
                h5.text-center
                  span.r--4.fw-bold.fst-italic BBC Learning English podcast
                p.fst-italic #[span.r--2.fw-bold Sam  ]      
                  br
                  |We’ll find out if that’s the correct answer later. The person behind the online dating research I mentioned was Dr. Nicola Fox Hamilton. She describes herself as a cyber-psychologist and has interviewed both men and women about what they hide from potential online dating partners. Listen as she tells BBC Radio 4’s Word of Mouth what she discovered from her interviews:  

                  br
                  br
                  |#[span.r--2.fw-bold Dr Nicola Fox Hamilton ]       
                  br
                  |If you’re very deceptive, so if you have no friends, and you never go to the pub, and you said in your profile that your most fun thing to do is hanging out with your friends on a Saturday night, then that becomes a problem because then you’ve been very deceptive. If you occasionally do it and you make it sound a bit more like you, do it all the time, that’s more exaggeration – a lot of people do that, where they exaggerate things about themselves to make them seem more attractive. But they’re walking a fine line in trying to balance between being attractive and not completely disappointing.
              div
                TarjetaAudio.color-acento-contenido.mb-3(
                    texto=""
                    :audio="require('@/assets/curso/audios/tema5/bbc5.mp3')"
                    style='background-color: #c4d1ff'
                  ) 
                h5.text-center
                  span.r--4.fw-bold.fst-italic BBC Learning English podcast
                p.fst-italic #[span.r--2.fw-bold Roy]        
                  br
                  |People often exaggerate things about themselves to seem more attractive online, for example that they love hanging out, or spending time with friends. Nicola also says there’s a difference between exaggerating and being deceptive - deliberately lying and making someone believe things that are not true. 
              div
                TarjetaAudio.color-acento-contenido.mb-3(
                    texto=""
                    :audio="require('@/assets/curso/audios/tema5/bbc6.mp3')"
                    style='background-color: #c4d1ff'
                  ) 
                h5.text-center
                  span.r--4.fw-bold.fst-italic BBC Learning English podcast
                p.fst-italic #[span.r--2.fw-bold Roy]        
                  br
                  |Good luck if you are looking for love online and remember - there’s probably someone out there interested in the real you. Bye for now! 
    p.mb-4(data-aos='fade-right')
      span.r--3.fst-italic  Next, the following practice dialogue is presented where the characters define important aspects in pronunciation. Please listen carefully.
    p.mb-5(data-aos='fade-right') A continuación, se presenta el siguiente diálogo de práctica, donde los personajes definen aspectos importantes en la pronunciación. Por favor, escuche con atención.  
    Dialogo.color-acento-contenido(:dialogo="dialogo").mb-5
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) #[em Expressing cause and effect to complete]
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.p-5(style="background-color: #3c3fa7")
          .row.justify-content-center.align-items-center
            .col-lg-2.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema5/36.svg', alt='')
            .col-lg-6.mb-lg-0.mb-3
              p.text-white Si es de su interés,  se le invita a #[em Practice Stress and Rhythm in English Pronunciation] en el siguiente enlace:
            .col-lg-4
              .d-flex.justify-content-center
                  a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=UbcEiFTmkQo" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p #[b Enlace web.] Tiempos perfectos ingles   
              







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
          img: require('@/assets/curso/temas/tema1/dial3.svg'),
        },
        {
          nombre: 'Jim',
          img: require('@/assets/curso/temas/tema1/dial2.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Sue',
          textoIng: 'What is a syllable? ',
          audio: require('@/assets/curso/audios/tema5/d1.mp3'),
        },
        {
          personaje: 'Jim',
          textoIng:
            'It is a unit of pronunciation having one vowel sound, with or without surrounding consonants, forming the whole or  part of a word. ',
          audio: require('@/assets/curso/audios/c/h52_1.mp3'),
        },
        {
          personaje: 'Sue',
          textoIng: 'What is rhythm?  ',
          audio: require('@/assets/curso/audios/tema5/d3.mp3'),
        },
        {
          personaje: 'Jim',
          textoIng:
            'Rhythm, in phonetics, is the speed and cadence of how you say a sentence.  ',
          audio: require('@/assets/curso/audios/c/h52_2.mp3'),
        },
        {
          personaje: 'Sue',
          textoIng: ' see the importance of stress, rhythm, and intonation.',
          audio: require('@/assets/curso/audios/tema5/d5.mp3'),
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
          textoIng: 'What is ***?  ',
          textoEsp: '',
          audio: require('@/assets/curso/audios/tema5/d6.mp3'),
          palabra: 'pronunciation',
        },
        {
          personaje: 'Tory',
          textoIng:
            'When we speak, the way that we *** out the words and sentences is known as pronunciation. ',
          textoEsp:
            'Yo necesito el libro de *** y las diapositivas Yo necesito el libro de Yo necesito el libro de Yo necesito el libro de .',
          audio: require('@/assets/curso/audios/tema5/d7.mp3'),
          palabra: 'sound',
        },
        {
          personaje: 'Eliana',
          textoIng: 'How can we, as teachers, *** pronunciation?  ',
          textoEsp: 'Yo necesito el libro de biologia y las ***.',
          audio: require('@/assets/curso/audios/tema5/d8.mp3'),
          palabra: 'teach',
        },
        {
          personaje: 'Tory',
          textoIng:
            'As an English teacher, I think that exposing students to different kinds of *** is important.  ',
          textoEsp: 'Yo *** el libro de biologia y las diapositivas.',
          audio: require('@/assets/curso/audios/tema5/d9.mp3'),
          palabra: 'accents',
        },
        {
          personaje: 'Eliana',
          textoIng:
            'I see, that&#39s the clue, I teach for my *** , my society, myself. ',
          textoEsp: 'Yo necesito el libro de biologia y las ***.',
          audio: require('@/assets/curso/audios/tema5/d10.mp3'),
          palabra: 'students',
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
.bg-5-2
  background-image: url(../assets/curso/temas/tema5/bg-5-2.svg)
  background-repeat: no-repeat
  background-size: 100%
  background-position: top
.card-adorno
  background-image: url(../assets/curso/temas/tema5/bg-adorno-card.svg)
  background-repeat: no-repeat
  background-size: cover
  background-position:
</style>
