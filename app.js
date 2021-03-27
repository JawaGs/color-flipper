
const boton = document.querySelector('#boton')
const background = document.querySelector('#background')
const checkbox = document.querySelector('#checkbox')

const colores = [ "red",'green','blue','orange','purple','purple','white' ]
const coloresHex = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']


checkbox.addEventListener( 'change', function(e){
    if ( this.checked ){
        document.body.classList.add( 'is-active' )
    }else{
        document.body.classList.remove('is-active')
    }
} )

boton.addEventListener( 'click', function(e){    
    if (checkbox.checked ){
        let color = '#'
        for (let i = 0; i < 6; i++) {
            let randomNumber = Math.floor(Math.random() * (coloresHex.length ))
            color += coloresHex[randomNumber]
        }
        background.innerHTML = color
        document.body.style.background =`${color}`

    }else{
        let randomNumber = Math.floor(Math.random() * (colores.length ))
        background.innerHTML = colores[randomNumber]
        document.body.style.background =`${colores[randomNumber]}`
    }

} )