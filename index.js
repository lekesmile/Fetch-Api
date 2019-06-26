const url = 'https://jsonplaceholder.typicode.com/todos';

function getUsers(){
fetch(url)
 .then((res)=>{
     return res.json();
 })
 .then((data)=>{
    let output = '<h2>Movies</h2>';
    data.forEach((element)=>{
      output += `
      <ul>
      <li>USER: ${element.userId}</li>
      <li>TITLE: ${element.title}</li>
      <li>OK: ${element.completed}</li>
      </ul>
      ` ;
    });
     document.getElementById('demo').innerHTML = output;
 }).catch((err)=>{
     console.log(`Request not succssesfull ${err}`);
})
}

getUsers();

let names = ['daddy','mummy', 'child'];

names.forEach(element => {
    
    document.getElementById('demo1').innerHTML = `<h1>${names}</h1> </br>`  ;
    console.log(names);
    
});





function restApi(){
fetch('https://cors.io/?http://www.lolnas.fi/api/restaurants.json')
.then((res)=>{
   return res.json();
}).then((data)=>{
    let outlet= '<h1>Resturants</h1>';
     data.restaurants.forEach(element => {
         outlet += `
         <div>
         <ul>
         <li>${element.name}</li>
         <li>${Math.floor(element.distance)} km</li>
         <li>${element.data_provider_url}</li>
         
         </ul>
         </div>
         `;
     });
    document.getElementById('demo2').innerHTML = outlet;
}).catch((err)=>{
  console.log(`Can't not fetch API ${err}`)
});
}

restApi();