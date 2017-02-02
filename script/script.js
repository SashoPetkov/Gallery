(function (){
  $.getJSON('../DataBase/descriptionIMG.json', function(data){
    var thisDate = data;
    var lengthJSON = thisDate.length;
    var countImg = Math.round(lengthJSON/2 - 1);
    var imgTags = document.getElementsByTagName('img');
    var leftArr = document.getElementsByClassName('leftAr')[0];
    var rightArr = document.getElementsByClassName('rightAr')[0];
      //generated points for give location of image - start
    var pointsContainer = document.getElementsByClassName('points')[0];
    for(var j=0; j<thisDate.length; j++){
      var newNode = document.createElement('li');
      pointsContainer.appendChild(newNode);
    }
    var centerLi = document.getElementsByClassName('points')[0].getElementsByTagName('li')[countImg];
    centerLi.classList.add('selected');
    // centerLi.className = 'selected';
    //generated points for give location of image - end


    var popUP = document.getElementById('bigImage');
    popUP.style.height = window.innerHeight + 'px';
    popUP.style.width = window.innerWidth + 'px';
    // console.log(popUP);
    popUP.addEventListener('click', function(){
      this.style.display = 'none';
    }, false);

    function goBig() {
      popUP.style.display = 'block';
      popUP.style.backgroundImage = this.style.backgroundImage;
      popUP.classList.add('animatePopUP');
    }


      // put class same class to all images
    for(var i=0; i<imgTags.length; i++){
      imgTags[i].className = 'imagesPosition';
      imgTags[i].addEventListener('click', goBig, false);
    }
      // add event listener to arrows and images
    leftArr.addEventListener('click', imgMooveLeft, false);
    rightArr.addEventListener('click', imgMooveRight, false);

      // start position of images in carousel
    imgTags[0].style.backgroundImage = 'url(' + thisDate[countImg].img + ')';
    imgTags[1].style.backgroundImage = 'url(' + thisDate[countImg+1].img + ')';
    imgTags[2].style.backgroundImage = 'url(' + thisDate[countImg+2].img + ')';


        //  For animation
    var img1 = document.getElementsByClassName('imagesPosition')[0];
    var centerImg = document.getElementsByClassName('imagesPosition')[1];
    var img3 = document.getElementsByClassName('imagesPosition')[2];  

    function removeClass(){
      img1.classList.remove('animateRight');
      centerImg.classList.remove('animateRight');
      img3.classList.remove('animateRight');
      img1.classList.remove('animateLeft');
      centerImg.classList.remove('animateLeft');
      img3.classList.remove('animateLeft');
    }

      // click left function
    function imgMooveLeft(event) {
      if( countImg > 0){
        mooveLeft();
      } 
      else {
        // countImg = lengthJSON-2;
        countImg = lengthJSON-2;
        mooveLeft();
      }

        // Animation effect - start
      event.preventDefault();
      
      removeClass();
      void leftArr.offsetWidth;

      // img1.classList.add('animateLeft'); // if you want to slide all 3 pics
      centerImg.classList.add('animateLeft');
      // img3.classList.add('animateLeft'); // if you want to slide all 3 pics
        // Animation effect - end
    }

      // click right function
    function imgMooveRight(e) {
      if( countImg < lengthJSON - 3 ){
        mooveRight();
      } 
      else {
        countImg = -1;
        mooveRight();
      }

      // Animation effect - start
      e.preventDefault();

      removeClass();
      void rightArr.offsetWidth;

      // img1.classList.add('animateRight');  // if you want to slide all 3 pics
      centerImg.classList.add('animateRight');
      // img3.classList.add('animateRight');  // if you want to slide all 3 pics
        // Animation effect - end
    }

    function mooveLeft(){
      countImg --;
      imgTags[0].style.backgroundImage = 'url(' + thisDate[countImg].img + ')';
      imgTags[1].style.backgroundImage = 'url(' + thisDate[countImg+1].img + ')';
      imgTags[2].style.backgroundImage = 'url(' + thisDate[countImg+2].img + ')';
      centerLi.classList.remove('selected');
      centerLi = document.getElementsByClassName('points')[0].getElementsByTagName('li')[countImg+1];
      centerLi.classList.add('selected');
    }
    function mooveRight(){
      countImg ++;
      imgTags[0].style.backgroundImage = 'url(' + thisDate[countImg].img + ')';
      imgTags[1].style.backgroundImage = 'url(' + thisDate[countImg+1].img + ')';
      imgTags[2].style.backgroundImage = 'url(' + thisDate[countImg+2].img + ')';
      centerLi.classList.remove('selected');
      centerLi = document.getElementsByClassName('points')[0].getElementsByTagName('li')[countImg+1];
      centerLi.classList.add('selected');
    }

    // KEYS events - moveLeft, moveRight and goBig
    function leftRight() {
      var big = false;  
      window.addEventListener('keydown', function(event) {
        if(event.keyCode == 37){
          imgMooveLeft(event);          
        } else if (event.keyCode == 39){
          imgMooveRight(event);
        } else if (event.keyCode == 13){
          if (big === false) {
            popUP.style.display = 'block';
            popUP.style.backgroundImage = 'url(' + thisDate[countImg+1].img + ')';
            popUP.classList.add('animatePopUP');
            big = true;
          } else {
            popUP.style.display = 'none';
            big = false;
          }
        }
      });
    }
    leftRight();    

  });
})();

