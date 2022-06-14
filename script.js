var tarefaInput = document.getElementById("tarefaInput");
var btnAdicionar = document.getElementById("btnAdicionar");
var containerTarefas = document.getElementById("container-tarefas");
function adicionarTarefa() {
  if (tarefaInput.value != "") {
    containerTarefas.innerHTML +=
      "<li><label class='tarefaItem'><input type='checkbox' name='tarefaItem' class='tarefaCheck' /><span>" +
      tarefaInput.value +
      "</span></label></li>";
    tarefaInput.value = "";
  }
}

btnAdicionar.addEventListener("click", adicionarTarefa);
