// ================= AOS =================

AOS.init({
    duration:1000,
    once:true
});


// ================= MOBILE MENU =================

const hamburger =
document.getElementById("hamburger");

const navLinks =
document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// ================= COUNTER ANIMATION =================

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target =
        +counter.getAttribute("data-target");

        const current =
        +counter.innerText;

        const increment = target / 100;

        if(current < target){

            counter.innerText =
            `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 20);

        }else{
            counter.innerText = target + "+";
        }

    };

    updateCounter();

});