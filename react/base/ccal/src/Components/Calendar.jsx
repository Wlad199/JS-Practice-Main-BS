//import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
//import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
//import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
//import Badge from '@mui/material/Badge';
////import CheckIcon from '@mui/icons-material/Check';
////import { CiCircleCheck } from "react-icons/ci";
//import { IoIosCheckmark } from "react-icons/io";
//import { PickersDay } from '@mui/x-date-pickers/PickersDay';
//import { useState } from 'react'
//import TextField from '@mui/material/TextField';

//export default function Calendar() {


//	const [highlightedDays, setHighlightedDays] = useState([1, 2, 13]);

//	return (
//		<LocalizationProvider dateAdapter={AdapterDayjs}>

//			<StaticDatePicker
//				orientation="portrait"

//				renderInput={(params) => {
//					<TextField {...params} />;
//				}}

//				renderDay={(day, _value, DayComponentProps) => {
//					const isSelected =
//						!DayComponentProps.outsideCurrentMonth &&
//						highlightedDays.indexOf(day.getDate()) >= 0;

//					return (
//						<Badge
//							key={day.toString()}
//							overlap='circular'
//							badgeContent={isSelected ? <IoIosCheckmark color='red' /> : undefined}
//						>
//							<PickersDay {...DayComponentProps} />
//						</Badge>
//					);
//				}}

//			/>

//		</LocalizationProvider>
//	)
//}


import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Badge from '@mui/material/Badge';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
//import CheckIcon from '@mui/icons-material/Check';
import { CiCircleCheck } from "react-icons/ci";
import Box from '@mui/material/Box';

const circle = (
	<Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
);

const Calendar = () => {
	const [value, setValue] = useState(new Date())
	const [highlightedDays, setHighlightedDays] = useState([1, 2, 13, 6])

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<StaticDatePicker
				// mask='____/__/__'
				variant='static'
				orientation='portrait'
				value={value}
				//disableFuture
				onChange={(newValue) => setValue(newValue)}
				renderInput={(params) => {
					<TextField {...params} />;
				}}
				renderDay={(day, _value, DayComponentProps) => {
					const isSelected =
						!DayComponentProps.outsideCurrentMonth &&
						highlightedDays.indexOf(day.getDate()) >= 0;

					return (
						//<Badge
						//	key={day.toString()}
						//	overlap='circular'
						//	badgeContent={isSelected ? <PickersDay /> : undefined}
						//>
						//	<PickersDay {...DayComponentProps} />
						//</Badge>
						<Badge color="secondary" overlap="circular" badgeContent=" ">
							{circle}
						</Badge>
					)
				}}
			/>
		</LocalizationProvider>
	)
}

export default Calendar;
