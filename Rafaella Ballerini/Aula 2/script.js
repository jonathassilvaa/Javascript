let tarefas = []
function adicionarTarefa() 
{

    
    const inputTarefa = document.getElementById("inputTarefa")

    let tarefa = inputTarefa.value.trim()
    const mensagem = document.getElementById("mensagem")

    if(tarefa == "") {
        let mensagemErro = "Erro!Digite uma tarefa"
        mensagem.textContent = mensagemErro
    }else{
        let mensagemSucesso = "Tarefa adicionada com sucesso!"
        mensagem.textContent = mensagemSucesso
        tarefas.push(tarefa)
        renderizarTarefas(tarefa)
      

    }
    console.log(tarefa)
    inputTarefa.value = ""
}

function renderizarTarefas(){
        const listaTarefas = document.getElementById("listaTarefas")
        listaTarefas.innerHTML = ""

        
        for(let i = 0;i < tarefas.length;i++){
            novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefas[i]

        let botaoRemover =document.createElement("button")
        botaoRemover.className = "remover"
        botaoRemover.textContent = "Remover"
        botaoRemover.onclick = () => removerTarefa(i)

        let botãoEditar =  document.createElement("button")
        botãoEditar.className = "editar"
        botãoEditar.textContent = "Editar"
        botãoEditar.onclick = () => editarTarefa(i)
        
        novaTarefa.appendChild(botãoEditar)
        novaTarefa.appendChild(botaoRemover)
        listaTarefas.appendChild(novaTarefa)
        }


        
}

function removerTarefa(i){
    tarefas.splice(i,1)
    renderizarTarefas()
}

function editarTarefa(i){
    
    let tarefaEditada = prompt("Edite a tarefa:")
    if(tarefaEditada.trim() != ""){
        tarefas[i] = tarefaEditada
        renderizarTarefas()
    }
}

function limparLista(){
    tarefas.length = 0
    renderizarTarefas()
}