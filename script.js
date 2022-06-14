var tarefaInput = document.getElementById("tarefaInput");
var btnAdicionar = document.getElementById("btnAdicionar");
var containerTarefas = document.getElementById("container-tarefas");
function adicionarTarefa() {
  if (tarefaInput.value != "") {
    containerTarefas.innerHTML += "<li>" + tarefaInput.value + "</li>";
    tarefaInput.value = "";
  }
}

btnAdicionar.addEventListener("click", adicionarTarefa);
