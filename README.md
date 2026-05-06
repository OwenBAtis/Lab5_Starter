# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

- Owen Atis
- Benjamin Scheerger


Question 1: No, you would not use a unit test to test the message feature of an application. A message feature as described includes a variety of moving parts, and unit tests are only used for small isolated sections of code, to make sure each component is working as intended. Additionally, it would be impossible to use a unit test to verify that the message was both sent and actually reaches the user it was sent too. 

Question 2: Yes, you would use a unit test to test the max message length feature of an application. Unlike the message feature in Question 1, this is likely achieved with a smaller section of code that can be isolated, and has verifiable success and failure conditions. For example, you could test with messages of lengths 79, 80, and 81, which would result in success, success, and failure if the feature has a soft cap on message length.  

Expose: https://owenbatis.github.io/Lab5_Starter/expose.html
Explore: https://owenbatis.github.io/Lab5_Starter/explore.html 

