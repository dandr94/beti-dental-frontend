import { Metadata } from "next";
import Page from "./page";

export const metadata: Metadata = {
    title: "Password Reset Confirm | Beti Dental",
    description: "Beti Dental password reset confirm page",
};

export default function Layout() {
    return <Page />;
}