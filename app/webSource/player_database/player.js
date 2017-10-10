$(function(){
  if(location.search.split('=')[0] === '?name' && location.search.split('=')[1]){
    const url = 'http://api.otos.red/players/' + location.search.split('=')[1] + '.json'; // リクエスト先URL
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.onreadystatechange = function () {
      if (request.readyState != 4) {
        document.getElementById('title').innerText = 'Now Loading...';
      } else if (request.status != 200) {
        document.getElementById('title').innerHTML = '接続失敗 <br> サーバーが落ちているかユーザーが存在しません';
      } else {
        let json = JSON.parse(request.responseText);
        document.getElementById('title').innerText = location.search.split('=')[1];
          //br
          var br = document.createElement("br");
          document.body.appendChild(br);
          //bedwars['level']
          var card = document.createElement("div");
          card.classList.add('uk-card-default','uk-card-body','uk-width-1-2@s','uk-card-hover');
          document.body.appendChild(card);
          var title = document.createElement("h3");
          title.classList.add('uk-card-title');
          title.innerText = 'BedWars レベル';
          card.appendChild(title);
          var content = document.createElement("p");
          content.classList.add('uk-card-title');
          content.innerText = json['bedwars']['level'];
          card.appendChild(content);
          var br = document.createElement("br");
          document.body.appendChild(br);
          //bedwars['exp']
          var card = document.createElement("div");
          card.classList.add('uk-card-default','uk-card-body','uk-width-1-2@s','uk-card-hover');
          document.body.appendChild(card);
          var title = document.createElement("h3");
          title.classList.add('uk-card-title');
          title.innerText = 'BedWars 経験値';
          card.appendChild(title);
          var content = document.createElement("p");
          content.classList.add('uk-card-title');
          content.innerText = json['bedwars']['exp'];
          card.appendChild(content);
          var br = document.createElement("br");
          document.body.appendChild(br);
      }
    };
    request.send(null);
  }
});