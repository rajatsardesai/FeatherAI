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

export const faqs = [
    {
        question: "How does AI Email Writer work?",
        answer: "AI Email Writer works by using a large language model (LLM) to generate email content based on the context and intent expressed in those instructions.Our tool has been  tested on a vast dataset of emails to understand and recreate human writing styles, making the generated email coherent and contextually relevant.",
    },
    {
        question: "Is AI Email Writer suitable for all types of emails?",
        answer: "AI Email Writer is designed to be versatile and can assist with a wide range of email types. Whether you need to compose professional business emails, personal correspondence, marketing emails, or any other type of email communication, our tool can help you  generate content tailored to your specific needs.",
    },
    {
        question: "How does AI Email Writer generates email?",
        answer: "When you provide input instructions or prompts, the AI analyzes the text to understand the context, intent, and specific details you want to convey in the email. It then uses  this understanding to generate coherent and contextually relevant email content.",
    },
    {
        question: "Is AI Email Writer secure and privacy-conscious?",
        answer: "AI Email Writer is designed to keep your data safe - like all products made by Mailmeteor. Your instructions are securely transmitted to OpenAI which generates emails for you using ChatGPT. OpenAI might save your inputs for up to 30 days to detect abuse, but after that delay they will delete it and won’t use for any other purposes.",
    },
    {
        question: "Is AI Email Writer better than ChatGPT?",
        answer: "The choice between the two depends on your specific needs. If you require assistance with email writing tasks, AI Email Writer may be more suitable. However, if you have a broader range of text-related questions or tasks, ChatGPT can be a versatile option.Both tools have their strengths, and the choice depends on the task at hand.",
    },
];