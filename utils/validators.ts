export const validateRegisterForm = (formData: {
    email: string;
    first_name: string;
    last_name: string;
    password: string;
    re_password: string;
    phone: string;
    role?: string;
}): Record<string, string> => {
    const { email, first_name, last_name, password, re_password, phone, role } = formData;
    const errors: Record<string, string> = {};

    if (!email) {
        errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "Email is invalid.";
    }

    if (!first_name) {
        errors.first_name = "First name is required.";
    } else if (first_name.length < 2 || first_name.length > 64) {
        errors.first_name = "First name must be minimum 2 and maximum 64 characters.";
    }

    if (!last_name) {
        errors.last_name = "Last name is required.";
    } else if (last_name.length < 2 || last_name.length > 64) {
        errors.first_name = "Last name must be minimum 2 and maximum 64 characters.";
    }

    if (!password) {
        errors.password = "Password is required.";
    } else if (password.length < 8) {
        errors.password = "Password must be at least 8 characters.";
    } else if (/^\d+$/.test(password)) {
        errors.password = "Password cannot contain only numbers.";
    }

    if (password !== re_password) {
        errors.re_password = "Passwords do not match.";
    }

    if (!phone) {
        errors.phone = "Phone is required.";
    } else {
        const cleanedPhone = phone.replace(/\D/g, "");

        if (cleanedPhone.startsWith("359")) {
            if (cleanedPhone.length !== 12) {
                errors.phone = "Phone number with country code must be 12 digits long.";
            } else if (cleanedPhone[3] === "0") {
                errors.phone = "The fourth digit after 359 cannot be 0.";
            }
        } else if (cleanedPhone.startsWith("0")) {
            const validLocalCodes = ["087", "088", "089"];
            const localCode = cleanedPhone.substring(0, 3);

            if (!validLocalCodes.includes(localCode)) {
                errors.phone = "Phone number must start with 087, 088, 089 or 359";
            } else if (cleanedPhone.length !== 10) {
                errors.phone = "Phone number with local code must be 10 digits long.";
            }
        } else {
            errors.phone = "Phone number must start with 087, 088, 089 or 359.";
        }
    }

    // For Admin panel
    if (!role) {
        errors.role = "Role is required";
    } else if (!["patient", "dentist", "admin"].includes(role.toLowerCase())) {
        errors.role = "Role must be one of: Patient, Dentist, Admin";
    }

    return errors;
};


export const validateLoginForm = (formData: {
    email: string;
    password: string;

}): Record<string, string> => {
    const { email, password } = formData;
    const errors: Record<string, string> = {};
    if (!email) {
        errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "Email is invalid.";
    }

    if (!password) {
        errors.password = "Password is required.";
    } else if (password.length < 8) {
        errors.password = "Password must be at least 8 characters.";
    } else if (/^\d+$/.test(password)) {
        errors.password = "Password cannot contain only numbers.";
    }

    return errors;
};

export const validatePasswordResetForm = (
    email: string,
) => {
    const errors: Record<string, string> = {};

    if (!email) {
        errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "Email is invalid.";
    }
    return errors;
};

export const validatePasswordResetConfirmForm = (formData: {
    new_password: string;
    re_new_password: string;

}): Record<string, string> => {
    const { new_password, re_new_password } = formData;
    const errors: Record<string, string> = {};

    if (!new_password) {
        errors.new_password = "Password is required.";
    } else if (new_password.length < 8) {
        errors.new_password = "Password must be at least 8 characters.";
    } else if (/^\d+$/.test(new_password)) {
        errors.new_password = "Password cannot contain only numbers.";
    }

    if (!re_new_password) {
        errors.re_new_password = "Password is required.";
    } else if (re_new_password.length < 8) {
        errors.re_new_password = "Password must be at least 8 characters.";
    } else if (/^\d+$/.test(re_new_password)) {
        errors.re_new_password = "Password cannot contain only numbers.";
    }

    if (new_password !== re_new_password) {
        errors.re_new_password = "Passwords do not match.";
    }
    return errors;
};

