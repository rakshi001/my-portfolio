import type { SVGProps } from "react";

const HuggingFaceIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FFD21E" d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0Z" />
        <path fill="#FF9D0B" d="M7.5 8.5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v1c0 .28-.22.5-.5.5h-4c-.28 0-.5-.22-.5-.5v-1Zm4 0c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v1c0 .28-.22.5-.5.5h-4c-.28 0-.5-.22-.5-.5v-1Z" />
        <circle cx="9" cy="10.5" r="1.5" fill="#3A3B45" />
        <circle cx="15" cy="10.5" r="1.5" fill="#3A3B45" />
        <path fill="#FF9D0B" d="M8 14.5c0 0 1.5 3 4 3s4-3 4-3" stroke="#FF9D0B" strokeWidth="1" strokeLinecap="round" fill="none" />
    </svg>
);

export { HuggingFaceIcon };
