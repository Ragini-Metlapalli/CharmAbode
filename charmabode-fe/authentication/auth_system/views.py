# from django.shortcuts import render, redirect
# from django.contrib.auth.models import User
# from django.contrib.auth import authenticate, login, logout
# from django.http import HttpResponse
# from django.contrib.auth.decorators import login_required
# from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
# from .forms import LoginForm, SignupForm


# # Create your views here.
# @login_required
# def HomePage(request):
#     return render(request, 'auth_system/index.html', {})

# # def Register(request):
# #      if request.method == 'POST':
# #         fname = request.POST.get('fname')
# #         lname = request.POST.get('sname')
# #         name = request.POST.get('uname')
# #         email = request.POST.get('email')
# #         password = request.POST.get('pass')

# #         new_user = User.objects.create_user(name, email, password)
# #         new_user.first_name = fname
# #         new_user.last_name = lname

# #         new_user.save()
# #         return redirect('login-page')
     
# #      return render(request, 'auth_system/register.html', {})

# # def Login(request):
# #     if request.method == 'POST':
# #         name = request.POST.get('uname')
# #         password = request.POST.get('pass')

# #         user = authenticate(request, username=name, password=password) 
# #         if user is not None:
# #             login(request, user)
# #             return redirect('home-page')
# #         else:
# #             return HttpResponse('Error, user does not exist')


# #     return render(request, 'auth_system/login.html', {})

# # def auth_view(request):
# #     if request.method == 'POST':
# #         if 'signup' in request.POST:
# #             form = UserCreationForm(request.POST)
# #             if form.is_valid():
# #                 user = form.save()
# #                 login(request, user)
# #         elif 'login' in request.POST:
# #             form = AuthenticationForm(data = request.POST)
# #             if form.is_valid():
# #                 user = form.get_user()
# #                 login(request, user)
# #                 return redirect('home-page')
# #     else:
# #         form_signup = UserCreationForm()
# #         form_login = AuthenticationForm()
# #     return render(request, 'auth_system/auth.html', {'form_signup': form_signup, 'form_login': form_login})


# # authentication_app/views.py

# def auth_view(request):
#     show_login_form = True  # You can determine this based on some condition
#     login_form = LoginForm()
#     signup_form = SignupForm()
    
#     context = {
#         'show_login_form': show_login_form,
#         'login_form': login_form,
#         'signup_form': signup_form,
#     }
    
#     return render(request, 'auth_system/auth.html', context)

# def login_view(request):
#     if request.method == 'POST':
#         # Process login form submission
#         pass
    
#     return render(request, 'auth_system/auth.html', {'show_login_form': True, 'login_form': login_form})

# def signup_view(request):
#     if request.method == 'POST':
#         # Process signup form submission
#         pass
    
#     return render(request, 'authentication_app/auth.html', {'show_login_form': False, 'signup_form': signup_form})



from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.contrib import messages
#@login_required 
def contact(request):
    return render(request, 'auth_system/contact.html', {})

def design(request):
    return render(request, 'auth_system/design.html', {})

def room(request):
    return render(request, 'auth_system/room.html', {})

def start(request):
    return render(request, 'auth_system/index.html', {})

def home(request):
    return render(request, 'auth_system/home.html', {})

def auth(request):
    error_message = None
    if request.method == 'POST':
        form_type = request.POST.get('form_type')  
        username = request.POST.get('username')
        password = request.POST.get('password')
        
        if form_type == 'signin':
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                #messages.success(request, 'Login successful. Welcome back {username}!')
                return render(request, 'auth_system/home.html', {})  # Redirect to your desired page after successful login
            else:
                error_message = "Invalid login credentials. Please try again."
                #messages.error(request, 'Invalid username or password. Please try again')
        
        elif form_type == 'signup':
            email = request.POST.get('email')
            password2 = request.POST.get('password2')
            if password == password2:
                if User.objects.filter(username=username).exists():
                    #messages.error(request, 'Username taken')
                    error_message = 'Username taken'
                    #return render(request, 'auth_system/auth.html')
                    #return redirect('auth')
                elif User.objects.filter(email=email).exists():
                    #messages.error(request, 'Email taken')
                    error_message = 'Email taken'
                    #return render(request, 'auth_system/auth.html')
                    #return redirect('auth')
                else:
                    user = User.objects.create_user(username, email, password)
                    user.save()
                    # You might want to log the user in automatically after registration
                    #login(request, user)
                    return render(request, 'auth_system/auth.html', {})  # Redirect to your desired page after successful signup
            else:
                #messages.error("An error occurred during registration. Please try again.")
                error_message = "Passwords do not match"
                #return redirect('auth')
        
    #else:
        #error_message = None  # To handle initial rendering without error message
    
    context = {
        'error_message': error_message,
    }
    
    return render(request, 'auth_system/auth.html', context)


# def logout_user(request):
#     logout(request)
#     return render(request, 'auth_system/auth.html', {})




# from django.shortcuts import render, redirect
# from django.contrib.auth import authenticate, login
# from django.contrib.auth.models import User
# from django.contrib.auth.decorators import login_required
# from django.contrib import messages
# @login_required 

# def start(request):
#     return render(request, 'auth_system/index.html', {})

# def HomePage(request):
#      return render(request, 'auth_system/home.html', {})

# def auth(request):
#     if request.method == 'POST':
#         form_type = request.POST.get('form_type')  # This will be 'signin' or 'signup'
#         username = request.POST.get('username')
#         password = request.POST.get('password')
        
#         if form_type == 'signin':
#             user = authenticate(request, username=username, password=password)
#             if user is not None:
#                 login(request, user)
#             #    messages.success(request, 'Login successful. Welcome back {username}!')
#                 return redirect('home-page')  # Redirect to your desired page after successful login
#             else:
#                 # Handle incorrect login credentials
#                 error_message = "Invalid login credentials. Please try again."
#             #    messages.error(request, 'Invalid username or password.')
        
#         elif form_type == 'signup':
#             email = request.POST.get('email')
#             password2 = request.POST.get('password2')
#             if password == password2:
#                 if User.objects.filter(username=username).exists():
#                     messages.info(request, 'Username taken')
#                     return render(request, 'auth_system/auth.html')
#                 elif User.objects.filter(email=email).exists():
#                     messages.info(request, 'Email taken')
#                     return render(request, 'auth_system/auth.html')
#                 else:
#                     user = User.objects.create_user(username, email, password, password2)
#                     user.save()
#                     # You might want to log the user in automatically after registration
#                     # login(request, user)
#                     return redirect('home-page')  # Redirect to your desired page after successful signup
#             else:
#                 error_message = "An error occurred during registration. Please try again."
#                 return redirect('auth')
        
#     else:
#         error_message = None  # To handle initial rendering without error message
    
#     context = {
#         'error_message': error_message,
#     }
    
#     return render(request, 'auth_system/auth.html', context)







