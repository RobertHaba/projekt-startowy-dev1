// Starts parameters
let indexSlide = 3;
let leftButtonSlider = document.querySelector('#leftSlide')
let rightButtonSlider = document.querySelector('#rightSlide')
    // Slider
function slider() {
    let sliderContainer, boxHead, boxRole, boxContent, boxImage, indexSlideFirst, indexSlideLast,
        thisPosition
    sliderContainer = document.querySelector('#slider-testimonials')
    this.goToNext = (orientation, startParam) => {
        thisPosition = orientation;
        loadIndex(startParam)
    }
    const loadIndex = (startParam) => {
        console.log('___1 step: Number load')
        indexSlide = (thisPosition === 'left') ? indexSlide - 1 : indexSlide + 1
        if (indexSlide < 0) {
            indexSlide = 4
        } else if (indexSlide > 4) {
            indexSlide = 0
        }
        //validate
        indexSlideFirst = (indexSlide - 1 >= 0 && indexSlide - 1 <= 4) ? indexSlide - 1 : 4
        indexSlideLast = (indexSlide + 1 >= 0 && indexSlide + 1 <= 4) ? indexSlide + 1 : 0
        removeBoxs(startParam)
    }
    async function removeBoxs(startParam) {
        console.log('2 step: Remove')
        if (startParam !== true) {
            animationHide()
            await sleep(1000);
        }
        sliderContainer.innerHTML = '';
        addBoxs(indexSlide)
    }
    const addBoxs = (indexSlide) => {
        console.log('3 step: Add')
        sliderContainer.innerHTML += changeBoxContent(indexSlideFirst) + changeBoxContent(indexSlide) + changeBoxContent(indexSlideLast)
        animationShow()
    }
    const animationShow = () => {
        console.log('6 step: Add Animations')
        sliderContainer.children[0].classList += ' slider__box--animation-left'
        sliderContainer.children[2].classList += ' slider__box--animation-right'
        activeEvent()
    }

    const animationHide = () => {
        console.log(chooseZIndex())
        sliderContainer.children[0].classList += ' slider__box--animation-left-to-mid' + chooseZIndex('left')
        sliderContainer.children[2].classList += ' slider__box--animation-right-to-mid' + chooseZIndex('right')
    }
    const chooseZIndex = (childPosition) => {
        return (thisPosition === childPosition) ? ' slider__box--z-index' : ''
    }
    const changeBoxContent = (indexSlideEl) => {
        console.log('4 step: Change content')
        boxHead = boxDescription[indexSlideEl].name
        boxImage = boxDescription[indexSlideEl].image
        boxRole = boxDescription[indexSlideEl].role
        boxContent = boxDescription[indexSlideEl].content
        return templateApp()
    }
    let boxDescription = [{ name: 'MONIKA KOWALSKA', image: 'girl-1', role: 'TEAM LEADER', content: ' beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.' },
        { name: 'AMELIA KOWALSKA', image: 'girl-2', role: 'MANAGER', content: ' Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.' },
        { name: 'MARTA KOWALSKA', image: 'girl-3', role: 'DEVELOPER', content: ' except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy.' },
        { name: 'WERONIKA KOWALSKA', image: 'girl-4', role: 'CODER', content: ' At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.' },
        { name: 'HALINA KOWALSKA', image: 'girl-5', role: 'SOFTWARE ENGINEER', content: '  Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod .' }
    ]

    let templateApp = () => {
        console.log('5 step: choose template')
        boxCode = `
       <div class="slider__box">
       <div class="box__half">
           <div class="slider__column">
               <div class="slider__icon slider__icon--normal slider__icon--to-top">
                   <div class="icon icon--filter icon--circle icon__avatar--${boxImage}"></div>
               </div>
           </div>
           <div class="slider__column">
               <h2 class="description__heading f-c-light-dark">
                   ${boxHead}<br> ${boxRole}
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
        return boxCode
    }


}
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function activeEvent() {
    await sleep(900)
    new Promise(
        () => {

            var cloneLeftBtn = leftButtonSlider.cloneNode(true)
            var cloneRightBtn = rightButtonSlider.cloneNode(true)
            leftButtonSlider.parentNode.replaceChild(cloneLeftBtn, leftButtonSlider)
            rightButtonSlider.parentNode.replaceChild(cloneRightBtn, rightButtonSlider)
            leftButtonSlider = document.querySelector('#leftSlide')
            rightButtonSlider = document.querySelector('#rightSlide')
            leftButtonSlider.addEventListener('click', function listener() {
                sliderGoTo('left', )
                leftButtonSlider.removeEventListener('click', listener, true)
                rightButtonSlider.removeEventListener('click', listener, true)
            }, true)


            rightButtonSlider.addEventListener('click', function listener() {
                sliderGoTo('right')
                rightButtonSlider.removeEventListener('click', listener, true)
                leftButtonSlider.removeEventListener('click', listener, true)
            }, true)



        }
    )
}
let sliderFunction = new slider()
sliderFunction.goToNext('', true)


const sliderGoTo = (orientation) => {
    sliderFunction.goToNext(orientation)
}