function customRender(reactelement, container){
    const domElement= document.createElement(reactelement.type);
    domElement.innerHTML=reactelement.children;
    domElement.setAttribute('href', reactelement.props.href);
    domElement.setAttribute('target', reactelement.props.target);

    container.appendChild(domElement);


}

const reactelement= {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:"click me to visist google"
}

const mainContainer= document.querySelector('#root');

customRender(reactelement, mainContainer);