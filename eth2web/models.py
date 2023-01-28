from django.db import models
from django.conf import settings
from django.utils import timezone


class EthereumAccount(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.DO_NOTHING, related_name='ethereum_account' )
    address = models.CharField(max_length=42, primary_key=True)
    keystore = models.TextField()
    balance = models.DecimalField(max_digits=20, decimal_places=8, default=0)

    def __str__(self):
        return f" {self.address}"

    class Meta:
        verbose_name = 'Ethereum Account'
        verbose_name_plural = 'Ethereum Accounts'

class EthereumBlock(models.Model):
    number = models.IntegerField(primary_key=True)
    timestamp = models.CharField(max_length=25)
    hash = models.CharField(max_length=125)
    hash_decimal = models.CharField(max_length=255)
    wining_number = models.CharField(max_length=5)
    registered = models.DateTimeField(default=timezone.now, editable=False)

    def __str__(self):
        return f" {self.blockNumber}"

    class Meta:
        verbose_name = 'Ethereum Block'
        verbose_name_plural = 'Ethereum Blocks'