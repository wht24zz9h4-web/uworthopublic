/*
 * Link data is intentionally kept here, separate from the UI.
 * Add/edit a link by changing one object in the appropriate category.
 */
const categories = [
  {
    id: 'Microsoft', title: 'Microsoft', icon: '▦', size: 'large',
    links: [
      { name: 'Outlook', url: 'https://outlook.com/uw.edu', icon: 'https://cdn.simpleicons.org/microsoftoutlook' },
      { name: 'Teams', url: 'https://www.office.com/launch/teams', icon: 'https://cdn.simpleicons.org/microsoftteams' },
      { name: 'OneDrive', url: 'https://www.office.com/launch/onedrive', icon: 'https://cdn.simpleicons.org/microsoftonedrive' },
      { name: 'OneNote', url: 'https://www.office.com/launch/onenote', icon: 'https://cdn.simpleicons.org/microsoftonenote' },
    ]
  },
  {
    id: 'Google', title: 'Google', icon: '▱', size: 'small',
    links: [
      { name: 'Drive', url: 'https://drive.google.com', icon: 'https://cdn.simpleicons.org/googledrive' },
      { name: 'Calendar', url: 'https://calendar.google.com', icon: 'https://cdn.simpleicons.org/googlecalendar' },
    ]
  },
  {
    id: 'Remote Access', title: 'Remote Access', icon: '▥', size: 'small',
    links: [
      { name: 'Epic', url: 'https://access.uwmedicine.org/', fallback: 'EPIC' },
      { name: 'CPRS', url: 'https://citrixaccess.va.gov/', fallback: 'CPRS' },
    ]
  },
  {
    id: 'Administration', title: 'Administration', icon: '▣', size: 'normal',
    links: [
      { name: 'MedHub', url: 'https://uw.medhub.com', icon: 'https://cdn.simpleicons.org/medhub', fallback: 'MH' },
      { name: 'Workday', url: 'https://wd5.myworkday.com/uw/login.htmld', icon: 'https://cdn.simpleicons.org/workday', fallback: 'WD' },
      { name: 'ABOS KSB', url: 'https://www.abos.org/ksb/', icon: 'https://www.abos.org/ksb/images/main-logo.svg', fallback: 'ABOS' },
    ]
  },
  {
    id: 'Internal', title: 'Internal', icon: '▤', size: 'large',
    links: [
      { name: 'Didactics Conference', url: 'https://washington.zoom.us/j/2757122822?pwd=3r9EwfBqxpywLm0haa0XGC4sF7Qa4c.1#success', fallback: 'DC' },
      { name: 'UW Clinical Toolkit', url: 'https://services.uwmedicine.org/clinicaltoolkit/public/', fallback: 'UW' },
      { name: 'Conference Form', url: 'https://forms.cloud.microsoft/pages/responsepage.aspx?id=W9229i_wGkSZoBYqxQYL0htMLtqjVflJioZWBrTaKIFUMzNMOFpUQk9SSUxTVFZDSDVYNlhSV1VKSy4u&route=shorturl', fallback: 'FORM' },
      { name: 'NCL Form', url: 'https://forms.cloud.microsoft/pages/responsepage.aspx?id=W9229i_wGkSZoBYqxQYL0mEnZkV3JElNvmOe7I0ENyxUMUFIVzVDS0c2OEc1VThFRVUwQkIzOUxNNi4u&route=shorturl', fallback: 'NCL' },
    ]
  },
  {
    id: 'References', title: 'References', icon: '▤', size: 'large',
    links: [
      { name: 'AO', url: 'https://surgeryreference.aofoundation.org/', fallback: 'AO' },
      { name: 'PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov', icon: 'https://cdn.simpleicons.org/pubmed', fallback: 'PM' },
      { name: 'UpToDate', url: 'https://www.uptodate.com/contents/search', fallback: 'UTD' },
      { name: 'Orthobullets', url: 'https://www.orthobullets.com/', fallback: 'OB' },
    ]
  }
];

const dashboard = document.querySelector('#dashboard');
const searchInput = document.querySelector('#searchInput');
const emptyState = document.querySelector('#emptyState');
const resultStatus = document.querySelector('#resultStatus');
let activeFilter = 'all';

function cardTemplate(category) {
  const sizeClass = category.size === 'small' ? 'small' : '';
  return `
    <section class="card ${category.id.toLowerCase().replaceAll(' ', '-')} ${sizeClass}" data-category="${category.id}">
      <div class="card-heading"><span class="heading-icon">${category.icon}</span>${category.title}</div>
      <div class="link-grid">
        ${category.links.map(linkTemplate).join('')}
      </div>
    </section>`;
}

function linkTemplate(link) {
  const initials = link.fallback || link.name.split(/\s+/).map(x => x[0]).join('').slice(0,4).toUpperCase();
  return `
    <a class="link-tile" href="${link.url}" target="_blank" rel="noopener noreferrer"
       data-name="${link.name.toLowerCase()}" aria-label="Open ${link.name}">
      <div class="logo-wrap">
        ${link.icon ? `<img src="${link.icon}" alt="${link.name} logo" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.hidden=false">` : ''}
        <span class="fallback-logo" ${link.icon ? 'hidden' : ''}>${initials}</span>
        <span class="external" aria-hidden="true">↗</span>
      </div>
      <span class="link-label">${link.name}</span>
    </a>`;
}

function render() {
  dashboard.innerHTML = `
    <div class="row-top">
      ${cardTemplate(categories[0])}
      ${cardTemplate(categories[1])}
      ${cardTemplate(categories[2])}
    </div>
    <div class="row-two">
      ${cardTemplate(categories[3])}
      ${cardTemplate(categories[4])}
    </div>
    <div class="row-three">
      ${cardTemplate(categories[5])}
    </div>`;
  applyFilters();
}

function applyFilters() {
  const query = searchInput.value.trim().toLowerCase();
  let visibleLinks = 0;

  document.querySelectorAll('.card').forEach(card => {
    const categoryMatches = activeFilter === 'all' || card.dataset.category === activeFilter;
    let cardVisible = false;
    card.querySelectorAll('.link-tile').forEach(tile => {
      const nameMatches = !query || tile.dataset.name.includes(query);
      const visible = categoryMatches && nameMatches;
      tile.classList.toggle('hidden-by-filter', !visible);
      if (visible) { visibleLinks++; cardVisible = true; }
    });
    card.classList.toggle('hidden-by-filter', !cardVisible);
  });

  emptyState.hidden = visibleLinks !== 0;
  resultStatus.textContent = query || activeFilter !== 'all'
    ? `${visibleLinks} link${visibleLinks === 1 ? '' : 's'} shown`
    : '';
}

searchInput.addEventListener('input', applyFilters);

document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    applyFilters();
  });
});

document.querySelector('[data-scroll-top]').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  activeFilter = 'all';
  searchInput.value = '';
  applyFilters();
});

document.addEventListener('keydown', event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === 'Escape' && document.activeElement === searchInput) {
    searchInput.value = '';
    applyFilters();
  }
});

render();
