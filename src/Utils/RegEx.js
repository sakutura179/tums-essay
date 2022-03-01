export const validEmail = new RegExp(
    '^[a-zA-Z0-9._-]+@[a-zA-Z0-9]{2,}.[a-zA-Z]{2,4}$'
);

export const validPhoneNumber = new RegExp(
    '^0[1-9][0-9]{8}$'
);

export const validCateName = new RegExp(
    '^[^0-9`~!@#$%^&*)(\\;\',./+-=_"}{|:?><]{1,50}$'
);

export const validProductName = new RegExp(
    '^[^`^)(\\;\',+="}{:?><]{1,100}$'
    // ~ ! @ # $ % & * . - _ | /
);