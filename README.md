# **Node.js Twilio SMS API**

Este proyecto es una API simple en Node.js que utiliza **Twilio** para enviar mensajes de texto a través de la red de Twilio.

## **Requisitos previos**

Antes de comenzar, asegúrate de tener los siguientes elementos:

- [Node.js](https://nodejs.org/) instalado en tu máquina.
- Una cuenta de **Twilio**. Si no tienes una cuenta, puedes crear una en [Twilio](https://www.twilio.com/try-twilio) y obtener tus credenciales (Account SID, Auth Token y un número de Twilio).
- **Postman** o cualquier otra herramienta para realizar solicitudes HTTP (opcional, para probar el API).

## **Pasos para configurar el proyecto**

### **1. Clonar el repositorio**

Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/Camila-1996/Node.js-Twilio-SMS-API.git


Estructura de Carpetas

twilio-sms-api/
├── .env                     # Variables de entorno (credenciales de Twilio)
├── node_modules/             # Dependencias del proyecto
├── src/                      # Carpeta principal de código
│   ├── controllers/          # Controladores para manejar las solicitudes HTTP
│   │   └── smsController.js  # Controlador que maneja las solicitudes de envío de SMS
│   ├── services/             # Lógica de negocio (en este caso, la lógica para enviar SMS)
│   │   └── smsService.js     # Servicio que interactúa con Twilio API
│   ├── app.js                # Configuración principal de Express y rutas
├── package.json              # Dependencias y configuraciones de NPM
└── README.md                 # Documentación del proyecto
