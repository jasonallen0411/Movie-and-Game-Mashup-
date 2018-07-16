$("#movieBtn").click(function(){
	$("#movieCarousel").css("position", "relative");
	$("#movieCarousel").css("left", "43%");
	$("#movieCarousel").css("display", "block");
	$("#gameCarousel").css("display", "none");
	$("#movieBtn").css("borderColor", "yellow");
	$("#movieBtn").css("borderWidth", "medium");
	$("#gameBtn").css("borderColor", "");
	$("#movieNGameBtn").css("borderColor", "");
	$("#gameBtn").css("borderWidth", "");
	$("#movieNGameBtn").css("borderWidth", "");
	$("#movieSearchInput").css("display", "block");
	$("#searchBtnM").css("display", "block");
	$(".Mbuttons").css("display", "block");
	$("#header").html("Check These Movies Out!");

	$("#gameSearchInput").css("display", "none");
	$("#searchBtnG").css("display", "none");
	$(".Gbuttons").css("display", "none");

	$("#movieNGameSearchInput").css("display", "none");
	$("#searchBtn").css("display", "none");
	let tl = new TimelineMax();
	tl.from($("body"), 1, {backgroundColor: "#055A7F", ease: Power4.easeOut});
	tl.to($("body"), 1, {backgroundColor: "#B00022", ease: Power4.easeOut});
});

$("#searchBtnM").click(function(){
	let string = $("#movieSearchInput").val();
	let url = "http://www.omdbapi.com/?apikey=7ad73765&t=" + string;

	$.getJSON(url, function(result){
		$("#movieArea").html("");
		$("#movieArea").append('<div class="movieStuff">' + '<img src="' + result.Poster + '"><br><div class="movieThings"><span>Title: </span>' + result.Title + '<br> <span>Year: </span>' + result.Year + '<br> <span>Rated: </span>' + result.Rated + '<br> <span>Released: </span>' + result.Released + '<br> <span>Runtime: </span>' + result.Runtime + '<br> <span>Genre: </span>' + result.Genre + '<br> <span>Director: </span>' + result.Director + '<br> <span>Actors: </span>' + result.Actors + '</div></div>');
		$("#gameArea").html("");
	});
	let tl = new TimelineMax();
	tl.from($("#movieArea"), 2, {opacity: 0});
	tl.to($("#movieArea"), 2, {opacity: 1});
});

$("#gameBtn").click(function(){
	$("#gameCarousel").css("position", "relative");
	$("#gameCarousel").css("left", "43%");
	$("#gameCarousel").css("display", "block");
	$("#movieCarousel").css("display", "none");
	$("#gameBtn").css("borderColor", "yellow");
	$("#gameBtn").css("borderWidth", "medium");
	$("#movieBtn").css("borderColor", "");
	$("#movieNGameBtn").css("borderColor", "");
	$("#movieBtn").css("borderWidth", "");
	$("#movieNGameBtn").css("borderWidth", "");
	$("#movieSearchInput").css("display", "none");
	$("#searchBtnM").css("display", "none");
	$(".Mbuttons").css("display", "none");
	$("#header").html("Check These Games Out!");

	$("#movieNGameSearchInput").css("display", "none");
	$("#searchBtn").css("display", "none");

	$("#gameSearchInput").css("display", "block");
	$("#searchBtnG").css("display", "block");
	$(".Gbuttons").css("display", "block");
	let tl = new TimelineMax();
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
			let d = new Date(response[0].first_release_date);
			d = d.toLocaleDateString();
			console.log(response);
			$("#gameArea").html("");
			$("#gameArea").append('<div class="gameStuff">' + '<img height="300px" width="300px" src="https:' + response[0].cover.url + '"><div class="gameThings"<br> <span>Game Title: </span>' + response[0].name + '<br> <span>Original Release Date: </span>' + d + '<br> <span>Storyline: </span>' + response[0].storyline + '</div></div>');
			$("#movieArea").html("");
		});
		let tl = new TimelineMax();
	tl.from($("#gameArea"), 2, {opacity: 0});
	tl.to($("#gameArea"), 2, {opacity: 1});
	
});

