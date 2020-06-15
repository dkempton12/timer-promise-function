function timer(time) {
	return Promise((resolve) => {
		setTimeout(resolve, time);
	});
}
