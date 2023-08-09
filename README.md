# Redis Cluster with Sentinel Setup and Probabilistic Cache Example
useful links
```
[https://blog.devops.dev/redis-cluster-and-sentinel-with-docker-from-zero-to-hero-part-iv-63ba9d196cc3](url)
```
This example demonstrates how to set up a Redis cluster with Sentinel and implement a probabilistic cache mechanism using Node.js and the `ioredis` library.

## Setup

1. Clone this repository to your local machine.

2. Install the required dependencies by running the following command:

   ```
   yarn
   ```

3. Start the Redis cluster and Sentinel services using Docker Compose:

   ```
   docker-compose up
   ```

   This will start three services: `redis-master`, `redis-slave`, and `redis-sentinel`, forming a Redis cluster with Sentinel.

4. Run the Node.js script to execute the cache example:

   ```
   node index.ts
   ```

   The script will use the `ioredis` library to interact with the Redis cluster and demonstrate the probabilistic cache mechanism.

## Understanding the Example

The provided Node.js script (`index.ts`) demonstrates a probabilistic cache mechanism that attempts to cache a value with a predefined time-to-live (TTL) and a probability of updating the cache based on the remaining TTL.
