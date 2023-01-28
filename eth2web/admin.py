from django.contrib import admin
from .models import EthereumAccount, EthereumBlock

@admin.register(EthereumAccount)
class EthereumAccountAdmin(admin.ModelAdmin):
    list_display = ('user', 'address', 'balance')
    list_filter = ('user', 'balance')
    search_fields = ('user', 'address', 'balance')
    ordering = ('user', 'address', 'balance')

@admin.register(EthereumBlock)
class EthereumBlockAdmin(admin.ModelAdmin):
    list_display = ('number', 'wining_number', 'registered')
    list_filter = ('number', 'wining_number',)
    search_fields = ('number', 'hash', 'hash_decimal', 'wining_number', 'registered')
    ordering = ('-registered',)