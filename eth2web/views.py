from django.shortcuts import render
from web3 import Web3
from .models import EthereumBlock

def get_block(request):
    w3 = Web3(Web3.HTTPProvider("https://mainnet.infura.io/v3/4eba7008234f40a89cdce13658e41c7a"))
    block = w3.eth.getBlock("finalized")
    block_number = block.number
    block_timestamp = block.timestamp
    block_hash = block.hash.hex() 
    block_hash_decimal = int(block_hash, 16)
    wining_number = str(block_hash_decimal)[-5:]

    context = {
        'block_number': block_number,
        'block_hash': block_hash,
        'block_hash_decimal': block_hash_decimal,
        'wining_number': wining_number,

    }

    if EthereumBlock.objects.filter(number=block_number).exists():
        return render(request, 'partials/_block.html', context)

    EthereumBlock.objects.create(
        number=int(block_number),
        timestamp=str(block_timestamp),
        hash=str(block_hash),
        hash_decimal=str(block_hash_decimal),
        wining_number=str(wining_number)
        )


    return render(request, 'partials/_block.html', context)