import {defineField, defineType} from 'sanity'

export default defineType(
    {
        name:"certificates",
        title:"Certificates",
        type:"document",
        fields:[
          {
            name:"course",
            title:"Course Name",
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
