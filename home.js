document.getElementById('add-money-btn').addEventListener('click', function(e){
    //form a btn thakay jate loading na hoy 
     e.preventDefault()

     //  select bank
    const bank = document.getElementById('bank').value;
  
    //Account number
    const accountNumber = document.getElementById('account-number').value;
   
    // add amount
    const addAmount = parseInt(document.getElementById('add-amount').value);

    //add pin
    const addPin = document.getElementById('add-pin').value;
    
    //all console
    // console.log(bank, accountNumber, addAmount, addPin)


    // available balance
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    console.log(availableBalance)
    

    // available balance + add amount

    const totalNewAvailableBalance = addAmount + availableBalance;
    console.log(totalNewAvailableBalance)

    //for available balance show

   
    document.getElementById('available-balance').innerText = totalNewAvailableBalance;
})