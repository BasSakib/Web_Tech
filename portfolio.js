// Highlight active navigation

const page = window.location.pathname.split("/").pop();

const links = document.querySelectorAll("nav a");

links.forEach(link => {

if(link.getAttribute("href") === page){
link.style.color = "#60a5fa";
}

});


// Contact form validation

const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit",function(e){

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const subject = document.getElementById("subject").value;
const message = document.getElementById("message").value;

if(name==="" || email==="" || subject==="" || message===""){

alert("Please fill all fields");
e.preventDefault();

}else{

alert("Message sent successfully!");

}

});

}