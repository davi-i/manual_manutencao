from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request, 'index.html')


def preventiva(request):
    return render(request, 'preventiva.html', {'titulo': 'Manutenção preventiva'})


def corretiva(request):
    return render(request, 'corretiva.html', {'titulo': 'Manutenção corretiva'})


def organizacao(request):
    return render(request, 'organizacao.html', {'titulo': 'Organização'})
