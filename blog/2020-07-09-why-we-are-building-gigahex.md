---
id: why-we-are-building-gigahex
title: Why are we building Gigahex?
author: Shad
author_title: Co-founder of Gigahex
image: https://d2uqnt9f7uda88.cloudfront.net/img/screen-stare.png
author_url: https://github.com/amezng
author_image_url: https://pbs.twimg.com/profile_images/835123474742063105/N3Qkp_r__400x400.jpg
tags: [life, monitoring]
keywords:
  - apache spark
  - monitoring
---

**Statutory warning:** Staring at screen for long hours to identify bugs is not good for eyes. It's better to build software to find bugs.

<!--truncate-->

## Typical dev story

If you are like me, who has spent hours looking for bugs in the log statement or finding a smart reason to explain the failure of a long running job like Spark in production, then you must read on.

We live in a world where things can go wrong at an unexpectable time, and it's acceptable, but what is not acceptable is not knowing the reason behind it. Giving reasons like, the job failed because it ran out of memory is not enough. And hence, adding more disk, more ram or more CPU is not always the right answer. Getting the right answer should not be difficult, as the application consuming the memory is not a black box, but just leveraging another open source tool.

But guess what, quite often it is difficult, inspite of the source code being open. Lot of times, we are in the fire-fighting mode and we are unable to get answers in few minutes which could have helped critical business operations and saved the lovely evening for something special. And when we do find the root cause and fix the bug, its like party time. Time to relax and chill and have some pizza or a Biryani ( a higly seasoned rice dish).

Hey! Hold on for a second. Why can't we just track the job's progress as we track the status of our biryani order. It must be straight forward.

## Time to build a Dev-Ops platform on steroids

So we, where we = myself (Shad) + life partner (Arshi) decided to use my programming and her UI designing chops to build one stop Dev-Ops platform for Big Data with great aesthetics. But there are already so many deployment, monitoring and logging services out there. So why not just combine these pieces to get going.

Well, I am not really a big fan of having to manage too many services for doing one thing. Apart from that, building intelligence into these segmented services, brings its own set of challenges. Finally the team ends up spending considerable time maintaining each of these services independently. Why not just use one platform or let the platform take care of making these independent services work together. This platform is what we are building, so that you focus on development and we manage the dependent services like CI/CD, secrets manager, configuration store, performance monitoring, log management and Big Data clusters.

Are you still there?

Yes? Great! Patience is the key.

## Being responsible

So were these reasons enough to push me to become a full stack co-founder from a Spark developer. Obviously not.

I would like to take the responsibility of every penny spent on these massive clusters, running analytics jobs. And this was the most important reason to bootstrap this project so that each developer can know how much of resources their job is using and eliminate the wastage all together. We both are hell bent on eliminating the wastage of clusters and save cost for all the enterprises.

> If you can't measure, you can't manage - Marissa Mayer

So measurement is the key, which drives the motivation behind the Gigahex platform.

> If you can't manage, someone might loose their job - Me

## Fast setup - under 60 seconds

Integrating with other tools have been quite time consuming, if not a nightmare. One of the benchmark that I have stick to, is setting up all from scratch under 60 seconds.
No more downloading binaries and installing agents on your cluster for basic logs and metrics. Just one binary, at one place, with one command and one dashboard, you should be able to find answers to hidden questions.

## Being billioncare not billionaire

We aspire to become **billioncare** - who genuinely care about saving billion minutes spent on running massive clusters worth of billion dollars for no special reason.

## Let's talk

This platform would be incomplete without your valuable suggestion and ideas. We would love to hear more about the challenges you are facing while developing and running Big Data applications in production. Just shoot an email at [shad][at][gigahex.com] to spark off the discussion.
