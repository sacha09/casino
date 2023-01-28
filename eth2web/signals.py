from django.db.models.signals import post_save
from django.dispatch import receiver
from web3 import Web3
from django.conf import settings
from .models import EthereumAccount

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_eth_wallet(sender, instance, created, **kwargs):
    if created:
        w3 = Web3(Web3.HTTPProvider("https://mainnet.infura.io/v3/4eba7008234f40a89cdce13658e41c7a"))
        password = settings.ETH_PASSWORD
        new_wallet = w3.eth.account.create(password)
        keystore = new_wallet.encrypt(password)
        EthereumAccount.objects.create(user=instance, address=new_wallet.address, keystore=keystore)