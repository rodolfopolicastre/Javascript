function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.querySelector('input#txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value > ano)) {
        window.alert ('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21){
                // jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            }else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                // idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }else {
           genero = 'Mulher'
           if (idade >=0 && idade < 10) {
                // criança  
                img.setAttribute('src', 'foto-bebe-f.png')
           } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'foto-jovem-f.png')
           } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'foto-adulto-f.png')
           }else {
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png')
           }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
    
}