//TODO: Allow password change also?
export const validateEditUserForm = (formData: {
    email: string;
    first_name: string;
    last_name: string;
    phone: string;
    role: string;
}): Record<string, string> => {
    const { email, first_name, last_name, phone, role } = formData;
    const errors: Record<string, string> = {};

    if (!email) {
        errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "Email is invalid.";
    }

    if (!first_name) {
        errors.first_name = "First name is required.";
    } else if (first_name.length < 2 || first_name.length > 64) {
        errors.first_name = "First name must be minimum 2 and maximum 64 characters.";
    }

    if (!last_name) {
        errors.last_name = "Last name is required.";
    } else if (last_name.length < 2 || last_name.length > 64) {
        errors.first_name = "Last name must be minimum 2 and maximum 64 characters.";
    }

    if (!phone) {
        errors.phone = "Phone is required.";
    } else {
        const cleanedPhone = phone.replace(/\D/g, "");

        if (cleanedPhone.startsWith("359")) {
            if (cleanedPhone.length !== 12) {
                errors.phone = "Phone number with country code must be 12 digits long.";
            } else if (cleanedPhone[3] === "0") {
                errors.phone = "The fourth digit after 359 cannot be 0.";
            }
        } else if (cleanedPhone.startsWith("0")) {
            const validLocalCodes = ["087", "088", "089"];
            const localCode = cleanedPhone.substring(0, 3);

            if (!validLocalCodes.includes(localCode)) {
                errors.phone = "Phone number must start with 087, 088, 089 or 359";
            } else if (cleanedPhone.length !== 10) {
                errors.phone = "Phone number with local code must be 10 digits long.";
            }
        } else {
            errors.phone = "Phone number must start with 087, 088, 089 or 359.";
        }
    }

    if (!role) {
        errors.role = "Role is required";
    } else if (!["patient", "dentist", "admin"].includes(role.toLowerCase())) {
        errors.role = "Role must be one of: Patient, Dentist, Admin";
    }

    return errors;
};

export const validateBookingModalForm = (formData: {
    email: string;
    first_name: string;
    last_name: string;
    phone: string;
}): Record<string, string> => {
    const { email, first_name, last_name, phone } = formData;
    const errors: Record<string, string> = {};

    if (!email) {
        errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "Email is invalid.";
    }

    if (!first_name) {
        errors.first_name = "First name is required.";
    } else if (first_name.length < 2 || first_name.length > 64) {
        errors.first_name = "First name must be minimum 2 and maximum 64 characters.";
    }

    if (!last_name) {
        errors.last_name = "Last name is required.";
    } else if (last_name.length < 2 || last_name.length > 64) {
        errors.first_name = "Last name must be minimum 2 and maximum 64 characters.";
    }

    if (!phone) {
        errors.phone = "Phone is required.";
    } else {
        const cleanedPhone = phone.replace(/\D/g, "");

        if (cleanedPhone.startsWith("359")) {
            if (cleanedPhone.length !== 12) {
                errors.phone = "Phone number with country code must be 12 digits long.";
            } else if (cleanedPhone[3] === "0") {
                errors.phone = "The fourth digit after 359 cannot be 0.";
            }
        } else if (cleanedPhone.startsWith("0")) {
            const validLocalCodes = ["087", "088", "089"];
            const localCode = cleanedPhone.substring(0, 3);

            if (!validLocalCodes.includes(localCode)) {
                errors.phone = "Phone number must start with 087, 088, 089 or 359";
            } else if (cleanedPhone.length !== 10) {
                errors.phone = "Phone number with local code must be 10 digits long.";
            }
        } else {
            errors.phone = "Phone number must start with 087, 088, 089 or 359.";
        }
    }

    return errors;
};