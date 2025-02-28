"use client";

import { Fields, Layout } from "@/components/forms";
import { PageLayout } from "@/components/forms";
import { useResetPassword } from "@/hooks";


export default function Page() {
    const { email, isLoading, fieldErrors, handleChange, handleSubmit } = useResetPassword();

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

    ];

    return (
        <PageLayout>
            <Layout
                title="Type your email to reset your password"
                onSubmit={handleSubmit}
                isLoading={isLoading}
                buttonText="Request Reset password"
                linkMessage=""
                linkText=""
                linkHref=""
                showFormLinkMessage={false}
                showSocialAuth={false}
            >
                <Fields fields={fields} handleChange={handleChange} fieldErrors={fieldErrors} />
            </Layout>
        </PageLayout>
    );
}