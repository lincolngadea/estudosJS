
function skills(){
    var usuarios = [
        {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
        },
        {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
        }
    ];
    
    console.log(`O ${usuarios[0].nome} possui as habilidades: ${usuarios[0].habilidades}`);
    console.log(`O ${usuarios[1].nome} possui as habilidades: ${usuarios[1].habilidades}`);
       
}

skills();