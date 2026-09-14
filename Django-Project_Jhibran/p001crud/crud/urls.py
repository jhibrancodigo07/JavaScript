from django.urls import path
from .import views

app_name='crud'

urlpatterns = [
    path('', views.task_list_and_created, name='crud_list')
]
