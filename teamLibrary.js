// NBA Teams
const nbaTeams = [
            { name: "Boston Celtics", logo: "../images/celtics.png", conference: "East", division: "Atlantic", conferenceRank: 2, divisionRank: 1, record: "4-1" },
            { name: "Brooklyn Nets", logo: "../images/nets.png", conference: "East", division: "Atlantic", conferenceRank: 11,  divisionRank: 3, record: "2-3" },
            { name: "New York Knicks", logo: "../images/knicks.png", conference: "East", division: "Atlantic", conferenceRank: 5, divisionRank: 2, record: "2-2" },
            { name: "Philadelphia 76ers", logo: "../images/76ers.png", conference: "East", division: "Atlantic", conferenceRank: 12, divisionRank: 4, record: "1-3" },
            { name: "Toronto Raptors", logo: "../images/raptors.png", conference: "East", division: "Atlantic", conferenceRank: 13, divisionRank: 5, record: "1-4" },
            { name: "Chicago Bulls", logo: "../images/bulls.png", conference: "East", division: "Central", conferenceRank: 3, divisionRank: 2, record: "3-2"},
            { name: "Cleveland Caveliers", logo: "../images/cavaliers.png", conference: "East", division: "Central", conferenceRank: 1, divisionRank: 1, record: "5-0"},
            { name: "Detroit Pistons", logo: "../images/pistons.png", conference: "East", division: "Central", conferenceRank: 15, divisionRank: 5, record: "1-4"},
            { name: "Indiana Pacers", logo: "../images/pacers.png", conference: "East", division: "Central", conferenceRank: 10, divisionRank: 3, record: "2-3"},
            { name: "Milwaukee Bucks", logo: "../images/bucks.png", conference: "East", division: "Central", conferenceRank: 14, divisionRank: 4, record: "1-4"},
            { name: "Atlanta Hawks", logo: "../images/hawks.png", conference: "East", division: "Southeast", conferenceRank: 9, divisionRank: 5, record: "2-3"},
            { name: "Charlotte Hornets", logo: "../images/hornets.png", conference: "East", division: "Southeast", conferenceRank: 8, divisionRank: 4, record: "2-2"},
            { name: "Miami Heat", logo: "../images/heat.png", conference: "East", division: "Southeast", conferenceRank: 6, divisionRank: 2, record: "2-2"},
            { name: "Orlando Magic", logo: "../images/magic.png", conference: "East", division: "Southeast", conferenceRank: 4, divisionRank: 1, record: "3-2"},
            { name: "Washington Wizards", logo: "../images/wizards.png", conference: "East", division: "Southeast", conferenceRank: 7, divisionRank: 3, record: "2-2"},
            { name: "Denver Nuggets", logo: "../images/nuggets.png", conference: "West", division: "Northwest", conferenceRank: 10, divisionRank: 3, record: "2-2"},
            { name: "Minnesota Timberwolves", logo: "../images/timberwolves.png", conference: "West", division: "Northwest", conferenceRank: 8, divisionRank: 2, record: "2-2"},
            { name: "Oklahoma City Thunder", logo: "../images/thunder.png", conference: "West", division: "Northwest", conferenceRank: 1, divisionRank: 1, record: "4-0"},
            { name: "Portland Trail Blazers", logo: "../images/blazers.png", conference: "West", division: "Northwest", conferenceRank: 11, divisionRank: 4, record: "2-3"},
            { name: "Utah Jazz", logo: "../images/jazz.png", conference: "West", division: "Northwest", conferenceRank: 15, divisionRank: 5, record: "0-5"},
            { name: "Golden State Warriors", logo: "../images/warriors.png", conference: "West", division: "Pacific", conferenceRank: 3, divisionRank: 2, record: "4-1"},
            { name: "LA Clippers", logo: "../images/clippers.png", conference: "West", division: "Pacific", conferenceRank: 13, divisionRank: 5, record: "2-3"},
            { name: "Los Angeles Lakers", logo: "../images/lakers.png", conference: "West", division: "Pacific", conferenceRank: 5, divisionRank: 3, record: "3-2"},
            { name: "Phoenix Suns", logo: "../images/suns.png", conference: "West", division: "Pacific", conferenceRank: 2, divisionRank: 1, record: "4-1"},
            { name: "Sacramento Kings", logo: "../images/kings.png", conference: "West", division: "Pacific", conferenceRank: 9, divisionRank: 4, record: "2-2"},
            { name: "Dallas Mavericks", logo: "../images/mavericks.png", conference: "West", division: "Southwest", conferenceRank: 6, divisionRank: 2, record: "3-2"},
            { name: "Houston Rockets", logo: "../images/rockets.png", conference: "West", division: "Southwest", conferenceRank: 4, divisionRank: 1, record: "3-2"},
            { name: "Memphis Grizzlies", logo: "../images/grizzlies.png", conference: "West", division: "Southwest", conferenceRank: 7, divisionRank: 3, record: "3-3"},
            { name: "New Orleans Pelicans", logo: "../images/pelicans.png", conference: "West", division: "Southwest", conferenceRank: 12, divisionRank: 4, record: "2-3"},
            { name: "San Antonio Spurs", logo: "../images/spurs.png", conference: "West", division: "Southwest", conferenceRank: 14, divisionRank: 5, record: "2-3"}
];

