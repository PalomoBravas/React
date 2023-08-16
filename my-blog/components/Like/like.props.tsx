import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface LikeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    yourLikeIt: boolean;
    countLike: number;
    setLike: () => void;
}