---
term: "Context window"
seoTitle: "What is a context window in AI? | Human Horizon"
description: "A context window is how much text an AI tool can work with at once. Learn what counts towards it, why tools seem to forget, and habits for long documents."
short: "A context window is the amount of text an AI model can take in and work with at one time, including your instructions, any documents you add and the conversation so far."
date: 2026-11-12
keyword: "what is a context window in AI"
category: AI basics
tags: []
audience: ["HR and L&D", "AI and ops", "Employees"]
related: ["large-language-model-llm", "prompt", "retrieval-augmented-generation-rag"]
sources: []
notionPage: https://app.notion.com/p/8c3d0a6f047e839ab34801f2b9f977f7
publishedVersion: "2026-11-11T15:39:46.708Z"
---

## How it works

Think of the context window as the model's desk. Everything it needs for the task has to fit on the desk at once. That includes your prompt, any files you paste or attach, earlier messages in the same chat and the answer it is writing.

The size is measured in tokens, which are small chunks of text. Different models have different limits, and the tool you use can set a lower one.

When a conversation or document goes past the limit, tools handle it in different ways. Some drop the earliest parts of the chat. Some refuse the file. Some quietly summarise. This is often why a tool seems to "forget" an instruction you gave at the start.

Even within the limit, a very long input is not always read with equal care. Answers on long documents need the same checking as any other output.

Simple habits help:

- Give the tool the part of the document that matters, not the whole folder.
- Start a fresh chat for a new task.
- Put key instructions near your request, and repeat them if the chat runs long.
- For large sets of documents, use a tool that searches them for you rather than pasting everything in.

## An example

An HR executive at an F&B group with several outlets wants to compare the employee handbook with each outlet's standard operating procedures. She pastes everything into one chat, and the answer misses whole sections. She tries again, one topic at a time, with only the relevant pages, and asks the tool to quote the section numbers it relied on. She then checks those sections herself before sharing the comparison with her manager.

## Context window vs memory

The context window is the working space for one conversation. Some tools also offer a memory feature that carries notes from one chat to the next. That is a separate setting, and it is worth knowing what it keeps.

## Where this fits

Most context window problems come down to what you paste in and when, so practise on documents you really use. Human Horizon builds custom workflows and AI agents around the tools you already use, with a person checking the result. To talk it through, [ask for a 30-minute call](/contact).
