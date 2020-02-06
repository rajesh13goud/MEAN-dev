const nemo = ['Nemo'];
const large = new Array(100).fill('Nemo');

function findNemo(array){
  for(let i = 0; i < array.length; i++){
    if(array[i] === 'Nemo'){
      console.log('Found Nemo!')
    }
  }
}
findNemo(large);
