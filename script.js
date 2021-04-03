function Calculate() {

    var age=parseInt(document.getElementById('age').options[document.getElementById('age').selectedIndex].value);
    var cardiac=parseInt(document.getElementById('Cardiac Signs').options[document.getElementById('Cardiac Signs').selectedIndex].value);
    var respiratory=parseInt(document.getElementById('Respiratory history').options[document.getElementById('Respiratory history').selectedIndex].value);
    var ecg=parseInt(document.getElementById('ecg').options[document.getElementById('ecg').selectedIndex].value);
    var bp=parseInt(document.getElementById('bp').options[document.getElementById('bp').selectedIndex].value);
    var haemoglobin=parseInt(document.getElementById('haemoglobin').options[document.getElementById('haemoglobin').selectedIndex].value);
    var pulserate=parseInt(document.getElementById('pulse rate').options[document.getElementById('pulse rate').selectedIndex].value);
    var wbc=parseInt(document.getElementById('wbc').options[document.getElementById('wbc').selectedIndex].value);
    var urea=parseInt(document.getElementById('urea').options[document.getElementById('urea').selectedIndex].value);
    var sodium=parseInt(document.getElementById('sodium').options[document.getElementById('sodium').selectedIndex].value);
    var potassium=parseInt(document.getElementById('potassium').options[document.getElementById('potassium').selectedIndex].value);
    var gcs=parseInt(document.getElementById('gcs').options[document.getElementById('gcs').selectedIndex].value);

    var multipleprocedures=parseInt(document.getElementById('multipleprocidures').options[document.getElementById('multipleprocidures').selectedIndex].value);
    var typeofsurgery=parseInt(document.getElementById('typeofsurgery').options[document.getElementById('typeofsurgery').selectedIndex].value);
    var malignancystatus=parseInt(document.getElementById('malignancystatus').options[document.getElementById('malignancystatus').selectedIndex].value);
    var operativebloodloss=parseInt(document.getElementById('operativebloodloss').options[document.getElementById('operativebloodloss').selectedIndex].value);
    var peritoneal=parseInt(document.getElementById('peritoneal').options[document.getElementById('peritoneal').selectedIndex].value);
    var operativeseverity=parseInt(document.getElementById('operativeseverity').options[document.getElementById('operativeseverity').selectedIndex].value);

    var physiological_score=age+cardiac+respiratory+ecg+bp+haemoglobin+pulserate+wbc+urea+sodium+potassium+gcs;
    var operative_score=multipleprocedures+typeofsurgery+malignancystatus+operativebloodloss+peritoneal+operativeseverity;
  
    

    var Morbidity=Math.exp(-5.91+(0.16*physiological_score)+(0.19*operative_score));
    var morbididtyScore=Morbidity/(1+Morbidity);
    var Mortality=Math.exp(-9.37+(0.19*physiological_score)+(0.15*operative_score));
    var mortalityScore=Mortality/(1+Mortality);

    document.getElementById('button').onclick =function(){
    window.location.hash = 'MorbidityResult';
    }

    document.getElementById('MorbidityResult').innerHTML=morbididtyScore;
    document.getElementById('MortalityResult').innerHTML=mortalityScore;
}