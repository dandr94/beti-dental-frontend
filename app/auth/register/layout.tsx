import { Metadata } from "next";
import Page from "./page";

export const metadata: Metadata = {
    title: "Register | Beti Dental",
    description: "Beti Dental register page",
};

export default function Layout() {
    return <Page />;
}