from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpResponseNotFound
from .models import *
from django.core.mail import EmailMessage
from .forms import *
from django.core.exceptions import ObjectDoesNotExist
from django.utils.translation import activate
from django.conf import settings


def index(request):

    return render(request, 'index.html')


