# api/api.py
#este archivo contiene el endpoint de la API que recibe un JSON con el mensaje del usuario y devuelve la respuesta del agent, usado para el despliegue en Cloud Run e integración con el frontend.
import os
import uvicorn
from fastapi import FastAPI, Request, File, UploadFile, Depends
from fastapi.middleware.cors import CORSMiddleware
import shutil
from agent.main import process_message
from fastapi.responses import JSONResponse
from json.decoder import JSONDecodeError

app = FastAPI()

# Configurar CORS para permitir peticiones desde el frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # En producción, especifica tu dominio
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
async def health_check():
    """Endpoint para verificar que la API está funcionando"""
    return {"status": "ok", "message": "API funcionando correctamente"}

@app.post("/chat")
async def chat_endpoint(request: Request):
    """
    Endpoint que recibe un JSON con:
      {
        "user_id": "abc123",
        "message": "Hola"
      }
    y devuelve la respuesta del agente,
    a la vez que guarda el historial en MongoDB.
    """
    try:
        data = await request.json()
        user_id = data.get("user_id", "default_user")
        user_message = data.get("message", "")

        if not user_message.strip():
            return {"error": "El mensaje no puede estar vacío"}

        response = process_message(user_id, user_message)
        return {"response": response}
    except Exception as e:
        return {"error": f"Error procesando mensaje: {str(e)}"}


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8080))  # Usa el puerto 8080 para Cloud Run
    uvicorn.run(app, host="0.0.0.0", port=port)
