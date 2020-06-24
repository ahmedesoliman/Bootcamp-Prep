// YOUR CODE BELOW

function callThemAll(object, num){
	let resultArray = [];
	for(let key in object){
		let currentValue = object[key];
		if(typeof currentValue === 'function'){
			let result = currentValue(num);
			resultArray.push(result);
		}
	}
	return resultArray;
}