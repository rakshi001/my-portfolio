import type { SVGProps } from "react";

const VectorDBIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Database cylinder */}
        <ellipse cx="12" cy="5" rx="8" ry="3" stroke="#8B5CF6" strokeWidth="1.5" />
        <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" stroke="#8B5CF6" strokeWidth="1.5" />
        <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" stroke="#8B5CF6" strokeWidth="1.5" />
        {/* Vector arrows */}
        <line x1="9" y1="8" x2="11" y2="10" stroke="#EC4899" strokeWidth="1.5" />
        <line x1="13" y1="8" x2="15" y2="10" stroke="#06B6D4" strokeWidth="1.5" />
        <line x1="10" y1="15" x2="12" y2="17" stroke="#F59E0B" strokeWidth="1.5" />
        <line x1="14" y1="15" x2="12" y2="17" stroke="#10B981" strokeWidth="1.5" />
    </svg>
);

export { VectorDBIcon };
