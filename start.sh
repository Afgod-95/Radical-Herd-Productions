
#!/bin/bash
# start.sh - Run in production mode

# Set NODE_ENV manually before starting the server
export NODE_ENV=production

# Run the server
node server.js --prod