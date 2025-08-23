//logOut section work

document.getElementById('logout').addEventListener('click', function(){
    window.location.href='./index.html'
})





//pin number valid

const validPin = 8687;


document.getElementById('add-money-btn').addEventListener

('click', function(e){
    //form a btn thakay jate loading na hoy 
     e.preventDefault()

     //  select bank
    const bank = document.getElementById('bank').value;
  
    //Account number
    const accountNumber = document.getElementById('account-number').value;
   
    // add amount
    const addAmount = parseInt(document.getElementById('add-amount').value);

    // clean the add amount text area
    addAmount.innerText = '';
    //add pin
    const addPin = parseInt(document.getElementById('add-pin').value
    )
    //all console
    // console.log(bank, accountNumber, addAmount, addPin)


    // available balance
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    console.log(availableBalance)
    
    //condition for account number == 11 digit
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