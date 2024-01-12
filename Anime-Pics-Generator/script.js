const btnElem=document.getElementById('button');
const animeElem=document.getElementById('anime');

btnElem.addEventListener('click', getAnime);

async function getAnime(){
    try {
        btnElem.disabeld=true;
        let response=await fetch('https://api.waifu.pics/sfw/waifu');
        let data=await response.json();
        animeElem.innerHTML=`<img src="${data.url}" class="img">`;
        btnElem.disabled=false;
    } catch (error) {
        animeElem.innerHTML=`<h2 style="color:white; margin-bottom:50px">Error occurred, try again later</h2>`;
    }
}