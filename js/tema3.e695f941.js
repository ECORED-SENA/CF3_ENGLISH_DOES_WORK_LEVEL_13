(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tema3"],{"0c02":function(t,a,e){t.exports=e.p+"media/sophia2.c5d62220.mp3"},1366:function(t,a,e){t.exports=e.p+"media/H34.d55ac57d.mp3"},"21da":function(t,a,e){t.exports=e.p+"img/9.9c422d60.svg"},2546:function(t,a,e){t.exports=e.p+"img/dc.6969b417.svg"},3927:function(t,a,e){t.exports=e.p+"img/6.534583da.png"},"4f20":function(t,a,e){t.exports=e.p+"media/eliana2.e1b42f02.mp3"},"4f8a":function(t,a,e){t.exports=e.p+"media/H30_2.74c48d3c.mp3"},"4ff9":function(t,a,e){t.exports=e.p+"img/8.e08df031.png"},5161:function(t,a,e){"use strict";e("8e15")},"543e":function(t,a,e){t.exports=e.p+"media/h37.e9268152.mp3"},"57cd":function(t,a,e){t.exports=e.p+"img/2.8f29aba2.svg"},"63a3":function(t,a,e){t.exports=e.p+"media/h39_1.ab59396d.mp3"},"6dad":function(t,a,e){t.exports=e.p+"img/4.281be315.png"},"7ce3":function(t,a,e){t.exports=e.p+"img/3.494e61fb.svg"},8366:function(t,a,e){t.exports=e.p+"media/YES.34ca48f3.mp3"},"8e15":function(t,a,e){},"9f67":function(t,a,e){t.exports=e.p+"media/eliana1.043943ee.mp3"},a1ea:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"traductor mb-5"},[e("div",{staticClass:"contenedor-traductor mb-5"},[e("div",{staticClass:"contenedor-traductor__eng"},[t._t("textoIngles")],2),e("div",{staticClass:"contenedor-traductor__esp",class:{mostrar:t.ocultarEsp}},[t._t("textoEspanol")],2),e("a",{staticClass:"boton-traduccion text-white",on:{click:function(a){t.ocultarEsp=!t.ocultarEsp}}},[t._v("Ver traducción")])])])},o=[],i={name:"TarjetaTraductor",props:{textoIngles:{type:String,default:""},textoEspanol:{type:String,default:""}},data:function(){return{ocultarEsp:!0}}},n=i,c=(e("5161"),e("2877")),r=Object(c["a"])(n,s,o,!1,null,null,null);a["a"]=r.exports},a77c:function(t,a,e){"use strict";e("c62e")},ae38:function(t,a,e){t.exports=e.p+"media/H31_2.6397c21d.mp3"},b420:function(t,a,e){},b483:function(t,a,e){t.exports=e.p+"img/tory.528a148b.svg"},b4b8:function(t,a,e){t.exports=e.p+"media/H28.067b2292.mp3"},b8c0:function(t,a,e){t.exports=e.p+"img/1.b0470d43.svg"},bfea:function(t,a,e){t.exports=e.p+"media/H30_1.5fe4063e.mp3"},c1aa:function(t,a,e){t.exports=e.p+"img/5.ce3bdc5d.png"},c62e:function(t,a,e){},c7b4:function(t,a,e){t.exports=e.p+"img/eliana.1277d94d.svg"},cf7f:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dialogoChat p-5"},[e("div",{staticClass:"row justify-content-center align-items-center g-0"},[e("div",{staticClass:"col-md-12"},t._l(t.dialogoComputed,(function(a,s){return e("div",{staticClass:"row g-0 flex-nowrap dialogoChat__chat__item mb-3"},[e("div",{staticClass:"col-auto dialogoChat__chat__item__person"},[e("img",{attrs:{src:a.personaje.img}}),e("span",{staticClass:"text-small",domProps:{innerHTML:t._s(a.personaje.nombre)}})]),e("div",{staticClass:"col dialogoChat__chat__item__message__container"},[e("div",{staticClass:"dialogoChat__chat__item__message"},[e("div",{staticClass:"row g-0 align-items-center dialogoChat__chat__item__message__bubble"},[e("div",{staticClass:"col dialogoChat__chat__item__message__text me-2"},[e("div",{staticClass:"dialogoChat__chat__item__message__text__eng h5 mb-0"},[t._l(a.textoIng,(function(s,o){return["*"===s?e("div",{staticClass:"d-inline dialogoChat__chat__item__message__text__drop"},[t.answers[a.id]?e("span",{staticClass:"dialogoChat__chat__item__message__text__drop__response",domProps:{innerHTML:t._s(t.answers[a.id].palabra)}}):e("span",{staticClass:"dialogoChat__chat__item__message__text__drop__default"})]):e("span",{key:"phrase-"+a.id+"-"+o,domProps:{innerHTML:t._s(s)}})]}))],2),t.translations.includes(a.id)?e("div",{staticClass:"dialogoChat__chat__item__message__text__esp text-small"}):t._e()]),e("div",{staticClass:"col-auto dialogoChat__chat__item__message__audio"},[e("Audio",{attrs:{audio:a.audio},on:{"audio-hover":function(a){t.mostrarIndicadorAudio=!1}}})],1)])])])])})),0)])])},o=[],i=e("5530"),n=(e("d81d"),e("7db0"),e("4de4"),e("ac1f"),e("1276"),e("5319"),e("b2ea")),c={type:Object,default:function(){return{}}},r={name:"Chat",components:{Audio:n["default"]},props:{dialogo:c},data:function(){return{uid:Math.floor(Math.random()*Math.pow(10,10)),touchScreen:!1,dragId:null,dropId:null,answers:{},translations:[],score:null}},computed:{dialogoComputed:function(){var t=this;return this.dialogo.dialogo?this.dialogo.dialogo.map((function(a,e){return Object(i["a"])(Object(i["a"])({},a),{},{id:t.uid+e+1,textoIng:t.splitPhrase(a.textoIng),personaje:t.dialogo.personajes.find((function(t){return t.nombre===a.personaje}))})})):[]}},methods:{splitPhrase:function(t){return t.replace(/^\s+|\s+$/g,"&nbsp;").replace("***","___*___").split("___").filter(Boolean)}}},l=r,d=(e("a77c"),e("2877")),u=Object(d["a"])(l,s,o,!1,null,null,null);a["a"]=u.exports},d1df:function(t,a,e){t.exports=e.p+"media/eliana3.1954bf97.mp3"},da96:function(t,a,e){t.exports=e.p+"media/H31_3.a00a2158.mp3"},db9f:function(t,a,e){t.exports=e.p+"img/dial1.92c2ce28.svg"},e3c5:function(t,a,e){t.exports=e.p+"media/h39_2.f0f9fc9c.mp3"},e7f1:function(t,a,e){t.exports=e.p+"media/H31_1.547ea8ee.mp3"},e9a2:function(t,a,e){t.exports=e.p+"media/sophia1.4164b12a.mp3"},eb46:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"curso-main-container pb-3"},[s("BannerInterno"),s("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},[t._m(0),t._m(1),s("div",{staticClass:"row justify-content-center mb-5"},[s("div",{staticClass:"col-lg-4 mb-lg-0 mb-3",attrs:{"data-aos":"fade-right"}},[s("traductor",{staticClass:"color-acento-botones"},[s("div",{attrs:{slot:"textoIngles"},slot:"textoIngles"},[s("p",{staticClass:"fst-italic"},[t._v("When we talk about a situation that makes another situation happen, we talk about cause and effect. "),s("br"),s("br"),t._v("In English, we use certain expressions, such as because, due to, since, and as, to talk about causes and effects. Let´s check the meanings of cause, effect, and affect. Learn how to express cause and effect in English. "),s("br"),s("br"),t._v("To begin, you should know the definitions of cause, effect (noun), and affect (verb). Let’s see some examples. ")])]),s("div",{attrs:{slot:"textoEspanol"},slot:"textoEspanol"},[s("p",[t._v("Cuando hablamos de una situación que hace que suceda otra situación, hablamos de causa y efecto. "),s("br"),s("br"),t._v("En inglés, usamos ciertas expresiones, como because, due to, since, y as, para hablar de causas y efectos. "),s("br"),s("br"),t._v("Veamos los significados de “causa”, “efecto” y “afectar”. Aprenda a expresar causa y efecto en inglés. "),s("br"),s("br"),t._v("Para comenzar, debe conocer las definiciones de “causa”, “efecto” (sustantivo) y “afectar” (verbo).")])])]),s("img",{attrs:{src:e("7ce3"),alt:""}})],1),s("div",{staticClass:"col-lg-8",attrs:{"data-aos":"fade-left"}},[s("AcordionA",{staticClass:"mb-5",attrs:{tipo:"b","clase-tarjeta":"tarjeta tarjeta-azul"}},[s("div",{attrs:{titulo:"<em>Cause</em> / Causa"}},[s("div",{staticClass:"tarjeta bg-white p-5"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-4 mb-lg-0 mb-3"},[s("img",{attrs:{src:e("6dad"),alt:""}})]),s("div",{staticClass:"col-lg-8"},[s("traductor",{staticClass:"color-acento-botones mb-4"},[s("div",{attrs:{slot:"textoIngles"},slot:"textoIngles"},[s("p",{staticClass:"fst-italic"},[s("span",{staticClass:"r--2"},[t._v("(Noun)")]),t._v(" a person or thing that makes something happen. "),s("br"),s("br"),s("span",{staticClass:"r--4 fw-bold"},[t._v("The cause of the accident was a slippery tire. ")]),t._v(" "),s("br"),s("br"),s("span",{staticClass:"r--2"},[t._v("(Verb)")]),t._v(" an action that makes something happen. "),s("br"),s("br"),s("span",{staticClass:"r--4 fw-bold"},[t._v("The slippery tire caused the car to crash. ")])])]),s("div",{attrs:{slot:"textoEspanol"},slot:"textoEspanol"},[s("p",[t._v(" (Sustantivo) una persona o cosa que hace que algo suceda. "),s("br"),s("br"),t._v("La causa del accidente fue una llanta resbalosa. "),s("br"),s("br"),t._v("(Verbo) una acción que hace que algo suceda. "),s("br"),s("br"),t._v("La llanta resbalosa hizo que el auto chocara. ")])])]),s("TarjetaAudio",{staticClass:"color-acento-contenido mb-3",staticStyle:{"background-color":"#c4d1ff"},attrs:{texto:"",audio:e("b4b8")}})],1)])])]),s("div",{attrs:{titulo:"<em>Effect </em> / Efecto"}},[s("div",{staticClass:"tarjeta bg-white p-5"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-4 mb-lg-0 mb-3"},[s("img",{attrs:{src:e("c1aa"),alt:""}})]),s("div",{staticClass:"col-lg-8"},[s("traductor",{staticClass:"color-acento-botones mb-4"},[s("div",{attrs:{slot:"textoIngles"},slot:"textoIngles"},[s("p",{staticClass:"fst-italic"},[s("span",{staticClass:"r--2"},[t._v("(Noun)")]),t._v(" a change that is a result of an action or cause. "),s("br"),s("br"),s("span",{staticClass:"r--4 fw-bold"},[t._v("The snow had an effect on his mood.")])])]),s("div",{attrs:{slot:"textoEspanol"},slot:"textoEspanol"},[s("p",[t._v(" (Sustantivo) un cambio que es el resultado de una acción o causa. "),s("br"),s("br"),t._v("La nieve tuvo un efecto en su estado de ánimo. ")])])]),s("TarjetaAudio",{staticClass:"color-acento-contenido mb-3",staticStyle:{"background-color":"#c4d1ff"},attrs:{texto:"",audio:e("bfea")}})],1)])])]),s("div",{attrs:{titulo:"<em>Affect </em> / Afectar"}},[s("div",{staticClass:"tarjeta bg-white p-5"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-4 mb-lg-0 mb-3"},[s("img",{attrs:{src:e("3927"),alt:""}})]),s("div",{staticClass:"col-lg-8"},[s("traductor",{staticClass:"color-acento-botones mb-4"},[s("div",{attrs:{slot:"textoIngles"},slot:"textoIngles"},[s("p",{staticClass:"fst-italic"},[t._v("When effect is used as a verb, it is usually spelled with an "),s("span",{staticClass:"r--2"},[t._v("a = affect.")]),t._v(" "),s("br"),s("br"),s("span",{staticClass:"r--2"},[t._v("(Verb)")]),t._v(" to produce an effect; to cause a change in something. "),s("br"),s("br"),s("span",{staticClass:"r--4 fw-bold"},[t._v("The snow affected his mood.")])])]),s("div",{attrs:{slot:"textoEspanol"},slot:"textoEspanol"},[s("p",[t._v(" Cuando “efecto” se usa como verbo, generalmente se escribe con a = afectar. "),s("br"),s("br"),t._v("(Verbo) producir un efecto; provocar un cambio en algo. "),s("br"),s("br"),t._v("La nieve afectó su estado de ánimo. ")])])]),s("TarjetaAudio",{staticClass:"color-acento-contenido mb-3",staticStyle:{"background-color":"#c4d1ff"},attrs:{texto:"",audio:e("4f8a")}})],1)])])])])],1)]),s("div",{staticClass:"bg-3-1 mn p-5 mb-5"},[s("div",{staticClass:"row justify-content-center mb-5"},[s("div",{staticClass:"col-lg-8"},[s("div",{staticClass:"tarjeta bg-3-2 p-4 mb-5"},[t._m(2),s("div",{staticClass:"row justify-content-center mb-5"},[s("div",{staticClass:"col-lg-10"},[s("img",{attrs:{src:e("2546"),alt:""}}),s("div",{staticClass:"bg-dialog pt-0"},[s("div",{staticClass:"bg-white p-4",staticStyle:{"border-radius":"0px 0px 20px 20px"}},[s("DialogoChat",{staticClass:"color-acento-botones noname dialogocolores",attrs:{dialogo:t.dialogoChat}})],1)])])])])])]),s("div",{staticClass:"row justify-content-center mb-5"},[t._m(3),s("div",{staticClass:"col-lg-8",attrs:{"data-aos":"fade-left"}},[s("TarjetaAudio",{staticClass:"color-acento-contenido mb-3",staticStyle:{"background-color":"#c4d1ff"},attrs:{texto:"",audio:e("1366")}}),s("traductor",{staticClass:"color-acento-botones mb-4 no-translate"},[s("div",{attrs:{slot:"textoIngles"},slot:"textoIngles"},[s("p",{staticClass:"fst-italic"},[t._v("Talking about causes and effects in English"),s("br"),s("br"),t._v("To express cause and effect in English, we use certain words or phrases: depending on the expression, we need to create the sentence. For Example: We want to use the expression BECAUSE OF, so we need to write down or think about the noun. Let's see the Example:"),s("br"),s("br"),s("span",{staticClass:"r--4 fw-bold"},[t._v("Because of the weather, we could not fly.")])])]),s("div",{attrs:{slot:"textoEspanol"},slot:"textoEspanol"},[s("p",[t._v("Hablando de causas y efectos en inglés."),s("br"),s("br"),t._v("Para expresar causa y efecto en inglés, usamos ciertas palabras y frases. Dependiendo de la expresión.necesitamos crear la oración. Por ejemplo:Queremos usar la expresión PORQUE necesitamos escribiro pensar en el sustantivo, veamos el ejemplos")])])])],1)]),s("div",{staticClass:"row justify-content-center mb-5"},[t._m(4),s("div",{staticClass:"col-lg-8",attrs:{"data-aos":"fade-left"}},[s("TarjetaAudio",{staticClass:"color-acento-contenido mb-3",staticStyle:{"background-color":"#c4d1ff"},attrs:{texto:"",audio:e("543e")}}),s("traductor",{staticClass:"color-acento-botones mb- no-translate"},[s("div",{attrs:{slot:"textoIngles"},slot:"textoIngles"},[s("p",{staticClass:"fst-italic"},[t._v("If we want to use the expression BECAUSE, we need to plan two sentences independently. For instance:"),s("br"),s("br"),s("span",{staticClass:"r--4 fw-bold"},[t._v("I could not go to the party because I had to do homework.")]),s("br"),s("br"),s("span",{staticClass:"r--4 fw-bold"},[t._v("First sentence:")]),t._v(" I could not go the party."),s("br"),s("span",{staticClass:"r--4 fw-bold"},[t._v("Second sentence:")]),t._v(" I had to do homework.")])]),s("div",{attrs:{slot:"textoEspanol"},slot:"textoEspanol"},[s("p",[t._v("No se encuentra traduccion")])])])],1)])]),t._m(5),s("Dialogo",{staticClass:"color-acento-contenido",attrs:{dialogo:t.dialogo},scopedSlots:t._u([{key:"nombre-actividad",fn:function(){return[t._v("Arrastrar y Soltar")]},proxy:!0},{key:"titulo-actividad",fn:function(){return[s("em",[t._v(" Expressing cause and effect to complete")])]},proxy:!0},{key:"descripcion-actividad",fn:function(){return[t._v("Arrastra y suelta cada una de las palabras en el orden correcto.")]},proxy:!0}])})],1)],1)},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"titulo-principal color-acento-contenido"},[e("div",{staticClass:"titulo-principal__numero"},[e("span",[t._v("3")])]),e("h1",[e("em",[t._v("Expressing cause and effect")]),t._v(" (Expresando causa y efecto)")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"mn p-5 mb-5",staticStyle:{"background-color":"#d5d6f0"}},[s("h3",{staticClass:"text-center"},[s("span",{staticClass:"r--4 fst-italic"},[t._v("Cause and Effect")])]),s("p",{staticClass:"mb-5 text-center",attrs:{"data-aos":"fade-right"}},[s("span",{staticClass:"r--4 fw-bold fst-italic"},[t._v("Shows relationship between "),s("span",{staticClass:"r--2"},[t._v("cause")]),t._v(" (event) and"),s("br"),s("span",{staticClass:"r--2"},[t._v("Effect")]),t._v(" (what happened because of the event)")])]),s("div",{staticClass:"row justify-content-center mb-5"},[s("div",{staticClass:"col-lg-3 mb-lg-0 mb-3"},[s("div",{staticClass:"tarjeta-titulo color-primario h-100"},[s("div",{staticClass:"tarjeta-titulo__titulo"},[s("div",{staticClass:"titulo rounded-pill p-3 px-5 d-inline"},[s("h4",{staticClass:"mb-0"},[t._v("Cause")])])]),s("img",{staticClass:"m-auto",staticStyle:{width:"126px"},attrs:{src:e("b8c0"),alt:""}})])]),s("div",{staticClass:"col-lg-6 mb-lg-0 mb-3"},[s("div",{staticClass:"tarjeta-titulo color-secundario h-100"},[s("div",{staticClass:"tarjeta-titulo__titulo"},[s("div",{staticClass:"titulo rounded-pill p-3 px-5 d-inline"},[s("h4",{staticClass:"mb-0 text-white"},[t._v("Effect")])])]),s("img",{attrs:{src:e("57cd"),alt:""}})])]),s("div",{staticClass:"col-lg-3 mb-lg-0 mb-3"},[s("div",{staticClass:"tarjeta-titulo color-acento-contenido h-100"},[s("div",{staticClass:"tarjeta-titulo__titulo"},[s("div",{staticClass:"titulo rounded-pill p-3 px-5 d-inline"},[s("h4",{staticClass:"mb-0 text-white"},[t._v("Signal Words")])])]),s("p",{staticClass:"fst-italic fw-bold text-center"},[s("span",{staticClass:"r--2"},[t._v("consequently"),s("br"),t._v("because of"),s("br"),t._v("therefore"),s("br"),t._v("as a result"),s("br"),t._v("reason why"),s("br"),t._v("thus..."),s("br"),t._v("hence")])])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[e("span",{staticClass:"r--3 fst-italic"},[t._v("Below is the following dialogue between two characters who talk about their routine using cause and effect expressions.")]),t._v(" "),e("span",{staticClass:"r--gris"},[t._v("/ A continuación, se presenta el siguiente diálogo entre dos personajes que hablan sobre su rutina usando expresiones de causa y efecto. ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-lg-4 col-8 mb-lg-0 mb-3",attrs:{"data-aos":"fade-right"}},[s("img",{attrs:{src:e("4ff9"),alt:""}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-lg-4 col-8 mb-lg-0 mb-3",attrs:{"data-aos":"fade-right"}},[s("img",{attrs:{src:e("21da"),alt:""}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",{staticClass:"mb-5",attrs:{"data-aos":"fade-right"}},[e("span",{staticClass:"r--3 fst-italic"},[t._v("Let's see this dialogue to practice the topics seen: ")])])}],i=e("cf7f"),n=e("a1ea"),c={name:"Tema3",components:{DialogoChat:i["a"],traductor:n["a"]},data:function(){return{dialogoChat:{personajes:[{nombre:"Sue",img:e("db9f")},{nombre:"Jim",img:e("ff0b")}],dialogo:[{personaje:"Sue",textoIng:"How was your day today? ",audio:e("e7f1")},{personaje:"Jim",textoIng:"Well, I had to go to the school because there was a rehearsal. ",audio:e("e9a2")},{personaje:"Sue",textoIng:"Oh, really? So, did you have any lunch? ",audio:e("ae38")},{personaje:"Jim",textoIng:"Yes, I did. Because of my levels of sugar, I need to eat well. ",audio:e("0c02")},{personaje:"Sue",textoIng:"I see. Since my mom has the same issue, I understand what you must do",audio:e("da96")},{personaje:"Jim",textoIng:"Yes.",audio:e("8366")}]},dialogo:{personajes:[{nombre:"Eliana",img:e("c7b4")},{nombre:"Tory",img:e("b483")}],dialogo:[{personaje:"Eliana",textoIng:"What happened with your son&#39s test? You said you needed to study with him, *** did you study with him? ",textoEsp:"",audio:e("9f67"),palabra:"so (1)"},{personaje:"Tory",textoIng:"*** John&#39s laziness, he did not pass the English test. ",textoEsp:"Yo necesito el libro de *** y las diapositivas Yo necesito el libro de Yo necesito el libro de Yo necesito el libro de .",audio:e("63a3"),palabra:"Due to"},{personaje:"Eliana",textoIng:"He failed the test *** his bad study habits. ",textoEsp:"Yo necesito el libro de biologia y las ***.",audio:e("4f20"),palabra:"because of"},{personaje:"Tory",textoIng:"But I guess he can have a second chance, *** will you talk to his teacher? ",textoEsp:"Yo *** el libro de biologia y las diapositivas.",audio:e("e3c5"),palabra:"so (2)"},{personaje:"Eliana",textoIng:"I will talk to him *** he had planned a meeting on Friday.  ",textoEsp:"Yo necesito el libro de biologia y las ***.",audio:e("d1df"),palabra:"since"}]}}},mounted:function(){var t=this;this.$nextTick((function(){t.$aosRefresh()}))},updated:function(){this.$aosRefresh()}},r=c,l=(e("fe2b"),e("2877")),d=Object(l["a"])(r,s,o,!1,null,null,null);a["default"]=d.exports},fe2b:function(t,a,e){"use strict";e("b420")},ff0b:function(t,a,e){t.exports=e.p+"img/dial2.25e74346.svg"}}]);
//# sourceMappingURL=tema3.e695f941.js.map