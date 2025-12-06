connect2Server ();

const si = 0;

function date () {
    postEvent ("Fecha", {
        true: si,
    },
    function (data) {
        console.log ("Respuesta del servidor:", data)
    })

}