// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
// let movies_div=document.getElementById("")

//console.log("Hello")

let movie=document.getElementById("movies");
let id;
async function searchMovies(){

     try{
     let query=document.getElementById("search").value;
     let res = await fetch(`https://www.omdbapi.com/?apikey=3390758a&s=${query}`);
     let data= await res.json();
//6a41ddca
          let movies=data.Search;
         

          return movies;
          //appendMovies(movies);
     //console.log(movies);
     }catch(err){
          console.log(err);
     }
}

function appendMovies(data){
     data.forEach(function(el){
          let div=document.createElement("div");

          let img=document.createElement("img");
          img.src=el.Poster;
          let title=document.createElement("p")
          title.innerText=el.Title;

          let btn=document.createElement("button");
          btn.innerText="Book"
          btn.setAttribute("class","book_now")
          btn.addEventListener("click",function(){
               
               localStorage.setItem("movies",JSON.stringify(data.Poster,data.Title));
               
          });

          div.append(img,title,btn);

          movie.append(div);
          
     });

}

async function main(){
     let data=await searchMovies();
     if(data===undefined)
     {
          return false;
     }
     appendMovies(data);
}


function debounce(func,delay){
if(id){
     clearTimeout(id);
}
id=setTimeout(function() {
     func();
},delay);

}

// function myFun(){
     
    
     

// }