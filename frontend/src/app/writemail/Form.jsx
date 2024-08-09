"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Card,
    CardContent,
} from "@/components/ui/card"

import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { LoaderCircle } from 'lucide-react';
import { CircleStop } from 'lucide-react';
import { useContext, useState } from "react"
import { Context } from "@/context/Context"

const Form = () => {
    const [status, setStatus] = useState('');
    const [sliderValue, setSliderValue] = useState(0);

    const {
        loading,
        setLoading,
        onSent,
        setOnSubmit,
        recentPrompt,
        setRecentPrompt,
        setPrevPrompts,
        showResult,
        resultData,
        setInput,
        input,
        onToggleItems
    } = useContext(Context);

    const handleAsyncSubmit = async (prompt) => {
        setLoading(true);
        try {
            const response = await onSent(prompt);

            if (response.status === 200) {
                setStatus('Form submitted successfully');
            } else {
                setStatus('Error submitting form');
            }
        } catch (e) {
            console.log("Form is not submitted", e);
        } finally {
            setLoading(false);
        }
    };

    // Function to send prompt
    const handleSubmit = (formData) => {
        const prompt = `Write an email with the following parameters:-
        Purpose: ${formData.get("purpose")},
        Subject Line: ${formData.get("subjectline")},
        Recipient: ${formData.get("recipient")},
        Sender: ${formData.get("sender")},
        No of characters of email: ${formData.get("length")},
        Tone: ${formData.get("tone")},
        Language: ${formData.get("language")}`;

        setOnSubmit(true);
        handleAsyncSubmit(prompt);
    };

    return (
        <form className="grid h-full items-start border rounded-xl gap-6 overflow-auto lg:p-4 pt-0" action={handleSubmit} >
            <fieldset className="grid gap-6 rounded-lg p-4">
                <div className="grid gap-3">
                    <Label htmlFor="purpose" className="text-base font-medium">Purpose</Label>
                    <Textarea id="purpose" name="purpose" className="h-32" placeholder="Example: I am writing to propose a new marketing campaign that I believe will be effective for your business." />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="subjectline" className="text-base font-medium">Subject Line</Label>
                    <Input type="text" id="subjectline" name="subjectline" className="h-[50px]" placeholder="Example: Introduction to New Client, Proposal for Marketing Camp..." />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="recipient" className="text-base font-medium">Recipient</Label>
                    <Input type="text" id="recipient" name="recipient" className="h-[50px]" placeholder="Example: potential client, colleague, or supervisor." />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="sender" className="text-base font-medium">Sender</Label>
                    <Input type="text" id="sender" name="sender" className="h-[50px]" placeholder="Example: John Smith, Marketing Department, Product Team A, Acme Corporation." />
                </div>
                <div className="grid gap-3">
                    <div className="flex justify-between">
                        <Label htmlFor="length" className="text-base font-medium">Length</Label>
                        <Input type="text" value={sliderValue} className="w-16" />
                    </div>
                    {/* <Slider id="length" name="length" defaultValue={[200]} max={5000} step={1} onValueChange={(vals) => {
                        console.log(vals[0]);
                    }} /> */}
                    <Slider id="length" name="length" defaultValue={[0]} max={5000} step={1} onChange={(e) => setSliderValue(e.target.value)}  />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="tone" className="text-base font-medium">Tone</Label>
                    <Select name="tone">
                        <SelectTrigger
                            id="tone"
                            className="h-[50px] items-center [&_[data-description]]:hidden"
                        >
                            <SelectValue placeholder="Example: Friendly" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                            <SelectItem value="friendly">
                                <div className="flex items-start gap-3">
                                    <span className="font-regular">
                                        Friendly
                                    </span>
                                </div>
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="language" className="text-base font-medium">Language</Label>
                    <Select name="language">
                        <SelectTrigger
                            id="tone"
                            className="h-[50px] items-center [&_[data-description]]:hidden"
                        >
                            <SelectValue placeholder="Example: US English" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                            <SelectItem value="us-english">
                                <div className="flex items-start gap-3">
                                    <span className="font-regular">
                                        US English
                                    </span>
                                </div>
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </fieldset>
            <div className="mt-auto">
                <Card>
                    <CardContent className="p-5">
                        {
                            loading ? (
                                <Button type="submit" size="xl" className="flex justify-between w-full border border-green text-green text-base font-semibold px-4">
                                    <div className="animate-spin">
                                        <LoaderCircle />
                                    </div>
                                    Writing...
                                    <CircleStop color="#ff574d" />
                                </Button>
                            ) : (
                                <Button type="submit" size="xl" className="w-full bg-green text-white text-base font-semibold">
                                    Create using AI
                                </Button>
                            )
                        }
                    </CardContent>
                </Card>
            </div>
        </form >
    )
}

export default Form;