module.exports = {
  apps : [{
    name   : "crowdin-sample-1",
    script : "./index.js",
    env_production: {
       NODE_ENV: "production",
       PORT: "8088",
       BASE_URL: "http://164.92.204.181:8088"
    },
    env_development: {
       NODE_ENV: "development",
       PORT: "4949",
       BASE_URL: "http://164.92.204.181:4949"
    }
  }]
}
