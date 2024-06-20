<template>
    <div v-for="project in projects">
    <div v-if="route.params.id == project.project">
      <SubPageHeroCom :image="project.images[3]" :title="project.title"></SubPageHeroCom>
      <div class="pageContent">
        <h2>Af {{ project.lead }}</h2>
        <div class="textHtml" v-html="project.content"></div>
        <div class="slider">
        <SliderCom :images="project.images"></SliderCom>
        </div>
      </div>
    </div>      
    </div>
  </template>
  <script setup>
    const route = useRoute()
     const projects = ref([
    {
        title:"Rekt Projektet",
        lead:"Dan Verbaum",
        content:`<p>I en kommune i Zürich, bedre kendt for sin industrie og sine indkøbsmuligheder, har Dan Verbaum skabt en oase, der har taget afsæt i det allerede eksisterende hus, som skulle bibeholdes men bygges ud. </p>
        <p>Parametrene for design var bestemt af ønsket om autonomi i form og væsentlighed, samt den nye bygning samspil med huset og pool som allerede var der. En eksisterende pavillon, der fungerer som pool og sommerhuset, blev revet ned og erstattet af en ny og mere volumiøs. </p>
        <p>Den nye bygning der har form som i sig selv er svar på sin holdning til stedet, og dens vinklede facader afspejler kundens ønske om leve områder, der tilbyder forskellige grader af åbenhed og afsondrethed. Det udvendige er konfronteret med horisontale, cedertræ lægte beklædning, hvilket yderligere understreger geometri af bygningen. </p>
        <p>De tre etager samlede volumen er 1, 000 m³. Garage og nødvendig opbevaring, og nytte værelser er beliggende i kælderen. Det åbne-plan i stueetagen består af en stor opholdsstue, spise og madlavning område, og der er tre soveværelser og en forsænket balkon på øverste etage. </p>
        <p>Interiøret, også designet af Dan Verbaum, er defineret ved dets kerne står i kastanietræ, som omfatter i forhallen, med garderobe og eksternt tilgængelige gæstetoilet, og trappe. </p>
        <p>Bygningen er Minergie ® certificeret, et registreret kvalitetsmærke for lavenergibygninger. Det omfatter at gøre brug af de tilstødende huses eksisterende varmeanlæg og ved hjælp af solpaneler lave opvarmning af vand til begge huse. </p>`,
        images:[
          "/images/projekter/rekt/planrekt.jpg",
          "/images/projekter/rekt/rekt1.jpg",
          "/images/projekter/rekt/rekt2.jpg",
          "/images/projekter/rekt/rekt3.jpg",
          "/images/projekter/rekt/rekt4.jpg",
          "/images/projekter/rekt/rekt5.jpg",
          "/images/projekter/rekt/rekt6.jpg",
          "/images/projekter/rekt/rekt7.jpg",
        ],
        project:"rekt-projektet"
    },
    {
        title:"Curve Projektet",
        lead:"John p. herluf",
        content:`<p>Sted: Den dominikanske Republik</p>
        <p>Det positive klima, der hersker i løbet af hele året på den caribiske ø, samt placeringen af grunden ved de 7,000 kvm sandstrand ved kysten, bestemte mere eller mindre på forhånd visse aspekter i Curve projektets design, mindes John P. Herluf som er arkitekten bag Curve projektet</p>
        <p>Med en enestående arkitektonisk idé og et vist niveau af risikable designideer satte John P. Herluf sig til tegnebordet og lavede dette smukke udkast, som bygherre straks godkendte og i løbet af forbavsende kort tid påbegyndte. </p>
        <p>Huset er beklædt med en naturligt forekommende sten af Coralline, der har klare toner (hvid - beige), som har den rette kvalitet til at bygge i, så det automatisk giver et visuelt aspekt, som trives med den rigelige sol lys, og den maritime reference.</p>
        <p>Fra den primære adgang, synes huset for at skjule sig bag en virkeliggørelsen af buede vægge, der giver et helt skulpturelt islæt. I midten, fører en stor dør af rektanklet træ ind i huset. Hele boligen har på grund af formerne naturlig ventilation, så huset på denne måde at kunne gøre brug af alle fordelene ved det caribiske klima især brisen fra havet.</p>`,
        images:[
          "/images/projekter/curve/floorPlancurve.jpg",
          "/images/projekter/curve/plan1curve.jpg",
          "/images/projekter/curve/curve1.jpg",
          "/images/projekter/curve/curve2.jpg",
          "/images/projekter/curve/curve3.jpg",
          "/images/projekter/curve/curve4.jpg",
          "/images/projekter/curve/curve5.jpg",
          "/images/projekter/curve/curve6.jpg",
        ],
        project:"cruve-projektet"
    },
    {
        title:"Brohuset",
        lead:"Niels Hoy Hansen",
        content:`<p><strong>Baggrund</strong><br/>Klienterne bad Niels Hoy Hansen om at tegne en fast bolig med kontor på deres lille ejendom, som ligger en times kørsel fra Adelaide, Australien. Et knæk i ”Wintercreek” åen, der deler ejendommen, skaber en billabong (et dybt vandhul), der afgrænses af en høj klippe-skænt. Der blev bedt om et hus, der ville kunne ”påskønne” grunden uden at ødelægge dens skønhed, men på et økonomisk leje som kan sammenlignes med en "præfabrikeret" bolig.</p>
        <p><strong>Designet</strong><br/>Et smalt hus form, strækker sig over åen. Vinduer på hver side åbner huset i begge retninger, hvilket giver følelsen af at leve mellem træerne. </p>
        <p><strong>Struktur og Materialer</strong><br/>To stålspær udgør den primære struktur, blev fabrikeret off-site og rejst af to mænd og en kran på to dage. De blev forankret i fire små beton støtter.  Et betongulv spænder sig ud mellem de 2 stålspær, "kassen" med vægelementer og tagdækning er lavet af plantage fyrretræ. </p>
        <p>Bæredygtighed og miljø <br/>
            <ul>
                <li>et gulvareal på 110 kvm har vist sig at være ganske passende for parrets faste hjem og kontor. En effektiv plan er en simpel og effektiv metode til at begrænse de miljømæssige "fodaftryk" af bygningen. </li>
                <li>Thermal Comfort - Dette hus undgår enhvert klimaanlæg med følgende design teknikker: </li>
                <ol>
                    <li>Vinter Opvarmning: Den lange sider af huset står nord og syd. Den lave vintersol fra nord opvarmer det sorte isoleret betongulv, der lagrer varme til brug om natten. Isolering på undersiden af pladerne på væg og tag kombineret med dobbeltglas vinduer støtter lagring af varme. </li>
                    <li>Sommer køling: Presset stålskærme skygger mod nord over vinduerne om sommeren. En kombination af loft vifter og oplukkelige vinduer giver mulighed for effektiv afkøling fra kryds ventilation. Ved at lukke huset på varme sommerdage og åbne det i de kølige aftener, kan komfortable betingelser opretholdes uden klimaanlæg.</li>
                </ol>
                <li>
                    Materialer Hvor det er muligt materialer blev valgt, faldt valgene på:
                    <ul>
                        <li>Lokalt produceret på en bæredygtig måde</li>
                        <li>Genbrugelig </li>
                        <li>Nemt installerbart med få maskiner</li>
                        <li>Skab så lidt byggeaffald som muligt</li>
                    </ul>
                </li>
                <li>Stål og aluminium bruges i genanvendelige dele, mens de opfylder de tekniske krav til skovbrande i udsatte områder. Sekundær indramning er plantagefyrretræet som dyrkes i staten. Tag-og vægbeklædning er genanvendeligt stålplade.</li>
            </ul>
        </p>`,
        images:[
          '/images/projekter/brohuset/brohusplan.jpg',
          '/images/projekter/brohuset/brohus1.jpg',
          '/images/projekter/brohuset/brohus2.jpg',
          '/images/projekter/brohuset/brohus3.jpg',
          '/images/projekter/brohuset/brohus4.jpg',
          '/images/projekter/brohuset/brohus5.jpg',
          '/images/projekter/brohuset/brohus6.jpg',
          '/images/projekter/brohuset/brohus7.jpg',
          '/images/projekter/brohuset/brohus8.jpg',
        ],
        project:"brohuset"
    },
    {
        title:"Kasse projektet",
        lead:"",
        content:`<p>SITUATIONEN<br/>Landskabet i Ordos plateau i Indre Mongoliet, er bredt og åbent, præget af klitter af sand og lav vegetation. Klimaet er stabilt og tørt, med kun 200-450 mm årlige nedbør, hvilket har gjort udkomme i området til en stor udfordring gennem århundreder. I dag er landet stadig truet af tørke, erosion af jord og ørkendannelse. Tab af jord til ørken er lig 3,600 m2 pr. år</p>
        <p>PROJEKTET<br/>I vores projekt har vi fokuseret på disse miljømæssige faktorer og forsøgte at skabe et mikrokosmos i vort hus, med modsatte forhold fra situationen på ydersiden, som en oase i Ordos ørkenen.</p>
        <p><strong>Væggen</strong> fungerer som en vind barriere, for at skabe et godt mikroklima for indbyggerne i bygningen og tage sig af vertikal og horisontal bevægelse gennem bygningen. Muren omgiver en indre gård med 3 etager over jorden og 1. etage nedenfor.</p>
        <p><strong>Kasserne</strong>Kasserne fungerer som beholder til at leve, spise, sove og lave fritidsaktiviteter, samt kvarterer for arbejde. Som beholdere er kasserne er placeret i en lodret rækkefølge i forhold til behovet for dagslys og privatlivets fred. Fritidsaktiviteter er således placeret i underetagen, entré og arbejdsrum er i stueetagen, det levende-/ spisestue-værelse er på 1. sal og soveværelserne er placeret på øverste etage, og giver så meget privatliv som muligt inden for bygningen. Kasserne er placeret vandret for at danne et dynamisk forhold til hinanden. Funktioner, der kræver en god strøm af bevægelse mellem hinanden slutter i midten, danner rum, der åbner op i alle fire retninger. Adskilte funktioner som soveværelser er dannet som uafhængige enheder.</p>
        <p>Sammen udgør disse rumlige systemer en lille tre-dimensionel landsby, med en logisk omsætning af struktur, gode dagslysforhold og muligheder for en velfungerende metode til naturlig ventilation.</p>`,
        images:[
          '/images/projekter/kasse/ks1.jpg',
          '/images/projekter/kasse/ks2.jpg',
          '/images/projekter/kasse/ks3.jpg',
          '/images/projekter/kasse/ks4.jpg',
          '/images/projekter/kasse/ks5.jpg',
        ],
        project:"/projekter/kasse-projektet"
    },
    {
        title:"Softline projektet",
        lead:"",
        content:`<p>The West Side Soft Line Park i New York City er en kontinuerlig stigende form for brostruktur, der i løbet af de næste ti år bliver en unik lineær bypark. Designet af Design Architects, vil Soft Line Park fremme en fusion mellem forskellige af bydelens økologier både funderede og implanterede. </p>
        <p>Det er her, at Design Architects er blevet bestilt af bygherren Alvin Naltman til at designe en slim-fit, 14 etagers bygning. I stueetagen er der gallerier og ´på etagerne ovenover fordeler 12 ejerlejligheder sig. </p>
        <p>Det har været vigtigt for så vel Design Architects som for bygherre at designet ikke blev med for skarpe kanter, da man gerne vil sigte efter et mere organisk visuelt indtryk. Dog skulle man imødegå tidens trend uden at blive for minimalistisk i tanke. Respekten for det allerede eksisterende, samt de planer der i fremtiden er for området, skulle også imødegås og var noget af en udfordring, som begge parter dog menerer løst på bedste og smukkeste vis med projektforslaget fra Design Architects. </p>`,
        images:[
          "/images/projekter/softline/sl1.jpg",
          "/images/projekter/softline/sl2.jpg",
          "/images/projekter/softline/sl3.jpg",
          "/images/projekter/softline/sl4.jpg",
          "/images/projekter/softline/sl5.jpg",
          "/images/projekter/softline/slplan1.jpg",
          "/images/projekter/softline/slplan2.jpg",
          "/images/projekter/softline/slskitse.jpg",
        ],
        project:"/projekter/softline-projektet"
    },
  ])
  </script>
  <style lang="scss" scoped>
  .pageContent{
    width: var(--contentWidthLg);
    margin: auto;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 1rem;
    h2{
      grid-column: 1/13;
    }
    .textHtml{
      grid-column: 1/7;
    }
    .slider{
      grid-column: 7/13;
      border-radius: var(--radiusMd);
      overflow: hidden;
    }
    @media(max-width:1600px){
      .textHtml{
        grid-column: 1/13;
      }
      .slider{
        grid-column: 1/13;
        height: 300px;
      }
    }
  }
  </style>