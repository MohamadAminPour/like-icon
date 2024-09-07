let like =document.getElementById('like')
let message=document.querySelector('.message')

like.addEventListener('click',function(){
    like.style.color='red'
    like.style.transition='.3s ease'
    like.style.transform='scale(.9)'
    message.style.right='10px'
    like.setAttribute('class','bx bxs-heart')

    setTimeout(function(){
        message.style.right='-100%'
     },2000)

     setTimeout(function(){
        like.style.transform='scale(1.1)'
     },100)
})

