import YouTube from 'react-youtube';

import { useAppSelector } from '../../../store/Store';

const opts = {
	width: "100%",
	playerVars: {
		autoplay: 0,
	},
};

export default function VideoCard({ video }: IVideoCard) {
    const config = useAppSelector(state => state.configuration)

	const videoId = extractVideoIdFromUrl(video);

	return (
		<div className="col-span-3 flex flex-col justify-center gap-4 border-2 p-4 h-max">
			<h4 className="text-lg font-semibold" style={{color: config?.mainColor}}>Video</h4>
			<YouTube videoId={videoId} opts={opts} className="flex self-center w-full max-w-lg h-full aspect-video" />
		</div>
	);
}

interface IVideoCard {
	video: string;
}

function extractVideoIdFromUrl(url: string) {
	const regex = /(?:\?v=|&v=|youtu\.be\/)(.*?)(?:\?|&|$)/;
	const match = url.match(regex);
	if (match && match[1]) {
		return match[1];
	}
	return "";
}
