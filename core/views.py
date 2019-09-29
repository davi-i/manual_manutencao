from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request, 'index.html')


def preventiva(request):
    return render(request, 'preventiva.html')


def corretiva(request):
    return render(request, 'corretiva.html')


def organizacao(request):
    return render(request, 'organizacao.html')
