//logOut section work

document.getElementById('logout').addEventListener('click', function(){
    window.location.href='./index.html'
})





//pin number valid

const validPin = 8687;

//Add money btn

document.getElementById('add-money-btn').addEventListener

('click', function(e){
    //form a btn thakay jate loading na hoy 
     e.preventDefault()

     //  select bank
    const bank = document.getElementById('bank').value;
  
    //Account number
    const accountNumber = document.getElementById('account-number').value;

    //clean Account number after submit
    document.getElementById('account-number').value='';
   
    // add amount
    const addAmount = parseInt(document.getElementById('add-amount').value);

    // clean the add amount text area(empty string)
    document.getElementById('add-amount').value='';
    
    
    //add pin
    const addPin = parseInt(document.getElementById('add-pin').value
    )

    //empty input field after submit
    document.getElementById('add-pin').value='';

    //all console
    // console.log(bank, accountNumber, addAmount, addPin)


    // available balance
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    console.log(availableBalance)
    
    //condition for account number == 8 digit
    if(accountNumber.length < 8){
        alert('please provide valid account number ')
        return;
    }
    

    // pin number validation check
    if(addPin !== validPin){
        alert('Please provide valid pin code')
        return;
    }
    else{
        alert('Congratulation To Successfully Add Money')
    }


    // available balance + add amount

    const totalNewAvailableBalance = addAmount + availableBalance;
    console.log(totalNewAvailableBalance)

    //for available balance show

   
    document.getElementById('available-balance').innerText = totalNewAvailableBalance;



})


// ----------------------------------------------
//toggling feature
//-----------------------------------------------
//toggle for add money
document.getElementById('add-button').addEventListener('click', function(){
    document.getElementById('cashout-parent').style.display='none'
    document.getElementById('add-money-parent').style.display='block'
})



//CashOut money Withdraw feature
const pinNum = 8687;

document.getElementById('withdraw-btn').addEventListener('click', function(e){
    e.preventDefault()
    //agent number
    const agentNumbers =document.getElementById('agent-number').value;
    
    //clean after click withdraw btn
    document.getElementById('agent-number').value='';


// amount
   const withdrawAmount = parseInt(document.getElementById('withdraw-amount').value);

   //clean after click withdraw btn
    document.getElementById('withdraw-amount').value ='';

//available balance
   const availableBalances = parseInt(document.getElementById('available-balance').innerText);

//    console.log(withdrawAmount, availableBalances)

//pin number
    const confirmPin = parseInt( document.getElementById('withdraw-pin').value)

    //clean after click withdraw btn
    document.getElementById('withdraw-pin').value='';



    
//agent Number Authentication

if(agentNumbers.length < 8){
    alert('Please Enter Valid Agent Number')
    return;
}


//pin number authentication


if(confirmPin !== pinNum){
    alert('Please Enter Valid Pin')
    return;
}
else{
    alert('complete')
 
}


const newBalance = availableBalances - withdrawAmount;
// console.log(newBalance);

document.getElementById('available-balance').innerText = newBalance;


})








//toggle for cashOut

document.getElementById('Cashout-Button').addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display='none'
    document.getElementById('cashout-parent').style.display='block';
})



