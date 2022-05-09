from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import User
# Register your models here.

class UserAdmin(UserAdmin):
    pass


admin.site.register(User, UserAdmin)
