// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "An SQL injection is often used to attack what ?",
    answer: "Large - scale  sequel databases such as those containing credits card information",
    options: [
      "Small scale machines such as diebold ATMs ",
      "Server running SQL databases similar to Hadoop or Hive.",
      "Large - scale  sequel databases such as those containing credits card information",
      "Servers built on NoSQL."
    ]
  },
    {
    numb: 2,
    question: "According to OWASP what is the most dangerous web vulnerability?",
    answer: "Injection (SQL,LDAP,etc)",
    options: [
      "Injection (SQL,LDAP,etc)",
      "Cross-site-scripting(xss)",
      " Security Misconfiguration",
      "Sensitive Data Exposure"
    ]
  },
    {
    numb: 3,
    question: "what is necessary for a cross-site-script attack with cookies to be thwarted?",
    answer: "CAPTCHAs",
    options: [
      "CAPTCHAs",
      "Virtual machines",
      "Proxies",
      "Firewalls"
    ]
  },
    {
    numb: 4,
    question: "What are the two primary classification of cross-site-scripting? ",
    answer: " Non-persistent and persistent",
    options: [
      "DOM-based and persistent",
      "traditional and DOM-based",
      "Traditional and non-persistent",
      " Non-persistent and persistent"
    ]
  },
    {
    numb: 5,
    question: "What are the weaknesses included in Software and Data Integrity Failures?",
    answer: "Both A and C",
    options: [
      "Download of Code Without Integrity Check",
      "Insufficient Entropy",
      " Deserialization of Untrusted Data",
      "Both A and C"
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