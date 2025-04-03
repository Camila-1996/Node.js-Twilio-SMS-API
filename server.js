const app = require("./src/app");
const { port } = require("./src/config/envConfig");

// Iniciar el servidor
app.listen(port, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});
