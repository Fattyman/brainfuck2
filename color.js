Array.prototype.computeStepsBetween = function(target,steps){
	var result = [];
	var diffs = this.map(function(e,i){return target[i]-e});
	for(var j=0;j<steps;j++){result.push(this.map(function(e,i){return parseInt(e+diffs[i]*j/(steps-1));}));}
	return result;
};

function computePaletteByHex(startRgb, targetRgb, steps){
	return computePalette(getDecodedHex(startRgb),getDecodedHex(targetRgb),steps);
}

function computePalette(startRgb, targetRgb, steps){
	return startRgb.computeStepsBetween(targetRgb,steps);
}

function getDecodedHex(hex){
	const regex = /^\#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/gm;
	let m;
	var rgb = [0,0,0];
	while ((m = regex.exec(hex)) !== null) {
		if (m.index === regex.lastIndex) {
			regex.lastIndex++;
		}
		rgb = [parseInt(m[1],16), parseInt(m[2],16), parseInt(m[3],16)];
	}	
	return rgb;
}
console.log(computePaletteByHex('#000000','#003f74',5));