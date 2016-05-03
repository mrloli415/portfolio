	function run1() {
		document.frm.result.value += "1";
	}
	function run2() {
		document.frm.result.value += "2";
	}
	function run3() {
		document.frm.result.value += "3";
	}
	function run4() {
		document.frm.result.value += "4";
	}
	function run5() {
		document.frm.result.value += "5";
	}
	function run6() {
		document.frm.result.value += "6";
	}
	function run7() {
		document.frm.result.value += "7";
	}
	function run8() {
		document.frm.result.value += "8";
	}
	function run9() {
		document.frm.result.value += "9";
	}
	function run0() {
		document.frm.result.value += "0";
	}

	function runplus() {
		if(document.frm.result.value = "+"){

		}
		else{
			document.frm.result.value += "+";
	}
	}
	function runminus() {
		document.frm.result.value += "-";
	}
	function runmulti() {
		document.frm.result.value += "*";
	}
	function rundiv() {
		document.frm.result.value += "/";
	}
	function runlp() {
		document.frm.result.value += "(";
	}
	function runrp() {
		document.frm.result.value += ")";
	}

	function evalu() {
	var evalo = eval(document.frm.result.value)

	document.frm.result.value = evalo;
	}

	function runc() {
		document.frm.result.value = " ";
	}

	function backimg(){
		var answer = document.getElementById("result").value;
		if(answer < 1000){
    	document.body.style.background ='url("img/n1.jpg")'
		}
	else if (answer > 1000 && answer < 2001) {
		document.body.style.background ='url("img/n2.png")'
	}
	else if (answer > 2000 && answer < 3001) {
		document.body.style.background ='url("img/n3.jpg")'
	}
	else if (answer > 3000 && answer < 4001) {
		document.body.style.background ='url("img/n4.jpg")'
	}
	else if (answer > 4000 && answer < 5001) {
		document.body.style.background ='url("img/n5.jpg")'
	}
 else if (answer > 5000 && answer < 6001) {
  	document.body.style.background ='url("img/n6.jpg")'
 }
 else if (answer > 6000 && answer < 7001) {
 	document.body.style.background ='url("img/n7.jpg")'
 }
 else if (answer > 7000 && answer < 8001) {
 	document.body.style.background ='url("img/n8.jpg")'
 }
 else {
 	document.body.style.background ='url("img/n9.jpg")'
 }
}
