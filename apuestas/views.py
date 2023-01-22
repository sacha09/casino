from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from web3 import Web3

# Create your views here.
@csrf_exempt
def index(request):

    block_number = 0
    block_hash = 0
    block_hash_decimal = 0
    wining_number = 0

    if request.method == 'POST':
        w3 = Web3(Web3.HTTPProvider("https://mainnet.infura.io/v3/4eba7008234f40a89cdce13658e41c7a"))
        block = w3.eth.getBlock("finalized")
        block_number = block.number
        block_hash = block.hash.hex() 
        block_hash_decimal = int(block_hash, 16)
        wining_number = str(block_hash_decimal)[-5:]
    
    context = {
        'block_number': block_number,
        'block_hash': block_hash,
        'block_hash_decimal': block_hash_decimal,
        'wining_number': wining_number,

    }
   
    return render(request, 'index.html', context)