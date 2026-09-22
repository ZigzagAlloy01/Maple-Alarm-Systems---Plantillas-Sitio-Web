(async () => { 

    console.clear(); 
    console.log("Consultando el registro de Mercado Pago en Odoo"); 

    try { 
        const response = await fetch( 
            "/web/dataset/call_kw/payment.provider/search_read", 
            { 
                method: "POST", 
                headers: { 
                    "Content-Type": "application/json" 
                }, 
                credentials: "same-origin", 
                body: JSON.stringify({ 
                    jsonrpc: "2.0", 
                    method: "call", 
                    params: { 
                        model: "payment.provider", 
                        method: "search_read", 
                        args: [ 
                            [["code", "=", "mercado_pago"]] 
                        ], 
                        kwargs: { 
                            fields: [ 
                                "id", 
                                "name", 
                                "code", 
                                "state",
                                "mercado_pago_access_token", 
                                "mercado_pago_public_key", 
                                "mercado_pago_access_token_expiry" 
                            ],
                            limit: 10 
                        } 
                    }, 
                    id: Date.now() 
                }) 
            } 
        ); 

        const data = await response.json(); 

        console.log("Respuesta completa de Odoo:"); 
        console.log(data); 
  
        if (data.error) { 
            console.error("Odoo devolvió un error:"); 
            console.error(data.error); 
            return; 
        } 

        const registros = data.result || []; 

        if (!registros.length) { 
            console.warn("No se encontró ningún proveedor con code = mercado_pago."); 
            return; 
        }

        registros.forEach((registro, index) => { 
            console.log(""); 
            console.log(`Mercado Pago #${index + 1}`); 
            console.log("ID:", registro.id); 
            console.log("Nombre:", registro.name); 
            console.log("Código:", registro.code); 
            console.log("Estado:", registro.state);
            console.log(""); 
            console.log("Access Token:"); 
            console.log(registro.mercado_pago_access_token); 
            console.log(""); 
            console.log("Public Key :"); 
            console.log(registro.mercado_pago_public_key); 
            console.log(""); 
            console.log("Expiración:"); 
            console.log(registro.mercado_pago_access_token_expiry); 
        }); 

    } catch (error) { 
        console.error("Error ejecutando la consulta:"); 
        console.error(error); 
    } 
})();