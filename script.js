function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
        return
    }

    var sexo = document.getElementsByName('sexo')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (sexo[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 12) {
            img.setAttribute('src', 'imagens/menino-criança.png')
        } else if (idade < 21) {
            img.setAttribute('src', 'imagens/homem-jovem.png')
        } else if (idade < 60) {
            img.setAttribute('src', 'imagens/homem-adulto.png')
        } else {
            img.setAttribute('src', 'imagens/homem-idoso.png')
        }
    } else if (sexo[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade < 12) {
            img.setAttribute('src', 'imagens/menina-criança.png')
        } else if (idade < 21) {
            img.setAttribute('src', 'imagens/mulher-jovem.png')
        } else if (idade < 60) {
            img.setAttribute('src', 'imagens/mulher-adulta.png')
        } else {
            img.setAttribute('src', 'imagens/mulher-idosa.png')
        }
    }

    res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
    res.appendChild(img)
}