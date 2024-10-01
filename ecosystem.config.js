module.exports = {
  apps: [
    {
      name: "99s-backend",           // Name of the PM2 process
      script: "api/index.js",        // Your main script
      instances: 1,                  // Number of instances to run
      autorestart: true,             // Automatically restart on crashes
      watch: true,                   // Restart the server on file changes
      max_memory_restart: "1G",      // Restart if memory usage exceeds 1GB
      log_file: "./logs/combined.log",  // Combined log output
      out_file: "./logs/out.log",    // Standard output log
      error_file: "./logs/error.log", // Error log
      env: {
        NODE_ENV: "development",
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3000,
      }
    }
  ]
};
