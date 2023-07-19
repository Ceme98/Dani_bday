function animate(){
    let music = document.getElementById('autoplay');
    music2 = music.cloneNode();
    music2.src = "congrats.mp3";
    let replace = document.getElementById('quiz');
    replace.replaceChild(music2, music);
      let container = document.createElement('p');
    container.id = "contain";
    container.style.position = "relative";
    container.style.width = "600px";
    container.style.height = "500px";
    container.backgroundImage = "url('contain_transparent.png')";
  
      let animate = document.createElement('p');
      animate.style.position = "absolute";
    let link = document.createElement('a');
    link.href = "https://www.youtube.com/watch?v=SC4xMk98Pdc";
      source = document.createElement("IMG");
      source.id = "animate";
      source.src = "congrats_transparent.png";
      source.style.width = "450px";
      source.style.height = "300px";
    link.appendChild(source);
      animate.appendChild(link);
      container.appendChild(animate);
  
      let time = setInterval(move, 1000);
      function move(){
          if (source.style.width == "450px"){
              source.style.width = "550px";
              source.style.height = "400px";
          }
          else {
              source.style.width = "450px";
              source.style.height = "300px";
          }
      }
      quiz.appendChild(container);
  }
  