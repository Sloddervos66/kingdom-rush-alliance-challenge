class NavigationBar extends HTMLElement {
    shadowRoot;

    constructor() {
        super();
        this.shadowRoot = this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <nav>
            <ul class="navigation-bar">
                <li><a id="homeLink" href="index.html">Home</a></li>
                <li><a id="about" href="about.html">About</a></li>
            </ul>
        </nav>`;

        this.attachStyling();
    }

    attachStyling() {
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'style.css');
        this.shadowRoot.appendChild(linkElem);
    }
}

customElements.define('nav-bar', NavigationBar);