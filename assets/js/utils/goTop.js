const isScrollGoTop = (win = window.scrollY, changeStyle1, changeStyle2) => {
	win > 300 ? changeStyle1 : changeStyle2;
};

export { isScrollGoTop };
