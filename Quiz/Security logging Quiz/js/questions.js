// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Which of the following is/are OWASP top 10 vulnerabilities A. Security Misconfiguration B. Cross Site Scripting C. Insecure Direct Object References D. Broken Authentication and Session Management ? ",
    answer: "Only(A) and (C) ",
    options: [
      "Only(A) and (B) ",
      "Only(A) and (C) ",
      "Only(B) and (C) ",
      "All of the above "
    ]
  },
    {
    numb: 2,
    question: "What happens when an application takes user-inputted data and sends it to a web browser without proper validation and escaping? ",
    answer: " Cross Site Scripting",
    options: [
      "Security Misconfiguration",
      " Insecure Direct Object References",
      " Cross Site Scripting",
      "Broken Authentication and Session Management "
    ]
  },
    {
    numb: 3,
    question: "Which category includes Insecure Deserialization in OWASP Top 10 2021? ",
    answer: "Software and Data Integrity Failure ",
    options: [
      "Broken Access Control ",
      "Insecure Design",
      " Software and Data Integrity Failure ",
      " Injection"
    ]
  },
    {
    numb: 4,
    question: "Which of the category added newly in OWASP Top 10 2021? ",
    answer: "All",
    options: [
      "Insecure Design",
      "Software and Data Integrity Failure",
      "All",
      "Server-Side Request Forgery (SSRF) "
    ]
  },
    {
    numb: 5,
    question: "What are the weaknesses included in Security logging and monitoring?",
    answer: " Both 1 and 4",
    options: [
      "Insertion of Sensitive Information into Log File ",
      " Both 1 and 4",
      "SQL Injection",
      "Omission of Security-relevant Information "
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