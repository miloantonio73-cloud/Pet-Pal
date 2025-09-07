
console.log("PetPal Cloud.js caricato correttamente!");

function aggiungiNota() {
    const lista = document.getElementById("lista-diario");
    const nuovaNota = document.createElement("li");
    nuovaNota.textContent = "Nuova nota aggiunta il " + new Date().toLocaleDateString() + " 🐶";
    lista.appendChild(nuovaNota);
}
