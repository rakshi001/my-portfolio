import type { SVGProps } from "react";

const RAGIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Document */}
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#3B82F6" strokeWidth="1.5" />
        <polyline points="14 2 14 8 20 8" stroke="#3B82F6" strokeWidth="1.5" />
        <line x1="8" y1="13" x2="16" y2="13" stroke="#60A5FA" strokeWidth="1.5" />
        <line x1="8" y1="17" x2="12" y2="17" stroke="#60A5FA" strokeWidth="1.5" />
        {/* Search magnifying glass */}
        <circle cx="18" cy="16" r="3" stroke="#F59E0B" strokeWidth="2" />
        <line x1="20.1" y1="18.1" x2="22" y2="20" stroke="#F59E0B" strokeWidth="2" />
    </svg>
);

export { RAGIcon };
