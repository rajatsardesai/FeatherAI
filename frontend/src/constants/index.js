import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';

export const sidebarItems = [
    {
        name: "AI Email Write",
        icon: faPenToSquare,
        label: "AI Email Write",
        link: "/writemail",
    },
    {
        name: "AI Email Reply",
        icon: faCommentDots,
        label: "AI Email Reply",
        link: "/emailreply",
    },
    {
        name: "Prompts",
        icon: faTerminal,
        label: "Prompts",
        link: "/prompts",
    },
    {
        name: "Profile Settings",
        icon: faSliders,
        label: "Profile Settings",
        link: "/settings",
    },
    {
        name: "Subscription",
        icon: faCreditCard,
        label: "Subscription",
        link: "/subscriptions",
    },
    {
        name: "History",
        icon: faClockRotateLeft,
        label: "History",
        link: "/history",
    },
];

export const tones = ["Professional", "Casual", "Funny", "Excited"]

export const languages = ["English", "Hindi", "Spanish", "French", "Standard Arabic", "Mandarin Chinese", "Portugese", "Russian", "Japanese"]