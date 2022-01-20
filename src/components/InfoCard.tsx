import { CardInfo } from './FromRow';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function BasicCard(props: CardInfo) {
  return (
    <Card className="card-info">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.name}
        </Typography>
        <p></p>
        <Typography variant="h4" component="div">
          <b>{props.value === 0 ?
            <p className='none-text'>정보가 없습니다</p> : props.value}</b>
        </Typography>
      </CardContent>
    </Card>
  );
}
