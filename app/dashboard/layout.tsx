import { RequireRoleAuth } from "@/components/utils";
import { ChildrenProps } from "@/interface/common";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard | Beti Dental",
    description: "Beti Dental dashboard page",
};

export default function Layout({ children }: ChildrenProps) {
    return <RequireRoleAuth allowedRoles={["all"]}> {children} </RequireRoleAuth>;
}