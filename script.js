// elementos --------------------------------------\\
const viewBox = document.querySelector('.box')

const inputsRange = document.querySelectorAll(`input[type="range"]`)

const inputHorizontal = document.querySelector('#iHorizontal')
const visuHorizontal = document.querySelector('#visualizacao-horizontal')

const inputVertical = document.querySelector('#iVertical')
const visuVertical = document.querySelector('#visualizacao-vertical')

const inputBlur = document.querySelector('#iBlur')
const visuBlur = document.querySelector('#visualizacao-blur')

const inputSpread = document.querySelector('#iSpread')
const visuSpread = document.querySelector('#visualizacao-spread')

const spanBoxShadow = document.querySelector('#box-shadow span')
const spanWebkitBoxShadow = document.querySelector('#-webkit-box-shadow span')
const spanMsBoxShadow = document.querySelector('#-ms-box-shadow span')

const inputColorShadow = document.querySelector('#iColorShadow')
const visuColorShadow = document.querySelector('#visualizacao-colorShadow')

const inputColorBox = document.querySelector('#iColorBox')
const visuColorBox = document.querySelector('#visualizacao-colorBox')

const inputsColor = document.querySelectorAll(`input[type="color"]`)

const visusInputsRange = document.querySelectorAll(`input[type="number"]`)

const visusInputsColor = document.querySelectorAll(`input[type="text"]`)
// -------------------------------------------------//
class BoxShadow {
    constructor(inputHorizontal, visuHorizontal, inputVertical, visuVertical, inputBlur, visuBlur, inputSpread, visuSpread, inputColorBox, visuColorBox, inputColorShadow, visuColorShadow) {
        this.inputHorizontal = inputHorizontal,
            this.visuHorizontal = visuHorizontal,

            this.inputVertical = inputVertical,
            this.visuVertical = visuVertical,

            this.inputBlur = inputBlur,
            this.visuBlur = visuBlur,

            this.inputSpread = inputSpread,
            this.visuSpread = visuSpread,

            this.inputColorShadow = inputColorShadow,
            this.visuColorShadow = visuColorShadow,

            this.inputColorBox = inputColorBox,
            this.visuColorBox = visuColorBox
    }

    inicializacao() {
        this.visuHorizontal.value = this.inputHorizontal.value
        this.visuVertical.value = this.inputVertical.value
        this.visuBlur.value = this.inputBlur.value
        this.visuSpread.value = this.inputSpread.value
    }

    Atualizacao(nmInput,idInputVisu = false) {

        if (nmInput !== false) {

            switch (nmInput) {
                case 'nmHorizontal':
                    this.visuHorizontal.value = this.inputHorizontal.value
                    break
                case 'nmVertical':
                    this.visuVertical.value = this.inputVertical.value
                    break
                case 'nmBlur':
                    this.visuBlur.value = this.inputBlur.value
                    break
                case 'nmSpread':
                    this.visuSpread.value = this.inputSpread.value
                    break
                case 'nmColorShadow':
                    this.visuColorShadow.value = this.inputColorShadow.value
                    break

                case 'nmColorBox':
                    this.visuColorBox.value = this.inputColorBox.value
                    break
            }
        }

      

        if (idInputVisu !== false) {
            switch (idInputVisu) {
                case 'visualizacao-horizontal':

                    this.inputHorizontal.value = this.visuHorizontal.value
                    this.targetInputRange(this.inputHorizontal.value, this.inputHorizontal)
                    break

                case 'visualizacao-vertical':
                    this.inputVertical.value = this.visuVertical.value
                    this.targetInputRange(this.inputVertical.value, this.inputVertical)
                    break

                case 'visualizacao-blur':
                    this.inputBlur.value = this.visuBlur.value
                    this.targetInputRange(this.inputBlur.value, this.inputBlur)
                    break

                case 'visualizacao-spread':
                    this.inputSpread.value = this.visuSpread.value
                    
                    this.targetInputRange(this.inputSpread.value, this.inputSpread)
                    break
                
                case 'visualizacao-colorShadow':

                    let valorVisuColorShadowUpdate
                    const valorVisuColorShadow = this.visuColorShadow.value;

                    if (valorVisuColorShadow.includes('#')) {
                        valorVisuColorShadowUpdate = valorVisuColorShadow.replace('#', '');
                    }

                    valorVisuColorShadowUpdate = valorVisuColorShadowUpdate.padStart(6,'0')
                    valorVisuColorShadowUpdate = '#'+valorVisuColorShadowUpdate
                    

                    this.inputColorShadow.value = valorVisuColorShadowUpdate;

                    break
                case 'visualizacao-colorBox':

                    let valorVisuColorBoxUpdate
                    const valorVisuColorBox = this.visuColorBox.value;

                    if (valorVisuColorBox.includes('#')) {
                        valorVisuColorBoxUpdate = valorVisuColorBox.replace('#', '');
                    }
                    valorVisuColorBoxUpdate = valorVisuColorBoxUpdate.padStart(6,'0')
                    valorVisuColorBoxUpdate = '#'+valorVisuColorBoxUpdate
                    

                    this.inputColorBox.value = valorVisuColorBoxUpdate
                    break
            }
        }

        this.AtualizacaoRules()
    }

    targetInputRange(valor, input) {
        
        input.style.background = `linear-gradient(to right,
            #9bf011 0%, #82CFD0 ${valor}%,
            #fff ${valor}%, #fff 100%)`;
    }

    AtualizacaoRules() {

        const horizontal = this.inputHorizontal.value;
        const vertical = this.inputVertical.value;
        const blur = this.inputBlur.value;
        const spread = this.inputSpread.value;
        const colorShadow = this.inputColorShadow.value
        const colorBox = this.inputColorBox.value

        viewBox.style.boxShadow = `${colorShadow} ${horizontal}px ${vertical}px ${blur}px ${spread}px`;
        viewBox.style.backgroundColor = colorBox

        spanBoxShadow.innerText = `${colorShadow} ${horizontal}px ${vertical}px ${blur}px ${spread}px`
        spanWebkitBoxShadow.innerText = `${colorShadow} ${horizontal}px ${vertical}px ${blur}px ${spread}px`
        spanMsBoxShadow.innerText = `${colorShadow} ${horizontal}px ${vertical}px ${blur}px ${spread}px`

    }
}
// Criação do objeto derivado da classe BoxShadow  --------------------------------------------------------

const box = new BoxShadow(
    inputHorizontal,
    visuHorizontal,
    inputVertical,
    visuVertical,
    inputBlur,
    visuBlur,
    inputSpread,
    visuSpread,
    inputColorBox,
    visuColorBox,
    inputColorShadow,
    visuColorShadow
)

box.inicializacao()

// Eventos ------------------------------------------//
inputsRange.forEach((input) => {
    input.addEventListener('input', (e) => {
        const valor = e.target.value
        box.targetInputRange(valor, input)
        box.Atualizacao(input.name)

    })
})

inputsColor.forEach((inputColor) => {

    inputColor.addEventListener('input', (e) => {
    
        box.Atualizacao(false, inputColor.name);
    });

})

visusInputsRange.forEach((visuRange) => {
    visuRange.addEventListener('input', (e) => {
        
        box.Atualizacao(false,visuRange.id)
    })
})

visusInputsColor.forEach((visuInputColor)=>{
    visuInputColor.addEventListener('input',()=>{
        box.Atualizacao(false,visuInputColor.id)
    })
})
