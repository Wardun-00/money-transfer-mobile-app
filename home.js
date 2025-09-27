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
document.getElementById('cashout-parent').style.display='none'
    document.getElementById('transfer-money-parent').style.display='none';
    document.getElementById('get-bonus-parent').style.display='none';
    document.getElementById('pay-bill-parent').style.display='none';
    document.getElementById('add-money-parent').style.display='block'


// ----------------------------------------------
//CashOut money Withdraw feature
// ----------------------------------------------
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
    document.getElementById('transfer-money-parent').style.display='none';
    document.getElementById('get-bonus-parent').style.display='none';
    document.getElementById('pay-bill-parent').style.display='none';
    document.getElementById('cashout-parent').style.display='block';
})


// ----------------------------------------------
//Transfer Money feature
// ----------------------------------------------
const validTransferPin = 8687;
document.getElementById('transfer-btn').addEventListener('click', function(e){
e.preventDefault();
    // Declare User Account Number Value
    const transferUserAccount = document.getElementById('user-account-num').value;

    //empty string after click to send button

    document.getElementById('user-account-num').value='';

    // Declare Transfer Amount
    const transferAmount = parseInt(document.getElementById('transfer-amount').value)

    //empty string after click to send button
    document.getElementById('transfer-amount').value='';

    //declare 4digit pin number
    const transferPin = parseInt(document.getElementById('transfer-pin').value)

    //empty string after click to send button
    
    document.getElementById('transfer-pin').value='';


    // console.log(transferUserAccount, transferAmount, transferPin);


    //condition part

    if(transferUserAccount.length < 8){
        alert('Please Enter Valid Account Number');
        return;
    }

    //condition for pin number
    if( transferPin !== validTransferPin ){
        alert('Please Enter Valid Pin');
        return;
    }
    else{
        alert('Transition Success')
    }



    
    //money (-) after transfer successful
    const transferAvailableBalance = parseInt(document.getElementById('available-balance').innerText)

    const transferNewBalance = transferAvailableBalance - transferAmount;

    
    document.getElementById('available-balance').innerText = transferNewBalance;

    
})


// Toggle Transfer Money section

document.getElementById('transfer-button').addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById('add-money-parent').style.display='none';
    document.getElementById('cashout-parent').style.display='none'
    document.getElementById('get-bonus-parent').style.display='none';
    document.getElementById('pay-bill-parent').style.display='none';
    document.getElementById('transfer-money-parent').style.display='block';
})



// ----------------------------------------------
// Get Bonus features
// ----------------------------------------------
const bonusCode = 'kumkum';
const bonusCode2 = '8687'; 
document.getElementById('get-bonus-btn').addEventListener('click', function(){
    const bonusCoupon = document.getElementById('bonus-coupon').value;

    if(bonusCoupon == bonusCode ){
        alert('Valobashi Apnake ')
        return;
    }
    else if(bonusCoupon == bonusCode2){
        alert('Congratulation You Win Something Secret')
    }
    else{
        alert('Wrong coupon')
    }
    


})

// Toggle Get Bonus section

document.getElementById('bonus-button').addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display='none';
    document.getElementById('cashout-parent').style.display='none';
    document.getElementById('transfer-money-parent').style.display= 'none';
    document.getElementById('pay-bill-parent').style.display='none';
    document.getElementById('get-bonus-parent').style.display='block';

})




// ----------------------------------------------
//Pay Money features
// ----------------------------------------------


const payPinNum = 8687;


document.getElementById('pay-money-btn').addEventListener('click', function(e){
    e.preventDefault();

    

    const billerAccount =document.getElementById('biller-account-number').value;

     //for empty after reloading 
      document.getElementById('biller-account-number').value ='';


    const payAccount =parseInt(document.getElementById('pay-amount').value)

    //for empty after reloading 
      document.getElementById('pay-amount').value ='';


    const addPayPin = parseInt(document.getElementById('add-pay-pin').value)

    //for empty after reloading 
      document.getElementById('add-pay-pin').value ='';

    //condition part for biller account 

    if(billerAccount.length < 8){
        alert('fake');
        return;
    }
    //for password
    if(addPayPin !== payPinNum){
        alert('wrong Password');
        return;
    }
    else{
        alert('Payment Successful')
    }





    //money (-) calculation available balance
    const availableBalanceForPay = parseInt(document.getElementById('available-balance').innerText)

    const totalNewBalanceAfterPay = availableBalanceForPay - payAccount

    document.getElementById('available-balance').innerText = totalNewBalanceAfterPay;


})

// Toggle Get Bonus section

document.getElementById('pay-bill-card').addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display = 'none';
    document.getElementById('cashout-parent').style.display = 'none';
    document.getElementById('transfer-money-parent').style.display = 'none';
    document.getElementById('get-bonus-parent').style.display = 'none';
    document.getElementById('pay-bill-parent').style.display = 'block';
});