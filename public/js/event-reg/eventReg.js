const modules = [
    {
        moduleName: "Empessario",
        events: [
            {
                eventName: "Pitch Please",
                teamBased: true,
                minm: 1,
                maxm: 4
            },
            {
                eventName: "Ad-ovation",
                teamBased: true,
                minm: 1,
                maxm: 7
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
                minm: 1,
                maxm: 3
            },
            {
                eventName: "Cyberbot",
                teamBased: true,
                minm: 1,
                maxm: 4
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
                minm: 1,
                maxm: 2
            },
            {
                eventName: "Draft Ritz 4.0",
                teamBased: true,
                minm: 1,
                maxm: 4
            },
            {
                eventName: "Pitch the car",
                teamBased: true,
                minm: 1,
                maxm: 4
            }
        ]
    },
    {
        moduleName: "V-warz",
        events: [
            {
                eventName: "Call of Duty Mobile",
                teamBased: true,    
                minm: 1,
                maxm: 4            
            },
            {
                eventName: "Minmi-Militia",
                teamBased: true,
                minm: 1,
                maxm: 4
            }
        ]
    },
    {
        moduleName: "Smart City",
        events: [
            {
                eventName: "My City My Dream",
                teamBased: true,
                minm: 2,
                maxm: 3
            }
        ]
    },
    {
        moduleName: "Robotics",
        events: [
            {
                eventName: "Hackathon",
                teamBased: true,
                minm: 1,
                maxm: 4
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
        var count = 2;
        var extraMem = "";
        while(count <= requiredEvent.minm){
            var requiredMemberString = 
            `<div class="team_member fl">
                <label>Team Member Name (Member - ${count})*</label>
                <input type='text' name='team_member_name_${count}' required/>
            </div>`;
            extraMem+= requiredMemberString;
            count++;
        }
        while(count <= requiredEvent.maxm){
            var memeberString = 
            `<div class="team_member fl">
            <label>Team Member Name (Member - ${count})</label>
            <input type='text' name='team_member_name_${count}' />
            </div>`;
            extraMem+= memeberString;
            count++;
        }
        document.querySelector('.team_members').innerHTML = extraMem;
    }
}