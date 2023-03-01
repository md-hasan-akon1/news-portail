const categoris = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data =>showData(data.data.news_category))
}
const showData=(datas)=>{
    const categorisContainar=document.getElementById('categoris-containar')
    datas.forEach(data=>{
       // console.log(data.category_id)
        categorisContainar.innerHTML+=`<a class="text-secondary"  onclick="fetchshownews('${data.category_id}','${data.category_name}')
        " href="#">${data.category_name}</a>` 
    })
}

const fetchshownews=(category_id, category_name)=>{
    //console.log(category_id)
    fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
    .then(res=>res.json())
    .then(data=> showAllData(data, category_name))
}
const showAllData=(data, category_name)=>{
    
  document.getElementById('categoris-name').innerText = category_name;
  document.getElementById('count').innerText=data.data.length;
  const cardNews =document.getElementById('card-news');
  cardNews.innerHTML=''
  data.data.forEach(singleData=>{
console.log(singleData)
   cardNews.innerHTML+=`   <div class="card mb-3" ">
   <div class="row g-0">
       <div class="col-md-4">
           <img src="${singleData.image_url}" class="img-fluid rounded-start" alt="...">
       </div>
       <div class="col-md-8">
           <div class="card-body">
               <h5 class="card-title h-full">${singleData.title?singleData.title :"invailid"}</h5>
               <p class="card-text">${singleData.details.slice(0,300)}.......</p>
               <img class="image1" src="${singleData.author.img}">
           </div>
       </div>
   </div>
</div>`
  })
}