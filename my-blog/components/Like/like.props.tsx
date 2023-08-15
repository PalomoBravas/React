import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface LikeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    yourLikeIt: boolean;
    rating: number;
    setLike: () => void;
}