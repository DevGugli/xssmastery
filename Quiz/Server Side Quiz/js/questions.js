// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "SSRF leads to ",
    answer: "sensitive information disclosure from the backend server of application ",
    options: [
      "sensitive information disclosure from the backend server of application ",
      "Whitelisting ",
      "Partial SSRF vulnerability/limited response vulnerability ",
      "stealing session cookies "
    ]
  },
    {
    numb: 2,
    question: "Which vulnerability may cause the application crash through buffer overflow, by sending large string in the request causes the buffer overflow? ",
    answer: "Full SSRF ",
    options: [
      "Partial SSRF ",
      "Full SSRF ",
      "Blind SSRF ",
      "Blind SSRF "
    ]
  },
    {
    numb: 3,
    question: "In which SSRF attacker are not able to control the data that are sent to the application in a trusted internal network? ",
    answer: "Blind SSRF ",
    options: [
      "Partial SSRF ",
      "Full SSRF ",
      "Blind SSRF ",
      "Whitelisting "
    ]
  },
    {
    numb: 4,
    question: "In some cases XXE injection, DDos these type of vulnerability may useful be exploit? ",
    answer: "Partial SSRF vulnerability/limited response vulnerability ",
    options: [
      "Full SSRF vulnerability ",
      "Partial SSRF vulnerability/limited response vulnerability ",
      "Full SSRF ",
      "Whitelisting "
    ]
  },
    {
    numb: 5,
    question: "Server discard the all the request containing IP addresses, domain names, keywords from the blacklist of server? ",
    answer: "Blacklisting ",
    options: [
      "Blacklisting ",
      "Full SSRF vulnerability ",
      "Whitelisting ",
      "Restricted content "
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