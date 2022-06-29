const email = [
    '1@xyz.com',
    '2@xyz.com',
    '3@xyz.com',
    '4@xyz.com',
    '5@xyz.com',
    '6@xyz.com',
    '7@xyz.com',
    '8@xyz.com',
    '9@xyz.com',
    '10@xyz.com',
    '11@xyz.com',
    '12@xyz.com',
    '13@xyz.com',
    '14@xyz.com',
    '15@xyz.com',
    '16@xyz.com',
    '17@xyz.com',
    '18@xyz.com',
    '19@xyz.com',
    '20@xyz.com',
    '21@xyz.com',
    '22@xyz.com',
    '23@xyz.com',
    '24@xyz.com',
    '25@xyz.com',
    '26@xyz.com',
    '27@xyz.com',
    '28@xyz.com',
    '29@xyz.com',
    '30@xyz.com',
    '31@xyz.com',
    '32@xyz.com',
    '33@xyz.com',
    '34@xyz.com',
    '35@xyz.com',
    '36@xyz.com',
    '37@xyz.com',
    '38@xyz.com',
    '39@xyz.com',
    '40@xyz.com',
    '41@xyz.com',
    '42@xyz.com',
    '43@xyz.com',
    '44@xyz.com',
    '45@xyz.com',
    '46@xyz.com',
    '47@xyz.com',
    '48@xyz.com',
    '49@xyz.com',
    '50@xyz.com',
    '51@xyz.com',
    '52@xyz.com',
    '53@xyz.com',
    ``,
];
  
  const descriptionsBodies = [
    'How to disagree with someone',
    'iPhone review',
    'how-to video',
    'video essay on the history of video games',
    'How to make money on the App Store',
    'Learn NextJS in five minutes (Not clickbate)',
    'Movie trailer',
    'Hello world',
    'Another possible solution to the algorithm',
    'Apology video',
    'Submission for startup pitch',
  ];
  
  const possibleResponses = [
    'I disagree!',
    'I tried your algorithm, here were the results',
    'This was awesome',
    'Thank you for the great content',
    'Please check out my video response',
    'Like and subscribe to my channel please',
    'Reply: The side effects of in app purchases on digital marketplaces',
  ];
  
  const users = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel',
    ``,
  ];
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random full name
  const getRandomName = () =>
    `${getRandomArrItem(users)}`;

  // Gets a random email
  const getRandomEmail = () =>
    `${getRandomArrItem(email)}`;

  
  // Function to generate random videos that we can add to the database. Includes video responses.
  const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtText: getRandomArrItem(descriptionsBodies),
        username: getRandomName(),
        reactions: [...getThoughtResponses(3)],
      });
    }
    return results;
  };
  
  // Create the responses that will be added to each video
  const getThoughtResponses = (int) => {
    if (int === 1) {
      return getRandomArrItem(possibleResponses);
    }
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        reactionBody: getRandomArrItem(possibleResponses),
        username: getRandomName(),
      });
    }
    return results;
  };
  
  // Export the functions for use in seed.js
  module.exports = { getRandomName, getRandomEmail, getRandomThoughts };
  