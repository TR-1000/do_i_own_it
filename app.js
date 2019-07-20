//console.log($);

// $.ajax({
//     url:"https://cors-anywhere.herokuapp.com/api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=4B605C352384ED1076D931B4A173995D&steamid=76561198056513071&include_appinfo=1&format=json"
//
// }).then(
//     (data)=>{
//         console.log(data);
//
//     },
//     ()=>{
//         console.log("bad request");
//     }
// );


/*
=========Image url formats
https://steamcdn-a.akamaihd.net/steam/apps/10500/header.jpg?
https://steamcdn-a.akamaihd.net/steam/apps/34030/header.jpg?
https://steamcommunity.com/app/34030/

=========Game property formats
gameArray = steamLibrary["response"]["games"][0].name
gameArray = steamLibrary.response.games
gameArray[index].name
gameArray[index].playtime_forever
gameArray[index].img_logo_url
gameArray[index].appid
*/


const steamLibrary = {"response":{"game_count":56,"games":[{"appid":10500,"name":"Total War: EMPIRE - Definitive Edition","playtime_forever":0,"img_icon_url":"dc10f7bad53d3d922c196d116b1c5d6a4b274768","img_logo_url":"d60c77df97439e8434f0d0be9c3e2d9f39699991","has_community_visible_stats":true},{"appid":22330,"name":"The Elder Scrolls IV: Oblivion ","playtime_forever":9021,"img_icon_url":"e33402f6e1e4ed6dd001c7add26934f345cbd31e","img_logo_url":"531dd052b9816ce1484a2c4b46a4f271963c527f","has_community_visible_stats":true},{"appid":32430,"name":"STAR WARS™: The Force Unleashed™ Ultimate Sith Edition","playtime_forever":1129,"img_icon_url":"5a4a943e2b397aaffc6ec5f17e00c9f59e0ba88c","img_logo_url":"5a545bd2a5df4e8ff82072243ebf7beff46eb977","has_community_visible_stats":true},{"appid":22370,"name":"Fallout 3 - Game of the Year Edition","playtime_forever":0,"img_icon_url":"21d7090bdea8f6685ca730850b7b55acfdb92732","img_logo_url":"ddccc41c513694e7a5542aa115e9e091d6495420","has_community_visible_stats":true},{"appid":34030,"name":"Total War: NAPOLEON - Definitive Edition","playtime_forever":0,"img_icon_url":"e6263fa77b39b3b83db00d089aed8dc0aac11b20","img_logo_url":"eca670df2bb35587996bfb4da6a45a8985ace139","has_community_visible_stats":true},{"appid":8190,"name":"Just Cause 2","playtime_forever":0,"img_icon_url":"73582e392a2b9413fe93b011665a5b9cf26ff175","img_logo_url":"26c2c027f835e968d78b212b4cc6438f692b027a","has_community_visible_stats":true},{"appid":32500,"name":"STAR WARS™: The Force Unleashed™ II","playtime_forever":1220,"img_icon_url":"88a3ef4f5cd4bbad37df743818bf379aaff014e8","img_logo_url":"3256757659e8d38690d382324f9f31dc64845fc8","has_community_visible_stats":true},{"appid":12120,"name":"Grand Theft Auto: San Andreas","playtime_forever":0,"img_icon_url":"895e9391da2b8155989022d9dd95b12e09766375","img_logo_url":"32e2d1d2054295603724f30c81c3cf46dc6392c0","has_community_visible_stats":true},{"appid":12250,"name":"Grand Theft Auto: San Andreas","playtime_forever":0,"img_icon_url":"","img_logo_url":"32e2d1d2054295603724f30c81c3cf46dc6392c0","has_community_visible_stats":true},{"appid":22350,"name":"BRINK","playtime_forever":0,"img_icon_url":"a8287f6a2627c344116d8f81fc518e71aab2a647","img_logo_url":"bf7bd2ebb60328ce51b356dcd5d53d86dd7bbba5","has_community_visible_stats":true},{"appid":20920,"name":"The Witcher 2: Assassins of Kings Enhanced Edition","playtime_forever":383,"img_icon_url":"62dd5c627664df1bcabc47727c7dcd7ccab353e9","img_logo_url":"f0274a91931ed39f7c69dca9f907ceae6450785c","has_community_visible_stats":true},{"appid":55150,"name":"Warhammer 40,000: Space Marine","playtime_forever":928,"img_icon_url":"46b0ce6e587472d1d56cc88dd32c8b57392f8b10","img_logo_url":"c18d0776e4b1db78c57e66b5bd7ba74b5927816a","has_community_visible_stats":true},{"appid":42680,"name":"Call of Duty: Modern Warfare 3","playtime_forever":597,"img_icon_url":"c3330a875925437d8216949b6571f6e941ba0679","img_logo_url":"52841f445d2a1a1df608c6625c541674a30c5985","has_community_visible_stats":true},{"appid":42690,"name":"Call of Duty: Modern Warfare 3 - Multiplayer","playtime_forever":1,"img_icon_url":"c3330a875925437d8216949b6571f6e941ba0679","img_logo_url":"52841f445d2a1a1df608c6625c541674a30c5985","has_community_visible_stats":true},{"appid":12100,"name":"Grand Theft Auto III","playtime_forever":0,"img_icon_url":"646c4b3bc16b6726e190b7a29717c4b71f9abc7d","img_logo_url":"0e73825e3abd7bfe43b55a49bbcb862aee7c2e71","has_community_visible_stats":true},{"appid":12230,"name":"Grand Theft Auto III","playtime_forever":0,"img_icon_url":"","img_logo_url":"0e73825e3abd7bfe43b55a49bbcb862aee7c2e71","has_community_visible_stats":true},{"appid":108800,"name":"Crysis 2 Maximum Edition","playtime_forever":214,"img_icon_url":"5f401ab4b7d16ca8f778ff6b85dd25e0d3d49460","img_logo_url":"bee338e11932e97e995b6e2d84d0772f7b22f2a9","has_community_visible_stats":true},{"appid":49520,"name":"Borderlands 2","playtime_forever":316,"img_icon_url":"a3f4945226e69b6196074df4c776e342d3e5a3be","img_logo_url":"86b0fa5ddb41b4dfff7df194a017f3418130d668","has_community_visible_stats":true},{"appid":200510,"name":"XCOM: Enemy Unknown","playtime_forever":93,"img_icon_url":"48be2fee1d0d511b5c7313e1359beafd36ea92ed","img_logo_url":"eaa298d2b0d908b2c4f5370d2c8c59a8eff887c6","has_community_visible_stats":true},{"appid":43110,"name":"Metro 2033","playtime_forever":29,"img_icon_url":"a70fe6dc214f24107d20596f3040dbfa220ed42d","img_logo_url":"df9a163ac1f28dfc84c93a6fc0dc51719eaef518","has_community_visible_stats":true},{"appid":12110,"name":"Grand Theft Auto: Vice City","playtime_forever":0,"img_icon_url":"5f7423da14152cfbe201103ceba3112988624a98","img_logo_url":"6ba37ecba052f89c72272dd28b2daa89087a7eb3","has_community_visible_stats":true},{"appid":12240,"name":"Grand Theft Auto: Vice City","playtime_forever":0,"img_icon_url":"","img_logo_url":"6ba37ecba052f89c72272dd28b2daa89087a7eb3","has_community_visible_stats":true},{"appid":34870,"name":"Sniper Ghost Warrior 2","playtime_forever":71,"img_icon_url":"da27c4234c040808171754145b8bb82e837b89ff","img_logo_url":"81fe75c61d1a1537305a7d7ee35943f095f5ce91","has_community_visible_stats":true},{"appid":107410,"name":"Arma 3","playtime_forever":575,"img_icon_url":"3212af52faf994c558bd622cb0f360c1ef295a6b","img_logo_url":"b49962441a01f1f80b180af1293608dddf7df6b0","has_community_visible_stats":true},{"appid":8870,"name":"BioShock Infinite","playtime_forever":1137,"img_icon_url":"4ebaf5f9ee74f50152f7ff361debef7553fa0e4e","img_logo_url":"870bb889e192cf8d31876ed04d329a5d51c6fc2c","has_community_visible_stats":true},{"appid":35450,"name":"Rising Storm/Red Orchestra 2 Multiplayer","playtime_forever":0,"img_icon_url":"d70423dddb3bb2a144e38ab9cc811e6fda1eb622","img_logo_url":"02d367780a6dcdba708bb8b94fbc42f23ba99a5b","has_community_visible_stats":true},{"appid":72850,"name":"The Elder Scrolls V: Skyrim","playtime_forever":1755,"img_icon_url":"b9aca8a189abd8d6aaf09047dbb0f57582683e1c","img_logo_url":"c5af3cde13610fca25cd17634a96d72487d21e74","has_community_visible_stats":true},{"appid":209000,"name":"Batman™: Arkham Origins","playtime_forever":1114,"img_icon_url":"76dac70a2206de1a80da4950da43e1b05ea302a8","img_logo_url":"21a0c80630abe3a9dceddcbc224ed6b5b763c5b9","has_community_visible_stats":true},{"appid":235600,"name":"Tom Clancy's Splinter Cell Blacklist","playtime_forever":8,"img_icon_url":"79624b568725b40abafdbbbabbcbc425fca3e6f9","img_logo_url":"4f8c6c8ece7e758498b48ff504d6bd60809ca7f1","has_community_visible_stats":true},{"appid":252110,"name":"Lovers in a Dangerous Spacetime","playtime_forever":0,"img_icon_url":"1661236ad6879957c73f0090efee34cdba2be649","img_logo_url":"ae4b103bc8edbcc9230cd10106295343e10a9951","has_community_visible_stats":true},{"appid":214950,"name":"Total War: ROME II - Emperor Edition","playtime_forever":696,"img_icon_url":"08ae0b3454bfe8e7ae9038331b27629667119a24","img_logo_url":"3d7288fc5fd2d84036845fcc052e18374fcc6ccd","has_community_visible_stats":true},{"appid":209160,"name":"Call of Duty: Ghosts","playtime_forever":568,"img_icon_url":"634577eb0ac94ce620c328885961ed6756823474","img_logo_url":"365ca1edcbcd2521729fb51756b450dddaaae5e1","has_community_visible_stats":true},{"appid":209170,"name":"Call of Duty: Ghosts - Multiplayer","playtime_forever":643,"img_icon_url":"634577eb0ac94ce620c328885961ed6756823474","img_logo_url":"365ca1edcbcd2521729fb51756b450dddaaae5e1","has_community_visible_stats":true},{"appid":243470,"name":"Watch_Dogs","playtime_forever":3284,"img_icon_url":"53368e59a196dfa9af66ecd32135939da97fa72e","img_logo_url":"8957636e0668d8913539aa535a8a508e3e54b1f4","has_community_visible_stats":true},{"appid":268910,"name":"Cuphead","playtime_forever":40,"img_icon_url":"c19f1bd916b6d171e94089d03112ec4e4e4da84e","img_logo_url":"d7007e2e5eeedc7da58e8b2c79fcf16fcded19fe","has_community_visible_stats":true},{"appid":287700,"name":"METAL GEAR SOLID V: THE PHANTOM PAIN","playtime_forever":0,"img_icon_url":"7a1737163c96ea641143db45709a4ac444ba8f7b","img_logo_url":"6af3d5aae37f4d5e6add4f49d5edd58f7bdd420b","has_community_visible_stats":true},{"appid":292030,"name":"The Witcher 3: Wild Hunt","playtime_forever":967,"img_icon_url":"87118494c65a92e1ac4c9734ce91950c1d6fe9a5","img_logo_url":"2f22c2e5528b78662988dfcb0fc9aad372f01686","has_community_visible_stats":true},{"appid":238090,"name":"Sniper Elite 3","playtime_forever":1532,"img_icon_url":"addaab4e7308d808f53d32fbcdec0d9c2deb20fd","img_logo_url":"bd0bbf10de9f7ca196ca598ae11218e36ed2025c","has_community_visible_stats":true},{"appid":312660,"name":"Sniper Elite 4","playtime_forever":3182,"img_icon_url":"3a1dbbf59326c0bb78113db7ac0d70b9988b3ce8","img_logo_url":"d02007103e5b67b1c3fc017408e12348e15f5027","has_community_visible_stats":true},{"appid":313120,"name":"Stranded Deep","playtime_forever":0,"img_icon_url":"1d2f450f4cf55ecf0275f49f68a3440eef93ad27","img_logo_url":"8df3aea9fd942cf9bd0a7a32c23936a2e91229c4","has_community_visible_stats":true},{"appid":314520,"name":"Euro Fishing","playtime_forever":29,"img_icon_url":"74ccf65d66330c68b0ee1964846b12a5bd036f0e","img_logo_url":"ca91e976d9ef5f8f56ffbfc7f119bedd8a74466e","has_community_visible_stats":true},{"appid":321040,"name":"DiRT 3 Complete Edition","playtime_forever":0,"img_icon_url":"fdfb3aa153b57d6ae6cd8099cb4456b3d5b182b6","img_logo_url":"bb89ef19777c30c8551b0f4eea296d6ca33007cc","has_community_visible_stats":true},{"appid":209650,"name":"Call of Duty: Advanced Warfare","playtime_forever":433,"img_icon_url":"aab8b39ef63c54af5497b55aa104d5c7ec860fd9","img_logo_url":"490e9d9f1d7d15ecfa2ac40636268a376b1a7c1d","has_community_visible_stats":true},{"appid":209660,"name":"Call of Duty: Advanced Warfare - Multiplayer","playtime_forever":247,"img_icon_url":"aab8b39ef63c54af5497b55aa104d5c7ec860fd9","img_logo_url":"5d7c7294f3fd8e8aa4263d8a754d46759e8250b4","has_community_visible_stats":true},{"appid":365720,"name":"Skyrim Script Extender (SKSE)","playtime_forever":1,"img_icon_url":"48eaa1815ac4beddc4d7c9fec6c2517f6f0b718e","img_logo_url":"2e321af767f304de67d59f9c4329a8b8d553739b","has_community_visible_stats":true},{"appid":377160,"name":"Fallout 4","playtime_forever":12645,"img_icon_url":"779c4356ebe32af2af7c9f0bbba595dfe872cd7f","img_logo_url":"8977a8e98acbbdd3c0ff905afb7e0a6e2eb555ea","has_community_visible_stats":true},{"appid":337000,"name":"Deus Ex: Mankind Divided™","playtime_forever":2488,"img_icon_url":"90a596fcc9934c7fe20d1202bca2c6fc80375d54","img_logo_url":"092d516fd9e9abd05ed0182a9d57695d9b9b1285","has_community_visible_stats":true},{"appid":311210,"name":"Call of Duty: Black Ops III","playtime_forever":781,"img_icon_url":"bd3e3a9516b480164df25d16e49ae4ce4a063cb4","img_logo_url":"359426a1440e4af03febda524f57771f784b4169","has_community_visible_stats":true},{"appid":455130,"name":"Call of Duty: Black Ops III – Mod Tools","playtime_forever":0,"img_icon_url":"f5b052d3be4796e2a7a1f0f7a9578aa773882b5f","img_logo_url":"4022defd0a99127c6264a3d31ef2a529b46ce0fe","has_community_visible_stats":true},{"appid":364360,"name":"Total War: WARHAMMER","playtime_forever":1392,"img_icon_url":"918a2af60362c81e36dabb20bf99c4d1aea45ff8","img_logo_url":"cce5cf47318bfebf31c26307bcd33fc9302d364e","has_community_visible_stats":true},{"appid":292730,"name":"Call of Duty: Infinite Warfare","playtime_forever":2164,"img_icon_url":"8e3c9bc9a9aa614c436b12db701c4b7afe6ca672","img_logo_url":"6b35e7d4824778146ed69ca919bc3e049e867823","has_community_visible_stats":true},{"appid":480490,"name":"Prey","playtime_forever":62,"img_icon_url":"5ef565e374f039469e4a5c332cd51584af7ec5db","img_logo_url":"537e5753f65f16b745e83aabe83ca0c6e1dcbbb8","has_community_visible_stats":true},{"appid":489830,"name":"The Elder Scrolls V: Skyrim Special Edition","playtime_forever":4275,"img_icon_url":"0dfe3eed5658f9fbd8b62f8021038c0a4190f21d","img_logo_url":"356b389ad5e6937f097b21b23acbb89608878ecf","has_community_visible_stats":true},{"appid":612880,"name":"Wolfenstein II: The New Colossus","playtime_forever":29,"img_icon_url":"fd5c894c47b49a7d5e46e7ed60d6f1fdf60d210d","img_logo_url":"8e25882c2b5ee898318cecab741a3187eb43cbaf","has_community_visible_stats":true},{"appid":476600,"name":"Call of Duty: WWII","playtime_forever":1511,"img_icon_url":"9cc56555b04419785037d36362b71e2854daa69c","img_logo_url":"e5974de1de76449d2fe88d3397e8aec26d1e79b9","has_community_visible_stats":true},{"appid":476620,"name":"Call of Duty: WWII - Multiplayer","playtime_forever":12,"img_icon_url":"61353c6b23a7c04b11c875044a243210563e74ba","img_logo_url":"d0768126c6ce669bb729af4468d3c5ad1b66b252","has_community_visible_stats":true}]}}

