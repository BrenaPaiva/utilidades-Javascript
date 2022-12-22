/*Crie uma função que receba uma string em MP3 ou MP4 e faça a conversão de uma unidade
para outra 
    MP3 = Podcast
    MP4 = Vídeos
*/


function transform(type){
    let audioExist = type.includes('Audio');
    let videoExist = type.includes('Video');


    if(audioExist && videoExist){

        console.log("teste");
    }
}
transform()