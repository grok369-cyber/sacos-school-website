import { defineField, defineType } from "sanity";
export default defineType({name:"staffMember",title:"Staff member",type:"document",fields:[
  defineField({name:"name",title:"Name",type:"string",validation:r=>r.required()}), defineField({name:"position",title:"Position",type:"string",validation:r=>r.required()}), defineField({name:"department",title:"Department",type:"string"}), defineField({name:"photo",title:"Photo",type:"image",options:{hotspot:true}}), defineField({name:"bio",title:"Biography",type:"text",rows:5}), defineField({name:"order",title:"Display order",type:"number"})
]});
