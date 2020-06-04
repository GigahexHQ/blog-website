---
id: intro-to-gigahex
title: Introducing Gigahex - Monitoring Platform for Spark
author: Shad
author_title: Co-founder of Gigahex
image: https://d2uqnt9f7uda88.cloudfront.net/img/screenshot-launch-gigahex.png
author_url: https://github.com/amezng
author_image_url: https://pbs.twimg.com/profile_images/835123474742063105/N3Qkp_r__400x400.jpg
tags: [spark, monitoring]
keywords:
  - apache spark
  - monitoring
---

Gigahex, the platform for monitoring for Spark applications will be available for developers' preview in early July 2020.

<!--truncate-->

## Background

Being Spark developer for years now, I must admit that developing Spark applications is a breeze, but debugging and deployment takes awful lot of time. Devs need to be more productive, and thats why Gigahex was born out of this necessity. [Gigahex](https://gigahex.com), has been created to scratch our own itch, allowing us to accelerate the process of **deployment** and **debugging** Apache Spark application. These two highlighted words, can ruin your weekend, depending upon how complicated the Spark application is. So, how can Gigahex be a saviour?

## Here you go …

Gigahex is comprised of a command line tool, web dashboard and alert manager.

- **Command line tool** a.k.a `gx` is a Spark deployment command line tool, that allows you to execute pre deployment commands or scripts, or even create a Spark cluster for example an AWS EMR cluster, and finally submits the Spark Job to the cluster. This tool automatically configures your spark application to publish, different spark events, executor jvm metrics and logs from driver.

- **Monitor** the deployed app using the web dashboard, which displays the aggregated metrics, executor metrics and logs with live tail in real-time. This is really handy, when you just want to spin up a cluster say (AWS EMR), run your job and then terminate the cluster, while preserving all the stats of the job in an external monitoring platform managed by Gigahex.

- **Alerting rules** can be configured based on the metrics being captured in real time. For example, you can receive notifications, if a task is stuck for long, or the application failed, or even when there is too much of time spent in Garbage collection.

## Ring a Bell?

If the challenges of Spark debugging and deployment sounds familiar, then go ahead and [sign up](https://gigahex.com) for early access to all the features today.

## Have some feedback or requests?

If you are facing other challenges while working with Spark application, or have any other ideas, then shoot me mail at [shad][at][gigahex.com] or send us your [request](https://github.com/GigahexHQ/requests/issues/new).
