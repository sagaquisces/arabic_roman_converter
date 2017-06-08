var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
var arabic = [1000,900,500,   400, 100,  90,  50,  40,   10,   9,    5,   4,    1];

var outputRoman="";
var outputArabic=0;

var arabicToRoman = function(n) {
	for (var i=0;i<roman.length;i++) {
  	if (n>=arabic[i]) {
    	outputRoman += roman[i];
      n -= arabic[i];
    	i -= 1;
    }
  }

  return outputRoman;
};

var romanToArabic = function(l) {
	for (i=0;l.charAt(i)==="M";i++){ //check for multiples of 1000
  	outputArabic += 1000;
    alert("i=" + i);
    if (l.charAt(i+1)!=="M") {
    	l = l.slice(i+1);
    }
  }

  if (l.charAt(0) === "C") { //check for multiples of 100
  	if (l.charAt(1)=== "M") { //900
    	outputArabic += 900;
      l= l.slice(2);
    } else if (l.charAt(1)==="D") {//400
    	outputArabic += 400;
      l= l.slice(2);
    } else {
    	for (i=0;l.charAt(i)==="C";i++) {//100,200,300
  			outputArabic += 100;
    		alert("i=" + i);
    		if (l.charAt(i+1)!=="C") {
    			l = l.slice(i+1);
        }
    	}
    }
  } else if (l.charAt(0)==="D") { //500
  	outputArabic += 500;
    l= l.slice(1);
  	for (i=0;l.charAt(i)==="C";i++) { //600, 700, 800
  		outputArabic += 100;
    	alert("i=" + i);
    	if (l.charAt(i+1)!=="C") {
    		l = l.slice(i+1);
      }
    }
  }

  if (l.charAt(0) === "X") { //check for multiples of 10
  	if (l.charAt(1)=== "C") { //90
    	outputArabic += 90;
      l= l.slice(2);
    } else if (l.charAt(1)==="L") {//40
    	outputArabic += 40;
      l= l.slice(2);
    } else {
    	for (i=0;l.charAt(i)==="X";i++) {//10,20,30
  			outputArabic += 10;
    		alert("i=" + i);
    		if (l.charAt(i+1)!=="X") {
    			l = l.slice(i+1);
        }
    	}
    }
  } else if (l.charAt(0)==="L") { //50
  	outputArabic += 50;
    l= l.slice(1);
  	for (i=0;l.charAt(i)==="X";i++) { //60, 70, 80
  		outputArabic += 10;
    	alert("i=" + i);
    	if (l.charAt(i+1)!=="X") {
    		l = l.slice(i+1);
      }
    }
  }

  if (l.charAt(0) === "I") { //check for multiples of 1
  	if (l.charAt(1)=== "X") { //9
    	outputArabic += 9;
      l= l.slice(2);
    } else if (l.charAt(1)==="V") {//4
    	outputArabic += 4;
      l= l.slice(2);
    } else {
    	for (i=0;l.charAt(i)==="I";i++) {//10,20,30
  			outputArabic += 1;
    		alert("i=" + i);
    		if (l.charAt(i+1)!=="I") {
    			l = l.slice(i+1);
        }
    	}
    }
  } else if (l.charAt(0)==="V") { //50
  	outputArabic += 5;
    l= l.slice(1);
  	for (i=0;l.charAt(i)==="I";i++) { //60, 70, 80
  		outputArabic += 1;
    	alert("i=" + i);
    	if (l.charAt(i+1)!=="I") {
    		l = l.slice(i+1);
      }
    }
  }

  alert ("anything left? " + l);
  return outputArabic;
};

var convert = function (s) {
  if ($.isNumeric(s)) {
		arabicToRoman(s);
	} else {
		romanToArabic(s);
	}
};

//alert (arabicToRoman(111));
//alert (romanToArabic("XIIII"));


//user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

		alert ("here");

    var inputtedString = $("input#string").val();

		var result = convert(inputtedString);

		alert (result);

    $(".arabicNumber").text(outputArabic);
    $(".romanNumberal").text(outPutRoman);
  });
});
