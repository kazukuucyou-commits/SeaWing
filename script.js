const yearNode = document.querySelector('#current-year');
const siteData = window.seaWingSiteData || {};

const setText = (selector, value) => {
    const node = document.querySelector(selector);

    if (node && value) {
        node.textContent = value;
    }
};

const renderProjects = () => {
    const container = document.querySelector('#project-grid');
    const items = siteData.projects || [];

    if (!container) {
        return;
    }

    container.innerHTML = items.map((item) => {
        const iconMarkup = item.icon
            ? `<img class="project-icon" src="${item.icon}" alt="${item.title} アイコン" onerror="this.src='assets/seawing-icon.png'">`
            : '';
        const hasAction = item.link && item.link !== '#';
        const actionMarkup = hasAction
            ? `<a class="project-link" href="${item.link}" target="_blank" rel="noreferrer">${item.linkLabel || '詳細を見る'}</a>`
            : `<span class="project-link project-link-muted">${item.linkLabel || '公開準備中'}</span>`;

        return `
            <article class="project-card">
                ${iconMarkup}
                <p class="card-tag">${item.status}</p>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="project-meta">${item.platform}</div>
                ${actionMarkup}
            </article>
        `;
    }).join('');
};

const renderUpdates = () => {
    const container = document.querySelector('#update-list');
    const items = siteData.updates || [];

    if (!container) {
        return;
    }

    container.innerHTML = items.map((item) => `
        <article class="simple-item">
            <span>${item.date}</span>
            <p>${item.text}</p>
        </article>
    `).join('');
};

const renderLinks = () => {
    const container = document.querySelector('#contact-links');
    const items = siteData.links || [];

    if (!container) {
        return;
    }

    container.innerHTML = items.map((item) => {
        const external = !item.href.startsWith('mailto:') && !item.href.startsWith('#');
        const target = external ? ' target="_blank" rel="noreferrer"' : '';

        return `<a href="${item.href}"${target}>${item.label}</a>`;
    }).join('');
};

const applySiteContent = () => {
    setText('#hero-title', siteData.hero?.title);
    setText('#hero-text', siteData.hero?.text);
    setText('#team-note', siteData.hero?.note);
    renderProjects();
    renderUpdates();
    renderLinks();
};

applySiteContent();

if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
}
