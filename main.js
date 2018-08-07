var number = 3;
const slider = (orientation) => {
    var boxHead = 'test',
        boxContent, controlerOrentation, numberFirst, NumberLast

    let container = document.querySelector('#slider-testimonials')


    controlerOrentation = orientation

    var controler = (controlerOrentation) => {

        console.log('1 step')
        numberEvent()
        removeBoxs()
        addBoxs(number)


    }
    const numberEvent = () => {
        number = (orientation === 'left') ? number - 1 : number + 1
        if (number < 0) {
            number = 4
        } else if (number > 4) {
            number = 0
        }
        numberFirst = (number - 1 >= 0 && number - 1 <= 4) ? number - 1 : 4
        numberLast = (number + 1 >= 0 && number + 1 <= 4) ? number + 1 : 0
        console.log(number)
        console.log(numberFirst)
        console.log(numberLast)

    }
    const removeBoxs = (boxElement) => {
        console.log('2 step')
        container.innerHTML = '';
    }
    const addBoxs = (number) => {
        console.log('3 step')
        container.innerHTML += changeContent(numberFirst) + changeContent(number) + changeContent(numberLast)
    }
    const changeContent = (numberEl) => {
        console.log('4 step')
        boxHead = BoxDescription[numberEl].name

        boxContent = BoxDescription[numberEl].content

        return templateApp('boxCode')
    }

    var BoxDescription = [{ name: 'MONIKA KOWALSKA', content: ' quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
        { name: 'AMELIA KOWALSKA', content: ' quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
        { name: 'MARTA KOWALSKA', content: ' quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
        { name: 'WERONIKA KOWALSKA', content: ' quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
        { name: 'HALINA KOWALSKA', content: ' quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' }
    ]


    let templateApp = (templateName) => {
        console.log('5 step')
        var boxCode = `
       <div class="slider__box">
       <div class="box__half">
           <div class="slider__column">
               <div class="slider__icon slider__icon--normal slider__icon--to-top">
                   <div class="icon icon--circle icon__avatar--girl"></div>
               </div>
           </div>
           <div class="slider__column">
               <h2 class="description__heading f-c-light-dark">
                   ${boxHead}<br> MANAGER
               </h2>
           </div>
       </div>
       <div class="box__half box__half--top-elements">
           <div class="slider__column text--small f-c-light">
           ${boxContent}    
           </div>
       </div>
       </div>
       `
        if (templateName === 'boxCode') {
            return boxCode
        }

    }
    controler()

}
slider()
const leftButtonSlider = document.querySelector('#leftSlide')
const rightButtonSlider = document.querySelector('#rightSlide')
leftButtonSlider.addEventListener('click', () => {
    slider('left')
})
rightButtonSlider.addEventListener('click', () => {
    slider('right')
})