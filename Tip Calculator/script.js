const bill = document.querySelector('.bill')
const tip = document.querySelector('.tip')

const btn = document.querySelector('.cal-btn')

const msg = document.querySelector('.msg')

btn.addEventListener('click', () => {
    let total = 0;
    
    if(bill.value){
        if(tip.value){
            total = (parseFloat(bill.value) * parseFloat(tip.value)) / 100
        }
        total += parseFloat(bill.value);
    }

    msg.innerHTML = `Total: <strong class="fs-4">${total.toFixed(2).toString()}</strong>`;
})
