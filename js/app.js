function getInputFild (podcta,price,eavens){
       const inputFild = document.getElementById(podcta + '_number');
       let inputText = inputFild.value;
    
       if(eavens){
        inputTotal = parseInt(inputText) + 1;
       }
        else if(inputText > 0){
        inputTotal = parseInt(inputText) - 1;
       }

       inputFild.value = inputTotal;

       const mainText = document.getElementById(podcta + '_total');
    
       mainText.innerText = inputTotal * price;


       CalcuterTotal();     

};


function getInput(areasd){
    const podcatnumber = document.getElementById(areasd + '_number');
    const podcatNnumberValu =parseInt(podcatnumber.value);
    return podcatNnumberValu;
}

function CalcuterTotal(){
    const phoneTotal = getInput('phone') * 1219;
    const caseTotal = getInput('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 5;
    const toatalPrice = subTotal + tax;
    document.getElementById('sub_total').innerText = subTotal;
    document.getElementById('tax_amount').innerText = tax;
    document.getElementById('total_price').innerText = toatalPrice;

}



document.getElementById('Chack_it').addEventListener('click',
function(){
  
        alert("Thank's For Pay.")
   
    

});









document.getElementById('case_plus').addEventListener('click', function(){      
    getInputFild('case',5, true)

});


document.getElementById('case_minus').addEventListener('click', 
function(){

    getInputFild('case',5, false);

});

document.getElementById('phone_plus').addEventListener('click', function(){      
    getInputFild('phone',1300, true)

});


document.getElementById('phone_minus').addEventListener('click', 
function(){

    getInputFild('phone',1300, false);

});