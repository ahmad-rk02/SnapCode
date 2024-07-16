document.addEventListener('DOMContentLoaded', function() {
    var readMoreBtn = document.getElementById('read-more-btn');
    var additionalContent = document.querySelector('.additional-content');

    readMoreBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (additionalContent.style.display === 'none') {
            additionalContent.style.display = 'inline'; // Show additional content
            readMoreBtn.textContent = 'Read less'; // Change button text
        } else {
            additionalContent.style.display = 'none'; // Hide additional content
            readMoreBtn.textContent = 'Read more'; // Change button text
        }
    });
});
window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    header.classList.toggle('sticky'.window.scrollY > 0)
})

// responsive navbar

function toggleMenu(){
    const toggleMenu =document.querySelector('.toggleMenu');
    const nav=document.querySelector('.nav');
    toggleMenu.classList.toggle('active')
    nav.classList.toggle('active')
}
// scrolling animation effects
window/addEventListener('scroll',function(){
    var anime=this.document.querySelectorAll('.animeX');

    for(var s=0;s<anime.length;s++){
        var  windowheight=this.window.innerHeight;
        var animetop=anime[s].getBoundingClientRect().top;
        var animepoint=150;

        if(animetop< windowheight - animepoint){
            anime[s].classList.add('active');
        }
        else{
            anime[s].classList.remove('active');
        }
    }
})
// filter cards
let list=document.querySelectorAll('.list');
let card=document.querySelectorAll('card');

for(let i=0;i<list.length; i++)
{
    list[i].addEventListener('click',function(){
        for(let j=0;j<list.length;j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter=this.getAttribute('data-filter');

        for (let k = 0; k < card.length; k++) {
            card[k].classList.remove('active');
            card[k].classList.add('hide');

            if (card[k].getAttribute('data-item')==dataFilter || dataFilter=='all') 
            {
                card[k].classList.remove('hide');
                card[k].classList.add('active');
            }
            
        }
    })
}

// contact
function submitForm() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");
    var messageInput = document.getElementById("message");

    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var phone = phoneInput.value.trim();
    var message = messageInput.value.trim();

    if (name === "") {
        alert("Please enter your name.");
        nameInput.focus();
        return;
    }

    if (email === "") {
        alert("Please enter your email.");
        emailInput.focus();
        return;
    } else if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        emailInput.focus();
        return;
    }

    if (message === "") {
        alert("Please enter your message.");
        messageInput.focus();
        return;
    }

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Message:", message);

    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    messageInput.value = "";

    alert("Form submitted successfully!");
}
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}



