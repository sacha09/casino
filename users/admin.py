from django.contrib import admin
from .models import User

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'accept_conditions')
    list_filter = ('username', 'email', 'accept_conditions')
    search_fields = ('username', 'email', 'accept_conditions')
    ordering = ('username', 'email', 'accept_conditions')
