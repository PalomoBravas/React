import * as React from "react"
import {JSX} from "react";
import {LikeIcon} from "svg-icons.props";

const LikeButtonIcon = ({ color }: LikeIcon): JSX.Element => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"


    >
        <path
            stroke={ color }
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.333 6.667H2.667v6.666h2.666m0-6.666v6.666m0-6.666 3.464-4.041a1.333 1.333 0 0 1 1.336-.426l.032.008a1.333 1.333 0 0 1 .786 2.033L9.332 6.667h3.04c.842 0 1.473.77 1.308 1.594l-.8 4a1.333 1.333 0 0 1-1.307 1.072h-6.24"
        />
    </svg>
)
export default LikeButtonIcon