function createRandomRamp(){
	var arr = [];
	for(var i = 0; i < 10000; i++){
		arr.push({r : Math.random(), g : Math.random(), b: Math.random()});
	}
	return arr;
}
function createRandomRampOne(val){
	var val = hexToRgb(val);

	val.r /= 255;
	val.g /= 255;
	val.b /= 255;

	var arr = [];
	
	arr.push({r : val.r, g : val.g, b: val.b});
	

	return arr;
}
function createLABRamp(c1, c2, n){
	
	c1 = hexToRgb(c1);
	c2 = hexToRgb(c2);


	
	var arr1 = [c1.r, c1.g, c1.b];
	var arr2 = [c2.r, c2.g, c2.b];
	arr1 = rgb2lab(arr1);
	arr2 = rgb2lab(arr2);

	
	c1 = {l:arr1[0], a:arr1[1], b:arr1[2]};
	c2 = {l:arr2[0], a:arr2[1], b:arr2[2]};

	


	
	var arr = interpolate(c1, c2, n);


	


	return arr;
}
function interpolate(c1, c2,n){
	var arr = [];
	var dl = c2.l - c1.l;
	var da = c2.a - c1.a;
	var db = c2.b - c1.b;

	var PI = 3.14159;
	for(var i = 0; i <= n; i++){
		
		/*
		var l = c1.l + 30 * Math.sin(2*PI * i/n) + dl * i/n;
		var a = c1.a + 15 * Math.sin(4*PI * i/n) + da * i/n;
		var b = c1.b + 30 * Math.sin(6*PI * i/n) + db * i/n;
		*/
		
		var l = c1.l + 5 * ( ( (i + 3) % 6 ) -3)+ dl * i/n;
		var a = c1.a + n * Math.sin(4*PI * i/n) + da * i/n;
		var b = c1.b + n * Math.sin(2*PI * i/n) + db * i/n;
		
		
		var tmp =[ l, a, b];
		tmp  = lab2rgb(tmp);

		arr.push({r:tmp[0], g:tmp[1], b:tmp[2]});
	}
		var str = ""
	for(var i = 0; i < arr.length; i++){
		str += arr[i].r + ", "
	}
	console.log(str);
	var str = ""
	for(var i = 0; i < arr.length; i++){
		str += arr[i].g + ", "
	}
	console.log(str);
	var str = ""
	for(var i = 0; i < arr.length; i++){
		str += arr[i].b + ", "
	}
	console.log(str);
	return arr;
}
// the following functions are based off of the pseudocode
// found on www.easyrgb.com

function lab2rgb(lab){
  var y = (lab[0] + 16) / 116,
      x = lab[1] / 500 + y,
      z = y - lab[2] / 200,
      r, g, b;

  x = 0.95047 * ((x * x * x > 0.008856) ? x * x * x : (x - 16/116) / 7.787);
  y = 1.00000 * ((y * y * y > 0.008856) ? y * y * y : (y - 16/116) / 7.787);
  z = 1.08883 * ((z * z * z > 0.008856) ? z * z * z : (z - 16/116) / 7.787);

  r = x *  3.2406 + y * -1.5372 + z * -0.4986;
  g = x * -0.9689 + y *  1.8758 + z *  0.0415;
  b = x *  0.0557 + y * -0.2040 + z *  1.0570;

  r = (r > 0.0031308) ? (1.055 * Math.pow(r, 1/2.4) - 0.055) : 12.92 * r;
  g = (g > 0.0031308) ? (1.055 * Math.pow(g, 1/2.4) - 0.055) : 12.92 * g;
  b = (b > 0.0031308) ? (1.055 * Math.pow(b, 1/2.4) - 0.055) : 12.92 * b;

  return [Math.max(0, Math.min(1, r)) * 255, 
          Math.max(0, Math.min(1, g)) * 255, 
          Math.max(0, Math.min(1, b)) * 255]
}


function rgb2lab(rgb){
 
  var r = rgb[0] / 255,
      g = rgb[1] / 255,
      b = rgb[2] / 255,
      x, y, z;

  r = (r > 0.04045) ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
  g = (g > 0.04045) ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
  b = (b > 0.04045) ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

  x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
  y = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 1.00000;
  z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;

  x = (x > 0.008856) ? Math.pow(x, 1/3) : (7.787 * x) + 16/116;
  y = (y > 0.008856) ? Math.pow(y, 1/3) : (7.787 * y) + 16/116;
  z = (z > 0.008856) ? Math.pow(z, 1/3) : (7.787 * z) + 16/116;

  return [(116 * y) - 16, 500 * (x - y), 200 * (y - z)]
}

// calculate the perceptual distance between colors in CIELAB
// https://github.com/THEjoezack/ColorMine/blob/master/ColorMine/ColorSpaces/Comparisons/Cie94Comparison.cs

function deltaE(labA, labB){
  var deltaL = labA[0] - labB[0];
  var deltaA = labA[1] - labB[1];
  var deltaB = labA[2] - labB[2];
  var c1 = Math.sqrt(labA[1] * labA[1] + labA[2] * labA[2]);
  var c2 = Math.sqrt(labB[1] * labB[1] + labB[2] * labB[2]);
  var deltaC = c1 - c2;
  var deltaH = deltaA * deltaA + deltaB * deltaB - deltaC * deltaC;
  deltaH = deltaH < 0 ? 0 : Math.sqrt(deltaH);
  var sc = 1.0 + 0.045 * c1;
  var sh = 1.0 + 0.015 * c1;
  var deltaLKlsl = deltaL / (1.0);
  var deltaCkcsc = deltaC / (sc);
  var deltaHkhsh = deltaH / (sh);
  var i = deltaLKlsl * deltaLKlsl + deltaCkcsc * deltaCkcsc + deltaHkhsh * deltaHkhsh;
  return i < 0 ? 0 : Math.sqrt(i);
}
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}