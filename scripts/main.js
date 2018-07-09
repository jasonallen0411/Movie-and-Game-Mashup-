$("#movieBtn").click(function(){
	$("#movieSearchInput").css("display", "block");
	$("#searchBtnM").css("display", "block");
	$(".Mbuttons").css("display", "block");
	$("#header").html("Check These Movies Out!");

	$("#gameSearchInput").css("display", "none");
	$("#searchBtnG").css("display", "none");
	$(".Gbuttons").css("display", "none");

	$("#movieNGameSearchInput").css("display", "none");
	$("#searchBtn").css("display", "none");
	var tl = new TimelineMax();
	tl.from($("body"), 1, {backgroundColor: "#055A7F", ease: Power4.easeOut});
	tl.to($("body"), 1, {backgroundColor: "#B00022", ease: Power4.easeOut});
});

$("#searchBtnM").click(function(){
	var string = $("#movieSearchInput").val();
	var url = "http://www.omdbapi.com/?apikey=7ad73765&t=" + string;

	$.getJSON(url, function(result){
		$("#movieArea").html("");
		$("#movieArea").append('<div class="movieStuff">' + '<img src="' + result.Poster + '"><br><div class="movieThings">Title: ' + result.Title + '<br> Year: ' + result.Year + '<br> Rated: ' + result.Rated + '<br> Released: ' + result.Released + '<br> Runtime: ' + result.Runtime + '<br> Genre: ' + result.Genre + '<br> Director: ' + result.Director + '<br> Actors: ' + result.Actors + '</div></div>');
		$("#gameArea").html("");
	});
	var tl = new TimelineMax();
	tl.from($("#movieArea"), 2, {opacity: 0});
	tl.to($("#movieArea"), 2, {opacity: 1});
});

$("#gameBtn").click(function(){
	$("#movieSearchInput").css("display", "none");
	$("#searchBtnM").css("display", "none");
	$(".Mbuttons").css("display", "none");
	$("#header").html("Check These Games Out!");

	$("#movieNGameSearchInput").css("display", "none");
	$("#searchBtn").css("display", "none");

	$("#gameSearchInput").css("display", "block");
	$("#searchBtnG").css("display", "block");
	$(".Gbuttons").css("display", "block");
	var tl = new TimelineMax();
	tl.from($("body"), 1, {backgroundColor: "#055A7F", ease: Power4.easeOut});
	tl.to($("body"), 1, {backgroundColor: "#003D7F", ease: Power4.easeOut});
});

$("#searchBtnG").click(function(){
		$.ajax({
		type: 'GET',
		url: 'https://api-endpoint.igdb.com/games/?search=' + $("#gameSearchInput").val() + '&fields=name,first_release_date,storyline,cover',
		headers: {
			'user-key': 'af22551cc9cf9b6043350d9251ed1487',
			'Accept': 'application/json'
				}
		}).done(function(response){
			var d = new Date(response[0].first_release_date);
			console.log(response);
			$("#gameArea").html("");
			$("#gameArea").append('<div class="gameStuff">' + '<img src="https:' + response[0].cover.url + '"><br> Game Title: ' + response[0].name + '<br> Original Release Date: ' + d + '<br> Storyline: ' + response[0].storyline + '</div>');
			$("#movieArea").html("");
		});
		var tl = new TimelineMax();
	tl.from($("#gameArea"), 2, {opacity: 0});
	tl.to($("#gameArea"), 2, {opacity: 1});
	
});

$("#movieNGameBtn").click(function(){
	$("#movieSearchInput").css("display", "none");
	$("#searchBtnM").css("display", "none");
	$(".Mbuttons").css("display", "block");
	$("#header").html("Check These Movies and Games Out!");

	$("#movieNGameSearchInput").css("display", "block");
	$("#searchBtn").css("display", "block");

	$("#gameSearchInput").css("display", "none");
	$("#searchBtnG").css("display", "none");
	$(".Gbuttons").css("display", "block");
	var tl = new TimelineMax();
	tl.from($("body"), 1, {backgroundColor: "#055A7F", ease: Power4.easeOut});
	tl.to($("body"), 1, {backgroundColor: "#B00054", ease: Power4.easeOut});
});

