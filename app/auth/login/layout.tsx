import { Metadata } from "next";
import Page from "./page";

export const metadata: Metadata = {
    title: "Login | Beti Dental",
    description: "Beti Dental login Page",
};

export default function Layout() {
    return <Page />;
}