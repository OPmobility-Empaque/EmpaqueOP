document.addEventListener("DOMContentLoaded", function() {
    // Datos simulados - Reemplaza esto con la carga desde JSON si lo necesitas
    const data = [
        {"Material": "65100350", "Material Description": "TARIMA SPO SPOILER", "Domain": "www.65100350.com"},
        {"Material": "65100501", "Material Description": "KIT DE EMPAQUE AIR DAM", "Domain": "www.65100501.com"},
        {"Material": "65101495", "Material Description": "CAJA CHICA FASCIA C/TARIMA SPO USA&CAN", "Domain": "www.65101495.com"},                            
        {"Material": "65101671", "Material Description": "CAJA DE SPO SPLASH SHIELD GMT 900", "Domain": "www.65101671.com"},
        {"Material": "65101842", "Material Description": "CAJA SPOILER GMT 900 SPO", "Domain": "www.65101842.com"},
        {"Material": "65101844", "Material Description": "POLIBURBUJA SPOILER GMT 900 SPO", "Domain": "www.65101844.com"},
        {"Material": "65102101", "Material Description": "F500 GRILLE POP/SPORT CAJA 91.5X25X10", "Domain": "www.65102101.com"},
        {"Material": "65102102", "Material Description": "F500 GRILLE POP/SPORT TARIMA 122X107X14", "Domain": "www.65102102.com"},
        {"Material": "65102103", "Material Description": "F500 GRILLE POP/SPORT BOLSA 100X40", "Domain": "www.65102103.com"},
        {"Material": "65102104", "Material Description": "F500 ROCKER SPORT CAJA 175X25.5X10", "Domain": "www.65102104.com"},
        {"Material": "65102105", "Material Description": "F500 ROCKER TARIMA 175.5X107X14", "Domain": "www.65102105.com"},
        {"Material": "65102106", "Material Description": "F500 ROCKER SPORT BOLSA 208X35.5", "Domain": "www.65102106.com"},
        {"Material": "65102111", "Material Description": "F500 FF FASCIA MOPAR CAJA 173X75X63.5", "Domain": "www.65102111.com"},
        {"Material": "65102112", "Material Description": "F500 FF FASCIA MOPAR TARIMA 175.5X152X14", "Domain": "www.65102112.com"},
        {"Material": "65102113", "Material Description": "F500 FF FASCIA MOPAR BOLSA 219X127", "Domain": "www.65102113.com"},
        {"Material": "65102322", "Material Description": "CAJA RR GRILLE ABARTH(29X13.5X123)", "Domain": "www.65102322.com"},
        {"Material": "65102324", "Material Description": "TARIMA RR GRILLE ABARTH(126X124X14)", "Domain": "www.65102324.com"},
        {"Material": "65102325", "Material Description": "BOLSA RR GRILLE ABARTH(135 X 35)", "Domain": "www.65102325.com"},
        {"Material": "65102329", "Material Description": "CAJA FF GRILLE ABARTH 18.5x14.5x125", "Domain": "www.65102329.com"},
        {"Material": "65102330", "Material Description": "TARIMA FF GRILLE ABARTH(127x100x14)", "Domain": "www.65102330.com"},
        {"Material": "65102331", "Material Description": "BOLSA FF GRILLE ABARTH(140 x 25)", "Domain": "www.65102331.com"},
        {"Material": "65102351", "Material Description": "FOAM GM PARA FASCIAS SPO", "Domain": "www.65102351.com"},
        {"Material": "65102442", "Material Description": "GAMMA KIT SKD PLT SPO", "Domain": "www.65102442.com"},
        {"Material": "65102444", "Material Description": "GAMMA FF LOWER NA CAJA/TARIMA", "Domain": "www.65102444.com"},
        {"Material": "65102446", "Material Description": "GAMMA KIT CORNERS SPO", "Domain": "www.65102446.com"},
        {"Material": "65102448", "Material Description": "GAMMA TAPA FRONTAL /TRASERA KIT", "Domain": "www.65102448.com"},
        {"Material": "65102482", "Material Description": "F500 ROCKER BEV BOLSA 200X35", "Domain": "www.65102482.com"},
        {"Material": "65102483", "Material Description": "F500 ROCKER BEV CAJA", "Domain": "www.65102483.com"},
        {"Material": "65102502", "Material Description": "GAMMA FASCIA FF LOWER/UPPER  KIT 55CMS", "Domain": "www.65102502.com"},
        {"Material": "65102541", "Material Description": "GMT250 / K2XX ROLLO FOAM 1/4", "Domain": "www.65102541.com"},
        {"Material": "65102666", "Material Description": "K2XX HITCH COVER PINTADO CORTE FOAM 1/8", "Domain": "www.65102666.com"},
        {"Material": "65102668", "Material Description": "K2XX H COVER PINTADO TARIMA 122X102X13", "Domain": "www.65102668.com"},
        {"Material": "65102727", "Material Description": "K2XX TAPAS GMC/CHEVY CAJA 39X32X31", "Domain": "www.65102727.com"},
        {"Material": "65102728", "Material Description": "K2XX TAPAS GMC/CHEVY BOLSA 16.5X30", "Domain": "www.65102728.com"},
        {"Material": "65102729", "Material Description": "K2XX HITCH COVER PRIMER BOLSA 60X4", "Domain": "www.65102729.com"},
        {"Material": "65102730", "Material Description": "K2XX HITCH COVER PRIMER ZIPLOCK 5X8", "Domain": "www.65102730.com"},
        {"Material": "65102731", "Material Description": "K2XX HITCH COVER PRIMER CAJA 85X51X31", "Domain": "www.65102731.com"},
        {"Material": "65102732", "Material Description": "K2XX HITCH COVER PRIMER TARIMA 110X90X13", "Domain": "www.65102732.com"},
        {"Material": "65102742", "Material Description": "K2XX STEP PAD TARIMA 171X107X13 SPO", "Domain": "www.65102742.com"},
        {"Material": "65102791", "Material Description": "SPO K2XX FASCIA TARIMA 96X72X5", "Domain": "www.65102791.com"},
        {"Material": "65102801", "Material Description": "GAMMA ENERGY ABS TARIMA 188X117X13 SPO", "Domain": "www.65102801.com"},
        {"Material": "65102847", "Material Description": "ESQUINERO PLASTICO P/FLEJE 2x3", "Domain": "www.65102847.com"},
        {"Material": "65102871", "Material Description": "SPO K2XX FASCIA CAJA 92X71X23", "Domain": "www.65102871.com"},
        {"Material": "65102872", "Material Description": "K2XX SEPARADOR CARTON 6X6X23 SPO", "Domain": "www.65102872.com"},
        {"Material": "65102915", "Material Description": "GAMMA UPPER DUNNAGE DE CARTON SPO", "Domain": "www.65102915.com"},
        {"Material": "65102916", "Material Description": "GAMMA UPPER SOPORTE PLASTICO SPO", "Domain": "www.65102916.com"},
        {"Material": "65102953", "Material Description": "KIT FORD 85x45x33", "Domain": "www.65102953.com"},
        {"Material": "65102958", "Material Description": "SPO TAPA PARA  FRT  SEAL", "Domain": "www.65102958.com"},     
        {"Material": "65102989", "Material Description": "SPO FF GAMMA MCM BOLSA", "Domain": "www.65102989.com"},
        {"Material": "65103102", "Material Description": "F500 FOAM 152 X 13716 cm MOPAR GRIS", "Domain": "www.65103102.com"},
        {"Material": "65103171", "Material Description": "K2XX STEP PAD ESQUINERO CARTON", "Domain": "www.65103171.com"},
        {"Material": "65103193", "Material Description": "SPO FF GAMMA MCM KIT EMPAQUE", "Domain": "www.65103193.com"},
        {"Material": "65103194", "Material Description": "SPO LWR GAMMA MCM KIT EMPAQUE", "Domain": "www.65103194.com"},
        {"Material": "65103195", "Material Description": "SPO FF GMT250 LCI KIT EMPAQUE", "Domain": "www.65103195.com"},
        {"Material": "65103216", "Material Description": "SPO GAMMA LOWER GRILLE KIT EMPAQUE B", "Domain": "www.65103216.com"},
        {"Material": "65103217", "Material Description": "SPO GAMMA MCM AIR DAM SILAO KIT BRAZ", "Domain": "www.65103217.com"},
        {"Material": "65103220", "Material Description": "SPO GAMMA MCM FR LOWER KIT BRAZIL", "Domain": "www.65103220.com"},
        {"Material": "65103221", "Material Description": "SPO GAMMA MCM RR LOWER KIT BRAZIL", "Domain": "www.65103221.com"},
        {"Material": "65103328", "Material Description": "F500 CAJA PARRILLA BEV 120X23X26", "Domain": "www.65103328.com"},
        {"Material": "65103380", "Material Description": "SPO T1XX CHEVY KIT EMPAQUE", "Domain": "www.65103380.com"},
        {"Material": "65103381", "Material Description": "SPO T1XX CHEVY TARIMA", "Domain": "www.65103381.com"},
        {"Material": "65103516", "Material Description": "K2XX FASCIA BOLSA CAL.400 90x400CM", "Domain": "www.65103516.com"},
        {"Material": "65103521", "Material Description": "K2XX FASCIA LAMINA CARTON_ECT55 44X39", "Domain": "www.65103521.com"},
        {"Material": "65103611", "Material Description": "CORTE DE FOAM PARA K2XX 42x31 cms", "Domain": "www.65103611.com"},
        {"Material": "65103741", "Material Description": "SPO CX727 LIFTGATE KIT DE EMPAQUE", "Domain": "www.65103741.com"},
        {"Material": "65103742", "Material Description": "SPO CX727 CAJITA PARA COMPONENTES", "Domain": "www.65103742.com"},
        {"Material": "65103866", "Material Description": "LUCID KIT DE EMPAQUE FRONTAL", "Domain": "www.65103866.com"},
        {"Material": "65103868", "Material Description": "LUCID KIT DE EMPAQUE DECKLID LOWER", "Domain": "www.65103868.com"},
        {"Material": "65103929", "Material Description": "T1XX MCM DUNNAGE ZRX GRILLETTES", "Domain": "www.65103929.com"},
        {"Material": "65103996", "Material Description": "LUCID FUNDA DESECHABLE FRONTAL", "Domain": "www.65103996.com"},
        {"Material": "65103997", "Material Description": "LUCID FUNDA DESECHABLE TRASERA", "Domain": "www.65103997.com"},
        {"Material": "65104004", "Material Description": "T1XX MCM KIT EMPAQUE FLLRS OFF ROAD", "Domain": "www.65104004.com"},
        {"Material": "65104007", "Material Description": "T1XX MCM DUNNAGE POCKET", "Domain": "www.65104007.com"},
 
    ]; 

    const tableBody = document.querySelector("#partsTable tbody");
    data.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.Material}</td>
            <td><a href="detailspart=${item.Material}.html?part=${item.Material}">${item.Domain}</a></td>
        `;
        tableBody.appendChild(row);
    });

    // Mostrar detalles si estamos en details.html
    const urlParams = new URLSearchParams(window.location.search);
    const part = urlParams.get("part");
    if (part) {
        const selectedItem = data.find(item => item.Material == part);
        if (selectedItem) {
            document.getElementById("partNumber").textContent = `Número de Parte: ${selectedItem.Material}`;
            document.getElementById("description").textContent = `Descripción: ${selectedItem["Material Description"]}`;
        }
    }
});