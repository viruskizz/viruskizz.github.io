function printPdf() {
  window.open('files/portfolio.pdf')
}

function toggleMenu() {
  document.getElementById('mobile-menu').classList.toggle('hidden');
}

function toggleActivityCards(event, type = 'ALL') {
  const cards = document.getElementById('actvity-cards').children;
  const buttons = document.getElementById('activity-buttons').children;
  for (const btn of buttons) {
    btn.classList.replace('text-white', 'text-gray-400')
    btn.classList.replace('bg-sky-400', 'bg-white')
  }
  event.target.classList.replace('text-gray-400', 'text-white');
  event.target.classList.replace('bg-white', 'bg-sky-400')
  for (const card of cards) {
    const ctype = card.getAttribute('data-type');
    if (type === 'ALL') {
      card.classList.remove('hidden');
    } else if (ctype.toLowerCase() !== type.toLowerCase()) {
      card.classList.add('hidden')
    } else {
      card.classList.remove('hidden');
    }
  }
}