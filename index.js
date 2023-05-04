function introduction(name){
    return `Hi, my name is ${name}.`;
}
  console.log(introduction("Aki")); // "Hi, my name is Aki."

function introductionWithLanguage (name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
 
}
console.log(introductionWithLanguage("Aki", "Ember.js")); //"Hi, my name is Aki and I am learning to rpogram in Ember.js"

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}



