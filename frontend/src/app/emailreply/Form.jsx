"use client"

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import {
    Card,
    CardContent,
} from "@/components/ui/card";

import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from 'lucide-react';
import { CircleStop } from 'lucide-react';
import { useContext, useState } from "react";
import { Context } from "@/context/Context";
import { languages, tones } from "@/constants";
import { useFormik } from 'formik';
import { SelectInput, TextareaInput, TextInput } from "@/components";
import { schema } from "@/app/emailreply/schema";

const initialValues = {
    receivedemail: "",
    responsegoal: "",
    subjectline: "",
    recipient: "",
    sender: "",
    characters: 0,
    tone: "Professional",
    language: "English",
}

const Form = () => {
    const [status, setStatus] = useState('');

    const {
        loading,
        setLoading,
        onSent,
        setOnSubmit,
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
    const handleFormSubmit = (values) => {
        const prompt = `Write an email with the following parameters:-
        The complete content of the incoming email: ${values.receivedemail},
        The desired outcome or objective of the response: ${values.responsegoal},
        The subject of the email: ${values.subjectline},
        The intended recipient of the email: ${values.recipient},
        The sender of the email: ${values.sender},
        The maximum number of characters allowed in the email body: ${values.characters},
        The desired tone of the email: ${values.tone},
        The language in which the email should be written: ${values.language}`;

        setOnSubmit(true);
        handleAsyncSubmit(prompt);
    };

    const { errors, touched, values, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: schema,
        onSubmit: (values) => {
            handleFormSubmit(values);
        },
    });

    return (
        <form className="grid h-full items-start border rounded-xl gap-6 overflow-auto lg:p-4 pt-0" onSubmit={handleSubmit} >
            <fieldset className="grid gap-6 rounded-lg p-4">
                <div className="grid gap-3">
                    <TextareaInput value={values.receivedemail} handleChange={handleChange} touched={touched} errors={errors} labelName="Received Email" optional={false} inputType="receivedemail" placeholder="Example: Dear sir/ma'am, I will be taking a break from my work. Thank you" maxCharacters="3000" />
                </div>
                <div className="grid gap-3">
                    <TextareaInput value={values.responsegoal} handleChange={handleChange} touched={touched} errors={errors} labelName="Response Goal" optional={false} inputType="responsegoal" placeholder="Acknowledge this Email" maxCharacters="3000" />
                </div>
                <div className="grid gap-3">
                    <TextInput value={values.subjectline} handleChange={handleChange} touched={touched} errors={errors} labelName="Subject Line" optional={false} inputType="subjectline" placeholder="Example: Introduction to New Client, Proposal for Marketing Camp..." maxCharacters="100" />
                </div>
                <div className="grid gap-3">
                    <TextInput value={values.recipient} handleChange={handleChange} touched={touched} errors={errors} labelName="Recipient" optional={false} inputType="recipient" placeholder="Example: potential client, colleague, or supervisor." maxCharacters="100" />
                </div>
                <div className="grid gap-3">
                    <TextInput value={values.sender} handleChange={handleChange} touched={touched} errors={errors} labelName="Sender" optional={false} inputType="sender" placeholder="Example: John Smith, Marketing Department, Product Team A, Acme Corporation." maxCharacters="100" />
                </div>
                <div className="grid gap-3">
                    <div className="flex justify-between">
                        <Label htmlFor="characters" className="text-base font-medium">Number of Characters</Label>
                        <Input readOnly type="text" value={values.characters} className="w-16" />
                    </div>
                    <Slider id="characters" name="characters" max={5000} step={1} onChange={handleChange} />
                    {touched.characters && errors.characters && <span className="text-red-500 text-sm">{errors.characters}</span>}
                </div>
                <div className="grid gap-3">
                    <SelectInput value={values.tone} handleChange={handleChange} touched={touched} errors={errors} labelName="Tones" optional={true} selectType="tone" selectValues={tones} />
                </div>
                <div className="grid gap-3">
                    <SelectInput value={values.language} handleChange={handleChange} touched={touched} errors={errors} labelName="Languages" optional={true} selectType="language" selectValues={languages} />
                </div>
            </fieldset>
            <div className="mt-auto">
                <Card>
                    <CardContent className="p-5">
                        {
                            loading ? (
                                <Button type="submit" size="xl" className="flex justify-center gap-2 w-full border border-green text-green text-base font-semibold px-4">
                                    <div className="animate-spin">
                                        <LoaderCircle />
                                    </div>
                                    Writing...
                                    {/* <CircleStop color="#ff574d" /> */}
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