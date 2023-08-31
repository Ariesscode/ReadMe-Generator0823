
function renderLicense(license) {
  if(license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    
  The MIT License: 

  [(https://opensource.org/licenses/MIT)]

    `
  } else if (license === 'Mozilla Public License 2.0') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

  Mozilla Public License 2.0:

  [(https://opensource.org/license/mpl-2-0)]

    `
  } else if (license === 'Boost Software License 1.0') {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)

  Boost Software License 1.0:

  [(https://opensource.org/license/bsl-1-0)]

    `
  } else if (license === 'BSD 3-Clause License') {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)

  BSD 3-Clause License:

  [(https://opensource.org/license/bsd-3-clause)]

    `
  } else if (license === 'Apache 2.0 License') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

  Apache 2.0 License:

  [(https://opensource.org/license/apache-2-0)]

    `
  } else if (license === 'GNU_GPLv3') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

  GNU GPL v3:

  [(https://opensource.org/license/gpl-3-0)]

    `
  } else if (license === 'The_unlicense') {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

  The_unlicense:

  [(https://opensource.org/license/unlicense)]

    `
  } else {
    return ""
  }

}



function generateMarkdown(data) {
  return `# 09 Node.js Challenge: ${data.title}

## GitHub Project Link
  https://github.com/${data.github}/${data.title}

## Description
${data.description}



## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [Contribution](#HowtoContribute)
- [Tests](#tests)
- [Contact](#ContactDeveloper)


## Installation
${data.installation}


## Usage
${data.usage}


## Credits
${data.credits}

## License
${renderLicense(data.license)}

Visit this link, for more info: [https://choosealicense.com/](https://choosealicense.com/).


## Features

${data.features}

## How to Contribute
${data.contribution}

## Tests
${data.tests}

## Contact Developer
You can email me at:
${data.email}

Visit my GitHub account:
https://github.com/${data.github}


`;
}

module.exports = generateMarkdown;
