"""userms URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from userms.user import views as user_views


urlpatterns = [
    path('user', user_views.UserCreateAPIView.as_view()),
    path('isloggedin/<str:username>', user_views.is_logged_in),
    path('getname/<str:username>', user_views.get_name),
    path('login', user_views.log_in),
    path('logout/<str:username>', user_views.log_out),
]
