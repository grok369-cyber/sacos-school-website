import { defineField, defineType } from "sanity";
export default defineType({name:"event",title:"Event",type:"document",fields:[
  defineField({name:"title",title:"Title",type:"string",validation:r=>r.required()}), defineField({name:"date",title:"Date",type:"datetime",validation:r=>r.required()}), defineField({name:"location",title:"Location",type:"string"}), defineField({name:"excerpt",title:"Short description",type:"text",rows:3}), defineField({name:"coverImage",title:"Image",type:"image",options:{hotspot:true}})
]});
