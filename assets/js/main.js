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
import createFragmentElListFooter from "./utils/footer";
import staticContent from "./state/index";
import createFragmentElCardOurfeature from "./utils/ourfeature";
const RENDER_EVENT = "render-state";

document.addEventListener("DOMContentLoaded", () => {
	document.dispatchEvent(new Event(RENDER_EVENT));
	initSlider();
	activeMenu();
	getNodeList(".hamburger").addEventListener("click", function () {
		addToggleClass(".hamburger", "show");
		addToggleClass("main", "is-sidebar-open");
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
		hasClass("main", "is-sidebar-open") &&
			removeClass("main", "is-sidebar-open");
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

	window.addEventListener("scroll", () => {
		window.scrollY > 300
			? changeStyle(".go-top", "display", "flex")
			: changeStyle(".go-top", "display", "none");
	});
});

document.addEventListener(RENDER_EVENT, () => {
	const { navbar, footer, ourfeature } = staticContent;
	showUi("#menu-list", navbar, createFragmentElList);
	showUi(".footer-top-info", footer, createFragmentElListFooter);
	showUi(".of-data", ourfeature, createFragmentElCardOurfeature);
	AOS.init({
		duration: "1500",
		once: true,
	});
});

const showUi = (selector, data, callback) => {
	if (getNodeList(selector) === null) {
		return;
	} else {
		getNodeList(selector).innerHTML = data
			.map((element) => callback(element))
			.join(" ");
	}
};

const activeMenu = () => {
	getNodeLists(".menu-item").forEach((element) => {
		let el = element.childNodes[0];
		if (el.href === window.location.href) {
			element.classList.add("active");
		}
	});
};

const initSlider = () => {
	new Swiper(".mySwiper", {
		slidesPerView: "auto",
		centeredSlides: true,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 3000,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			500: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 3,
			},
		},
	});
	new Swiper(".product-right", {
		slidesPerView: 1,
		centeredSlides: true,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 2000,
		},
	});
};
