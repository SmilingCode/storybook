import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { ColorCard } from './'
import * as t from '../colours'

function makeSample(title: string, colorString: string): () => JSX.Element {
  return () => {
    return <Box m={1}><ColorCard title={title} colorString={colorString} /></Box>
  }
}

//////////////////////////////////  EXAMPLES  //////////////////////////////////
export default {
  title: 'Core/Colours',
  description: 'Theme Colours'
}

export function summary(): JSX.Element {
  return (
    <Box>
      <Box p={2}>
        <Typography variant='overline' paragraph>
          Text
        </Typography>
        <Box display='flex' justifyContent='flex-start' flexWrap='wrap'>
          {textPrimary()}
          {textSecondary()}
          {textDisabled()}
        </Box>
      </Box>
      <Box p={2}>
        <Typography variant='overline' paragraph>
          Primary
        </Typography>
        <Box display='flex' justifyContent='flex-start' flexWrap='wrap'>
          {primaryMain()}
          {primarySelected()}
          {primaryHover()}
          {primaryPressed()}
        </Box>
      </Box>
      <Box p={2}>
        <Typography variant='overline' paragraph>
          Secondary
        </Typography>
        <Box display='flex' justifyContent='flex-start' flexWrap='wrap'>
          {secondaryMain()}
          {secondarySelected()}
          {secondaryHover()}
          {secondaryPressed()}
        </Box>
      </Box>
      <Box p={2}>
        <Typography variant='overline' paragraph>
          GREY
        </Typography>
        <Box display='flex' justifyContent='flex-start' flexWrap='wrap'>
          {grey_0()}
          {grey_1()}
          {grey_2()}
          {grey_3()}
          {grey_4()}
          {grey_5()}
          {disabled()}
          {scrim_16()}
          {scrim_40()}
        </Box>
      </Box>
      <Box p={2}>
        <Typography variant='overline' paragraph>
          UI
        </Typography>
        <Box display='flex' justifyContent='flex-start' flexWrap='wrap'>
          {uiError()}
          {uiWarning()}
          {uiSuccess()}
          {uiSuccessHover()}
        </Box>
        <Box display='flex' justifyContent='flex-start' flexWrap='wrap'>
          {uiDefaultBackground()}
          {uiErrorBackground()}
          {uiWarningBackground()}
          {uiSuccessBackground()}
        </Box>
      </Box>
      <Box p={2}>
        <Typography variant='overline' paragraph>
          Uppley
        </Typography>
        <Box display='flex' justifyContent='flex-start' flexWrap='wrap'>
          {uppleyTeacher()}
          {uppleyStudent()}
          {uppleyNewStudent()}
        </Box>
      </Box>
      <Box p={2}>
        <Typography variant='overline' paragraph>
          Edumap
        </Typography>
        <Box display='flex' justifyContent='flex-start' flexWrap='wrap'>
          {edumapPrimary()}
        </Box>
      </Box>
      <Box p={2}>
        <Typography variant='overline' paragraph>
          KLA
        </Typography>
        <Box display='flex' justifyContent='flex-start' flexWrap='wrap'>
          {klaCreativeArts()}
          {klaEnglish()}
          {klaHSIE()}
          {klaLanguage()}
          {klaMathematics()}
          {klaPDHPE()}
          {klaScience()}
          {klaTechnology()}
          {klaGeography()}
        </Box>
      </Box>
    </Box>
  )
}

export const textPrimary = makeSample("text primary", t.TEXT_PRIMARY)
export const textSecondary = makeSample("text secondary", t.TEXT_SECONDARY)
export const textDisabled = makeSample('text disabled', t.TEXT_DISABLED)
export const primaryMain = makeSample('primary main', t.PRIMARY_MAIN)
export const primarySelected = makeSample('primary selected', t.PRIMARY_SELECTED)
export const primaryHover = makeSample('primary hover', t.PRIMARY_HOVER)
export const primaryPressed = makeSample('primary pressed', t.PRIMARY_PRESSED)
export const secondaryMain = makeSample('secondary main', t.SECONDARY_MAIN)
export const secondarySelected = makeSample('secondary selected', t.SECONDARY_SELECTED)
export const secondaryHover = makeSample('secondary hover', t.SECONDARY_HOVER)
export const secondaryPressed = makeSample('secondary pressed', t.SECONDARY_PRESSED)
export const grey_0 = makeSample('grey 0', t.GREY_0)
export const grey_1 = makeSample('grey 1', t.GREY_1)
export const grey_2 = makeSample('grey 2', t.GREY_2)
export const grey_3 = makeSample('grey 3', t.GREY_3)
export const grey_4 = makeSample('grey 4', t.GREY_4)
export const grey_5 = makeSample('grey 5', t.GREY_5)
export const disabled = makeSample('disabled', t.DISABLED)
export const scrim_16 = makeSample('scrim 16%', t.SCRIM_16)
export const scrim_40 = makeSample('scrim 40%', t.SCRIM_40)
export const uiError = makeSample('UI error', t.UI_ERROR)
export const uiWarning = makeSample('UI warning', t.UI_WARNING)
export const uiSuccess = makeSample('UI success', t.UI_SUCCESS)
export const uiDefaultBackground = makeSample('UI default background', t.UI_DEFAULT_BACKGROUND)
export const uiErrorBackground = makeSample('UI error background', t.UI_ERROR_BACKGROUND)
export const uiWarningBackground = makeSample('UI warning background', t.UI_WARNING_BACKGROUND)
export const uiSuccessBackground = makeSample('UI success background', t.UI_SUCCESS_BACKGROUND)
export const uiSuccessHover = makeSample('UI success hover', t.UI_SUCCESS_HOVER)
export const uppleyTeacher = makeSample('uppley teacher', t.UPPLEY_TEACHER)
export const uppleyStudent = makeSample('uppley student', t.UPPLEY_STUDENT)
export const uppleyNewStudent = makeSample('uppley new student', t.UPPLEY_NEW_STUDENT)
export const edumapPrimary = makeSample('edumap primary', t.EDUMAP_PRIMARY)
export const klaCreativeArts = makeSample('kla creative arts', t.KLA_CREATIVE_ARTS)
export const klaEnglish = makeSample('kla english', t.KLA_ENGLISH)
export const klaHSIE = makeSample('kla HSIE', t.KLA_HSIE)
export const klaLanguage = makeSample('kla language', t.KLA_LANGUAGES)
export const klaMathematics = makeSample('kla Mathematics', t.KLA_MATHEMATICS)
export const klaPDHPE = makeSample('kla PDHPE', t.KLA_PDHPE)
export const klaScience = makeSample('kla science', t.KLA_SCIENCE)
export const klaTechnology = makeSample('kla technology', t.KLA_TECHNOLOGY)
export const klaGeography = makeSample('kla geography', t.KLA_GEOGRAPHY)
