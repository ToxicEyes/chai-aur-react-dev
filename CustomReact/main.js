const root = document.getElementById('root');

const reactElement = {
 type: 'a',
 props: {
  href: "https://www.google.com",
  target: "_blank"
 },
 Content: 'This is a Link to Google'
}

function customRender(reactElement, mainRoot){
 /*
 const el = document.createElement(reactElement.type);
 //we have a problem here..
 el.setAttribute('href', reactElement.props.href);
 el.setAttribute('target', reactElement.props.target);
 el.innerHTML = reactElement.Content;
 mainRoot.appendChild(el);
 */

 const el = document.createElement(reactElement.type);
 el.innerHTML = reactElement.Content;

 for (const prop in reactElement.props) {
  if(prop === 'children') continue;
  el.setAttribute(prop, reactElement.props[prop]);
 }

 mainRoot.appendChild(el);
}

customRender(reactElement, root);