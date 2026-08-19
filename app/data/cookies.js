export const cookies = {
    necessary: [
        {
            name: 'ncc_c',
            duration: 'Persistent - 1 year',
            description: 'Stores whether the user has given consent to the website’s cookie settings. It is used by Cookie Control to remember the consent decision. It does not collect or store personal information about visitors to the site.'
        },
        {
            name: 'ncc_e',
            duration: 'Persistent - 1 year',
            description: 'Stores the IDs of the cookies or cookie categories that the user has enabled. It is used by Cookie Control to remember the user’s selected cookie preferences. It does not collect or store personal information about visitors to the site.'
        },
    ],
    optional: [
        {
            name: '_ga',
            type: 'analytics',
            duration: 'Persistent - 2 years',
            description: 'Google Analytics cookie used to distinguish users and measure website activity. It helps provide information about how visitors interact with the website.'
        },
        {
            name: '_ga_*',
            type: 'analytics',
            duration: 'Persistent - 2 years',
            description: 'Google Analytics cookie used to persist session state for this website, such as session count and duration.'
        },
    ]
}