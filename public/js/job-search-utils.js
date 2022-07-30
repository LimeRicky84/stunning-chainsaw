export const getCurrencySymbol = countryCode => {
    const currencies = {
        gb: '£',
        us: '$',
        ca: '$',
        it: '€',
        mx: '₱',
        au: '$',
    };
    return currencies[countryCode];
};

export const extractFormData = form => Array
    .from(form.elements)
    .reduce((acc, {id, value }) => ({ ...acc, [id]: value }), {});