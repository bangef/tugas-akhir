import {
	getNodeList,
	changeStyleWithCondition,
	changeStyle,
	addToggleClass,
	hasClass,
	removeClass,
} from "./utils/navbar.js";
import { disableScroll, enableScroll } from "./utils/scrolling.js";
import { isDomWidth } from "./utils/resolusi-dom.js";

document.addEventListener("DOMContentLoaded", () => {
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
			} else {
				enableScroll();
			}
		});
	});

	window.addEventListener("scroll", () => {
		if (window.scrollY > 0) {
			changeStyle("header", "height", "50px");
			changeStyle("header", "transition", "height .2s ease-in");
		} else {
			changeStyle("header", "height", "60px");
		}
	});
});
