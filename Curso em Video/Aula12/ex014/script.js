function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    //var hora = data.getHours()
    var hora = 19
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = 'imgs/manha.png'
        msg.innerHTML = `Bom dia,agora são ${hora} horas`
        document.body.style.background = "#ebdfbb"
    }else if(hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'imgs/tarde.png'
        msg.innerHTML = `Boa tarde,agora são ${hora} horas`
        document.body.style.background = "#fcab04"
    }else{
        //boa noite
        img.src = 'imgs/noite.png'
        msg.innerHTML = `Boa noite,agora são ${hora} horas`
        document.body.style.background = '#3d5460'
    }
}

