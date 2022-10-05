var displayCal = document.querySelector('.cal_display');
var displayBtn = document.querySelector('.btn_controls').children ;

var icon = document.querySelector('#icon')
icon.addEventListener('click',() =>{
  document.body.classList.toggle("dark_theme");
})
var symbols = ['+','-','x','%','C','/','=']; //This allow us to get the available btn

let firstNum = "";
let secNum = "";
let symbol = "";  //This represent the fetching of the symbol
let result = "";
const calculate = () =>{
   firstNum = parseFloat(firstNum)
   secNum = parseFloat(secNum)
   if (symbol === '+') result = firstNum + secNum
   if (symbol === '-') result = firstNum - secNum
   if (symbol === 'x') result = firstNum * secNum
   if (symbol === '%') result = firstNum % secNum
   if (symbol === '/') result = firstNum / secNum
   displayCal.innerHTML = result
   firstNum = result
   secNum = ''

}

for(let btn of displayBtn){
    btn.addEventListener('click',()=>{
        const {innerText:btnVal} = btn
        var btnSymbols = symbols.includes(btnVal) // This get all available operators inside the button
      if(btnVal === 'C'){
        firstNum = ''
        secNum = ''
        symbol = ''
        return displayCal.innerText = ''
      }
      if(!secNum && btnVal === '=') return null // if the firstNum is clicked and not secval and the user clicked = it should return Null which means Empty
        if (firstNum && btnSymbols){  //if there is value in the firstVariableand the uder hit the symbol This allow us to udentify the symbol incase a user use -6 as firstnum so it can identify as firstnum
           secNum && calculate()  // here we call our calculate function
        // if(secNum){calculate()} or we also call it this way
            symbol = btnVal
        }
        else if(!symbol) firstNum += btnVal // if equation is not starting with an operators
        else if(symbol) secNum += btnVal     // you put the firstNum and the operator so the next num go to secNum
        if(btnVal !== '=') displayCal.innerText += btnVal
    })
}


