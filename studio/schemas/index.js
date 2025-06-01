// Importez vos schémas ici
// Par exemple:
// import { userSchema } from './user'
// import { postSchema } from './post'

import { talentSchema } from './talent'
import { serviceSchema } from './service'
import { testimonialSchema } from './testimonial'

export const schema = {
  types: [
    talentSchema,
    serviceSchema,
    testimonialSchema,
    // userSchema,
    // postSchema,
  ],
} 