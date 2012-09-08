from django.conf.urls.defaults import patterns, include, url
from piston.resource import Resource
from api.handlers import GrupoHandler, UsuarioHandler

grupo_resource = Resource(GrupoHandler)
usuario_resource = Resource(UsuarioHandler)

urlpatterns = patterns('',
	(r'^grupos/', grupo_resource),
	(r'^usuarios/', usuario_resource),
)