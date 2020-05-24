import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { withKnobs, text, number } from '@storybook/addon-knobs';

const TITLE_TEXT = "The quick brown fox jumps over the lazy dog."
const BODY_TEXT = "Aliquam erat volutpat.  Nunc eleifend leo vitae magna.  In id erat non orci commodo lobortis.  Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus.  Sed diam.  Praesent fermentum tempor tellus.  Nullam tempus.  Mauris ac felis vel velit tristique imperdiet.  Donec at pede.  Etiam vel neque nec dui dignissim bibendum.  Vivamus id enim.  Phasellus neque orci, porta a, aliquet quis, semper a, massa.  Phasellus purus.  Pellentesque tristique imperdiet tortor.  Nam euismod tellus id erat."
const SHORT_TEXT = "Sample text"

function makeSample(variant: string, sampleText: string): () => JSX.Element {
  return () => {
    return (
      <Box my={2} mb={5}>
        <Typography variant={variant} color='textPrimary'>{sampleText}</Typography>
        <br/>
        <Typography variant={variant} color='textSecondary'>{sampleText}</Typography>
      </Box>
    )
  }
}

//////////////////////////////////  EXAMPLES  //////////////////////////////////
export default {
  title: 'Core/Typography',
  component: Typography,
  description: 'Catlab Typography',
  decorators: [withKnobs]
}

export function summary(): JSX.Element {
  return (
    <div style={{ margin: '32px' }}>
      <Typography variant='overline'>h111111</Typography>
      {heading1()}
      <Typography variant='overline'>h2</Typography>
      {heading2()}
      <Typography variant='overline'>h3</Typography>
      {heading3()}
      <Typography variant='overline'>h4</Typography>
      {heading4()}
      <Typography variant='overline'>h5</Typography>
      {heading5()}
      <Typography variant='overline'>h6</Typography>
      {heading6()}
      <Typography variant='overline'>body1</Typography>
      {body1()}
      <Typography variant='overline'>body2</Typography>
      {body2()}
      <Typography variant='overline'>button text</Typography>
      {buttonText()}
      <Typography variant='overline'>caption text</Typography>
      {captionText()}
      <Typography variant='overline'>overline text</Typography>
      {overlineText()}
    </div>
  )
}

export const heading1 = makeSample('h1', TITLE_TEXT)
export const heading2 = makeSample('h2', TITLE_TEXT)
export const heading3 = makeSample('h3', TITLE_TEXT)
export const heading4 = makeSample('h4', TITLE_TEXT)
export const heading5 = makeSample('h5', TITLE_TEXT)
export const heading6 = makeSample('h6', TITLE_TEXT)
export const body1 = makeSample('body1', BODY_TEXT)
export const body2 = makeSample('body2', BODY_TEXT)
export const buttonText = makeSample('button', SHORT_TEXT)
export const captionText = makeSample('caption', SHORT_TEXT)
export const overlineText = makeSample('overline', SHORT_TEXT)
