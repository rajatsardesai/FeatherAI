import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const SelectInput = ({ value, handleChange, touched, errors, labelName, optional, selectType, selectValues }) => {

    const handleSelectChange = (selectedValue) => {
        handleChange({
            target: {
                name: selectType,
                value: selectedValue,
            },
        });
    };

    return (
        <>
            <Label htmlFor={selectType} className="text-base font-medium">{labelName} <span className="text-[12px] text-gray-100">{optional ? '(optional)' : ''}</span></Label>
            <Select name={selectType} value={value} onValueChange={handleSelectChange}>
                <SelectTrigger
                    id={selectType}
                    className="h-[50px] items-center [&_[data-description]]:hidden"
                >
                    <SelectValue defaultValue={value} />
                </SelectTrigger>
                <SelectContent className="bg-white">
                    {selectValues.map((selectValue, id) => (
                        <SelectItem key={id} value={selectValue} className="hover:bg-gray-200 cursor-pointer">
                            <div className="flex items-start gap-3">
                                <span className="font-regular">
                                    {selectValue}
                                </span>
                            </div>
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            {touched[selectType] && errors[selectType] && <span className="text-red-500 text-sm">{errors[selectType]}</span>}
        </>
    )
}

export default SelectInput;