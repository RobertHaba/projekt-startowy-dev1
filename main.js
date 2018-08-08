let indexSlide = 3;

function slider(orientation) {
    let sliderContainer, boxHead, boxRole, boxContent, indexSlideFirst, indexSlideLast
    sliderContainer = document.querySelector('#slider-testimonials')
    console.log('First run')
    this.loadIndex = (orientation) => {
        console.log('___1 step: Number load')
        indexSlide = (orientation === 'left') ? indexSlide - 1 : indexSlide + 1
        if (indexSlide < 0) {
            indexSlide = 4
        } else if (indexSlide > 4) {
            indexSlide = 0
        }
        indexSlideFirst = (indexSlide - 1 >= 0 && indexSlide - 1 <= 4) ? indexSlide - 1 : 4
        indexSlideLast = (indexSlide + 1 >= 0 && indexSlide + 1 <= 4) ? indexSlide + 1 : 0
        removeBoxs()
    }
    const removeBoxs = (boxElement) => {
        console.log('2 step: Remove')
        sliderContainer.innerHTML = '';
        addBoxs(indexSlide)
    }
    const addBoxs = (indexSlide) => {
        console.log('3 step: Add')
        sliderContainer.innerHTML += changeContent(indexSlideFirst) + changeContent(indexSlide) + changeContent(indexSlideLast)
        animationInMiddleBox()
    }
    const animationInMiddleBox = () => {
        console.log(sliderContainer.children)
        sliderContainer.children[1].classList += ' animation--move-up-down'
    }

    const changeContent = (indexSlideEl) => {
        console.log('4 step: Change content')
        boxHead = BoxDescription[indexSlideEl].name
        boxRole = BoxDescription[indexSlideEl].role
        boxContent = BoxDescription[indexSlideEl].content
        return templateApp('boxCode')
    }
    let BoxDescription = [{ name: 'MONIKA KOWALSKA', role: 'TEAM LEADER', content: ' beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.' },
        { name: 'AMELIA KOWALSKA', role: 'MANAGER', content: ' Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.' },
        { name: 'MARTA KOWALSKA', role: 'DEVELOPER', content: ' except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy.' },
        { name: 'WERONIKA KOWALSKA', role: 'CODER', content: ' At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.' },
        { name: 'HALINA KOWALSKA', role: 'SOFTWARE ENGINEER', content: '  Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod .' }
    ]

    let templateApp = (templateName) => {
        console.log('5 step: choose template')
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
        if (templateName === 'boxCode') {
            return boxCode
        }

    }


}


let sliderFunction = new slider()
sliderFunction.loadIndex()
const leftButtonSlider = document.querySelector('#leftSlide')
const rightButtonSlider = document.querySelector('#rightSlide')
leftButtonSlider.addEventListener('click', () => {
    sliderFunction.loadIndex('left')
})
rightButtonSlider.addEventListener('click', () => {
    sliderFunction.loadIndex('right')
})