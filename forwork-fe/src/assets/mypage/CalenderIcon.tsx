import * as React from "react";
import type { SVGProps } from "react";
const CalenderIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={14}
        height={16}
        fill="none"
        {...props}
    >
        <path
            fill="#6F717C"
            d="M12.444 1.556h-.777V0H10.11v1.556H3.89V0H2.333v1.556h-.777c-.864 0-1.548.7-1.548 1.555L0 14c0 .856.692 1.556 1.556 1.556h10.888c.856 0 1.556-.7 1.556-1.556V3.111c0-.855-.7-1.555-1.556-1.555m0 12.444H1.556V6.222h10.888zM4.667 9.333H3.11V7.778h1.556zm3.11 0H6.223V7.778h1.556zm3.112 0H9.333V7.778h1.556zm-6.222 3.111H3.11V10.89h1.556zm3.11 0H6.223V10.89h1.556zm3.112 0H9.333V10.89h1.556z"
        />
    </svg>
);
export default CalenderIcon;
