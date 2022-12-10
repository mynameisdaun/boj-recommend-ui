import React from 'react';
import {FormControl, FormLabel, Radio, RadioGroup} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const FeedBack = () => {

	return (
		<>
			<CssBaseline/>
			<main>
				<Box
					sx={{
						bgcolor: 'background.paper',
						pt: 8,
						pb: 6
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
							문제에 대한 의견을 부탁드려요
						</Typography>
						<Typography variant="h5" align="center" color="text.secondary" paragraph>
							반드시 일치하지는 않아도 좋아요<br/>가장 비슷하다고 생각되는 문장을 선택해 주세요
						</Typography>
						<FormControl>
							<RadioGroup
								aria-labelledby="demo-radio-buttons-group-label"
								defaultValue="1"
								name="radio-buttons-group"
							>
								<FormControlLabel value="1" control={<Radio/>} label="좋은 문제 인것 같아요"/>
								<FormControlLabel value="2" control={<Radio/>} label="기업 코딩 테스트에서 비슷한 유형을 보았어요"/>
								<FormControlLabel value="3" control={<Radio/>} label="실력 향상에 도움이 되었어요"/>
								<FormControlLabel value="4" control={<Radio/>} label="새로운 시각을 제공해 줬어요"/>
							</RadioGroup>
						</FormControl>
					</Container>
					<Button
						variant="contained"
						sx={{mt: 3, mb: 2}}
					>
						제출하기
					</Button>
				</Box>
			</main>
		</>
	);
};

export default FeedBack;