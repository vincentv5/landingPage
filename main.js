/*function sort(arr){
	
	var start=0;
	var end =arr[arr.length-1];
	var mid=Math.floor((start+end)/2);
	
	var searchVal=1;
	
	if( arr.length===0){
		return ;
	}
	
	if(arr[mid] ===searchVal){
		return 1;
	}else if(arr[mid] > searchVal){
		
		return sort(arr.slice(0,mid));
		
	}else if (arr[mid] < searchVal){
		
		return sort(arr.slice(mid,arr.length));
	}
	
	
	return -1;
}

console.log(sort([1,2,3,4,5,6,7,8,9,10,11,12,13,14]));*/
/*function sortLoop(arr){
	
	var start=0;
	var end=arr[arr.length-1];
	var mid;
	var search =5;
	
	
	while(start<=end){
		mid=Math.floor((start+end)/2);
		
		if(arr[mid] === search){
			
			return search;
			break;
			
		}else if(arr[mid] > search){
			
			end=mid-1;
			
		}else if(arr[mid] < search){
			
			start=mid+1;
			
		}else {
			return -1;
		}
	}
	

	
}
console.log(sortLoop([1,2,3,4,5,6,7,8,9,10]));*/


function mergSort(left,right){
	
	
	
	
	var store=[];
	
	while(left.length> 0 && right.length > 0){
		
		if(left[0] <= right[0]){
			
			store.push(left.shift());
		}else{
			
			store.push(right.shift());
		}
	}
	
	while(left.length > 0){
		
		store.push(left.shift());
	}
	
	while(right.length> 0){
		store.push(right.shift());
	}
	
	return store;
	
}


function merge(arr){
	if(arr.length < 2){
		
		return arr;
	}
	
	var mid = Math.floor(arr.length/2);
	
	var left=merge(arr.slice(0,mid));
	var right=merge(arr.slice(mid));
	
	return mergSort(left,right);
	
}

//console.log(merge([23,5,1,20,5,10,33,12,67]));


 function mergSort(arr){
var storeVal=[];
var mid= Math.floor(arr.length/2);

var left=arr.slice(0,mid);
var right=arr.slice(mid);



while(left.length > 0 && right.length > 0){

if(left[0] <= right[0]){
	storeVal.push(left.shift());

}else{
	
	storeVal.push(right.shift());
}

}

while(left.length > 0){

storeVal.push(left.shift());
}

while(right.length > 0){
storeVal.push(right.shift());
}


return storeVal;
}

//console.log(mergSort([12,3,6,20,2,1,10,90]));*/


window.onload=function(){
	
	var canvas= document,getElementById("display");
	canvas.width=canvas.scrollWidth;
	canvas.height=canvas.scroolHeigth;
	
	var ctx= canvas.getContext("2d");

	
	
}