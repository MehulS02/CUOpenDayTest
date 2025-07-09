(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerPolicy&&(t.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?t.credentials="include":a.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(a){if(a.ep)return;a.ep=!0;const t=e(a);fetch(a.href,t)}})();const f="/CUOpenDayTest/cu-logo.svg";let s;function m(){const r=document.createElement("div");r.id="event-modal",r.className=`
    fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden 
  `,r.innerHTML=`
    <div class="bg-white w-9/10 max-w-lg mx-auto p-6 overflow-y-auto rounded-lg shadow-lg relative h-3/4">
      <button id="close-modal" class="fixed absolute top-2 right-2 text-cardiff-dark bg-transparent hover:text-black text-2xl">&times;</button>
      <h2 class="text-2xl font-bold mb-4">Events</h2>
      <div class="relative">
      <input id="searchEvent" type="text"
        placeholder="Search Events" aria-label="Search events"
        class="border border-cardiff-grey rounded-lg pl-12 pr-4 py-2 my-6 w-full focus:outline-none focus:ring-2 focus:ring-cardiff-red"
      />
      <button id="clearModalSearch" class="absolute right-3 top-1/2 transform -translate-y-1/2 text-cardiff-dark bg-transparent hover:text-black text-md hidden">
        &times;
      </button>
      </div>
      <div id="modal-content" class="space-y-4 max-h-auto overflow-y-auto max-w-auto">
        Book your open day event
      </div>
    </div>
  `,document.body.appendChild(r),document.getElementById("searchEvent")?.addEventListener("input",d=>{const n=d.target.value.toLowerCase(),a=d.target,t=document.getElementById("clearModalSearch"),o=s.filter(c=>c.title?.toLowerCase().includes(n)||c.description_short?.toLowerCase().includes(n)||c.programType?.type?.toLowerCase().includes(n));l(o),a.value?t.classList.remove("hidden"):t.classList.add("hidden")}),document.getElementById("clearModalSearch")?.addEventListener("click",()=>{const d=document.getElementById("searchEvent");d&&(d.value=""),document.getElementById("clearModalSearch").classList.add("hidden"),l(s)}),document.getElementById("close-modal")?.addEventListener("click",()=>{h()})}function p(r){const d=document.getElementById("event-modal");if(!d)return;const e=document.getElementById("searchEvent");s=r,l(s),e&&(e.value=""),d.classList.remove("hidden")}function l(r){const d=document.getElementById("modal-content");if(d){if(console.log(r),r.length===0){d.innerHTML='<p class="text-red-600">No events data found.</p>';return}d&&(d.innerHTML="",r.sort((e,n)=>new Date(e.start_time).getTime()-new Date(n.start_time).getTime()),r.forEach(e=>{const n=new Date(e.start_time),a=String(n.getDate()).padStart(2,"0"),t=n.toLocaleString("default",{month:"short"}),o=n.getFullYear(),c=document.createElement("div");c.className="border-l-4 border-cardiff-red relative bg-cardiff-light align:left h-full",c.innerHTML=`
      <div class="bg-cardiff-red text-cardiff-white w-20 pl-0">&nbsp; ${e.programType.type}</div>
        <div class="pl-4">
        <div class="flex flex-row items-left min-w-[70px] pt-3">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" version="1.1" id="Capa_1" width="20px" height="20px" viewBox="0 0 610.398 610.398" xml:space="preserve">
            <g><g><path d="M159.567,0h-15.329c-1.956,0-3.811,0.411-5.608,0.995c-8.979,2.912-15.616,12.498-15.616,23.997v10.552v27.009v14.052    c0,2.611,0.435,5.078,1.066,7.44c2.702,10.146,10.653,17.552,20.158,17.552h15.329c11.724,0,21.224-11.188,21.224-24.992V62.553    V35.544V24.992C180.791,11.188,171.291,0,159.567,0z"/><path d="M461.288,0h-15.329c-11.724,0-21.224,11.188-21.224,24.992v10.552v27.009v14.052c0,13.804,9.5,24.992,21.224,24.992    h15.329c11.724,0,21.224-11.188,21.224-24.992V62.553V35.544V24.992C482.507,11.188,473.007,0,461.288,0z"/>
                <path d="M539.586,62.553h-37.954v14.052c0,24.327-18.102,44.117-40.349,44.117h-15.329c-22.247,0-40.349-19.79-40.349-44.117    V62.553H199.916v14.052c0,24.327-18.102,44.117-40.349,44.117h-15.329c-22.248,0-40.349-19.79-40.349-44.117V62.553H70.818    c-21.066,0-38.15,16.017-38.15,35.764v476.318c0,19.784,17.083,35.764,38.15,35.764h468.763c21.085,0,38.149-15.984,38.149-35.764    V98.322C577.735,78.575,560.671,62.553,539.586,62.553z M527.757,557.9l-446.502-0.172V173.717h446.502V557.9z"/>
                <path d="M353.017,266.258h117.428c10.193,0,18.437-10.179,18.437-22.759s-8.248-22.759-18.437-22.759H353.017    c-10.193,0-18.437,10.179-18.437,22.759C334.58,256.074,342.823,266.258,353.017,266.258z"/>
                <path d="M353.017,348.467h117.428c10.193,0,18.437-10.179,18.437-22.759c0-12.579-8.248-22.758-18.437-22.758H353.017    c-10.193,0-18.437,10.179-18.437,22.758C334.58,338.288,342.823,348.467,353.017,348.467z"/>
                <path d="M353.017,430.676h117.428c10.193,0,18.437-10.18,18.437-22.759s-8.248-22.759-18.437-22.759H353.017    c-10.193,0-18.437,10.18-18.437,22.759S342.823,430.676,353.017,430.676z"/>
                <path d="M353.017,512.89h117.428c10.193,0,18.437-10.18,18.437-22.759c0-12.58-8.248-22.759-18.437-22.759H353.017    c-10.193,0-18.437,10.179-18.437,22.759C334.58,502.71,342.823,512.89,353.017,512.89z"/>
                <path d="M145.032,266.258H262.46c10.193,0,18.436-10.179,18.436-22.759s-8.248-22.759-18.436-22.759H145.032    c-10.194,0-18.437,10.179-18.437,22.759C126.596,256.074,134.838,266.258,145.032,266.258z"/>
                <path d="M145.032,348.467H262.46c10.193,0,18.436-10.179,18.436-22.759c0-12.579-8.248-22.758-18.436-22.758H145.032    c-10.194,0-18.437,10.179-18.437,22.758C126.596,338.288,134.838,348.467,145.032,348.467z"/>
                <path d="M145.032,430.676H262.46c10.193,0,18.436-10.18,18.436-22.759s-8.248-22.759-18.436-22.759H145.032    c-10.194,0-18.437,10.18-18.437,22.759S134.838,430.676,145.032,430.676z"/>
                <path d="M145.032,512.89H262.46c10.193,0,18.436-10.18,18.436-22.759c0-12.58-8.248-22.759-18.436-22.759H145.032    c-10.194,0-18.437,10.179-18.437,22.759C126.596,502.71,134.838,512.89,145.032,512.89z"/>
              </g></g></svg><div class="text-cardiff-red font-bold">&nbsp;${a} ${t} ${o} &nbsp;</div>
            <div class="text-md text-cardiff-dark">
            ${e.start_time?new Date(e.start_time).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):""}
            ${e.end_time?" - "+new Date(e.end_time).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):""}
          </div>
        </div>
        
        <div class="flex-1 mb-2">
          <div class="text-lg font-semibold">${e.title}</div>
          <div class="text-md  text-cardiff-dark">${e.description_short}</div>
          <div class="text-md"> <a href="${e.location.website}" target="_blank" class="text-blue mt-4 underline">${e.location.address?` ${e.location.address},`:""}  ${e.room?` ${e.room}`:""}</a></div>
        </div>
         
        <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=${e.title}&dates=${n}&details=${e.description}&location=${e.location.address} ${e.location.website}" target="_blank" class="text-sm text-white bg-cardiff-red px-3 py-1 rounded hover:bg-white hover:text-cardiff-red hover:border-cardiff-red mt-4">
          Add to Calendar
        </a>
        <br> <br>
      </div>
      `,d.appendChild(c)}))}}function h(){const r=document.getElementById("event-modal");r&&r.classList.add("hidden")}async function g(){return await(await fetch("/CUOpenDayTest/api/OpenDay.json")).json()}function v(r){const d=document.querySelector("#app");d.innerHTML=`
   <div class="min-h-screen bg-cardiff-white font-sans px-2 py-6">
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        <a href="https://www.cardiff.ac.uk/" target="_blank" rel="noopener noreferrer">
          <img src="${f}" alt="Cardiff University Logo" class="h-16 w-auto items-left" />
        </a>
          <h1 class="text-3xl sm:text-5xl font-bold text-cardiff-red mb-8 text-center pt-10">Cardiff University Open Day</h1>
      </div>
      <div class="relative">
      <input id="searchInput" type="text"
        placeholder="Search topics"
        aria-label="Search topics"
        class="border border-cardiff-grey rounded-lg pl-12 pr-4 py-2 my-6 w-full focus:outline-none focus:ring-2 focus:ring-cardiff-red"
      />
      <button id="clearSearch" class="absolute right-3 top-1/2 transform -translate-y-1/2 text-cardiff-dark bg-transparent hover:text-black text-md hidden">
        &times;
      </button>
      </div>
    <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-cardiff-white" id="eventCards">
    </div>
    </div>
  `,e(r),document.getElementById("searchInput")?.addEventListener("input",n=>{const a=n.target.value.toLowerCase(),t=n.target,o=document.getElementById("clearSearch"),c=r.topics.filter(i=>i.name.toLowerCase().includes(a));e({topics:c}),t.value?o.classList.remove("hidden"):o.classList.add("hidden")}),document.getElementById("clearSearch")?.addEventListener("click",()=>{const n=document.getElementById("searchInput");n&&(n.value=""),document.getElementById("clearSearch").classList.add("hidden"),e(r)});function e(n){const a=document.querySelector("#eventCards");if(n.topics==0){a.innerHTML='<p class="text-red-600">No Open Day data found.</p>';return}a.innerHTML=`
        ${n.topics.map((t,o)=>t&&t.name?`
          <div class="bg-cardiff-white rounded-lg shadow p-6 flex flex-col justify-between h-full border-b-2 border-cardiff-red">
            <div class="flex-1 flex flex-col">
              <img src="${t.cover_image||f}" alt="${t.name}" class="h-60 w-full object-cover rounded mb-4" />
              <h2 class="text-xl font-bold text-cardiff-red mb-2">${t.name}</h2>
              <p class="text-cardiff-dark mb-2">${t.description||""}</p>
            </div>
            <button class="timeline-btn mt-auto bg-cardiff-white text-cardiff-red px-3 py-1 rounded border-cardiff-red hover:bg-red-700 hover:text-white" data-index="${o}">
            View events
            </button>
          </div>
        `:"").join("")}
    `,setTimeout(()=>{document.querySelectorAll(".timeline-btn").forEach(t=>{t.addEventListener("click",o=>{const i=o.currentTarget.getAttribute("data-index");if(i!==null){const u=n.topics[parseInt(i)];p(u.programs||[])}})})},0)}}g().then(r=>{v(r),m()}).catch(r=>{console.error("Failed to load Open Day data:",r);const d=document.getElementById("main-content")||document.body;d.innerHTML='<p class="text-cardiff-red ml-6">Failed to load Open Day data. Please try again later.</p>'});
