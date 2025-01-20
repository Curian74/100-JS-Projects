const btn = document.querySelector('.caculate-btn')
const msg = document.querySelector('.msg-text')

btn.addEventListener('click', () => {
    const dob = document.querySelector('.inputDob')
    if(!isValidInput(dob.value)){
        alert('Please enter your birthday')
        return;
    }
    const age = calculateAge(dob.value);

    msg.textContent = `Your age is ${age} years old`;
})

const calculateAge = (dob) => {
    var today = new Date()
    var dobDate = new Date(dob)

    var age = today.getFullYear() - dobDate.getFullYear();
    var monthDif = today.getMonth() - dobDate.getMonth();

    if(monthDif < 0 || (monthDif === 0 && today.getDate() < dob.getDate())){
        age--;
    }

    return age;
    
}

const isValidInput = (dob) => {
    if(!dob) return false;
    return true;
}