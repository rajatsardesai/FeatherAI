import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const TextInput = ({ value, handleChange, touched, errors, labelName, optional, inputType, placeholder, maxCharacters }) => {
    return (
        <>
            <div className="flex justify-between">
                <Label htmlFor={inputType} className="text-base font-medium">{labelName} <span className="text-[12px] text-gray-100">{optional ? '(optional)' : ''}</span></Label>
                {
                    maxCharacters &&
                    <span className="text-xs text-gray-100">{value.length === 0 ? '0' : value.length}/{maxCharacters}</span>
                }
            </div>
            <Input type="text" id={inputType} name={inputType} value={value} onChange={handleChange} className="h-[50px]" placeholder={placeholder} />
            {touched[inputType] && errors[inputType] && <span className="text-red-500 text-sm">{errors[inputType]}</span>}
        </>
    )
}

export default TextInput