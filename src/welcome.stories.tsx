import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

export default {
  title: "Welcome"
}

export function summary() {
  return (
    <Box>
      <Typography variant="h3">
        Catlab Design System
      </Typography>
    </Box>
  )
}
