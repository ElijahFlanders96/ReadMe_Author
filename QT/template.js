function generateREADME(answers) {
    return `

    # ${answers.title}

    ## Table of Contents
    * [ ]

    ## Description
    ${answers.projDescription}

    ## Installation Instructions
    ${answers.installInstruct}

    ## Usage Information
    ${answers.usageInfo}

    ## Contributions
    ${answers.contributions}

    ## Testing
    ${answers.test}

    ## Author Contact
    Contact the author for further inquiries!<br>
    Github link: (https://github.com/${answers.github.trim().toLowerCase()})<br>
    Email: ${answers.email}

    `;
}

module.exports = generateREADME;