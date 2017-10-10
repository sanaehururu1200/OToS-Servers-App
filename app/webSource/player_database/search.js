$(function(){
  const url = 'http://api.otos.red/all.json'; // リクエスト先URL
  let request = new XMLHttpRequest();
  request.open('GET', url);
  request.onreadystatechange = function () {
    if (request.readyState != 4) {
      document.getElementById('title').innerText = 'ERROR';
    } else if (request.status != 200) {
      document.getElementById('title').innerHTML = '接続失敗 <br> サーバーが落ちている可能性があります';
    } else {
      let json = JSON.parse(request.responseText);
      document.getElementById('title').innerHTML = '全ユーザー';
      let search =  document.getElementById('search');
      
      Object.keys(json).forEach(function (key) {
        //div
        let div = document.createElement("div");
        grid.appendChild(div);
        //card
        let card = document.createElement("div");
        card.onclick= function() { 
          location.href='./player.html?name=' + json[key] + '';
        };
        card.classList.add('uk-card','uk-card-default','uk-card-body','uk-card-hover','content');
        div.appendChild(card);
        //title
        let title = document.createElement("p");
        title.classList.add('uk-card-title');
        title.innerText = json[key];
        card.appendChild(title);
        //br
        let br = document.createElement("br");
        document.body.appendChild(br);
      });
    }
  };
  request.send(null);

  
})