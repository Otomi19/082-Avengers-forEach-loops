var avengerPics = [
    "https://vignette.wikia.nocookie.net/ironman/images/9/96/Iron-Man-AOU-Render.png/revision/latest?cb=20150306195832",
    "https://pre00.deviantart.net/9e01/th/pre/f/2018/013/a/f/black_panther__1____png_by_captain_kingsman16-dbzwfo1.png",
    "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/f/fd/AoU_Captain_America_2shield-guard.png/revision/latest?cb=20150310052018",
    "https://pre00.deviantart.net/8197/th/pre/i/2018/013/a/b/avengers_infinity_war___black_widow_png_by_mintmovi3-dbzx3un.png",
    "https://pre00.deviantart.net/b76f/th/pre/f/2018/072/9/f/avengers_infinity_war_gamora_png_by_metropolis_hero1125-dc5rnql.png",
    "https://pre00.deviantart.net/dc6c/th/pre/f/2018/072/b/4/avengers_infinity_war_star_lord_png_by_metropolis_hero1125-dc5rnv9.png",
    "https://upload.wikimedia.org/wikipedia/en/5/59/Hulk_%28comics_character%29.png",
    "https://img.cinemablend.com/filter:scale/quill/4/d/d/d/2/4/4ddd243ad2ce3946707ce48fe726ea6cbfc289ee.jpg?mw=600 "
];
var avengerNames=["Iron Man ","Spider Man ","Hulk"];
$("button").click(function() {
    // YOUR CODE GOES INSIDE HERE
avengerPics.forEach(function(avenger){
$("#avengers").append("<img src="+ avenger +">");
});
   avengerNames.forEach(function(avengers){
$("#avengers").append( avengers );
}); 
});

