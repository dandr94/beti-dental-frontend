"use client";

import { Fields, Layout } from "@/components/forms";
import { PageLayout } from "@/components/forms";
import { useParams } from "next/navigation";
import { useResetPasswordConfirm } from "@/hooks";
import { UIDTokenProps } from "@/interface/auth";


export default function Page() {
    const { uid, token } = useParams();

    const {
        new_password,
        re_new_password,
        isLoading,
        fieldErrors,
        handleChange,
        handleSubmit,
    } = useResetPasswordConfirm({ uid, token } as UIDTokenProps);


    const fields = [
        {
            id: "new_password",
            type: "password",
            label: "New Password",
            name: "new_password",
            autoComplete: "new_password",
            value: new_password,
            required: true,
            fullWidth: true,
        },
        {
            id: "re_new_password",
            type: "password",
            label: "Repeat New Password",
            name: "re_new_password",
            autoComplete: "re_new_password",
            value: re_new_password,
            required: true,
            fullWidth: true,
        },
    ];
    return (
        <PageLayout>
            <Layout
                title="Reset your password"
                onSubmit={handleSubmit}
                isLoading={isLoading}
                buttonText="Confirm password reset"
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