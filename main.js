
const form = document.getElementById("formCompra");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    /* Pegar o valor da compra*/
    let ttsemdes = Number(document.getElementById("valor").value);
    let desconto = 0;

    
    if (ttsemdes < 50) {
        desconto = 0;
    } 
    else if (ttsemdes > 1000) {
        desconto = ttsemdes * 0.10;
    } 
    else {
        desconto = ttsemdes * 0.05;
    }

    /* Calcular o total com desconto*/
    let ttcomdes = ttsemdes - desconto;

   /* Mostrar o valor do desconto*/
    document.getElementById("desconto").value =
        desconto.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

    /* Mostrar o total com desconto*/

    document.getElementById("total").value =
        ttcomdes.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

    console.log("Valor da compra:", ttsemdes);
    console.log("Valor do desconto:", desconto);
    console.log("Valor com desconto:", ttcomdes);
});
