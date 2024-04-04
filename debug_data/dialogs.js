const conversations = [
    {
      name: 'Twilight Skies (2)',
      link: 'https://warcraft.wiki.gg/wiki/Twilight_Skies_(2)',
      image: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_tournaments_banner_orc.jpg',
      expansionImage: 'https://warcraft.wiki.gg/images/thumb/6/61/Dragonflight-Icon-Inline.png/48px-Dragonflight-Icon-Inline.png',
      active: true,
      messages: [
        {
          type: 'text-say',
          sender: 'Loudspeaker',
          text: 'Zeppelin arrival in six minutes.'
        },
        {
          type: 'text-say',
          sender: 'Hobart Grapplehammer',
          text: 'Boarding the Spear of Durotar, are we? You are to be envied, Horde marine!'
        },
        {
          type: 'text-say',
          sender: 'Hobart Grapplehammer',
          text: 'You are about to rip the horizon a new sky-hole aboard a sensational new era in aeronautical innovation.'
        },
        {
          type: 'text-say',
          sender: 'Hobart Grapplehammer',
          text: 'It\'s been recklessly engineered with a merciless disregard for both budgetary concerns and those cumbersome, inefficient "laws of physics."'
        },
        {
          type: 'text-say',
          sender: 'Assistant Greely',
          text: 'Not a penny was wasted on comfort or personal safety!'
        },
        {
          type: 'text-yell',
          sender: 'Garrosh Hellscream',
          text: 'GET!'
        },
        {
          type: 'text-yell',
          sender: 'Garrosh Hellscream',
          text: 'OFF!'
        },
        {
          type: 'text-yell',
          sender: 'Garrosh Hellscream',
          text: 'MY!'
        },
        {
          type: 'text-say',
          sender: 'Kor\'kron Air Marine',
          text: 'The Warchief\'s zeppelin is in flames! It\'s going down!'
        },
        {
          type: 'text-yell',
          sender: 'Garrosh Hellscream',
          text: 'SHIP!'
        }
      ]
    },
    {
        name: 'Dave Corlew',
        link: 'https://warcraft.wiki.gg/wiki/Twilight_Skies_(2)',
        image: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_tournaments_banner_human.jpg',
        expansionImage: 'https://warcraft.wiki.gg/images/e/ef/Cata-Logo-Small.png',
        active: false,
        messages: [
          {
            type: 'text-say',
            sender: 'Dave Corlew',
            text: 'Hello, fellow adventurer!'
          },
          {
            type: 'text-say',
            sender: 'Dave Corlew',
            text: 'Have you heard about the latest expansion?'
          },
          {
            type: 'text-say',
            sender: 'Dave Corlew',
            text: 'They say it\'s going to be epic!'
          },
          {
            type: 'text-say',
            sender: 'Dave Corlew',
            text: 'I can\'t wait to explore the new lands and face new challenges.'
          },
          {
            type: 'text-say',
            sender: 'Dave Corlew',
            text: 'Let\'s team up and conquer the world together!'
          }
        ]
      }
  ];
  
  const currentConversation = conversations.find(c => c.active);
  
  module.exports = { conversations, currentConversation };