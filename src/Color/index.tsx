import React from 'react';
import Color from 'color';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

type Props = {
  title: string;
  colorString: string;
};

export default function ColorCard({ title, colorString }: Props): JSX.Element {
  const color = Color(colorString);

  return (
    <Card
      style={{
        background: color.rgb().string(),
        color: color.isLight() ? '#000' : '#FFF',
        width: '220px',
        height: '100%'
      }}
    >
      <CardContent>
        <Box>
          <Typography variant='overline' paragraph>
            {title}
          </Typography>
          <Typography variant='h6' gutterBottom>
            {color.hex()}
          </Typography>
          <Typography variant='h6' gutterBottom>
            {color.rgb().string()}
          </Typography>
        </Box>
        <Box display='flex'>
          <Box flex='1' display='flex' flexDirection='column'>
            <pre>
              R {Math.round(color.red())}
              <br />G {Math.round(color.green())}
              <br />B {Math.round(color.blue())}
              <br />A {color.alpha()}
            </pre>
          </Box>
          <Box flex='1' display='flex' flexDirection='column'>
            <pre>
              C {Math.round(color.cyan())}
              <br />M {Math.round(color.magenta())}
              <br />Y {Math.round(color.yellow())}
              <br />K {Math.round(color.black())}
            </pre>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