$("#searchBtn").click(function(){
	var string = $("#movieNGameSearchInput").val();
	var url = "http://www.omdbapi.com/?apikey=7ad73765&t=" + string;

	$.getJSON(url, function(result){
		$("#movieArea").html("");
		$("#movieArea").append('<div class="movieStuff">' + '<img src="' + result.Poster + '"><br><div class="movieThings">Title: ' + result.Title + '<br> Year: ' + result.Year + '<br> Rated: ' + result.Rated + '<br> Released: ' + result.Released + '<br> Runtime: ' + result.Runtime + '<br> Genre: ' + result.Genre + '<br> Director: ' + result.Director + '<br> Actors: ' + result.Actors + '</div></div>');
	});	

	$.ajax({
		type: 'GET',
		url: 'https://api-endpoint.igdb.com/games/?search=' + $("#movieNGameSearchInput").val() + '&fields=name,first_release_date,storyline,cover',
		headers: {
			'user-key': 'af22551cc9cf9b6043350d9251ed1487',
			'Accept': 'application/json'
				}
		}).done(function(response){
			var d = new Date(response[0].first_release_date);
			console.log(response);
			$("#gameArea").html("");
			$("#gameArea").append('<div class="gameStuff">' + '<img src="https:' + response[0].cover.url + '"><br> Game Title: ' + response[0].name + '<br> Original Release Date: ' + d + '<br> Storyline: ' + response[0].storyline + '</div>');
		});
	var tl = new TimelineMax();
	tl.from($("#movieArea"), 1, {opacity: 0});
	tl.to($("#movieArea"), 1, {opacity: 1});
	tl.from($("#gameArea"), 1, {opacity: 0});
	tl.to($("#gameArea"), 1, {opacity: 1});
		
});

	
		



$("#robocop").click(function(){
	var url = "http://www.omdbapi.com/?apikey=7ad73765&t=robocop";

	$.getJSON(url, function(result){
		$("#movieArea").html("");
		$("#movieArea").append('<div class="movieStuff">' + '<img src="' + result.Poster + '"><br><div class="movieThings">Title: ' + result.Title + '<br> Year: ' + result.Year + '<br> Rated: ' + result.Rated + '<br> Released: ' + result.Released + '<br> Runtime: ' + result.Runtime + '<br> Genre: ' + result.Genre + '<br> Director: ' + result.Director + '<br> Actors: ' + result.Actors + '</div></div>');
	});	
		
});

$("#theShining").click(function(){
	var url = "http://www.omdbapi.com/?apikey=7ad73765&t=the-shining";

	$.getJSON(url, function(result){
		$("#movieArea").html("");
		$("#movieArea").append('<div class="movieStuff">' + '<img src="' + result.Poster + '"><br><div class="movieThings">Title: ' + result.Title + '<br> Year: ' + result.Year + '<br> Rated: ' + result.Rated + '<br> Released: ' + result.Released + '<br> Runtime: ' + result.Runtime + '<br> Genre: ' + result.Genre + '<br> Director: ' + result.Director + '<br> Actors: ' + result.Actors + '</div></div>');
	});	
		
});

$("#rambo").click(function(){
	var url = "http://www.omdbapi.com/?apikey=7ad73765&t=rambo";

	$.getJSON(url, function(result){
		$("#movieArea").html("");
		$("#movieArea").append('<div class="movieStuff">' + '<img src="' + result.Poster + '"><br><div class="movieThings">Title: ' + result.Title + '<br> Year: ' + result.Year + '<br> Rated: ' + result.Rated + '<br> Released: ' + result.Released + '<br> Runtime: ' + result.Runtime + '<br> Genre: ' + result.Genre + '<br> Director: ' + result.Director + '<br> Actors: ' + result.Actors + '</div></div>');
	});	
		
});

