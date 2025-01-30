"use client";

import { TextField } from "@mui/material";
import { InputProps } from "@/interface/forms";

export default function Input({
                                  id,
                                  type,
                                  label,
                                  name,
                                  autoComplete,
                                  value,
                                  handleChange,
                                  required = false,
                                  fullWidth = false,
                                  autoFocus = false,
                                  error,
                                  helperText,
                              }: InputProps & { error?: boolean; helperText?: string }) {
    return (
        <TextField
            id={id}
            type={type}
            label={label}
            name={name}
            autoComplete={autoComplete}
            value={value}
            onChange={handleChange}
            required={required}
            fullWidth={fullWidth}
            autoFocus={autoFocus}
            error={error}
            helperText={helperText}
        />
    );
}