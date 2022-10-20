const getNodeList = (nodeList) => document.querySelector(nodeList);

const getNodeLists = (nodeList) => document.querySelectorAll(nodeList);

const hasClass = (selector, className) =>
	document.querySelector(selector).classList.contains(className);

const removeClass = (selector, className) =>
	document.querySelector(selector).classList.remove(className);

const addToggleClass = (selector, selectorClass) =>
	document.querySelector(selector).classList.toggle(selectorClass);

const changeStyleWithCondition = (
	selector,
	style,
	condition,
	ifTrue,
	ifFalse
) => {
	document.querySelector(selector).style[style] = condition ? ifTrue : ifFalse;
};

const changeStyle = (selector, style, valueStyle) => {
	document.querySelector(selector).style[style] = valueStyle;
};

const createFragmentElList = ({ textContent, url, className }) => {
	if (className.includes("btn")) {
		// const elemenLi = document.createElement("li");
		// const elemenA = document.createElement("a")
		// elemenA.setAttribute('class', className);
		// elemenLi.append(elemenA);
		return `<li><a class="${className}" href="${url}">${textContent}</a></li>`;
	} else {
		return `<li class="${className}"><a href="${url}">${textContent}</a></li>`;
	}
};

export {
	getNodeList,
	getNodeLists,
	addToggleClass,
	hasClass,
	removeClass,
	changeStyleWithCondition,
	changeStyle,
	createFragmentElList,
};
