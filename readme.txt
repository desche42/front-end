Este proyecto contiene todo lo que voy haciendo en la formación de Front-End de la mano de Ibertech para la oferta de empleo para INDRA. La formación viene de la mano de Vladimir Ballester, comenzando el día 24 de enero de 2018 y se planea acabar sobre el 14 de febrero de 2018. 

El proyecto está dividido en carpetas:

	# ws_profesor: contiene los ficheros de mano del profesor
	# ws: contiene mis ficheros, el trabajo que yo realizo

El proyecto lo gestiono con GIT, en principio solo tiene una rama:
	# Branch master: rama actualizada

-------------------------   RAMAS  ---------------------------------

ELIMINAR RAMA REMOTA

$ git push -d <remote_name> <branch_name>
$ git branch -d <branch_name>
<remote_name> = origin // generalmente

CREAR RAMA REMOTA Y LOCAL 

git push <remote-name> <local-branch-name>:<remote-branch-name>

is enough for pushing a local branch.

------------------------  SUBMÓDULOS   -----------------------------


AÑADIR SUBMÓDULO

 git submodule add <url> <directorio>


ACTUALIZAR SUBMÓDULOS 

git submodule update --remote  // esto solo actualiza al último commit?

// actualizar y descargar todos los submódulos 

git submodule foreach git pull origin master
