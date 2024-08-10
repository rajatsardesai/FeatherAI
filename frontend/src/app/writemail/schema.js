import * as yup from 'yup';

export const schema = yup.object().shape({
    purpose: yup
        .string()
        .required('Purpose is required')
        .max(3000, 'Purpose must be less than 3000 characters'),
    subjectline: yup
        .string()
        .required('Subject is required')
        .max(100, 'Subject line must be less than 100 characters'),
    recipient: yup
        .string()
        .required('Recipient is required')
        .max(100, 'Recipient must be less than 100 characters'),
    sender: yup
        .string()
        .required('Sender is required')
        .max(100, 'Sender must be less than 100 characters'),
    characters: yup
        .number()
        .required('Number of Characters are required')
        .min(100, 'Number of Characters must be more than 100'),
});