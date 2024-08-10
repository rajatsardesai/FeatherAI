import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const TextareaInput = ({ value, handleChange, touched, errors, labelName, optional, inputType, placeholder, maxCharacters }) => {
    return (
        <>
            <div className="flex justify-between">
                <Label htmlFor={inputType} className="text-base font-medium">{labelName} <span className="text-[12px] text-gray-100">{optional ? '(optional)' : ''}</span></Label>
                {
                    maxCharacters &&
                    <span className="text-xs text-gray-100">{value.length === 0 ? '0' : value.length}/{maxCharacters}</span>
                }
            </div>
            <Textarea id={inputType} name={inputType} className="h-32" value={value} onChange={handleChange} placeholder={placeholder} />
            {touched[inputType] && errors[inputType] && <span className="text-red-500 text-sm">{errors[inputType]}</span>}
        </>
    )
}

export default TextareaInput;