function carregar() {
   var msg = window.document.getElementById('msg')
   var img = window.document.getElementById('imagem')
   var data = new Date()
   var hora = data.getHours()
   msg.innerHTML = `Agora são ${hora} horas.`
   
   if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'dia.png'
        document.body.style.background = '#117bc3'
   } else if (hora >= 12 && hora <= 18) {
       //boa tarde
       img.src = 'tarde.png'
       document.body.style.background = '#ff8d03'
   } else {
       //boa noite
       img.src = 'noite.png'
       document.body.style.background = '#0d383e'
   }

}