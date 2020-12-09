---
id: monitor-spark-jobs-running-in-emr
title: Tutorial - Monitor Spark Jobs running in AWS EMR
author: Shad
author_title: Co-founder of Gigahex
image: https://d2uqnt9f7uda88.cloudfront.net/img/blog-spark-on-emr.png
author_url: https://github.com/amezng
author_image_url: https://pbs.twimg.com/profile_images/835123474742063105/N3Qkp_r__400x400.jpg
tags: [monitoring, AWS EMR]
keywords:
  - apache spark
  - monitoring
  - data platform
  - AWS EMR
---

Gigahex is an alternative to Spark History server, that works with any Cloud or OnPrem Spark cluster. Today we will see how does it integrate with AWS EMR.

<!--truncate-->

### 1. Spin up an EMR Cluster

I am not really going to get into the details of spinning up an EMR cluster as it depends on the entire ETL toolset thats being used. For this simple example,
I am just using the AWS Console to create a new EMR Cluster with release version as `emr-6.2.0`. This version has the latest Spark as of now which is 3.0.1.

### 2. Install Gigahex CLI

Login to EMR master node through the key pair.

```bash
ssh -i ~/emr-master.pem hadoop@ecx-x-x-xx-xxx.eu-west-2.compute.amazonaws.com
```

Gigahex CLI is a tool (will be open sourced in Jan 2021) to submit spark applications and automatically add configurations responsible for collecting and publishing metrics to the Gigahex Cloud. Assuming you are using the default `hadoop` user, having `sudo` access, you can run the below command to install the CLI.

```bash
curl https://packages.gigahex.com/install.sh -sSfL | sh
```

You can verify the installation using the `help` command.

```bash
Gigahex CLI - v0.0.4
Usage
=====================================
login                 Login to gigahex.com
help                  Show help
version               Show version
spark-submit          Submit spark job
agent                 Create and manage agents
```

### 3. Login to Gigahex Cloud

In order to start submitting the spark applications, you need to login to Gigahex cloud and generate credentials. To do that you can either use `gx login` command or export the environment variables `GHX_API_KEY_ID` and `GHX_API_KEY_SECRET` which is available in Gigahex [Account Settings](https://app.gigahex.com/settings).

![Account settings](/img/account-setting.png)

With `gx login` command you need to enter your credentials that you have used to create the account on Gigahex Cloud.

```bash
gx login
email for https://cloud.gigahex.com: xxxxxx@abc.com
password for https://cloud.gigahex.com: ********
Logged in to Gigahex platform. API keys saved at /home/hadoop/.gxcr
```

### 4. Submit Spark application

There are two ways of configuring your application to collect all jvm and application specific metrics and events and publish to Gigahex Cloud for post processing.

### 4.1 Submit through Gigahex CLI

The `gx spark-submit` option enables you to submit the application, without changing the code. Just use the existing command and prefix this with `gx`.

** So what's happening behind the scene ? **

The CLI tool, appends unique run id dynamically, which allows all the metrics, events and logs to be mapped to a unique running instance of the application. This also configures the event listeners and downloads the required jars to start collecting and publishing the metrics in a fixed interval.

### 4.2 Submit through agent

If you are looking for automation and ease of deployment through GUI based interface, then you can install the agent once and run mulitple spark applications on that cluster with different configuration through Gigahex deployment wizard.

#### 4.2.1 Register your cluster with agent

You can use the command `gx agent` to register your cluster with a specific name, that would later on show up on [Clusters page](https://app.gigahex.com/clusters).

```bash
gx agent --name emr-c5d-cluster --start
```

#### 4.2.2 Add a new deployment configuration

You can manage multiple deployment configuration to test the performance against different cluster size and Spark runtime configurations. In the below screen you can view and manage different deployments.

![Deployments](/img/deployments.png)

Clicking on the **New Deployment Pipeline** will take you to deployment wizard that guides you to choose the cluster where you want to deploy and the steps you want to execute.

#### 4.2.3 Deploy the application and view metrics

Once you have setup the deployment, click on the **Deploy** button to start the deployment. You can click on the latest run status icon to monitor the deployment steps as shown below.

![Monitor deployments](/img/monitor-deployment-steps.png)

Clicking on **View Dashboard** will take you to the Spark Metrics Dashboard where you can visualize the performance of your application. Here's the screenshot of the application that was run in AWS EMR.

![Spark dashboard](/img/emr-spark-dashboard.png)

## What's next ?

We will do deep dive into every performance improvement step, that will save cost and time by a huge margin. Stay tuned.

## About author

[Shad](https://twitter.com/ShadAmez) is the co-founder of [Gigahex](https://gigahex.com), a platform for deploying, monitoring and identifying issues in Spark application.
