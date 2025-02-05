from django.shortcuts import render

# Create your views here.
def user_input(request):
    return render(request, 'user_input.html')