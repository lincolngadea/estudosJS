function temHabilidade(skills) {
    // código aqui
    if (skills.length == 0){
        return false;
    }else{
        return true;
    }
}
   var skills = ["Javascript", "ReactJS", "React Native"];
   console.log(temHabilidade(skills)); // true ou false