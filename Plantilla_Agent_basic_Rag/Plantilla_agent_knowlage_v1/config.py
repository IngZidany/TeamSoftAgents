# Este archivo contiene la configuración de la base de datos y las credenciales de la API de Google.
# Las credenciales se cargan desde variables de entorno definidas en el archivo .env
# Asegúrate de no compartir el archivo .env públicamente, ya que contiene información sensible.

# Asegúrate de ejecutar python config.py para verificar que la conexión a la base de datos es correcta antes de ejecutar el resto del código.
import os
from pymongo import MongoClient
from dotenv import load_dotenv

# Cargar variables de entorno desde el archivo .env
load_dotenv()

# Obtener credenciales desde variables de entorno
MONGO_URI = os.getenv("MONGO_URI")
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")

# Verificar que las variables de entorno estén definidas
if not MONGO_URI:
    raise ValueError("MONGO_URI no está definida en las variables de entorno. Verifica tu archivo .env")
if not GOOGLE_API_KEY:
    raise ValueError("GOOGLE_API_KEY no está definida en las variables de entorno. Verifica tu archivo .env")

client = MongoClient(MONGO_URI)
try:
    client.admin.command('ping')
    print("✅ Conexión exitosa a MongoDB")
except Exception as e:
    print("❌ Error conectando a MongoDB:", e)