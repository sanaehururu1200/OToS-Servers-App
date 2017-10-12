$(function(){
  const url = 'http://api.otos.red/BedWars/1/teams.json'; // リクエスト先URL
  fetch(url).then(function(response) {
    return response.json();
  }).then(function(json) {
      document.getElementById('title').innerHTML = 'BedWars';
      let nav = document.getElementById('nav');
      let switcher = document.getElementById('switcher');
      /*  RED  */
      var li = document.createElement("li");
      switcher.appendChild(li); 
      var card = document.createElement("div");
      card.classList.add('uk-card-default','uk-card-body','uk-width-1-2@s','uk-card-hover');
      li.appendChild(card);
      var title = document.createElement("h3");
      title.classList.add('uk-card-title');
      title.innerText = '赤チーム';
      card.appendChild(title);
      var content = document.createElement("p");
      content.classList.add('uk-card-title');
      if(json['red']['isAlive'] === null){
        content.innerText = 'メンバー無し';
      }else if(json['red']['isAlive'] === false){
        content.innerText = '敗北';
      }else{
        content.innerText = '生存';
      }
      card.appendChild(content);
      var br = document.createElement("br");
      document.body.appendChild(br); 

      /*  GREEN  */
      var li = document.createElement("li");
      switcher.appendChild(li); 
      var card = document.createElement("div");
      card.classList.add('uk-card-default','uk-card-body','uk-width-1-2@s','uk-card-hover');
      li.appendChild(card);
      var title = document.createElement("h3");
      title.classList.add('uk-card-title');
      title.innerText = '緑チーム';
      card.appendChild(title);
      var content = document.createElement("p");
      content.classList.add('uk-card-title');
      if(json['green']['isAlive'] === null){
        content.innerText = 'メンバー無し';
      }else if(json['green']['isAlive'] === false){
        content.innerText = '敗北';
      }else{
        content.innerText = '生存';
      }
      console.log(json['green']['isAlive']);
      card.appendChild(content);
      var br = document.createElement("br");
      document.body.appendChild(br);
      
      /*  BLUE  */
      var li = document.createElement("li");
      switcher.appendChild(li); 
      var card = document.createElement("div");
      card.classList.add('uk-card-default','uk-card-body','uk-width-1-2@s','uk-card-hover');
      li.appendChild(card);
      var title = document.createElement("h3");
      title.classList.add('uk-card-title');
      title.innerText = '青チーム';
      card.appendChild(title);
      var content = document.createElement("p");
      content.classList.add('uk-card-title');
      if(json['blue']['isAlive'] === null){
        content.innerText = 'メンバー無し';
      }else if(json['blue']['isAlive'] === false){
        content.innerText = '敗北';
      }else{
        content.innerText = '生存';
      }
      card.appendChild(content);
      var br = document.createElement("br");
      document.body.appendChild(br); 

      /*  WHITE  */
      var li = document.createElement("li");
      switcher.appendChild(li); 
      var card = document.createElement("div");
      card.classList.add('uk-card-default','uk-card-body','uk-width-1-2@s','uk-card-hover');
      li.appendChild(card);
      var title = document.createElement("h3");
      title.classList.add('uk-card-title');
      title.innerText = '白チーム';
      card.appendChild(title);
      var content = document.createElement("p");
      content.classList.add('uk-card-title');
      if(json['white']['isAlive'] === null){
        content.innerText = 'メンバー無し';
      }else if(json['white']['isAlive'] === false){
        content.innerText = '敗北';
      }else{
        content.innerText = '生存';
      }
      card.appendChild(content);
      var br = document.createElement("br");
      document.body.appendChild(br); 
  });
})