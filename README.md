# Helb


Helb is a collaborative website that aims to collect and display all the resources shared across social media, spreadsheet, instagram, twitter and facebook post. 
Including but not only the list of NGO(s), fund raising and any other form of usefull information that will help during the crisis of beirut, lebanon post date of 04.08.2020.


# AUTH SYSTEM
Create an acocunt via the platform. There is two type of account.
1. Standard
Standard user can contribute by providing link(s) followed by a description.
> Links should be verified see moderator type.
Contribution will result into showing in the contributor tab of the home page. (optional work)

2. Moderator
Moderators have the standard account option.
A Moderator will be able to verify the link and approve or deny it. *See form system
Additionaly, a moderator can add new alert cards *See card/form system

** moderator rank is attributed to a specific user (admin, worker at NGO, or "Helb" volunteer) **

# SPREADSHEET SYSTEM
Spreadsheet should be parsed and transformed into table or cards (UX choice). 
* Each spreadsheet has a different format so we need to provide a module containing a schema for that specific sheet.

# CARDS SYSTEM

## Social Cards
Support for the following platform: 
1. Instagram
2. Facebook
3. Twitter
Each card is a link provided by a contributor.
The link is then processed and return an embed card (Plugins/Dev API)
cards will be displayed in the social feed under the feed page.
** Special Case: Missing Person will be displayed in the Missing page (*See Missing page) ** 

## INSTITUIONS CARDS (NGO)
This card is important, It display information for supporter to know which ngo are helping.
it provide with informatives such as the name, a description and links:
Current model: 
{
  logo: 'string',
  backgroundColor: 'string',
  header: 'string', // this is the name/title
  description: 'string', // 300 chars
  links: [
    src: 'string', // valid url
    text: 'string',
  ]
}
** It is unsure for now how institutions are submitted **

## WIKI CARDS (Precautions)
Wiki card are here to "teach" people how to react base in a situation/environment to limit risks
ex: Covid-19 is still present and risk are higher than ever. Instruction are given such as how to wear a mask. additional instructions can be given. 
Current Model:
{ 
imgSrc: 'string', 
title: 'string', 
text: 'string', 
// Optional Input
notices: [
  notice: 'string', // additional instructions
], 
// Optional Input
links: [
  src: 'string', // Valid url
  reference: 'string', // name of the reference
]
}
** It is unsure for now how wikis are submitted **
