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
                eventName: "Hackathon"
            }
        ]
    }
] ;

var moduleDropdown = document.querySelector('#moduleName');
var eventDropdown = document.querySelector('#eventName');


moduleDropdown.addEventListener('change', searchModule);
searchModule.call(moduleDropdown);

function searchModule(){
    var selectedModule = this.value;
    var requiredModule = modules.find( mod => {
        return mod.moduleName === selectedModule;
    })
    populateEvents(requiredModule);
}

function populateEvents (requiredModule){
    var options = "";
    requiredModule.events.map( eve => {
        options += `<option value="${eve.eventName}">${eve.eventName}</option>`
    })
    eventDropdown.innerHTML = options;
}