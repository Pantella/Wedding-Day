import gsap from './../../node_modules/gsap/all.js';

function init() {

    // PULSANTI NAVIGAZIONE HEADER
    const navigation = document.querySelector("#navigation");
    const btnCerimonia = document.querySelector("#btn-cerimonia");
    const btnRicevimento = document.querySelector("#btn-ricevimento");
    const btnSposi = document.querySelector("#btn-sposi");

    // ELEMENTI DA ANIMARE
    const sposiSx = document.querySelector("#anim-sposi-sx");
    const sposicenter = document.querySelector("#anim-sposi-center");
    const sposiDx = document.querySelector("#anim-sposi-dx");
    
    const subtitle = document.querySelector("#anim-subttl");

    const testo1 = document.querySelector("#anim-text-1");
    const testo2 = document.querySelector("#anim-text-2");
    const testo3 = document.querySelector("#anim-text-3");

    const textArray = [subtitle,testo1,testo2,testo3];

    // FRASI PER CAMBIO
    const frasiCerimonia = [
        'Sono lieti di invitarvi al loro matromonio che si terrà il', // Frase sottotitolo
        '30 Settembre 2022 alle ore 15.30', // Frase testo 1
        'presso la Chiesa di Don Abbondio', // Frase testo 2
        'Nelle vicinanze di Lecco (Più o meno)'  // Frase testo 3
    ];

    const frasiRicevimento = [
        'Sono lieti di invitarvi al ricevimento che si terrà presso', // Frase sottotitolo
        'il ristorante Castello dell\'Innominato', // Frase testo 1
        'dalle ore 18.00', // Frase testo 2
        'Località sconosciuta vicino Lecco'  // Frase testo 3
    ];


    // TWEENS
    let loadTlTitle = gsap.timeline();
    let loadTweenText = gsap.from(
                            textArray,
                            {
                                delay: 2,
                                duration: 1.5,
                                opacity: 0,
                                y: '20px',
                                ease: 'sine.out'
                            });
    let cerimoniaTl = gsap.timeline();
    let ricevimentoTl = gsap.timeline();
    let sposiTl = gsap.timeline();
    let lastTl = "cerimonia";

    // SET INITIAL ANIMATION AFTER LOAD
    loadTlTitle.from(
        sposiSx,{
            opacity: 0,
            x: '-25vw',
            duration: 2,
            ease: "sine.out"
        }
    )
    .from(
        sposiDx,{
            opacity: 0,
            x: '25vw',
            duration: 2,
            ease: "sine.out"
        },
        '<'
    );


    // START OF INITIAL ANIMATION AFTER LOAD
    loadTlTitle.play();
    loadTweenText.play();

    navigation.addEventListener('click',(evt)=>{

        let btnDataAttr = evt.target.getAttribute("data-action");
        console.log(btnDataAttr);

        const changeFrasi = ()=>{
            console.log('lastTl: '+lastTl);
    
            let arrayFrasi = [];
    
            switch(btnDataAttr) {
                case 'cerimonia':
                    arrayFrasi = frasiCerimonia;
                    break;
                case 'ricevimento':
                    arrayFrasi = frasiRicevimento;
                    break;
            };
    
            textArray.forEach((elm,index)=>{
                elm.textContent = arrayFrasi[index];
            });
        };

        const showText = ()=>{gsap.to(
            textArray,
            {
                duration: 1.5,
                opacity: 1,
                // y: '20px',
                ease: 'sine.out'
            });};

        if ( btnDataAttr && btnDataAttr!=lastTl ) {

            gsap.to(
                textArray,
                {
                    duration: 1.5,
                    opacity: 0,
                    // y: '20px',
                    ease: 'sine.out'
                })
            .then(changeFrasi)
            .then(showText);
            lastTl = btnDataAttr;



            appearTweenText.play();
        }

    });

}

init();

