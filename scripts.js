const optionImages = document.querySelectorAll('.option-image')
const container = document.querySelector('.container')
const resultText = document.querySelector('.result-text')
const userResult = document.querySelector('.user-result img')
const computerResult = document.querySelector('.computer-result img')

const computerSrcImg = ['img/pedra.png', 'img/papel.png', 'img/tesoura.png']


const winner = {
    RR: 'Empate',
    RP: 'Computador',
    RS: 'Você',
    PP: 'Empate',
    PR: 'Você',
    PS: 'Computador',
    SS: 'Empate',
    SR: 'Computador',
    SP: 'Você',
}

function handleOptionClick(event) {
    const clickedImage = event.currentTarget
    const clickedIndex = Array.from(optionImages).indexOf(clickedImage)
    userResult.src = computerResult.src = computerSrcImg[0]
    container.classList.add('start')
    resultText.textContent = '...'



    setTimeout(() => {
        container.classList.remove('start')

        userResult.src =  computerSrcImg[clickedIndex]

        const randomNumber = Math.floor(Math.random() * 3)
        computerResult.src = computerSrcImg[randomNumber]

        const userValue = ['R', 'P', 'S'] [clickedIndex]
        const computerValue = ['R', 'P', 'S'] [randomNumber]
        const userComputerResult = userValue + computerValue
        const finalResult = winner [userComputerResult]



            resultText.textContent = userValue === computerValue ? 'Empate' : finalResult + ' Ganhou!'

    }, 2000);
}



optionImages.forEach(img => {
    img.addEventListener('click', handleOptionClick)
})