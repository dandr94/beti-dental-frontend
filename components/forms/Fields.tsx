import { Stack, Box } from "@mui/material";
import { Input } from "@/components/forms/";
import { FieldsProps } from "@/interface/forms";

export default function Fields({ fields, handleChange, fieldErrors }: FieldsProps & {
    fieldErrors: Record<string, string>
}) {
    return (
        <>
            {fields.map((field, index) => {
                if (field.id === "first_name" || field.id === "last_name") {
                    if (field.id === "first_name") {
                        return (
                            <Stack direction="row" spacing={2} key={index} mb={2}>
                                <Box flex={1}>
                                    <Input
                                        {...field}
                                        handleChange={handleChange}
                                        fullWidth
                                        error={!!fieldErrors[field.name]}
                                        helperText={fieldErrors[field.name]}
                                    />
                                </Box>
                                <Box flex={1}>
                                    <Input
                                        {...fields[index + 1]}
                                        handleChange={handleChange}
                                        fullWidth
                                        error={!!fieldErrors[fields[index + 1].name]}
                                        helperText={fieldErrors[fields[index + 1].name]}
                                    />
                                </Box>
                            </Stack>
                        );
                    } else {
                        return null;
                    }
                }

                return (
                    <Input
                        key={field.id}
                        {...field}
                        handleChange={handleChange}
                        error={!!fieldErrors[field.name]}
                        helperText={fieldErrors[field.name]}
                    />
                );
            })}
        </>
    );
}