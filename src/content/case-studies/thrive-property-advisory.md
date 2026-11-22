---
# Published 23 Nov 2026 on YJ's instruction (Client approved and Approve to publish ticked in Notion).
client: Thrive Property Advisory
logo: /case-studies/thrive-property-advisory-logo.png
about: "A Singapore property advisory team at PropNex Realty that uses AI and data to help clients make better property decisions."
title: "26 branded market reports in 20 minutes, where one estate used to take a working day"
seoTitle: "AI case study: Thrive Property Advisory | Human Horizon"
description: "AI case study: property advisory Thrive builds branded market reports for all 26 HDB towns in 20 minutes, where one estate took a working day."
summary: "AI now turns the latest HDB resale data into customised, branded market reports for all 26 HDB towns in 20 minutes, so property agents spend their time advising clients."
subtitle: "Automated market reports built from official HDB and URA data, ready for property agents to check and send to clients."
tools: [Claude]
services: [implement, train, adopt]
industry: property-agencies
# Homepage figures (YJ's numbers, 22 Nov 2026, for the client to confirm). S$ figure from the value calculator
# (Sales 101 Playbook page 21, property agents row added 23 Nov 2026): 207.7 hours saved per full set of 26 town
# reports x 12 sets a year (monthly refresh: HDB resale data on data.gov.sg updates daily and each month is complete
# once it ends; URA developer sales and rental data come out on the 15th) = 2,492 hours x SGD 28.02 (self-employed
# property agent, MOM OWS 2022 median SGD 3,704 x 12 x 1.15 / 1,824) x 85% realisation fallback = SGD 59,352.
highlights:
  - { figure: "99.8%", label: "less time on market reports: 20 minutes, down from 26 working days" }
  - { figure: "26", label: "branded reports automated, one for every HDB town" }
  - { figure: "S$59.4K", label: "of property agent time back a year" }
teams: [sales]
workflows:
  - team: sales
    name: Property market reports
    result: less time to prepare market reports for every HDB town
    summary:
      before: "Data pulled, charted and designed by hand for each report."
      now: "Branded two-page reports for all 26 HDB towns, automated from the latest official data, ready for property agents to check and send."
    before: "For each estate or project, a property agent pulled HDB resale records from data.gov.sg or URA transactions, filtered them by flat type, model and size, worked out the median, price range and price per square foot, picked the benchmark sales, built the charts and laid out the report by hand, then exported images for WhatsApp."
    after: "An AI market data assistant pulls the latest official HDB and URA records for the estate and home type, keeps confirmed sales apart from asking prices and estimates, and labels each model. An AI market report assistant builds the branded two-page report, with the price trend, typical price band, benchmark sales, any new record and a note on data limits, as a PDF and WhatsApp-ready pages. The property agent checks every figure, adds their seller advice and sends it."
    staff: Property agents
    people: "Explaining what the numbers mean for each homeowner and starting the conversations that lead to a sale."
    # Before: about 1 working day for one estate's report. Now: 20 minutes for one report per HDB town, 26 in all
    # (26 towns in the data.gov.sg HDB resale dataset). Like for like, 26 working days (12,480 minutes) to 20 minutes.
    time: { before: "26 working days, 1 per estate", after: "20 minutes for all 26 towns", beforeMinutes: 12480, afterMinutes: 20, unit: "for a full set of 26 town reports" }
    humans: 3
    agents: 2
team:
  then:
    - { role: "Property agents", did: "Pulled HDB and URA data by hand and built every market report and chart themselves." }
  now:
    - { role: "Property agents", does: "Check the market reports the AI assistants prepare, add their advice, send them to clients and spend the time gained advising." }
  assistants:
    - { name: "AI market data assistant", does: "Pulls the latest HDB and URA transaction records and separates confirmed sales from estimates.", reportsTo: "Property agents" }
    - { name: "AI market report assistant", does: "Builds the branded two-page market report as a PDF and WhatsApp-ready pages.", reportsTo: "Property agents" }
date: 2026-11-22
publish: true
featured: true
notionPage: https://app.notion.com/p/420d0a6f047e815eb252f8f84ca205f4
---

## Where did the time go before AI?

At Thrive Property Advisory, the most valuable thing a property agent can send an existing client is a clear view of their own market: what homes like theirs have sold for, which way prices are moving and what that means for them. Putting that together took about a working day for each estate or project.

Every report meant pulling HDB resale prices from data.gov.sg or URA transaction records, working out the numbers, picking benchmark sales and laying out a branded report by hand, then exporting images for WhatsApp. Doing that for every client, every time, was out of reach.

The founder's brief was clear: if AI could prepare ready-made market reports, property agents could follow up with every client directly, every time.

## What did Human Horizon implement?

Human Horizon co-founder Jaye Wang led the [AI implementation](/what-we-do/implement) with the founder and team. Together they built an [AI workflow](/insights/glossary/workflow-automation) around Claude.

It turns the latest HDB, data.gov.sg and URA records into a two-page property market report for any estate, project or home type, built to keep confirmed sales apart from estimates so one exceptional sale is never read as the trend. It comes out in Thrive's own design as a PDF and as pages ready to share on WhatsApp.

Nothing is sent automatically. The property agent checks every figure, adds their own view on pricing and sends the report to their existing clients, so clients always hear from the person they trust.

## How was the team trained?

Every property agent at Thrive runs their own business. They want more time with clients and less admin, and they want to hand off as much of the routine work as they can. So the [AI training](/what-we-do/train) was built to make each property agent self-sufficient, not dependent on anyone else.

The founder and the three property agents learned to work with Claude in hands-on sessions, on their own estates and clients. Each property agent learned to run a market report for any estate, check the figures against what they know about the market, adjust the seller view in their own words and send it. By the end, each of them could produce a report whenever a client needed one.

## How did the PACT keep people first?

Every Human Horizon engagement runs on the [PACT](/how-we-work). At Thrive, nobody worried that AI would take their job, so Coach became the commitment that mattered most.

- **Promise.** One clear promise held throughout: AI handles the admin, and the client relationship, the advice and the decision to send stay with the property agent.
- **Ask and involve.** Property agents shaped what goes into a good report, from the benchmarks they trust to the factors they look at when pricing a home, so the output reads like their own analysis.
- **Coach.** Coaching continued until every property agent was confident using the workflow without support, so the time saved is theirs to keep.
- **Track and reinforce.** The time each report took was measured before and after, and the reports were refined until property agents were happy to send them.

## What did the team adopt?

[AI adoption](/what-we-do/adopt) at Thrive means two [AI assistants](/insights/glossary/ai-assistant) now prepare the groundwork, and property agents review and send. With a report ready for every HDB town, existing clients hear about their market regularly rather than only when they ask.

## How was the return measured?

The results were reported to Thrive's management in an ROI Transformation Report, which sets out the time the workflow took before and after AI: one estate's market report took about 1 working day; now reports for all 26 HDB towns, each customised and branded, take 20 minutes in total. Refreshed monthly, in step with HDB and URA data releases, that is about 2,490 hours of property agent time back, valued at S$59.4K a year.

With the time measured before and after, the founder can see where the return comes from and where AI should go next.

## Why did the results stick?

The property agents shaped the reports and send every one themselves, so clients still hear from their property agent and property agents still own the relationship. AI does the data work, the design and the drafting; the [human in the loop](/insights/glossary/human-in-the-loop) decides what each client hears. That is what makes AI part of how Thrive works, not a tool one property agent tries now and then.
