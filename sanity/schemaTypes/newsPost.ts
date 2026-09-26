import { defineField, defineType } from "sanity";
export default defineType({name:"newsPost",title:"News post",type:"document",fields:[
  defineField({name:"title",title:"Title",type:"string",validation:r=>r.required()}), defineField({name:"slug",title:"Slug",type:"slug",options:{source:"title",maxLength:96},validation:r=>r.required()}), defineField({name:"excerpt",title:"Excerpt",type:"text",rows:3}), defineField({name:"coverImage",title:"Cover image",type:"image",options:{hotspot:true}}), defineField({name:"category",title:"Category",type:"string"}), defineField({name:"publishedAt",title:"Published at",type:"datetime",validation:r=>r.required()}), defineField({name:"body",title:"Article",type:"array",of:[{type:"block"},{type:"image",options:{hotspot:true}}]})
]});
