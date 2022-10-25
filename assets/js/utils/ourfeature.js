const createFragmentElCardOurfeature = ({
	classIcon,
	cardTitle,
	cardDescription,
	index,
}) => `<div class="swiper-slide" data-aos="zoom-in-up" data-aos-delay="${index}50">
									<div class="card">
										<div class="card-header">
											<div class="card-header-icon">
												<i class="${classIcon}"></i>
											</div>
										</div>
										<div class="card-body">
											<h2 class="card-body-title">${cardTitle}</h2>
											<p class="card-body-description">${cardDescription}</p>
										</div>
									</div>
								</div>`;

export default createFragmentElCardOurfeature;
