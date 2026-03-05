import type { SVGProps } from "react";

const LLMEvalsIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Clipboard outline */}
        <rect x="4" y="4" width="16" height="18" rx="2" stroke="#10B981" fill="none" />
        <rect x="8" y="2" width="8" height="4" rx="1" stroke="#10B981" fill="none" />
        {/* Checkmark lines - evaluation checks */}
        <polyline points="8,11 10,13 14,9" stroke="#34D399" strokeWidth="2" />
        <line x1="8" y1="17" x2="14" y2="17" stroke="#6EE7B7" strokeWidth="1.5" />
        {/* Small bar chart on right side - metrics */}
        <line x1="17" y1="18" x2="17" y2="15" stroke="#F59E0B" strokeWidth="1.5" />
        <line x1="19" y1="18" x2="19" y2="12" stroke="#F97316" strokeWidth="1.5" />
    </svg>
);

export { LLMEvalsIcon };
