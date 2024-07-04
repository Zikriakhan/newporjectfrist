const qts = [{

    qt: 'Who is the prime minister of pakistan?',
    a: 'Imran Khan',
    b: 'Nawaz Shareef',
    c: 'Shahbaz Shareef',
    d: 'Bilo Jani',
    correct: 'Imran Khan'
},
{
   
    qt: 'What is CUSIT Stand for?',
    a: 'City University',
    b: 'Abaseen University',
    c: 'Sarhad University',
    d: 'Fast University',
    correct: 'City University'
},
{
   
    qt: 'CS Stand for',
    a: 'Computer Sources',
    b: 'Computer Sallybus',
    c: 'Computer Science',
    d: 'Computer System',
    correct: 'Computer Science'
},
]
const question = document.getElementById('question')
const a = document.getElementById('labelA')
const b = document.getElementById('labelB')
const c = document.getElementById('labelC')
const d = document.getElementById('labelD')
const aValue = document.getElementById('aValue');
const bValue = document.getElementById('bValue');
const cValue = document.getElementById('cValue');
const dValue = document.getElementById('dValue');

// console.log('bahar' + qts[0].a);
let index = 0;
function loadQuiz(){
    question.innerText = `Q# ${index + 1}: ${qts[index].qt}`;
    a.innerHTML = `<input type = "radio"   id="aValue" name = "option" value = "${qts[index].a}" /> ${qts[index].a}`;
    b.innerHTML = `<input type = "radio"   id="bValue" name = "option" value = "${qts[index].b}" /> ${qts[index].b}`;
    c.innerHTML = `<input type = "radio"   id="cValue" name = "option" value = "${qts[index].c}" />  ${qts[index].c}`;
    d.innerHTML = `<input type = "radio"   id="dValue" name = "option" value = "${qts[index].d}" /> ${qts[index].d}`;
    console.log(aValue.value);
}

loadQuiz() 
const btn = document.getElementById('next')
btn.addEventListener('click', () => {
  
    if(index === qts.length - 1){     
        alert('finish')
    }
    else{
        
        index = index + 1;
        question.innerText = `Q# ${index + 1}: ${qts[index].qt}`;
        a.innerHTML = `<input type = "radio"   id="aValue" name = "option" value = "${qts[index].a}" /> ${qts[index].a}`;
        b.innerHTML = `<input type = "radio"   id="bValue" name = "option" value = "${qts[index].b}" /> ${qts[index].b}`;
        c.innerHTML = `<input type = "radio"   id="cValue" name = "option" value = "${qts[index].c}" />  ${qts[index].c}`;
        d.innerHTML = `<input type = "radio"   id="dValue" name = "option" value = "${qts[index].d}" /> ${qts[index].d}`;
      
    }
})











