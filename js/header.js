fetch('auxiliares/header.html')
    .then(response => response.text())
    .then(data =>{
        let clickMenu = false;
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
        
        //codigo para ampliar la imagen del header
        let img = document.getElementById('foto-perfil');
        let modal = document.getElementById('modal');
        let modalImg = document.getElementById('imagenAmpliada');
        let span = document.getElementsByClassName('cerrar')[0];

        img.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
        }

        span.onclick = function() { 
            modal.style.display = "none";
        }

        document.getElementById('menuBars').onclick = function(){
            let menu = document.getElementById('menuDeslizante');
            if(clickMenu){
                clickMenu = false;
                menu.style.width = '0';
            }    
            else{
                clickMenu = true;
                menu.style.width = '100%'; 
            }
        }

    });
    