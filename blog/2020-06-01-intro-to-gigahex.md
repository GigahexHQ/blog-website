---
id: intro-to-gigahex
title: Introducing Gigahex - Monitoring Platform for Spark
author: Shad
author_title: Co-founder of Gigahex
image: https://d2uqnt9f7uda88.cloudfront.net/img/screenshot-platform.png
author_url: https://github.com/wgao19
author_image_url: https://pbs.twimg.com/profile_images/835123474742063105/N3Qkp_r__400x400.jpg
tags: [spark, monitoring]
keywords:
  - apache spark
  - monitoring
---

Gigahex, the platform for monitoring for Spark applications will be available for developer’s in July 2020.

<!--truncate-->

## A bit of background

[Gigahex](https://gigahex.com), has been created to scratch our own itch, allowing us to accelerate the process of deployment and debugging Apache Spark application. These two highlighted words, can ruin your weekend, depending upon how complicated the Spark application is. So, how can Gigahex be a saviour?

## Here you go …

Gigahex is comprised of a command line tool, web dashboard and alert manager.

- **Command line tool** a.k.a GX allows you to execute pre deployment commands or scripts, or even create a Spark cluster for example an AWS EMR cluster. And finally submits the Spark Job to the cluster.

- **Monitor** the deployed app using the web dashboard, which displays the aggregated metrics in real-time. This is really handy, when you just want to spin up a cluster say (AWS EMR), run your job and then terminate the cluster, while preserving all the stats of the job in an external dashboard managed by Gigahex.

- **Alerting rules** can be configured based on the metrics being captured in real time. For example, you can receive notifications, if a task is stuck for long, or if the driver is busy writing records to the file system.

## Have some feedback or requests?

If you are facing other challenges while working with Spark application, or have any other ideas, then shoot me mail at [shad][at][gigahex.com] or share your [request](https://github.com/GigahexHQ/requests/issues/new).
