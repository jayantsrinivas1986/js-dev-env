import 'whatwg-fetch';

export function getUsers(){
	return get('users');
}

function get(url){
	return fetch(url).then(onSuccess, onError);
}

function onSuccess(response){
	//console.log(response.json())
	return response.json();
}

function onError(error){
	console.log(error);
}

