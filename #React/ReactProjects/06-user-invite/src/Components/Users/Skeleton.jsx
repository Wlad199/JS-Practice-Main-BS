import ContentLoader from "react-content-loader"


export default function Skeleton() {
	return (
		<ContentLoader
			speed={2}
			width={320}
			height={50}
			viewBox="0 0 320 50"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
		>
			<rect x="60" y="14" rx="3" ry="3" width="200" height="11" />
			<circle cx="29" cy="28" r="22" />
			<rect x="246" y="19" rx="0" ry="0" width="1" height="0" />
			<rect x="111" y="110" rx="0" ry="0" width="1" height="0" />
			<rect x="60" y="30" rx="3" ry="3" width="200" height="11" />
			<rect x="270" y="14" rx="0" ry="0" width="25" height="26" />
		</ContentLoader>
	)
}