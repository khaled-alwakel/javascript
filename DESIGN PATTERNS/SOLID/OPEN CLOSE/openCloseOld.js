function printQuiz(questions) {
    questions.forEach(question => {
        console.log(question.description)
        switch (question.type) {
            case 'boolean':
                console.log('1. True');
                console.log('2. False');
                break
            case 'multipleChoice':
                question.options.forEach((option, index) => {
                    console.log(`${index +1} . ${option }`)
                });
                break
            case 'text':
                console.log('Answer: __________');
                break
        }
        // console.log('')
    });
}
const questions = [{
        type: 'boolean',
        description: 'this video is useful'
    },
    {
        type: 'multipleChoice',
        description: 'what is your favorite language',
        options: ['css', 'javascript', 'python']
    },
    {
        type: 'text',
        description: 'describe your favorites js feature '
    },
    {
        type: 'range',
        description: ' what is the speed limit in your city '
    }
]
printQuiz(questions)

// THIS EXAMPLE VIOLATES THE [OPEN FOR EXTENSION CLOSE FOR MODIFICATION] PRINCIPLE