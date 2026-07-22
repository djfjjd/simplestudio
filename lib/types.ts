export type Status = "Planning"|"In Production"|"Review"|"Complete";
export interface Song { id:string; title:string; artist:string; genre:string; mood:string; bpm:number; duration:string; status:Status; progress:number; updated:string; }
export interface Scene { id:string; number:number; start:string; end:string; character:string; location:string; mood:string; camera:string; movement:string; lens:string; lighting:string; weather:string; prompt:string; assetStatus:string; }
export interface Character { id:string; name:string; role:string; height:string; weight:string; hair:string; eyes:string; costume:string; personality:string; elementId:string; voice:string; color:string; }
export interface Project { id:string; name:string; brand:string; album:string; songs:number; assets:number; progress:number; status:Status; }
