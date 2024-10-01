module.exports = {
  apps: [
    {
      name: "server-99s",
      script: "./api/index.js", // your app's entry point
      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: "1G",
    },
  ],
};
