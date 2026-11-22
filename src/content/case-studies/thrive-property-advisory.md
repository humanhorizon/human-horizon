---
# DRAFT (publish: false, shows on the dev server only). Times and team size are ESTIMATES drafted by Human Horizon
# on 22 Nov 2026; the market report workflow follows the client's own brief and sample report. The client confirms
# or corrects everything before Client approved is ticked.
client: Thrive Property Advisory
logo: /case-studies/thrive-property-advisory-logo.png
about: "A Singapore property advisory team at PropNex Realty that uses AI and data to help clients make better property decisions."
title: "Market reports in 20 minutes, not a working day, and every client followed up by their own agent."
seoTitle: "AI case study: Thrive Property Advisory | Human Horizon"
description: "AI case study: how Singapore property advisory Thrive turns HDB resale prices and URA transactions into a branded property market report for each client."
summary: "AI now turns the latest HDB and URA transaction data into branded market reports and matches new listings to each client, so agents spend their time advising clients."
subtitle: "AI-built market reports and listing updates for existing clients, checked and sent by agents."
tools: [Claude]
services: [implement, train, adopt]
industry: property-agencies
teams: [sales]
workflows:
  - team: sales
    name: Property market reports
    result: less time to prepare a market report
    summary:
      before: "Data pulled, charted and designed by hand for each report."
      now: "A branded two-page market report built from the latest official data."
    before: "For each estate or project, an agent pulled HDB resale records from data.gov.sg or URA transactions, filtered them by flat type, model and size, worked out the median, price range and price per square foot, picked the benchmark sales, built the charts and laid out the report by hand, then exported images for WhatsApp."
    after: "An AI market data assistant pulls the latest official HDB and URA records for the estate and home type, keeps confirmed sales apart from asking prices and estimates, and labels each model. An AI market report assistant builds the branded two-page report, with the price trend, typical price band, benchmark sales, any new record and a note on data limits, as a PDF and WhatsApp-ready pages. The agent checks every figure, adds their seller advice and sends it."
    staff: Property agents
    people: "Explaining what the numbers mean for each homeowner and starting the conversations that lead to a sale."
    time: { before: "1 working day", after: "20 minutes", beforeMinutes: 480, afterMinutes: 20, unit: "per report" }
    humans: 3
    agents: 2
  - team: sales
    name: Client property updates
    result: less time on client property updates each week
    summary:
      before: "Listings matched to clients and updates written by hand."
      now: "New listings matched to each client, updates drafted for the agent."
    before: "Agents kept each client's budget, areas and home type in notes and chats, checked property portals and new launches by hand, decided which listings suited which client, then typed each WhatsApp or email update one at a time."
    after: "An AI listing watch assistant gathers new listings and launches every day and checks each one against every client's saved brief. An AI client update assistant drafts a personal update in the agent's own voice. The agent reviews, edits and sends it, so every message still comes from them."
    staff: Property agents
    people: "Advising clients, arranging viewings and following up while interest is high."
    time: { before: "3 hours", after: "15 minutes", beforeMinutes: 180, afterMinutes: 15, unit: "a week" }
    humans: 3
    agents: 2
team:
  then:
    - { role: "Property agents", did: "Pulled HDB and URA data by hand, built every market report and chart themselves, and wrote each client update one at a time." }
  now:
    - { role: "Property agents", does: "Check the market reports and updates the AI assistants prepare, add their advice, send them to clients and spend the time gained advising." }
  assistants:
    - { name: "AI market data assistant", does: "Pulls the latest HDB and URA transaction records and separates confirmed sales from estimates.", reportsTo: "Property agents" }
    - { name: "AI market report assistant", does: "Builds the branded two-page market report as a PDF and WhatsApp-ready pages.", reportsTo: "Property agents" }
    - { name: "AI listing watch assistant", does: "Gathers new listings and launches and matches them to each client's brief.", reportsTo: "Property agents" }
    - { name: "AI client update assistant", does: "Drafts personal listing updates in the agent's voice.", reportsTo: "Property agents" }
date: 2026-11-22
publish: false
featured: false
notionPage: https://app.notion.com/p/420d0a6f047e815eb252f8f84ca205f4
---

## Where did the time go before AI?

At Thrive Property Advisory, the most valuable thing an agent can send an existing client is a clear view of their own market: what homes like theirs have sold for, which way prices are moving and what that means for them. Putting that together took most of a working day for each estate or project.

Every report meant pulling HDB resale prices from data.gov.sg or URA transaction records, working out the numbers, picking benchmark sales and laying out a branded report by hand, then exporting images for WhatsApp. Doing that for every client, every time, was out of reach.

Listing updates took time too. Agents tracked what each client wanted in notes and chats, checked the portals for new listings and launches, and typed every update themselves, about three hours a week.

The founder's brief was clear: if AI could prepare ready-made market reports and property updates, agents could follow up with every client directly, every time.

## What did Human Horizon implement?

Human Horizon co-founder Jaye Wang led the [AI implementation](/what-we-do/implement) with the founder and team. Together they built two [AI workflows](/insights/glossary/workflow-automation) around Claude.

The first turns the latest HDB, data.gov.sg and URA records into a two-page property market report for any estate, project or home type, built to keep confirmed sales apart from estimates so one exceptional sale is never read as the trend. It comes out in Thrive's own design as a PDF and as pages ready to share on WhatsApp.

The second watches for new listings and launches and matches each one to every client's saved brief, then drafts a personal update.

Nothing is sent automatically. The agent checks every figure, adds their own view on pricing and sends the report or update to their existing clients, so clients always hear from the person they trust.

## How was the team trained?

The founder and the three agents learned to work with Claude in hands-on sessions. The [AI training](/what-we-do/train) ran alongside the build, on the agents' own estates and clients, so each agent learned to check a report against what they know about the market before it goes out.

## How did the PACT keep people first?

Every Human Horizon engagement runs on the [PACT](/#pact). At Thrive, each commitment shaped the work.

- **Promise.** Agents knew from the start that AI would prepare the reports and updates, and they would keep every client relationship and every piece of advice.
- **Ask and involve.** Agents shaped what goes into a good report, from the benchmarks they trust to the factors they look at when pricing a home, so the output reads like their own analysis.
- **Coach.** Support continued while agents built confidence in checking and adjusting AI output.
- **Track and reinforce.** The time each workflow took was measured before and after, and the reports were refined until agents were happy to send them.

## What did the team adopt?

[AI adoption](/what-we-do/adopt) at Thrive means four [AI assistants](/insights/glossary/ai-assistant) now prepare the groundwork, and agents review and send. A market report for any estate is ready in minutes, so existing clients hear about their market regularly rather than only when they ask.

## How was the return measured?

The results were reported to Thrive's management in an ROI Transformation Report, which sets out the time each workflow took before and after AI:

- **Property market reports:** from about 1 working day to 20 minutes per report.
- **Client property updates:** from about 3 hours to 15 minutes a week.

With the time measured workflow by workflow, the founder can see where the return comes from and where AI should go next.

## Why did the results stick?

The agents shaped the reports and send every one themselves, so clients still hear from their agent and agents still own the relationship. AI does the data work, the design and the drafting; the [human in the loop](/insights/glossary/human-in-the-loop) decides what each client hears. That is what makes AI part of how Thrive works, not a tool one agent tries now and then.
