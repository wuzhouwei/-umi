
import development from './testingEnvironment.json'
import main from './main'

const env = 'development'

let out = {}

switch (env) {
  case 'main':
    out = {...main, env}
    break;
  case 'development':
    out = {...development, env}
    break;
  default:
    out = {...development, env}
}

export default out
