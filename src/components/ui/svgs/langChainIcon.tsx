import type { SVGProps } from "react";

const LangChainIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" fill="none">
        {/* Official LangChain parrot/chain logo - dark teal */}
        <path
            d="M230.4 128c0 56.6-45.8 102.4-102.4 102.4S25.6 184.6 25.6 128 71.4 25.6 128 25.6 230.4 71.4 230.4 128z"
            fill="#1C3C3C"
        />
        <path
            d="M166.4 89.6c0 5.3-4.3 9.6-9.6 9.6s-9.6-4.3-9.6-9.6 4.3-9.6 9.6-9.6 9.6 4.3 9.6 9.6z"
            fill="#FFFFFF"
        />
        <path
            d="M120 89.6c0 5.3-4.3 9.6-9.6 9.6s-9.6-4.3-9.6-9.6 4.3-9.6 9.6-9.6 9.6 4.3 9.6 9.6z"
            fill="#FFFFFF"
        />
        <path
            d="M128 179.2c-26.5 0-48-14.3-48-32h12.8c0 10.6 15.8 19.2 35.2 19.2s35.2-8.6 35.2-19.2H176c0 17.7-21.5 32-48 32z"
            fill="#FFFFFF"
        />
        <path
            d="M89.6 115.2h76.8v12.8H89.6z"
            fill="#FFFFFF"
        />
        <path
            d="M108.8 128v25.6h-12.8V128zm51.2 0v25.6h-12.8V128z"
            fill="#FFFFFF"
        />
    </svg>
);

export { LangChainIcon };
