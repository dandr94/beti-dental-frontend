import type { Metadata } from "next";

import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
    title: "Home | Beti Dental",
    description: "Beti Dental Home Page ",
};

export default function Page() {
    return (
        <>
            <HomePage />
        </>
    );
}