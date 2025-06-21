const root = document.querySelector("#root");

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: 'Click me'
};

function customRender(reactElement, container) {
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);
    // container.appendChild(domElement);
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const [key, value] of Object.entries(reactElement.props)) {
        domElement.setAttribute(key, value);
    }
    container.appendChild(domElement);
}

customRender(reactElement, root);