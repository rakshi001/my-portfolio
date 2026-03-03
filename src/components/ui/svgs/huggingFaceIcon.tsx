import type { SVGProps } from "react";

const HuggingFaceIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="60" fill="#FFD21E" />
        {/* Left ear */}
        <path d="M29 45c-3-9 3-18 12-20s18 3 20 12" fill="none" stroke="#FF9D0B" strokeWidth="5" strokeLinecap="round" />
        {/* Right ear */}
        <path d="M91 45c3-9-3-18-12-20s-18 3-20 12" fill="none" stroke="#FF9D0B" strokeWidth="5" strokeLinecap="round" />
        {/* Left eye */}
        <ellipse cx="42" cy="54" rx="7" ry="8" fill="#3A3B45" />
        <ellipse cx="44" cy="51" rx="2.5" ry="3" fill="#FFFFFF" />
        {/* Right eye */}
        <ellipse cx="78" cy="54" rx="7" ry="8" fill="#3A3B45" />
        <ellipse cx="80" cy="51" rx="2.5" ry="3" fill="#FFFFFF" />
        {/* Smile */}
        <path d="M38 74c0 0 10 16 22 16s22-16 22-16" fill="none" stroke="#3A3B45" strokeWidth="4" strokeLinecap="round" />
        {/* Blush */}
        <ellipse cx="30" cy="70" rx="7" ry="5" fill="#FF9D0B" opacity="0.4" />
        <ellipse cx="90" cy="70" rx="7" ry="5" fill="#FF9D0B" opacity="0.4" />
    </svg>
);

export { HuggingFaceIcon };
