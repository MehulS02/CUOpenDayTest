// Utility to fetch and display Open Day data from public/OpenDay14.json
import './style.css'
import cuLogo from '/cu-logo.svg'
import { createModal, openModal } from './modal'

async function loadOpenDay() {
  // Use the correct base path for GitHub Pages
  const base = import.meta.env.BASE_URL || '/';
  const res = await fetch(`${base}api/OpenDay.json`)
  const data = await res.json()
  return data
}
// function to render the layout of the page
function renderOpenDay(data: any) {
  const app = document.querySelector<HTMLDivElement>('#app')!
  app.innerHTML = `
   <div class="min-h-screen bg-cardiff-white font-sans px-2 py-6">
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        <a href="https://www.cardiff.ac.uk/" target="_blank" rel="noopener noreferrer">
          <img src="${cuLogo}" alt="Cardiff University Logo" class="h-16 w-auto items-left" />
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
  `
  renderEvents(data)
   //event listener to search the topics in the page
  document.getElementById('searchInput')?.addEventListener('input', (e: any) => {
      const query = e.target.value.toLowerCase()
      const input = e.target as HTMLInputElement
      const clearBtn = document.getElementById('clearSearch') as HTMLElement
      const filteredTopics = data.topics.filter((t: { name: string }) =>
      t.name.toLowerCase().includes(query))
      renderEvents({ topics: filteredTopics})
      if (input.value) {
        clearBtn.classList.remove('hidden')
      } else {
        clearBtn.classList.add('hidden')
      }
  })
   //event listener to clear the search input values
 document.getElementById('clearSearch')?.addEventListener('click', () => {
  const input = document.getElementById('searchInput') as HTMLInputElement
  if (input) {
    input.value = ''
  }
  (document.getElementById('clearSearch') as HTMLElement).classList.add('hidden')
  renderEvents(data)
})
// function to render the layout of the card and its detais
  function renderEvents(data: any){
    const eventCards = document.querySelector<HTMLDivElement>('#eventCards')!
    if (data.topics == 0) {
      eventCards.innerHTML = '<p class="text-red-600">No Open Day data found.</p>'
      return
    }
    eventCards.innerHTML = `
        ${data.topics.map((topic: any,index: number) => topic && topic.name ? `
          <div class="bg-cardiff-white rounded-lg shadow p-6 flex flex-col justify-between h-full border-b-2 border-cardiff-red">
            <div class="flex-1 flex flex-col">
              <img src="${topic.cover_image || cuLogo}" alt="${topic.name}" class="h-60 w-full object-cover rounded mb-4" />
              <h2 class="text-xl font-bold text-cardiff-red mb-2">${topic.name}</h2>
              <p class="text-cardiff-dark mb-2">${topic.description || ''}</p>
            </div>
            <button class="timeline-btn mt-auto bg-cardiff-white text-cardiff-red px-3 py-1 rounded border-cardiff-red hover:bg-red-700 hover:text-white" data-index="${index}">
            View events
            </button>
          </div>
        ` : '').join('')}
    `
    //event listener to open modal
      setTimeout(() => {
      document.querySelectorAll('.timeline-btn').forEach(btn => {
        btn.addEventListener('click', (event: Event) => {
          const target = event.currentTarget as HTMLElement
          const index = target.getAttribute('data-index')
          if (index !== null) {
            const topic = data.topics[parseInt(index)]
            openModal(topic.programs || [])
             
          }
        })
      })
    }, 0)
  }
}

loadOpenDay().then( data=> {
  renderOpenDay(data)
  createModal() 
})
.catch(error => {
  console.error("Failed to load Open Day data:", error)
  const container = document.getElementById('main-content') || document.body
  container.innerHTML = '<p class="text-cardiff-red ml-6">Failed to load Open Day data. Please try again later.</p>'
})