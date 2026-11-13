---
client: Anri Gifts
website: https://anrigifts.com
about: A Singapore business selling customised corporate gifts and wedding favours.
title: From supplier to live product in 8 minutes, not 5 days.
seoTitle: "AI case study: Anri Gifts, Singapore gifting | Human Horizon"
description: "AI case study: Singapore corporate gifting business Anri Gifts now gets a product from sourcing to live in 8 minutes, and spends 5 minutes a day on quotations."
summary: AI now does the groundwork in sourcing, catalogue work and quotations, and the team spends its time reviewing the output and building relationships with suppliers and clients.
tools: [Claude]
services: [implement, train, adopt]
industry: trading-distribution
teams: [operations, sales, marketing]
results:
  - { value: "5 minutes", label: "a day on quotations and replies, down from 4 hours" }
  - { value: "8 minutes", label: "from supplier to live product, down from 5 days" }
  - { value: "4", label: "AI assistants working alongside the team, for sourcing, products, design and sales" }
workflows:
  - team: operations
    name: Product sourcing to live catalogue
    outcome: Products live in 8 minutes, not 5 days
    before: "Procurement staff searched for products and compared suppliers by hand, waited for a designer to redo pack images, then updated the catalogue database and the collateral that listed the product."
    after: "Sourcing runs automatically every week and on demand, checking competitor catalogues to prioritise and fill catalogue gaps based on competitor availability. Catalogue sourcing, importing, image preparation, database updates and supplier management are now automated, ready for a person to review before sharing with the sales team."
    staff: Procurement staff
    people: "Reviewing each product before it is shared with the sales team, and building relationships with suppliers."
    time: { before: "5 days", after: "8 minutes", beforeMinutes: 7200, afterMinutes: 8 }
  - team: sales
    name: Quotations and customer replies
    outcome: Quotations and replies in 5 minutes a day, not 4 hours
    before: "Each quotation meant looking up customer information, products and prices across custom CRM database software that worked poorly with other tools, then drafting every email and WhatsApp reply by hand."
    after: "An AI sales assistant reads the customer's request, drafts replies and builds a PDF-ready quotation in minutes. Every morning the sales team reviews all drafts and sends them."
    staff: Sales staff
    people: "Checking every quotation before it goes out, and building relationships with new clients."
    time: { before: "4 hours a day", after: "5 minutes a day", beforeMinutes: 240, afterMinutes: 5 }
team:
  then:
    - { role: "Procurement staff", did: "Searched for products, compared suppliers, waited on a designer to redo pack images and updated the catalogue database and collateral by hand." }
    - { role: "Sales staff", did: "Looked up customer details, products and prices in a custom CRM that worked poorly with other tools, and drafted every email and WhatsApp reply by hand." }
  now:
    - { role: "Procurement staff", does: "Review what the AI assistants prepare before it reaches the sales team, and build relationships with suppliers." }
    - { role: "Sales staff", does: "Review the morning batch of quotations and replies, send them and build relationships with new clients." }
  assistants:
    - { name: "AI sourcing assistant", does: "Finds products and compares suppliers, weekly and on demand." }
    - { name: "AI product assistant", does: "Imports products into the catalogue and keeps the database and supplier records current." }
    - { name: "AI design assistant", does: "Prepares the product and pack images a designer used to redo by hand." }
    - { name: "AI sales assistant", does: "Reads each customer request, drafts email and WhatsApp replies and builds PDF-ready quotations." }
date: 2026-11-13
publish: false
notionPage: https://app.notion.com/p/417d0a6f047e8162b6a5f248fc9e8ebf
---

## Where did the time go before AI?

Before AI, every new product passed through several hands, from sourcing to pack images to the catalogue, before the sales team could offer it. Quotations and replies took up 4 hours of the sales day, all assembled by hand.

## What did Human Horizon implement?

Human Horizon co-founder Jaye Wang led the [AI implementation](/what-we-do/implement) with the founder and team on a pro bono basis. Together they built each [AI workflow](/insights/glossary/workflow-automation) around Claude, with [AI agents](/insights/glossary/ai-agent) that run sourcing and catalogue work automatically:

- **Sourcing every week and on demand.** Competitor catalogues show which gaps to fill first.
- **Automated catalogue work.** Importing, image preparation, database updates and supplier management no longer need manual effort, and procurement staff sign off each product.
- **Custom CRM and database software.** Built with the team to run the new sourcing and catalogue workflows.
- **An AI sales assistant.** It prepares the first draft of every quotation and reply for the sales team to review.

## How was the team trained?

Jaye trained the founder and team to work with Claude and existing tools, and they built each workflow together. The [AI training](/what-we-do/train) ran alongside the build, on the same workflows.

## What did the team adopt?

[AI adoption](/what-we-do/adopt) here means procurement and sales staff work with four [AI assistants](/insights/glossary/ai-assistant) every day: the assistants handle the groundwork for sourcing, products, design and sales, and staff check what they produce.

The sales day now starts with one batch of drafts to check and send.

## Why did the results stick?

The team built these workflows with Jaye, so they understand them and own them. AI is now part of how Anri Gifts runs every day, across sourcing, sales and design, not a tool one person tries now and then. Staff remain the [human in the loop](/insights/glossary/human-in-the-loop) on every call that matters: what reaches the sales team, what each client receives and which suppliers to work with.
