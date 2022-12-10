import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';


const cards = [1, 2, 3];

const theme = createTheme();

export default function Selection() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline/>
			<main>
				<Box
					sx={{
						bgcolor: 'background.paper',
						pt: 8,
						pb: 6,
					}}
				>
					<Container maxWidth="md">
						<Typography
							component="h1"
							variant="h2"
							align="center"
							color="text.primary"
							gutterBottom
						>
							본인 확인을 진행합니다
						</Typography>
						<Typography variant="h5" align="center" color="text.secondary" paragraph>
							브론즈5 난이도의 세 문제를 보여드려요.<br/>
							한 문제의 정답을 맞춰 주신 후, 검수 요청을 클릭해주세요. <br/>
							문제 풀이가 확인되고 나면 회원 가입이 완료 됩니다!
						</Typography>
					</Container>
				</Box>
				<Container sx={{py: 8}} maxWidth="md">
					<Grid container spacing={4}>
						{cards.map((card) => (
							<Grid item key={card} xs={12} sm={6} md={4}>
								<Card
									sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
								>
									<CardMedia
										component="img"
										sx={{
											// 16:9
											pt: '56.25%',
										}}
										image="https://source.unsplash.com/random"
										alt="random"
									/>
									<CardContent sx={{flexGrow: 1}}>
										<Typography gutterBottom variant="h5" component="h2">
											Heading
										</Typography>
										<Typography>
											This is a media card. You can use this section to describe the
											content.
										</Typography>
									</CardContent>
									<CardActions>
										<Button size="small">View</Button>
										<Button size="small">Edit</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
				<Container maxWidth="md">
					<Button
						variant="contained"
						sx={{mt: 3, mb: 2}}
					>
						확인하기
					</Button>
				</Container>
			</main>
		</ThemeProvider>
	);
}