from django.urls import path
from . import views

app_name = 'eth2web'

urlpatterns = [
    path('get_block', views.get_block, name='get_block'),
]