---
id: capture-spark-exceptions
title: Capture spark exceptions
author: Shad
author_title: Co-founder of Gigahex
image: https://d2uqnt9f7uda88.cloudfront.net/img/banner_blog_spark_exception.png
author_url: https://github.com/amezng
author_image_url: https://pbs.twimg.com/profile_images/835123474742063105/N3Qkp_r__400x400.jpg
tags: [monitoring, spark]
keywords:
  - apache spark
  - monitoring
  - data platform
---

**Best birthday gift to a dev:** A Simplified platform for finding issues to relieve the left hemisphere of brain.

<!--truncate-->

## Lifespan of exception

The painful part of the story of a Spark developer starts after the deployment to production. He/she already has access to jazzy dashboards to keep him happy that his application is working fine. But then one day an email pops up, saying the application has failed and now his dashboard is kind of clueless. Developers need to dig into YARN logs, Spark UI, Grafana dashboards to view the lovely Java stack trace and identify the root cause.

There are more than half a dozen tools that can deploy your code to production in a matter of few clicks once configured. But once something goes wrong, you have to compromise with age old bash or python scripts, distributed across multiple directories to set up local and staging data to reproduce the issue.

## First step - birth of exception viewer

We understand that bugs are inevitable, and that's why with Gigahex, we want developers to have access to all the information required for identifying the root cause and deploying the fix with the same platform. No dabbling around with multiple services, log files, server directories.

As a first step, we have introduced an easy way to get the exception stack, right next to the metrics dashboard of Gigahex. Here's how to configure it using Gigahex SDK.

```scala
import com.gigahex.error.Capture
...

try {
    val spark = SparkSession.builder().getOrCreate()

    // Your analytics program ...

    dataframe.write.csv("/users/hadoop/output")
} catch {
  case e : Exception =>
    Capture.error(e, spark.sparkContext)
}
```

Now to publish the captured exception and the runtime metrics to the Gigahex platform, just add **gx** prefix to `spark-submit` as shown below

```bash
gx spark-submit --class com.example.analyse.Feed /path/to/app.jar
```

Thats it! You can view the issues in the dashboard in just one hop, as shown below.

![capture exception](https://d2uqnt9f7uda88.cloudfront.net/img/capture-exception.png)

## What's next?

Every event has a reason behind it, and therefore the ability to view the logs just before this event occurred can help the developer quickly drill down, and identify the root cause of this issue. To know more about this upcoming feature, follow [Gigahex](https://twitter.com/GigahexApp).

## About author

[Shad](https://twitter.com/ShadAmez) is the co-founder of [Gigahex](https://gigahex.com), a platform for deploying, monitoring and identifying issues in Spark application.
