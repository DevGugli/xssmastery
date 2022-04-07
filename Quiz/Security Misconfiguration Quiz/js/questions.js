// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "The HTTP methods that can lead to security issues in a web application",
    answer: "Both 1 and 4",
    options: [
      "TRACK",
      "Both 1 and 4",
      "OPTIONS",
      "TRACE"
    ]
  },
    {
    numb: 2,
    question: "Banner can get leaked by:",
    answer: "All of these",
    options: [
      "Server Side error",
      "Client side error",
      "HTTP header",
      "All of these"
    ]
  },
    {
    numb: 3,
    question: "Purpose of logging:",
    answer: "All of the above",
    options: [
      "Monitoring policy violations",
      "Identifying security incidents",
      "Establishing baselines",
      "All of the above"
    ]
  },
    {
    numb: 4,
    question: "To prevent security misconfigurations the developer should:",
    answer: "All of these ",
    options: [
      "Keep strong credentials",
      "All of these ",
      "Whitelist domains/subdomains",
      "Not expose server versions"
    ]
  },
    {
    numb: 5,
    question: "What are the recommendations to follow to avoid this type of attack?",
    answer: "All of the above",
    options: [
      "To prevent exception traces and other valuable information from being returned to attackers, if applicable, define and enforce all API response payload schemes, including error responses",
      "Make sure that the API can only be accessed using the specified HTTP verbs. All other HTTP verbs must be disabled (p HEAD. eg )",
      "APIs that expect to be accessed from browser-based clients (for example, the web application front-end) must implement an appropriate cross-origin resource sharing (CORS) policy",
      "All of the above"
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