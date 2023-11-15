class AppBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
            padding: 0;
            margin: 0;
            }

            :host {
                display: block;
                text-align: center;
                min-height: 56px;
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
            }
            
            .app-bar__brand {
                width: 100%;
                
                margin-left: auto;
                margin-right: auto;
                background-color: antiquewhite;
            }
            
            .app-bar__title {
                font-weight: 400;
                font-size: 2em;
                user-select: none;
                color: #db0000;
                display: inline-block;
                margin: 0.5em 0.25em;
                font-family: "Lobster", sans-serif;
            }
        </style>
        
        <h1 class="app-bar__title">Flavor Quest</h1>`;
    }
}

customElements.define('app-bar', AppBar);
