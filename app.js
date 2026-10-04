/*
 * Link data is intentionally kept here, separate from the UI.
 * Add/edit a link by changing one object in the appropriate category.
 */
const categories = [
  {
    id: 'Microsoft', title: 'Microsoft', icon: '▦', size: 'large',
    links: [
      { name: 'Outlook', url: 'https://outlook.com/uw.edu', icon: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Microsoft_Office_Outlook_%282018%E2%80%932024%29.svg/1280px-Microsoft_Office_Outlook_%282018%E2%80%932024%29.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20230309112740' },
      { name: 'Teams', url: 'https://www.office.com/launch/teams', icon: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Microsoft_Office_Teams_%282025%E2%80%93present%29.svg/1280px-Microsoft_Office_Teams_%282025%E2%80%93present%29.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20251029013601' },
      { name: 'OneDrive', url: 'https://www.office.com/launch/onedrive', icon: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Microsoft_OneDrive_Icon_%282025_-_present%29.svg/1280px-Microsoft_OneDrive_Icon_%282025_-_present%29.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20251004085618' },
      { name: 'OneNote', url: 'https://www.office.com/launch/onenote', icon: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_OneNote_Icon_%282025_-_present%29.svg/1280px-Microsoft_OneNote_Icon_%282025_-_present%29.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20251004083752' },
    ]
  },
  {
    id: 'Google', title: 'Google', icon: '▧', size: 'large',
    links: [
      { name: 'Drive', url: 'https://drive.google.com', icon: 'https://www.gstatic.com/images/branding/productlogos/drive_2026/v1/web-48dp/logo_drive_2026_color_2x_web_48dp.png' },
      { name: 'Calendar', url: 'https://calendar.google.com', icon: 'https://play-lh.googleusercontent.com/vEoqLbT_QkYcEaawWBRc22N6i98OUtOUpM1LmKdVs_xx7lCsUyFfV0ZiqoUXjMijUteiBhhN4K5MpoF96FRNOg=w480-h960-rw' },
    ]
  },
  {
    id: 'Remote Access', title: 'Remote Access', icon: '▥', size: 'small',
    links: [
      { name: 'Epic', url: 'https://access.uwmedicine.org/', icon: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Epic_Systems.svg/1920px-Epic_Systems.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20220204054501' },
      { name: 'CPRS', url: 'https://citrixaccess.va.gov/', icon: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/Seal_of_the_U.S._Department_of_Veterans_Affairs.svg/1280px-Seal_of_the_U.S._Department_of_Veterans_Affairs.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20150312072903' },
    ]
  },
  {
    id: 'Administration', title: 'Administration', icon: '▣', size: 'normal',
    links: [
      { name: 'MedHub', url: 'https://uw.medhub.com', icon: 'https://play-lh.googleusercontent.com/0xex_4lzAfUfmPuq6u_QXg8eNw0-kg6VsXmmH5vkW3ETIMjgzhMPUVQXH9Q-yV-nHuscYMuoQgnzMVE_0Snd6Q=w480-h960-rw'},
      { name: 'Workday', url: 'https://wd5.myworkday.com/uw/login.htmld', icon: 'https://play-lh.googleusercontent.com/LBHcPFTCkeRM-9jbBSE4ittd6ZyIUJ7fcqrWMf-YyIJHFxNT4gyaF9pIvQ59hc-LeLgAiVd_Bdy1moNJErEdJA=w480-h960-rw'},
      { name: 'ABOS KSB', url: 'https://www.abos.org/ksb/', icon: 'https://www.abos.org/ksb/images/main-logo.svg'},
    ]
  },
  {
    id: 'Internal', title: 'Internal', icon: '▨', size: 'large',
    links: [
      { name: '26-27 MMC Schedule', url: 'https://uwnetid-my.sharepoint.com/:x:/r/personal/resdrive_uw_edu/_layouts/15/Doc.aspx?sourcedoc=%7BC3E26CC3-D6BF-4122-8E5E-3051D9332825%7D&file=MMC_Schedule_2026-2027.xlsx&action=default&mobileredirect=true', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Teaching_icon.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original'},
      { name: 'Consents', url: 'https://uwnetid-my.sharepoint.com/shared?id=%2Fpersonal%2Fresdrive%5Fuw%5Fedu%2FDocuments%2FOrthoResidents%2FConsents&listurl=%2Fpersonal%2Fresdrive%5Fuw%5Fedu%2FDocuments&viewid=520a7a95%2D453c%2D4e92%2D99d3%2D11920ae3016e&sharingv2=true&fromShare=true&at=9&FolderCTID=0x01200021EF5A5B7D1AFC44A9869B207698D475', icon: 'https://thumbs.dreamstime.com/z/information-consent-vector-man-signs-form-businessman-signs-document-clipboard-hand-illustration-flat-design-medical-97659403.jpg?ct=jpeg'},
      { name: 'MS Evals', url: 'https://uwnetid-my.sharepoint.com/shared?id=%2Fpersonal%2Fresdrive%5Fuw%5Fedu%2FDocuments%2FOrthoResidents%2FMedical%20Students%2FMed%20Student%20Evals&listurl=%2Fpersonal%2Fresdrive%5Fuw%5Fedu%2FDocuments&viewid=520a7a95%2D453c%2D4e92%2D99d3%2D11920ae3016e&sharingv2=true&fromShare=true&at=9&FolderCTID=0x01200021EF5A5B7D1AFC44A9869B207698D475', icon: 'https://thumbs.dreamstime.com/z/review-stamp-word-circle-product-evaluation-rating-criticism-to-illustrate-service-feedback-comment-assessment-48440751.jpg?ct=jpeg'},
    ]
  },
  {
    id: 'References', title: 'References', icon: '▤', size: 'large',
    links: [
      { name: 'AO', url: 'https://surgeryreference.aofoundation.org/', icon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjbNrXHe1zeR83Aj_Rtz3u_tqFAI7zz-KvrpVVT5NZZnoOd6t1srtEF5Li&s=10'},
      { name: 'OCCAM', url: 'https://occam.uwmedicine.org/', icon: 'https://play-lh.googleusercontent.com/p4X81hOFqUbe6M367b9gtX1-jTT2-txSxKeMrMmw4ax07cOHA1ZVqIVcgWqBx8ogw2MnAO3yfABhmm3W1IFI=w480-h960-rw'},
      { name: 'Open Evidence', url: 'https://www.openevidence.com/', icon: 'https://pbs.twimg.com/profile_images/1735286803777683456/3F_Hr4iA_400x400.jpg'},
      { name: 'UW MedGPT', url: 'https://chat.uwmedicine.org/', icon: 'https://static.vecteezy.com/system/resources/previews/022/227/358/non_2x/openai-chatgpt-logo-icon-free-png.png'},
      { name: 'Orthobullets', url: 'https://www.orthobullets.com/', icon: 'https://cdn.brandfetch.io/idtad9wrmE/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B'},
      { name: 'AAOS Res Study', url: 'https://learn.aaos.org/', icon: 'https://www.aaos.org/globalassets/education/rock/residentbundle_logos_resstudy.png'},
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
  return `
    <a class="link-tile" href="${link.url}" target="_blank" rel="noopener noreferrer"
       data-name="${link.name.toLowerCase()}" aria-label="Open ${link.name}">
      <div class="logo-wrap">
        <img src="${link.icon}" alt="${link.name} logo" loading="lazy">
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
