import type { SVGProps } from "react";

const CICDIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2v6h-6" stroke="#10B981" />
        <path d="M2.5 22v-6h6" stroke="#3B82F6" />
        <path d="M21.5 8A10 10 0 0 0 5.6 4.5L2.5 8" stroke="#10B981" />
        <path d="M2.5 16a10 10 0 0 0 15.9 3.5l3.1-3.5" stroke="#3B82F6" />
    </svg>
);

export { CICDIcon };
