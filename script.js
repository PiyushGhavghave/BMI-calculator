
const form = document.querySelector("form")

const message = document.querySelector("#msg")
const ht = document.querySelector("#height");
const wt = document.querySelector("#weight");
const fields = document.querySelectorAll(".fields");


form.addEventListener('submit',function(e){
  e.preventDefault()
  const height = parseInt(ht.value)
  const weight = parseInt(wt.value)

  //Calculations
  if((isNaN(height) && isNaN(weight)) || (height <= 0 && weight <=0) || (height === '' && weight === '')){
    msg.innerHTML = "Please provide valid input";
  }
  else if(isNaN(height) || height <= 0 || height === ''){
    msg.innerHTML = "Please provide valid height";
  }
  else if(isNaN(weight) || weight <= 0 || weight === ''){
    msg.innerHTML = "Please provide valid weight";
  }
  else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    display(bmi);
  }
})

fields.forEach( (field,i) => {
  field.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
      e.preventDefault();  //prevent default behaviour
      const next = fields[i+1];
      if(next){
        next.focus();
      }
      else{
        form.requestSubmit();
        fields[0].focus();
      }
    }
  })
})




function display(bmi){
  if(bmi < 18.5){
    message.innerHTML = `Your BMI is <span id= "bmi">${bmi}</span> and you are in <span>Underweight</span> Category for adults of your height`

  }
  else if(bmi <= 24.9){
    message.innerHTML = `Your BMI is <span id= "bmi">${bmi}</span> and you are in <span>Normal</span> Category for adults of your height`

  }
  else{
    message.innerHTML = `Your BMI is <span id= "bmi">${bmi}</span> and you are in <span> Overweight</span> Category for adults of your height`
  }
}
