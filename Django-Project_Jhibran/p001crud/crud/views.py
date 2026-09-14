from django.shortcuts import render, redirect
from .models import Task
from .forms import TaskForm

def task_list_and_created(request):
    if request.method == 'POST':
        form = TaskForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('crud:crud_list')
    else:
        form = TaskForm()
        complete_taks = Task.objects.filter(is_complete=True)
        incomplete_taks = Task.objects.filter(is_complete=False)
        
    return render(request, 'task_list.html', {
        'form' :form,
        'complete_taks' :complete_taks,
        'incomplete_taks' :incomplete_taks 
        
    })
