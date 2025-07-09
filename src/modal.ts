let eventsData : any[]
//function to create the modal
export function createModal() {
  const modal = document.createElement('div')
  modal.id = 'event-modal'
  modal.className = `
    fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden 
  `
  modal.innerHTML = `
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
  `
  document.body.appendChild(modal)
  //event listener to search the events in the modal
  document.getElementById('searchEvent')?.addEventListener('input', (e: Event) => {
    const target = e.target as HTMLInputElement
    const query = target.value.toLowerCase()
    const input = e.target as HTMLInputElement
    const clearBtn = document.getElementById('clearModalSearch') as HTMLElement
    const dataFiltered = eventsData.filter((event: { title: string; description_short: string; programType: { type: string } }) =>
      event.title?.toLowerCase().includes(query) ||
      event.description_short?.toLowerCase().includes(query) ||
      event.programType?.type?.toLowerCase().includes(query)
    )
    renderModalEvents(dataFiltered)
    if (input.value) {
      clearBtn.classList.remove('hidden')
    } else {
      clearBtn.classList.add('hidden')
    }
  })
  //event listener to clear search input values
  document.getElementById('clearModalSearch')?.addEventListener('click', () => {
    const input = document.getElementById('searchEvent') as HTMLInputElement
    if (input) {
      input.value = ''
    }
    (document.getElementById('clearModalSearch') as HTMLElement).classList.add('hidden')
    renderModalEvents(eventsData)
  })
  //event listener to close the modal
  document.getElementById('close-modal')?.addEventListener('click', () => {
    closeModal()
  })
}
//function to open the modal
export function openModal(events: any[]) {
  const modal = document.getElementById('event-modal')
  
  if (!modal) return
  const searchInput = document.getElementById('searchEvent') as HTMLInputElement
  eventsData = events
  renderModalEvents(eventsData)
  if (searchInput) searchInput.value = ''
 
  modal.classList.remove('hidden')
}
// function toload all the events data required
function renderModalEvents(events: any){
    const content = document.getElementById('modal-content')
    if (!content) return
    console.log(events)
    if (events.length === 0) {
      content.innerHTML = '<p class="text-red-600">No events data found.</p>'
      return
    }
     // Clear old content
    if(!content) return
    content.innerHTML = ''
    // Sort events by time to understand the which event is occuring first
    events.sort((first: any, last: any) => new Date(first.start_time).getTime() - new Date(last.start_time).getTime())

    // load and show events 
    events.forEach((event: { start_time: string | number | Date; programType: { type: any }; end_time: string | number | Date; title: any; description_short: any; location: { website: any; address: any }; room: any; description: any }) => {
      const start = new Date(event.start_time)
      const day = String(start.getDate()).padStart(2, '0')
      const month = start.toLocaleString('default', { month: 'short' })
      const year = start.getFullYear()
      const element = document.createElement('div')
      element.className = 'border-l-4 border-cardiff-red relative bg-cardiff-light align:left h-full'
      element.innerHTML = `
      <div class="bg-cardiff-red text-cardiff-white w-20 pl-0">&nbsp; ${event.programType.type}</div>
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
              </g></g></svg><div class="text-cardiff-red font-bold">&nbsp;${day} ${month} ${year} &nbsp;</div>
            <div class="text-md text-cardiff-dark">
            ${event.start_time ? new Date(event.start_time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : ''}
            ${event.end_time ? ' - ' + new Date(event.end_time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : ''}
          </div>
        </div>
        
        <div class="flex-1 mb-2">
          <div class="text-lg font-semibold">${event.title}</div>
          <div class="text-md  text-cardiff-dark">${event.description_short}</div>
          <div class="text-md"> <a href="${event.location.website}" target="_blank" class="text-blue mt-4 underline">${event.location.address ? ` ${event.location.address},` : ''}  ${event.room ? ` ${event.room}` : ''}</a></div>
        </div>
         
        <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=${event.title}&dates=${start}&details=${event.description}&location=${event.location.address} ${event.location.website}" target="_blank" class="text-sm text-white bg-cardiff-red px-3 py-1 rounded hover:bg-white hover:text-cardiff-red hover:border-cardiff-red mt-4">
          Add to Calendar
        </a>
        <br> <br>
      </div>
      `
      content.appendChild(element)
    })
}
// close modal function
export function closeModal() {
  const modal = document.getElementById('event-modal')
  if (modal) modal.classList.add('hidden')
}