<template>
    <div class="aboutUs">
      <SubPageHeroCom title="Om Design Architects" image="/images/gallery/13nhh.jpg" top="0 top"></SubPageHeroCom>
      <section>
        <article>
          <div class="flexContent animateSection">
            <img src="/images/gallery/10jph.jpg" alt="">
            <div class="text">
            <p>Design Architects består af de 3 partnere  Dan Verbaum, John P. 
            Herluf og Niels Hoy Hansen som hver især gennem årene er blevet internationalt anerkendte for deres spændende og nyskabende bygge projekter. 
            De er nu gået sammen om at skabe firmaet Design Architects i forsøget på at skabe et kreativt, udviklende og inspirerende miljø.  
            Firmaet henvender sig til både det danske marked, men i allerhøjeste grad også det udenlandske. </p>
            </div>
            </div>
            <div class="flexContent animateSection" >
              <div class="text">
                <p>
                Design Architects startede op som et freelance projekt da de 3 tilfældigt mødtes for 4 år siden, i forbindelse med Verdensudstillingen. 
                Over en stille Carlsberg øl (i den danske pavillion, selvfølgelig), fandt de at de sammen kunne skabe en særdeles kreativ sfære, hvori de hver især kunne bidrage med deres ideer som uden videre passede ind i hinanden. 
                Dette ville de alle 3 gerne prøve at bruge lidt mere sjæl, tid og arbejde på, og ud af det voksede Design Architects.  
                De første projekter er allerede i hus, og er ved at blive bygget, og mange flere nye venter lige om hjørnet, nu hvor de alle 3 er gået 100% ind i samarbejdet. 
                </p>
            </div>
            <img src="/images/gallery/2dv.jpg" alt="">
          </div>
            <p>
              Design Architects kan tilbyde design af alle former fra bygninger, lige fra nye én families huse, til renovering af gamle lejligheder, til de helt store opgaver med skyskrabere i New York. 
            </p>
            <p>De internationale opgaver er en stor del af virksomhedens fundament, men Design Architects arbejder på at blive langt mere kendt i Danmark for sine alternative og altid kreative løsninger, med smukt brugervenligt design som man ikke blot skal bo i, men leve i. </p>
        </article>
      </section>
    </div>
  </template>
  <script setup>
  function animateIn(){
	let textSections = document.querySelectorAll(".animateSection");
		let options = {
		threshold: 1.0
	};
		let callback = (entries, observer) => {
		entries.forEach((entry) =>{
			if(entry.isIntersecting == true){
				entry.target.classList.add("isObserved")
			}
		})
		}
		let observer =  new IntersectionObserver(callback, options);
		for(let textSection of textSections){
		observer.observe(textSection);	
		}
  }
  onMounted(()=>{
    animateIn()
  }) 
  </script>
  <style lang="scss" scoped>
    .aboutUs{
      p{
        margin-bottom: var(--spacingMd)
      }
      .flexContent{
        align-items: center;
        img{
          height: 300px;
          background-color: var(--tertiaryBg);
        }
      }
    }
  </style>