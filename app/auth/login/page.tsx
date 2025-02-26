"use client";

import { Fields, ForgotPasswordLink, Layout } from "@/components/forms";
import PageLayout from "@/components/forms/PageLayout";
import { useLogin } from "@/hooks";

export default function Page() {
    const { email, password, isLoading, fieldErrors, handleChange, handleSubmit } =
        useLogin();

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
            id: "password",
            type: "password",
            label: "Password",
            name: "password",
            autoComplete: "current-password",
            value: password,
            required: true,
            fullWidth: true,
        },
    ];

    return (
        <PageLayout>
            <Layout
                title="Sign in to your account and keep exploring"
                onSubmit={handleSubmit}
                isLoading={isLoading}
                buttonText="Sign in"
                linkMessage="Don't have an account?"
                linkText="Sign Up"
                linkHref="/auth/register"
            >
                <Fields fields={[fields[0]]} handleChange={handleChange} fieldErrors={fieldErrors} />

                <ForgotPasswordLink />

                <Fields fields={[fields[1]]} handleChange={handleChange} fieldErrors={fieldErrors} />
            </Layout>
        </PageLayout>
    );
}