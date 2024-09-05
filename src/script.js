// awal mekanisme buka tutup menu samping (side menu)
document.getElementById('btnMenu').addEventListener('click', function() {
	document.getElementById('sidemenu').style.right = "0";
})

document.addEventListener('click', function(e) {
	if (e.target.classList.contains('sidemenu')) {
		document.getElementById('sidemenu').style.right = "100%";
	}
})

//akhir mekanisme buka tutup menu samping (side menu)