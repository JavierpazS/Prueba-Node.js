const autos = [
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
    autos: autos,
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
    },
    autosNuevos: function() {
        const autosDisponibles = this.autosParaLaVenta();
        return autosDisponibles.filter(auto => auto.km < 100);
    },
    listaDeVentas: function() {
        const autosVendidos = this.autos.filter(auto => auto.vendido);
        return autosVendidos.map(auto => auto.precio);
    },
    totalDeVentas: function() {
        const preciosDeVentas = this.listaDeVentas();
        return preciosDeVentas.reduce((total, precio) => total + precio, 0);
    },
    puedeComprar: function(auto, persona) {
        const cuotaMensual = auto.precio / auto.cuotas;
        return auto.precio <= persona.capacidadDePagoTotal && cuotaMensual <= persona.capacidadDePagoEnCuotas;
    },
    autosQuePuedeComprar: function(persona) {
        const autosDisponibles = this.autosParaLaVenta();
        return autosDisponibles.filter(auto => this.puedeComprar(auto, persona));
    }
};

const auto1 = concesionaria.buscarAuto('JJK116');
console.log(auto1);