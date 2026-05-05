import{a as p,S as u,i as a}from"./assets/vendor-73qhTu8_.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const f="55695141-df1ad6569c10fb966400a1286",y="https://pixabay.com/api/";async function m(e){const s={key:f,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await p.get(y,{params:s})).data}let d=new u(".gallery a",{captionsData:"alt",captionDelay:250});function g(e){return e.map(({webformatURL:s,largeImageURL:o,tags:n,likes:t,views:r,comments:i,downloads:c})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${o}">
          <img class="gallery-image" src="${s}" alt="${n}" loading="lazy" />
          <div class="info">
            <p class="info-item"><b>Likes</b><span>${t}</span></p>
            <p class="info-item"><b>Views</b><span>${r}</span></p>
            <p class="info-item"><b>Comments</b><span>${i}</span></p>
            <p class="info-item"><b>Downloads</b><span>${c}</span></p>
          </div>
        </a>
      </li>`).join("")}function h(e,s){e.style.display="flex";const o=g(s);e.innerHTML=o,d.refresh()}function b(e){e.innerHTML="",e.style.display="none"}function L(e){e.style.display="flex"}function w(e){e.style.display="none"}const l=document.querySelector(".form");l.addEventListener("submit",e=>{e.preventDefault();const s=e.currentTarget.elements.searchQuery.value.trim();if(s===""){a.error({title:"Error",message:"The search field cannot be empty! Please enter a query.",position:"topRight"});return}b(),L(),m(s).then(o=>{if(o.hits.length===0){a.warning({title:"Caution",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(o.hits)}).catch(o=>{a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error("API Error:",o)}).finally(()=>{w(),l.reset()})});
//# sourceMappingURL=index.js.map
