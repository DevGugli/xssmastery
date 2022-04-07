// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Identity proofing occurs during which phase of identification and authentication?  ",
    answer: " Identification ",
    options: [
      "Testing ",
      "Verification ",
      "Authentication",
      " Identification "
    ]
  },
    {
    numb: 2,
    question: "Which of the following is the difference between identification and authentication of a user?  ",
    answer: "Identification tells who the user is and authentication proves it. ",
    options: [
      "Identification tells who the user is and authentication tells whether the user is allowed to logon to a system. ",
      "Identification tells who the user is and authentication proves it. ",
      " Identification proves who the user is and authentication is used to keep the users data secure. ",
      " Identification proves who the user is and authentication tells the user what they are allowed to do."
    ]
  },
    {
    numb: 3,
    question: "What are the example attacks of Identification and Authentication Failures?  ",
    answer: "Use of Credential Stuffing",
    options: [
      "CSRF",
      "Use of Credential Stuffing",
      " Exploiting third party component",
      "Retrieve credit card numbers by exploiting SQL Injection flaw "
    ]
  },
    {
    numb: 4,
    question: "What's one reason an application might have authentication weaknesses? ",
    answer: "Store passwords in clear text and allow default, weak, or well-known passwords.",
    options: [
      "It has an effective password recovery process and blocks brute force attacks.",
      "Store passwords in clear text and allow default, weak, or well-known passwords.",
      "It has multi-factor authentication.",
      "Allows automated attacks."
    ]
  },
    {
    numb: 5,
    question: "Passing session-id in URL may lead to",
    answer: "Both B and D ",
    options: [
      "SQL Injection",
      "Session Fixation",
      "Session Hijacking",
      "Both B and D "
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