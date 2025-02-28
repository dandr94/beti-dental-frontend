import React, { ChangeEvent, ReactNode } from "react";

export interface FieldsProps {
    fields: {
        id: string;
        type: string;
        label: string;
        name: string;
        autoComplete: string;
        value: string;
        required: boolean;
        fullWidth: boolean;
        autoFocus?: boolean;
    }[];
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputProps {
    id: string;
    type: string;
    label: string;
    name: string;
    autoComplete: string;
    value: string;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    fullWidth?: boolean;
    autoFocus?: boolean;
}

export interface LayoutProps {
    title: string;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    isLoading?: boolean;
    buttonText: string;
    children: React.ReactNode;
    linkMessage: string;
    linkText: string;
    linkHref: string;
    showFormLinkMessage?: boolean;
    showSocialAuth?: boolean;
}

export interface LinkMessageProps {
    message: string;
    linkText: string;
    linkHref: string;
}

export interface PageLayoutProps {
    children: ReactNode;
}