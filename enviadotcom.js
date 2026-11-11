async function getEnviaTokensFetch() {
    try {
        const response = await fetch('/web/dataset/call_kw', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                jsonrpc: "2.0",
                method: "call",
                params: {
                    model: 'delivery.carrier',
                    method: 'search_read',
                    args: [[['delivery_type', '=', 'envia']]],
                    kwargs: {
                        fields: ['name', 'envia_production_api_key', 'envia_sandbox_api_key']
                    }
                },
                id: new Date().getTime()
            })
        });

        const data = await response.json();

        if (data.result && data.result.length > 0) {
            console.log(`%c ¡Se encontraron ${data.result.length} método(s) de envío de Envia! `, 'background: #222; color: #bada55; font-size: 14px;');
            data.result.forEach((carrier, index) => {
                console.log(`\n--- [Registro ${index + 1}] ID: ${carrier.id} - Nombre: ${carrier.name} ---`);
                console.log("Token de Producción (envia_production_api_key):", carrier.envia_production_api_key);
                console.log("Token de Pruebas (envia_sandbox_api_key):", carrier.envia_sandbox_api_key);
            });
        } else {
            console.log("No se encontraron registros de tipo 'envia' o la respuesta está vacía.");
        }
    } catch (error) {
        console.error("Error al realizar el fetch RPC:", error);
    }
}

getEnviaTokensFetch();