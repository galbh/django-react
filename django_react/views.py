from django.shortcuts import render_to_response
from django.contrib.auth.decorators import login_required


@login_required()
def core_index(request):
    return render_to_response('core/index.html')

