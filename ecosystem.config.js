module.exports = {
  apps: [
    {
      name: "99s-backend",           // Name of the PM2 process
      script: "api/index.js",        // Your main script (as specified in your start script)
      instances: 1,                  // Number of instances to run (you can set to "max" for all available CPUs)
      autorestart: true,             // Automatically restart on crashes or failures
      watch: true,                   // Restart the server on file changes
      max_memory_restart: "1G",      // Restart if memory usage exceeds 1GB
      env: {
        NODE_ENV: "development",     // Development environment variables
        PORT: 8000,                  // Example: set your port if not in dotenv
      },
      env_production: {
        NODE_ENV: "production",      // Production environment variables
        PORT: 8000,
      }
    }
  ]
};
