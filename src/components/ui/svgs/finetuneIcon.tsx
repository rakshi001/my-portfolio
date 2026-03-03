import type { SVGProps } from "react";

const FinetuneIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="21" x2="4" y2="14" stroke="#7C3AED" />
        <line x1="4" y1="10" x2="4" y2="3" stroke="#7C3AED" />
        <line x1="12" y1="21" x2="12" y2="12" stroke="#EC4899" />
        <line x1="12" y1="8" x2="12" y2="3" stroke="#EC4899" />
        <line x1="20" y1="21" x2="20" y2="16" stroke="#06B6D4" />
        <line x1="20" y1="12" x2="20" y2="3" stroke="#06B6D4" />
        <line x1="1" y1="14" x2="7" y2="14" stroke="#7C3AED" />
        <line x1="9" y1="8" x2="15" y2="8" stroke="#EC4899" />
        <line x1="17" y1="16" x2="23" y2="16" stroke="#06B6D4" />
    </svg>
);

export { FinetuneIcon };
