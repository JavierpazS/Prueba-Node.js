// autos.js
export const autos = [
   {
       marca: "Ford",
       modelo: "Fiesta",
       precio: 150000,
       km: 200,
       color: "Azul",
       cuotas: 12,
       anio: 2019,
       patente: "APL123",
       vendido: false,
   },
   {
       marca: "Toyota",
       modelo: "Corolla",
       precio: 100000,
       km: 0,
       color: "Blanco",
       cuotas: 14,
       anio: 2019,
       patente: "JJK116",
       vendido: false,
   }
];

const concesionaria = {
   autos: autosImportados,
   buscarAuto: function(patente) {
       const autoEncontrado = this.autos.find(auto => auto.patente === patente);
       return autoEncontrado || null;
   },
   venderAuto: function(patente) {
       const auto = this.buscarAuto(patente);
       if (auto !== null) {
           auto.vendido = true;
       }
   },
   autosParaLaVenta: function() {
       return this.autos.filter(auto => !auto.vendido);
   }
};