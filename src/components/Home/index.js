import React from 'react'

import { withAuthorization } from '../Session'

const HomeComponent = () => <div>HomeComponent</div>

const condition = authUser => !!authUser

export default withAuthorization(condition)(HomeComponent)