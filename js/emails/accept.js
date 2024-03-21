export const accept = (names, from) => {
    console.log(from)
    if (from == "thomas@hackclub.com") {
      return (
        `Hi ${names},
  
  I just want to say that I really enjoyed reading your application, and I’m happy to share that we’re moving forward! Congratulations!
  
  I’m Thomas from Hack Club HQ in Vermont, and I’ll be your point of contact at HQ. Come to me for anything from marketing advice to thinking about starting a hackathon (like [Assemble](https://assemble.hackclub.com/), which was run by [@sampoder](https://hackclub.slack.com/team/USNPNJXNX), 17, from Singapore).
  
  <img src="https://cloud-o1y7sksn6-hack-club-bot.vercel.app/0img_2271.jpg" alt="Thomas Waving" width="240px" />
  
  Let’s set up a call for us to meet over Zoom. We’ll get to know each other, I’ll set you up with all of the different Hack Club resources, and we’ll talk through the next steps for your club.
  
  **Can you send me 3 times over the next week that work for a 45-minute Zoom call?** I’m online Monday - Friday, and available until 8 PM Eastern / 5 PM Pacific on Wednesday and Thursday, and until 4 PM Eastern / 1 PM Pacific Monday, Tuesday, and Friday.
  
  I’m so looking forward to getting to know you and supporting you as you embark on this journey. Cheers!
  
  Thomas
  (p.s. I just put a package with stickers in the mail to you! DM me on Slack when you get it!)
  --
  
  **Thomas Stubblefield**
  
  Club Team, Hack Club
  
  Hack Club Slack:[@Thomas](https://hackclub.slack.com/archives/D040S0P4T6F) (join the Slack [here](https://hackclub.com/slack/))
  
  Email: [thomas@hackclub.com](thomas@hackclub.com)
  
  <img src="https://assets.hackclub.com/flag-standalone.png" alt="Hack Club Flag" width="100px" />
  
  Hack Club is an [open source](https://github.com/hackclub/hackclub) and [financially transparent](https://bank.hackclub.com/hq/) 501(c)(3) nonprofit.
  
  Our EIN is 81-2908499. By the students, for the students.
  [Clubs](https://hackclub.com/) • [Slack](https://hackclub.com/slack/) • [HCB](https://hackclub.com/hcb/) • [Hackathons](https://hackathons.hackclub.com/)`
      )
    } else if(from == "sahiti@hackclub.com") {
        return(`Sahiti email template`)
    } else if(from == "jasper@hackclub.com") {
        return (
        `Hi ${names},

I just want to say that I LOVEED reading your application, and am happy to share that we’re moving forward! Congratulations!

I’m Jasper from Hack Club HQ in Vermont, and I’ll be your point of contact at HQ. You can come to me for anything from marketing advice, to thinking about starting a hackathon (like [Assemble](https://assemble.hackclub.com/), which was run by [@sampoder](https://hackclub.slack.com/team/USNPNJXNX), 17, from Singapore), ideas for club meetings, or even if you just want some Hack Club Stickers! :) 

<img src="https://cloud-i7yb9x3hw-hack-club-bot.vercel.app/0jasper-wth-the-dog.jpg" alt="Jasper Waving" width="240px" />

I would love to set up a call for us to meet over Zoom! We'll get to know each other, I'll set you up with all of the different Hack Club resources, and we'll talk through the next steps for your club.

**Can you send me 3 times over the next week that work for a 20-30 minute Zoom call?** I’m online Monday - Friday, and typically available between 4pm Eastern Time (1 PM Pacific) and 9 PM Eastern Time (6 PM Pacific). Let me know if these times don’t work for you, and we can make a time that works for you!

I'm so looking forward to getting to know you and supporting you as you embark on this journey.

Jasper

(p.s. I just put a package with stickers in the mail to you! DM me on Slack when you get it!)

--

**Jasper Mayone**

Clubs Team, Hack Club  
Hack Club Slack:[@Jasper](https://hackclub.slack.com/team/U05NX48GL3T) (join the Slack [here](https://hackclub.com/slack/))  
Email: [jasper@hackclub.com](jasper@hackclub.com)

<img src="https://assets.hackclub.com/flag-standalone.png" alt="Hack Club Flag" width="100px" />

Hack Club is an [open source](https://github.com/hackclub/hackclub) and [financially transparent](https://bank.hackclub.com/hq/) 501(c)(3) nonprofit. Our EIN is 81-2908499. By the students, for the students.

[Clubs](https://hackclub.com/) • [Slack](https://hackclub.com/slack/) • [HCB](https://hackclub.com/hcb/) • [Hackathons](https://hackathons.hackclub.com/)`
)
    } else if(from == "arpan@hackclub.com") {
        return(`Arpan email template`)
    } else if(from == "sarah@hackclub.com") {
        return(`Hi ${names},
  
I really enjoyed learning all about you through your application and I’m happy to share that we’re moving forward! Congratulations and welcome to Hack Club!
  
I’m Sarah from Hack Club HQ in Vermont, and I’ll be your point of contact at HQ. Come to me for anything from marketing advice to thinking about starting a hackathon (like [Assemble](https://assemble.hackclub.com/), which was run by [@sampoder](https://hackclub.slack.com/team/USNPNJXNX), 17, from Singapore). 

For inspiration for your club meets, I recommend checking out this video of Sahiti's Hack Club in Georgia, USA.

<iframe width="560" height="315" src="https://www.youtube.com/embed/xXIxwV7bQTw?si=ovsguK-lfGOUD4OG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Let’s set up a call for us to meet over Zoom. We’ll get to know each other, I’ll set you up with all of the different Hack Club resources, and we’ll talk through the next steps for your club.
  
**Can you send me 3 times over the next week that work for a 45-minute Zoom call?** I’m online Monday - Friday, and available until 8 PM Eastern / 5 PM Pacific on Wednesday and Thursday, and until 4 PM Eastern / 1 PM Pacific Monday, Tuesday, and Friday.
  
  I’m so looking forward to getting to know you and supporting you as you embark on this journey. Cheers!
  
  Sarah
  (p.s. I just put a package with stickers in the mail to you! DM me on Slack when you get it!)
  --
  
  **Sarah Dowden**
  
  Club Ops Lead, Hack Club
  
  Hack Club Slack:[@Sarah](https://hackclub.slack.com/team/U06L79991V0) (join the Slack [here](https://hackclub.com/slack/))
  
  Email: [sarah@hackclub.com](sarah@hackclub.com)
  
  <img src="https://assets.hackclub.com/flag-standalone.png" alt="Hack Club Flag" width="100px" />
  
  Hack Club is an [open source](https://github.com/hackclub/hackclub) and [financially transparent](https://bank.hackclub.com/hq/) 501(c)(3) nonprofit.
  
  Our EIN is 81-2908499. By the students, for the students.
  [Clubs](https://hackclub.com/) • [Slack](https://hackclub.com/slack/) • [HCB](https://hackclub.com/hcb/) • [Hackathons](https://hackathons.hackclub.com/)
        `)
    }
    
    else {
      return (
        `Hi ${names},
  
  I just want to say that I really enjoyed reading your application, and I’m happy to share that we’re moving forward! Congratulations!
  
  I’m Thomas from Hack Club HQ in Vermont, and I’ll be your point of contact at HQ. Come to me for anything from marketing advice to thinking about starting a hackathon (like [Assemble](https://assemble.hackclub.com/), which was run by [@sampoder](https://hackclub.slack.com/team/USNPNJXNX), 17, from Singapore).
  
  <img src="https://cloud-o1y7sksn6-hack-club-bot.vercel.app/0img_2271.jpg" alt="Thomas Waving" width="240px" />
  
  Let’s set up a call for us to meet over Zoom. We’ll get to know each other, I’ll set you up with all of the different Hack Club resources, and we’ll talk through the next steps for your club.
  
  **Can you send me 3 times over the next week that work for a 45-minute Zoom call?** I’m online Monday - Friday, and available until 8 PM Eastern / 5 PM Pacific on Wednesday and Thursday, and until 4 PM Eastern / 1 PM Pacific Monday, Tuesday, and Friday.
  
  I’m so looking forward to getting to know you and supporting you as you embark on this journey. Cheers!
  
  Thomas
  (p.s. I just put a package with stickers in the mail to you! DM me on Slack when you get it!)
  --
  
  **Thomas Stubblefield**
  
  Club Team, Hack Club
  
  Hack Club Slack:[@Thomas](https://hackclub.slack.com/archives/D040S0P4T6F) (join the Slack [here](https://hackclub.com/slack/))
  
  Email: [thomas@hackclub.com](thomas@hackclub.com)
  
  <img src="https://assets.hackclub.com/flag-standalone.png" alt="Hack Club Flag" width="100px" />
  
  Hack Club is an [open source](https://github.com/hackclub/hackclub) and [financially transparent](https://bank.hackclub.com/hq/) 501(c)(3) nonprofit.
  
  Our EIN is 81-2908499. By the students, for the students.
  [Clubs](https://hackclub.com/) • [Slack](https://hackclub.com/slack/) • [HCB](https://hackclub.com/hcb/) • [Hackathons](https://hackathons.hackclub.com/)`
      )
    }    
  };
  
