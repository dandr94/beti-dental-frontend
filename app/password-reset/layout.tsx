import { Metadata } from "next";
import Page from "./page";

export const metadata: Metadata = {
    title: "Password Reset | Beti Dental",
    description: "Beti Dental password reset page ",
};

export default function Layout() {
    return <Page />;
}