// NFL Teams
const nflTeams = [
        // AFC 
    
    { name: "Buffalo Bills", logo: "../images/bills.png", conference: "AFC", division: "AFC East", conferenceRank: 3, divisionRank: 1, record: "6-2" },
    { name: "New York Jets", logo: "../images/jets.png", conference: "AFC", division: "AFC East", conferenceRank: 10, divisionRank: 2, record: "3-6" },
    { name: "Miami Dolphins", logo: "../images/dolphins.png", conference: "AFC", division: "AFC East", conferenceRank: 11, divisionRank: 3, record: "2-5" },
    { name: "New England Patriots", logo: "../images/patriots.png", conference: "AFC", division: "AFC East", conferenceRank: 15, divisionRank: 4, record: "2-6" },

    { name: "Pittsburgh Steelers", logo: "../images/steelers.png", conference: "AFC", division: "AFC North", conferenceRank: 2, divisionRank: 1, record: "6-2" },
    { name: "Baltimore Ravens", logo: "../images/ravens.png", conference: "AFC", division: "AFC North", conferenceRank: 6, divisionRank: 2, record: "5-3" },
    { name: "Cincinnati Bengals", logo: "../images/bengals.png", conference: "AFC", division: "AFC North", conferenceRank: 9, divisionRank: 3, record: "3-5" },
    { name: "Cleveland Browns", logo: "../images/browns.png", conference: "AFC", division: "AFC North", conferenceRank: 12, divisionRank: 4, record: "2-6" },
    

    { name: "Houston Texans", logo: "../images/texans.png", conference: "AFC", division: "AFC South", conferenceRank: 4, divisionRank: 1, record: "6-3" },
    { name: "Indianapolis Colts", logo: "../images/colts.png", conference: "AFC", division: "AFC South", conferenceRank: 8, divisionRank: 2, record: "4-4" },
    { name: "Jacksonville Jaguars", logo: "../images/jaguars.png", conference: "AFC", division: "AFC South", conferenceRank: 14, divisionRank: 3, record: "2-6" },
    { name: "Tennessee Titans", logo: "../images/titans.png", conference: "AFC", division: "AFC South", conferenceRank: 16, divisionRank: 4, record: "1-6" },



    { name: "Kansas City Chiefs", logo: "../images/chiefs.png", conference: "AFC", division: "AFC West", conferenceRank: 1, divisionRank: 1, record: "7-0" },
    { name: "Denver Broncos", logo: "../images/broncos.png", conference: "AFC", division: "AFC West", conferenceRank: 5, divisionRank: 2, record: "5-3" },
    { name: "Los Angeles Chargers", logo: "../images/chargers.png", conference: "AFC", division: "AFC West", conferenceRank: 7, divisionRank: 3, record: "4-3" },
    { name: "Las Vegas Raiders", logo: "../images/raiders.png", conference: "AFC", division: "AFC West", conferenceRank: 13, divisionRank: 4, record: "2-6" },

    // NFC

    { name: "Washington Commanders", logo: "../images/commanders.png", conference: "NFC", division: "NFC East", conferenceRank: 2, divisionRank: 1, record: "6-2" },
    { name: "Philadelphia Eagles", logo: "../images/eagles.png", conference: "NFC", division: "NFC East", conferenceRank: 7, divisionRank: 2, record: "5-2" },
    { name: "Dallas Cowboys", logo: "../images/cowboys.png", conference: "NFC", division: "NFC East", conferenceRank: 13, divisionRank: 3, record: "3-4" },
    { name: "New York Giants", logo: "../images/giants.png", conference: "NFC", division: "NFC East", conferenceRank: 15, divisionRank: 4, record: "2-6" },



    { name: "Detroit Lions", logo: "../images/lions.png", conference: "NFC", division: "NFC North", conferenceRank: 1, divisionRank: 1, record: "6-1" },
    { name: "Green Bay Packers", logo: "../images/packers.png", conference: "NFC", division: "NFC North", conferenceRank: 5, divisionRank: 2, record: "6-2" },
    { name: "Minnesota Vikings", logo: "../images/vikings.png", conference: "NFC", division: "NFC North", conferenceRank: 6, divisionRank: 3, record: "5-2" },
    { name: "Chicago Bears", logo: "../images/bears.png", conference: "NFC", division: "NFC North", conferenceRank: 8, divisionRank: 4, record: "4-3" },


    { name: "Atlanta Falcons", logo: "../images/falcons.png", conference: "NFC", division: "NFC South", conferenceRank: 3, divisionRank: 1, record: "5-3" },
    { name: "Tampa Bay Buccaneers", logo: "../images/bucs.png", conference: "NFC", division: "NFC South", conferenceRank: 9, divisionRank: 2, record: "4-4" },
    { name: "New Orleans Saints", logo: "../images/saints.png", conference: "NFC", division: "NFC South", conferenceRank: 14, divisionRank: 3, record: "2-6" },
    { name: "Carolina Panthers", logo: "../images/panthers.png", conference: "NFC", division: "NFC South", conferenceRank: 16, divisionRank: 4, record: "1-7" },


    { name: "Arizona Cardinals", logo: "../images/cards.png", conference: "NFC", division: "NFC West", conferenceRank: 4, divisionRank: 1, record: "4-4" },
    { name: "San Francisco 49ers", logo: "../images/49ers.png", conference: "NFC", division: "NFC West", conferenceRank: 10, divisionRank: 2, record: "4-4" },
    { name: "Seattle Seahawks", logo: "../images/seahawks.png", conference: "NFC", division: "NFC West", conferenceRank: 11, divisionRank: 3, record: "4-4" },
    { name: "Los Angeles Rams", logo: "../images/rams.png", conference: "NFC", division: "NFC West", conferenceRank: 12, divisionRank: 4, record: "3-4" },

];

