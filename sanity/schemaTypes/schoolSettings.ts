import { defineField, defineType } from "sanity";
export default defineType({ name: "schoolSettings", title: "School settings", type: "document", fields: [
  defineField({name:"name",title:"School name",type:"string"}), defineField({name:"motto",title:"Motto",type:"string"}), defineField({name:"about",title:"About",type:"text"}), defineField({name:"vision",title:"Vision",type:"text"}), defineField({name:"mission",title:"Mission",type:"text"}), defineField({name:"address",title:"Address",type:"string"}), defineField({name:"phone",title:"Phone",type:"string"}), defineField({name:"email",title:"Email",type:"string"}), defineField({name:"heroImage",title:"Hero image",type:"image",options:{hotspot:true}})
]});
