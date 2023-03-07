function loadImageModal(ClassMiniImage, idImageModal){
  
  /*Seleciono todos pela classe*/
  var miniImage= document.querySelectorAll(ClassMiniImage);

  /*Seleciono o modal pela id*/
  var imageModal = document.querySelector(idImageModal);
    
  /*Faço busco todas as imagens selecionadas pela classe*/
  for(let i = 0; i < miniImage.length; i++){
    miniImage[i].addEventListener('click',function(){
    
    /*Obetenho o atributo src das imagens*/
    srcVal = miniImage[i].getAttribute('src');

    /*Seto os atribtos da das imagens, no modal*/
    imageModal.setAttribute('src', srcVal); 

    });  
  }
}


/*End browse images*/