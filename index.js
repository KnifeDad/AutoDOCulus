const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this application?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Enter the path to your application screenshot (optional):',
    },
    {
        type: 'input',
        name: 'videoDemo',
        message: 'Enter the URL of your demo video (optional):',
    },
    {
        type: 'checkbox',
        name: 'technologies',
        message: 'Select the technologies used in your project:',
        choices: [
            'JavaScript',
            'Node.js',
            'Python',
            'React',
            'HTML',
            'CSS'
        ],
    },
    {
        type: 'input',
        name: 'features',
        message: 'List the key features of your application (comma separated):',
    }
];

// ASCII Art Banner
const banner = `
    ╔═══════════════════════════════════════╗
    ║             AutoDOCulus               ║
    ║      Professional README Generator    ║
    ╚═══════════════════════════════════════╝
`;

// Function to write README file
function writeToFile(fileName, data) {
    // Check if README.md already exists
    if (fileName === 'README.md' && fs.existsSync(fileName)) {
        console.warn('\x1b[33m%s\x1b[0m', 'Warning: README.md already exists!');
        // Generate a unique filename like README-generated.md
        fileName = 'README-generated.md';
        console.log(`Creating ${fileName} instead to prevent overwriting...`);
    }

    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log(`Successfully created ${fileName}!`)
    );
}

// Function to initialize app
function init() {
    // Display the banner in blue
    console.log('\x1b[34m%s\x1b[0m', banner);
    
    inquirer.prompt(questions)
        .then((answers) => {
            const markdownContent = generateMarkdown(answers);
            writeToFile('README.md', markdownContent);
        });
}

// Initialize app
init();
