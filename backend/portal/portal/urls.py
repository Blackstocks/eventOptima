from django.contrib import admin
from django.urls import path, re_path
from django.conf.urls import include
from django.views.generic import TemplateView

urlpatterns = [
      path('admin/', admin.site.urls),

      #djoser
      path('auth/', include('djoser.urls')),
      path('auth/', include('djoser.urls.jwt')),
      path('auth/', include('djoser.urls.authtoken')),

      path('student/', include('student.urls')),
      path('summit/', include('summit.urls')),
]

# urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]