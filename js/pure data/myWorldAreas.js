function AreaNameParser(id_from_client_file) {
    return myWorldAreas.get(id_from_client_file) || id_from_client_file;
}

const myWorldAreas = new Map([
    [
        "NULL",
        "NULL"
    ],
    [
        "CharacterSelect",
        "Character Select"
    ],
    [
        "PersonalHideout",
        "Your Hideout"
    ],
    [
        "GuildHideout__",
        "Your Guild Hideout"
    ],
    [
        "1_1_town",
        "Lioneye's Watch"
    ],
    [
        "1_1_1",
        "The Twilight Strand"
    ],
    [
        "1_1_2",
        "The Coast"
    ],
    [
        "1_1_2a",
        "The Tidal Island"
    ],
    [
        "1_1_3",
        "The Mud Flats"
    ],
    [
        "1_1_3a",
        "The Fetid Pool"
    ],
    [
        "1_1_4_0",
        "The Flooded Depths"
    ],
    [
        "1_1_4_1",
        "The Submerged Passage"
    ],
    [
        "1_1_5",
        "The Ledge"
    ],
    [
        "1_1_6",
        "The Climb"
    ],
    [
        "1_1_7_1",
        "The Lower Prison"
    ],
    [
        "1_1_7_2",
        "The Upper Prison"
    ],
    [
        "1_1_8",
        "Prisoner's Gate"
    ],
    [
        "1_1_9",
        "The Ship Graveyard"
    ],
    [
        "1_1_9a",
        "The Ship Graveyard Cave"
    ],
    [
        "1_1_11_1",
        "The Cavern of Wrath"
    ],
    [
        "1_1_11_2",
        "The Cavern of Anger"
    ],
    [
        "1_2_town",
        "The Forest Encampment"
    ],
    [
        "1_2_1",
        "The Southern Forest"
    ],
    [
        "1_2_2",
        "The Old Fields"
    ],
    [
        "1_2_2a",
        "The Den"
    ],
    [
        "1_2_3",
        "The Crossroads"
    ],
    [
        "1_2_5_1",
        "The Crypt Level 1"
    ],
    [
        "1_2_5_2",
        "The Crypt Level 2"
    ],
    [
        "1_2_6_1",
        "The Chamber of Sins Level 1"
    ],
    [
        "1_2_6_2",
        "The Chamber of Sins Level 2"
    ],
    [
        "1_2_4",
        "The Broken Bridge"
    ],
    [
        "1_2_7",
        "The Riverways"
    ],
    [
        "1_2_8",
        "The Northern Forest"
    ],
    [
        "1_2_9",
        "The Western Forest"
    ],
    [
        "1_2_10",
        "The Weaver's Chambers"
    ],
    [
        "1_2_11",
        "The Vaal Ruins"
    ],
    [
        "1_2_12",
        "The Wetlands"
    ],
    [
        "1_2_13",
        "The Dread Thicket"
    ],
    [
        "1_2_14_2",
        "The Caverns"
    ],
    [
        "1_2_14_3",
        "The Ancient Pyramid"
    ],
    [
        "1_2_15",
        "The Fellshrine Ruins"
    ],
    [
        "1_3_town",
        "The Sarn Encampment"
    ],
    [
        "1_3_1",
        "The City of Sarn"
    ],
    [
        "1_3_2",
        "The Slums"
    ],
    [
        "1_3_3_1",
        "The Crematorium"
    ],
    [
        "1_3_5",
        "The Marketplace"
    ],
    [
        "1_3_6",
        "The Catacombs"
    ],
    [
        "1_3_7",
        "The Battlefront"
    ],
    [
        "1_3_8_1",
        "The Solaris Temple Level 1"
    ],
    [
        "1_3_8_2",
        "The Solaris Temple Level 2"
    ],
    [
        "1_3_9",
        "The Docks"
    ],
    [
        "1_3_10_1",
        "The Sewers"
    ],
    [
        "1_3_13",
        "The Ebony Barracks"
    ],
    [
        "1_3_14_1",
        "The Lunaris Temple Level 1"
    ],
    [
        "1_3_14_2",
        "The Lunaris Temple Level 2"
    ],
    [
        "1_3_15",
        "The Imperial Gardens"
    ],
    [
        "1_3_17_1",
        "The Library"
    ],
    [
        "1_3_17_2",
        "The Archives"
    ],
    [
        "1_3_18_1",
        "The Sceptre of God"
    ],
    [
        "1_3_18_2",
        "The Upper Sceptre of God"
    ],
    [
        "1_4_town",
        "Highgate"
    ],
    [
        "1_4_1",
        "The Aqueduct"
    ],
    [
        "1_4_2",
        "The Dried Lake"
    ],
    [
        "1_4_3_1",
        "The Mines Level 1"
    ],
    [
        "1_4_3_2",
        "The Mines Level 2"
    ],
    [
        "1_4_3_3",
        "The Crystal Veins"
    ],
    [
        "1_4_4_1",
        "Kaom's Dream"
    ],
    [
        "1_4_4_3",
        "Kaom's Stronghold"
    ],
    [
        "1_4_5_1",
        "Daresso's Dream"
    ],
    [
        "1_4_5_2",
        "The Grand Arena"
    ],
    [
        "1_4_6_1",
        "The Belly of the Beast Level 1"
    ],
    [
        "1_4_6_2",
        "The Belly of the Beast Level 2"
    ],
    [
        "1_4_6_3",
        "The Harvest"
    ],
    [
        "1_4_7",
        "The Ascent"
    ],
    [
        "1_5_1",
        "The Slave Pens"
    ],
    [
        "1_5_town",
        "Overseer's Tower"
    ],
    [
        "1_5_2",
        "The Control Blocks"
    ],
    [
        "1_5_3",
        "Oriath Square"
    ],
    [
        "1_5_3b",
        "The Ruined Square"
    ],
    [
        "1_5_4",
        "The Templar Courts"
    ],
    [
        "1_5_4b",
        "The Torched Courts"
    ],
    [
        "1_5_5",
        "The Chamber of Innocence"
    ],
    [
        "1_5_6",
        "The Ossuary"
    ],
    [
        "1_5_7",
        "The Reliquary"
    ],
    [
        "1_5_8",
        "The Cathedral Rooftop"
    ],
    [
        "2_6_town",
        "Lioneye's Watch"
    ],
    [
        "2_6_1",
        "The Twilight Strand"
    ],
    [
        "2_6_2",
        "The Coast"
    ],
    [
        "2_6_3",
        "The Tidal Island"
    ],
    [
        "2_6_4",
        "The Mud Flats"
    ],
    [
        "2_6_5",
        "The Karui Fortress"
    ],
    [
        "2_6_6",
        "The Ridge"
    ],
    [
        "2_6_7_1",
        "The Lower Prison"
    ],
    [
        "2_6_7_2",
        "Shavronne's Tower"
    ],
    [
        "2_6_8",
        "Prisoner's Gate"
    ],
    [
        "2_6_9",
        "The Western Forest"
    ],
    [
        "2_6_10",
        "The Riverways"
    ],
    [
        "2_6_11",
        "The Wetlands"
    ],
    [
        "2_6_12",
        "The Southern Forest"
    ],
    [
        "2_6_13",
        "The Cavern of Anger"
    ],
    [
        "2_6_14",
        "The Beacon"
    ],
    [
        "2_6_15",
        "The Brine King's Reef"
    ],
    [
        "2_7_town",
        "The Bridge Encampment"
    ],
    [
        "2_7_1",
        "The Broken Bridge"
    ],
    [
        "2_7_2",
        "The Crossroads"
    ],
    [
        "2_7_3",
        "The Fellshrine Ruins"
    ],
    [
        "2_7_4",
        "The Crypt"
    ],
    [
        "2_7_5_1",
        "The Chamber of Sins Level 1"
    ],
    [
        "2_7_5_2",
        "The Chamber of Sins Level 2"
    ],
    [
        "2_7_5_map",
        "Maligaro's Sanctum"
    ],
    [
        "2_7_6",
        "The Den"
    ],
    [
        "2_7_7",
        "The Ashen Fields"
    ],
    [
        "2_7_8",
        "The Northern Forest"
    ],
    [
        "2_7_9",
        "The Dread Thicket"
    ],
    [
        "2_7_10",
        "The Causeway"
    ],
    [
        "2_7_11",
        "The Vaal City"
    ],
    [
        "2_7_12_1",
        "The Temple of Decay Level 1"
    ],
    [
        "2_7_12_2",
        "The Temple of Decay Level 2"
    ],
    [
        "2_8_1",
        "The Sarn Ramparts"
    ],
    [
        "2_8_town",
        "The Sarn Encampment"
    ],
    [
        "2_8_2_1",
        "The Toxic Conduits"
    ],
    [
        "2_8_2_2",
        "Doedre's Cesspool"
    ],
    [
        "2_8_3",
        "The Grand Promenade"
    ],
    [
        "2_8_4",
        "The High Gardens"
    ],
    [
        "2_8_5",
        "The Bath House"
    ],
    [
        "2_8_6",
        "The Lunaris Concourse"
    ],
    [
        "2_8_7_1_",
        "The Lunaris Temple Level 1"
    ],
    [
        "2_8_7_2",
        "The Lunaris Temple Level 2"
    ],
    [
        "2_8_8",
        "The Quay"
    ],
    [
        "2_8_9",
        "The Grain Gate"
    ],
    [
        "2_8_10",
        "The Imperial Fields"
    ],
    [
        "2_8_11",
        "The Solaris Concourse"
    ],
    [
        "2_8_12_1",
        "The Solaris Temple Level 1"
    ],
    [
        "2_8_12_2",
        "The Solaris Temple Level 2"
    ],
    [
        "2_8_13",
        "The Harbour Bridge"
    ],
    [
        "2_8_14",
        "The Hidden Underbelly"
    ],
    [
        "2_9_1",
        "The Blood Aqueduct"
    ],
    [
        "2_9_town",
        "Highgate"
    ],
    [
        "2_9_2",
        "The Descent"
    ],
    [
        "2_9_3",
        "The Vastiri Desert"
    ],
    [
        "2_9_4",
        "The Oasis"
    ],
    [
        "2_9_5",
        "The Foothills"
    ],
    [
        "2_9_6",
        "The Boiling Lake"
    ],
    [
        "2_9_7",
        "The Tunnel"
    ],
    [
        "2_9_8",
        "The Quarry"
    ],
    [
        "2_9_9",
        "The Refinery"
    ],
    [
        "2_9_SubareaRefinery",
        "Refinery Tunnels"
    ],
    [
        "2_9_10_1",
        "The Belly of the Beast"
    ],
    [
        "2_9_10_2",
        "The Rotting Core"
    ],
    [
        "2_10_town",
        "Oriath Docks"
    ],
    [
        "2_10_1",
        "The Cathedral Rooftop"
    ],
    [
        "2_10_2",
        "The Ravaged Square"
    ],
    [
        "2_10_3",
        "The Torched Courts"
    ],
    [
        "2_10_4",
        "The Desecrated Chambers"
    ],
    [
        "2_10_5",
        "The Canals"
    ],
    [
        "2_10_6",
        "The Feeding Trough"
    ],
    [
        "2_10_7",
        "The Control Blocks"
    ],
    [
        "2_10_8",
        "The Reliquary"
    ],
    [
        "2_10_9",
        "The Ossuary"
    ],
    [
        "2_11_town",
        "Oriath"
    ],
    [
        "2_11_lab",
        "The Templar Laboratory"
    ],
    [
        "2_11_lab_trailer",
        "The Templar Laboratory"
    ],
    [
        "2_11_atlas",
        "The Atlas of Worlds"
    ],
    [
        "2_11_1",
        "The Fallen Courts"
    ],
    [
        "2_11_1_courts",
        "The Fallen Courts"
    ],
    [
        "2_11_2",
        "The Haunted Reliquary"
    ],
    [
        "2_11_reliquary",
        "The Haunted Reliquary"
    ],
    [
        "2_11_endgame_town",
        "Karui Shores"
    ],
    [
        "3_3_8_4",
        "The Eternal Laboratory"
    ],
    [
        "1_SideArea1_1",
        "Strange Sinkhole"
    ],
    [
        "1_SideArea1_2",
        "Concealed Cavity"
    ],
    [
        "1_SideArea1_3",
        "Sunken Shingle"
    ],
    [
        "1_SideArea1_4_",
        "Clouded Ridge"
    ],
    [
        "1_SideArea1_5",
        "Forgotten Oubliette"
    ],
    [
        "1_SideArea1_6",
        "Remote Gulch"
    ],
    [
        "1_SideArea2_1",
        "Narrow Ravine"
    ],
    [
        "1_SideArea2_2",
        "Mystical Clearing"
    ],
    [
        "1_SideArea2_3",
        "Covered-up Hollow"
    ],
    [
        "1_SideArea2_4",
        "Hidden Patch"
    ],
    [
        "1_SideArea2_5",
        "Entombed Alcove"
    ],
    [
        "1_SideArea2_6",
        "Secret Laboratory"
    ],
    [
        "1_SideArea2_7",
        "Secluded Copse"
    ],
    [
        "1_SideArea2_8",
        "Forbidden Chamber"
    ],
    [
        "1_SideArea3_1",
        "Quarantined Quarters"
    ],
    [
        "1_SideArea3_2",
        "Disused Furnace"
    ],
    [
        "1_SideArea3_3",
        "Blind Alley"
    ],
    [
        "1_SideArea3_4",
        "Entombed Chamber"
    ],
    [
        "1_SideArea3_5",
        "Sacred Chambers"
    ],
    [
        "1_SideArea3_6",
        "Stagnant Canal"
    ],
    [
        "1_SideArea3_7",
        "Walled-off Ducts"
    ],
    [
        "1_SideArea3_8",
        "Neglected Cellar"
    ],
    [
        "1_SideArea3_9_",
        "Arcane Chambers"
    ],
    [
        "1_SideArea3_10",
        "Inner Grounds"
    ],
    [
        "1_SideArea3_11",
        "Sealed Corridors"
    ],
    [
        "1_SideArea3_12",
        "Restricted Gallery"
    ],
    [
        "1_SideArea4_1",
        "Forgotten Conduit"
    ],
    [
        "1_SideArea4_2",
        "Ancient Catacomb"
    ],
    [
        "1_SideArea4_3",
        "Haunted Mineshaft"
    ],
    [
        "1_SideArea4_4",
        "Abandoned Dam"
    ],
    [
        "1_SideArea4_7",
        "Desolate Track"
    ],
    [
        "1_SideArea5_2",
        "Reclaimed Barracks"
    ],
    [
        "1_SideArea5_3_1",
        "Sealed Basement"
    ],
    [
        "1_SideArea5_3_2",
        "Secluded Canal"
    ],
    [
        "1_SideArea5_4",
        "Forbidden Archives"
    ],
    [
        "1_SideArea5_4b",
        "Cremated Archives"
    ],
    [
        "1_SideArea5_5",
        "Twisted Inquisitorium"
    ],
    [
        "1_SideArea5_6",
        "Deathly Chambers"
    ],
    [
        "1_SideArea5_7",
        "Restricted Collection"
    ],
    [
        "1_SideArea5_8",
        "Side Chapel"
    ],
    [
        "1_SideArea6_4",
        "Radiant Pools"
    ],
    [
        "1_SideArea6_6",
        "Clouded Ledge"
    ],
    [
        "1_SideArea7_4",
        "Sealed Repository"
    ],
    [
        "1_SideArea7_10",
        "Flooded Complex"
    ],
    [
        "1_SideArea7_12",
        "Forbidden Shrine"
    ],
    [
        "1_SideArea8_3",
        "Evacuated Quarter"
    ],
    [
        "1_SideArea8_5",
        "Concealed Caldarium"
    ],
    [
        "1_SideArea8_7",
        "Moonlit Chambers"
    ],
    [
        "1_SideArea9_3",
        "Shifting Sands"
    ],
    [
        "1_SideArea9_5",
        "Forgotten Gulch"
    ],
    [
        "1_SideArea9_6",
        "Desolate Isle"
    ],
    [
        "1_SideArea9_9",
        "Dusty Bluff"
    ],
    [
        "1_SideArea10_3",
        "Cremated Archives"
    ],
    [
        "MapSideArea1_1",
        "Strange Sinkhole"
    ],
    [
        "MapSideArea1_2",
        "Concealed Cavity"
    ],
    [
        "MapSideArea1_3",
        "Sunken Shingle"
    ],
    [
        "MapSideArea1_4",
        "Clouded Ridge"
    ],
    [
        "MapSideArea1_5",
        "Forgotten Oubliette"
    ],
    [
        "MapSideArea1_6",
        "Remote Gulch"
    ],
    [
        "MapSideArea2_1",
        "Narrow Ravine"
    ],
    [
        "MapSideArea2_2",
        "Mystical Clearing"
    ],
    [
        "MapSideArea2_3",
        "Covered-up Hollow"
    ],
    [
        "MapSideArea2_4",
        "Hidden Patch"
    ],
    [
        "MapSideArea2_5",
        "Entombed Alcove"
    ],
    [
        "MapSideArea2_6",
        "Secret Laboratory"
    ],
    [
        "MapSideArea2_7",
        "Secluded Copse"
    ],
    [
        "MapSideArea2_8",
        "Forbidden Chamber"
    ],
    [
        "MapSideArea3_1",
        "Quarantined Quarters"
    ],
    [
        "MapSideArea3_2",
        "Disused Furnace"
    ],
    [
        "MapSideArea3_3",
        "Blind Alley"
    ],
    [
        "MapSideArea3_4",
        "Entombed Chamber"
    ],
    [
        "MapSideArea3_5",
        "Sacred Chambers"
    ],
    [
        "MapSideArea3_6",
        "Stagnant Canal"
    ],
    [
        "MapSideArea3_7",
        "Walled-off Ducts"
    ],
    [
        "MapSideArea3_8",
        "Neglected Cellar"
    ],
    [
        "MapSideArea3_9",
        "Arcane Chambers"
    ],
    [
        "MapSideArea3_10",
        "Inner Grounds"
    ],
    [
        "MapSideArea3_11",
        "Sealed Corridors"
    ],
    [
        "MapSideArea3_12",
        "Restricted Gallery"
    ],
    [
        "MapSideArea4_1",
        "Forgotten Conduit"
    ],
    [
        "MapSideArea4_2",
        "Ancient Catacomb"
    ],
    [
        "MapSideArea4_3",
        "Haunted Mineshaft"
    ],
    [
        "MapSideArea4_4",
        "Abandoned Dam"
    ],
    [
        "MapSideArea4_7",
        "Desolate Track"
    ],
    [
        "MapSideArea5_2",
        "Reclaimed Barracks"
    ],
    [
        "MapSideArea5_3_1",
        "Sealed Basement"
    ],
    [
        "MapSideArea5_3_2",
        "Secluded Canal"
    ],
    [
        "MapSideArea5_4",
        "Forbidden Archives"
    ],
    [
        "MapSideArea5_4b",
        "Cremated Archives"
    ],
    [
        "MapSideArea5_5",
        "Twisted Inquisitorium"
    ],
    [
        "MapSideArea5_6",
        "Deathly Chambers"
    ],
    [
        "MapSideArea5_7",
        "Restricted Collection"
    ],
    [
        "MapSideArea5_8",
        "Side Chapel"
    ],
    [
        "MapSideArea6_4",
        "Radiant Pools"
    ],
    [
        "MapSideArea6_6",
        "Clouded Ledge"
    ],
    [
        "MapSideArea7_4",
        "Sealed Repository"
    ],
    [
        "MapSideArea7_10",
        "Flooded Complex"
    ],
    [
        "MapSideArea7_12",
        "Forbidden Shrine"
    ],
    [
        "MapSideArea8_3",
        "Evacuated Quarter"
    ],
    [
        "MapSideArea8_5",
        "Concealed Caldarium"
    ],
    [
        "MapSideArea8_7",
        "Moonlit Chambers"
    ],
    [
        "MapSideArea9_3",
        "Shifting Sands"
    ],
    [
        "MapSideArea9_5",
        "Forgotten Gulch"
    ],
    [
        "MapSideArea9_6",
        "Desolate Isle"
    ],
    [
        "MapSideArea9_9",
        "Dusty Bluff"
    ],
    [
        "MapSideArea10_3",
        "Cremated Archives"
    ],
    [
        "MapSideAreaIceValley",
        "Isolated Sound"
    ],
    [
        "MapSideAreaLavaTunnel",
        "Suffocating Fissure"
    ],
    [
        "MapSideAreaIceForest",
        "Frozen Springs"
    ],
    [
        "3_TalismanBoss",
        "Lair of the Wolven King"
    ],
    [
        "3_ProphecyBoss",
        "The Pale Court"
    ],
    [
        "3_ClassicTreasury",
        "Ancient Reliquary"
    ],
    [
        "ClassicTreasury_2",
        "Timeworn Reliquary"
    ],
    [
        "ClassicTreasury_Vaal",
        "Vaal Reliquary"
    ],
    [
        "UberVenariusVault",
        "Forgotten Reliquary"
    ],
    [
        "UberEaterOfWorldsVault",
        "Visceral Reliquary"
    ],
    [
        "UberMavenVault",
        "Shiny Reliquary"
    ],
    [
        "UberSearingExarchVault",
        "Archive Reliquary"
    ],
    [
        "UberSirusVault",
        "Oubliette Reliquary"
    ],
    [
        "UberShaperVault",
        "Cosmic Reliquary"
    ],
    [
        "UberUberElderVault",
        "Decaying Reliquary"
    ],
    [
        "ClassicTreasury_Cosmic",
        "Voidborn Reliquary"
    ],
    [
        "ZanaGauntlet",
        "[UNUSED] TEST ZANA GAUNTLET"
    ],
    [
        "Menagerie_Hub",
        "The Menagerie"
    ],
    [
        "Menagerie_Mammals",
        "Menagerie Wilds"
    ],
    [
        "Menagerie_BirdsReptiles",
        "Menagerie Sands"
    ],
    [
        "Menagerie_InsectsArachnids",
        "Menagerie Caverns"
    ],
    [
        "Menagerie_WaterCreatures",
        "Menagerie Depths"
    ],
    [
        "Incursion_Temple1",
        "The Temple of Atzoatl"
    ],
    [
        "Incursion_Temple2",
        "The Temple of Atzoatl"
    ],
    [
        "Incursion_Temple3",
        "The Temple of Atzoatl"
    ],
    [
        "Incursion_Temple4",
        "The Temple of Atzoatl"
    ],
    [
        "Incursion_Temple5",
        "The Temple of Atzoatl"
    ],
    [
        "Incursion_Temple6",
        "The Temple of Atzoatl"
    ],
    [
        "Incursion_Temple7_",
        "The Temple of Atzoatl"
    ],
    [
        "Incursion_Temple8",
        "The Temple of Atzoatl"
    ],
    [
        "Incursion_Temple9",
        "The Temple of Atzoatl"
    ],
    [
        "Incursion_Temple10",
        "The Temple of Atzoatl"
    ],
    [
        "Incursion_Room1",
        "Incursion Room"
    ],
    [
        "Incursion_Room2",
        "Incursion Room"
    ],
    [
        "Incursion_Room3",
        "Incursion Room"
    ],
    [
        "Incursion_Room4",
        "Incursion Room"
    ],
    [
        "Incursion_Room5",
        "Incursion Room"
    ],
    [
        "Incursion_Room6",
        "Incursion Room"
    ],
    [
        "Incursion_Room7",
        "Incursion Room"
    ],
    [
        "Incursion_Room8",
        "Incursion Room"
    ],
    [
        "Incursion_Room9",
        "Incursion Room"
    ],
    [
        "Incursion_Room10",
        "Incursion Room"
    ],
    [
        "Delve_Hub",
        "Azurite Mine Encampment"
    ],
    [
        "Delve_Endless",
        "Azurite Mine Encampment"
    ],
    [
        "Delve_Main",
        "Azurite Mine"
    ],
    [
        "Delve_Empty",
        "Azurite Mine"
    ],
    [
        "Delve_Mines",
        "Azurite Mine"
    ],
    [
        "Delve_Mines2",
        "Azurite Mine"
    ],
    [
        "Delve_Mines3",
        "Azurite Mine"
    ],
    [
        "Delve_Mines4",
        "Azurite Mine"
    ],
    [
        "Delve_Mines5",
        "Azurite Mine"
    ],
    [
        "Delve_Mines6",
        "Azurite Mine"
    ],
    [
        "Delve_Mines7",
        "Azurite Mine"
    ],
    [
        "Delve_Mines8",
        "Azurite Mine"
    ],
    [
        "Delve_Caverns",
        "Fungal Caverns"
    ],
    [
        "Delve_Caverns2",
        "Fungal Caverns"
    ],
    [
        "Delve_Caverns3",
        "Fungal Caverns"
    ],
    [
        "Delve_Caverns4",
        "Fungal Caverns"
    ],
    [
        "Delve_Caverns5",
        "Fungal Caverns"
    ],
    [
        "Delve_Caverns6",
        "Fungal Caverns"
    ],
    [
        "Delve_Caverns7",
        "Fungal Caverns"
    ],
    [
        "Delve_Caverns8",
        "Fungal Caverns"
    ],
    [
        "Delve_PetrifiedForest",
        "Petrified Forest"
    ],
    [
        "Delve_PetrifiedForest2",
        "Petrified Forest"
    ],
    [
        "Delve_PetrifiedForest3",
        "Petrified Forest"
    ],
    [
        "Delve_PetrifiedForest4",
        "Petrified Forest"
    ],
    [
        "Delve_PetrifiedForest5",
        "Petrified Forest"
    ],
    [
        "Delve_PetrifiedForest6",
        "Petrified Forest"
    ],
    [
        "Delve_PetrifiedForest7",
        "Petrified Forest"
    ],
    [
        "Delve_PetrifiedForest8",
        "Petrified Forest"
    ],
    [
        "Delve_AbyssalDepths",
        "Abyssal Depths"
    ],
    [
        "Delve_AbyssalDepths2",
        "Abyssal Depths"
    ],
    [
        "Delve_AbyssalDepths3",
        "Abyssal Depths"
    ],
    [
        "Delve_AbyssalDepths4",
        "Abyssal Depths"
    ],
    [
        "Delve_AbyssalDepths5",
        "Abyssal Depths"
    ],
    [
        "Delve_AbyssalDepths6",
        "Abyssal Depths"
    ],
    [
        "Delve_AbyssalDepths7",
        "Abyssal Depths"
    ],
    [
        "Delve_AbyssalDepths8",
        "Abyssal Depths"
    ],
    [
        "Delve_IceCaves",
        "Frozen Hollow"
    ],
    [
        "Delve_IceCaves2",
        "Frozen Hollow"
    ],
    [
        "Delve_IceCaves3",
        "Frozen Hollow"
    ],
    [
        "Delve_IceCaves4",
        "Frozen Hollow"
    ],
    [
        "Delve_IceCaves5",
        "Frozen Hollow"
    ],
    [
        "Delve_IceCaves6",
        "Frozen Hollow"
    ],
    [
        "Delve_IceCaves7",
        "Frozen Hollow"
    ],
    [
        "Delve_IceCaves8",
        "Frozen Hollow"
    ],
    [
        "Delve_Mantle",
        "Magma Fissure"
    ],
    [
        "Delve_Mantle2",
        "Magma Fissure"
    ],
    [
        "Delve_Mantle3",
        "Magma Fissure"
    ],
    [
        "Delve_Mantle4",
        "Magma Fissure"
    ],
    [
        "Delve_Mantle5",
        "Magma Fissure"
    ],
    [
        "Delve_Mantle6",
        "Magma Fissure"
    ],
    [
        "Delve_Mantle7",
        "Magma Fissure"
    ],
    [
        "Delve_Mantle8",
        "Magma Fissure"
    ],
    [
        "Delve_SubmergedPassage",
        "Sulphur Vents"
    ],
    [
        "Delve_SubmergedPassage2",
        "Sulphur Vents"
    ],
    [
        "Delve_SubmergedPassage3",
        "Sulphur Vents"
    ],
    [
        "Delve_SubmergedPassage4",
        "Sulphur Vents"
    ],
    [
        "Delve_SubmergedPassage5",
        "Sulphur Vents"
    ],
    [
        "Delve_SubmergedPassage6",
        "Sulphur Vents"
    ],
    [
        "Delve_SubmergedPassage7",
        "Sulphur Vents"
    ],
    [
        "Delve_SubmergedPassage8",
        "Sulphur Vents"
    ],
    [
        "Delve_VaalRuins",
        "Vaal Outpost"
    ],
    [
        "Delve_VaalRuins2",
        "Vaal Outpost"
    ],
    [
        "Delve_VaalRuins3",
        "Vaal Outpost"
    ],
    [
        "Delve_VaalRuins4",
        "Vaal Outpost"
    ],
    [
        "Delve_VaalRuins5",
        "Vaal Outpost"
    ],
    [
        "Delve_VaalRuins6",
        "Vaal Outpost"
    ],
    [
        "Delve_VaalRuins7",
        "Vaal Outpost"
    ],
    [
        "Delve_VaalRuins8",
        "Vaal Outpost"
    ],
    [
        "Delve_AbyssalCity",
        "Abyssal Span"
    ],
    [
        "Delve_AbyssalCity2",
        "Abyssal Span"
    ],
    [
        "Delve_AbyssalCity3",
        "Abyssal Span"
    ],
    [
        "Delve_AbyssalCity4",
        "Abyssal Span"
    ],
    [
        "Delve_AbyssalCity5",
        "Abyssal Span"
    ],
    [
        "Delve_AbyssalCity6",
        "Abyssal Span"
    ],
    [
        "Delve_AbyssalCity7",
        "Abyssal Span"
    ],
    [
        "Delve_AbyssalCity8",
        "Abyssal Span"
    ],
    [
        "Delve_ProtoVaalRuins",
        "Primeval Fortress"
    ],
    [
        "Delve_ProtoVaalRuins2",
        "Primeval Fortress"
    ],
    [
        "Delve_ProtoVaalRuins3",
        "Primeval Fortress"
    ],
    [
        "Delve_ProtoVaalRuins4",
        "Primeval Fortress"
    ],
    [
        "Delve_ProtoVaalRuins5",
        "Primeval Fortress"
    ],
    [
        "Delve_ProtoVaalRuins6",
        "Primeval Fortress"
    ],
    [
        "Delve_ProtoVaalRuins7",
        "Primeval Fortress"
    ],
    [
        "Delve_ProtoVaalRuins8",
        "Primeval Fortress"
    ],
    [
        "DelveBossVaal",
        "Vaal Nexus"
    ],
    [
        "DelveBossLich",
        "Abyssal Sanctum"
    ],
    [
        "DelveBossProtoVaal",
        "Primeval Citadel"
    ],
    [
        "DelveChamberVaal",
        "Vaal Ruined Chamber"
    ],
    [
        "DelveChamberProtoVaal",
        "Primeval Chamber"
    ],
    [
        "DelveChamberAbyss",
        "Abyssal Chamber"
    ],
    [
        "BetrayalStoryVault",
        "The Forbidden Vault"
    ],
    [
        "BetrayalTest",
        "Betrayal Test Encounter"
    ],
    [
        "BetrayalLaboratory1",
        "Syndicate Laboratory"
    ],
    [
        "BetrayalLaboratory2",
        "Syndicate Laboratory"
    ],
    [
        "BetrayalLaboratory3",
        "Syndicate Laboratory"
    ],
    [
        "BetrayalLaboratory4",
        "Syndicate Laboratory"
    ],
    [
        "BetrayalLaboratory5",
        "Syndicate Laboratory"
    ],
    [
        "BetrayalLaboratory6",
        "Syndicate Laboratory"
    ],
    [
        "BetrayalLaboratory7",
        "Syndicate Laboratory"
    ],
    [
        "BetrayalLaboratory8",
        "Syndicate Laboratory"
    ],
    [
        "BetrayalLaboratory9",
        "Syndicate Laboratory"
    ],
    [
        "BetrayalLaboratory10",
        "Syndicate Laboratory"
    ],
    [
        "BetrayalSafeHouseFortress",
        "Syndicate Hideout"
    ],
    [
        "BetrayalSafeHouseAssassins",
        "Syndicate Hideout"
    ],
    [
        "BetrayalSafeHouseCaravan",
        "Syndicate Hideout"
    ],
    [
        "BetrayalSafeHouseLaboratory",
        "Syndicate Hideout"
    ],
    [
        "BetrayalMastermindFight",
        "Mastermind's Lair"
    ],
    [
        "Synthesis_Main",
        "Memory Void"
    ],
    [
        "Synthesis_Main2",
        "Memory Void"
    ],
    [
        "Synthesis_Main3",
        "Memory Void"
    ],
    [
        "Synthesis_Main4",
        "Memory Void"
    ],
    [
        "Synthesis_Main5",
        "Memory Void"
    ],
    [
        "Synthesis_Main6",
        "Memory Void"
    ],
    [
        "Synthesis_Main7_",
        "Memory Void"
    ],
    [
        "Synthesis_Main8",
        "Memory Void"
    ],
    [
        "Synthesis_Main9",
        "Memory Void"
    ],
    [
        "Synthesis_Main10",
        "Memory Void"
    ],
    [
        "Synthesis_Main11",
        "Memory Void"
    ],
    [
        "Synthesis_Main12",
        "Memory Void"
    ],
    [
        "Synthesis_Single",
        "Fragmented Memory"
    ],
    [
        "Synthesis_Single2",
        "Fragmented Memory"
    ],
    [
        "Synthesis_Single3",
        "Fragmented Memory"
    ],
    [
        "Synthesis_Single4",
        "Fragmented Memory"
    ],
    [
        "Synthesis_Single5",
        "Fragmented Memory"
    ],
    [
        "Synthesis_Single6",
        "Fragmented Memory"
    ],
    [
        "Synthesis_Single7",
        "Fragmented Memory"
    ],
    [
        "Synthesis_Single8",
        "Fragmented Memory"
    ],
    [
        "Synthesis_Single9",
        "Fragmented Memory"
    ],
    [
        "Synthesis_Single10",
        "Fragmented Memory"
    ],
    [
        "Synthesis_Single11",
        "Fragmented Memory"
    ],
    [
        "Synthesis_Single12",
        "Fragmented Memory"
    ],
    [
        "Synthesis_Hub",
        "Memory Nexus"
    ],
    [
        "Synthesis_Boss",
        "Fractured Laboratory"
    ],
    [
        "Synthesis_Guardian1",
        "Distant Memory"
    ],
    [
        "Synthesis_Guardian2",
        "Distant Memory"
    ],
    [
        "Synthesis_Guardian3",
        "Distant Memory"
    ],
    [
        "Synthesis_Guardian4",
        "Distant Memory"
    ],
    [
        "Synthesis_TippingPoint",
        "Shattered Memory"
    ],
    [
        "Synthesis_MapBoss",
        "Cortex"
    ],
    [
        "Synthesis_MapGuardian1",
        "Altered Distant Memory"
    ],
    [
        "Synthesis_MapGuardian2",
        "Augmented Distant Memory"
    ],
    [
        "Synthesis_MapGuardian3",
        "Twisted Distant Memory"
    ],
    [
        "Synthesis_MapGuardian4",
        "Rewritten Distant Memory"
    ],
    [
        "Metamorphosis_Hub",
        "Tane's Laboratory"
    ],
    [
        "Labyrinth_Airlock",
        "Aspirants' Plaza"
    ],
    [
        "1_Labyrinth_AirlockClean",
        "Aspirants' Plaza"
    ],
    [
        "1_Labyrinth_C_end",
        "Sepulchre Annex"
    ],
    [
        "1_Labyrinth_C_end_bottleneck",
        "Sepulchre Annex"
    ],
    [
        "1_Labyrinth_C_straight",
        "Sepulchre Passage"
    ],
    [
        "1_Labyrinth_C_straight_bottleneck",
        "Sepulchre Passage"
    ],
    [
        "1_Labyrinth_C_branch",
        "Sepulchre Halls"
    ],
    [
        "1_Labyrinth_C_branch_bottleneck_1",
        "Sepulchre Halls"
    ],
    [
        "1_Labyrinth_C_branch_bottleneck_2",
        "Sepulchre Halls"
    ],
    [
        "1_Labyrinth_C_branch_door",
        "Sepulchre Halls"
    ],
    [
        "1_Labyrinth_C_quad",
        "Sepulchre Atrium"
    ],
    [
        "1_Labyrinth_C_quad_bottleneck",
        "Sepulchre Atrium"
    ],
    [
        "1_Labyrinth_C_quad_door",
        "Sepulchre Atrium"
    ],
    [
        "1_Labyrinth_P_end",
        "Sanitorium Annex"
    ],
    [
        "1_Labyrinth_P_end_bottleneck",
        "Sanitorium Annex"
    ],
    [
        "1_Labyrinth_P_straight",
        "Sanitorium Passage"
    ],
    [
        "1_Labyrinth_P_straight_bottleneck",
        "Sanitorium Passage"
    ],
    [
        "1_Labyrinth_P_branch",
        "Sanitorium Halls"
    ],
    [
        "1_Labyrinth_P_branch_bottleneck_1",
        "Sanitorium Halls"
    ],
    [
        "1_Labyrinth_P_branch_bottleneck_2",
        "Sanitorium Halls"
    ],
    [
        "1_Labyrinth_P_branch_door",
        "Sanitorium Halls"
    ],
    [
        "1_Labyrinth_P_quad",
        "Sanitorium Atrium"
    ],
    [
        "1_Labyrinth_P_quad_bottleneck",
        "Sanitorium Atrium"
    ],
    [
        "1_Labyrinth_P_quad_door",
        "Sanitorium Atrium"
    ],
    [
        "1_Labyrinth_EH_end",
        "Mansion Annex"
    ],
    [
        "1_Labyrinth_EH_end_bottleneck",
        "Mansion Annex"
    ],
    [
        "1_Labyrinth_EH_straight_#",
        "Mansion Passage"
    ],
    [
        "1_Labyrinth_EH_straight_bottleneck",
        "Mansion Passage"
    ],
    [
        "1_Labyrinth_EH_branch",
        "Mansion Halls"
    ],
    [
        "1_Labyrinth_EH_branch_bottleneck_1",
        "Mansion Halls"
    ],
    [
        "1_Labyrinth_EH_branch_bottleneck_2",
        "Mansion Halls"
    ],
    [
        "1_Labyrinth_EH_branch_door",
        "Mansion Halls"
    ],
    [
        "1_Labyrinth_EH_quad",
        "Mansion Atrium"
    ],
    [
        "1_Labyrinth_EH_quad_bottleneck",
        "Mansion Atrium"
    ],
    [
        "1_Labyrinth_EH_quad_door_#",
        "Mansion Atrium"
    ],
    [
        "1_Labyrinth_EH_block_branch",
        "Mansion Halls"
    ],
    [
        "1_Labyrinth_RT_end",
        "Basilica Annex"
    ],
    [
        "1_Labyrinth_RT_end_bottleneck",
        "Basilica Annex"
    ],
    [
        "1_Labyrinth_RT_straight",
        "Basilica Passage"
    ],
    [
        "1_Labyrinth_RT_straight_bottleneck",
        "Basilica Passage"
    ],
    [
        "1_Labyrinth_RT_branch",
        "Basilica Halls"
    ],
    [
        "1_Labyrinth_RT_branch_bottleneck_1",
        "Basilica Halls"
    ],
    [
        "1_Labyrinth_RT_branch_bottleneck_2",
        "Basilica Halls"
    ],
    [
        "1_Labyrinth_RT_branch_door",
        "Basilica Halls"
    ],
    [
        "1_Labyrinth_RT_quad_#",
        "Basilica Atrium"
    ],
    [
        "1_Labyrinth_RT_quad_bottleneck",
        "Basilica Atrium"
    ],
    [
        "1_Labyrinth_RT_quad_door",
        "Basilica Atrium"
    ],
    [
        "1_Labyrinth_DG_end",
        "Domain Enclosure"
    ],
    [
        "1_Labyrinth_DG_end_bottleneck_#",
        "Domain Enclosure"
    ],
    [
        "1_Labyrinth_DG_straight",
        "Domain Path"
    ],
    [
        "1_Labyrinth_DG_straight_bottleneck",
        "Domain Path"
    ],
    [
        "1_Labyrinth_DG_branch",
        "Domain Walkways"
    ],
    [
        "1_Labyrinth_DG_branch_bottleneck_1_#",
        "Domain Walkways"
    ],
    [
        "1_Labyrinth_DG_branch_bottleneck_2",
        "Domain Walkways"
    ],
    [
        "1_Labyrinth_DG_branch_door",
        "Domain Walkways"
    ],
    [
        "1_Labyrinth_DG_quad",
        "Domain Crossing"
    ],
    [
        "1_Labyrinth_DG_quad_bottleneck",
        "Domain Crossing"
    ],
    [
        "1_Labyrinth_DG_quad_door",
        "Domain Crossing"
    ],
    [
        "1_Labyrinth_OH_end",
        "Estate Enclosure"
    ],
    [
        "1_Labyrinth_OH_end_bottleneck",
        "Estate Enclosure"
    ],
    [
        "1_Labyrinth_OH_straight",
        "Estate Path"
    ],
    [
        "1_Labyrinth_OH_straight_bottleneck",
        "Estate Path"
    ],
    [
        "1_Labyrinth_OH_branch",
        "Estate Walkways"
    ],
    [
        "1_Labyrinth_OH_branch_bottleneck_1",
        "Estate Walkways"
    ],
    [
        "1_Labyrinth_OH_branch_bottleneck_2",
        "Estate Walkways"
    ],
    [
        "1_Labyrinth_OH_branch_door",
        "Estate Walkways"
    ],
    [
        "1_Labyrinth_OH_quad_#",
        "Estate Crossing"
    ],
    [
        "1_Labyrinth_OH_quad_bottleneck",
        "Estate Crossing"
    ],
    [
        "1_Labyrinth_OH_quad_door_#",
        "Estate Crossing"
    ],
    [
        "1_Labyrinth_boss_1",
        "Aspirant's Trial"
    ],
    [
        "1_Labyrinth_boss_2",
        "Aspirant's Trial"
    ],
    [
        "1_Labyrinth_boss_3",
        "Aspirant's Trial"
    ],
    [
        "1_Labyrinth_boss_1_end",
        "Aspirant's Trial"
    ],
    [
        "1_Labyrinth_boss_2_end",
        "Aspirant's Trial"
    ],
    [
        "1_Labyrinth_boss_3_end_#",
        "Aspirant's Trial"
    ],
    [
        "2_Labyrinth_C_end",
        "Sepulchre Annex"
    ],
    [
        "2_Labyrinth_C_end_bottleneck",
        "Sepulchre Annex"
    ],
    [
        "2_Labyrinth_C_straight",
        "Sepulchre Passage"
    ],
    [
        "2_Labyrinth_C_straight_bottleneck",
        "Sepulchre Passage"
    ],
    [
        "2_Labyrinth_C_branch",
        "Sepulchre Halls"
    ],
    [
        "2_Labyrinth_C_branch_bottleneck_1",
        "Sepulchre Halls"
    ],
    [
        "2_Labyrinth_C_branch_bottleneck_2",
        "Sepulchre Halls"
    ],
    [
        "2_Labyrinth_C_branch_door",
        "Sepulchre Halls"
    ],
    [
        "2_Labyrinth_C_quad",
        "Sepulchre Atrium"
    ],
    [
        "2_Labyrinth_C_quad_bottleneck",
        "Sepulchre Atrium"
    ],
    [
        "2_Labyrinth_C_quad_door",
        "Sepulchre Atrium"
    ],
    [
        "2_Labyrinth_P_end",
        "Sanitorium Annex"
    ],
    [
        "2_Labyrinth_P_end_bottleneck",
        "Sanitorium Annex"
    ],
    [
        "2_Labyrinth_P_straight",
        "Sanitorium Passage"
    ],
    [
        "2_Labyrinth_P_straight_bottleneck",
        "Sanitorium Passage"
    ],
    [
        "2_Labyrinth_P_branch",
        "Sanitorium Halls"
    ],
    [
        "2_Labyrinth_P_branch_bottleneck_1",
        "Sanitorium Halls"
    ],
    [
        "2_Labyrinth_P_branch_bottleneck_2",
        "Sanitorium Halls"
    ],
    [
        "2_Labyrinth_P_branch_door",
        "Sanitorium Halls"
    ],
    [
        "2_Labyrinth_P_quad",
        "Sanitorium Atrium"
    ],
    [
        "2_Labyrinth_P_quad_bottleneck",
        "Sanitorium Atrium"
    ],
    [
        "2_Labyrinth_P_quad_door",
        "Sanitorium Atrium"
    ],
    [
        "2_Labyrinth_EH_end",
        "Mansion Annex"
    ],
    [
        "2_Labyrinth_EH_end_bottleneck",
        "Mansion Annex"
    ],
    [
        "2_Labyrinth_EH_straight_#",
        "Mansion Passage"
    ],
    [
        "2_Labyrinth_EH_straight_bottleneck",
        "Mansion Passage"
    ],
    [
        "2_Labyrinth_EH_branch",
        "Mansion Halls"
    ],
    [
        "2_Labyrinth_EH_branch_bottleneck_1",
        "Mansion Halls"
    ],
    [
        "2_Labyrinth_EH_branch_bottleneck_2",
        "Mansion Halls"
    ],
    [
        "2_Labyrinth_EH_branch_door",
        "Mansion Halls"
    ],
    [
        "2_Labyrinth_EH_quad",
        "Mansion Atrium"
    ],
    [
        "2_Labyrinth_EH_quad_bottleneck",
        "Mansion Atrium"
    ],
    [
        "2_Labyrinth_EH_quad_door_#",
        "Mansion Atrium"
    ],
    [
        "2_Labyrinth_RT_end",
        "Basilica Annex"
    ],
    [
        "2_Labyrinth_RT_end_bottleneck",
        "Basilica Annex"
    ],
    [
        "2_Labyrinth_RT_straight",
        "Basilica Passage"
    ],
    [
        "2_Labyrinth_RT_straight_bottleneck",
        "Basilica Passage"
    ],
    [
        "2_Labyrinth_RT_branch",
        "Basilica Halls"
    ],
    [
        "2_Labyrinth_RT_branch_bottleneck_1",
        "Basilica Halls"
    ],
    [
        "2_Labyrinth_RT_branch_bottleneck_2",
        "Basilica Halls"
    ],
    [
        "2_Labyrinth_RT_branch_door",
        "Basilica Halls"
    ],
    [
        "2_Labyrinth_RT_quad_#",
        "Basilica Atrium"
    ],
    [
        "2_Labyrinth_RT_quad_bottleneck",
        "Basilica Atrium"
    ],
    [
        "2_Labyrinth_RT_quad_door",
        "Basilica Atrium"
    ],
    [
        "2_Labyrinth_DG_end",
        "Domain Enclosure"
    ],
    [
        "2_Labyrinth_DG_end_bottleneck_#",
        "Domain Enclosure"
    ],
    [
        "2_Labyrinth_DG_straight",
        "Domain Path"
    ],
    [
        "2_Labyrinth_DG_straight_bottleneck",
        "Domain Path"
    ],
    [
        "2_Labyrinth_DG_branch",
        "Domain Walkways"
    ],
    [
        "2_Labyrinth_DG_branch_bottleneck_1_#",
        "Domain Walkways"
    ],
    [
        "2_Labyrinth_DG_branch_bottleneck_2",
        "Domain Walkways"
    ],
    [
        "2_Labyrinth_DG_branch_door",
        "Domain Walkways"
    ],
    [
        "2_Labyrinth_DG_quad",
        "Domain Crossing"
    ],
    [
        "2_Labyrinth_DG_quad_bottleneck",
        "Domain Crossing"
    ],
    [
        "2_Labyrinth_DG_quad_door",
        "Domain Crossing"
    ],
    [
        "2_Labyrinth_OH_end",
        "Estate Enclosure"
    ],
    [
        "2_Labyrinth_OH_end_bottleneck",
        "Estate Enclosure"
    ],
    [
        "2_Labyrinth_OH_straight",
        "Estate Path"
    ],
    [
        "2_Labyrinth_OH_straight_bottleneck",
        "Estate Path"
    ],
    [
        "2_Labyrinth_OH_branch",
        "Estate Walkways"
    ],
    [
        "2_Labyrinth_OH_branch_bottleneck_1",
        "Estate Walkways"
    ],
    [
        "2_Labyrinth_OH_branch_bottleneck_2",
        "Estate Walkways"
    ],
    [
        "2_Labyrinth_OH_branch_door",
        "Estate Walkways"
    ],
    [
        "2_Labyrinth_OH_quad_#",
        "Estate Crossing"
    ],
    [
        "2_Labyrinth_OH_quad_bottleneck",
        "Estate Crossing"
    ],
    [
        "2_Labyrinth_OH_quad_door_#",
        "Estate Crossing"
    ],
    [
        "2_Labyrinth_boss_1",
        "Aspirant's Trial"
    ],
    [
        "2_Labyrinth_boss_2",
        "Aspirant's Trial"
    ],
    [
        "2_Labyrinth_boss_3",
        "Aspirant's Trial"
    ],
    [
        "2_Labyrinth_boss_1_end",
        "Aspirant's Trial"
    ],
    [
        "2_Labyrinth_boss_2_end",
        "Aspirant's Trial"
    ],
    [
        "2_Labyrinth_boss_3_end_#",
        "Aspirant's Trial"
    ],
    [
        "3_Labyrinth_C_end",
        "Sepulchre Annex"
    ],
    [
        "3_Labyrinth_C_end_bottleneck",
        "Sepulchre Annex"
    ],
    [
        "3_Labyrinth_C_straight",
        "Sepulchre Passage"
    ],
    [
        "3_Labyrinth_C_straight_bottleneck",
        "Sepulchre Passage"
    ],
    [
        "3_Labyrinth_C_branch",
        "Sepulchre Halls"
    ],
    [
        "3_Labyrinth_C_branch_bottleneck_1",
        "Sepulchre Halls"
    ],
    [
        "3_Labyrinth_C_branch_bottleneck_2",
        "Sepulchre Halls"
    ],
    [
        "3_Labyrinth_C_branch_door",
        "Sepulchre Halls"
    ],
    [
        "3_Labyrinth_C_quad",
        "Sepulchre Atrium"
    ],
    [
        "3_Labyrinth_C_quad_bottleneck",
        "Sepulchre Atrium"
    ],
    [
        "3_Labyrinth_C_quad_door",
        "Sepulchre Atrium"
    ],
    [
        "3_Labyrinth_P_end",
        "Sanitorium Annex"
    ],
    [
        "3_Labyrinth_P_end_bottleneck",
        "Sanitorium Annex"
    ],
    [
        "3_Labyrinth_P_straight",
        "Sanitorium Passage"
    ],
    [
        "3_Labyrinth_P_straight_bottleneck",
        "Sanitorium Passage"
    ],
    [
        "3_Labyrinth_P_branch",
        "Sanitorium Halls"
    ],
    [
        "3_Labyrinth_P_branch_bottleneck_1",
        "Sanitorium Halls"
    ],
    [
        "3_Labyrinth_P_branch_bottleneck_2",
        "Sanitorium Halls"
    ],
    [
        "3_Labyrinth_P_branch_door",
        "Sanitorium Halls"
    ],
    [
        "3_Labyrinth_P_quad",
        "Sanitorium Atrium"
    ],
    [
        "3_Labyrinth_P_quad_bottleneck",
        "Sanitorium Atrium"
    ],
    [
        "3_Labyrinth_P_quad_door",
        "Sanitorium Atrium"
    ],
    [
        "3_Labyrinth_EH_end",
        "Mansion Annex"
    ],
    [
        "3_Labyrinth_EH_end_bottleneck",
        "Mansion Annex"
    ],
    [
        "3_Labyrinth_EH_straight_#",
        "Mansion Passage"
    ],
    [
        "3_Labyrinth_EH_straight_bottleneck",
        "Mansion Passage"
    ],
    [
        "3_Labyrinth_EH_branch",
        "Mansion Halls"
    ],
    [
        "3_Labyrinth_EH_branch_bottleneck_1",
        "Mansion Halls"
    ],
    [
        "3_Labyrinth_EH_branch_bottleneck_2",
        "Mansion Halls"
    ],
    [
        "3_Labyrinth_EH_branch_door",
        "Mansion Halls"
    ],
    [
        "3_Labyrinth_EH_quad",
        "Mansion Atrium"
    ],
    [
        "3_Labyrinth_EH_quad_bottleneck",
        "Mansion Atrium"
    ],
    [
        "3_Labyrinth_EH_quad_door_#",
        "Mansion Atrium"
    ],
    [
        "3_Labyrinth_RT_end",
        "Basilica Annex"
    ],
    [
        "3_Labyrinth_RT_end_bottleneck",
        "Basilica Annex"
    ],
    [
        "3_Labyrinth_RT_straight",
        "Basilica Passage"
    ],
    [
        "3_Labyrinth_RT_straight_bottleneck",
        "Basilica Passage"
    ],
    [
        "3_Labyrinth_RT_branch",
        "Basilica Halls"
    ],
    [
        "3_Labyrinth_RT_branch_bottleneck_1",
        "Basilica Halls"
    ],
    [
        "3_Labyrinth_RT_branch_bottleneck_2",
        "Basilica Halls"
    ],
    [
        "3_Labyrinth_RT_branch_door",
        "Basilica Halls"
    ],
    [
        "3_Labyrinth_RT_quad_#",
        "Basilica Atrium"
    ],
    [
        "3_Labyrinth_RT_quad_bottleneck",
        "Basilica Atrium"
    ],
    [
        "3_Labyrinth_RT_quad_door",
        "Basilica Atrium"
    ],
    [
        "3_Labyrinth_DG_end",
        "Domain Enclosure"
    ],
    [
        "3_Labyrinth_DG_end_bottleneck_#",
        "Domain Enclosure"
    ],
    [
        "3_Labyrinth_DG_straight",
        "Domain Path"
    ],
    [
        "3_Labyrinth_DG_straight_bottleneck",
        "Domain Path"
    ],
    [
        "3_Labyrinth_DG_branch",
        "Domain Walkways"
    ],
    [
        "3_Labyrinth_DG_branch_bottleneck_1_#",
        "Domain Walkways"
    ],
    [
        "3_Labyrinth_DG_branch_bottleneck_2",
        "Domain Walkways"
    ],
    [
        "3_Labyrinth_DG_branch_door",
        "Domain Walkways"
    ],
    [
        "3_Labyrinth_DG_quad",
        "Domain Crossing"
    ],
    [
        "3_Labyrinth_DG_quad_bottleneck",
        "Domain Crossing"
    ],
    [
        "3_Labyrinth_DG_quad_door",
        "Domain Crossing"
    ],
    [
        "3_Labyrinth_OH_end",
        "Estate Enclosure"
    ],
    [
        "3_Labyrinth_OH_end_bottleneck",
        "Estate Enclosure"
    ],
    [
        "3_Labyrinth_OH_straight",
        "Estate Path"
    ],
    [
        "3_Labyrinth_OH_straight_bottleneck",
        "Estate Path"
    ],
    [
        "3_Labyrinth_OH_branch",
        "Estate Walkways"
    ],
    [
        "3_Labyrinth_OH_branch_bottleneck_1",
        "Estate Walkways"
    ],
    [
        "3_Labyrinth_OH_branch_bottleneck_2",
        "Estate Walkways"
    ],
    [
        "3_Labyrinth_OH_branch_door",
        "Estate Walkways"
    ],
    [
        "3_Labyrinth_OH_quad_#",
        "Estate Crossing"
    ],
    [
        "3_Labyrinth_OH_quad_bottleneck",
        "Estate Crossing"
    ],
    [
        "3_Labyrinth_OH_quad_door_#",
        "Estate Crossing"
    ],
    [
        "3_Labyrinth_boss_1",
        "Aspirant's Trial"
    ],
    [
        "3_Labyrinth_boss_2",
        "Aspirant's Trial"
    ],
    [
        "3_Labyrinth_boss_3",
        "Aspirant's Trial"
    ],
    [
        "3_Labyrinth_boss_1_end",
        "Aspirant's Trial"
    ],
    [
        "3_Labyrinth_boss_2_end_#",
        "Aspirant's Trial"
    ],
    [
        "3_Labyrinth_boss_3_end",
        "Aspirant's Trial"
    ],
    [
        "EndGame_Labyrinth_C_end",
        "Sepulchre Annex"
    ],
    [
        "EndGame_Labyrinth_C_end_bottleneck",
        "Sepulchre Annex"
    ],
    [
        "EndGame_Labyrinth_C_straight",
        "Sepulchre Passage"
    ],
    [
        "EndGame_Labyrinth_C_straight_bottleneck",
        "Sepulchre Passage"
    ],
    [
        "EndGame_Labyrinth_C_branch",
        "Sepulchre Halls"
    ],
    [
        "EndGame_Labyrinth_C_branch_bottleneck_1",
        "Sepulchre Halls"
    ],
    [
        "EndGame_Labyrinth_C_branch_bottleneck_2",
        "Sepulchre Halls"
    ],
    [
        "EndGame_Labyrinth_C_branch_door",
        "Sepulchre Halls"
    ],
    [
        "EndGame_Labyrinth_C_quad",
        "Sepulchre Atrium"
    ],
    [
        "EndGame_Labyrinth_C_quad_bottleneck",
        "Sepulchre Atrium"
    ],
    [
        "EndGame_Labyrinth_C_quad_door",
        "Sepulchre Atrium"
    ],
    [
        "EndGame_Labyrinth_P_end",
        "Sanitorium Annex"
    ],
    [
        "EndGame_Labyrinth_P_end_bottleneck",
        "Sanitorium Annex"
    ],
    [
        "EndGame_Labyrinth_P_straight",
        "Sanitorium Passage"
    ],
    [
        "EndGame_Labyrinth_P_straight_bottleneck",
        "Sanitorium Passage"
    ],
    [
        "EndGame_Labyrinth_P_branch",
        "Sanitorium Halls"
    ],
    [
        "EndGame_Labyrinth_P_branch_bottleneck_1",
        "Sanitorium Halls"
    ],
    [
        "EndGame_Labyrinth_P_branch_bottleneck_2",
        "Sanitorium Halls"
    ],
    [
        "EndGame_Labyrinth_P_branch_door",
        "Sanitorium Halls"
    ],
    [
        "EndGame_Labyrinth_P_quad",
        "Sanitorium Atrium"
    ],
    [
        "EndGame_Labyrinth_P_quad_bottleneck",
        "Sanitorium Atrium"
    ],
    [
        "EndGame_Labyrinth_P_quad_door",
        "Sanitorium Atrium"
    ],
    [
        "EndGame_Labyrinth_EH_end",
        "Mansion Annex"
    ],
    [
        "EndGame_Labyrinth_EH_end_bottleneck",
        "Mansion Annex"
    ],
    [
        "EndGame_Labyrinth_EH_straight_#",
        "Mansion Passage"
    ],
    [
        "EndGame_Labyrinth_EH_straight_bottleneck",
        "Mansion Passage"
    ],
    [
        "EndGame_Labyrinth_EH_branch",
        "Mansion Halls"
    ],
    [
        "EndGame_Labyrinth_EH_branch_bottleneck_1",
        "Mansion Halls"
    ],
    [
        "EndGame_Labyrinth_EH_branch_bottleneck_2",
        "Mansion Halls"
    ],
    [
        "EndGame_Labyrinth_EH_branch_door",
        "Mansion Halls"
    ],
    [
        "EndGame_Labyrinth_EH_quad",
        "Mansion Atrium"
    ],
    [
        "EndGame_Labyrinth_EH_quad_bottleneck",
        "Mansion Atrium"
    ],
    [
        "EndGame_Labyrinth_EH_quad_door_#",
        "Mansion Atrium"
    ],
    [
        "EndGame_Labyrinth_RT_end",
        "Basilica Annex"
    ],
    [
        "EndGame_Labyrinth_RT_end_bottleneck",
        "Basilica Annex"
    ],
    [
        "EndGame_Labyrinth_RT_straight",
        "Basilica Passage"
    ],
    [
        "EndGame_Labyrinth_RT_straight_bottleneck",
        "Basilica Passage"
    ],
    [
        "EndGame_Labyrinth_RT_branch",
        "Basilica Halls"
    ],
    [
        "EndGame_Labyrinth_RT_branch_bottleneck_1",
        "Basilica Halls"
    ],
    [
        "EndGame_Labyrinth_RT_branch_bottleneck_2",
        "Basilica Halls"
    ],
    [
        "EndGame_Labyrinth_RT_branch_door",
        "Basilica Halls"
    ],
    [
        "EndGame_Labyrinth_RT_quad_#",
        "Basilica Atrium"
    ],
    [
        "EndGame_Labyrinth_RT_quad_bottleneck",
        "Basilica Atrium"
    ],
    [
        "EndGame_Labyrinth_RT_quad_door",
        "Basilica Atrium"
    ],
    [
        "EndGame_Labyrinth_DG_end",
        "Domain Enclosure"
    ],
    [
        "EndGame_Labyrinth_DG_end_bottleneck_#",
        "Domain Enclosure"
    ],
    [
        "EndGame_Labyrinth_DG_straight",
        "Domain Path"
    ],
    [
        "EndGame_Labyrinth_DG_straight_bottleneck",
        "Domain Path"
    ],
    [
        "EndGame_Labyrinth_DG_branch",
        "Domain Walkways"
    ],
    [
        "EndGame_Labyrinth_DG_branch_bottleneck_1_#",
        "Domain Walkways"
    ],
    [
        "EndGame_Labyrinth_DG_branch_bottleneck_2",
        "Domain Walkways"
    ],
    [
        "EndGame_Labyrinth_DG_branch_door",
        "Domain Walkways"
    ],
    [
        "EndGame_Labyrinth_DG_quad",
        "Domain Crossing"
    ],
    [
        "EndGame_Labyrinth_DG_quad_bottleneck",
        "Domain Crossing"
    ],
    [
        "EndGame_Labyrinth_DG_quad_door",
        "Domain Crossing"
    ],
    [
        "EndGame_Labyrinth_OH_end",
        "Estate Enclosure"
    ],
    [
        "EndGame_Labyrinth_OH_end_bottleneck",
        "Estate Enclosure"
    ],
    [
        "EndGame_Labyrinth_OH_straight",
        "Estate Path"
    ],
    [
        "EndGame_Labyrinth_OH_straight_bottleneck",
        "Estate Path"
    ],
    [
        "EndGame_Labyrinth_OH_branch",
        "Estate Walkways"
    ],
    [
        "EndGame_Labyrinth_OH_branch_bottleneck_1",
        "Estate Walkways"
    ],
    [
        "EndGame_Labyrinth_OH_branch_bottleneck_2",
        "Estate Walkways"
    ],
    [
        "EndGame_Labyrinth_OH_branch_door",
        "Estate Walkways"
    ],
    [
        "EndGame_Labyrinth_OH_quad_#",
        "Estate Crossing"
    ],
    [
        "EndGame_Labyrinth_OH_quad_bottleneck",
        "Estate Crossing"
    ],
    [
        "EndGame_Labyrinth_OH_quad_door_#",
        "Estate Crossing"
    ],
    [
        "EndGame_Labyrinth_boss_1",
        "Aspirant's Trial"
    ],
    [
        "EndGame_Labyrinth_boss_2",
        "Aspirant's Trial"
    ],
    [
        "EndGame_Labyrinth_boss_3",
        "Aspirant's Trial"
    ],
    [
        "EndGame_Labyrinth_boss_1_end",
        "Aspirant's Trial"
    ],
    [
        "EndGame_Labyrinth_boss_2_end",
        "Aspirant's Trial"
    ],
    [
        "EndGame_Labyrinth_boss_3_end",
        "Aspirant's Trial"
    ],
    [
        "EndGame_Labyrinth_trials_sawblades_#",
        "Trial of Crippling Grief"
    ],
    [
        "EndGame_Labyrinth_trials_lava_#",
        "Trial of Burning Rage"
    ],
    [
        "EndGame_Labyrinth_trials_spinners",
        "Trial of Swirling Fear"
    ],
    [
        "EndGame_Labyrinth_trials_spikes",
        "Trial of Piercing Truth"
    ],
    [
        "EndGame_Labyrinth_trials_arrows",
        "Trial of Stinging Doubt"
    ],
    [
        "EndGame_Labyrinth_trials_roombas",
        "Trial of Lingering Pain"
    ],
    [
        "MapAtziri1",
        "The Apex of Sacrifice"
    ],
    [
        "MapAtziri2",
        "The Alluring Abyss"
    ],
    [
        "MapTier1_1",
        "Cursed Crypt"
    ],
    [
        "MapTier1_1Unique",
        "The Coward's Trial"
    ],
    [
        "MapTier1_2",
        "Dungeon"
    ],
    [
        "MapTier1_3",
        "Grotto"
    ],
    [
        "MapTier1_4",
        "Overgrown Ruin"
    ],
    [
        "MapTier1_5",
        "Dunes"
    ],
    [
        "MapTier1_6",
        "Arid Lake"
    ],
    [
        "MapTier1_7",
        "Tropical Island"
    ],
    [
        "MapTier1_7Unique",
        "Untainted Paradise"
    ],
    [
        "MapTier1_8",
        "Orchard"
    ],
    [
        "MapTier2_1",
        "Wharf"
    ],
    [
        "MapTier2_2",
        "Arsenal"
    ],
    [
        "MapTier2_3",
        "Thicket"
    ],
    [
        "MapTier2_4",
        "Atoll"
    ],
    [
        "MapTier2_4Unique",
        "Maelström of Chaos"
    ],
    [
        "MapTier2_5",
        "Cemetery"
    ],
    [
        "MapTier2_6",
        "Toxic Sewer"
    ],
    [
        "MapTier2_7",
        "Arcade"
    ],
    [
        "MapTier3_1",
        "Ghetto"
    ],
    [
        "MapTier3_2",
        "Spider Lair"
    ],
    [
        "MapTier3_3",
        "Vaal Pyramid"
    ],
    [
        "MapTier3_3Unique",
        "Vaults of Atziri"
    ],
    [
        "MapTier3_4",
        "Reef"
    ],
    [
        "MapTier3_4Unique",
        "Mao Kun"
    ],
    [
        "MapTier3_5",
        "Fungal Hollow"
    ],
    [
        "MapTier3_6",
        "Mud Geyser"
    ],
    [
        "MapTier3_7",
        "Museum"
    ],
    [
        "MapTier4_1",
        "Bone Crypt"
    ],
    [
        "MapTier4_1Unique",
        "Convent of the Twins' Flame"
    ],
    [
        "MapTier4_2",
        "Overgrown Shrine"
    ],
    [
        "MapTier4_2Unique",
        "Acton's Nightmare"
    ],
    [
        "MapTier4_3",
        "Crystal Ore"
    ],
    [
        "MapTier4_4",
        "Shore"
    ],
    [
        "MapTier4_5",
        "Spider Forest"
    ],
    [
        "MapTier4_6",
        "Promenade"
    ],
    [
        "MapTier4_6Unique",
        "The Hall of Grandmasters"
    ],
    [
        "MapTier5_1",
        "Underground River"
    ],
    [
        "MapTier5_2",
        "Pier"
    ],
    [
        "MapTier5_3",
        "Bog"
    ],
    [
        "MapTier5_4",
        "Graveyard"
    ],
    [
        "MapTier5_5",
        "Coves"
    ],
    [
        "MapTier5_6",
        "Villa"
    ],
    [
        "MapTier6_1",
        "Temple"
    ],
    [
        "MapTier6_1Unique",
        "Poorjoy's Asylum"
    ],
    [
        "MapTier6_2",
        "Arachnid Nest"
    ],
    [
        "MapTier6_3",
        "Strand"
    ],
    [
        "MapTier6_3Unique",
        "Whakawairua Tuahu"
    ],
    [
        "MapTier6_4",
        "Ashen Wood"
    ],
    [
        "MapTier6_5",
        "Colonnade"
    ],
    [
        "MapTier6_5Unique",
        "Blackguard Salute"
    ],
    [
        "MapTier7_1",
        "Primordial Blocks"
    ],
    [
        "MapTier7_1Unique",
        "Oba's Cursed Trove"
    ],
    [
        "MapTier7_2",
        "Waste Pool"
    ],
    [
        "MapTier7_3",
        "Flooded Mine"
    ],
    [
        "MapTier7_4",
        "Jungle Valley"
    ],
    [
        "MapTier7_5",
        "Gardens"
    ],
    [
        "MapTier8_1",
        "Cells"
    ],
    [
        "MapTier8_2",
        "Canyon"
    ],
    [
        "MapTier8_3",
        "Dark Forest"
    ],
    [
        "MapTier8_4",
        "Peninsula"
    ],
    [
        "MapTier9_1",
        "Underground Sea"
    ],
    [
        "MapTier9_2",
        "Maze"
    ],
    [
        "MapTier9_2Unique",
        "Olmec's Sanctum"
    ],
    [
        "MapTier9_3",
        "Glacier"
    ],
    [
        "MapTier9_4",
        "Residence"
    ],
    [
        "MapTier10_1",
        "Necropolis"
    ],
    [
        "MapTier10_1Unique",
        "Death and Taxes"
    ],
    [
        "MapTier10_2",
        "Plateau"
    ],
    [
        "MapTier10_3",
        "Bazaar"
    ],
    [
        "MapTier11_1",
        "Lava Chamber"
    ],
    [
        "MapTier11_2",
        "Precinct"
    ],
    [
        "MapTier11_3",
        "Academy"
    ],
    [
        "MapTier12_1",
        "Shipyard"
    ],
    [
        "MapTier12_2",
        "Shrine"
    ],
    [
        "MapTier12_2Unique",
        "Wraeclast Pantheon"
    ],
    [
        "MapTier13_1",
        "Palace"
    ],
    [
        "MapTier13_2",
        "Courtyard"
    ],
    [
        "MapTier14_1",
        "Vaal Temple"
    ],
    [
        "Map2Tier1_1",
        "Cursed Crypt"
    ],
    [
        "Map2Tier1_1Unique",
        "The Coward's Trial"
    ],
    [
        "Map2Tier1_2",
        "Dungeon"
    ],
    [
        "Map2Tier1_3",
        "Grotto"
    ],
    [
        "Map2Tier1_4",
        "Dunes"
    ],
    [
        "Map2Tier1_5",
        "Pit"
    ],
    [
        "Map2Tier1_6",
        "Tropical Island"
    ],
    [
        "Map2Tier1_6Unique",
        "Untainted Paradise"
    ],
    [
        "Map2Tier1_7",
        "Desert"
    ],
    [
        "Map2Tier2_1",
        "Toxic Sewer"
    ],
    [
        "Map2Tier2_2",
        "Channel"
    ],
    [
        "Map2Tier2_3",
        "Thicket"
    ],
    [
        "Map2Tier2_4",
        "Atoll"
    ],
    [
        "Map2Tier2_4Unique",
        "Maelström of Chaos"
    ],
    [
        "Map2Tier2_5",
        "Cemetery"
    ],
    [
        "Map2Tier2_6",
        "Arcade"
    ],
    [
        "Map2Tier2_7",
        "Wharf"
    ],
    [
        "Map2Tier3_1",
        "Ghetto"
    ],
    [
        "Map2Tier3_2",
        "Spider Lair"
    ],
    [
        "Map2Tier3_3",
        "Vaal Pyramid"
    ],
    [
        "Map2Tier3_3Unique",
        "Vaults of Atziri"
    ],
    [
        "Map2Tier3_4",
        "Reef"
    ],
    [
        "Map2Tier3_4Unique",
        "Mao Kun"
    ],
    [
        "Map2Tier3_5",
        "Geode"
    ],
    [
        "Map2Tier3_6",
        "Mud Geyser"
    ],
    [
        "Map2Tier3_7",
        "Museum"
    ],
    [
        "Map2Tier4_1",
        "Arena"
    ],
    [
        "Map2Tier4_2",
        "Overgrown Shrine"
    ],
    [
        "Map2Tier4_2Unique",
        "Acton's Nightmare"
    ],
    [
        "Map2Tier4_3",
        "Crystal Ore"
    ],
    [
        "Map2Tier4_4",
        "Shore"
    ],
    [
        "Map2Tier4_5",
        "Spider Forest"
    ],
    [
        "Map2Tier4_6",
        "Promenade"
    ],
    [
        "Map2Tier4_6Unique",
        "The Hall of Grandmasters"
    ],
    [
        "Map2Tier4_7",
        "Phantasmagoria"
    ],
    [
        "Map2Tier5_1",
        "Underground River"
    ],
    [
        "Map2Tier5_1Unique",
        "Caer Blaidd, Wolfpack's Den"
    ],
    [
        "Map2Tier5_2",
        "Pier"
    ],
    [
        "Map2Tier5_3",
        "Bog"
    ],
    [
        "Map2Tier5_4",
        "Graveyard"
    ],
    [
        "Map2Tier5_5",
        "Coves"
    ],
    [
        "Map2Tier5_6",
        "Villa"
    ],
    [
        "Map2Tier6_1",
        "Temple"
    ],
    [
        "Map2Tier6_1Unique",
        "Poorjoy's Asylum"
    ],
    [
        "Map2Tier6_2",
        "Arachnid Nest"
    ],
    [
        "Map2Tier6_3",
        "Strand"
    ],
    [
        "Map2Tier6_3Unique",
        "Whakawairua Tuahu"
    ],
    [
        "Map2Tier6_4_",
        "Ashen Wood"
    ],
    [
        "Map2Tier6_5",
        "Colonnade"
    ],
    [
        "Map2Tier6_5Unique",
        "Blackguard Salute"
    ],
    [
        "Map2Tier6_6",
        "Bone Crypt"
    ],
    [
        "Map2Tier6_6Unique",
        "Olmec's Sanctum"
    ],
    [
        "Map2Tier7_1",
        "Primordial Blocks"
    ],
    [
        "Map2Tier7_1Unique",
        "Oba's Cursed Trove"
    ],
    [
        "Map2Tier7_2",
        "Waste Pool"
    ],
    [
        "Map2Tier7_3",
        "Flooded Mine"
    ],
    [
        "Map2Tier7_4",
        "Jungle Valley"
    ],
    [
        "Map2Tier7_5",
        "Gardens"
    ],
    [
        "Map2Tier8_1",
        "Cells"
    ],
    [
        "Map2Tier8_2",
        "Canyon"
    ],
    [
        "Map2Tier8_3",
        "Dark Forest"
    ],
    [
        "Map2Tier8_4",
        "Peninsula"
    ],
    [
        "Map2Tier8_5",
        "Orchard"
    ],
    [
        "Map2Tier9_1",
        "Underground Sea"
    ],
    [
        "Map2Tier9_2",
        "Arid Lake"
    ],
    [
        "Map2Tier9_3",
        "Glacier"
    ],
    [
        "Map2Tier9_4",
        "Residence"
    ],
    [
        "Map2Tier9_5",
        "Malformation"
    ],
    [
        "Map2Tier10_1",
        "Necropolis"
    ],
    [
        "Map2Tier10_1Unique",
        "Death and Taxes"
    ],
    [
        "Map2Tier10_2",
        "Plateau"
    ],
    [
        "Map2Tier10_3",
        "Bazaar"
    ],
    [
        "Map2Tier10_4",
        "Volcano"
    ],
    [
        "Map2Tier10_5",
        "Chateau"
    ],
    [
        "Map2Tier10_5Unique",
        "Perandus Manor"
    ],
    [
        "Map2Tier11_1",
        "Lava Chamber"
    ],
    [
        "Map2Tier11_2",
        "Precinct"
    ],
    [
        "Map2Tier11_3",
        "Academy"
    ],
    [
        "Map2Tier11_4",
        "Fungal Hollow"
    ],
    [
        "Map2Tier12_1",
        "Shipyard"
    ],
    [
        "Map2Tier12_2",
        "Overgrown Ruin"
    ],
    [
        "Map2Tier12_3",
        "Castle Ruins"
    ],
    [
        "Map2Tier12_4",
        "Arsenal"
    ],
    [
        "Map2Tier13_1",
        "Wasteland"
    ],
    [
        "Map2Tier13_2",
        "Courtyard"
    ],
    [
        "Map2Tier13_2Unique",
        "The Vinktar Square"
    ],
    [
        "Map2Tier13_3",
        "Excavation"
    ],
    [
        "Map2Tier13_4",
        "Waterways"
    ],
    [
        "Map2Tier14_1",
        "Palace"
    ],
    [
        "Map2Tier14_2",
        "Shrine"
    ],
    [
        "Map2Tier14_2Unique",
        "Wraeclast Pantheon"
    ],
    [
        "Map2Tier14_3",
        "Maze"
    ],
    [
        "Map2Tier14_4",
        "Vaal Temple"
    ],
    [
        "Map2Tier14_5",
        "Plaza"
    ],
    [
        "Map2Tier15_1",
        "Core"
    ],
    [
        "Map2Tier15_2",
        "Caldera"
    ],
    [
        "Map2Tier15_3",
        "Colosseum"
    ],
    [
        "MapAtlasGraveyardUnique",
        "Hallowed Ground"
    ],
    [
        "MapAtlasArcade",
        "Arcade"
    ],
    [
        "MapAtlasCrystalOre",
        "Crystal Ore"
    ],
    [
        "MapAtlasDesert",
        "Desert"
    ],
    [
        "MapAtlasJungleValley",
        "Jungle Valley"
    ],
    [
        "MapAtlasBeach",
        "Beach"
    ],
    [
        "MapAtlasFactory",
        "Factory"
    ],
    [
        "MapAtlasGhetto",
        "Ghetto"
    ],
    [
        "MapAtlasOasis",
        "Desert Spring"
    ],
    [
        "MapAtlasAridLake",
        "Arid Lake"
    ],
    [
        "MapAtlasCavern",
        "Flooded Mine"
    ],
    [
        "MapAtlasChannel",
        "Channel"
    ],
    [
        "MapAtlasGrotto",
        "Grotto"
    ],
    [
        "MapAtlasMarshes",
        "Marshes"
    ],
    [
        "MapAtlasSewer",
        "Toxic Sewer"
    ],
    [
        "MapAtlasVaalPyramid",
        "Vaal Pyramid"
    ],
    [
        "MapAtlasVaalPyramidUnique_",
        "Vaults of Atziri"
    ],
    [
        "MapAtlasAcademy",
        "Academy"
    ],
    [
        "MapAtlasMuseumUnique",
        "The Putrid Cloister"
    ],
    [
        "MapAtlasAcidLakes",
        "Acid Caverns"
    ],
    [
        "MapAtlasDungeon",
        "Dungeon"
    ],
    [
        "MapAtlasGraveyard",
        "Graveyard"
    ],
    [
        "MapAtlasPhantasmagoria",
        "Phantasmagoria"
    ],
    [
        "MapAtlasVilla",
        "Villa"
    ],
    [
        "MapAtlasWastePool",
        "Waste Pool"
    ],
    [
        "MapAtlasBurialChambers",
        "Burial Chambers"
    ],
    [
        "MapAtlasDryPeninsula",
        "Peninsula"
    ],
    [
        "MapAtlasDunes",
        "Dunes"
    ],
    [
        "MapAtlasMesa",
        "Mesa"
    ],
    [
        "MapAtlasPit",
        "Pit"
    ],
    [
        "MapAtlasPitUnique",
        "Darbel's Promise"
    ],
    [
        "MapAtlasPrimordialPool",
        "Primordial Pool"
    ],
    [
        "MapAtlasSpiderLair_",
        "Spider Lair"
    ],
    [
        "MapAtlasTower",
        "Tower"
    ],
    [
        "MapAtlasCanyon",
        "Canyon"
    ],
    [
        "MapAtlasQuarry",
        "Geode"
    ],
    [
        "MapAtlasRacecourse",
        "Racecourse"
    ],
    [
        "MapAtlasRamparts",
        "Ramparts"
    ],
    [
        "MapAtlasSpiderForest",
        "Spider Forest"
    ],
    [
        "MapAtlasStrand",
        "Strand"
    ],
    [
        "MapAtlasStrandUnique",
        "Whakawairua Tuahu"
    ],
    [
        "MapAtlasThicket",
        "Thicket"
    ],
    [
        "MapAtlasVaalCity",
        "Ancient City"
    ],
    [
        "MapAtlasWharf",
        "Wharf"
    ],
    [
        "MapAtlasArachnidTomb",
        "Arachnid Tomb"
    ],
    [
        "MapAtlasCastleRuins",
        "Castle Ruins"
    ],
    [
        "MapAtlasCatacomb_",
        "Bone Crypt"
    ],
    [
        "MapAtlasCatacombUnique",
        "Olmec's Sanctum"
    ],
    [
        "MapAtlasCells",
        "Cells"
    ],
    [
        "MapAtlasArmory",
        "Armoury"
    ],
    [
        "MapAtlasAshenWood",
        "Ashen Wood"
    ],
    [
        "MapAtlasMudGeyser",
        "Mud Geyser"
    ],
    [
        "MapAtlasArachnidNest",
        "Arachnid Nest"
    ],
    [
        "MapAtlasArena",
        "Arena"
    ],
    [
        "MapAtlasBog",
        "Bog"
    ],
    [
        "MapAtlasCemetery",
        "Cemetery"
    ],
    [
        "MapAtlasBarrows",
        "Barrows"
    ],
    [
        "MapAtlasAtoll",
        "Atoll"
    ],
    [
        "MapAtlasAtollUnique",
        "Maelström of Chaos"
    ],
    [
        "MapAtlasPier",
        "Pier"
    ],
    [
        "MapAtlasShore",
        "Shore"
    ],
    [
        "MapAtlasTropicalIsland",
        "Tropical Island"
    ],
    [
        "MapAtlasTropicalIslandUnique",
        "Untainted Paradise"
    ],
    [
        "MapAtlasCoves",
        "Coves"
    ],
    [
        "MapAtlasCrypt",
        "Cursed Crypt"
    ],
    [
        "MapAtlasCryptUnique",
        "The Coward's Trial"
    ],
    [
        "MapAtlasMuseum",
        "Museum"
    ],
    [
        "MapAtlasOrchard",
        "Orchard"
    ],
    [
        "MapAtlasOvergrownShrine",
        "Overgrown Shrine"
    ],
    [
        "MapAtlasOvergrownShrineUnique",
        "Acton's Nightmare"
    ],
    [
        "MapAtlasPromenade",
        "Promenade"
    ],
    [
        "MapAtlasPromenadeUnique",
        "The Hall of Grandmasters"
    ],
    [
        "MapAtlasReef",
        "Reef"
    ],
    [
        "MapAtlasReefUnique",
        "Mao Kun"
    ],
    [
        "MapAtlasTemple",
        "Temple"
    ],
    [
        "MapAtlasTempleUnique",
        "Poorjoy's Asylum"
    ],
    [
        "MapAtlasColonnade",
        "Colonnade"
    ],
    [
        "MapAtlasArsenal",
        "Arsenal"
    ],
    [
        "MapAtlasCourtyard",
        "Courtyard"
    ],
    [
        "MapAtlasCourtyardUnique",
        "The Vinktar Square"
    ],
    [
        "MapAtlasMalformation",
        "Malformation"
    ],
    [
        "MapAtlasQuay",
        "Port"
    ],
    [
        "MapAtlasTerrace",
        "Gardens"
    ],
    [
        "MapAtlasUndergroundRiver",
        "Underground River"
    ],
    [
        "MapAtlasUndergroundRiverUnique",
        "Caer Blaidd, Wolfpack's Den"
    ],
    [
        "MapAtlasBazaar",
        "Bazaar"
    ],
    [
        "MapAtlasChateau",
        "Chateau"
    ],
    [
        "MapAtlasChateauUnique",
        "Perandus Manor"
    ],
    [
        "MapAtlasExcavation",
        "Excavation"
    ],
    [
        "MapAtlasPrecinct",
        "Precinct"
    ],
    [
        "MapAtlasTortureChamber",
        "Primordial Blocks"
    ],
    [
        "MapAtlasTortureChamberUnique",
        "Oba's Cursed Trove"
    ],
    [
        "MapAtlasUndergroundSea",
        "Underground Sea"
    ],
    [
        "MapAtlasWasteland",
        "Wasteland"
    ],
    [
        "MapAtlasCrematorium",
        "Lava Chamber"
    ],
    [
        "MapAtlasEstuary",
        "Estuary"
    ],
    [
        "MapAtlasNecropolis",
        "Necropolis"
    ],
    [
        "MapAtlasNecropolisUnique",
        "Death and Taxes"
    ],
    [
        "MapAtlasPlateau",
        "Plateau"
    ],
    [
        "MapAtlasIvoryTemple",
        "Ivory Temple"
    ],
    [
        "MapAtlasResidence",
        "Residence"
    ],
    [
        "MapAtlasShipyard",
        "Shipyard"
    ],
    [
        "MapAtlasVault",
        "Vault"
    ],
    [
        "MapAtlasLair",
        "Lair"
    ],
    [
        "MapAtlasBeacon",
        "Lighthouse"
    ],
    [
        "MapAtlasGorge",
        "Glacier"
    ],
    [
        "MapAtlasHighGardens",
        "Terrace"
    ],
    [
        "MapAtlasPlaza",
        "Plaza"
    ],
    [
        "MapAtlasScriptorium",
        "Scriptorium"
    ],
    [
        "MapAtlasSulphurWastes",
        "Leyline"
    ],
    [
        "MapAtlasWaterways",
        "Waterways"
    ],
    [
        "MapAtlasMaze",
        "Maze"
    ],
    [
        "MapAtlasMineralPools",
        "Mineral Pools"
    ],
    [
        "MapAtlasPalace",
        "Palace"
    ],
    [
        "MapAtlasShrine",
        "Shrine"
    ],
    [
        "MapAtlasSprings",
        "Fungal Hollow"
    ],
    [
        "MapAtlasVolcano",
        "Volcano"
    ],
    [
        "MapAtlasAbyss",
        "Caldera"
    ],
    [
        "MapAtlasColosseum",
        "Colosseum"
    ],
    [
        "MapAtlasCore",
        "Core"
    ],
    [
        "MapAtlasDarkForest",
        "Dark Forest"
    ],
    [
        "MapAtlasOvergrownRuin",
        "Overgrown Ruin"
    ],
    [
        "MapAtlasChimera",
        "Pit of the Chimera"
    ],
    [
        "MapAtlasHydra",
        "Lair of the Hydra"
    ],
    [
        "MapAtlasPhoenix",
        "Forge of the Phoenix"
    ],
    [
        "MapAtlasMinotaur",
        "Maze of the Minotaur"
    ],
    [
        "MapAtlasShapersRealm",
        "The Shaper's Realm"
    ],
    [
        "MapAtlasVaalTemple",
        "Vaal Temple"
    ],
    [
        "BreachBossPhysical",
        "Uul-Netol's Domain"
    ],
    [
        "BreachBossChaos",
        "Chayula's Domain"
    ],
    [
        "BreachBossFire",
        "Xoph's Domain"
    ],
    [
        "BreachBossCold",
        "Tul's Domain"
    ],
    [
        "BreachBossLightning",
        "Esh's Domain"
    ],
    [
        "BreachBossPhysical2",
        "Uul-Netol's Domain"
    ],
    [
        "BreachBossChaos2",
        "Chayula's Domain"
    ],
    [
        "BreachBossFire2",
        "Xoph's Domain"
    ],
    [
        "BreachBossCold2_",
        "Tul's Domain"
    ],
    [
        "BreachBossLightning2",
        "Esh's Domain"
    ],
    [
        "BreachBossPhysical3",
        "Uul-Netol's Domain"
    ],
    [
        "BreachBossChaos3",
        "Chayula's Domain"
    ],
    [
        "BreachBossFire3",
        "Xoph's Domain"
    ],
    [
        "BreachBossCold3",
        "Tul's Domain"
    ],
    [
        "BreachBossLightning3",
        "Esh's Domain"
    ],
    [
        "BreachBossPhysical4",
        "Uul-Netol's Domain"
    ],
    [
        "BreachBossChaos4",
        "Chayula's Domain"
    ],
    [
        "BreachBossFire4",
        "Xoph's Domain"
    ],
    [
        "BreachBossCold4",
        "Tul's Domain"
    ],
    [
        "BreachBossLightning4",
        "Esh's Domain"
    ],
    [
        "BreachBossPhysical5",
        "Uul-Netol's Domain"
    ],
    [
        "BreachBossChaos5",
        "Chayula's Domain"
    ],
    [
        "BreachBossFire5",
        "Xoph's Domain"
    ],
    [
        "BreachBossCold5",
        "Tul's Domain"
    ],
    [
        "BreachBossLightning5",
        "Esh's Domain"
    ],
    [
        "MapAtlasHarbinger",
        "Harbinger's Isle"
    ],
    [
        "MapAtlasHarbingerLow",
        "The Beachhead"
    ],
    [
        "MapAtlasHarbingerMid",
        "The Beachhead"
    ],
    [
        "MapAtlasHarbingerHigh",
        "The Beachhead"
    ],
    [
        "MapWorldsLookout",
        "Lookout"
    ],
    [
        "MapWorldsBeach",
        "Beach"
    ],
    [
        "MapWorldsGraveyard",
        "Graveyard"
    ],
    [
        "MapWorldsDungeon",
        "Dungeon"
    ],
    [
        "MapWorldsAlleyways",
        "Alleyways"
    ],
    [
        "MapWorldsPen",
        "Pen"
    ],
    [
        "MapWorldsDesert",
        "Desert"
    ],
    [
        "MapWorldsAridLake",
        "Arid Lake"
    ],
    [
        "MapWorldsFloodedMine",
        "Flooded Mine"
    ],
    [
        "MapWorldsMarshes",
        "Marshes"
    ],
    [
        "MapWorldsIceberg",
        "Iceberg"
    ],
    [
        "MapWorldsCage",
        "Cage"
    ],
    [
        "MapWorldsSprings",
        "Fungal Hollow"
    ],
    [
        "MapWorldsExcavation",
        "Excavation"
    ],
    [
        "MapWorldsLeyline",
        "Leyline"
    ],
    [
        "MapWorldsPeninsula",
        "Peninsula"
    ],
    [
        "MapWorldsPort",
        "Port"
    ],
    [
        "MapWorldsBurialChambers",
        "Burial Chambers"
    ],
    [
        "MapWorldsCells",
        "Cells"
    ],
    [
        "MapWorldsArcade",
        "Arcade"
    ],
    [
        "MapWorldsCitySquare",
        "City Square"
    ],
    [
        "MapWorldsRelicChambers",
        "Relic Chambers"
    ],
    [
        "MapWorldsCourthouse",
        "Courthouse"
    ],
    [
        "MapWorldsStrand",
        "Strand"
    ],
    [
        "MapWorldsStrandUnique",
        "Whakawairua Tuahu"
    ],
    [
        "MapWorldsChateau",
        "Chateau"
    ],
    [
        "MapWorldsChateauUnique",
        "Perandus Manor"
    ],
    [
        "MapWorldsGrotto",
        "Grotto"
    ],
    [
        "MapWorldsGorge",
        "Glacier"
    ],
    [
        "MapWorldsVolcano",
        "Volcano"
    ],
    [
        "MapWorldsLighthouse",
        "Lighthouse"
    ],
    [
        "MapWorldsCanyon",
        "Canyon"
    ],
    [
        "MapWorldsConservatory",
        "Conservatory"
    ],
    [
        "MapWorldsSulphurVents",
        "Sulphur Vents"
    ],
    [
        "MapWorldsHauntedMansion",
        "Haunted Mansion"
    ],
    [
        "MapWorldsMaze",
        "Maze"
    ],
    [
        "MapWorldsMazeUnique",
        "Doryani's Machinarium"
    ],
    [
        "MapWorldsChannel",
        "Channel"
    ],
    [
        "MapWorldsToxicSewer",
        "Toxic Sewer"
    ],
    [
        "MapWorldsAncientCity",
        "Ancient City"
    ],
    [
        "MapWorldsIvoryTemple",
        "Ivory Temple"
    ],
    [
        "MapWorldsSpiderLair",
        "Spider Lair"
    ],
    [
        "MapWorldsBarrows",
        "Barrows"
    ],
    [
        "MapWorldsMausoleum",
        "Mausoleum"
    ],
    [
        "MapWorldsFields",
        "Fields"
    ],
    [
        "MapWorldsJungleValley",
        "Jungle Valley"
    ],
    [
        "MapWorldsPhantasmagoria",
        "Phantasmagoria"
    ],
    [
        "MapWorldsAcademy",
        "Academy"
    ],
    [
        "MapWorldsThicket",
        "Thicket"
    ],
    [
        "MapWorldsWharf",
        "Wharf"
    ],
    [
        "MapWorldsAshenWood",
        "Ashen Wood"
    ],
    [
        "MapWorldsAtoll",
        "Atoll"
    ],
    [
        "MapWorldsAtollUnique",
        "Maelström of Chaos"
    ],
    [
        "MapWorldsCemetery",
        "Cemetery"
    ],
    [
        "MapWorldsCemeteryUnique",
        "Hallowed Ground"
    ],
    [
        "MapWorldsUndergroundSea",
        "Underground Sea"
    ],
    [
        "MapWorldsTribunal",
        "Crater"
    ],
    [
        "MapWorldsCoralRuins",
        "Coral Ruins"
    ],
    [
        "MapWorldsLavaChamber",
        "Lava Chamber"
    ],
    [
        "MapWorldsResidence",
        "Residence"
    ],
    [
        "MapWorldsRamparts",
        "Ramparts"
    ],
    [
        "MapWorldsDunes",
        "Dunes"
    ],
    [
        "MapWorldsDunesUnique",
        "Pillars of Arun"
    ],
    [
        "MapWorldsBoneCrypt",
        "Bone Crypt"
    ],
    [
        "MapWorldsBoneCryptUnique",
        "Olmec's Sanctum"
    ],
    [
        "MapWorldsUndergroundRiver",
        "Underground River"
    ],
    [
        "MapWorldsUndergroundRiverUnique",
        "Caer Blaidd, Wolfpack's Den"
    ],
    [
        "MapWorldsGardens",
        "Gardens"
    ],
    [
        "MapWorldsArachnidNest",
        "Arachnid Nest"
    ],
    [
        "MapWorldsBazaar",
        "Bazaar"
    ],
    [
        "MapWorldsLaboratory",
        "Laboratory"
    ],
    [
        "MapWorldsInfestedValley",
        "Infested Valley"
    ],
    [
        "MapWorldsOvergrownRuin",
        "Overgrown Ruin"
    ],
    [
        "MapWorldsVaalPyramid",
        "Vaal Pyramid"
    ],
    [
        "MapWorldsVaalPyramidUnique",
        "Vaults of Atziri"
    ],
    [
        "MapWorldsGeode",
        "Geode"
    ],
    [
        "MapWorldsArmoury",
        "Armoury"
    ],
    [
        "MapWorldsCourtyard",
        "Courtyard"
    ],
    [
        "MapWorldsCourtyardUnique",
        "The Vinktar Square"
    ],
    [
        "MapWorldsMudGeyser",
        "Mud Geyser"
    ],
    [
        "MapWorldsShore",
        "Shore"
    ],
    [
        "MapWorldsShoreUnique",
        "Mao Kun"
    ],
    [
        "MapWorldsTropicalIsland",
        "Tropical Island"
    ],
    [
        "MapWorldsTropicalIslandUnique",
        "Untainted Paradise"
    ],
    [
        "MapWorldsMineralPools",
        "Mineral Pools"
    ],
    [
        "MapWorldsMoonTemple",
        "Moon Temple"
    ],
    [
        "MapWorldsMoonTempleUnique",
        "The Twilight Temple"
    ],
    [
        "MapWorldsSepulchre",
        "Sepulchre"
    ],
    [
        "MapWorldsTower",
        "Tower"
    ],
    [
        "MapWorldsWastePool",
        "Waste Pool"
    ],
    [
        "MapWorldsPlateau",
        "Plateau"
    ],
    [
        "MapWorldsEstuary",
        "Estuary"
    ],
    [
        "MapWorldsVault",
        "Vault"
    ],
    [
        "MapWorldsTemple",
        "Temple"
    ],
    [
        "MapWorldsTempleUnique",
        "Poorjoy's Asylum"
    ],
    [
        "MapWorldsArena",
        "Arena"
    ],
    [
        "MapWorldsMuseum",
        "Museum"
    ],
    [
        "MapWorldsMuseumUnique",
        "The Putrid Cloister"
    ],
    [
        "MapWorldsScriptorium",
        "Scriptorium"
    ],
    [
        "MapWorldsSiege",
        "Siege"
    ],
    [
        "MapWorldsSynthesisedWorld",
        "Synthesised World"
    ],
    [
        "MapWorldsShipyard",
        "Shipyard"
    ],
    [
        "MapWorldsBelfry",
        "Belfry"
    ],
    [
        "MapWorldsArachnidTomb",
        "Arachnid Tomb"
    ],
    [
        "MapWorldsWasteland",
        "Wasteland"
    ],
    [
        "MapWorldsPrecinct",
        "Precinct"
    ],
    [
        "MapWorldsBog",
        "Bog"
    ],
    [
        "MapWorldsPier",
        "Pier"
    ],
    [
        "MapWorldsCursedCrypt",
        "Cursed Crypt"
    ],
    [
        "MapWorldsCursedCryptUnique",
        "The Coward's Trial"
    ],
    [
        "MapWorldsOrchard",
        "Orchard"
    ],
    [
        "MapWorldsPromenade",
        "Promenade"
    ],
    [
        "MapWorldsPromenadeUnique",
        "The Hall of Grandmasters"
    ],
    [
        "MapWorldsLair",
        "Lair"
    ],
    [
        "MapWorldsColonnade",
        "Colonnade"
    ],
    [
        "MapWorldsPrimordialPool",
        "Primordial Pool"
    ],
    [
        "MapWorldsSpiderForest",
        "Spider Forest"
    ],
    [
        "MapWorldsCoves",
        "Coves"
    ],
    [
        "MapWorldsWaterways",
        "Waterways"
    ],
    [
        "MapWorldsFactory",
        "Factory"
    ],
    [
        "MapWorldsMesa",
        "Mesa"
    ],
    [
        "MapWorldsPit",
        "Pit"
    ],
    [
        "MapWorldsPitUnique",
        "Darbel's Promise"
    ],
    [
        "MapWorldsDefiledCathedral",
        "Defiled Cathedral"
    ],
    [
        "MapWorldsSummit",
        "Summit"
    ],
    [
        "MapWorldsOvergrownShrine",
        "Overgrown Shrine"
    ],
    [
        "MapWorldsOvergrownShrineUnique",
        "Acton's Nightmare"
    ],
    [
        "MapWorldsCastleRuins",
        "Castle Ruins"
    ],
    [
        "MapWorldsCrystalOre",
        "Crystal Ore"
    ],
    [
        "MapWorldsVilla",
        "Villa"
    ],
    [
        "MapWorldsTortureChamber",
        "Primordial Blocks"
    ],
    [
        "MapWorldsTortureChamberUnique",
        "Oba's Cursed Trove"
    ],
    [
        "MapWorldsNecropolis",
        "Necropolis"
    ],
    [
        "MapWorldsNecropolisUnique",
        "Death and Taxes"
    ],
    [
        "MapWorldsRacecourse_",
        "Racecourse"
    ],
    [
        "MapWorldsCaldera",
        "Caldera"
    ],
    [
        "MapWorldsGhetto",
        "Ghetto"
    ],
    [
        "MapWorldsPark",
        "Park"
    ],
    [
        "MapWorldsMalformation",
        "Malformation"
    ],
    [
        "MapWorldsTerrace",
        "Terrace"
    ],
    [
        "MapWorldsShrine",
        "Shrine"
    ],
    [
        "MapWorldsArsenal",
        "Arsenal"
    ],
    [
        "MapWorldsDesertSpring",
        "Desert Spring"
    ],
    [
        "MapWorldsCore",
        "Core"
    ],
    [
        "MapWorldsColosseum",
        "Colosseum"
    ],
    [
        "MapWorldsAcidLakes",
        "Acid Caverns"
    ],
    [
        "MapWorldsDarkForest",
        "Dark Forest"
    ],
    [
        "MapWorldsCrimsonTemple",
        "Crimson Temple"
    ],
    [
        "MapWorldsPlaza",
        "Plaza"
    ],
    [
        "MapWorldsDig",
        "Dig"
    ],
    [
        "MapWorldsPalace",
        "Palace"
    ],
    [
        "MapWorldsLavaLake",
        "Lava Lake"
    ],
    [
        "MapWorldsBasilica",
        "Basilica"
    ],
    [
        "MapWorldsSunkenCity",
        "Sunken City"
    ],
    [
        "MapWorldsReef",
        "Reef"
    ],
    [
        "MapWorldsCarcass",
        "Carcass"
    ],
    [
        "MapWorldsChimera",
        "Pit of the Chimera"
    ],
    [
        "MapWorldsHydra",
        "Lair of the Hydra"
    ],
    [
        "MapWorldsPhoenix",
        "Forge of the Phoenix"
    ],
    [
        "MapWorldsMinotaur",
        "Maze of the Minotaur"
    ],
    [
        "MapWorldsShapersRealm",
        "The Shaper's Realm"
    ],
    [
        "MapWorldsVaalTemple",
        "Vaal Temple"
    ],
    [
        "MapWorldsHarbinger",
        "Harbinger's Isle"
    ],
    [
        "MapWorldsHarbingerLow",
        "The Beachhead"
    ],
    [
        "MapWorldsHarbingerMid",
        "The Beachhead"
    ],
    [
        "MapWorldsHarbingerHigh",
        "The Beachhead"
    ],
    [
        "MapWorldsHarbingerUber",
        "Infused Beachhead"
    ],
    [
        "MapWorldsDrySea",
        "Dry Sea"
    ],
    [
        "MapWorldsSteppes",
        "Steppes"
    ],
    [
        "MapWorldsStagnation",
        "Stagnation"
    ],
    [
        "MapWorldsBrambleValley",
        "Bramble Valley"
    ],
    [
        "MapWorldsFrozenCabins",
        "Frozen Cabins"
    ],
    [
        "MapWorldsHarbingerPrison",
        "Harbinger Prison"
    ],
    [
        "MapWorldsGraveTrough",
        "Grave Trough"
    ],
    [
        "MapWorldsCrimsonTownship",
        "Crimson Township"
    ],
    [
        "MapWorldsForkingRiver",
        "Forking River"
    ],
    [
        "MapWorldsFoundry",
        "Foundry"
    ],
    [
        "MapWorldsColdRiver_",
        "Cold River"
    ],
    [
        "MapWorldsForbiddenWoods",
        "Forbidden Woods"
    ],
    [
        "MapWorldsSilo",
        "Silo"
    ],
    [
        "MapWorldsBeachLanding",
        "Beach Landing"
    ],
    [
        "MapWorldsSanctuary",
        "Sanctuary"
    ],
    [
        "MapWorldsCitadel",
        "Citadel"
    ],
    [
        "MapWorldsFortress",
        "Fortress"
    ],
    [
        "MapWorldsAbomination",
        "Abomination"
    ],
    [
        "MapWorldsZiggurat",
        "Ziggurat"
    ],
    [
        "MapWorldsElder_Desert",
        "Desert of Dementia"
    ],
    [
        "MapWorldsElder_Volcano",
        "River of Hysteria"
    ],
    [
        "MapWorldsElder_Sulphur",
        "Wastes of Lunacy"
    ],
    [
        "MapWorldsElder_Reliquary",
        "Pits of Sorrow"
    ],
    [
        "MapWorldsElder_Temple",
        "Vaults of Insanity"
    ],
    [
        "MapWorldsElder_Elegant",
        "Halls of Delirium"
    ],
    [
        "MapWorldsElder_Sceptre",
        "Manor of Madness"
    ],
    [
        "MapWorldsElder_Tower",
        "Spires of Delusion"
    ],
    [
        "MapWorldsElder_Refinery",
        "Repository of Derision"
    ],
    [
        "MapWorldsElder_Reef",
        "Sea of Isolation"
    ],
    [
        "MapWorldsElder_River",
        "Islands of Devastation"
    ],
    [
        "MapWorldsElder_Garden",
        "Ruins of Despair"
    ],
    [
        "MapWorldsElderArena",
        "Absence of Value and Meaning"
    ],
    [
        "MapWorldsElderArenaUber",
        "The Shaper's Realm"
    ],
    [
        "MapWorldsPrimordialBoss1",
        "Seething Chyme"
    ],
    [
        "MapWorldsPrimordialBoss2",
        "Polaric Void"
    ],
    [
        "MapWorldsPrimordialBoss3",
        "Absence of Patience and Wisdom"
    ],
    [
        "MapWorldsPrimordialBoss4",
        "Absence of Symmetry and Harmony"
    ],
    [
        "AbyssLeague",
        "Abyssal Depths"
    ],
    [
        "AbyssLeague2",
        "Abyssal Depths"
    ],
    [
        "AbyssLeagueBoss",
        "Abyssal Depths"
    ],
    [
        "AbyssLeagueBoss2",
        "Abyssal Depths"
    ],
    [
        "AbyssLeagueBoss3",
        "Abyssal Depths"
    ],
    [
        "BestiaryLeague_TigerBoss",
        "Farrul's Den"
    ],
    [
        "BestiaryLeague_CrabBoss",
        "Craiceann's Cove"
    ],
    [
        "BestiaryLeague_ScorpBoss",
        "Fenumus' Lair"
    ],
    [
        "BestiaryLeague_BirdBoss",
        "Saqawal's Roost"
    ],
    [
        "LegionLeague",
        "Domain of Timeless Conflict"
    ],
    [
        "LegionLeague2",
        "Domain of Timeless Conflict"
    ],
    [
        "LegionLeague3",
        "Domain of Timeless Conflict"
    ],
    [
        "LegionLeague4",
        "Domain of Timeless Conflict"
    ],
    [
        "Affliction_BossArena",
        "[UNUSED] Affliction Boss"
    ],
    [
        "HarvestLeague",
        "The Sacred Grove"
    ],
    [
        "HarvestLeagueMemoryLine",
        "The Sacred Grove"
    ],
    [
        "HarvestLeagueBoss",
        "The Sacred Grove"
    ],
    [
        "ffa1_1",
        "Sarn Arena"
    ],
    [
        "ffa2_1",
        "Sarn Arena"
    ],
    [
        "ffa3_1",
        "Sarn Arena"
    ],
    [
        "pvp1",
        "PvP Arena"
    ],
    [
        "pvp2",
        "PvP Arena"
    ],
    [
        "pvp3",
        "PvP Arena"
    ],
    [
        "pvp1Cruel",
        "PvP Arena"
    ],
    [
        "pvp3Cruel",
        "PvP Arena"
    ],
    [
        "pvp1Open",
        "PvP Arena"
    ],
    [
        "pvp2Open",
        "PvP Arena"
    ],
    [
        "pvp3Open",
        "PvP Arena"
    ],
    [
        "pvpBlitz",
        "PvP Blitz Arena"
    ],
    [
        "PetFlats",
        "PetFlats"
    ],
    [
        "Descent1",
        "The Phrecia Outskirts"
    ],
    [
        "Descent2",
        "The Heart of Phrecia"
    ],
    [
        "Descent3",
        "The Lost Cathedral"
    ],
    [
        "Descent4",
        "The Mortal Tomb"
    ],
    [
        "Descent5",
        "The Arachnid Tomb"
    ],
    [
        "Descent6",
        "The Tomb of Statues"
    ],
    [
        "Descent7",
        "The Frozen Abyss"
    ],
    [
        "Descent8",
        "The Simian Cave"
    ],
    [
        "Descent9",
        "The Skeletal Caverns"
    ],
    [
        "Descent10",
        "The Forbidden Ruins"
    ],
    [
        "Descent11",
        "The Vault of the Guardians"
    ],
    [
        "Descent12",
        "The Hall of Heroes"
    ],
    [
        "Descent13",
        "The Desecrated Shrine"
    ],
    [
        "Descent14",
        "The Demonic Shrine"
    ],
    [
        "Descent15",
        "The Infernal Shrine"
    ],
    [
        "Descent2_1",
        "The Entrance Hall"
    ],
    [
        "Descent2_2_1",
        "The Chattering Halls"
    ],
    [
        "Descent2_2_2",
        "The Croaking Halls"
    ],
    [
        "Descent2_3",
        "The Rasping Halls"
    ],
    [
        "Descent2_3_side1",
        "The Freezing Chamber"
    ],
    [
        "Descent2_3_boss",
        "The Shrine of the Pagan God"
    ],
    [
        "Descent2_4",
        "The Dungeon of Anarchy"
    ],
    [
        "Descent2_5_1",
        "The Dungeon of Necromancy"
    ],
    [
        "Descent2_5_2",
        "The Hollow Cave"
    ],
    [
        "Descent2_6_1",
        "The Haunted Dungeon"
    ],
    [
        "Descent2_6_1_side1",
        "The Obelisks of Faith"
    ],
    [
        "Descent2_6_2",
        "The Burning Cave"
    ],
    [
        "Descent2_6_2_side1",
        "The Chamber of Greed"
    ],
    [
        "Descent2_6_boss",
        "The Cage"
    ],
    [
        "Descent2_7",
        "The Necromantic Crypt"
    ],
    [
        "Descent2_8_1",
        "The Diabolic Crypt"
    ],
    [
        "Descent2_8_2",
        "The Misty Cave"
    ],
    [
        "Descent2_9_1",
        "The Ember Crypt"
    ],
    [
        "Descent2_9_2",
        "The Stormy Ledge"
    ],
    [
        "Descent2_9_3",
        "The Frozen Cave"
    ],
    [
        "Descent2_9_boss1",
        "The Glittering Crypt"
    ],
    [
        "Descent2_9_boss2",
        "The Glittering Cave"
    ],
    [
        "Descent2_10",
        "The Inner Halls Level 1"
    ],
    [
        "Descent2_11",
        "The Inner Halls Level 2"
    ],
    [
        "Descent2_12",
        "The Inner Halls Level 3"
    ],
    [
        "Descent2_12_boss",
        "The Nexus"
    ],
    [
        "ctf1",
        "PvP Capture the Flag"
    ],
    [
        "ctf2",
        "PvP Capture the Flag"
    ],
    [
        "ctf3",
        "PvP Capture the Flag"
    ],
    [
        "ctf4",
        "PvP Capture the Flag"
    ],
    [
        "ctf3open",
        "PvP Capture the Flag"
    ],
    [
        "ctf4open",
        "PvP Capture the Flag"
    ],
    [
        "ctf5",
        "PvP Capture the Flag"
    ],
    [
        "ctf6",
        "PvP Capture the Flag"
    ],
    [
        "ctf7",
        "PvP Capture the Flag"
    ],
    [
        "ctf8",
        "PvP Capture the Flag"
    ],
    [
        "ExileRoyale",
        "Path of Exile Royale"
    ],
    [
        "EndlessLedge1",
        "The Endless Ledge"
    ],
    [
        "EndlessLedge2",
        "The Endless Ledge"
    ],
    [
        "EndlessLedge3",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge4",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge5",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge6",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge7",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge8",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge9",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge10",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge11",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge12",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge13",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge14",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge15",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge16",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge17",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge18",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge19",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge20",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge21",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge22",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge23",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge24",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge25",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge26",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge27",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge28",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge29",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge30",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge31",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge32",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge33",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge34",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge35",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge36",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge37",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge38",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge39",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge40",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge41",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge42",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge43",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge44",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge45",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge46",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge47",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge48",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge49",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge50",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge51",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge52",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge53",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge54",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge55",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge56",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge57",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge58",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge59",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge60",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge61",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge62",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge63",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge64",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge65",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge66",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge67",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge68",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge69",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge70",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge71",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge72",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge73",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge74",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge75",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge76",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge77",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge78",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge79",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge80",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge81",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge82",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge83",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge84",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge85",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge86",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge87",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge88",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge89",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge90",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge91",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge92",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge93",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge94",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge95",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge96",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge97",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge98",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge99",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge100",
        "The Endless Ledge"
    ],
    [
        "MapEndlessLedge2_01",
        "Path of Endurance"
    ],
    [
        "MapEndlessLedge2_02",
        "Path of Endurance"
    ],
    [
        "MapEndlessLedge2_03",
        "Path of Endurance"
    ],
    [
        "MapEndlessLedge2_04",
        "Path of Endurance"
    ],
    [
        "MapEndlessLedge2_05",
        "Path of Endurance"
    ],
    [
        "MapEndlessLedge2_06",
        "Path of Endurance"
    ],
    [
        "MapEndlessLedge2_07",
        "Path of Endurance"
    ],
    [
        "MapEndlessLedge2_08",
        "Path of Endurance"
    ],
    [
        "MapEndlessLedge2_09",
        "Path of Endurance"
    ],
    [
        "MapEndlessLedge2_10",
        "Path of Endurance"
    ],
    [
        "MapEndlessLedge2_11",
        "Path of Endurance"
    ],
    [
        "MapEndlessLedge2_12_",
        "Path of Endurance"
    ],
    [
        "MapEndlessLedge2_13",
        "Path of Endurance"
    ],
    [
        "MapEndlessLedge2_14",
        "Path of Endurance"
    ],
    [
        "MapEndlessLedge2_15",
        "Path of Endurance"
    ],
    [
        "MapEndlessLedge2_16",
        "Path of Endurance"
    ],
    [
        "MapEndlessLedge2_17",
        "Path of Endurance"
    ],
    [
        "MapEndlessLedge2_18",
        "Path of Endurance"
    ],
    [
        "MapEndlessLedge2_19",
        "Path of Endurance"
    ],
    [
        "MapEndlessLedge2_20",
        "Path of Endurance"
    ],
    [
        "MapEndlessLedge2_21_",
        "Path of Endurance"
    ],
    [
        "MapEndlessLedge2_22",
        "Path of Endurance"
    ],
    [
        "MapEndlessLedge2_23",
        "Path of Endurance"
    ],
    [
        "MapEndlessLedge2_24",
        "Path of Endurance"
    ],
    [
        "MapEndlessLedge2_25",
        "Path of Endurance"
    ],
    [
        "MapEndlessLedge2_26",
        "Path of Endurance"
    ],
    [
        "MapEndlessLedge2_27",
        "Path of Endurance"
    ],
    [
        "MapEndlessLedge2_28",
        "Path of Endurance"
    ],
    [
        "MapEndlessLedge2_29",
        "Path of Endurance"
    ],
    [
        "MapEndlessLedge2_30",
        "Path of Endurance"
    ],
    [
        "Master_TH_Shipgraveyard",
        "Secluded Cove"
    ],
    [
        "Master_SP_Volcano",
        "Crucible of Spirit"
    ],
    [
        "InvasionBoss",
        ""
    ],
    [
        "AnyCorruptedSideArea",
        ""
    ],
    [
        "AnyAfflictionEndgameArea",
        ""
    ],
    [
        "AnyUberTabTrial",
        ""
    ],
    [
        "Hideout4_3",
        "Cavernous Hideout"
    ],
    [
        "Hideout5_3",
        "Forsaken Hideout"
    ],
    [
        "Hideout11_3",
        "Bloodsoaked Hideout"
    ],
    [
        "Hideout12_3",
        "Downtown Hideout"
    ],
    [
        "Hideout13_3",
        "Lofty Hideout"
    ],
    [
        "Hideout16_3",
        "Stockroom Hideout"
    ],
    [
        "Hideout17_3",
        "Industrial Hideout"
    ],
    [
        "Hideout24_1",
        "HideoutShip1"
    ],
    [
        "Hideout61_3",
        "Winding Pier"
    ],
    [
        "HideoutArch",
        "Robber's Trench Hideout"
    ],
    [
        "HideoutArchClaim",
        "Robber's Trench Hideout"
    ],
    [
        "HideoutCoralClaim",
        "Coral Hideout"
    ],
    [
        "HideoutCoral",
        "Coral Hideout"
    ],
    [
        "HideoutShapersRealm",
        "Celestial Hideout"
    ],
    [
        "HideoutCave",
        "Submerged Hideout"
    ],
    [
        "HideoutPrisonTower",
        "Brutal Hideout"
    ],
    [
        "HideoutPrisonTower_Claim",
        "Brutal Hideout"
    ],
    [
        "HideoutBaths",
        "Luxurious Hideout"
    ],
    [
        "HideoutBaths_Claim",
        "Luxurious Hideout"
    ],
    [
        "HideoutOssuary",
        "Skeletal Hideout"
    ],
    [
        "HideoutOssuary_Claim",
        "Skeletal Hideout"
    ],
    [
        "HideoutCourts",
        "Stately Hideout"
    ],
    [
        "HideoutCourts_Claim",
        "Stately Hideout"
    ],
    [
        "HideoutSunken",
        "Sunken Hideout"
    ],
    [
        "HideoutCauseway_Claim",
        "Sunken Hideout"
    ],
    [
        "HideoutHighGardens",
        "Arboreal Hideout"
    ],
    [
        "HideoutHighGarden_Claim",
        "Arboreal Hideout"
    ],
    [
        "HideoutShipgraveyard",
        "Shipwreck Hideout"
    ],
    [
        "HideoutForest_Claim",
        "Lush Hideout"
    ],
    [
        "HideoutForest",
        "Lush Hideout"
    ],
    [
        "HideoutSewer_Claim",
        "Undercity Hideout"
    ],
    [
        "HideoutSewer",
        "Undercity Hideout"
    ],
    [
        "HideoutSpace",
        "Celestial Nebula Hideout"
    ],
    [
        "HideoutArenaGraveyardTrio",
        "Entombed Hideout"
    ],
    [
        "HideoutMine_Claim",
        "Excavated Hideout"
    ],
    [
        "HideoutMine",
        "Excavated Hideout"
    ],
    [
        "HideoutRuinedTemple_Claim",
        "Baleful Hideout"
    ],
    [
        "HideoutRuinedTemple",
        "Baleful Hideout"
    ],
    [
        "HideoutOasis_Claim",
        "Desert Hideout"
    ],
    [
        "HideoutOasis",
        "Desert Hideout"
    ],
    [
        "HideoutPillarsOfArun",
        "Towering Hideout"
    ],
    [
        "HideoutAtziriArena",
        "Corrupted Hideout"
    ],
    [
        "HideoutInnocenceArena",
        "Innocent Hideout"
    ],
    [
        "HideoutShaperArena",
        "Shaped Hideout"
    ],
    [
        "HideoutKaomArena",
        "Furious Hideout"
    ],
    [
        "HideoutDaressoArena",
        "Champion's Hideout"
    ],
    [
        "HideoutDominusArena",
        "Indomitable Hideout"
    ],
    [
        "HideoutPietyArena",
        "Morbid Hideout"
    ],
    [
        "HideoutLunarisSolarisArena",
        "Eclipsed Hideout"
    ],
    [
        "HideoutKitavaArenaAct10",
        "Ravenous Hideout"
    ],
    [
        "HideoutTemplarLab",
        "Cartographer's Hideout"
    ],
    [
        "HideoutSlum",
        "Backstreet Hideout"
    ],
    [
        "HideoutSlum_Claim",
        "Backstreet Hideout"
    ],
    [
        "HideoutBeach",
        "Coastal Hideout"
    ],
    [
        "HideoutBeach_Claim",
        "Coastal Hideout"
    ],
    [
        "HideoutFellshrine",
        "Unearthed Hideout"
    ],
    [
        "HideoutFellshrine_Claim",
        "Unearthed Hideout"
    ],
    [
        "HideoutBattleground",
        "Battle-scarred Hideout"
    ],
    [
        "HideoutBattleground_Claim",
        "Battle-scarred Hideout"
    ],
    [
        "HideoutLibrary",
        "Enlightened Hideout"
    ],
    [
        "HideoutLibrary_Claim",
        "Enlightened Hideout"
    ],
    [
        "HideoutSolaris",
        "Immaculate Hideout"
    ],
    [
        "HideoutSolaris_Claim",
        "Immaculate Hideout"
    ],
    [
        "HideoutGardens",
        "Overgrown Hideout"
    ],
    [
        "HideoutGardens_Claim_",
        "Overgrown Hideout"
    ],
    [
        "HideoutIceberg",
        "Glacial Hideout"
    ],
    [
        "HideoutIceberg_Claim",
        "Glacial Hideout"
    ],
    [
        "HideoutCrimsonTemple",
        "Sanguine Hideout"
    ],
    [
        "HideoutCrimsonTemple_Claim",
        "Sanguine Hideout"
    ],
    [
        "HideoutTwilightTemple",
        "Divided Hideout"
    ],
    [
        "HideoutTwilightTemple_Claim",
        "Divided Hideout"
    ],
    [
        "HideoutMountain",
        "Alpine Hideout"
    ],
    [
        "HideoutMountain_Claim",
        "Alpine Hideout"
    ],
    [
        "HideoutHauntedMansion",
        "Haunted Hideout"
    ],
    [
        "HideoutHaunted_Claim",
        "Haunted Hideout"
    ],
    [
        "HideoutMoonTemple",
        "Nocturnal Hideout"
    ],
    [
        "HideoutMoonTemple_Claim",
        "Nocturnal Hideout"
    ],
    [
        "HideoutPrimevalRuins",
        "Primeval Hideout"
    ],
    [
        "HideoutPrimevalRuins_Claim",
        "Primeval Hideout"
    ],
    [
        "HideoutDoomguard",
        "Doomguard Hideout"
    ],
    [
        "HideoutSunspire",
        "Sunspire Hideout"
    ],
    [
        "HideoutDarkwood",
        "Darkwood Hideout"
    ],
    [
        "HideoutArenaElder",
        "Void Hideout"
    ],
    [
        "HideoutChiyouSpring",
        "Chiyou Hideout"
    ],
    [
        "HideoutBlankAbyss",
        "Infinite Abyss Hideout"
    ],
    [
        "HideoutBlankCity",
        "Urban Sprawl Hideout"
    ],
    [
        "HideoutBlankClouds",
        "Boundless Skies Hideout"
    ],
    [
        "HideoutBlankDesert",
        "Endless Sands Hideout"
    ],
    [
        "HideoutBlankDirt",
        "Eternal Wasteland Hideout"
    ],
    [
        "HideoutBlankGrass",
        "Vast Plains Hideout"
    ],
    [
        "HideoutBlankSea",
        "All at Sea Hideout"
    ],
    [
        "HideoutBlankSnow",
        "Glacial Expanse Hideout"
    ],
    [
        "HideoutThaumaturgy",
        "Thaumaturgical Hideout"
    ],
    [
        "HideoutYaochi",
        "Yaochi Hideout"
    ],
    [
        "HideoutHumanoidPet",
        "Humanoid Pet Hideout"
    ],
    [
        "HideoutRitualLeague",
        "Ritualist's Hideout"
    ],
    [
        "HideoutArenaMaven",
        "Crucible Hideout"
    ],
    [
        "HideoutHasina",
        "Tavern Hideout"
    ],
    [
        "HideoutAzuriteCave",
        "Azurite Cavern Hideout"
    ],
    [
        "HideoutSynthesisHub",
        "Synthesis Hideout"
    ],
    [
        "HideoutVeritaniaArena",
        "Redeemer's Hideout"
    ],
    [
        "HideoutBlankBlack",
        "Black Void Hideout"
    ],
    [
        "HideoutTencentApocalypse",
        "Cataclysmic Hideout"
    ],
    [
        "HideoutOlrothArena",
        "Ancestral Hideout"
    ],
    [
        "HideoutLight",
        "Timekeeper's Hideout"
    ],
    [
        "HideoutDark",
        "Ghost-lit Graveyard Hideout"
    ],
    [
        "HideoutArenaBlackStar_",
        "Polaric Hideout"
    ],
    [
        "HideoutArenaInfiniteHunger",
        "Seething Hideout"
    ],
    [
        "HideoutCosmicAtlas",
        "Atlas Hideout"
    ],
    [
        "HideoutArenaEaterOfWorlds",
        "Tangled Hideout"
    ],
    [
        "HideoutArenaSearingExarch",
        "Searing Hideout"
    ],
    [
        "HideoutBeaconOfSalvation",
        "Beacon of Salvation Hideout"
    ],
    [
        "HideoutCrucible",
        "Forge of the Titans Hideout"
    ],
    [
        "HideoutAncestralTrial",
        "Trial of the Ancestors Hideout"
    ],
    [
        "HideoutEnigma",
        "Enigma Hideout"
    ],
    [
        "HideoutMistWood",
        "Wildwood Hideout"
    ],
    [
        "HideoutWorldTurtle",
        "Cosmic Turtle Hideout"
    ],
    [
        "HideoutLake",
        "[DNT] Lake Hideout"
    ],
    [
        "HideoutLakeEvil",
        "[DNT] Lake Hideout Evil"
    ],
    [
        "HideoutRacetrack",
        "Vastiri Racecourse Hideout"
    ],
    [
        "HideoutDreadnought",
        "The Dreadnought Hideout"
    ],
    [
        "pvpTown",
        "Sarn Arena Staging Area"
    ],
    [
        "VFXTest",
        "Particle Shower"
    ],
    [
        "brig",
        "The Brig"
    ],
    [
        "TGRMulti",
        "Multi Test"
    ],
    [
        "DGRMulti",
        "Multi Test"
    ],
    [
        "BlackTest",
        "All Black"
    ],
    [
        "kitavafilming",
        "Kitava BloodFace"
    ],
    [
        "Programming",
        "Programming World"
    ],
    [
        "Programming_Lite",
        "Programming World (Lite)"
    ],
    [
        "AncestralTrialTest",
        "Ancestral Trial Test"
    ],
    [
        "AtlasExilesZana",
        "Abandoned Citadel"
    ],
    [
        "AtlasExilesBoss1",
        "Crusader's Sanctum"
    ],
    [
        "AtlasExilesBoss1Uber",
        "Crusader's Sanctum"
    ],
    [
        "AtlasExilesBoss2",
        "Redeemer's Eyrie"
    ],
    [
        "AtlasExilesBoss2Uber",
        "Redeemer's Eyrie"
    ],
    [
        "AtlasExilesBoss3",
        "Hunter's Ambush"
    ],
    [
        "AtlasExilesBoss3Uber",
        "Hunter's Ambush"
    ],
    [
        "AtlasExilesBoss4",
        "Warlord's Keep"
    ],
    [
        "AtlasExilesBoss4Uber",
        "Warlord's Keep"
    ],
    [
        "AtlasExilesBoss5",
        "Eye of the Storm"
    ],
    [
        "AfflictionTown6",
        "Lunacy's Watch"
    ],
    [
        "AfflictionTown4",
        "Hysteriagate"
    ],
    [
        "AfflictionTown7",
        "The Bridge Enraptured"
    ],
    [
        "AfflictionTown8",
        "The Syndrome Encampment"
    ],
    [
        "AfflictionTown10",
        "Oriath Delusion"
    ],
    [
        "HeistCinematic",
        "[UNUSED] Cinematic"
    ],
    [
        "HeistHub",
        "The Rogue Harbour"
    ],
    [
        "HeistHubEndless",
        "The Rogue Harbour"
    ],
    [
        "HeistBunker1",
        "Bunker"
    ],
    [
        "HeistBunker2",
        "Bunker"
    ],
    [
        "HeistBunker3",
        "Bunker"
    ],
    [
        "HeistBunker4",
        "Bunker"
    ],
    [
        "HeistBunker5",
        "Bunker"
    ],
    [
        "HeistBunker6",
        "Bunker"
    ],
    [
        "HeistBunker7",
        "Bunker"
    ],
    [
        "HeistBunker8",
        "Bunker"
    ],
    [
        "HeistBunker9",
        "Bunker"
    ],
    [
        "HeistMines1",
        "Smuggler's Den"
    ],
    [
        "HeistMines2",
        "Smuggler's Den"
    ],
    [
        "HeistMines3",
        "Smuggler's Den"
    ],
    [
        "HeistMines4",
        "Smuggler's Den"
    ],
    [
        "HeistMines5",
        "Smuggler's Den"
    ],
    [
        "HeistMines6",
        "Smuggler's Den"
    ],
    [
        "HeistMines7",
        "Smuggler's Den"
    ],
    [
        "HeistMines8",
        "Smuggler's Den"
    ],
    [
        "HeistMines9",
        "Smuggler's Den"
    ],
    [
        "HeistDungeon1",
        "Laboratory"
    ],
    [
        "HeistDungeon2",
        "Laboratory"
    ],
    [
        "HeistDungeon3",
        "Laboratory"
    ],
    [
        "HeistDungeon4",
        "Laboratory"
    ],
    [
        "HeistDungeon5",
        "Laboratory"
    ],
    [
        "HeistDungeon6",
        "Laboratory"
    ],
    [
        "HeistDungeon7",
        "Laboratory"
    ],
    [
        "HeistDungeon8",
        "Laboratory"
    ],
    [
        "HeistDungeon9",
        "Laboratory"
    ],
    [
        "HeistReliquary1",
        "Repository"
    ],
    [
        "HeistReliquary2",
        "Repository"
    ],
    [
        "HeistReliquary3",
        "Repository"
    ],
    [
        "HeistReliquary4",
        "Repository"
    ],
    [
        "HeistReliquary5",
        "Repository"
    ],
    [
        "HeistReliquary6",
        "Repository"
    ],
    [
        "HeistReliquary7",
        "Repository"
    ],
    [
        "HeistReliquary8",
        "Repository"
    ],
    [
        "HeistReliquary9",
        "Repository"
    ],
    [
        "HeistLibrary1",
        "Prohibited Library"
    ],
    [
        "HeistLibrary2",
        "Prohibited Library"
    ],
    [
        "HeistLibrary3",
        "Prohibited Library"
    ],
    [
        "HeistLibrary4_",
        "Prohibited Library"
    ],
    [
        "HeistLibrary5",
        "Prohibited Library"
    ],
    [
        "HeistLibrary6",
        "Prohibited Library"
    ],
    [
        "HeistLibrary7",
        "Prohibited Library"
    ],
    [
        "HeistLibrary8_",
        "Prohibited Library"
    ],
    [
        "HeistLibrary9",
        "Prohibited Library"
    ],
    [
        "HeistRobotTunnels1",
        "Tunnels"
    ],
    [
        "HeistRobotTunnels2",
        "Tunnels"
    ],
    [
        "HeistRobotTunnels3",
        "Tunnels"
    ],
    [
        "HeistRobotTunnels4",
        "Tunnels"
    ],
    [
        "HeistRobotTunnels5",
        "Tunnels"
    ],
    [
        "HeistRobotTunnels6",
        "Tunnels"
    ],
    [
        "HeistRobotTunnels7",
        "Tunnels"
    ],
    [
        "HeistRobotTunnels8",
        "Tunnels"
    ],
    [
        "HeistRobotTunnels9",
        "Tunnels"
    ],
    [
        "HeistSewers1",
        "Underbelly"
    ],
    [
        "HeistSewers2",
        "Underbelly"
    ],
    [
        "HeistSewers3",
        "Underbelly"
    ],
    [
        "HeistSewers4",
        "Underbelly"
    ],
    [
        "HeistSewers5",
        "Underbelly"
    ],
    [
        "HeistSewers6",
        "Underbelly"
    ],
    [
        "HeistSewers7",
        "Underbelly"
    ],
    [
        "HeistSewers8",
        "Underbelly"
    ],
    [
        "HeistSewers9",
        "Underbelly"
    ],
    [
        "HeistCourts1",
        "Records Office"
    ],
    [
        "HeistCourts2",
        "Records Office"
    ],
    [
        "HeistCourts3",
        "Records Office"
    ],
    [
        "HeistCourts4",
        "Records Office"
    ],
    [
        "HeistCourts5",
        "Records Office"
    ],
    [
        "HeistCourts6",
        "Records Office"
    ],
    [
        "HeistCourts7",
        "Records Office"
    ],
    [
        "HeistCourts8",
        "Records Office"
    ],
    [
        "HeistCourts9_",
        "Records Office"
    ],
    [
        "HeistMansion1",
        "Mansion"
    ],
    [
        "HeistMansion2",
        "Mansion"
    ],
    [
        "HeistMansion3",
        "Mansion"
    ],
    [
        "HeistMansion4",
        "Mansion"
    ],
    [
        "HeistMansion5",
        "Mansion"
    ],
    [
        "HeistMansion6",
        "Mansion"
    ],
    [
        "HeistMansion7",
        "Mansion"
    ],
    [
        "HeistMansion8",
        "Mansion"
    ],
    [
        "HeistMansion9",
        "Mansion"
    ],
    [
        "HeistBoss_AdmiralDarnaw",
        "Darnaw's Landing"
    ],
    [
        "HeistBoss_FreidrichTarollo",
        "The Body Pit"
    ],
    [
        "HeistBoss_Jamanra",
        "Tomb of the Banished"
    ],
    [
        "HeistBoss_Nashta",
        "Pillaged Camp"
    ],
    [
        "HeistBoss_Twins",
        "The Den"
    ],
    [
        "HeistBoss_TheUnbreakable",
        "Combat Capacity Test Chamber"
    ],
    [
        "MavenHub",
        "The Maven's Crucible"
    ],
    [
        "MavenBoss",
        "Absence of Mercy and Empathy"
    ],
    [
        "MavenElderGuardian1",
        "The Enslaver"
    ],
    [
        "MavenElderGuardian2",
        "The Eradicator"
    ],
    [
        "MavenElderGuardian3",
        "The Constrictor"
    ],
    [
        "MavenElderGuardian4",
        "The Purifier"
    ],
    [
        "MavenAtlasExile1",
        "Baran, The Crusader"
    ],
    [
        "MavenAtlasExile2",
        "Veritania, The Redeemer"
    ],
    [
        "MavenAtlasExile3",
        "Al-Hezmin, The Hunter"
    ],
    [
        "MavenAtlasExile4",
        "Drox, The Warlord"
    ],
    [
        "UltimatumArena",
        "The Utzaal Arena"
    ],
    [
        "UltimatumArenaEndgame",
        "The Utzaal Arena"
    ],
    [
        "UltimatumBossArena",
        "The Tower of Ordeals"
    ],
    [
        "MapWorldsUltimatumBossArena",
        "The Tower of Ordeals"
    ],
    [
        "ExpeditionBattlegroundGraves",
        "Battleground Graves"
    ],
    [
        "ExpeditionKaruiWargraves",
        "Karui Wargraves"
    ],
    [
        "ExpeditionBluffs",
        "Bluffs"
    ],
    [
        "ExpeditionRottingTemple",
        "Rotting Temple"
    ],
    [
        "ExpeditionShipwreckReef",
        "Shipwreck Reef"
    ],
    [
        "ExpeditionCemetery",
        "Cemetery"
    ],
    [
        "ExpeditionSarnSlums",
        "Sarn Slums"
    ],
    [
        "ExpeditionDriedRiverbed",
        "Dried Riverbed"
    ],
    [
        "ExpeditionMountainside",
        "Mountainside"
    ],
    [
        "ExpeditionForestRuins",
        "Forest Ruins"
    ],
    [
        "ExpeditionVaalTemple",
        "Vaal Temple"
    ],
    [
        "ExpeditionUtzaalOutskirts",
        "Utzaal Outskirts"
    ],
    [
        "ExpeditionDesertRuins",
        "Desert Ruins"
    ],
    [
        "ExpeditionScrublands",
        "Scrublands"
    ],
    [
        "ExpeditionVolcano",
        "Volcanic Island"
    ],
    [
        "ExpeditionArenaUhtred",
        "Precursor Shrine"
    ],
    [
        "ExpeditionArenaOlroth",
        "Runic Stronghold"
    ],
    [
        "ExpeditionCryptArchers",
        "Fortified Redoubt"
    ],
    [
        "ExpeditionSubareaSewers",
        "Noxious Gutter"
    ],
    [
        "ExpeditionUndergroundSand",
        "Sandy Vestige"
    ],
    [
        "ExpeditionCryptSarcophagi",
        "Heroic Tomb"
    ],
    [
        "ExpeditionPirateCave",
        "Spectral Hollow"
    ],
    [
        "ExpeditionForgottenGrotto",
        "Forgotten Grotto"
    ],
    [
        "ExpeditionSubareaFungiDungeon",
        "Mushroom Thicket"
    ],
    [
        "ExpeditionBait",
        "Alluring Pool"
    ],
    [
        "ExpeditionSealedVault",
        "Lost Sanctum"
    ],
    [
        "ExpeditionSubareaSpiderNest",
        "Chittering Chamber"
    ],
    [
        "ExpeditionHeavyMetal",
        "[DNT] Kalguur Tileset Test"
    ],
    [
        "LakePrototype",
        "The Lake of Kalandra"
    ],
    [
        "LakeFireCannibals",
        "The Lake of Kalandra"
    ],
    [
        "LakeFireDemons",
        "The Lake of Kalandra"
    ],
    [
        "LakeFireVaal",
        "The Lake of Kalandra"
    ],
    [
        "LakeFireKaom",
        "The Lake of Kalandra"
    ],
    [
        "LakeFireBandits",
        "The Lake of Kalandra"
    ],
    [
        "LakeFireHolyElementals",
        "The Lake of Kalandra"
    ],
    [
        "LakeColdSeaWitches",
        "The Lake of Kalandra"
    ],
    [
        "LakeColdCrabs",
        "The Lake of Kalandra"
    ],
    [
        "LakeColdGoatmen",
        "The Lake of Kalandra"
    ],
    [
        "LakeColdBrine",
        "The Lake of Kalandra"
    ],
    [
        "LakeColdLunaris",
        "The Lake of Kalandra"
    ],
    [
        "LakeColdUndead",
        "The Lake of Kalandra"
    ],
    [
        "LakeLightningUndead",
        "The Lake of Kalandra"
    ],
    [
        "LakeLightningGrapplers",
        "The Lake of Kalandra"
    ],
    [
        "LakeLightningShavronne",
        "The Lake of Kalandra"
    ],
    [
        "LakeLightningSandLeapers",
        "The Lake of Kalandra"
    ],
    [
        "LakeLightningTemplars",
        "The Lake of Kalandra"
    ],
    [
        "LakeLightningGhosts",
        "The Lake of Kalandra"
    ],
    [
        "LakePhysicalMonkeys",
        "The Lake of Kalandra"
    ],
    [
        "LakePhysicalSkeletons",
        "The Lake of Kalandra"
    ],
    [
        "LakePhysicalBellyOfTheBeast",
        "The Lake of Kalandra"
    ],
    [
        "LakePhysicalMilitary",
        "The Lake of Kalandra"
    ],
    [
        "LakePhysicalDesert",
        "The Lake of Kalandra"
    ],
    [
        "LakePhysicalBeasts",
        "The Lake of Kalandra"
    ],
    [
        "LakeChaosParasites",
        "The Lake of Kalandra"
    ],
    [
        "LakeChaosSewers",
        "The Lake of Kalandra"
    ],
    [
        "LakeChaosVaal",
        "The Lake of Kalandra"
    ],
    [
        "LakeChaosSnakes",
        "The Lake of Kalandra"
    ],
    [
        "LakeChaosSpiders",
        "The Lake of Kalandra"
    ],
    [
        "LakeScourge",
        "The Lake of Kalandra"
    ],
    [
        "LakeExpeditionBrokenCircle",
        "The Lake of Kalandra"
    ],
    [
        "LakeExpeditionBlackScythe",
        "The Lake of Kalandra"
    ],
    [
        "LakeExpeditionChalice",
        "The Lake of Kalandra"
    ],
    [
        "LakeExpeditionKnightsOfSun",
        "The Lake of Kalandra"
    ],
    [
        "LakeUntainted",
        "The Lake of Kalandra"
    ],
    [
        "LakeDelve1",
        "The Lake of Kalandra"
    ],
    [
        "LakeDelve2",
        "The Lake of Kalandra"
    ],
    [
        "LakeDelve3",
        "The Lake of Kalandra"
    ],
    [
        "SanctumFoyer_Fellshrine",
        "The Forbidden Sanctum"
    ],
    [
        "SanctumFoyer_Fellshrine_Deal",
        "The Forbidden Sanctum"
    ],
    [
        "SanctumFoyer_Start",
        "The Forbidden Sanctum"
    ],
    [
        "SanctumFoyer_1_1",
        "Sanctum Archives"
    ],
    [
        "SanctumFoyer_1_2",
        "Sanctum Archives"
    ],
    [
        "SanctumFoyer_1_3",
        "Sanctum Archives"
    ],
    [
        "SanctumFoyerChain_1_1",
        "Sanctum Archives"
    ],
    [
        "SanctumFoyerChain_1_2",
        "Sanctum Archives"
    ],
    [
        "SanctumFoyerChain_1_3",
        "Sanctum Archives"
    ],
    [
        "SanctumFoyer_2_1",
        "Sanctum Vaults"
    ],
    [
        "SanctumFoyer_2_2",
        "Sanctum Vaults"
    ],
    [
        "SanctumFoyer_2_3",
        "Sanctum Vaults"
    ],
    [
        "SanctumFoyerChain_2_1",
        "Sanctum Vaults"
    ],
    [
        "SanctumFoyerChain_2_2",
        "Sanctum Vaults"
    ],
    [
        "SanctumFoyerChain_2_3",
        "Sanctum Vaults"
    ],
    [
        "SanctumFoyer_3_1",
        "Sanctum Cathedral"
    ],
    [
        "SanctumFoyer_3_2",
        "Sanctum Cathedral"
    ],
    [
        "SanctumFoyer_3_3",
        "Sanctum Cathedral"
    ],
    [
        "SanctumFoyerChain_3_1",
        "Sanctum Cathedral"
    ],
    [
        "SanctumFoyerChain_3_2",
        "Sanctum Cathedral"
    ],
    [
        "SanctumFoyerChain_3_3",
        "Sanctum Cathedral"
    ],
    [
        "SanctumFoyer_4_1",
        "Sanctum Mausoleum"
    ],
    [
        "SanctumFoyer_4_2",
        "Sanctum Mausoleum"
    ],
    [
        "SanctumFoyer_4_3",
        "Sanctum Mausoleum"
    ],
    [
        "SanctumFoyerChain_4_1",
        "Sanctum Mausoleum"
    ],
    [
        "SanctumFoyerChain_4_2",
        "Sanctum Mausoleum"
    ],
    [
        "SanctumFoyerChain_4_3",
        "Sanctum Mausoleum"
    ],
    [
        "SanctumCellar",
        "Sanctum Archives"
    ],
    [
        "SanctumVaults",
        "Sanctum Vaults"
    ],
    [
        "SanctumNave",
        "Sanctum Cathedral"
    ],
    [
        "SanctumCrypt",
        "Sanctum Necropolis"
    ],
    [
        "SanctumLycia2",
        "Beyond"
    ],
    [
        "CrucibleLeagueArea",
        "Forge of the Titans"
    ],
    [
        "CrucibleLeagueAreaUber",
        "Forge of the Titans"
    ],
    [
        "HallsOfTheDead_League",
        "The Halls of the Dead"
    ],
    [
        "HideoutExilecon23",
        "ExileCon 2023 Hideout"
    ],
    [
        "AzmeriLeagueArea",
        "The Viridian Wildwood"
    ],
    [
        "AzmeriLeagueBoss",
        "Crux of Nothingness"
    ],
    [
        "AzmeriLeagueIntroTunnel",
        "Twisted Burrow"
    ],
    [
        "AzmeriTrailerTest",
        "[DNT] TrailerTest"
    ],
    [
        "NecropolisLeague",
        "The Necropolis"
    ],
    [
        "KalguuranSettlersLeague",
        "Kingsmarch"
    ],
    [
        "SettlersBossFallenStar",
        "Starfall Crater"
    ],
    [
        "SettlersBossPirateCove",
        "Sailor's Folly"
    ],
    [
        "SettlersBossAlleyway",
        "Abandoned Port"
    ],
    [
        "TrailerSettlersBeach",
        "[DNT] Trailer Settlers Beach"
    ],
    [
        "HideoutCanopy",
        "Aloft Hideout"
    ],
    [
        "HideoutFelled",
        "Felled Hideout"
    ],
    [
        "HideoutShrine",
        "Shrine Hideout"
    ],
    [
        "HideoutLimestone",
        "Limestone Hideout"
    ],
    [
        "HideoutCanal",
        "Canal Hideout"
    ],
    [
        "TerrainInstanceTest1",
        "Terrain Instance Test"
    ],
    [
        "TerrainInstanceTest2",
        "Terrain Instance Test Alternate"
    ],
    [
        "MaterialsTest",
        "Materials Test Area"
    ],
    [
        "AssetShowcase",
        "Asset Showcase"
    ],
    [
        "Design",
        "Gone Fishing"
    ],
    [
        "Design_Lite",
        "Design (Lite)"
    ],
    [
        "DoodadTest",
        "Doodad Test"
    ],
    [
        "KaruiShowcase",
        "[DNT] Blood Fever Pa"
    ],
    [
        "BlacksmithShowcase",
        "[DNT] Blacksmith Cinematic"
    ],
    [
        "G2_1_cinematic",
        "Vastiri Outskirts"
    ],
    [
        "G2_7_arena_cinematic",
        "The Titan Grotto"
    ],
    [
        "G3_16_Trailer",
        "Aggorat (Atziri Trailer)"
    ],
    [
        "PrototypeProcession",
        "The Procession Halls"
    ],
    [
        "G_login",
        "Login Scene"
    ],
    [
        "G1_WorldMap",
        "Act 1"
    ],
    [
        "G2_WorldMap",
        "Act 2"
    ],
    [
        "G3_WorldMap",
        "Act 3"
    ],
    [
        "TN_WorldMap",
        "[DNT] Terra Nova"
    ],
    [
        "G1_town",
        "Clearfell Encampment"
    ],
    [
        "G1_1",
        "The Riverbank"
    ],
    [
        "G1_2",
        "Clearfell"
    ],
    [
        "G1_3",
        "Mud Burrow"
    ],
    [
        "G1_4",
        "The Grelwood"
    ],
    [
        "G1_5",
        "The Red Vale"
    ],
    [
        "G1_6",
        "The Grim Tangle"
    ],
    [
        "G1_7",
        "Cemetery of the Eternals"
    ],
    [
        "G1_8",
        "Mausoleum of the Praetor"
    ],
    [
        "G1_9",
        "Tomb of the Consort"
    ],
    [
        "G1_10",
        "Root Hollow"
    ],
    [
        "G1_11",
        "Hunting Grounds"
    ],
    [
        "G1_12",
        "Freythorn"
    ],
    [
        "G1_13_1",
        "Ogham Farmlands"
    ],
    [
        "G1_13_2",
        "Ogham Village"
    ],
    [
        "G1_14",
        "The Manor Ramparts"
    ],
    [
        "G1_15",
        "Ogham Manor"
    ],
    [
        "G2_town",
        "The Ardura Caravan"
    ],
    [
        "G2_1",
        "Vastiri Outskirts"
    ],
    [
        "G2_2",
        "Traitor's Passage"
    ],
    [
        "G2_3",
        "The Halani Gates"
    ],
    [
        "G2_3a",
        "The Halani Gates"
    ],
    [
        "G2_3s",
        "The Halani Gates"
    ],
    [
        "G2_4_1",
        "Keth"
    ],
    [
        "G2_4_2",
        "The Lost City"
    ],
    [
        "G2_4_3",
        "Buried Shrines"
    ],
    [
        "G2_5_1",
        "Mastodon Badlands"
    ],
    [
        "G2_5_2",
        "The Bone Pits"
    ],
    [
        "G2_6",
        "Valley of the Titans"
    ],
    [
        "G2_7",
        "The Titan Grotto"
    ],
    [
        "G2_8",
        "Deshar"
    ],
    [
        "G2_8a",
        "Deshar"
    ],
    [
        "G2_9_1",
        "Path of Mourning"
    ],
    [
        "G2_9_2",
        "The Spires of Deshar"
    ],
    [
        "G2_10_1",
        "Mawdun Quarry"
    ],
    [
        "G2_10_2",
        "Mawdun Mine"
    ],
    [
        "G2_11",
        "The Dreadnought's Wake"
    ],
    [
        "G2_12_1",
        "The Dreadnought"
    ],
    [
        "G2_12_2",
        "Dreadnought Vanguard"
    ],
    [
        "G2_13",
        "Trial of the Sekhemas"
    ],
    [
        "Sanctum_1",
        "Trial of the Sekhemas"
    ],
    [
        "Sanctum_1_Foyer_1",
        "Trial of the Sekhemas"
    ],
    [
        "Sanctum_1_Foyer_2",
        "Trial of the Sekhemas"
    ],
    [
        "Sanctum_1_Foyer_3",
        "Trial of the Sekhemas"
    ],
    [
        "Sanctum_2",
        "Trial of the Sekhemas"
    ],
    [
        "Sanctum_2_Foyer_1",
        "Trial of the Sekhemas"
    ],
    [
        "Sanctum_2_Foyer_2",
        "Trial of the Sekhemas"
    ],
    [
        "Sanctum_2_Foyer_3",
        "Trial of the Sekhemas"
    ],
    [
        "Sanctum_3",
        "Trial of the Sekhemas"
    ],
    [
        "Sanctum_3_Foyer_1",
        "Trial of the Sekhemas"
    ],
    [
        "Sanctum_3_Foyer_2",
        "Trial of the Sekhemas"
    ],
    [
        "Sanctum_3_Foyer_3",
        "Trial of the Sekhemas"
    ],
    [
        "Sanctum_4",
        "Trial of the Sekhemas"
    ],
    [
        "Sanctum_4_Foyer_1",
        "Trial of the Sekhemas"
    ],
    [
        "Sanctum_4_Foyer_2",
        "Trial of the Sekhemas"
    ],
    [
        "Sanctum_4_Foyer_3",
        "Trial of the Sekhemas"
    ],
    [
        "G3_town",
        "Ziggurat Encampment"
    ],
    [
        "G3_1",
        "Sandswept Marsh"
    ],
    [
        "G3_2_1",
        "Infested Barrens"
    ],
    [
        "G3_2_2",
        "The Matlan Waterways"
    ],
    [
        "G3_3",
        "Jungle Ruins"
    ],
    [
        "G3_4",
        "The Venom Crypts"
    ],
    [
        "G3_5",
        "Chimeral Wetlands"
    ],
    [
        "G3_6_1",
        "Jiquani's Machinarium"
    ],
    [
        "G3_6_2",
        "Jiquani's Sanctum"
    ],
    [
        "G3_7",
        "The Azak Bog"
    ],
    [
        "G3_8",
        "The Drowned City"
    ],
    [
        "G3_9",
        "The Molten Vault"
    ],
    [
        "G3_10",
        "The Trial of Chaos"
    ],
    [
        "G3_10_Airlock",
        "The Temple of Chaos"
    ],
    [
        "G3_11",
        "Apex of Filth"
    ],
    [
        "G3_12",
        "Temple of Kopec"
    ],
    [
        "G_Endgame_Town",
        "The Ziggurat Refuge"
    ],
    [
        "G3_14",
        "Utzaal"
    ],
    [
        "G3_15",
        "Library of Kamasa"
    ],
    [
        "G3_16",
        "Aggorat"
    ],
    [
        "G3_17",
        "The Black Chambers"
    ],
    [
        "C_G1_town",
        "Clearfell Encampment"
    ],
    [
        "C_G1_1",
        "The Riverbank"
    ],
    [
        "C_G1_2",
        "Clearfell"
    ],
    [
        "C_G1_3",
        "Mud Burrow"
    ],
    [
        "C_G1_4",
        "The Grelwood"
    ],
    [
        "C_G1_5",
        "The Red Vale"
    ],
    [
        "C_G1_6",
        "The Grim Tangle"
    ],
    [
        "C_G1_7",
        "Cemetery of the Eternals"
    ],
    [
        "C_G1_8",
        "Mausoleum of the Praetor"
    ],
    [
        "C_G1_9",
        "Tomb of the Consort"
    ],
    [
        "C_G1_10",
        "Root Hollow"
    ],
    [
        "C_G1_11",
        "Hunting Grounds"
    ],
    [
        "C_G1_12",
        "Freythorn"
    ],
    [
        "C_G1_13_1",
        "Ogham Farmlands"
    ],
    [
        "C_G1_13_2",
        "Ogham Village"
    ],
    [
        "C_G1_14",
        "The Manor Ramparts"
    ],
    [
        "C_G1_15",
        "Ogham Manor"
    ],
    [
        "C_G2_town",
        "The Ardura Caravan"
    ],
    [
        "C_G2_1",
        "Vastiri Outskirts"
    ],
    [
        "C_G2_2",
        "Traitor's Passage"
    ],
    [
        "C_G2_3",
        "The Halani Gates"
    ],
    [
        "C_G2_3a",
        "The Halani Gates"
    ],
    [
        "C_G2_3s",
        "The Halani Gates"
    ],
    [
        "C_G2_4_1",
        "Keth"
    ],
    [
        "C_G2_4_2",
        "The Lost City"
    ],
    [
        "C_G2_4_3",
        "Buried Shrines"
    ],
    [
        "C_G2_5_1",
        "Mastodon Badlands"
    ],
    [
        "C_G2_5_2",
        "The Bone Pits"
    ],
    [
        "C_G2_6",
        "Valley of the Titans"
    ],
    [
        "C_G2_7",
        "The Titan Grotto"
    ],
    [
        "C_G2_8",
        "Deshar"
    ],
    [
        "C_G2_9_1",
        "Path of Mourning"
    ],
    [
        "C_G2_9_2_",
        "The Spires of Deshar"
    ],
    [
        "C_G2_10_1",
        "Mawdun Quarry"
    ],
    [
        "C_G2_10_2",
        "Mawdun Mine"
    ],
    [
        "C_G2_11",
        "The Dreadnought's Wake"
    ],
    [
        "C_G2_12_1",
        "The Dreadnought"
    ],
    [
        "C_G2_12_2",
        "Dreadnought Vanguard"
    ],
    [
        "C_G3_town",
        "Ziggurat Encampment"
    ],
    [
        "C_G3_1",
        "Sandswept Marsh"
    ],
    [
        "C_G3_2_1",
        "Infested Barrens"
    ],
    [
        "C_G3_2_2",
        "The Matlan Waterways"
    ],
    [
        "C_G3_3",
        "Jungle Ruins"
    ],
    [
        "C_G3_4",
        "The Venom Crypts"
    ],
    [
        "C_G3_5",
        "Chimeral Wetlands"
    ],
    [
        "C_G3_6_1",
        "Jiquani's Machinarium"
    ],
    [
        "C_G3_6_2",
        "Jiquani's Sanctum"
    ],
    [
        "C_G3_7",
        "The Azak Bog"
    ],
    [
        "C_G3_8",
        "The Drowned City"
    ],
    [
        "C_G3_9",
        "The Molten Vault"
    ],
    [
        "C_G3_10_Airlock",
        "The Temple of Chaos"
    ],
    [
        "C_G3_11",
        "Apex of Filth"
    ],
    [
        "C_G3_12",
        "Temple of Kopec"
    ],
    [
        "C_G3_14",
        "Utzaal"
    ],
    [
        "C_G3_15",
        "Library of Kamasa"
    ],
    [
        "C_G3_16_",
        "Aggorat"
    ],
    [
        "C_G3_17",
        "The Black Chambers"
    ],
    [
        "MapLeaguePortal",
        "The Realmgate"
    ],
    [
        "MapVoidReliquary",
        "The Reliquary Vault"
    ],
    [
        "MapSpiderJungle",
        "Spider Jungle"
    ],
    [
        "MapRustbowl",
        "Rustbowl"
    ],
    [
        "MapRustbowl_NoBoss",
        "Rustbowl"
    ],
    [
        "MapBackwash",
        "Backwash"
    ],
    [
        "MapBackwash_NoBoss",
        "Backwash"
    ],
    [
        "MapBurialBog",
        "Burial Bog"
    ],
    [
        "MapBurialBog_NoBoss",
        "Burial Bog"
    ],
    [
        "MapInferno",
        "Inferno"
    ],
    [
        "MapInferno_NoBoss",
        "Inferno"
    ],
    [
        "MapWetlands",
        "Wetlands"
    ],
    [
        "MapWetlands_NoBoss",
        "Wetlands"
    ],
    [
        "MapBloomingField",
        "Blooming Field"
    ],
    [
        "MapBloomingField_NoBoss",
        "Blooming Field"
    ],
    [
        "MapKingdomsEdge",
        "Kingdom's Edge"
    ],
    [
        "MapCrimsonShores",
        "Crimson Shores"
    ],
    [
        "MapCrimsonShores_NoBoss",
        "Crimson Shores"
    ],
    [
        "MapCenotes",
        "Cenotes"
    ],
    [
        "MapCenotes_NoBoss",
        "Cenotes"
    ],
    [
        "MapSavanna",
        "Savannah"
    ],
    [
        "MapSavanna_NoBoss",
        "Savannah"
    ],
    [
        "MapFortress",
        "Fortress"
    ],
    [
        "MapFortress_NoBoss",
        "Fortress"
    ],
    [
        "MapDepths",
        "Forsaken Tides"
    ],
    [
        "MapPenitentiary",
        "Penitentiary"
    ],
    [
        "MapPenitentiary_NoBoss",
        "Penitentiary"
    ],
    [
        "MapLostTowers",
        "Lost Towers"
    ],
    [
        "MapBloodwood",
        "Bloodwood"
    ],
    [
        "MapBloodwood_NoBoss",
        "Bloodwood"
    ],
    [
        "MapSandspit",
        "Sandspit"
    ],
    [
        "MapSandspit_NoBoss",
        "Sandspit"
    ],
    [
        "MapForge",
        "Forge"
    ],
    [
        "MapForge_NoBoss",
        "Forge"
    ],
    [
        "MapSulphuricCaverns",
        "Sulphuric Caverns"
    ],
    [
        "MapSulphuricCaverns_NoBoss",
        "Sulphuric Caverns"
    ],
    [
        "MapGlacialRoad",
        "Glacial Road"
    ],
    [
        "MapMire",
        "Mire"
    ],
    [
        "MapMire_NoBoss",
        "Mire"
    ],
    [
        "MapAugury",
        "Augury"
    ],
    [
        "MapAugury_NoBoss",
        "Augury"
    ],
    [
        "MapExpanse",
        "Expanse"
    ],
    [
        "MapWoodland",
        "Woodland"
    ],
    [
        "MapWoodland_NoBoss",
        "Woodland"
    ],
    [
        "MapSump",
        "Sump"
    ],
    [
        "MapSump_NoBoss",
        "Sump"
    ],
    [
        "MapWillow",
        "Willow"
    ],
    [
        "MapWillow_NoBoss",
        "Willow"
    ],
    [
        "MapHive",
        "Hive"
    ],
    [
        "MapHive_NoBoss",
        "Hive"
    ],
    [
        "MapHeadland",
        "Headland"
    ],
    [
        "MapHeadland_NoBoss",
        "Headland"
    ],
    [
        "MapLoftySummit",
        "Lofty Summit"
    ],
    [
        "MapLoftySummit_NoBoss",
        "Lofty Summit"
    ],
    [
        "MapSlaughter",
        "Slaughter"
    ],
    [
        "MapNecropolis",
        "Necropolis"
    ],
    [
        "MapNecropolis_NoBoss",
        "Necropolis"
    ],
    [
        "MapCrypt",
        "Crypt"
    ],
    [
        "MapCrypt_NoBoss",
        "Crypt"
    ],
    [
        "MapHiddenGrotto",
        "Hidden Grotto"
    ],
    [
        "MapHiddenGrotto_NoBoss",
        "Hidden Grotto"
    ],
    [
        "MapSteamingSprings",
        "Steaming Springs"
    ],
    [
        "MapSteamingSprings_NoBoss",
        "Steaming Springs"
    ],
    [
        "MapSeepage",
        "Seepage"
    ],
    [
        "MapSeepage_NoBoss",
        "Seepage"
    ],
    [
        "MapRiverside",
        "Riverside"
    ],
    [
        "MapRiverside_NoBoss",
        "Riverside"
    ],
    [
        "MapHowlingHalls",
        "Howling Halls"
    ],
    [
        "MapCascade",
        "Cascade"
    ],
    [
        "MapPromenade",
        "Overgrown Promenade"
    ],
    [
        "MapRavine",
        "Ravine"
    ],
    [
        "MapRavine_NoBoss",
        "Ravine"
    ],
    [
        "MapFrigidDepths",
        "Frigid Depths"
    ],
    [
        "MapSpiderWoods",
        "Spider Woods"
    ],
    [
        "MapSpiderWoods_NoBoss",
        "Spider Woods"
    ],
    [
        "MapAbyss",
        "Abyss"
    ],
    [
        "MapAbyss_NoBoss",
        "Abyss"
    ],
    [
        "MapDesertTower",
        "Desert Tower"
    ],
    [
        "MapGrimhaven",
        "Grimhaven"
    ],
    [
        "MapGrimhaven_NoBoss",
        "Grimhaven"
    ],
    [
        "MapVaalVillage",
        "Vaal Village"
    ],
    [
        "MapVaalOutskirts",
        "Vaal Outskirts"
    ],
    [
        "MapSlick",
        "Slick"
    ],
    [
        "MapSlick_NoBoss",
        "Slick"
    ],
    [
        "MapVaalCity",
        "Vaal City"
    ],
    [
        "MapVaalCity_NoBoss",
        "Vaal City"
    ],
    [
        "MapSteppe",
        "Steppe"
    ],
    [
        "MapSteppe_NoBoss",
        "Steppe"
    ],
    [
        "MapOpulence",
        "Opulence"
    ],
    [
        "MapSwampTower",
        "Sinking Spire"
    ],
    [
        "MapRockpools",
        "Rockpools"
    ],
    [
        "MapRockpools_NoBoss",
        "Rockpools"
    ],
    [
        "MapCreek",
        "Creek"
    ],
    [
        "MapCreek_NoBoss",
        "Creek"
    ],
    [
        "MapLushBurrow",
        "Lush Burrow"
    ],
    [
        "MapUmbra",
        "Umbra"
    ],
    [
        "MapInfestation",
        "Infestation"
    ],
    [
        "MapDerelictMansion_NoBoss",
        "Derelict Mansion"
    ],
    [
        "MapOutlands",
        "Outlands"
    ],
    [
        "MapOutlands_NoBoss",
        "Outlands"
    ],
    [
        "MapBastille",
        "Bastille"
    ],
    [
        "MapBastille_NoBoss",
        "Bastille"
    ],
    [
        "MapDecay",
        "Decay"
    ],
    [
        "MapDecay_NoBoss",
        "Decay"
    ],
    [
        "MapMineshaft",
        "Mineshaft"
    ],
    [
        "MapMineshaft_NoBoss",
        "Mineshaft"
    ],
    [
        "MapDeserted",
        "Deserted"
    ],
    [
        "MapDeserted_NoBoss",
        "Deserted"
    ],
    [
        "MapOasis",
        "Oasis"
    ],
    [
        "MapOasis_NoBoss",
        "Oasis"
    ],
    [
        "MapFreight",
        "Freight"
    ],
    [
        "MapFreight_NoBoss",
        "Freight"
    ],
    [
        "MapBastion",
        "Bastion"
    ],
    [
        "MapBastion_NoBoss",
        "Bastion"
    ],
    [
        "MapRefuge",
        "Refuge"
    ],
    [
        "MapRefuge_NoBoss",
        "Refuge"
    ],
    [
        "MapDieback",
        "Dieback"
    ],
    [
        "MapAlpineRidge",
        "Alpine Ridge"
    ],
    [
        "MapSunTemple",
        "Sun Temple"
    ],
    [
        "MapSunTemple_NoBoss",
        "Sun Temple"
    ],
    [
        "MapChannel",
        "Channel"
    ],
    [
        "MapChannel_NoBoss",
        "Channel"
    ],
    [
        "MapVaalFoundry",
        "Vaal Foundry"
    ],
    [
        "MapVaalFoundry_NoBoss",
        "Vaal Foundry"
    ],
    [
        "MapVaalFactory",
        "Vaal Factory"
    ],
    [
        "MapVaalFactory_NoBoss",
        "Vaal Factory"
    ],
    [
        "MapMesa",
        "Mesa"
    ],
    [
        "MapBluff",
        "Bluff"
    ],
    [
        "MapUniqueUntaintedParadise",
        "Untainted Paradise"
    ],
    [
        "MapUniqueVault",
        "Vaults of Kamasa"
    ],
    [
        "MapUniqueCastaway",
        "Castaway"
    ],
    [
        "MapUniqueMegalith",
        "Megalith"
    ],
    [
        "MapUniqueMerchant01_Chimeral",
        "Merchant's Campsite"
    ],
    [
        "MapUniqueMerchant01_Oasis",
        "Merchant's Campsite"
    ],
    [
        "MapUniqueMerchant01_Sandswept",
        "Merchant's Campsite"
    ],
    [
        "MapUniqueMerchant02_Crimson",
        "Merchant's Campsite"
    ],
    [
        "MapUniqueMerchant02_Farmland",
        "Merchant's Campsite"
    ],
    [
        "MapUniqueMerchant02_Riverbank",
        "Merchant's Campsite"
    ],
    [
        "MapUniqueMerchant03_Beach",
        "Moment of Zen"
    ],
    [
        "MapUniqueMerchant03_Tropical",
        "Moment of Zen"
    ],
    [
        "MapUniqueMerchant03_Raft",
        "Moment of Zen"
    ],
    [
        "MapUniqueMerchant04_PirateShip",
        "The Voyage"
    ],
    [
        "MapUberBoss_IronCitadel",
        "The Iron Citadel"
    ],
    [
        "MapUberBoss_CopperCitadel",
        "The Copper Citadel"
    ],
    [
        "MapUberBoss_StoneCitadel",
        "The Stone Citadel"
    ],
    [
        "MapUberBoss_Monolith",
        "The Burning Monolith"
    ],
    [
        "ExpeditionLogBook_Peninsula",
        "Craggy Peninsula"
    ],
    [
        "ExpeditionLogBook_Tropical",
        "Lush Isle"
    ],
    [
        "ExpeditionLogBook_Tundra",
        "Frigid Bluffs"
    ],
    [
        "ExpeditionLogBook_Atoll",
        "Barren Atoll"
    ],
    [
        "ExpeditionLogBook_Digsite",
        "Abandonded Excavation"
    ],
    [
        "ExpeditionSubArea_Cavern",
        "Smuggler's Den"
    ],
    [
        "ExpeditionSubArea_Kalguur",
        "Kalguuran Tomb"
    ],
    [
        "ExpeditionSubArea_OlrothBoss",
        "Kalguuran Tomb"
    ],
    [
        "ExpeditionSubArea_Precursor",
        "[DNT] Expedition SubArea - Precursor"
    ],
    [
        "ExpeditionSubArea_Shrike",
        "Rancid Nest"
    ],
    [
        "ExpeditionSubArea_Siren",
        "Hidden Aquifer"
    ],
    [
        "ExpeditionSubArea_Volcano",
        "Sulphur Mines"
    ],
    [
        "Delirium_Act1Town",
        "Clearfell Lumbermill"
    ],
    [
        "Delirium_Act2Reveal",
        "Garukhan's Tomb"
    ],
    [
        "Delirium_Act3Town",
        "Sunken Pyramid"
    ],
    [
        "Delirium_VastiriOutskirts",
        "[DNT] Vastiri Outpost"
    ],
    [
        "BreachDomain_01",
        "Twisted Domain"
    ],
    [
        "RitualLeagueBoss",
        "Crux of Nothingness"
    ],
    [
        "MapHideoutFelled_Claimable",
        "Felled Hideout"
    ],
    [
        "MapHideoutLimestone_Claimable",
        "Limestone Hideout"
    ],
    [
        "MapHideoutShrine_Claimable",
        "Shrine Hideout"
    ],
    [
        "MapHideoutCanal_Claimable",
        "Canal Hideout"
    ]
]);