const num = document.querySelectorAll("li")
const submit = document.querySelector(".submit")
const rating = document.getElementById("rate");
const article = document.querySelector("article");
const thanks = document.querySelector("main.hidden")

let rate = null;

for (let i = 0; i < num.length; i++) {
    console.log('am in');
    num[i].addEventListener(`click`, function(e){
       
        for(let i=0; i<num.length; i++){
            num[i].classList.remove("checked");
        }

        const active = e.target
        const checked = active.classList.contains('checked')
        console.log(checked);
        
        if(checked){
            active.classList.remove("checked");
            active.classList.add("base");
        }
        else{
            active.classList.remove("base");
            active.classList.add("checked");

        }
        rate = e.target.textContent;
    });
};

submit.addEventListener("click", function() {
    if(rate){
        rating.textContent = rate;
        article.classList.add("hidden");
        thanks.classList.remove("hidden")
    }
});