function converter() {
    var m = window.prompt('Digite uma distância em metros(m)')
    var res = document.querySelector('div#res')
    
    var metros = Number.parseFloat(m)

    
    
    var km = metros * 1000
    var cent = m * 100


    res.innerHTML = `<strong>A distância de ${metros} metros, corresponde a ...</strong><br>`
    res.innerHTML += `${km} quilômetros (Km)<br>`
    res.innerHTML += `${cent.toFixed(1)} centimeros (cm)`

}