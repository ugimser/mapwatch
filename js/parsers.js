let generatingLevels = [];
let whisperFrom = [];
let whisperTo = [];
let whisperWithoutDirection = [];
let gamingSessions = [];
let playerHasBeenSlain = [];
let playerLevel = [];
let playerTradeCompleted = [];
let playerJoinedTheArea = [];
let messagesFromMastersAndBosses = [];
//let messagesFromMastersAndBossesTemp = [];

function parserGeneratingLevel(line) {
    //console.log(line);
    const regex = /^(\d{4}\/\d{2}\/\d{2}) (\d{2}:\d{2}:\d{2}) .*?\[DEBUG Client (\d+)\] (Generating level) (\d+) area "([^"]+)" with seed (\d+)$/;
    const match = line.match(regex);

    if (!match) {
        return null; 
    }

    return {
        date: match[1],   
        dateEnd: "",
        time: match[2],    
        timeEnd: "",
        //clientId: match[3],     
        pattern: match[4],      
        level: parseInt(match[5]),
        //areaName: match[6],
        areaName: AreaNameParser(match[6]),       
        seed: parseInt(match[7]), 
    };
}

function parserWhipserFrom(line) {
    const regex = /^(\d{4}\/\d{2}\/\d{2}) (\d{2}:\d{2}:\d{2}) .*?\[INFO Client (\d+)\] (@From )([^:]+): (.+)$/;
    const match = line.match(regex);

    if (!match) {
        return null;
    }

    return {
        date: match[1],        
        time: match[2],         
        clientId: match[3],   
        pattern: match[4],           
        direction: "@From",
        playerName: match[5],
        message: match [6],
    };
}

function parserWhipserTo(line) {
    const regex = /^(\d{4}\/\d{2}\/\d{2}) (\d{2}:\d{2}:\d{2}) .*?\[INFO Client (\d+)\] (@To )([^:]+): (.+)$/;
    const match = line.match(regex);

    if (!match) {
        return null; 
    }

    return {
        date: match[1],        
        time: match[2],             
        clientId: match[3],      
        pattern: match[4],          
        direction: "@To",
        playerName: match[5],
        message: match[6],
    };
}

function parserGamingSessions(line, opening) {
    // 2025/01/20 19:56:53 ***** LOG FILE OPENING *****
    const regex = /^(\d{4}\/\d{2}\/\d{2}) (\d{2}:\d{2}:\d{2}) (.*)/;
    const match = line.match(regex);

    if (!match) {
        return null; 
    }

    return {
        date: match[1],          
        time: match[2],               
        pattern: opening ? "Game started" : "Game closed",    
        dateEnd: "",
        timeEnd: match[2],
        seed: -1,
    };
}

function parserDateTimeOnly(line) {
    // 2025/01/20 19:56:53 
    const regex = /^(\d{4}\/\d{2}\/\d{2}) (\d{2}:\d{2}:\d{2}) (.*)/;
    const match = line.match(regex);

    if (!match) {
        return null;
    }

    return {
        date: match[1],  
        time: match[2],     
        message: match[3],     
        seed: -1,
    };
}

function parserPlayerHasBeenSlain(line) {
    const regex = /^(\d{4}\/\d{2}\/\d{2}) (\d{2}:\d{2}:\d{2}) .*?\[INFO Client (\d+)\] : (\w+) (has been slain.)$/;
    const match = line.match(regex);

    if (!match) {
        return null;
    }

    return {
        date: match[1],                 
        time: match[2],                 
        playerName: match[4],           
        message: match[5],
    };
}

function parserPlayerLevel(line) {
    const regex = /^(\d{4}\/\d{2}\/\d{2}) (\d{2}:\d{2}:\d{2}) .*?\[INFO Client (\d+)\] : ([^ ]+) \(.*?\) is now level (\d+)$/;
    const match = line.match(regex);

    if (!match) {
        return null;
    }

    return {
        date: match[1],
        time: match[2],
        playerName: match[4],
        level: match[5],
    };
}

function parserMessagesWithoutDirection(line) {
    // 2025/01/20 19:56:53 
    const regex = /^(\d{4}\/\d{2}\/\d{2}) (\d{2}:\d{2}:\d{2}) \d+ \w+ \[INFO Client (\d+)\] (\w+): (.+)$/;
    const match = line.match(regex);

    if (!match) {
        return null;
    }

    return {
        date: match[1],
        time: match[2],
        playerName: match[4],
        message: match[5],
        //pattern: 'no direction',
        seed: -1,
    };
}

function parserMessagesFromMastersAndBosses(line) {
    // 2024/08/11 01:48:47 123 123 [INFO Client 123] Zana, Master Cartographer: They lie to you, Father. I'm your true memory!
    const regex = /^(\d{4}\/\d{2}\/\d{2}) (\d{2}:\d{2}:\d{2}) \d+ \w+ \[INFO Client (\d+)\] ([A-Z][^:\[]*): (.+)$/;
    //const regex = /^(\d{4}\/\d{2}\/\d{2}) (\d{2}:\d{2}:\d{2}) \d+ \w+ \[INFO Client (\d+)\] ([A-Z][^:\[]*,[^:\[]*): (.+)$/;

    const match = line.match(regex);

    if (!match) {
        return null;
    }

    const probName = match[4].trim();
    if (allowedNPCs.has(probName)) {
        return {
            date: match[1],
            time: match[2],
            name: match[4],
            message: match[5],
            //pattern: 'no direction',
            seed: -1,
        };
    }
    return null;
}









