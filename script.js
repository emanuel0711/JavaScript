// Parte 1: Revisão dos Conceitos Básicos

// Exercício 1 - Variáveis e Funções
let nome = "Rodolfo";
const curso = "Front-End";

function boasVindas(nome, curso) {
    return `Bem-vindo, ${nome}! Você está no curso de ${curso}.`;
}

console.log(boasVindas(nome, curso));

// Exercício 2 - Soma com Função
function somaNumeros(a, b) {
    return a + b;
}

console.log("Soma de 5 e 7:", somaNumeros(5, 7));

// Parte 2: Eventos em JavaScript

// Exercício 3 - Alternar Visibilidade
const toggleBtn = document.getElementById('toggleBtn');
const toggleText = document.getElementById('toggleText');

toggleBtn.addEventListener('click', function() {
    if (toggleText.style.opacity === '0' || toggleText.style.opacity === '') {
        toggleText.style.opacity = '1';
    } else {
        toggleText.style.opacity = '0';
    }
});

// Exercício 4 - Mudança de Cor com Mouse
const colorBox = document.getElementById('colorBox');

colorBox.addEventListener('mouseover', function() {
    colorBox.style.backgroundColor = 'blue';
});

colorBox.addEventListener('mouseout', function() {
    colorBox.style.backgroundColor = '#ccc';
});

// Exercício 5 - Mostrar Texto ao Pressionar Tecla
const textInput = document.getElementById('textInput');
const textOutput = document.getElementById('textOutput');

textInput.addEventListener('keyup', function(event) {
    textOutput.textContent = event.target.value;
});

// Parte 3: Manipulação do DOM

// Exercício 6 - Lista de Tarefas
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', function() {
    if (taskInput.value.trim() !== '') {
        const newTask = document.createElement('li');
        newTask.textContent = taskInput.value;
        taskList.appendChild(newTask);
        taskInput.value = '';
    }
});

// Adicionar tarefa ao pressionar Enter
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTaskBtn.click();
    }
});

// Exercício 7 - Botão de Tema
const themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    // Mudar o texto do botão conforme o tema
    if (document.body.classList.contains('dark-mode')) {
        themeBtn.textContent = 'Tema Claro';
    } else {
        themeBtn.textContent = 'Tema Escuro';
    }
});