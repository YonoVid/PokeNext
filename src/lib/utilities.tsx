type ParseResult<T> =
    | { parsed: T; hasError: false; error?: undefined }
    | { parsed?: undefined; hasError: true; error?: unknown };

export const safeJsonParse =
    <T,>(guard: (o: any) => o is T) =>
    (text: string): ParseResult<T> => {
        const parsed = JSON.parse(text);
        return guard(parsed) ? { parsed, hasError: false } : { hasError: true };
    };

export const upperCaseFirst = (value?: string): string => {
    if (!value) {
        return "";
    }

    const newValue = value.trim();

    return (
        newValue.charAt(0).toLocaleUpperCase() +
        newValue.slice(1).toLocaleLowerCase()
    );
};

export const formatId = (value?: number): string => {
    if (!value) {
        value = 0;
    }

    const newValue = value.toString();

    return "#" + newValue.padStart(4, "0");
};

export const cleanString = (value?: string): string => {
    if (!value) {
        value = "";
    }

    const newValue = value.replaceAll(/[\u000C/\n]/g, " ");

    return newValue;
};
