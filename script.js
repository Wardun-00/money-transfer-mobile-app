// Login button Functionality

document.getElementById('loginButton').addEventListener('click', function(e){
    e.preventDefault()
   
    const mobileNumber = 8687;
    const pinNumber = 8687;
// mobile number
    const mobileNumberValue = document.getElementById('mobile-number').value;

    const mobileNumberValueConverted = parseInt(mobileNumberValue);
    // console.log(mobileNumberValueConvert)

    // pin number

    const pinNumberValue = document.getElementById('pin-number').value;
    const pinNumberValueConverted = parseInt(pinNumberValue);

    // console.log(mobileNumberValueConverted, pinNumberValueConverted)

    // number and pin compare (number and pin match korle kaz hobe)

    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
        //next home page a jaowar jonno 
        window.location.href='./home.html';
    }
    else{
        //alert dibe vul hole
        alert('Invalid Credentials');
    }


})