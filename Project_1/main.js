
//Contact Validation----------------------------
function validate(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("text").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 5){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 100){
      text = "Please Enter More Than 100 Characters";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }

// ------------------------------------------------

// rolling text-----------------------------------

async function init () {
    const node = document.querySelector("#type-text")
    
    await sleep(1000)
    node.innerText = ""
    await node.type('We  Capture, ')
    
    while (true) {
      await node.type('Movement!')
      await sleep(2000)
      await node.delete('Movement!')
      await node.type('Feeling!')
      await sleep(2000)
      await node.delete('Feeling!')
    }
  }
  
  
  // Source code 
  
  const sleep = time => new Promise(resolve => setTimeout(resolve, time))
  
  class TypeAsync extends HTMLSpanElement {
    get typeInterval () {
      const randomMs = 100 * Math.random()
      return randomMs < 50 ? 10 : randomMs
    }
    
    async type (text) {
      for (let character of text) {
        this.innerText += character
        await sleep(this.typeInterval)
      }
    }
    
    async delete (text) {
      for (let character of text) {
        this.innerText = this.innerText.slice(0, this.innerText.length -1)
        await sleep(this.typeInterval)
      }
    }
  }
  
  customElements.define('type-async', TypeAsync, { extends: 'span' })
  
  
  init()



// submit button-------------------

var btn = document.querySelector('.btn-sub');
var icon = document.querySelector('.far');
btn.addEventListener('click', function() {
  btn.textContent = "Subscribed";
  btn.style.background = '#e5e5e5';
  btn.style.color = '#606060';
  icon.style.display = 'block';
});

icon.addEventListener('click', function() {
  icon.style.pointerEvents = "none"; 
  icon.style.color = "#0374c4";
});