$("#terminator2").click(function(){
	var url = "http://www.omdbapi.com/?apikey=7ad73765&t=terminator-2";

	$.getJSON(url, function(result){
		$("#movieArea").html("");
		$("#movieArea").append('<div class="movieStuff">' + '<img src="' + result.Poster + '"><br><div class="movieThings">Title: ' + result.Title + '<br> Year: ' + result.Year + '<br> Rated: ' + result.Rated + '<br> Released: ' + result.Released + '<br> Runtime: ' + result.Runtime + '<br> Genre: ' + result.Genre + '<br> Director: ' + result.Director + '<br> Actors: ' + result.Actors + '</div></div>');
	});	
		
});

$("#SuperMarioBros").click(function(){
	$.ajax({
		type: 'GET',
		url: 'https://api-endpoint.igdb.com/games/?search=Super_Mario_Bros.&fields=name,first_release_date,storyline,cover',
		headers: {
			'user-key': 'af22551cc9cf9b6043350d9251ed1487',
			'Accept': 'application/json'
				}
		}).done(function(response){
			var d = new Date(response[0].first_release_date);
			console.log(response);
			$("#gameArea").html("");
			$("#gameArea").append('<div class="gameStuff">' + '<img src="https:' + response[0].cover.url + '"><br> Game Title: ' + response[0].name + '<br> Original Release Date: ' + d + '<br> Storyline: ' + response[0].storyline + '</div>');
			$("#movieArea").html("");
		});
});	

$("#Zelda").click(function(){
	$.ajax({
		type: 'GET',
		url: 'https://api-endpoint.igdb.com/games/?search=The_Legend_Of_Zelda&fields=name,first_release_date,storyline,cover',
		headers: {
			'user-key': 'af22551cc9cf9b6043350d9251ed1487',
			'Accept': 'application/json'
				}
		}).done(function(response){
			var d = new Date(response[0].first_release_date);
			console.log(response);
			$("#gameArea").html("");
			$("#gameArea").append('<div class="gameStuff">' + '<img src="https:' + response[0].cover.url + '"><br> Game Title: ' + response[0].name + '<br> Original Release Date: ' + d + '<br> Storyline: ' + response[0].storyline + '</div>');
			$("#movieArea").html("");
		});
});	

$("#Metroid").click(function(){
	$.ajax({
		type: 'GET',
		url: 'https://api-endpoint.igdb.com/games/?search=Metroid&fields=name,first_release_date,storyline,cover',
		headers: {
			'user-key': 'af22551cc9cf9b6043350d9251ed1487',
			'Accept': 'application/json'
				}
		}).done(function(response){
			var d = new Date(response[0].first_release_date);
			console.log(response);
			$("#gameArea").html("");
			$("#gameArea").append('<div class="gameStuff">' + '<img src="https:' + response[0].cover.url + '"><br> Game Title: ' + response[0].name + '<br> Original Release Date: ' + d + '<br> Storyline: ' + response[0].storyline + '</div>');
			$("#movieArea").html("");
		});
});

$("#Doom").click(function(){
	$.ajax({
		type: 'GET',
		url: 'https://api-endpoint.igdb.com/games/?search=Doom&fields=name,first_release_date,storyline,cover',
		headers: {
			'user-key': 'af22551cc9cf9b6043350d9251ed1487',
			'Accept': 'application/json'
				}
		}).done(function(response){
			var d = new Date(response[0].first_release_date);
			console.log(response);
			$("#gameArea").html("");
			$("#gameArea").append('<div class="gameStuff">' + '<img src="https:' + response[0].cover.url + '"><br> Game Title: ' + response[0].name + '<br> Original Release Date: ' + d + '<br> Storyline: ' + response[0].storyline + '</div>');
			$("#movieArea").html("");
		});
});








