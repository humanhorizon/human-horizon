---
# DRAFT (publish: false, shows on the dev server only). Figures, team size and steps are ESTIMATES drafted by
# Human Horizon on 22 Nov 2026 for the client to confirm or correct before Client approved is ticked.
client: Thrive Property Advisory
logo: /case-studies/thrive-property-advisory-logo.png
about: "A Singapore property advisory that uses AI and data to help clients make better property decisions."
title: "Price updates in 30 minutes, not 2 working days, and every client followed up by their own agent."
seoTitle: "AI case study: Thrive Property Advisory | Human Horizon"
description: "AI case study: how Singapore property advisory Thrive turns HDB resale prices and the URA property price index into a property market update for each client."
summary: "AI now tracks new listings and every HDB and URA price release, matches them to each client and drafts the update, so agents spend their time advising clients."
subtitle: "AI-drafted listing and price updates for every client, checked and sent by agents."
tools: [Claude]
services: [implement, train, adopt]
industry: property-agencies
teams: [sales]
workflows:
  - team: sales
    name: Client property updates
    result: less time on client property updates each week
    summary:
      before: "Listings matched to clients and updates written by hand."
      now: "New listings matched to each client, updates drafted for the agent."
    before: "Agents kept each client's budget, areas and home type in notes and chats, checked property portals and new launches by hand, decided which listings suited which client, then typed each WhatsApp or email update one at a time. In busy weeks, some clients heard nothing."
    after: "An AI listing watch assistant gathers new listings and launches every day and checks each one against every client's saved brief. An AI client update assistant drafts a personal update in the agent's own voice. The agent reviews, edits and sends it, so every message still comes from them."
    staff: Property agents
    people: "Advising clients, arranging viewings and following up while interest is high."
    time: { before: "3 hours", after: "15 minutes", beforeMinutes: 180, afterMinutes: 15, unit: "a week" }
    humans: 3
    agents: 2
  - team: sales
    name: Price updates from HDB and URA data
    result: less time preparing price updates per release
    summary:
      before: "Data downloaded, filtered and written up for each client."
      now: "Each HDB and URA release turned into a price update per client."
    before: "After each release, agents downloaded HDB resale transactions and URA's quarterly private residential price index, picked out the transactions near each client's home, built a comparison in a spreadsheet and wrote each price update by hand. Updates went out when time allowed, often after hours."
    after: "An AI market data assistant checks new HDB resale data and each URA price index release as it comes out and finds the comparable transactions for each client's home. An AI price update assistant drafts a short update with recent prices and the trend, marked as indicative. The agent checks every figure, adds their advice and sends it."
    staff: Property agents
    people: "Explaining what the numbers mean for each client and starting the conversations that lead to a sale or purchase."
    time: { before: "2 working days", after: "30 minutes", beforeMinutes: 960, afterMinutes: 30, unit: "per release" }
    humans: 3
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
date: 2026-11-22
publish: false
featured: false
notionPage: https://app.notion.com/p/420d0a6f047e815eb252f8f84ca205f4
---

## Where did the time go before AI?

At Thrive Property Advisory, client follow-up was done by hand. Three property agents kept track of what each client wanted, watched the property portals for new listings and launches, and wrote each update themselves. That came to about three hours a week each.

Price updates took even longer. Every time new HDB resale prices or the URA property price index came out, an agent downloaded the data, picked out the transactions near each client's home, built a comparison and wrote it up. Each release cost about two working days. Homeowners want to know what their home is worth, and buyers want to know whether prices are moving, but there was rarely time to tell every client.

The founder's brief was clear: if AI could prepare ready-made property and price updates, agents could follow up with every client directly, every time.

## What did Human Horizon implement?

Human Horizon co-founder Jaye Wang led the [AI implementation](/what-we-do/implement) with the founder and team. Together they built two [AI workflows](/insights/glossary/workflow-automation) around Claude.

The first watches for new listings and launches and matches each one to every client's saved brief. The second turns each new release of HDB resale data and the URA price index into a short property market update for each client's home, with the comparable transactions behind it and a note that the figures are indicative.

Every update is drafted, never sent automatically. The agent reads it, adds their advice and sends it from their own number, so clients always hear from the person they trust. Consent and Do Not Call checks run before any marketing message, including WhatsApp, and follow [PDPC guidance](https://www.pdpc.gov.sg/Overview-of-PDPA/Do-Not-Call-Registry/Business-Owner/Do-Not-Call-Registry-and-Your-Business).

## How was the team trained?

The founder and the three agents learned to work with Claude in hands-on sessions. The [AI training](/what-we-do/train) ran alongside the build, on the agents' own clients and listings, so each agent learned to check an AI draft against what they know about the client and the market before sending.

## How did the PACT keep people first?

Every Human Horizon engagement runs on the [PACT](/#pact). At Thrive, each commitment shaped the work.

- **Promise.** Agents knew from the start that AI would prepare the updates and they would keep every client relationship and every piece of advice.
- **Ask and involve.** Agents shaped what goes into a good update, so the drafts sound like them, not like a newsletter.
- **Coach.** Support continued while agents built confidence in checking and adjusting AI drafts.
- **Track and reinforce.** The time each workflow took was measured before and after, and the drafts were adjusted until agents were happy to send them.

## What did the team adopt?

[AI adoption](/what-we-do/adopt) at Thrive means four [AI assistants](/insights/glossary/ai-assistant) now prepare the groundwork for every follow-up, and agents review and send. Every client now gets a price update after each HDB and URA release, and matching listings as they come up.

## How was the return measured?

The results were reported to Thrive's management in an ROI Transformation Report, which sets out the time each workflow took before and after AI:

- **Client property updates:** from about 3 hours to 15 minutes a week for each agent.
- **Price updates from HDB and URA data:** from 2 working days to 30 minutes per release.

With the time measured workflow by workflow, the founder can see where the return comes from and where AI should go next.

## Why did the results stick?

The agents shaped the updates and send every one themselves, so clients still hear from their agent and agents still own the relationship. AI does the watching, matching and drafting; the [human in the loop](/insights/glossary/human-in-the-loop) decides what each client hears. That is what makes AI part of how Thrive works, not a tool one agent tries now and then.
