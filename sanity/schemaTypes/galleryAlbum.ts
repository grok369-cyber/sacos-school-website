import { defineField, defineType } from "sanity";
export default defineType({name:"galleryAlbum",title:"Gallery item",type:"document",fields:[
  defineField({name:"title",title:"Title",type:"string",validation:r=>r.required()}), defineField({name:"coverImage",title:"Image",type:"image",options:{hotspot:true},validation:r=>r.required()}), defineField({name:"caption",title:"Caption",type:"text",rows:3})
]});
