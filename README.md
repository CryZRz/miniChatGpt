# Mini ChatGPT

## Como arrancar el proyecto

1. Descargar o clonar el repositorio:
```bash
git clone https://github.com/CryZRz/miniChatGpt.git
cd miniChatGpt
```

2. Crear y activar entorno virtual:

Linux / macOS:
```bash
python3 -m venv .venv
source .venv/bin/activate
```

Windows:
```bash
python -m venv .venv
.venv\Scripts\activate
```

3. Instalar dependencias:
```bash
pip install -r requirements.txt
```

4. Colocar la clave de API en el archivo src/index.py:
```python
client = genai.Client(api_key="TU_API_KEY_AQUI")
```

5. Iniciar el servidor:
```bash
python src/index.py
```

6. Abrir en el navegador:
```
http://localhost:2002/index.html
```

## Estructura de carpetas

```text
miniChatGpt/
├── src/
│   ├── index.py
│   └── client/
│       ├── index.html
│       └── index.js
├── .gitignore
├── requirements.txt
└── README.md
```
