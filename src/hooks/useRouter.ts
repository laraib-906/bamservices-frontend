import { useMemo } from "react";
import {
	useHistory,
	useLocation,
	useParams,
	useRouteMatch,
} from "react-router-dom";
import queryString from "querystring";

const useRouter = () => {
	const params = useParams();
	const location = useLocation();
	const history = useHistory();
	const match = useRouteMatch();
	// const [currentRoute, setCurrentRoute] = useState(location.pathname);
	interface IRouter {
		query?:any;
		push: typeof history.push;
		replace: typeof history.replace;
		pathname: typeof location.pathname;
		match: typeof match;
		location: typeof location;
		history: typeof history;
	}
	return useMemo(() => {
		const x: IRouter = {
			// push: (path, state) => {
				// if (path)
				// history.push(params)
			// },
			push: history.push,
			replace: history.replace,
			pathname: location.pathname,
			// Merge params and parsed query string into single "query" object
			// so that they can be used interchangeably.
			// Example: /:topic?sort=popular -> { topic: "react", sort: "popular" }
			query: {
				...queryString.parse(location.search),
				...params,
			},
			match,
			location,
			history,
		};
		return x;
	}, [params, match, location, history]);
};

export default useRouter;
