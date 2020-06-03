---
id: spark-preview-on-docker
title: Spark 3.0 preview on Docker
author: Shad
author_title: Co-founder of Gigahex
image: https://d2uqnt9f7uda88.cloudfront.net/img/blog-spark-preview-docker-2.png
author_url: https://github.com/amezng
author_image_url: https://pbs.twimg.com/profile_images/835123474742063105/N3Qkp_r__400x400.jpg
tags: [spark, docker]
keywords:
  - apache spark
  - docker
  - installation
---

Apache Spark 3.0 second preview, the latest release, can easily be played around using its docker image. Let's do it.

<!--truncate-->

### Install Docker

As a first step, make sure you've installed Docker. If you are new to Docker or containers in general, then I would highly recommend going through this article about [why docker?](https://www.docker.com/why-docker). It also contains instructions for downloading and installing docker on your laptop.

Once you've installed docker, the next step is get the docker iamge with Spark 3.0 baked in.

### Run Spark 3.0 Preview on Docker

The below command will pull the Spark docker image and start the Spark Standalone cluster haiving single worker.

```sh
docker run -p 127.0.0.1:8080:8080/tcp  -it gigahex/spark:3.0.0-preview2
```

Once you run the above command, you should be able to see the logs as below.

```sh
16:56:39 : Setting the spark configuration
16:56:39 : Starting the spark master 3.0.0-preview2 on the host : eb6090ed75ea
tcp        0      0 0.0.0.0:8080            0.0.0.0:*               LISTEN      0          121188     14/java
16:56:43 : Spark Master has started
16:56:43 : Starting the spark worker 3.0.0-preview2 on the host : eb6090ed75ea
tcp        0      0 0.0.0.0:8081            0.0.0.0:*               LISTEN      0          120377     106/java
16:56:46 : Spark Worker has started
16:56:46 : Starting the Spark History service
tcp        0      0 0.0.0.0:18080           0.0.0.0:*               LISTEN      0          121757     207/java
16:56:49 : Spark History has started
16:56:49 : [Service] : [Spark] has started

root@eb6090ed75ea:/opt#
```

Now that you've successfully started the Spark cluster in standalone mode, you can start the Spark shell and explore the latest APIs introduced in this 2nd preview.

```bash
To adjust logging level use sc.setLogLevel(newLevel). For SparkR, use setLogLevel(newLevel).
Spark context Web UI available at http://eb6090ed75ea:4040
Spark context available as 'sc' (master = local[*], app id = local-1591203933397).
Spark session available as 'spark'.
Welcome to
      ____              __
     / __/__  ___ _____/ /__
    _\ \/ _ \/ _ `/ __/  '_/
   /___/ .__/\_,_/_/ /_/\_\   version 3.0.0-preview2
      /_/

Using Scala version 2.12.10 (OpenJDK 64-Bit Server VM, Java 1.8.0_252)
Type in expressions to have them evaluated.
Type :help for more information.

scala>
```

### Spark 3.0 Feature - Binary files

In this section we will see the new datasource included in Spark 3.0 preview, i.e binary files. Lets just read an image file, that is found in the directory
`/opt/data/`.

```scala
scala> val file = spark.read.format("binaryFile").load("/opt/data/spark-logo.png")
res0: org.apache.spark.sql.DataFrame = [path: string, modificationTime: timestamp ... 2 more fields]

scala> file.show()
+--------------------+-------------------+------+--------------------+
|                path|   modificationTime|length|             content|
+--------------------+-------------------+------+--------------------+
|file:/opt/data/sp...|2020-06-03 17:08:45| 67362|[89 50 4E 47 0D 0...|
+--------------------+-------------------+------+--------------------+

```

You can read the official [documentation](https://spark.apache.org/docs/3.0.0-preview/sql-data-sources-binaryFile.html) to know more about this new API in other languages like Java, Python and R.
