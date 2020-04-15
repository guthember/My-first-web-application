$(function(){
  // photos' datas
  let imagesDatas = [
    {
      photo: 'images/abandoned-forest-industry-nature-34950.jpg',
      title: 'Forest & industry',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, facere illum cupiditate cumque hic nisi voluptates sint delectus, ullam voluptatum libero officiis quibusdam ipsa maxime! Eius hic dolorum, id optio tempore totam est, incidunt ab excepturi, officia harum sit tenetur!'
    },
    {
      photo: 'images/clouds-daylight-forest-grass-371589.jpg',
      title: 'Forest with clouds',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, facere illum cupiditate cumque hic nisi voluptates sint delectus, ullam voluptatum libero officiis quibusdam ipsa maxime! Eius hic dolorum, id optio tempore totam est, incidunt ab excepturi, officia harum sit tenetur!'
    },
    {
      photo: 'images/daylight-environment-forest-idyllic-459225.jpg',
      title: 'Lake in the mirror',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, facere illum cupiditate cumque hic nisi voluptates sint delectus, ullam voluptatum libero officiis quibusdam ipsa maxime! Eius hic dolorum, id optio tempore totam est, incidunt ab excepturi, officia harum sit tenetur!'
    },
    {
      photo: 'images/gray-bridge-and-trees-814499.jpg',
      title: 'Old bridge',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, facere illum cupiditate cumque hic nisi voluptates sint delectus, ullam voluptatum libero officiis quibusdam ipsa maxime! Eius hic dolorum, id optio tempore totam est, incidunt ab excepturi, officia harum sit tenetur!'
    },
    {
      photo: 'images/nature-forest-trees-fog-4827.jpg',
      title: 'Foggy forest',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, facere illum cupiditate cumque hic nisi voluptates sint delectus, ullam voluptatum libero officiis quibusdam ipsa maxime! Eius hic dolorum, id optio tempore totam est, incidunt ab excepturi, officia harum sit tenetur!'
    },
    {
      photo: 'images/nature-red-forest-leaves-33109.jpg',
      title: 'Autumn in Patvarc',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, facere illum cupiditate cumque hic nisi voluptates sint delectus, ullam voluptatum libero officiis quibusdam ipsa maxime! Eius hic dolorum, id optio tempore totam est, incidunt ab excepturi, officia harum sit tenetur!'
    }
  ];

  // using elements wiht JQuery
  let $photo = $('#photo-container img');
  let $title = $('#photo-title');
  let $description = $('#photo-description');
  let $left = $('#leftArrow img');
  let $right = $('#rightArrow img');
  let $thumbs = $('.thumbs');
  // own variables
  let currentImage = 0;
  
  function setImage( item ) {
    $photo.attr('src', imagesDatas[item].photo);
    $title.text(imagesDatas[item].title);
    $description.text(imagesDatas[item].description);
  }

  function setThumbs( photos ) {
    let i = 0;
    photos.forEach(photo => {
      $thumbs.append(`<img src="${photo.photo}" data-number="${i}">`);
      i++;
    });
  };

  setImage(currentImage);

  setThumbs(imagesDatas);

  $left.click( function(){
    if( currentImage > 0) {
      currentImage--;
      setImage(currentImage);
    }
  });
 
  $right.click( function(){
    if (currentImage < imagesDatas.length - 1) {
      currentImage++;
      setImage(currentImage);
    }
  });
 
  $thumbs.on('click','img',function(){
    let $which = $(this).attr('data-number')
    setImage($which);
  });

});