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

    Atualizacao(nmInput, nmInputColor = false) {

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

            }
        }

        if (nmInputColor !== false) {
            switch (nmInputColor) {
                case 'nmColorShadow':
                    this.visuColorShadow.value = this.inputColorShadow.value
                    break

                case 'nmColorBox':
                    this.visuColorBox.value = this.inputColorBox.value
                    break
            }
        }



        this.AtualizacaoRules()
    }

    targetInputRange(e, input) {

        const valor = e.target.value
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
// Criação do objeto derivado da classe BoxShadow --------------------------------------------------------

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

        box.targetInputRange(e, input)
        box.Atualizacao(input.name)

    })

})
inputsColor.forEach((inputColor) => {

    inputColor.addEventListener('input', (e) => {

        box.Atualizacao(false, inputColor.name);
    });
    // Aqui estava faltando um parêntese para fechar a função de callback

}

)




