document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const taskText = e.target.value.trim();
        
        if (taskText !== '') {
            addTask(taskText);
            e.target.value = '';
        }
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('taskList');
    
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });
    
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);
}
