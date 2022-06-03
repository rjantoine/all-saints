export default {
    name: "contactForm",
    title: "Contact Form",
    type: "object",
    fields: [
        {
            title: "Select the type of form",
            name: "formType",
            type: "string",
            options: {
                list: [
                    {title: "Contact", value: "contact"},
                    {title: "Prayer Request", value: "prayer"},
                ],
                layout: "radio",
            },
        },
    ]
}