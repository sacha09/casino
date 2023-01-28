from django.shortcuts import render

# Create your views here.
def index(request):

    wallet = None
    if request.user.is_authenticated:
        try:
            wallet = request.user.ethereum_account.address
        except:
            pass

    
    context = {
       'wallet': wallet
    }
   
    return render(request, 'index.html', context)