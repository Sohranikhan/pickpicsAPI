let main = document.querySelector(".main")

const apikey="32871854-16cd69975c8ba6e6a83a25a60"
const url = "https://pixabay.com/api?key="
const pcatch = async()=>{
    const getPic = await fetch(url+apikey)
    const data = await getPic.json()
 showpics(data.hits)
}
pcatch()
let divgo = document.querySelector(".imgCard")
const showpics=(response)=>{
    
response.forEach(element => {
    console.log(element)
    let newDiv = document.createElement("div")    
    
    newDiv.classList.add("imgCard")
    
    newDiv.innerHTML=`
    <div class="p1">
            <img src="${element.webformatURL}" alt="${element.tags}">
            <div class="overlay">
                <h4>${element.tags}</h4>
               <div class="tags" >
               <a href="#fullscr" onclick=showfull("${element.largeImageURL}")>Download</a>
</div>
            </div>
        </div>
       
    `
    main.appendChild(newDiv)
         
});
}
let inputVal = document.querySelector("#value");

inputVal.addEventListener("keyup", function(event){
    main.innerHTML=""
    if(event.target.value!=""){
       const newfun=async()=>{
       
        const getPi = await fetch(`${url}${apikey}&q=${inputVal.value}`)
        console.log(`${url}${apikey}&q=${inputVal.value}`)
    const data1 = await getPi.json()
 showpics(data1.hits)
       };
       newfun()
    }
    else{
  pcatch();
    }
})

let full=document.querySelector(".full")
const showfull = (url)=>{
    console.log(url )
    
    full.innerHTML=`
    <img src="icon.png" alt="icon" onclick="closeit()" class="clo">

    <img src="${url}" alt="" id="fullscreen">
    `
   
   full.classList.remove("cls")
}
const closeit=()=>{
full.classList.add("cls")
}