$("#movieNGameBtn").click(function(){
	$("#gameCarousel").css("display", "inline-block");
	$("#gameCarousel").css("position", "relative");
	$("#gameCarousel").css("left", "30%");
	$("#movieCarousel").css("position", "relative");
	$("#movieCarousel").css("left", "25%");
	$("#movieCarousel").css("display", "inline-block");
	$("#movieNGameBtn").css("borderColor", "yellow");
	$("#movieNGameBtn").css("borderWidth", "medium");
	$("#movieBtn").css("borderColor", "");
	$("#gameBtn").css("borderColor", "");
	$("#movieBtn").css("borderWidth", "");
	$("#gameBtn").css("borderWidth", "");
	$("#movieSearchInput").css("display", "none");
	$("#searchBtnM").css("display", "none");
	$(".Mbuttons").css("display", "block");
	$("#header").html("Check These Movies and Games Out!");

	$("#movieNGameSearchInput").css("display", "block");
	$("#searchBtn").css("display", "block");

	$("#gameSearchInput").css("display", "none");
	$("#searchBtnG").css("display", "none");
	$(".Gbuttons").css("display", "block");
	let tl = new TimelineMax();
	tl.from($("body"), 1, {backgroundColor: "#055A7F", ease: Power4.easeOut});
	tl.to($("body"), 1, {backgroundColor: "#B00054", ease: Power4.easeOut});
});

$("#searchBtn").click(function(){
	let string = $("#movieNGameSearchInput").val();
	let url = "http://www.omdbapi.com/?apikey=7ad73765&t=" + string;

	$.getJSON(url, function(result){
		$("#movieArea").html("");
		$("#movieArea").append('<div class="movieStuff">' + '<img src="' + result.Poster + '"><br><div class="movieThings"><span>Title: </span>' + result.Title + '<br> <span>Year: </span>' + result.Year + '<br> <span>Rated: </span>' + result.Rated + '<br> <span>Released: </span>' + result.Released + '<br> <span>Runtime: </span>' + result.Runtime + '<br> <span>Genre: </span>' + result.Genre + '<br> <span>Director: </span>' + result.Director + '<br> <span>Actors: </span>' + result.Actors + '</div></div>');
	});	

	$.ajax({
		type: 'GET',
		url: 'https://api-endpoint.igdb.com/games/?search=' + $("#movieNGameSearchInput").val() + '&fields=name,first_release_date,storyline,cover',
		headers: {
			'user-key': 'af22551cc9cf9b6043350d9251ed1487',
			'Accept': 'application/json'
				}
		}).done(function(response){
			let d = new Date(response[0].first_release_date);
			d = d.toLocaleDateString();
			console.log(response);
			$("#gameArea").html("");
			$("#gameArea").append('<div class="gameStuff">' + '<img height="300px" width="300px" src="https:' + response[0].cover.url + '"><div class="gameThings"<br> <span>Game Title: </span>' + response[0].name + '<br> <span>Original Release Date: </span>' + d + '<br> <span>Storyline: </span>' + response[0].storyline + '</div></div>');
		});
	let tl = new TimelineMax();
	tl.from($("#movieArea"), 1, {opacity: 0});
	tl.to($("#movieArea"), 1, {opacity: 1});
	tl.from($("#gameArea"), 1, {opacity: 0});
	tl.to($("#gameArea"), 1, {opacity: 1});
		
});

	
		



$("#robocop").click(function(){
	let url = "http://www.omdbapi.com/?apikey=7ad73765&t=robocop";

	$.getJSON(url, function(result){
		$("#movieArea").html("");
		$("#movieArea").append('<div class="movieStuff">' + '<img src="' + result.Poster + '"><br><div class="movieThings"><span>Title: </span>' + result.Title + '<br> <span>Year: </span>' + result.Year + '<br> <span>Rated: </span>' + result.Rated + '<br> <span>Released: </span>' + result.Released + '<br> <span>Runtime: </span>' + result.Runtime + '<br> <span>Genre: </span>' + result.Genre + '<br> <span>Director: </span>' + result.Director + '<br> <span>Actors: </span>' + result.Actors + '</div></div>');
	});	
		
});

