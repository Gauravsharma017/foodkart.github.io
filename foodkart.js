const mode=document.querySelector('#mode')
const body=document.querySelector('body')
const option=document.querySelector('.option')
mode.addEventListener('click',function (){
    
    if (mode.innerHTML.match('Dark')) {
        body.style.backgroundColor='black'
        body.style.transitionProperty='all'
        body.style.transitionDuration='1s'
    mode.innerHTML='Light'
    mode.style.color='white'
    mode.style.backgroundColor='black'
    mode.style.borderColor='white'
    // option.style.color='white'
document.querySelector('.place1').style.backgroundColor='rgba(240, 248, 255, 0.257)'
document.querySelector('.place2').style.backgroundColor='rgba(240, 248, 255, 0.257)'
document.querySelector('.place3').style.backgroundColor='rgba(240, 248, 255, 0.257)'
document.querySelector('.place4').style.backgroundColor='rgba(240, 248, 255, 0.257)'
document.querySelector('.place5').style.backgroundColor='rgba(240, 248, 255, 0.257)'

}
    else{
        body.style.backgroundColor='white'
        body.style.transitionProperty='all'
        body.style.transitionDuration='1s'
    mode.innerHTML='Dark'
    mode.style.color='black'
    mode.style.backgroundColor='white'
    mode.style.borderColor='black' 
    // option.style.color='black'

    }
})

const welcome=document.querySelector('.welcome')

welcome.addEventListener('mouseenter',function(){
    if (welcome.innerHTML.match('welcome in foodkart family!')) {
        welcome.style.backgroundColor='burlywood'
        welcome.innerHTML=`Don't be angry,Be hungry!`
        welcome.style.transitionProperty='all'
        welcome.style.transitionDuration='5s'
welcome.style.fontSize='35px'
welcome.style.textShadow=' -5px 2px rgb(528, 105, 118)'
welcome.style.borderBottomLeftRadius='25%'

    }
    else{
        welcome.style.backgroundColor='rgba(255, 255, 255, 0.665)'
        welcome.innerHTML=`welcome in foodkart family!`
        welcome.style.transitionProperty='all'
        welcome.style.transitionDuration='5s'
welcome.style.fontSize='25px'
welcome.style.textShadow=' -2px 2px  rgb(228, 205, 218)'
    }
})

