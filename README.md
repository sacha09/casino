# casino
 online casino


## Instalación

Crea un entorno virtual
```
python -m venv .venv
```

Instala los requisitos
```
pip install -r requirements.txt
```

Si tienes Python 3.9 o superior realiza la siguiente modificación:
1 Abre el documento en .venv/lib64/python3.XX/site-packages/parsimonious/expressions.py
2 Cambia la linea 9 de 
```
from inspect import getargspec
```
a
```
from inspect import getfullargspec
```