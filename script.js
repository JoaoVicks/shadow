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


// -------------------------------------------------//
class BoxShadow {
    constructor(inputHorizontal, visuHorizontal, inputVertical, visuVertical, inputBlur, visuBlur, inputSpread, visuSpread) {
        this.inputHorizontal = inputHorizontal,
            this.visuHorizontal = visuHorizontal,
            this.inputVertical = inputVertical,
            this.visuVertical = visuVertical,
            this.inputBlur = inputBlur,
            this.visuBlur = visuBlur,
            this.inputSpread = inputSpread,
            this.visuSpread = visuSpread
    }
    inicializacao() {

        this.visuHorizontal.value = this.inputHorizontal.value
        this.visuVertical.value = this.inputVertical.value
        this.visuBlur.value = this.inputBlur.value
        this.visuSpread.value = this.inputSpread.value
    }

    Atualizacao(nmInput) {

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
        }
    this.AtualizacaoRules()
    }

    targetInputRange(e, input) {

        const valor = e.target.value
        input.style.background = `linear-gradient(to right,
            #9bf011 0%, #82CFD0 ${valor}%,
            #fff ${valor}%, #fff 100%)`;
    }

    AtualizacaoRules(){
        const horizontal = this.inputHorizontal.value;
        const vertical = this.inputVertical.value;
        const blur = this.inputBlur.value;
        const spread = this.inputSpread.value;

        spanBoxShadow.innerText= `${horizontal}px ${vertical}px ${blur}px ${spread}px`
        spanWebkitBoxShadow.innerText = `${horizontal}px ${vertical}px ${blur}px ${spread}px`
        spanMsBoxShadow.innerText = `${horizontal}px ${vertical}px ${blur}px ${spread}px`
        
        viewBox.style.boxShadow = `${horizontal}px ${vertical}px ${blur}px ${spread}px`;
    }
}
const box = new BoxShadow(inputHorizontal, visuHorizontal, inputVertical, visuVertical, inputBlur, visuBlur, inputSpread, visuSpread)

box.inicializacao()
// Eventos ------------------------------------------//
inputsRange.forEach((input) => {

    input.addEventListener('input', (e) => {

        box.targetInputRange(e, input)
        box.Atualizacao(input.name)

    })

})

