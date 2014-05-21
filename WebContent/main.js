window.onload = function(){
	var lot = Math.floor(Math.random() * 4);
	var result;
	var comment;

	if(lot === 0){
		result = "凶";
		comment = "残念!";
	}else if(lot ===1){
		result = "吉";
		comment = "ちょっと悪いかな？";
	}else if(lot ===2){
		result = "中吉";
		comment = "Soso.";
	}else{
		result = "大吉";
		comment = "Very good!!";
	}

	document.getElementById('lucky').innerHTML = "<h1>"+result+"</h1>"+"<br>"+comment;

}