# Google Analytics Proxy

A proxy server used to bypass stupid adblockers blocking Google Analytics.

Based off of https://github.com/ZitRos/save-analytics-from-content-blockers

When run, will start a server on port 1280 that listens for Google Analytics requests. It will the proxy them to the GA collection endpoint, adding in a field for the user's IP address.

The goal is to get accurate traffic metrics from users that may be using adblock or other tools to block Google Analytics (which is now a high, non-trivial percentage of users).

## Install + Run

Built + tested with Node 13.8 but should work with pretty much any version of node.

- `yarn`
- `node index.js`

### Docker

- `docker build -t ameo/ga-proxy .`
- `docker run -d --name ga-proxy -p 1280:1280 ameo/ga-proxy:latest`
