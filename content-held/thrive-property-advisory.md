---
# DRAFT, held out of the build. Every [TO CONFIRM] comes from the client through YJ.
# Move to src/content/case-studies/ once the numbers are in, the gate has passed and both Notion ticks are set.
client: Thrive Property Advisory
website: "[TO CONFIRM: website URL]"
logo: /case-studies/thrive-property-advisory-logo.jpg   # [TO CONFIRM: transparent PNG or SVG; the supplied JPG has a black background]
about: "A Singapore property advisory that uses AI and data to help clients make better property decisions."
title: "[TO CONFIRM: time figure] back, with property and price updates ready for every client and agents following up with each one."
seoTitle: "AI case study: Thrive Property Advisory | Human Horizon"
description: "AI case study: how Singapore property advisory Thrive turns HDB resale prices and the URA property price index into a property market update for each client."
summary: "AI now tracks new listings and every HDB and URA price release, matches them to each client and drafts the update, so agents spend their time advising clients."
subtitle: "AI-drafted listing and price updates for every client, checked and sent by agents."
tools: ["[TO CONFIRM: tools]"]
services: [implement, train, adopt]
industry: property-agencies
teams: [sales]
workflows:
  - team: sales
    name: Client property updates
    result: "less time on client property updates [TO CONFIRM]"
    summary:
      before: "Listings matched to clients and updates written by hand."
      now: "New listings matched to each client, updates drafted for the agent."
    before: "Agents kept each client's budget, areas and home type in notes and chats, checked [TO CONFIRM: listing sources] by hand, decided which listings suited which client, then typed each WhatsApp or email update one at a time. In busy weeks, some clients heard nothing [TO CONFIRM]."
    after: "An AI listing watch assistant gathers new listings and launches every day and checks each one against every client's saved brief. An AI client update assistant drafts a personal update in the agent's own voice. The agent reviews, edits and sends it, so every message still comes from them."
    staff: Property agents
    people: "Advising clients, arranging viewings and following up while interest is high."
    time: { before: "[TO CONFIRM]", after: "[TO CONFIRM]", beforeMinutes: 0, afterMinutes: 0, unit: "[TO CONFIRM: per client or per week]" }
    humans: 0   # [TO CONFIRM: number of agents]
    agents: 2
  - team: sales
    name: Price updates from HDB and URA data
    result: "less time preparing price updates [TO CONFIRM]"
    summary:
      before: "Data downloaded, filtered and written up for each client."
      now: "Each HDB and URA release turned into a price update per client."
    before: "After each release, agents downloaded HDB resale transactions and URA's quarterly private residential price index (flash, then final), picked out the transactions near each client's home, built a comparison in a spreadsheet and wrote each price update by hand. Updates went out when time allowed, often after hours [TO CONFIRM]."
    after: "An AI market data assistant checks new HDB resale data and each URA price index release as it comes out and finds the comparable transactions for each client's home. An AI price update assistant drafts a short update with recent prices and the trend, marked as indicative. The agent checks every figure, adds their advice and sends it."
    staff: Property agents
    people: "Explaining what the numbers mean for each client and starting the conversations that lead to a sale or purchase."
    time: { before: "[TO CONFIRM]", after: "[TO CONFIRM]", beforeMinutes: 0, afterMinutes: 0, unit: "[TO CONFIRM: per release or per client]" }
    humans: 0   # [TO CONFIRM]
    agents: 2
team:
  then:
    - { role: "Property agents", did: "Tracked client briefs in notes, checked portals and HDB and URA data by hand, and wrote every listing and price update themselves." }
  now:
    - { role: "Property agents", does: "Review the listing and price updates the AI assistants draft, add their advice, send them and spend the time gained with clients." }
  assistants:
    - { name: "AI listing watch assistant", does: "Gathers new listings and launches and matches them to each client's brief.", reportsTo: "Property agents" }
    - { name: "AI client update assistant", does: "Drafts personal listing updates in the agent's voice.", reportsTo: "Property agents" }
    - { name: "AI market data assistant", does: "Checks HDB resale data and URA releases and finds comparables for each client's home.", reportsTo: "Property agents" }
    - { name: "AI price update assistant", does: "Drafts clear price updates, marked as indicative, for each homeowner client.", reportsTo: "Property agents" }
date: "[TO CONFIRM: publish date]"
publish: false
featured: false
notionPage: https://app.notion.com/p/420d0a6f047e815eb252f8f84ca205f4
---

## Where did the time go before AI?

At Thrive Property Advisory, client follow-up was done by hand [TO CONFIRM]. [TO CONFIRM: team size] agents kept track of what each client wanted, watched the portals for new listings and launches, and wrote each update themselves.

Price updates took even longer. Every time HDB resale figures or URA's quarterly private residential price index came out, someone downloaded the data, picked out the transactions near each client's home, built a comparison and wrote it up. Homeowners want to know what their home is worth, and buyers want to know whether prices are moving, but there was rarely time to tell every client [TO CONFIRM].

The founder's brief was clear: if AI could prepare ready-made property and price updates, agents could follow up with every client directly, every time.

## What did Human Horizon implement?

[TO CONFIRM: who led the work] led the [AI implementation](/what-we-do/implement) with the founder and team. Together they built two [AI workflows](/insights/glossary/workflow-automation) around [TO CONFIRM: tools].

The first watches for new listings and launches and matches each one to every client's saved brief. The second turns each new release of HDB resale data and the URA price index into a short, clear price update for each client's home, with the comparable transactions behind it and a note that the figures are indicative.

Every update is drafted, never sent automatically. The agent reads it, adds their advice and sends it [TO CONFIRM: from their own number], so clients always hear from the person they trust. Consent and Do Not Call checks before any marketing message, including WhatsApp, follow [PDPC guidance](https://www.pdpc.gov.sg/Overview-of-PDPA/Do-Not-Call-Registry/Business-Owner/Do-Not-Call-Registry-and-Your-Business) [TO CONFIRM: how Thrive checks this].

## How was the team trained?

[TO CONFIRM: how the training ran, who took part.] The [AI training](/what-we-do/train) ran alongside the build, on the agents' own clients and listings [TO CONFIRM], so each agent learned to check an AI draft against what they know about the client and the market before sending.

## How did the PACT keep people first?

Every Human Horizon engagement runs on the [PACT](/#pact). At Thrive, each commitment shaped the work.

- **Promise.** [TO CONFIRM] Agents knew from the start that AI would prepare the updates and they would keep every client relationship and every piece of advice.
- **Ask and involve.** [TO CONFIRM] Agents shaped what goes into a good update, so the drafts sound like them, not like a newsletter.
- **Coach.** [TO CONFIRM] Support continued while agents built confidence in checking and adjusting AI drafts.
- **Track and reinforce.** [TO CONFIRM: what was measured before and after.]

## What did the team adopt?

[AI adoption](/what-we-do/adopt) at Thrive means four [AI assistants](/insights/glossary/ai-assistant) now prepare the groundwork for every follow-up, and agents review and send. [TO CONFIRM: how often updates now go out and to how many clients.]

## How was the return measured?

[TO CONFIRM: whether an ROI Transformation Report went to management, and the before and after times for each workflow.]

## Why did the results stick?

The agents shaped the updates [TO CONFIRM] and send every one themselves, so clients still hear from their agent and agents still own the relationship. AI does the watching, matching and drafting; the [human in the loop](/insights/glossary/human-in-the-loop) decides what each client hears. That is what makes AI part of how Thrive works, not a tool one agent tries now and then.
