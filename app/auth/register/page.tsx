"use client";

import { AgreementMessage, Fields, Layout } from "@/components/forms";
import { PageLayout } from "@/components/forms";
import { useRegister } from "@/hooks";

export default function Page() {
    const {
        email,
        first_name,
        last_name,
        password,
        re_password,
        phone,
        isLoading,
        fieldErrors,
        handleChange,
        handleSubmit,
    } = useRegister();

    const fields = [
        {
            id: "email",
            type: "email",
            label: "Email Address",
            name: "email",
            autoComplete: "email",
            value: email,
            required: true,
            fullWidth: true,
            autoFocus: true,
        },
        {
            id: "first_name",
            type: "text",
            label: "First Name",
            name: "first_name",
            autoComplete: "given-name",
            value: first_name,
            required: true,
            fullWidth: false,
        },
        {
            id: "last_name",
            type: "text",
            label: "Last Name",
            name: "last_name",
            autoComplete: "family-name",
            value: last_name,
            required: true,
            fullWidth: false,
        },
        {
            id: "password",
            type: "password",
            label: "Password",
            name: "password",
            autoComplete: "password",
            value: password,
            required: true,
            fullWidth: true,
        },
        {
            id: "re_password",
            type: "password",
            label: "Repeat Password",
            name: "re_password",
            autoComplete: "re_password",
            value: re_password,
            required: true,
            fullWidth: true,
        },
        {
            id: "phone",
            type: "text",
            label: "Phone",
            name: "phone",
            autoComplete: "phone",
            value: phone,
            required: true,
            fullWidth: true,
        },
    ];
    return (
        <PageLayout>
            <Layout
                title="Create an account and explore your future"
                onSubmit={handleSubmit}
                isLoading={isLoading}
                buttonText="Create account"
                linkMessage="Already have an account?"
                linkText="Sign In"
                linkHref="/auth/login"
            >
                <Fields fields={fields} handleChange={handleChange} fieldErrors={fieldErrors} />

                <AgreementMessage />
            </Layout>
        </PageLayout>
    );
}