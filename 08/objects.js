/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes suas idades, alturas e pesos
*/

const patientsList = [
  {
    name: 'Gabriel',
    age: 17,
    weight: 80,
    height: 1.79,
  },
  {
    name: 'Isabelle',
    age: 16,
    weight: 65,
    height: 1.72,
  },
  {
    name: 'Giovanna',
    age: 15,
    weight: 90,
    height: 1.69,
  },
  {
    name: 'Junior',
    age: 7,
    weight: 35,
    height: 1.38,
  },

];

let patientName = [];
let patientAge = [];
let patientWeight = [];
let patientHeight = [];


// for of é mais utilizado para pegar valores de um objeto, já que ele tem acesso a essas propriedades

for(patient of patientsList) {
  patientName.push(patient.name);
  patientAge.push(patient.age);
  patientWeight.push(patient.weight);
  patientHeight.push(patient.height);
};

// Já o for in acessa a propriedade, o index do item ou do objeto, não tendo ao valor dele em si

for(index in patientsList) {
  alert(`O(a) paciente ${patientName[index]} tem ${patientAge[index]} anos, pesa ${patientWeight[index]}kg e tem ${patientHeight[index]} de altura`);
};

