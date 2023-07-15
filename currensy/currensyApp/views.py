from django.shortcuts import render

# Create your views here.
def currensyView(request):
    return render(request, "index.html")