/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o calculo de IMC
*/

const patientsList = [
  {
    name: 'Lucas',
    age: 32,
    weight: 100,
    height: 1.76,
  },
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
];

const imcPatient = patientData => {

  let imcCalc = (patientData.weight / patientData.height ** 2).toFixed(1);

  if(imcCalc < 18.5) {
    return `Paciente ${patientData.name} pesa ${patientData.weight}kg e tem ${patientData.height} de altura.
    Seu IMC é de ${imcCalc}, está com baixo peso.`
  } else if(imcCalc >= 18.5 && imcCalc < 25) {
    return `Paciente ${patientData.name} pesa ${patientData.weight}kg e tem ${patientData.height} de altura.
    Seu IMC é de ${imcCalc}, está na média do IMC.`
  } else if(imcCalc >= 25 && imcCalc < 30) {
    return `Paciente ${patientData.name} pesa ${patientData.weight}kg e tem ${patientData.height} de altura.
    Seu IMC é de ${imcCalc}, está com sobrepeso.`
  } else {
    return `Paciente ${patientData.name} pesa ${patientData.weight}kg e tem ${patientData.height} de altura.
    Seu IMC é de ${imcCalc}, está com obesidade.`
  };
};

for(patient of patientsList) {
  let IMCPatients = imcPatient(patient);
  alert(IMCPatients);
};






















// function patientIMC(patient) {
//   let imcCalc = (patient.weight / patient.height ** 2).toFixed(1);

//   if(imcCalc < 18.5) {
//     return `Paciente ${patient.name} pesa ${patient.weight}kg e tem ${patient.height} de altura.
//     Possui o IMC de ${imcCalc}, está abaixo da média de peso.`;
//   } else if(imcCalc >= 18.5 && imcCalc < 24.9) {
//     return `Paciente ${patient.name} pesa ${patient.weight}kg e tem ${patient.height} de altura.
//     Possui o IMC de ${imcCalc}, está na média.`;
//   } else if(imcCalc >= 24.9 && imcCalc <= 30) {
//     return `Paciente ${patient.name} pesa ${patient.weight}kg e tem ${patient.height} de altura.
//     Possui o IMC de ${imcCalc}, está com sobrepeso.`;
//   } else {
//     return `Paciente ${patient.name} pesa ${patient.weight}kg e tem ${patient.height} de altura.
//     Possui o IMC de ${imcCalc}, está com obesidade`;
//   };

  
// };

// // Aqui eu dou como parametro a minha função os itens que foram recebidos pelo for da minha lista de pacientes, fazendo com que minha função consiga acessar todos os dados dessa lista

// for(let patientItens of patientsList) {
//   let IMCmessage = patientIMC(patientItens);
//   alert(IMCmessage);
// };