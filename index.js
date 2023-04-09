function calctip(e){
    e.preventDefault();
    
    let bill = document.querySelector(".input-box").value;
    let tippercent = document.querySelector("#tip").value/100;
    let People = document.querySelector("#people").value;
    let myScore = document.querySelector("#score");

    tipCalc = (bill * tippercent) / People;

    let hhh = document.querySelector(".result");

     myScore.style.display = "block";

    const tipAmount = Math.ceil(tipCalc);
    let outputResp = "N" + tipAmount;

    if (People > 1){
         outputResp +=" each";
    }
    hhh.innerHTML = outputResp;
}
    let myBtn = document.querySelector(".btn-btn");
    myBtn.addEventListener("click", calctip);