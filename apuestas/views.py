from django.shortcuts import render
from web3 import Web3

# Create your views here.

def index(request):
    
    block = 0

    if request.method == 'POST':
        if request.POST.get('block'):
            w3 = Web3(Web3.HTTPProvider("https://mainnet.infura.io/v3/0f8a9b2b6c7b4d4d9c8f4a4e4c4b4e4c"))
            block = w3.eth.blockNumber
            return render(request, 'index.html', {'block': block})
    
   
    return render(request, 'index.html', {'block': block})