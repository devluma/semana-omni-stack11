/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const app = require('./app');

const PORT = process.env.PORT || 3001;
const { APP_SECRET } = process.env;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
