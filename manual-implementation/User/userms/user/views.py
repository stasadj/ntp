from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import RetrieveUpdateDestroyAPIView, CreateAPIView
from .models import User
from .serializers import UserSerializer


# Create your views here.
class UserRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserCreateAPIView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


@api_view(http_method_names=['GET'])
def is_logged_in(request, username):
    return Response(User.is_logged_in(username))


@api_view(http_method_names=['GET'])
def get_name(request, username):
    return Response(User.get_name(username))


@api_view(http_method_names=['POST'])
def log_in(request):
    return Response(User.log_in(request))


@api_view(http_method_names=['GET'])
def log_out(request, username):
    return Response(User.log_out(username))
