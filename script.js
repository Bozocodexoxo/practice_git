// Create an object person with a property name and a method greet that returns a greeting message using the name property.
let person={
    name:'Bharadwaj',
    greet:function(){
        return `Hello ${this.name}`}
}
console.log(person.greet())



// Create an object mathOperations with methods for addition (add),subtraction (subtract), multiplication (multiply), and division(divide).

let mathOperations={
    add:function(a,b){return a+b},
    subtract:function(a,b){return a-b},
    multiply:function(a,b){return a*b},
    divide:function(a,b){return a/b}
}

console.log('Addition of given numbers is:',mathOperations.add(1,2));
console.log('Subtraction of given numbers is:',mathOperations.subtract(1,2));
console.log('Multiplication of given numbers is:',mathOperations.multiply(1,2));
console.log('Division of given numbers is:',mathOperations.divide(1,2));




// Create an object car with properties make, model, and year. Add a method getCarInfo that returns a string describing the car.


let car={
    make:'Tata',
    model:'Nexon',
    year:2023,
    getCarInfo:function(){return ` Car details: \n\n Company: ${this.make} \n Model: ${this.model} \n Year of manufacture: ${this.year} `}
}

console.log(car.getCarInfo())




// Create a module mathUtils.js that exports a function add which takes two numbers and returns their sum. Then, create another file main.js that imports and uses this function.
              
               //  Please check in main.js and mathUtils.js file 


// Create a module mathUtils.js with multiple named exports for different mathematical operations (e.g., add, subtract, multiply, divide). Then, create a main.js file that imports the entire module as a namespace and uses the functions.
                //  Please check in main.js and mathUtils.js file 



// Create a web page with a paragraph element and a button. Write a JavaScript function that changes the text content of the paragraph when the button is clicked.

const changeTextContent=document.querySelector('.changeTextContent');

const paragragh=document.querySelector('.para-open');

changeTextContent.addEventListener('click',()=>{
    paragragh.textContent='Python is most trending language now.'
})





// Create a web page with a button that, when clicked, changes the background color of the page to a random color.

const bodyColour=document.querySelector('.body');
const changeButton=document.querySelector('.changeButton')

changeButton.addEventListener('click',()=>{
    let x = Math.floor((Math.random() * 255) + 1);
    let y = Math.floor((Math.random() * 255) + 1);
    let z = Math.floor((Math.random() * 255) + 1);
    bodyColour.style.backgroundColor='rgb(' + x + ',' + y + ',' + z + ')';
})






// Create a webpage with a login form, and check that all fields are filled up with data. Validate whether those are correct or not



const addBtn=document.querySelector('.createBtn');

let form=document.querySelector('.form');
let fullName=document.querySelector('.name');
let phoneNumber=document.querySelector('.contactNo');
let emailId=document.querySelector('.email');
let password=document.querySelector('.password')
let address=document.querySelector('.address');

addBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    let returnResponse='';

    let details={
        "full Name":fullName.value,
        "Phone Number":phoneNumber.value,
        "Email Id":emailId.value,
        "Password":password.value,
        "Address":address.value
    };
    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,}$/;
    
    for (let ele in details){
        if(details[ele]===''){
            returnResponse+=`${ele},`
        }
    }
    if(returnResponse!==''){
        return alert(`Please Enter: ${returnResponse} fields.It cannot be empty.`)
    }
    else if(details["full Name"].length<6){
        alert('Full Name should be of minimum 6 characters')
    }
    else if(details["Phone Number"].length!==10){
        alert('Phone number should be of exact 10 numbers')
    }
    else if(!emailPattern.test(details["Email Id"])){
        alert('Entered Email is InValid')
    }
    else if(!passwordPattern.test(details["Password"])){
        alert('Password is Invalid.\n At least 8 characters long\n Contains at least one uppercase letter\n Contains at least one lowercase letter\n Contains at least one digit\n Contains at least one special character (e.g., @, #, $, %, &, etc.)')
    }
    else if(details["Address"].length<10){
        alert('Address cannot be less than 10 characters')
    }
    else{
        console.log(`Full Name: ${details["full Name"]}, Phone Number: ${details["Phone Number"]}, Email Id: ${details["Email Id"]}, Address: ${details["Address"]}`); 
        alert('Form submitted successfully');
         

    }
})











// Create a webpage with the GET HTTP METHOD and show the content on webpage by using the below API: API : https://jsonplaceholder.typicode.com/photos

        // please check api.html and api.js 