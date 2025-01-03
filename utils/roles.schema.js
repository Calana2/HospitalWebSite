import Operation from './../resources/Operation.js'

const Operation_Endpoints = new Operation()

const Rol = {
  "Admin": {
    "permisions": {
      "get": {
        "template":{
          "admin": true,
          "informacion": true,
          "ingresar": true,
          "login":true,
          "notificaciones": true,
          "repitlogin": true,
          "salas": true,
					"permissionDenied": true,
					"changepassword": true
        },
        "patient" : true,
        "user" : true,
        "notification" : true,
        "operation" : true
      },
      "post": {
        "patient" : true,
        "user" : true,
        "notification" : true,
        "operation" : true
      },
      "patch": {
        "patient" : true,
        "user" : true,
        "notification" : true,
        "operation" : true
      },
      "delete": {
        "patient" : true,
        "user" : true,
        "notification" : true,
        "operation" : true
      }
    }
  },
  "Doctor": {
    "permisions": {
      "get": {
        "template":{
          "admin": false,
          "informacion": true,
          "ingresar": true,
          "login":true,
          "notificaciones": true,
          "repitlogin": true,
          "salas": true,
					"permissionDenied": true,
					"changepassword": true
        },
        "patient" : true,
        "user" : false,
        "notification" : true,
        "operation" : true
      },
      "post": {
        "patient" : true,
        "user" : false,
        "notification" : false,
        "operation" : true
      },
      "patch": {
        "patient" : true,
        "user" : false,
        "notification" : true,
        "operation" : true
      },
      "delete": {
        "patient" : true,
        "user" : false,
        "notification" : true,
        "operation" : false
      }
		}
  },
  "Director": {
    "permisions": {
      "get": {
        "template":{
          "admin": false,
          "informacion": true,
          "ingresar": true,
          "login":true,
          "notificaciones": true,
          "repitlogin": true,
          "salas": true,
					"permissionDenied": true,
					"changepassword": true
        },
        "patient" : true,
        "user" : true,
        "notification" : true,
        "operation" : true
      },
      "post": {
        "patient" : true,
        "user" : false,
        "notification" : true,
        "operation" : false
      },
      "patch": {
        "patient" : true,
        "user" : false,
        "notification" : true,
        "operation" : true
      },
      "delete": {
        "patient" : true,
        "user" : false,
        "notification" : true,
        "operation" : false
      }
    }
  },
  "Nurse": {
    "permisions": {
      "get": {
        "template":{
          "admin": false,
          "informacion": true,
          "ingresar": false,
          "login":true,
          "notificaciones": true,
          "repitlogin": true,
          "salas": true,
					"permissionDenied": true,
					"changepassword": true
        },
        "patient" : true,
        "user" : false,
        "notification" : true,
        "operation" : false
      },
      "post": {
        "patient" : false,
        "user" : false,
        "notification" : false,
        "operation" : false
      },
      "patch": {
        "patient" : false,
        "user" : false,
        "notification" : true,
        "operation" : false
      },
      "delete": {
        "patient" : false,
        "user" : false,
        "notification" : true,
        "operation" : false
      }
    }
  },
  "Recepcionist": {
    "permisions": {
      "get": {
        "template":{
          "admin": false,
          "informacion": true,
          "ingresar": true,
          "login":true,
          "notificaciones": true,
          "repitlogin": true,
          "salas": true,
					"permissionDenied": true,
					"changepassword": true
        },
        "patient" : true,
        "user" : true,
        "notification" : true,
        "operation" : true
      },
      "post": {
        "patient" : true,
        "user" : false,
        "notification" : true,
        "operation" : false
      },
      "patch": {
        "patient" : false,
        "user" : false,
        "notification" : true,
        "operation" : true
      },
      "delete": {
        "patient" : false,
        "user" : false,
        "notification" : true,
        "operation" : false
      }
    }
  },
}

const roles = ["Admin", "Director", "Doctor", "Nurse", "Recepcionist"]
const actions = ["get", "post", "patch", "delete"]
const resources = ["patient", "user", "notification", "operation"]
const templates = ["admin", "informacion", "ingresar", "login", "notificaciones", "repitlogin", "salas", "permissionDenied", "changepassword"]
const staticEndpoints = ["js", "css", "img", "assets"]

export async function actionAccessControl(a = 0/*ROL*/, b = 0/*ACTION*/, c = 0/*RESOURCE*/, notification_id = "", username = "", operation_id = ""){
return new Promise( async (resolve, reject)=>{
  const rol = roles[a]
  console.log("Rol en actionAccess:",rol)
  const action = actions[b]
  const resource = resources[c]
  console.log("PERMISO PARA ROL", rol,"A",action,"EN EL RECURSO",resource)
  console.log("Resource en actionAccess",resource, ":", Rol[rol]["permisions"][action][resource])

  if (Rol[rol]["permisions"][action][resource]){resolve(true)}
  else resolve(false)})
}

export async function staticAccessControl(rol, template){
return new Promise( async (resolve, reject)=>{
  console.log("Rol en staticAccess:",roles[rol],"Template:", template)
  console.log("Acceso estatico a",template, ":",Rol[roles[rol]]["permisions"]["get"]["template"][template])
  if (Rol[roles[rol]]["permisions"]["get"]["template"][template]){
    resolve(true)
  }
  else {
    resolve(false)
  }})
}
