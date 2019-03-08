require('module-alias/register');
const https = require('https'),
      BudgetManagerAPI = require('@BudgetManagerAPI'),
      BudgetManagerServer = https.Server(BudgetManagerAPI),
      BudgetManagerPORT = process.env.PORT || 3001,
      LOCAL = '0.0.0.0';

BudgetManagerServer.listen(BudgetManagerPORT, LOCAL, () =>
console.log('BudgetManagerAPI running on ${BudgetManagerPORT}'));
