export interface UIDTokenProps {
    uid: string;
    token: string;
}


export interface RequireRoleAuthProps {
    children: React.ReactNode;
    allowedRoles: string[];
}