import * as React from "react";
import type { SVGProps } from "react";
const DescriptionIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={21}
        fill="none"
        {...props}
    >
        <path
            stroke="#999BA5"
            strokeMiterlimit={10}
            strokeWidth={1.2}
            d="M17.4 10.5a7.4 7.4 0 1 1-14.8 0 7.4 7.4 0 0 1 14.8 0Z"
        />
        <path
            fill="#999BA5"
            d="M10.177 13.186a.82.82 0 0 0-.75 0 .7.7 0 0 0-.276.275.8.8 0 0 0-.092.368c0 .123.03.26.092.368a.8.8 0 0 0 .275.276.7.7 0 0 0 .383.107c.138 0 .26-.03.368-.107a.786.786 0 0 0 .383-.643c0-.123-.03-.261-.107-.368a.7.7 0 0 0-.276-.276M12 7.73a1.87 1.87 0 0 0-.812-.72 2.7 2.7 0 0 0-1.195-.26c-.429 0-.796.077-1.149.245a2.1 2.1 0 0 0-.827.72c-.215.322-.322.69-.337 1.119h1.134c.015-.245.076-.46.199-.628.122-.169.26-.307.429-.383s.352-.123.551-.123c.215 0 .414.046.582.138a1 1 0 0 1 .414.383c.092.168.153.352.153.567 0 .26-.06.49-.214.69-.138.199-.322.382-.567.52-.26.154-.46.322-.628.49a1.6 1.6 0 0 0-.353.66c-.076.275-.122.628-.137 1.087v.077h1.072v-.077c0-.29.03-.52.107-.72q.092-.275.276-.506.184-.206.506-.413c.352-.215.613-.475.797-.766q.275-.437.275-1.057c0-.414-.092-.751-.29-1.058z"
        />
    </svg>
);
export default DescriptionIcon;
