(async () => {
    console.clear();
    console.log("Configuración de Mercado Pago en Odoo");

    async function odooRPC(model, method, args = [], kwargs = {}) {
        const response = await fetch("/web/dataset/call_kw/" + model + "/" + method, {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                jsonrpc: "2.0",
                method: "call",
                params: {
                    model,
                    method,
                    args,
                    kwargs
                },
                id: Date.now()
            })
        });

        const data = await response.json();

        if (data.error) {
            throw new Error(
                data.error.data?.message ||
                data.error.message ||
                JSON.stringify(data.error)
            );
        }

        return data.result;
    }

    try {

        const proveedores = await odooRPC(
            "payment.provider",
            "search_read",
            [
                [["code", "=", "mercado_pago"]]
            ],
            {
                fields: [
                    "id",
                    "name",
                    "code",
                    "state",
                    "mercado_pago_access_token",
                    "mercado_pago_public_key",
                    "mercado_pago_refresh_token",
                    "mercado_pago_access_token_expiry"
                ],
                limit: 10
            }
        );

        if (!proveedores.length) {
            console.error("No se encontró el proveedor Mercado Pago.");
            return;
        }

        if (proveedores.length > 1) {
            console.warn(
                "Se encontraron varios proveedores Mercado Pago:",
                proveedores
            );
            console.warn(
                "El script utilizará el primero. Revisa la consola antes de continuar."
            );
        }

        const proveedor = proveedores[0];

        console.log("");
        console.log("Proveedor encontrado");
        console.log("ID:", proveedor.id);
        console.log("Nombre:", proveedor.name);
        console.log("Código:", proveedor.code);
        console.log("Estado:", proveedor.state);
        console.log("");
        console.log("Introduce las credenciales de TU CUENTA EMPRESARIAL.");
        console.log("No las pegues en el chat; introdúcelas únicamente en las ventanas que aparecerán.");

        const accessToken = prompt(
            "Access token:"
        );

        if (!accessToken) {
            console.warn("Operación cancelada: no se introdujo Access Token.");
            return;
        }

        const publicKey = prompt(
            "Public key:"
        );

        if (!publicKey) {
            console.warn("Operación cancelada: no se introdujo Public Key.");
            return;
        }

        const token = accessToken.trim();
        const public_key = publicKey.trim();
        console.log("");
        console.log("Datos que se van a guardar");

        console.log(
            "Access Token:",
            token.substring(0, 12) +
            "..." +
            token.substring(Math.max(12, token.length - 8))
        );

        console.log(
            "Public Key:",
            public_key.substring(0, 12) +
            "..." +
            public_key.substring(Math.max(12, public_key.length - 8))
        );

        console.log("");
        console.log("Importante:");
        console.log("Estas credenciales reemplazarán las actuales de Odoo.");
        console.log("También se eliminará el refresh token de la cuenta anterior.");
        console.log("El Access Token se almacenará como token directo sin expiración OAuth.");

        const confirmar = confirm(
            "¿Confirmas que quieres reemplazar las credenciales de Mercado Pago?"
        );

        if (!confirmar) {
            console.warn("Operación cancelada por el usuario.");
            return;
        }

        console.log("");
        console.log("Escribiendo nuevas credenciales en Odoo...");

        const resultado = await odooRPC(
            "payment.provider",
            "write",
            [
                [proveedor.id],
                {
                    mercado_pago_access_token: token,
                    mercado_pago_public_key: public_key,
                    mercado_pago_refresh_token: false,
                    mercado_pago_access_token_expiry: false
                }
            ]
        );

        console.log("Escritura realizada.");
        console.log("Resultado:", resultado);
        console.log("");
        console.log("Verificando lo que quedó guardado...");

        const verificacion = await odooRPC(
            "payment.provider",
            "read",
            [
                [proveedor.id]
            ],
            {
                fields: [
                    "id",
                    "name",
                    "code",
                    "state",
                    "mercado_pago_access_token",
                    "mercado_pago_public_key",
                    "mercado_pago_refresh_token",
                    "mercado_pago_access_token_expiry"
                ]
            }
        );

        const p = verificacion[0];

        console.log("");
        console.log("Verificación");
        console.log("ID:", p.id);
        console.log("Nombre:", p.name);
        console.log("Código:", p.code);
        console.log("Estado:", p.state);

        console.log("");
        console.log(
            "Access Token:",
            p.mercado_pago_access_token
                ? p.mercado_pago_access_token.substring(0, 12) +
                  "..." +
                  p.mercado_pago_access_token.substring(
                      Math.max(12, p.mercado_pago_access_token.length - 8)
                  )
                : "(vacío)"
        );

        console.log(
            "Public Key:",
            p.mercado_pago_public_key
                ? p.mercado_pago_public_key.substring(0, 12) +
                  "..." +
                  p.mercado_pago_public_key.substring(
                      Math.max(12, p.mercado_pago_public_key.length - 8)
                  )
                : "(vacío)"
        );

        console.log(
            "Refresh Token:",
            p.mercado_pago_refresh_token
                ? "Todavía existe"
                : "Eliminado"
        );

        console.log(
            "Fecha expiración:",
            p.mercado_pago_access_token_expiry ||
            "Vacía — Odoo utilizará el Access Token directamente"
        );

        console.log("");
        console.log("Proceso finalizado");

    } catch (error) {

        console.error("");
        console.error("Error");

        console.error(error);

        console.error("");
    }
})();