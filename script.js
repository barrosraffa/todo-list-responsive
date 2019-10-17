let input = document.getElementById('input');
let button = document.getElementById('eventoClick');
let listaTarefas = document.getElementById('listaTarefas');


button.addEventListener("click", function(){
    if(input.value.length == 0){
        alert("Digite uma tarefa!")
        return(false) 
}

})
