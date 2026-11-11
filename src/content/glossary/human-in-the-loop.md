---
term: "Human in the loop"
seoTitle: "What is human in the loop in AI? | Human Horizon"
description: "Human in the loop means a person reviews or approves AI output before it is acted on. Learn where the checkpoints belong and how to keep the checks real."
short: "Human in the loop means a person reviews, corrects or approves an AI system's output before it is acted on. The AI does the first pass, and a person keeps the final say."
date: 2026-11-11
keyword: "what is human in the loop"
category: AI implementation
tags: ["Workflows"]
audience: ["Founders", "HR and L&D", "AI and ops"]
related: ["workflow-automation", "ai-agent", "hallucination", "ai-governance"]
sources: ["https://www.pdpc.gov.sg/-/media/Files/PDPC/PDF-Files/Resource-for-Organisation/AI/Primer-for-2nd-edition-of-AI-Gov-Framework.pdf", "https://www.imda.gov.sg/-/media/imda/files/news-and-events/media-room/media-releases/2026/01/factsheet-model-ai-governance-framework-for-agentic-ai.pdf"]
notionPage: https://app.notion.com/p/d23d0a6f047e829ba7d101aef9c816bb
publishedVersion: "2026-11-11T06:10:48.127Z"
---

## How it works

The design question is where to put the checkpoints. Common places are:

- before anything leaves the company, such as an email, quote or report
- before a record, booking or payment is changed
- whenever the AI flags that it is unsure or the input looks unusual

A check only works if it is real. The reviewer needs the source to compare against, enough time to look properly and the authority to reject the output. A check that is always waved through is not a check.

The risk to watch is automation bias: trusting a system more because it has been right before. IMDA's [Model AI Governance Framework for Agentic AI factsheet](https://www.imda.gov.sg/-/media/imda/files/news-and-events/media-room/media-releases/2026/01/factsheet-model-ai-governance-framework-for-agentic-ai.pdf) names this risk. It recommends triggering human approvals at significant checkpoints and regularly auditing whether those approvals are effective.

## An example

A recruitment agency uses AI to compare incoming CVs with a client's job requirements and draft a shortlist, with a short reason for each name. A consultant reviews every recommendation, reads the full CV for borderline cases and decides who to put forward. The AI speeds up the first sort. The decision about each candidate stays with a person.

## Human in the loop vs human over the loop

Singapore's [primer on the Model AI Governance Framework](https://www.pdpc.gov.sg/-/media/Files/PDPC/PDF-Files/Resource-for-Organisation/AI/Primer-for-2nd-edition-of-AI-Gov-Framework.pdf), from IMDA and PDPC, sets out three levels. In human-in-the-loop, the person makes the final decision with input from AI. In human-over-the-loop, the person supervises and can take over when the AI meets something unexpected. In human-out-of-the-loop, the AI decides without a person, which the primer links to low-harm uses such as product recommendations. The higher the possible harm, the more human involvement it suggests.

## Where to go next

Every workflow worth building keeps a person checking at the points that matter. See how [AI implementation](/what-we-do/implement) designs those checkpoints into the work.
