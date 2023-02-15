class BooleanQuestion {
    constructor(description) {
        this.description = description
    }
    printQuestionChoices() {
        console.log('1. True');
        console.log('2. False ')
    }
}

class MultipleChoiceQuestion {
    constructor(description, options) {
        this.description = description;
        this.options = options
    }
    printQuestionChoices() {
        this.options.forEach((option, index) => {
            console.log(`${index +1}. ${option}`);
        })
    }
}
class TextQuestion {
    constructor(description) {
        this.description = description
    }
    printQuestionChoices() {
        console.log('Answer: ______________');

    }
}
class RangeQuestion {
    constructor(description) {
        this.description = description
    }
    printQuestionChoices() {
        console.log('Minimum: ______________');
        console.log('Maximum: ______________');

    }
}

const questions = [
    new BooleanQuestion(' is that video useful ?'),
    new MultipleChoiceQuestion(
        ' is that video good ?', ['css', 'js', 'php', 'python']
    ),
    new TextQuestion(' Describe you favorite js feature ?'),
    new RangeQuestion(' what is the speed limit in your country ?'),
]

// unlike before i don't touch this function  open for extension and close for modification 
function printQuiz(questions) {
    questions.forEach(question => {
        console.log(question.description);
        question.printQuestionChoices()
        console.log('')
    })
}
printQuiz(questions)