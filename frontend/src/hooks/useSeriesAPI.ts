import { useEffect, useState } from "react";

const useSeriesAPI = () => {
	const [series, setSeries] = useState<[]>([]);
	useEffect(() => {
		fetch(`http://${window.location.hostname}:7889/api/series`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		})
			.then((response) => response.json())
			.then((data) => setSeries(data))
			.catch((error) => console.error(error));
	}, []);
	return series;
};
export default useSeriesAPI;
