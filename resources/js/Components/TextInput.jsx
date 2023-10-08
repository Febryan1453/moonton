import PropTypes from "prop-types";
import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
    {
        id,
        type = "text",
        name,
        value,
        defaultValue,
        className,
        variant = "primary",
        autoComplete,
        required,
        isFocused,
        onChange,
        placeholder,
        isError,
        ...props
    },
    ref
) {
    TextInput.propTypes = {
        id: PropTypes.string,
        type: PropTypes.oneOf(["text", "email", "password", "number", "file"]),
        name: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        className: PropTypes.string,
        variant: PropTypes.oneOf(["primary", "error", "primary-outline"]),
        autoComplete: PropTypes.string,
        required: PropTypes.bool,
        isFocused: PropTypes.bool,
        onChange: PropTypes.func,
        placeholder: PropTypes.string,
        isError: PropTypes.bool,
    };

    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            id={id}
            type={type}
            name={name}
            value={value}
            defaultValue={defaultValue}
            className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full ${
                isError && "input-error"
            } input-${variant} ${className}`}
            ref={input}
            autoComplete={autoComplete}
            required={required}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
});
