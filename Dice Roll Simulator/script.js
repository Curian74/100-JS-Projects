let btn = document.querySelector('#roll')
let rollHistory = document.querySelector('#history')
let rollCount = 0
let dice = document.querySelector('#dice')

const getDiceImg = (num) => {
    switch (num) {
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default:
            return "";
    }
}

const rollDice = () => {
    rollCount++
    const number = Math.ceil(Math.random() * 6)
    return number;
}

const getOutput = () => {
    const number = rollDice();
    const code = getDiceImg(number);

    dice.classList.add('animate-spin')
    btn.disabled = true

    setTimeout(() => {
        dice.classList.remove('animate-spin');
        btn.disabled = false;
        dice.innerHTML = code;
        let entry = document.createElement('div')
        entry.className = 'bg-[#f2f2f2] mt-4 rounded-md shadow-md roll-history flex justify-between items-center px-3'
        entry.innerHTML = `<p class="text-2xl">Roll ${rollCount}:</p>
          <div class="dice text-4xl my-5 mx-1" id="dice">${code}</div>`;
        rollHistory.appendChild(entry)
    }, 1000)
}

btn.addEventListener('click', getOutput)

