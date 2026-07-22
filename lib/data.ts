import type { Character, Project, Scene, Song } from "./types";
export const songs: Song[]=[
 {id:"neon-afterglow",title:"Neon Afterglow",artist:"LUMEN",genre:"Synth-pop",mood:"Nostalgic",bpm:118,duration:"03:42",status:"In Production",progress:72,updated:"12 min ago"},
 {id:"paper-moon",title:"Paper Moon",artist:"Mira Vale",genre:"Dream pop",mood:"Ethereal",bpm:92,duration:"04:08",status:"Planning",progress:34,updated:"Yesterday"},
 {id:"midnight-radio",title:"Midnight Radio",artist:"North Arcade",genre:"Alt-rock",mood:"Restless",bpm:132,duration:"03:18",status:"Review",progress:88,updated:"2 days ago"},
 {id:"soft-static",title:"Soft Static",artist:"LUMEN",genre:"Ambient R&B",mood:"Intimate",bpm:76,duration:"03:56",status:"Complete",progress:100,updated:"Jul 16"},
];
export const projects: Project[]=[
 {id:"lumen-era",name:"LUMEN — Afterglow Era",brand:"LUMEN",album:"City of Glass",songs:6,assets:148,progress:72,status:"In Production"},
 {id:"mira-paper",name:"Mira Vale — Paper Moon",brand:"Mira Vale",album:"Paper Moon",songs:4,assets:63,progress:34,status:"Planning"},
 {id:"north-arcade",name:"North Arcade — Live Signal",brand:"North Arcade",album:"Live Signal",songs:8,assets:205,progress:88,status:"Review"},
];
export const characters: Character[]=[
 {id:"c1",name:"Nova",role:"Lead performer",height:"168 cm",weight:"52 kg",hair:"Silver bob",eyes:"Amber",costume:"Chrome jacket, black silk",personality:"Quiet, observant, defiant",elementId:"EL-NOVA-001",voice:"Lumen V2",color:"#e8a55d"},
 {id:"c2",name:"Echo",role:"Mirror double",height:"168 cm",weight:"52 kg",hair:"Jet black",eyes:"Ice blue",costume:"Charcoal tailored suit",personality:"Controlled, enigmatic",elementId:"EL-ECHO-002",voice:"Silent",color:"#7489a8"},
 {id:"c3",name:"The Driver",role:"Supporting",height:"184 cm",weight:"78 kg",hair:"Dark brown",eyes:"Brown",costume:"Vintage leather coat",personality:"Watchful, protective",elementId:"EL-DRV-004",voice:"Atlas Low",color:"#80644f"},
];
export const scenes: Scene[]=[
 {id:"s1",number:1,start:"00:00",end:"00:14",character:"Nova",location:"Empty metro platform",mood:"Suspended",camera:"Wide low angle",movement:"Slow dolly in",lens:"24mm",lighting:"Amber practicals",weather:"Light rain",prompt:"Nova stands alone beneath flickering amber lights on an empty midnight platform.",assetStatus:"Ready"},
 {id:"s2",number:2,start:"00:14",end:"00:31",character:"Nova",location:"Night train",mood:"Introspective",camera:"Profile close-up",movement:"Lateral track",lens:"50mm",lighting:"Passing neon",weather:"—",prompt:"Profile portrait through a rain-streaked train window, neon city reflections drifting across her face.",assetStatus:"Generating"},
 {id:"s3",number:3,start:"00:31",end:"00:48",character:"Echo",location:"Mirror corridor",mood:"Uncanny",camera:"Centered medium",movement:"Locked, subtle push",lens:"35mm",lighting:"Cold fluorescent",weather:"—",prompt:"Echo waits at the far end of an infinite mirrored corridor, perfectly centered and motionless.",assetStatus:"Draft"},
 {id:"s4",number:4,start:"00:48",end:"01:06",character:"Nova, Echo",location:"Rooftop",mood:"Confrontational",camera:"Circular two-shot",movement:"Orbit clockwise",lens:"28mm",lighting:"Blue hour rim",weather:"Wind",prompt:"Two identical figures circle each other on a wet rooftop at blue hour, city glowing below.",assetStatus:"Missing"},
];
export const storySections=["Intro","Verse 1","Pre Chorus","Chorus","Verse 2","Bridge","Final Chorus","Outro"].map((name,i)=>({name,time:["00:00–00:14","00:14–00:48","00:48–01:06","01:06–01:38","01:38–02:12","02:12–02:41","02:41–03:25","03:25–03:42"][i],emotion:["Anticipation","Longing","Unease","Release","Recognition","Defiance","Catharsis","Acceptance"][i],description:["Nova waits at the last train platform as the city flickers around her.","Moving through the night train, memories appear in the window reflections.","A second version of Nova—Echo—emerges at the end of a mirrored hall.","They meet on a rain-wet rooftop as the skyline blooms into color.","Nova follows fragments of Echo through deserted streets and arcades.","The chase stops. Nova turns to face the version of herself she avoided.","Both figures move as one while dawn breaks over the glass city.","Nova rides alone, but her reflection finally moves with her."][i],camera:["Slow dolly","Lateral track","Symmetric push","360° orbit","Handheld follow","Static close-up","Crane rise","Locked wide"][i],lighting:["Amber practical","Neon reflection","Cold white","Electric blue","Mixed neon","Single hard key","Sunrise gold","Soft morning"][i]}));
