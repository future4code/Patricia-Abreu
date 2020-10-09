function criarTarefa() {
    const novaTarefa = document.getElementById("tarefa")
    const diaSemana = document.getElementById("dias-semana").value
    const lista = document.getElementById(diaSemana)



    if(novaTarefa.value == ""){
        alert("Esta não é uma tarefa válida!")
    } else {
        lista.innerHTML += `<li class="item" onclick ="riscarTarefa(this)">${novaTarefa.value}</li>`
        novaTarefa.value =""
    }
}

function riscarTarefa(id){ 
    id.style.color = "red";
    id.style.textDecoration = "line-through";
}

/* function apagarTarefa(){
    const apagarLista = confirm("Tem certeza que deseja excluir esta tarefa?")
    const minhaLista = document.getElementsByClassName("tarefa")
    if (true){
    novatarefa.value ==""}
    else if (false)
    {
        return
        }
} */  incompleto