//const playerIdInput = $("#player-id-box").val();
//const gameTitleInput = $("#game-title-box").val();
//const input = "Total War: NAPOLEON – Definitive Edition"
//const libraryArray = steamLibrary.response.games
let appId;
let gameName;
let playTime;
let gameObjectArray;
//=======================================Variables==============================
$("form").on("submit", (event) => {
  const playerIdInput = $("#player-id-box").val();
  //const gameTitleInput = $("#game-title-box").val();
  console.log(playerIdInput);
  //console.log(gameTitleInput);
  event.preventDefault();
  $.ajax({
      url:`https://cors-anywhere.herokuapp.com/api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=4B605C352384ED1076D931B4A173995D&steamid=${playerIdInput}&include_appinfo=1&format=json`

  }).then(
      (data)=>{
        //console.log(data);
        gameObjectArray = data.response.games;
        console.log(gameObjectArray);
        $("#button-div").empty();
        $("<button>").text("Your Steam Games").on("click",getGames).appendTo($("#button-div"));
        $("<button>").text("Unplayed Games").on("click",getGamesUnplayed).appendTo($("#button-div"));
        $("<button>").text("Random Unplayed Game").on("click",getRandomUnplayed).appendTo($("#button-div"));
      },

      ()=>{
          console.log("bad request");
      }
  );
})

