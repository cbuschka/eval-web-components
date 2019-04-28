class HelloWorldElement extends HTMLElement {
    constructor() {
        super();

        this.greeting = 'hello world';
    }

    static get observedAttributes() {
        return ['greeting'];
    }

    connectedCallback() {
        console.log("connected this.greeting=%o", this.greeting);

        this.greeting = this.greeting || this.getAttribute("greeting");

        this.innerHTML = `<span>${this.greeting}</span>`;
    }

    disconnectedCallback() {
        console.log("disconnected");
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        console.log("attribute changed attr=%o old=%o new=%o", attrName, oldVal, newVal);

        switch (attrName) {
            case 'greeting':
                this.greeting = newVal;
                break;
            default:
        }
    }

    adoptedCallback() {
        console.log("adopted");
    }
}

window.customElements.define('ewc-hellow-world', HelloWorldElement);
