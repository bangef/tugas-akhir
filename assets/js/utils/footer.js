const createFragmentElListFooter = ({ textContent, url }) => {
	if (textContent === "Menu") {
		return `<li class="footer-top-info-item">${textContent}</li>`;
	} else {
		return `<li class="footer-top-info-item"><a href="${url}">${textContent}</a></li>`;
	}
};

export default createFragmentElListFooter;