// ====================================FUNCTIONS================================

$("#library-button").on("click",() => {
  $("main").empty();
});

const getGames = () => {
  $("#games-div").empty();
  for (game of gameObjectArray) {
    $("<object>").attr({
      "data":`https://steamcdn-a.akamaihd.net/steam/apps/${game.appid}/header.jpg?`,
      "type":"image/jpg"
    }).appendTo($("#games-div"))
  }
}


const getGamesUnplayed = () => {
  $("#games-div").empty();
  for (game of gameObjectArray) {
    if (game.playtime_forever === 0) {
      $("<object>").attr({
        "data":`https://steamcdn-a.akamaihd.net/steam/apps/${game.appid}/header.jpg?`,
        "type":"image/jpg"
      }).appendTo($("#games-div"))
      // $("<img>").attr({
      //   "src":`https://steamcdn-a.akamaihd.net/steam/apps/${game.appid}/header.jpg?`,
      //   "alt":"no image available for this item which means it's not a playable game. NEXT!"
      // })
      //   .appendTo($("#games-div"))
    }
  }
}


// const gameInfo = (input) => {
//   let nameOfGames = [];
//   for (game of libraryArray) {
//     nameOfGames.push(game.name);
//   }
//   if (nameOfGames.includes(input)) {
//     console.log(`${input} is in you library!`);
//     let index = nameOfGames.indexOf(input);
//     $("<h1>").text(`${input} is in you library!`).appendTo($("main"))
//     $("<img>").attr("src", `https://steamcdn-a.akamaihd.net/steam/apps/${libraryArray[index].appid}/header.jpg?`).appendTo($("main"));
//   }
//   else {
//     $("<h1>").text(`${input} is not in your library...yet.`).appendTo($("main"))
//     console.log(`${input} is not in your library...yet.`);
//   }
// }

const $h1 = $("<h1>").attr("id","playlist").text("Playlist").hide().appendTo($("#playlist-div"))

const getRandomUnplayed = () => {
  $("#random-game-div").empty();
  let unplayedGamesArray = []
  for (game of gameObjectArray) {
    if (game.playtime_forever === 0) {
      unplayedGamesArray.push(game);
    }
  }
  let randomGame = unplayedGamesArray[Math.floor(Math.random()*unplayedGamesArray.length)]
  $("<object>").attr({
    "data":`https://steamcdn-a.akamaihd.net/steam/apps/${randomGame.appid}/header.jpg?`,
    "type":"image/jpg"
  }).appendTo($("#random-game-div")).on("click", () => {
    $($h1).slideDown();

    $("<a>").attr({
      "href":`https://store.steampowered.com/${randomGame.appid}/`,
      "target":"_black"}).text(`${randomGame.name}`).appendTo($("#playlist").fadeIn());
    })
}
