import {getUsers} from './api/userApi';

getUsers().then(result=>{
	let userBody="";
	console.log(result);

	result.forEach(user => {
		userBody+=`<tr>
		<td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
		<td>${user.id}</td>
		<td>${user.name}</td>
		</tr>`
	});
console.log(userBody);
	//window.document.getElementById('users').innerHTML = userBody;
	window.document.getElementById('users').innerHTML=userBody;
});
