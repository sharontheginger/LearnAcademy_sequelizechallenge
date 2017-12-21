let connection = require('./models/sequelize-connection')

let Country = require('./models/country')
// connection.authenticate()
//   .then(function(){
//     console.log('success!')
//   })
//   .catch(function(error){
//     console.log(error)
//   })
// let Country = require('./models/country')
//
// Country.findById(5).then(function(country){
//   // Do anything we like with the country object
//   console.log(country.get('name'))
// }).catch(function(error){
//   console.log(error)
// })
 // let Country = require('./models/country')
//
// Country.findById(1).then(function(country){
//   console.log(country.get('name'))
// })

// Country.all().then(function(countries){
//   let mapped = countries.map(function(country){
//     return country.get()
//   })
//   console.log(mapped)
// })

// Country
//   .all({limit: 2})
//   .then(function(countries){
//   let mapped = countries.map(function(country){
//     return country.get()
//   })
//   console.log(mapped)
// })
// Country
//   .all({limit: 2, offset: 1})
//   .then(function(countries){
//   let mapped = countries.map(function(country){
//     return country.get()
//   })
//   console.log(mapped)
// })

// Country.all({
//   where: {
//     continent: 'Europe'
//   }
// })


// let genovia = Country.build({
//   code: 'GEN',
//   name: 'Genovia',
//   continent: 'Europe',
//   region: 'Make Believe'
// })
//
// genovia.save()
//   .then(function(){
//     //whatever you need to do afterwards
//   })
//   .catch(function(error){
//   })

// let florin = Country.create({
//   code: 'FLR',
//   name: 'Florin',
//   continent: 'Europe',
//   region: 'Make Believe'
// })
//   .then(function(){
//     //whatever you need to do afterwards
//   })
//   .catch(function(error){
//   })

// Country.all({
//   where: {
//     region: 'Make Believe'
//   }
// })
//   .then(function(records){
//     let promises = records.map(function(country){
//       return country.destroy()
//     })
//
//     return Promise.all(promises)
//   })
//   .then(function(results){
//     console.log("They're gone!")
//   })
// let florin = Country.create({
//   code: 'FLR',
//   name: 'Florin',
//   continent: 'Europe',
//   region: 'Make Believe'
// })
//   .then(function(country){
//     country.region = "Storyland"  // <-- this is where we update its values
//     return country.save() // a promise
//   })
//   .catch(function(error){
//   })

// let gorin = Country.create({
//   code: 'GOR',
//   name: 'Gorin',
//   continent: 'Europe',
//   region: 'Make Believe'
// })
//   .then(function(){
//     //whatever you need to do afterwards
//   })
//   .catch(function(error){
//   })

// let denovia = Country.build({
//   code: 'DZA',
//   name: 'Denovia',
//   continent: 'Europe',
//   region: 'Make Believe'
// })
//
// denovia.save()
//   .then(function(){
//     //whatever you need to do afterwards
//   })
//   .catch(function(error){
//   })
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.sequelize.query("ALTER TABLE app_users ADD CONSTRAINT unique_user_email UNIQUE (email);")
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.sequelize.query("ALTER TABLE app_users DROP CONSTRAINT unique_user_email;")
  }
};


queryInterface.addColumn({
    tableName: 'countries',
    schema: 'public'
  },
  'citycode',
  Sequelize.STRING
)
