import type { SVGProps } from "react";

const AgentIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Body */}
        <rect x="4" y="6" width="16" height="12" rx="2" ry="2" stroke="#6366F1" strokeWidth="1.5" />
        {/* Antenna */}
        <line x1="12" y1="2" x2="12" y2="6" stroke="#A78BFA" strokeWidth="1.5" />
        <circle cx="12" cy="1.5" r="1" fill="#F59E0B" />
        {/* Eyes */}
        <circle cx="9" cy="11" r="1.5" fill="#3B82F6" />
        <circle cx="15" cy="11" r="1.5" fill="#3B82F6" />
        {/* Mouth */}
        <path d="M9 15h6" stroke="#10B981" strokeWidth="1.5" />
        {/* Legs */}
        <line x1="8" y1="18" x2="8" y2="22" stroke="#6366F1" strokeWidth="1.5" />
        <line x1="16" y1="18" x2="16" y2="22" stroke="#6366F1" strokeWidth="1.5" />
    </svg>
);

export { AgentIcon };
