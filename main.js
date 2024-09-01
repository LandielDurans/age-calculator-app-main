const day = document.getElementById('day')
const month = document.getElementById('month')
const year = document.getElementById('year')
const form = document.getElementById('form')
const days = document.getElementById('days-span')
const months = document.getElementById('months-span')
const years = document.getElementById('years-span')
const button = document.getElementById('arrow-img')
const invalidDate = document.querySelectorAll('.invalidDate')
const invalidDay = document.getElementById('invalidDateDay')
const invalidMonth = document.getElementById('invalidDateMonth')
const invalidYear = document.getElementById('invalidDateYear')
const validLabel = document.querySelectorAll('label')

form.addEventListener('submit', addAge)
button.addEventListener('click', calculator)

function addAge(e) {
    e.preventDefault();
    console.log('Idadde adicionada')
}

function calculator() {
    const date = new Date()
    const ano = date.getFullYear()
    const mes = date.getMonth() + 1
    const dia = date.getDate()

    if (day.value === "" && month.value === "" && year.value === "") {
        validLabel.forEach(labels => {
            labels.style.color = 'red'
        })
    }

    if (day.value === "") {
        invalidDay.textContent = 'This field is required';
        day.style.border = '1px solid red';
    } else {
        invalidDay.textContent = '';
        day.style.border = '';
        validLabel.forEach(labels => {
            labels.style.color = 'hsl(0, 1%, 44%)'
        })
    }

    if (month.value === "") {
        invalidMonth.textContent = 'This field is required';
        month.style.border = '1px solid red';

    } else {
        invalidMonth.textContent = '';
        month.style.border = '';
    }

    if (year.value === "") {
        invalidYear.textContent = 'This field is required';
        year.style.border = '1px solid red';
        return
    } else {
        invalidYear.textContent = '';
        year.style.border = '';
    }

    if (month.value === '02' && day.value > 29) {
        invalidDay.textContent = 'Must be a valid date'
        day.style.border = '1px solid red'
        month.style.border = '1px solid red'
        year.style.border = '1px solid red'
        return;
    }


    if (day.value > 31 && month.value > 12 && year.value > ano) {
        invalidDay.textContent = 'Must be a valid day'
        invalidMonth.textContent = 'Must be a valid month'
        invalidYear.textContent = 'Must be in the past'
        day.style.border = '1px solid red'
        month.style.border = '1px solid red'
        year.style.border = '1px solid red'
        validLabel.forEach(labels => {
            labels.style.color = 'red'
        })
         return;
    }

    const mesesCom30Dias = ['04', '06', '09', '11']
    if (mesesCom30Dias.includes(month.value) && day.value > 30 || month.value > 12) {
        invalidDay.textContent = 'Must be a valid date'
        day.style.border = '1px solid red'
        month.style.border = '1px solid red'
        year.style.border = '1px solid red'
        validLabel.forEach(labels => {
            labels.style.color = 'red'
        })
        return;
    }

    let sumAno = ano - year.value

    let sumMes = mes - month.value
    if (sumMes < 0) {
        sumAno -= 1
        sumMes += 12
    }

    let sumDia = dia - day.value
    if (sumDia < 0) {
        sumMes -= 1
        const lastMonth = new Date(ano, mes - 1, 0)
        sumDia += lastMonth.getDate()
    }

    years.innerHTML = sumAno
    months.innerHTML = sumMes
    days.innerHTML = sumDia
    console.log(dia)
}