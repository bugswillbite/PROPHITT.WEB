const searchInput =
  document.getElementById('searchInput');

const sortSelect =
  document.getElementById('sortSelect');

const eventsContainer =
  document.getElementById('eventsContainer');

const eventResults =
  document.getElementById('eventResults');

/* EVENT DATABASE */

const events = [

  {
    title:
      "devin. feat. GreenTTea & The Tempos, Cldwaterr, Menace4Hire, Waine Ghazi",

    date:
      "January 2025",

    location:
      "Schubas Tavern • Chicago, IL",

    description:
      "Live performance of album POTE BABY featuring collaborative performances with local artists. Producer, headliner, artist DJ, artist set sequencer, solo DJ set, event organizer, and event promoter."
  },

  {
    title:
      "Sounds Of Brazil",

    date:
      "March 2024",

    location:
      "Sounds Of Brazil • New York, NY",

    description:
      "Live performance of album POTE BABY at a legendary venue. Producer, Artist DJ, and Performer."
  },

  {
    title:
      "Voices Amplified: Hip-Hop for Change",

    date:
      "January 2024",

    location:
      "Chicago, IL",

    description:
      "Event Planner, Solo DJ Set, and Artist DJ."
  },

  {
    title:
      "Book Club Chicago",

    date:
      "December 2023",

    location:
      "Chicago, IL",

    description:
      "Set Sequencer, Artist DJ, and Solo DJ Set."
  },

{
    title:
      "African Festival of the Arts",

    date:
      "September 2023",

    location:
      "Chicago, IL",

    description:
      "Set Sequencer, Artist DJ, and Solo DJ Set."
  },

{
    title:
      "Hip Hop: Child of the Blues",

    date:
      "September 2023",

    location:
      "Chicago, IL",

    description:
      "Composer, Producer, and Solo DJ Set."
  },

  {
    title:
      "Cole's Bar",

    date:
      "May 2024",

    location:
      "Cole's Bar • Chicago, IL",

    description:
      "DJ set and live performance of album POTE BABY with local artists support. Producer, Artist Set Sequencer, Artist DJ, and Solo DJ Set."
  },

{
    title:
      "Manifest Arts Festival",

    date:
      "May 2024",

    location:
      "Manifest Arts Festival • Chicago, IL",

    description:
      "Producer, Artist Set Sequencer, Artist DJ, Event Planner, and Solo DJ Set."
  },

  {
    title:
      "French Road Elementary School Color Run",

    date:
      "May 2026",

    location:
      "French Road Elementary School • Rochester, NY",

    description:
      "DJ for local elementary school charity event providing music and entertainment for students and families."
  }

];

/* LIVE SEARCH RESULTS */

searchInput.addEventListener('input', () => {

  const value =
    searchInput.value.toLowerCase().trim();

  eventResults.innerHTML = '';

  if (value === '') {
    return;
  }

  const filteredEvents =
    events.filter(event =>

      event.title.toLowerCase().includes(value) ||

      event.location.toLowerCase().includes(value) ||

      event.description.toLowerCase().includes(value)
    );

  filteredEvents.forEach(event => {

    eventResults.innerHTML += `

      <div class="event-result-card">

        <h3>${event.title}</h3>

        <div class="event-result-meta">
          ${event.date} • ${event.location}
        </div>

        <p>${event.description}</p>

      </div>

    `;

  });

});

/* SORT */

sortSelect.addEventListener('change', () => {

  const cards = Array.from(
    document.querySelectorAll('.event-card')
  );

  if (sortSelect.value === 'latest') {

    cards.sort((a, b) => {

      const yearA =
        parseInt(a.dataset.year);

      const monthA =
        parseInt(a.dataset.month);

      const yearB =
        parseInt(b.dataset.year);

      const monthB =
        parseInt(b.dataset.month);

      if (yearB !== yearA) {
        return yearB - yearA;
      }

      return monthB - monthA;

    });

  }

  else if (sortSelect.value === 'earliest') {

    cards.sort((a, b) => {

      const yearA =
        parseInt(a.dataset.year);

      const monthA =
        parseInt(a.dataset.month);

      const yearB =
        parseInt(b.dataset.year);

      const monthB =
        parseInt(b.dataset.month);

      if (yearA !== yearB) {
        return yearA - yearB;
      }

      return monthA - monthB;

    });

  }

  else {

    cards.sort((a, b) => {

      const titleA =
        a.querySelector('h2').innerText;

      const titleB =
        b.querySelector('h2').innerText;

      return titleA.localeCompare(titleB);

    });

  }

  eventsContainer.innerHTML = '';

  cards.forEach(card => {
    eventsContainer.appendChild(card);
  });

});