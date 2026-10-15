<<<<<<< HEAD
/*Estrutura comdicional*/
/*
Programa que recebe valor da compra e calcula depois do desconto
Se a compra for maior de 100reais desconto de 5%
se maior que 500 desconto de 10%*/
var ttsemdes = 1000
var ttcomdes =0

if (ttsemdes <100){
    ttcomdes = ttsemdes
    console.log(ttcomdes)
}

else if(ttsemdes>=100 && ttsemdes <500){
    let desconto = ttsemdes * 0.05
    ttcomdes = ttsemdes - desconto
    console.log(ttcomdes)
}

else{
    let desconto = ttsemdes * 0.1
    ttcomdes = ttsemdes - desconto
    console.log(ttcomdes)
    
