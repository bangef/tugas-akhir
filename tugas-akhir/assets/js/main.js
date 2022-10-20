import {
	getNodeList,
	getNodeLists,
	changeStyleWithCondition,
	changeStyle,
	addToggleClass,
	hasClass,
	removeClass,
	createFragmentElList,
} from "./utils/navbar.js";
import { disableScroll, enableScroll } from "./utils/scrolling.js";
import { staticContent } from "./state/index.js";
const RENDER_EVENT = "render-state";

document.addEventListener("DOMContentLoaded", () => {
	activeMenu();

	getNodeList(".hamburger").addEventListener("click", function () {
		addToggleClass(".hamburger", "show");
		addToggleClass("#wrapper-navbar", "wrapper-navbar");
		changeStyleWithCondition(
			"nav",
			"transform",
			hasClass(".hamburger", "show"),
			"translateX(0)",
			"translateX(-100%)"
		);
	});

	window.addEventListener("resize", () => {
		let dbw = document.body.clientWidth;
		hasClass(".hamburger", "show") && changeStyle("body", "overflow", "auto");
		hasClass(".hamburger", "show") && removeClass(".hamburger", "show");
		hasClass("#wrapper-navbar", "wrapper-navbar") &&
			removeClass("#wrapper-navbar", "wrapper-navbar");
		if (dbw <= 768) {
			changeStyle("nav", "transform", "translateX(-100%)");
		} else {
			changeStyle("nav", "transform", "translateX(0)");
		}
	});

	const eventList = ["click", "DOMMouseScroll", "touchmove", "keydown"];
	eventList.forEach((element) => {
		return window.addEventListener(element, () => {
			let dbw = document.body.clientWidth;
			if (dbw < 768 && hasClass(".hamburger", "show")) {
				disableScroll();
				changeStyle("body", "overflow", "hidden");
			} else {
				enableScroll();
				changeStyle("body", "overflow", "auto");
			}
		});
	});
});

document.addEventListener(RENDER_EVENT, () => {
	getMenu();
});

const getMenu = () => {
	getNodeList("#menu-list").innerHTML = staticContent.navbar
		.map((element) => createFragmentElList(element))
		.join(" ");
};

const activeMenu = () => {
	document.dispatchEvent(new Event(RENDER_EVENT));
	console.log();
	getNodeLists(".menu-item").forEach((element) => {
		let el = element.childNodes[0];
		if (el.href === window.location.href) {
			element.classList.add("active");
		}
	});
};
