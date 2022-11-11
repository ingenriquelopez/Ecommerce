const app = require('./src/app.js');
const { db } = require('./src/db.js');
const chargeProducts = require('./src/utils/chargeProducts.js');
const { client } = require('./whatsapp/whatsappBot.js');
const { PORT } = process.env || 3001;
db.sync({ force: true })
  .then(()=>{
    chargeProducts();
    console.log("Database sync");
  });

app.listen(PORT, () => {
console.log(`Server listening at port ${PORT}`); // eslint-disable-line no-console
//para desactivar el bot solo comentar la siguiente linea

//client.initialize();

});
