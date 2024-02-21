const submit = document.getElementById('submit');
const newTask = document.getElementById('task');

submit.disabled=true;

newTask.addEventListener('input', function()
{
    submit.disabled = false;
    
});

document.querySelector('form').addEventListener('submit',function(event)
{
    event.preventDefault();

    const submittedTask = newTask.value.trim();

    if (submittedTask !=='')
    {
        const listItem = document.createElement('li');
        listItem.textContent = submittedTask;
        document.getElementById('tasks').append(listItem);
        newTask.value ='';
        submit.disabled = true;
    }
    

    return false;
});













