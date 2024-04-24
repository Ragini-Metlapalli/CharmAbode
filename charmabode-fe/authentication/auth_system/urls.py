from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth.views import LogoutView

app_name = 'authentication_app'

urlpatterns = [
    path('', views.start, name = 'start-page'),
    path('home/', views.home, name = 'home'),
    path('auth/', views.auth, name = 'auth'),
    # path('logout_user', views.logout_user,name = 'logout'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('contact/', views.contact, name='contact'),
    path('design/', views.design, name='design'),
    path('room/', views.room, name='room'),

] 
# ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)