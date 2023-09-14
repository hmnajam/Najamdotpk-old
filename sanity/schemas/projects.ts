import {defineField, defineType} from 'sanity'

export default defineType({
    name:"projects",
    title:"Projects",
    type:"document",
    fields:[
      {
        name:"project",
        title:"Porject Name",
        type:'string',
      },
      {
        name:"creator",
        title:"Course Creator",
        type:'string',
      },
      {
        name:"issuer",
        title:"Certificate Issuer",
        type:'string',
      },
      {
        name:"image",
        title:"Upload Certificate",
        type:'image',
      },
      {
        name:"link",
        title:"Verification Link",
        type:'url',
      },
      {
        "name": "block",
        "title": "Verification Link",
        "type": "array",
        "of": [
          {
            "type": "block"
          }
        ]
      }
    ]

  })
