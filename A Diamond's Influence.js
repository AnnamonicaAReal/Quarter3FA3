function determineDiamondInfluence() {
    let blueInfluence = Math.ceil(Math.random() * 20);
    let yellowInfluence = Math.ceil(Math.random() * 20);
    let whiteInfluence = Math.ceil(Math.random() * 20);
    
    document.getElementById("blue-score").innerHTML = blueInfluence; 
    document.getElementById("yellow-score").innerHTML = yellowInfluence;
    document.getElementById("white-score").innerHTML = whiteInfluence; 

    let greatestInfluence = Math.max(blueInfluence, yellowInfluence, whiteInfluence);
    let resultMessage = "";

    if (greatestInfluence == blueInfluence) {
        resultMessage = "The greatest influence over Homeworld belongs to Blue Diamond (" + blueInfluence + ").";
    } else if (greatestInfluence == yellowInfluence) { 
        resultMessage = "The greatest influence over Homeworld belongs to Yellow Diamond (" + yellowInfluence + ").";
    } else if (greatestInfluence == whiteInfluence) {
        resultMessage = "The greatest influence over Homeworld belongs to White Diamond (" + whiteInfluence + ").";
    } else {
        resultMessage = "The balance of power remains undecided.";
    } 

    document.getElementById("influence-result").innerHTML = resultMessage;

    // Determine the strongest supporter based on num1
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let supporterLetter = alphabet[Math.min(blueInfluence, 26) - 1]; 
    document.getElementById("supporter-result").innerHTML = "The strongest supporter of the ruling Diamond has a name that starts with the letter " + supporterLetter + ".";

    // Calculate time of training based on num2 * num3
    let totalTime = yellowInfluence * whiteInfluence; 
    let hours = Math.floor(totalTime / 60); 
    let minutes = totalTime % 60; 

    document.getElementById("training-time").innerHTML = "Records indicate that the strongest Gem trained for " + totalTime + " minutes, or approximately " + hours + " hour(s) and " + minutes + " minutes.";
}

determineDiamondInfluence();
