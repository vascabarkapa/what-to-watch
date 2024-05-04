import { FC } from "react";

type Props = {
    code: string;
}

const Trailer: FC<Props> = ({ code }) => {
    return (
        <iframe
            src={`https://www.youtube.com/embed/${code}`}
            title="YouTube video player" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
        </iframe>
    );
};

export default Trailer;
