// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Broken access control is: ",
    answer: "Bypassing the authentication checks ",
    options: [
      "Accessing a user account ",
      "Bypassing the authentication checks ",
      "Accessing the website from VPN ",
      "ALL of the above "
    ]
  },
    {
    numb: 2,
    question: "Broken Access Control can be caused due to: ",
    answer: "All ",
    options: [
      "Insecure Direct Object Reference ",
      "Privilege Escalation ",
      "Local file inclusion ",
      "All "
    ]
  },
    {
    numb: 3,
    question: "What threat are you vulnerable to if you do not validate authorization of user for direct references to restricted resources? ",
    answer: "Insecure Direct Object References ",
    options: [
      "SQL Injection ",
      "Cross Site Scripting ",
      "Cross Site Request Forgery ",
      "Insecure Direct Object References "
    ]
  },
    {
    numb: 4,
    question: "User A and User B belong to same access level in an application, However User A is able to view credit card information of User B. This is classic example of ",
    answer: "Horizontal Privilege Escalation ",
    options: [
      "Horizontal Privilege Escalation ",
      "Vertical Privilege Escalation ",
      "CSRF ",
      "None of the above "
    ]
  },
    {
    numb: 5,
    question: "Which of the following are effective measures to implement access control? ",
    answer: "Implementing Access Control Matrix for application resources ",
    options: [
      "Using hidden form fields to authorize ",
      "Enforcing RWX permission for every files on server for everyone ",
      "Logging unauthorized users actions ",
      "Implementing Access Control Matrix for application resources "
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