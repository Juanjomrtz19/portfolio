fetch('auxiliares/header.html')
    .then(response => response.text())
    .then(data =>{
        document.getElementById('header').innerHTML = data;

        //Codigo para copiar el gmail
        document.getElementById('copiar').addEventListener( "click", function(){
            let texto = document.getElementById('textoCopiar').innerText;
            let textArea = document.createElement('textarea');
            textArea.value = texto;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("Copy");
            textArea.remove();
            let mensaje = document.getElementById('mensajeCopiar');
            mensaje.innerText = 'Copiado';
            setTimeout(function(){
                mensaje.innerText = 'Copiar';
            }, 2000);
        } );
    });