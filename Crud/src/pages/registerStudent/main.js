const url = 'http://localhost:8080/api/v1/students';

  fetch(url)
  .then(res => res.json())
  .then(data => mostrarData(data))
  .catch(error => console.log(error));

 const mostrarData = (data)=>{
  let body = '';
  for (let i = 0; i < data.length;i++){
    body += `<tr><td>${data[i].studentId}</td><td>${data[i].firstName}</td><td>${data[i].lastName}<td>${data[i].email}</td></td></tr>`
  }
  document.getElementById('data').innerHTML = body
 }
  


