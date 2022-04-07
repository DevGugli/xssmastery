// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "What is threat modelling?",
    answer: "A structured process to identify security requirements, pinpoint threats and potential vulnerabilities, quantify criticality, and prioritize remediation.",
    options: [
      "The ability of a CPU to provide multiple threads of execution at once.",
      "An iterative approach to software development with frequent release cycles.",
      "A structured process to identify security requirements, pinpoint threats and potential vulnerabilities, quantify criticality, and prioritize remediation.",
      "none of the above"
    ]
  },
    {
    numb: 2,
    question: " Web server will log which part of a GET request? ",
    answer: "Query Strings ",
    options: [
      "Hidden tags ",
      "Query Strings ",
      "Header ",
      "Cookies "
    ]
  },
    {
    numb: 3,
    question: "Temporary files?",
    answer: "Should be completely removed from the server",
    options: [
      "Should be placed securely in a folder called “temp” in the web root",
      "Can be placed anywhere in the web root as long as there are no links to them",
      "Can be placed anywhere after changing the extension",
      "Should be completely removed from the server"
    ]
  },
    {
    numb: 4,
    question: "How can we prevent dictionary attacks on password hashes ? ",
    answer: "Salting the hash ",
    options: [
      "Hashing the password twice ",
      "Encrypting the password using the private key ",
      "Use an encryption algorithm you wrote your self so no one knows how it works ",
      "Salting the hash "
    ]
  },
    {
    numb: 5,
    question: "Which one of these is Not the recommended way to prevent Sensitive Data Exposure? ",
    answer: "Store passwords in Database in plain text ",
    options: [
      "Store passwords in Database in plain text ",
      "Sensitive Data is never stored in clear text",
      " The generation of the keys is secure ",
      "The algorithms used to encrypt the data are considered strong enough"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];