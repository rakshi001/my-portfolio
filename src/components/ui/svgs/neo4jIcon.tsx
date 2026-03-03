import type { SVGProps } from "react";

const Neo4jIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#4581C3" d="M21.706 7.292a4.017 4.017 0 0 0-3.633-1.29A4.012 4.012 0 0 0 15.39 7.87l-3.482-1.4a4.016 4.016 0 0 0-6.86-3.712 4.016 4.016 0 0 0 .654 5.633L4.306 11.6a4.016 4.016 0 1 0 1.75 6.913l3.483 1.4a4.016 4.016 0 1 0 7.015-1.378l1.397-3.21a4.017 4.017 0 0 0 3.755-7.032z" />
        <circle cx="6.008" cy="15.064" r="2.01" fill="#FFFFFF" />
        <circle cx="8.108" cy="4.994" r="2.01" fill="#FFFFFF" />
        <circle cx="15.996" cy="19.006" r="2.01" fill="#FFFFFF" />
        <circle cx="19.994" cy="9" r="2.01" fill="#FFFFFF" />
    </svg>
);

export { Neo4jIcon };
