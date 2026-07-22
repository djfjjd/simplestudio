import StudioApp from "@/components/studio-app";
export default async function Page({params}:{params:Promise<{section:string}>}){const {section}=await params;return <StudioApp section={section}/>}
