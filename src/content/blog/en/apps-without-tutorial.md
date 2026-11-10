---
title: "What Super Mario Bros taught me about designing apps without a tutorial"
description: "How to help someone learn your app while they get their first useful result, with no instruction screens."
date: 2026-11-10
translationKey: apps-without-tutorial
---

Super Mario Bros on the NES has no tutorial. You turn on the console, Mario is standing on the left side of an almost empty screen, and you are already playing. Nobody tells you to move right, but it is the only side with room. Nobody explains that enemies hurt you or that you can jump on them; you find out with the first Goomba. By the end of the first level you know how to play, and at no point did it feel like you were being taught.

Once I noticed that, one question stuck with me: how do you make an app feel that natural? I spent some time researching it, and this is what I found.

## The core idea

What matters most is that a person learns to use the app while getting their first useful result. Not before it, through a five-screen walkthrough, but during it.

Just like in Mario, the user should discover the rules by acting. Every interaction should follow the same loop:

**Action → Response → Benefit**

![Diagram of the loop: an action (I record an expense) produces a response (it shows up saved) and a benefit (I see how much I have spent), and the loop repeats](/diagrams/loop-en.svg)

I do something, the app answers clearly, and I get something useful out of it. If that loop works, there is not much left to explain.

To keep things concrete I will use one example throughout this post: an app for tracking expenses. In an app like that, the design feels natural when these things are true:

- The first screen lets you record something concrete.
- The record shows up as saved and updates a result you can understand.
- Recording again follows the same interaction pattern.
- The main action stands out and secondary options have less presence.

## Three moments to take care of

Most design effort goes into the first use, but there are three different moments and each one needs attention:

1. **Starting.** The first time someone opens the app.
2. **Recording regularly.** Everyday use, once the novelty is gone.
3. **Coming back after a break.** When someone returns after several days away.

![Timeline with the three moments: starting, recording regularly, and coming back after several days without using the app](/diagrams/moments-en.svg)

The seven principles below cover those three moments.

## 1. Make the first use a real, small task

Instead of a welcome tour, the first screen should ask for something real: record an expense. It is the equivalent of Mario's first jump.

For this to work, ask only for what is necessary. An amount is enough to start. Complex settings such as categories, budgets or currencies can wait. People learn by interacting and configure later, once they understand what the app is for.

## 2. Show extra options when they add something

The first record captures the main piece of data. Details come afterwards: once the expense is saved, the app can offer to add a note, a category or a photo of the receipt.

![Two screens: the first record only asks for the amount; after saving, the app offers to add a note, a category or a receipt photo](/diagrams/disclosure-en.svg)

This is called progressive disclosure: showing each option at the moment it makes sense, not all of them up front. The practical rule is to avoid too many questions in too little time. Every extra question before the first result is a chance for the person to close the app.

## 3. Let the system's response do the teaching

The app's response after an action is the best chance to teach what comes next. When the expense is created, it appears in the list along with the actions that are now possible, such as edit or undo. Nobody had to explain that records can be corrected: you can see it.

There is a limit worth respecting here. With a single record the app can confirm that it saved the information and show it back, but it cannot talk about trends. A "your spending this month" chart with one data point teaches nothing. Trends need more data, so it is better to show them once they exist.

## 4. Put help next to the action that needs it

When something does need explaining, the best place is right where it is used and right when it first appears. The message should be short, dismissible and recoverable: I read it, I close it, and if I need it later I can find it again.

What removes the need for most explanations is clear labels and recognizable controls. No secret gestures and no hard-to-find buttons. If a feature only exists for people who guess they should swipe with two fingers, for everyone else it does not exist.

## 5. Optimize the twentieth record above all

The first record decides whether someone stays, but the twentieth decides whether the app becomes a habit. By then the person knows how to use it and just wants to finish quickly.

This is where it helps to remember preferences, offer recent items, let people repeat a previous record, and automate information when it can be done reliably. The condition is to keep suggested values visible and easy to correct: if the app guesses the category, I should be able to see it and change it with one tap.

It is also worth deciding what gets captured by hand and what gets captured automatically, depending on the goal. Automation saves time, but there are cases where typing the number is exactly what makes a person aware of it.

## 6. Tie accounts and permissions to a need people understand

Asking someone to create an account before they see what the app does is charging admission before showing the game. It is better to let people start and offer the account when they need it: when they want a backup or want to sync with another device.

![Three cases: opening the app asks for nothing; wanting a backup offers an account; scanning a receipt asks for camera permission](/diagrams/asking-en.svg)

The same goes for permissions. If one is essential, explain its purpose at the moment you ask. "We need your camera to scan the receipt" is far easier to accept than a permission prompt that shows up with no context when the app opens.

## 7. Design an easy way back

Sooner or later a person will stop using the app for a few days. What they find when they return decides whether they pick it up again or delete it.

Coming back should keep the history and let people continue from today, without requiring them to fill in every gap. If the app greets me with ten pending days to complete, what I feel is guilt, and the easiest thing to do is close it. If it greets me with the usual screen, ready to record today's expense, I carry on as if nothing happened.

## Wrapping up

When Mario runs into the first Goomba there is no text on screen. There is one possible action, an immediate response and a reward for getting it right. Forty years later, most apps still open with a carousel of instructions that almost nobody reads.

The next time I design a flow I will ask myself one question: what can this person achieve in their first few seconds, and what will they learn by achieving it?
