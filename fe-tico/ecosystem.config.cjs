module.exports = {
  apps: [{
    name: "mes_pda",
    script: "npx",
    args: "serve dist/ --single -p 3000",
    instances: 1,
    exec_mode: "cluster",
    watch: false,
    max_memory_restart: "2G",
    env: {
      NODE_ENV: "production",
    },
  }, ],
};