// MLB Teams
const mlbTeams = [


    { name: "Chicago White Sox", logo: "../images/whitesox.png", league: "AL", division: "AL Central", leagueRank: 15, divisionRank: 5, record: "41-121" },
    { name: "Cleveland Guardians", logo: "../images/guardians.png", league: "AL", division: "AL Central", leagueRank: 2, divisionRank: 1, record: "92-69" },
    { name: "Detroit Tigers", logo: "../images/tigers.png", league: "AL", division: "AL Central", leagueRank: 6, divisionRank: 3, record: "86-76" },
    { name: "Kansas City Royals", logo: "../images/royals.png", league: "AL", division: "AL Central", leagueRank: 5, divisionRank: 2, record: "86-76" },
    { name: "Minnesota Twins", logo: "../images/twins.png", league: "AL", division: "AL Central", leagueRank: 8, divisionRank: 4, record: "82-80" },


    { name: "Baltimore Orioles", logo: "../images/orioles.png", league: "AL", division: "AL East", leagueRank: 3, divisionRank: 2, record: "91-71" },
    { name: "Boston Red Sox", logo: "../images/redsox.png", league: "AL", division: "AL East", leagueRank: 9, divisionRank: 3, record: "81-81" },
    { name: "New York Yankees", logo: "../images/yankees.png", league: "AL", division: "AL East", leagueRank: 1, divisionRank: 1, record: "94-68" },
    { name: "Tampa Bay Rays", logo: "../images/rays.png", league: "AL", division: "AL East", leagueRank: 10, divisionRank: 4, record: "80-82" },
    { name: "Toronto Blue Jays", logo: "../images/jays.png", league: "AL", division: "AL East", leagueRank: 12, divisionRank: 5, record: "74-88" },

    { name: "Houston Astros", logo: "../images/astros.png", league: "AL", division: "AL West", leagueRank: 4, divisionRank: 1, record: "88-73" },
    { name: "Los Angeles Angels", logo: "../images/angels.png", league: "AL", division: "AL West", leagueRank: 14, divisionRank: 5, record: "63-99" },
    { name: "Oakland Athletics", logo: "../images/athletics.png", league: "AL", division: "AL West", leagueRank: 13, divisionRank: 4, record: "69-93" },
    { name: "Seattle Mariners", logo: "../images/mariners.png", league: "AL", division: "AL West", leagueRank: 7, divisionRank: 2, record: "85-77" },
    { name: "Texas Rangers", logo: "../images/rangers.png", league: "AL", division: "AL West", leagueRank: 11, divisionRank: 3, record: "78-84" },


    { name: "Chicago Cubs", logo: "../images/cubs.png", league: "NL", division: "NL Central", leagueRank: 9, divisionRank: 3, record: "83-79" },
    { name: "Cincinnati Reds", logo: "../images/reds.png", league: "NL", division: "NL Central", leagueRank: 11, divisionRank: 4, record: "77-85" },
    { name: "Milwaukee Brewers", logo: "../images/brewers.png", league: "NL", division: "NL Central", leagueRank: 3, divisionRank: 1, record: "93-69" },
    { name: "Pittsburgh Pirates", logo: "../images/pirates.png", league: "NL", division: "NL Central", leagueRank: 12, divisionRank: 5, record: "76-86" },
    { name: "St. Louis Cardinals", logo: "../images/cardinals.png", league: "NL", division: "NL Central", leagueRank: 8, divisionRank: 2, record: "83-79" },

    { name: "Atlanta Braves", logo: "../images/braves.png", league: "NL", division: "NL East", leagueRank: 5, divisionRank: 2, record: "89-73" },
    { name: "Miami Marlins", logo: "../images/marlins.png", league: "NL", division: "NL East", leagueRank: 14, divisionRank: 5, record: "62-100" },
    { name: "New York Mets", logo: "../images/mets.png", league: "NL", division: "NL East", leagueRank: 6, divisionRank: 3, record: "89-73" },
    { name: "Philadelphia Phillies", logo: "../images/phillies.png", league: "NL", division: "NL East", leagueRank: 2, divisionRank: 1, record: "95-67" },
    { name: "Washington Nationals", logo: "../images/nationals.png", league: "NL", division: "NL East", leagueRank: 13, divisionRank: 4, record: "71-91" },



    { name: "Arizona Diamondbacks", logo: "../images/diamondbacks.png", league: "NL", division: "NL West", leagueRank: 7, divisionRank: 3, record: "89-73" },
    { name: "Colorado Rockies", logo: "../images/rockies.png", league: "NL", division: "NL West", leagueRank: 15, divisionRank: 5, record: "61-101" },
    { name: "Los Angeles Dodgers", logo: "../images/dodgers.png", league: "NL", division: "NL West", leagueRank: 1, divisionRank: 1, record: "98-64" },
    { name: "San Diego Padres", logo: "../images/padres.png", league: "NL", division: "NL West", leagueRank: 4, divisionRank: 2, record: "93-69" },
    { name: "San Francisco Giants", logo: "../images/giant.png", league: "NL", division: "NL West", leagueRank: 10, divisionRank: 4, record: "80-82" },

];

// Soccer Teams 
// const soccerTeams = [
//     { name: "Real Madrid", logo: "../images/realmadrid.png", league: "UEFA", group: "A", leagueRank: 1, groupRank: 1, record: "5-0-1" },
//     { name: "Manchester City", logo: "../images/mancity.png", league: "UEFA", group: "B", leagueRank: 1, groupRank: 1, record: "6-0-0" },
   
// ];
