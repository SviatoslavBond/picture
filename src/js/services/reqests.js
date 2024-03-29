const postDate = async (url, data) => {
	let res = await fetch(url, {
		method: 'POST',
		body: data,
	});
	return await res.text();
};

const getDate = async (url) => {
	let res = await fetch(url);
	if (!res.ok) {
		throw new Error(`Could not fetch${url} status${res.status}`);
	}
	return await res.json();
};
export { getDate, postDate };