let speech=new SpeechSynthesisUtterance();

let voices=[];

let voiceSelect=document.querySelector("select");

window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices();
    speech.voice=voices[0];

    voices.forEach((voice, i)=>(voiceSelect.options[i] = new Option(voice.name , i)));
    
};

voiceSelect.addEventListener("change",()=>{
    speech.voice = voices[voiceSelect.value];
})



// Applied function when click on listen button then we will listen the sound
document.querySelector("button").addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value;
    // speech.lang="hi-IN";
    // speech.lang="ur-PK";
    window.speechSynthesis.speak(speech)
})




