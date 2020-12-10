function barra(){
	var progess = document.getElementById("progressbar");
	var totalHeight = document.body.scrollHeight - window.innerHeight;
	var progressHeight = (window.pageYOffset / totalHeight) * 100;
	progess.style.height = progressHeight + "%";
}
