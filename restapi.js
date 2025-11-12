// rest API

let usuarios = ["Ana", "Bruno", "Carlos"];

const lista = document.getElementById("lista-usuarios");
const btnGet = document.getElementById("btn-get");
const btnAdd = document.getElementById("btn-add");
const input = document.getElementById("novo-usuario");

// Mostrar usuários
btnGet.addEventListener("click", () => {
    lista.innerHTML = ""; // limpa lista
    usuarios.forEach(u => {
        const li = document.createElement("li");
        li.textContent = u;
        lista.appendChild(li);
    });
});

// Adicionar usuário
btnAdd.addEventListener("click", () => {
    const nome = input.value.trim();
    if(nome) {
        usuarios.push(nome);
        input.value = "";
        btnGet.click(); // atualiza lista
    }
});