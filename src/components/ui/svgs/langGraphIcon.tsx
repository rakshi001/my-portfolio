import type { SVGProps } from "react";

const LangGraphIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" fill="none">
        {/* LangGraph - teal circle with graph nodes */}
        <path
            d="M230.4 128c0 56.6-45.8 102.4-102.4 102.4S25.6 184.6 25.6 128 71.4 25.6 128 25.6 230.4 71.4 230.4 128z"
            fill="#3B82F6"
        />
        {/* Graph edges */}
        <line x1="128" y1="76" x2="84" y2="128" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
        <line x1="128" y1="76" x2="172" y2="128" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
        <line x1="84" y1="128" x2="108" y2="180" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
        <line x1="172" y1="128" x2="148" y2="180" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
        <line x1="108" y1="180" x2="148" y2="180" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
        {/* Graph nodes */}
        <circle cx="128" cy="76" r="14" fill="#FFFFFF" />
        <circle cx="84" cy="128" r="14" fill="#FFFFFF" />
        <circle cx="172" cy="128" r="14" fill="#FFFFFF" />
        <circle cx="108" cy="180" r="14" fill="#FFFFFF" />
        <circle cx="148" cy="180" r="14" fill="#FFFFFF" />
    </svg>
);

export { LangGraphIcon };
