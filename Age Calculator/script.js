var btn = document.querySelector('.caculate-btn')
var msg = document.querySelector('.msg-text')

btn.addEventListener('click', () => {
    var dob = document.querySelector('.inputDob')
    if(!isValidInput(dob.value)){
        alert('Please enter your birthday')
        return;
    }
    var age = calculateAge(dob.value);

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