$("#theShining").click(function(){
	let url = "http://www.omdbapi.com/?apikey=7ad73765&t=the-shining";

	$.getJSON(url, function(result){
		$("#movieArea").html("");
		$("#movieArea").append('<div class="movieStuff">' + '<img src="' + result.Poster + '"><br><div class="movieThings"><span>Title: </span>' + result.Title + '<br> <span>Year: </span>' + result.Year + '<br> <span>Rated: </span>' + result.Rated + '<br> <span>Released: </span>' + result.Released + '<br> <span>Runtime: </span>' + result.Runtime + '<br> <span>Genre: </span>' + result.Genre + '<br> <span>Director: </span>' + result.Director + '<br> <span>Actors: </span>' + result.Actors + '</div></div>');
	});	
		
});

$("#rambo").click(function(){
	let url = "http://www.omdbapi.com/?apikey=7ad73765&t=rambo";

	$.getJSON(url, function(result){
		$("#movieArea").html("");
		$("#movieArea").append('<div class="movieStuff">' + '<img src="' + result.Poster + '"><br><div class="movieThings"><span>Title: </span>' + result.Title + '<br> <span>Year: </span>' + result.Year + '<br> <span>Rated: </span>' + result.Rated + '<br> <span>Released: </span>' + result.Released + '<br> <span>Runtime: </span>' + result.Runtime + '<br> <span>Genre: </span>' + result.Genre + '<br> <span>Director: </span>' + result.Director + '<br> <span>Actors: </span>' + result.Actors + '</div></div>');
	});	
		
});

$("#terminator2").click(function(){
	let url = "http://www.omdbapi.com/?apikey=7ad73765&t=terminator-2";

	$.getJSON(url, function(result){
		$("#movieArea").html("");
		$("#movieArea").append('<div class="movieStuff">' + '<img src="' + result.Poster + '"><br><div class="movieThings"><span>Title: </span>' + result.Title + '<br> <span>Year: </span>' + result.Year + '<br> <span>Rated: </span>' + result.Rated + '<br> <span>Released: </span>' + result.Released + '<br> <span>Runtime: </span>' + result.Runtime + '<br> <span>Genre: </span>' + result.Genre + '<br> <span>Director: </span>' + result.Director + '<br> <span>Actors: </span>' + result.Actors + '</div></div>');
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
			let d = new Date(response[0].first_release_date);
			d = d.toLocaleDateString();
			console.log(response);
			$("#gameArea").html("");
			$("#gameArea").append('<div class="gameStuff">' + '<img height="300px" width="300px" src="https:' + response[0].cover.url + '"><div class="gameThings"<br> <span>Game Title: </span>' + response[0].name + '<br> <span>Original Release Date: </span>' + d + '<br> <span>Storyline: </span>' + response[0].storyline + '</div></div>');
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
			let d = new Date(response[0].first_release_date);
			d = d.toLocaleDateString();
			console.log(response);
			$("#gameArea").html("");
			$("#gameArea").append('<div class="gameStuff">' + '<img height="300px" width="300px" src="https:' + response[0].cover.url + '"><div class="gameThings"<br> <span>Game Title: </span>' + response[0].name + '<br> <span>Original Release Date: </span>' + d + '<br> <span>Storyline: </span>' + response[0].storyline + '</div></div>');
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
			let d = new Date(response[0].first_release_date);
			d = d.toLocaleDateString();
			console.log(response);
			$("#gameArea").html("");
			$("#gameArea").append('<div class="gameStuff">' + '<img height="300px" width="300px" src="https:' + response[0].cover.url + '"><div class="gameThings"<br> <span>Game Title: </span>' + response[0].name + '<br> <span>Original Release Date: </span>' + d + '<br> <span>Storyline: </span>' + response[0].storyline + '</div></div>');
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
			let d = new Date(response[0].first_release_date);
			d = d.toLocaleDateString();
			console.log(response);
			$("#gameArea").html("");
			$("#gameArea").append('<div class="gameStuff">' + '<img height="300px" width="300px" src="https:' + response[0].cover.url + '"><div class="gameThings"<br> <span>Game Title: </span>' + response[0].name + '<br> <span>Original Release Date: </span>' + d + '<br> <span>Storyline: </span>' + response[0].storyline + '</div></div>');
			$("#movieArea").html("");
		});
});








