import * as React from "react";
import type { SVGProps } from "react";
const NotificationIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={27}
        fill="none"
        {...props}
    >
        <path
            fill="#1C1B1F"
            d="M.838 22.52a.8.8 0 0 1-.597-.241.82.82 0 0 1-.241-.6q0-.358.241-.595a.82.82 0 0 1 .597-.238H2.41V10.509q0-2.702 1.65-4.805t4.273-2.635V2.34q0-.693.486-1.18a1.6 1.6 0 0 1 1.18-.486q.694 0 1.18.486.488.487.488 1.18v.732q2.625.528 4.274 2.63 1.649 2.104 1.649 4.806v10.337h1.572q.357 0 .597.242t.241.6q0 .358-.241.596a.82.82 0 0 1-.597.237zm9.16 3.745q-.995 0-1.702-.709a2.32 2.32 0 0 1-.706-1.702h4.82q0 .998-.708 1.704-.709.707-1.704.707m-5.913-5.42h11.83V10.51q0-2.456-1.73-4.185-1.73-1.73-4.185-1.73-2.456 0-4.185 1.73-1.73 1.73-1.73 4.185z"
        />
    </svg>
);
export default NotificationIcon;
