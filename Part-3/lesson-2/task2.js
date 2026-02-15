function processData(callBack = () => console.log("Default callback executed"), config = {setting: "default"}){

    callBack(); 
    console.log("Current config:", config); //logs the current config which is "default"
    
    // Modifying the config object
    config.setting = "modified";
    console.log("Modified config:", config); // logs the modified config which is "modified"
    
};

// Using default parameters
processData();

// with custom callback and config
processData(() => console.log("Custom callback executed"), {setting: "custom"});
