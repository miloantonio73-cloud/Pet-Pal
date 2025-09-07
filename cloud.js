
console.log("PetPal Cloud.js caricato correttamente!");
alert("Benvenuto su PetPal!");

function aggiungiNota() {
    let lista = document.getElementById("lista-diario");
    let nuovaNota = prompt("Inserisci una nuova nota per il diario:");
    if (nuovaNota) {
        let li = document.createElement("li");
        li.textContent = nuovaNota;
        lista.appendChild(li);
    }
}
