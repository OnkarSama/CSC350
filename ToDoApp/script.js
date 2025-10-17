const STORAGE_KEY = 'todo.tasks';

const newTaskInput = document.getElementById('newTaskInput');
const addBtn = document.getElementById('addBtn');

const taskList = document.getElementById('taskList');
const emptyState = document.getElementById('emptyState');
const stats = document.getElementById('stats');

const filters = document.getElementById('.filters');
const clearCompletedBtn = document.getElementById('clearCompletedTask');

let tasks = loadTasks();
let currentFilter = "All";

function loadTasks() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch(e) {
        console.error('Could not parse tasks from localStorage. ', e);
        return [];
    }
}

function saveTask() {

    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function uid(){

    return Date.now().toString(36) + Math.random().toString(36).slice(2,8);
}