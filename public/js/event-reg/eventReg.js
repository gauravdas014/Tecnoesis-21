const modules = [
    {
        moduleName: "Empessario",
        events: [
            {
                eventName: "Pitch Please",
                teamBased: true,
            },
            {
                eventName: "Ad-ovation",
                teamBased: true
            }
        ]
    },
    {
        moduleName: "CyberWarp",
        events: [
            {
                eventName: "Nibble Code",
                teamBased: false
            },
            {
                eventName: "Pixelate 2021",
                teamBased: false
            },
            {
                eventName: "Data Strata",
                teamBased: true,
            },
            {
                eventName: "Cyberbot",
                teamBased: true,
            }
        ]
    },
    {
        moduleName: "ASME",
        events: [
            {
                eventName:"Plot Twist",
                teamBased: false
            },
            {
                eventName: "Mascot Making",
                teamBased: true,
            },
            {
                eventName: "Draft Ritz 4.0",
                teamBased: true,
            },
            {
                eventName: "Pitch the car",
                teamBased: true,
            }
        ]
    },
    {
        moduleName: "V-warz",
        events: [
            {
                eventName: "Call of Duty Mobile",
                teamBased: true,                
            },
            {
                eventName: "Mini-Militia",
                teamBased: true
            }
        ]
    },
    {
        moduleName: "Smart City",
        events: [
            {
                eventName: "My City My Dream",
                teamBased: true
            }
        ]
    },
    {
        moduleName: "Robotics",
        events: [
            {
                eventName: "Hackathon",
                teamBased: true
            }
        ]
    }
] ;

var moduleDropdown = document.querySelector('#moduleName');
var eventDropdown = document.querySelector('#eventName');
var individualBlock = document.querySelector('.indivisual');
var teamBlock = document.querySelector('.team_event');


moduleDropdown.addEventListener('change', searchForModule);
searchForModule.call(moduleDropdown);

function searchForParticluarModule(selectedModule){
    var requiredModule = modules.find( mod => {
        return mod.moduleName === selectedModule;
    })
    return requiredModule;
}

function searchForModule(){
    var selectedModule = this.value;
    var requiredModule = searchForParticluarModule(selectedModule)
    populateEvents(requiredModule);
}

function populateEvents (requiredModule){
    var options = "";
    requiredModule.events.map( eve => {
        options += `<option value="${eve.eventName}">${eve.eventName}</option>`
    })
    eventDropdown.innerHTML = options;
    memberNumberChange.call(eventDropdown);
}

eventDropdown.addEventListener('change', memberNumberChange);

function memberNumberChange(){
    var selectedEventName = this.value;
    var selectedModuleName = moduleDropdown.value;
    var requiredModule = searchForParticluarModule(selectedModuleName);
    var requiredEvent = requiredModule.events.find(mod => {
        return selectedEventName === mod.eventName
    })
    if( !requiredEvent.teamBased ){
        individualBlock.style.display = 'block';
        teamBlock.style.display = 'none';
    }
    else{
        individualBlock.style.display = 'none';
        teamBlock.style.display = 'block';
    }
}